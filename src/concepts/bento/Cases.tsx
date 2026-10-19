import { useEffect, useMemo, useRef, useState } from 'react'
import { useLang } from '../../i18n'
import { casesCopy } from '../../data/copy'
import { categories, projects, studioCaseIds, teams, type CategoryKey, type TeamKey } from '../../data/projects'
import { Arrow, Lines, Pill, SectionHead, tilt, toneAt, useBento } from './shared'

const ordered = [...studioCaseIds.map((id) => projects.find((p) => p.id === id)!).filter(Boolean), ...projects.filter((p) => !studioCaseIds.includes(p.id))]
const catKeys = (Object.keys(categories) as CategoryKey[]).filter((k) => projects.some((p) => p.category === k))
// 벤처스튜디오 사례를 맨 앞에
catKeys.sort((a, b) => (a === 'studio' ? -1 : b === 'studio' ? 1 : 0))
const teamKeys = Object.keys(teams) as TeamKey[]

export default function Cases() {
  const { t, pick, lang } = useLang()
  const { open } = useBento()
  const [cat, setCat] = useState<CategoryKey | 'all'>('all')
  const [team, setTeam] = useState<TeamKey | 'all'>('all')
  const track = useRef<HTMLDivElement>(null)
  const [edge, setEdge] = useState({ start: true, end: false })

  const list = useMemo(() => ordered.filter((p) => (cat === 'all' || p.category === cat) && (team === 'all' || p.team === team)), [cat, team])

  const updateEdge = () => {
    const el = track.current
    if (!el) return
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 })
  }

  useEffect(() => {
    track.current?.scrollTo({ left: 0 })
    updateEdge()
  }, [cat, team])

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('.be-case')
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * step * (el.clientWidth > 900 ? 2 : 1), behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <section className="be-section" id="cases" aria-labelledby="be-cases-title">
      <SectionHead no="04" eyebrow={casesCopy.eyebrow} id="be-cases-title" title={<Lines text={casesCopy.title} />} desc={<p><Lines text={pick(casesCopy.desc)} /></p>} />

      <div className="be-filters">
        <div className="be-chips" role="group" aria-label={t('카테고리', 'Category')}>
          <button className={'be-chip' + (cat === 'all' ? ' is-active' : '')} aria-pressed={cat === 'all'} onClick={() => setCat('all')}>
            All <small>{projects.length}</small>
          </button>
          {catKeys.map((k) => (
            <button key={k} className={'be-chip' + (cat === k ? ' is-active' : '')} aria-pressed={cat === k} onClick={() => setCat(k)}>
              {pick(categories[k])} <small>{projects.filter((p) => p.category === k).length}</small>
            </button>
          ))}
        </div>
        <div className="be-chips be-chips--team" role="group" aria-label={t('담당', 'Team')}>
          <button className={'be-chip be-chip--sm' + (team === 'all' ? ' is-active' : '')} aria-pressed={team === 'all'} onClick={() => setTeam('all')}>
            All teams
          </button>
          {teamKeys.map((k) => (
            <button key={k} className={'be-chip be-chip--sm' + (team === k ? ' is-active' : '')} aria-pressed={team === k} onClick={() => setTeam(k)}>
              {teams[k]}
            </button>
          ))}
        </div>
      </div>

      <div className="be-carousel">
        <div className="be-carousel__bar">
          <span className="be-carousel__count">
            <strong>{list.length}</strong> / {projects.length}
          </span>
          <div className="be-carousel__arrows">
            <button className="be-round" onClick={() => scrollBy(-1)} disabled={edge.start} aria-label="Previous">
              <Arrow dir="left" />
            </button>
            <button className="be-round" onClick={() => scrollBy(1)} disabled={edge.end} aria-label="Next">
              <Arrow />
            </button>
          </div>
        </div>
        <div className="be-carousel__track" ref={track} onScroll={updateEdge} tabIndex={0} aria-label="Cases">
          {list.map((p, i) => {
            const isStudio = p.category === 'studio'
            return (
              <button key={p.id} className={'be-case be-tilt' + (isStudio ? ' be-case--studio' : ` be-tone--${toneAt(p.id)}`)} {...tilt} onClick={() => open({ kind: 'project', id: p.id })}>
                <span className="be-case__media">
                  {p.image ? (
                    <img src={p.image} alt="" loading={i < 4 ? 'eager' : 'lazy'} />
                  ) : (
                    <span className="be-case__art" aria-hidden>
                      <span className={`be-case__glyph be-case__glyph--${p.id % 4}`} />
                      <span className="be-case__idx">{String(p.id).padStart(2, '0')}</span>
                    </span>
                  )}
                </span>
                <span className="be-case__body">
                  <span className="be-case__meta">
                    <Pill tone={isStudio ? 'accent' : 'ink'} solid>
                      {pick(categories[p.category])}
                    </Pill>
                    <span className="be-date">{p.year}</span>
                  </span>
                  <strong className="be-case__title">{lang === 'en' ? p.title.en ?? p.title.ko : p.title.ko}</strong>
                  {p.summary && <span className="be-case__sum">{pick(p.summary)}</span>}
                  <span className="be-case__foot">
                    <span>{teams[p.team]}</span>
                    <Arrow />
                  </span>
                </span>
              </button>
            )
          })}
          {list.length === 0 && <p className="be-empty">—</p>}
        </div>
      </div>
    </section>
  )
}
