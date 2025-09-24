const Footer = () => {
  return (
  <footer className="bg-brand-dark/95 py-10">
  <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-sm text-text-secondary sm:flex-row sm:px-6">
        <p>
          &copy; {new Date().getFullYear()} Dean Waring. Crafted with passion, powered by React & Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a className="transition hover:text-brand-orange" href="mailto:dean@example.com">
            Email
          </a>
          <a className="transition hover:text-brand-orange" href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="transition hover:text-brand-orange" href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
