import { Link } from 'react-router-dom'
import { useLang } from '../../i18n'
import { Arrow, PageHero, Reveal, SectionHead } from '../../components/ui'

export default function VentureStudio() {
  const { t } = useLang()

  const factory = [
    {
      k: 'Startup Management',
      title: t('스타트업 빌드업 및 운영관리', 'Startup Build-up & Operations Management'),
      desc: t('CEO 및 Venture Scaleup & MGT Team에서 전체 통합 프로세스 관리', 'Total integrated process management by the CEO and Venture Scaleup & MGT Teams'),
    },
    {
      k: 'R&D Center',
      title: t('아이디어 생성 및 검증', 'Ideation & Validation'),
      desc: t('인벤션덱 AI 기반 New Biz Design Lab 담당', 'Managed by the New Biz Design Lab using InventionDeck AI'),
    },
    {
      k: 'PRODUCTION LINE',
      title: 'Venture Building',
      desc: t(
        'Venture Scaleup & Venture MGT Team이 Talent & Capital을 활용해 실제 기업을 구축합니다.',
        'Venture Scaleup & Venture MGT Teams build actual companies using Talent & Capital.',
      ),
      main: true,
    },
    {
      k: 'Output & Branding',
      title: t('결과/성과 도출 및 확산', 'Result Derivation & Expansion'),
      desc: t('Venture Scaleup Team 담당', 'Managed by the Venture Scaleup Team'),
    },
    {
      k: 'Growth Support',
      title: t('네트워크 및 인프라 제공', 'Provision of Network & Infrastructure'),
      desc: t('Strategic Partnership Team 담당', 'Managed by the Strategic Partnership Team'),
    },
  ]

  const engines = [
    {
      name: 'Ideation',
      owner: 'NEW BUSINESS DESIGN LAB',
      items: [
        t('대중견 기업이 필요로 하는 신기술-신사업 BM 기회포착', 'Identifying new tech/business BM opportunities for large/mid-sized corps'),
        t('자체 AI Agent를 활용한 데이터 인사이트 기반 조사/기회요인발굴', 'Data insight research and opportunity discovery via proprietary AI Agents'),
      ],
    },
    {
      name: 'Capital',
      owner: 'VENTURE BUILDER & VENTURE MGT TEAM',
      items: [t('TIPS/LIPS/서울형 TIPS 3대 라이센스확보', 'Secured triple licenses for TIPS/LIPS/Seoul-TIPS'), t('K딥테크 및 K소비재 전용펀드 보유', 'Proprietary funds dedicated to K-Deep Tech & K-Consumer brands')],
    },
    {
      name: 'Talent',
      owner: 'VENTURE BUILDER & VENTURE MGT TEAM',
      items: [
        t('삼성전자 출신의 전무급 이상 사장단 조합(아브라삭스와의 전략적 파트너십)', 'Executive/C-level talent pool from Samsung Electronics (Strategic partnership with Abraxas)'),
        t('Cross-Border Team Building 역량', 'Cross-Border Team Building capabilities'),
      ],
    },
    {
      name: 'Network',
      owner: 'STRATEGIC PARTNERSHIP TEAM',
      items: [
        t('중견상장사/중견대기업 LP네트워크(삼천리, 우미, 국보디자인, 아주그룹 등)', 'LP network of mid-sized listed/conglomerate partners (Samchully, Woomi, etc.)'),
        t('Global Network(일본-베트남-말레이시아, 캐나다 등)', 'Global Network spanning Japan, Vietnam, Malaysia, and Canada'),
      ],
    },
    {
      name: 'Infrastructure',
      owner: 'STRATEGIC PARTNERSHIP TEAM',
      items: [
        t('데이터 기반 검증 방법론', 'Data-driven validation methodologies'),
        t('물리적 공간(강남-마이워크스페이스, 강북-광화문169 등)', 'Physical spaces (Gangnam MyWorkspace, Gwanghwamun 169, etc.)'),
      ],
    },
  ]

  const model = [
    {
      k: 'ENGINE 1',
      title: 'New Business Design Lab',
      desc: t('시장 분석과 가설 검증을 통해 실행 가능한 모델을 디자인합니다.', 'Designing executable models through market analysis and hypothesis validation.'),
      to: '/capabilities/new-biz-design',
    },
    {
      k: 'ENGINE 2',
      title: 'Venture Scaleup & Venture MGT Team',
      desc: t('전문 역량을 결합하여 검증된 모델을 실제 법인화합니다.', 'Incorporating validated models by combining professional expertise.'),
      to: '/capabilities/venture-building',
    },
    {
      k: 'ENGINE 3',
      title: 'Strategic Partnership Team',
      desc: t('전략적 제휴를 통해 안정적인 매출과 확장을 지원합니다.', 'Supporting stable revenue and expansion through strategic partnerships.'),
      to: '/capabilities/strategic-partnership',
    },
  ]

  const diffs = [
    t('더 높은 수준의 지분율 확보', 'Higher Equity Stakes'),
    t('더 강력한 개입과 육성', 'Hands-on Incubation'),
    t('성공적인 기업 PoC 연결', 'Strategic Corporate PoC Linkage'),
    t('3-5년 내 빠른 EXIT 목표', 'Targeting Fast Exit within 3-5 Years'),
  ]

  return (
    <>
      <PageHero
        variant="navy"
        eyebrow="INNOVATION & INVENTION FACTORY"
        title={'The Invention Lab\nVenture Studio'}
        desc={t('아이디어 발굴부터 스케일업까지, 성공적인 스타트업을 체계적으로 제조합니다.', 'Systematically manufacturing successful startups from ideation to scale-up.')}
        cta={{ label: 'Go build with us', to: '/contact' }}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="FACTORY"
            title="Innovation & Invention Factory"
            desc={t(
              '더인벤션랩이 추구하는 가치는 지난 8년 간 쌓은 오픈 이노베이션 및 사내벤처&컴퍼니빌딩 프로젝트 경험을 바탕으로 기업형 벤처 스튜디오 및 자체 벤처 스튜디오 모델로 진화하는 것입니다. 더인벤션랩은 이를 ‘혁신/창조 공장’으로 정의하며, 각 모듈별 최적화된 기능을 통해 성공적인 스타트업을 체계적으로 제조합니다.',
              'The value pursued by The Invention Lab is evolving into a corporate and proprietary venture studio model based on 8 years of experience in open innovation and company building. We define this as an "Innovation & Invention Factory," manufacturing successful startups through optimized modules.',
            )}
          />
          <div className="factory">
            {factory.map((f, i) => (
              <Reveal key={f.k} delay={i * 60} className={f.main ? 'factory__cell factory__cell--main' : 'factory__cell'}>
                <div className="factory__card">
                  <span className="factory__k">{f.k}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <SectionHead
            light
            center
            eyebrow="PLATFORM"
            title="Studio Core Platform"
            desc={t(
              '더인벤션랩은 벤처 스튜디오의 5가지 핵심 엔진인 Ideation - Capital - Talent - Network - Infrastructure를 통합적으로 연결하여 제공합니다.',
              'The Invention Lab provides an integrated connection of the 5 core engines of a Venture Studio: Ideation, Capital, Talent, Network, and Infrastructure.',
            )}
          />
          <div className="engine-grid">
            {engines.map((e, i) => (
              <Reveal key={e.name} delay={i * 60}>
                <div className="engine">
                  <span className="engine__no">0{i + 1}</span>
                  <h3>{e.name}</h3>
                  <ul>
                    {e.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  <div className="engine__owner">{e.owner}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="MODEL"
            title="Our Venture Studio Model"
            desc={t(
              '더인벤션랩이 창업팀을 직접 선발하여 사업 아이템 구체화, 시장 런칭 및 글로벌 확장 전략을 주도하는 핵심 비즈니스 모델입니다.',
              'Our core business model where we directly select founding teams to drive business item specification, market launch, and global expansion strategies.',
            )}
          />
          <div className="model-flow">
            {model.map((m, i) => (
              <Reveal key={m.k} delay={i * 90}>
                <Link to={m.to} className="model-step">
                  <span className="model-step__k">{m.k}</span>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                  <span className="more">
                    Learn more <Arrow />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead center eyebrow="DIFFERENTIATORS" title="Key Differentiators" desc={t('기존 VC 모델과는 차별화된 핵심 경쟁력입니다.', 'Our core competitiveness differentiated from traditional VC models.')} />
          <div className="diff-grid">
            {diffs.map((d, i) => (
              <Reveal key={d} delay={i * 60}>
                <div className="diff">
                  <span>0{i + 1}</span>
                  <strong>{d}</strong>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container inline-cta">
          <div>
            <h2 className="section-title">{t('지금 바로 더인벤션랩에 문의 하세요', 'Contact The Invention Lab Today')}</h2>
            <p className="section-desc">
              {t('더인벤션랩의 체계적인 벤처 스튜디오 모델에 관심이 있다면 지금 바로 문의하세요.', 'If you are interested in our systematic venture studio model, please contact us now.')}
            </p>
          </div>
          <Link to="/contact" className="btn btn--primary btn--lg">
            Go build with us <Arrow />
          </Link>
        </div>
      </section>
    </>
  )
}
