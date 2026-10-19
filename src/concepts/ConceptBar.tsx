import { Link, NavLink } from 'react-router-dom'
import { useLang } from '../i18n'

export const concepts = [
  { slug: 'editorial', no: '01', name: 'Editorial', ko: '매거진형 스토리텔링', desc: '세리프 타이포와 챕터 구성으로 더인벤션랩의 이야기를 한 권의 잡지처럼 읽어 내려가는 롱스크롤 컨셉' },
  { slug: 'terminal', no: '02', name: 'Terminal', ko: '데이터 터미널형', desc: '수치와 포트폴리오 데이터를 전면에 둔 다크 대시보드. 필터·정렬·티커로 탐색하는 VC 리서치 툴 컨셉' },
  { slug: 'bento', no: '03', name: 'Bento', ko: '벤토 그리드형', desc: '정보를 모듈형 타일로 압축한 원페이지. 탭·가로 스크롤·스티키 스토리로 빠르게 훑어보는 프로덕트 랜딩 컨셉' },
]

/** 컨셉 페이지 상단에 고정되는 얇은 전환 바 */
export default function ConceptBar() {
  const { lang, setLang } = useLang()
  return (
    <div className="concept-bar" role="navigation" aria-label="Design concepts">
      <Link to="/concepts" className="concept-bar__home">
        ← Concepts
      </Link>
      <div className="concept-bar__tabs">
        {concepts.map((c) => (
          <NavLink key={c.slug} to={`/c/${c.slug}`} className="concept-bar__tab">
            {c.no} {c.name}
          </NavLink>
        ))}
        <Link to="/" className="concept-bar__tab">
          Main
        </Link>
      </div>
      <div className="concept-bar__lang">
        <button className={lang === 'ko' ? 'is-active' : ''} onClick={() => setLang('ko')}>
          KR
        </button>
        <button className={lang === 'en' ? 'is-active' : ''} onClick={() => setLang('en')}>
          EN
        </button>
      </div>
    </div>
  )
}
