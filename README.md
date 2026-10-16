# 더인벤션랩 홈페이지 (theilab.kr)

React + TypeScript + Vite로 만든 더인벤션랩(The Invention Lab) 홈페이지입니다. HashRouter 기반이라 정적 호스팅 어디에나 그대로 배포할 수 있습니다.

## 실행

```bash
npm install
npm run dev       # 개발 서버
npm run build     # dist/ 에 정적 파일 생성
npm run preview   # 빌드 결과 미리보기
```

## 라우트

| 경로 | 페이지 |
|---|---|
| `/#/` | 홈 |
| `/#/about` | 회사소개 · 에코시스템 · 팀(프로필 팝업) |
| `/#/capabilities/{venture-studio,new-biz-design,venture-building,strategic-partnership,global-expansion}` | Capabilities |
| `/#/cases` | 벤처스튜디오 사례 · 포트폴리오(필터/검색) · 프로젝트(필터) |
| `/#/cases/project/:id` | 프로젝트/사례 상세 |
| `/#/cases/portfolio/:id` | 포트폴리오 기업 상세 |
| `/#/insights` | 뉴스·블로그 목록 |
| `/#/insights/press/:id` | 뉴스 상세 |
| `/#/contact` | 문의하기 (`?type=investment` 등으로 문의 유형 지정) |

상단 KR/EN 토글로 국문/영문을 전환하며 선택값은 브라우저에 저장됩니다.

## 콘텐츠 수정

모든 콘텐츠는 `src/data/` 아래 파일에 있습니다.

- `site.ts` — 연락처, 주소, 외부 링크(유튜브·페이스북·InventionDeck AI·FINEDEAL·AC:DC 등). **빈 문자열인 링크는 텍스트로만 표시되니 실제 URL을 채워 주세요.**
- `team.ts` — 팀 구성원 17명 (소개·학력·경력·영문 소개)
- `projects.ts` — 프로젝트/사례 36건
- `portfolio.ts` — 포트폴리오 156개사 (`기업명|국가|분야|서비스|홈페이지|단계|비고` 형식)
- `news.ts` — 뉴스·블로그 57건

본문 텍스트는 빈 줄로 문단을, `- `로 목록을, `## `로 소제목을 구분합니다.

## 참고

- 문의 폼은 별도 서버 없이 메일 앱(`mailto:`)으로 연결됩니다. 서버 전송이 필요하면 `src/pages/Contact.tsx`의 `onSubmit`을 교체하세요.
- 팀 사진·고객사 로고가 없어 이니셜 아바타와 텍스트 칩으로 대체했습니다.
- 벤처스튜디오 사례 이미지는 기존 GCS 버킷(`inventionlab-homepage-assets`)의 이미지를 사용합니다.
