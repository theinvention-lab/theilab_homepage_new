import { useMemo, useState } from 'react'
import { useLang } from '../../i18n'
import { casesCopy } from '../../data/copy'
import { companies, companyCaseLink, countryEn, sectorEn, sortedCompanies } from '../../data/portfolio'
import { Pill, SectionHead, initials, toneAt, useBento } from './shared'

const sectors = Array.from(new Set(companies.map((c) => c.sector)))
  .map((s) => ({ s, n: companies.filter((c) => c.sector === s).length }))
  .sort((a, b) => b.n - a.n)
const countries = Array.from(new Set(companies.map((c) => c.country)))
const sectorTone = (s: string) => toneAt(sectors.findIndex((x) => x.s === s))
const PAGE = 24

export default function Portfolio() {
  const { t, lang } = useLang()
  const { open } = useBento()
  const [q, setQ] = useState('')
  const [sector, setSector] = useState<string>('all')
  const [country, setCountry] = useState<string>('all')
  const [limit, setLimit] = useState(PAGE)

  const name = (c: (typeof companies)[number]) => (lang === 'en' ? c.nameEn : c.nameKo)
  const sectorName = (s: string) => (lang === 'en' ? sectorEn[s] ?? s : s)

  const list = useMemo(() => {
    const k = q.trim().toLowerCase()
    return sortedCompanies.filter(
      (c) =>
        (sector === 'all' || c.sector === sector) &&
        (country === 'all' || c.country === country) &&
        (!k || [c.nameKo, c.nameEn, c.service, c.sector].some((v) => v.toLowerCase().includes(k))),
    )
  }, [q, sector, country])

  const half = Math.ceil(sortedCompanies.length / 2)
  const rows = [sortedCompanies.slice(0, half), sortedCompanies.slice(half)]
  const exits = companies.filter((c) => c.stage === 'Exit').length

  return (
    <section className="be-section" id="portfolio" aria-labelledby="be-pf-title">
      <SectionHead no="05" eyebrow="PORTFOLIO" id="be-pf-title" title="Portfolio" desc={<p>{t(casesCopy.portfolioDesc.ko, casesCopy.portfolioDesc.en)}</p>} />

      <div className="be-wall" aria-label="Portfolio logo wall">
        {rows.map((row, ri) => (
          <div key={ri} className={'be-marquee' + (ri ? ' be-marquee--rev' : '')}>
            <div className="be-marquee__inner">
              {[0, 1].map((dup) => (
                <div key={dup} className="be-marquee__group" aria-hidden={dup === 1}>
                  {row.map((c) => (
                    <button key={c.id} className="be-logo" tabIndex={dup ? -1 : 0} onClick={() => open({ kind: 'company', id: c.id })}>
                      <span className={`be-logo__dot be-tone--${sectorTone(c.sector)}`} aria-hidden />
                      {name(c)}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="be-bento be-bento--pfstats">
        <div className="be-tile be-tile--ink be-pfstat">
          <strong>{companies.length}</strong>
          <span>{t('포트폴리오사', 'Portfolio companies')}</span>
        </div>
        <div className="be-tile be-tone--mint be-pfstat">
          <strong>{sectors.length}</strong>
          <span>{t('분야', 'Sector')}</span>
        </div>
        <div className="be-tile be-tone--sky be-pfstat">
          <strong>{countries.length}</strong>
          <span>{t('국가', 'Location')}</span>
        </div>
        <div className="be-tile be-tone--butter be-pfstat">
          <strong>{exits}</strong>
          <span>Exit</span>
        </div>
      </div>

      <div className="be-tile be-tile--plain be-finder">
        <div className="be-finder__top">
          <label className="be-search">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
              <circle cx="8" cy="8" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <path d="m12.2 12.2 3.8 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <span className="be-sr">{t('검색', 'Search')}</span>
            <input
              type="search"
              value={q}
              placeholder={t('기업명, 서비스 검색', 'Search company or service')}
              onChange={(e) => {
                setQ(e.target.value)
                setLimit(PAGE)
              }}
            />
          </label>
          <div className="be-chips be-chips--tight" role="group" aria-label={t('국가', 'Location')}>
            <button className={'be-chip be-chip--sm' + (country === 'all' ? ' is-active' : '')} aria-pressed={country === 'all'} onClick={() => (setCountry('all'), setLimit(PAGE))}>
              All
            </button>
            {countries.map((c) => (
              <button key={c} className={'be-chip be-chip--sm' + (country === c ? ' is-active' : '')} aria-pressed={country === c} onClick={() => (setCountry(c), setLimit(PAGE))}>
                {lang === 'en' ? countryEn[c] ?? c : c}
              </button>
            ))}
          </div>
        </div>
        <div className="be-chips be-chips--scroll" role="group" aria-label={t('분야', 'Sector')}>
          <button className={'be-chip' + (sector === 'all' ? ' is-active' : '')} aria-pressed={sector === 'all'} onClick={() => (setSector('all'), setLimit(PAGE))}>
            All <small>{companies.length}</small>
          </button>
          {sectors.map(({ s, n }) => (
            <button key={s} className={'be-chip' + (sector === s ? ' is-active' : '')} aria-pressed={sector === s} onClick={() => (setSector(s), setLimit(PAGE))}>
              <span className={`be-chip__dot be-tone--${sectorTone(s)}`} aria-hidden />
              {sectorName(s)} <small>{n}</small>
            </button>
          ))}
        </div>

        <p className="be-finder__count" aria-live="polite">
          <strong>{list.length}</strong> / {companies.length}
        </p>

        <ul className="be-pfgrid">
          {list.slice(0, limit).map((c) => (
            <li key={c.id}>
              <button className="be-co" onClick={() => open({ kind: 'company', id: c.id })}>
                <span className="be-co__top">
                  <span className={`be-avatar be-tone--${sectorTone(c.sector)}`}>{initials(c.nameEn)}</span>
                  {(c.stage || companyCaseLink[c.nameKo]) && (
                    <span className="be-co__tags">
                      {c.stage && <Pill tone="accent">{c.stage}</Pill>}
                      {companyCaseLink[c.nameKo] && <Pill tone="peach">Case</Pill>}
                    </span>
                  )}
                </span>
                <span className="be-co__text">
                  <strong>{name(c)}</strong>
                  <small>
                    {sectorName(c.sector)} · {lang === 'en' ? countryEn[c.country] ?? c.country : c.country}
                  </small>
                </span>
              </button>
            </li>
          ))}
        </ul>
        {list.length === 0 && <p className="be-empty">—</p>}
        {list.length > limit && (
          <button className="be-btn be-btn--ink be-finder__more" onClick={() => setLimit((l) => l + PAGE * 2)}>
            {t('더 보기', 'Load more')} <small>+{list.length - limit}</small>
          </button>
        )}
      </div>
    </section>
  )
}
