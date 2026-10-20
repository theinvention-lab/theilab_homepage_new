import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { home, studio } from '../data/copy'
import { Arrow } from './ui'

/** 빨간색으로 강조할 키워드 (색만 바꾸며 문구는 원문 그대로) */
const KEY = /^(Venture|Studio|Studio로서|벤처|빌딩|구조와|과정으로|체계적으로|ventures|structure|process,)/i

const clamp01 = (v: number) => Math.min(1, Math.max(0, v))
const ease = (t: number) => 1 - Math.pow(1 - t, 3)

/** 키워드를 타이핑하듯 쓰고 지우기를 반복. 시작 전에는 커서만 깜박임 */
function TypeSlot({ active, words }: { active: boolean; words: string[] }) {
  const [text, setText] = useState('')
  useEffect(() => {
    if (!active) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    let i = 0
    let n = 0
    let deleting = false
    let timer = 0
    const tick = () => {
      const w = words[i]
      if (reduce) {
        setText(w)
        i = (i + 1) % words.length
        timer = window.setTimeout(tick, 2200)
        return
      }
      if (!deleting) {
        n++
        setText(w.slice(0, n))
        if (n >= w.length) {
          deleting = true
          timer = window.setTimeout(tick, 1700)
        } else timer = window.setTimeout(tick, 70 + Math.random() * 60)
      } else {
        n--
        setText(w.slice(0, n))
        if (n <= 0) {
          deleting = false
          i = (i + 1) % words.length
          timer = window.setTimeout(tick, 380)
        } else timer = window.setTimeout(tick, 36)
      }
    }
    timer = window.setTimeout(tick, 200)
    return () => window.clearTimeout(timer)
  }, [active, words])

  return (
    <span className={'mh__slot' + (active ? ' is-on' : '')} aria-label={words.join(', ')}>
      <span className="mh__typed" aria-hidden>
        {text || '\u200b'}
      </span>
      <i className="mh__caret" aria-hidden />
    </span>
  )
}

/**
 * 1) 첫 화면: 흰 배경 정중앙(가운데 정렬)에 영문 타이틀만 표시, 마지막 자리엔 커서가 깜박임 (헤더 숨김)
 * 2) 스크롤: 타이틀이 좌상단 본래 자리로 이동하며 메인 화면이 드러나고, 키워드가 타이핑됨
 * 3) 계속 스크롤: 매니페스토 문장이 한 단어씩 채워지고 CTA가 나타남
 */
