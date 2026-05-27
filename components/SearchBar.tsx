'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface SearchBarProps {
  initialQuery?: string
  size?: 'default' | 'hero'
  autoFocus?: boolean
}

export default function SearchBar({ initialQuery = '', size = 'default', autoFocus = false }: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`)
  }

  const isHero = size === 'hero'

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative w-full group">
        {/* Icon */}
        <div className={`absolute top-1/2 -translate-y-1/2 text-ink-3 pointer-events-none transition-colors group-focus-within:text-fire ${isHero ? 'left-5' : 'left-4'}`}>
          <svg width={isHero ? 20 : 16} height={isHero ? 20 : 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={isHero ? 'e.g. how to create videos with AI...' : 'Ask a question about AI tools...'}
          autoFocus={autoFocus}
          className={`search-input w-full bg-white border-2 border-border rounded-2xl text-ink font-body placeholder-ink-3 transition-all
            ${isHero ? 'pl-14 pr-36 py-5 text-base md:text-lg shadow-sm' : 'pl-11 pr-32 py-3.5 text-sm'}
          `}
        />

        <button
          type="submit"
          className={`btn-fire absolute right-2 top-1/2 -translate-y-1/2 rounded-xl font-display font-bold
            ${isHero ? 'px-5 py-3 text-sm' : 'px-4 py-2 text-xs'}
          `}
        >
          {isHero ? 'Get Answer →' : 'Search →'}
        </button>
      </form>

      {/* Example questions (hero only) */}
      {isHero && (
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {EXAMPLE_QUESTIONS.map(q => (
            <button
              key={q.text}
              onClick={() => router.push(`/search?q=${encodeURIComponent(q.text)}`)}
              className="q-pill inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border bg-white text-sm text-ink-2 font-body transition-all"
            >
              <span className="text-base">{q.icon}</span>
              <span>{q.text}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const EXAMPLE_QUESTIONS = [
  { icon: '🎬', text: 'How to create videos with AI' },
  { icon: '✍️', text: 'Best AI tools for writing' },
  { icon: '🎓', text: 'Best AI tools for students' },
  { icon: '🎨', text: 'How to design logos with AI' },
  { icon: '💻', text: 'Best AI tools for coding' },
  { icon: '⚡', text: 'How to automate work with AI' },
]
