const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-brand-blue/40 bg-brand-dark py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(30,77,143,0.4),_transparent_60%)]" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center sm:px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/40 bg-brand-dark/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-brand-light/70">
          Crafted with care
        </span>
        <h1 className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Building immersive, mobile-first web experiences with React & Tailwind
        </h1>
        <p className="max-w-2xl text-base text-brand-light/80 sm:text-lg">
          I craft performant user interfaces that balance design, accessibility, and developer experience.
          Dive into my featured projects below.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-blue/90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-brand-light/20 px-6 py-3 text-sm font-semibold text-brand-light transition hover:border-brand-orange hover:text-brand-orange"
          >
            Work Together
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
