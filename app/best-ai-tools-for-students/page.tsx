import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQSection from '@/components/FAQSection'
import LandingToolCard from '@/components/LandingToolCard'
import { getToolBySlug } from '@/data/tools'

export const metadata: Metadata = {
  title: 'Best AI Tools for Students in 2026 — ToolFlow',
  description: 'Discover the best AI tools for students in 2026. From research and essay writing to coding and note-taking — ranked by students, for students.',
  keywords: 'best AI tools for students, AI for studying, AI writing tools students, free AI tools students, ChatGPT for students, Perplexity AI students',
  openGraph: {
    title: 'Best AI Tools for Students in 2026',
    description: 'The top AI tools every student should know about — for writing, research, coding, and productivity.',
    type: 'article',
  },
  alternates: { canonical: '/best-ai-tools-for-students' },
}

const TOOLS_WITH_HIGHLIGHTS = [
  { slug: 'perplexity-ai',  highlight: 'Best for research' },
  { slug: 'chatgpt',        highlight: 'Best all-rounder' },
  { slug: 'grammarly',      highlight: 'Best for writing' },
  { slug: 'claude',         highlight: 'Best for long essays' },
  { slug: 'notion-ai',      highlight: 'Best for notes' },
  { slug: 'github-copilot', highlight: 'Best for CS students' },
]

const FAQS = [
  {
    q: 'Are AI tools good for students?',
    a: 'Yes — when used responsibly. AI tools like Perplexity AI and ChatGPT help students research faster, understand complex topics, and improve their writing. The key is using them to enhance your learning, not replace it. Always verify AI-generated facts with original sources.',
  },
  {
    q: 'Is using AI tools considered cheating?',
    a: 'It depends on your institution\'s policy. Most universities allow AI tools for research and brainstorming, but using AI to write entire essays and submitting them as your own work is typically prohibited. Always check your school\'s academic integrity policy and be transparent about your use of AI.',
  },
  {
    q: 'What is the best free AI tool for students?',
    a: 'Perplexity AI is arguably the best free AI tool for students — it searches the web in real-time and provides cited answers. ChatGPT\'s free tier is also excellent for general assistance. Grammarly\'s free version handles grammar and style checking well.',
  },
  {
    q: 'Can AI help with essay writing?',
    a: 'AI tools like ChatGPT and Claude can help you brainstorm ideas, create outlines, improve sentence structure, and check grammar. However, you should write your own content and use AI to assist, not replace your thinking. Always run AI-assisted work through Grammarly for final polish.',
  },
  {
    q: 'Which AI tool is best for computer science students?',
    a: 'GitHub Copilot is essential for CS students — it suggests code completions and helps you learn by example. Cursor is a full AI-native editor great for projects. ChatGPT and Claude are invaluable for understanding algorithms, debugging, and getting explanations of complex concepts.',
  },
]

