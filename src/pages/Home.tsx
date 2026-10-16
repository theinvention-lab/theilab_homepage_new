import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { Arrow, Eyebrow, Reveal, SectionHead } from '../components/ui'
import { StudioCaseCard } from '../components/cards'
import { featuredStudioIds, projectById } from '../data/projects'

export default function Home() {
  const { t } = useLang()

  const journey = [
    {
      title: 'Open Innovation Leadership',
      desc: t(
        '민간 대기업 및 중견기업의 스타트업 발굴부터 PoC, 성과 도출, 투자 연계까지 8년간의 실행 경험을 축적했습니다.',
        'Accumulated 8 years of execution experience from startup scouting to PoC, result derivation, and investment linking for major corporations.',
      ),
    },
    {
      title: 'Startup Investments & Accelerating',
      desc: t(
        '초기 투자부터 성장 가속화와 후속 투자까지, 전주기 스타트업 투자·육성 경험을 보유하고 있습니다.',
        'Possess full-lifecycle startup investment and incubation experience from early-stage to growth acceleration.',
      ),
    },
    {
      title: 'Corporate Company Building & Spin-Off',
      desc: t(
        '사내벤처 육성 및 스핀오프 프로젝트를 통한 독립 법인화 성공 사례를 다수 보유하고 있습니다.',
        'Multiple success stories in corporate venture building and spin-off projects leading to independent legal entities.',
      ),
    },
  ]

  const capabilities = [
    {
      no: '01',
      title: 'New Business Design',
      sub: 'FROM INSIGHT TO BUSINESS',
      to: '/capabilities/new-biz-design',
      desc: t('시장 기회를 정밀하게 분석하고, 검증 가능한 방향으로 디자인합니다.', 'Analyzing market opportunities and designing them in verifiable directions.'),
      items: [
        t('신규BM 발굴을 위한 데이터 인사이트 기반 리서치', 'Data-driven research for new BM discovery'),
        t('내부 자체 AI Agent를 이용한 신사업 구체화', 'New business realization using in-house AI Agents'),
        t('기업형 벤처스튜디오 모델 기획과 설계', 'Planning & design of corporate venture studios'),
      ],
    },
    {
      no: '02',
      title: 'Venture Scale-up & MGT',
      sub: 'FROM STRATEGY TO SCALABLE GROWTH',
      to: '/capabilities/venture-building',
      desc: t(
        '사업의 실행 기반을 구축하고, 지속 가능한 성장 구조와 투자 스케일업을 만들어갑니다.',
        'Building execution foundations and creating sustainable growth structures.',
      ),
      items: [
        t('TIPS/서울형TIPS/LIPS 연계형 초기 투자운용', 'Seed investment linked with TIPS/LIPS'),
        t('CVC형 프로젝트/블라인드 펀드 기획과 운용', 'CVC-style projects and fund management'),
        t('내부 벤처스튜디오 기획 및 인큐베이션', 'In-house venture studio incubation'),
      ],
    },
    {
      no: '03',
      title: 'Strategic Partnership',
      sub: 'FROM OI TO STRATEGIC NETWORK',
      to: '/capabilities/strategic-partnership',
      desc: t('벤처가 성장할 수 있도록 외부 생태계를 설계하고 확장합니다.', 'Designing and expanding external ecosystems for venture growth.'),
      items: [
        t('기업형 벤처스튜디오 및 OI 프로젝트 기획·운영', 'Corporate Venture Studio & OI Project Planning'),
        t('FINEDEAL 기반 딜소싱 및 인프라 구축', 'Building Deal Sourcing & Infra via FINEDEAL'),
        t('글로벌 거점 기반 OI 및 시장 확장 연계', 'Global OI & Market Expansion via Nodes'),
      ],
    },
  ]

  const core = [
    { k: 'CAPITAL', v: 'Blended Financing' },
    { k: 'TALENT', v: 'Operator Pool' },
    { k: 'INFRA', v: 'Validation System' },
    { k: 'NETWORK', v: 'LP & Cross-border' },
  ]

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" aria-hidden>
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__grid" />
        </div>
        <div className="container hero__inner">
          <Eyebrow light>{t('Venture Studio for Startup & Corporates', 'Venture Studio for Startups & Corporates')}</Eyebrow>
          <h1 className="hero__title">
            We build new ventures with
            <br />
            <span className="hero__accent">entrepreneurs</span>
          </h1>
          <p className="hero__desc">
            {t('새로운 사업을 설계하고 성장 단계까지 이끄는 벤처 빌딩 파트너', 'A Venture Building Partner Designing and Guiding New Businesses to Growth')}
          </p>
          <div className="hero__ctas">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Start a Venture Project <Arrow />
            </Link>
            <Link to="/capabilities/venture-studio" className="btn btn--outline-light btn--lg">
              Explore Our Venture Studio Model
            </Link>
          </div>
          <div className="hero__stats">
            <div>
              <strong>520억+</strong>
              <span>AUM (KRW)</span>
            </div>
            <div>
              <strong>200+</strong>
              <span>{t('포트폴리오사', 'Portfolio Companies')}</span>
            </div>
            <div>
              <strong>50+</strong>
              <span>{t('TIPS 선정기업', 'TIPS Companies')}</span>
            </div>
            <div>
              <strong>8 yrs</strong>
              <span>Open Innovation</span>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY & VISION */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="JOURNEY & VISION"
            title={t(
              '더인벤션랩은 8년간의 오픈이노베이션 역량을 토대로,\nVenture Studio로서 새로운 비즈니스와 성장 기회를 설계합니다.',
              'Based on 8 years of Open Innovation leadership,\nThe Invention Lab designs new businesses and growth opportunities as a Venture Studio.',
            )}
          />
          <div className="journey">
            <div className="journey__past">
              <div className="journey__label">
                <h3>TIL’s Journey</h3>
                <span>2017 — PRESENT</span>
              </div>
              <ol className="timeline">
                {journey.map((j, i) => (
                  <Reveal key={j.title} delay={i * 80}>
                    <li>
                      <h4>{j.title}</h4>
                      <p>{j.desc}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
            <Reveal className="journey__next">
              <div className="next-card">
                <span className="next-card__eyebrow">The Next Chapter</span>
                <div className="tag tag--light">VENTURE STUDIO MODEL</div>
                <h3>Venture Studio for Corporates</h3>
                <p>
                  {t(
                    '급변하는 AI 기술과 기업 환경 변화에 대응하기 위해, 기존의 오픈이노베이션을 넘어선 벤처 스튜디오로 진화합니다.',
                    'To respond to rapidly changing AI technologies and corporate environments, we are evolving beyond traditional Open Innovation into a Venture Studio.',
                  )}
                </p>
                <div className="next-card__pills">
                  <div>
                    <strong>AI-Driven</strong>
                    <span>{t('AI가 촉진하는 변화에 맞춘 혁신적 벤처 모델', 'Innovative models tailored to AI-driven shifts')}</span>
                  </div>
                  <div>
                    <strong>New Business</strong>
                    <span>{t('스타트업 육성 역량을 기업 비즈니스와 연결', 'Linking startup growth capabilities to corporate business')}</span>
                  </div>
                </div>
                <Link to="/capabilities/venture-studio" className="btn btn--white">
                  Discover Venture Studio Model <Arrow />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section section--tint">
        <div className="container">
          <SectionHead
            eyebrow="CAPABILITIES"
            title="What We Do"
            desc={t(
              '더인벤션랩은 시장의 기회를 발견하고, 실행 가능한 비즈니스로 발전시키며, 지속적인 성장과 확장을 가능하게 하는 스타트업을 만듭니다.',
              'The Invention Lab discovers market opportunities, develops them into executable businesses, and builds ventures capable of sustainable growth.',
            )}
          />
          <div className="cap-grid">
            {capabilities.map((c, i) => (
              <Reveal key={c.no} delay={i * 90}>
                <Link to={c.to} className="cap-card">
                  <div className="cap-card__no">{c.no}</div>
                  <h3>{c.title}</h3>
                  <div className="cap-card__sub">{c.sub}</div>
                  <p>{c.desc}</p>
                  <ul className="checklist">
                    {c.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  <span className="more">
                    Learn more <Arrow />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DO */}
      <section className="section section--navy">
        <div className="container how">
          <div>
            <SectionHead
              light
              eyebrow="CORE ELEMENTS"
              title="How We Do"
              desc={t(
                '더인벤션랩은 우연이 아닌 구조와 과정으로 스타트업을 만듭니다.\nStudio Core Platform을 기반으로 기업과 창업자를 위한 새로운 사업을 정교한 프로세스로 설계하고 실행합니다.',
                'The Invention Lab builds ventures through structure and process, not chance.\nWe design and execute new businesses for corporations and founders through our Studio Core Platform.',
              )}
            />
            <Link to="/capabilities/venture-studio" className="btn btn--outline-light">
              Studio Core Platform <Arrow />
            </Link>
          </div>
          <div className="core-diagram" aria-label="Studio Core Platform">
            <div className="core-diagram__ring" aria-hidden />
            {core.map((c, i) => (
              <div key={c.k} className={`core-node core-node--${i}`}>
                <span>{c.k}</span>
                <strong>{c.v}</strong>
              </div>
            ))}
            <div className="core-center">
              STUDIO
              <br />
              CORE
              <br />
              PLATFORM
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASES */}
      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <SectionHead eyebrow="CASES" title="Featured Venture Studio Cases" />
            <Link to="/cases" className="btn btn--ghost">
              See All <Arrow />
            </Link>
          </div>
          <div className="case-grid">
            {featuredStudioIds.map((id, i) => {
              const p = projectById(id)
              return p ? (
                <Reveal key={id} delay={i * 90}>
                  <StudioCaseCard p={p} />
                </Reveal>
              ) : null
            })}
          </div>
        </div>
      </section>
    </>
  )
}
