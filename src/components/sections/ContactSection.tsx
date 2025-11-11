const ContactSection = () => {
  return (
  <section id="contact" className="border-b border-brand-blue/30 bg-brand-dark py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">Get in touch</span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">Let's collaborate</h2>
          <p className="mt-4 text-base text-white/80">
            Tell me about your project, and I'll be in touch to explore how we can ship something remarkable together.
          </p>
        </div>
        <form
          className="mt-12 grid gap-6 rounded-2xl border border-brand-blue/30 bg-brand-dark/90 p-6 sm:p-8 shadow-[0_0_40px_rgba(46,105,130,0.12)]"
          action="https://formsubmit.co/"
          method="POST"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-brand-light">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-lg border border-brand-blue/40 bg-brand-dark px-4 py-3 text-sm text-white outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/40"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-brand-light">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-lg border border-brand-blue/40 bg-brand-dark px-4 py-3 text-sm text-white outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/40"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-brand-light">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="rounded-lg border border-brand-blue/40 bg-brand-dark px-4 py-3 text-sm text-brand-light outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/40"
            />
          </div>
          <button
            type="submit"
            className="justify-self-start rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(244,124,32,0.25)] transition hover:bg-brand-orange/90"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