export default function StudentsPage() {
  const tools = TOOLS_WITH_HIGHLIGHTS.map(t => ({
    tool: getToolBySlug(t.slug)!,
    highlight: t.highlight,
  })).filter(t => t.tool)

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* ─── MAIN CONTENT ─────────────────────────────────────────── */}
          <article className="flex-1 min-w-0">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs font-mono text-ink-3 mb-8">
              <Link href="/" className="hover:text-fire transition-colors">Home</Link>
              <span>/</span>
              <span className="text-ink-2">Best AI Tools for Students</span>
            </nav>

            {/* Trust + date */}
            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span className="trust-badge">✓ Updated June 2026</span>
              <span className="trust-badge">✓ Tested by our team</span>
              <span className="trust-badge">✓ 6 tools reviewed</span>
            </div>

            {/* H1 */}
            <h1 className="font-display font-extrabold text-ink text-4xl sm:text-5xl leading-tight mb-5 animate-fade-up">
              Best AI Tools for Students in 2026
            </h1>

            <p className="text-lg text-ink-2 font-body leading-relaxed mb-8 animate-fade-up delay-100">
              Whether you need to research a paper, improve your writing, or understand complex topics faster — AI tools have become indispensable for modern students. We tested 30+ tools and ranked the best ones for academic use.
            </p>

            {/* Quick answer */}
            <div className="answer-block rounded-2xl p-6 mb-10 animate-fade-up delay-150">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-fire flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                </div>
                <span className="text-xs font-mono text-fire font-semibold uppercase tracking-wide">Quick Answer</span>
              </div>
              <p className="font-display font-semibold text-ink text-lg mb-2">What are the best AI tools for students?</p>
              <p className="text-ink-2 font-body text-sm leading-relaxed mb-3">
                The best AI tools for students in 2026 are <strong>Perplexity AI</strong> for research, <strong>ChatGPT</strong> for general help, <strong>Grammarly</strong> for writing, and <strong>Claude</strong> for complex essays. All offer generous free tiers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  '🔍 Research with citations: Perplexity AI',
                  '✍️ Writing help: ChatGPT or Claude',
                  '✅ Grammar check: Grammarly (free)',
                  '📓 Note organisation: Notion AI',
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-body text-ink-2">
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools section */}
            <div className="section-label mb-6">Top Picks</div>
            <h2 className="font-display font-bold text-ink text-2xl mb-6">
              The 6 Best AI Tools for Students
            </h2>
            <div className="space-y-5">
              {tools.map(({ tool, highlight }, i) => (
                <div key={tool.slug} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <LandingToolCard tool={tool} rank={i + 1} highlight={highlight} />
                </div>
              ))}
            </div>

            {/* Why use AI section */}
            <section className="mt-14">
              <div className="section-label mb-6">Context</div>
              <h2 className="font-display font-bold text-ink text-2xl mb-4">Why Students Should Use AI Tools in 2026</h2>
              <div className="prose-landing">
                <p>
                  The academic landscape has fundamentally changed. Students who know how to use AI tools effectively complete research faster, write better essays, and understand complex subjects more deeply. The question is no longer <em>whether</em> to use AI — it is <em>how</em> to use it responsibly.
                </p>
                <p>
                  AI tools like Perplexity AI provide cited answers from the live web, eliminating hours of library research. ChatGPT explains complex topics in plain language. Grammarly catches every grammatical error before submission.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                  {[
                    { icon: '⏱️', title: 'Save Time', desc: 'Research in minutes, not hours. Get explanations instantly.' },
                    { icon: '📈', title: 'Better Grades', desc: 'Stronger writing, better citations, clearer arguments.' },
                    { icon: '🆓', title: 'Mostly Free', desc: 'Most essential tools offer generous free tiers for students.' },
                  ].map((b, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-border p-4 text-center">
                      <div className="text-3xl mb-2">{b.icon}</div>
                      <div className="font-display font-bold text-ink text-sm mb-1">{b.title}</div>
                      <div className="text-xs text-ink-3 font-body">{b.desc}</div>
                    </div>
                  ))}
                </div>

                <h3>How to use AI tools responsibly as a student</h3>
                <ul>
                  <li>Use AI to <strong>research and understand topics</strong>, not to generate final submissions</li>
                  <li>Always <strong>verify facts</strong> from AI with primary sources</li>
                  <li>Use Grammarly to <strong>improve your own writing</strong>, not replace it</li>
                  <li>Check your institution&apos;s <strong>academic integrity policy</strong> before use</li>
                  <li>Use tools like Perplexity AI that <strong>cite their sources</strong></li>
                </ul>
              </div>
            </section>

            {/* FAQ */}
            <FAQSection faqs={FAQS} title="FAQs About AI Tools for Students" />

            {/* Related links */}
            <div className="mt-12 p-6 bg-white rounded-2xl border border-border">
              <div className="font-display font-semibold text-ink text-base mb-4">Related Guides</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {RELATED.map(r => (
                  <Link key={r.href} href={r.href}
                    className="flex items-center gap-2 text-sm font-body text-ink-2 hover:text-fire transition-colors p-2 rounded-lg hover:bg-canvas">
                    <span className="text-fire">→</span> {r.label}
                  </Link>
                ))}
              </div>
            </div>
          </article>

          {/* ─── SIDEBAR ──────────────────────────────────────────────── */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-20 space-y-5">
              <div className="bg-white rounded-2xl border border-border p-5">
                <div className="font-display font-semibold text-ink text-sm mb-3">Jump to a Tool</div>
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
                <div className="font-display font-bold text-ink text-sm mb-2">🎓 Student tip</div>
                <p className="text-xs text-ink-2 font-body leading-relaxed">
                  Most tools offer <strong>free tiers</strong> that are more than enough for student use. Start with Perplexity AI and ChatGPT before paying for anything.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-border p-5">
                <div className="font-display font-semibold text-ink text-sm mb-3">Other Guides</div>
                <div className="space-y-2">
                  {RELATED.map(r => (
                    <Link key={r.href} href={r.href} className="block text-xs font-body text-ink-3 hover:text-fire transition-colors">
                      → {r.label}
                    </Link>
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

const RELATED = [
  { label: 'Best AI Writing Tools',          href: '/best-ai-writing-tools' },
  { label: 'AI Tools for Beginners',         href: '/ai-tools-for-beginners' },
  { label: 'Best AI Tools for Coding',       href: '/best-ai-tools-for-coding' },
  { label: 'How to Create Videos with AI',   href: '/how-to-create-videos-with-ai' },
]
