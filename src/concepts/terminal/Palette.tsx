import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { useLang } from '../../i18n'
import { buildIndex, fuzzyScore, scrollToPanel, type SearchItem, type Target } from './model'

const KIND: Record<SearchItem['kind'], string> = { goto: 'GOTO', company: 'CO', project: 'PRJ', member: 'TEAM', news: 'NEWS' }

export default function Palette({ onClose, onOpen }: { onClose: () => void; onOpen: (t: Target) => void }) {
  const { lang, pick } = useLang()
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const index = useMemo(() => buildIndex(lang, pick), [lang, pick])

  const results = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return index.filter((i) => i.kind === 'goto')
    return index
      .map((it) => ({ it, s: fuzzyScore(it.hay, it.title, query) }))
      .filter((x): x is { it: SearchItem; s: number } => x.s != null)
      .sort((a, b) => b.s - a.s)
      .slice(0, 40)
      .map((x) => x.it)
  }, [q, index])

  useEffect(() => {
    inputRef.current?.focus()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])
  useEffect(() => setSel(0), [q])
  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-i="${sel}"]`)?.scrollIntoView({ block: 'nearest' })
  }, [sel])

  const choose = (it: SearchItem | undefined) => {
    if (!it) return
    onClose()
    if (it.panel) setTimeout(() => scrollToPanel(it.panel!), 0)
    else if (it.target) onOpen(it.target)
    else if (it.external) window.open(it.external, '_blank', 'noopener')
  }

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSel((s) => Math.min(results.length - 1, s + 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSel((s) => Math.max(0, s - 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      choose(results[sel])
    }
  }

  return (
    <div className="te-pal-wrap" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="te-pal" role="dialog" aria-modal="true" aria-label="SEARCH">
        <div className="te-pal__in">
          <span className="te-pal__prompt" aria-hidden>
            til&gt;
          </span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKey}
            placeholder="search: portfolio / projects / news / team"
            aria-label="SEARCH"
            role="combobox"
            aria-expanded="true"
            aria-controls="te-pal-list"
            aria-activedescendant={results[sel] ? 'te-pal-' + results[sel].key : undefined}
            spellCheck={false}
            autoComplete="off"
          />
          <kbd>ESC</kbd>
        </div>
        <ul className="te-pal__list" id="te-pal-list" role="listbox" ref={listRef}>
          {results.length === 0 && <li className="te-pal__empty">NO MATCH — 0 RESULTS</li>}
          {results.map((it, i) => (
            <li
              key={it.key}
              id={'te-pal-' + it.key}
              role="option"
              aria-selected={i === sel}
              data-i={i}
              className={'te-pal__item' + (i === sel ? ' is-sel' : '')}
              onMouseMove={() => setSel(i)}
              onClick={() => choose(it)}
            >
              <span className={'te-pal__kind te-pal__kind--' + it.kind}>{KIND[it.kind]}</span>
              <span className="te-pal__title">{it.title}</span>
              <span className="te-pal__sub">{it.sub}</span>
              {it.external && <span className="te-dim">↗</span>}
            </li>
          ))}
        </ul>
        <div className="te-pal__foot">
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd> NAVIGATE
          </span>
          <span>
            <kbd>↵</kbd> OPEN
          </span>
          <span className="te-pal__count">{results.length} RESULTS</span>
        </div>
      </div>
    </div>
  )
}
