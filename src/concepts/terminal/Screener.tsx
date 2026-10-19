import { useMemo, useState } from 'react'
import { useLang } from '../../i18n'
import { casesCopy } from '../../data/copy'
import { companies, type Company } from '../../data/portfolio'
import { companyAlt, companyName, countryLabel, projectsForCompany, sectorLabel } from './model'
import { Chip, Panel, useTerminal } from './ui'

type SortKey = 'id' | 'name' | 'country' | 'sector' | 'service' | 'stage'

const COLS: { key: SortKey; label: string; cls?: string }[] = [
  { key: 'id', label: '#', cls: 'te-col-id' },
  { key: 'name', label: 'NAME' },
  { key: 'country', label: 'COUNTRY' },
  { key: 'sector', label: 'SECTOR' },
  { key: 'service', label: 'SERVICE' },
  { key: 'stage', label: 'STAGE' },
]

const countries = [...new Set(companies.map((c) => c.country))]

export function ScreenerPanel() {
  const { lang, pick } = useLang()
  const { open } = useTerminal()
  const [q, setQ] = useState('')
  const [sector, setSector] = useState<string | null>(null)
  const [country, setCountry] = useState<string | null>(null)
  const [sort, setSort] = useState<{ key: SortKey; dir: 1 | -1 }>({ key: 'id', dir: 1 })

  const query = q.trim().toLowerCase()
  const matchQ = (c: Company) =>
    !query || [c.nameKo, c.nameEn, c.service, c.sector, c.country, c.stage].join(' ').toLowerCase().includes(query)

  /** sector counts reflect the current country + search filters */
  const sectorCounts = useMemo(() => {
    const m = new Map<string, number>()
    companies.filter((c) => (!country || c.country === country) && matchQ(c)).forEach((c) => m.set(c.sector, (m.get(c.sector) ?? 0) + 1))
    return [...m.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'ko'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country, query])
  const maxCount = Math.max(1, ...sectorCounts.map((s) => s[1]))

  const rows = useMemo(() => {
    const val = (c: Company): string | number => {
      switch (sort.key) {
        case 'id':
          return c.id
        case 'name':
          return companyName(c, lang)
        case 'country':
          return countryLabel(c.country, lang)
        case 'sector':
          return sectorLabel(c.sector, lang)
        case 'service':
          return c.service || '￿'
        case 'stage':
          return c.stage || '￿'
      }
    }
    return companies
      .filter((c) => (!sector || c.sector === sector) && (!country || c.country === country) && matchQ(c))
      .sort((a, b) => {
        const x = val(a)
        const y = val(b)
        const r = typeof x === 'number' && typeof y === 'number' ? x - y : String(x).localeCompare(String(y), lang === 'en' ? 'en' : 'ko')
        return r * sort.dir || a.id - b.id
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sector, country, query, sort, lang])

  const toggleSort = (key: SortKey) => setSort((s) => (s.key === key ? { key, dir: (s.dir * -1) as 1 | -1 } : { key, dir: 1 }))
  const reset = () => {
    setQ('')
    setSector(null)
    setCountry(null)
    setSort({ key: 'id', dir: 1 })
  }

  return (
    <Panel id="screener" code="05" title="PORTFOLIO SCREENER" meta={`${rows.length} / ${companies.length} ROWS`}>
      <p className="te-panel__intro">{pick(casesCopy.portfolioDesc)}</p>
      <div className="te-screener">
        <aside className="te-screener__side">
          <div className="te-field">
            <label htmlFor="te-scr-q" className="te-label">
              SEARCH
            </label>
            <div className="te-input">
              <span aria-hidden>/</span>
              <input id="te-scr-q" value={q} onChange={(e) => setQ(e.target.value)} placeholder="name · service · sector" spellCheck={false} />
              {q && (
                <button type="button" onClick={() => setQ('')} aria-label="CLEAR">
                  ×
                </button>
              )}
            </div>
          </div>
          <div className="te-field">
            <span className="te-label">FILTER · COUNTRY</span>
            <div className="te-chips">
              <Chip active={!country} onClick={() => setCountry(null)} count={companies.length}>
                ALL
              </Chip>
              {countries.map((c) => (
                <Chip key={c} active={country === c} onClick={() => setCountry(country === c ? null : c)} count={companies.filter((x) => x.country === c).length}>
                  {countryLabel(c, lang)}
                </Chip>
              ))}
            </div>
          </div>
          <div className="te-field">
            <span className="te-label">FILTER · SECTOR — COMPANIES PER SECTOR</span>
            <ul className="te-bars">
              {sectorCounts.map(([s, n]) => (
                <li key={s}>
                  <button type="button" className={sector === s ? 'is-on' : ''} aria-pressed={sector === s} onClick={() => setSector(sector === s ? null : s)}>
                    <span className="te-bars__l">{sectorLabel(s, lang)}</span>
                    <span className="te-bars__track">
                      <span className="te-bars__fill" style={{ width: (n / maxCount) * 100 + '%' }} />
                    </span>
                    <span className="te-bars__n">{n}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button type="button" className="te-btn te-btn--ghost te-btn--block" onClick={reset}>
            RESET FILTERS
          </button>
        </aside>

        <div className="te-screener__main">
          <div className="te-tablewrap te-tablewrap--tall">
            <table className="te-table te-table--scr">
              <thead>
                <tr>
                  {COLS.map((c) => (
                    <th key={c.key} scope="col" className={c.cls} aria-sort={sort.key === c.key ? (sort.dir === 1 ? 'ascending' : 'descending') : 'none'}>
                      <button type="button" onClick={() => toggleSort(c.key)}>
                        {c.label}
                        <span className="te-sort" aria-hidden>
                          {sort.key === c.key ? (sort.dir === 1 ? '▲' : '▼') : '↕'}
                        </span>
                      </button>
                    </th>
                  ))}
                  <th scope="col">WEB</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((c) => {
                  const linked = projectsForCompany(c.id).length
                  return (
                    <tr key={c.id} onClick={() => open({ kind: 'company', id: c.id })}>
                      <td className="te-num te-dim te-col-id">{String(c.id).padStart(3, '0')}</td>
                      <td>
                        <button
                          type="button"
                          className="te-rowbtn"
                          onClick={(e) => {
                            e.stopPropagation()
                            open({ kind: 'company', id: c.id })
                          }}
                        >
                          <span className="te-strong">{companyName(c, lang)}</span>
                          {companyAlt(c, lang) && <span className="te-dim"> {companyAlt(c, lang)}</span>}
                          {linked > 0 && (
                            <span className="te-linked" title="LINKED PROJECTS">
                              ◆{linked}
                            </span>
                          )}
                        </button>
                      </td>
                      <td className="te-mono">{countryLabel(c.country, lang)}</td>
                      <td>
                        <span className="te-sector">{sectorLabel(c.sector, lang)}</span>
                      </td>
                      <td className="te-dim">{c.service || '—'}</td>
                      <td className="te-mono">
                        {c.stage ? <span className="te-amber">{c.stage}</span> : <span className="te-mute">—</span>}
                        {c.note && <span className="te-note"> {c.note}</span>}
                      </td>
                      <td>
                        {c.homepage ? (
                          <a className="te-link" href={c.homepage} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} aria-label={companyName(c, lang) + ' homepage'}>
                            ↗
                          </a>
                        ) : (
                          <span className="te-mute">—</span>
                        )}
                      </td>
                    </tr>
                  )
                })}
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={7} className="te-empty">
                      0 ROWS — NO MATCH
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Panel>
  )
}
