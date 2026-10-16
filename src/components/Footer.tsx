import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../i18n'
import { site } from '../data/site'
import { Logo } from './Header'
import { Arrow, MaybeLink } from './ui'
import { Lines } from './Rich'

export default function Footer() {
  const { t, pick } = useLang()
  const { pathname } = useLocation()
  return (
    <>
      {pathname !== '/contact' && (
      <section className="cta-band">
        <div className="cta-band__glow" aria-hidden />
        <div className="container cta-band__inner">
          <h2>Start Your Venture Project with Us!</h2>
          <p>{t('더인벤션랩과 함께 비즈니스의 새로운 가능성을 설계하세요.', 'Design new possibilities for your business with The Invention Lab.')}</p>
          <Link to="/contact" className="btn btn--white btn--lg">
            {t('문의하기', 'Contact Us')} <Arrow />
          </Link>
        </div>
      </section>
      )}
      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <Logo light />
            <p className="footer__addr">
              <strong>HQ</strong>
              <br />
              <Lines text={pick(site.hq)} />
            </p>
            <p className="footer__addr">
              <strong>Vietnam</strong>
              <br />
              <Lines text={site.vietnam} />
            </p>
            <p className="footer__addr">
              <a href={`tel:${site.phone.replace(/-/g, '')}`}>{site.phone}</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <div className="footer__col">
            <h4>Capabilities</h4>
            <Link to="/capabilities/venture-studio">Venture Studio</Link>
            <Link to="/capabilities/new-biz-design">New Business Design</Link>
            <Link to="/capabilities/venture-building">Venture Scale-up & MGT</Link>
            <Link to="/capabilities/strategic-partnership">Strategic Partnership</Link>
            <Link to="/capabilities/global-expansion">Global Expansion</Link>
          </div>
          <div className="footer__col">
            <h4>Insights</h4>
            <Link to="/insights">News</Link>
            <MaybeLink href={site.links.youtube}>Youtube</MaybeLink>
            <MaybeLink href={site.links.blog}>Blog</MaybeLink>
          </div>
          <div className="footer__col">
            <h4>Family Companies</h4>
            <MaybeLink href={site.links.sheVentures}>SheVentures</MaybeLink>
            <MaybeLink href={site.links.acdc}>AC:DC</MaybeLink>
          </div>
        </div>
        <div className="container footer__bottom">
          <span>© 2025 The Invention Lab. All rights reserved.</span>
          <span className="footer__social">
            <MaybeLink href={site.links.facebook}>Facebook</MaybeLink>
            <MaybeLink href={site.links.youtube}>Youtube</MaybeLink>
          </span>
        </div>
      </footer>
    </>
  )
}
