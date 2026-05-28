import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQSection from '@/components/FAQSection'
import LandingToolCard from '@/components/LandingToolCard'
import { getToolBySlug } from '@/data/tools'

export const metadata: Metadata = {
  title: 'Best AI Tools for Beginners in 2026 — ToolFlow',
  description: 'New to AI? Here are the easiest and most powerful AI tools for beginners in 2026. Start with these and save hours every week.',
  keywords: 'AI tools for beginners, easy AI tools, best AI tools to start with, ChatGPT beginners, AI for non-technical users, simple AI tools 2026',
  openGraph: {
    title: 'Best AI Tools for Beginners in 2026',
    description: 'The easiest, most powerful AI tools for people just getting started.',
    type: 'article',
  },
  alternates: { canonical: '/ai-tools-for-beginners' },
}

const TOOLS_WITH_HIGHLIGHTS = [
  { slug: 'chatgpt',     highlight: 'Start here' },
  { slug: 'canva-ai',    highlight: 'Easiest design tool' },
  { slug: 'grammarly',   highlight: 'Works automatically' },
  { slug: 'perplexity-ai', highlight: 'Best free research' },
  { slug: 'notion-ai',   highlight: 'Best for notes' },
  { slug: 'otter-ai',    highlight: 'Best for meetings' },
]

const FAQS = [
  {
    q: 'What is the easiest AI tool to start with?',
    a: 'ChatGPT is the easiest AI tool for beginners — just go to chat.openai.com, type what you need, and it responds. No setup, no technical knowledge, no installation required. The free tier is generous and handles most everyday tasks.',
  },
  {
    q: 'Do I need technical knowledge to use AI tools?',
    a: 'No. The best AI tools for beginners are designed for non-technical users. ChatGPT, Canva AI, Grammarly, and Perplexity AI all work through simple interfaces — just type, click, or upload. No coding or AI knowledge is needed.',
  },
  {
    q: 'Are free AI tools good enough for beginners?',
    a: 'Absolutely. ChatGPT free, Grammarly free, Canva AI free, and Perplexity AI free together cover writing, design, editing, and research. Most beginners find free tiers more than sufficient for months before needing to upgrade.',
  },
  {
    q: 'How do I get started with AI tools safely?',
    a: 'Start with reputable tools from established companies (OpenAI, Google, Anthropic, Canva). Never share sensitive personal or financial information with AI tools. Use AI to assist your work, not replace your judgement. Always review AI outputs before using them.',
  },
  {
    q: 'What can I realistically do with AI as a beginner?',
    a: 'As a complete beginner you can: write and edit documents with Grammarly and ChatGPT, design graphics with Canva AI, research any topic with Perplexity AI, transcribe meetings with Otter.ai, and automate repetitive tasks with Zapier. Most people save 5-10 hours per week within their first month.',
  },
]

