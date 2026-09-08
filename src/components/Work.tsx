import { profile } from '../data/profile'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'
import { ArrowUpRightIcon, GitHubIcon } from './icons'

export default function Work() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading eyebrow="Selected work" title="Things I’ve built" />

      <div className="mt-12 flex flex-col gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} featured />
        ))}

        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-border-soft bg-surface/40 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm leading-relaxed text-ink-dim">
          Smaller experiments, coursework and 42 Beirut projects live on GitHub.
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <GitHubIcon className="h-4 w-4" />
          More on GitHub
          <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  )
}
