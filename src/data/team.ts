import type { L10n } from '../i18n'

export type TeamGroup = {
  key: string
  label: string
  members: string[]
}

export type Member = {
  id: string
  name: L10n
  role: L10n
  unit: string
  intro: string
  education?: string
  career?: string
  introEn?: string
}

export const teamGroups: TeamGroup[] = [
  { key: 'partners', label: 'CEO & VENTURE PARTNERS', members: ['hwang-jk', 'kim-jy', 'kim-sp', 'jung-sc', 'ham-jm', 'ko-yk'] },
  { key: 'scaleup', label: 'VENTURE SCALE-UP & MANAGEMENT', members: ['kim-ms', 'lee-sj', 'jung-iy'] },
  { key: 'mgt', label: 'VENTURE MANAGEMENT', members: ['jung-jw', 'kim-sr'] },
  { key: 'sp', label: 'STRATEGIC PARTNERSHIP', members: ['chung-wy', 'jee-ym'] },
  { key: 'nbd', label: 'NEW BUSINESS DESIGN', members: ['han-sh', 'ko-mj'] },
  { key: 'comm', label: 'COMMUNICATION', members: ['yoo-ym'] },
  { key: 'vn', label: 'VIETNAM BUSINESS', members: ['bui-mq'] },
]

export const members: Member[] = [
  {
    id: 'kim-jy',
    name: { ko: '김진영', en: 'Jin Young Kim' },
    role: { ko: 'CEO', en: 'CEO' },
    unit: 'CEO & VENTURE PARTNERS',
    intro: `김진영 대표는 97년~2004년 까지 소프트뱅크코리아의 미디어 계열사인 소프트뱅크미디어에서 전략기획을 담담하고 소프트뱅크리서치&컨설팅의 Managing Director를 역임하였다. 2003년 유무선 통신/단말 등 IT 시장에 특화된 컨설팅 기관인 로아그룹을 일본 동경에 설립하였고(Co-Founder) 이후 2004년 10월, 로아컨설팅 한국법인을 설립하여 14년 간 국내 굴지의 이동통신사업자 및 단말제조사를 대상으로 BM개발, 신규사업전략 컨설팅을 주도하였다.
2017년 2월, 로아컨설팅 대표이사 사임 및 주식을 모두 후배들에게 양수도하고, 두번째 창업으로 별도 독립법인인 더인벤션랩(구 로아인벤션랩)을 설립하였으며, 대기업/중견그룹사의 변화관리 전략관점에서 DX(Digital Transformation) 및 Open Innovation 프로젝트를 추진하는 동시에, 이들 기업과 함께 오픈 이노베이션 펀드를 결성하여 혁신 기술 기반 스타트업을 발굴-육성-초기투자하는데 집중하고 있다(중기부 등록 액셀러레이터기관, TIPS운영사 및 서울형 TIPS 운영사 라이센스 획득).

더인벤션랩은 ’17년 8월 첫 개인투자조합을 결성한 이래, 30여 개의 개인투자조합 및 상장사 오픈 이노베이션 펀드를 결성하였고 총 AUM은 520억 원(’25년 12월 기준)에 이르고 있다. 지난 8년간 총 200개 이상의 초기 스타트업에 투자하였으며, 대표적인 포트폴리오 기업으로 집닥(시리즈 C, 구주회수완료), 펫닥(구주회수완료, 시리즈 B), 얌테이블(시리즈 B), 홈마스터(중부도시가스 매각완료), 자란다(시리즈 B, 구주매각 완료), 보이스루(시리즈 B, 카카오픽코마 인수, 구주회수완료), 지구인컴퍼니(시리즈 B, 구주회수 완료), 메디히어(시리즈B), 오케이쎄(시리즈 A3), 고투조이(시리즈 A3), 고미(시리즈 B), 카수리(시리즈 A, 구주회수 완료) 등이 있다. 또한 바이오 벤처투자펀드(50억 규모)를 조성하여, 미국 암치료제 파이프라인을 확보한 스타트업에 투자하여 나스닥 IPO에 성공 후, 구주매각하는 데 성공하였다. 김진영 대표는 오랜 기간 동안의 기업전략 컨설팅 경험과 스타트업 초기투자 경험을 동시에 보유하고 있으며, 특히 기존 레거시 기업의 변화관리 전략 분야 중 오픈이노베이션 및 플랫폼 전략의 최고 전문가 중 하나로 손꼽히고 있다. 전문 분야는 다음과 같다.

1. 대기업의 Open Innovation 전략과 실행방법론 : Inbound & Outbound OI 관점
- Inbound OI : 대기업의 내부 OI전담조직 및 애자일 조직과 외부 기술스타트업간의 PoC 및 실험조직 구성, 신규사업모델 개발과 발굴, 공동초기투자 및 사후관리/Capital Gain
- Outbound OI : 대기업 사내벤처/스타트업팀 육성 및 분사 전략, 분사기업에 대한 공동 초기투자
- 레퍼런스(Inbound OI) : SK텔레콤, 현대모비스, KB국민카드, 웰컴금융그룹 등
- 레퍼런스(Outbound OI) : 삼양홀딩스, 코오롱인더스트리, 현대산업개발, 현대자동차그룹, CJ올리브네트웍스 등

2. 대기업/중견그룹사의 DX전략 추진 방법론과 BM Innovation
- 대기업/중견그룹사의 DX전략추진 방법론과 프로세스 설계, Business Model Innovation 프로세스와의 연계 및 구축
- 고객경험기반의 디자인씽킹 메쏘드 개발 및 적용(아마존 Narrative Memo 및 Working Backward Process의 내재화 및 적용 등)
- 레퍼런스 : SK이천포럼(디자인포럼), LG전자 등

3. 디지털 플랫폼 전략수립과 BM Innovation
- 기존 Legacy Player의 디지털 플랫폼 전략수립 방법론 및 추진체계 수립
- 플랫폼 전략 게임을 이용한 Platform Design Process
- 레퍼런스 : 교보생명, SK텔레콤(아카데미), LG인화원(EnDP과정), 한솔홀딩스, 토파스정보통신 등

국내에서는 드물게 모바일 서비스 플랫폼의 양면시장 형성과 진화에 대한 연구로 경영학 박사(Ph.D)를 받았으며(경희대학교 일반대학원 경영학 박사), 저서로 ‘세상을 바꾸는 혁신아이콘 인테러뱅'(2011), ‘버티컬 플랫폼 혁명'(2012), ‘비즈니스 모델 게임'(2013), ‘디지털 트랜스포메이션, 어떻게 할 것인가?(2017)’, ‘아마존은 거꾸로 일한다(김진영, 정우진 공저, 2018)’ 가 있다.`,
    education: `경희대학교 경영학박사(MIS트랙, 플랫폼전략론)
Helsinki School of Economics MBA(경영학석사, e-business전공)
고려대학교 경영학학사`,
    introEn: `Jinyoung Kim served as a strategy planning lead at SoftBank Media, a media affiliate of SoftBank Korea, from 1997 to 2004, and later held the position of Managing Director at SoftBank Research & Consulting.

In 2003, he co-founded RoA Group, a consulting firm specialized in IT markets—including wired and wireless telecommunications and devices—in Tokyo, Japan. Subsequently, in October 2004, he established the Korean subsidiary RoA Consulting, where he led business model development and new business strategy consulting projects for major domestic mobile network operators and device manufacturers for 14 years.

In February 2017, Mr. Kim resigned as CEO of RoA Consulting and transferred all of his shares to junior partners. He then launched his second venture by founding The Invention Lab (formerly RoA Invention Lab) as an independent entity. Since then, he has focused on driving Digital Transformation (DX) and Open Innovation initiatives from a corporate change-management perspective for large enterprises and mid-sized conglomerates. In parallel, he has co-established multiple Open Innovation funds with these corporations to discover, incubate, and make early-stage investments in technology-driven startups.
(The Invention Lab is a government-registered accelerator under Korea’s Ministry of SMEs and Startups, an official TIPS operator, and a Seoul-type TIPS operator.)

Since forming its first personal investment fund in August 2017, The Invention Lab has established over 30 personal investment funds and publicly listed company–backed Open Innovation funds, with total Assets Under Management (AUM) reaching KRW 52 billion as of December 2025. Over the past eight years, the firm has invested in more than 200 early-stage startups.

Notable portfolio companies include Ziptok (Series C, secondary exit completed), Petdoc (Series B, secondary exit completed), YamTable (Series B), HomeMaster (acquired by Jungbu City Gas), Jaranda (Series B, secondary exit completed), Voithru (Series B, acquired by Kakao Piccoma, secondary exit completed), Earth Company (Series B, secondary exit completed), MediHere (Series B), Okayse (Series A3), GoToJoy (Series A3), Gomi (Series B), and CarSuri (Series A, secondary exit completed).

In addition, The Invention Lab established a KRW 5 billion biotech venture fund, investing in a startup that secured a U.S.-based oncology drug pipeline. This investment successfully exited through a NASDAQ IPO, followed by a profitable secondary share sale.

Mr. Kim uniquely combines extensive corporate strategy consulting experience with hands-on early-stage venture investment expertise. He is widely regarded as one of Korea’s leading experts in Open Innovation and platform strategy, particularly in the context of transformation and change management for legacy enterprises.

Areas of Expertise

1. Open Innovation Strategy and Execution for Large Enterprises (Inbound & Outbound Open Innovation)
- Inbound Open Innovation: Structuring internal OI units and agile organizations; designing PoC and experimentation frameworks with external tech startups; developing and discovering new business models; co-investment, post-investment management, and capital gains realization
- Outbound Open Innovation: Corporate venture incubation and spin-off strategies; co-investment in spun-off ventures
- Representative References (Inbound OI): SK Telecom, Hyundai Mobis, KB Kookmin Card, Welcome Financial Group
- Representative References (Outbound OI): Samyang Holdings, Kolon Industries, HDC Group, Hyundai Motor Group, CJ OliveNetworks

2. DX Strategy Methodologies and Business Model Innovation
- DX strategy frameworks and process design for large enterprises and mid-sized groups
- Integration of DX initiatives with Business Model Innovation processes
- Development and application of customer-experience–driven design thinking methodologies, including the internalization and practical application of Amazon’s Narrative Memo and Working Backwards process
- References: SK Icheon Forum (Design Forum), LG Electronics

3. Digital Platform Strategy and Business Model Innovation
- Strategic methodologies for designing and executing digital platform strategies for legacy players
- Platform design processes utilizing platform strategy games
- References: Kyobo Life Insurance, SK Telecom (Academy programs), LG Inhwa Institute (EnDP Program), Hansol Holdings, TOPAS Information & Telecommunication

Mr. Kim earned a Ph.D. in Business Administration from Kyung Hee University with a dissertation on the formation and evolution of two-sided markets in mobile service platforms, a research area still rare in Korea.

His major publications include:
- Interebang: Innovation Icons Changing the World (2011)
- The Vertical Platform Revolution (2012)
- The Business Model Game (2013)
- Digital Transformation: How Should We Do It? (2017)
- Amazon Works Backwards (co-authored with Woojin Jung, 2018)`,
  },
  {
    id: 'kim-sp',
    name: { ko: '김석필', en: 'Seok Pil Kim' },
    role: { ko: '파트너', en: 'Venture Partner' },
    unit: 'CEO & VENTURE PARTNERS',
    intro: `김석필 공동대표겸 벤처파트너는 삼성그룹 싱크탱크 조직인 미래전략그룹에서 다양한 사업전략수립 프로젝트 매니저로 활동하였으며, 이후 삼성전자 유럽본사 구주총괄 사장, 삼성전자 본사 글로벌 마케팅 실장(CMO, 부사장)을 역임한 글로벌 영업-마케팅-전략전문가이다. 삼성전자 영국, 프랑스, 유럽 책임자로 16년 동안 글로벌 마케팅/전략을 총괄하였고, 모바일폰, TV, 컴퓨터 모니터 등 IT, 가전제품 영업경험 및 담당제품 전품목의 시장점유율 1등을 달성한 바있다.

김석필 공동대표/벤처파트는 더인벤션랩이 조성한 ‘베트남진출 신기술 투자조합’의 리드 출자자로 합류하였으며, 한국의 초기 스타트업이 글로벌 시장, 특히 아시아의 센터로 부상하고 있는 베트남 시장진출의 실질적 산파역할을 하고 있다. 현지 기업 네트워크 구축, 대관, 현지 마케팅 전략수립 측면에서 독보적인 역량을 발휘하고 있다. 현재 베트남 및 동남아시아 지역의 컨설팅-투자 등을 전문적으로 수행하는 vivacecne의 CEO를 겸하고 있다.`,
    education: 'HEC(France Grandes Ecole) MBA, 한국 외국어 대학교 졸(불문학, 경제학)',
    career: `Samsung HQ Chief Marketing Officer (CMO) Chief of Mobile Phone Sales/Marketing Head of B2B, CSR, GR
Samsung Europe President & CEO (2010 – 2013)
Samsung France President (2007- 2010)
Samsung UK President (2005 – 2007)
Samsung Group Chairman’s Office Global Strategist Group (1997 – 2004)

2019/20
Vietnam Investment Fund for Startup Companies (No. 1 & 2)

2019 VKBIA
Vietnam Korea Business Investment Association Founding Member

2005-2015 Samsung Electronics
Corporate Marketing Case: Sports Marketing (Chelsea Sponsorship)

2013 Samsung Electronics Europe HQ
Samsung Electronics Europe Turnover: Historic Record 39 Billion USD

2012 Samsung Electronics
Corporate Marketing Case: Sports Marketing (London Olympics)

2007-2010 Samsung Electronics
Culture Marketing (French Gastronomy , Chef Marketing)

1997-2003 Samsung Global Strategy Group
Consulting for Samsung Electronics (Digital Marketing Strategy, Market Driven Strategy, Future Business Road Map Strategy)`,
    introEn: `Seok-pil Kim, the co-CEO and venture partner, worked as a manager for various business strategy projects in Samsung Global Strategy Group, a think tank organization of Samsung. He is a global sales-marketing-strategy expert who served as president of Samsung Electronics’ European Headquarters and head of global marketing at Samsung Electronics (CMO, vice president). Kim managed global marketing / strategy for 16 years as a head of Samsung Electronics’ UK, France and European branches. He has experience in sales of IT and home appliances such as mobile phones, TVs, and computer monitors. The products which he was in charge of sales took biggest share in the market

Seok-pil Kim, the co-CEO/venture partner joined The Invention Lab as a lead investor in ‘investment association for new technology entering Vietnamese market’, and plays an intermediary role enabling early start-ups of Korea to enter the global market, especially the Vietnamese market emerging as the center of Asia. He is demonstrating his competence in building local corporate networks, international government affairs, and establishing local marketing strategies`,
  },
  {
    id: 'hwang-jk',
    name: { ko: '황중권', en: 'Jung Kwan Hwang' },
    role: { ko: '부대표', en: 'Vice President' },
    unit: 'CEO & VENTURE PARTNERS',
    intro: `황중권 부대표는 현대증권 애널리스트를 시작으로 트러스톤자산운용, KB자산운용, KDB대우증권 등 국내 주요 금융기관에서 25년 이상 투자 및 자산운용 분야의 경력을 쌓아온 금융·투자 전문가이다. 현대증권에서 건설 애널리스트로 활동했으며, 트러스톤자산운용과 KB자산운용에서 국민연금 운영, 헤지펀드 및 해외 주식형 펀드를 운용하였다. 이후 KDB대우증권에서 메자닌과 외환·상품선물 등 대체투자를 담당하였다.

리셋파트너스 대표를 맡아 초기기업 투자와 중견기업 IPO 컨설팅을 수행했으며, 비상장사 CFO, CSO, CEO 등을 역임하며 기업 재무와 투자, 성장전략 분야로 전문성을 확장하였다.
헤지펀드 및 벤처캐피탈 전문인력으로서 전통 자산운용부터 대체투자와 벤처투자, M&A·IPO에 이르기까지 폭넓은 실무를 바탕으로 스타트업의 투자·성장전략과 후속투자 및 회수전략 분야에서 전문성을 보유하고 있다.`,
    education: '고려대학교 경영학 학사 졸',
    introEn: `JK Hwang is a distinguished finance and investment expert with over 25 years of experience in the asset management and investment sectors. His career began as an analyst at Hyundai Securities, followed by key roles at major domestic financial institutions, including Truston Asset Management, KB Asset Management, and KDB Daewoo Securities.

During his tenure at Hyundai Securities, he served as a construction analyst. At Truston Asset Management and KB Asset Management, he managed National Pension Service (NPS) funds, hedge funds, and overseas equity funds. Subsequently, at KDB Daewoo Securities, he was responsible for alternative investments, including mezzanine financing, as well as foreign exchange and commodity futures.

As the CEO of Reset Partners, he spearheaded early-stage investments and provided IPO consulting for mid-sized enterprises. He further expanded his expertise in corporate finance, investment, and growth strategy by serving in various executive roles—including CFO, CSO, and CEO—for private companies.

As a specialist in hedge funds and venture capital, Mr. Hwang possesses comprehensive practical expertise ranging from traditional asset management to alternative investments, venture capital, and M&A/IPO advisory. He is highly proficient in formulating investment and growth strategies for startups, as well as managing follow-on funding and exit strategies.`,
  },
  {
    id: 'jung-sc',
    name: { ko: '정상철', en: 'Sang Cheol Jung' },
    role: { ko: '파트너', en: 'Venture Partner' },
    unit: 'CEO & VENTURE PARTNERS',
    intro: '정상철 벤처파트너는 삼성생명 자산운용본부를 총괄하는 전무를 역임하고, 더인벤션랩의 벤처파트너로 활동하고 있다.',
    career: `Samsung Life Senior Advisor to President
Samsung Global Strategy Group General Manager
Samsung Life Manager (Asset portfolio management, financial products investment)

2000-2017 Samsung Life
– Asset liability management strategy (2000)
– Database marketing strategy (2002)
– CRM(Client Relationship Management) strategy for SLI (2004)
– New market entry strategy into Southeast Asian Countries (2005)
– Investment performance evaluation system (2008)
– Masterplan for asset management business for SLI (2014)
– M&A opportunities in global asset management industry (2015/16)
– Searching for M&A targets in alternative investment sector (2017)

2003-2009 Samsung Group
– Establishment of global talents training program (2003)
– Overseas market entry strategy for financial affiliate (2004)
– Venture Business Strategy (2005)
– E-business strategy for Samsung Finance Companies (2005)
– Voice recognition technology (2006)
– Benchmarking for Best Practices in Global Hotel Companies
– New business development in Middle East for Samsung Engineering
– New business opportunity in Cruise business for Samsung Heavy Industry

2006/7 Samsung Security
– Global partnership development in investment banking business (2006)
– CRM strategy for Samsung Security (2007)

2003 Samsung Fire & Marine
– Overseas business development strategy in Vietnam and Thailand`,
    introEn: 'Sang-Cheol Jung, the venture partner, served as an executive director at Samsung Life Insurance. Jung is currently the CEO of Vivacecne and venture partner of The Invention Lab. Jung’s career backgrounds are as follows.',
  },
  {
    id: 'ham-jm',
    name: { ko: '함종민', en: 'Jong Min Ham' },
    role: { ko: '파트너', en: 'Venture Partner' },
    unit: 'CEO & VENTURE PARTNERS',
    intro: '함종민 벤처파트너는 삼성전자, 네이버, LF CTO(부사장) 및 AIRI(인공지능연구원)의 부사장을 역임하였다. 현재는 서울대학교 AI센터 초대 센터장/교수로 재직중이다. 함종민 교수는 더인벤션랩의 베트남진출신기술투자조합 및 4호 조합의 출자자이면서, AI분야 투심위 위원으로 활동 중이다.',
    career: `현, 서울대학교 AI센터 센터장 및 교수
AIRI EVP / Chief Service Officer (CSO)
LG Fashion Executive Vice President of e-Commerce Biz.
Samsung Electronics VP / Service UX & Engineering
Naver VP / Naver Service Officer, Chief of Portal Service Engineering & Technology

2019-Present AIRI
– Developing AI agent service in Insurance and Finance industry
– Developing state of art Vision technology for object and human behavior recognition
– Developing deep learning based motion capture technology for video production industry

2015-2018 LG Fashion
– Developing the mobile commerce system and achieved sales of $ 400 million

2010-2014 Samsung Electronics
– Developing BigData system and dashboard for sales and retail of Samsung
– Design and development of service softwares for smartphone and TV

2006-2010 Naver
– Developing service platform for all NAVER applications
– Designing and developing all portal services of NAVER

2000-2005 Wisepost
– Developing avatar commerce system and providing avatar MSN messenger service with Microsoft`,
    introEn: 'Jong-Min Ham, venture partner, previously worked at Samsung Electronics, Naver and served as the CTO of LF. Ham is currently serving as the director of AIRI (Artificial Intelligence Research Institute) and has been an individual angel investor. Ham is a financier of our 4th Vietnam New Technology Investment Association and a member of Investment Committee. Ham’s career backgrounds are as follows.',
  },
  {
    id: 'ko-yk',
    name: { ko: '고영경', en: 'Young Kyung Ko' },
    role: { ko: '파트너', en: 'Venture Partner' },
    unit: 'CEO & VENTURE PARTNERS',
    intro: '고영경 박사는 말레이시아의 툰쿠 압둘 라흐만 대학(Universiti Tunku Abdul Rahman)과 유니타 인터내셔널 대학(UNITAR International University) 경영학과 조교수를 역임했으며, 말레이시아 교육부와 거버넌스 연구소 등 현지 기관과 여러 대기업 해외 프로젝트에 참여한 바 있다. 한국과 아세안의 자본시장과 대기업, 스타트업을 연구하며 《Journal of Banking and Finance》 등 국내외 저널에 논문을 게재한 바 있으며, 《더벨》의 ‘고영경의 Frontier Markets View’, 《주간경향》의 ‘아세안 기업열전’ 칼럼을 비롯해 여러 미디어와 강연을 통해 아세안 비즈니스 환경과 기업 사례 등을 소개하고 있다. 「삼프로TV」에서 ‘고영경 박사의 말랑말랑 기업사’를 통해 세계 기업의 역사를 전달 중이기도 하다.',
    education: `연세대학교 사회학과 학사, 동대학 지역학협동과정 석사(동남아시아지역 전공)
고려대학교 경영학 박사(재무전공)`,
    career: `서울대학교 사회과학연구원 선임연구원
말레이시아 썬웨이 대학교 경영대학(Sunway University Business School) 겸임교수

현 고려대학교 아세아문제연구원 아세안센터 연구교수, Asia Biz Lab CEO`,
    introEn: 'Dr. Ko has served as an assistant professor in the Department of Business Administration (University Tunku Abdul Rahman) and UNITAR International University and has participated in overseas projects with local institutions such as the Malaysian Ministry of Education and the Institute of Governance. Her research on capital markets, conglomerates, and startups in Korea and ASEAN has been published in domestic and international journals such as the Journal of Banking and Finance, and she has introduced the ASEAN business environment and corporate cases through various media and lectures, including the “Frontier Markets View” column in “The Bell” and the “ASEAN Corporate Heat War” column in “The Weekly Tendency”. She has also been delivering global corporate history through ‘Dr. Ko’s Malang Malang Corporate History’ on Sampro TV.',
  },
  {
    id: 'yoo-ym',
    name: { ko: '유예미', en: 'Ye Mi Yoo' },
    role: { ko: '팀장', en: 'Team Leader' },
    unit: 'Communication',
    intro: '유예미 팀장은 한국국제협력단(코이카) 홍보실 인턴기자시절 코이카의 ‘혁신적 기술 프로그램(Creative Technology Solution,CTS)’ 사업을 취재하면서 예비 창업가, 스타트업 관계자를 만나며 스타트업 생태계에 많은 관심을 가지게 되었다. 이어 스타트업 하비풀 매니저로 일하며 초기 스타트업의 성장과정을 경험했다. 이러한 스타트업 경험을 토대로 현재 더인벤션랩에 합류하여 다양한 OI 프로젝트 지원, 사내 행정관리 업무를 담당하고 있다.',
    education: '동아대학교 신문방송학 학사 졸',
    introEn: 'Yemi Yoo supports management in OI Advisory Group of The Invention Lab. Yoo became interested in startup ecosystem getting to know entrepreneurs and people from the ecosystem while covering KOICA’s ‘CTS (Creative Technology Solution)’ as an intern journalist of KOICA PR Department. Afterwards, Yoo worked as a manager of Hobbyful, managing ordering, production, and CS and experiencing growth of an early stage startup. With these experiences, Yoo is supporting OI Projects and management at The Invention Lab.',
  },
  {
    id: 'han-sh',
    name: { ko: '한승희', en: 'Seung Hee Han' },
    role: { ko: '이사', en: 'Director' },
    unit: 'New Business Design',
    intro: `한승희 이사는 디자인과 기획, 스타트업을 가장 잘 이해하고 있는 전문가이다.
브랜딩 및 디자인 씽킹에 대한 관심을 기반으로 브랜딩 에이전시와 UX 디자인 스타트업에서 다수의 브랜딩 컨설팅 및 디자인 프로젝트를 진행하였다. 이후 창업 생태계에 몸담아 경기콘텐츠진흥원에서 창업 기업 발굴 및 코칭, 창업 센터 개소, 프로그램 기획 운영에 참여하였고, 국내 최대 스타트업 미디어인 플래텀에서 국내 스타트업 투자 및 중국 IT 트렌드 보고서를 총괄하였다.

더인벤션랩에 합류한 후, 오픈 이노베이션 프로세스 설계 및 커뮤니케이션 도구 개발, 디자인씽킹 프로그램 기획 운영 등 기업 신사업 및 사내벤처 조직에 최적화된 방법론 발굴 및 프로젝트 운영을 총괄하고 있다.

아마존의 이노베이션 방법론인 Narrative Memo 및 Working Backward 가이드북 및 워크시트 개발, 더인벤션랩의 대기업 사내벤처/스타트업 용 MVP Tool Kit인 ‘인벤션킷(Invention Kit)’ 등의 기획, 디자인, 개발을 주도하였다. 또한 더인벤션랩에서 자체 개발한 대기업/중견기업 사내벤처/혁신TF 조직 대상의 Business Transformation 솔루션(SaaS)인 인벤션덱의 기획 및 개발을 주도하였다.`,
    education: '홍익대학교 시각디자인 학사 졸',
    introEn: `Seunghee Han, the team leader, is an expert who understands design, planning and start-ups best.
Han has worked on a number of branding consulting and design projects at branding agencies and UX design start-ups, based on her interest in branding and design thinking. Since then, she has participated in the start-up ecosystem and participated in the discovery and coaching of start-ups, opening of a start-up center, program planning operation and managed domestic start-up investment and Chinese IT trend report at Platum, the largest start-up media in Korea.

Her works include <Domestic Startup Investment Trend Report(2015, 2016, 2017)>, <China BAT Investment Trend Report(2014-5, 2016, 2017)>, <Platum China Report(New distribution, smart car, VR, etc.)>.

After joining The Invention Lab, Han leads the designing of Open Innovation Process and developing communication tools, as well as the design and operation of design thinking programs.`,
  },
  {
    id: 'ko-mj',
    name: { ko: '고민지', en: 'Min Jee Ko' },
    role: { ko: '프로', en: 'Professional' },
    unit: 'New Business Design',
    intro: `고민지 프로는 연세대학교 건설환경공학과 측량 및 지형공간정보 내의 공간데이터사이언스를 전공하며 스마트 시티, 빅데이터, 인공지능과 관련된 연구를 진행하였다. 진행한 프로젝트는 ‘도시•보건•교육 리질리언스를 위한 공간 데이터 분석’이 있으며, 작성한 논문은 ‘이동통신 기반 기종점 통행량 데이터를 활용한 도시 내 젠더 공간 분석’, ‘지리가중회귀분석을 이용한 대기오염과 전국 질병률 간의 관계 분석’, ‘딥러닝 기법을 활용한 서울시 유동인구 예측에 관한 연구’가 있다.
이후에는 서울기술연구원의 조사원 업무를 수행하며 다양한 정책 제언을 위한 리서치, 생성형 AI 서비스를 활용한 데이터 생성 프로젝트를 진행한 바 있다.

현재는 더인벤션랩 사내벤처 & 컴퍼니빌딩팀에 조인하여, KT 신사업 아이디어 해커톤 프로그램 운영하였고 기타 사내벤처 및 신사업 TF 육성 프로젝트 참여 및 해커톤 프로그램 기획, 국내외 industry 관련 리서치를 진행하고 있다.`,
    education: '연세대학교 건설환경공학 석사 졸',
    introEn: `Minjee Ko majored in spatial data science within surveying and geospatial information at Yonsei University’s Department of Construction and Environment and conducted research related to smart cities, big data, and artificial intelligence. Her projects include ‘Spatial data analysis for urban, health, and education resilience’, and her papers include ‘Gender spatial analysis in cities using mobile communication-based origin point traffic data’, ‘Analysis of the relationship between air pollution and national disease rates using geographical multiple regression analysis’, and ‘A study on predicting Seoul’s floating population using deep learning techniques’.
Afterward, she worked as a researcher at the Seoul Institute of Technology, where she conducted research for various policy proposals and data generation projects using generative AI services.

Currently, she joined the Venture & Company Building Team at The Invention Lab, where she ran the KT New Business Idea Hackathon program, participated in other internal venture and new business TF fostering projects, planned hackathon programs, and conducted research on domestic and international industries.`,
  },
  {
    id: 'chung-wy',
    name: { ko: '정운영', en: 'Woon Young Chung' },
    role: { ko: '이사', en: 'Director' },
    unit: 'Strategic Partnership',
    intro: `정운영 이사는 제조, F&B 경험 뿐만 아니라 IT 분야에서 다수의 스타트업 창업 및 엑싯과 실패를 경험한 창업가 출신이다.

글로벌 Wi-Fi 마케팅 플랫폼 Waffle 서비스의 COO로 스타트업을 시작했다. 국내 통신3사를 포함한 대기업, 언론사 등 국내 70여개 프로젝트 뿐만 아니라 미국, 일본, 베트남 등 해외 현지 파트너 발굴 및 계약체결을 주도하였다. 이어서 미국과 국내에서 투자를 유치하며 글로벌 Wi-Fi 공유 앱 서비스와 라이브 푸드 커머스 플랫폼을 서비스하는 스타트업을 공동창업하였으나 실패의 아픔도 겪었다. 이후 H그룹 계열의 블록체인 자회사의 전략기획실장을 거쳐 웹3 및 블록체인 기반의 게임사에서 COO로서 경영 전반의 업무를 담당하였다.

뿐만 아니라 기업, 공공기관 및 대학교 등에서 코칭, 심사, 멘토링 등에 참여하며 스타트업의 생리와 환경을 가장 잘 이해하는 전문가로서 성장하고 있다.

이와 같은 창업 및 피봇, 국내외 투자유치/정부지원사업 성공 경험과 b2b, b2c 등의 다양한 팀 프로젝트 진행 경험을 바탕으로 현재는 더인벤션랩의 OI 매니지먼트팀에 합류하여 OI 프로그램 서비스 개선 및 운영 / 관리를 리드하고 있다.`,
    education: '건국대학교 국제무역학 학사 졸',
    introEn: `Woonyoung is an entrepreneur with manufacturing and F&B experience as well as IT experience, having launched, exited, and failed multiple startups.

He started his startup as COO of Waffle service, a global Wi-Fi marketing platform. He has led more than 70 projects in Korea, including large enterprises including the three major telecommunications companies and media companies, as well as overseas local partners in the U.S., Japan, and Vietnam. He then co-founded a startup that provided a global Wi-Fi sharing app service and a live food commerce platform that attracted investments in the U.S. and Korea, but failed. Afterward, he served as the head of strategic planning for a blockchain subsidiary of H Group and was in charge of overall management as COO of a web3 and blockchain-based game company.

In addition, he has participated in coaching, judging, and mentoring at companies, public institutions, and universities, and is growing as an expert who best understands the physiology and environment of startups.

Based on his experience in successful startups, pivots, domestic and overseas investment and government support projects, and various team projects such as B2B and B2C, he joined the OI management team of The Invention Lab and is currently leading the OI program service improvement and operation/management.`,
  },
  {
    id: 'jee-ym',
    name: { ko: '지용민', en: 'Yong Min Jee' },
    role: { ko: '팀장', en: 'Team Leader' },
    unit: 'Strategic Partnership',
    intro: `지용민 팀장은 엔피프틴파트너스에서 국내 대·중견기업과 스타트업 간 사업 협력 사례를 구축하는 오픈이노베이션과 사내벤처 프로그램 PL를 역임하였다.
주요 프로젝트로 NH농협은행, 삼성물산, 분당서울대학병원 등의 오픈이노베이션과 삼성전기, 한화시스템, 한화손해보험 등의 사내벤처 프로그램을 다수 진행하였으며, 다양한 대·중견기업 실무진들과 함께 디지털, NEW TECH, AI, 우주항공, 플랫폼 등의 혁신 기술을 보유한 스타트업을 발굴 및 연계하는 업무의 기획 및 운영업무를 담당하였다.

엔피프틴파트너스 근무 이전에는 모바일 세탁 ‘런드리고’를 운영하는 의식주컴퍼니 초기 SCM팀의 일원으로 초기 수거/배송 시스템 구축 기획 경험을 보유하고 있으며, 이후 생활용품 제조업 등 두 차례 연쇄 창업을 통해 창업자로써 경험을 쌓았다.
현재 더인벤션랩 오픈이노베이션팀에 조인하면서, 오픈이노베이션 프로그램 운영 및 관리(삼천리 S-Together 운영, 파인딜), 여성벤처 스타트업 육성 프로젝트, TIPS 업무를 담당하고 있다.`,
    education: '경기대학교 스포츠경영학 졸',
    introEn: `Jee Yong-min served as a PL for open innovation and internal venture programs that build business cooperation cases between large and medium-sized enterprises and startups in Korea at N15 Partners.

His major projects include open innovation with NH NH Bank, Samsung C&T, and Seoul National University Bundang Hospital, and internal venture programs with Samsung Electro-Mechanics, Hanwha Systems, and Hanwha Insurance, and he was in charge of planning and operating the business of discovering and connecting startups with innovative technologies such as digital, new tech, AI, aerospace, and platforms with various large and medium-sized companies.

He was a member of the early SCM team of a company operating mobile laundry ‘Laundrygo’ and has experience in planning the initial collection/delivery system construction, and later gained experience as an entrepreneur through serial startups of household goods manufacturing and e-book subscription services.

Currently, he joined the Open Innovation Team at The Invention Lab, where he is in charge of operating and managing open innovation programs (Samcheonri S-Together, Fine Deal), female venture startup incubation projects, and TIPS.`,
  },
  {
    id: 'jung-jw',
    name: { ko: '정재원', en: 'Jae Won Jung' },
    role: { ko: '선임', en: 'Senior Professional' },
    unit: 'Venture Management',
    intro: `정재원 선임는 대학에서 경영학을 전공하였다.
투자라는 분야에 관심이 많아 투자자산운용사 자격증을 취득하였고, 자산운용사에서 인턴 경험을 쌓으면서 투자에 대한 이해도를 높였다.
운용지원팀에서 백오피스 업무와 투자의 전반적인 프로세스에 관한 경험을 확보하였고, 증권보고서와 운용보고서 등을 작성하면서 자산운용 업무에 대한 경험을 쌓았다. 이후 더인벤션랩 투자분석관리팀에 합류하여, 투자조합 결성, 스타트업 투자집행, 사후관리에 필요한 다양한 행정 및 경영지원 업무를 담당하고 있다.`,
    education: '강원대학교 경영학 졸',
    introEn: `JaeWon Jung majored in business administration in college.
He was interested in the field of investment, so he obtained a license as an investment asset manager and gained a better understanding of investment while interning at an asset management company.
He gained experience in back-office work and the overall investment process at the investment support team, and gained experience in asset management work by preparing securities reports and investment reports. Since then, he has joined the Investment Analysis Management Team at The Invention Lab, where he is in charge of various administrative and management support tasks required for the formation of investment associations, execution of startup investments, and post-management.`,
  },
  {
    id: 'kim-ms',
    name: { ko: '김민수', en: 'Min Su Kim' },
    role: { ko: '이사', en: 'Director' },
    unit: 'Venture Scale-up',
    intro: `김민수 이사는 미디어 스타트업(글랜스 TV)에서 콘텐츠 제휴 사업 및 플랫폼 개발 프로젝트 PM을 담당하였다. 외교부의 <4차 산업혁명에 따른 문화외교 추진 전략> 연구, 과학기술정보통신부의 <OTT 산업 발전 연구반>에 민간 전문가로 참여한 바가 있다.

더인벤션랩에 합류한 이후, 신규 DX 및 OI 관련 신규서비스 사업개발 담당, 하나금융TI, LG인화원 LG-MBA DX 과정 PL 등 다양한 대기업과의 Open Innovation Program 기획/운영업무를 맡고 있다. 또한 플랫폼 기획역량을 활용하여, 더인벤션랩의 대기업/중견그룹사 애자일 조직(사내벤처/혁신TF 조직 대상) 용 Business Idea Creation Tool(SaaS)인 인벤션덱(Invention Deck)의 기획-운영을 주도하였으며, 미국 실리콘밸리에 본사를 둔 리얼타임 화이트보드 솔루션인 MIRO의 국내 독점 리셀러 계약 체결 및 운영/관리를 리드하였다.
현재 국보디자인, 보령제약과 공동으로 조성한 투자합자조합, 펫케어초기스타트업 투자조합, 디지털이노베이션 투자조합의 핵심운용역으로 활동 중이다.

전문투자분야 : 디지털헬스케어 및 AI, SaaS 분야`,
    education: '한국외국어대학교 경영학 학사 졸',
    introEn: 'Minsu Kim (Director) developed his professional career in the field of business development while working at media startups as project manager for media syndication and platform development projects. Also, he provided consultation to the Ministry of Foreign Affairs and the Ministry of Science and ICT. After joining The Invention Lab, he has been focusing on planning and operating Open Innovation programs.',
  },
  {
    id: 'lee-sj',
    name: { ko: '이상진', en: 'Sang Jin Lee' },
    role: { ko: '프로', en: 'Professional' },
    unit: 'Venture Scale-up',
    intro: `이상진 프로는 예술가들의 전시 경력 단절 문제를 해결하고자, 로컬 상인들과의 협업을 통해 전시를 기획·운영하는 스타트업을 2년간 창업·운영한 경험이 있다. 20회 이상의 전시 데이터를 기반으로 로컬 아트페어 모델을 수립했으며, 천안시 ‘ㅊㅊㅊ아트페어’, 노원구 경춘선숲길 ‘마르티 아트페어’를 개최하며 지역 상인회, 대학, 공공기관 등 다양한 이해관계자와 예술가들이 상생할 수 있는 사업 구조를 만들어갔다.

또한 노원구에서 ‘마르티 갤러리카페’라는 전시 공간 브랜드를 론칭하고, 예술가들에게 무료 전시 참여 기회를 제공해왔다. 지역 청년 예술인의 전시 활동과 작품 판매 기회를 넓히기 위해 노원문화재단 및 노원문화원의 전시 용역사로도 활동했다. 예비창업패키지(우수), SK행복나눔재단 소셜 비즈니스 데모데이 수상(3회) 등을 통해 자금 조달과 창업 생태계 전반에 대한 실무 경험을 쌓았다.

현재는 더인벤션랩에 합류해 LIPS 및 TIPS 운영을 담당하고 있다.`,
    education: '서울과학기술대학교 경영학 학사 졸',
    introEn: `Sangjin Lee has experience founding and operating a startup for two years, aimed at addressing the challenges artists face in maintaining continuous exhibition careers. By collaborating with local merchants, the startup organized and managed art exhibitions, developing a localized art fair model based on data from over 20 exhibitions. Notable events include the “Ch-Ch-Ch Art Fair” in Cheonan and the “Marti Art Fair” along the Gyeongchun Line Forest Trail in Nowon-gu. These initiatives created a sustainable business structure that fostered collaboration among local business associations, universities, public institutions, and artists.

He also launched the “Marti Gallery Café” exhibition space brand in Nowon-gu, offering artists free opportunities to showcase their work. To further support young local artists in their exhibition and sales activities, he worked as an exhibition contractor for the Nowon Foundation for Arts and Culture and the Nowon Cultural Center. Through programs such as the Pre-Startup Package (recognized for excellence) and multiple awards from the SK Happiness Foundation’s Social Business Demo Day (three-time winner), he gained practical experience in fundraising and navigating the startup ecosystem.

Currently, he is part of The Invention Lab, where he is involved in the operation of the LIPS and TIPS programs.`,
  },
  {
    id: 'bui-mq',
    name: { ko: 'Minh Quan Bui', en: 'Minh Quan Bui' },
    role: { ko: 'Research Analyst', en: 'Research Analyst' },
    unit: 'Vietnam Business',
    intro: `Quan은 베트남의 빠르게 성장하는 혁신 생태계를 기반으로 시장 조사, 국경 간 비즈니스 개발, 전략 분석 분야에서 폭넓은 경험을 보유하고 있다.

Quan은 전문 서비스 기업과 시장 정보 컨설팅 회사에서 근무하며 전문성을 확장했다. 해당 역할에서 다양한 산업 조사를 수행하고, 국제 기업의 글로벌 확장 전략을 지원했으며, 그린 파이낸스, 리테일, 특화된 고성장 시장과 같은 신흥 산업에 대한 인사이트를 제공했다. 또한 해외 투자자와 베트남 스타트업과 긴밀히 협력하며 정보 격차를 해소하고 국경을 넘는 비즈니스 연결을 촉진하는 데 기여했다.

현재 Junior Research Analyst로서 Quan은 startup-vn.com에서 스타트업 및 투자자 데이터베이스 구축을 지원하고, 초기 단계 투자 기회를 발굴하기 위한 심층 산업 분석을 수행하고 있다. 그는 베트남 현지 스타트업 생태계에서 활동 범위를 넓혀가고 있으며, 신흥 창업가들을 지원하고 베트남 혁신 환경을 강화하는 데 기여하고자 노력하고 있다.`,
    education: '호치민시 외국무역대학교(Foreign Trade University) 국제경제학 학사 졸',
    introEn: `Quan’s experience spans market research, cross-border business development, and strategic analysis within Vietnam’s fast-growing innovation ecosystem.
His early exposure to the business and innovation landscape was shaped by his strong academic research background at university, where he contributed to school-led research initiatives and presented papers at major student conferences. These activities strengthened his analytical rigor and deepened his interest in emerging industries.
Quan later strengthened his expertise through roles in professional services firms and market intelligence consultancies. In these positions, he conducted extensive sector research, supported international clients in global expansion, and delivered insights into emerging industries such as green finance, retail, and niche high-growth markets. He also worked closely with foreign investors and Vietnamese startups, helping bridge information gaps and facilitating business connections across borders.
Currently, as a Junior Research Analyst, Quan contributes to startup-vn.com, where he supports the development of comprehensive startup and investor databases and conducts in-depth sector research to help identify emerging areas of opportunity for early-stage investment. He is actively expanding his involvement in the local startup ecosystem and is dedicated to fostering stronger connections that support Vietnam’s emerging founders and innovation landscape.`,
  },
  {
    id: 'kim-sr',
    name: { ko: '김수라', en: 'Sura Kim' },
    role: { ko: '프로', en: 'Professional' },
    unit: 'Venture Management',
    intro: `김수라 프로는 대학에서 경영학을 복수전공하고, 국민대학교 글로벌창업벤처대학원에서 창업학 석사 학위를 취득하며 스타트업 생태계에 대한 전문성을 다졌다.
이후 대학교 교직원으로 근무하며 조직 운영의 기반이 되는 예산 및 행정 실무 경험을 쌓았으며, 액셀러레이터사에서 총 3년 8개월간 스타트업 발굴 및 육성 업무를 수행하였다.
초기 창업 생태계에 대한 깊은 이해를 바탕으로, 현재 더인벤션랩 투자관리팀에서 투자조합 결성, 스타트업 투자 집행, 사후관리 등 투자 조직이 안정적인 성과를 낼 수 있도록 뒷받침하는 업무를 담당하고 있다.`,
    education: '국민대학교 글로벌창업벤처대학원 창업학 석사 졸',
    introEn: `Sura Kim double-majored in Business Administration during her undergraduate studies and earned a Master's degree in Entrepreneurship from Kookmin University's Graduate School of Global Entrepreneurship, where she solidified her expertise in the startup ecosystem.

She later worked as a university administrative staff member, gaining practical experience in budgeting and administration—the essential foundations of organizational operations. Following this, she spent 3 years and 8 months at an accelerator, where she was responsible for discovering and nurturing startups.

Leveraging her deep understanding of the early-stage startup ecosystem, she currently works in the Investment Management Team at The Invention Lab. In this role, she supports the investment organization in achieving stable performance by managing key tasks such as forming investment funds, executing startup investments, and handling post-investment management.`,
  },
  {
    id: 'jung-iy',
    name: { ko: '정일영', en: 'Il Young Jung' },
    role: { ko: '프로', en: 'Professional' },
    unit: 'Venture Scale-up',
    intro: `정일영 프로는 민간 액셀러레이터 인턴으로 액셀러레이팅 사업 기획 및 운영, 시장·기업 리서치를 수행하며 스타트업 성장 지원 실무 경험을 축적하였다.

이후 부산창조경제혁신센터에서 초기창업패키지 전담 인력으로 근무하며 창업기업 관리, 사업비 집행 검토, 프로그램 기획·운영 및 투자유치 연계 업무를 수행하였다. 특히 마케팅, 시장검증, 투자유치 프로그램 등을 총괄 운영하며 기업의 시장 검증과 성장 기회 창출을 지원해왔고, 싱가포르 글로벌 네트워킹 프로그램 및 투자자 매칭 프로그램 운영을 통해 기업의 스케일업 성과를 도출한 경험을 보유하고 있다.

현재 더인벤션랩 벤처스케일업팀에서 투자, TIPS/LIPS 등 정책자금 연계를 담당하며 스타트업의 기술사업화와 성장 지원 업무를 수행하고 있다.`,
    education: '부산대학교 경제학과 학사',
    introEn: `Il Young Jung accumulated practical experience in supporting startup growth during his internship at a private accelerator, where he participated in planning and operating accelerating programs, as well as conducting market and corporate research.

He later worked at the Busan Center for Creative Economy & Innovation as a dedicated staff member for the Early-stage Startup Package Program. In this role, he managed startup companies, reviewed business budget execution, and handled program planning, operation, and investment linkage. In particular, he successfully supported startups' market validation and growth opportunities by leading programs focused on marketing, market validation, and investment attraction. Furthermore, he has a proven track record of driving scale-up performance for enterprises by operating Singapore global networking and investor-matching programs.

Currently, he is a member of the Venture Scale-up Team at The Invention Lab, where he supports startups' technology commercialization and growth by managing investments and leveraging policy funds such as TIPS and LIPS.`,
  },
]

export const memberById = (id: string) => members.find((m) => m.id === id)
