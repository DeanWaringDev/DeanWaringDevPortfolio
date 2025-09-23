import ProjectCard, { type Project } from '../projects/ProjectCard'

const projects: Project[] = [
  {
    title: 'Portfolio Platform',
    description: 'A modular personal site template with CMS integration, theme toggles, and automated deployments.',
    href: '#',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Design System Playground',
    description: 'Interactive component library showcasing accessible UI primitives and responsive design tokens.',
    href: '#',
    tags: ['Storybook', 'Accessibility', 'Design Tokens'],
  },
  {
    title: 'Performance Dashboard',
    description: 'Data visualization dashboard highlighting Core Web Vitals and actionable optimization insights.',
    href: '#',
    tags: ['Vite', 'D3.js', 'Analytics'],
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="border-b border-brand-blue/30 bg-brand-dark py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">Selected work</span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-base text-brand-light/80">
            Hover to reveal details, then click through to explore build notes, code, and live demos.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