export default function ManifestoHero() {
  const { pick, t } = useLang()
  const sectionRef = useRef<HTMLElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const slotLineRef = useRef<HTMLSpanElement>(null)
  const [typing, setTyping] = useState(false)
  const typingRef = useRef(false)

  const statements = [
    pick(home.sub),
    t('더인벤션랩은 우연이 아닌 구조와 과정으로 스타트업을 만듭니다.', 'The Invention Lab builds ventures through structure and process, not chance.'),
    pick(studio.desc),
  ]
  const words = statements.flatMap((s, si) => s.split(/\s+/).map((w) => ({ w, si })))
  const total = words.length

  useLayoutEffect(() => {
    const section = sectionRef.current
    const sticky = stickyRef.current
    const title = titleRef.current
    const text = textRef.current
    const slotLine = slotLineRef.current
    if (!section || !sticky || !title || !text || !slotLine) return
    const root = document.documentElement
    let raf = 0
    // 변형 전 타이틀의 실제 글자 영역 (리사이즈/폰트 로딩 때만 측정)
    const box = { x: 0, y: 0, w: 1, h: 1 }
    const measure = () => {
      const prev = title.style.transform
      title.style.transform = 'none'
      const base = sticky.getBoundingClientRect()
      // 가로는 단어(가장 긴 줄의 끝), 세로는 타이틀 박스 기준 (단어 등장 애니메이션 영향 제외)
      let r = -Infinity
      title.querySelectorAll<HTMLElement>('.mh__tw').forEach((el) => {
        r = Math.max(r, el.getBoundingClientRect().right)
      })
      const tb = title.getBoundingClientRect()
      box.x = tb.left - base.left
      box.y = tb.top - base.top
      box.w = Math.max(1, r - tb.left)
      box.h = Math.max(1, tb.height)
      title.style.transform = prev
    }

    const update = () => {
      raf = 0
      const rect = section.getBoundingClientRect()
      const range = section.offsetHeight - window.innerHeight
      const p = range > 0 ? clamp01(-rect.top / range) : 1

      // ① 인트로 → 메인 (0 ~ 0.16): 정중앙 → 본래 자리
      const intro = ease(clamp01(p / 0.16))
      const W = sticky.clientWidth
      const H = sticky.clientHeight
      const scale0 = Math.min(1.12, (W * 0.86) / box.w)
      const dx = (W - box.w * scale0) / 2 - box.x
      const dy = (H - box.h * scale0) / 2 - box.y
      const k = 1 - intro
      title.style.transform = `translate(${(dx * k).toFixed(1)}px, ${(dy * k).toFixed(1)}px) scale(${(1 + (scale0 - 1) * k).toFixed(4)})`
      // 인트로에서는 커서 줄도 가운데 정렬
      const slotW = (slotLine.firstElementChild as HTMLElement | null)?.offsetWidth ?? 0
      slotLine.style.transform = `translateX(${(((box.w - slotW) / 2) * k).toFixed(1)}px)`

      // 스크롤을 시작하면 키워드 타이핑 시작
      if (p > 0.01 && !typingRef.current) {
        typingRef.current = true
        setTyping(true)
      }

      // ② 단어 채우기 (0.24 ~ 0.84)
      const lit = clamp01((p - 0.24) / 0.6) * (total + 2)
      text.style.setProperty('--lit', lit.toFixed(2))
      section.style.setProperty('--intro', intro.toFixed(3))
      section.style.setProperty('--p', p.toFixed(3))

      // 인트로 동안 헤더 숨김
      if (p < 0.06) root.setAttribute('data-intro', '1')
      else root.removeAttribute('data-intro')
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    const onResize = () => {
      measure()
      onScroll()
    }
    measure()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    // 웹폰트 로딩 후 크기 재계산
    document.fonts?.ready.then(onResize).catch(() => {})
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (raf) cancelAnimationFrame(raf)
      root.removeAttribute('data-intro')
    }
  }, [total])

  // 언어 변경 시 레이아웃 재계산
  useEffect(() => {
    window.dispatchEvent(new Event('resize'))
  }, [pick])

  const lead = home.titleLead.split(' ')

  return (
    <section className="mh" ref={sectionRef} aria-label="The Invention Lab">
      <div className="mh__sticky" ref={stickyRef}>
        <div className="container mh__inner">
          <h1 className="mh__title" ref={titleRef}>
            <span className="mh__line">
              {lead.map((w, wi) => (
                <span key={wi} className="mh__tw" style={{ animationDelay: `${200 + wi * 90}ms` }}>
                  {w}
                  {wi < lead.length - 1 ? ' ' : ''}
                </span>
              ))}
            </span>
            <span className="mh__line mh__line--slot" ref={slotLineRef}>
              <TypeSlot active={typing} words={home.titleKeywords} />
            </span>
          </h1>
          <div className="mh__reveal">
            <div className="mh__text" ref={textRef}>
              {statements.map((_, si) => (
                <p key={si}>
                  {words
                    .map((x, i) => ({ ...x, i }))
                    .filter((x) => x.si === si)
                    .map((x) => (
                      <span key={x.i} className={'mh__w' + (KEY.test(x.w) ? ' is-key' : '')} style={{ ['--i' as string]: x.i }}>
                        {x.w}{' '}
                      </span>
                    ))}
                </p>
              ))}
            </div>
            <div className="mh__ctas">
              <Link to="/contact" className="btn btn--primary btn--lg">
                {home.ctaPrimary} <Arrow />
              </Link>
              <Link to="/capabilities/venture-studio" className="m-link">
                {home.ctaSecondary} <Arrow />
              </Link>
            </div>
          </div>
        </div>
        <div className="mh__scroll" aria-hidden>
          <i />
        </div>
      </div>
    </section>
  )
}
