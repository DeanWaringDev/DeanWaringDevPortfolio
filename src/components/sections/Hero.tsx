const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-800 bg-slate-950 py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.15),_transparent_60%)]" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
          Frontend Developer
        </p>
        <h1 className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Building immersive, mobile-first web experiences with React & Tailwind
        </h1>
        <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
          I craft performant user interfaces that balance design, accessibility, and developer experience.
          Dive into my featured projects below.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:text-white"
          >
            Work Together
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
