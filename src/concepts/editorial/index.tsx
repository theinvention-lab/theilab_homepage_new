import { useCallback, useEffect, useRef, useState } from 'react'
import './editorial.css'
import { useLang } from '../../i18n'
import { Rich } from '../../components/Rich'
import { home, keyNumbers } from '../../data/copy'
import { categories, projectById, teams } from '../../data/projects'
import { companyById, companyCaseLink, countryEn, sectorEn } from '../../data/portfolio'
import { memberById } from '../../data/team'
import { newsCategoryLabel } from '../../data/news'
import { Manifesto, Factory, Disciplines } from './chapters-a'
import { Borders, CaseFiles, Contributors, Dispatches, Colophon } from './chapters-b'
import { Br, Drawer, OpenCtx, pad, scrollToId, useOpen, useReveal, type Detail } from './ui'

const CHAPTERS = [
  { id: 'ch1', no: '01', name: 'Manifesto' },
  { id: 'ch2', no: '02', name: 'The Factory' },
  { id: 'ch3', no: '03', name: 'Three Disciplines' },
  { id: 'ch4', no: '04', name: 'Across Borders' },
  { id: 'ch5', no: '05', name: 'Case Files' },
  { id: 'ch6', no: '06', name: 'Contributors' },
  { id: 'ch7', no: '07', name: 'Dispatches' },
  { id: 'colophon', no: '—', name: 'Colophon' },
]

const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Noto+Serif+KR:wght@400;600;700&display=swap'

