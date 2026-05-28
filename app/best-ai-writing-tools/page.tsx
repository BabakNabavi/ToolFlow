import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQSection from '@/components/FAQSection'
import LandingToolCard from '@/components/LandingToolCard'
import { getToolBySlug } from '@/data/tools'

export const metadata: Metadata = {
  title: 'Best AI Writing Tools in 2026 — ToolFlow',
  description: 'The best AI writing tools for bloggers, marketers, and professionals in 2026. Ranked by quality, pricing, and real-world use cases.',
  keywords: 'best AI writing tools, AI writer, Jasper AI, ChatGPT writing, Grammarly, Copy.ai, AI content creation, AI blog writer',
  openGraph: {
    title: 'Best AI Writing Tools in 2026',
    description: 'Top AI writing tools for every use case — blogs, marketing, essays, emails, and more.',
    type: 'article',
  },
  alternates: { canonical: '/best-ai-writing-tools' },
}

const TOOLS_WITH_HIGHLIGHTS = [
  { slug: 'chatgpt',     highlight: 'Best all-rounder' },
  { slug: 'jasper',      highlight: 'Best for marketing' },
  { slug: 'grammarly',   highlight: 'Best for editing' },
  { slug: 'claude',      highlight: 'Best for long-form' },
  { slug: 'copy-ai',     highlight: 'Best free copywriter' },
  { slug: 'writesonic',  highlight: 'Best for SEO content' },
]

const FAQS = [
  {
    q: 'What is the best AI writing tool overall?',
    a: 'ChatGPT (GPT-4o) is the best all-round AI writing tool for most users — it handles everything from blog posts to emails to creative writing. For pure marketing copy, Jasper is more specialised. For editing and polish, Grammarly is unmatched.',
  },
  {
    q: 'Are AI writing tools good for SEO?',
    a: 'Yes, especially tools like Writesonic and Jasper which have built-in SEO modes. However, the best approach is to use AI to draft content, then refine it with your own expertise. Google rewards helpful, accurate content regardless of how it was written.',
  },
  {
    q: 'Can AI writing tools replace human writers?',
    a: 'Not entirely. AI tools excel at first drafts, research summaries, and repetitive content. But human writers add nuance, personal experience, and creative direction that AI cannot replicate. The most effective approach is AI-assisted writing, not AI-only writing.',
  },
  {
    q: 'Is Grammarly considered an AI writing tool?',
    a: 'Yes. Grammarly uses AI for grammar checking, style suggestions, tone detection, and full-sentence rewrites. It works as an editing layer on top of whatever you write — making it a perfect companion to any AI writing workflow.',
  },
  {
    q: 'Which AI writing tool is best for beginners?',
    a: 'ChatGPT is the best starting point for beginners — just describe what you want and it writes it. Copy.ai has an excellent free tier with guided templates. Grammarly is also a great first tool since it integrates everywhere and improves everything you write automatically.',
  },
]

