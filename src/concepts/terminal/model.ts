// Derived (computed) views over the shared data files. No new copy is introduced here.
import { companies, companyCaseLink, sectorEn, countryEn, type Company } from '../../data/portfolio'
import { projects, teams, categories, type Project, type CategoryKey, type TeamKey } from '../../data/projects'
import { news, newsCategoryLabel, type NewsItem } from '../../data/news'
import { members, teamGroups, type Member } from '../../data/team'
import { globalX } from '../../data/copy'

export type Target =
  | { kind: 'company'; id: number }
  | { kind: 'project'; id: number }
  | { kind: 'member'; id: string }
  | { kind: 'news'; id: number }

export const PANELS = [
  { id: 'overview', code: '01', label: 'OVERVIEW' },
  { id: 'thesis', code: '02', label: 'JOURNEY' },
  { id: 'platform', code: '03', label: 'PLATFORM' },
  { id: 'capabilities', code: '04', label: 'CAPABILITIES' },
  { id: 'screener', code: '05', label: 'SCREENER' },
  { id: 'projects', code: '06', label: 'PROJECTS' },
  { id: 'team', code: '07', label: 'TEAM' },
  { id: 'ecosystem', code: '08', label: 'ECOSYSTEM' },
  { id: 'news', code: '09', label: 'NEWS' },
  { id: 'contact', code: '10', label: 'CONTACT' },
] as const

export const scrollToPanel = (id: string) => {
  const el = document.getElementById('te-' + id)
  if (!el) return
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const y = el.getBoundingClientRect().top + window.scrollY - 64
  window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' })
}

/* ── labels ── */
export const sectorLabel = (s: string, lang: string) => (lang === 'en' ? sectorEn[s] ?? s : s)
export const countryLabel = (c: string, lang: string) => (lang === 'en' ? countryEn[c] ?? c : c)
export const companyName = (c: Company, lang: string) => (lang === 'en' ? c.nameEn : c.nameKo)
export const companyAlt = (c: Company, lang: string) => {
  const alt = lang === 'en' ? c.nameKo : c.nameEn
  return alt === companyName(c, lang) ? '' : alt
}
export const teamLabel = (k: TeamKey) => teams[k]
export const categoryOf = (k: CategoryKey) => categories[k]
export const newsCat = (n: NewsItem) => (n.category ? newsCategoryLabel[n.category] : '')

/** first 4-digit year in the project's year string, used for grouping */
export const yearKey = (p: Project) => p.year.match(/\d{4}/)?.[0] ?? '—'

/* ── company ↔ project / news mentions (string matching on existing text) ── */
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const nameRe = (name: string) => new RegExp(`(^|[^가-힣])${esc(name)}(?=$|[^가-힣]|[은는이가을를에와과의도로])`)

const projectText = (p: Project) => [p.title.ko, p.summary?.ko ?? '', p.overview, p.process ?? '', p.points ?? '', p.results ?? ''].join('\n')

type Mention = { project: Project; caseLink: boolean }

const companyProjects = new Map<number, Mention[]>()
const companyNews = new Map<number, NewsItem[]>()
const projectCompanies = new Map<number, Company[]>()

for (const c of companies) {
  const list: Mention[] = []
  const linked = companyCaseLink[c.nameKo]
  const re = c.nameKo.length >= 2 ? nameRe(c.nameKo) : null
  for (const p of projects) {
    const isCase = linked === p.id
    if (isCase || (re && re.test(projectText(p)))) list.push({ project: p, caseLink: isCase })
  }
  list.sort((a, b) => Number(b.caseLink) - Number(a.caseLink))
  companyProjects.set(c.id, list)
  for (const m of list) {
    const arr = projectCompanies.get(m.project.id) ?? []
    arr.push(c)
    projectCompanies.set(m.project.id, arr)
  }
  if (re) companyNews.set(c.id, news.filter((n) => re.test(n.title)))
}

export const projectsForCompany = (id: number) => companyProjects.get(id) ?? []
export const newsForCompany = (id: number) => companyNews.get(id) ?? []
export const companiesForProject = (id: number) => projectCompanies.get(id) ?? []

