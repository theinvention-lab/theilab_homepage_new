// 정적 페이지 문구 모음 (원문 그대로). 디자인 컨셉 페이지들이 공통으로 사용합니다.
// 의미·수치·키워드를 바꾸지 마세요.
import type { L10n } from '../i18n'

type Item = { title: L10n; desc: L10n }

export const home = {
  eyebrow: { ko: 'Venture Studio for Startup & Corporates', en: 'Venture Studio for Startups & Corporates' } as L10n,
  title: { ko: 'We build new ventures with\nentrepreneurs', en: 'We build new ventures with\nentrepreneurs' } as L10n,
  /** 메인 히어로: 고정 문구 + 타이핑으로 바뀌는 마지막 키워드 */
  titleLead: 'We build new ventures with',
  titleKeywords: ['corporations', 'entrepreneurs', 'opportunities', 'innovations'],
  sub: { ko: '새로운 사업을 설계하고 성장 단계까지 이끄는 벤처 빌딩 파트너', en: 'A Venture Building Partner Designing and Guiding New Businesses to Growth' } as L10n,
  ctaPrimary: 'Start a Venture Project',
  ctaSecondary: 'Explore Our Venture Studio Model',
  journeyEyebrow: 'JOURNEY & VISION',
  journeyTitle: {
    ko: '더인벤션랩은 8년간의 오픈이노베이션 역량을 토대로,\nVenture Studio로서 새로운 비즈니스와 성장 기회를 설계합니다.',
    en: 'Based on 8 years of Open Innovation leadership,\nThe Invention Lab designs new businesses and growth opportunities as a Venture Studio.',
  } as L10n,
  journeyLabel: 'TIL’s Journey',
  journeyPeriod: '2017 — PRESENT',
  journey: [
    {
      title: { ko: 'Open Innovation Leadership' },
      desc: {
        ko: '민간 대기업 및 중견기업의 스타트업 발굴부터 PoC, 성과 도출, 투자 연계까지 8년간의 실행 경험을 축적했습니다.',
        en: 'Accumulated 8 years of execution experience from startup scouting to PoC, result derivation, and investment linking for major corporations.',
      },
    },
    {
      title: { ko: 'Startup Investments & Accelerating' },
      desc: {
        ko: '초기 투자부터 성장 가속화와 후속 투자까지, 전주기 스타트업 투자·육성 경험을 보유하고 있습니다.',
        en: 'Possess full-lifecycle startup investment and incubation experience from early-stage to growth acceleration.',
      },
    },
    {
      title: { ko: 'Corporate Company Building & Spin-Off' },
      desc: {
        ko: '사내벤처 육성 및 스핀오프 프로젝트를 통한 독립 법인화 성공 사례를 다수 보유하고 있습니다.',
        en: 'Multiple success stories in corporate venture building and spin-off projects leading to independent legal entities.',
      },
    },
  ] as Item[],
  nextChapter: {
    label: 'The Next Chapter',
    tag: 'VENTURE STUDIO MODEL',
    title: 'Venture Studio for Corporates',
    desc: {
      ko: '급변하는 AI 기술과 기업 환경 변화에 대응하기 위해, 기존의 오픈이노베이션을 넘어선 벤처 스튜디오로 진화합니다.',
      en: 'To respond to rapidly changing AI technologies and corporate environments, we are evolving beyond traditional Open Innovation into a Venture Studio.',
    } as L10n,
    pills: [
      { title: { ko: 'AI-Driven' }, desc: { ko: 'AI가 촉진하는 변화에 맞춘 혁신적 벤처 모델', en: 'Innovative models tailored to AI-driven shifts' } },
      { title: { ko: 'New Business' }, desc: { ko: '스타트업 육성 역량을 기업 비즈니스와 연결', en: 'Linking startup growth capabilities to corporate business' } },
    ] as Item[],
    cta: 'Discover Venture Studio Model',
  },
  whatEyebrow: 'CAPABILITIES',
  whatTitle: 'What We Do',
  whatDesc: {
    ko: '더인벤션랩은 시장의 기회를 발견하고, 실행 가능한 비즈니스로 발전시키며, 지속적인 성장과 확장을 가능하게 하는 스타트업을 만듭니다.',
    en: 'The Invention Lab discovers market opportunities, develops them into executable businesses, and builds ventures capable of sustainable growth.',
  } as L10n,
  capabilities: [
    {
      no: '01',
      title: 'New Business Design',
      sub: 'FROM INSIGHT TO BUSINESS',
      to: '/capabilities/new-biz-design',
      desc: { ko: '시장 기회를 정밀하게 분석하고, 검증 가능한 방향으로 디자인합니다.', en: 'Analyzing market opportunities and designing them in verifiable directions.' } as L10n,
      items: [
        { ko: '신규BM 발굴을 위한 데이터 인사이트 기반 리서치', en: 'Data-driven research for new BM discovery' },
        { ko: '내부 자체 AI Agent를 이용한 신사업 구체화', en: 'New business realization using in-house AI Agents' },
        { ko: '기업형 벤처스튜디오 모델 기획과 설계', en: 'Planning & design of corporate venture studios' },
      ] as L10n[],
    },
    {
      no: '02',
      title: 'Venture Scale-up & MGT',
      sub: 'FROM STRATEGY TO SCALABLE GROWTH',
      to: '/capabilities/venture-building',
      desc: {
        ko: '사업의 실행 기반을 구축하고, 지속 가능한 성장 구조와 투자 스케일업을 만들어갑니다.',
        en: 'Building execution foundations and creating sustainable growth structures.',
      } as L10n,
      items: [
        { ko: 'TIPS/서울형TIPS/LIPS 연계형 초기 투자운용', en: 'Seed investment linked with TIPS/LIPS' },
        { ko: 'CVC형 프로젝트/블라인드 펀드 기획과 운용', en: 'CVC-style projects and fund management' },
        { ko: '내부 벤처스튜디오 기획 및 인큐베이션', en: 'In-house venture studio incubation' },
      ] as L10n[],
    },
    {
      no: '03',
      title: 'Strategic Partnership',
      sub: 'FROM OI TO STRATEGIC NETWORK',
      to: '/capabilities/strategic-partnership',
      desc: { ko: '벤처가 성장할 수 있도록 외부 생태계를 설계하고 확장합니다.', en: 'Designing and expanding external ecosystems for venture growth.' } as L10n,
      items: [
        { ko: '기업형 벤처스튜디오 및 OI 프로젝트 기획·운영', en: 'Corporate Venture Studio & OI Project Planning' },
        { ko: 'FINEDEAL 기반 딜소싱 및 인프라 구축', en: 'Building Deal Sourcing & Infra via FINEDEAL' },
        { ko: '글로벌 거점 기반 OI 및 시장 확장 연계', en: 'Global OI & Market Expansion via Nodes' },
      ] as L10n[],
    },
  ],
  howEyebrow: 'CORE ELEMENTS',
  howTitle: 'How We Do',
  howDesc: {
    ko: '더인벤션랩은 우연이 아닌 구조와 과정으로 스타트업을 만듭니다.\nStudio Core Platform을 기반으로 기업과 창업자를 위한 새로운 사업을 정교한 프로세스로 설계하고 실행합니다.',
    en: 'The Invention Lab builds ventures through structure and process, not chance.\nWe design and execute new businesses for corporations and founders through our Studio Core Platform.',
  } as L10n,
  core: [
    { k: 'CAPITAL', v: 'Blended Financing' },
    { k: 'TALENT', v: 'Operator Pool' },
    { k: 'INFRA', v: 'Validation System' },
    { k: 'NETWORK', v: 'LP & Cross-border' },
  ],
  coreCenter: 'STUDIO CORE PLATFORM',
  casesTitle: 'Featured Venture Studio Cases',
}

/** 사이트 곳곳에 등장하는 핵심 수치 (출처: 각 페이지 원문) */
export const keyNumbers = {
  aum: { value: '520억', label: { ko: '총 AUM (’25년 12월 기준)', en: 'Total AUM (as of Dec 2025)' } as L10n },
  funds: { value: '30여 개', label: { ko: '개인투자조합 및 상장사 오픈 이노베이션 펀드', en: 'Personal & listed-company OI funds' } as L10n },
  portfolio: { value: '200+', label: { ko: '포트폴리오사', en: 'Portfolio companies' } as L10n },
  tips: { value: '50+', label: { ko: 'TIPS 선정기업수', en: 'TIPS selected companies' } as L10n },
  lips: { value: '20+', label: { ko: 'LIPS 선정기업수', en: 'LIPS selected companies' } as L10n },
  since: { value: '2017', label: { ko: '더인벤션랩 설립', en: 'Founded' } as L10n },
}

