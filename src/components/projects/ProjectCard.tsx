import { useState } from 'react'

export type Project = {
  title: string
  description: string
  href: string
  imageSrc?: string
  images?: string[] // Multiple images for carousel
  imageAlt?: string
  tags: string[]
  featured?: boolean // Flag for prominent display
}

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, href, imageSrc, images, imageAlt, tags, featured = false } = project
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHoveringCard, setIsHoveringCard] = useState(false)
  
  // Use images array if available, otherwise fall back to single imageSrc
  const displayImages = images && images.length > 0 ? images : (imageSrc ? [imageSrc] : [])
  const currentImage = displayImages[currentImageIndex]
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % displayImages.length)
  }
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length)
  }
  
  const handleCardEnter = () => {
    setIsHoveringCard(true)
  }
  
  const handleCardLeave = () => {
    setIsHoveringCard(false)
    setIsFlipped(false)
  }
  
  const handleFlipTrigger = () => {
    if (isHoveringCard) {
      setIsFlipped(true)
    }
  }

  return (
    <div
      className={`relative block [perspective:1200px] ${
        featured ? 'h-80 sm:h-96' : 'h-56 sm:h-64'
      }`}
      onMouseEnter={handleCardEnter}
      onMouseLeave={handleCardLeave}
    >
      <div className={`relative h-full w-full rounded-2xl border border-brand-blue/30 bg-brand-dark/80 transition-transform duration-500 [transform-style:preserve-3d] ${
        isFlipped ? '[transform:rotateY(180deg)]' : ''
      }`}>
        <div className="absolute inset-0 overflow-hidden rounded-2xl bg-brand-dark backface-hidden">
          {displayImages.length > 0 ? (
            <div className="relative h-full w-full">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="block h-full w-full"
              >
                <img
                  src={currentImage}
                  alt={imageAlt ?? title}
                  className="h-full w-full object-contain bg-brand-dark"
                />
              </a>
              
              {/* Flip trigger area - for cards without multiple images */}
              {displayImages.length <= 1 && (
                <div
                  className="absolute inset-0 z-5"
                  onMouseEnter={handleFlipTrigger}
                />
              )}
              
              {displayImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      prevImage()
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors z-10"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      nextImage()
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors z-10"
                    aria-label="Next image"
                  >
                    →
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                    {displayImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          setCurrentImageIndex(index)
                        }}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  {/* Flip trigger for cards with images - large area with margins for buttons */}
                  <div
                    className="absolute inset-0 m-12 cursor-pointer z-5"
                    onMouseEnter={handleFlipTrigger}
                    title="View project details"
                  />
                </>
              )}
              {featured && (
                <div className="absolute top-2 right-2 rounded-full bg-brand-orange px-3 py-1 text-xs font-bold text-white">
                  FEATURED
                </div>
              )}
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-tl from-brand-orange via-brand-dark to-brand-blue/60">
              <span className="font-heading text-2xl font-semibold text-white break-words max-w-[90%] block whitespace-pre-line text-center">
                {title.replace(' ', '\n')}
              </span>
            </div>
          )}
        </div>
        <div 
          className="absolute inset-0 flex h-full w-full [transform:rotateY(180deg)] flex-col justify-between rounded-2xl bg-brand-dark/95 p-6 text-left backface-hidden"
        >
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm text-white/80">{description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brand-blue/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