export default function BeginnersPage() {
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
              <span className="text-ink-2">AI Tools for Beginners</span>
            </nav>

            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span className="trust-badge">✓ Updated June 2026</span>
              <span className="trust-badge">✓ No tech skills needed</span>
              <span className="trust-badge">✓ All free to start</span>
            </div>

            <h1 className="font-display font-extrabold text-ink text-4xl sm:text-5xl leading-tight mb-5 animate-fade-up">
              Best AI Tools for Beginners in 2026
            </h1>

            <p className="text-lg text-ink-2 font-body leading-relaxed mb-8 animate-fade-up delay-100">
              You don&apos;t need to be a tech expert to benefit from AI. These tools are easy to use, mostly free, and can save you hours every week — starting from day one.
            </p>

            <div className="answer-block rounded-2xl p-6 mb-10 animate-fade-up delay-150">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-fire flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                </div>
                <span className="text-xs font-mono text-fire font-semibold uppercase tracking-wide">Quick Answer</span>
              </div>
              <p className="font-display font-semibold text-ink text-lg mb-2">What are the best AI tools for complete beginners?</p>
              <p className="text-ink-2 font-body text-sm leading-relaxed mb-3">
                Start with <strong>ChatGPT</strong> (free), <strong>Canva AI</strong> for design, and <strong>Grammarly</strong> for writing. These three tools alone can save hours every week and require zero technical knowledge.
              </p>
              <div className="bg-white rounded-xl border border-border p-4">
                <div className="text-xs font-mono text-ink-3 mb-2 uppercase">Your starter kit</div>
                {[
                  { tool: '🤖 ChatGPT', use: 'Writing, research, questions — your daily AI assistant' },
                  { tool: '🖌️ Canva AI', use: 'Design graphics, presentations, social media posts' },
                  { tool: '✅ Grammarly', use: 'Fix grammar in every email and document automatically' },
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-3 py-2 border-b border-border last:border-0">
                    <span className="font-display font-semibold text-ink text-sm w-24 flex-shrink-0">{r.tool}</span>
                    <span className="text-xs font-body text-ink-3">{r.use}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Beginner path */}
            <section className="mb-10">
              <div className="section-label mb-6">Your Path</div>
              <h2 className="font-display font-bold text-ink text-2xl mb-5">How to Get Started with AI (in 3 steps)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { step: '1', title: 'Week 1: Start with ChatGPT', desc: 'Use it daily. Ask it to write emails, explain concepts, summarise articles. Learn what AI can do by experimenting freely.', color: 'bg-fire-light border-fire-mid' },
                  { step: '2', title: 'Week 2: Add Grammarly', desc: 'Install the browser extension. It automatically improves everything you type — emails, Google Docs, social posts. Zero effort required.', color: 'bg-sky/5 border-sky/20' },
                  { step: '3', title: 'Week 3: Expand your toolkit', desc: 'Add Canva AI for design, Perplexity AI for research. By now you\'ll know which tools fit your workflow.', color: 'bg-green-50 border-green-200' },
                ].map(s => (
                  <div key={s.step} className={`rounded-2xl border p-5 ${s.color}`}>
                    <div className="font-mono text-xs text-ink-3 mb-2">STEP {s.step}</div>
                    <div className="font-display font-bold text-ink text-base mb-2">{s.title}</div>
                    <div className="text-sm font-body text-ink-2 leading-relaxed">{s.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            <div className="section-label mb-6">Top Picks</div>
            <h2 className="font-display font-bold text-ink text-2xl mb-6">6 Best AI Tools for Beginners</h2>
            <div className="space-y-5">
              {tools.map(({ tool, highlight }, i) => (
                <div key={tool.slug} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <LandingToolCard tool={tool} rank={i + 1} highlight={highlight} />
                </div>
              ))}
            </div>

            <section className="mt-14">
              <div className="section-label mb-6">Context</div>
              <h2 className="font-display font-bold text-ink text-2xl mb-4">Why Now Is the Best Time to Start Using AI</h2>
              <div className="prose-landing">
                <p>
                  AI tools have reached a tipping point in 2026. They are easy enough for anyone to use, powerful enough to genuinely save time, and free enough to start without any investment. The people who start now will have a significant advantage over those who wait.
                </p>
                <p>
                  You don&apos;t need to understand how AI works to benefit from it. Just like you don&apos;t need to understand how a car engine works to drive — you just need to know how to use the tool.
                </p>
                <h3>What beginners can realistically achieve with AI in 30 days</h3>
                <ul>
                  <li>Write emails 3x faster with ChatGPT</li>
                  <li>Design professional graphics with Canva AI (no design skills needed)</li>
                  <li>Research any topic with Perplexity AI in seconds</li>
                  <li>Never submit a document with grammar errors again (Grammarly)</li>
                  <li>Transcribe and summarise any meeting automatically (Otter.ai)</li>
                </ul>
              </div>
            </section>

            <FAQSection faqs={FAQS} title="FAQs for AI Beginners" />

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
                <div className="font-display font-semibold text-ink text-sm mb-3">Tools in This Guide</div>
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
                <div className="font-display font-bold text-ink text-sm mb-2">🌱 Beginner tip</div>
                <p className="text-xs text-ink-2 font-body leading-relaxed">All 6 tools in this guide have <strong>free tiers</strong>. Start for free. Upgrade only when you need more.</p>
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

const RELATED = [
  { label: 'Best AI Tools for Students',   href: '/best-ai-tools-for-students' },
  { label: 'Best AI Writing Tools',        href: '/best-ai-writing-tools' },
  { label: 'How to Create Videos with AI', href: '/how-to-create-videos-with-ai' },
  { label: 'Best AI Coding Tools',         href: '/best-ai-tools-for-coding' },
]
