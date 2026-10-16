import { Link, useParams } from 'react-router-dom'
import { useLang } from '../i18n'
import { Arrow, ExternalIcon, Eyebrow } from '../components/ui'
import { Rich } from '../components/Rich'
import { ProjectCard, Thumb } from '../components/cards'
import { categories, projectById, projects, teams } from '../data/projects'
import { companies, companyCaseLink } from '../data/portfolio'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { id } = useParams()
  const { t, pick, lang } = useLang()
  const p = projectById(Number(id))
  if (!p) return <NotFound />

  const related = projects.filter((x) => x.id !== p.id && x.category === p.category).slice(0, 3)
  const companyName = Object.entries(companyCaseLink).find(([, pid]) => pid === p.id)?.[0]
  const company = companyName ? companies.find((c) => c.nameKo === companyName) : undefined

  const sections: { key: string; label: string; text?: string }[] = [
    { key: 'overview', label: t('개요', 'Overview'), text: p.overview },
    { key: 'process', label: t('진행 과정', 'Process'), text: p.process },
    { key: 'points', label: t('핵심 포인트', 'Key Points'), text: p.points },
    { key: 'results', label: t('성과', 'Results'), text: p.results },
  ]

  return (
    <>
      <section className="detail-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/cases">Cases</Link>
            <span>/</span>
            <span>{p.category === 'studio' ? 'Venture Studio' : 'Projects'}</span>
          </nav>
          <Eyebrow light>{pick(categories[p.category]).toUpperCase()}</Eyebrow>
          <h1>{pick(p.title)}</h1>
          {lang === 'ko' && p.title.en && p.title.en !== p.title.ko && <div className="detail-hero__sub">{p.title.en}</div>}
          {p.summary && <p className="detail-hero__desc">{pick(p.summary)}</p>}
          <dl className="meta">
            <div>
              <dt>{t('담당', 'Team')}</dt>
              <dd>{teams[p.team]}</dd>
            </div>
            <div>
              <dt>{t('연도', 'Year')}</dt>
              <dd>{p.year}</dd>
            </div>
            <div>
              <dt>{t('기간', 'Period')}</dt>
              <dd style={{ whiteSpace: 'pre-line' }}>{p.period}</dd>
            </div>
            {p.participants && (
              <div>
                <dt>{t('참여', 'Participants')}</dt>
                <dd style={{ whiteSpace: 'pre-line' }}>{p.participants}</dd>
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
      </section>

      <section className="section">
        <div className="container detail">
          <article className="detail__main">
            {p.image && (
              <div className="detail__image">
                <Thumb src={p.image} label={pick(p.title)} seed={p.id} />
              </div>
            )}
            {lang === 'en' && <p className="notice">This case study is currently available in Korean only.</p>}
            {sections
              .filter((s) => s.text)
              .map((s) => (
                <section key={s.key} className="detail__section">
                  <h2>{s.label}</h2>
                  <Rich text={s.text!} />
                </section>
              ))}
          </article>
          <aside className="detail__aside">
            {company && (
              <Link to={`/cases/portfolio/${company.id}`} className="aside-card">
                <span className="aside-card__k">PORTFOLIO</span>
                <strong>{lang === 'en' ? company.nameEn : company.nameKo}</strong>
                <span className="more">
                  {t('기업 정보 보기', 'View company')} <Arrow />
                </span>
              </Link>
            )}
            {p.links && p.links.length > 0 && (
              <div className="aside-card">
                <span className="aside-card__k">{t('성과 링크 · 관련 보도', 'Links & Press')}</span>
                <ul className="link-list">
                  {p.links.map((l) => (
                    <li key={l.url}>
                      <a href={l.url} target="_blank" rel="noreferrer">
                        <span>{l.title}</span>
                        {l.source && <small>{l.source}</small>}
                        <ExternalIcon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <Link to="/contact" className="aside-card aside-card--cta">
              <strong>{t('비슷한 프로젝트를 고민 중이신가요?', 'Planning a similar project?')}</strong>
              <span className="more">
                {t('문의하기', 'Contact us')} <Arrow />
              </span>
            </Link>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--tint">
          <div className="container">
            <div className="section-head-row">
              <h2 className="section-title">{t('같은 카테고리의 프로젝트', 'Related Projects')}</h2>
              <Link to="/cases#projects" className="btn btn--ghost">
                {t('전체 보기', 'See all')} <Arrow />
              </Link>
            </div>
            <div className="project-grid">
              {related.map((r) => (
                <ProjectCard key={r.id} p={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
