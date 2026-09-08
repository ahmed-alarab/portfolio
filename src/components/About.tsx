import SectionHeading from './SectionHeading'

const interests = ['Chess', 'Sports', 'Meditation', 'Reading & writing (Arabic/English)']

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading eyebrow="About" title="A bit more context" />

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div className="space-y-5 text-[15px] leading-relaxed text-ink-dim sm:text-base">
          <p>
            I&rsquo;m a full-stack developer who takes projects from an empty folder
            to something real people use &mdash; a barbershop taking bookings
            online, a housing site built during the crisis in Lebanon.
          </p>
          <p>
            Mostly full-stack TypeScript &mdash; Next.js and React up front,
            Prisma or Laravel underneath, React Native when it needs to live on
            a phone. I care about the unglamorous parts too: validation, auth,
            admin panels, empty states.
          </p>
          <p>
            I&rsquo;m also studying Software Engineering at{' '}
            <span className="text-ink">42 Beirut</span> &mdash; peer-driven, no
            lectures, which is where the C and algorithms came from.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-faint">
              Currently
            </h3>
            <p className="text-sm text-ink-dim">
              Freelance client work, and fundamentals at 42 Beirut.
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
