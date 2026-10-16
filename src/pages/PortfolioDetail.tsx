import { Link, useParams } from 'react-router-dom'
import { useLang } from '../i18n'
import { Arrow, ExternalIcon, Eyebrow } from '../components/ui'
import { CompanyCard, StudioCaseCard } from '../components/cards'
import { companies, companyById, companyCaseLink, countryEn, sectorEn } from '../data/portfolio'
import { projectById, projects } from '../data/projects'
import NotFound from './NotFound'

function normalizeUrl(u: string) {
  if (!u) return ''
  return /^https?:\/\//.test(u) ? u : `https://${u}`
}

export default function PortfolioDetail() {
  const { id } = useParams()
  const { t, lang } = useLang()
  const c = companyById(Number(id))
  if (!c) return <NotFound />

  const caseId = companyCaseLink[c.nameKo]
  const studioCase = caseId ? projectById(caseId) : undefined
  // 프로젝트 성과/본문에 기업명이 등장하는 경우 연결
  const mentioned = projects.filter(
    (p) => p.id !== caseId && [p.results, p.overview, p.points].some((txt) => txt && c.nameKo.length > 1 && txt.includes(c.nameKo)),
  )
  const peers = companies.filter((x) => x.id !== c.id && x.sector === c.sector).slice(0, 4)
  const url = normalizeUrl(c.homepage)

  return (
    <>
      <section className="detail-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/cases">Cases</Link>
            <span>/</span>
            <Link to="/cases#portfolio">Portfolio</Link>
          </nav>
          <Eyebrow light>{lang === 'en' ? sectorEn[c.sector] ?? c.sector : c.sector}</Eyebrow>
          <h1>{lang === 'en' ? c.nameEn : c.nameKo}</h1>
          {lang === 'ko' && c.nameEn !== c.nameKo && <div className="detail-hero__sub">{c.nameEn}</div>}
          <dl className="meta">
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
            <a className="btn btn--white" href={url} target="_blank" rel="noreferrer">
              {t('홈페이지 방문', 'Visit website')} <ExternalIcon />
            </a>
          )}
        </div>
      </section>

      {(studioCase || mentioned.length > 0) && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">{t('함께한 프로젝트', 'Projects with The Invention Lab')}</h2>
            <div className="case-grid">
              {studioCase && <StudioCaseCard p={studioCase} />}
              {mentioned.map((p) => (
                <Link key={p.id} to={`/cases/project/${p.id}`} className="project-card">
                  <div className="project-card__top">
                    <span className="project-card__year">{p.year}</span>
                  </div>
                  <h3>{lang === 'en' ? p.title.en ?? p.title.ko : p.title.ko}</h3>
                  <span className="more">
                    {t('상세 보기', 'View')} <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {peers.length > 0 && (
        <section className="section section--tint">
          <div className="container">
            <div className="section-head-row">
              <h2 className="section-title">{t('같은 분야의 포트폴리오', 'More in this sector')}</h2>
              <Link to="/cases#portfolio" className="btn btn--ghost">
                {t('전체 포트폴리오', 'All portfolio')} <Arrow />
              </Link>
            </div>
            <div className="company-grid">
              {peers.map((p) => (
                <CompanyCard key={p.id} c={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
