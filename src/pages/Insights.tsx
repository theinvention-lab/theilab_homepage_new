import { useMemo, useState } from 'react'
import { useLang } from '../i18n'
import { Chips } from '../components/ui'
import { NewsRow } from '../components/cards'
import { news, type NewsCategory } from '../data/news'

type Filter = 'all' | Exclude<NewsCategory, null>
const PAGE = 10

export default function Insights() {
  const { t } = useLang()
  const [filter, setFilter] = useState<Filter>('all')
  const [shown, setShown] = useState(PAGE)

  const list = useMemo(() => news.filter((n) => filter === 'all' || n.category === filter), [filter])

  return (
    <>
      <section className="page-hero page-hero--navy page-hero--compact">
        <div className="page-hero__glow" aria-hidden />
        <div className="container page-hero__inner">
          <div className="eyebrow eyebrow--light">INSIGHTS</div>
          <h1 className="page-hero__title">News</h1>
          <p className="page-hero__desc">What’s new at The Invention Lab and across our portfolio</p>
        </div>
      </section>
      <section className="section">
        <div className="container container--narrow">
          <Chips<Filter>
            value={filter}
            onChange={(v) => {
              setFilter(v)
              setShown(PAGE)
            }}
            options={[
              { value: 'all', label: 'All' },
              { value: 'corporate', label: 'Corporate News' },
              { value: 'portfolio', label: 'Portfolio News' },
              { value: 'blog', label: 'Blog' },
            ]}
          />
          <div className="news-list">
            {list.slice(0, shown).map((n) => (
              <NewsRow key={(n.id ?? n.url) + n.date} n={n} />
            ))}
          </div>
          {shown < list.length && (
            <div className="load-more">
              <button className="btn btn--ghost" onClick={() => setShown((s) => s + PAGE)}>
                Load More ({list.length - shown})
              </button>
            </div>
          )}
          {list.length === 0 && <p className="empty">{t('게시물이 없습니다.', 'No posts yet.')}</p>}
        </div>
      </section>
    </>
  )
}
