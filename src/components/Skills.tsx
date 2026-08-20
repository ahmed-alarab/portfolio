import { skillGroups } from '../data/projects'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="border-y border-border-soft bg-bg-soft/60 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow="Toolbox" title="What I work with" />

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-ink-faint">
                {group.label}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink-dim">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