export const about = {
  eyebrow: 'WHO WE ARE',
  title: {
    ko: '국내 오픈 이노베이션과 연계투자를 넘어\n글로벌 유망기업의 핵심 파트너로 발돋움합니다.',
    en: 'Beyond Domestic Open Innovation & Linked Investment,\nBecoming a Key Partner for Global Emerging Enterprises.',
  } as L10n,
  desc: {
    ko: '더인벤션랩은 K-Deep Tech 및 K-소비재 초기 기업의 글로벌 파트너입니다.\n베트남, 싱가포르, 말레이시아 등 동남아시아 현지 네트워크와 투자 경험을 바탕으로\n한국 기술 기업의 해외 시장 진출과 초기 투자를 실질적으로 지원합니다.',
    en: 'The Invention Lab is a global partner for K-Deep Tech and K-Consumer early-stage ventures. Leveraging our networks and investment experience in SEA countries like Vietnam, Singapore, and Malaysia, we provide substantial support for market entry and seed investments.',
  } as L10n,
  pillars: [
    {
      tag: 'CORPORATE VENTURE STUDIO',
      title: { ko: '대기업·중견기업 맞춤형 신규 기술 및 사업화 아이템 발굴', en: 'Scouting new technologies & BM items for large/mid-sized corporations' },
      desc: {
        ko: '필요한 인재풀(창업자·연구소·스타트업)을 직접 매칭하고, 기업 협업팀이 기술을 내재화할 수 있도록 밀도 높은 벤처 스튜디오 모델을 셋업합니다.',
        en: 'Directly matching talent pools and setting up intensive venture studio models for technical internalization.',
      },
    },
    {
      tag: 'SPECIALIZED STUDIO MODEL',
      title: { ko: 'Vertical AI SaaS 기반의 초격차 스타트업 발굴 및 육성', en: 'Discovering & incubating hyper-gap startups based on Vertical AI SaaS' },
      desc: {
        ko: '유망 창업팀을 발굴하여 TIPS 연계 투자(최소 2억 이상) 및 자본 조달(10억 이상)을 지원하며, 자체 벤처 스튜디오 모델을 운영하여 빠른 시장 런칭을 리드합니다.',
        en: 'Identifying promising teams for TIPS investments ($200k+) and capital raising ($1M+), leading rapid market launches.',
      },
    },
    {
      tag: 'GLOBAL EXPANSION',
      title: { ko: 'K-소비재·브랜드의 동남아시아 시장 선제적 진출 지원', en: 'Supporting preemptive entry of K-Consumer brands into SEA markets' },
      desc: {
        ko: '베트남 중심의 신흥 시장으로 확장 가능한 팀을 선발하여 선제 투자(LIPS 연계, 4~5억 이상 자본 조달)를 집행하고 해외 진출 성과를 가시화합니다.',
        en: 'Selecting teams capable of expansion into emerging markets like Vietnam, executing investments and visualizing global results.',
      },
    },
    {
      tag: 'TOTAL ACCELERATING',
      title: { ko: 'Talent부터 Capital까지, 액셀러레이팅의 전 과정 리드', en: 'Leading the full accelerating process from Talent to Capital' },
      desc: {
        ko: '아이템 발굴, 투자 연계, 블렌디드 파이낸싱(정부 R&D), 국내외 전문가 네트워크 및 파트너십 구축까지 비즈니스 성장에 필요한 모든 요소를 통합 지원합니다.',
        en: 'Integrated support for all elements of business growth, from ideation and investment to blended financing and expert networks.',
      },
    },
  ] as (Item & { tag: string })[],
  ecoTitle: "The Invention Lab's Eco System",
  ecoDesc: {
    ko: '더인벤션랩은 강력한 파트너 에코시스템을 통해\n초기 아이디어의 기술적 구현부터 시장 안착, 그리고 글로벌 확장까지 벤처 빌딩의 전 과정을 입체적으로 지원합니다.',
    en: 'The Invention Lab provides multi-dimensional support for the entire venture building process, from technical implementation to market settling and global expansion, through a powerful partner ecosystem.',
  } as L10n,
  eco: [
    {
      group: 'Deep-Tech',
      items: [
        { name: { ko: '아브라삭스', en: 'ΑΒΡΑΞΑΣ' }, desc: { ko: 'AI반도체/부품 및 관련 유관기술, 디지털헬스케어 분야 전문', en: 'Specialized in AI semiconductors/components and digital healthcare.' } },
        { name: { ko: '커리어데이', en: 'CareerDay' }, desc: { ko: 'AI SaaS / 기술전략 / 마케팅 전략 등 현업 전문가 Pool 1만 명 이상 보유', en: 'Expert pool of 10,000+ in AI SaaS, tech strategy, and marketing.' } },
      ],
    },
    {
      group: 'K-Consumer',
      items: [
        { name: { ko: 'SPBT' }, desc: { ko: '백채김치찌개 창업팀이 설립한 K-Food Brand Aggregator, 10개 이상 F&B브랜드 런칭', en: 'K-Food Brand Aggregator founded by Baekchae Kimchi-jjigae team.' } },
        { name: { ko: '아이소이', en: 'ISOI' }, desc: { ko: '라이콘 투자조합1호 LP 참여, K-뷰티 분야 초기스타트업 발굴-자문', en: 'LP in Lycon Fund #1, scouting and advising early K-Beauty startups.' } },
      ],
    },
    {
      group: 'Global',
      items: [
        {
          name: { ko: '더인벤션랩 호치민 법인', en: 'The Invention Lab Ho Chi Minh Office' },
          desc: { ko: '더인벤션랩의 100% 출자 베트남 법인으로, 베트남 시장 조사와 현지 파트너 연계를 수행', en: 'A 100% owned Vietnamese subsidiary of The Invention Lab, conducting market research and local partner connections.' },
        },
        {
          name: { ko: 'SunwayiLabs' },
          desc: { ko: '말레이시아 진출을 희망하는 스타트업 대상으로 PoC 및 컨설팅 연계를 지원하는 현지 파트너 기관', en: 'A local partner organization supporting PoC and consulting connections for startups wishing to enter Malaysia.' },
        },
        {
          name: { ko: 'Y-Space' },
          desc: {
            ko: '캐나다 York University 산하의 스타트업 액셀러레이션 및 산학협력 기반 혁신 허브로, 북미 시장 진출을 지원하는 파트너 기관',
            en: 'A startup acceleration and industry-academia innovation hub under York University, Canada, supporting North American market entry.',
          },
        },
        {
          name: { ko: '씨랩스(C-LAPS)', en: 'C-LAPS' },
          desc: {
            ko: '베트남 호치민을 거점으로 한 종합 마케팅 에이전시로, 광고·콘텐츠 제작은 물론 현지 행사 운영까지 지원하는 파트너 기관',
            en: 'A comprehensive marketing agency based in Ho Chi Minh City, Vietnam, supporting advertising, content creation, and local event operations.',
          },
        },
        {
          name: { ko: '콜라보엑스', en: 'Collabo X' },
          desc: { ko: '한국 유망 F&B 브랜드의 베트남 진출을 위한 마스터 프랜차이즈 운영 및 마케팅 실행 주체', en: 'Master franchise operator and marketing executor for promising Korean F&B brands entering Vietnam.' },
        },
      ],
    },
  ] as { group: string; items: { name: L10n; desc: L10n }[] }[],
  teamTitle: 'Meet Our Teams',
  teamDesc: {
    ko: '분야별 최고의 전문가들이 창업팀의 페이스메이커가 되어,\n비즈니스의 탄생부터 스케일업까지 모든 과정을 함께 고민하고 실행합니다.',
    en: 'Top experts in each field act as pacemakers for startup teams, thinking and executing together throughout the entire journey from business birth to scale-up.',
  } as L10n,
}

