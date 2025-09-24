const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-brand-blue/40 bg-brand-dark py-24 sm:py-32"
    >
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(46,105,130,0.4),_transparent_60%)]" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center sm:px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/40 bg-brand-dark/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-text-secondary">
          Empowering Ideas with Code & Insight
        </span>
        <h1 className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Web Development • Mobile Apps • Data Analysis
        </h1>
        <p className="max-w-2xl text-base text-text-secondary sm:text-lg">
          I build modern websites, custom Garmin solutions, and turn data into actionable results. Explore my work below.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-blue-dark hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-orange-dark hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl duration-200"
          >
            Work Together
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
