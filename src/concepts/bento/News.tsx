import { useMemo, useState } from 'react'
import { useLang } from '../../i18n'
import { news, newsCategoryLabel, type NewsCategory, type NewsItem } from '../../data/news'
import { site } from '../../data/site'
import { Arrow, Pill, SectionHead, useBento } from './shared'

type Filter = 'all' | Exclude<NewsCategory, null>
const CATS = Object.keys(newsCategoryLabel) as Exclude<NewsCategory, null>[]
const TONE: Record<string, string> = { corporate: 'sky', portfolio: 'mint', blog: 'lilac' }

export default function News() {
  const { t } = useLang()
  const { open } = useBento()
  const [f, setF] = useState<Filter>('all')
  const [limit, setLimit] = useState(13)
  const list = useMemo(() => (f === 'all' ? news : news.filter((n) => n.category === f)), [f])

  const act = (n: NewsItem) => {
    if (n.id) open({ kind: 'news', id: n.id })
    else if (n.url) window.open(n.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="be-section" id="news" aria-labelledby="be-news-title">
      <SectionHead
        no="07"
        eyebrow="INSIGHTS"
        id="be-news-title"
        title="News"
        desc={
          site.links.blog ? (
            <a className="be-btn be-btn--ink" href={site.links.blog} target="_blank" rel="noreferrer">
              Blog <Arrow dir="out" />
            </a>
          ) : undefined
        }
      />

      <div className="be-chips" role="group" aria-label="News filter">
        <button className={'be-chip' + (f === 'all' ? ' is-active' : '')} aria-pressed={f === 'all'} onClick={() => (setF('all'), setLimit(13))}>
          All <small>{news.length}</small>
        </button>
        {CATS.map((c) => (
          <button key={c} className={'be-chip' + (f === c ? ' is-active' : '')} aria-pressed={f === c} onClick={() => (setF(c), setLimit(13))}>
            <span className={`be-chip__dot be-tone--${TONE[c]}`} aria-hidden />
            {newsCategoryLabel[c]} <small>{news.filter((n) => n.category === c).length}</small>
          </button>
        ))}
      </div>

      <div className="be-newsgrid">
        {list.slice(0, limit).map((n, i) => {
          const internal = !!n.id
          const feature = i === 0
          return (
            <button
              key={(n.id ?? 'x') + n.title}
              className={`be-tile be-news ${feature ? 'be-news--feature be-tile--ink' : n.category ? `be-tone--${TONE[n.category]}` : 'be-tone--butter'}`}
              onClick={() => act(n)}
            >
              <span className="be-news__top">
                {n.category ? <Pill tone={feature ? 'accent' : 'ink'} solid>{newsCategoryLabel[n.category]}</Pill> : <Pill tone={feature ? 'accent' : 'ink'} solid>News</Pill>}
                <span className="be-date">{n.date}</span>
              </span>
              <strong className="be-news__title">{n.title}</strong>
              {feature && n.summary && <span className="be-news__sum">{n.summary.split(' / ')[0]}</span>}
              <span className="be-news__foot">
                {internal ? t('자세히 보기', 'Read more') : t('원문 보기', 'View original')}
                <Arrow dir={internal ? 'right' : 'out'} />
              </span>
            </button>
          )
        })}
      </div>
      {list.length > limit && (
        <div className="be-center">
          <button className="be-btn be-btn--ink" onClick={() => setLimit((l) => l + 12)}>
            {t('더 보기', 'Load more')} <small>+{list.length - limit}</small>
          </button>
        </div>
      )}
    </section>
  )
}
