import { Fragment, type ReactNode } from 'react'

const URL_RE = /(https?:\/\/[^\s)]+)/g

/** 텍스트 안의 URL을 링크로 변환 */
export function linkify(text: string): ReactNode[] {
  const parts = text.split(URL_RE)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <a key={i} href={part} target="_blank" rel="noreferrer" className="inline-link">
        {shortUrl(part)}
      </a>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}

function shortUrl(url: string) {
  try {
    const u = new URL(url)
    const path = u.pathname.length > 28 ? u.pathname.slice(0, 28) + '…' : u.pathname
    return u.host + (path === '/' ? '' : path)
  } catch {
    return url
  }
}

/**
 * 단순 서식 렌더러.
 * - 빈 줄로 문단 구분
 * - "- " 또는 "● " 로 시작하는 줄은 목록
 * - 그 외 줄바꿈은 유지
 */
export function Rich({ text, className }: { text: string; className?: string }) {
  const blocks = text
    .replace(/\r/g, '')
    .split(/\n\s*\n/)
    .map((b) => b.replace(/^\n+|\n+$/g, ''))
    .filter((b) => b.trim().length > 0)

  return (
    <div className={['rich', className].filter(Boolean).join(' ')}>
      {blocks.map((block, bi) => {
        const lines = block.split('\n')
        if (lines.length === 1 && lines[0].startsWith('## ')) {
          return <h3 key={bi}>{lines[0].slice(3)}</h3>
        }
        const isList = lines.every((l) => /^\s*(-|●|•)\s?/.test(l))
        if (isList) {
          return (
            <ul key={bi}>
              {lines.map((l, li) => (
                <li key={li}>{linkify(l.replace(/^\s*(-|●|•)\s?/, ''))}</li>
              ))}
            </ul>
          )
        }
        return (
          <p key={bi}>
            {lines.map((l, li) => {
              const bullet = /^\s*(-|●|•)\s/.test(l)
              return (
                <Fragment key={li}>
                  {li > 0 && <br />}
                  {bullet ? <span className="rich-bullet">{linkify(l.replace(/^\s*(-|●|•)\s/, ''))}</span> : linkify(l)}
                </Fragment>
              )
            })}
          </p>
        )
      })}
    </div>
  )
}

/** 줄바꿈만 유지하는 짧은 텍스트 */
export function Lines({ text }: { text: string }) {
  const lines = text.split('\n')
  return (
    <>
      {lines.map((l, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {l}
        </Fragment>
      ))}
    </>
  )
}
