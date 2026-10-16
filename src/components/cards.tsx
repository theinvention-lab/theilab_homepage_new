import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { categories, teams, type Project } from '../data/projects'
import { countryEn, sectorEn, type Company } from '../data/portfolio'
import { newsCategoryLabel, type NewsItem } from '../data/news'
import { Arrow, ExternalIcon } from './ui'

const gradients = [
  'linear-gradient(135deg,#1b3a8a,#3a6df0)',
  'linear-gradient(135deg,#ff5a36,#ff9a3c)',
  'linear-gradient(135deg,#0f766e,#22c1a3)',
  'linear-gradient(135deg,#5b21b6,#9b6bff)',
  'linear-gradient(135deg,#0b1b3f,#2c4a8a)',
]

export function Thumb({ src, label, seed = 0 }: { src?: string; label: string; seed?: number }) {
  const [failed, setFailed] = useState(false)
  if (src && !failed) {
    return (
      <div className="thumb">
        <img src={src} alt={label} loading="lazy" onError={() => setFailed(true)} />
      </div>
    )
  }
  return (
    <div className="thumb thumb--placeholder" style={{ background: gradients[seed % gradients.length] }}>
      <span>{label}</span>
    </div>
  )
}

export function StudioCaseCard({ p }: { p: Project }) {
  const { pick, t } = useLang()
  return (
    <Link to={`/cases/project/${p.id}`} className="case-card">
      <Thumb src={p.image} label={pick(p.title)} seed={p.id} />
      <div className="case-card__body">
        <div className="tag tag--accent">{(p.sector ?? '').toUpperCase()}</div>
        <h3>{pick(p.title)}</h3>
        <p>{pick(p.summary)}</p>
        <span className="more">
          {t('상세 보기', 'View Case')} <Arrow />
        </span>
      </div>
    </Link>
  )
}

export function ProjectCard({ p }: { p: Project }) {
  const { pick } = useLang()
  return (
    <Link to={`/cases/project/${p.id}`} className="project-card">
      <div className="project-card__top">
        <span className="tag">{pick(categories[p.category])}</span>
        <span className="project-card__year">{p.year}</span>
      </div>
      <h3>{pick(p.title)}</h3>
      {p.summary && <p>{pick(p.summary)}</p>}
      <div className="project-card__team">{teams[p.team].toUpperCase()}</div>
    </Link>
  )
}

export function CompanyCard({ c }: { c: Company }) {
  const { lang } = useLang()
  const initials = (c.nameEn || c.nameKo).replace(/[^A-Za-z0-9가-힣]/g, '').slice(0, 2).toUpperCase()
  return (
    <Link to={`/cases/portfolio/${c.id}`} className="company-card">
      <div className="company-card__logo" style={{ background: gradients[c.id % gradients.length] }}>
        {initials}
      </div>
      <div className="company-card__meta">
        <span>{lang === 'en' ? sectorEn[c.sector] ?? c.sector : c.sector}</span>
        <span>·</span>
        <span>{lang === 'en' ? countryEn[c.country] ?? c.country : c.country}</span>
      </div>
      {c.stage && <span className={'stage' + (c.stage === 'Exit' ? ' stage--exit' : '')}>{c.stage}</span>}
      <h3>{lang === 'en' ? c.nameEn : c.nameKo}</h3>
      {lang === 'ko' && c.nameEn !== c.nameKo && <div className="company-card__en">{c.nameEn}</div>}
    </Link>
  )
}

export function NewsRow({ n }: { n: NewsItem }) {
  const inner = (
    <>
      <div className="news-row__main">
        {n.category && <span className={'tag tag--' + n.category}>{newsCategoryLabel[n.category].toUpperCase()}</span>}
        <h3>{n.title}</h3>
        {n.summary && <p>{n.summary.split(' / ')[0]}</p>}
      </div>
      <div className="news-row__side">
        <time>{n.date}</time>
        {!n.id && n.url && <ExternalIcon />}
      </div>
    </>
  )
  if (n.id) {
    return (
      <Link to={`/insights/press/${n.id}`} className="news-row">
        {inner}
      </Link>
    )
  }
  return (
    <a href={n.url} target="_blank" rel="noreferrer" className="news-row">
      {inner}
    </a>
  )
}
