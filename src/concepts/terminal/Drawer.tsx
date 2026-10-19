import { useEffect, useRef, type ReactNode } from 'react'
import { Rich } from '../../components/Rich'
import { useLang } from '../../i18n'
import { companyById } from '../../data/portfolio'
import { projectById, teams, categories } from '../../data/projects'
import { newsById } from '../../data/news'
import { memberById } from '../../data/team'
import {
  companiesForProject,
  companyAlt,
  companyName,
  countryLabel,
  newsCat,
  newsForCompany,
  projectsForCompany,
  sectorLabel,
  seaEntryFor,
  type Target,
} from './model'
import { Label } from './ui'

type Props = { stack: Target[]; onClose: () => void; onBack: () => void; onOpen: (t: Target) => void }

export default function Drawer({ stack, onClose, onBack, onOpen }: Props) {
  const target = stack[stack.length - 1]
  const closeRef = useRef<HTMLButtonElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const open = !!target

  useEffect(() => {
    if (!open) return
    const prev = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const ov = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ov
      prev?.focus?.()
    }
  }, [open])

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 0 })
  }, [target])

  if (!target) return null

  const kindLabel = { company: 'COMPANY', project: 'PROJECT', member: 'MEMBER', news: 'NEWS' }[target.kind]

  return (
    <div className="te-drawer-wrap">
      <button type="button" className="te-drawer-scrim" aria-label="CLOSE" tabIndex={-1} onClick={onClose} />
      <aside className="te-drawer" role="dialog" aria-modal="true" aria-label={kindLabel}>
        <div className="te-drawer__bar">
          {stack.length > 1 && (
            <button type="button" className="te-btn te-btn--ghost" onClick={onBack}>
              ← BACK
            </button>
          )}
          <span className="te-drawer__path">
            DRAWER / {kindLabel} / {String(target.id).toUpperCase()}
          </span>
          <button ref={closeRef} type="button" className="te-btn te-btn--ghost" onClick={onClose}>
            CLOSE <kbd>ESC</kbd>
          </button>
        </div>
        <div className="te-drawer__body" ref={bodyRef}>
          {target.kind === 'company' && <CompanyView id={target.id} onOpen={onOpen} />}
          {target.kind === 'project' && <ProjectView id={target.id} onOpen={onOpen} />}
          {target.kind === 'member' && <MemberView id={target.id} />}
          {target.kind === 'news' && <NewsView id={target.id} />}
        </div>
      </aside>
    </div>
  )
}

function Field({ k, children }: { k: string; children: ReactNode }) {
  return (
    <div className="te-kv">
      <dt>{k}</dt>
      <dd>{children || <span className="te-dim">—</span>}</dd>
    </div>
  )
}

