'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Home',         href: '/' },
  { label: 'Writing',      href: '/search?q=writing' },
  { label: 'Design',       href: '/search?q=design' },
  { label: 'Video',        href: '/search?q=video' },
  { label: 'Coding',       href: '/search?q=coding' },
  { label: 'About',        href: '/about' },
]

const MOBILE_EXTRA = [
  { label: 'Best AI Tools for Students',   href: '/best-ai-tools-for-students' },
  { label: 'Best AI Writing Tools',        href: '/best-ai-writing-tools' },
  { label: 'AI Tools for Beginners',       href: '/ai-tools-for-beginners' },
  { label: 'Create Videos with AI',        href: '/how-to-create-videos-with-ai' },
  { label: 'Best AI Coding Tools',         href: '/best-ai-tools-for-coding' },
]

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (q.trim()) { router.push(`/search?q=${encodeURIComponent(q.trim())}`); setOpen(false) }
  }

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.split('?')[0])

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 h-14">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" onClick={() => setOpen(false)}>
            <div className="w-7 h-7 rounded-lg bg-ink flex items-center justify-center">
              <span className="font-display font-bold text-white text-xs">TF</span>
            </div>
            <span className="font-display font-bold text-ink text-base tracking-tight">ToolFlow</span>
            <span className="hidden sm:block text-xs font-mono text-ink-3 border border-border rounded-full px-2 py-0.5 ml-1">2026</span>
          </Link>

          {/* Inline search — non-home */}
          {pathname !== '/' && (
            <form onSubmit={handleSearch} className="flex-1 max-w-sm hidden md:flex">
              <div className="relative w-full">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-3 pointer-events-none" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search AI tools..."
                  className="w-full pl-9 pr-4 py-2 text-sm bg-canvas border border-border rounded-lg text-ink placeholder-ink-3 font-body focus:outline-none focus:border-fire focus:ring-2 focus:ring-fire/10 transition-all" />
              </div>
            </form>
          )}

          <div className="flex-1" />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href}
                className={`px-3 py-1.5 rounded-md text-sm font-body transition-colors ${
                  isActive(l.href) ? 'text-ink font-semibold bg-canvas' : 'text-ink-3 hover:text-ink hover:bg-canvas'
                }`}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link href="/about"
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono font-semibold text-fire border border-fire-mid rounded-full px-3 py-1.5 hover:bg-fire-light transition-colors flex-shrink-0">
            Submit Tool
          </Link>

          {/* Hamburger */}
          <button onClick={() => setOpen(v => !v)}
            className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 rounded-md hover:bg-canvas transition-colors"
            aria-label="Toggle menu">
            <span className={`block h-0.5 w-5 bg-ink transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white mobile-menu-enter">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <form onSubmit={handleSearch} className="relative mb-4">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-3 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search AI tools..."
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-canvas border border-border rounded-xl text-ink placeholder-ink-3 font-body focus:outline-none focus:border-fire transition-all" />
            </form>

            <div className="mb-3 text-xs font-mono text-ink-3 uppercase tracking-wider px-1">Navigation</div>
            <div className="space-y-0.5 mb-4">
              {NAV_LINKS.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-sm font-body transition-colors ${
                    isActive(l.href) ? 'text-fire bg-fire-light font-medium' : 'text-ink-2 hover:bg-canvas hover:text-ink'
                  }`}>
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="mb-3 text-xs font-mono text-ink-3 uppercase tracking-wider px-1">Popular Pages</div>
            <div className="space-y-0.5">
              {MOBILE_EXTRA.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-sm font-body text-ink-2 hover:bg-canvas hover:text-ink transition-colors">
                  → {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
