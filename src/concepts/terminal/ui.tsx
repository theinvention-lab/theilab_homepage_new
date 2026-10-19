import { createContext, useContext, type ReactNode } from 'react'
import { Lines } from '../../components/Rich'
import { useLang, type L10n } from '../../i18n'
import type { Target } from './model'

export type TerminalCtx = { open: (t: Target) => void; openPalette: () => void }
export const Ctx = createContext<TerminalCtx>({ open: () => {}, openPalette: () => {} })
export const useTerminal = () => useContext(Ctx)

export function Panel({
  id,
  code,
  title,
  meta,
  children,
  className,
}: {
  id: string
  code: string
  title: string
  meta?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section id={'te-' + id} className={'te-panel ' + (className ?? '')} aria-labelledby={'te-h-' + id}>
      <header className="te-panel__bar">
        <span className="te-panel__code">[{code}]</span>
        <h2 id={'te-h-' + id} className="te-panel__title">
          {title}
        </h2>
        <span className="te-panel__rule" aria-hidden />
        {meta && <span className="te-panel__meta">{meta}</span>}
      </header>
      <div className="te-panel__body">{children}</div>
    </section>
  )
}

/** small mono label */
export const Label = ({ children, tone }: { children: ReactNode; tone?: 'green' | 'amber' | 'dim' }) => (
  <span className={'te-label' + (tone ? ' te-label--' + tone : '')}>{children}</span>
)

export function StatGrid({ stats, size }: { stats: { value: string; label: L10n }[]; size?: 'lg' }) {
  const { pick } = useLang()
  return (
    <dl className={'te-stats' + (size ? ' te-stats--' + size : '')}>
      {stats.map((s, i) => (
        <div key={i} className="te-stat">
          <dt>{pick(s.label)}</dt>
          <dd>{s.value}</dd>
        </div>
      ))}
    </dl>
  )
}

/** Eyebrow + title + description block */
export function Head({ eyebrow, title, desc, lead }: { eyebrow?: string; title: string; lead?: string; desc?: string }) {
  return (
    <div className="te-head">
      {eyebrow && <p className="te-head__eyebrow">{eyebrow}</p>}
      <h3 className="te-head__title">
        <Lines text={title} />
      </h3>
      {lead && <p className="te-head__lead">{lead}</p>}
      {desc && (
        <p className="te-head__desc">
          <Lines text={desc} />
        </p>
      )}
    </div>
  )
}

export function Chip({ active, onClick, children, count }: { active: boolean; onClick: () => void; children: ReactNode; count?: number }) {
  return (
    <button type="button" className={'te-chip' + (active ? ' is-on' : '')} aria-pressed={active} onClick={onClick}>
      {children}
      {count != null && <span className="te-chip__n">{count}</span>}
    </button>
  )
}