export const seaEntryFor = (c: Company) =>
  globalX.seaPortfolio.find((s) => s.match && (s.match === c.nameKo || c.nameKo.includes(s.match))) ??
  globalX.seaPortfolio.find((s) => !s.match && s.name.toLowerCase() === c.nameEn.toLowerCase())

export const companyForSea = (match?: string, name?: string) =>
  companies.find((c) => (match && (c.nameKo === match || c.nameKo.includes(match))) || (name && c.nameEn.toLowerCase() === name.toLowerCase()))

/* ── ordered team list ── */
export const orderedMembers: { group: string; list: Member[] }[] = teamGroups.map((g) => ({
  group: g.label,
  list: g.members.map((id) => members.find((m) => m.id === id)).filter((m): m is Member => !!m),
}))

/* ── search ── */
export type SearchItem = { key: string; kind: 'company' | 'project' | 'member' | 'news' | 'goto'; title: string; sub: string; hay: string; target?: Target; external?: string; panel?: string }

export function buildIndex(lang: string, pick: (v: { ko: string; en?: string } | undefined) => string): SearchItem[] {
  const out: SearchItem[] = []
  for (const p of PANELS) out.push({ key: 'g' + p.id, kind: 'goto', title: p.label, sub: 'PANEL ' + p.code, hay: p.label.toLowerCase(), panel: p.id })
  for (const c of companies)
    out.push({
      key: 'c' + c.id,
      kind: 'company',
      title: companyName(c, lang),
      sub: [companyAlt(c, lang), sectorLabel(c.sector, lang), countryLabel(c.country, lang)].filter(Boolean).join(' · '),
      hay: [c.nameKo, c.nameEn, c.service, c.sector, sectorEn[c.sector] ?? '', c.country].join(' ').toLowerCase(),
      target: { kind: 'company', id: c.id },
    })
  for (const p of projects)
    out.push({
      key: 'p' + p.id,
      kind: 'project',
      title: pick(p.title),
      sub: [p.year, pick(categories[p.category])].join(' · '),
      hay: [p.title.ko, p.title.en ?? '', p.summary?.ko ?? '', p.summary?.en ?? '', categories[p.category].ko, categories[p.category].en ?? '', p.sector ?? '', p.year].join(' ').toLowerCase(),
      target: { kind: 'project', id: p.id },
    })
  for (const m of members)
    out.push({
      key: 'm' + m.id,
      kind: 'member',
      title: pick(m.name),
      sub: [pick(m.role), m.unit].join(' · '),
      hay: [m.name.ko, m.name.en ?? '', m.role.ko, m.role.en ?? '', m.unit].join(' ').toLowerCase(),
      target: { kind: 'member', id: m.id },
    })
  news.forEach((n, i) =>
    out.push({
      key: 'n' + (n.id ?? 'x' + i),
      kind: 'news',
      title: n.title,
      sub: [n.date, newsCat(n)].filter(Boolean).join(' · '),
      hay: [n.title, n.summary ?? '', n.date].join(' ').toLowerCase(),
      target: n.id != null ? { kind: 'news', id: n.id } : undefined,
      external: n.id == null ? n.url : undefined,
    }),
  )
  return out
}

/** simple fuzzy score: substring match beats subsequence match; null = no match */
export function fuzzyScore(hay: string, title: string, q: string): number | null {
  const t = title.toLowerCase()
  if (t.startsWith(q)) return 1000 - t.length
  const ti = t.indexOf(q)
  if (ti >= 0) return 800 - ti
  const hi = hay.indexOf(q)
  if (hi >= 0) return 500 - Math.min(hi, 400)
  // subsequence over title + hay
  const src = t + ' ' + hay
  let j = 0
  let gaps = 0
  let last = -1
  for (let i = 0; i < src.length && j < q.length; i++) {
    if (src[i] === q[j]) {
      if (last >= 0) gaps += i - last - 1
      last = i
      j++
    }
  }
  if (j < q.length || q.length < 2) return null
  const s = 300 - gaps
  return s > 0 ? s : null
}
