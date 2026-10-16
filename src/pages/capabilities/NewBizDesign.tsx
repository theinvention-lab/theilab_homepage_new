import { Link } from 'react-router-dom'
import { useLang } from '../../i18n'
import { Arrow, ExternalIcon, PageHero, Reveal, SectionHead, Stats } from '../../components/ui'
import { Clients, corporateClients, ProgramSection } from '../../components/Program'
import { site } from '../../data/site'

export default function NewBizDesign() {
  const { t } = useLang()

  return (
    <>
      <PageHero
        variant="orange"
        eyebrow="FROM INSIGHT TO BUSINESS"
        title="New Business Design"
        desc={t('시장과 고객에 대한 깊은 이해로 새로운 비즈니스를 정교하게 디자인합니다.', 'We precisely design new businesses through a deep understanding of markets and customers.')}
        cta={{ label: 'Design Your Venture', to: '/contact' }}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            title="Precisely analyzing market opportunities and designing for validation"
            desc={t(
              '시장과 고객을 정밀하게 분석해 성공 가능성이 높은 기회를 함께 포착하고 실행 가능한 비즈니스 모델로 디자인합니다. 나아가 핵심 가치를 빠르게 구현한 후 다각도의 시장 검증 과정을 거쳐 실제 시장에 안착할 수 있는지에 대한 타당성을 함께 검증합니다.',
              'We precisely analyze markets and customers to capture high-potential opportunities and design executable business models. Furthermore, we rapidly implement core values and conduct multi-faceted market validation to verify feasibility for market entry.',
            )}
          />
          <Stats
            items={[
              { value: '22+', label: t('함께한 기업들', 'CORPORATE PARTNERS') },
              { value: '100+', label: t('신사업 아이디어 도출 및 육성 건수', 'NEW IDEAS INCUBATED') },
              { value: '50+', label: t('진행한 프로젝트 수', 'PROJECTS COMPLETED') },
              { value: '4+', label: t('사내벤처 분사 후 투자 집행 건수', 'SPIN-OFF INVESTMENTS') },
            ]}
          />
        </div>
      </section>

      <ProgramSection
        reverse
        eyebrow="DATA DRIVEN BUSINESS OPPORTUNITY DISCOVERY"
        title={t('데이터 기반 신사업 기회 발굴', 'Data-Driven Opportunity Discovery')}
        subtitle={t('시장 인사이트와 AI를 활용한 신사업 아이디어 탐색', 'Exploring New Business Ideas using Market Insights & AI')}
        desc={t(
          '불확실성이 높은 초기 단계에서 가장 중요한 것은 ‘검증할 가치가 있는 사업 가설을 빠르게 선별하고 검증해보는 것’입니다. 시장, 고객, 산업 전반의 정보를 분석해 유의미한 기회 영역을 도출하고 감과 경험에 의존하지 않는 데이터에 근거한 신사업 출발점을 설계합니다. 조직에게 적합한 아이템을 선제적으로 탐색하고 사업화 가능성이 높은 영역에 집중할 수 있는 기준을 제공한 다음, 빠르게 시도하고 선택할 수 있는 환경을 만들 수 있도록 돕습니다.',
          'In high-uncertainty early stages, the priority is rapidly filtering and testing business hypotheses worth validating. We analyze market, customer, and industry data to derive meaningful opportunity areas and design data-driven starting points. We help organizations proactively explore suitable items, providing criteria to focus on high-potential areas and enabling environments for rapid trial and selection.',
        )}
        extra={
          <Reveal>
            <div className="product-card">
              <div className="product-card__visual" aria-hidden>
                <div className="deck-card deck-card--1">TREND</div>
                <div className="deck-card deck-card--2">TARGET</div>
                <div className="deck-card deck-card--3">TECH</div>
              </div>
              <div className="product-card__body">
                <div className="tag tag--accent">InventionDeck AI</div>
                <h3>{t('AI 기반 비즈니스 아이데이션 & 비즈니스 구체화 솔루션', 'AI-powered Business Ideation & Specification Solution')}</h3>
                <p className="product-card__lead">
                  {t('아이디어 발굴부터 사업계획서 완성까지, AI가 가속화하는 비즈니스 디자인 솔루션', 'From Ideation to Business Plan Completion, AI-Accelerated Business Design Solution')}
                </p>
                <p>
                  {t(
                    'InventionDeck AI는 더인벤션랩이 큐레이션한 4,000여 개의 비즈니스 카드를 조합해 시장의 빈틈을 포착하는 ‘카드 조합형 아이데이션’ 솔루션입니다. 자체 개발된 6가지 핵심 템플릿을 통해 막연한 아이디어를 체계적으로 구체화하고 논리적인 사업계획서와 설득력 있는 제안서까지 완성합니다. 이를 통해 신사업 기획에 드는 시간을 획기적으로 단축하고 비즈니스 로직의 완결성을 극대화할 수 있습니다.',
                    'InventionDeck AI is a "card-combination ideation" solution that identifies market gaps by combining over 4,000 curated business cards. Through 6 proprietary templates, it systematically refines vague ideas into logical business plans and persuasive proposals, drastically reducing planning time and maximizing business logic integrity.',
                  )}
                </p>
                {site.links.inventionDeck ? (
                  <a className="btn btn--dark" href={site.links.inventionDeck} target="_blank" rel="noreferrer">
                    Visit InventionDeck AI <ExternalIcon />
                  </a>
                ) : (
                  <Link className="btn btn--dark" to="/insights/press/31">
                    Visit InventionDeck AI <Arrow />
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        }
      />

      <ProgramSection
        eyebrow="NEW BUSINESS VERIFICATION & SCALE-UP"
        title={t('신사업 검증 및 스케일업 지원', 'Validation & Scale-up Support')}
        desc={t(
          '아이디어의 발굴부터 시장성 진단, MVP 구현, 그리고 시장 진입과 확장까지 - 신사업의 생애주기에 최적화된 맞춤형 솔루션을 제공합니다. 신규 사업 특성에 맞춰 필요한 단계만 선택적으로 진행하거나 전 과정을 통합적으로 진행할 수 있습니다. 단순 컨설팅을 넘어 자체 네트워크와 파트너십을 기반으로 실질적인 비즈니스 성과를 함께 창출합니다.\n\n기업의 자산과 시장 데이터를 기반으로 새로운 사업 아이디어를 Value Proposition 형태로 구체화하고, 실제 고객 반응을 기반으로 빠르게 검증해 투자 가능한 수준의 사업 콘셉트로 발전시킵니다.',
          'We provide customized solutions optimized for the new business lifecycle. Depending on the venture’s traits, we offer selective stages or integrated end-to-end processes.\n\nPrecisely specifying new business ideas based on corporate assets and market data, and validating them rapidly through customer responses to develop investable business concepts.',
        )}
        process={[
          t('시장 기회 분석 및 비즈니스 모델 고도화', 'Market analysis & BM enhancement'),
          t('고객/시장 중심 가설 수립 및 검증', 'Customer-centric hypothesis & testing'),
          t('MVP 구현 및 시장 테스트', 'MVP implementation & market testing'),
          t('스케일업 및 후속 성장 지원', 'Scale-up & growth support'),
        ]}
        outputs={[t('신사업 진단 보고서', 'Diagnostic Report'), t('사업계획서 및 Pitch Deck', 'Business Plan & Pitch Deck'), t('프로토타입/MVP/랜딩페이지', 'Prototype / MVP / Landing Page')]}
        cases={[
          { label: 'F&B', projectId: 9 },
          { label: 'TELCO / IT', projectId: 10 },
        ]}
      />

      <ProgramSection
        reverse
        eyebrow="CORPORATE VENTURE BUILDING"
        title={t('사내벤처 발굴 및 육성', 'In-house Venture Building')}
        subtitle={t('조직의 혁신 DNA를 깨우는 전주기 프로그램', 'Full-lifecycle programs to awaken innovation DNA')}
        desc={t(
          '아이디어 발굴부터 육성, 분사, 그리고 후속 투자까지-기업 내부의 혁신 동력을 비즈니스 성과로 연결하는 실전형 프로그램을 제공합니다. 이론 중심의 교육이나 단순 공모전에 그치지 않고, 아이디어를 빠르게 시제품으로 구현해 시장 검증을 거치는 과정으로 성공 확률을 높입니다.',
          'We provide practical programs that connect internal innovation drivers to business results—from ideation and incubation to spin-offs and follow-on investments.',
        )}
        process={[t('프로그램 기획 및 선발', 'Planning & selection'), t('사업 고도화 프로그램', 'BM enhancement program'), t('MVP 구현 및 시장 기반 실증 테스트', 'MVP & market-based validation')]}
        outputs={[t('사업계획서 및 Pitch Deck', 'Business Plan & Pitch Deck'), t('프로토타입/MVP 등을 활용한 고객 검증', 'Rapid validation via Prototypes/MVP')]}
        cases={[
          { label: 'FINANCE', projectId: 11 },
          { label: 'AUTOMOTIVE', projectId: 20 },
        ]}
      />

      <ProgramSection
        eyebrow="CORPORATE INNOVATION TRAINING"
        title={t('사내 혁신 역량 강화', 'Corporate Innovation Training')}
        subtitle={t('이론을 넘어 실행으로, 조직의 일하는 방식을 혁신하는 실전형 워크샵', 'Practical workshops that innovate working methods, moving beyond theory to execution.')}
        desc={t(
          '린스타트업과 디지털 트랜스포메이션 워크샵을 기반으로 조직 내에 실행 가능한 혁신을 정착시킵니다. 자체 설계한 전용 린스타트업 툴킷과 SaaS 기반 디지털 협업 환경을 통해 구성원 스스로가 문제를 정의하고 아이디어를 검증합니다.',
          'We establish actionable innovation through Lean Startup and Digital Transformation workshops. Using our proprietary toolkit, we help employees define problems and validate ideas.',
        )}
        process={[t('진단 및 맞춤 프로그램 설계', 'Diagnosis & custom design'), t('방법론 학습 및 액션러닝', 'Methodology & action learning')]}
        outputs={[t('신사업 아이디어 정의서, 비즈니스 모델 캔버스', 'Concept definition & BM Canvas'), t('워킹 백워즈 기획안, 프로토타입', 'Working Backwards plan & Prototype')]}
        cases={[
          { label: 'TRAINING', projectId: 13 },
          { label: 'AI', projectId: 12 },
        ]}
      />

      <Clients names={corporateClients} />
    </>
  )
}
