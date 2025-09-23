const ContactSection = () => {
  return (
    <section id="contact" className="border-b border-slate-800 bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">Let's collaborate</h2>
          <p className="mt-4 text-base text-slate-300">
            Tell me about your project, and I'll be in touch to explore how we can ship something remarkable together.
          </p>
        </div>
        <form
          className="mt-12 grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8"
          action="https://formsubmit.co/"
          method="POST"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-200">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
            />
          </div>
          <button
            type="submit"
            className="justify-self-start rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
