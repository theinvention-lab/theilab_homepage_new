import { useRef, useState, type KeyboardEvent } from 'react'
import { useLang } from '../../i18n'
import { globalX, home, newBiz, partnership, scaleup } from '../../data/copy'
import type { L10n } from '../../i18n'
import { site } from '../../data/site'
import { companies } from '../../data/portfolio'
import { Arrow, Lines, Pill, Plus, scrollToId, SectionHead, toneAt, useBento, type Tone } from './shared'

type Program = {
  eyebrow: string
  title: L10n
  subtitle?: L10n
  desc: L10n
  process?: L10n[]
  outputs?: L10n[]
  cases?: { label: string; projectId: number }[]
}

const TABS: { key: string; label: string; tone: Tone }[] = [
  { key: 'nbd', label: home.capabilities[0].title, tone: 'peach' },
  { key: 'scale', label: home.capabilities[1].title, tone: 'mint' },
  { key: 'sp', label: home.capabilities[2].title, tone: 'sky' },
  { key: 'global', label: globalX.title, tone: 'butter' },
]

export default function Capabilities() {
  const { pick } = useLang()
  const [tab, setTab] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const next = (tab + (e.key === 'ArrowRight' ? 1 : -1) + TABS.length) % TABS.length
    setTab(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section className="be-section" id="capabilities" aria-labelledby="be-cap-title">
      <SectionHead no="02" eyebrow={home.whatEyebrow} id="be-cap-title" title={home.whatTitle} desc={<p>{pick(home.whatDesc)}</p>} />

      <div className="be-seg-wrap">
        <div className="be-seg" role="tablist" aria-label={home.whatTitle} onKeyDown={onKey} style={{ ['--n' as string]: TABS.length, ['--x' as string]: tab }}>
          <span className={`be-seg__thumb be-tone--${TABS[tab].tone}`} aria-hidden />
          {TABS.map((tb, i) => (
            <button
              key={tb.key}
              ref={(el) => (tabRefs.current[i] = el)}
              role="tab"
              id={`be-tab-${tb.key}`}
              aria-selected={tab === i}
              aria-controls={`be-panel-${tb.key}`}
              tabIndex={tab === i ? 0 : -1}
              className={'be-seg__btn' + (tab === i ? ' is-active' : '')}
              onClick={() => setTab(i)}
            >
              <span className="be-seg__no">{String(i + 1).padStart(2, '0')}</span>
              {tb.label}
            </button>
          ))}
        </div>
      </div>

      <div className="be-tabpanel" role="tabpanel" id={`be-panel-${TABS[tab].key}`} aria-labelledby={`be-tab-${TABS[tab].key}`} key={tab}>
        {tab === 0 && <NbdPanel />}
        {tab === 1 && <ScalePanel />}
        {tab === 2 && <SpPanel />}
        {tab === 3 && <GlobalPanel />}
      </div>
    </section>
  )
}

function Stats({ stats, tone }: { stats: { value: string; label: L10n }[]; tone: Tone }) {
  const { pick } = useLang()
  return (
    <>
      {stats.map((s, i) => (
        <div key={i} className={`be-tile be-stat ${i === 0 ? `be-tone--${tone}` : 'be-tile--plain'}`}>
          <strong className="be-stat__value">{s.value}</strong>
          <span className="be-stat__label">{pick(s.label)}</span>
        </div>
      ))}
    </>
  )
}

function IntroTile({ eyebrow, title, desc, items, tone, cta, ctaType }: { eyebrow: string; title: string; desc: string; items?: L10n[]; tone: Tone; cta: string; ctaType?: 'investment' | 'partnership' | 'global' | 'cv' }) {
  const { pick } = useLang()
  const { goContact } = useBento()
  return (
    <div className={`be-tile be-tone--${tone} be-cap-intro`}>
      <Pill tone="ink" solid>
        {eyebrow}
      </Pill>
      <h3 className="be-cap-intro__title">{title}</h3>
      <p className="be-cap-intro__desc">{desc}</p>
      {items && (
        <ul className="be-checks">
          {items.map((it) => (
            <li key={it.ko}>{pick(it)}</li>
          ))}
        </ul>
      )}
      <button className="be-btn be-btn--ink" onClick={() => goContact(ctaType)}>
        {cta} <Arrow />
      </button>
    </div>
  )
}

