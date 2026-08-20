import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile'
import { CloseIcon, MenuIcon } from './icons'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-border-soft' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-ink transition-colors hover:text-accent"
        >
          ahmad<span className="text-accent">.</span>alarab
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[13px] text-ink-dim transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeHref}
            download
            className="rounded-full border border-border px-4 py-1.5 font-mono text-[13px] text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Résumé
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-[57px] bottom-0 z-40 border-t border-border-soft bg-bg px-6 py-8 md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-lg text-ink-dim transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeHref}
              download
              className="font-mono text-lg text-accent"
            >
              Download résumé
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
