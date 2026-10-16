import { Link } from 'react-router-dom'
import { useLang } from '../../i18n'
import { Eyebrow, ExternalIcon, MaybeLink, PageHero, Reveal, SectionHead, Stats } from '../../components/ui'
import { companies } from '../../data/portfolio'
import { site } from '../../data/site'

type SeaCo = { name: string; match?: string; ko: string; en: string; country: string; countryEn: string }

const seaPortfolio: SeaCo[] = [
  { name: 'OKXE', match: '오케이쎄', ko: '베트남 1위 중고 오토바이 거래 플랫폼', en: "Vietnam's No.1 used motorcycle trading platform", country: '베트남', countryEn: 'Vietnam' },
  { name: 'Go2Joy', match: '고투조이', ko: '베트남 1위 시간제 호텔 예약 플랫폼', en: "Vietnam's No.1 hourly hotel booking platform", country: '베트남', countryEn: 'Vietnam' },
  {
    name: 'Gomi (ASB Corporation)',
    match: '고미 코퍼레이션',
    ko: "베트남 최대 K-소비재 이커머스 플랫폼 '고미몰' 운영사",
    en: "Operator of 'Gomi Mall', Vietnam's largest K-Consumer e-commerce platform",
    country: '베트남',
    countryEn: 'Vietnam',
  },
  {
    name: 'Vibey',
    match: '바이비',
    ko: '베트남 대상 화장품 성분 분석 및 뷰티 커뮤니티 플랫폼 ‘리뷰티(Reviewty)’ 운영',
    en: "Operates 'Reviewty', a beauty community & cosmetic analysis platform in Vietnam",
    country: '베트남',
    countryEn: 'Vietnam',
  },
  { name: 'Beberia', match: '베베리아', ko: '베트남 육아 정보 및 커뮤니티 1위 플랫폼', en: "Vietnam's No.1 parenting info & community platform", country: '베트남', countryEn: 'Vietnam' },
  {
    name: 'Tudy',
    match: '야호랩',
    ko: 'AI와 DX 기술을 통해 베트남 교육시장에 새로운 지평을 여는 No.1 방문 학습 기업',
    en: "No.1 on-site learning company innovating Vietnam's education market via AI & DX",
    country: '베트남',
    countryEn: 'Vietnam',
  },
  { name: 'Space T', match: '스페이스 티', ko: '베트남 No.1 홈퍼니싱 및 인테리어 직거래 플랫폼', en: "Vietnam's No.1 direct home furnishing and interior platform", country: '베트남', countryEn: 'Vietnam' },
  { name: 'ODA', match: 'ODA.VN', ko: '베트남 F&B 시장을 혁신하는 B2B 주문 및 공급망 관리 플랫폼', en: "B2B ordering and supply chain management platform for Vietnam's F&B market", country: '베트남', countryEn: 'Vietnam' },
  { name: 'ReFeed', match: '리피드', ko: '폐식용유로 ESG·SAF 시장을 혁신하는 글로벌 자원순환 플랫폼', en: 'Global resource circulation platform innovating ESG & SAF markets via waste cooking oil', country: '베트남', countryEn: 'Vietnam' },
  {
    name: 'K-Style hub',
    match: '케이스타일허브',
    ko: 'AI 기반 온·오프라인 옴니채널을 통해 K뷰티와 세상을 연결하는 글로벌 허브',
    en: 'Global hub connecting K-Beauty to the world through AI-powered omni-channels',
    country: '인도네시아/싱가포르',
    countryEn: 'Indonesia/Singapore',
  },
  {
    name: '서울언니들 (Seoul Unniedeul)',
    match: '서울언니들',
    ko: '미얀마 대상 K-뷰티 이커머스 플랫폼 ‘스타시크릿 코리아’ 운영 기업',
    en: "Operates 'Star Secret Korea', a K-Beauty e-commerce platform for Myanmar",
    country: '미얀마',
    countryEn: 'Myanmar',
  },
  { name: 'DIFISOFT', ko: '베트남 증권사·투자자를 모두 연결하는 금융 디지털 전환 플랫폼 선두주자', en: 'Leader in financial digital transformation platforms connecting Vietnamese investors', country: '베트남', countryEn: 'Vietnam' },
  {
    name: '더케이플랫폼 (The Keii Platform)',
    match: '더케이플랫폼',
    ko: '빅데이터를 활용한 Peer teaching 기반의 스스로 콘텐츠를 만들고 공유하는 학습 플랫폼',
    en: 'Learning platform where students create and share content based on peer teaching & big data',
    country: '베트남',
    countryEn: 'Vietnam',
  },
]

