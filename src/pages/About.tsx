import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import { PageHero, Reveal, SectionHead } from '../components/ui'
import { Rich } from '../components/Rich'
import { memberById, teamGroups, type Member } from '../data/team'

function avatarText(m: Member, lang: 'ko' | 'en') {
  const latin = /^[A-Za-z]/.test(m.name.ko)
  if (lang === 'en' || latin) {
    return (m.name.en ?? m.name.ko)
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
  }
  return m.name.ko.slice(1)
}

export default function About() {
  const { t, pick, lang } = useLang()
  const [active, setActive] = useState<Member | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  const pillars = [
    {
      tag: 'CORPORATE VENTURE STUDIO',
      title: t('대기업·중견기업 맞춤형 신규 기술 및 사업화 아이템 발굴', 'Scouting new technologies & BM items for large/mid-sized corporations'),
      desc: t(
        '필요한 인재풀(창업자·연구소·스타트업)을 직접 매칭하고, 기업 협업팀이 기술을 내재화할 수 있도록 밀도 높은 벤처 스튜디오 모델을 셋업합니다.',
        'Directly matching talent pools and setting up intensive venture studio models for technical internalization.',
      ),
    },
    {
      tag: 'SPECIALIZED STUDIO MODEL',
      title: t('Vertical AI SaaS 기반의 초격차 스타트업 발굴 및 육성', 'Discovering & incubating hyper-gap startups based on Vertical AI SaaS'),
      desc: t(
        '유망 창업팀을 발굴하여 TIPS 연계 투자(최소 2억 이상) 및 자본 조달(10억 이상)을 지원하며, 자체 벤처 스튜디오 모델을 운영하여 빠른 시장 런칭을 리드합니다.',
        'Identifying promising teams for TIPS investments ($200k+) and capital raising ($1M+), leading rapid market launches.',
      ),
    },
    {
      tag: 'GLOBAL EXPANSION',
      title: t('K-소비재·브랜드의 동남아시아 시장 선제적 진출 지원', 'Supporting preemptive entry of K-Consumer brands into SEA markets'),
      desc: t(
        '베트남 중심의 신흥 시장으로 확장 가능한 팀을 선발하여 선제 투자(LIPS 연계, 4~5억 이상 자본 조달)를 집행하고 해외 진출 성과를 가시화합니다.',
        'Selecting teams capable of expansion into emerging markets like Vietnam, executing investments and visualizing global results.',
      ),
    },
    {
      tag: 'TOTAL ACCELERATING',
      title: t('Talent부터 Capital까지, 액셀러레이팅의 전 과정 리드', 'Leading the full accelerating process from Talent to Capital'),
      desc: t(
        '아이템 발굴, 투자 연계, 블렌디드 파이낸싱(정부 R&D), 국내외 전문가 네트워크 및 파트너십 구축까지 비즈니스 성장에 필요한 모든 요소를 통합 지원합니다.',
        'Integrated support for all elements of business growth, from ideation and investment to blended financing and expert networks.',
      ),
    },
  ]

  const eco = [
    {
      group: 'Deep-Tech',
      items: [
        { name: t('아브라삭스', 'ΑΒΡΑΞΑΣ'), desc: t('AI반도체/부품 및 관련 유관기술, 디지털헬스케어 분야 전문', 'Specialized in AI semiconductors/components and digital healthcare.') },
        { name: t('커리어데이', 'CareerDay'), desc: t('AI SaaS / 기술전략 / 마케팅 전략 등 현업 전문가 Pool 1만 명 이상 보유', 'Expert pool of 10,000+ in AI SaaS, tech strategy, and marketing.') },
      ],
    },
    {
      group: 'K-Consumer',
      items: [
        { name: 'SPBT', desc: t('백채김치찌개 창업팀이 설립한 K-Food Brand Aggregator, 10개 이상 F&B브랜드 런칭', 'K-Food Brand Aggregator founded by Baekchae Kimchi-jjigae team.') },
        { name: t('아이소이', 'ISOI'), desc: t('라이콘 투자조합1호 LP 참여, K-뷰티 분야 초기스타트업 발굴-자문', 'LP in Lycon Fund #1, scouting and advising early K-Beauty startups.') },
      ],
    },
    {
      group: 'Global',
      items: [
        {
          name: t('더인벤션랩 호치민 법인', 'The Invention Lab Ho Chi Minh Office'),
          desc: t('더인벤션랩의 100% 출자 베트남 법인으로, 베트남 시장 조사와 현지 파트너 연계를 수행', 'A 100% owned Vietnamese subsidiary of The Invention Lab, conducting market research and local partner connections.'),
        },
        {
          name: 'SunwayiLabs',
          desc: t('말레이시아 진출을 희망하는 스타트업 대상으로 PoC 및 컨설팅 연계를 지원하는 현지 파트너 기관', 'A local partner organization supporting PoC and consulting connections for startups wishing to enter Malaysia.'),
        },
        {
          name: 'Y-Space',
          desc: t(
            '캐나다 York University 산하의 스타트업 액셀러레이션 및 산학협력 기반 혁신 허브로, 북미 시장 진출을 지원하는 파트너 기관',
            'A startup acceleration and industry-academia innovation hub under York University, Canada, supporting North American market entry.',
          ),
        },
        {
          name: t('씨랩스(C-LAPS)', 'C-LAPS'),
          desc: t(
            '베트남 호치민을 거점으로 한 종합 마케팅 에이전시로, 광고·콘텐츠 제작은 물론 현지 행사 운영까지 지원하는 파트너 기관',
            'A comprehensive marketing agency based in Ho Chi Minh City, Vietnam, supporting advertising, content creation, and local event operations.',
          ),
        },
        {
          name: t('콜라보엑스', 'Collabo X'),
          desc: t('한국 유망 F&B 브랜드의 베트남 진출을 위한 마스터 프랜차이즈 운영 및 마케팅 실행 주체', 'Master franchise operator and marketing executor for promising Korean F&B brands entering Vietnam.'),
        },
      ],
    },
  ]

  return (
    <>
      <PageHero
        eyebrow="WHO WE ARE"
        title={t(
          '국내 오픈 이노베이션과 연계투자를 넘어\n글로벌 유망기업의 핵심 파트너로 발돋움합니다.',
          'Beyond Domestic Open Innovation & Linked Investment,\nBecoming a Key Partner for Global Emerging Enterprises.',
        )}
        desc={t(
          '더인벤션랩은 K-Deep Tech 및 K-소비재 초기 기업의 글로벌 파트너입니다.\n베트남, 싱가포르, 말레이시아 등 동남아시아 현지 네트워크와 투자 경험을 바탕으로\n한국 기술 기업의 해외 시장 진출과 초기 투자를 실질적으로 지원합니다.',
          'The Invention Lab is a global partner for K-Deep Tech and K-Consumer early-stage ventures. Leveraging our networks and investment experience in SEA countries like Vietnam, Singapore, and Malaysia, we provide substantial support for market entry and seed investments.',
        )}
      />

      <section className="section">
        <div className="container pillar-grid">
          {pillars.map((p, i) => (
            <Reveal key={p.tag} delay={i * 70}>
              <article className="pillar">
                <span className="pillar__no">0{i + 1}</span>
                <div className="eyebrow">{p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead
            center
            eyebrow="ECOSYSTEM"
            title="The Invention Lab's Eco System"
            desc={t(
              '더인벤션랩은 강력한 파트너 에코시스템을 통해\n초기 아이디어의 기술적 구현부터 시장 안착, 그리고 글로벌 확장까지 벤처 빌딩의 전 과정을 입체적으로 지원합니다.',
              'The Invention Lab provides multi-dimensional support for the entire venture building process, from technical implementation to market settling and global expansion, through a powerful partner ecosystem.',
            )}
          />
          <div className="eco">
            {eco.map((g) => (
              <div key={g.group} className={'eco__group eco__group--' + g.group.toLowerCase().replace(/[^a-z]/g, '')}>
                <h3>{g.group}</h3>
                <div className="eco__items">
                  {g.items.map((it) => (
                    <div key={it.name} className="eco__item">
                      <strong>{it.name}</strong>
                      <p>{it.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="team">
        <div className="container">
          <SectionHead
            eyebrow="TEAM"
            title="Meet Our Teams"
            desc={t(
              '분야별 최고의 전문가들이 창업팀의 페이스메이커가 되어,\n비즈니스의 탄생부터 스케일업까지 모든 과정을 함께 고민하고 실행합니다.',
              'Top experts in each field act as pacemakers for startup teams, thinking and executing together throughout the entire journey from business birth to scale-up.',
            )}
          />
          <div className="team-groups">
          {teamGroups.map((g) => (
            <div key={g.key} className="team-group" style={{ flexGrow: g.members.length, minWidth: `min(100%, ${g.members.length * 150}px)` }}>
              <h3 className="team-group__label">{g.label}</h3>
              <div className="team-grid" style={{ ['--cols' as string]: g.members.length }}>
                {g.members.map((id) => {
                  const m = memberById(id)
                  if (!m) return null
                  return (
                    <button key={id} className="member" onClick={() => setActive(m)}>
                      <span className="member__avatar" aria-hidden>
                        {avatarText(m, lang)}
                      </span>
                      <span className="member__name">{pick(m.name)}</span>
                      <span className="member__role">{pick(m.role)}</span>
                      <span className="member__more">{t('프로필 보기', 'View profile')} +</span>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {active && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={pick(active.name)} onClick={() => setActive(null)}>
          <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setActive(null)} aria-label="닫기">
              ×
            </button>
            <div className="modal__head">
              <span className="member__avatar member__avatar--lg" aria-hidden>
                {avatarText(active, 'ko')}
              </span>
              <div>
                <div className="eyebrow">{active.unit.toUpperCase()}</div>
                <h2>
                  {active.name.ko} <small>{active.name.en !== active.name.ko ? active.name.en : ''}</small>
                </h2>
                <div className="modal__role">
                  {active.role.ko}
                  {active.role.en && active.role.en !== active.role.ko ? ` / ${active.role.en}` : ''}
                </div>
              </div>
            </div>
            <div className="modal__body">
              {lang === 'en' && active.introEn ? (
                <section>
                  <h4>Introduction</h4>
                  <Rich text={active.introEn} />
                </section>
              ) : (
                <section>
                  <h4>소개</h4>
                  <Rich text={active.intro} />
                </section>
              )}
              {active.education && (
                <section>
                  <h4>{t('학력', 'Education')}</h4>
                  <Rich text={active.education} />
                </section>
              )}
              {active.career && (
                <section>
                  <h4>{t('경력', 'Career')}</h4>
                  <Rich text={active.career} className="rich--small" />
                </section>
              )}
              {lang === 'ko' && active.introEn && (
                <details className="modal__en">
                  <summary>Introduction (EN)</summary>
                  <Rich text={active.introEn} />
                </details>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
