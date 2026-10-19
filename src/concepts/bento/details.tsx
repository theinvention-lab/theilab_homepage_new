import { Rich } from '../../components/Rich'
import { useLang } from '../../i18n'
import { categories, projectById, projects, teams, type Project } from '../../data/projects'
import { companies, companyById, companyCaseLink, countryEn, sectorEn, type Company } from '../../data/portfolio'
import { memberById } from '../../data/team'
import { newsById, newsCategoryLabel } from '../../data/news'
import { globalX } from '../../data/copy'
import { Arrow, initials, Pill, toneAt, useBento, type SheetTarget } from './shared'

function normalizeUrl(u: string) {
  return /^https?:\/\//.test(u) ? u : `https://${u}`
}

/** 프로젝트와 연결된 포트폴리오 기업 (벤처스튜디오 사례 링크) */
export function companyForProject(id: number): Company | undefined {
  const name = Object.keys(companyCaseLink).find((k) => companyCaseLink[k] === id)
  return name ? companies.find((c) => c.nameKo === name) : undefined
}

/** 기업과 연결된 프로젝트 (사례 링크 + 본문 언급) */
export function projectsForCompany(c: Company): Project[] {
  const caseId = companyCaseLink[c.nameKo]
  const studio = caseId ? projectById(caseId) : undefined
  const mentioned = projects.filter(
    (p) => p.id !== caseId && [p.results, p.overview, p.points].some((txt) => txt && c.nameKo.length > 1 && txt.includes(c.nameKo)),
  )
  return [...(studio ? [studio] : []), ...mentioned]
}

export function sheetLabel(t: SheetTarget, lang: 'ko' | 'en'): string {
  if (t.kind === 'project') {
    const p = projectById(t.id)
    return p ? (lang === 'en' ? p.title.en ?? p.title.ko : p.title.ko) : 'Project'
  }
  if (t.kind === 'company') {
    const c = companyById(t.id)
    return c ? (lang === 'en' ? c.nameEn : c.nameKo) : 'Company'
  }
  if (t.kind === 'member') {
    const m = memberById(t.id)
    return m ? (lang === 'en' ? m.name.en ?? m.name.ko : m.name.ko) : 'Member'
  }
  return newsById(t.id)?.title ?? 'News'
}

export function sheetTone(t: SheetTarget): string {
  if (t.kind === 'project') return projectById(t.id)?.category === 'studio' ? 'peach' : 'sky'
  if (t.kind === 'company') return 'mint'
  if (t.kind === 'member') return 'lilac'
  return 'butter'
}

export function SheetContent({ target }: { target: SheetTarget }) {
  if (target.kind === 'project') return <ProjectSheet id={target.id} />
  if (target.kind === 'company') return <CompanySheet id={target.id} />
  if (target.kind === 'member') return <MemberSheet id={target.id} />
  return <NewsSheet id={target.id} />
}

