import { createContext, useContext, type CSSProperties, type PointerEvent, type ReactNode } from 'react'

export type SheetTarget =
  | { kind: 'project'; id: number }
  | { kind: 'company'; id: number }
  | { kind: 'member'; id: string }
  | { kind: 'news'; id: number }

type BentoCtx = {
  open: (t: SheetTarget) => void
  goContact: (type?: InquiryType) => void
}

export type InquiryType = 'general' | 'investment' | 'partnership' | 'global' | 'cv'

export const BentoContext = createContext<BentoCtx | null>(null)

export function useBento() {
  const ctx = useContext(BentoContext)
  if (!ctx) throw new Error('useBento must be used inside BentoConcept')
  return ctx
}

export const TONES = ['peach', 'sky', 'mint', 'lilac', 'butter'] as const
export type Tone = (typeof TONES)[number]
export const toneAt = (i: number): Tone => TONES[((i % TONES.length) + TONES.length) % TONES.length]

export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const top = el.getBoundingClientRect().top + window.scrollY - 84
  window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' })
}

export function initials(name: string) {
  const words = name.replace(/[()]/g, ' ').split(/\s+/).filter(Boolean)
  if (words.length === 0) return '?'
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[words.length - 1][0]).toUpperCase()
}

export function Pill({ children, tone, solid, className }: { children: ReactNode; tone?: Tone | 'ink' | 'accent'; solid?: boolean; className?: string }) {
  return <span className={['be-pill', tone ? `be-pill--${tone}` : '', solid ? 'be-pill--solid' : '', className ?? ''].filter(Boolean).join(' ')}>{children}</span>
}

export function SectionHead({ no, eyebrow, title, desc, id }: { no: string; eyebrow: string; title: ReactNode; desc?: ReactNode; id?: string }) {
  return (
    <header className="be-head">
      <div className="be-head__meta">
        <span className="be-head__no">{no}</span>
        <Pill>{eyebrow}</Pill>
      </div>
      <h2 className="be-head__title" id={id}>
        {title}
      </h2>
      {desc && <div className="be-head__desc">{desc}</div>}
    </header>
  )
}

export function Arrow({ dir = 'right' }: { dir?: 'right' | 'left' | 'up' | 'down' | 'out' }) {
  const rot = { right: 0, down: 90, left: 180, up: 270, out: -45 }[dir]
  return (
    <svg className="be-arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden style={{ transform: `rotate(${rot}deg)` }}>
      <path d="M3 8h9.2M8.6 3.8 12.8 8l-4.2 4.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Plus({ open }: { open?: boolean }) {
  return (
    <span className={'be-plus' + (open ? ' is-open' : '')} aria-hidden>
      <i />
      <i />
    </span>
  )
}

/** 포인터 위치에 따라 살짝 기울어지는 타일용 핸들러 */
export const tilt = {
  onPointerMove(e: PointerEvent<HTMLElement>) {
    if (e.pointerType !== 'mouse') return
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(x * 6).toFixed(2)}deg`)
  },
  onPointerLeave(e: PointerEvent<HTMLElement>) {
    e.currentTarget.style.setProperty('--rx', '0deg')
    e.currentTarget.style.setProperty('--ry', '0deg')
  },
}

export function Lines({ text }: { text: string }) {
  const parts = text.split('\n')
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {p}
        </span>
      ))}
    </>
  )
}

export const delay = (i: number) => ({ '--i': i }) as CSSProperties
