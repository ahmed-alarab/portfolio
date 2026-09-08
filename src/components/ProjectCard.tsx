import type { Project } from '../data/projects'
import barbershopCover from '../assets/barbershop-cover.jpg'
import kutubcartCover from '../assets/kutubcart-cover.jpg'
import beytiCover from '../assets/beyti-cover.jpg'
import { ArrowUpRightIcon, LockIcon } from './icons'

const covers: Record<string, string> = {
  barbershop: barbershopCover,
  kutubcart: kutubcartCover,
  beyti: beytiCover,
}

function initials(name: string) {
  return name
    .split(' ')
    .filter((w) => w[0] === w[0]?.toUpperCase() && /[A-Za-z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}

function AbstractCover({ project }: { project: Project }) {
  return (
    <div className="bg-grid relative flex h-full w-full items-center justify-center bg-bg-soft">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(60% 80% at 20% 15%, color-mix(in srgb, var(--color-accent) 35%, transparent), transparent)',
        }}
      />
      <span className="relative font-mono text-4xl font-semibold tracking-tight text-ink-faint">
        {initials(project.name)}
      </span>
    </div>
  )
}

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const cover = project.image ? covers[project.image] : undefined

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent-dim ${
        featured ? 'lg:flex-row' : ''
      }`}
    >
      <div className={featured ? 'lg:w-[46%]' : 'aspect-[16/10]'}>
        {cover ? (
          <img
            src={cover}
            alt={`${project.name} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <AbstractCover project={project} />
        )}
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${featured ? 'lg:p-9' : ''}`}>
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className={`font-semibold tracking-tight text-ink ${featured ? 'text-2xl' : 'text-lg'}`}>
            {project.name}
          </h3>
          <span className="shrink-0 font-mono text-xs text-ink-faint">{project.year}</span>
        </div>

        <p className="mb-3 font-mono text-xs text-accent">{project.tagline}</p>

        <p className={`text-ink-dim ${featured ? 'text-[15px] leading-relaxed' : 'text-sm leading-relaxed'}`}>
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border-soft px-2.5 py-1 font-mono text-[11px] text-ink-dim"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              {link.label}
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          ))}
          {project.note && (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-faint">
              <LockIcon className="h-3.5 w-3.5" />
              {project.note}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
