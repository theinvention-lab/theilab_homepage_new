import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { home, studio } from '../data/copy'
import { Arrow } from './ui'

/** 빨간색으로 강조할 키워드 (색만 바꾸며 문구는 원문 그대로) */
const KEY = /^(Venture|Studio|Studio로서|벤처|빌딩|구조와|과정으로|체계적으로|ventures|structure|process,|Venture-?Building)/i

/**
 * 스크롤에 따라 문장이 한 단어씩 채워지는 매니페스토형 히어로.
 * 섹션 높이만큼 스크롤하는 동안 내부가 화면에 고정(sticky)되고,
 * 진행도(--lit)에 따라 각 단어의 진하기가 바뀝니다.
 */
export default function ManifestoHero() {
  const { pick, t } = useLang()
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const statements = [
    pick(home.sub),
    t('더인벤션랩은 우연이 아닌 구조와 과정으로 스타트업을 만듭니다.', 'The Invention Lab builds ventures through structure and process, not chance.'),
    pick(studio.desc),
  ]
  const words = statements.flatMap((s, si) => s.split(/\s+/).map((w, wi) => ({ w, si, wi })))
  const total = words.length

  // 스크롤 진행도 → --lit / --p
  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current
    if (!section || !text) return
    let raf = 0
    const update = () => {
      raf = 0
      const rect = section.getBoundingClientRect()
      const range = section.offsetHeight - window.innerHeight
      const p = range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 1
      // 0.08 ~ 0.82 구간에서 단어가 채워짐
      const lit = Math.min(1, Math.max(0, (p - 0.08) / 0.74)) * (total + 2)
      text.style.setProperty('--lit', lit.toFixed(2))
      section.style.setProperty('--p', p.toFixed(3))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [total])

  // 배경 그래픽: 숨 쉬듯 일렁이는 빨간 동심원
  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let visible = true
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (time: number) => {
      const p = parseFloat(getComputedStyle(section).getPropertyValue('--p') || '0') || 0
      const tt = time / 1000
      ctx.clearRect(0, 0, w, h)
      const mobile = w < 700
      const cx = mobile ? w * 0.72 : w * 0.76
      const cy = mobile ? h * 0.3 : h * 0.46
      const base = Math.min(w, h) * (mobile ? 0.34 : 0.3) * (1 + p * 0.5)

      // 부드러운 붉은 광원
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, base * 1.6)
      g.addColorStop(0, 'rgba(232, 50, 43, 0.22)')
      g.addColorStop(0.5, 'rgba(232, 50, 43, 0.08)')
      g.addColorStop(1, 'rgba(232, 50, 43, 0)')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(cx, cy, base * 1.6, 0, Math.PI * 2)
      ctx.fill()

      // 일렁이는 링
      const rings = 14
      for (let r = 0; r < rings; r++) {
        const k = r / rings
        const radius = base * (0.25 + k * 1.05)
        ctx.beginPath()
        const steps = 120
        for (let s = 0; s <= steps; s++) {
          const a = (s / steps) * Math.PI * 2
          const wob =
            Math.sin(a * 3 + tt * 0.9 + r * 0.45) * 0.035 +
            Math.sin(a * 5 - tt * 0.6 + r * 0.3) * 0.02 +
            Math.sin(tt * 0.8 + r * 0.6) * 0.015
          const rr = radius * (1 + wob)
          const x = cx + Math.cos(a) * rr
          const y = cy + Math.sin(a) * rr
          if (s === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.closePath()
        ctx.strokeStyle = `rgba(232, 50, 43, ${0.55 - k * 0.42})`
        ctx.lineWidth = r === 0 ? 1.6 : 1
        ctx.stroke()
      }

      // 중심 점
      ctx.beginPath()
      ctx.arc(cx, cy, 5 + Math.sin(tt * 1.6) * 1.5, 0, Math.PI * 2)
      ctx.fillStyle = '#e8322b'
      ctx.fill()

      if (!reduce && visible) raf = requestAnimationFrame(draw)
    }

    const io = new IntersectionObserver((entries) => {
      visible = entries.some((e) => e.isIntersecting)
      if (visible && !reduce && !raf) raf = requestAnimationFrame(draw)
      if (!visible && raf) {
        cancelAnimationFrame(raf)
        raf = 0
      }
    })
    io.observe(section)
    resize()
    const onResize = () => {
      resize()
      if (reduce) draw(0)
    }
    window.addEventListener('resize', onResize)
    if (reduce) draw(0)
    else raf = requestAnimationFrame(draw)

    return () => {
      io.disconnect()
      window.removeEventListener('resize', onResize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const titleLines = pick(home.title).split('\n')

  return (
    <section className="mh" ref={sectionRef} aria-label="The Invention Lab manifesto">
      <div className="mh__sticky">
        <canvas className="mh__canvas" ref={canvasRef} aria-hidden />
        <div className="container mh__inner">
          <p className="mh__eyebrow">
            <span className="mh__dot" aria-hidden /> {pick(home.eyebrow)}
          </p>
          <h1 className="mh__title">
            {titleLines.map((line, li) => (
              <span key={li} className="mh__line">
                {line.split(' ').map((w, wi) => (
                  <span key={wi} className={'mh__tw' + (li === titleLines.length - 1 ? ' is-key' : '')} style={{ animationDelay: `${(li * 4 + wi) * 70}ms` }}>
                    {w}{' '}
                  </span>
                ))}
              </span>
            ))}
          </h1>
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
          <div className="mh__scroll" aria-hidden>
            <span>Scroll</span>
            <i />
          </div>
        </div>
      </div>
    </section>
  )
}
