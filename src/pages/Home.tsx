import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { Arrow, Reveal } from '../components/ui'
import { Lines } from '../components/Rich'
import { Thumb } from '../components/cards'
import { home, keyNumbers } from '../data/copy'
import { featuredStudioIds, projectById } from '../data/projects'
import { sortedCompanies, sectorEn, countryEn } from '../data/portfolio'
import { news, newsCategoryLabel } from '../data/news'

/** 좌측 라벨 + 우측 본문으로 이루어진 미니멀 섹션 행 */
function Row({ label, children, id }: { label: string; children: ReactNode; id?: string }) {
  return (
    <section className="m-row" id={id}>
      <div className="container m-row__inner">
        <h2 className="m-row__label">{label}</h2>
        <div className="m-row__body">{children}</div>
      </div>
    </section>
  )
}

export default function Home() {
  const { t, pick, lang } = useLang()
  const numbers = [keyNumbers.aum, keyNumbers.portfolio, keyNumbers.tips, keyNumbers.lips]
  const featuredCompanies = sortedCompanies.slice(0, 8)
  const latest = news.slice(0, 5)

  return (
    <>
      <section className="m-hero">
        <div className="container">
          <p className="m-hero__eyebrow">{pick(home.eyebrow)}</p>
          <h1 className="m-hero__title">
            <Lines text={pick(home.title)} />
          </h1>
          <div className="m-hero__foot">
            <p className="m-hero__sub">{pick(home.sub)}</p>
            <div className="m-hero__links">
              <Link to="/contact" className="m-link">
                {home.ctaPrimary} <Arrow />
              </Link>
              <Link to="/capabilities/venture-studio" className="m-link m-link--muted">
                {home.ctaSecondary} <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="m-numbers">
        <div className="container m-numbers__grid">
          {numbers.map((n) => (
            <div key={n.value} className="m-number">
              <strong>{n.value}</strong>
              <span>{pick(n.label)}</span>
            </div>
          ))}
        </div>
      </section>

      <Row label={home.journeyEyebrow}>
        <Reveal>
          <p className="m-statement">
            <Lines text={pick(home.journeyTitle)} />
          </p>
        </Reveal>
        <ol className="m-list m-list--numbered">
          {home.journey.map((j, i) => (
            <li key={j.title.ko}>
              <span className="m-list__no">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{pick(j.title)}</h3>
                <p>{pick(j.desc)}</p>
              </div>
            </li>
          ))}
        </ol>
        <Link to="/capabilities/venture-studio" className="m-feature">
          <span className="m-feature__label">
            {home.nextChapter.label} · {home.nextChapter.tag}
          </span>
          <span className="m-feature__title">{home.nextChapter.title}</span>
          <span className="m-feature__desc">{pick(home.nextChapter.desc)}</span>
          <span className="m-feature__pills">
            {home.nextChapter.pills.map((p) => (
              <span key={p.title.ko}>
                <b>{pick(p.title)}</b> {pick(p.desc)}
              </span>
            ))}
          </span>
          <span className="m-link">
            {home.nextChapter.cta} <Arrow />
          </span>
        </Link>
      </Row>

      <Row label={home.whatEyebrow}>
        <h3 className="m-title">{home.whatTitle}</h3>
        <p className="m-lead">{pick(home.whatDesc)}</p>
        <div className="m-table">
          {home.capabilities.map((c) => (
            <Link key={c.no} to={c.to} className="m-table__row">
              <span className="m-table__no">{c.no}</span>
              <span className="m-table__main">
                <strong>{c.title}</strong>
                <small>{c.sub}</small>
              </span>
              <span className="m-table__desc">
                {pick(c.desc)}
                <span className="m-table__items">
                  {c.items.map((it) => (
                    <span key={it.ko}>{pick(it)}</span>
                  ))}
                </span>
              </span>
              <span className="m-table__arrow" aria-hidden>
                <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </Row>

      <Row label={home.howEyebrow}>
        <h3 className="m-title">{home.howTitle}</h3>
        <p className="m-lead">
          <Lines text={pick(home.howDesc)} />
        </p>
        <div className="m-core">
          {home.core.map((c) => (
            <div key={c.k}>
              <span>{c.k}</span>
              <strong>{c.v}</strong>
            </div>
          ))}
        </div>
        <p className="m-caption">{home.coreCenter}</p>
      </Row>

      <Row label="CASES">
        <div className="m-head-line">
          <h3 className="m-title">{home.casesTitle}</h3>
          <Link to="/cases" className="m-link">
            {t('전체 보기', 'See All')} <Arrow />
          </Link>
        </div>
        <div className="m-cases">
          {featuredStudioIds.map((id) => {
            const p = projectById(id)
            if (!p) return null
            return (
              <Link key={id} to={`/cases/project/${id}`} className="m-case">
                <Thumb src={p.image} label={pick(p.title)} seed={id} />
                <span className="m-case__meta">{p.sector}</span>
                <strong>{pick(p.title)}</strong>
                <span className="m-case__desc">{pick(p.summary)}</span>
              </Link>
            )
          })}
        </div>
      </Row>

      <Row label="PORTFOLIO">
        <div className="m-head-line">
          <h3 className="m-title">Portfolio</h3>
          <Link to="/cases#portfolio" className="m-link">
            {t('포트폴리오 더보기', 'Load more companies')} <Arrow />
          </Link>
        </div>
        <ul className="m-companies">
          {featuredCompanies.map((c) => (
            <li key={c.id}>
              <Link to={`/cases/portfolio/${c.id}`}>
                <strong>{lang === 'en' ? c.nameEn : c.nameKo}</strong>
                <span>{lang === 'en' ? sectorEn[c.sector] ?? c.sector : c.sector}</span>
                <span>{lang === 'en' ? countryEn[c.country] ?? c.country : c.country}</span>
                <em>{c.stage}</em>
              </Link>
            </li>
          ))}
        </ul>
      </Row>

      <Row label="INSIGHTS">
        <div className="m-head-line">
          <h3 className="m-title">News</h3>
          <Link to="/insights" className="m-link">
            {t('전체 보기', 'See All')} <Arrow />
          </Link>
        </div>
        <ul className="m-news">
          {latest.map((n) => {
            const inner = (
              <>
                <time>{n.date}</time>
                <strong>{n.title}</strong>
                <span>{n.category ? newsCategoryLabel[n.category] : ''}</span>
              </>
            )
            return (
              <li key={(n.id ?? n.url) + n.date}>
                {n.id ? (
                  <Link to={`/insights/press/${n.id}`}>{inner}</Link>
                ) : (
                  <a href={n.url} target="_blank" rel="noreferrer">
                    {inner}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </Row>
    </>
  )
}
