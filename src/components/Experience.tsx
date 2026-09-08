import { roles } from '../data/experience'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
      <SectionHeading eyebrow="Experience" title="Where I’ve worked" />

      <ol className="mt-12 flex flex-col">
        {roles.map((role) => (
          <li
            key={role.title}
            className="relative border-l border-border-soft pb-10 pl-6 last:pb-0 sm:pl-8"
          >
            <span className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-accent-dim" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-lg font-semibold tracking-tight text-ink">{role.title}</h3>
              <span className="shrink-0 font-mono text-xs text-ink-faint">{role.period}</span>
            </div>

            {role.org && <p className="mt-1 font-mono text-xs text-accent">{role.org}</p>}

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-dim">{role.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {role.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border-soft px-2.5 py-1 font-mono text-[11px] text-ink-dim"
                >
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
