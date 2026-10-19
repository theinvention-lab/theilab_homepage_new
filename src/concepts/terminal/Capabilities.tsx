import { useEffect, useState, type KeyboardEvent } from 'react'
import { useLang, type L10n } from '../../i18n'
import { home, newBiz, scaleup, partnership, globalX } from '../../data/copy'
import { projectById } from '../../data/projects'
import { site } from '../../data/site'
import { companyForSea } from './model'
import { Head, Label, Panel, StatGrid, useTerminal } from './ui'

type Program = {
  eyebrow: string
  title: L10n
  subtitle?: L10n
  desc: L10n
  process?: L10n[]
  outputs?: L10n[]
  cases?: { label: string; projectId: number }[]
}

function Programs({ programs }: { programs: Program[] }) {
  const { pick } = useLang()
  const { open } = useTerminal()
  return (
    <div className="te-programs">
      {programs.map((p, i) => (
        <article key={i} className="te-prog">
          <header className="te-prog__head">
            <span className="te-mono te-green">P{String(i + 1).padStart(2, '0')}</span>
            <span className="te-prog__eyebrow">{p.eyebrow}</span>
          </header>
          <h4 className="te-prog__title">{pick(p.title)}</h4>
          {p.subtitle && <p className="te-prog__sub">{pick(p.subtitle)}</p>}
          <p className="te-prog__desc">{pick(p.desc)}</p>
          {(p.process || p.outputs) && (
            <div className="te-prog__lists">
              {p.process && (
                <div>
                  <p className="te-label">PROCESS</p>
                  <ol className="te-steps">
                    {p.process.map((s, j) => (
                      <li key={j}>
                        <span>{String(j + 1).padStart(2, '0')}</span>
                        {pick(s)}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              {p.outputs && (
                <div>
                  <p className="te-label te-label--amber">KEY OUTPUT</p>
                  <ul className="te-outs">
                    {p.outputs.map((s, j) => (
                      <li key={j}>{pick(s)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          {p.cases && (
            <div className="te-prog__cases">
              {p.cases.map((c) => {
                const pr = projectById(c.projectId)
                if (!pr) return null
                return (
                  <button key={c.projectId} type="button" className="te-case" onClick={() => open({ kind: 'project', id: c.projectId })}>
                    <span className="te-case__l">CASE · {c.label}</span>
                    <span className="te-case__t">{pick(pr.title)}</span>
                    <span aria-hidden>→</span>
                  </button>
                )
              })}
            </div>
          )}
        </article>
      ))}
    </div>
  )
}

function Cards({ items, cols }: { items: { title: L10n; desc: L10n; k?: string }[]; cols?: number }) {
  const { pick } = useLang()
  return (
    <ul className="te-cards" style={{ ['--cols' as string]: cols ?? items.length }}>
      {items.map((it, i) => (
        <li key={i}>
          <span className="te-mono te-dim">{it.k ?? String(i + 1).padStart(2, '0')}</span>
          <h4>{pick(it.title)}</h4>
          <p>{pick(it.desc)}</p>
        </li>
      ))}
    </ul>
  )
}

function NewBizTab() {
  const { pick } = useLang()
  const d = newBiz.inventionDeck
  return (
    <>
      <div className="te-split">
        <Head title={newBiz.introTitle} desc={pick(newBiz.introDesc)} />
        <StatGrid stats={newBiz.stats} />
      </div>
      <div className="te-callout">
        <div className="te-callout__tag">
          <Label tone="green">SOLUTION</Label>
          <strong>{d.name}</strong>
        </div>
        <div>
          <h4>{pick(d.title)}</h4>
          <p className="te-callout__lead">{pick(d.lead)}</p>
          <p>{pick(d.desc)}</p>
        </div>
      </div>
      <Programs programs={newBiz.programs} />
    </>
  )
}

function ScaleTab() {
  const { pick, lang } = useLang()
  const table = lang === 'en' ? scaleup.table.en : scaleup.table.ko
  let step = 0
  return (
    <>
      <div className="te-split">
        <Head title={pick(scaleup.introTitle)} desc={pick(scaleup.introDesc)} />
        <StatGrid stats={scaleup.stats} />
      </div>

      <div className="te-sub">
        <Head title={pick(scaleup.scoutingTitle)} lead={pick(scaleup.scoutingLead)} desc={pick(scaleup.scoutingDesc)} />
        <div className="te-funnel">
          {scaleup.scouting.map((s, i) => (
            <div key={i} className="te-funnel__col">
              <p className="te-funnel__h">
                <span className="te-mono te-green">S{i + 1}</span> {pick(s.title)}
              </p>
              <ul>
                {s.items.map((it, j) => (
                  <li key={j}>{pick(it)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="te-sub">
        <Head title={pick(scaleup.blendedTitle)} lead={pick(scaleup.blendedLead)} desc={pick(scaleup.blendedDesc)} />
        <Cards items={scaleup.benefits} />
        <p className="te-table-title">
          <Label tone="green">TABLE</Label> {pick(scaleup.tableTitle)}
        </p>
        <div className="te-tablewrap">
          <table className="te-table te-table--fin">
            <thead>
              <tr>
                {table.head.map((h) => (
                  <th key={h} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((r, i) => (
                <tr key={i}>
                  {r.map((c, j) => (
                    <td key={j} className={j === 3 ? 'te-num' : ''}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="te-sub">
        <Head title={pick(scaleup.processTitle)} lead={pick(scaleup.processLead)} />
        <div className="te-pipe">
          {scaleup.phases.map((ph, i) => (
            <section key={i} className="te-pipe__phase">
              <header>
                <p className="te-mono te-green">{pick(ph.label)}</p>
                <p className="te-pipe__pdesc">{pick(ph.desc)}</p>
              </header>
              <ol>
                {ph.steps.map((s) => {
                  step += 1
                  return (
                    <li key={s.name}>
                      <span className="te-pipe__dot" aria-hidden />
                      <span className="te-pipe__n">{String(step).padStart(2, '0')}</span>
                      <strong>{s.name}</strong>
                      <span className="te-pipe__d">{pick(s.desc)}</span>
                    </li>
                  )
                })}
              </ol>
            </section>
          ))}
        </div>
      </div>

      <div className="te-split te-sub">
        <div>
          <Head title={pick(scaleup.termsTitle)} desc={pick(scaleup.termsDesc)} />
          <dl className="te-terms">
            {scaleup.terms.map((t, i) => (
              <div key={i}>
                <dt>{pick(t.title)}</dt>
                <dd>{pick(t.desc)}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <Head title={pick(scaleup.mgmtTitle)} lead={pick(scaleup.mgmtLead)} />
          <Cards items={scaleup.mgmt} cols={1} />
        </div>
      </div>
    </>
  )
}

function PartnerTab() {
  const { pick } = useLang()
  const f = partnership.finedeal
  return (
    <>
      <div className="te-split">
        <Head title={pick(partnership.introTitle)} desc={pick(partnership.introDesc)} />
        <StatGrid stats={partnership.stats} />
      </div>
      <div className="te-sub">
        <Cards items={partnership.launch} cols={4} />
      </div>
      <div className="te-callout">
        <div className="te-callout__tag">
          <Label tone="green">{f.label}</Label>
        </div>
        <div>
          <h4>{pick(f.title)}</h4>
          <p>{pick(f.desc)}</p>
        </div>
      </div>
      <Programs programs={partnership.programs} />
    </>
  )
}

function GlobalTab() {
  const { pick } = useLang()
  const { open } = useTerminal()
  const sv = globalX.startupVn
  return (
    <>
      <div className="te-split">
        <Head title={pick(globalX.introTitle)} desc={pick(globalX.introDesc)} />
        <StatGrid stats={globalX.stats} />
      </div>

      <div className="te-callout">
        <div className="te-callout__tag">
          <Label tone="green">{sv.eyebrow}</Label>
          <strong>{sv.title}</strong>
          {site.links.startupVn && (
            <a className="te-link" href={site.links.startupVn} target="_blank" rel="noreferrer">
              {site.links.startupVn.replace(/^https?:\/\//, '')} ↗
            </a>
          )}
        </div>
        <div>
          <h4>{pick(sv.lead)}</h4>
          <p>{pick(sv.desc)}</p>
        </div>
      </div>

      <div className="te-sub">
        <Head title={pick(globalX.leadershipTitle)} lead={pick(globalX.leadershipLead)} desc={pick(globalX.leadershipDesc)} />
        <Cards items={globalX.leadership} />
      </div>

      <div className="te-sub">
        <p className="te-table-title">
          <Label tone="green">SEA PORTFOLIO</Label> <span className="te-dim te-mono">{globalX.seaPortfolio.length} ROWS</span>
        </p>
        <div className="te-tablewrap">
          <table className="te-table te-table--sea">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">NAME</th>
                <th scope="col">DESCRIPTION</th>
                <th scope="col">COUNTRY</th>
                <th scope="col">
                  <span className="te-sr">OPEN</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {globalX.seaPortfolio.map((s, i) => {
                const c = companyForSea(s.match, s.name)
                return (
                  <tr key={s.name}>
                    <td className="te-num te-dim">{String(i + 1).padStart(2, '0')}</td>
                    <td className="te-strong">{s.name}</td>
                    <td>{pick(s.desc)}</td>
                    <td className="te-mono">{pick(s.country)}</td>
                    <td>
                      {c && (
                        <button type="button" className="te-btn te-btn--xs" onClick={() => open({ kind: 'company', id: c.id })}>
                          OPEN
                        </button>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="te-sub">
        <Head title={globalX.seaTitle} lead={pick(globalX.seaLead)} desc={pick(globalX.seaDesc)} />
        <Cards items={globalX.seaCards.map((c) => ({ ...c, k: c.label }))} />
      </div>

      <div className="te-sub">
        <Head title={globalX.hubTitle} lead={pick(globalX.hubLead)} desc={pick(globalX.hubDesc)} />
        <ul className="te-hubs">
          {globalX.hubs.map((h) => (
            <li key={h.k}>
              <p className="te-mono te-amber">{h.k}</p>
              <h4>{h.title}</h4>
              <p className="te-mono te-dim">{h.city}</p>
              <p>{pick(h.desc)}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const TABS = [
  { key: 'nbd', no: '01', title: home.capabilities[0].title, cap: home.capabilities[0], page: newBiz, Body: NewBizTab },
  { key: 'vsm', no: '02', title: home.capabilities[1].title, cap: home.capabilities[1], page: scaleup, Body: ScaleTab },
  { key: 'sp', no: '03', title: home.capabilities[2].title, cap: home.capabilities[2], page: partnership, Body: PartnerTab },
  { key: 'gx', no: '04', title: globalX.title, cap: null, page: globalX, Body: GlobalTab },
] as const

export function CapabilitiesPanel() {
  const { pick } = useLang()
  const [tab, setTab] = useState(0)
  useEffect(() => {
    const on = (e: Event) => setTab(Number((e as CustomEvent).detail) || 0)
    window.addEventListener('te-cap', on)
    return () => window.removeEventListener('te-cap', on)
  }, [])
  const T = TABS[tab]
  const Body = T.Body
  const onKey = (e: KeyboardEvent) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!d) return
    const next = (tab + d + TABS.length) % TABS.length
    setTab(next)
    requestAnimationFrame(() => document.getElementById('te-tab-' + TABS[next].key)?.focus())
  }
  return (
    <Panel id="capabilities" code="04" title={home.whatEyebrow + ' — ' + home.whatTitle} meta={`${TABS.length} MODULES`}>
      <p className="te-panel__intro">{pick(home.whatDesc)}</p>
      <div className="te-tabs" role="tablist" aria-label={home.whatTitle} onKeyDown={onKey}>
        {TABS.map((t, i) => (
          <button
            key={t.key}
            role="tab"
            id={'te-tab-' + t.key}
            aria-selected={i === tab}
            aria-controls="te-tabpanel"
            tabIndex={i === tab ? 0 : -1}
            className={'te-tab' + (i === tab ? ' is-on' : '')}
            onClick={() => setTab(i)}
          >
            <span className="te-tab__no">{t.no}</span>
            <span className="te-tab__t">{t.title}</span>
          </button>
        ))}
      </div>
      <div className="te-tabpanel" role="tabpanel" id="te-tabpanel" aria-labelledby={'te-tab-' + T.key}>
        <div className="te-cap-head">
          <div>
            <p className="te-head__eyebrow">{T.cap ? T.cap.sub : T.page.eyebrow}</p>
            <h3 className="te-cap-head__title">{T.page.title}</h3>
            <p className="te-cap-head__desc">{pick(T.page.desc)}</p>
          </div>
          {T.cap ? (
            <div className="te-cap-head__side">
              <p className="te-mono te-dim">{pick(T.cap.desc)}</p>
              <ul>
                {T.cap.items.map((it, i) => (
                  <li key={i}>
                    <span className="te-green">▸</span> {pick(it)}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
        <Body />
      </div>
    </Panel>
  )
}
