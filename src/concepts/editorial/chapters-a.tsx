import { useLang } from '../../i18n'
import { home, keyNumbers, newBiz, partnership, scaleup, studio } from '../../data/copy'
import { projectById } from '../../data/projects'
import { Body, Br, ChapterOpener, SectionHead, Stats, pad, scrollToId, useOpen } from './ui'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']

/* ═════════════ Ch.01 Manifesto ═════════════ */
export function Manifesto() {
  const { pick } = useLang()
  const nums = [keyNumbers.aum, keyNumbers.funds, keyNumbers.portfolio, keyNumbers.tips, keyNumbers.lips, keyNumbers.since]
  return (
    <section className="ed-chapter" aria-label="Manifesto">
      <ChapterOpener id="ch1" no="01" name="Manifesto" kicker={home.journeyEyebrow} title={pick(home.journeyTitle)} />

      <div className="ed-journey">
        <aside className="ed-journey__side" data-reveal>
          <p className="ed-label ed-label--accent">{home.journeyLabel}</p>
          <p className="ed-journey__period">{home.journeyPeriod}</p>
        </aside>
        <ol className="ed-journey__list">
          {home.journey.map((j, i) => (
            <li key={i} className="ed-journey__item" data-reveal>
              <span className="ed-journey__roman">{ROMAN[i]}.</span>
              <div>
                <h3 className="ed-h4">{pick(j.title)}</h3>
                <p className="ed-p">{pick(j.desc)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="ed-numbers" data-reveal>
        <p className="ed-label ed-numbers__cap">Index of figures</p>
        <dl className="ed-numbers__grid">
          {nums.map((n, i) => (
            <div key={i} className="ed-numbers__item">
              <dt className="ed-numbers__value">{n.value}</dt>
              <dd className="ed-numbers__label">
                <span className="ed-numbers__no">{pad(i + 1)}</span>
                {pick(n.label)}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <article className="ed-next" data-reveal>
        <div className="ed-next__head">
          <p className="ed-label ed-label--accent">{home.nextChapter.label}</p>
          <p className="ed-label ed-label--muted">{home.nextChapter.tag}</p>
        </div>
        <h3 className="ed-next__title">{home.nextChapter.title}</h3>
        <div className="ed-next__grid">
          <p className="ed-p ed-p--lg ed-drop-p">{pick(home.nextChapter.desc)}</p>
          <ul className="ed-next__pills">
            {home.nextChapter.pills.map((p, i) => (
              <li key={i}>
                <span className="ed-next__pill-k">{pick(p.title)}</span>
                <span className="ed-p">{pick(p.desc)}</span>
              </li>
            ))}
          </ul>
        </div>
        <button type="button" className="ed-textlink" onClick={() => scrollToId('ch2')}>
          {home.nextChapter.cta} <span aria-hidden="true">→</span>
        </button>
      </article>
    </section>
  )
}

/* ═════════════ Ch.02 The Factory ═════════════ */
export function Factory() {
  const { pick } = useLang()
  return (
    <section className="ed-chapter" aria-label="The Factory">
      <ChapterOpener id="ch2" no="02" name="The Factory" kicker={studio.eyebrow} title={studio.title} dek={pick(studio.desc)} />

      <SectionHead no="2.1" title={studio.factoryTitle} />
      <Body cols={2} drop text={pick(studio.factoryDesc)} />

      <ol className="ed-line" aria-label={studio.factoryTitle} data-reveal>
        {studio.factory.map((f, i) => (
          <li key={i} className={`ed-line__step${f.main ? ' is-main' : ''}`}>
            <span className="ed-line__no">{pad(i + 1)}</span>
            <span className="ed-label">{f.k}</span>
            <h4 className="ed-line__title">{pick(f.title)}</h4>
            <p className="ed-small">{pick(f.desc)}</p>
          </li>
        ))}
      </ol>

      <SectionHead no="2.2" kicker={home.howEyebrow} title={home.howTitle} />
      <Body cols={1}>
        <p className="ed-p--lg">
          <Br text={pick(home.howDesc)} />
        </p>
      </Body>
      <div className="ed-core" data-reveal>
        {home.core.map((c, i) => (
          <div key={c.k} className={`ed-core__cell ed-core__cell--${i}`}>
            <span className="ed-label ed-label--accent">{c.k}</span>
            <span className="ed-core__v">{c.v}</span>
          </div>
        ))}
        <div className="ed-core__center">
          <span>{home.coreCenter}</span>
        </div>
      </div>

      <SectionHead no="2.3" title={studio.platformTitle} lead={pick(studio.platformDesc)} />
      <ol className="ed-engines" data-reveal>
        {studio.engines.map((e, i) => (
          <li key={e.name} className="ed-engines__row">
            <span className="ed-engines__no">{pad(i + 1)}</span>
            <div className="ed-engines__name">
              <h4>{e.name}</h4>
              <span className="ed-label ed-label--muted">{e.owner}</span>
            </div>
            <ul className="ed-engines__items">
              {e.items.map((it, j) => (
                <li key={j}>{pick(it)}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <SectionHead no="2.4" title={studio.modelTitle} lead={pick(studio.modelDesc)} />
      <div className="ed-model" data-reveal>
        {studio.model.map((m) => (
          <div key={m.k} className="ed-model__col">
            <span className="ed-label ed-label--accent">{m.k}</span>
            <h4 className="ed-h4">{m.title}</h4>
            <p className="ed-p">{pick(m.desc)}</p>
          </div>
        ))}
      </div>

      <SectionHead no="2.5" title={studio.diffTitle} lead={pick(studio.diffDesc)} />
      <ol className="ed-diffs" data-reveal>
        {studio.diffs.map((d, i) => (
          <li key={i}>
            <span className="ed-diffs__no">{pad(i + 1)}</span>
            <span className="ed-diffs__t">{pick(d)}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

/* ═════════════ Program (shared by features) ═════════════ */
type Prog = (typeof newBiz.programs)[number]

function Program({ p, no, extra }: { p: Prog; no: string; extra?: React.ReactNode }) {
  const { pick } = useLang()
  const open = useOpen()
  return (
    <article className="ed-prog" data-reveal>
      <div className="ed-prog__side">
        <span className="ed-prog__no">{no}</span>
        <span className="ed-label ed-label--muted">{p.eyebrow}</span>
      </div>
      <div className="ed-prog__main">
        <h4 className="ed-prog__title">{pick(p.title)}</h4>
        {p.subtitle && <p className="ed-prog__sub">{pick(p.subtitle)}</p>}
        <p className="ed-p">{pick(p.desc)}</p>
        {extra}
        {(p.process || p.outputs) && (
          <div className="ed-prog__cols">
            {p.process && (
              <div>
                <p className="ed-label">Process</p>
                <ol className="ed-steps">
                  {p.process.map((s, i) => (
                    <li key={i}>
                      <span>{pad(i + 1)}</span>
                      {pick(s)}
                    </li>
                  ))}
                </ol>
              </div>
            )}
            {p.outputs && (
              <div>
                <p className="ed-label">Output</p>
                <ul className="ed-dash">
                  {p.outputs.map((s, i) => (
                    <li key={i}>{pick(s)}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        {p.cases && (
          <div className="ed-prog__cases">
            <p className="ed-label">See Case Files</p>
            <ul>
              {p.cases.map((c) => {
                const pr = projectById(c.projectId)
                if (!pr) return null
                return (
                  <li key={c.projectId}>
                    <button type="button" className="ed-ref" onClick={() => open({ kind: 'project', id: pr.id })}>
                      <span className="ed-ref__k">{c.label}</span>
                      <span className="ed-ref__t">{pick(pr.title)}</span>
                      <span aria-hidden="true" className="ed-ref__arrow">
                        ↗
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </article>
  )
}

function FeatureHead({ id, no, eyebrow, title, desc }: { id: string; no: string; eyebrow: string; title: string; desc: string }) {
  return (
    <header className="ed-feature__head" id={id} data-reveal>
      <div className="ed-feature__meta">
        <span className="ed-label ed-label--accent">Feature {no}</span>
        <span className="ed-label ed-label--muted">{eyebrow}</span>
      </div>
      <h3 className="ed-feature__title">{title}</h3>
      <p className="ed-feature__desc">{desc}</p>
    </header>
  )
}

/* ═════════════ Ch.03 Three Disciplines ═════════════ */
export function Disciplines() {
  const { pick, lang } = useLang()
  const table = lang === 'en' ? scaleup.table.en : scaleup.table.ko
  const featureIds = ['f-newbiz', 'f-scaleup', 'f-partnership']
  let step = 0

  return (
    <section className="ed-chapter" aria-label="Three Disciplines">
      <ChapterOpener id="ch3" no="03" name="Three Disciplines" kicker={home.whatEyebrow} title={home.whatTitle} dek={pick(home.whatDesc)} />

      <ol className="ed-inthis" data-reveal>
        {home.capabilities.map((c, i) => (
          <li key={c.no}>
            <button type="button" className="ed-inthis__btn" onClick={() => scrollToId(featureIds[i])}>
              <span className="ed-inthis__no">3.{i + 1}</span>
              <span className="ed-label ed-label--muted">{c.sub}</span>
              <span className="ed-inthis__title">{c.title}</span>
              <span className="ed-small">{pick(c.desc)}</span>
              <ul className="ed-dash ed-dash--small">
                {c.items.map((it, j) => (
                  <li key={j}>{pick(it)}</li>
                ))}
              </ul>
            </button>
          </li>
        ))}
      </ol>

      {/* ── Feature 3.1 New Business Design ── */}
      <div className="ed-feature">
        <FeatureHead id="f-newbiz" no="3.1" eyebrow={newBiz.eyebrow} title={newBiz.title} desc={pick(newBiz.desc)} />
        <p className="ed-standfirst" data-reveal>
          {newBiz.introTitle}
        </p>
        <Body cols={2} drop text={pick(newBiz.introDesc)} />
        <Stats items={newBiz.stats.map((s) => ({ value: s.value, label: pick(s.label) }))} />

        <aside className="ed-box" data-reveal>
          <div className="ed-box__tab">Sidebar</div>
          <div className="ed-box__grid">
            <div>
              <p className="ed-box__name">{newBiz.inventionDeck.name}</p>
              <p className="ed-box__title">{pick(newBiz.inventionDeck.title)}</p>
            </div>
            <div>
              <p className="ed-p ed-p--lg ed-italic">{pick(newBiz.inventionDeck.lead)}</p>
              <p className="ed-p">{pick(newBiz.inventionDeck.desc)}</p>
            </div>
          </div>
        </aside>

        <div className="ed-progs">
          {newBiz.programs.map((p, i) => (
            <Program key={i} p={p} no={`A.${i + 1}`} />
          ))}
        </div>
      </div>

      {/* ── Feature 3.2 Venture Scale-up ── */}
      <div className="ed-feature">
        <FeatureHead id="f-scaleup" no="3.2" eyebrow={scaleup.eyebrow} title={scaleup.title} desc={pick(scaleup.desc)} />
        <p className="ed-standfirst" data-reveal>
          {pick(scaleup.introTitle)}
        </p>
        <Body cols={2} drop text={pick(scaleup.introDesc)} />
        <Stats items={scaleup.stats.map((s) => ({ value: s.value, label: pick(s.label) }))} />

        <SectionHead no="B.1" title={pick(scaleup.scoutingTitle)} lead={pick(scaleup.scoutingLead)} />
        <Body cols={1} text={pick(scaleup.scoutingDesc)} />
        <div className="ed-trio" data-reveal>
          {scaleup.scouting.map((s, i) => (
            <div key={i} className="ed-trio__col">
              <span className="ed-trio__no">{ROMAN[i]}</span>
              <h4 className="ed-h4">{pick(s.title)}</h4>
              <ul className="ed-dash">
                {s.items.map((it, j) => (
                  <li key={j}>{pick(it)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <SectionHead no="B.2" title={pick(scaleup.blendedTitle)} lead={pick(scaleup.blendedLead)} />
        <Body cols={1} text={pick(scaleup.blendedDesc)} />
        <div className="ed-trio" data-reveal>
          {scaleup.benefits.map((b, i) => (
            <div key={i} className="ed-trio__col">
              <span className="ed-trio__no">{ROMAN[i]}</span>
              <h4 className="ed-h4">{pick(b.title)}</h4>
              <p className="ed-p">{pick(b.desc)}</p>
            </div>
          ))}
        </div>

        <figure className="ed-table" data-reveal>
          <figcaption>
            <span className="ed-label ed-label--accent">Table B</span>
            <span className="ed-table__cap">{pick(scaleup.tableTitle)}</span>
          </figcaption>
          <table>
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
                    <td key={j} data-label={table.head[j]} className={j === 3 ? 'is-key' : undefined}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </figure>

        <SectionHead no="B.3" title={pick(scaleup.processTitle)} lead={pick(scaleup.processLead)} />
        <div className="ed-phases" data-reveal>
          {scaleup.phases.map((ph, i) => (
            <div key={i} className="ed-phase">
              <div className="ed-phase__head">
                <span className="ed-label ed-label--accent">{pick(ph.label)}</span>
                <h4 className="ed-h4">{pick(ph.title)}</h4>
                <p className="ed-small">{pick(ph.desc)}</p>
              </div>
              <ol className="ed-phase__steps">
                {ph.steps.map((s) => {
                  step += 1
                  return (
                    <li key={s.name}>
                      <span className="ed-phase__n">{step}</span>
                      <div>
                        <p className="ed-phase__name">{s.name}</p>
                        <p className="ed-small">{pick(s.desc)}</p>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>
          ))}
        </div>

        <SectionHead no="B.4" title={pick(scaleup.termsTitle)} lead={pick(scaleup.termsDesc)} />
        <dl className="ed-terms" data-reveal>
          {scaleup.terms.map((t, i) => (
            <div key={i}>
              <dt>
                <span className="ed-terms__no">{pad(i + 1)}</span>
                {pick(t.title)}
              </dt>
              <dd>{pick(t.desc)}</dd>
            </div>
          ))}
        </dl>

        <SectionHead no="B.5" title={pick(scaleup.mgmtTitle)} lead={pick(scaleup.mgmtLead)} />
        <div className="ed-duo" data-reveal>
          {scaleup.mgmt.map((m, i) => (
            <div key={i}>
              <h4 className="ed-h4">{pick(m.title)}</h4>
              <p className="ed-p">{pick(m.desc)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Feature 3.3 Strategic Partnership ── */}
      <div className="ed-feature">
        <FeatureHead id="f-partnership" no="3.3" eyebrow={partnership.eyebrow} title={partnership.title} desc={pick(partnership.desc)} />
        <p className="ed-standfirst" data-reveal>
          {pick(partnership.introTitle)}
        </p>
        <Body cols={2} drop text={pick(partnership.introDesc)} />
        <Stats items={partnership.stats.map((s) => ({ value: s.value, label: pick(s.label) }))} />

        <div className="ed-progs">
          {partnership.programs.map((p, i) => (
            <Program
              key={i}
              p={p}
              no={`C.${i + 1}`}
              extra={
                i === 0 ? (
                  <ol className="ed-launch">
                    {partnership.launch.map((l, j) => (
                      <li key={j}>
                        <span className="ed-launch__no">{pad(j + 1)}</span>
                        <p className="ed-launch__t">{pick(l.title)}</p>
                        <p className="ed-small">{pick(l.desc)}</p>
                      </li>
                    ))}
                  </ol>
                ) : i === 1 ? (
                  <aside className="ed-box ed-box--inline">
                    <div className="ed-box__tab">{partnership.finedeal.label}</div>
                    <p className="ed-box__title">{pick(partnership.finedeal.title)}</p>
                    <p className="ed-p">{pick(partnership.finedeal.desc)}</p>
                  </aside>
                ) : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