export const studio = {
  eyebrow: 'INNOVATION & INVENTION FACTORY',
  title: 'The Invention Lab\nVenture Studio',
  desc: { ko: '아이디어 발굴부터 스케일업까지, 성공적인 스타트업을 체계적으로 제조합니다.', en: 'Systematically manufacturing successful startups from ideation to scale-up.' } as L10n,
  cta: 'Go build with us',
  factoryTitle: 'Innovation & Invention Factory',
  factoryDesc: {
    ko: '더인벤션랩이 추구하는 가치는 지난 8년 간 쌓은 오픈 이노베이션 및 사내벤처&컴퍼니빌딩 프로젝트 경험을 바탕으로 기업형 벤처 스튜디오 및 자체 벤처 스튜디오 모델로 진화하는 것입니다. 더인벤션랩은 이를 ‘혁신/창조 공장’으로 정의하며, 각 모듈별 최적화된 기능을 통해 성공적인 스타트업을 체계적으로 제조합니다.',
    en: 'The value pursued by The Invention Lab is evolving into a corporate and proprietary venture studio model based on 8 years of experience in open innovation and company building. We define this as an "Innovation & Invention Factory," manufacturing successful startups through optimized modules.',
  } as L10n,
  factory: [
    { k: 'Startup Management', title: { ko: '스타트업 빌드업 및 운영관리', en: 'Startup Build-up & Operations Management' }, desc: { ko: 'CEO 및 Venture Scaleup & MGT Team에서 전체 통합 프로세스 관리', en: 'Total integrated process management by the CEO and Venture Scaleup & MGT Teams' } },
    { k: 'R&D Center', title: { ko: '아이디어 생성 및 검증', en: 'Ideation & Validation' }, desc: { ko: '인벤션덱 AI 기반 New Biz Design Lab 담당', en: 'Managed by the New Biz Design Lab using InventionDeck AI' } },
    {
      k: 'PRODUCTION LINE',
      title: { ko: 'Venture Building' },
      desc: { ko: 'Venture Scaleup & Venture MGT Team이 Talent & Capital을 활용해 실제 기업을 구축합니다.', en: 'Venture Scaleup & Venture MGT Teams build actual companies using Talent & Capital.' },
      main: true,
    },
    { k: 'Output & Branding', title: { ko: '결과/성과 도출 및 확산', en: 'Result Derivation & Expansion' }, desc: { ko: 'Venture Scaleup Team 담당', en: 'Managed by the Venture Scaleup Team' } },
    { k: 'Growth Support', title: { ko: '네트워크 및 인프라 제공', en: 'Provision of Network & Infrastructure' }, desc: { ko: 'Strategic Partnership Team 담당', en: 'Managed by the Strategic Partnership Team' } },
  ] as (Item & { k: string; main?: boolean })[],
  platformTitle: 'Studio Core Platform',
  platformDesc: {
    ko: '더인벤션랩은 벤처 스튜디오의 5가지 핵심 엔진인 Ideation - Capital - Talent - Network - Infrastructure를 통합적으로 연결하여 제공합니다.',
    en: 'The Invention Lab provides an integrated connection of the 5 core engines of a Venture Studio: Ideation, Capital, Talent, Network, and Infrastructure.',
  } as L10n,
  engines: [
    {
      name: 'Ideation',
      owner: 'NEW BUSINESS DESIGN LAB',
      items: [
        { ko: '대중견 기업이 필요로 하는 신기술-신사업 BM 기회포착', en: 'Identifying new tech/business BM opportunities for large/mid-sized corps' },
        { ko: '자체 AI Agent를 활용한 데이터 인사이트 기반 조사/기회요인발굴', en: 'Data insight research and opportunity discovery via proprietary AI Agents' },
      ],
    },
    {
      name: 'Capital',
      owner: 'VENTURE BUILDER & VENTURE MGT TEAM',
      items: [
        { ko: 'TIPS/LIPS/서울형 TIPS 3대 라이센스확보', en: 'Secured triple licenses for TIPS/LIPS/Seoul-TIPS' },
        { ko: 'K딥테크 및 K소비재 전용펀드 보유', en: 'Proprietary funds dedicated to K-Deep Tech & K-Consumer brands' },
      ],
    },
    {
      name: 'Talent',
      owner: 'VENTURE BUILDER & VENTURE MGT TEAM',
      items: [
        { ko: '삼성전자 출신의 전무급 이상 사장단 조합(아브라삭스와의 전략적 파트너십)', en: 'Executive/C-level talent pool from Samsung Electronics (Strategic partnership with Abraxas)' },
        { ko: 'Cross-Border Team Building 역량', en: 'Cross-Border Team Building capabilities' },
      ],
    },
    {
      name: 'Network',
      owner: 'STRATEGIC PARTNERSHIP TEAM',
      items: [
        { ko: '중견상장사/중견대기업 LP네트워크(삼천리, 우미, 국보디자인, 아주그룹 등)', en: 'LP network of mid-sized listed/conglomerate partners (Samchully, Woomi, etc.)' },
        { ko: 'Global Network(일본-베트남-말레이시아, 캐나다 등)', en: 'Global Network spanning Japan, Vietnam, Malaysia, and Canada' },
      ],
    },
    {
      name: 'Infrastructure',
      owner: 'STRATEGIC PARTNERSHIP TEAM',
      items: [
        { ko: '데이터 기반 검증 방법론', en: 'Data-driven validation methodologies' },
        { ko: '물리적 공간(강남-마이워크스페이스, 강북-광화문169 등)', en: 'Physical spaces (Gangnam MyWorkspace, Gwanghwamun 169, etc.)' },
      ],
    },
  ] as { name: string; owner: string; items: L10n[] }[],
  modelTitle: 'Our Venture Studio Model',
  modelDesc: {
    ko: '더인벤션랩이 창업팀을 직접 선발하여 사업 아이템 구체화, 시장 런칭 및 글로벌 확장 전략을 주도하는 핵심 비즈니스 모델입니다.',
    en: 'Our core business model where we directly select founding teams to drive business item specification, market launch, and global expansion strategies.',
  } as L10n,
  model: [
    { k: 'ENGINE 1', title: 'New Business Design Lab', desc: { ko: '시장 분석과 가설 검증을 통해 실행 가능한 모델을 디자인합니다.', en: 'Designing executable models through market analysis and hypothesis validation.' } as L10n },
    { k: 'ENGINE 2', title: 'Venture Scaleup & Venture MGT Team', desc: { ko: '전문 역량을 결합하여 검증된 모델을 실제 법인화합니다.', en: 'Incorporating validated models by combining professional expertise.' } as L10n },
    { k: 'ENGINE 3', title: 'Strategic Partnership Team', desc: { ko: '전략적 제휴를 통해 안정적인 매출과 확장을 지원합니다.', en: 'Supporting stable revenue and expansion through strategic partnerships.' } as L10n },
  ],
  diffTitle: 'Key Differentiators',
  diffDesc: { ko: '기존 VC 모델과는 차별화된 핵심 경쟁력입니다.', en: 'Our core competitiveness differentiated from traditional VC models.' } as L10n,
  diffs: [
    { ko: '더 높은 수준의 지분율 확보', en: 'Higher Equity Stakes' },
    { ko: '더 강력한 개입과 육성', en: 'Hands-on Incubation' },
    { ko: '성공적인 기업 PoC 연결', en: 'Strategic Corporate PoC Linkage' },
    { ko: '3-5년 내 빠른 EXIT 목표', en: 'Targeting Fast Exit within 3-5 Years' },
  ] as L10n[],
}

type Program = {
  eyebrow: string
  title: L10n
  subtitle?: L10n
  desc: L10n
  process?: L10n[]
  outputs?: L10n[]
  cases?: { label: string; projectId: number }[]
}

