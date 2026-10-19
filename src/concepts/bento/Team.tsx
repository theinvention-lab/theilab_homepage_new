import { useLang } from '../../i18n'
import { about } from '../../data/copy'
import { memberById, teamGroups } from '../../data/team'
import { Lines, Pill, SectionHead, initials, useBento } from './shared'

const GROUP_TONES = ['lilac', 'mint', 'sky', 'peach', 'butter', 'mint', 'sky'] as const
const ECO_TONES: Record<string, string> = { 'Deep-Tech': 'sky', 'K-Consumer': 'peach', Global: 'mint' }

export default function Team() {
  const { pick } = useLang()
  const { open } = useBento()

  return (
    <section className="be-section" id="team" aria-labelledby="be-about-title">
      <SectionHead no="06" eyebrow={about.eyebrow} id="be-about-title" title={<Lines text={pick(about.title)} />} desc={<p>{pick(about.desc)}</p>} />

      <div className="be-bento be-bento--pillars">
        {about.pillars.map((p, i) => (
          <div key={p.tag} className={`be-tile be-pillar ${i === 0 ? 'be-tile--ink' : `be-tone--${['', 'lilac', 'butter', 'mint'][i]}`}`}>
            <span className="be-pillar__no">{String(i + 1).padStart(2, '0')}</span>
            <Pill tone={i === 0 ? 'accent' : 'ink'} solid>
              {p.tag}
            </Pill>
            <h3>{pick(p.title)}</h3>
            <p>{pick(p.desc)}</p>
          </div>
        ))}
      </div>

      <div className="be-subhead">
        <h3>{about.ecoTitle}</h3>
        <p>
          <Lines text={pick(about.ecoDesc)} />
        </p>
      </div>
      <div className="be-eco">
        {about.eco.map((g) => (
          <div key={g.group} className={`be-tile be-eco__group be-tone--${ECO_TONES[g.group] ?? 'sky'}`}>
            <div className="be-eco__head">
              <h4>{g.group}</h4>
              <span className="be-eco__n">{String(g.items.length).padStart(2, '0')}</span>
            </div>
            <ul>
              {g.items.map((it) => (
                <li key={it.name.ko}>
                  <strong>{pick(it.name)}</strong>
                  <span>{pick(it.desc)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="be-subhead be-subhead--team">
        <h3>{about.teamTitle}</h3>
        <p>
          <Lines text={pick(about.teamDesc)} />
        </p>
      </div>
      <div className="be-teamgrid">
        {teamGroups.map((g, gi) => (
          <div key={g.key} className={`be-tile be-tile--plain be-tgroup be-tgroup--${g.key}`}>
            <div className="be-tgroup__head">
              <span className="be-kicker">{g.label}</span>
              <span className="be-tgroup__n">{g.members.length}</span>
            </div>
            <div className="be-tgroup__list">
              {g.members.map((id) => {
                const m = memberById(id)
                if (!m) return null
                return (
                  <button key={id} className={`be-person be-tone--${GROUP_TONES[gi]}`} onClick={() => open({ kind: 'member', id })}>
                    <span className="be-person__av" aria-hidden>
                      {initials(m.name.en ?? m.name.ko)}
                    </span>
                    <span className="be-person__text">
                      <strong>{pick(m.name)}</strong>
                      <small>{pick(m.role)}</small>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
