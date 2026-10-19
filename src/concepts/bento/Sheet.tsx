import { useEffect, useRef, type ReactNode } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  onBack?: () => void
  label: string
  tone?: string
  contentKey?: string
  children: ReactNode
}

/** 하단에서 올라오는 상세 시트. Esc/배경 클릭으로 닫힘, 포커스 복원 */
export default function Sheet({ open, onClose, onBack, label, tone, contentKey, children }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  const lastFocus = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return
    lastFocus.current = document.activeElement as HTMLElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const id = window.setTimeout(() => panelRef.current?.focus(), 30)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
      if (e.key === 'Tab' && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input,textarea,select,[tabindex]:not([tabindex="-1"])')
        if (f.length === 0) return
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && (document.activeElement === first || document.activeElement === panelRef.current)) {
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
      window.clearTimeout(id)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      lastFocus.current?.focus?.()
    }
  }, [open, onClose])

  // 내용이 바뀌면 맨 위로
  useEffect(() => {
    if (open && panelRef.current) panelRef.current.scrollTop = 0
  }, [contentKey, open])

  if (!open) return null
  return (
    <div className="be-sheet" role="presentation">
      <button className="be-sheet__scrim" aria-label="Close" tabIndex={-1} onClick={onClose} />
      <div ref={panelRef} className={'be-sheet__panel' + (tone ? ` be-sheet__panel--${tone}` : '')} role="dialog" aria-modal="true" aria-label={label} tabIndex={-1}>
        <div className="be-sheet__bar">
          <span className="be-sheet__grip" aria-hidden />
          {onBack ? (
            <button className="be-sheet__btn" onClick={onBack}>
              ← Back
            </button>
          ) : (
            <span />
          )}
          <button className="be-sheet__btn be-sheet__btn--close" onClick={onClose} aria-label="Close">
            <span aria-hidden>✕</span> Close
          </button>
        </div>
        <div className="be-sheet__body">{children}</div>
      </div>
    </div>
  )
}
