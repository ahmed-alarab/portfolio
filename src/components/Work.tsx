import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

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
    </section>
  )
}