export const newBiz = {
  eyebrow: 'FROM INSIGHT TO BUSINESS',
  title: 'New Business Design',
  desc: { ko: '시장과 고객에 대한 깊은 이해로 새로운 비즈니스를 정교하게 디자인합니다.', en: 'We precisely design new businesses through a deep understanding of markets and customers.' } as L10n,
  cta: 'Design Your Venture',
  introTitle: 'Precisely analyzing market opportunities and designing for validation',
  introDesc: {
    ko: '시장과 고객을 정밀하게 분석해 성공 가능성이 높은 기회를 함께 포착하고 실행 가능한 비즈니스 모델로 디자인합니다. 나아가 핵심 가치를 빠르게 구현한 후 다각도의 시장 검증 과정을 거쳐 실제 시장에 안착할 수 있는지에 대한 타당성을 함께 검증합니다.',
    en: 'We precisely analyze markets and customers to capture high-potential opportunities and design executable business models. Furthermore, we rapidly implement core values and conduct multi-faceted market validation to verify feasibility for market entry.',
  } as L10n,
  stats: [
    { value: '22+', label: { ko: '함께한 기업들', en: 'CORPORATE PARTNERS' } },
    { value: '100+', label: { ko: '신사업 아이디어 도출 및 육성 건수', en: 'NEW IDEAS INCUBATED' } },
    { value: '50+', label: { ko: '진행한 프로젝트 수', en: 'PROJECTS COMPLETED' } },
    { value: '4+', label: { ko: '사내벤처 분사 후 투자 집행 건수', en: 'SPIN-OFF INVESTMENTS' } },
  ] as { value: string; label: L10n }[],
  inventionDeck: {
    name: 'InventionDeck AI',
    title: { ko: 'AI 기반 비즈니스 아이데이션 & 비즈니스 구체화 솔루션', en: 'AI-powered Business Ideation & Specification Solution' } as L10n,
    lead: { ko: '아이디어 발굴부터 사업계획서 완성까지, AI가 가속화하는 비즈니스 디자인 솔루션', en: 'From Ideation to Business Plan Completion, AI-Accelerated Business Design Solution' } as L10n,
    desc: {
      ko: 'InventionDeck AI는 더인벤션랩이 큐레이션한 4,000여 개의 비즈니스 카드를 조합해 시장의 빈틈을 포착하는 ‘카드 조합형 아이데이션’ 솔루션입니다. 자체 개발된 6가지 핵심 템플릿을 통해 막연한 아이디어를 체계적으로 구체화하고 논리적인 사업계획서와 설득력 있는 제안서까지 완성합니다. 이를 통해 신사업 기획에 드는 시간을 획기적으로 단축하고 비즈니스 로직의 완결성을 극대화할 수 있습니다.',
      en: 'InventionDeck AI is a "card-combination ideation" solution that identifies market gaps by combining over 4,000 curated business cards. Through 6 proprietary templates, it systematically refines vague ideas into logical business plans and persuasive proposals, drastically reducing planning time and maximizing business logic integrity.',
    } as L10n,
  },
  programs: [
    {
      eyebrow: 'DATA DRIVEN BUSINESS OPPORTUNITY DISCOVERY',
      title: { ko: '데이터 기반 신사업 기회 발굴', en: 'Data-Driven Opportunity Discovery' },
      subtitle: { ko: '시장 인사이트와 AI를 활용한 신사업 아이디어 탐색', en: 'Exploring New Business Ideas using Market Insights & AI' },
      desc: {
        ko: '불확실성이 높은 초기 단계에서 가장 중요한 것은 ‘검증할 가치가 있는 사업 가설을 빠르게 선별하고 검증해보는 것’입니다. 시장, 고객, 산업 전반의 정보를 분석해 유의미한 기회 영역을 도출하고 감과 경험에 의존하지 않는 데이터에 근거한 신사업 출발점을 설계합니다. 조직에게 적합한 아이템을 선제적으로 탐색하고 사업화 가능성이 높은 영역에 집중할 수 있는 기준을 제공한 다음, 빠르게 시도하고 선택할 수 있는 환경을 만들 수 있도록 돕습니다.',
        en: 'In high-uncertainty early stages, the priority is rapidly filtering and testing business hypotheses worth validating. We analyze market, customer, and industry data to derive meaningful opportunity areas and design data-driven starting points. We help organizations proactively explore suitable items, providing criteria to focus on high-potential areas and enabling environments for rapid trial and selection.',
      },
    },
    {
      eyebrow: 'NEW BUSINESS VERIFICATION & SCALE-UP',
      title: { ko: '신사업 검증 및 스케일업 지원', en: 'Validation & Scale-up Support' },
      desc: {
        ko: '아이디어의 발굴부터 시장성 진단, MVP 구현, 그리고 시장 진입과 확장까지 - 신사업의 생애주기에 최적화된 맞춤형 솔루션을 제공합니다. 신규 사업 특성에 맞춰 필요한 단계만 선택적으로 진행하거나 전 과정을 통합적으로 진행할 수 있습니다. 단순 컨설팅을 넘어 자체 네트워크와 파트너십을 기반으로 실질적인 비즈니스 성과를 함께 창출합니다.',
        en: 'We provide customized solutions optimized for the new business lifecycle. Depending on the venture’s traits, we offer selective stages or integrated end-to-end processes.',
      },
      process: [
        { ko: '시장 기회 분석 및 비즈니스 모델 고도화', en: 'Market analysis & BM enhancement' },
        { ko: '고객/시장 중심 가설 수립 및 검증', en: 'Customer-centric hypothesis & testing' },
        { ko: 'MVP 구현 및 시장 테스트', en: 'MVP implementation & market testing' },
        { ko: '스케일업 및 후속 성장 지원', en: 'Scale-up & growth support' },
      ],
      outputs: [
        { ko: '신사업 진단 보고서', en: 'Diagnostic Report' },
        { ko: '사업계획서 및 Pitch Deck', en: 'Business Plan & Pitch Deck' },
        { ko: '프로토타입/MVP/랜딩페이지', en: 'Prototype / MVP / Landing Page' },
      ],
      cases: [
        { label: 'F&B', projectId: 9 },
        { label: 'TELCO / IT', projectId: 10 },
      ],
    },
    {
      eyebrow: 'CORPORATE VENTURE BUILDING',
      title: { ko: '사내벤처 발굴 및 육성', en: 'In-house Venture Building' },
      subtitle: { ko: '조직의 혁신 DNA를 깨우는 전주기 프로그램', en: 'Full-lifecycle programs to awaken innovation DNA' },
      desc: {
        ko: '아이디어 발굴부터 육성, 분사, 그리고 후속 투자까지-기업 내부의 혁신 동력을 비즈니스 성과로 연결하는 실전형 프로그램을 제공합니다. 이론 중심의 교육이나 단순 공모전에 그치지 않고, 아이디어를 빠르게 시제품으로 구현해 시장 검증을 거치는 과정으로 성공 확률을 높입니다.',
        en: 'We provide practical programs that connect internal innovation drivers to business results—from ideation and incubation to spin-offs and follow-on investments.',
      },
      process: [
        { ko: '프로그램 기획 및 선발', en: 'Planning & selection' },
        { ko: '사업 고도화 프로그램', en: 'BM enhancement program' },
        { ko: 'MVP 구현 및 시장 기반 실증 테스트', en: 'MVP & market-based validation' },
      ],
      outputs: [
        { ko: '사업계획서 및 Pitch Deck', en: 'Business Plan & Pitch Deck' },
        { ko: '프로토타입/MVP 등을 활용한 고객 검증', en: 'Rapid validation via Prototypes/MVP' },
      ],
      cases: [
        { label: 'FINANCE', projectId: 11 },
        { label: 'AUTOMOTIVE', projectId: 20 },
      ],
    },
    {
      eyebrow: 'CORPORATE INNOVATION TRAINING',
      title: { ko: '사내 혁신 역량 강화', en: 'Corporate Innovation Training' },
      subtitle: { ko: '이론을 넘어 실행으로, 조직의 일하는 방식을 혁신하는 실전형 워크샵', en: 'Practical workshops that innovate working methods, moving beyond theory to execution.' },
      desc: {
        ko: '린스타트업과 디지털 트랜스포메이션 워크샵을 기반으로 조직 내에 실행 가능한 혁신을 정착시킵니다. 자체 설계한 전용 린스타트업 툴킷과 SaaS 기반 디지털 협업 환경을 통해 구성원 스스로가 문제를 정의하고 아이디어를 검증합니다.',
        en: 'We establish actionable innovation through Lean Startup and Digital Transformation workshops. Using our proprietary toolkit, we help employees define problems and validate ideas.',
      },
      process: [
        { ko: '진단 및 맞춤 프로그램 설계', en: 'Diagnosis & custom design' },
        { ko: '방법론 학습 및 액션러닝', en: 'Methodology & action learning' },
      ],
      outputs: [
        { ko: '신사업 아이디어 정의서, 비즈니스 모델 캔버스', en: 'Concept definition & BM Canvas' },
        { ko: '워킹 백워즈 기획안, 프로토타입', en: 'Working Backwards plan & Prototype' },
      ],
      cases: [
        { label: 'TRAINING', projectId: 13 },
        { label: 'AI', projectId: 12 },
      ],
    },
  ] as Program[],
}

