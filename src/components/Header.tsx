import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLang } from '../i18n'

const capabilityLinks = [
  { to: '/capabilities/venture-studio', label: 'Venture Studio' },
  { to: '/capabilities/new-biz-design', label: 'New Business Design' },
  { to: '/capabilities/venture-building', label: 'Venture Scale-up & MGT' },
  { to: '/capabilities/strategic-partnership', label: 'Strategic Partnership' },
  { to: '/capabilities/global-expansion', label: 'Global Expansion' },
]

export function Logo({ light }: { light?: boolean }) {
  return (
    <span className={'logo' + (light ? ' logo--light' : '')}>
      <span className="logo__mark" aria-hidden>
        TIL
      </span>
      <span className="logo__text">
        The Invention Lab
        <small>더인벤션랩</small>
      </span>
    </span>
  )
}

export default function Header() {
  const { lang, setLang, t } = useLang()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const capActive = location.pathname.startsWith('/capabilities')

  return (
    <header className={'header' + (scrolled || open ? ' is-solid' : '')}>
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label="The Invention Lab 홈">
          <Logo />
        </Link>

        <nav className={'nav' + (open ? ' is-open' : '')} aria-label="주 메뉴">
          <NavLink to="/about" className="nav__link">
            About
          </NavLink>
          <div className="nav__group">
            <NavLink to="/capabilities/venture-studio" className={'nav__link' + (capActive ? ' active' : '')}>
              Capabilities
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden className="nav__caret">
                <path d="M2 4l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </NavLink>
            <div className="nav__dropdown">
              {capabilityLinks.map((l) => (
                <NavLink key={l.to} to={l.to} className="nav__sublink">
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/cases" className="nav__link">
            Cases
          </NavLink>
          <NavLink to="/insights" className="nav__link">
            Insights
          </NavLink>

          <div className="nav__mobile-extra">
            <Link to="/contact" className="btn btn--ghost">
              {t('문의하기', 'Contact')}
            </Link>
            <Link to="/contact?type=investment" className="btn btn--primary">
              {t('투자 제안 요청', 'Request Investment')}
            </Link>
          </div>
        </nav>

        <div className="header__actions">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button className={lang === 'ko' ? 'is-active' : ''} onClick={() => setLang('ko')}>
              KR
            </button>
            <button className={lang === 'en' ? 'is-active' : ''} onClick={() => setLang('en')}>
              EN
            </button>
          </div>
          <Link to="/contact" className="btn btn--ghost btn--sm hide-mobile">
            {t('문의하기', 'Contact')}
          </Link>
          <Link to="/contact?type=investment" className="btn btn--primary btn--sm hide-mobile">
            {t('투자 제안 요청', 'Request Investment')}
          </Link>
          <button className={'burger' + (open ? ' is-open' : '')} aria-label="메뉴 열기" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