function Programs({ programs, tone }: { programs: Program[]; tone: Tone }) {
  const { pick } = useLang()
  const { open } = useBento()
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  return (
    <div className="be-programs">
      {programs.map((p, i) => {
        const on = openIdx === i
        return (
          <div key={p.eyebrow} className={'be-tile be-program' + (on ? ` is-open be-tone--${tone}` : ' be-tile--plain')}>
            <button className="be-program__head" aria-expanded={on} onClick={() => setOpenIdx(on ? null : i)}>
              <span className="be-program__no">{String(i + 1).padStart(2, '0')}</span>
              <span className="be-program__titles">
                <span className="be-kicker">{p.eyebrow}</span>
                <strong>{pick(p.title)}</strong>
                {p.subtitle && <span className="be-program__sub">{pick(p.subtitle)}</span>}
              </span>
              <Plus open={on} />
            </button>
            {on && (
              <div className="be-program__body">
                <p className="be-program__desc">{pick(p.desc)}</p>
                {(p.process || p.outputs) && (
                  <div className="be-program__cols">
                    {p.process && (
                      <div className="be-program__col">
                        <h4>PROCESS</h4>
                        <ol className="be-steps">
                          {p.process.map((s, si) => (
                            <li key={s.ko}>
                              <span>{si + 1}</span>
                              {pick(s)}
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                    {p.outputs && (
                      <div className="be-program__col">
                        <h4>KEY OUTPUT</h4>
                        <ul className="be-checks">
                          {p.outputs.map((s) => (
                            <li key={s.ko}>{pick(s)}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
                {p.cases && (
                  <div className="be-program__cases">
                    {p.cases.map((c) => (
                      <button key={c.projectId} className="be-chip be-chip--ink" onClick={() => open({ kind: 'project', id: c.projectId })}>
                        CASE STUDY — {c.label} <Arrow />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function NbdPanel() {
  const { pick } = useLang()
  const cap = home.capabilities[0]
  return (
    <div className="be-bento be-bento--cap">
      <IntroTile eyebrow={newBiz.eyebrow} title={newBiz.introTitle} desc={pick(newBiz.introDesc)} items={cap.items} tone="peach" cta={newBiz.cta} ctaType="cv" />
      <div className="be-cap-stats">
        <Stats stats={newBiz.stats} tone="peach" />
      </div>
      <div className="be-tile be-tile--ink be-deck">
        <div className="be-deck__cards" aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`be-deck__card be-tone--${toneAt(i)}`} style={{ ['--k' as string]: i }} />
          ))}
        </div>
        <Pill tone="accent" solid>
          {newBiz.inventionDeck.name}
        </Pill>
        <h3>{pick(newBiz.inventionDeck.title)}</h3>
        <p className="be-deck__lead">{pick(newBiz.inventionDeck.lead)}</p>
        <p className="be-deck__desc">{pick(newBiz.inventionDeck.desc)}</p>
      </div>
      <div className="be-cap-wide">
        <Programs programs={newBiz.programs} tone="peach" />
      </div>
    </div>
  )
}

function ScalePanel() {
  const { pick } = useLang()
  const cap = home.capabilities[1]
  return (
    <div className="be-bento be-bento--cap">
      <IntroTile eyebrow={scaleup.eyebrow} title={pick(scaleup.introTitle)} desc={pick(scaleup.introDesc)} items={cap.items} tone="mint" cta={scaleup.cta} ctaType="investment" />
      <div className="be-cap-stats">
        <Stats stats={scaleup.stats} tone="mint" />
      </div>
      <div className="be-tile be-tile--plain be-cap-wide be-scout">
        <div className="be-scout__head">
          <h3>{pick(scaleup.scoutingTitle)}</h3>
          <p className="be-scout__lead">{pick(scaleup.scoutingLead)}</p>
          <p>{pick(scaleup.scoutingDesc)}</p>
        </div>
        <div className="be-scout__cols">
          {scaleup.scouting.map((s, i) => (
            <div key={i} className={`be-scout__col be-tone--${['mint', 'sky', 'butter'][i]}`}>
              <span className="be-bignum be-bignum--sm">{String(i + 1).padStart(2, '0')}</span>
              <strong>{pick(s.title)}</strong>
              <ul>
                {s.items.map((it) => (
                  <li key={it.ko}>{pick(it)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {scaleup.mgmt.map((m, i) => (
        <div key={i} className={`be-tile be-mgmt ${i === 0 ? 'be-tile--ink' : 'be-tone--lilac'}`}>
          <span className="be-kicker">{pick(scaleup.mgmtTitle)}</span>
          <h3>{pick(m.title)}</h3>
          <p>{pick(m.desc)}</p>
        </div>
      ))}
      <div className="be-tile be-tile--plain be-cap-wide be-note">
        <strong>{pick(scaleup.mgmtLead)}</strong>
        <span className="be-note__more">
          {pick(scaleup.processTitle)} · {pick(scaleup.blendedTitle)} · {pick(scaleup.termsTitle)}
        </span>
        <button className="be-link" onClick={() => scrollToId('process')}>
          Process <Arrow />
        </button>
      </div>
    </div>
  )
}

function SpPanel() {
  const { pick } = useLang()
  const cap = home.capabilities[2]
  return (
    <div className="be-bento be-bento--cap">
      <IntroTile eyebrow={partnership.eyebrow} title={pick(partnership.introTitle)} desc={pick(partnership.introDesc)} items={cap.items} tone="sky" cta={partnership.cta} ctaType="partnership" />
      <div className="be-cap-stats">
        <Stats stats={partnership.stats} tone="sky" />
      </div>
      <div className="be-launch be-cap-wide">
        {partnership.launch.map((l, i) => (
          <div key={i} className={`be-tile be-launch__item ${i % 2 === 0 ? 'be-tile--plain' : 'be-tone--sky'}`}>
            <span className="be-bignum be-bignum--sm">{String(i + 1).padStart(2, '0')}</span>
            <strong>{pick(l.title)}</strong>
            <p>{pick(l.desc)}</p>
          </div>
        ))}
      </div>
      <div className="be-tile be-tile--ink be-cap-wide be-finedeal">
        <div className="be-finedeal__mark" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div>
          <Pill tone="accent" solid>
            {partnership.finedeal.label}
          </Pill>
          <h3>{pick(partnership.finedeal.title)}</h3>
          <p>{pick(partnership.finedeal.desc)}</p>
        </div>
      </div>
      <div className="be-cap-wide">
        <Programs programs={partnership.programs} tone="sky" />
      </div>
    </div>
  )
}

function GlobalPanel() {
  const { pick } = useLang()
  const { open } = useBento()
  return (
    <div className="be-bento be-bento--cap">
      <IntroTile eyebrow={globalX.eyebrow} title={pick(globalX.introTitle)} desc={`${pick(globalX.desc)} ${pick(globalX.introDesc)}`} tone="butter" cta={globalX.cta} ctaType="global" />
      <div className="be-cap-stats">
        <Stats stats={globalX.stats} tone="butter" />
      </div>

      <div className="be-tile be-tile--ink be-vn">
        <Pill tone="accent" solid>
          {globalX.startupVn.eyebrow}
        </Pill>
        <h3 className="be-vn__title">{globalX.startupVn.title}</h3>
        <p className="be-vn__lead">{pick(globalX.startupVn.lead)}</p>
        <p>{pick(globalX.startupVn.desc)}</p>
        {site.links.startupVn && (
          <a className="be-btn be-btn--accent" href={site.links.startupVn} target="_blank" rel="noreferrer">
            startup-vn.com <Arrow dir="out" />
          </a>
        )}
      </div>
      <div className="be-tile be-tile--plain be-lead">
        <h3>{pick(globalX.leadershipTitle)}</h3>
        <p className="be-lead__lead">{pick(globalX.leadershipLead)}</p>
        <p>{pick(globalX.leadershipDesc)}</p>
        <div className="be-lead__cards">
          {globalX.leadership.map((l, i) => (
            <div key={i} className={`be-lead__card be-tone--${i ? 'mint' : 'butter'}`}>
              <strong>{pick(l.title)}</strong>
              <p>{pick(l.desc)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="be-tile be-tile--plain be-cap-wide be-sea">
        <div className="be-sea__head">
          <h3>{globalX.seaTitle}</h3>
          <p className="be-lead__lead">{pick(globalX.seaLead)}</p>
          <p>{pick(globalX.seaDesc)}</p>
        </div>
        <div className="be-sea__grid">
          {globalX.seaPortfolio.map((s, i) => {
            const c = s.match ? companies.find((x) => x.nameKo === s.match) : undefined
            const body = (
              <>
                <span className="be-sea__top">
                  <span className={`be-avatar be-avatar--sm be-tone--${toneAt(i)}`}>{s.name.slice(0, 2).toUpperCase()}</span>
                  <Pill>{pick(s.country)}</Pill>
                </span>
                <strong>{s.name}</strong>
                <span className="be-sea__desc">{pick(s.desc)}</span>
              </>
            )
            return c ? (
              <button key={s.name} className="be-sea__item is-link" onClick={() => open({ kind: 'company', id: c.id })}>
                {body}
                <Arrow />
              </button>
            ) : (
              <div key={s.name} className="be-sea__item">
                {body}
              </div>
            )
          })}
        </div>
      </div>

      {globalX.seaCards.map((c, i) => (
        <div key={i} className={`be-tile be-seacard ${i ? 'be-tone--mint' : 'be-tone--peach'}`}>
          <Pill tone="ink" solid>
            {c.label}
          </Pill>
          <h3>{pick(c.title)}</h3>
          <p>{pick(c.desc)}</p>
        </div>
      ))}

      <div className="be-tile be-tile--plain be-cap-wide be-hubs">
        <div className="be-hubs__head">
          <h3>{globalX.hubTitle}</h3>
          <p className="be-lead__lead">{pick(globalX.hubLead)}</p>
          <p>{pick(globalX.hubDesc)}</p>
        </div>
        <div className="be-hubs__grid">
          {globalX.hubs.map((h, i) => (
            <div key={h.k} className={`be-hub be-tone--${i ? 'sky' : 'butter'}`}>
              <span className="be-kicker">{h.k}</span>
              <strong>{h.title}</strong>
              <Pill tone="ink" solid>
                {h.city}
              </Pill>
              <p>
                <Lines text={pick(h.desc)} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
