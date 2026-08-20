import profileImg from '../assets/profile.jpg'
import { profile } from '../data/profile'
import { ArrowUpRightIcon } from './icons'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)]" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--color-accent), transparent)' }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10 lg:px-8">
        <div>
          <p className="mb-5 font-mono text-[13px] tracking-wide text-accent">
            hi, I&rsquo;m {profile.name.split(' ')[0]} — {profile.role}
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            I build web &amp; mobile products that ship — for real clients, real
            problems, start to finish.
          </h1>
          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-dim sm:text-lg">
            From a booking system running an actual barbershop, to a housing
            platform built during a crisis in Lebanon — I work across the
            stack: React, Next.js and React Native on the front, Laravel and
            Prisma on the back.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-soft"
            >
              See the work
              <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 border-t border-border-soft pt-6 font-mono text-xs text-ink-faint">
            <span>{profile.location}</span>
            <span>6+ shipped projects</span>
            <span>42 Beirut · Software Engineering</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-border-soft" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
            <img
              src={profileImg}
              alt="Portrait of Ahmad Al Arab"
              className="aspect-[4/5] w-full object-cover grayscale-[15%]"
              width={640}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
