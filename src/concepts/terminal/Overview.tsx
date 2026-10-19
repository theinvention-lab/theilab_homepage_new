import { useState } from 'react'
import { Lines } from '../../components/Rich'
import { useLang } from '../../i18n'
import { home, keyNumbers, about, studio, newBiz, scaleup, partnership, globalX } from '../../data/copy'
import { companies } from '../../data/portfolio'
import { projects } from '../../data/projects'
import { news } from '../../data/news'
import { members } from '../../data/team'
import { scrollToPanel } from './model'
import { Head, Label, Panel } from './ui'

export function OverviewPanel() {
  const { pick } = useLang()
  const kpis = Object.values(keyNumbers)
  const feeds = [
    { src: home.capabilities[0].title, stats: newBiz.stats },
    { src: home.capabilities[1].title, stats: scaleup.stats },
    { src: home.capabilities[2].title, stats: partnership.stats },
    { src: globalX.title, stats: globalX.stats },
  ]
  const records = [
    { k: 'PORTFOLIO DB', v: companies.length, panel: 'screener' },
    { k: 'PROJECT LOG', v: projects.length, panel: 'projects' },
    { k: 'NEWS FEED', v: news.length, panel: 'news' },
    { k: 'TEAM', v: members.length, panel: 'team' },
  ]
  return (
    <Panel id="overview" code="01" title="OVERVIEW" meta={<span className="te-live">● LIVE</span>}>
      <div className="te-hero">
        <div className="te-hero__copy">
          <p className="te-hero__eyebrow">&gt; {pick(home.eyebrow)}</p>
          <h1 className="te-hero__title">
            <Lines text={pick(home.title)} />
            <span className="te-cursor" aria-hidden />
          </h1>
          <p className="te-hero__sub">{pick(home.sub)}</p>
          <div className="te-hero__cta">
            <button type="button" className="te-btn te-btn--primary" onClick={() => scrollToPanel('contact')}>
              {home.ctaPrimary} →
            </button>
            <button type="button" className="te-btn" onClick={() => scrollToPanel('platform')}>
              {home.ctaSecondary}
            </button>
          </div>
          <ul className="te-hero__modules" aria-label={home.whatTitle}>
            {home.capabilities.map((c, i) => (
              <li key={c.no}>
                <button
                  type="button"
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('te-cap', { detail: i }))
                    scrollToPanel('capabilities')
                  }}
                >
                  <span className="te-mono te-green">{c.no}</span>
                  <span className="te-hero__mt">{c.title}</span>
                  <span className="te-hero__ms">{c.sub}</span>
                  <span aria-hidden>→</span>
                </button>
              </li>
            ))}
          </ul>
          <ul className="te-records" aria-label="RECORDS">
            {records.map((r) => (
              <li key={r.k}>
                <button type="button" onClick={() => scrollToPanel(r.panel)}>
                  <span className="te-records__k">{r.k}</span>
                  <span className="te-records__v">{r.v}</span>
                  <span className="te-records__u">ROWS</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <dl className="te-kpis">
          {kpis.map((k, i) => (
            <div key={i} className={'te-kpi' + (i === 0 ? ' te-kpi--main' : '')}>
              <dt>
                <span className="te-kpi__idx">K{String(i + 1).padStart(2, '0')}</span>
                {pick(k.label)}
              </dt>
              <dd>{k.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="te-feed">
        <div className="te-feed__head">
          <Label tone="green">STAT FEED</Label>
          <span className="te-dim te-mono">{feeds.reduce((a, f) => a + f.stats.length, 0)} SERIES</span>
        </div>
        <div className="te-feed__grid">
          {feeds.map((f) => (
            <div key={f.src} className="te-feed__col">
              <p className="te-feed__src">{f.src}</p>
              <dl>
                {f.stats.map((s, i) => (
                  <div key={i} className="te-feed__row">
                    <dt>{pick(s.label)}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  )
}

export function ThesisPanel() {
  const { pick } = useLang()
  const nc = home.nextChapter
  return (
    <Panel id="thesis" code="02" title={home.journeyEyebrow} meta={home.journeyPeriod}>
      <div className="te-split">
        <div>
          <Head eyebrow={home.journeyLabel} title={pick(home.journeyTitle)} />
          <ol className="te-timeline">
            {home.journey.map((j, i) => (
              <li key={i}>
                <span className="te-timeline__n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h4>{pick(j.title)}</h4>
                  <p>{pick(j.desc)}</p>
                </div>
              </li>
            ))}
            <li className="te-timeline__next">
              <span className="te-timeline__n">→</span>
              <div>
                <p className="te-mono te-amber">
                  {nc.label} · {nc.tag}
                </p>
                <h4>{nc.title}</h4>
                <p>{pick(nc.desc)}</p>
                <div className="te-pills">
                  {nc.pills.map((p, i) => (
                    <div key={i} className="te-pill">
                      <strong>{pick(p.title)}</strong>
                      <span>{pick(p.desc)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div>
          <Head eyebrow={about.eyebrow} title={pick(about.title)} desc={pick(about.desc)} />
          <ul className="te-pillars">
            {about.pillars.map((p, i) => (
              <li key={i}>
                <Label tone={i % 2 ? undefined : 'green'}>{p.tag}</Label>
                <h4>{pick(p.title)}</h4>
                <p>{pick(p.desc)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Panel>
  )
}

/* positions (%) of 5 engines on a ring, starting at 12 o'clock */
const RING = Array.from({ length: 5 }, (_, i) => {
  const a = (-90 + i * 72) * (Math.PI / 180)
  return { x: 50 + 39 * Math.cos(a), y: 50 + 39 * Math.sin(a) }
})

export function PlatformPanel() {
  const { pick } = useLang()
  const [sel, setSel] = useState(0)
  const eng = studio.engines[sel]
  return (
    <Panel id="platform" code="03" title={studio.platformTitle.toUpperCase()} meta={`${studio.engines.length} ENGINES`}>
      <div className="te-split te-split--top">
        <Head eyebrow={home.howEyebrow + ' — ' + home.howTitle} title={studio.platformTitle} desc={pick(home.howDesc)} />
        <p className="te-platform__desc">{pick(studio.platformDesc)}</p>
      </div>

      <div className="te-platform">
        <div className="te-ring" role="group" aria-label={studio.platformTitle}>
          <svg viewBox="0 0 100 100" className="te-ring__svg" aria-hidden>
            <circle cx="50" cy="50" r="39" className="te-ring__orbit" />
            <circle cx="50" cy="50" r="24" className="te-ring__orbit te-ring__orbit--in" />
            <polygon points={RING.map((p) => `${p.x},${p.y}`).join(' ')} className="te-ring__poly" />
            {RING.map((p, i) => (
              <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} className={'te-ring__spoke' + (i === sel ? ' is-on' : '')} />
            ))}
          </svg>
          <div className="te-ring__core">
            <span>{home.coreCenter}</span>
          </div>
          {studio.engines.map((e, i) => (
            <button
              key={e.name}
              type="button"
              className={'te-ring__node' + (i === sel ? ' is-on' : '')}
              style={{ left: RING[i].x + '%', top: RING[i].y + '%' }}
              aria-pressed={i === sel}
              onClick={() => setSel(i)}
            >
              <span className="te-ring__no">E{i + 1}</span>
              {e.name}
            </button>
          ))}
        </div>

        <div className="te-engine" aria-live="polite">
          <div className="te-engine__tabs" role="tablist">
            {studio.engines.map((e, i) => (
              <button key={e.name} role="tab" aria-selected={i === sel} className={i === sel ? 'is-on' : ''} onClick={() => setSel(i)}>
                {String(i + 1).padStart(2, '0')}
              </button>
            ))}
          </div>
          <p className="te-engine__owner">
            OWNER <span>{eng.owner}</span>
          </p>
          <h3 className="te-engine__name">{eng.name}</h3>
          <ul className="te-engine__items">
            {eng.items.map((it, i) => (
              <li key={i}>
                <span className="te-mono te-green">{sel + 1}.{i + 1}</span>
                {pick(it)}
              </li>
            ))}
          </ul>
          <dl className="te-core">
            {home.core.map((c) => (
              <div key={c.k}>
                <dt>{c.k}</dt>
                <dd>{c.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="te-sub">
        <Head eyebrow={studio.eyebrow} title={studio.factoryTitle} desc={pick(studio.factoryDesc)} />
        <ol className="te-factory">
          {studio.factory.map((f, i) => (
            <li key={f.k} className={f.main ? 'is-main' : ''}>
              <span className="te-factory__k">
                M{i + 1} · {f.k}
              </span>
              <h4>{pick(f.title)}</h4>
              <p>{pick(f.desc)}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="te-split te-sub">
        <div>
          <Head title={studio.modelTitle} desc={pick(studio.modelDesc)} />
          <ul className="te-model">
            {studio.model.map((m) => (
              <li key={m.k}>
                <Label tone="green">{m.k}</Label>
                <h4>{m.title}</h4>
                <p>{pick(m.desc)}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Head title={studio.diffTitle} desc={pick(studio.diffDesc)} />
          <ol className="te-diffs">
            {studio.diffs.map((d, i) => (
              <li key={i}>
                <span className="te-mono te-amber">D{i + 1}</span>
                {pick(d)}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Panel>
  )
}
