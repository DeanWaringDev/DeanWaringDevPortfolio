import { useEffect, useState } from 'react'
import logo from '../assets/brand/logo.png'
// If you want to use SVG instead, change to: import logo from '../assets/brand/logo.svg'

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
  <header className="sticky top-0 z-50 border-b border-brand-blue/40 bg-brand-dark/70 backdrop-blur-lg backdrop-saturate-150 shadow-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Dean Waring Dev" className="h-16 w-auto sm:h-20" />
        </a>
        <div className="flex-1 flex justify-center">
          <span className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold select-none text-center block">
            <span className="text-brand-blue-light">Dean Waring</span>
            <span className="mx-1"> </span>
            <span className="text-brand-orange">Dev</span>
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 sm:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="transition hover:text-white" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
          className="inline-flex items-center justify-center rounded-full border border-brand-blue/60 p-2 text-brand-light transition hover:border-brand-blue hover:text-white sm:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-brand-dark/95 transition-opacity duration-300 sm:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}
      />

      <nav
        className={`fixed right-0 top-0 z-50 flex h-full w-72 max-w-[85%] flex-col gap-6 border-l border-brand-blue/40 bg-brand-dark px-6 py-8 text-brand-light shadow-[-8px_0_40px_rgba(5,11,23,0.8)] transition-transform duration-300 sm:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between"><span className="text-lg font-semibold text-white">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="rounded-full border border-brand-blue/60 p-2 text-brand-light transition hover:border-brand-blue hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-4 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl border border-brand-blue/40 bg-brand-dark/90 px-4 py-3 text-brand-light transition hover:border-brand-orange hover:bg-brand-blue/20 hover:text-white"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
