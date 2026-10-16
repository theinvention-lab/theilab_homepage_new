import { useEffect, useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useLang } from '../i18n'
import { site } from '../data/site'
import { Lines } from '../components/Rich'

type InquiryType = 'general' | 'investment' | 'partnership' | 'global' | 'cv'

export default function Contact() {
  const { t, pick } = useLang()
  const [params] = useSearchParams()
  const initial = (params.get('type') as InquiryType) || 'general'
  const [type, setType] = useState<InquiryType>(initial)
  const [track, setTrack] = useState('DRAGONS')
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '', url: '' })

  useEffect(() => {
    const p = params.get('type') as InquiryType | null
    if (p) setType(p)
  }, [params])

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
    <>
      <section className="page-hero page-hero--navy">
        <div className="page-hero__glow" aria-hidden />
        <div className="container page-hero__inner">
          <nav className="breadcrumb breadcrumb--light">
            <Link to="/">HOME</Link>
            <span>/</span>
            <span>{t('문의하기', 'Contact')}</span>
          </nav>
          <h1 className="page-hero__title">
            Let's Build the
            <br />
            Next Big Thing
          </h1>
          <p className="page-hero__desc">
            {t(
              '더인벤션랩과의 협업, 투자 유치, 혹은 사내벤처 육성에 대해 궁금한 점이 있으신가요? 언제든 문의해 주세요. 혁신의 여정을 함께 시작하겠습니다.',
              'Questions about collaborating with The Invention Lab, raising investment, or incubating corporate ventures? Reach out anytime — let’s start the journey of innovation together.',
            )}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact">
          <div className="contact__info">
            <h2 className="section-title">
              Get in touch
              <br />
              with us
            </h2>
            <p className="section-desc">
              <Lines
                text={t(
                  '더인벤션랩은 혁신가들의 여정을 지원합니다.\n비즈니스의 시작부터 글로벌 확장까지,\n우리의 전문 역량을 만나보세요.',
                  'The Invention Lab supports the journey of innovators.\nFrom the start of a business to global expansion,\nmeet our expertise.',
                )}
              />
            </p>
            <dl className="contact__list">
              <div>
                <dt>{t('본사 (HQ)', 'Headquarters')}</dt>
                <dd>
                  <Lines text={pick(site.hq)} />
                </dd>
              </div>
              <div>
                <dt>{t('베트남 현지법인', 'Vietnam Office')}</dt>
                <dd>
                  <Lines text={site.vietnam} />
                </dd>
              </div>
              <div>
                <dt>PHONE</dt>
                <dd>
                  <a href={`tel:${site.phone.replace(/-/g, '')}`}>{site.phone}</a>
                </dd>
              </div>
              <div>
                <dt>EMAIL</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
            </dl>
          </div>

          <form className="contact__form" onSubmit={onSubmit}>
            <h3>{t('문의하기', 'Send an inquiry')}</h3>
            <fieldset>
              <legend>{t('문의 유형', 'Inquiry type')}</legend>
              <div className="radio-chips">
                {types.map((x) => (
                  <label key={x.value} className={type === x.value ? 'is-active' : ''}>
                    <input type="radio" name="type" value={x.value} checked={type === x.value} onChange={() => setType(x.value)} />
                    {x.label}
                  </label>
                ))}
              </div>
            </fieldset>

            {type === 'investment' && (
              <fieldset>
                <legend>{t('희망 트랙 (2026 Venture Scaleup Program 상시 모집)', 'Track (2026 Venture Scaleup Program, rolling)')}</legend>
                <div className="track-options">
                  {tracks.map((tr) => (
                    <label key={tr.value} className={'track' + (track === tr.value ? ' is-active' : '')}>
                      <input type="radio" name="track" value={tr.value} checked={track === tr.value} onChange={() => setTrack(tr.value)} />
                      <strong>{tr.label}</strong>
                      <span>{tr.desc}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            )}

            <div className="form-grid">
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
                <label className="form-grid__full">
                  <span>{t('IR 자료 링크 / 웹사이트', 'Pitch deck link / Website')}</span>
                  <input type="url" placeholder="https://" value={form.url} onChange={update('url')} />
                </label>
              )}
              <label className="form-grid__full">
                <span>{t('문의 내용', 'Message')} *</span>
                <textarea required rows={6} value={form.message} onChange={update('message')} />
              </label>
            </div>
            <button type="submit" className="btn btn--primary btn--lg btn--block">
              {t('문의 보내기', 'Send')}
            </button>
            <p className="form-note">
              {sent
                ? t('메일 앱이 열렸습니다. 열리지 않았다면 아래 주소로 직접 보내주세요: ', 'Your mail app should have opened. If not, please email us directly: ')
                : t('제출 시 메일 앱으로 연결됩니다. 문의: ', 'Submitting opens your mail app. Email: ')}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
