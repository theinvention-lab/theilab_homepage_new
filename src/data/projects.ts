import type { L10n } from '../i18n'

export type TeamKey = 'nbd' | 'sp' | 'vs'
export type CategoryKey = 'poc' | 'invest' | 'global' | 'studio' | 'training' | 'deal' | 'validation' | 'cv' | 'seoul'

export const teams: Record<TeamKey, string> = {
  nbd: 'New Business Design Lab',
  sp: 'Strategic Partnership Team',
  vs: 'Venture Scaleup Team',
}

export const categories: Record<CategoryKey, L10n> = {
  poc: { ko: 'PoC 연계형 오픈이노베이션', en: 'PoC-Linked Open Innovation Program' },
  global: { ko: '글로벌 연계형 오픈이노베이션', en: 'Global Partnership–Driven Open Innovation Program' },
  training: { ko: '사내 혁신 역량 강화', en: 'Strengthening Internal Innovation Capabilities' },
  cv: { ko: '사내벤처 발굴 및 육성', en: 'Internal Venture Discovery and Incubation' },
  seoul: { ko: '서울 기업 주목적 투자조합', en: 'Seoul-Based Strategic Investment Fund' },
  validation: { ko: '신사업 검증 및 스케일업 지원', en: 'New Business Validation and Scale-Up Support' },
  deal: { ko: '투자 목적 딜스카우팅 프로그램', en: 'Deal Scouting Program for Investment Opportunities' },
  invest: { ko: '투자연계형 오픈이노베이션', en: 'Investment-Linked Open Innovation Program' },
  studio: { ko: '벤처스튜디오형 투자사례', en: 'Venture Studio Cases' },
}

export type ProjectLink = { title: string; source?: string; url: string }

export type Project = {
  id: number
  title: L10n
  team: TeamKey
  category: CategoryKey
  year: string
  period: string
  participants?: string
  sector?: string
  summary?: L10n
  overview: string
  process?: string
  points?: string
  results?: string
  image?: string
  links?: ProjectLink[]
}

const IMG = 'https://storage.googleapis.com/inventionlab-homepage-assets/project_output/'

const ONE_ON_ONE = `1:1 멘토링을 통한 맞춤형 사업화 컨설팅
선발 기업별 맞춤형 피드백을 제공했습니다. 핵심 가치 제안과 포지셔닝 방향을 함께 정립하며 내용 흐름과 구조를 체계적으로 보완했습니다. 또한 아이디어 차별성, 실행 가능성, 전략적 일관성을 중심으로 구체적인 개선 방향을 제시했으며 각 협업 제안이 매칭 성공과 실질적 사업화 가능성을 갖추도록 지원했습니다.`

const IR_CLINIC = `IR 고도화 중심의 클리닉 운영과 Demo Day 연계
서류 및 대면평가 이후 선발 기업을 대상으로 IR 피칭 클리닉과 자료 고도화를 병행하며 발표 역량과 메시지 전달력을 강화하며, 각 기업의 핵심 가치와 포지셔닝을 명확히 하고, 투자자 및 협업 파트너 관점에서 사업모델을 설득력 있게 구조화하도록 지원했습니다.`

const DIAGNOSIS = `정밀 진단을 통한 맞춤형 성장 전략 수립
기업별 사전진단과 대면진단을 통해 재무 안정성, 기술력, 시장성, 팀 역량 등을 종합 평가하였으며, 이를 기반으로 기업을 4개 유형으로 분류하고 각 기업에 필요한 성장 전략과 멘토링 방향을 구체화해 맞춤형 육성프로그램을 제공하였습니다.`

const IR_MENTORING = `IR 고도화와 투자 연계를 위한 실전형 멘토링 운영
기업별 투자 준비도를 반영해 IR Deck 전략을 정비하고, IR 피칭 멘토링과 Closed IR을 연계하여 실질적인 투자 매칭을 추진하였으며, Pitching 멘토링, 데이터룸 세팅, 투자사 개별 브리핑 등을 통해 참여 기업의 메시지 전달력과 설득력을 강화를 통해 그 결과 다수 기업이 후속 미팅 및 투자 검토 단계로 진입했습니다.`

const GLOBAL_POINTS = `글로벌 진출 특화 액셀러레이팅 전 주기 운영
베트남 시장 진입을 희망하는 스타트업을 대상으로 기업 모집, 선발, 국내 사전 준비, 현지 진출 실행, 사후 연계까지 전 단계에 걸친 체계적인 프로그램을 설계하고 운영하였습니다. 특히, 글로벌 시장 이해도 제고와 진출 전략 수립을 위한 교육, 멘토링, 현지 프로그램을 통해 스타트업의 해외 진출 역량을 단계별로 강화했습니다.

현지 진출 실행력 제고를 위한 맞춤형 밀착 지원
참여 기업별로 사업 분야, 성장 단계, 진출 국가에 적합한 현지 파트너 발굴 및 네트워킹을 지원하고, MOU 체결, 로컬 기관 연계, 문화·언어 적응까지 실질적 실행을 위한 다층적 자원을 연결했습니다. 또한, IR 자료 고도화, 비즈니스 피칭, 투자자 대응 전략 수립 등 글로벌 시장에서 통할 수 있는 사업화 역량을 밀착 지원했습니다.`

const EDGEUP_POINTS = (tips: string) => `TIPS 추천 연계
투자와 별도로 TIPS 추천을 통해 ${tips}의 자금조달을 진행하여 초기 기업의 성장 가속화를 지원했습니다.

1:1 밋업 지원
중견기업들과 1:1 밋업을 통해 공동사업화 가능성을 진단하고, 사업제휴 및 기술제휴를 추진했습니다.`

const EDGEUP_PROCESS = (year: number, n: number, month: number) =>
  `${year}년 ${month}월부터 한 달 간 공개 모집을 통해 해당 프로그램에 창업기업들이 지원했습니다. 이후 약 2달 간 진행된 서류평가 및 대면평가, 최종대면평가 과정을 거쳐 투자심의 및 협업심의 과정을 진행했습니다. 마지막으로, 최종적으로 ${n}개사 선별 후 개별적으로 투자 조건 검토 및 투자 집행, 이후 맞춤형 액셀러레이팅 지원이 이루어졌습니다.`

