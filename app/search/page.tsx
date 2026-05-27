import { Metadata } from 'next'
import Link from 'next/link'
import { runAnswerEngine } from '@/lib/answer-engine'
import SearchBar from '@/components/SearchBar'
import ToolCard from '@/components/ToolCard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface Props { searchParams: { q?: string } }

export function generateMetadata({ searchParams }: Props): Metadata {
  const q = (searchParams.q || '').trim()
  if (!q) return {
    title: 'Browse AI Tools',
    description: 'Browse the best AI tools across writing, video, design, coding, and productivity.',
  }
  return {
    title: q.endsWith('?') ? q : `${q} — AI Tools`,
    description: `Find the best AI tools for: ${q}. Instant recommendations with ratings, pricing, and direct links.`,
    openGraph: { title: q, description: `Best AI tools for: ${q}` },
    alternates: { canonical: `/search?q=${encodeURIComponent(q)}` },
  }
}

const RELATED_QUESTIONS: Record<string, string[]> = {
  video:        ['How to create videos with AI','Best AI tools for YouTube','How to make animated videos with AI'],
  writing:      ['Best AI writing tools for blogs','How to write emails with AI','Best AI grammar checkers'],
  design:       ['How to design logos with AI','Best AI image generators','Best AI tools for presentations'],
  coding:       ['Best AI code editors','How to learn coding with AI','Best AI tools for developers'],
  productivity: ['How to automate work with AI','Best AI meeting tools','Best AI note-taking tools'],
  audio:        ['Best AI voice generators','How to create music with AI','Best AI podcast tools'],
  research:     ['Best AI research tools','How to fact-check with AI','Best AI search engines'],
}

export default function SearchPage({ searchParams }: Props) {
  const query = (searchParams.q || '').trim()
  const result = runAnswerEngine(query)
  const related = result.detectedCategory ? RELATED_QUESTIONS[result.detectedCategory] ?? [] : []

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      {/* ─── Search bar header ─────────────────────────────────────────── */}
      <div className="border-b border-border bg-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs font-mono text-ink-3 mb-4">
            <Link href="/" className="hover:text-fire transition-colors">Home</Link>
            <span>/</span>
            <span className="text-ink-2 truncate max-w-xs">{query || 'All Tools'}</span>
          </div>
          <SearchBar initialQuery={query} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ─── MAIN CONTENT ────────────────────────────────────────── */}
          <main className="flex-1 min-w-0">

            {/* Confidence label */}
            {query && (
              <div className="flex items-center gap-2 mb-5">
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                  result.confidence === 'high'   ? 'bg-sage/10 text-sage border-sage/20' :
                  result.confidence === 'medium' ? 'bg-sky/10 text-sky border-sky/20' :
                                                   'bg-canvas text-ink-3 border-border'
                }`}>
                  {result.confidence === 'high' ? '✓ Best match' : result.confidence === 'medium' ? '~ Good match' : '~ General results'}
                </span>
                {result.detectedCategory && (
                  <span className="text-xs font-mono text-ink-3">
                    Category: <span className="text-ink-2 capitalize">{result.detectedCategory}</span>
                  </span>
                )}
              </div>
            )}

            {/* ─── H1: Canonical question ───────────────────────────── */}
            <h1 className="font-display font-extrabold text-ink text-3xl sm:text-4xl leading-tight mb-6 animate-fade-up">
              {result.canonicalQuestion}
            </h1>

            {/* ─── Answer block (the mini blog post) ────────────────── */}
            <div className="answer-block rounded-2xl p-6 mb-8 animate-fade-up delay-100">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-fire flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                    <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                  </svg>
                </div>
                <span className="text-xs font-mono text-fire font-semibold uppercase tracking-wide">Quick Answer</span>
              </div>
              <p className="text-ink-2 font-body text-base leading-relaxed">
                {result.shortAnswer}
              </p>
              {result.bulletPoints && result.bulletPoints.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {result.bulletPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm font-body text-ink-2">
                      <span className="text-fire font-bold mt-0.5 flex-shrink-0">→</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* ─── Recommended tools ─────────────────────────────────── */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display font-bold text-ink text-xl">
                  Recommended Tools
                </h2>
                <span className="text-xs font-mono text-ink-3">{result.tools.length} tools</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.tools.map((tool, i) => (
                  <div key={tool.slug} className="animate-fade-up" style={{ animationDelay: `${(i + 2) * 60}ms` }}>
                    <ToolCard tool={tool} rank={i + 1} />
                  </div>
                ))}
              </div>
            </div>

            {/* ─── Related questions ─────────────────────────────────── */}
            {related.length > 0 && (
              <div>
                <h2 className="font-display font-bold text-ink text-lg mb-4">Related Questions</h2>
                <div className="space-y-2">
                  {related.map(rq => (
                    <Link
                      key={rq}
                      href={`/search?q=${encodeURIComponent(rq)}`}
                      className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-white hover:border-fire/30 hover:bg-fire-light group transition-all"
                    >
                      <span className="text-sm font-body text-ink-2 group-hover:text-fire transition-colors">{rq}</span>
                      <span className="text-fire text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </main>

          {/* ─── SIDEBAR ─────────────────────────────────────────────── */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-20 space-y-6">

              {/* Category nav */}
              <div className="rounded-2xl border border-border bg-white p-5">
                <div className="font-display font-semibold text-ink text-sm mb-3">Browse Categories</div>
                <div className="space-y-0.5">
                  {SIDEBAR_CATS.map(cat => (
                    <Link
                      key={cat.id}
                      href={`/search?q=${cat.id}`}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-body transition-colors ${
                        result.detectedCategory === cat.id
                          ? 'bg-fire-light text-fire font-medium'
                          : 'text-ink-2 hover:bg-canvas hover:text-ink'
                      }`}
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular questions */}
              <div className="rounded-2xl border border-border bg-white p-5">
                <div className="font-display font-semibold text-ink text-sm mb-3">Popular Questions</div>
                <div className="space-y-1">
                  {POPULAR_Q.map(q => (
                    <Link
                      key={q.href}
                      href={q.href}
                      className="flex items-start gap-2 px-3 py-2 rounded-xl text-xs font-body text-ink-3 hover:bg-canvas hover:text-ink transition-colors leading-snug"
                    >
                      <span className="text-fire mt-0.5 flex-shrink-0">→</span>
                      <span>{q.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>

      <Footer />
    </div>
  )
}

const SIDEBAR_CATS = [
  { id: 'writing',       label: 'Writing',      icon: '✍️' },
  { id: 'design',        label: 'Design',       icon: '🎨' },
  { id: 'video',         label: 'Video',        icon: '🎬' },
  { id: 'coding',        label: 'Coding',       icon: '💻' },
  { id: 'productivity',  label: 'Productivity', icon: '⚡' },
  { id: 'audio',         label: 'Audio',        icon: '🎵' },
  { id: 'research',      label: 'Research',     icon: '🔍' },
]

const POPULAR_Q = [
  { label: 'Best AI tools for writing?',    href: '/search?q=best+AI+tools+for+writing' },
  { label: 'How to create videos with AI?', href: '/search?q=how+to+create+videos+with+AI' },
  { label: 'Best AI tools for students?',   href: '/search?q=best+AI+tools+for+students' },
  { label: 'Best free AI tools?',           href: '/search?q=best+free+AI+tools' },
  { label: 'How to design logos with AI?',  href: '/search?q=how+to+design+logos+with+AI' },
  { label: 'Best AI tools for beginners?',  href: '/search?q=best+AI+tools+for+beginners' },
]
