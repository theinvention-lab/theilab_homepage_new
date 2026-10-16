import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLang } from '../i18n'
import { PageHero, Reveal, SectionHead } from '../components/ui'
import { CompanyCard, ProjectCard, StudioCaseCard } from '../components/cards'
import { categories, projectById, projectOrder, projects, studioCaseIds, teams, type CategoryKey, type TeamKey } from '../data/projects'
import { countryEn, sectorEn, sortedCompanies } from '../data/portfolio'

const PORTFOLIO_PAGE = 8
const PROJECT_PAGE = 6

export default function Cases() {
  const { t, pick, lang } = useLang()
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.getElementById(location.hash.slice(1))
    if (el) window.setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }, [location.hash])

  // Portfolio filters
  const sectors = useMemo(() => Array.from(new Set(sortedCompanies.map((c) => c.sector))).sort((a, b) => a.localeCompare(b, 'ko')), [])
  const countries = useMemo(() => Array.from(new Set(sortedCompanies.map((c) => c.country))).sort((a, b) => a.localeCompare(b, 'ko')), [])
  const [sector, setSector] = useState('')
  const [country, setCountry] = useState('')
  const [query, setQuery] = useState('')
  const [pfShown, setPfShown] = useState(PORTFOLIO_PAGE)

  const filteredCompanies = useMemo(() => {
    const q = query.trim().toLowerCase()
    return sortedCompanies.filter(
      (c) =>
        (!sector || c.sector === sector) &&
        (!country || c.country === country) &&
        (!q || c.nameKo.toLowerCase().includes(q) || c.nameEn.toLowerCase().includes(q) || c.service.toLowerCase().includes(q)),
    )
  }, [sector, country, query])

  // Project filters
  const [team, setTeam] = useState<TeamKey | ''>('')
  const [category, setCategory] = useState<CategoryKey | ''>('')
  const [prShown, setPrShown] = useState(PROJECT_PAGE)

  const orderedProjects = useMemo(() => {
    const nonStudio = projects.filter((p) => p.category !== 'studio')
    const head = projectOrder.map((id) => nonStudio.find((p) => p.id === id)!).filter(Boolean)
    const rest = nonStudio.filter((p) => !projectOrder.includes(p.id)).sort((a, b) => b.year.localeCompare(a.year) || b.id - a.id)
    return [...head, ...rest]
  }, [])

  const filteredProjects = orderedProjects.filter((p) => (!team || p.team === team) && (!category || p.category === category))

  const categoryKeys = (Object.keys(categories) as CategoryKey[]).filter((k) => k !== 'studio').sort((a, b) => pick(categories[a]).localeCompare(pick(categories[b]), lang))

  return (
    <>
      <PageHero
        eyebrow="SUCCESS STORIES"
        title={'Building the\nNext Unicorns'}
        desc={t(
          '초기 스타트업 투자부터 대기업 사내벤처 스핀오프까지.\n더인벤션랩은 혁신적인 창업가들과 함께 시장의 문제를 해결하고 새로운 가치를 만듭니다.',
          'From early-stage startup investment to corporate venture spin-offs.\nThe Invention Lab works with innovative entrepreneurs to solve market problems and create new value.',
        )}
      />

      <section className="section" id="studio">
        <div className="container">
          <SectionHead eyebrow="VENTURE STUDIO" title="Venture Studio Cases" />
          <div className="case-grid case-grid--4">
            {studioCaseIds.map((id, i) => {
              const p = projectById(id)
              return p ? (
                <Reveal key={id} delay={i * 70}>
                  <StudioCaseCard p={p} />
                </Reveal>
              ) : null
            })}
          </div>
        </div>
      </section>

      <section className="section section--tint" id="portfolio">
        <div className="container">
          <div className="section-head-row">
            <SectionHead eyebrow={`PORTFOLIO · ${sortedCompanies.length}`} title="Portfolio" desc={t('더인벤션랩이 함께하는 혁신 스타트업 포트폴리오입니다.', 'The innovative startup portfolio partnered with The Invention Lab.')} />
          </div>
          <div className="filters">
            <select
              value={sector}
              onChange={(e) => {
                setSector(e.target.value)
                setPfShown(PORTFOLIO_PAGE)
              }}
              aria-label="Sector"
            >
              <option value="">All Sectors</option>
              {sectors.map((s) => (
                <option key={s} value={s}>
                  {lang === 'en' ? sectorEn[s] ?? s : s}
                </option>
              ))}
            </select>
            <select
              value={country}
              onChange={(e) => {
                setCountry(e.target.value)
                setPfShown(PORTFOLIO_PAGE)
              }}
              aria-label="Location"
            >
              <option value="">All Locations</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {lang === 'en' ? countryEn[c] ?? c : c}
                </option>
              ))}
            </select>
            <input
              type="search"
              placeholder={t('기업명·서비스 검색', 'Search company or service')}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setPfShown(PORTFOLIO_PAGE)
              }}
            />
            <span className="filters__count">
              {filteredCompanies.length} {t('개사', 'companies')}
            </span>
          </div>
          <div className="company-grid">
            {filteredCompanies.slice(0, pfShown).map((c) => (
              <CompanyCard key={c.id} c={c} />
            ))}
          </div>
          {filteredCompanies.length === 0 && <p className="empty">{t('조건에 맞는 기업이 없습니다.', 'No companies match the filters.')}</p>}
          {pfShown < filteredCompanies.length && (
            <div className="load-more">
              <button className="btn btn--ghost" onClick={() => setPfShown((n) => n + 16)}>
                {t('포트폴리오 더보기', 'Load more companies')} ({filteredCompanies.length - pfShown})
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <SectionHead eyebrow={`PROJECTS · ${orderedProjects.length}`} title="Our Projects" />
          <div className="filters">
            <select
              value={team}
              onChange={(e) => {
                setTeam(e.target.value as TeamKey | '')
                setPrShown(PROJECT_PAGE)
              }}
              aria-label="Team"
            >
              <option value="">{t('전체 팀', 'All Teams')}</option>
              {(Object.keys(teams) as TeamKey[]).map((k) => (
                <option key={k} value={k}>
                  {teams[k]}
                </option>
              ))}
            </select>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value as CategoryKey | '')
                setPrShown(PROJECT_PAGE)
              }}
              aria-label="Category"
            >
              <option value="">{t('전체 카테고리', 'All Categories')}</option>
              {categoryKeys.map((k) => (
                <option key={k} value={k}>
                  {pick(categories[k])}
                </option>
              ))}
            </select>
            <span className="filters__count">
              {filteredProjects.length} {t('건', 'projects')}
            </span>
          </div>
          <div className="project-grid">
            {filteredProjects.slice(0, prShown).map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
          {filteredProjects.length === 0 && <p className="empty">{t('조건에 맞는 프로젝트가 없습니다.', 'No projects match the filters.')}</p>}
          {prShown < filteredProjects.length && (
            <div className="load-more">
              <button className="btn btn--ghost" onClick={() => setPrShown((n) => n + 9)}>
                {t('프로젝트 더보기', 'Load more projects')} ({filteredProjects.length - prShown})
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