function ProjectSheet({ id }: { id: number }) {
  const { t, pick, lang } = useLang()
  const { open, goContact } = useBento()
  const p = projectById(id)
  if (!p) return null
  const company = companyForProject(p.id)
  const sections = [
    { key: 'overview', label: t('개요', 'Overview'), text: p.overview },
    { key: 'process', label: t('진행 과정', 'Process'), text: p.process },
    { key: 'points', label: t('핵심 포인트', 'Key Points'), text: p.points },
    { key: 'results', label: t('성과', 'Results'), text: p.results },
  ].filter((s) => s.text)
  const related = projects.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4)
  return (
    <article className="be-detail">
      <div className="be-detail__hero">
        {p.image ? (
          <div className="be-detail__img">
            <img src={p.image} alt="" loading="lazy" />
          </div>
        ) : (
          <div className={`be-detail__mono be-tone--${toneAt(p.id)}`} aria-hidden>
            <span>{String(p.id).padStart(2, '0')}</span>
          </div>
        )}
        <div className="be-detail__head">
          <div className="be-pills">
            <Pill tone="ink" solid>
              {pick(categories[p.category])}
            </Pill>
            <Pill>{teams[p.team]}</Pill>
          </div>
          <h2 className="be-detail__title">{lang === 'en' ? p.title.en ?? p.title.ko : p.title.ko}</h2>
          {p.summary && <p className="be-detail__lead">{pick(p.summary)}</p>}
          <dl className="be-meta">
            <div>
              <dt>{t('연도', 'Year')}</dt>
              <dd>{p.year}</dd>
            </div>
            <div>
              <dt>{t('기간', 'Period')}</dt>
              <dd>{p.period}</dd>
            </div>
            {p.participants && (
              <div>
                <dt>{t('참여', 'Participants')}</dt>
                <dd>{p.participants}</dd>
              </div>
            )}
            {p.sector && (
              <div>
                <dt>{t('섹터', 'Sector')}</dt>
                <dd>{p.sector}</dd>
              </div>
            )}
          </dl>
        </div>
      </div>

      <div className="be-detail__grid">
        <div className="be-detail__main">
          {sections.map((s, i) => (
            <section key={s.key} className="be-detail__sec">
              <h3>
                <span>{String(i + 1).padStart(2, '0')}</span> {s.label}
              </h3>
              <Rich text={s.text!} className="be-rich" />
            </section>
          ))}
        </div>
        <aside className="be-detail__aside">
          {company && (
            <button className="be-mini be-mini--mint" onClick={() => open({ kind: 'company', id: company.id })}>
              <span className="be-mini__k">{t('기업 정보 보기', 'View company')}</span>
              <strong>{lang === 'en' ? company.nameEn : company.nameKo}</strong>
              <Arrow />
            </button>
          )}
          {p.links && p.links.length > 0 && (
            <div className="be-mini be-mini--plain">
              <span className="be-mini__k">{t('성과 링크 · 관련 보도', 'Links & Press')}</span>
              <ul className="be-links">
                {p.links.map((l) => (
                  <li key={l.url}>
                    <a href={l.url} target="_blank" rel="noreferrer">
                      {l.source && <small>{l.source}</small>}
                      <span>{l.title}</span>
                      <Arrow dir="out" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button className="be-mini be-mini--ink" onClick={() => goContact()}>
            <span className="be-mini__k">{t('비슷한 프로젝트를 고민 중이신가요?', 'Planning a similar project?')}</span>
            <strong>{t('문의하기', 'Contact us')}</strong>
            <Arrow />
          </button>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="be-detail__related">
          <h3>{t('같은 카테고리의 프로젝트', 'Related Projects')}</h3>
          <div className="be-related">
            {related.map((r) => (
              <button key={r.id} className={`be-related__item be-tone--${toneAt(r.id)}`} onClick={() => open({ kind: 'project', id: r.id })}>
                <small>{r.year}</small>
                <strong>{lang === 'en' ? r.title.en ?? r.title.ko : r.title.ko}</strong>
                <Arrow />
              </button>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}

function CompanySheet({ id }: { id: number }) {
  const { t, pick, lang } = useLang()
  const { open } = useBento()
  const c = companyById(id)
  if (!c) return null
  const linked = projectsForCompany(c)
  const peers = companies.filter((x) => x.id !== c.id && x.sector === c.sector).slice(0, 6)
  const sea = globalX.seaPortfolio.find((s) => s.match && s.match === c.nameKo)
  const url = c.homepage ? normalizeUrl(c.homepage) : ''
  const name = lang === 'en' ? c.nameEn : c.nameKo
  return (
    <article className="be-detail">
      <div className="be-detail__hero be-detail__hero--company">
        <div className={`be-detail__mono be-detail__mono--round be-tone--${toneAt(c.id)}`} aria-hidden>
          <span>{initials(c.nameEn)}</span>
        </div>
        <div className="be-detail__head">
          <div className="be-pills">
            <Pill tone="ink" solid>
              {lang === 'en' ? sectorEn[c.sector] ?? c.sector : c.sector}
            </Pill>
            {c.stage && <Pill tone="accent">{c.stage}</Pill>}
          </div>
          <h2 className="be-detail__title">{name}</h2>
          {lang === 'ko' && c.nameEn !== c.nameKo && <p className="be-detail__sub">{c.nameEn}</p>}
          {sea && <p className="be-detail__lead">{pick(sea.desc)}</p>}
          <dl className="be-meta">
            <div>
              <dt>{t('국가', 'Location')}</dt>
              <dd>{lang === 'en' ? countryEn[c.country] ?? c.country : c.country}</dd>
            </div>
            <div>
              <dt>{t('분야', 'Sector')}</dt>
              <dd>{lang === 'en' ? sectorEn[c.sector] ?? c.sector : c.sector}</dd>
            </div>
            {c.service && (
              <div>
                <dt>{t('서비스', 'Service')}</dt>
                <dd>{c.service}</dd>
              </div>
            )}
            {c.stage && (
              <div>
                <dt>{t('단계', 'Stage')}</dt>
                <dd>{c.stage}</dd>
              </div>
            )}
            {c.note && (
              <div>
                <dt>{t('비고', 'Note')}</dt>
                <dd>{c.note}</dd>
              </div>
            )}
          </dl>
          {url && (
            <a className="be-btn be-btn--ink" href={url} target="_blank" rel="noreferrer">
              {t('홈페이지 방문', 'Visit website')} <Arrow dir="out" />
            </a>
          )}
        </div>
      </div>

      {linked.length > 0 && (
        <section className="be-detail__related">
          <h3>{t('함께한 프로젝트', 'Projects with The Invention Lab')}</h3>
          <div className="be-related be-related--wide">
            {linked.map((p) => (
              <button key={p.id} className="be-related__item be-related__item--img" onClick={() => open({ kind: 'project', id: p.id })}>
                {p.image && <img src={p.image} alt="" loading="lazy" />}
                <small>{pick(categories[p.category])}</small>
                <strong>{lang === 'en' ? p.title.en ?? p.title.ko : p.title.ko}</strong>
                <span className="be-related__cta">
                  {t('상세 보기', 'View')} <Arrow />
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {peers.length > 0 && (
        <section className="be-detail__related">
          <h3>{t('같은 분야의 포트폴리오', 'More in this sector')}</h3>
          <div className="be-peers">
            {peers.map((x) => (
              <button key={x.id} className="be-peer" onClick={() => open({ kind: 'company', id: x.id })}>
                <span className={`be-avatar be-avatar--sm be-tone--${toneAt(x.id)}`}>{initials(x.nameEn)}</span>
                <span>{lang === 'en' ? x.nameEn : x.nameKo}</span>
              </button>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}

function MemberSheet({ id }: { id: string }) {
  const { t, pick, lang } = useLang()
  const m = memberById(id)
  if (!m) return null
  const intro = lang === 'en' && m.introEn ? m.introEn : m.intro
  return (
    <article className="be-detail">
      <div className="be-detail__hero be-detail__hero--company">
        <div className="be-detail__mono be-detail__mono--round be-tone--lilac" aria-hidden>
          <span>{initials(m.name.en ?? m.name.ko)}</span>
        </div>
        <div className="be-detail__head">
          <div className="be-pills">
            <Pill tone="ink" solid>
              {m.unit}
            </Pill>
          </div>
          <h2 className="be-detail__title">{pick(m.name)}</h2>
          {lang === 'ko' && m.name.en && <p className="be-detail__sub">{m.name.en}</p>}
          <p className="be-detail__lead">{pick(m.role)}</p>
        </div>
      </div>
      <div className="be-detail__grid">
        <div className="be-detail__main">
          {intro && (
            <section className="be-detail__sec">
              <h3>
                <span>01</span> {t('소개', 'Profile')}
              </h3>
              <Rich text={intro} className="be-rich" />
            </section>
          )}
        </div>
        <aside className="be-detail__aside">
          {m.education && (
            <div className="be-mini be-mini--plain">
              <span className="be-mini__k">{t('학력', 'Education')}</span>
              <Rich text={m.education} className="be-rich be-rich--sm" />
            </div>
          )}
          {m.career && (
            <div className="be-mini be-mini--plain">
              <span className="be-mini__k">{t('경력', 'Career')}</span>
              <Rich text={m.career} className="be-rich be-rich--sm" />
            </div>
          )}
        </aside>
      </div>
    </article>
  )
}

function NewsSheet({ id }: { id: number }) {
  const { t } = useLang()
  const n = newsById(id)
  if (!n) return null
  return (
    <article className="be-detail be-detail--news">
      <div className="be-detail__head be-detail__head--news">
        <div className="be-pills">
          {n.category && (
            <Pill tone="ink" solid>
              {newsCategoryLabel[n.category]}
            </Pill>
          )}
          <Pill>{n.date}</Pill>
        </div>
        <h2 className="be-detail__title be-detail__title--news">{n.title}</h2>
        {n.summary && (
          <ul className="be-summary">
            {n.summary.split(' / ').map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="be-detail__grid">
        <div className="be-detail__main">
          {n.body ? (
            <Rich text={n.body} className="be-rich" />
          ) : (
            <p className="be-detail__lead">{t('이 글은 더인벤션랩 블로그에서 전체 내용을 확인하실 수 있습니다.', 'Read the full post on The Invention Lab blog.')}</p>
          )}
          {n.url && (
            <a className="be-btn be-btn--ink" href={n.url} target="_blank" rel="noreferrer">
              {n.category === 'blog' ? t('블로그에서 읽기', 'Read on blog') : t('원문 보기', 'View original')} <Arrow dir="out" />
            </a>
          )}
        </div>
        {n.related && n.related.length > 0 && (
          <aside className="be-detail__aside">
            <div className="be-mini be-mini--plain">
              <span className="be-mini__k">{t('관련 보도', 'In the Press')}</span>
              <ul className="be-links">
                {n.related.map((l) => (
                  <li key={l.url}>
                    <a href={l.url} target="_blank" rel="noreferrer">
                      {l.source && <small>{l.source}</small>}
                      <span>{l.title}</span>
                      <Arrow dir="out" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>
    </article>
  )
}
