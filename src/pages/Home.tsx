import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { Arrow, Reveal } from '../components/ui'
import ManifestoHero from '../components/ManifestoHero'
import { Lines } from '../components/Rich'
import { home, keyNumbers } from '../data/copy'

/** 섹션 헤더: 좌측 라벨+타이틀, 우측 설명 */
function Head({ eyebrow, title, aside, wide }: { eyebrow: string; title: ReactNode; aside?: ReactNode; wide?: boolean }) {
  return (
    <Reveal className="h-head">
      <div className={wide ? 'h-head__main h-head__main--wide' : 'h-head__main'}>
        <span className="h-eyebrow">{eyebrow}</span>
        {title}
      </div>
      {aside && <p className="h-head__aside">{aside}</p>}
    </Reveal>
  )
}

export default function Home() {
  const { pick } = useLang()
  const numbers = [keyNumbers.aum, keyNumbers.portfolio, keyNumbers.tips, keyNumbers.lips]

  return (
    <>
      <ManifestoHero />

      <section className="h-stats">
        <div className="container h-stats__grid">
          {numbers.map((n) => (
            <div key={n.value} className="h-stat">
              <strong>{n.value}</strong>
              <span>{pick(n.label)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="h-sec">
        <div className="container">
          <Head
            wide
            eyebrow={home.journeyEyebrow}
            title={
              <h2 className="h-statement">
                <Lines text={pick(home.journeyTitle)} />
              </h2>
            }
          />
          <ol className="h-timeline">
            {home.journey.map((j, i) => (
              <li key={j.title.ko} className="h-step">
                <span className="h-step__no">{String(i + 1).padStart(2, '0')}</span>
                <h3>{pick(j.title)}</h3>
                <p>{pick(j.desc)}</p>
              </li>
            ))}
            <li className="h-step h-step--next">
              <span className="h-step__no">
                Next
                <br />
                Chapter
              </span>
              <h3>{home.nextChapter.title}</h3>
              <p>{pick(home.nextChapter.desc)}</p>
              <Link to="/capabilities/venture-studio" className="btn btn--primary">
                {home.nextChapter.cta} <Arrow />
              </Link>
            </li>
          </ol>
        </div>
      </section>

      <section className="h-sec">
        <div className="container">
          <Head eyebrow={home.whatEyebrow} title={<h2 className="h-title">{home.whatTitle}</h2>} aside={pick(home.whatDesc)} />
          <div className="h-caps">
            {home.capabilities.map((c) => (
              <Link key={c.no} to={c.to} className="h-cap">
                <span className="h-cap__no">{c.no}</span>
                <strong className="h-cap__title">{c.title}</strong>
                <small className="h-cap__sub">{c.sub}</small>
                <span className="h-cap__desc">{pick(c.desc)}</span>
                <span className="h-cap__items">
                  {c.items.map((it) => (
                    <span key={it.ko}>{pick(it)}</span>
                  ))}
                </span>
                <span className="h-cap__arrow" aria-hidden>
                  <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="h-sec h-sec--soft">
        <div className="container">
          <Head
            eyebrow={home.howEyebrow}
            title={<h2 className="h-title">{home.howTitle}</h2>}
            aside={<Lines text={pick(home.howDesc)} />}
          />
          <Reveal className="h-core">
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
        </div>
      </section>
    </>
  )
}
