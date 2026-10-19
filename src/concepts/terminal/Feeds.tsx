import { useMemo, useState, type FormEvent } from 'react'
import { Lines } from '../../components/Rich'
import { useLang } from '../../i18n'
import { about, casesCopy, contactCopy, home } from '../../data/copy'
import { projects, teams, categories, studioCaseIds, type CategoryKey, type TeamKey } from '../../data/projects'
import { news, newsCategoryLabel, type NewsCategory } from '../../data/news'
import { site } from '../../data/site'
import { newsCat, orderedMembers, yearKey } from './model'
import { Chip, Head, Label, Panel, useTerminal } from './ui'

/* ───────── Projects log ───────── */
export function ProjectsPanel() {
  const { pick } = useLang()
  const { open } = useTerminal()
  const [team, setTeam] = useState<TeamKey | null>(null)
  const [cat, setCat] = useState<CategoryKey | null>(null)

  const filtered = projects.filter((p) => (!team || p.team === team) && (!cat || p.category === cat))
  const groups = useMemo(() => {
    const m = new Map<string, typeof projects>()
    filtered.forEach((p) => {
      const k = yearKey(p)
      m.set(k, [...(m.get(k) ?? []), p])
    })
    return [...m.entries()].sort((a, b) => b[0].localeCompare(a[0]))
  }, [filtered])
  const studioCases = studioCaseIds.map((id) => projects.find((p) => p.id === id)!).filter(Boolean)
  const catKeys = Object.keys(categories) as CategoryKey[]

  return (
    <Panel id="projects" code="06" title="PROJECT LOG" meta={`${filtered.length} / ${projects.length} ENTRIES`}>
      <Head eyebrow={casesCopy.eyebrow} title={casesCopy.title} desc={pick(casesCopy.desc)} />

      <p className="te-table-title">
        <Label tone="green">{home.casesTitle.toUpperCase()}</Label>
      </p>
      <ul className="te-studio">
        {studioCases.map((p) => (
          <li key={p.id}>
            <button type="button" onClick={() => open({ kind: 'project', id: p.id })}>
              {p.image && (
                <span className="te-studio__img">
                  <img src={p.image} alt="" loading="lazy" />
                </span>
              )}
              <span className="te-studio__meta">
                <span className="te-mono te-green">{p.year}</span>
                <span className="te-mono te-dim">{p.sector}</span>
              </span>
              <span className="te-studio__t">{pick(p.title)}</span>
              {p.summary && <span className="te-studio__s">{pick(p.summary)}</span>}
            </button>
          </li>
        ))}
      </ul>

      <div className="te-filters">
        <div className="te-field">
          <span className="te-label">FILTER · TEAM</span>
          <div className="te-chips">
            <Chip active={!team} onClick={() => setTeam(null)} count={projects.length}>
              ALL
            </Chip>
            {(Object.keys(teams) as TeamKey[]).map((k) => (
              <Chip key={k} active={team === k} onClick={() => setTeam(team === k ? null : k)} count={projects.filter((p) => p.team === k).length}>
                {teams[k]}
              </Chip>
            ))}
          </div>
        </div>
        <div className="te-field">
          <span className="te-label">FILTER · CATEGORY</span>
          <div className="te-chips">
            <Chip active={!cat} onClick={() => setCat(null)}>
              ALL
            </Chip>
            {catKeys.map((k) => (
              <Chip key={k} active={cat === k} onClick={() => setCat(cat === k ? null : k)} count={projects.filter((p) => p.category === k && (!team || p.team === team)).length}>
                {pick(categories[k])}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="te-log">
        {groups.map(([y, list]) => (
          <section key={y} className="te-log__year">
            <h3 className="te-log__y">
              <span>{y}</span>
              <span className="te-dim">{list.length}</span>
            </h3>
            <ul>
              {list.map((p) => (
                <li key={p.id}>
                  <button type="button" onClick={() => open({ kind: 'project', id: p.id })}>
                    <span className="te-log__id">P{String(p.id).padStart(2, '0')}</span>
                    <span className="te-log__main">
                      <span className="te-log__t">{pick(p.title)}</span>
                      {p.summary && <span className="te-log__s">{pick(p.summary)}</span>}
                    </span>
                    <span className="te-log__cat">{pick(categories[p.category])}</span>
                    <span className="te-log__team">{teams[p.team]}</span>
                    <span className="te-log__period">{p.year !== y ? p.year : p.period}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
        {groups.length === 0 && <p className="te-empty">0 ENTRIES</p>}
      </div>
    </Panel>
  )
}

/* ───────── Team directory ───────── */
export function TeamPanel() {
  const { pick } = useLang()
  const { open } = useTerminal()
  let n = 0
  return (
    <Panel id="team" code="07" title="TEAM DIRECTORY" meta={`${orderedMembers.reduce((a, g) => a + g.list.length, 0)} MEMBERS`}>
      <Head title={about.teamTitle} desc={pick(about.teamDesc)} />
      <div className="te-dir">
        {orderedMembers.map((g) => (
          <section key={g.group} className="te-dir__g">
            <h3 className="te-dir__h">
              {g.group} <span className="te-dim">{g.list.length}</span>
            </h3>
            <ul>
              {g.list.map((m) => {
                n += 1
                return (
                  <li key={m.id}>
                    <button type="button" onClick={() => open({ kind: 'member', id: m.id })}>
                      <span className="te-mono te-dim">{String(n).padStart(2, '0')}</span>
                      <span className="te-strong">{pick(m.name)}</span>
                      <span className="te-dir__role">{pick(m.role)}</span>
                      <span className="te-dir__go" aria-hidden>
                        OPEN →
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </section>
        ))}
      </div>
    </Panel>
  )
}

/* ───────── Ecosystem ───────── */
export function EcosystemPanel() {
  const { pick } = useLang()
  return (
    <Panel id="ecosystem" code="08" title="ECOSYSTEM" meta={`${about.eco.reduce((a, g) => a + g.items.length, 0)} NODES`}>
      <Head title={about.ecoTitle} desc={pick(about.ecoDesc)} />
      <div className="te-eco">
        {about.eco.map((g) => (
          <section key={g.group}>
            <h3 className="te-dir__h">
              {g.group} <span className="te-dim">{g.items.length}</span>
            </h3>
            <ul>
              {g.items.map((it, i) => (
                <li key={i}>
                  <strong>{pick(it.name)}</strong>
                  <span>{pick(it.desc)}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Panel>
  )
}

/* ───────── News feed ───────── */
type NewsFilter = Exclude<NewsCategory, null> | 'all'

export function NewsPanel() {
  const { open } = useTerminal()
  const [f, setF] = useState<NewsFilter>('all')
  const list = news.filter((n) => f === 'all' || n.category === f)
  const cats = Object.keys(newsCategoryLabel) as Exclude<NewsCategory, null>[]
  return (
    <Panel id="news" code="09" title="NEWS FEED" meta={`${list.length} ITEMS`}>
      <div className="te-chips te-chips--row">
        <Chip active={f === 'all'} onClick={() => setF('all')} count={news.length}>
          ALL
        </Chip>
        {cats.map((c) => (
          <Chip key={c} active={f === c} onClick={() => setF(c)} count={news.filter((n) => n.category === c).length}>
            {newsCategoryLabel[c]}
          </Chip>
        ))}
        {site.links.blog && (
          <a className="te-link te-chips__ext" href={site.links.blog} target="_blank" rel="noreferrer">
            Blog ↗
          </a>
        )}
      </div>
      <div className="te-tablewrap te-tablewrap--tall">
        <ul className="te-news">
          {list.map((n, i) => {
            const inner = (
              <>
                <span className="te-news__d">{n.date}</span>
                <span className="te-news__c">{newsCat(n) || '—'}</span>
                <span className="te-news__t">
                  {n.title}
                  {n.summary && <span className="te-news__s">{n.summary}</span>}
                </span>
                <span className="te-news__go">{n.id != null ? 'OPEN →' : 'EXT ↗'}</span>
              </>
            )
            return (
              <li key={(n.id ?? 'x') + '-' + i}>
                {n.id != null ? (
                  <button type="button" onClick={() => open({ kind: 'news', id: n.id! })}>
                    {inner}
                  </button>
                ) : (
                  <a href={n.url} target="_blank" rel="noreferrer">
                    {inner}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </Panel>
  )
}

/* ───────── Contact ───────── */
type InquiryType = 'general' | 'investment' | 'partnership' | 'global' | 'cv'

export function ContactPanel() {
  const { t, pick } = useLang()
  const [type, setType] = useState<InquiryType>('general')
  const [track, setTrack] = useState('DRAGONS')
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '', url: '' })

  const types: { value: InquiryType; label: string }[] = [
    { value: 'general', label: t('일반 문의', 'General Inquiry') },
    { value: 'investment', label: t('투자 제안 요청', 'Investment Proposal') },
    { value: 'partnership', label: t('오픈이노베이션·파트너십', 'Open Innovation / Partnership') },
    { value: 'cv', label: t('사내벤처·신사업 육성', 'Corporate Venture / New Business') },
    { value: 'global', label: t('글로벌 진출 (SEA)', 'Global Expansion (SEA)') },
  ]
  const tracks = [
    { value: 'LICORNS', label: 'LICORNS TRACK', desc: t('LIPS 기반 스케일업 · 라이프스타일/로컬 브랜드', 'LIPS-based scale-up · lifestyle/local brands') },
    { value: 'DRAGONS', label: 'DRAGONS TRACK', desc: t('TIPS 기반 기술 고도화 · AI/반도체/바이오', 'TIPS-based tech · AI/semiconductor/bio') },
    { value: 'VENTURE-STUDIO', label: 'Venture-Studio TRACK', desc: t('예비창업부터 법인 설립·투자·EXIT까지 공동 설계', 'Co-design from pre-founding to incorporation, investment and exit') },
  ]
  const update = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const typeLabel = types.find((x) => x.value === type)?.label ?? type
    const subject = `[${typeLabel}] ${form.company || form.name}`
    const lines = [
      `${t('문의 유형', 'Type')}: ${typeLabel}`,
      type === 'investment' ? `${t('희망 트랙', 'Track')}: ${track}` : '',
      `${t('이름', 'Name')}: ${form.name}`,
      `${t('회사/기관', 'Company')}: ${form.company}`,
      `${t('이메일', 'Email')}: ${form.email}`,
      `${t('연락처', 'Phone')}: ${form.phone}`,
      form.url ? `${t('IR 자료/웹사이트', 'Deck / Website')}: ${form.url}` : '',
      '',
      form.message,
    ].filter((l, i, arr) => l !== '' || arr[i - 1] !== '')
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
    setSent(true)
  }

  return (
    <Panel id="contact" code="10" title="CONTACT" meta={site.email}>
      <div className="te-contact">
        <div className="te-contact__info">
          <Head eyebrow={contactCopy.ctaTitle} title={contactCopy.title} desc={pick(contactCopy.desc)} />
          <p className="te-contact__git">
            <Lines text={pick(contactCopy.getInTouchDesc)} />
          </p>
          <dl className="te-kvs te-kvs--contact">
            <div className="te-kv">
              <dt>{t('본사 (HQ)', 'Headquarters')}</dt>
              <dd>
                <Lines text={pick(site.hq)} />
              </dd>
            </div>
            <div className="te-kv">
              <dt>{t('베트남 현지법인', 'Vietnam Office')}</dt>
              <dd>
                <Lines text={site.vietnam} />
              </dd>
            </div>
            <div className="te-kv">
              <dt>PHONE</dt>
              <dd>
                <a className="te-link" href={`tel:${site.phone.replace(/-/g, '')}`}>
                  {site.phone}
                </a>
              </dd>
            </div>
            <div className="te-kv">
              <dt>EMAIL</dt>
              <dd>
                <a className="te-link" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form className="te-form" onSubmit={onSubmit}>
          <div className="te-form__bar">
            <span className="te-dots" aria-hidden>
              <i />
              <i />
              <i />
            </span>
            <span>mailto://{site.email}</span>
          </div>
          <div className="te-form__body">
            <p className="te-form__line">
              <span className="te-green">til@venture-studio</span>
              <span className="te-dim">:~$</span> {t('문의하기', 'Send an inquiry')}
            </p>
            <fieldset>
              <legend>--type · {t('문의 유형', 'Inquiry type')}</legend>
              <div className="te-chips">
                {types.map((x) => (
                  <label key={x.value} className={'te-chip' + (type === x.value ? ' is-on' : '')}>
                    <input type="radio" name="te-type" value={x.value} checked={type === x.value} onChange={() => setType(x.value)} />
                    {x.label}
                  </label>
                ))}
              </div>
            </fieldset>
            {type === 'investment' && (
              <fieldset>
                <legend>--track · {t('희망 트랙 (2026 Venture Scaleup Program 상시 모집)', 'Track (2026 Venture Scaleup Program, rolling)')}</legend>
                <div className="te-tracks">
                  {tracks.map((tr) => (
                    <label key={tr.value} className={'te-track' + (track === tr.value ? ' is-on' : '')}>
                      <input type="radio" name="te-track" value={tr.value} checked={track === tr.value} onChange={() => setTrack(tr.value)} />
                      <strong>{tr.label}</strong>
                      <span>{tr.desc}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            )}
            <div className="te-form__grid">
              <label>
                <span>&gt; {t('이름', 'Name')} *</span>
                <input required value={form.name} onChange={update('name')} autoComplete="name" />
              </label>
              <label>
                <span>&gt; {t('회사/기관명', 'Company')} *</span>
                <input required value={form.company} onChange={update('company')} autoComplete="organization" />
              </label>
              <label>
                <span>&gt; {t('이메일', 'Email')} *</span>
                <input required type="email" value={form.email} onChange={update('email')} autoComplete="email" />
              </label>
              <label>
                <span>&gt; {t('연락처', 'Phone')}</span>
                <input type="tel" value={form.phone} onChange={update('phone')} autoComplete="tel" />
              </label>
              {type === 'investment' && (
                <label className="te-form__full">
                  <span>&gt; {t('IR 자료 링크 / 웹사이트', 'Pitch deck link / Website')}</span>
                  <input type="url" placeholder="https://" value={form.url} onChange={update('url')} />
                </label>
              )}
              <label className="te-form__full">
                <span>&gt; {t('문의 내용', 'Message')} *</span>
                <textarea required rows={6} value={form.message} onChange={update('message')} />
              </label>
            </div>
            <button type="submit" className="te-btn te-btn--primary te-btn--block">
              {t('문의 보내기', 'Send')} ↵
            </button>
            <p className="te-form__note">
              {sent
                ? t('메일 앱이 열렸습니다. 열리지 않았다면 아래 주소로 직접 보내주세요: ', 'Your mail app should have opened. If not, please email us directly: ')
                : t('제출 시 메일 앱으로 연결됩니다. 문의: ', 'Submitting opens your mail app. Email: ')}
              <a className="te-link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
        </form>
      </div>
    </Panel>
  )
}
