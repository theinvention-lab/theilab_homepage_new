import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './bento.css'
import { useLang } from '../../i18n'
import { site } from '../../data/site'
import Sheet from './Sheet'
import Hero from './Hero'
import Studio from './Studio'
import Capabilities from './Capabilities'
import Process from './Process'
import Cases from './Cases'
import Portfolio from './Portfolio'
import Team from './Team'
import News from './News'
import Contact from './Contact'
import { SheetContent, sheetLabel, sheetTone } from './details'
import { BentoContext, scrollToId, type InquiryType, type SheetTarget } from './shared'

const NAV = [
  { id: 'studio', label: 'Studio' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'process', label: 'Process' },
  { id: 'cases', label: 'Cases' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'team', label: 'Team' },
  { id: 'news', label: 'News' },
  { id: 'contact', label: 'Contact' },
]

export default function BentoConcept() {
  const { t, lang } = useLang()
  const [stack, setStack] = useState<SheetTarget[]>([])
  const [contactType, setContactType] = useState<InquiryType>('general')
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  const open = useCallback((target: SheetTarget) => setStack((s) => [...s, target].slice(-6)), [])
  const close = useCallback(() => setStack([]), [])
  const back = useCallback(() => setStack((s) => s.slice(0, -1)), [])
  const goContact = useCallback((type?: InquiryType) => {
    setStack([])
    if (type) setContactType(type)
    window.setTimeout(() => scrollToId('contact'), 20)
  }, [])
  const ctx = useMemo(() => ({ open, goContact }), [open, goContact])

  // 스크롤 스파이
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const y = window.scrollY + window.innerHeight * 0.35
      let cur = ''
      for (const n of NAV) {
        const el = document.getElementById(n.id)
        if (el && el.getBoundingClientRect().top + window.scrollY <= y) cur = n.id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 활성 탭이 모바일 네비 안에서 보이도록
  useEffect(() => {
    const el = navRef.current?.querySelector<HTMLElement>(`[data-nav="${active}"]`)
    const wrap = navRef.current
    if (el && wrap && wrap.scrollWidth > wrap.clientWidth) {
      wrap.scrollTo({ left: el.offsetLeft - wrap.clientWidth / 2 + el.offsetWidth / 2, behavior: 'smooth' })
    }
  }, [active])

  const top = stack[stack.length - 1]

  return (
    <BentoContext.Provider value={ctx}>
      <div className="be-root" lang={lang}>
        <a className="be-skip" href="#studio" onClick={(e) => (e.preventDefault(), scrollToId('studio'))}>
          Skip to content
        </a>
        <header className={'be-nav' + (scrolled ? ' is-scrolled' : '')}>
          <button className="be-nav__brand" onClick={() => scrollToId('top')} aria-label={site.name}>
            <span className="be-nav__logo" aria-hidden>
              <i />
              <i />
              <i />
              <i />
            </span>
            <span className="be-nav__name">
              {site.name}
            </span>
          </button>
          <nav className="be-nav__links" ref={navRef} aria-label="Sections">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                data-nav={n.id}
                className={active === n.id ? 'is-active' : ''}
                aria-current={active === n.id ? 'true' : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId(n.id)
                }}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button className="be-nav__cta" onClick={() => goContact('investment')}>
            <span className="be-nav__cta-dot" aria-hidden />
            {t('투자 제안 요청', 'Investment Proposal')}
          </button>
        </header>

        <main className="be-main">
          <Hero />
          <Studio />
          <Capabilities />
          <Process />
          <Cases />
          <Portfolio />
          <Team />
          <News />
          <Contact type={contactType} setType={setContactType} />
        </main>

        <Sheet
          open={!!top}
          onClose={close}
          onBack={stack.length > 1 ? back : undefined}
          label={top ? sheetLabel(top, lang) : ''}
          tone={top ? sheetTone(top) : undefined}
          contentKey={top ? `${top.kind}-${top.id}-${stack.length}` : ''}
        >
          {top && <SheetContent target={top} />}
        </Sheet>
      </div>
    </BentoContext.Provider>
  )
}
