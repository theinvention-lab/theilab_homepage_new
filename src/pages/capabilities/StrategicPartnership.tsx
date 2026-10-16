import { useLang } from '../../i18n'
import { ExternalIcon, PageHero, Reveal, SectionHead, Stats } from '../../components/ui'
import { Clients, corporateClients, ProgramSection } from '../../components/Program'
import { site } from '../../data/site'

export default function StrategicPartnership() {
  const { t } = useLang()

  const launch = [
    {
      title: 'Venture Opportunity Structuring',
      desc: t('기업 전략·기술·시장 데이터를 기반으로 기획창업 주제를 정의하고 실행 가능한 사업 단위로 구체화', 'Defining venture themes and refining them into executable business units based on strategy and market data'),
    },
    {
      title: 'PoC & Validation Infrastructure',
      desc: t('초기 실증을 위한 PoC 환경, 협업 구조, KPI 설계를 포함한 검증 인프라스트럭처 제공', 'Providing validation infrastructure including PoC environments, collaboration structures, and KPI design'),
    },
    {
      title: 'Ecosystem Network Integration',
      desc: t('딜소싱 채널, 파트너 및 멘토 네트워크를 연결해 내부 기획의 실행력 강화', 'Strengthening execution by connecting deal sourcing channels and expert networks'),
    },
    {
      title: 'Growth & Scale Infrastructure',
      desc: t('투자 연계, 후속 사업 협업, 글로벌(동남아·베트남 거점) 확장까지 이어지는 성장 인프라스트럭처 설계', 'Designing growth infrastructure for investment, follow-on biz, and global expansion'),
    },
  ]

  return (
    <>
      <PageHero
        variant="violet"
        eyebrow="CORPORATE OPEN INNOVATION PARTNER"
        title="Strategic Partnership"
        desc={t(
          '기업의 전략 과제를 검증 가능한 스타트업 협업 구조로 설계하여 실질적인 비즈니스 혁신 성과를 창출합니다.',
          'Designing strategic challenges into verifiable startup collaboration structures to create tangible business innovation.',
        )}
        cta={{ label: 'Discuss Partnership', to: '/contact?type=partnership' }}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            title={t('전략적 협업을 통해 성장의 기회를 정의합니다.', 'Defining growth opportunities through strategic collaboration')}
            desc={t(
              'Strategic Partnership팀은 기업의 혁신 과제를 문제 정의부터 근본적 해결까지 연결하고, 인프라와 네트워크 기반의 실행력 있는 솔루션으로 성과를 만듭니다.',
              'The Strategic Partnership team connects corporate innovation tasks from problem definition to fundamental solutions, creating results with actionable infrastructure and network-based solutions.',
            )}
          />
          <Stats
            items={[
              { value: '20+', label: t('대기업·중견기업 파트너', 'CORPORATE PARTNERS') },
              { value: '100+', label: t('검토 및 매칭 스타트업', 'SCOUTED STARTUPS') },
              { value: '50+', label: t('POC·파일럿 프로젝트', 'POC PROJECTS') },
              { value: '4+', label: t('글로벌 연계 프로그램', 'GLOBAL PROGRAMS') },
            ]}
          />
        </div>
      </section>

      <ProgramSection
        reverse
        eyebrow="CORPORATE VENTURE STUDIO–DRIVEN LAUNCH SUPPORT"
        title={t('기업형 기획창업 사업 환경 지원', 'Corporate Venture Studio–Driven Support')}
        subtitle={t('기업의 유휴 자산과 내부 아이디어를 비즈니스로 디자인하는 혁신 엔진', 'An innovation engine designing corporate assets into business')}
        desc={t(
          '더인벤션랩 Strategic Partnership Team은 기업의 환경과 니즈에 따라 단순 기획 지원이 아니라, 내부 아이디어를 외부 생태계와 연결해 사업으로 구체화하는 실행 인프라와 네트워크를 제공합니다. 기업의 전략적 자산을 활용해 성공 가능성 높은 비즈니스 모델을 도출하고 실제 런칭까지의 전 과정을 전폭적으로 지원합니다.',
          'The Strategic Partnership Team provides execution infrastructure and networks to refine internal ideas into businesses by connecting them with external ecosystems. We fully support the entire process from deriving high-potential business models to actual market launch.',
        )}
        extra={
          <div className="launch-grid">
            {launch.map((l, i) => (
              <Reveal key={l.title} delay={i * 60}>
                <div className="launch">
                  <span>0{i + 1}</span>
                  <h3>{l.title}</h3>
                  <p>{l.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        }
      />

      <ProgramSection
        eyebrow="DEAL SCOUTING PROGRAM"
        title={t('전략 기반 스타트업 발굴 및 분석', 'Strategy-based Startup Discovery')}
        subtitle={t('의사결정의 완결성을 높이는 정밀한 딜 소싱 데이터', 'Precise deal-sourcing data for high-integrity decision making')}
        desc={t(
          '기업의 산업 전략과 기술 수요를 출발점으로, 단기간 내 의사결정이 가능한 수준의 스타트업 풀을 확보할 수 있도록 설계된 프로그램입니다. 기존 공개 정보와 네트워크에 의존하지 않고, 자체 딜소싱 채널인 FINEDEAL과 축적된 데이터베이스를 활용해 전략 적합도가 높은 스타트업을 선별합니다.',
          'A program designed to secure a pool of startups for rapid decision-making based on industry strategy and tech demand.',
        )}
        process={[
          t('기업 전략 및 기술 수요 정의', 'Strategy & Tech Demand Definition'),
          t('인바운드·아웃바운드 기반 딜스카우팅', 'Inbound/Outbound Deal Scouting'),
          t('스타트업 DB 정리 및 정밀 분석', 'DB Organization & Deep Analysis'),
          t('기업 검토용 리포트 제공', 'Reporting for Corporate Review'),
        ]}
        outputs={[
          t('산업·전략 적합 스타트업 DB', 'Industry-Fit Startup DB'),
          t('기업별 요약 분석 리포트', 'Summary Analysis Reports'),
          t('후속 PoC·투자 검토를 위한 내부 검토 자료', 'Internal Review Materials'),
        ]}
      >
        <div className="solution">
          <div>
            <span className="case-study__label">SOLUTION — FINEDEAL</span>
            <h4>{t('스타트업 모집/심사 통합 솔루션', 'Integrated Recruitment/Review Solution')}</h4>
            <p>
              {t(
                '모든 형태의 프로그램에서 필요한 딜스카우팅 업무 리소스를 최적화 해주는 효율적인 모집/심사/선발 운영 솔루션입니다.',
                'An efficient operation solution that optimizes scouting resources for all types of programs.',
              )}
            </p>
          </div>
          {site.links.finedeal ? (
            <a className="btn btn--dark" href={site.links.finedeal} target="_blank" rel="noreferrer">
              Learn more about FINEDEAL <ExternalIcon />
            </a>
          ) : (
            <a className="btn btn--dark" href="#/contact?type=partnership">
              Learn more about FINEDEAL
            </a>
          )}
        </div>
      </ProgramSection>

      <ProgramSection
        reverse
        eyebrow="POC LINKAGE PROGRAM"
        title={t('협업 기반 사업성 검증 및 실증', 'Collaboration-based Validation')}
        subtitle={t('기술의 실효성을 입증하고 협업의 가치를 증명하는 실전형 협력', 'Practical cooperation proving tech effectiveness and collaboration value')}
        desc={t(
          '기업의 신사업 과제와 스타트업의 기술·비즈니스 모델을 실제 협업을 통해 검증합니다. 단발성 테스트에 그치지 않고, 과제 정의부터 성과 측정, 후속 의사결정까지 이어지는 구조로 설계됩니다. 현업 부서의 수요와 실행 환경을 고려해 PoC 범위와 KPI를 구체화하여 실질적인 비즈니스 임팩트를 확인할 수 있도록 지원합니다.',
          'Designed to lead from task definition to performance measurement and follow-on decision making.',
        )}
        process={[
          t('PoC 주제 및 KPI 정의', 'Theme & KPI Definition'),
          t('스타트업 모집·선발', 'Startup Recruitment & Selection'),
          t('현업 Meet-up 및 과제 구체화', 'Meet-ups & Task Refinement'),
          t('PoC 실행·모니터링', 'Execution & Monitoring'),
        ]}
        outputs={[t('PoC 결과 리포트', 'PoC Result Reports'), t('사업화 가능성 검증 자료', 'Feasibility Validation Materials'), t('후속 투자·사업 연계 인풋', 'Investment/Biz Linkage Input')]}
        cases={[
          { label: 'TELCO', projectId: 22 },
          { label: 'FINANCE', projectId: 29 },
        ]}
      />

      <ProgramSection
        eyebrow="INVESTMENT-LINKED PROGRAM"
        title={t('전략적 투자 연계를 통한 성장 가속', 'Strategic Investment Linkage')}
        subtitle={t('오픈이노베이션을 전략적 자산 가치로 전환하는 투자 파이프라인', 'Investment pipeline converting OI into strategic asset value')}
        desc={t(
          '기업의 중장기 전략과 연계 가능한 스타트업을 선제적으로 발굴하고, 투자 관점에서의 검토와 후속 성장까지 연결합니다. 전문 심사역의 사업 협업 가능성과 재무·성장성을 함께 고려한 선별 과정을 통해, 공동 투자, 후속 투자, 정부 R&D 연계 등 다양한 성장 경로를 유기적으로 설계합니다.',
          'Aiming to expand open innovation into a strategic investment pipeline.',
        )}
        process={[
          t('투자 테마 및 기준 정의', 'Investment Theme & Criteria'),
          t('스타트업 모집·심사', 'Startup Recruitment & Review'),
          t('심층 검토 및 투자 검토', 'Deep Dive & Due Diligence'),
          t('투자 및 후속 지원 연계', 'Investment & Support Linkage'),
        ]}
        outputs={[t('투자 검토 대상 기업 Pool', 'Investment Review Target Pool'), t('기업별 투자 분석 자료', 'Company Analysis Materials'), t('공동 투자 또는 후속 투자 연계', 'Co-investment or Follow-on Linkage')]}
        cases={[
          { label: 'ENERGY', projectId: 25 },
          { label: 'MANUFACTURING', projectId: 37 },
        ]}
      />

      <ProgramSection
        reverse
        eyebrow="GLOBAL LINKAGE PROGRAM"
        title={t('해외 시장 검증 및 글로벌 확장 지원', 'Global Expansion Support')}
        subtitle={t('국내의 한계를 넘어 글로벌 시장에서의 무한한 확장을 이끄는 관문', 'Gateway leading infinite expansion in global markets beyond domestic limits')}
        desc={t(
          '단순한 해외 진출 지원이 아닌, 현지 수요 기반의 사업 검증과 실질적인 성과 창출을 중심으로 설계됩니다. 진출 국가별 파트너 네트워크와 프로그램 운영 경험을 바탕으로, 글로벌 PoC, 투자 연계, 후속 오픈이노베이션으로 이어질 수 있는 실질적인 확장 기회를 제공합니다.',
          'Designing based on local demand validation and tangible results.',
        )}
        process={[
          t('진출 국가·산업 정의', 'Target Nation/Industry'),
          t('국내 사전 진단 및 KPI 설정', 'Pre-diagnostic & KPI Setting'),
          t('현지 파트너 연계 프로그램', 'Local Partner Linkage'),
          t('비즈매칭·PoC·시장 테스트', 'Biz Matching & Testing'),
        ]}
        outputs={[t('국가별 시장 검증 결과', 'Market Validation Results'), t('현지 파트너·고객 네트워크', 'Local Partner Networks'), t('글로벌 PoC·투자 연계 성과', 'Global PoC/Investment Results')]}
        cases={[
          { label: 'PUBLIC', projectId: 23 },
          { label: 'SMART CITY', projectId: 33 },
        ]}
      />

      <Clients names={corporateClients} />
    </>
  )
}
