export type Project = {
  title: string
  description: string
  href: string
  imageSrc?: string
  imageAlt?: string
  tags: string[]
}

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, href, imageSrc, imageAlt, tags } = project

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative block h-56 sm:h-64 [perspective:1200px]"
    >
      <div className="relative h-full w-full rounded-2xl border border-brand-blue/30 bg-brand-dark/80 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 overflow-hidden rounded-2xl bg-brand-dark backface-hidden">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt ?? title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-tl from-brand-orange via-brand-dark to-brand-blue/60">
              <span className="font-heading text-2xl font-semibold text-white break-words max-w-[90%] block whitespace-pre-line text-center">
                {title.replace(' ', '\n')}
              </span>
            </div>
          )}
        </div>
        <div className="absolute inset-0 flex h-full w-full [transform:rotateY(180deg)] flex-col justify-between rounded-2xl bg-brand-dark/95 p-6 text-left backface-hidden">
          <div>
            <h3 className="font-heading text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm text-brand-light/80">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-brand-blue/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-brand-light/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
