import SectionHeading from './SectionHeading'

const interests = ['Chess', 'Sports', 'Meditation', 'Reading & writing (Arabic/English)']

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading eyebrow="About" title="A bit more context" />

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div className="space-y-5 text-[15px] leading-relaxed text-ink-dim sm:text-base">
          <p>
            I&rsquo;m a full-stack developer who likes taking a project from an empty
            folder to something a real person actually uses — whether that&rsquo;s a
            barbershop taking bookings online instead of by phone, or a housing
            listing site built during a genuinely hard time in Lebanon.
          </p>
          <p>
            Most of my recent work has been full-stack TypeScript — Next.js and
            React on the frontend, Prisma or Laravel underneath — plus React
            Native when a project needs to live on a phone, not just a browser.
            I care as much about the unglamorous parts (validation, auth,
            admin panels, an app that still works with no data in it) as the
            UI on top.
          </p>
          <p>
            Alongside that, I&rsquo;m studying Software Engineering at{' '}
            <span className="text-ink">42 Beirut</span> — a peer-driven,
            project-based program with no lectures, which means most of what
            I know about C, algorithms, and working without a safety net came
            from getting stuck and figuring it out.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-faint">
              Currently
            </h3>
            <p className="text-sm text-ink-dim">
              Building client work freelance, and sharpening fundamentals at
              42 Beirut.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-faint">
              Outside of code
            </h3>
            <ul className="flex flex-wrap gap-2">
              {interests.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border-soft px-3 py-1 text-sm text-ink-dim"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
