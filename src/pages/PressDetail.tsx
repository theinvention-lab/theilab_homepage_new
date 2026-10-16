import { Link, useParams } from 'react-router-dom'
import { useLang } from '../i18n'
import { Arrow, ExternalIcon } from '../components/ui'
import { Rich } from '../components/Rich'
import { NewsRow } from '../components/cards'
import { news, newsById, newsCategoryLabel } from '../data/news'
import NotFound from './NotFound'

export default function PressDetail() {
  const { id } = useParams()
  const { t } = useLang()
  const n = newsById(Number(id))
  if (!n) return <NotFound />

  const idx = news.indexOf(n)
  const newer = news.slice(0, idx).reverse().find((x) => x.id)
  const older = news.slice(idx + 1).find((x) => x.id)
  const recent = news.filter((x) => x !== n && x.category === n.category).slice(0, 3)

  return (
    <>
      <section className="detail-hero detail-hero--article">
        <div className="container container--narrow">
          <nav className="breadcrumb">
            <Link to="/insights">Insights</Link>
            <span>/</span>
            <span>{n.category ? newsCategoryLabel[n.category] : 'News'}</span>
          </nav>
          {n.category && <span className={'tag tag--' + n.category}>{newsCategoryLabel[n.category].toUpperCase()}</span>}
          <h1>{n.title}</h1>
          <time>{n.date}</time>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow article">
          {n.summary && (
            <div className="article__summary">
              {n.summary.split(' / ').map((s) => (
                <p key={s}>{s}</p>
              ))}
            </div>
          )}
          {n.body ? (
            <Rich text={n.body} className="article__body" />
          ) : (
            <div className="article__external">
              <p>{t('이 글은 더인벤션랩 블로그에서 전체 내용을 확인하실 수 있습니다.', 'Read the full post on The Invention Lab blog.')}</p>
            </div>
          )}
          {n.url && (
            <a className="btn btn--dark" href={n.url} target="_blank" rel="noreferrer">
              {n.category === 'blog' ? t('블로그에서 읽기', 'Read on blog') : t('원문 보기', 'View original')} <ExternalIcon />
            </a>
          )}

          {n.related && n.related.length > 0 && (
            <div className="article__related">
              <h2>{t('관련 보도', 'In the Press')}</h2>
              <ul className="link-list">
                {n.related.map((r) => (
                  <li key={r.url}>
                    <a href={r.url} target="_blank" rel="noreferrer">
                      <span>{r.title}</span>
                      {r.source && <small>{r.source}</small>}
                      <ExternalIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="article__nav">
            {older ? (
              <Link to={`/insights/press/${older.id}`}>
                <small>← {t('이전 글', 'Previous')}</small>
                <span>{older.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {newer ? (
              <Link to={`/insights/press/${newer.id}`} className="article__nav-next">
                <small>{t('다음 글', 'Next')} →</small>
                <span>{newer.title}</span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>

      {recent.length > 0 && (
        <section className="section section--tint">
          <div className="container container--narrow">
            <div className="section-head-row">
              <h2 className="section-title">{t('더 보기', 'More News')}</h2>
              <Link to="/insights" className="btn btn--ghost">
                {t('전체 보기', 'All news')} <Arrow />
              </Link>
            </div>
            <div className="news-list">
              {recent.map((r) => (
                <NewsRow key={(r.id ?? r.url) + r.date} n={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
