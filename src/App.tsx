function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-slate-100">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">React + Vite + Tailwind</h1>
      <p className="mt-4 max-w-lg text-lg text-slate-300">
        Edit <code>src/App.tsx</code> and save to get started. Tailwind CSS is ready to help you build faster.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a
          className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
          href="https://tailwindcss.com/docs/installation"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind Docs
        </a>
        <a
          className="rounded-full border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
          href="https://vite.dev/guide/"
          target="_blank"
          rel="noreferrer"
        >
          Vite Guide
        </a>
        <a
          className="rounded-full border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
          href="https://react.dev/learn"
          target="_blank"
          rel="noreferrer"
        >
          React Docs
        </a>
      </div>
    </div>
  )
}

export default App
