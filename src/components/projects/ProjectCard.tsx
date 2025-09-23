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
      className="group relative block h-72 [perspective:1200px]"
    >
      <div className="relative h-full w-full rounded-2xl border border-slate-800 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 overflow-hidden rounded-2xl bg-slate-900 backface-hidden">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt ?? title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-500/40 via-slate-900 to-purple-500/20">
              <span className="font-heading text-2xl font-semibold text-white">
                {title}
              </span>
            </div>
          )}
        </div>
        <div className="absolute inset-0 flex h-full w-full [transform:rotateY(180deg)] flex-col justify-between rounded-2xl bg-slate-900/95 p-6 text-left backface-hidden">
          <div>
            <h3 className="font-heading text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm text-slate-300">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300"
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