export default function WritingPage() {
  const tools = TOOLS_WITH_HIGHLIGHTS.map(t => ({
    tool: getToolBySlug(t.slug)!,
    highlight: t.highlight,
  })).filter(t => t.tool)

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          <article className="flex-1 min-w-0">
            <nav className="flex items-center gap-1.5 text-xs font-mono text-ink-3 mb-8">
              <Link href="/" className="hover:text-fire transition-colors">Home</Link>
              <span>/</span>
              <span className="text-ink-2">Best AI Writing Tools</span>
            </nav>

            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span className="trust-badge">✓ Updated June 2026</span>
              <span className="trust-badge">✓ 6 tools reviewed</span>
              <span className="trust-badge">✓ Free options included</span>
            </div>

            <h1 className="font-display font-extrabold text-ink text-4xl sm:text-5xl leading-tight mb-5 animate-fade-up">
              Best AI Writing Tools in 2026
            </h1>

            <p className="text-lg text-ink-2 font-body leading-relaxed mb-8 animate-fade-up delay-100">
              AI has transformed writing — what used to take hours now takes minutes. Whether you&apos;re a blogger, marketer, student, or professional, these tools will make you a faster and better writer.
            </p>

            <div className="answer-block rounded-2xl p-6 mb-10 animate-fade-up delay-150">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-fire flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                </div>
                <span className="text-xs font-mono text-fire font-semibold uppercase tracking-wide">Quick Answer</span>
              </div>
              <p className="font-display font-semibold text-ink text-lg mb-2">What are the best AI writing tools?</p>
              <p className="text-ink-2 font-body text-sm leading-relaxed mb-3">
                <strong>ChatGPT</strong> for all-round writing, <strong>Jasper</strong> for marketing copy, <strong>Grammarly</strong> for editing and polish, <strong>Claude</strong> for long-form and analysis, and <strong>Writesonic</strong> for SEO content.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  '📝 Blog posts: Jasper or Writesonic',
                  '🤖 General writing: ChatGPT',
                  '✅ Editing: Grammarly',
                  '📖 Long essays: Claude',
                ].map((pt, i) => (
                  <div key={i} className="text-sm font-body text-ink-2">{pt}</div>
                ))}
              </div>
            </div>

            {/* Comparison table */}
            <section className="mb-10 overflow-x-auto">
              <div className="section-label mb-4">At a glance</div>
              <h2 className="font-display font-bold text-ink text-xl mb-4">Quick Comparison</h2>
              <div className="rounded-2xl border border-border bg-white overflow-hidden">
                <table className="w-full text-sm font-body">
                  <thead className="bg-canvas border-b border-border">
                    <tr>
                      {['Tool', 'Best for', 'Free tier', 'Starting price'].map(h => (
                        <th key={h} className="text-left px-4 py-3 font-display font-semibold text-ink text-xs">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {COMPARISON.map((r, i) => (
                      <tr key={i} className="hover:bg-canvas/50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-ink">{r.name}</td>
                        <td className="px-4 py-3 text-ink-2">{r.best}</td>
                        <td className="px-4 py-3">
                          <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${r.free ? 'bg-green-50 text-green-700 border-green-200' : 'bg-canvas text-ink-3 border-border'}`}>
                            {r.free ? '✓ Yes' : '✗ No'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-ink-2 font-mono text-xs">{r.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <div className="section-label mb-6">Top Picks</div>
            <h2 className="font-display font-bold text-ink text-2xl mb-6">The 6 Best AI Writing Tools</h2>
            <div className="space-y-5">
              {tools.map(({ tool, highlight }, i) => (
                <div key={tool.slug} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <LandingToolCard tool={tool} rank={i + 1} highlight={highlight} />
                </div>
              ))}
            </div>

            <section className="mt-14">
              <div className="section-label mb-6">Context</div>
              <h2 className="font-display font-bold text-ink text-2xl mb-4">How to Choose the Right AI Writing Tool</h2>
              <div className="prose-landing">
                <p>The right AI writing tool depends on what you&apos;re writing. Marketing teams benefit most from Jasper&apos;s templates and brand voice features. Independent bloggers and freelancers get the best value from ChatGPT&apos;s versatility. Students and academics should start with Claude&apos;s long-context processing.</p>
                <h3>For blog writing and SEO content</h3>
                <p>Writesonic and Jasper both have dedicated SEO modes that generate structured articles optimised for target keywords. They access real-time web data to ensure factual accuracy in their outputs.</p>
                <h3>For marketing and copywriting</h3>
                <p>Copy.ai and Jasper offer the best template libraries for marketing copy — from Facebook ads to product launch emails. Their outputs require less editing than general-purpose tools for these specific use cases.</p>
                <h3>For editing and polish</h3>
                <p>Grammarly remains the best tool for editing — it integrates into your browser, Word, Google Docs, and email clients, catching errors wherever you write. Its tone detection feature is particularly useful for professional communications.</p>
              </div>
            </section>

            <FAQSection faqs={FAQS} title="FAQs About AI Writing Tools" />

            <div className="mt-12 p-6 bg-white rounded-2xl border border-border">
              <div className="font-display font-semibold text-ink text-base mb-4">Related Guides</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {RELATED.map(r => (
                  <Link key={r.href} href={r.href} className="flex items-center gap-2 text-sm font-body text-ink-2 hover:text-fire transition-colors p-2 rounded-lg hover:bg-canvas">
                    <span className="text-fire">→</span> {r.label}
                  </Link>
                ))}
              </div>
            </div>
          </article>

          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-20 space-y-5">
              <div className="bg-white rounded-2xl border border-border p-5">
                <div className="font-display font-semibold text-ink text-sm mb-3">Tools Reviewed</div>
                <div className="space-y-1">
                  {tools.map(({ tool }, i) => (
                    <div key={tool.slug} className="flex items-center gap-2 text-sm font-body text-ink-3 py-1.5">
                      <span className="font-mono text-fire text-xs w-4">#{i+1}</span>
                      <span>{tool.emoji}</span>
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-fire-light rounded-2xl border border-fire-mid p-5">
                <div className="font-display font-bold text-ink text-sm mb-2">✍️ Pro tip</div>
                <p className="text-xs text-ink-2 font-body leading-relaxed">Use <strong>ChatGPT for first drafts</strong> and <strong>Grammarly for final editing</strong>. This combination is free and covers 90% of writing needs.</p>
              </div>
              <div className="bg-white rounded-2xl border border-border p-5">
                <div className="font-display font-semibold text-ink text-sm mb-3">Related Guides</div>
                <div className="space-y-2">
                  {RELATED.map(r => (
                    <Link key={r.href} href={r.href} className="block text-xs font-body text-ink-3 hover:text-fire transition-colors">→ {r.label}</Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}

const COMPARISON = [
  { name: 'ChatGPT',    best: 'All-round writing',   free: true,  price: 'Free / $20/mo' },
  { name: 'Jasper',     best: 'Marketing copy',       free: false, price: 'From $49/mo' },
  { name: 'Grammarly',  best: 'Editing & polish',     free: true,  price: 'Free / $12/mo' },
  { name: 'Claude',     best: 'Long-form content',    free: true,  price: 'Free / $20/mo' },
  { name: 'Copy.ai',    best: 'Short-form copy',      free: true,  price: 'Free / $36/mo' },
  { name: 'Writesonic', best: 'SEO blog posts',       free: true,  price: 'From $19/mo' },
]

const RELATED = [
  { label: 'Best AI Tools for Students',  href: '/best-ai-tools-for-students' },
  { label: 'AI Tools for Beginners',      href: '/ai-tools-for-beginners' },
  { label: 'How to Create Videos with AI',href: '/how-to-create-videos-with-ai' },
  { label: 'Best AI Coding Tools',        href: '/best-ai-tools-for-coding' },
]
