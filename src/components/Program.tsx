import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useLang } from '../i18n'
import { projectById } from '../data/projects'
import { Arrow, Eyebrow, Reveal } from './ui'
import { Lines } from './Rich'

export type CaseRef = { label: string; projectId: number }

export function ProgramSection({
  eyebrow,
  title,
  subtitle,
  desc,
  extra,
  process,
  outputs,
  cases,
  children,
  reverse,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  desc?: string
  extra?: ReactNode
  process?: string[]
  outputs?: string[]
  cases?: CaseRef[]
  children?: ReactNode
  reverse?: boolean
}) {
  const { t, pick } = useLang()
  return (
    <section className={'program' + (reverse ? ' program--tint' : '')}>
      <div className="container">
        <Reveal>
          <div className="program__head">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="program__subtitle">{subtitle}</p>}
            {desc && (
              <p className="program__desc">
                <Lines text={desc} />
              </p>
            )}
          </div>
        </Reveal>
        {extra}
        {(process || outputs) && (
          <div className="program__grid">
            {process && (
              <div className="program__box">
                <h4>PROCESS</h4>
                <ol className="steps">
                  {process.map((s, i) => (
                    <li key={s}>
                      <span>{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            )}
            {outputs && (
              <div className="program__box program__box--accent">
                <h4>KEY OUTPUT</h4>
                <ul className="checklist checklist--light">
                  {outputs.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        {children}
        {cases && cases.length > 0 && (
          <div className="case-studies">
            {cases.map((c) => {
              const p = projectById(c.projectId)
              if (!p) return null
              return (
                <Link key={c.projectId} to={`/cases/project/${p.id}`} className="case-study">
                  <span className="case-study__label">CASE STUDY — {c.label}</span>
                  <h4>{pick(p.title)}</h4>
                  <p>{pick(p.summary)}</p>
                  <span className="more">
                    {t('사례 보기', 'View Case')} <Arrow />
                  </span>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export function Clients({ names }: { names: string[] }) {
  return (
    <section className="section section--tint">
      <div className="container">
        <div className="section-head section-head--center">
          <Eyebrow>CLIENTS</Eyebrow>
          <h2 className="section-title">Our Clients</h2>
        </div>
        <div className="clients">
          {names.map((n) => (
            <span key={n} className="client">
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export const corporateClients = [
  '농심',
  '신한은행',
  '현대자동차',
  'KT',
  'LG U+',
  'LG인화원',
  '애경',
  '교보생명',
  'LS ELECTRIC',
  'HDC현대산업개발',
  '롯데건설',
  '삼성증권',
  '삼천리',
  'KB국민카드',
  '국보디자인',
  '우미글로벌',
  '아주그룹',
  '삼구아이앤씨',
  '보령제약',
  '코엑스',
  '서울창업허브',
  '인천창조경제혁신센터',
  '강남구청',
  '토이트론',
]
