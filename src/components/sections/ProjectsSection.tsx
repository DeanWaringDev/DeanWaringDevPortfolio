import ProjectCard, { type Project } from '../projects/ProjectCard'

// Import project images
import parkrunEvents from '../../assets/projects/parkrun-events.png'
import parkrunMap from '../../assets/projects/parkrun-map.png'
import parkrunScores from '../../assets/projects/parkrun-scores.png'

const projects: Project[] = [
  {
    title: 'Project Parkrun',
    description: 'A deep dive into Parkrun accessibility. Using machine learning and AI to analyze routes and score suitability for disabled athletes. Over 1000 users in first three weeks!',
    href: 'https://wheelchairracer.com',
    images: [parkrunEvents, parkrunMap, parkrunScores],
    imageAlt: 'Parkrun Accessibility Analysis Dashboard',
    tags: ['AI', 'Machine Learning', 'Accessibility', 'Data Analysis'],
    featured: true,
  },
  {
    title: 'Project Pro',
    description: 'A project management application to manage multiple projects with progress trackers, task lists, and calendar deadlines. Built using React Native, TypeScript, and Tailwind.',
    href: '#',
    tags: ['React Native', 'TypeScript', 'Tailwind', 'Productivity'],
  },
  {
    title: 'Wheelchair Racer',
    description: 'A blog site providing tips for accessible races in the UK for wheelchair racers and frame runners.',
    href: '#',
    tags: ['Blog', 'Accessibility', 'UK', 'Wheelchair Racing'],
  },
  {
    title: 'Garmin Development',
    description: 'Custom watchfaces and apps built for the Garmin platform using Monkey C.',
    href: '#',
    tags: ['Garmin', 'Monkey C', 'Wearables', 'Apps'],
  },
  {
    title: 'City Air Quality Explorer',
    description: 'An interactive dashboard analyzing air quality data across major UK cities. Visualizes trends, identifies pollution hotspots, and provides actionable insights for healthier living.',
    href: '#',
    tags: ['Data Analysis', 'Visualization', 'Python', 'Public Health'],
  },
  {
    title: 'Trail Tracker',
    description: 'A React Native app for discovering, mapping, and sharing accessible walking and cycling trails. Features route recording, community ratings, and accessibility notes for each trail.',
    href: '#',
    tags: ['React Native', 'TypeScript', 'Maps', 'Accessibility'],
  },
]

const ProjectsSection = () => {
  return (
  <section id="projects" className="border-b border-brand-blue/30 bg-brand-dark py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl">
    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">Selected work</span>
  <h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-base text-white/80">
            Hover to reveal details, then click through to explore build notes, code, and live demos.
          </p>
        </div>
        <div className="mt-12 space-y-8">
          {/* Featured Project - Full Width to match 3-column grid */}
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.title} className="w-full">
              <ProjectCard project={project} />
            </div>
          ))}
          
          {/* Regular Projects - Grid Layout */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => !p.featured).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