export default function GlobalExpansion() {
  const { t, lang } = useLang()

  return (
    <>
      <PageHero
        variant="green"
        eyebrow="NO.1 CROSS-BORDER VENTURE STUDIO"
        title="Global Expansion & SEA"
        desc={t(
          '한국에서 가장 먼저 베트남에 진출하여 성공한 국내 유일의 동남아시아 진출 전문 액셀러레이터입니다.',
          'The only accelerator in Korea with a successful track record of pioneering market entry into Vietnam.',
        )}
        cta={{ label: 'Go Global with Us', to: '/contact?type=global' }}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            title={t('한국 스타트업과 동남아시아 고성장 시장을 연결하는 신뢰받는 글로벌 노드를 구축합니다.', 'Building a trusted global node that connects Korean startups to high-growth emerging markets.')}
            desc={t(
              '더인벤션랩은 2019년 호치민 법인 설립 이후, 한국 모기업-베트남 자기업 형태의 지배구조 설계를 지원하며 단순 투자를 넘어 현지 파트너십의 핵심 노드를 구축했습니다.',
              'Since establishing the Ho Chi Minh branch in 2019, we have supported the design of corporate governance for Korean-Vietnam entities, building a core node for local partnerships beyond simple investment.',
            )}
          />
          <Stats
            items={[
              { value: '12+', label: t('베트남 직접 투자사 수', 'VIETNAM DIRECT INVESTMENTS') },
              { value: '40%', label: t('SEA 1호 펀드 IRR', 'SEA FUND #1 IRR') },
              { value: '3+', label: t('글로벌 전략 거점', 'GLOBAL STRATEGIC HUBS') },
              { value: '600+', label: t('현지 스타트업 및 투자자 DB', 'LOCAL STARTUP & INVESTOR DB') },
            ]}
          />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container product-card product-card--flat">
          <div className="product-card__visual product-card__visual--map" aria-hidden>
            <span className="map-dot map-dot--hcm">HCMC</span>
            <span className="map-dot map-dot--hn">HANOI</span>
            <span className="map-dot map-dot--seoul">SEOUL</span>
          </div>
          <div className="product-card__body">
            <Eyebrow>VIETNAM ECOSYSTEM INTELLIGENCE</Eyebrow>
            <h3>Startup-VN</h3>
            <p className="product-card__lead">{t('베트남 시장의 기회를 정밀하게 포착하는 마켓 인텔리전스 인프라', 'Market intelligence infrastructure capturing Vietnam opportunities precisely')}</p>
            <p>
              {t(
                '더인벤션랩은 베트남 내 최초로 로컬 스타트업 정보, 현지 투자기관 DB, 그리고 산업별 트렌드 보고서를 정기적으로 발행하는 Startup-VN 서비스를 직접 운영하고 있습니다. 시장의 데이터 기반으로 유망 초기 스타트업을 선별하여 투자 기회를 극대화합니다.',
                'The Invention Lab directly operates Startup-VN, the first service in Vietnam to regularly publish local startup info, investor DB, and industry trend reports.',
              )}
            </p>
            <MaybeLink href={site.links.startupVn} className="btn btn--dark">
              Visit Startup-VN <ExternalIcon />
            </MaybeLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="VIETNAM MARKET LEADERSHIP"
            title={t('베트남 시장을 선점하는 독보적 크로스보더 거버넌스', 'Dominant Cross-border Governance in Vietnam')}
            desc={t(
              "성공적인 베트남 진출의 트랙레코드를 증명해온 독보적 리더십\n\n2019년 호치민 법인 설립 이래, 한국인 파운더가 현지 CTO 및 조직을 셋업하고 '한국 모기업-베트남 자기업' 형태의 지배구조를 구축한 국내 최초이자 유일한 사례를 보유하고 있습니다. 이러한 독보적인 거버넌스 설계 역량은 초기 창업팀의 리스크를 원천적으로 차단하고 글로벌 확장을 가능케 합니다.",
              "Unrivaled leadership proven through a track record of success in Vietnam\n\nSince establishing our HCMC office in 2019, we have achieved the first and only domestic cases of establishing 'Korea-Parent/Vietnam-Child' governance models with Korean founders setting up local CTOs and organizations. This unique governance design capability fundamentally blocks risks for early-stage teams and enables seamless global expansion.",
            )}
          />
          <div className="dual">
            <div className="dual__card">
              <h3>Cross-border Governance & Exit</h3>
              <p>
                {t(
                  '7년 전 투자한 SEA 1호 펀드(오케이쎄, 바이비 등)는 주요 포트폴리오사의 성공적인 성장을 발판으로 평균 IRR 40%로 회수에 성공했습니다. 단순 투자를 넘어 지배구조 설계부터 밀착 육성, 그리고 지속적인 후속 투자 참여를 통해 기업 가치 성장의 전 과정을 함께하고 있습니다.',
                  'The SEA Fund #1 invested 7 years ago (OKXE, Vibey, etc.) successfully exited with an average IRR of 40% based on the growth of key portfolio companies. We accompany the entire growth process beyond simple investment.',
                )}
              </p>
            </div>
            <div className="dual__card dual__card--accent">
              <h3>100% Growth & Founder Network</h3>
              <p>
                {t(
                  '총 12개 베트남 직접 투자사 모두가 단 한 건의 실패 없이 견고하게 지속 성장 중입니다. 오케이쎄, 고투조이 등 현지 버티컬 플랫폼 1위 스타트업들로 구성된 독보적인 파운더 네트워크를 통해 베트남 내에서 가장 신뢰받는 크로스보더 투자 생태계를 확충하고 있습니다.',
                  'All 12 direct investments in Vietnam are growing robustly without a single failure. We are expanding the most trusted cross-border investment ecosystem in Vietnam through an unparalleled founder network.',
                )}
              </p>
            </div>
          </div>

          <h3 className="table-title">{t('SEA 주요 포트폴리오사', 'KEY SEA PORTFOLIOS')}</h3>
          <div className="sea-grid">
            {seaPortfolio.map((c, i) => {
              const co = c.match ? companies.find((x) => x.nameKo === c.match) : undefined
              const body = (
                <>
                  <div className="sea-card__top">
                    <strong>{c.name}</strong>
                    <span className="tag">{lang === 'en' ? c.countryEn : c.country}</span>
                  </div>
                  <p>{lang === 'en' ? c.en : c.ko}</p>
                </>
              )
              return (
                <Reveal key={c.name} delay={(i % 4) * 50}>
                  {co ? (
                    <Link to={`/cases/portfolio/${co.id}`} className="sea-card">
                      {body}
                    </Link>
                  ) : (
                    <div className="sea-card">{body}</div>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <SectionHead
            light
            eyebrow="SECTION 2 — SEA MARKET EXPANSION"
            title="SEA & K-Consumer Strategy"
            desc={t(
              '베트남의 성공을 동남아 전역의 성장 동력으로 확장하는 발판\n\n더인벤션랩은 베트남 시장에서의 독보적인 성공 트랙레코드를 기반으로\n유망 초기 스타트업을 선제 발굴하여 동남아시아 전역으로의 시장 확장을 가속화합니다.',
              'Expanding Vietnam success to SEA as a growth engine\n\nBased on our unique track record in Vietnam, we proactively discover early-stage startups and accelerate market expansion across Southeast Asia.',
            )}
          />
          <div className="dual dual--dark">
            <Link to="/cases/project/23" className="dual__card">
              <span className="dual__no">2025 INCHEON YOUTH GLOBAL LAUNCHPAD</span>
              <h3>PROJECT LIFECYCLE</h3>
              <p>
                {t(
                  '베트남·인도네시아·말레이시아·태국 등 주요 동남아 시장에서 K-소비재 초기 스타트업을 선제적으로 발굴하고, 투자부터 해외진출까지 연계하는 전주기 프로젝트를 가동합니다.',
                  'Proactively discovering early-stage K-consumer startups in key Southeast Asian markets including Vietnam, Indonesia, Malaysia, and Thailand, and operating full-lifecycle projects linking investment to global expansion.',
                )}
              </p>
              <span className="more">WATCH PARTNERSHIP SKETCH →</span>
            </Link>
            <div className="dual__card">
              <span className="dual__no">LIPS</span>
              <h3>LIPS & GLOBAL SCALE-UP</h3>
              <p>
                {t(
                  '동남아시아 진출을 희망하는 K-소비재 초기 스타트업에 대해 마켓핏(Market Fit) 테스트를 넘어, LIPS 연계를 통한 초기 투자 유치와 성장 런웨이 확보까지 전주기적으로 지원합니다.',
                  'For early-stage K-consumer startups looking to enter Southeast Asia, we provide full-lifecycle support beyond Market-Fit testing, including seed investment via LIPS and securing growth runways.',
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="GLOBAL HUB STRATEGY"
            title="Middle East & North America Gateway"
            desc={t(
              '전 세계 거점과 한국 기술 기업을 잇는 신뢰받는 크로스보더 관문\n\n동남아시아를 넘어 중동과 북미 시장까지 잇는 글로벌 네트워크를 통해 기술 중심 포트폴리오사의\n전 세계적 안착을 지원합니다.',
              'Trusted cross-border gateway connecting global nodes and Korean tech firms\n\nWe support the global settlement of tech-centric portfolios through a global network spanning beyond SEA to the Middle East and North America.',
            )}
          />
          <div className="hubs">
            <div className="hub">
              <span className="hub__k">MIDDLE EAST HUB</span>
              <h3>Saudi Arabia (Wa'ed Ventures)</h3>
              <p>
                {t(
                  "사우디아라비아 아람코(Aramco) 산하 VC인 '와에드벤처스'와 협력하여 당사 딥테크 포트폴리오사의 중동 현지화 및 조인트 벤처 설립을 실질적으로 리드합니다.",
                  "In collaboration with Wa'ed Ventures (VC under Aramco), we lead the localization and JV establishment of our deep-tech portfolios in the Middle East.",
                )}
              </p>
              <div className="hub__city">STRATEGIC HUB: RIYADH</div>
            </div>
            <div className="hub">
              <span className="hub__k">NORTH AMERICA HUB</span>
              <h3>Canada (Y-Space, York Univ.)</h3>
              <p>
                {t(
                  "캐나다 요크대학교 산하 액셀러레이터 'Y-Space'와 협력하여 캐나다 법인 설립 및 이를 발판으로 한 미국 시장 진출 프로그램을 운영합니다.",
                  'Operating North American market entry programs in partnership with Y-Space (York University), supporting Canadian entity setup.',
                )}
              </p>
              <div className="hub__city">STRATEGIC HUB: TORONTO</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
