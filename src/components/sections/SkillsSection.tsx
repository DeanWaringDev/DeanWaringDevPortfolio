const skills = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'UI Engineering',
    items: ['Design Systems', 'Accessible UI', 'Responsive Layouts', 'CSS Architecture'],
  },
  {
    title: 'Tooling',
    items: ['Storybook', 'Vitest', 'Playwright', 'ESLint', 'Prettier'],
  },
  {
    title: 'Collaboration',
    items: ['Agile Delivery', 'Pair Programming', 'Mentorship', 'Stakeholder Workshops'],
  },
]

const SkillsSection = () => {
  return (
    <section id="skills" className="border-b border-brand-blue/30 bg-brand-dark py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">Skills snapshot</span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">Skills & Toolkit</h2>
          <p className="mt-4 text-base text-brand-light/80">
            A snapshot of the languages, libraries, and practices I rely on to ship polished digital products.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-brand-blue/30 bg-brand-dark/90 p-6 shadow-[0_0_50px_rgba(30,77,143,0.15)]"
            >
              <h3 className="font-heading text-xl font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-brand-light/80">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
