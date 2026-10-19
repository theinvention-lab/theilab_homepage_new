import { useState, type FormEvent } from 'react'
import { useLang } from '../../i18n'
import { contactCopy } from '../../data/copy'
import { site } from '../../data/site'
import { Arrow, Lines, Pill, SectionHead, scrollToId, type InquiryType } from './shared'

export default function Contact({ type, setType }: { type: InquiryType; setType: (t: InquiryType) => void }) {
  const { t, pick } = useLang()
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
    { value: 'LICORNS', label: 'LICORNS TRACK', desc: t('LIPS 기반 스케일업 · 라이프스타일/로컬 브랜드', 'LIPS-based scale-up · lifestyle/local brands'), tone: 'peach' },
    { value: 'DRAGONS', label: 'DRAGONS TRACK', desc: t('TIPS 기반 기술 고도화 · AI/반도체/바이오', 'TIPS-based tech · AI/semiconductor/bio'), tone: 'sky' },
    { value: 'VENTURE-STUDIO', label: 'Venture-Studio TRACK', desc: t('예비창업부터 법인 설립·투자·EXIT까지 공동 설계', 'Co-design from pre-founding to incorporation, investment and exit'), tone: 'mint' },
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
    <section className="be-section be-section--last" id="contact" aria-labelledby="be-contact-title">
      <SectionHead no="08" eyebrow={t('문의하기', 'Contact')} id="be-contact-title" title={<Lines text={contactCopy.title} />} desc={<p>{pick(contactCopy.desc)}</p>} />

      <div className="be-bento be-bento--contact">
        <div className="be-contact__info">
          <div className="be-tile be-tile--accent be-contact__hello">
            <h3>
              <Lines text={contactCopy.getInTouch} />
            </h3>
            <p>
              <Lines text={pick(contactCopy.getInTouchDesc)} />
            </p>
          </div>
          <div className="be-tile be-tone--butter be-addr">
            <span className="be-kicker">{t('본사 (HQ)', 'Headquarters')}</span>
            <p>
              <Lines text={pick(site.hq)} />
            </p>
          </div>
          <div className="be-tile be-tone--mint be-addr">
            <span className="be-kicker">{t('베트남 현지법인', 'Vietnam Office')}</span>
            <p>
              <Lines text={site.vietnam} />
            </p>
          </div>
          <a className="be-tile be-tone--sky be-addr be-addr--link" href={`tel:${site.phone.replace(/-/g, '')}`}>
            <span className="be-kicker">PHONE</span>
            <strong>{site.phone}</strong>
            <Arrow />
          </a>
          <a className="be-tile be-tone--lilac be-addr be-addr--link" href={`mailto:${site.email}`}>
            <span className="be-kicker">EMAIL</span>
            <strong>{site.email}</strong>
            <Arrow />
          </a>
        </div>

        <form className="be-tile be-tile--plain be-form" onSubmit={onSubmit}>
          <h3>{t('문의하기', 'Send an inquiry')}</h3>
          <fieldset>
            <legend>{t('문의 유형', 'Inquiry type')}</legend>
            <div className="be-chips">
              {types.map((x) => (
                <label key={x.value} className={'be-chip be-chip--radio' + (type === x.value ? ' is-active' : '')}>
                  <input type="radio" name="be-type" value={x.value} checked={type === x.value} onChange={() => setType(x.value)} />
                  {x.label}
                </label>
              ))}
            </div>
          </fieldset>

          {type === 'investment' && (
            <fieldset>
              <legend>{t('희망 트랙 (2026 Venture Scaleup Program 상시 모집)', 'Track (2026 Venture Scaleup Program, rolling)')}</legend>
              <div className="be-tracks">
                {tracks.map((tr) => (
                  <label key={tr.value} className={`be-track be-tone--${tr.tone}` + (track === tr.value ? ' is-active' : '')}>
                    <input type="radio" name="be-track" value={tr.value} checked={track === tr.value} onChange={() => setTrack(tr.value)} />
                    <strong>{tr.label}</strong>
                    <span>{tr.desc}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          <div className="be-fields">
            <label>
              <span>{t('이름', 'Name')} *</span>
              <input required value={form.name} onChange={update('name')} autoComplete="name" />
            </label>
            <label>
              <span>{t('회사/기관명', 'Company')} *</span>
              <input required value={form.company} onChange={update('company')} autoComplete="organization" />
            </label>
            <label>
              <span>{t('이메일', 'Email')} *</span>
              <input required type="email" value={form.email} onChange={update('email')} autoComplete="email" />
            </label>
            <label>
              <span>{t('연락처', 'Phone')}</span>
              <input type="tel" value={form.phone} onChange={update('phone')} autoComplete="tel" />
            </label>
            {type === 'investment' && (
              <label className="be-fields__full">
                <span>{t('IR 자료 링크 / 웹사이트', 'Pitch deck link / Website')}</span>
                <input type="url" placeholder="https://" value={form.url} onChange={update('url')} />
              </label>
            )}
            <label className="be-fields__full">
              <span>{t('문의 내용', 'Message')} *</span>
              <textarea required rows={5} value={form.message} onChange={update('message')} />
            </label>
          </div>
          <button type="submit" className="be-btn be-btn--accent be-btn--lg be-btn--block">
            {t('문의 보내기', 'Send')} <Arrow />
          </button>
          <p className="be-form__note">
            {sent
              ? t('메일 앱이 열렸습니다. 열리지 않았다면 아래 주소로 직접 보내주세요: ', 'Your mail app should have opened. If not, please email us directly: ')
              : t('제출 시 메일 앱으로 연결됩니다. 문의: ', 'Submitting opens your mail app. Email: ')}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </form>
      </div>

      <div className="be-tile be-tile--ink be-final">
        <div>
          <h3>{contactCopy.ctaTitle}</h3>
          <p>{pick(contactCopy.ctaDesc)}</p>
        </div>
        <div className="be-final__right">
          <Pill tone="accent" solid>
            {site.name} · {site.nameKo}
          </Pill>
          <button className="be-btn be-btn--ghost-light" onClick={() => scrollToId('top')}>
            Top <Arrow dir="up" />
          </button>
        </div>
      </div>
    </section>
  )
}