export const scaleup = {
  eyebrow: 'THINK LIKE A CO-FOUNDER, GROW LIKE A TEAM.',
  title: 'Venture Scale-up & Management',
  desc: {
    ko: '공동창업자의 마음으로 고민하고, 성장의 문턱을 함께 넘습니다. Think like a co-founder, grow like a team.',
    en: 'We agonize with the heart of a co-founder and cross the threshold of growth together. Think like a co-founder, grow like a team.',
  } as L10n,
  cta: 'Scale Your Growth',
  introTitle: {
    ko: '법인 설립부터 성공적인 엑시트까지, 단계별 지원 체계로 성장의 전 과정을 정교하게 설계합니다.',
    en: 'From incorporation to a successful exit, we precisely design the entire growth process with a step-by-step support system.',
  } as L10n,
  introDesc: {
    ko: '단순한 조력자를 넘어, 당신의 여정을 끝까지 완주하는 공동창업자가 되겠습니다. 더인벤션랩은 혁신의 시작부터 결실을 맺는 순간까지 모든 단계를 함께하며 압도적인 성장을 지원합니다.',
    en: 'Beyond being a simple helper, we will be a co-founder who completes your journey to the end. The Invention Lab accompanies you at every stage from the beginning of innovation to the moment of fruition.',
  } as L10n,
  stats: [
    { value: '500+', label: { ko: '운용자산규모 (AUM, 억 원)', en: 'AUM (100M KRW)' } },
    { value: '50+', label: { ko: 'TIPS 선정기업수', en: 'TIPS SELECTED COMPANIES' } },
    { value: '200+', label: { ko: '포트폴리오사', en: 'PORTFOLIO COMPANIES' } },
    { value: '20+', label: { ko: 'LIPS 선정기업수', en: 'LIPS SELECTED COMPANIES' } },
  ] as { value: string; label: L10n }[],
  scoutingTitle: { ko: '벤처 스카우팅 및 초기 투자', en: 'Venture Scouting & Seed Investment' } as L10n,
  scoutingLead: { ko: '혁신의 원석을 발굴하고 성장의 첫 단추를 함께 채웁니다.', en: 'Discovering the gems of innovation and securing the first step of growth.' } as L10n,
  scoutingDesc: {
    ko: '시장의 근본적인 문제를 해결할 독보적 기술력과 사업 역량을 갖춘 팀에 집중합니다. 더인벤션랩은 초기 단계부터 파트너로 합류하여, 실질적인 고객 지표 중심의 검증과 과감한 투자를 통해 비즈니스의 폭발적인 성장을 견인합니다.',
    en: 'We focus on teams with unique technological prowess and business capabilities to solve fundamental market problems. The Invention Lab joins as a partner from the early stages, driving explosive business growth through practical customer-metric-centered validation and bold investment.',
  } as L10n,
  scouting: [
    { title: { ko: '벤처 스카우팅', en: 'Venture Scouting' }, items: [{ ko: '공식 검토 의뢰', en: 'Official Review Requests' }, { ko: '외부 추천', en: 'External Referrals' }, { ko: '스카우팅 네트워크', en: 'Scouting Networks' }, { ko: '오픈이노베이션&액셀러레이팅 프로그램', en: 'OI & Accelerating Programs' }] },
    { title: { ko: '초기 투자', en: 'Seed Investment' }, items: [{ ko: '서류 검토', en: 'Document Review' }, { ko: '캐주얼 IR', en: 'Casual IR' }, { ko: '투자심의 (예비-본심)', en: 'Investment Committee' }, { ko: '투자의사결정', en: 'Investment Decision' }] },
    { title: { ko: '블렌디드 파이낸싱', en: 'Blended Financing' }, items: [{ ko: 'TIPS' }, { ko: 'LIPS' }, { ko: '신용보증기금 보증 연계', en: 'KODIT Credit Guarantees' }, { ko: '기술보증기금 보증 연계', en: 'KIBO Tech Guarantees' }] },
  ] as { title: L10n; items: L10n[] }[],
  blendedTitle: { ko: '금융 구조 설계 전략', en: 'Financial Structure Strategy' } as L10n,
  blendedLead: { ko: '시드 단계에서 Pre-A급 자금력을 확보하는 다각적 금융 설계', en: 'Multifaceted financial design to secure Pre-A level funding at the seed stage.' } as L10n,
  blendedDesc: {
    ko: '더인벤션랩은 단순 투자를 넘어 TIPS, LIPS, 신보/기보를 아우르는 다각적 금융 구조를 설계합니다. 이를 통해 초기 창업팀은 Pre-A 라운드 수준의 가용 자금을 확보하고, 성장의 골든타임을 선점할 수 있습니다.',
    en: 'Beyond simple investment, The Invention Lab designs multifaceted financial structures encompassing TIPS, LIPS, and KODIT/KIBO. This allows early startup teams to secure available funds at a Pre-A round level and preoccupy the golden time of growth.',
  } as L10n,
  benefits: [
    { title: { ko: '지분 희석 최소화', en: 'Minimize Dilution' }, desc: { ko: '적은 지분 매각으로도 최대 10억~15억 원 규모의 운영 자금을 확보하여 창업팀의 지배력을 보호합니다.', en: 'Protect founder control by securing up to 1-1.5B KRW in funds with minimal equity sale.' } },
    { title: { ko: '성장 가속화', en: 'Growth Acceleration' }, desc: { ko: '시드 단계에서 Pre-A 규모의 자금을 투입함으로써 시장 검증 및 Scale-up 속도를 비약적으로 높입니다.', en: 'Dramatically increase market validation and scale-up speed by injecting Pre-A level funds at the seed stage.' } },
    {
      title: { ko: '신뢰의 보증', en: 'Seal of Trust' },
      desc: { ko: "더인벤션랩의 리드 투자는 정부 및 공공 금융기관의 후속 지원을 이끌어내는 강력한 '신용 보증서' 역할을 합니다.", en: "Our lead investment acts as a powerful 'credit certificate' that leads to follow-on support from gov and public agencies." },
    },
  ] as Item[],
  tableTitle: { ko: '지원 프로그램 및 자금 규모 상세', en: 'SUPPORT PROGRAMS & FUND SIZES' } as L10n,
  table: {
    ko: {
      head: ['구분', '지원 프로그램', '더인벤션랩 투자 조건', '확보 가능 자금 (최대)', '비고'],
      rows: [
        ['정부 R&D', '중기부 TIPS', '2억 원 (지방 1억)', '최대 11억 원', 'R&D(8억)+연계사업(3억)'],
        ['정부 R&D', '서울형 TIPS', '1억 원', '최대 4억 원', 'R&D (4억)'],
        ['소상공인', 'LIPS (L1)', '투자 집행', '최대 5억 원', '투자금의 5배수, 직접 융자 연계'],
        ['소상공인', 'LIPS (L2)', '투자 집행', '최대 2억 원', '투자금의 3배수, 사업화 지원금'],
        ['보증/융자', '신용보증기금', '투자 집행', '개별 추천', '스타트업 지점 협약을 통한 보증-융자'],
        ['보증/융자', '기술보증기금', '투자 집행', '개별 추천', '엔젤파트너스 협약을 통한 우대 보증'],
      ],
    },
    en: {
      head: ['TYPE', 'PROGRAM', 'TIL INVESTMENT COND.', 'MAX FUNDS', 'NOTES'],
      rows: [
        ['Gov R&D', 'MSS TIPS', '200M KRW', 'Up to 1.1B KRW', 'R&D(800M) + Linked(300M)'],
        ['Gov R&D', 'Seoul TIPS', '100M KRW', 'Up to 400M KRW', 'R&D(400M)'],
        ['Micro-Biz', 'LIPS (L1)', 'Equity Inv.', 'Up to 500M KRW', '5x Inv amount, direct loan link'],
        ['Micro-Biz', 'LIPS (L2)', 'Equity Inv.', 'Up to 200M KRW', '3x Inv amount, commercialization grant'],
        ['Guarantee', 'KODIT', 'Equity Inv.', 'Individual Rec.', 'Loan-guarantee via MOU'],
        ['Guarantee', 'KIBO', 'Equity Inv.', 'Individual Rec.', 'Preferential guarantee via Angel Partners MOU'],
      ],
    },
  },
  processTitle: { ko: '투자 및 액셀러레이팅 프로세스', en: 'Investment & Accelerating Process' } as L10n,
  processLead: { ko: '공동창업자의 관점에서 성장의 문턱을 함께 넘는 정교한 여정', en: 'A sophisticated journey crossing growth thresholds together from a co-founder perspective.' } as L10n,
  phases: [
    {
      label: { ko: 'PHASE 1 ㅣ 발굴 및 선발', en: 'PHASE 1 ㅣ DISCOVERY & SELECTION' },
      title: { ko: '발굴 및 선발', en: 'Discovery & Selection' },
      desc: { ko: '시장의 잠재력을 발굴하고 혁신의 원석을 가려내는 단계입니다.', en: 'Stage of discovering market potential and screening innovation gems.' },
      steps: [
        { name: 'Venture Scouting', desc: { ko: '공개 모집 및 전략적 네트워크를 통한 유망 창업팀 발굴', en: 'Discovering promising teams through open calls and strategic networks' } },
        { name: 'In-Depth Screening', desc: { ko: '서류 검토 및 캐주얼 IR을 통한 비즈니스 모델의 유효성 검증', en: 'Validating BM effectiveness via document reviews and casual IR' } },
        { name: 'Investment Interview', desc: { ko: '예비·최종 투심위를 통한 심층 인터뷰 및 다각적 역량 평가', en: 'In-depth interviews and multifaceted capability assessment via committees' } },
      ],
    },
    {
      label: { ko: 'PHASE 2 ㅣ 구조 설계 및 집행', en: 'PHASE 2 ㅣ STRUCTURING & INVESTMENT' },
      title: { ko: '구조 설계 및 집행', en: 'Structuring & Investment' },
      desc: { ko: '성장에 최적화된 금융 엔진을 장착하고 자본을 투입하는 단계입니다.', en: 'Stage of mounting growth-optimized financial engines and injecting capital.' },
      steps: [
        { name: 'Due Diligence', desc: { ko: '법률·재무 실사 및 평판 조회를 통한 투자 리스크 최소화', en: 'Minimizing risks through legal/financial DD and reputation checks' } },
        { name: 'Term Sheet', desc: { ko: 'TIPS, LIPS 등을 고려한 최적의 금융 구조 설계 및 투자 조건 협의', en: 'Designing optimal financial structures and negotiating terms' } },
        { name: 'Contract & Investment', desc: { ko: '신속하고 투명한 계약 체결 및 투자금 집행', en: 'Rapid and transparent contract signing and fund execution' } },
      ],
    },
    {
      label: { ko: 'PHASE 3 ㅣ 성장 지원 및 회수', en: 'PHASE 3 ㅣ VALUE-UP & EXIT' },
      title: { ko: '성장 지원 및 회수', en: 'Value-up & Exit' },
      desc: { ko: '지표를 증명하고 압도적인 스케일업으로 완주를 지원하는 단계입니다.', en: 'Stage of proving metrics and supporting full-scale growth for exit.' },
      steps: [
        { name: 'Portfolio Management', desc: { ko: "'키메트릭'과 '펀드 보고 시스템'을 활용한 데이터 기반 사후 관리", en: 'Data-driven post-investment management using Keymetric and Fund-Reporting' } },
        { name: 'Accelerating & Follow-on', desc: { ko: '밀착 액셀러레이팅 및 후속 투자(Series A 등) 유치 연계', en: 'Intensive accelerating and linking to follow-on Series A rounds' } },
        { name: 'M&A & IPO', desc: { ko: '기업 가치 극대화 및 성공적인 엑시트를 위한 전문적인 딜 어드바이저리', en: 'Expert deal advisory for value maximization and successful exits' } },
      ],
    },
  ] as { label: L10n; title: L10n; desc: L10n; steps: { name: string; desc: L10n }[] }[],
  termsTitle: { ko: '주요 투자 조건', en: 'Primary Investment Terms' } as L10n,
  termsDesc: { ko: '시장 상황 및 팀의 역량에 따라 유연하게 협의 가능합니다.', en: 'Flexible negotiations possible based on market conditions and team capabilities.' } as L10n,
  terms: [
    {
      title: { ko: '투자 규모', en: 'Ticket Size' },
      desc: { ko: 'LIPS 연계 시 5천만~1억 원, TIPS 연계 시 1억~2억 원 내외의 전략적 자금을 투입하여 초기 성장의 가용 자원을 극대화합니다.', en: 'Maximize early growth resources with 50-100M KRW (LIPS) or 100-200M KRW (TIPS) strategic funds.' },
    },
    {
      title: { ko: '지분 구조', en: 'Equity Struct.' },
      desc: { ko: '일반 지분형 투자는 10~20%, 밀착형 벤처스튜디오 투자는 20~30%의 지분을 확보하여 파트너십 기반의 책임 있는 성장을 지원합니다.', en: 'Standard equity investment (10-20%) or Venture Studio investment (20-30%) for partnership-based growth.' },
    },
    {
      title: { ko: '투자 범위', en: 'Target Scope' },
      desc: { ko: '기업가형 소상공인부터 딥테크 기술 기업까지, 산업 분야와 업력의 제한 없이 혁신의 본질을 가진 모든 팀에 투자합니다.', en: 'Invest in any team with the essence of innovation, from entrepreneurial micro-biz to deep-tech firms.' },
    },
    {
      title: { ko: '우대 사항', en: 'Preferences' },
      desc: { ko: 'TIPS·LIPS 희망팀, 3년 차 미만 초기 기업, 비수도권 소재 및 해외 진출 성과 보유 팀에게는 평가 시 전략적 가점을 부여합니다.', en: 'Strategic points for TIPS/LIPS hopefuls, early-stage (<3yr), non-capital region, or global-entry teams.' },
    },
  ] as Item[],
  mgmtTitle: { ko: '펀드 및 포트폴리오 관리 시스템', en: 'Fund & Portfolio Management System' } as L10n,
  mgmtLead: { ko: '데이터로 입증하는 압도적 투명성과 선제적 리스크 관리 체계', en: 'Overwhelming transparency and proactive risk management system proven by data.' } as L10n,
  mgmt: [
    {
      title: { ko: '펀드 보고 시스템 (for LP)', en: 'Fund Reporting System (for LP)' },
      desc: {
        ko: "더인벤션랩은 강력한 보안 체계를 갖춘 Notion 기반의 '펀드 보고 시스템'을 통해 LP(출자자)에게 운용 현황을 실무 수준으로 투명하게 공개합니다. 이를 통해 LP는 승인된 권한으로 개별 포트폴리오의 실시간 현황과 서류를 상시 확인하며, 투자 자산에 대한 깊은 신뢰와 관리의 편의성을 동시에 확보할 수 있습니다.",
        en: "We transparently disclose operational status to LPs at a practical level through a Notion-based 'Fund Reporting System' with a strong security framework. LPs can check real-time status and documents of individual portfolios with authorized access, ensuring deep trust and convenience.",
      },
    },
    {
      title: { ko: '키메트릭 (for Portfolio)', en: 'Keymetric (for Portfolio)' },
      desc: {
        ko: "자체 개발한 AI 기반 대시보드 '키메트릭(Keymetric)'은 포트폴리오사의 사업·기술·자금 지표를 월 단위로 정밀 분석하여 성장의 흐름을 데이터로 입증합니다. 이를 통해 더인벤션랩은 정성적 판단을 넘어선 선제적 리스크 관리 체계를 가동하고, 각 팀의 핵심 지표에 최적화된 밀착형 성장 지원 솔루션을 제공합니다.",
        en: "Our proprietary AI-based dashboard 'Keymetric' proves growth trends with data by precisely analyzing portfolio companies' business, tech, and financial metrics on a monthly basis. This enables a proactive risk management system beyond qualitative judgment.",
      },
    },
  ] as Item[],
}