function CompanyView({ id, onOpen }: { id: number; onOpen: (t: Target) => void }) {
  const { lang, pick } = useLang()
  const c = companyById(id)
  if (!c) return null
  const linked = projectsForCompany(id)
  const mentions = newsForCompany(id)
  const sea = seaEntryFor(c)
  return (
    <article>
      <p className="te-drawer__eyebrow">
        <Label tone="green">{sectorLabel(c.sector, lang)}</Label>
        <Label>{countryLabel(c.country, lang)}</Label>
        {c.stage && <Label tone="amber">{c.stage}</Label>}
        {c.note && <Label tone="dim">{c.note}</Label>}
      </p>
      <h2 className="te-drawer__title">{companyName(c, lang)}</h2>
      {companyAlt(c, lang) && <p className="te-drawer__alt">{companyAlt(c, lang)}</p>}
      <dl className="te-kvs">
        <Field k="ID">#{String(c.id).padStart(3, '0')}</Field>
        <Field k="SECTOR">{sectorLabel(c.sector, lang)}</Field>
        <Field k="COUNTRY">{countryLabel(c.country, lang)}</Field>
        <Field k="SERVICE">{c.service}</Field>
        <Field k="STAGE">{c.stage}</Field>
        <Field k="HOMEPAGE">
          {c.homepage && (
            <a className="te-link" href={c.homepage} target="_blank" rel="noreferrer">
              {c.homepage.replace(/^https?:\/\//, '').replace(/\/$/, '')} ↗
            </a>
          )}
        </Field>
      </dl>
      {sea && (
        <section className="te-drawer__sec">
          <h3>SEA PORTFOLIO</h3>
          <p className="te-drawer__lead">{sea.name}</p>
          <p>{pick(sea.desc)}</p>
          <p className="te-dim">{pick(sea.country)}</p>
        </section>
      )}
      <section className="te-drawer__sec">
        <h3>
          LINKED PROJECTS <span className="te-dim">({linked.length})</span>
        </h3>
        {linked.length === 0 && <p className="te-dim">NO LINKED RECORDS</p>}
        <ul className="te-linklist">
          {linked.map(({ project: p, caseLink }) => (
            <li key={p.id}>
              <button type="button" onClick={() => onOpen({ kind: 'project', id: p.id })}>
                <span className="te-mono te-dim">{p.year}</span>
                <span>{pick(p.title)}</span>
                <Label tone={caseLink ? 'green' : 'dim'}>{caseLink ? 'CASE' : 'MENTION'}</Label>
              </button>
            </li>
          ))}
        </ul>
      </section>
      {mentions.length > 0 && (
        <section className="te-drawer__sec">
          <h3>
            NEWS <span className="te-dim">({mentions.length})</span>
          </h3>
          <ul className="te-linklist">
            {mentions.map((n, i) => (
              <li key={i}>
                {n.id != null ? (
                  <button type="button" onClick={() => onOpen({ kind: 'news', id: n.id! })}>
                    <span className="te-mono te-dim">{n.date}</span>
                    <span>{n.title}</span>
                  </button>
                ) : (
                  <a href={n.url} target="_blank" rel="noreferrer">
                    <span className="te-mono te-dim">{n.date}</span>
                    <span>{n.title}</span>
                    <span className="te-dim">↗</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}

function ProjectView({ id, onOpen }: { id: number; onOpen: (t: Target) => void }) {
  const { lang, pick } = useLang()
  const p = projectById(id)
  if (!p) return null
  const cos = companiesForProject(id)
  const blocks: [string, string | undefined][] = [
    ['OVERVIEW', p.overview],
    ['PROCESS', p.process],
    ['KEY POINTS', p.points],
    ['RESULTS', p.results],
  ]
  return (
    <article>
      <p className="te-drawer__eyebrow">
        <Label tone="green">{pick(categories[p.category])}</Label>
        <Label>{teams[p.team]}</Label>
      </p>
      <h2 className="te-drawer__title">{pick(p.title)}</h2>
      {p.summary && <p className="te-drawer__lead">{pick(p.summary)}</p>}
      <dl className="te-kvs">
        <Field k="YEAR">{p.year}</Field>
        <Field k="PERIOD">{p.period}</Field>
        {p.participants && <Field k="PARTICIPANTS">{p.participants}</Field>}
        {p.sector && <Field k="SECTOR">{p.sector}</Field>}
      </dl>
      {p.image && (
        <figure className="te-drawer__img">
          <img src={p.image} alt={pick(p.title)} loading="lazy" />
        </figure>
      )}
      {blocks
        .filter(([, v]) => v)
        .map(([k, v]) => (
          <section className="te-drawer__sec" key={k}>
            <h3>{k}</h3>
            <Rich text={v!} />
          </section>
        ))}
      {cos.length > 0 && (
        <section className="te-drawer__sec">
          <h3>
            PORTFOLIO <span className="te-dim">({cos.length})</span>
          </h3>
          <ul className="te-linklist">
            {cos.map((c) => (
              <li key={c.id}>
                <button type="button" onClick={() => onOpen({ kind: 'company', id: c.id })}>
                  <span className="te-mono te-dim">#{String(c.id).padStart(3, '0')}</span>
                  <span>{companyName(c, lang)}</span>
                  <span className="te-dim">{sectorLabel(c.sector, lang)}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
      {p.links && p.links.length > 0 && (
        <section className="te-drawer__sec">
          <h3>LINKS</h3>
          <ul className="te-linklist">
            {p.links.map((l, i) => (
              <li key={i}>
                <a href={l.url} target="_blank" rel="noreferrer">
                  {l.source && <span className="te-mono te-dim">{l.source}</span>}
                  <span>{l.title}</span>
                  <span className="te-dim">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}

function MemberView({ id }: { id: string }) {
  const { lang, pick } = useLang()
  const m = memberById(id)
  if (!m) return null
  const intro = lang === 'en' && m.introEn ? m.introEn : m.intro
  return (
    <article>
      <p className="te-drawer__eyebrow">
        <Label tone="green">{m.unit}</Label>
        <Label>{pick(m.role)}</Label>
      </p>
      <h2 className="te-drawer__title">{pick(m.name)}</h2>
      <p className="te-drawer__alt">{lang === 'en' ? m.name.ko : m.name.en}</p>
      {m.education && (
        <section className="te-drawer__sec">
          <h3>EDUCATION</h3>
          <Rich text={m.education} />
        </section>
      )}
      {m.career && (
        <section className="te-drawer__sec">
          <h3>CAREER</h3>
          <Rich text={m.career} />
        </section>
      )}
      <section className="te-drawer__sec">
        <h3>BIO</h3>
        <Rich text={intro} />
      </section>
      {lang === 'ko' && m.introEn && (
        <details className="te-drawer__sec te-details">
          <summary>BIO / EN</summary>
          <Rich text={m.introEn} />
        </details>
      )}
    </article>
  )
}

function NewsView({ id }: { id: number }) {
  const n = newsById(id)
  if (!n) return null
  return (
    <article>
      <p className="te-drawer__eyebrow">
        <Label tone="green">{n.date}</Label>
        {newsCat(n) && <Label>{newsCat(n)}</Label>}
      </p>
      <h2 className="te-drawer__title te-drawer__title--sm">{n.title}</h2>
      {n.summary && <p className="te-drawer__lead">{n.summary}</p>}
      {n.body && (
        <section className="te-drawer__sec">
          <h3>BODY</h3>
          <Rich text={n.body} />
        </section>
      )}
      {n.url && (
        <p>
          <a className="te-link" href={n.url} target="_blank" rel="noreferrer">
            SOURCE ↗
          </a>
        </p>
      )}
      {n.related && n.related.length > 0 && (
        <section className="te-drawer__sec">
          <h3>RELATED</h3>
          <ul className="te-linklist">
            {n.related.map((r, i) => (
              <li key={i}>
                <a href={r.url} target="_blank" rel="noreferrer">
                  {r.source && <span className="te-mono te-dim">{r.source}</span>}
                  <span>{r.title}</span>
                  <span className="te-dim">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}
