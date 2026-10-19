import { useLang } from '../../i18n'
import { globalX, home, keyNumbers } from '../../data/copy'
import { featuredStudioIds, projectById } from '../../data/projects'
import { news, newsCategoryLabel } from '../../data/news'
import { Arrow, Lines, Pill, scrollToId, tilt, useBento } from './shared'

export default function Hero() {
  const { t, pick, lang } = useLang()
  const { open, goContact } = useBento()
  const latest = news[0]
  const irr = globalX.stats[1]
  const kpis = [
    { ...keyNumbers.aum, tone: 'butter', big: true },
    { ...keyNumbers.portfolio, tone: 'mint' },
    { value: irr.value, label: irr.label, tone: 'sky' },
    { ...keyNumbers.tips, tone: 'lilac' },
    { ...keyNumbers.lips, tone: 'peach' },
    { ...keyNumbers.funds, tone: 'plain' },
  ]

  return (
    <section className="be-hero" id="top" aria-labelledby="be-hero-title">
      <div className="be-bento be-bento--hero">
        <div className="be-tile be-tile--ink be-hero__main">
          <div className="be-hero__shapes" aria-hidden>
            <span className="be-shape be-shape--circle" />
            <span className="be-shape be-shape--half" />
            <span className="be-shape be-shape--square" />
            <span className="be-shape be-shape--dot" />
          </div>
          <Pill tone="accent" solid>
            {pick(home.eyebrow)}
          </Pill>
          <h1 className="be-hero__title" id="be-hero-title">
            <Lines text={pick(home.title)} />
          </h1>
          <p className="be-hero__sub">{pick(home.sub)}</p>
          <div className="be-hero__ctas">
            <button className="be-btn be-btn--accent be-btn--lg" onClick={() => goContact('investment')}>
              {home.ctaPrimary} <Arrow />
            </button>
            <button className="be-btn be-btn--ghost-light be-btn--lg" onClick={() => scrollToId('studio')}>
              {home.ctaSecondary}
            </button>
          </div>
        </div>

        {kpis.map((k, i) => (
          <div key={i} className={`be-tile be-kpi be-tone--${k.tone}` + (k.big ? ' be-kpi--big' : '')}>
            <span className="be-kpi__no">{String(i + 1).padStart(2, '0')}</span>
            <strong className="be-kpi__value">{k.value}</strong>
            <span className="be-kpi__label">{pick(k.label)}</span>
          </div>
        ))}

        <div className="be-tile be-tile--plain be-hero__since">
          <span className="be-kpi__label">{pick(keyNumbers.since.label)}</span>
          <strong className="be-kpi__value">{keyNumbers.since.value}</strong>
          <span className="be-hero__period">{home.journeyPeriod}</span>
        </div>

        <div className="be-hero__cases">
          <div className="be-hero__cases-head">
            <Pill>{home.casesTitle}</Pill>
            <button className="be-link" onClick={() => scrollToId('cases')}>
              Cases <Arrow />
            </button>
          </div>
          <div className="be-hero__cases-row">
            {featuredStudioIds.map((id, i) => {
              const p = projectById(id)
              if (!p) return null
              return (
                <button key={id} className="be-tile be-case-mini be-tilt" {...tilt} onClick={() => open({ kind: 'project', id })}>
                  {p.image && <img src={p.image} alt="" loading={i === 0 ? 'eager' : 'lazy'} />}
                  <span className="be-case-mini__shade" aria-hidden />
                  <span className="be-case-mini__top">
                    <Pill tone="ink" solid>
                      {p.sector}
                    </Pill>
                    <span className="be-case-mini__year">{p.year}</span>
                  </span>
                  <span className="be-case-mini__bottom">
                    <strong>{lang === 'en' ? p.title.en ?? p.title.ko : p.title.ko}</strong>
                    {p.summary && <span>{pick(p.summary)}</span>}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {latest && (
          <button
            className="be-tile be-tone--peach be-hero__news"
            onClick={() => (latest.id ? open({ kind: 'news', id: latest.id }) : latest.url && window.open(latest.url, '_blank', 'noreferrer'))}
          >
            <span className="be-hero__news-top">
              <Pill tone="ink" solid>
                Latest
              </Pill>
              <span className="be-date">{latest.date}</span>
            </span>
            {latest.category && <span className="be-kicker">{newsCategoryLabel[latest.category]}</span>}
            <strong className="be-hero__news-title">{latest.title}</strong>
            <span className="be-link">
              {t('자세히 보기', 'Read more')} <Arrow />
            </span>
          </button>
        )}

        <div className="be-tile be-tone--lilac be-hero__next">
          <div className="be-hero__next-top">
            <Pill tone="ink" solid>
              {home.nextChapter.label}
            </Pill>
            <span className="be-kicker">{home.nextChapter.tag}</span>
          </div>
          <h3 className="be-hero__next-title">{home.nextChapter.title}</h3>
          <p className="be-hero__next-desc">{pick(home.nextChapter.desc)}</p>
          <div className="be-hero__next-pills">
            {home.nextChapter.pills.map((p) => (
              <div key={p.title.ko} className="be-chiplet">
                <strong>{pick(p.title)}</strong>
                <span>{pick(p.desc)}</span>
              </div>
            ))}
          </div>
          <button className="be-link" onClick={() => scrollToId('studio')}>
            {home.nextChapter.cta} <Arrow />
          </button>
        </div>
      </div>
    </section>
  )
}
