import { useEffect, useRef, useState } from 'react'
import { useLang } from '../../i18n'
import { scaleup } from '../../data/copy'
import { Pill, Plus, SectionHead } from './shared'

const PHASE_TONES = ['sky', 'mint', 'peach'] as const

export default function Process() {
  const { pick, lang } = useLang()
  const steps = scaleup.phases.flatMap((ph, pi) => ph.steps.map((s) => ({ ...s, phase: pi })))
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLLIElement | null)[]>([])
  const [term, setTerm] = useState<number | null>(0)

  useEffect(() => {
    const els = refs.current.filter(Boolean) as HTMLLIElement[]
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(Number((en.target as HTMLElement).dataset.idx))
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const cur = steps[active]
  const phase = scaleup.phases[cur.phase]
  const table = scaleup.table[lang]

  // 첫 열(구분) 병합
  const spans = table.rows.map((r, i) => {
    if (i > 0 && table.rows[i - 1][0] === r[0]) return 0
    let n = 1
    while (table.rows[i + n] && table.rows[i + n][0] === r[0]) n++
    return n
  })

  return (
    <section className="be-section" id="process" aria-labelledby="be-process-title">
      <SectionHead no="03" eyebrow="PROCESS" id="be-process-title" title={pick(scaleup.processTitle)} desc={<p>{pick(scaleup.processLead)}</p>} />

      <div className="be-story">
        <div className="be-story__rail">
          <div className={`be-tile be-story__panel be-tone--${PHASE_TONES[cur.phase]}`}>
            <div className="be-story__count" aria-live="polite">
              <strong>{String(active + 1).padStart(2, '0')}</strong>
              <span>/ {String(steps.length).padStart(2, '0')}</span>
            </div>
            <div className="be-story__bars" aria-hidden>
              {steps.map((s, i) => (
                <span key={s.name} className={'be-story__bar' + (i <= active ? ' is-on' : '') + (i === 2 || i === 5 ? ' is-gap' : '')} />
              ))}
            </div>
            <div className="be-story__phase">
              <Pill tone="ink" solid>
                {pick(phase.label)}
              </Pill>
              <h3>{pick(phase.title)}</h3>
              <p>{pick(phase.desc)}</p>
            </div>
            <div className="be-story__now">
              <span className="be-kicker">{cur.name}</span>
              <p>{pick(cur.desc)}</p>
            </div>
          </div>
        </div>
        <ol className="be-story__steps">
          {steps.map((s, i) => {
            const first = i === 0 || steps[i - 1].phase !== s.phase
            return (
              <li
                key={s.name}
                ref={(el) => (refs.current[i] = el)}
                data-idx={i}
                className={'be-story__step' + (i === active ? ' is-active' : '') + ` be-story__step--${PHASE_TONES[s.phase]}`}
              >
                {first && <span className="be-story__phasetag">{pick(scaleup.phases[s.phase].label)}</span>}
                <div className="be-tile be-story__card">
                  <span className="be-story__no">{String(i + 1).padStart(2, '0')}</span>
                  <h4>{s.name}</h4>
                  <p>{pick(s.desc)}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      <div className="be-bento be-bento--finance">
        <div className="be-tile be-tone--butter be-blended">
          <Pill tone="ink" solid>
            {pick(scaleup.blendedTitle)}
          </Pill>
          <h3>{pick(scaleup.blendedLead)}</h3>
          <p>{pick(scaleup.blendedDesc)}</p>
          <div className="be-benefits">
            {scaleup.benefits.map((b, i) => (
              <div key={i} className="be-benefit">
                <span className="be-bignum be-bignum--sm">{String(i + 1).padStart(2, '0')}</span>
                <strong>{pick(b.title)}</strong>
                <span>{pick(b.desc)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="be-tile be-tile--plain be-table-tile">
          <h3 className="be-table-tile__title">{pick(scaleup.tableTitle)}</h3>
          <div className="be-table-scroll" tabIndex={0} role="region" aria-label={pick(scaleup.tableTitle)}>
            <table className="be-table">
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
                {table.rows.map((r, ri) => (
                  <tr key={ri} className={spans[ri] > 0 && ri > 0 ? 'is-group' : ''}>
                    {spans[ri] > 0 && (
                      <th scope="row" rowSpan={spans[ri]}>
                        <Pill tone={(['sky', 'mint', 'lilac'] as const)[Math.min(2, Math.floor(ri / 2))]}>{r[0]}</Pill>
                      </th>
                    )}
                    {r.slice(1).map((c, ci) => (
                      <td key={ci} className={ci === 2 ? 'be-table__max' : ''}>
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="be-tile be-tile--ink be-terms">
          <h3>{pick(scaleup.termsTitle)}</h3>
          <p className="be-terms__desc">{pick(scaleup.termsDesc)}</p>
          <div className="be-accordion">
            {scaleup.terms.map((tm, i) => {
              const on = term === i
              return (
                <div key={i} className={'be-acc' + (on ? ' is-open' : '')}>
                  <h4>
                    <button aria-expanded={on} aria-controls={`be-term-${i}`} onClick={() => setTerm(on ? null : i)}>
                      <span className="be-acc__no">{String(i + 1).padStart(2, '0')}</span>
                      <span className="be-acc__t">{pick(tm.title)}</span>
                      <Plus open={on} />
                    </button>
                  </h4>
                  <div className="be-acc__panel" id={`be-term-${i}`} role="region" aria-hidden={!on}>
                    <div>
                      <p>{pick(tm.desc)}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
