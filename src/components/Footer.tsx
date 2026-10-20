import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../i18n'
import { site } from '../data/site'
import { Logo } from './Header'
import { Arrow } from './ui'

export default function Footer() {
  const { t, pick } = useLang()
  const { pathname } = useLocation()
  return (
    <>
      {pathname !== '/contact' && (
        <section className="cta-band">
          <div className="container cta-band__inner">
            <h2>
              Start Your Venture Project
              <br />
              with US!
            </h2>
            <Link to="/contact" className="btn btn--white btn--lg">
              {t('문의하기', 'Contact Us')} <Arrow />
            </Link>
          </div>
        </section>
      )}
      <footer className="footer">
        <div className="container footer__top">
          <Link to="/" aria-label="The Invention Lab 홈">
            <Logo light />
          </Link>
          <nav className="footer__nav">
            <Link to="/about">About</Link>
            <Link to="/capabilities/venture-studio">Capabilities</Link>
            <Link to="/cases">Cases</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <div className="container footer__bottom">
          <span className="footer__info">
            <span>{pick(site.hq).replace(/\n/g, ' ')}</span>
            <a href={`tel:${site.phone.replace(/-/g, '')}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </span>
          <span>© 2025 The Invention Lab. All rights reserved.</span>
        </div>
      </footer>
    </>
  )
}
