import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { Arrow, Reveal } from '../components/ui'
import ManifestoHero from '../components/ManifestoHero'
import { Lines } from '../components/Rich'
import { home, keyNumbers } from '../data/copy'

/** 좌측 라벨 + 우측 본문으로 이루어진 미니멀 섹션 행 */
function Row({ label, children, id }: { label: string; children: ReactNode; id?: string }) {
  return (
    <section className="m-row" id={id}>
      <div className="container m-row__inner">
        <h2 className="m-row__label">{label}</h2>
        <div className="m-row__body">{children}</div>
      </div>
    </section>
  )
}

export default function Home() {
  const { pick } = useLang()
  const numbers = [keyNumbers.aum, keyNumbers.portfolio, keyNumbers.tips, keyNumbers.lips]

  return (
    <>
      <ManifestoHero />

      <section className="m-numbers">
        <div className="container m-numbers__grid">
          {numbers.map((n) => (
            <div key={n.value} className="m-number">
              <strong>{n.value}</strong>
              <span>{pick(n.label)}</span>
            </div>
          ))}
        </div>
      </section>

      <Row label={home.journeyEyebrow}>
        <Reveal>
          <p className="m-statement">
            <Lines text={pick(home.journeyTitle)} />
          </p>
        </Reveal>
        <ol className="m-list m-list--numbered">
          {home.journey.map((j, i) => (
            <li key={j.title.ko}>
              <span className="m-list__no">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{pick(j.title)}</h3>
                <p>{pick(j.desc)}</p>
              </div>
            </li>
          ))}
          <li className="m-list__next">
            <span className="m-list__no">
              Next
              <br />
              Chapter
            </span>
            <div>
              <h3>{home.nextChapter.title}</h3>
              <p>{pick(home.nextChapter.desc)}</p>
              <Link to="/capabilities/venture-studio" className="btn btn--primary">
                {home.nextChapter.cta} <Arrow />
              </Link>
            </div>
          </li>
        </ol>
      </Row>

      <Row label={home.whatEyebrow}>
        <h3 className="m-title">{home.whatTitle}</h3>
        <p className="m-lead">{pick(home.whatDesc)}</p>
        <div className="m-cols">
          {home.capabilities.map((c) => (
            <Link key={c.no} to={c.to} className="m-col">
              <span className="m-col__no">{c.no}</span>
              <strong className="m-col__title">{c.title}</strong>
              <small className="m-col__sub">{c.sub}</small>
              <span className="m-col__desc">{pick(c.desc)}</span>
              <span className="m-col__items">
                {c.items.map((it) => (
                  <span key={it.ko}>{pick(it)}</span>
                ))}
              </span>
              <span className="m-col__arrow" aria-hidden>
                <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </Row>

      <Row label={home.howEyebrow}>
        <h3 className="m-title">{home.howTitle}</h3>
        <p className="m-lead">
          <Lines text={pick(home.howDesc)} />
        </p>
        <Reveal className="m-orbit-wrap">
          <div className="m-orbit">
            <span className="m-orbit__ring" aria-hidden />
            <span className="m-orbit__ring m-orbit__ring--inner" aria-hidden />
            <span className="m-orbit__spin" aria-hidden>
              <i />
            </span>
            <span className="m-orbit__axis" aria-hidden />
            <div className="m-orbit__center">
              <span>{home.coreCenter}</span>
            </div>
            {home.core.map((c, i) => (
              <div key={c.k} className={`m-orbit__node m-orbit__node--${i}`} style={{ ['--d' as string]: `${i * -1.5}s` }}>
                <span>{c.k}</span>
                <strong>{c.v}</strong>
              </div>
            ))}
          </div>
        </Reveal>
      </Row>
    </>
  )
}
