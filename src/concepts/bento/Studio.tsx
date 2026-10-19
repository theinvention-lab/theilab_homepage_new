import { useState } from 'react'
import { useLang } from '../../i18n'
import { home, studio } from '../../data/copy'
import { Arrow, Lines, Pill, SectionHead, toneAt, useBento } from './shared'

export default function Studio() {
  const { pick } = useLang()
  const { goContact } = useBento()
  const [engine, setEngine] = useState(0)

  return (
    <section className="be-section" id="studio" aria-labelledby="be-studio-title">
      <SectionHead
        no="01"
        eyebrow={studio.eyebrow}
        id="be-studio-title"
        title={<Lines text={studio.title} />}
        desc={
          <>
            <p>{pick(studio.desc)}</p>
            <button className="be-btn be-btn--ink" onClick={() => goContact()}>
              {studio.cta} <Arrow />
            </button>
          </>
        }
      />

      {/* Journey */}
      <div className="be-bento be-bento--journey">
        <div className="be-tile be-tile--plain be-journey__intro">
          <div className="be-pills">
            <Pill tone="ink" solid>
              {home.journeyEyebrow}
            </Pill>
            <Pill>{home.journeyPeriod}</Pill>
          </div>
          <p className="be-journey__title">
            <Lines text={pick(home.journeyTitle)} />
          </p>
          <span className="be-kicker">{home.journeyLabel}</span>
        </div>
        {home.journey.map((j, i) => (
          <div key={i} className={`be-tile be-tone--${['sky', 'mint', 'peach'][i]} be-journey__step`}>
            <span className="be-bignum">{String(i + 1).padStart(2, '0')}</span>
            <h3>{pick(j.title)}</h3>
            <p>{pick(j.desc)}</p>
          </div>
        ))}
      </div>

      {/* Factory puzzle */}
      <div className="be-subhead">
        <h3>{studio.factoryTitle}</h3>
        <p>{pick(studio.factoryDesc)}</p>
      </div>
      <div className="be-bento be-bento--factory">
        {studio.factory.map((f, i) => (
          <div key={f.k} className={'be-tile be-factory' + (f.main ? ' be-factory--main be-tile--accent' : ` be-tone--${['butter', 'sky', '', 'mint', 'lilac'][i]}`)} style={{ gridArea: `f${i}` }}>
            <span className="be-factory__k">{f.k}</span>
            <h4>{pick(f.title)}</h4>
            <p>{pick(f.desc)}</p>
            <span className="be-factory__knob" aria-hidden />
          </div>
        ))}
      </div>

      {/* Studio Core Platform */}
      <div className="be-subhead">
        <h3>{studio.platformTitle}</h3>
        <p>{pick(studio.platformDesc)}</p>
      </div>
      <div className="be-engines" role="list">
        {studio.engines.map((e, i) => {
          const on = engine === i
          return (
            <div key={e.name} role="listitem" className={`be-engine be-tone--${toneAt(i)}` + (on ? ' is-open' : '')}>
              <button
                className="be-engine__btn"
                aria-expanded={on}
                aria-controls={`be-engine-${i}`}
                onClick={() => setEngine(i)}
                onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setEngine(i)}
              >
                <span className="be-engine__no">{String(i + 1).padStart(2, '0')}</span>
                <span className="be-engine__name">{e.name}</span>
              </button>
              <div className="be-engine__body" id={`be-engine-${i}`} hidden={!on}>
                <span className="be-kicker">{e.owner}</span>
                <ul>
                  {e.items.map((it) => (
                    <li key={it.ko}>{pick(it)}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>

      {/* How we do + model */}
      <div className="be-bento be-bento--how">
        <div className="be-tile be-tile--ink be-how">
          <Pill tone="accent" solid>
            {home.howEyebrow}
          </Pill>
          <h3 className="be-how__title">{home.howTitle}</h3>
          <p className="be-how__desc">
            <Lines text={pick(home.howDesc)} />
          </p>
          <div className="be-core">
            <span className="be-core__center">{home.coreCenter}</span>
            {home.core.map((c, i) => (
              <div key={c.k} className={`be-core__cell be-core__cell--${i}`}>
                <small>{c.k}</small>
                <strong>{c.v}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="be-tile be-tile--plain be-model">
          <h3>{studio.modelTitle}</h3>
          <p>{pick(studio.modelDesc)}</p>
          <ol className="be-model__list">
            {studio.model.map((m, i) => (
              <li key={m.k} className={`be-tone--${['peach', 'mint', 'sky'][i]}`}>
                <span className="be-kicker">{m.k}</span>
                <strong>{m.title}</strong>
                <span>{pick(m.desc)}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Differentiators */}
      <div className="be-subhead">
        <h3>{studio.diffTitle}</h3>
        <p>{pick(studio.diffDesc)}</p>
      </div>
      <div className="be-bento be-bento--diffs">
        {studio.diffs.map((d, i) => (
          <div key={d.ko} className={`be-tile be-diff be-tone--${['butter', 'lilac', 'mint', 'peach'][i]}`}>
            <span className="be-diff__no">{String(i + 1).padStart(2, '0')}</span>
            <strong>{pick(d)}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
