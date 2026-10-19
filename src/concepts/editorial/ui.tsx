import { createContext, useContext, useEffect, useRef, type ReactNode } from 'react'
import { Lines } from '../../components/Rich'
import type { NewsItem } from '../../data/news'

/* ───────────── Overlay (drawer) state ───────────── */
export type Detail =
  | { kind: 'project'; id: number }
  | { kind: 'member'; id: string }
  | { kind: 'company'; id: number }
  | { kind: 'news'; item: NewsItem }

export const OpenCtx = createContext<(d: Detail) => void>(() => {})
export const useOpen = () => useContext(OpenCtx)

/* ───────────── Helpers ───────────── */
export function prefersReducedMotion() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}

/** HashRouter 환경이므로 앵커 대신 스크롤 함수를 사용합니다. */
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 52
  window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}

export const pad = (n: number) => String(n).padStart(2, '0')

export function Br({ text }: { text: string }) {
  return <Lines text={text} />
}

/** 페이지 진입 시 요소를 부드럽게 노출 */
export function useReveal(root: React.RefObject<HTMLElement>, deps: unknown[] = []) {
  useEffect(() => {
    const el = root.current
    if (!el) return
    const items = Array.from(el.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)'))
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      items.forEach((i) => i.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
    )
    items.forEach((i) => io.observe(i))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

/* ───────────── Building blocks ───────────── */
export function ChapterOpener({
  id,
  no,
  name,
  kicker,
  title,
  dek,
}: {
  id: string
  no: string
  name: string
  kicker: string
  title: string
  dek?: string
}) {
  return (
    <header className="ed-opener" id={id} data-reveal>
      <div className="ed-opener__rule" aria-hidden="true" />
      <div className="ed-opener__meta">
        <span className="ed-label">Chapter {no}</span>
        <span className="ed-label ed-label--accent">{name}</span>
      </div>
      <div className="ed-opener__grid">
        <div className="ed-opener__num" aria-hidden="true">
          {no}
        </div>
        <div className="ed-opener__text">
          <p className="ed-kicker">{kicker}</p>
          <h2 className="ed-opener__title">
            <Br text={title} />
          </h2>
          {dek && (
            <p className="ed-dek">
              <Br text={dek} />
            </p>
          )}
        </div>
      </div>
    </header>
  )
}

export function SectionHead({ no, kicker, title, lead }: { no?: string; kicker?: string; title: string; lead?: string }) {
  return (
    <div className="ed-shead" data-reveal>
      <div className="ed-shead__meta">
        {no && <span className="ed-label">§ {no}</span>}
        {kicker && <span className="ed-label ed-label--muted">{kicker}</span>}
      </div>
      <h3 className="ed-shead__title">
        <Br text={title} />
      </h3>
      {lead && <p className="ed-shead__lead">{lead}</p>}
    </div>
  )
}

export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <dl className="ed-stats" data-reveal>
      {items.map((s, i) => (
        <div key={i} className="ed-stats__item">
          <dt className="ed-stats__value">{s.value}</dt>
          <dd className="ed-stats__label">{s.label}</dd>
        </div>
      ))}
    </dl>
  )
}

export function Body({ children, cols = 2, drop = false }: { children: ReactNode; cols?: 1 | 2 | 3; drop?: boolean }) {
  return (
    <div className={`ed-body ed-body--c${cols}${drop ? ' ed-drop' : ''}`} data-reveal>
      {children}
    </div>
  )
}

/* ───────────── Drawer ───────────── */
export function Drawer({ open, onClose, label, children }: { open: boolean; onClose: () => void; label: string; children: ReactNode }) {
  const panel = useRef<HTMLDivElement>(null)
  const closeBtn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const prev = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus({ preventScroll: true })
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'Tab' && panel.current) {
        const f = panel.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])')
        if (!f.length) return
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      prev?.focus?.({ preventScroll: true })
    }
  }, [open, onClose])

  useEffect(() => {
    if (open && panel.current) panel.current.scrollTop = 0
  })

  if (!open) return null
  return (
    <div className="ed-drawer" role="presentation">
      <div className="ed-drawer__scrim" onClick={onClose} aria-hidden="true" />
      <div className="ed-drawer__panel" role="dialog" aria-modal="true" aria-label={label} ref={panel}>
        <div className="ed-drawer__bar">
          <span className="ed-label">{label}</span>
          <button type="button" ref={closeBtn} className="ed-drawer__close" onClick={onClose}>
            Close <span aria-hidden="true">✕</span>
          </button>
        </div>
        <div className="ed-drawer__content">{children}</div>
      </div>
    </div>
  )
}