export const partnership = {
  eyebrow: 'CORPORATE OPEN INNOVATION PARTNER',
  title: 'Strategic Partnership',
  desc: { ko: '기업의 전략 과제를 검증 가능한 스타트업 협업 구조로 설계하여 실질적인 비즈니스 혁신 성과를 창출합니다.', en: 'Designing strategic challenges into verifiable startup collaboration structures to create tangible business innovation.' } as L10n,
  cta: 'Discuss Partnership',
  introTitle: { ko: '전략적 협업을 통해 성장의 기회를 정의합니다.', en: 'Defining growth opportunities through strategic collaboration' } as L10n,
  introDesc: {
    ko: 'Strategic Partnership팀은 기업의 혁신 과제를 문제 정의부터 근본적 해결까지 연결하고, 인프라와 네트워크 기반의 실행력 있는 솔루션으로 성과를 만듭니다.',
    en: 'The Strategic Partnership team connects corporate innovation tasks from problem definition to fundamental solutions, creating results with actionable infrastructure and network-based solutions.',
  } as L10n,
  stats: [
    { value: '20+', label: { ko: '대기업·중견기업 파트너', en: 'CORPORATE PARTNERS' } },
    { value: '100+', label: { ko: '검토 및 매칭 스타트업', en: 'SCOUTED STARTUPS' } },
    { value: '50+', label: { ko: 'POC·파일럿 프로젝트', en: 'POC PROJECTS' } },
    { value: '4+', label: { ko: '글로벌 연계 프로그램', en: 'GLOBAL PROGRAMS' } },
  ] as { value: string; label: L10n }[],
  launch: [
    { title: { ko: 'Venture Opportunity Structuring' }, desc: { ko: '기업 전략·기술·시장 데이터를 기반으로 기획창업 주제를 정의하고 실행 가능한 사업 단위로 구체화', en: 'Defining venture themes and refining them into executable business units based on strategy and market data' } },
    { title: { ko: 'PoC & Validation Infrastructure' }, desc: { ko: '초기 실증을 위한 PoC 환경, 협업 구조, KPI 설계를 포함한 검증 인프라스트럭처 제공', en: 'Providing validation infrastructure including PoC environments, collaboration structures, and KPI design' } },
    { title: { ko: 'Ecosystem Network Integration' }, desc: { ko: '딜소싱 채널, 파트너 및 멘토 네트워크를 연결해 내부 기획의 실행력 강화', en: 'Strengthening execution by connecting deal sourcing channels and expert networks' } },
    { title: { ko: 'Growth & Scale Infrastructure' }, desc: { ko: '투자 연계, 후속 사업 협업, 글로벌(동남아·베트남 거점) 확장까지 이어지는 성장 인프라스트럭처 설계', en: 'Designing growth infrastructure for investment, follow-on biz, and global expansion' } },
  ] as Item[],
  finedeal: {
    label: 'SOLUTION — FINEDEAL',
    title: { ko: '스타트업 모집/심사 통합 솔루션', en: 'Integrated Recruitment/Review Solution' } as L10n,
    desc: { ko: '모든 형태의 프로그램에서 필요한 딜스카우팅 업무 리소스를 최적화 해주는 효율적인 모집/심사/선발 운영 솔루션입니다.', en: 'An efficient operation solution that optimizes scouting resources for all types of programs.' } as L10n,
  },
  programs: [
    {
      eyebrow: 'CORPORATE VENTURE STUDIO–DRIVEN LAUNCH SUPPORT',
      title: { ko: '기업형 기획창업 사업 환경 지원', en: 'Corporate Venture Studio–Driven Support' },
      subtitle: { ko: '기업의 유휴 자산과 내부 아이디어를 비즈니스로 디자인하는 혁신 엔진', en: 'An innovation engine designing corporate assets into business' },
      desc: {
        ko: '더인벤션랩 Strategic Partnership Team은 기업의 환경과 니즈에 따라 단순 기획 지원이 아니라, 내부 아이디어를 외부 생태계와 연결해 사업으로 구체화하는 실행 인프라와 네트워크를 제공합니다. 기업의 전략적 자산을 활용해 성공 가능성 높은 비즈니스 모델을 도출하고 실제 런칭까지의 전 과정을 전폭적으로 지원합니다.',
        en: 'The Strategic Partnership Team provides execution infrastructure and networks to refine internal ideas into businesses by connecting them with external ecosystems. We fully support the entire process from deriving high-potential business models to actual market launch.',
      },
    },
    {
      eyebrow: 'DEAL SCOUTING PROGRAM',
      title: { ko: '전략 기반 스타트업 발굴 및 분석', en: 'Strategy-based Startup Discovery' },
      subtitle: { ko: '의사결정의 완결성을 높이는 정밀한 딜 소싱 데이터', en: 'Precise deal-sourcing data for high-integrity decision making' },
      desc: {
        ko: '기업의 산업 전략과 기술 수요를 출발점으로, 단기간 내 의사결정이 가능한 수준의 스타트업 풀을 확보할 수 있도록 설계된 프로그램입니다. 기존 공개 정보와 네트워크에 의존하지 않고, 자체 딜소싱 채널인 FINEDEAL과 축적된 데이터베이스를 활용해 전략 적합도가 높은 스타트업을 선별합니다.',
        en: 'A program designed to secure a pool of startups for rapid decision-making based on industry strategy and tech demand.',
      },
      process: [
        { ko: '기업 전략 및 기술 수요 정의', en: 'Strategy & Tech Demand Definition' },
        { ko: '인바운드·아웃바운드 기반 딜스카우팅', en: 'Inbound/Outbound Deal Scouting' },
        { ko: '스타트업 DB 정리 및 정밀 분석', en: 'DB Organization & Deep Analysis' },
        { ko: '기업 검토용 리포트 제공', en: 'Reporting for Corporate Review' },
      ],
      outputs: [
        { ko: '산업·전략 적합 스타트업 DB', en: 'Industry-Fit Startup DB' },
        { ko: '기업별 요약 분석 리포트', en: 'Summary Analysis Reports' },
        { ko: '후속 PoC·투자 검토를 위한 내부 검토 자료', en: 'Internal Review Materials' },
      ],
    },
    {
      eyebrow: 'POC LINKAGE PROGRAM',
      title: { ko: '협업 기반 사업성 검증 및 실증', en: 'Collaboration-based Validation' },
      subtitle: { ko: '기술의 실효성을 입증하고 협업의 가치를 증명하는 실전형 협력', en: 'Practical cooperation proving tech effectiveness and collaboration value' },
      desc: {
        ko: '기업의 신사업 과제와 스타트업의 기술·비즈니스 모델을 실제 협업을 통해 검증합니다. 단발성 테스트에 그치지 않고, 과제 정의부터 성과 측정, 후속 의사결정까지 이어지는 구조로 설계됩니다. 현업 부서의 수요와 실행 환경을 고려해 PoC 범위와 KPI를 구체화하여 실질적인 비즈니스 임팩트를 확인할 수 있도록 지원합니다.',
        en: 'Designed to lead from task definition to performance measurement and follow-on decision making.',
      },
      process: [
        { ko: 'PoC 주제 및 KPI 정의', en: 'Theme & KPI Definition' },
        { ko: '스타트업 모집·선발', en: 'Startup Recruitment & Selection' },
        { ko: '현업 Meet-up 및 과제 구체화', en: 'Meet-ups & Task Refinement' },
        { ko: 'PoC 실행·모니터링', en: 'Execution & Monitoring' },
      ],
      outputs: [
        { ko: 'PoC 결과 리포트', en: 'PoC Result Reports' },
        { ko: '사업화 가능성 검증 자료', en: 'Feasibility Validation Materials' },
        { ko: '후속 투자·사업 연계 인풋', en: 'Investment/Biz Linkage Input' },
      ],
      cases: [
        { label: 'TELCO', projectId: 22 },
        { label: 'FINANCE', projectId: 29 },
      ],
    },
    {
      eyebrow: 'INVESTMENT-LINKED PROGRAM',
      title: { ko: '전략적 투자 연계를 통한 성장 가속', en: 'Strategic Investment Linkage' },
      subtitle: { ko: '오픈이노베이션을 전략적 자산 가치로 전환하는 투자 파이프라인', en: 'Investment pipeline converting OI into strategic asset value' },
      desc: {
        ko: '기업의 중장기 전략과 연계 가능한 스타트업을 선제적으로 발굴하고, 투자 관점에서의 검토와 후속 성장까지 연결합니다. 전문 심사역의 사업 협업 가능성과 재무·성장성을 함께 고려한 선별 과정을 통해, 공동 투자, 후속 투자, 정부 R&D 연계 등 다양한 성장 경로를 유기적으로 설계합니다.',
        en: 'Aiming to expand open innovation into a strategic investment pipeline.',
      },
      process: [
        { ko: '투자 테마 및 기준 정의', en: 'Investment Theme & Criteria' },
        { ko: '스타트업 모집·심사', en: 'Startup Recruitment & Review' },
        { ko: '심층 검토 및 투자 검토', en: 'Deep Dive & Due Diligence' },
        { ko: '투자 및 후속 지원 연계', en: 'Investment & Support Linkage' },
      ],
      outputs: [
        { ko: '투자 검토 대상 기업 Pool', en: 'Investment Review Target Pool' },
        { ko: '기업별 투자 분석 자료', en: 'Company Analysis Materials' },
        { ko: '공동 투자 또는 후속 투자 연계', en: 'Co-investment or Follow-on Linkage' },
      ],
      cases: [
        { label: 'ENERGY', projectId: 25 },
        { label: 'MANUFACTURING', projectId: 37 },
      ],
    },
    {
      eyebrow: 'GLOBAL LINKAGE PROGRAM',
      title: { ko: '해외 시장 검증 및 글로벌 확장 지원', en: 'Global Expansion Support' },
      subtitle: { ko: '국내의 한계를 넘어 글로벌 시장에서의 무한한 확장을 이끄는 관문', en: 'Gateway leading infinite expansion in global markets beyond domestic limits' },
      desc: {
        ko: '단순한 해외 진출 지원이 아닌, 현지 수요 기반의 사업 검증과 실질적인 성과 창출을 중심으로 설계됩니다. 진출 국가별 파트너 네트워크와 프로그램 운영 경험을 바탕으로, 글로벌 PoC, 투자 연계, 후속 오픈이노베이션으로 이어질 수 있는 실질적인 확장 기회를 제공합니다.',
        en: 'Designing based on local demand validation and tangible results.',
      },
      process: [
        { ko: '진출 국가·산업 정의', en: 'Target Nation/Industry' },
        { ko: '국내 사전 진단 및 KPI 설정', en: 'Pre-diagnostic & KPI Setting' },
        { ko: '현지 파트너 연계 프로그램', en: 'Local Partner Linkage' },
        { ko: '비즈매칭·PoC·시장 테스트', en: 'Biz Matching & Testing' },
      ],
      outputs: [
        { ko: '국가별 시장 검증 결과', en: 'Market Validation Results' },
        { ko: '현지 파트너·고객 네트워크', en: 'Local Partner Networks' },
        { ko: '글로벌 PoC·투자 연계 성과', en: 'Global PoC/Investment Results' },
      ],
      cases: [
        { label: 'PUBLIC', projectId: 23 },
        { label: 'SMART CITY', projectId: 33 },
      ],
    },
  ] as Program[],
}