export const projects: Project[] = [
  // ───────────── 벤처스튜디오형 투자사례 ─────────────
  {
    id: 42,
    title: { ko: '모션랩스', en: 'MotionLABS' },
    team: 'vs',
    category: 'studio',
    year: '2020~',
    period: 'on going',
    sector: 'Healthcare',
    summary: { ko: '전문의 네트워크 중심의 Vertical AI Service 컴퍼니빌딩 진행', en: 'Vertical AI service company building centered on a specialist physician network' },
    overview:
      '정형외과 전문의 중심의 컴퍼니빌딩 기업과 함께 피봇팅 과정을 지원하여 병의원 타겟 CRM 서비스를 런칭하였으며, 2025년 말 기준 400여개가 넘는 병의원들이 도입하여 활용하며 BEP를 넘기고 고속 성장을 하고 있는 공동 컴퍼니빌딩 사례입니다.',
    process: `더인벤션랩이 예비창업 단계부터 발굴한 모션랩스는 2020년 1월 법인 설립 후 여성 비대면 헬스케어 플랫폼 ‘닥터벨라’를 런칭하며, 보령제약과 공동 조성한 ‘보령디헬스커버리 합자조합’으로부터 Seed 투자를 유치하는 등 초기 시장의 주목을 받았습니다. 하지만 비대면 진료를 둘러싼 법적 규제가 강화되면서 비즈니스 모델 유지에 한계가 발생하자, 더인벤션랩은 단순 자금 지원을 넘어 사업 구조를 근본적으로 재편하는 피봇팅에 착수했습니다.

이 과정에서 더인벤션랩은 정형외과 전문의 중심의 컴퍼니빌딩 기업인 아셉틱그룹과 협업하여 병의원 타겟 CRM 서비스로의 전환을 이끄는 ‘공동 컴퍼니빌딩’을 추진했습니다. 의료 현장의 전문 도메인 지식과 벤처스튜디오의 사업화 역량을 결합한 결과, 2025년 말 기준 전국 400여 개 이상의 병의원에 솔루션을 공급하며 BEP를 돌파하고 가파른 성장세를 기록하고 있습니다. 이는 규제 리스크를 유연하게 극복하고 파트너십을 통해 기업 가치를 재생산해낸 ‘위기 극복형 공동 컴퍼니빌딩’의 대표적 성공 사례로 평가받습니다.`,
    image: IMG + 'VS_motionlabs2.png',
    links: [
      { title: "모션랩스, 엔비디아 인셉션 선정…환자데이터로 'PX인텔리전스' 고도화", source: '머니투데이', url: 'https://www.mt.co.kr/future/2026/01/07/2026010708372227444' },
      { title: '“병의원 경쟁력, 진료에서 ‘환자 경험’으로 이동”', source: '라포르시안', url: 'https://www.rapportian.com/news/articleView.html?idxno=230929' },
      { title: '새해 K-헬스케어 AI ‘엔진’ 달고 본격 출항', source: '지디넷 코리아', url: 'https://zdnet.co.kr/view/?no=20251218172016' },
    ],
  },
  {
    id: 41,
    title: { ko: '앙호두', en: 'Anghodu' },
    team: 'vs',
    category: 'studio',
    year: '2025~',
    period: 'on going',
    sector: 'F&B',
    summary: { ko: '해외진출향 로컬 F&B 프랜차이즈 개발', en: 'Development of local F&B franchise for overseas expansion' },
    overview:
      '인천 기반으로 빠르게 전국 단위에서 프랜차이즈 가맹 모집을 진행하고 있는 앙호두와 함께 베트남 마스터 프랜차이즈 사업을 계획, 추진하고 있는 해외진출형 컴퍼니빌딩 사례입니다.',
    process: `더인벤션랩은 인천창조경제혁신센터와 주관한 ‘인천 청년해외진출기지 지원사업’을 통해 9가지 다각화된 앙금과 캐릭터 IP 경쟁력을 갖춘 ‘앙호두’를 발굴하여, 법인 설립부터 해외 시장 검증까지 전 과정을 견인하는 해외진출형 컴퍼니빌딩을 진행했습니다. 특히 개인사업자였던 브랜드를 (주)메이투투로 법인화하여 사업 체계를 정비한 결과, 2026년 1월 기준 50개 가맹점 계약을 달성하며 국내 시장에서 폭발적인 성장세를 증명했을 뿐만 아니라 필리핀, 미국, 캐나다 등 글로벌 시장에서도 가맹 문의가 잇따르는 등 비즈니스 확장성을 입증했습니다.

이러한 성과를 바탕으로 더인벤션랩은 (주)메이투투에 대한 직접 투자와 함께 TIPS 및 LIPS 프로그램 추천을 진행하여 제도적 스케일업을 뒷받침하고 있으며, 2026년 내 베트남 호치민에 3개 거점 매장을 오픈하는 마스터 프랜차이즈(MF) 사업을 공동 추진하며 본격적인 글로벌 시장 공략에 나섰습니다. 이는 로컬 기반의 F&B 모델을 발굴해 법인화하고, 이를 글로벌 스탠다드에 맞게 재설계하여 파트너와 함께 성장을 일궈내는 벤처스튜디오의 전형적인 성공 사례로 평가받고 있습니다.`,
    image: IMG + 'VS_anghodu.jpg',
    links: [
      { title: '한국의 전통 디저트인 호두과자를 현대적으로 재해석해서 제조하는 ‘앙호두’', source: '한경', url: 'https://magazine.hankyung.com/job-joy/article/202601199108d' },
      { title: "\"호두과자에 담은 자립의 꿈\" 인천 서구, 저소득층 위한 '제과사업단' 출범", source: '위키트리', url: 'https://www.wikitree.co.kr/articles/1104241' },
      { title: "'해외서 빛난' 인천 청년 창업자들… 청진기 성과공유회", source: '경기신문', url: 'https://www.kgnews.co.kr/news/article.html?no=875939' },
    ],
  },
  {
    id: 40,
    title: { ko: '자라소프트', en: 'JARASOFT' },
    team: 'vs',
    category: 'studio',
    year: '2022~',
    period: '8m',
    sector: 'B2B/SaaS',
    summary: { ko: '글로벌 시장에서 떠오르는 실시간 얼굴/사물 마스킹 AI SaaS, ‘블러미’', en: 'Blurry, a real-time face/object masking AI SaaS emerging in the global market' },
    overview: `- 더인벤션랩의 파트너가 창업자와 공동으로 서비스 기획하고 글로벌 시장 타겟으로 처음부터 런칭한 영상/이미지 분야 실시간 마스킹 솔루션(개인초상권 및 정보보안 이슈 해결)
- 더인벤션랩 파트너가 직접 공동창업자로 참여하여 컴퍼니빌딩한 케이스
- 더인벤션랩은 본계정 및 펀드 계정을 통해 총 10억 원이상 시드 및 후속투자기관으로 참여(리드 투자자)
- 외부 투자기관없이 서비스 런칭 8개월 만에 BEP달성, 매출 10억 달성(B2B 및 B2C)`,
    process: `1. 자라소프트의 본 사업모델의 부진으로 피봇팅을 위한 신규 사업모델 기획과 발굴
2. 더인벤션랩 파트너의 직접적인 개입과 참여, 그리고 실제 공동창업자로 등기(컴퍼니빌딩)
3. 더인벤션랩의 본계정 투자 및 펀드계정 투자를 통해 TIPS 연계하여 성공
4. Pre-A라운드 투자 또한 더인벤션랩 운용펀드를 통해 투자완료하고 BEP통과`,
    points: `Key Point #1
애초부터 글로벌 시장에 통용되고, B2C 및 B2B 동시 타겟 가능한 Vertical AI 솔루션 기획

Key Point #2
유튜버 부터 공공기관/학교/기업 등에서 개인초상권 이슈 및 정보보안 이슈로 사람얼굴이나 차량번호판 등이 직접 노출되는 이미지/영상에 대한 마스킹 처리 니즈가 기하급수적으로 증가. 블러미는 이러한 문제를 실시간으로 해결하는 전세계 최초의 실시간 마스킹 처리 SaaS

Key Point #3
전 세계 80여 개국에서 직접 결제, 월간 MAU는 10만 명 이상 돌파

Key Point #4
B2C 뿐만 아니라 B2B/B2G 수요의 폭발적 증가`,
    results: `1. 8개월 만에 매출 10억, BEP돌파
2. 한국의 경우 B2B 온프레미스 버전(철도청 코레일, 현대미포조선 등)의 매출이 빠르게 성장 중. 조달청 조달품목으로도 등록완료. 전문 B2B총판 계약도 체결하여, 본격적인 B2B 영업 진행
3. B2C의 경우, 월 평균 3000만원 매출 발생, 미국-영국-인도-베트남 등 전세계 80여 개국가에서 직접 결제
4. 시드 부터 Pre-A 라운드 투자까지 더인벤션랩이 주도`,
    image: IMG + 'VS_blur.me.png',
    links: [
      { title: '자라소프트, AI 모자이크 서비스 ‘블러미’ 글로벌 출시', source: 'AI TIMES', url: 'https://www.aitimes.com/news/articleView.html?idxno=161524' },
      { title: '자라소프트의 AI 영상 비식별 솔루션 ‘블러미 엔터프라이즈 엣지’, 국립중앙의료원에 공급', source: '바이오타임스', url: 'https://www.biotimes.co.kr/news/articleView.html?idxno=21908' },
      { title: '"증가하는 산업 재해, 우리가 잡는다"...\'안전산업박람회\' 가보니', source: '포인트데일리', url: 'https://www.pointdaily.co.kr/news/articleView.html?idxno=270710' },
    ],
  },
  {
    id: 39,
    title: { ko: '오케이쎄', en: 'OKXE' },
    team: 'vs',
    category: 'studio',
    year: '2019~',
    period: '2y',
    sector: 'Mobility/Autotech/Fintech',
    summary: { ko: '베트남 1위 중고오토바이 및 전기 오토바이 중개-판매 마켓플레이스', en: "Vietnam's leading marketplace for used motorcycles and electric motorcycles brokerage and sales." },
    overview: `- 베트남 최초로 중고오토바이 거래 플랫폼 서비스를 2019년 MVP 개발하여 시작.
- 법인설립(한국본사) 및 베트남 100% 자회사(외투법인) 설립 주도 및 시드 펀딩 주도
- 시리즈 A라운드 후속투자유치 및 Follow-On 투자 진행 (누적 투자액 약 15억, 시리즈 A라운드 투자총액 200억 달성)
- 현재 베트남 내 온라인 기반 중고오토바이 거래규모 1조 돌파(1위), 다운로드 수 870만 명, 월간 MAU 150만명
- 2024년 싱가폴 중간지주회사 설립 완료 및 2025년 전기 오토바이 매장(빈패스트, 야디의 제1 파트너사로 선정) 오픈`,
    process: `1. 한국 본사(홀딩스) - 베트남 100% 자회사구조의 지배구조 설정 및 주도
2. 시드 펀딩 및 시리즈 A 후속투자 유치 작업 지원, 후속투자자로도 참여(최초 시드펀딩한 조합은 10배수로 회수완료)
3. 플랫폼 사업 확장 및 오프라인 매장 설립 자문 및 액셀러레이팅`,
    points: `Key Point #1
한국에서는 검증된 모델(헤이딜러, SK엔카)이나 베트남에 없는 사업모델을 선제적으로 창업자와 기획-발굴하고, 팀셋업하는 베트남 최초의 컴퍼니빌딩 모델 케이스

Key Point #2
시드펀딩 부터 후속투자에 이르기까지 지속적인 투자 집행

Key Point #3
팀 셋업 및 거버넌스 구조(지배구조) 확립과 EXIT 전략의 용이성 확보를 위한 구조설계`,
    results: `1. 베트남 시장 내 중고 오토바이 및 전기 오토바이(신차) 중개-판매 1위 사업자로 등극
2. 압도적 기술력의 플랫폼 보유 및 고도화 역량 보유
3. 200억 이상의 후속투자 성공적으로 유치 (2025년 말 기준 순매출 30억 돌파, 2026년 300억원 돌파 예상(2Q내 BEP통과))`,
    image: IMG + 'VS_okxe.jpg',
    links: [
      { title: '"베트남 성공 방정식, 인니에서 3년 내 재현할 것"[이코노 인터뷰]', source: '이코노미스트', url: 'https://economist.co.kr/article/view/ecn202509170041' },
      { title: "국내 금융권, 베트남 시장 공략 '가속'...'성장 잠재력에 베팅\"", source: '위키리크스 한국', url: 'http://www.wikileaks-kr.org/news/articleView.html?idxno=173491' },
      { title: "피엠그로우, 베트남 OKXE와 '전기모빌리티 배터리' 맞손", source: '뉴시스', url: 'https://www.newsis.com/view/NISX20260120_0003483945' },
    ],
  },

  // ───────────── 투자연계형 오픈이노베이션 ─────────────
  {
    id: 37,
    title: { ko: '엣지업 크리에이터스 3기', en: 'Edgeup cre8tors season 3' },
    team: 'vs',
    category: 'invest',
    year: '2025',
    period: '1y',
    participants: '6개사',
    summary: {
      ko: '우미글로벌, 국보디자인, 아주컨티뉴엄, 삼구아이앤씨가 펀드 LP이자 오픈이노베이션 파트너로 참여한 협업 연계형 오픈이노베이션 프로그램',
      en: 'A collaborative open innovation program involving Umi Global, Gukbo Design, Aju Continuum, and Samgu I&C as fund LPs and open innovation partners.',
    },
    overview:
      'AI 분야의 스타트업의 공개 모집, 서류 평가, 대면 평가를 거쳐 최종적으로 6개사를 선별하였으며, 선발된 기업들은 참여 중견기업들과 사업제휴 및 기술제휴, 더인벤션랩을 통한 TIPS 및 해외진출 지원을 받았습니다.',
    process: EDGEUP_PROCESS(2025, 6, 8),
    points: EDGEUP_POINTS('5~15억원+a'),
    results: '자라소프트, RiDM, 모션랩스, Diald AI, 인트플로우, 갤로핑에 투자 집행.',
  },
  {
    id: 35,
    title: { ko: '엣지업 크리에이터스 2기', en: 'Edgeup cre8tors season 2' },
    team: 'vs',
    category: 'invest',
    year: '2024',
    period: '1y',
    participants: '5개사',
    summary: {
      ko: '우미글로벌, 국보디자인, 아주, 하이젠알엔엠, 엑스얼라이언스가 펀드 LP이자 오픈이노베이션 파트너로 참여한 협업 연계형 오픈이노베이션 프로그램',
      en: 'A collaborative open innovation program involving Umi Global, Gukbo Design, Aju, Higen RNM, and X-Alliance as fund LPs and open innovation partners.',
    },
    overview:
      '로보틱스 및 AI 분야의 스타트업의 공개 모집, 서류 평가, 대면 평가를 거쳐 최종적으로 5개사를 선별하였으며, 선발된 기업들은 참여 중견기업들과 사업제휴 및 기술제휴, 더인벤션랩을 통한 TIPS 및 해외진출 지원을 받았습니다.',
    process: EDGEUP_PROCESS(2024, 5, 6),
    points: EDGEUP_POINTS('5억원+a'),
    results: '카이트다이내믹스, 지오로봇, 미스릴, 에이치메딕기어, 마이크로픽스에 투자 집행.',
  },
  {
    id: 34,
    title: { ko: '엣지업 크리에이터스 1기', en: 'Edgeup cre8tors season 1' },
    team: 'vs',
    category: 'invest',
    year: '2023',
    period: '1y',
    participants: '7개사',
    summary: {
      ko: '우미글로벌, 국보디자인, 아주컨티뉴엄, 삼구아이앤씨가 펀드 LP이자 오픈이노베이션 파트너로 참여한 협업 연계형 오픈이노베이션 프로그램',
      en: 'An open innovation program with collaborative linkage, participated by Umi Global, Gukbo Design, Aju Continuum, and Samgu I&C as fund LPs and open innovation partners.',
    },
    overview:
      '공간을 혁신하는 기술 혹은 라이프스타일 분야의 스타트업의 공개 모집, 서류 평가, 대면 평가를 거쳐 최종적으로 7개사를 선별하였으며, 선발된 기업들은 참여 중견기업들과 사업제휴 및 기술제휴, 더인벤션랩을 통한 TIPS 및 해외진출 지원을 받았습니다.',
    process: EDGEUP_PROCESS(2023, 7, 6),
    points: EDGEUP_POINTS('5억원+a'),
    results: '로쉬코리아, 더브이플래닛, 서울프라퍼티인사이트, 블루프로그, 플로이드, 리얼라이저블, 칼만에 투자 집행.',
  },
  {
    id: 32,
    title: { ko: '2024 sheventures', en: '2024 sheventures' },
    team: 'sp',
    category: 'invest',
    year: '2024',
    period: '2024 Apr ~ Dec',
    participants: '8개사',
    summary: {
      ko: '딥테크 및 SaaS 기반 여성 초기 창업팀을 선발해 맞춤형 육성과 실전형 투자 연계를 통해 여성 창업 생태계의 선순환 실현',
      en: 'Selecting women-led early-stage deep tech and SaaS teams to build a virtuous cycle in the women founders ecosystem through tailored incubation and investment linkage.',
    },
    overview:
      "국내 여성 초기 창업기업 대상으로 진행되는 투자연계형 OI프로그램으로 '딥테크 및 SaaS형 서비스 플랫폼 기반' 의 여성 창업팀을 선발하였고, 육성뿐만 아니라 투자까지 집행하여 여성 창업 생태계의 선순환 구조를 구축하는 것을 목표로 운영하였으며, 주요 성과로는 직접투자 3개팀, 후속투자 연계 1팀 달성함",
    process: '기업모집 → 1차 서류평가 → 2차 대면평가 → 최종선발 → 육성 프로그램 진행 → 투자연계',
    points: DIAGNOSIS + '\n\n' + IR_MENTORING,
    results: `1) 포들러스
- 서비스 소개: 반려동물 상품 중개 플랫폼, 펫샵, 반려동물 SNS 커뮤니티 특화 SaaS 솔루션 운영
- 직접투자: 약 2억
- 후속투자: 약 2억

2) 스터디포미
- 서비스 소개: AI 빅데이터 기반 학습 콘텐츠 큐레이션 플랫폼
- 직접투자: 약 5천만원`,
    links: [{ title: '2024 쉬벤처스 제2기 데모데이 스케치', source: 'YouTube', url: 'https://www.youtube.com/watch?v=mlE3zEAtCO8' }],
  },
  {
    id: 31,
    title: { ko: '2023 sheventures', en: '2023 sheventures' },
    team: 'sp',
    category: 'invest',
    year: '2023',
    period: '2023 May ~ Dec',
    participants: '8개사',
    summary: {
      ko: '딥테크 및 SaaS 기반 여성 초기 창업팀을 선발해 맞춤형 육성과 실전형 투자 연계를 통해 여성 창업 생태계의 선순환 실현',
      en: 'Selecting women-led early-stage deep tech and SaaS teams to build a virtuous cycle in the women founders ecosystem through tailored incubation and investment linkage.',
    },
    overview:
      "국내 여성 초기 창업기업 대상으로 진행되는 투자연계형 OI프로그램으로 '딥테크 및 SaaS형 서비스 플랫폼 기반' 의 여성 창업팀을 선발하였고, 육성뿐만 아니라 투자까지 집행하여 여성 창업 생태계의 선순환 구조를 구축하는 것을 목표로 운영하였으며, 주요 성과로는 직접투자 4개팀, TIPS 연계 1팀, 후속투자 연계 2팀 달성함",
    process: '기업모집 → 1차 서류평가 → 2차 대면평가 → 최종선발 → 육성 프로그램 진행 → 투자연계',
    points: DIAGNOSIS + '\n\n' + IR_MENTORING,
    results: `1) 로고몬도
- 서비스 소개: 3D 실시간 웹 렌더링 기술력을 활용한 주얼리 마켓플레이스
- 직접투자 집행
- 후속투자: 약 1억
- 기타성과: TIPS 선정

2) 케이스타일허브
- 서비스 소개: 인도네시아 대상 화장품 추천 정기구독 서비스 UNNIS 제공
- 직접투자 집행
- 후속투자: 약 1억
- 기타성과: 프로그램 기간 내 매출 2800% 성장 달성

3) 레비테이트
- 서비스 소개: RTD(Ready to Drink)제품 개발 및 제조
- 기타성과: 아시아나 기내 서비스 납품 진행`,
    links: [{ title: '2023 쉬벤처스 제1기 데모데이 스케치', source: 'YouTube', url: 'https://www.youtube.com/watch?v=oci1iB_Iyhw' }],
  },
  {
    id: 26,
    title: { ko: '2024 삼천리 S-Together', en: '2024 Samchully S-Together Program' },
    team: 'sp',
    category: 'invest',
    year: '2024',
    period: '2024 Jun ~ Nov',
    participants: '5개사',
    summary: {
      ko: '기후테크·데모테크·딥테크·푸드테크 4개 분야의 유망 스타트업을 발굴하고, 실질적인 사업 제휴 및 공동 성과 창출을 목표로 기획된 투자 연계형 오픈이노베이션 프로그램',
      en: 'An investment-linked open innovation program designed to discover promising startups in four sectors: climate tech, demo tech, deep tech, and food tech, aiming for practical business partnerships and joint value creation.',
    },
    overview:
      'S-Together 콘테스트 프로그램은 에너지 및 지속가능성 분야 유망 스타트업을 발굴하고 직접 투자를 목적의 프로그램으로 총 402개 기업이 지원한 가운데 더인벤션랩과 함께 기업 정밀 진단, 맞춤형 멘토링, IR 고도화를 통해 기술성·시장성·협업 가능성을 기준으로 5개 기업이 최종 선발함',
    process: `2024년 7월 한 달간 에너지 및 지속가능성 분야 유망 스타트업을 대상으로 공개 모집을 진행하였으며, 8월 서류심사를 통해 기술성, 시장성, 협업 가능성 등을 기반으로 1차 선별을 마쳤습니다.
9~10월에는 더인벤션랩의 IR 컨설팅을 통해 고도화된 자료 기반으로 발표 평가를 통해 심층 검토를 거쳐 최종 5개 기업을 선정하였고, 11월에는 삼천리 주요 임직원이 참석한 데모데이를 통해 선발 기업의 사업모델과 협업 방향을 소개하고, 투자 및 사업 연계 가능성을 논의하였습니다.`,
    points: `정량·정성 평가를 통한 유망 기업 선별 및 협업 잠재력 검증
총 402개 기업을 대상으로 기술성, 시장성, 지속가능성, 삼천리 내부 연계 가능성 등을 중심으로 서류 및 대면평가를 진행하였으며, 정량 평가와 정성 평가 기준을 기반으로 유망도를 평가해 최종 5개 기업을 선발하였습니다.
평가 과정에서는 기업의 IR 자료 완성도, 공동 사업모델 구상 가능성, ESG 및 에너지 분야 정합성 등을 면밀히 검토하였고, 이 결과는 이후 내부 사업부 검토 및 데모데이 준비에 핵심 기초자료로 활용되었습니다.

${IR_CLINIC}`,
    results: `1) 에이트테크(객체인식 인공지능 기반 폐기물 자동 선별 로봇 솔루션)
- MOU: 2건 체결(VIET SON Group, CANIX)
- 후속투자: 65억원(뮤어우즈벤처스, GS벤처스, 소풍벤처스, 이녹스그룹, 티케인베스트먼트)
- 특허: 국내 특허 출원 6건, 해외 특허 출원 10건, 국내 디자인권 출원 1건
- 인증: 하이서울 인증 취득

2) 큐빅(보안 합성데이터 솔루션 전문 기업)
- 수상: 1건(2024 AI Security Day 세미나에서 데모데이 '최우수상' 수상)
- 기타(OI): 3건(기업은행 IBK 1st LAB 6기 선정, '24 NH오픈비즈니스허브 선정, KB스타터스 선정)
- 기타: 테크크런치 디스럽트 2024 참여

3) 심플플래닛(배양육 개발 기업)
- 후속투자: 80억(삼호그린인베스트먼트, 은행권청년창업재단, 패스파인더에이치, 프롤로그벤처스, 현대기술투자, MYSC, 이지홀딩스, 디씨프라이빗에쿼티, 포스코기술투자_Series A)
- TIPS 선정(지원금 12억)

4) 코스모스랩(친환경 소재를 활용한 아연 금속 전지 제조기업)
- 후속투자: 48억(골든오크벤처스, 신용보증기금, 라이징에스벤처스, 경남벤처투자, 아이엠투자파트너스_Pre-A)`,
  },
  {
    id: 25,
    title: { ko: '2025 삼천리 S-Together', en: '2025 Samchully S-Together Program' },
    team: 'sp',
    category: 'invest',
    year: '2025',
    period: '2025 Apr ~ Sep',
    participants: '6개사',
    summary: {
      ko: '기후테크·푸드테크·딥테크 3개 분야의 유망 스타트업을 발굴하고, 실질적인 사업 제휴 및 공동 성과 창출을 목표로 기획된 투자 연계형 오픈이노베이션 프로그램',
      en: 'An investment-linked open innovation program designed to discover promising startups in climate tech, food tech, and deep tech, aiming for practical business partnerships and joint value creation.',
    },
    overview:
      'S-Together 콘테스트 프로그램은 기후테크, 푸드테크, 딥테크 분야 유망 스타트업을 발굴하고 직접 투자를 목적의 프로그램으로 총 201개 기업이 지원한 가운데 더인벤션랩과 함께 기업 정밀 진단, 맞춤형 멘토링, IR 고도화를 통해 기술성·시장성·협업 가능성을 기준으로 6개 기업이 최종 선발함',
    process: `2025년 5~6월 한 달간 에너지 및 지속가능성 분야 유망 스타트업을 대상으로 공개 모집을 진행하였으며, 6~7월 내부 심사를 통해 총 21개의 기업이 서류 통과했으며,
이후 내외부심사위원이 참석한 대면 평가를 거쳐 최종 6개 기업을 선정하였음. 이후 심층 IR Deck 컨설팅을 거쳐 9월 삼천리 주요 임직원이 참석해 선발 기업의 사업모델과 협업 방향을 소개하는 데모데이를 진행함`,
    points: `정량·정성 평가를 통한 유망 기업 선별 및 협업 잠재력 검증
총 201개 기업을 대상으로 기술성, 시장성, 지속가능성, 삼천리 내부 연계 가능성 등을 중심으로 더인벤션랩의 자체 기업 분석 Tool로 정량 평가와 정성 평가를 진행해 최종 6개 기업을 선발하였습니다.

${IR_CLINIC}`,
    results: `1) 반프(타이어 센서를 통한 실시간 타이어 프로파일 기반 안전 및 연비개선 솔루션)
- 수상: ICT 공로 부총리 표창, CES2026 혁신상, 포브스 아시아 100 선정 등
- MOU: Integre Trans(유럽 운송기업)
- 특허: 국내 등록 특허 5건 / 출원 특허 5건, 해외 PCT 출원 특허 7건 / 국가 등록 특허 1건(미국), 출원 특허 7건 (미국, 중국, 유럽 대상)
- 인증: 기술신용평가 등급(TI-2) 획득

2) 솔라라이즈(태양광 발전기의 실시간 상태 진단 및 최적 운영을 위한 지능형 인버터, Verter King)
- 특허: 등록 1건 / 출원 5건
- 투자: 후속투자 유치 완료

3) 신스타프리젠츠(Autowok, OLHSO Truck 등 무인 로봇 키친 솔루션)
- 특허: 국내 등록 특허 6건 / 출원 특허 1건 / 해외 등록 특허 3건 / 출원 특허 4건

4) 에이비알(친환경 직접 재활용 기술로 재제조 양극재/음극재로 제조-판매)
- 더인벤션랩 직접투자 1억원 (25.11.26)
- 계약: 쉐머카(84억 상당)
- MOU: 케이지에이(친환경 수계공정 밸류체인 관련)
- 수상: 스타트업 월드컵 한국 대표 선정, 코어 이노베이션 코리아 2025 대상 수상, 퍼스트펭귄 선정

5) 플라시클(친환경 화학적 해중합을 통한 고순도 r-BPA 제조)

6) 한국딥러닝(Deep OCR+ - 다양한 비정형 문서 자동 추출 솔루션)
- 후속투자: 100억(트랜스링크인베스트먼트, SV인베스트먼트, IBK기업은행 등)
- 특허: 등록 특허 6건`,
    links: [{ title: "2025 삼천리 'S-Together' 데모데이 스케치", source: 'YouTube', url: 'https://www.youtube.com/watch?v=wK-nj6dipMQ' }],
  },

  // ───────────── PoC 연계형 오픈이노베이션 ─────────────
  {
    id: 30,
    title: { ko: '상생오픈이노베이션', en: 'Collaborative Open Innovation Program' },
    team: 'sp',
    category: 'poc',
    year: '2023',
    period: '2023 May ~ Dec',
    participants: '7개사',
    summary: {
      ko: '경기도 유망 스타트업을 발굴해 메타버스·XR 분야 중심의 PoC 연계와 맞춤형 컨설팅으로 대·중견기업과의 실질적 협업 및 사업화 지원',
      en: 'Discovering promising Gyeonggi-do startups and supporting practical collaboration with large and mid-sized corporations through metaverse/XR-focused PoCs and tailored consulting.',
    },
    overview:
      "상생오픈이노베이션은 경기도 소재 유망 벤처 및 스타트업을 발굴하여 국내 대/중견기업과 PoC를 연계하는 OI 프로그램으로 '메타버스, VR/AR/XR 콘텐츠 및 서비스 등' 의 분야로 스타트업을 모집하여 PoC를 진행해 주요 성과로는 PoC 협업 연계 7팀 달성함",
    process: '기업모집(정규) → 1차 서류심사 → 2차 발표심사 → 최종선발 → 밋업 → 육성(교육 및 멘토링) → PoC과제 구체화/모니터링 → 데모데이 → 선별적 투자 검토',
    points: ONE_ON_ONE + '\n\n' + IR_CLINIC,
    results: `1) 애니펜
- 서비스 소개: AR 캐릭터와 함께 만드는 숏 비디오 앱 '애니베어' 제공
- 협업과제: 국보디자인과 함께 디지털트윈 기반의 인테리어 카탈로그 콘텐츠 제작 PoC 진행

2) 에프앤에스홀딩스
- 서비스 소개: 3D 기반 최신 패션 콘텐츠 매거진 플랫폼 'FASSKER' 제공
- 협업과제: KB국민카드와 패션피플 고객을 위한 디지털 패션 콘텐츠 PoC 진행

3) 위아트
- 서비스 소개: 온라인 미술품 거래 플랫폼
- 협업과제: 코엑스와 AI아트를 활용한 미디어 아트 전시 프로젝트 PoC 진행

4) 코디미
- 서비스 소개: 패션 모델 컷 생성 AI 솔루션 '포투' 제공
- 협업과제: 크리에이션엘(루이까또즈)과 AI 모델을 활용한 패션 모델 컷 생성 PoC 진행`,
  },
  {
    id: 29,
    title: { ko: '삼성증권 Startup Rallyup', en: 'Samsung Securities Startup Rally-Up Program' },
    team: 'sp',
    category: 'poc',
    year: '2022',
    period: '2022 Apr ~ Dec',
    participants: '3개사',
    summary: {
      ko: '혁신 스타트업과의 PoC를 통해 디지털 금융 서비스 혁신을 이끌고, 맞춤형 컨설팅과 IR 고도화를 통해 실질적 협업과 사업화 지원',
      en: 'Driving innovation in digital financial services through PoCs with innovative startups, providing tailored consulting and enhancing IR to support practical collaboration and commercialization.',
    },
    overview:
      "Startup Rallyup은 혁신적인 아이디어와 기술을 가진 스타트업과의 PoC를 통해 금융 서비스의 혁신을 도모하는 OI 프로그램으로 2022년에는 '디지털 기술 활용 신규 서비스 제공, 고객 맞춤형 투자 정보 및 데이터 마케팅, 고객의 판매 업무 처리 향상을 위한 솔루션, 디지털 금융 신사업, 서비스, 기술 적용 관련 자유주제' 의 분야로 스타트업을 모집하여 PoC를 진행해 주요 성과로는 PoC 협업 2팀, 직접투자 1팀 달성함",
    process:
      '기업모집(정규/상시) → 1차 운영사/실무진 심사 → 2차 서류 심사 → 3차 대면심사 → 최종선발 → 밋업 → PoC과제 구체화/모니터링 → 육성(교육 및 멘토링) → 실무진 대상 내부 결과 발표회 → 최종 발표회 → 선별적 투자 검토',
    points: ONE_ON_ONE + '\n\n' + IR_CLINIC,
    results: `1) 업루트컴퍼니
- 서비스소개: 디지털 자산 적립식 구매 서비스 '비트세이빙' 제공
- 협업과제: 증권사 서비스 내 디지털 자산 적립식 구매 상품 공동판매 PoC 협업 및 직접투자 집행
- 더인벤션랩 직접 투자 (1.5억)

2) 웨인힐스브라이언트에이아이
- 서비스소개: 딥러닝기반 영상 자동 생성 플랫폼 '디지털라이브북' 제공
- 협업과제: 고객응대 업무 과중이 심한 금융사의 문제를 해결하기 위해 기업이 보유한 콘텐츠를 디지털화하는 PoC를 진행함`,
    links: [{ title: '삼성증권과 스타트업의 Collaboration', source: 'YouTube', url: 'https://www.youtube.com/watch?v=8sxMh5t17MM' }],
  },
  {
    id: 28,
    title: { ko: 'KT Bridge Lab', en: 'KT Bridge Lab' },
    team: 'sp',
    category: 'poc',
    year: '2022',
    period: '2022 Mar ~ Dec',
    participants: '9개사',
    summary: {
      ko: '유망 스타트업을 발굴해 KT와의 PoC 연계 및 맞춤형 컨설팅·IR 고도화를 통해 실질적 사업화 지원',
      en: 'Discovering promising startups and supporting practical commercialization through PoCs with KT, tailored consulting and IR enhancement.',
    },
    overview:
      "Bridge Lab은 유망 벤처 및 스타트업을 발굴하여 KT와의 PoC를 연계하는 OI 프로그램으로 2022년에는 'AI/빅데이터, AICC(AI Contact Center), 디지털물류, Cloud/IDC, 메타버스/NFT 등' 의 분야로 스타트업을 모집하여 PoC를 진행해 주요성과로 PoC 협업 연계 9팀, 후속 투자자 매칭 19건 달성함",
    process:
      '기업모집(정규) → 1차 서류심사 → 2차 서류 심사 → 발표평가 → 최종선발 → 밋업 → PoC과제 구체화/모니터링 → 육성(교육 및 멘토링) → 실무진 대상 내부 결과 발표회 → 최종 발표회 → 선별적 투자 검토',
    points: ONE_ON_ONE + '\n\n' + IR_CLINIC,
    results: `1) 평행공간
- 서비스소개: 실사기반 3D매핑을 이용한 부동산 공간투어 및 인터랙션 서비스 '평행공간 투어' 제공
- 협업과제: KT Estate와 고객 임대용 부동산 시장에서의 비대면 현장 방문 서비스 PoC 진행

2) 엑스엘에이트에이아이
- 서비스소개: 인공지능 기반 영상 번역 솔루션
- 협업과제: KT의 메타버스 플랫폼 '메타라운지'의 번역 솔루션 PoC 진행`,
    links: [{ title: "KT, '브릿지 랩' 파이널 피칭데이 개최", source: '디지털투데이', url: 'https://www.digitaltoday.co.kr/news/articleView.html?idxno=464086' }],
  },
  {
    id: 22,
    title: { ko: 'KT FutureWave', en: 'KT FutureWave' },
    team: 'sp',
    category: 'poc',
    year: '2025',
    period: '2025 May ~ Dec',
    participants: '13개사',
    summary: {
      ko: '혁신 기술 분야의 유망 스타트업을 발굴하여 맞춤형 멘토링과 PoC 협력 기회 제공',
      en: 'Identified promising startups in innovative technology sectors and provided tailored mentoring and PoC collaboration opportunities.',
    },
    overview:
      'AI 기반 유망 스타트업을 발굴해 사업부와의 실증(PoC) 및 투자 연계를 추진하는 전략형 오픈이노베이션 프로그램으로, 정밀 진단, 맞춤형 멘토링, 전략적 투자 매칭을 통해 기업별 성장 전략을 설계하고 실행 중심으로 운영했습니다.',
    process:
      '2025년 5~6월에 걸쳐 사전진단과 대면 평가를 거쳐 기업별 맞춤형 성장 전략을 수립하였고, 약 3개월 동안의 기업별 맞춤형 멘토링을 통해 역량을 강화하고, 사업부 연계 PoC 및 협업모델을 구체화했습니다. 프로그램 운영 과정에서 8월 Closed IR과 11월 성과공유회를 통해 내외부 관계사 및 투자사와의 미팅과 네트워킹을 지원하며 실질적인 사업화 성과 도출에 집중했습니다.',
    points: `정밀 진단을 통한 맞춤형 성장 전략 수립
기업별 사전진단과 대면진단을 통해 재무 안정성, 기술력, 시장성, 팀 역량 등을 종합 평가하였으며, 이를 기반으로 기업을 4개 유형으로 분류하고 각 기업에 필요한 성장 전략과 멘토링 방향을 구체화했습니다. 진단 결과는 KT 사업부 연계 가능성과 협업 적합성을 사전에 확인하고, 맞춤형 멘토 배정과 PoC·IR 지원의 기준으로 활용되었습니다.

${IR_MENTORING}`,
    results: `- 직접투자 1건(자라소프트)
- 후속연계투자 3건(파인더갭, SQK, 원컵)
- IPO 주관사 계약 1건(에이아이오투오)
- KT 사업부와 PoC 연계 (파인더갭, 자라소프트, 디스펙터)`,
  },

  // ───────────── 글로벌 연계형 오픈이노베이션 ─────────────
  {
    id: 33,
    title: { ko: 'GMEP', en: 'GMEP' },
    team: 'sp',
    category: 'global',
    year: '2023',
    period: '2023 Apr ~ Dec',
    participants: '10개사',
    summary: {
      ko: '국내 스타트업의 글로벌 시장 진출을 위해 전 주기 액셀러레이팅과 맞춤형 현지 실행 지원 제공',
      en: 'Providing end-to-end acceleration and tailored local execution support to help domestic startups enter the global market.',
    },
    overview:
      '국내 스마트시티 관련 기업의 해외 진출을 지원하기 위해 마련된 프로그램으로 AI, 플랫폼, 커머스, ESG 등 스마트시티 분야의 해외 진출을 희망하는 초기 스타트업을 선발하여 액셀러레이팅 프로그램을 진행해 주요 성과는 PoC 성과 5팀, 직접투자 5팀, 후속투자 5팀, TIPS 선정 3팀 달성함',
    process: '기업모집 → 서류 평가 → 대면 평가 → 최종선발 → 국내 프로그램 → 현지 프로그램 → 성과 공유회',
    points: GLOBAL_POINTS,
    results: `1) 블루프로그
- 서비스 소개: 로컬상권 활성화를 위한 관광상품 및 프로모션 제공 플랫폼
- 주요성과: 현지법인 MOU 체결 3건, 베트남 6개 도시 내 210개 매장 가맹 제휴 체결
- 직접투자: 2억

2) 테솔로
- 서비스 소개: 로봇 엔지니어링 기술 기반 로봇 그리퍼 및 모터 컨트롤러 제작
- 주요성과: 호치민 기술대학교와 기술협력 및 산학연계, 로봇 유관기관과 업무 협약 체결, 판로개척 4건(베트남 2건, 필리핀 1건, 일본 1건)
- 직접투자: 3억
- 기타성과: 딥테크 TIPS 선정

3) 팀워크
- 서비스 소개: 도면기반 스마트 건설관리 솔루션 제공
- 주요성과: 베트남 롯데건설의 호치민 투티엠 스마트시티 사업 협의, 현지법인 MOU 체결 1건
- 기타성과: TIPS 선정`,
    links: [{ title: '2023 GMEP Demo Day in HCMC', source: 'YouTube', url: 'https://www.youtube.com/watch?v=yjqv2sus920' }],
  },
  {
    id: 27,
    title: { ko: '서울창업허브 입주기업 글로벌 액셀러레이팅', en: 'Seoul Startup Hub Global Acceleration Program for Resident Startups' },
    team: 'sp',
    category: 'global',
    year: '2024',
    period: '2024 Jun ~ Dec',
    participants: '5개사',
    overview:
      '서울창업허브 입주기업 글로벌 액셀러레이팅 프로그램은 입주 스타트업의 해외 시장 진출을 지원하기 위해, 현지 액셀러레이터와 협력하여 컨설팅, 파트너 매칭, 글로벌 IR 등을 제공하는 맞춤형 지원 프로그램으로 입주기업 중 베트남, 미국 진출을 목표로 하는 기업을 선발하여 액셀러레이팅 프로그램을 진행하여 주요 성과로는 PoC 성과 3팀, 직접투자 1팀 달성함',
    process: '기업모집 → 서류 평가 → 대면 평가 → 최종선발 → 국내 프로그램 → 현지 프로그램 → 성과 공유회',
    points: GLOBAL_POINTS,
    results: `1) 리피드
- 서비스 소개: 폐식용유 기반 리사이클링 바이오 연료 제조
- 주요성과: 베트남에서 가장 큰 상업용 부동산 개발회사인 Vinhomes(Vin Group자회사)와 아파트 입주민 대상 폐식용유 모으기 캠페인 협업진행, Vinhomes 내 고정형 폐식용유 수거기 설치 계약, VinSchool&Vinpearl 등 계열사 연계, 현지 법인 MOU 3건
- 직접투자: 약 4.5억
- 후속투자: 약 15.8억

2) 빛글림
- 서비스 소개: 아티스트와 공간을 위한 디지털 사이니지기반 디지털 콘텐츠 서비스 제공
- 주요성과: 베트남, 필리핀 현지기업 4개사와 협약하여 빛글림 제품설치와 SW 판매 진행, 판로개척 4건 (베트남, 일본, 필리핀)

3) 북아이피스
- 서비스 소개: 선생님을 위한 교과서 및 시중 참고서 저작권 구독서비스 쏠북 운영
- 주요성과: 베트남 현지 한국어 어학원 스마트러닝코리아와 공식 한국어 교재 라이선싱 판매 진행, 베트남 현지 기업 Amazing Group과 협약하여 베트남 내 학원, 서점, 출판사 등 10개 이상의 기관에 북아이피스 콘텐츠 수출 및 한국어 학습 관련 자료와 교재 현지 맞춤형 제공 협약`,
  },
  {
    id: 24,
    title: { ko: '2024 청년해외진출기지 지원사업', en: '2024 Youth Global Market Entry Support Program' },
    team: 'sp',
    category: 'global',
    year: '2024',
    period: '2024 May ~ 2025 Jan',
    participants: '4개사',
    summary: {
      ko: '해외 진출 역량이 있는 인천 지역 청년 창업가를 발굴하여 글로벌 시장 진출 지원',
      en: 'Identifying young entrepreneurs in Incheon with overseas expansion capabilities and supporting their entry into the global market.',
    },
    overview: `인천 소재 청년 창업가 4팀을 선발하여 베트남 진출에 필요한 교육·컨설팅·멘토링과 IR 자료 제작을 지원했습니다.
또한 베트남 현지 기업과의 비즈매칭 및 데모데이를 통해 현지 시장 정착에 필요한 실질적 연계와 검증 기회를 제공했습니다.`,
    process: `사전진단 → 현지 파트너사 1:1 컨설팅/운영사 1:1 멘토링 → 집체교육/전문가 멘토링/투자검토 → 현지 프로그램 → 성과공유회

약 6개월 동안 사전진단을 통해 기업별 맞춤형 KPI를 설정하여 글로벌 확장에 필요한 성과 도출에 집중했습니다.`,
    points: GLOBAL_POINTS,
    results: `- 직접투자 1건(베베리아)
- 후속투자 3건, 약 91억(야호랩, 시제, 에이트테크)
- 글로벌 PoC 1건(야호랩)
- TIPS 연계 1건(베베리아)
- MOU 등 협약: 15건
- 판로개척: 5건`,
  },
  {
    id: 23,
    title: { ko: '2025 청년해외진출기지 지원사업', en: '2025 Youth Global Market Entry Support Program' },
    team: 'sp',
    category: 'global',
    year: '2025',
    period: '2025 May ~ Dec',
    participants: '25개사',
    summary: {
      ko: '해외 진출 역량이 있는 인천 지역 청년 창업가를 발굴하여 글로벌 시장 진출 지원',
      en: 'Identifying young entrepreneurs in Incheon with overseas expansion capabilities and supporting their entry into the global market.',
    },
    overview: `인천 소재 청년 창업가 25팀을 Track1(말레이시아·베트남)과 Track2(베트남 예비·초기 창업자)로 구분하여 글로벌 육성을 지원했습니다.

■ Track1 말레이시아는 Sunway iLabs와 협업해 현지 기업과의 PoC 연계형 프로그램을 운영했고, Track1 베트남은 소비재 스타트업을 선발해 호치민에서 단독 팝업스토어 및 라이브커머스를 진행했습니다.

■ Track2 베트남은 예비 및 초기 창업자를 대상으로 현지 시장조사 중심의 진출 준비 과정을 지원했습니다.`,
    process: `사전진단 → 현지 파트너사 1:1 컨설팅/운영사 1:1 멘토링 → 집체교육/전문가 멘토링/투자검토 → 현지 프로그램 → 성과공유회

약 6개월 동안 사전진단을 통해 기업별 맞춤형 KPI를 설정하여 글로벌 확장에 필요한 성과 도출에 집중했습니다.`,
    points: `Track1(말레이시아)
Sunway iLabs와 협업하여 현지 기업과의 PoC 추진을 위한 컨설팅 및 비즈매칭을 진행했으며, 현지 프로그램인 Future X Connect에 참여해 현지 투자사 및 유관 관계자를 대상으로 데모데이를 운영했습니다.

Track1(베트남)
호치민 1군 소재 복합공간에서 선발기업을 대상으로 1차(기업별 단독관, 7일)와 2차(선발기업 공동관, 2일)로 구분하여 오프라인 팝업스토어를 운영했고, 현지 인플루언서를 섭외해 라이브커머스를 병행 진행했습니다. 이를 통해 선발기업에 현지 시장 반응과 마켓핏을 실증할 수 있는 기회를 제공했습니다.

Track2(베트남)
베트남 진출을 희망하는 예비·초기 창업자를 대상으로 현지 시장조사를 위한 컨설팅 및 멘토링을 제공하고, 현지 비즈매칭, 현지 기업 방문, 세미나 및 네트워킹 연계를 통해 베트남 시장 진출 및 확장을 지원했습니다.`,
    results: `- 직접투자 2건(미스릴, 앙호두)
- 후속투자 3건, 약 41억 (미스릴, 로비고스, 청년한우)
- 글로벌 PoC 2건
- TIPS 연계 1건(청년한우)
- MOU 등 협약: 44건
- 판로개척: 52건
- 매출총액: 약 298억 원`,
  },

  // ───────────── 사내 혁신 역량 강화 ─────────────
  {
    id: 19,
    title: { ko: 'LG MBA CDX Hackathon', en: 'LG MBA CDX Hackathon' },
    team: 'nbd',
    category: 'training',
    year: '2020',
    period: '2020 May ~ Jun',
    summary: { ko: '100% 비대면 환경에서 진행되는 DX 프로젝트인 해커톤 프로그램', en: 'A DX hackathon program run 100% remotely' },
    overview:
      'LG의 디지털 전환(DX)을 선도할 핵심 인재들의 혁신적 사고와 실행력을 강화하기 위해, 전사 18팀을 대상으로 100% 비대면 환경에서 진행되는 DX 프로젝트를 운영했습니다. 짧은 기간 내에 고객 중심의 비즈니스 아이템을 발굴하고, 데이터 기반의 디지털 플랫폼으로 성장 가능한 모델을 구체화함으로써, 대기업 기존의 업무 방식을 뛰어넘어 새롭게 일하는 방식을 체득하는 것을 목표로 했습니다.',
    process: `프로그램은 1차 CDX 해커톤 → 2차 BM 해커톤으로 구성하여 총 2개월간 Sprint 방식으로 운영했습니다.

CDX 해커톤에서는 고객의 Pain Point를 중심으로 사업 아이템을 발굴하고, 고객 인터뷰 및 시장 조사 등 검증 활동을 통해 초기 가설을 수립했습니다. 이후 실제 와이어프레임 기획- 제작 활동을 수행하며 고객에게 집착하며 일하는 방식을 체득했습니다.

BM 해커톤에서는 1차에서 도출한 아이디어의 시장성, 수익성, 데이터 활용 가능성 등을 집중 검토하였으며, 서비스에서 캡쳐되는 데이터를 어떻게 하면 고객들에게 새로운 서비스로 제공할 수 있을지에 대한 심도 깊은 고민을 진행했습니다`,
    points: `100% 비대면 환경 구축 및 디지털 협업 도구를 통한 일하는 방식 혁신
프로젝트 전 과정은 100% WFH(Work From Home) 환경에서 진행되었으며, Notion, Miro, 인벤션덱, Webex 등 다양한 협업 툴과 화상 회의 솔루션을 적극 활용했습니다. 이를 통해 비대면에서도 팀 간 유기적인 소통과 공동 작업이 가능하도록 시스템을 구축하여, 디지털 협업 역량 및 애자일한 업무 방식을 내재화하도록 했습니다.

단기간 집중 Sprint 운영을 통한 실행력 및 속도감 배양
2개월이라는 제한된 기간 동안 Sprint 방식을 도입해, 각 팀이 고객 검증, 피봇팅, 와이어프레임 제작, 비즈니스 모델 수립까지 빠르게 실행하며, 실행 중심의 업무 문화를 체득하도록 했습니다. 짧은 시간 내 성과를 내야 하는 환경에서, 고객 집착형 사고와 애자일한 실행력을 동시에 길러내는 데 중점을 두었습니다.`,
    links: [{ title: '2020 LG MBA 해커톤', source: 'YouTube', url: 'https://youtu.be/SDsY6FtjpMc' }],
  },
  {
    id: 16,
    title: { ko: '롯데건설 사내벤처 교육 프로그램', en: 'Lotte Engineering & Construction Corporate Venture Training Program' },
    team: 'nbd',
    category: 'training',
    year: '2023',
    period: '2023 Oct ~ Dec',
    summary: { ko: '사내벤처 제도 도입 이전 사전 교육 프로그램 진행', en: 'Pre-launch training program ahead of introducing a corporate venture system' },
    overview:
      '롯데건설과 함께 신사업 발굴과 창의적 조직문화 조성을 위해 내년 사내벤처 제도 도입을 앞두고 임직원의 이해도 제고 및 자율적 참여 유도를 위한 사전 교육 프로그램을 운영했습니다. 사내벤처의 개념과 스타트업의 혁신적인 일하는 방식을 전파하고 임직원들이 직접 아이디어를 도출 및 구체화해보는 실습 과정을 통해 향후 사내벤처 제도의 안정적인 정착과 구성원들의 주도적 참여 기반을 마련하는 것을 목표로 했습니다.',
    process: `프로그램은 사내벤처 및 스타트업 이해 교육을 중심으로 진행되었습니다.

온라인 강의를 통해 린스타트업, 애자일 조직 문화 등 스타트업의 성장 방식과 사내벤처 개념에 대한 이해를 돕는 시간을 가졌습니다. 더불어 사내벤처 출신 대표 특강을 열어 사업화 과정에서의 현실적인 경험과 투자 유치 전략 등을 공유하는 시간을 가졌습니다. 최종적으로는 3Day 워크샵을 통해 임직원이 팀을 이뤄 직접 아이디어를 발전시키고 최종 결과물을 발표했습니다.`,
    points: `사내벤처에 대한 이해와 공감대 형성을 통한 참여 유도
내년 사내벤처 제도 도입을 앞두고, 임직원들이 사내벤처의 개념과 필요성을 사전에 학습하도록 함으로써, 자율적 참여를 독려하고 사내 창업 문화에 대한 공감대를 형성했습니다. 스타트업의 민첩한 실행 방식과 대기업의 안정적인 자원을 접목한 사내벤처가 회사와 개인에게 가져올 기회와 가능성을 이해할 수 있도록 교육 내용이 구성되었습니다.

고객 중심 혁신 방법론을 활용한 아이디어 구체화
단순한 아이디어 제안에서 그치지 않고, 아마존의 ‘워킹 백워드’ 방식(고객 경험에서 시작해 역으로 제품·서비스를 설계하는 접근법)을 적용해, 참가자들이 고객 니즈와 가치를 중심으로 사고하도록 유도했습니다. 이를 통해 사내벤처 아이디어가 추후 사업화 단계에서 고객 관점에서 지속 가능성을 가질 수 있도록, 초기부터 체계적인 아이디어 구체화 경험을 제공했습니다.

사내벤처 출신 대표 특강을 통한 실무형 인사이트 제공
사내벤처 창업 경험이 있는 웍스메이트 대표를 초청해, 사내벤처 준비 과정에서의 시행착오와 분사 후 독립기업으로 자리 잡기까지의 경험담, 초기 사업화 및 투자유치 과정에서의 현실적인 조언을 전달했습니다. 임직원들은 특강을 통해 사내벤처 도전 과정에서 마주할 수 있는 구체적인 상황과 그에 대한 해결 사례를 접하며, 창업에 대한 막연한 두려움보다 실질적인 준비 방향을 설정할 수 있는 기회를 가졌습니다.`,
    links: [{ title: "롯데건설 임직원, 사내벤처 '열공'", source: '딜사이트 경제TV', url: 'https://news.dealsitetv.com/articles/107668' }],
  },
  {
    id: 15,
    title: { ko: 'LG U+ 고객 가치 혁신 아이디어 해커톤', en: 'LG U+ Customer Value Innovation Hackathon' },
    team: 'nbd',
    category: 'training',
    year: '2023',
    period: '2023 Mar ~ Jun',
    participants: '118명',
    summary: { ko: '임직원 대상 고객 가치 혁신 아이디어 발굴 해커톤', en: 'Hackathon to discover customer value innovation ideas for employees' },
    overview:
      '본 프로젝트는 "한 번 경험하면 다시 이전으로 돌아가기 어려울 정도로 가치 있는 고객 경험"을 제공할 수 있는 아이디어를 발굴하고, 이를 실제 사업화까지 연결하는 것을 목표로 진행되었습니다. 기존 개발자 중심이던 해커톤 방식과 달리 대상을 기획자, 디자이너 등 다양한 직무의 직원들로 확장해 보다 복합적인 시각에서 참여자들이 아이디어를 창출해낼 수 있도록 하였습니다. 참여자들이 창의적인 아이디어를 내고 체계적이고 깊이 있는 프로젝트를 수행할 수 있도록 3개월 동안 해커톤을 시행하였습니다.',
    process:
      '공모전을 통해 고객 가치를 혁신할 수 있는 아이디어를 제출 후 서류 및 발표 심사를 통해 선발된 5팀이 프로토타입 제작 및 검증을 수행 후 임원 대상으로 최종 피칭을 진행하였습니다. 아이디어 공모 → 서류 심사 → 발표 심사 → 1:1 멘토링 → 1박 2일 사업 계획 워크샵 → 최종 발표의 과정으로 프로그램을 진행했습니다.',
    points: `사원부터 팀장까지 다양한 직급 및 개발, 디자인, 기획 등 다양한 직군이 참여한 팀 구성
개발자 중심의 해커톤이 아닌 기획자, 디자이너, 마케터 등 다양한 직군의 직원들이 팀을 구성하여 아이디어 창출을 장려하였습니다. 짧은 시간 동안 팀이 직접 아이디어를 가시화할 수 있는 수준 높은 프로토타입을 제작하여 고객 검증이 진행되었습니다.

고객 가치 기반의 신사업 아이템 발굴 및 비즈니스 모델링 역량 강화
1:1 전담 멘토 및 1박 2일 사업 계획 워크샵을 진행하며 고객의 페인포인트에 집중하여 이를 해결할 수 있는 사업 아이템을 발굴하고, 지속적 고객 인터뷰 및 피봇을 통해 사업 아이디어를 발전시켰습니다.

실질적 사업화 연계 및 사내벤처 연계 분사 추진
높은 성적을 거둔 팀의 아이디어 중 사업 확장성이 높은 아이디어를 발굴하여 사내 사업화 또는 LG유플러스 사내벤처 프로그램과 연계한 사내벤처 육성을 추진하였습니다.`,
    results:
      '고객의 취향 데이터를 기반으로 ‘데이터 기반 와인 커뮤니티’를 만드는 것을 목표로 하는 플랫폼을 제안한 ‘코르크루’, 반려동물 호텔 예약 및 가격비교 플랫폼을 고안한 ‘도그바로’ 팀이 1, 2등을 차지하였습니다. LG유플러스의 사업 영역에 도입하거나 실제 투자 유치를 이끌어낼 수 있을 정도로 완성도가 높다는 평을 받았습니다.',
  },
  {
    id: 13,
    title: { ko: '애경 스타트업 문제 해결 프로젝트 교육', en: 'Aekyung Corporate–Startup Problem-Solving Program' },
    team: 'nbd',
    category: 'training',
    year: '2024',
    period: '2024 Apr ~ Sep',
    summary: {
      ko: '과제 개선점 도출, 문제 해결력을 함양하고 신사업에 대한 경험 및 비즈니스 마인드 함양',
      en: 'Identifying project improvement points, enhancing problem-solving skills, and gaining experience and business mindset for new ventures.',
    },
    overview:
      '애경의 핵심인재 육성을 위한 교육 프로그램의 일환으로 IL(Innovative Leader) 과정을 운영했습니다. 본 과정은 교육 대상자가 대내외 환경을 분석하고, 이를 토대로 개선 과제를 도출해 문제 해결 역량을 강화하는 동시에 신사업 발굴 및 비즈니스 마인드셋을 함양하는 것을 목표로 삼았습니다.',
    process: `프로그램은 크게 4가지 Session(Think it → Get it → Make it → Prove it)으로 구성되어 진행되었습니다.

빠른 실행과 학습을 기반으로 교육 참여자들은 워크샵 기반의 활동을 진행하게 되며, 팀별 선정한 비즈니스 아이템에 대해 Product-Market Fit 관점에서 지속적으로 검토하고 Pivot을 진행하며 아이템을 Develop하게 됩니다. 최종적으로는 사업계획서와 IR Deck을 제작해 아이템에 대한 최종 발표를 진행합니다.`,
    points: `대/내외 환경을 기반으로 한 아이디어 창출
참가자들은 첫번째 Think it 세션에서 당사에서 개발한 InventionDeck을 활용해 대/내외 환경, 트렌드, 관심사 등을 심층 분석했습니다. 이후 분석한 결과를 토대로 유사 관심사를 가진 사람들과 새롭게 팀빌딩을 진행한 후, 각 팀별로 창의적인 비즈니스 아이디어를 도출해나가는 과정을 진행했습니다.

실제 고객 기반의 검증 진행
팀별 아이디어 기반으로 빠른 시일 내에 MVP(랜딩페이지)를 제작한 후, 타겟 고객 대상 테스트를 진행했습니다. 랜딩페이지 하단에 CTA 버튼을 만들어 잠재 고객의 이후의 액션(선주문, 베타테스터 신청, 설문참여 등)으로 이어지도록 제작한 이후 수집한 피드백을 기반으로 최종 Lesson-Learned 및 To-be 방향에 대해 수립했습니다.`,
    results:
      '시니어, 개인화, 환경, 웰니스 등 다양한 분야에 대한 주요 트렌드를 조사하고 이를 실제 사업 아이템으로 구상하고 구체화할 수 있었습니다. 본 교육 과정은 단순한 이론 학습이 아닌, 참가자들의 대/내외 환경 분석부터 아이디어 구체화, MVP 제작, 고객 피드백 수집, 사업화 계획 수립까지 전 과정에 걸친 실전 경험을 제공함으로써, 비즈니스 기획 및 실행 역량을 강화했다는 점에서 큰 의미가 있습니다.',
  },
  {
    id: 12,
    title: { ko: 'KT 생성형 AI 활용 신사업 해커톤', en: 'KT Generative AI Innovation Hackathon' },
    team: 'nbd',
    category: 'training',
    year: '2024',
    period: '2024 May ~ Jul',
    participants: '100명',
    summary: {
      ko: '새로운 사업 기회 발굴을 위한 Gen AI 응용 서비스 개발 및 Feasibility 검증 역량 보유팀 선발',
      en: 'Selected a team with capabilities in developing Gen AI application services and verifying feasibility to discover new business opportunities.',
    },
    overview: `신한은행과 KT는 전략적 파트너십 체결 이후 2022년부터 사내벤처를 육성하고 창업을 지원하는 UNIQUERS 프로젝트를 공동 진행하고 있었습니다. 금번에는 KT의 단독 신사업 해커톤 프로그램으로 생성형 AI 기술을 활용해 새로운 사업 기회를 발굴하고 혁신적인 아이디어를 실현하기 위해 신사업 해커톤 프로젝트를 기획했습니다. 서바이벌 예능 구조를 차용해 '궁극의 생성형 AI 서비스를 위한 100인의 생존 경쟁'이라는 컨셉으로 진행됐습니다.

해당 프로젝트에서는 내부 임직원 중 개발자, 기획자, 디자이너 등 100명이 참가했으며 최종 10팀이 본선에 진출해 데모데이 행사를 진행했습니다.`,
    process:
      '생성형 AI를 활용한 아이디어를 제안하고 이를 MVP로 제작, 최종 Pitch Deck을 작성하여 임원 대상 최종 Pitching을 수행했습니다. 서류 모집 → 온/오프라인 팀빌딩 → 아이디어 고도화 및 기술 교육 → 예선 심사 → MVP 구현(해커톤, 멘토링) → 데모데이, 총 6단계의 과정으로 프로그램을 진행했습니다.',
    points: `더인벤션랩의 포트폴리오사 대표와의 1:1 기술 멘토링 제공
참가자들이 실제 인사이트를 얻을 수 있도록, Gen AI 서비스를 운영 중인 스타트업 대표들과 1:1 기술 멘토링 시간을 제공했습니다. 참가자들은 아이디어를 기술적으로 한 번 더 고민해보고, 보다 정교하게 개선할 수 있었습니다.

전사 투표 사이트 운영으로 사내 관심 극대화
참가자들의 랜딩페이지를 확인하고 투표할 수 있는 자체 투표 사이트를 구축하고 운영했습니다. 약 4,000명의 임직원이 투표에 참여하며 열띤 호응을 얻어내는 데 성공했습니다.

서바이벌 컨셉의 프로그램 진행을 기반으로 숏폼 및 영상 콘텐츠 사내 방송 배포
사내 홍보를 강화하기 위해 진행 전 과정을 촬영 후 숏츠와 영상을 제작하고, 이를 사내 방송 채널로 배포했습니다. 서바이벌 예능 컨셉에 맞게 참신하고 몰입도 높은 콘텐츠로 임직원에게 큰 호응을 이끌었습니다.`,
    results: `대상에는 실시간 통화 분석 기반 보이스피싱 탐지 솔루션을 개발한 팀이 선정됐습니다. 공개된 보이스피싱 녹취록을 생성형 AI에 학습시켜 통화 문맥을 바탕으로 피싱 여부를 판별합니다. 보이스피싱을 높은 정확도로 구분할 수 있다는 점이 기술적으로 좋은 평가를 받았습니다.
최우수상에는 사주 기반의 AI 세일즈토크 코칭 솔루션을 개발한 팀이 선정됐습니다. 관상, 사주 등 점술적 요소를 포함한 다양한 정보를 AI에 접목해 영업 상대방과 나눌 스몰 토크 소재를 제공한다는 점에서 창의적이라는 평가를 받았습니다.
선발된 팀은 시상에서 그치지 않고 사업화 가능성이 추가 검증될 예정입니다.`,
    links: [{ title: "KT, '미라클100' 경진대회 열고 생성형 AI 활용 신사업 발굴", source: 'TechM', url: 'https://www.techm.kr/news/articleView.html?idxno=127917' }],
  },
  {
    id: 8,
    title: { ko: '신한은행 디지털 신사업 공모전', en: 'Shinhan Bank Digital Innovation Challenge' },
    team: 'nbd',
    category: 'training',
    year: '2025',
    period: '2025 Oct',
    participants: '5팀',
    summary: {
      ko: '고객의 일상과 밀접한 제휴 아이디어와 활동 고객으로 전환할 수 있는 디지털 신사업을 주제로 혁신 금융 아이디어 발굴',
      en: 'Discovering innovative financial ideas around everyday partnerships and digital new businesses that convert customers into active users',
    },
    overview:
      "신한은행은 지난해에 이어 고객의 일상과 밀접한 제휴 아이디어와 활동 고객으로 전환할 수 있는 디지털 신사업을 주제로 혁신 금융 아이디어를 발굴하기 위한 디지털 신사업 공모전을 진행했습니다. 올해 프로그램은 비대면 중심의 실습형 '사업 고도화' 프로그램에 초점을 맞춰 선발된 아이디어가 실제 사업 계획으로 구체화될 수 있도록 실습과 멘토링에 중점을 두었습니다.",
    process: `아이디어 고도화 → 비즈니스 플래닝 → 사업계획서 작성 → 사업계획서 완성

총 4회의 온라인 교육 및 멘토링 세션을 통해 아이디어 구체화부터 사업계획서 완성까지 전 과정을 지원했습니다. 특히 자사에서 개발한 비즈니스 아이데이션 솔루션인 '인벤션덱 AI'를 적극 활용하여 단계별 프로그램을 진행했습니다.`,
    points: `비대면 기반의 체계적인 사업 고도화 프로그램 운영 및 1:1 멘토링 세션
4번에 걸쳐 사업 고도화 프로그램을 운영하며 참가팀의 아이디어를 구체적인 비즈니스 모델로 발전시켰습니다. 또한 더인벤션랩의 멘토단과 참가팀을 1:1로 매칭하여 아이템별 맞춤 피드백을 제공해 단기간 내 사업 완성도를 극대화했습니다.

slashpage 기반의 통합 프로그램 관리
프로그램 운영의 효율성과 일관성을 높이기 위해 Slashpage 플랫폼을 중심으로 통합 관리 체계를 구축했습니다. 모든 참가자는 각자의 워크스페이스 내에서 과제 제출, 자료 공유, 멘토 피드백 확인, 질의응답 등을 원스톱으로 할 수 있었으며 세션별 산출물 및 진행 현황을 실시간으로 관리해 프로그램의 투명성과 데이터 기반의 평가 프로세스를 강화했습니다.

다양한 AI 툴을 활용한 완성도 높은 결과물 제작 지원
참가자들이 짧은 시간 안에 퀄리티있는 사업 계획서와 IR Deck을 작성할 수 있도록 인벤션덱 AI와 AI 도구 가이드라인을 제공했습니다. 이를 통해 참가자들은 아이디어 구체화 과정과 사업계획서 초안 작성 부분을 자동화 및 고도화할 수 있었으며 AI를 활용한 데이터 기반 의사 결정 및 효과적인 결과물 제작 역량을 체득했습니다.`,
    results: '최종 심사를 통해 1, 2등 시상을 진행했습니다. 프로그램 전반에 걸쳐 참가자들의 디지털 역량과 사업화 이해도가 크게 향상되었으며, 내부 사내벤처 문화 확산에 기여했습니다.',
  },

  // ───────────── 투자 목적 딜스카우팅 ─────────────
  {
    id: 38,
    title: { ko: '광화문169 스페이스 플랫폼', en: 'Gwanghwamun 169 Space Platform' },
    team: 'vs',
    category: 'deal',
    year: '2025',
    period: '1y',
    participants: '6개사',
    summary: { ko: '광화문169를 중심으로 조성된 개인투자조합', en: 'An angel investment fund built around Gwanghwamun 169' },
    overview:
      '광화문169, 더인벤션랩, 광운대학교기술지주가 K-컬쳐, 헬스케어&뷰티, 딥테크, 프롭테크&스페이스 컨텐츠 분야 초기 스타트업을 발굴, 투자, 육성, 공동사업화를 추진하기 위한 목적으로 기획, 운영되었습니다.',
    process: '2025년 월 단위 IR을 통해 창업기업들에 대한 검토를 진행했습니다. 이를 통해, 최종적으로 11개사 선별 후 개별적으로 투자 조건 검토 및 투자 집행, 이후 맞춤형 액셀러레이팅 지원이 이루어졌습니다.',
    points: `TIPS/LIPS 추천 연계
투자와 별도로 TIPS 및 LIPS 추천을 통해 5~15억원+a의 자금조달을 진행하여 초기 기업의 성장 가속화를 지원했습니다.`,
    results: '제론셀베인, 케미컴퍼니, 블루웨일컴퍼니, 아이디자인랩, 더케이컴퍼니, 애니이츠월드, 더마레, 지오로봇, 고투조이, 오케이쎄, 올라보엑스에 투자 집행',
  },

  // ───────────── 신사업 검증 및 스케일업 지원 ─────────────
  {
    id: 10,
    title: { ko: 'L사 고객 경험 혁신을 위한 사업 타당성 검토 프로젝트', en: 'Customer Experience–Driven Business Feasibility Study for L Company' },
    team: 'nbd',
    category: 'validation',
    year: '2025',
    period: '2025 Mar ~ Apr',
    summary: {
      ko: '신규 사업 기획에 있어 비즈니스 아이템의 시장성과 사업 타당성 검토',
      en: 'Review of market potential and business feasibility for new business planning.',
    },
    overview:
      'L사의 고객 경험 혁신을 위한 신규 사업 기획에 있어 비즈니스 아이템의 시장성과 사업 타당성을 검토하고자 본 프로젝트를 추진했습니다. 핵심 고객 세그먼트 기반의 시장 조사 및 아이템 경쟁력 평가를 진행하였으며, 고객 만족도 제고 및 매출 확대를 위한 차별화된 CX 아이템 발굴을 목표로 체계적인 과정을 설계 및 수행하였습니다.',
    process: `프로젝트는 총 3단계로 운영되었습니다. 1단계는 핵심 고객 세그먼트의 시장 트렌드와 니즈를 파악하기 위한 리서치를 진행하였고, 2단계에서는 1단계를 기반으로 도출된 비즈니스 아이템에 대해 시장성, 차별성, 사업성, 확장성 관점에서 심층 검토를 진행했습니다. 마지막으로 3단계에서는 최종 선발된 아이템을 기반으로 비즈니스 아이디어 Accelerating을 진행했습니다.

시장 트렌드 리서치는 데스크 리서치와 더불어 업계 전문가 인터뷰를 병행해 정성적, 정량적 인사이트를 도출하였으며, 아이템 평가는 전문 액셀러레이터인 더인벤션랩이 보유한 심사 체계를 기반으로 사업화 가능성과 CX 차별성 관점에서 정성 평가를 수행했습니다. 이후 우선순위로 선발된 아이템에 대해 비즈니스 아이디어 Accelerating을 진행하며 L사의 CX 경쟁력 제고 및 신규 사업 기회 발굴을 위한 전략적 방향성을 제언했습니다.`,
    points: `유관 산업 전문가 인터뷰를 통한 심층 인사이트 확보
단순한 데스크 리서치를 넘어 실제 현장에서 고객 세그먼트를 깊이 있게 이해하고 있는 전문가들과의 인터뷰를 통해 다차원적인 인사이트를 확보했습니다. 이를 통해 타겟 세그먼트의 니즈와 시장 트렌드를 더욱 입체적으로 분석하고, 아이템의 실행 가능성과 시의성을 높일 수 있었습니다.

스타트업 투자 전문 액셀러레이터의 평가 체계를 활용한 체계적인 아이템 검증
초기 창업팀 및 신사업 검토에 특화된 스타트업 액셀러레이터의 시각에서 사업 아이템을 정밀하게 평가하였습니다. 더인벤션랩이 보유한 다수의 초기 스타트업 투자 및 육성 경험을 바탕으로, 각 아이템의 시장성, 차별성, 사업성, 확장성 등을 실제 사업화 관점에서 면밀하게 분석했습니다. 각 아이템의 고객가치 및 실행 용이성을 기반으로 L사가 추구하는 고객 경험 혁신과 연결될 수 있는 실행 중심의 전략적 인사이트를 도출 후 신규 사업 전략 수립에 기여하였습니다.`,
    results: '각 단계의 실행 과정에서 도출된 인사이트를 총 4건의 보고서 형태로 체계화해 공유했습니다.',
  },
  {
    id: 9,
    title: { ko: '농심 신사업 국내 사업화 컨설팅', en: 'Go-to-Market Consulting for Nongshim’s New Business Initiatives' },
    team: 'nbd',
    category: 'validation',
    year: '2025',
    period: '2025 Jan ~ Apr',
    participants: '1팀',
    summary: {
      ko: '시장 진입 전략 수립 및 국내 B2B 채널 확대를 위한 체계적인 인큐베이팅 진행',
      en: 'Systematic incubation for market entry strategy development and expansion of domestic B2B channels.',
    },
    overview:
      '기술영업이 필요한 농심 식품 신소재(풍미소재)의 B2B 사업 특성을 고려한 체계적인 시장 진입 전략 수립 및 국내 B2B 채널 확대를 위한 체계적인 인큐베이팅을 목표로 본 프로젝트를 기획 및 수행했습니다. 소재 사업 및 브랜드 전략 수립, 국내 식품기업 대상 납품 채널 확보까지의 전 과정을 단기간 내에 운영했으며, 실제 수요 기반의 문의를 확보하고 실제 제품 개발을 위한 미팅으로 연계했습니다. 시장성과 고객 수요를 빠르게 검증하는 린(Lean)한 접근 방식을 중심으로 설계되었습니다.',
    process: `프로젝트는 타겟고객 및 시장 도출 → 브랜드 컨셉 정립 및 콘텐츠 기획 → 핵심 고객 유입을 위한 채널 세팅 및 마케팅 진행, 실질적인 고객사 미팅과 PoC의 총 3단계로 운영되었습니다.
특히 초기 단계에서는 사전 질문지를 통해 시장 내 유의미한 수요층을 정의하기 위한 타겟 고객군의 페인 포인트와 풍미소재가 제공할 수 있는 차별적 가치를 정리했습니다. 이후 네이밍, 라우드소싱을 활용한 로고 디자인 콘테스트를 진행하며 브랜드 컨셉을 정립하고 랜딩페이지 세팅 및 광고 콘텐츠 기획으로 실질적인 고객이 유입될 수 있는 구조를 설계했습니다.
최종적으로 더인벤션랩의 네트워크와 랜딩페이지를 통해 유입된 문의 고객을 중심으로 실질적인 미팅을 진행하였으며, 풍미소재를 활용한 제품 개발로 연계했습니다.`,
    points: `스타트업스러운 빠른 시장 검증 프로세스 운영
전통적인 프로세스가 아닌, 린스타트업 방식으로 빠르게 가설을 수립하고, 시장 반응을 확인하는 프로세스를 적용했습니다. 타겟 고객 발굴 및 시장조사, 브랜드 정의, 콘텐츠 기획, 고객 유입 및 실제 성과 연계까지의 일련의 흐름을 단기간 내에 실행함으로써 아이템의 시장성, 고객 반응, 실수요 여부를 빠르게 검증했습니다. 특히 초기 설정한 타겟 고객군 외에도 예상하지 못한 업종과 고객군의 유입이 발생하면서 아이템의 예상 외 활용 가능성 및 확장성까지 함께 확인할 수 있었습니다.

오픈 이노베이션 기반의 실고객 유입 구조 설계
디지털 채널 기반 고객 유입 테스트를 통해 고객사와의 초기 접점을 형성하였으며, 실제 수요 기반의 리드를 확보하였습니다. 더인벤션랩의 네트워크와 콘텐츠 채널을 함께 활용하여 실제 고객사 미팅을 통해 풍미 소재의 실제 적용 가능성 및 제품 공동 개발 논의로 이어졌습니다. 전통적인 세일즈 접근이 아닌 콘텐츠 기반 유입 → 실질 미팅 → 기술 적용 논의까지 이어지는 일련의 흐름을 검증하며, B2B 제품의 초기 시장성 실증을 이뤄냈습니다.

다양한 Tool을 활용한 주요 콘텐츠 제작
디자이너 클라우드소싱 플랫폼인 라우드소싱, 노코드 웹빌더인 슬래시페이지, 생성형 AI 등 다양한 툴을 적극 활용하여 기획, 디자인, 개발 과정을 최소한의 리소스로 빠르게 완성했습니다. 프로젝트 구성원 중 디자이너나 개발자가 없음에도 불구하고, 각 툴의 강점을 조합해 디자인 퀄리티와 브랜드 완성도를 확보할 수 있었습니다.`,
    links: [
      { title: 'Flavolink 랜딩페이지', url: 'https://www.flavolink.com/' },
      { title: "신라면만으론 안 된다…농심, 50조 소스시장 '페달'", source: 'SBS biz', url: 'https://biz.sbs.co.kr/article/20000228016?division=NAVER' },
      { title: "농심, 정통과 안정으로 성장한 '신라면' 효과에 사업 다각화도 긍정적", source: '팝콘뉴스', url: 'https://www.popcornnews.net/news/articleView.html?idxno=77272' },
    ],
  },
  {
    id: 7,
    title: { ko: 'H사 경영진 신사업 제안 멘토링', en: 'Executive Mentorship on New Business Strategy for H Company' },
    team: 'nbd',
    category: 'validation',
    year: '2025',
    period: '2025 Oct',
    participants: '32명',
    summary: {
      ko: '발표의 아이디어 구조화 및 전략적 완성도 제고를 위한 전문 멘토링을 진행',
      en: 'Expert mentoring to structure ideas and raise the strategic completeness of executive presentations',
    },
    overview:
      "H사의 임원들이 내년도 신사업 전략 제안을 위해 임원들이 직접 아이디어를 발굴하고 발표하는 경영 프레젠테이션을 준비해야하는 상황에서 발표의 아이디어 구조화 및 전략적 완성도 제고를 위한 전문 멘토링을 진행했습니다. 프로그램은 비즈니스 아이데이션 솔루션인 '인벤션덱 AI'를 통한 체계적 아이디어 발상 및 구조화 지원 → 임원 대상 1:1 멘토링 세션 → 심층 분석 리포트 제공으로 구성되어 발표 준비와 함께 실질적인 인사이트를 제공했습니다.",
    process:
      "한 달간 H사 임원들에게 '인벤션덱 AI' 솔루션을 제공해 자율적으로 신사업 아이디어를 탐색, 구체화하도록 지원했습니다. 이후 진행된 원데이 1:1 멘토링 세션에서는 더인벤션랩 대표단이 직접 참여해 각 아이템의 사업성, 실행 전략, 차별화 포인트, 스토리텔링을 중심으로 심층 피드백을 제공했습니다. 마지막으로, 각 아이디어 분석, 벤치마킹 사례, 원데이 멘토링 피드백을 정리한 '아이템 분석 리포트 + 피드백 종합 PDF'를 제공하여 발표 준비에 실질적인 자료로 활용할 수 있도록 지원했습니다.",
    points: `1:1 멘토링을 통한 맞춤형 사업화 컨설팅
임원별로 상이한 산업 배경과 아이디어 분야를 고려하여 맞춤형 피드백을 제공했습니다. 핵심 가치 제안과 포지셔닝 방향을 함께 정립하며 내용 흐름과 구조를 체계적으로 보완했습니다. 또한 아이디어 차별성, 실행 가능성, 전략적 일관성을 중심으로 구체적인 개선 방향을 제시했으며 각 제안이 실질적 사업화 가능성과 발표에 적합한 완성도를 갖추도록 지원했습니다.

인사이트 리포트 및 피드백 문서 제공
모든 아이디어에 대해 시장 분석, 유사 사례, 수익 모델, 멘토링 피드백 요약을 포함한 종합 인사이트 리포트를 제공했습니다. 자료 작성을 지원할 수 있도록 구성되었으며 각 아이디어의 핵심 전략을 한 눈에 파악할 수 있도록 정리되었습니다.`,
    results:
      '본 멘토링 프로그램을 통해 임원들은 체계적인 지원 아래 신사업 제안을 전략적으로 준비할 수 있었습니다. AI 솔루션과 1:1 멘토링을 통해 아이디어를 구체적 사업 모델로 발전시키며 발표 자료를 완성도 높게 다듬을 수 있었습니다. 또한 원데이 멘토링 이후에 임원들에게 긍정적인 반응과 높은 평가를 받았습니다.',
  },

  // ───────────── 사내벤처 발굴 및 육성 ─────────────
  {
    id: 21,
    title: { ko: 'HDC현산 사내 스타트업 Incubation 프로그램', en: 'HDC Hyundai Development Internal Startup Incubation Program' },
    team: 'nbd',
    category: 'cv',
    year: '2019',
    period: '2019 Apr ~ Oct',
    participants: '3팀',
    summary: {
      ko: '엑셀러레이터가 사내 스타트업의 Ideation 부터 개발, 론칭, 분사, 출자까지 함께 진행한 최초의 케이스',
      en: 'The first case where an accelerator accompanied an internal startup from ideation through development, launch, spin-off and investment',
    },
    overview:
      'HDC현대산업개발과 함께 주거 문화와 건설 인프라 분야의 디지털 혁신을 주도하기 위해 사내 스타트업 육성 및 분사 지원 프로그램을 운영했습니다. 사내 임직원의 아이디어를 발굴하여 실제 분사 및 사업화로 연결하는 것을 목표로, 엑셀러레이터와의 협업을 통해 아이디어 구상 단계부터 개발, 론칭, 분사, 출자까지 전 과정을 함께 진행한 최초의 사례를 만들었습니다.',
    process:
      '프로그램은 사내 아이디어 공모전으로 사내 스타트업 대상팀 3개 팀을 선발 후, 4개월 간의 인큐베이션 프로그램(문제 탐색 → 기획 및 가설 설정 → MVP 제작과 테스트 → 피치덱 작성)으로 운영되었습니다. 인큐베이션 프로그램 운영 단계에서는 선발된 3개 팀 전원을 외부 스타트업 센터에 파견하여, 기존 대기업 환경에서 벗어나 스타트업과 유사한 환경에서 집중적으로 사업을 구체화하도록 지원했습니다. 이 과정에서 각 팀당 전담 코치(더인벤션랩 경영진)가 배정되어 전 과정을 밀착 지원하였으며, 주기적인 공동 비즈니스 아워를 통해 진행 상황을 점검하고 팀 간 긴장감을 유지할 수 있도록 했습니다.',
    points: `사내 스타트업의 전 과정에 엑셀러레이터가 동행한 최초 사례
기존의 단순 창업 지원 프로그램과 달리, 아이디어 발굴 단계부터 시장 검증, MVP 개발, 고객 피드백 수집, 분사 및 초기 투자까지 전 과정을 함께 수행하며, 대기업과 스타트업 생태계의 협력 모델을 구축했습니다.

분사 지원을 위한 사내 정책 수립 및 초기 투자 조합 결성
프로그램을 운영하며 H사 운영팀이 사내에 존재하지 않던 분사 및 투자 관련 정책을 새롭게 수립하여, 사내벤처가 법인 설립 및 독립 경영을 원활히 추진할 수 있는 기반을 마련하는 것을 지원했습니다. 또한, 분사 이후에도 안정적으로 사업을 운영할 수 있도록 초기 Seed 자금을 공동 출자하여, 대기업과 엑셀러레이터가 공동으로 사내 스타트업의 설립 단계에 참여한 새로운 사례를 만들었습니다.`,
    links: [{ title: "HDC현산 첫 사내벤처 '가다', 더인벤션랩 등에서 6억 원 투자유치", url: 'https://mushman.co.kr/2692368' }],
  },
  {
    id: 20,
    title: { ko: '현대자동차 사내 스타트업 검증 프로그램', en: 'Hyundai Motor Company Internal Startup Validation Program' },
    team: 'nbd',
    category: 'cv',
    year: '2020',
    period: '2020 May ~ Oct',
    participants: '7팀',
    summary: {
      ko: "'야생에서 살아남을 역량을 가진 팀'을 검증하며 분사 목적의 사내 스타트업을 최종 선발",
      en: 'Validated teams with the capability to survive in the wild and ultimately selected in-house startups for spin-off purposes.',
    },
    overview:
      '현대자동차의 기존 Value Chain을 넘어 새로운 성장 동력을 확보하고자 사내 스타트업 발굴 및 육성 프로그램을 운영했습니다. 단순히 역량 있는 대기업 직원이 아닌, 치열한 시장에서도 살아남을 실행력을 갖춘 팀을 선발하여 분사를 목표로 하는 창업형 조직 문화를 조성하고, 궁극적으로 자사와 시너지를 창출할 수 있는 사업 기회를 발굴하는 것을 목표로 하였습니다.',
    process:
      '아이디어 구체화부터 Mock-up 개발 및 고객 테스트, Pitch Deck 작성까지 1주간의 Sprint Workshop을 진행했습니다. 일주일간 집중적인 시간을 편성하고 팀들이 실제 가설을 검증하기 위해 얼마나 빠르게 움직이고 고객을 만나며 학습할 수 있는지, 단순 문서 작성이나 발표 능력이 아닌 실행력에 대한 점검에 대해 진행했습니다.',
    points: `사내 스타트업으로서의 아이템의 컨셉과 팀의 실행력을 검증하기 위한 최적의 프로그램 설계
단순 문서 작성이나 발표 역량 평가를 넘어, 팀이 직접 가설 설정부터 고객 인터뷰, Mock-up 제작, 시장성 검증, 사업 계획 수립까지 전 과정을 경험하도록 설계했습니다. 1주간의 집중 Sprint Workshop을 통해 팀이 빠르게 실행하고 학습하는 능력을 검증하였으며, Notion을 통한 사전 자료 공유, Slack 및 Zoom 등 비대면 커뮤니케이션 툴을 적극 활용하여 효율적인 운영을 도모하였습니다.

전담 코치 동반 참여를 통한 밀착 지원 및 팀 성장 유도
스타트업 액셀러레이터 출신 코치들이 선발 단계부터 Sprint Workshop 기간 동안 팀에 멤버로 참여하여, 사업 아이디어 구체화, 고객 검증, Pitch Deck 작성 등 각 단계에서 실질적인 조언과 실행 지원을 제공하였습니다.`,
    links: [{ title: '더인벤션랩, 디지털헬스케어 초기 스타트업 3개 기업 시드투자 완료', source: '플래텀', url: 'https://platum.kr/archives/155097' }],
  },
  {
    id: 18,
    title: { ko: '교보생명 분사 목적 사내벤처 프로그램', en: 'Kyobo Life Insurance Spin-off–Focused Corporate Venture Program' },
    team: 'nbd',
    category: 'cv',
    year: '2022, 2021, 2020',
    period: 'Step 0 - 2020 Aug ~ Nov\nStep 1 - 2021 Jun ~ Dec\nIncubating - 2022 Feb ~ Nov',
    participants: '12팀',
    summary: {
      ko: '기업의 신성장동력을 발굴하고 새로운 고객 가치를 창출하기 위한 사내벤처팀 선발',
      en: 'Selecting corporate venture teams to discover new growth engines and create new customer value',
    },
    overview:
      '교보생명은 신성장 동력 발굴과 새로운 고객 가치 창출을 목표로, 양면 플랫폼 기반의 신사업 아이디어를 전사적으로 공모해 사내벤처팀을 선발하고, 사업화를 위한 액셀러레이션 프로그램을 운영했습니다. 단순한 아이디어 도출을 넘어, 플랫폼 서비스의 실현 가능성과 시장성을 검증하고, 선발된 팀이 독립적 조직으로 자립할 수 있도록 실행력을 강화하는 데 초점을 두었습니다.',
    process: `프로그램은 크게 아이디어 공모 및 예비 선발(3개월) 단계 → 최종 팀 선발 및 독립적 액셀러레이션 운영(1년) 단계로 구성되었습니다. 아이디어 공모 및 예비 선발 단계에서는 ‘강력한 양면 플랫폼 서비스 발굴’이라는 명확한 비전을 설정한 후, 사내 공모를 통해 예비 사내벤처팀을 선발했습니다. 선발된 팀들은 3개월간 사업 컨셉 구체화 및 실행 역량 검증 과정을 거쳤습니다. 이 기간 동안 영상, 앱, 하드웨어 목업 등 시제품 제작을 통해 고객 가설을 검증하고, 내외부 전문가와 고객 평가를 통해 시장성과 성장 가능성을 다각도로 점검했습니다. 최종적으로 사업성 및 실행력이 검증된 5개 팀을 선발했습니다.

최종 팀 선발 및 독립적 액셀러레이션 운영 단계에서는 최종 5개 팀을 대상으로 약 1년간 독립된 외부 업무 공간(JustCo 광화문점)을 제공해 자율적이고 유연한 업무 문화를 경험하도록 했습니다.`,
    points: `양면 플랫폼 중심의 디지털 혁신 사업화 검증 프로그램
단순 아이디어 공모전을 넘어, ‘양면 플랫폼 서비스 발굴’이라는 명확한 방향성을 설정해 공모 초기부터 실행 가능성과 시장성을 염두에 둔 팀 선발 및 육성을 진행했습니다. 선발팀은 사업 컨셉 단계에서부터 영상, 앱, 하드웨어 등 MVP 수준의 구현물을 제작해 고객 반응을 직접 확인하도록 유도했으며, 시장성, 성장성, 수익 모델 등 사업 지속 가능성에 대한 검증을 심층적으로 수행했습니다.

자율과 책임을 강조한 외부 독립 공간 운영 및 정기적 코칭
선발된 사내벤처팀이 외부 공유오피스(JustCo 광화문점)에 입주해 자율적인 분위기 속에서 운영하도록 지원함으로써, 새로운 조직 문화를 체험할 수 있었습니다.`,
    links: [{ title: '교보생명, 사원/대리가 주도하는 사내벤처 2곳 사업화', source: '인더뉴스', url: 'https://www.inthenews.co.kr/news/article.html?no=49489' }],
  },
  {
    id: 17,
    title: { ko: 'LS ELECTRIC 분사 목적 사내 스타트업 프로그램', en: 'LS ELECTRIC Spin-off–Focused Internal Startup Program' },
    team: 'nbd',
    category: 'cv',
    year: '2022, 2021',
    period: '2021 May ~ 2022 Mar',
    participants: '6팀',
    summary: {
      ko: '전력 산업을 넘어 새로운 비즈니스 모델을 발굴하는 사내 스타트업 육성 및 사업화 검증 프로그램',
      en: 'An internal startup incubation and validation program to discover new business models beyond the power industry',
    },
    overview:
      'LS ELECTRIC과 함께 전력 산업을 넘어 새로운 비즈니스 모델을 발굴하고자 사내 스타트업 육성 및 사업화 검증 프로그램을 운영했습니다. 단순한 아이디어 발굴을 넘어 실제 사업화까지 연결하는 전 과정을 설계하여, 실행력과 시장성을 갖춘 사내벤처를 최종 발굴함으로써 미래 성장 동력을 확보하는 것을 목표로 했습니다.',
    process:
      '프로그램은 크게 사내 스타트업 예비 선발(Phase 1, 2개월) 단계 → 엑셀러레이팅 프로그램 운영(Phase 2, 1년) 단계로 구성되었습니다. 사내 공모 및 예비 선발 단계(Phase 1)에서는 사내 임직원을 대상으로 사내 스타트업 팀 예비 선발 및 교육을 2개월간 진행한 후, 피치데이를 통해 최종 스타트업 선발을 진행했습니다. 엑셀러레이팅 프로그램 운영(Phase 2)에서는 2개팀을 대상으로, 실제 스타트업이 초기 컨셉을 검증하고 Soft Landing하기 위한 시장 검증 과정에 집중하는 프로그램을 진행했습니다.',
    points: `단계별 선발 및 장기 육성을 통한 실행력 중심의 사내벤처 검증 프로그램
2개팀을 대상으로 실제 스타트업이 초기 컨셉을 검증하고 Soft Landing하기 위한 시장 검증 과정에 집중하며, 1년이라는 긴 운영 기간 동안 중간중간 게이트(gate)를 설정해 단기 목표 달성을 유도하여 팀의 긴장감을 유지하도록 했습니다.

운영 전반에 걸친 기획 및 브랜드 구축 지원
프로그램 초기 단계부터 네이밍, 공모 포스터 제작, 홍보 영상 기획 등 프로그램 브랜드 구축에 힘썼으며, 사내 공모 활성화를 위한 홍보 전략 수립을 지원했습니다.`,
    links: [{ title: '사내벤처로 창업의 꿈을 펼치다', source: 'LS ELECTRIC 웹진', url: 'http://www.lselectricwebzine.com/2021_11/issue.php' }],
  },
  {
    id: 14,
    title: { ko: '농심 사내 스타트업 Incubation 프로그램', en: 'Nongshim Internal Startup Incubation Program' },
    team: 'nbd',
    category: 'cv',
    year: '2024, 2023, 2021, 2020',
    period: '3rd - 2020 Oct ~ 2021 Jul\n4th - 2023 Oct ~ 2024 Jul',
    participants: '3기 2팀\n4기 4팀 → 2팀 선발 육성',
    summary: { ko: '내부 역량을 활용해 신사업을 제안하고 사업화 추진', en: 'Proposing and commercializing new businesses by leveraging internal capabilities' },
    overview:
      '농심은 글로벌 사업 확장을 위한 경쟁력 강화 및 사업 다각화를 추진하기 위해 사내 스타트업 제도를 운영했습니다. 임직원의 도전적이고 신선한 아이디어를 사업화함으로써 미래 신성장 동력을 확보하고 창의적인 조직 문화를 구축하는 것을 목표로 하였습니다.',
    process:
      '프로그램은 크게 아이디어 발굴 및 선발(3개월) 단계 → BM 시장 검증(6개월) 두단계로 구성되어 진행되었습니다. 아이디어 발굴 및 선발 단계에서는 아이디어를 공모하고 선발 후 아이디어 구체화 및 사업계획서 작성 워크샵을 통해 발표 심사를 거쳐 최종 사내벤처 2개팀을 선발하였습니다. BM 시장 검증 단계에서는 사내 스타트업으로 전담 발령받은 2개 팀을 대상으로 MVP 개발 및 고객 테스트 등 실제 사업화 검증을 지원하였습니다.',
    points: `워크샵 및 정규 비즈니스 아워를 통한 사내 스타트업팀 집중 육성
아이디어 선발 단계에서는 워크샵을 통해 짧은 시간 내 아이디어 수준의 사업 아이템을 비즈니스 모델 디벨롭을 지원하였습니다. 이후 집중 육성 팀은 격주 단위로 비즈니스 아워를 운영하며 팀의 사업화 현황을 체크하며 사업 전략 및 방향을 논의하며 전담 케어하였습니다.

외부 스타트업과의 연계를 통한 시너지 창출
외부 스타트업을 연계하여 고객 가치 탐색을 통한 사업 기회를 포착하고 PoC를 진행하여 빠른 시장 검증 활동을 지원하였습니다.`,
    results:
      '사내 스타트업으로 발령된 팀들은 6개월간의 BM 시장 검증 과정 기간 동안 크라우드 펀딩, 실제 제품 런칭 및 판매를 진행하였습니다. 3기 자사몰 팀은 사업성을 인정받아 사내 정식 부서로 편성되어 사업을 이어나가고 있으며 4기 반려견 영양제 팀 역시 사업화 진행 중입니다.',
    links: [
      { title: "B2B 유통에 주력하던 농심은 왜 '농심몰'을 열었을까", source: '브런치', url: 'https://brunch.co.kr/@operator/217' },
      { title: '농심, 사내 벤처 통해 신사업 나선다… 반려견 영양제·꿀꽈배기 막걸리 출시', source: '조선일보', url: 'https://www.chosun.com/economy/market_trend/2024/07/09/KRDQ2C2FTFATXCVPVAWFG2JDHM/' },
    ],
  },
  {
    id: 11,
    title: { ko: '신한은행 사내벤처 프로그램', en: 'Shinhan Bank Corporate Venture Program' },
    team: 'nbd',
    category: 'cv',
    year: '2024',
    period: '2024 Sep ~ Dec',
    participants: '5팀',
    summary: {
      ko: '은행에서 할 수 없었던 새로운 아이디어를 선발하여 사내사업화 및 독립 분사 지원',
      en: 'Selecting new ideas that could not be pursued within the bank and supporting in-house commercialization and independent spin-offs.',
    },
    overview:
      '신한은행과 KT는 전략적 파트너십 체결 이후 2022년부터 사내벤처를 육성하고, 창업을 지원하는 UNIQUERS 프로젝트를 공동 진행하고 있었습니다. 2024년 신한은행에서 혁신 금융/비금융 아이디어를 발굴하고 디지털 전환 및 사업화 추진을 목적으로 3기 Uniquers 프로젝트를 진행했습니다. 아이디어 발굴에서 기술 검증, 구현에 이르기까지 전 과정을 종합적으로 지원하는 사내벤처 육성 프로그램을 운영했습니다. 해당 프로젝트에서는 내부 임직원 22명이 참가했으며 최종 5팀이 본선에 진출해 데모데이 행사를 진행했습니다.',
    process:
      '혁신 금융/비금융 아이디어를 제안하고 이를 MVP로 제작, 최종 Pitch Deck을 작성하여 임원 대상 최종 Pitching을 수행했습니다. 전체 프로세스는 서류 모집 → 원데이 워크샵 → 2차 인터뷰 심사 → 사업 고도화 프로그램 → 데모데이의 과정으로 프로그램을 진행했습니다.',
    points: `체계적인 사업 고도화 프로그램 운영 및 AC 전문가들과의 1:1 멘토
4주간의 사업 고도화 프로그램 기간을 운영하며 사업 고도화 및 고객 검증 활동을 지원하였고 액셀러레이터(AC) 업계 전문가들과 참가자들을 1:1로 매칭해 멘토-멘티제를 운영했습니다.

워크스페이스 기반의 통합 프로그램 관리
프로그램 전반을 효율적으로 운영하기 위해 slashpage를 활용했습니다. 과제 제출/관리, 자료 공유, 멘토-멘티 간의 커뮤니케이션 등 모든 과정을 한 곳에서 관리해 편리성과 체계성을 동시에 확보했습니다.

생성형 AI 기반 MVP 구현 지원
참가자들이 빠르고 높은 퀄리티의 MVP를 개발할 수 있도록, 생성형 AI를 활용한 구현 tool을 정리해 제공했습니다.`,
    results: '대상 1팀, 최우수상 1팀 시상하였으며 대상팀은 육성팀에 선발되어 6개월간의 인큐베이팅 및 사업화 기회가 부여되었습니다.',
  },

  // ───────────── 서울 기업 주목적 투자조합 ─────────────
  {
    id: 36,
    title: { ko: '하이서울 딥테크 개인투자조합', en: 'Hi Seoul Deep Tech Angel Investment Fund' },
    team: 'vs',
    category: 'seoul',
    year: '2024',
    period: '1y',
    participants: '4개사',
    summary: { ko: '(사)하이서울기업협회 회원사 중심으로 조성된 개인투자조합', en: 'An angel investment fund formed mainly by member companies of the Hi Seoul Business Association' },
    overview:
      'B2C 및 B2B 솔루션 분야의 스타트업의 공개 모집, 상시 평가 체계 기반으로 최종적으로 4개사를 선별하였으며, 선발된 기업들은 하이서울기업협회의 직간접적 지원과 더인벤션랩을 통한 TIPS 및 해외진출 지원을 받았습니다.',
    process: '2024년 월 단위 IR을 통해 창업기업들에 대한 검토를 진행했습니다. 이를 통해, 최종적으로 4개사 선별 후 개별적으로 투자 조건 검토 및 투자 집행, 이후 맞춤형 액셀러레이팅 지원이 이루어졌습니다.',
    points: `TIPS/LIPS 추천 연계
투자와 별도로 TIPS 및 LIPS 추천을 통해 5~15억원+a의 자금조달을 진행하여 초기 기업의 성장 가속화를 지원했습니다.`,
    results: '펫봄, 모던, 5그릿츠, 더마레에 투자 집행',
  },
]

export const projectById = (id: number) => projects.find((p) => p.id === id)

/** Cases 페이지 'Our Projects' 기본 노출 순서 (원본 사이트 순서 기준, 이후 최신순) */
export const projectOrder = [37, 23, 26, 34, 15, 22]

export const studioCaseIds = [41, 39, 40, 42]
export const featuredStudioIds = [41, 39, 40]
