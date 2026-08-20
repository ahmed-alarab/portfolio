import { profile } from '../data/profile'
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--color-accent), transparent)' }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="font-mono text-[13px] tracking-wide text-accent">Get in touch</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Have a project in mind? I&rsquo;d like to hear about it.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-balance text-ink-dim">
          Freelance work, a full-time role, or just talking through an idea —
          my inbox is open.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}?subject=Hiring%20Inquiry&body=Hi%20Ahmad%2C%20I%27d%20like%20to%20talk%20about...`}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-soft"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-sm text-ink-dim transition-colors hover:text-ink"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
            <ArrowUpRightIcon className="h-3 w-3" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-sm text-ink-dim transition-colors hover:text-ink"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
            <ArrowUpRightIcon className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  )
}