export const globalX = {
  eyebrow: 'NO.1 CROSS-BORDER VENTURE STUDIO',
  title: 'Global Expansion & SEA',
  desc: { ko: '한국에서 가장 먼저 베트남에 진출하여 성공한 국내 유일의 동남아시아 진출 전문 액셀러레이터입니다.', en: 'The only accelerator in Korea with a successful track record of pioneering market entry into Vietnam.' } as L10n,
  cta: 'Go Global with Us',
  introTitle: { ko: '한국 스타트업과 동남아시아 고성장 시장을 연결하는 신뢰받는 글로벌 노드를 구축합니다.', en: 'Building a trusted global node that connects Korean startups to high-growth emerging markets.' } as L10n,
  introDesc: {
    ko: '더인벤션랩은 2019년 호치민 법인 설립 이후, 한국 모기업-베트남 자기업 형태의 지배구조 설계를 지원하며 단순 투자를 넘어 현지 파트너십의 핵심 노드를 구축했습니다.',
    en: 'Since establishing the Ho Chi Minh branch in 2019, we have supported the design of corporate governance for Korean-Vietnam entities, building a core node for local partnerships beyond simple investment.',
  } as L10n,
  stats: [
    { value: '12+', label: { ko: '베트남 직접 투자사 수', en: 'VIETNAM DIRECT INVESTMENTS' } },
    { value: '40%', label: { ko: 'SEA 1호 펀드 IRR', en: 'SEA FUND #1 IRR' } },
    { value: '3+', label: { ko: '글로벌 전략 거점', en: 'GLOBAL STRATEGIC HUBS' } },
    { value: '600+', label: { ko: '현지 스타트업 및 투자자 DB', en: 'LOCAL STARTUP & INVESTOR DB' } },
  ] as { value: string; label: L10n }[],
  startupVn: {
    eyebrow: 'VIETNAM ECOSYSTEM INTELLIGENCE',
    title: 'Startup-VN',
    lead: { ko: '베트남 시장의 기회를 정밀하게 포착하는 마켓 인텔리전스 인프라', en: 'Market intelligence infrastructure capturing Vietnam opportunities precisely' } as L10n,
    desc: {
      ko: '더인벤션랩은 베트남 내 최초로 로컬 스타트업 정보, 현지 투자기관 DB, 그리고 산업별 트렌드 보고서를 정기적으로 발행하는 Startup-VN 서비스를 직접 운영하고 있습니다. 시장의 데이터 기반으로 유망 초기 스타트업을 선별하여 투자 기회를 극대화합니다.',
      en: 'The Invention Lab directly operates Startup-VN, the first service in Vietnam to regularly publish local startup info, investor DB, and industry trend reports.',
    } as L10n,
  },
  leadershipTitle: { ko: '베트남 시장을 선점하는 독보적 크로스보더 거버넌스', en: 'Dominant Cross-border Governance in Vietnam' } as L10n,
  leadershipLead: { ko: '성공적인 베트남 진출의 트랙레코드를 증명해온 독보적 리더십', en: 'Unrivaled leadership proven through a track record of success in Vietnam' } as L10n,
  leadershipDesc: {
    ko: "2019년 호치민 법인 설립 이래, 한국인 파운더가 현지 CTO 및 조직을 셋업하고 '한국 모기업-베트남 자기업' 형태의 지배구조를 구축한 국내 최초이자 유일한 사례를 보유하고 있습니다. 이러한 독보적인 거버넌스 설계 역량은 초기 창업팀의 리스크를 원천적으로 차단하고 글로벌 확장을 가능케 합니다.",
    en: "Since establishing our HCMC office in 2019, we have achieved the first and only domestic cases of establishing 'Korea-Parent/Vietnam-Child' governance models with Korean founders setting up local CTOs and organizations. This unique governance design capability fundamentally blocks risks for early-stage teams and enables seamless global expansion.",
  } as L10n,
  leadership: [
    {
      title: { ko: 'Cross-border Governance & Exit' },
      desc: {
        ko: '7년 전 투자한 SEA 1호 펀드(오케이쎄, 바이비 등)는 주요 포트폴리오사의 성공적인 성장을 발판으로 평균 IRR 40%로 회수에 성공했습니다. 단순 투자를 넘어 지배구조 설계부터 밀착 육성, 그리고 지속적인 후속 투자 참여를 통해 기업 가치 성장의 전 과정을 함께하고 있습니다.',
        en: 'The SEA Fund #1 invested 7 years ago (OKXE, Vibey, etc.) successfully exited with an average IRR of 40% based on the growth of key portfolio companies. We accompany the entire growth process beyond simple investment.',
      },
    },
    {
      title: { ko: '100% Growth & Founder Network' },
      desc: {
        ko: '총 12개 베트남 직접 투자사 모두가 단 한 건의 실패 없이 견고하게 지속 성장 중입니다. 오케이쎄, 고투조이 등 현지 버티컬 플랫폼 1위 스타트업들로 구성된 독보적인 파운더 네트워크를 통해 베트남 내에서 가장 신뢰받는 크로스보더 투자 생태계를 확충하고 있습니다.',
        en: 'All 12 direct investments in Vietnam are growing robustly without a single failure. We are expanding the most trusted cross-border investment ecosystem in Vietnam through an unparalleled founder network.',
      },
    },
  ] as Item[],
  seaPortfolio: [
    { name: 'OKXE', match: '오케이쎄', desc: { ko: '베트남 1위 중고 오토바이 거래 플랫폼', en: "Vietnam's No.1 used motorcycle trading platform" }, country: { ko: '베트남', en: 'Vietnam' } },
    { name: 'Go2Joy', match: '고투조이', desc: { ko: '베트남 1위 시간제 호텔 예약 플랫폼', en: "Vietnam's No.1 hourly hotel booking platform" }, country: { ko: '베트남', en: 'Vietnam' } },
    { name: 'Gomi (ASB Corporation)', match: '고미 코퍼레이션', desc: { ko: "베트남 최대 K-소비재 이커머스 플랫폼 '고미몰' 운영사", en: "Operator of 'Gomi Mall', Vietnam's largest K-Consumer e-commerce platform" }, country: { ko: '베트남', en: 'Vietnam' } },
    { name: 'Vibey', match: '바이비', desc: { ko: '베트남 대상 화장품 성분 분석 및 뷰티 커뮤니티 플랫폼 ‘리뷰티(Reviewty)’ 운영', en: "Operates 'Reviewty', a beauty community & cosmetic analysis platform in Vietnam" }, country: { ko: '베트남', en: 'Vietnam' } },
    { name: 'Beberia', match: '베베리아', desc: { ko: '베트남 육아 정보 및 커뮤니티 1위 플랫폼', en: "Vietnam's No.1 parenting info & community platform" }, country: { ko: '베트남', en: 'Vietnam' } },
    { name: 'Tudy', match: '야호랩', desc: { ko: 'AI와 DX 기술을 통해 베트남 교육시장에 새로운 지평을 여는 No.1 방문 학습 기업', en: "No.1 on-site learning company innovating Vietnam's education market via AI & DX" }, country: { ko: '베트남', en: 'Vietnam' } },
    { name: 'Space T', match: '스페이스 티', desc: { ko: '베트남 No.1 홈퍼니싱 및 인테리어 직거래 플랫폼', en: "Vietnam's No.1 direct home furnishing and interior platform" }, country: { ko: '베트남', en: 'Vietnam' } },
    { name: 'ODA', match: 'ODA.VN', desc: { ko: '베트남 F&B 시장을 혁신하는 B2B 주문 및 공급망 관리 플랫폼', en: "B2B ordering and supply chain management platform for Vietnam's F&B market" }, country: { ko: '베트남', en: 'Vietnam' } },
    { name: 'ReFeed', match: '리피드', desc: { ko: '폐식용유로 ESG·SAF 시장을 혁신하는 글로벌 자원순환 플랫폼', en: 'Global resource circulation platform innovating ESG & SAF markets via waste cooking oil' }, country: { ko: '베트남', en: 'Vietnam' } },
    { name: 'K-Style hub', match: '케이스타일허브', desc: { ko: 'AI 기반 온·오프라인 옴니채널을 통해 K뷰티와 세상을 연결하는 글로벌 허브', en: 'Global hub connecting K-Beauty to the world through AI-powered omni-channels' }, country: { ko: '인도네시아/싱가포르', en: 'Indonesia/Singapore' } },
    { name: '서울언니들 (Seoul Unniedeul)', match: '서울언니들', desc: { ko: '미얀마 대상 K-뷰티 이커머스 플랫폼 ‘스타시크릿 코리아’ 운영 기업', en: "Operates 'Star Secret Korea', a K-Beauty e-commerce platform for Myanmar" }, country: { ko: '미얀마', en: 'Myanmar' } },
    { name: 'DIFISOFT', desc: { ko: '베트남 증권사·투자자를 모두 연결하는 금융 디지털 전환 플랫폼 선두주자', en: 'Leader in financial digital transformation platforms connecting Vietnamese investors' }, country: { ko: '베트남', en: 'Vietnam' } },
    { name: '더케이플랫폼 (The Keii Platform)', match: '더케이플랫폼', desc: { ko: '빅데이터를 활용한 Peer teaching 기반의 스스로 콘텐츠를 만들고 공유하는 학습 플랫폼', en: 'Learning platform where students create and share content based on peer teaching & big data' }, country: { ko: '베트남', en: 'Vietnam' } },
  ] as { name: string; match?: string; desc: L10n; country: L10n }[],
  seaTitle: 'SEA & K-Consumer Strategy',
  seaLead: { ko: '베트남의 성공을 동남아 전역의 성장 동력으로 확장하는 발판', en: 'Expanding Vietnam success to SEA as a growth engine' } as L10n,
  seaDesc: {
    ko: '더인벤션랩은 베트남 시장에서의 독보적인 성공 트랙레코드를 기반으로 유망 초기 스타트업을 선제 발굴하여 동남아시아 전역으로의 시장 확장을 가속화합니다.',
    en: 'Based on our unique track record in Vietnam, we proactively discover early-stage startups and accelerate market expansion across Southeast Asia.',
  } as L10n,
  seaCards: [
    {
      title: { ko: 'PROJECT LIFECYCLE' },
      label: '2025 INCHEON YOUTH GLOBAL LAUNCHPAD',
      desc: {
        ko: '베트남·인도네시아·말레이시아·태국 등 주요 동남아 시장에서 K-소비재 초기 스타트업을 선제적으로 발굴하고, 투자부터 해외진출까지 연계하는 전주기 프로젝트를 가동합니다.',
        en: 'Proactively discovering early-stage K-consumer startups in key Southeast Asian markets including Vietnam, Indonesia, Malaysia, and Thailand, and operating full-lifecycle projects linking investment to global expansion.',
      },
    },
    {
      title: { ko: 'LIPS & GLOBAL SCALE-UP' },
      label: 'LIPS',
      desc: {
        ko: '동남아시아 진출을 희망하는 K-소비재 초기 스타트업에 대해 마켓핏(Market Fit) 테스트를 넘어, LIPS 연계를 통한 초기 투자 유치와 성장 런웨이 확보까지 전주기적으로 지원합니다.',
        en: 'For early-stage K-consumer startups looking to enter Southeast Asia, we provide full-lifecycle support beyond Market-Fit testing, including seed investment via LIPS and securing growth runways.',
      },
    },
  ] as (Item & { label: string })[],
  hubTitle: 'Middle East & North America Gateway',
  hubLead: { ko: '전 세계 거점과 한국 기술 기업을 잇는 신뢰받는 크로스보더 관문', en: 'Trusted cross-border gateway connecting global nodes and Korean tech firms' } as L10n,
  hubDesc: {
    ko: '동남아시아를 넘어 중동과 북미 시장까지 잇는 글로벌 네트워크를 통해 기술 중심 포트폴리오사의 전 세계적 안착을 지원합니다.',
    en: 'We support the global settlement of tech-centric portfolios through a global network spanning beyond SEA to the Middle East and North America.',
  } as L10n,
  hubs: [
    {
      k: 'MIDDLE EAST HUB',
      title: "Saudi Arabia (Wa'ed Ventures)",
      city: 'STRATEGIC HUB: RIYADH',
      desc: {
        ko: "사우디아라비아 아람코(Aramco) 산하 VC인 '와에드벤처스'와 협력하여 당사 딥테크 포트폴리오사의 중동 현지화 및 조인트 벤처 설립을 실질적으로 리드합니다.",
        en: "In collaboration with Wa'ed Ventures (VC under Aramco), we lead the localization and JV establishment of our deep-tech portfolios in the Middle East.",
      } as L10n,
    },
    {
      k: 'NORTH AMERICA HUB',
      title: 'Canada (Y-Space, York Univ.)',
      city: 'STRATEGIC HUB: TORONTO',
      desc: {
        ko: "캐나다 요크대학교 산하 액셀러레이터 'Y-Space'와 협력하여 캐나다 법인 설립 및 이를 발판으로 한 미국 시장 진출 프로그램을 운영합니다.",
        en: 'Operating North American market entry programs in partnership with Y-Space (York University), supporting Canadian entity setup.',
      } as L10n,
    },
  ],
}

