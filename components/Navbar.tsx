'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [q, setQ] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (q.trim()) router.push(`/search?q=${encodeURIComponent(q.trim())}`)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 h-14">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 flex-shrink-0 group">
            <div className="w-7 h-7 rounded-lg bg-ink flex items-center justify-center">
              <span className="font-display font-bold text-white text-xs">TF</span>
            </div>
            <span className="font-display font-bold text-ink text-base tracking-tight">ToolFlow</span>
          </Link>

          {/* Inline search (visible on non-home pages) */}
          {pathname !== '/' && (
            <form onSubmit={handleSubmit} className="flex-1 max-w-md hidden sm:flex">
              <div className="relative w-full">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-3 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <input
                  value={q}
                  onChange={e => setQ(e.target.value)}
                  placeholder="Ask anything..."
                  className="w-full pl-9 pr-4 py-2 text-sm bg-canvas border border-border rounded-lg text-ink placeholder-ink-3 font-body focus:outline-none focus:border-fire focus:ring-2 focus:ring-fire/10 transition-all"
                />
              </div>
            </form>
          )}

          <div className="flex-1" />

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 rounded-md text-sm font-body transition-colors ${
                  pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href))
                    ? 'text-ink font-medium bg-canvas'
                    : 'text-ink-3 hover:text-ink hover:bg-canvas'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Submit CTA */}
          <Link
            href="/"
            className="hidden sm:flex items-center gap-1.5 text-xs font-body font-medium text-fire border border-fire-mid rounded-full px-3 py-1.5 hover:bg-fire-light transition-colors"
          >
            Submit Tool
          </Link>
        </div>
      </div>
    </nav>
  )
}

const NAV_LINKS = [
  { label: 'Writing',     href: '/search?q=writing' },
  { label: 'Design',      href: '/search?q=design' },
  { label: 'Video',       href: '/search?q=video' },
  { label: 'Coding',      href: '/search?q=coding' },
  { label: 'Productivity',href: '/search?q=productivity' },
]
