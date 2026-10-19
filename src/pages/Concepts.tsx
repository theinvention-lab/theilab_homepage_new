import { Link } from 'react-router-dom'
import { concepts } from '../concepts/ConceptBar'
import { Arrow } from '../components/ui'

export default function Concepts() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="eyebrow">DESIGN EXPLORATION</div>
          <h1 className="page-hero__title">Design Concepts</h1>
          <p className="page-hero__desc">같은 내용·수치·키워드를 서로 다른 구조와 레이아웃으로 풀어낸 홈페이지 시안입니다. 각 시안 하단의 바로 다른 시안과 언어(KR/EN)를 전환할 수 있습니다.</p>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container concept-grid">
          {concepts.map((c) => (
            <Link key={c.slug} to={`/c/${c.slug}`} className={`concept-card concept-card--${c.slug}`}>
              <div className="concept-card__preview" aria-hidden>
                <span>{c.name}</span>
              </div>
              <div className="concept-card__body">
                <span className="concept-card__no">CONCEPT {c.no}</span>
                <h3>{c.name}</h3>
                <strong>{c.ko}</strong>
                <p>{c.desc}</p>
                <span className="more">
                  시안 보기 <Arrow />
                </span>
              </div>
            </Link>
          ))}
          <Link to="/" className="concept-card concept-card--apple">
            <div className="concept-card__preview" aria-hidden>
              <span>Apple</span>
            </div>
            <div className="concept-card__body">
              <span className="concept-card__no">CURRENT</span>
              <h3>Apple</h3>
              <strong>현재 멀티페이지 사이트</strong>
              <p>밝은 배경과 큰 타이포그래피, 반투명 내비게이션의 다중 페이지 구성 (기본 사이트)</p>
              <span className="more">
                사이트 보기 <Arrow />
              </span>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