export default function EditorialConcept() {
  const { lang } = useLang()
  const root = useRef<HTMLDivElement>(null)
  const [detail, setDetail] = useState<Detail | null>(null)
  const [active, setActive] = useState('')

  useReveal(root, [lang])

  // 폰트 로드 (CSS @import 보조)
  useEffect(() => {
    if (document.querySelector('link[data-ed-font]')) return
    const l = document.createElement('link')
    l.rel = 'stylesheet'
    l.href = FONT_HREF
    l.dataset.edFont = '1'
    document.head.appendChild(l)
  }, [])

  // 현재 챕터 추적
  useEffect(() => {
    const els = CHAPTERS.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[]
    const onScroll = () => {
      const y = window.innerHeight * 0.35
      let cur = ''
      els.forEach((el) => {
        if (el.getBoundingClientRect().top <= y) cur = el.id
      })
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 활성 탭이 모바일 가로 스크롤 영역 안에 보이도록
  useEffect(() => {
    const b = document.querySelector<HTMLElement>(`.ed-nav [data-ch="${active}"]`)
    const wrap = b?.parentElement?.parentElement
    if (b && wrap && wrap.scrollWidth > wrap.clientWidth) {
      wrap.scrollTo({ left: b.offsetLeft - 16, behavior: 'auto' })
    }
  }, [active])

  const close = useCallback(() => setDetail(null), [])
  const activeCh = CHAPTERS.find((c) => c.id === active)

  return (
    <OpenCtx.Provider value={setDetail}>
      <div className="ed-root" ref={root}>
        <Cover />

        <nav className="ed-nav" aria-label="Chapters">
          <div className="ed-nav__inner">
            <button type="button" className="ed-nav__mark" onClick={() => window.scrollTo({ top: 0 })}>
              TIL<span className="ed-nav__mark-dot">.</span>
            </button>
            <div className="ed-nav__scroll">
              <ol className="ed-nav__list">
                {CHAPTERS.map((c) => (
                  <li key={c.id}>
                    <button
                      type="button"
                      data-ch={c.id}
                      className={`ed-nav__btn${active === c.id ? ' is-active' : ''}`}
                      aria-current={active === c.id ? 'true' : undefined}
                      onClick={() => scrollToId(c.id)}
                    >
                      <span className="ed-nav__no">{c.no}</span>
                      <span className="ed-nav__name">{c.name}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </div>
            <span className="ed-nav__folio" aria-hidden="true">
              {activeCh ? `${activeCh.no === '—' ? '' : 'Ch. ' + activeCh.no}` : 'Contents'}
            </span>
          </div>
        </nav>

        <main className="ed-main">
          <Manifesto />
          <Factory />
          <Disciplines />
          <Borders />
          <CaseFiles />
          <Contributors />
          <Dispatches />
        </main>
        <Colophon />

        <Drawer open={!!detail} onClose={close} label={detailLabel(detail)}>
          {detail && <DetailView d={detail} />}
        </Drawer>
      </div>
    </OpenCtx.Provider>
  )
}

/* ═════════════ Cover ═════════════ */
function Cover() {
  const { pick } = useLang()
  const [l1, l2] = pick(home.title).split('\n')
  return (
    <header className="ed-cover">
      <div className="ed-cover__top">
        <span className="ed-label">{pick(home.eyebrow)}</span>
        <span className="ed-label ed-label--muted">Chapters 01 — 07</span>
      </div>
      <h1 className="ed-mast-h1">
        <span className="ed-mast-h1__a">The Invention</span> <span className="ed-mast-h1__b">Lab</span>
      </h1>
      <div className="ed-cover__rule" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="ed-cover__dateline">
        <span className="ed-label">더인벤션랩</span>
        <span className="ed-label ed-label--accent">Venture Studio</span>
        <span className="ed-label">
          {keyNumbers.since.value} — PRESENT
        </span>
      </div>

      <div className="ed-cover__grid">
        <div className="ed-cover__lead">
          <p className="ed-cover__headline">
            {l1}
            {l2 && (
              <>
                <br />
                <em>{l2}</em>
              </>
            )}
          </p>
          <p className="ed-cover__sub">{pick(home.sub)}</p>
          <div className="ed-cover__ctas">
            <button type="button" className="ed-btn" onClick={() => scrollToId('colophon')}>
              {home.ctaPrimary} <span aria-hidden="true">→</span>
            </button>
            <button type="button" className="ed-textlink" onClick={() => scrollToId('ch2')}>
              {home.ctaSecondary}
            </button>
          </div>
        </div>

        <nav className="ed-toc" aria-label="Contents">
          <p className="ed-label ed-label--accent">Contents</p>
          <ol>
            {CHAPTERS.map((c) => (
              <li key={c.id}>
                <button type="button" className="ed-toc__row" onClick={() => scrollToId(c.id)}>
                  <span className="ed-toc__no">{c.no}</span>
                  <span className="ed-toc__name">{c.name}</span>
                  <span className="ed-toc__dots" aria-hidden="true" />
                  <span className="ed-toc__arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  )
}

/* ═════════════ Drawer content ═════════════ */
function detailLabel(d: Detail | null) {
  if (!d) return ''
  if (d.kind === 'project') return 'Case File'
  if (d.kind === 'member') return 'Contributor'
  if (d.kind === 'company') return 'Portfolio'
  return 'Dispatch'
}

function DetailView({ d }: { d: Detail }) {
  const { pick, lang } = useLang()
  const open = useOpen()

  if (d.kind === 'project') {
    const p = projectById(d.id)
    if (!p) return null
    const parts: { k: string; v?: string }[] = [
      { k: 'Overview', v: p.overview },
      { k: 'Process', v: p.process },
      { k: 'Key Points', v: p.points },
      { k: 'Results', v: p.results },
    ]
    return (
      <article className="ed-detail">
        <p className="ed-label ed-label--accent">{pick(categories[p.category])}</p>
        <h2 className="ed-detail__title">{pick(p.title)}</h2>
        {p.summary && <p className="ed-detail__dek">{pick(p.summary)}</p>}
        <dl className="ed-detail__facts">
          <div>
            <dt>Team</dt>
            <dd>{teams[p.team]}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{p.year}</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd>{p.period}</dd>
          </div>
          {p.participants && (
            <div>
              <dt>Participants</dt>
              <dd>{p.participants}</dd>
            </div>
          )}
          {p.sector && (
            <div>
              <dt>Sector</dt>
              <dd>{p.sector}</dd>
            </div>
          )}
        </dl>
        {p.image && <img className="ed-detail__img" src={p.image} alt={pick(p.title)} />}
        {parts
          .filter((x) => x.v)
          .map((x, i) => (
            <section key={x.k} className="ed-detail__sec">
              <h3 className="ed-detail__h">
                <span>{pad(i + 1)}</span>
                {x.k}
              </h3>
              <Rich text={x.v!} />
            </section>
          ))}
        {p.links && p.links.length > 0 && (
          <section className="ed-detail__sec">
            <h3 className="ed-detail__h">
              <span>↗</span>Press
            </h3>
            <ul className="ed-detail__links">
              {p.links.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noreferrer">
                    {l.source && <span className="ed-label ed-label--muted">{l.source}</span>}
                    <span>{l.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    )
  }

  if (d.kind === 'member') {
    const m = memberById(d.id)
    if (!m) return null
    const intro = lang === 'en' && m.introEn ? m.introEn : m.intro
    const initials = (m.name.en ?? m.name.ko)
      .split(/\s+/)
      .map((w) => w[0])
      .join('')
      .slice(0, 3)
    return (
      <article className="ed-detail">
        <div className="ed-detail__byline">
          <span className="ed-detail__initials" aria-hidden="true">
            {initials}
          </span>
          <div>
            <p className="ed-label ed-label--accent">{m.unit}</p>
            <h2 className="ed-detail__title">{pick(m.name)}</h2>
            <p className="ed-detail__dek">{pick(m.role)}</p>
          </div>
        </div>
        <section className="ed-detail__sec ed-drop">
          <Rich text={intro} />
        </section>
        {m.education && (
          <section className="ed-detail__sec">
            <h3 className="ed-detail__h">Education</h3>
            <Rich text={m.education} />
          </section>
        )}
        {m.career && (
          <section className="ed-detail__sec">
            <h3 className="ed-detail__h">Career</h3>
            <Rich text={m.career} />
          </section>
        )}
      </article>
    )
  }

  if (d.kind === 'company') {
    const c = companyById(d.id)
    if (!c) return null
    const caseId = companyCaseLink[c.nameKo]
    const rows: [string, string][] = [
      ['Sector', lang === 'en' ? sectorEn[c.sector] ?? c.sector : c.sector],
      ['Country', lang === 'en' ? countryEn[c.country] ?? c.country : c.country],
      ['Service', c.service],
      ['Stage', c.stage],
      ['Note', c.note],
    ]
    return (
      <article className="ed-detail">
        <p className="ed-label ed-label--accent">Portfolio No. {pad(c.id)}</p>
        <h2 className="ed-detail__title">{lang === 'en' ? c.nameEn : c.nameKo}</h2>
        {c.nameEn !== c.nameKo && <p className="ed-detail__dek">{lang === 'en' ? c.nameKo : c.nameEn}</p>}
        <dl className="ed-detail__facts ed-detail__facts--list">
          {rows
            .filter(([, v]) => v)
            .map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          {c.homepage && (
            <div>
              <dt>Web</dt>
              <dd>
                <a href={c.homepage} target="_blank" rel="noreferrer">
                  {c.homepage.replace(/^https?:\/\//, '').replace(/\/$/, '')} ↗
                </a>
              </dd>
            </div>
          )}
        </dl>
        {caseId && (
          <button type="button" className="ed-textlink" onClick={() => open({ kind: 'project', id: caseId })}>
            Case File <span aria-hidden="true">→</span>
          </button>
        )}
      </article>
    )
  }

  const n = d.item
  return (
    <article className="ed-detail">
      <p className="ed-label ed-label--accent">
        {n.date.replace(/-/g, '.')}
        {n.category ? ` · ${newsCategoryLabel[n.category]}` : ''}
      </p>
      <h2 className="ed-detail__title ed-detail__title--news">{n.title}</h2>
      {n.summary && (
        <p className="ed-detail__dek">
          <Br text={n.summary} />
        </p>
      )}
      {n.body && (
        <section className="ed-detail__sec ed-drop ed-detail__body">
          <Rich text={n.body} />
        </section>
      )}
      {n.url && (
        <a className="ed-textlink" href={n.url} target="_blank" rel="noreferrer">
          Source <span aria-hidden="true">↗</span>
        </a>
      )}
      {n.related && n.related.length > 0 && (
        <section className="ed-detail__sec">
          <h3 className="ed-detail__h">
            <span>↗</span>Related
          </h3>
          <ul className="ed-detail__links">
            {n.related.map((l) => (
              <li key={l.url}>
                <a href={l.url} target="_blank" rel="noreferrer">
                  {l.source && <span className="ed-label ed-label--muted">{l.source}</span>}
                  <span>{l.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}
