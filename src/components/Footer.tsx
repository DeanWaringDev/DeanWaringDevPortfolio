const Footer = () => {
  return (
    <footer className="bg-slate-950 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-400 sm:flex-row sm:px-6">
        <p>&copy; {new Date().getFullYear()} Dean Waring. Crafted with React & Tailwind.</p>
        <div className="flex items-center gap-4">
          <a className="transition hover:text-white" href="mailto:dean@example.com">
            Email
          </a>
          <a className="transition hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="transition hover:text-white" href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
