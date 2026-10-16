import { useLang } from '../../i18n'
import { Eyebrow, PageHero, Reveal, SectionHead, Stats } from '../../components/ui'

export default function VentureBuilding() {
  const { t, lang } = useLang()

  const scouting = [
    {
      title: t('벤처 스카우팅', 'Venture Scouting'),
      items: [t('공식 검토 의뢰', 'Official Review Requests'), t('외부 추천', 'External Referrals'), t('스카우팅 네트워크', 'Scouting Networks'), t('오픈이노베이션&액셀러레이팅 프로그램', 'OI & Accelerating Programs')],
    },
    {
      title: t('초기 투자', 'Seed Investment'),
      items: [t('서류 검토', 'Document Review'), t('캐주얼 IR', 'Casual IR'), t('투자심의 (예비-본심)', 'Investment Committee'), t('투자의사결정', 'Investment Decision')],
    },
    {
      title: t('블렌디드 파이낸싱', 'Blended Financing'),
      items: ['TIPS', 'LIPS', t('신용보증기금 보증 연계', 'KODIT Credit Guarantees'), t('기술보증기금 보증 연계', 'KIBO Tech Guarantees')],
    },
  ]

  const benefits = [
    {
      title: t('지분 희석 최소화', 'Minimize Dilution'),
      desc: t('적은 지분 매각으로도 최대 10억~15억 원 규모의 운영 자금을 확보하여 창업팀의 지배력을 보호합니다.', 'Protect founder control by securing up to 1-1.5B KRW in funds with minimal equity sale.'),
    },
    {
      title: t('성장 가속화', 'Growth Acceleration'),
      desc: t('시드 단계에서 Pre-A 규모의 자금을 투입함으로써 시장 검증 및 Scale-up 속도를 비약적으로 높입니다.', 'Dramatically increase market validation and scale-up speed by injecting Pre-A level funds at the seed stage.'),
    },
    {
      title: t('신뢰의 보증', 'Seal of Trust'),
      desc: t(
        "더인벤션랩의 리드 투자는 정부 및 공공 금융기관의 후속 지원을 이끌어내는 강력한 '신용 보증서' 역할을 합니다.",
        "Our lead investment acts as a powerful 'credit certificate' that leads to follow-on support from gov and public agencies.",
      ),
    },
  ]

  const table = lang === 'ko'
    ? {
        head: ['구분', '지원 프로그램', '더인벤션랩 투자 조건', '확보 가능 자금 (최대)', '비고'],
        rows: [
          ['정부 R&D', '중기부 TIPS', '2억 원 (지방 1억)', '최대 11억 원', 'R&D(8억)+연계사업(3억)'],
          ['정부 R&D', '서울형 TIPS', '1억 원', '최대 4억 원', 'R&D (4억)'],
          ['소상공인', 'LIPS (L1)', '투자 집행', '최대 5억 원', '투자금의 5배수, 직접 융자 연계'],
          ['소상공인', 'LIPS (L2)', '투자 집행', '최대 2억 원', '투자금의 3배수, 사업화 지원금'],
          ['보증/융자', '신용보증기금', '투자 집행', '개별 추천', '스타트업 지점 협약을 통한 보증-융자'],
          ['보증/융자', '기술보증기금', '투자 집행', '개별 추천', '엔젤파트너스 협약을 통한 우대 보증'],
        ],
      }
    : {
        head: ['TYPE', 'PROGRAM', 'TIL INVESTMENT COND.', 'MAX FUNDS', 'NOTES'],
        rows: [
          ['Gov R&D', 'MSS TIPS', '200M KRW', 'Up to 1.1B KRW', 'R&D(800M) + Linked(300M)'],
          ['Gov R&D', 'Seoul TIPS', '100M KRW', 'Up to 400M KRW', 'R&D(400M)'],
          ['Micro-Biz', 'LIPS (L1)', 'Equity Inv.', 'Up to 500M KRW', '5x Inv amount, direct loan link'],
          ['Micro-Biz', 'LIPS (L2)', 'Equity Inv.', 'Up to 200M KRW', '3x Inv amount, commercialization grant'],
          ['Guarantee', 'KODIT', 'Equity Inv.', 'Individual Rec.', 'Loan-guarantee via MOU'],
          ['Guarantee', 'KIBO', 'Equity Inv.', 'Individual Rec.', 'Preferential guarantee via Angel Partners MOU'],
        ],
      }

  const phases = [
    {
      label: t('PHASE 1 ㅣ 발굴 및 선발', 'PHASE 1 ㅣ DISCOVERY & SELECTION'),
      title: t('발굴 및 선발', 'Discovery & Selection'),
      desc: t('시장의 잠재력을 발굴하고 혁신의 원석을 가려내는 단계입니다.', 'Stage of discovering market potential and screening innovation gems.'),
      steps: [
        ['Venture Scouting', t('공개 모집 및 전략적 네트워크를 통한 유망 창업팀 발굴', 'Discovering promising teams through open calls and strategic networks')],
        ['In-Depth Screening', t('서류 검토 및 캐주얼 IR을 통한 비즈니스 모델의 유효성 검증', 'Validating BM effectiveness via document reviews and casual IR')],
        ['Investment Interview', t('예비·최종 투심위를 통한 심층 인터뷰 및 다각적 역량 평가', 'In-depth interviews and multifaceted capability assessment via committees')],
      ],
    },
    {
      label: t('PHASE 2 ㅣ 구조 설계 및 집행', 'PHASE 2 ㅣ STRUCTURING & INVESTMENT'),
      title: t('구조 설계 및 집행', 'Structuring & Investment'),
      desc: t('성장에 최적화된 금융 엔진을 장착하고 자본을 투입하는 단계입니다.', 'Stage of mounting growth-optimized financial engines and injecting capital.'),
      steps: [
        ['Due Diligence', t('법률·재무 실사 및 평판 조회를 통한 투자 리스크 최소화', 'Minimizing risks through legal/financial DD and reputation checks')],
        ['Term Sheet', t('TIPS, LIPS 등을 고려한 최적의 금융 구조 설계 및 투자 조건 협의', 'Designing optimal financial structures and negotiating terms')],
        ['Contract & Investment', t('신속하고 투명한 계약 체결 및 투자금 집행', 'Rapid and transparent contract signing and fund execution')],
      ],
    },
    {
      label: t('PHASE 3 ㅣ 성장 지원 및 회수', 'PHASE 3 ㅣ VALUE-UP & EXIT'),
      title: t('성장 지원 및 회수', 'Value-up & Exit'),
      desc: t('지표를 증명하고 압도적인 스케일업으로 완주를 지원하는 단계입니다.', 'Stage of proving metrics and supporting full-scale growth for exit.'),
      steps: [
        ['Portfolio Management', t("'키메트릭'과 '펀드 보고 시스템'을 활용한 데이터 기반 사후 관리", 'Data-driven post-investment management using Keymetric and Fund-Reporting')],
        ['Accelerating & Follow-on', t('밀착 액셀러레이팅 및 후속 투자(Series A 등) 유치 연계', 'Intensive accelerating and linking to follow-on Series A rounds')],
        ['M&A & IPO', t('기업 가치 극대화 및 성공적인 엑시트를 위한 전문적인 딜 어드바이저리', 'Expert deal advisory for value maximization and successful exits')],
      ],
    },
  ]

  const terms = [
    {
      k: t('투자 규모', 'Ticket Size'),
      v: t(
        'LIPS 연계 시 5천만~1억 원, TIPS 연계 시 1억~2억 원 내외의 전략적 자금을 투입하여 초기 성장의 가용 자원을 극대화합니다.',
        'Maximize early growth resources with 50-100M KRW (LIPS) or 100-200M KRW (TIPS) strategic funds.',
      ),
    },
    {
      k: t('지분 구조', 'Equity Struct.'),
      v: t(
        '일반 지분형 투자는 10~20%, 밀착형 벤처스튜디오 투자는 20~30%의 지분을 확보하여 파트너십 기반의 책임 있는 성장을 지원합니다.',
        'Standard equity investment (10-20%) or Venture Studio investment (20-30%) for partnership-based growth.',
      ),
    },
    {
      k: t('투자 범위', 'Target Scope'),
      v: t(
        '기업가형 소상공인부터 딥테크 기술 기업까지, 산업 분야와 업력의 제한 없이 혁신의 본질을 가진 모든 팀에 투자합니다.',
        'Invest in any team with the essence of innovation, from entrepreneurial micro-biz to deep-tech firms.',
      ),
    },
    {
      k: t('우대 사항', 'Preferences'),
      v: t(
        'TIPS·LIPS 희망팀, 3년 차 미만 초기 기업, 비수도권 소재 및 해외 진출 성과 보유 팀에게는 평가 시 전략적 가점을 부여합니다.',
        'Strategic points for TIPS/LIPS hopefuls, early-stage (<3yr), non-capital region, or global-entry teams.',
      ),
    },
  ]

  let stepNo = 0

  return (
    <>
      <PageHero
        variant="teal"
        eyebrow="THINK LIKE A CO-FOUNDER, GROW LIKE A TEAM."
        title="Venture Scale-up & Management"
        desc={t(
          '공동창업자의 마음으로 고민하고, 성장의 문턱을 함께 넘습니다. Think like a co-founder, grow like a team.',
          'We agonize with the heart of a co-founder and cross the threshold of growth together. Think like a co-founder, grow like a team.',
        )}
        cta={{ label: 'Scale Your Growth', to: '/contact?type=investment' }}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            title={t(
              '법인 설립부터 성공적인 엑시트까지, 단계별 지원 체계로 성장의 전 과정을 정교하게 설계합니다.',
              'From incorporation to a successful exit, we precisely design the entire growth process with a step-by-step support system.',
            )}
            desc={t(
              '단순한 조력자를 넘어, 당신의 여정을 끝까지 완주하는 공동창업자가 되겠습니다. 더인벤션랩은 혁신의 시작부터 결실을 맺는 순간까지 모든 단계를 함께하며 압도적인 성장을 지원합니다.',
              'Beyond being a simple helper, we will be a co-founder who completes your journey to the end. The Invention Lab accompanies you at every stage from the beginning of innovation to the moment of fruition.',
            )}
          />
          <Stats
            items={[
              { value: '500+', label: t('운용자산규모 (AUM, 억 원)', 'AUM (100M KRW)') },
              { value: '50+', label: t('TIPS 선정기업수', 'TIPS SELECTED COMPANIES') },
              { value: '200+', label: t('포트폴리오사', 'PORTFOLIO COMPANIES') },
              { value: '20+', label: t('LIPS 선정기업수', 'LIPS SELECTED COMPANIES') },
            ]}
          />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead
            eyebrow="VENTURE SCOUTING & INVESTMENT"
            title={t('벤처 스카우팅 및 초기 투자', 'Venture Scouting & Seed Investment')}
            desc={t(
              '혁신의 원석을 발굴하고 성장의 첫 단추를 함께 채웁니다.\n\n시장의 근본적인 문제를 해결할 독보적 기술력과 사업 역량을 갖춘 팀에 집중합니다. 더인벤션랩은 초기 단계부터 파트너로 합류하여, 실질적인 고객 지표 중심의 검증과 과감한 투자를 통해 비즈니스의 폭발적인 성장을 견인합니다.',
              'Discovering the gems of innovation and securing the first step of growth.\n\nWe focus on teams with unique technological prowess and business capabilities to solve fundamental market problems. The Invention Lab joins as a partner from the early stages, driving explosive business growth through practical customer-metric-centered validation and bold investment.',
            )}
          />
          <div className="triple">
            {scouting.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="triple__card">
                  <h3>{s.title}</h3>
                  <ol className="steps steps--compact">
                    {s.items.map((it, j) => (
                      <li key={it}>
                        <span>{j + 1}</span>
                        {it}
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="BLENDED FINANCING"
            title={t('금융 구조 설계 전략', 'Financial Structure Strategy')}
            desc={t(
              '시드 단계에서 Pre-A급 자금력을 확보하는 다각적 금융 설계\n\n더인벤션랩은 단순 투자를 넘어 TIPS, LIPS, 신보/기보를 아우르는 다각적 금융 구조를 설계합니다. 이를 통해 초기 창업팀은 Pre-A 라운드 수준의 가용 자금을 확보하고, 성장의 골든타임을 선점할 수 있습니다.',
              'Multifaceted financial design to secure Pre-A level funding at the seed stage.\n\nBeyond simple investment, The Invention Lab designs multifaceted financial structures encompassing TIPS, LIPS, and KODIT/KIBO. This allows early startup teams to secure available funds at a Pre-A round level and preoccupy the golden time of growth.',
            )}
          />
          <div className="benefit-grid">
            {benefits.map((b) => (
              <div key={b.title} className="benefit">
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
          <h3 className="table-title">{t('지원 프로그램 및 자금 규모 상세', 'SUPPORT PROGRAMS & FUND SIZES')}</h3>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  {table.head.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((r) => (
                  <tr key={r[1]}>
                    {r.map((c, i) => (
                      <td key={i} className={i === 3 ? 'td-strong' : ''}>
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <SectionHead
            light
            eyebrow="INVESTMENT PROCESS"
            title={t('투자 및 액셀러레이팅 프로세스', 'Investment & Accelerating Process')}
            desc={t(
              '공동창업자의 관점에서 성장의 문턱을 함께 넘는 정교한 여정\n\n법인 설립부터 성공적인 엑시트까지, 단계별 지원 체계로 성장의 전 과정을 정교하게 설계합니다. 더인벤션랩만의 전문적인 가이드와 리소스를 통해 스타트업의 생존율을 높이고 성공 확률을 극대화합니다.',
              'A sophisticated journey crossing growth thresholds together from a co-founder perspective.\n\nFrom incorporation to exit, we precisely design the entire growth process with a step-by-step support system.',
            )}
          />
          <div className="phases">
            {phases.map((p) => (
              <div key={p.label} className="phase">
                <div className="phase__head">
                  <Eyebrow light>{p.label}</Eyebrow>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="phase__steps">
                  {p.steps.map(([name, desc]) => {
                    stepNo += 1
                    return (
                      <div key={name} className="phase-step">
                        <span>STEP {stepNo}</span>
                        <strong>{name}</strong>
                        <p>{desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="INVESTMENT TERMS"
            title={t('주요 투자 조건', 'Primary Investment Terms')}
            desc={t('시장 상황 및 팀의 역량에 따라 유연하게 협의 가능합니다.', 'Flexible negotiations possible based on market conditions and team capabilities.')}
          />
          <div className="terms">
            {terms.map((x) => (
              <div key={x.k} className="term">
                <h4>{x.k}</h4>
                <p>{x.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead
            eyebrow="MANAGEMENT SYSTEM"
            title={t('펀드 및 포트폴리오 관리 시스템', 'Fund & Portfolio Management System')}
            desc={t(
              "데이터로 입증하는 압도적 투명성과 선제적 리스크 관리 체계\n\n더인벤션랩은 강력한 보안의 '펀드 보고 시스템'과 자체 개발 AI 솔루션인 '키메트릭(Keymetric)'을 결합하여 데이터 중심의 정교한 관리 체계를 운영합니다. 이를 통해 LP에게는 투자 운용의 압도적 투명성을 실시간으로 보장하며, 포트폴리오사에는 정밀한 지표 분석을 바탕으로 선제적 리스크 관리와 가시적인 성장의 경로를 제시합니다.",
              "Overwhelming transparency and proactive risk management system proven by data.\n\nThe Invention Lab operates a sophisticated data-driven management system by combining a secure 'Fund Reporting System' with our proprietary AI solution, 'Keymetric'. This guarantees overwhelming real-time transparency for LPs and provides portfolio companies with proactive risk management and clear growth paths based on precise metric analysis.",
            )}
          />
          <div className="dual">
            <div className="dual__card">
              <span className="dual__no">01</span>
              <h3>{t('펀드 보고 시스템 (for LP)', 'Fund Reporting System (for LP)')}</h3>
              <p>
                {t(
                  "더인벤션랩은 강력한 보안 체계를 갖춘 Notion 기반의 '펀드 보고 시스템'을 통해 LP(출자자)에게 운용 현황을 실무 수준으로 투명하게 공개합니다. 이를 통해 LP는 승인된 권한으로 개별 포트폴리오의 실시간 현황과 서류를 상시 확인하며, 투자 자산에 대한 깊은 신뢰와 관리의 편의성을 동시에 확보할 수 있습니다.",
                  "We transparently disclose operational status to LPs at a practical level through a Notion-based 'Fund Reporting System' with a strong security framework. LPs can check real-time status and documents of individual portfolios with authorized access, ensuring deep trust and convenience.",
                )}
              </p>
            </div>
            <div className="dual__card dual__card--accent">
              <span className="dual__no">02</span>
              <h3>{t('키메트릭 (for Portfolio)', 'Keymetric (for Portfolio)')}</h3>
              <p>
                {t(
                  "자체 개발한 AI 기반 대시보드 '키메트릭(Keymetric)'은 포트폴리오사의 사업·기술·자금 지표를 월 단위로 정밀 분석하여 성장의 흐름을 데이터로 입증합니다. 이를 통해 더인벤션랩은 정성적 판단을 넘어선 선제적 리스크 관리 체계를 가동하고, 각 팀의 핵심 지표에 최적화된 밀착형 성장 지원 솔루션을 제공합니다.",
                  "Our proprietary AI-based dashboard 'Keymetric' proves growth trends with data by precisely analyzing portfolio companies' business, tech, and financial metrics on a monthly basis. This enables a proactive risk management system beyond qualitative judgment.",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