export const casesCopy = {
  eyebrow: 'SUCCESS STORIES',
  title: 'Building the\nNext Unicorns',
  desc: {
    ko: '초기 스타트업 투자부터 대기업 사내벤처 스핀오프까지.\n더인벤션랩은 혁신적인 창업가들과 함께 시장의 문제를 해결하고 새로운 가치를 만듭니다.',
    en: 'From early-stage startup investment to corporate venture spin-offs.\nThe Invention Lab works with innovative entrepreneurs to solve market problems and create new value.',
  } as L10n,
  portfolioDesc: { ko: '더인벤션랩이 함께하는 혁신 스타트업 포트폴리오입니다.', en: 'The innovative startup portfolio partnered with The Invention Lab.' } as L10n,
}

export const contactCopy = {
  title: "Let's Build the\nNext Big Thing",
  desc: {
    ko: '더인벤션랩과의 협업, 투자 유치, 혹은 사내벤처 육성에 대해 궁금한 점이 있으신가요? 언제든 문의해 주세요. 혁신의 여정을 함께 시작하겠습니다.',
    en: 'Questions about collaborating with The Invention Lab, raising investment, or incubating corporate ventures? Reach out anytime — let’s start the journey of innovation together.',
  } as L10n,
  getInTouch: 'Get in touch\nwith us',
  getInTouchDesc: {
    ko: '더인벤션랩은 혁신가들의 여정을 지원합니다.\n비즈니스의 시작부터 글로벌 확장까지,\n우리의 전문 역량을 만나보세요.',
    en: 'The Invention Lab supports the journey of innovators.\nFrom the start of a business to global expansion,\nmeet our expertise.',
  } as L10n,
  ctaTitle: 'Start Your Venture Project with Us!',
  ctaDesc: { ko: '더인벤션랩과 함께 비즈니스의 새로운 가능성을 설계하세요.', en: 'Design new possibilities for your business with The Invention Lab.' } as L10n,
}
