import { Metadata } from 'next'
import Link from 'next/link'
import SearchBar from '@/components/SearchBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { tools } from '@/data/tools'

export const metadata: Metadata = {
  title: 'ToolFlow — Ask Anything. Find the Best AI Tools.',
  description: 'Type what you want to do with AI and get instant tool recommendations. The AI answer engine for creators, students, and professionals.',
}

const TRENDING = tools.filter(t => t.isTrending).slice(0, 6)

const POPULAR_QUESTIONS = [
  { q: 'How to create videos with AI?',   href: '/search?q=how+to+create+videos+with+AI',   icon: '🎬' },
  { q: 'Best AI tools for writing?',       href: '/search?q=best+AI+tools+for+writing',       icon: '✍️' },
  { q: 'Best AI tools for students?',      href: '/search?q=best+AI+tools+for+students',      icon: '🎓' },
  { q: 'How to design logos with AI?',     href: '/search?q=how+to+design+logos+with+AI',     icon: '🎨' },
  { q: 'Best AI tools for coding?',        href: '/search?q=best+AI+tools+for+coding',        icon: '💻' },
  { q: 'How to automate work with AI?',    href: '/search?q=how+to+automate+work+with+AI',   icon: '⚡' },
  { q: 'Best free AI tools?',              href: '/search?q=best+free+AI+tools',              icon: '🆓' },
  { q: 'Best AI tools for beginners?',     href: '/search?q=best+AI+tools+for+beginners',    icon: '🌱' },
]

const CATEGORIES = [
  { id: 'writing',      label: 'Writing',      icon: '✍️',  count: tools.filter(t=>t.category==='writing').length },
  { id: 'design',       label: 'Design',       icon: '🎨',  count: tools.filter(t=>t.category==='design').length },
  { id: 'video',        label: 'Video',        icon: '🎬',  count: tools.filter(t=>t.category==='video').length },
  { id: 'coding',       label: 'Coding',       icon: '💻',  count: tools.filter(t=>t.category==='coding').length },
  { id: 'productivity', label: 'Productivity', icon: '⚡',  count: tools.filter(t=>t.category==='productivity').length },
  { id: 'audio',        label: 'Audio',        icon: '🎵',  count: tools.filter(t=>t.category==='audio').length },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="pt-16 pb-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">

          {/* Label pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 mb-7 animate-fade-up shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-fire" />
            <span className="text-xs font-mono text-ink-2 tracking-wide uppercase">AI Tool Recommendation Engine</span>
          </div>

          {/* H1 */}
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-ink leading-[1.04] tracking-tight mb-5 animate-fade-up delay-100">
            Ask Anything.<br />
            <span className="text-fire">Find the Best</span><br />
            AI Tools.
          </h1>

          <p className="text-lg sm:text-xl text-ink-2 font-body max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
            Search your task, get an instant answer and the top AI tools — ranked and ready to use.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto animate-fade-up delay-300">
            <SearchBar size="hero" />
          </div>
        </div>
      </section>

      {/* ─── POPULAR QUESTIONS ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="font-display font-bold text-ink text-xl">Popular Questions</h2>
          <span className="text-xs font-mono text-ink-3 border border-border rounded-full px-2.5 py-0.5 bg-white">Trending</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {POPULAR_QUESTIONS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-start gap-3 p-4 rounded-2xl border border-border bg-white hover:border-fire/30 hover:bg-fire-light hover:shadow-sm transition-all animate-fade-up"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span className="text-xl mt-0.5 flex-shrink-0">{item.icon}</span>
              <span className="text-sm font-body text-ink-2 group-hover:text-fire leading-snug transition-colors">{item.q}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── CATEGORIES ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="font-display font-bold text-ink text-xl mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/search?q=${cat.id}`}
              className="group flex flex-col items-center gap-2 p-5 rounded-2xl border border-border bg-white hover:border-fire/30 hover:bg-fire-light hover:shadow-sm text-center transition-all animate-fade-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{cat.icon}</span>
              <span className="font-display font-semibold text-ink text-sm">{cat.label}</span>
              <span className="text-xs font-mono text-ink-3">{cat.count} tools</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── TRENDING TOOLS ───────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-ink text-xl">Trending AI Tools</h2>
          <Link href="/search?q=" className="text-sm font-body text-fire hover:underline">See all →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRENDING.map((tool, i) => (
            <Link
              key={tool.slug}
              href={`/tool/${tool.slug}`}
              className="group flex items-start gap-4 p-4 rounded-2xl border border-border bg-white hover:border-fire/30 hover:shadow-sm transition-all animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-canvas border border-border flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-105 transition-transform">
                {tool.emoji}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-display font-bold text-ink text-base truncate">{tool.name}</span>
                  {tool.isTrending && <span className="w-1.5 h-1.5 rounded-full bg-fire flex-shrink-0" />}
                </div>
                <p className="text-sm text-ink-3 font-body line-clamp-2 leading-snug">{tool.tagline}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-mono text-amber-500">★ {tool.rating}</span>
                  <span className="text-xs text-ink-3">{tool.pricing.split('/')[0].trim()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl border border-border bg-white p-8 sm:p-12">
          <div className="max-w-lg mx-auto text-center mb-10">
            <h2 className="font-display font-bold text-ink text-3xl mb-3">How ToolFlow Works</h2>
            <p className="text-ink-3 font-body">From question to the right AI tool in seconds</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {STEPS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-fire-light border border-fire-mid flex items-center justify-center mx-auto mb-4 font-display font-bold text-fire text-lg">
                  0{i+1}
                </div>
                <h3 className="font-display font-bold text-ink text-base mb-2">{s.title}</h3>
                <p className="text-sm text-ink-3 font-body leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const STEPS = [
  { title: 'Ask your question',    desc: 'Type what you want to do — "how to create videos with AI" or "best writing tools".' },
  { title: 'Get an instant answer', desc: 'ToolFlow detects your intent and returns a clear answer with expert context.' },
  { title: 'Go use the best tool',  desc: 'Click through to the top-ranked AI tool for your specific goal.' },
]
