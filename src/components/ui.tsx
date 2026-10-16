import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Lines } from './Rich'

export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return <div className={'eyebrow' + (light ? ' eyebrow--light' : '')}>{children}</div>
}

export function SectionHead({
  eyebrow,
  title,
  desc,
  center,
  light,
}: {
  eyebrow?: string
  title: string
  desc?: string
  center?: boolean
  light?: boolean
}) {
  return (
    <div className={'section-head' + (center ? ' section-head--center' : '') + (light ? ' section-head--light' : '')}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className="section-title">
        <Lines text={title} />
      </h2>
      {desc && (
        <p className="section-desc">
          <Lines text={desc} />
        </p>
      )}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  desc,
  cta,
  variant = 'navy',
}: {
  eyebrow: string
  title: string
  desc?: string
  cta?: { label: string; to: string }
  variant?: 'navy' | 'orange' | 'teal' | 'violet' | 'green'
}) {
  return (
    <section className={'page-hero page-hero--' + variant}>
      <div className="page-hero__glow" aria-hidden />
      <div className="container page-hero__inner">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="page-hero__title">
          <Lines text={title} />
        </h1>
        {desc && (
          <p className="page-hero__desc">
            <Lines text={desc} />
          </p>
        )}
        {cta && (
          <Link to={cta.to} className="btn btn--primary btn--lg">
            {cta.label} <Arrow />
          </Link>
        )}
      </div>
    </section>
  )
}

export function Arrow() {
  return (
    <svg className="arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" aria-hidden style={{ marginLeft: 4 }}>
      <path d="M6 3H3v10h10v-3M9 3h4v4M13 3L7 9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** 화면에 들어오면 서서히 나타나는 래퍼 */
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={['reveal', shown ? 'is-shown' : '', className].filter(Boolean).join(' ')} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="stats">
      {items.map((s) => (
        <div className="stat" key={s.label}>
          <div className="stat__value">{s.value}</div>
          <div className="stat__label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

export function Chips<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[]
  value: T
  onChange: (v: T) => void
}) {
  return (
    <div className="chips" role="tablist">
      {options.map((o) => (
        <button
          key={o.value}
          role="tab"
          aria-selected={o.value === value}
          className={'chip' + (o.value === value ? ' is-active' : '')}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

/** 외부 URL이 비어 있으면 링크 없이 텍스트만 표시 */
export function MaybeLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  if (!href) return <span className={className}>{children}</span>
  if (href.startsWith('#/')) return <a className={className} href={href}>{children}</a>
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}
