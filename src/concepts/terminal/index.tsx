import { useCallback, useEffect, useMemo, useState } from 'react'
import './terminal.css'
import { useLang } from '../../i18n'
import { news } from '../../data/news'
import { site } from '../../data/site'
import { PANELS, scrollToPanel, type Target } from './model'
import { Ctx } from './ui'
import Drawer from './Drawer'
import Palette from './Palette'
import { OverviewPanel, PlatformPanel, ThesisPanel } from './Overview'
import { CapabilitiesPanel } from './Capabilities'
import { ScreenerPanel } from './Screener'
import { ContactPanel, EcosystemPanel, NewsPanel, ProjectsPanel, TeamPanel } from './Feeds'

const pad = (n: number) => String(n).padStart(2, '0')

function Clock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(t)
  }, [])
  return (
    <time className="te-clock" dateTime={now.toISOString()}>
      <span className="te-dim">{`${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`}</span> {`${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`}
    </time>
  )
}

function Ticker({ onOpen }: { onOpen: (t: Target) => void }) {
  const items = news.slice(0, 12)
  const go = (n: (typeof items)[number]) => {
    scrollToPanel('news')
    if (n.id != null) onOpen({ kind: 'news', id: n.id })
  }
  const row = (dup: boolean) =>
    items.map((n, i) => (
      <button key={(dup ? 'd' : '') + i} type="button" className="te-ticker__item" onClick={() => go(n)} tabIndex={dup ? -1 : 0} aria-hidden={dup || undefined}>
        <span className="te-ticker__d">{n.date.slice(2).replace(/-/g, '.')}</span>
        <span>{n.title}</span>
        <span className="te-ticker__sep" aria-hidden>
          ◆
        </span>
      </button>
    ))
  return (
    <div className="te-ticker" aria-label="NEWS TICKER">
      <span className="te-ticker__tag">
        <span className="te-blink" aria-hidden>
          ●
        </span>{' '}
        WIRE
      </span>
      <div className="te-ticker__viewport">
        <div className="te-ticker__track">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  )
}

export default function TerminalConcept() {
  const { lang, setLang } = useLang()
  const [stack, setStack] = useState<Target[]>([])
  const [palette, setPalette] = useState(false)
  const [active, setActive] = useState<string>('overview')

  const open = useCallback((t: Target) => setStack((s) => [...s, t].slice(-12)), [])
  const close = useCallback(() => setStack([]), [])
  const back = useCallback(() => setStack((s) => s.slice(0, -1)), [])
  const ctx = useMemo(() => ({ open, openPalette: () => setPalette(true) }), [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPalette((p) => !p)
        return
      }
      if (e.key === 'Escape') {
        if (palette) setPalette(false)
        else if (stack.length) close()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [palette, stack.length, close])

  // scroll-spy for the index rail
  useEffect(() => {
    const els = PANELS.map((p) => document.getElementById('te-' + p.id)).filter((x): x is HTMLElement => !!x)
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (vis[0]) setActive(vis[0].target.id.replace('te-', ''))
      },
      { rootMargin: '-80px 0px -60% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <Ctx.Provider value={ctx}>
      <div className="te-root">
        <a className="te-skip" href="#te-main" onClick={(e) => (e.preventDefault(), scrollToPanel('overview'))}>
          SKIP TO CONTENT
        </a>
        <header className="te-top">
          <div className="te-status">
            <span className="te-brand">
              <span className="te-brand__mark" aria-hidden />
              TIL://VENTURE-STUDIO
            </span>
            <span className="te-status__name">{lang === 'en' ? site.name : site.nameKo}</span>
            <span className="te-status__sp" />
            <Clock />
            <span className="te-status__lang" role="group" aria-label="LANG">
              <button type="button" className={lang === 'ko' ? 'is-on' : ''} aria-pressed={lang === 'ko'} onClick={() => setLang('ko')}>
                KR
              </button>
              <button type="button" className={lang === 'en' ? 'is-on' : ''} aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
                EN
              </button>
            </span>
            <button type="button" className="te-search" onClick={() => setPalette(true)}>
              <span aria-hidden>⌕</span>
              <span className="te-search__t">SEARCH</span>
              <kbd>⌘K</kbd>
            </button>
          </div>
          <Ticker onOpen={open} />
          <nav className="te-mnav" aria-label="PANELS">
            {PANELS.map((p) => (
              <button key={p.id} type="button" className={active === p.id ? 'is-on' : ''} onClick={() => scrollToPanel(p.id)}>
                {p.code} {p.label}
              </button>
            ))}
          </nav>
        </header>

        <div className="te-shell">
          <nav className="te-rail" aria-label="PANELS">
            <p className="te-rail__h">INDEX</p>
            <ol>
              {PANELS.map((p) => (
                <li key={p.id}>
                  <button type="button" className={active === p.id ? 'is-on' : ''} aria-current={active === p.id ? 'true' : undefined} onClick={() => scrollToPanel(p.id)}>
                    <span className="te-rail__c">{p.code}</span>
                    {p.label}
                  </button>
                </li>
              ))}
            </ol>
            <div className="te-rail__foot">
              <p>
                <span className="te-green">●</span> SYS OK
              </p>
              <p>LANG {lang === 'en' ? 'EN' : 'KR'}</p>
              <button type="button" className="te-btn te-btn--ghost te-btn--xs" onClick={() => setPalette(true)}>
                ⌘K / CTRL+K
              </button>
            </div>
          </nav>

          <main id="te-main" className="te-main">
            <OverviewPanel />
            <ThesisPanel />
            <PlatformPanel />
            <CapabilitiesPanel />
            <ScreenerPanel />
            <ProjectsPanel />
            <div className="te-duo">
              <TeamPanel />
              <EcosystemPanel />
            </div>
            <NewsPanel />
            <ContactPanel />
            <footer className="te-foot">
              <span>
                {site.nameKo} · {site.name}
              </span>
              <span className="te-dim">— EOF —</span>
            </footer>
          </main>
        </div>

        {palette && <Palette onClose={() => setPalette(false)} onOpen={open} />}
        <Drawer stack={stack} onClose={close} onBack={back} onOpen={open} />
      </div>
    </Ctx.Provider>
  )
}
