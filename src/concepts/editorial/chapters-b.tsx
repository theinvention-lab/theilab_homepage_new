import { useMemo, useState } from 'react'
import { useLang } from '../../i18n'
import { Rich } from '../../components/Rich'
import { about, casesCopy, contactCopy, globalX } from '../../data/copy'
import { categories, projectById, projects, studioCaseIds, teams, type CategoryKey } from '../../data/projects'
import { companies, companyCaseLink, countryEn, sectorEn } from '../../data/portfolio'
import { news, newsCategoryLabel, type NewsItem } from '../../data/news'
import { memberById, teamGroups } from '../../data/team'
import { site } from '../../data/site'
import { Body, Br, ChapterOpener, SectionHead, Stats, pad, useOpen } from './ui'

/* ═════════════ Ch.04 Across Borders ═════════════ */
export function Borders() {
  const { pick } = useLang()
  return (
    <section className="ed-chapter" aria-label="Across Borders">
      <ChapterOpener id="ch4" no="04" name="Across Borders" kicker={globalX.eyebrow} title={globalX.title} dek={pick(globalX.desc)} />

      <p className="ed-standfirst" data-reveal>
        {pick(globalX.introTitle)}
      </p>
      <Body cols={2} drop text={pick(globalX.introDesc)} />
      <Stats items={globalX.stats.map((s) => ({ value: s.value, label: pick(s.label) }))} />

      <aside className="ed-box" data-reveal>
        <div className="ed-box__tab">{globalX.startupVn.eyebrow}</div>
        <div className="ed-box__grid">
          <div>
            <p className="ed-box__name">{globalX.startupVn.title}</p>
            <p className="ed-box__title">{pick(globalX.startupVn.lead)}</p>
          </div>
          <div>
            <p className="ed-p">{pick(globalX.startupVn.desc)}</p>
            {site.links.startupVn && (
              <a className="ed-textlink" href={site.links.startupVn} target="_blank" rel="noreferrer">
                startup-vn.com <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </aside>

      <SectionHead no="4.1" title={pick(globalX.leadershipTitle)} lead={pick(globalX.leadershipLead)} />
      <Body cols={2} drop text={pick(globalX.leadershipDesc)} />
      <div className="ed-duo" data-reveal>
        {globalX.leadership.map((l, i) => (
          <div key={i}>
            <h4 className="ed-h4">{pick(l.title)}</h4>
            <p className="ed-p">{pick(l.desc)}</p>
          </div>
        ))}
      </div>

      <div className="ed-ledger" data-reveal>
        <div className="ed-ledger__head">
          <span className="ed-label ed-label--accent">Ledger</span>
          <span className="ed-label ed-label--muted">SEA Portfolio — {globalX.seaPortfolio.length}</span>
        </div>
        <ol>
          {globalX.seaPortfolio.map((c, i) => (
            <li key={c.name} className="ed-ledger__row">
              <span className="ed-ledger__no">{pad(i + 1)}</span>
              <span className="ed-ledger__name">{c.name}</span>
              <span className="ed-ledger__desc">{pick(c.desc)}</span>
              <span className="ed-ledger__country">{pick(c.country)}</span>
            </li>
          ))}
        </ol>
      </div>

      <SectionHead no="4.2" title={globalX.seaTitle} lead={pick(globalX.seaLead)} />
      <Body cols={1} text={pick(globalX.seaDesc)} />
      <div className="ed-duo" data-reveal>
        {globalX.seaCards.map((c, i) => (
          <div key={i}>
            <span className="ed-label ed-label--accent">{c.label}</span>
            <h4 className="ed-h4">{pick(c.title)}</h4>
            <p className="ed-p">{pick(c.desc)}</p>
          </div>
        ))}
      </div>

      <SectionHead no="4.3" title={globalX.hubTitle} lead={pick(globalX.hubLead)} />
      <Body cols={1} text={pick(globalX.hubDesc)} />
      <div className="ed-hubs" data-reveal>
        {globalX.hubs.map((h) => (
          <div key={h.k} className="ed-hub">
            <span className="ed-label ed-label--accent">{h.k}</span>
            <h4 className="ed-hub__title">{h.title}</h4>
            <span className="ed-label ed-label--muted">{h.city}</span>
            <p className="ed-p">{pick(h.desc)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═════════════ Ch.05 Case Files ═════════════ */
export function CaseFiles() {
  const { pick, lang } = useLang()
  const open = useOpen()
  const [q, setQ] = useState('')

  const studioCases = studioCaseIds.map((id) => projectById(id)!).filter(Boolean)
  const groups = (Object.keys(categories) as CategoryKey[])
    .filter((k) => k !== 'studio')
    .map((k) => ({ key: k, label: pick(categories[k]), items: projects.filter((p) => p.category === k) }))
    .filter((g) => g.items.length)

  const secLabel = (s: string) => (lang === 'en' ? sectorEn[s] ?? s : s)
  const cName = (c: (typeof companies)[number]) => (lang === 'en' ? c.nameEn : c.nameKo)

  const sectors = useMemo(() => {
    const needle = q.trim().toLowerCase()
    const list = needle
      ? companies.filter((c) => [c.nameKo, c.nameEn, c.service, c.sector, sectorEn[c.sector] ?? ''].some((v) => v.toLowerCase().includes(needle)))
      : companies
    const map = new Map<string, typeof companies>()
    list.forEach((c) => {
      if (!map.has(c.sector)) map.set(c.sector, [])
      map.get(c.sector)!.push(c)
    })
    return Array.from(map.entries())
      .map(([sector, items]) => ({ sector, items: [...items].sort((a, b) => cName(a).localeCompare(cName(b), lang)) }))
      .sort((a, b) => {
        const oa = a.sector.startsWith('기타') ? 1 : 0
        const ob = b.sector.startsWith('기타') ? 1 : 0
        return oa - ob || secLabel(a.sector).localeCompare(secLabel(b.sector), lang)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, lang])
  const shown = sectors.reduce((n, s) => n + s.items.length, 0)

  return (
    <section className="ed-chapter" aria-label="Case Files">
      <ChapterOpener id="ch5" no="05" name="Case Files" kicker={casesCopy.eyebrow} title={casesCopy.title} dek={pick(casesCopy.desc)} />

      <div className="ed-cases">
        {studioCases.map((p, i) => (
          <article key={p.id} className={`ed-case${i % 2 ? ' is-flip' : ''}`} data-reveal>
            <figure className="ed-case__fig">
              {p.image && <img src={p.image} alt={pick(p.title)} loading="lazy" />}
              <figcaption className="ed-label ed-label--muted">
                Fig. {pad(i + 1)} — {pick(p.title)}
              </figcaption>
            </figure>
            <div className="ed-case__text">
              <div className="ed-case__meta">
                <span className="ed-label ed-label--accent">Case File No. {pad(i + 1)}</span>
                <span className="ed-label ed-label--muted">{pick(categories[p.category])}</span>
              </div>
              <h3 className="ed-case__title">{pick(p.title)}</h3>
              {p.summary && <p className="ed-case__summary">{pick(p.summary)}</p>}
              <dl className="ed-case__facts">
                {p.sector && (
                  <div>
                    <dt>Sector</dt>
                    <dd>{p.sector}</dd>
                  </div>
                )}
                <div>
                  <dt>Year</dt>
                  <dd>{p.year}</dd>
                </div>
                <div>
                  <dt>Period</dt>
                  <dd>{p.period}</dd>
                </div>
              </dl>
              <div className="ed-case__overview ed-drop">
                <Rich text={p.overview} />
              </div>
              <button type="button" className="ed-textlink" onClick={() => open({ kind: 'project', id: p.id })}>
                Read the full file <span aria-hidden="true">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      <SectionHead no="5.1" kicker="Index" title="Projects" />
      <div className="ed-pindex" data-reveal>
        {groups.map((g) => (
          <div key={g.key} className="ed-pindex__group">
            <h4 className="ed-pindex__cat">
              <span>{g.label}</span>
              <span className="ed-pindex__count">{pad(g.items.length)}</span>
            </h4>
            <ul>
              {g.items.map((p) => (
                <li key={p.id}>
                  <button type="button" className="ed-pindex__row" onClick={() => open({ kind: 'project', id: p.id })}>
                    <span className="ed-pindex__year">{p.year}</span>
                    <span className="ed-pindex__title">{pick(p.title)}</span>
                    <span className="ed-pindex__team">{teams[p.team]}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <SectionHead no="5.2" kicker="Index" title="Portfolio" lead={pick(casesCopy.portfolioDesc)} />
      <div className="ed-search" data-reveal>
        <label htmlFor="ed-q" className="ed-label">
          Search
        </label>
        <input id="ed-q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="—" autoComplete="off" />
        <span className="ed-label ed-label--muted" aria-live="polite">
          {shown} / {companies.length}
        </span>
      </div>
      <div className="ed-bindex" data-reveal>
        {sectors.map((s) => (
          <section key={s.sector} className="ed-bindex__sec">
            <h4 className="ed-bindex__head">
              <span>{secLabel(s.sector)}</span>
              <span className="ed-bindex__count">{s.items.length}</span>
            </h4>
            <ul>
              {s.items.map((c) => (
                <li key={c.id}>
                  <button type="button" className="ed-bindex__row" onClick={() => open({ kind: 'company', id: c.id })}>
                    <span className="ed-bindex__name">
                      {cName(c)}
                      {companyCaseLink[c.nameKo] && <span className="ed-bindex__star" aria-label="Case File"> ✦</span>}
                    </span>
                    <span className="ed-bindex__dots" aria-hidden="true" />
                    <span className="ed-bindex__country">{lang === 'en' ? countryEn[c.country] ?? c.country : c.country}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
        {!sectors.length && <p className="ed-p ed-italic">0 / {companies.length}</p>}
      </div>
    </section>
  )
}

/* ═════════════ Ch.06 Contributors ═════════════ */
export function Contributors() {
  const { pick } = useLang()
  const open = useOpen()
  return (
    <section className="ed-chapter" aria-label="Contributors">
      <ChapterOpener id="ch6" no="06" name="Contributors" kicker={about.eyebrow} title={pick(about.title)} dek={pick(about.desc)} />

      <div className="ed-pillars" data-reveal>
        {about.pillars.map((p, i) => (
          <div key={p.tag} className="ed-pillar">
            <span className="ed-pillar__no">{pad(i + 1)}</span>
            <span className="ed-label ed-label--accent">{p.tag}</span>
            <h4 className="ed-h4">{pick(p.title)}</h4>
            <p className="ed-small">{pick(p.desc)}</p>
          </div>
        ))}
      </div>

      <SectionHead no="6.1" kicker="Correspondents" title={about.ecoTitle} />
      <Body cols={1}>
        <p className="ed-p--lg">
          <Br text={pick(about.ecoDesc)} />
        </p>
      </Body>
      <div className="ed-eco" data-reveal>
        {about.eco.map((g) => (
          <div key={g.group} className="ed-eco__group">
            <h4 className="ed-eco__g">{g.group}</h4>
            <dl>
              {g.items.map((it, i) => (
                <div key={i}>
                  <dt>{pick(it.name)}</dt>
                  <dd>{pick(it.desc)}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <div className="ed-mast" data-reveal>
        <div className="ed-mast__head">
          <p className="ed-label ed-label--accent">Masthead</p>
          <h3 className="ed-mast__title">{about.teamTitle}</h3>
          <p className="ed-p">
            <Br text={pick(about.teamDesc)} />
          </p>
        </div>
        <div className="ed-mast__groups">
          {teamGroups.map((g) => (
            <div key={g.key} className="ed-mast__group">
              <h4 className="ed-label">{g.label}</h4>
              <ul>
                {g.members.map((id) => {
                  const m = memberById(id)
                  if (!m) return null
                  return (
                    <li key={id}>
                      <button type="button" className="ed-mast__member" onClick={() => open({ kind: 'member', id })}>
                        <span className="ed-mast__name">{pick(m.name)}</span>
                        <span className="ed-mast__role">{pick(m.role)}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═════════════ Ch.07 Dispatches ═════════════ */
type Filter = 'all' | 'corporate' | 'portfolio' | 'blog'

export function Dispatches() {
  const open = useOpen()
  const [f, setF] = useState<Filter>('all')
  const [limit, setLimit] = useState(13)
  const list = f === 'all' ? news : news.filter((n) => n.category === f)
  const [lead, ...rest] = list
  const shown = rest.slice(0, limit - 1)

  const filters: { k: Filter; label: string; n: number }[] = [
    { k: 'all', label: 'All', n: news.length },
    ...(Object.keys(newsCategoryLabel) as Exclude<Filter, 'all'>[]).map((k) => ({
      k,
      label: newsCategoryLabel[k],
      n: news.filter((n) => n.category === k).length,
    })),
  ]

  return (
    <section className="ed-chapter" aria-label="Dispatches">
      <ChapterOpener id="ch7" no="07" name="Dispatches" kicker="News" title="Dispatches" />

      <div className="ed-filters" role="group" aria-label="Filter">
        {filters.map((x) => (
          <button
            key={x.k}
            type="button"
            className={`ed-filter${f === x.k ? ' is-active' : ''}`}
            aria-pressed={f === x.k}
            onClick={() => {
              setF(x.k)
              setLimit(13)
            }}
          >
            {x.label} <span className="ed-filter__n">{x.n}</span>
          </button>
        ))}
      </div>

      {lead && (
        <div className="ed-paper">
          <Story item={lead} lead onOpen={() => open({ kind: 'news', item: lead })} />
          <div className="ed-paper__cols">
            {shown.map((n, i) => (
              <Story key={`${n.date}-${n.title}-${i}`} item={n} onOpen={() => open({ kind: 'news', item: n })} />
            ))}
          </div>
          {rest.length > shown.length && (
            <button type="button" className="ed-more" onClick={() => setLimit((l) => l + 12)}>
              More dispatches <span className="ed-filter__n">{rest.length - shown.length}</span>
            </button>
          )}
        </div>
      )}
    </section>
  )
}

function Story({ item, lead, onOpen }: { item: NewsItem; lead?: boolean; onOpen: () => void }) {
  const cat = item.category ? newsCategoryLabel[item.category] : null
  const hasBody = !!item.body
  const inner = (
    <>
      <span className="ed-story__meta">
        <time dateTime={item.date}>{item.date.replace(/-/g, '.')}</time>
        {cat && <span className="ed-story__cat">{cat}</span>}
      </span>
      <span className="ed-story__title">{item.title}</span>
      {item.summary && <span className="ed-story__sum">{item.summary}</span>}
      <span className="ed-story__go">
        {hasBody ? 'Read' : 'Source'} <span aria-hidden="true">{hasBody ? '→' : '↗'}</span>
      </span>
    </>
  )
  const cls = `ed-story${lead ? ' ed-story--lead' : ''}`
  if (hasBody)
    return (
      <button type="button" className={cls} onClick={onOpen}>
        {inner}
      </button>
    )
  if (item.url)
    return (
      <a className={cls} href={item.url} target="_blank" rel="noreferrer">
        {inner}
      </a>
    )
  return <div className={cls}>{inner}</div>
}

/* ═════════════ Colophon ═════════════ */
export function Colophon() {
  const { pick } = useLang()
  return (
    <footer className="ed-colophon" id="colophon" aria-label="Colophon">
      <div className="ed-opener__meta">
        <span className="ed-label">Colophon</span>
        <span className="ed-label ed-label--accent">{site.name}</span>
      </div>
      <h2 className="ed-colophon__title" data-reveal>
        <Br text={contactCopy.title} />
      </h2>
      <div className="ed-colophon__grid" data-reveal>
        <div>
          <p className="ed-p ed-p--lg">{pick(contactCopy.desc)}</p>
          <div className="ed-colophon__cta">
            <p className="ed-colophon__ctat">{contactCopy.ctaTitle}</p>
            <p className="ed-p">{pick(contactCopy.ctaDesc)}</p>
            <a className="ed-btn" href={`mailto:${site.email}`}>
              {site.email} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="ed-colophon__info">
          <h3 className="ed-colophon__git">
            <Br text={contactCopy.getInTouch} />
          </h3>
          <p className="ed-small">
            <Br text={pick(contactCopy.getInTouchDesc)} />
          </p>
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
            <div>
              <dt>Tel</dt>
              <dd>
                <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}>{site.phone}</a>
              </dd>
            </div>
            <div>
              <dt>HQ</dt>
              <dd>
                <Br text={pick(site.hq)} />
              </dd>
            </div>
            <div>
              <dt>Vietnam</dt>
              <dd>
                <Br text={site.vietnam} />
              </dd>
            </div>
            <div>
              <dt>Blog</dt>
              <dd>
                <a href={site.links.blog} target="_blank" rel="noreferrer">
                  slashpage.com/theilab-blog ↗
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="ed-colophon__foot">
        <span className="ed-colophon__mark">The Invention Lab</span>
        <span className="ed-label ed-label--muted">
          {site.nameKo} · {site.name} · 2017 — PRESENT
        </span>
      </div>
    </footer>
  )
}
