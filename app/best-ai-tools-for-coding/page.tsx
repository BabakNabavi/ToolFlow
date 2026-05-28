import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQSection from '@/components/FAQSection'
import LandingToolCard from '@/components/LandingToolCard'
import { getToolBySlug } from '@/data/tools'

export const metadata: Metadata = {
  title: 'Best AI Tools for Coding in 2026 — ToolFlow',
  description: 'The best AI coding tools and code assistants in 2026. GitHub Copilot vs Cursor vs Claude — ranked by real developers.',
  keywords: 'best AI tools for coding, AI code assistant, GitHub Copilot, Cursor AI, AI for developers, AI coding tools 2026, best AI IDE',
  openGraph: {
    title: 'Best AI Tools for Coding in 2026',
    description: 'Top AI coding assistants compared — for developers of all skill levels.',
    type: 'article',
  },
  alternates: { canonical: '/best-ai-tools-for-coding' },
}

const TOOLS_WITH_HIGHLIGHTS = [
  { slug: 'cursor',        highlight: 'Best AI-native editor' },
  { slug: 'github-copilot',highlight: 'Best IDE plugin' },
  { slug: 'claude',        highlight: 'Best for code review' },
  { slug: 'chatgpt',       highlight: 'Best for learning' },
  { slug: 'replit-ai',     highlight: 'Best for beginners' },
  { slug: 'tabnine',       highlight: 'Best for privacy' },
]

const FAQS = [
  {
    q: 'What is the best AI tool for coding in 2026?',
    a: 'Cursor is the best AI-native code editor in 2026 — it understands your entire codebase, supports multi-file context, and has excellent chat mode. GitHub Copilot remains the best IDE plugin for developers who prefer to stay in VS Code or JetBrains. For code review and explanation, Claude is unmatched.',
  },
  {
    q: 'Is GitHub Copilot worth it for developers?',
    a: 'Yes, for most developers. Studies show GitHub Copilot increases coding speed by 30-55% on average. At $10/month, it pays for itself within hours. The free tier now exists for individual developers on GitHub, making it even more accessible.',
  },
  {
    q: 'Can AI tools help you learn to code?',
    a: 'Absolutely. ChatGPT and Claude can explain any concept in plain language, generate practice exercises, debug your errors instantly, and teach by example. Replit AI combines an online IDE with an AI coding assistant — making it the best platform to learn coding from scratch.',
  },
  {
    q: 'Does using AI coding tools make you a worse developer?',
    a: 'When used correctly, AI coding tools make you a better developer by exposing you to more patterns and solutions. The risk is relying on AI to write code you don\'t understand. Use AI as a pair programmer — have it suggest, then make sure you understand and own the code.',
  },
  {
    q: 'What AI coding tool is best for enterprise teams?',
    a: 'Tabnine is the top choice for enterprise teams with privacy requirements — it runs locally or on-premise, keeping your code off third-party servers. GitHub Copilot for Business offers team management and policy controls. Both support all major IDEs.',
  },
]

export default function CodingPage() {
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
              <span className="text-ink-2">Best AI Tools for Coding</span>
            </nav>

            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span className="trust-badge">✓ Updated June 2026</span>
              <span className="trust-badge">✓ Tested by developers</span>
              <span className="trust-badge">✓ 6 tools compared</span>
            </div>

            <h1 className="font-display font-extrabold text-ink text-4xl sm:text-5xl leading-tight mb-5 animate-fade-up">
              Best AI Tools for Coding in 2026
            </h1>

            <p className="text-lg text-ink-2 font-body leading-relaxed mb-8 animate-fade-up delay-100">
              AI coding assistants have become the most important productivity tools in a developer&apos;s arsenal. The right tool can make you 2x faster, help you learn new languages, and reduce the time you spend debugging by half.
            </p>

            <div className="answer-block rounded-2xl p-6 mb-10 animate-fade-up delay-150">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-fire flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                </div>
                <span className="text-xs font-mono text-fire font-semibold uppercase tracking-wide">Quick Answer</span>
              </div>
              <p className="font-display font-semibold text-ink text-lg mb-2">What are the best AI tools for coding?</p>
              <p className="text-ink-2 font-body text-sm leading-relaxed mb-3">
                <strong>Cursor</strong> for AI-native editing, <strong>GitHub Copilot</strong> for IDE integration, <strong>Claude</strong> for code review and explanation, and <strong>Replit AI</strong> for browser-based development and learning.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  '⌨️ Best editor: Cursor',
                  '🔌 Best plugin: GitHub Copilot',
                  '🔍 Best for review: Claude',
                  '🌐 Best for beginners: Replit AI',
                ].map((pt, i) => (
                  <div key={i} className="text-sm font-body text-ink-2 font-mono">{pt}</div>
                ))}
              </div>
            </div>

            {/* Comparison */}
            <section className="mb-10 overflow-x-auto">
              <div className="section-label mb-4">At a glance</div>
              <h2 className="font-display font-bold text-ink text-xl mb-4">Quick Comparison</h2>
              <div className="rounded-2xl border border-border bg-white overflow-hidden">
                <table className="w-full text-sm font-body">
                  <thead className="bg-canvas border-b border-border">
                    <tr>
                      {['Tool', 'Type', 'Best for', 'Price/mo'].map(h => (
                        <th key={h} className="text-left px-4 py-3 font-display font-semibold text-ink text-xs">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {COMPARISON.map((r, i) => (
                      <tr key={i} className="hover:bg-canvas/50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-ink">{r.name}</td>
                        <td className="px-4 py-3 text-xs font-mono text-ink-3">{r.type}</td>
                        <td className="px-4 py-3 text-ink-2">{r.best}</td>
                        <td className="px-4 py-3 text-ink-2 font-mono text-xs">{r.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <div className="section-label mb-6">Top Picks</div>
            <h2 className="font-display font-bold text-ink text-2xl mb-6">Best AI Coding Tools Reviewed</h2>
            <div className="space-y-5">
              {tools.map(({ tool, highlight }, i) => (
                <div key={tool.slug} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <LandingToolCard tool={tool} rank={i + 1} highlight={highlight} />
                </div>
              ))}
            </div>

            <section className="mt-14">
              <div className="section-label mb-6">Context</div>
              <h2 className="font-display font-bold text-ink text-2xl mb-4">How AI Coding Tools Actually Work</h2>
              <div className="prose-landing">
                <p>
                  AI coding assistants are trained on billions of lines of open-source code. They understand programming patterns, common algorithms, and best practices — which lets them suggest relevant completions as you type, explain what code does, and generate entire functions from a description.
                </p>
                <h3>Cursor vs GitHub Copilot: which should you choose?</h3>
                <p>
                  <strong>GitHub Copilot</strong> is the better choice if you want to stay in your existing editor (VS Code, JetBrains, Neovim). It integrates as a plugin with minimal disruption to your workflow. <strong>Cursor</strong> is the better choice if you want deeper AI integration — it understands your full codebase, supports longer context windows, and has a more powerful chat interface.
                </p>
                <h3>How to get the most from AI coding tools</h3>
                <ul>
                  <li>Write clear <strong>comments before functions</strong> — AI completes code based on your description</li>
                  <li>Use <strong>chat mode</strong> to explain errors, not just to complete code</li>
                  <li>Review all AI-generated code — it can introduce subtle bugs</li>
                  <li>Use AI to <strong>write tests</strong> for existing code — it excels at this</li>
                  <li>Ask AI to <strong>explain unfamiliar codebases</strong> — massive time saver when joining new projects</li>
                </ul>
              </div>
            </section>

            <FAQSection faqs={FAQS} title="FAQs About AI Coding Tools" />

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
                <div className="font-display font-semibold text-ink text-sm mb-3">Tools Compared</div>
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
                <div className="font-display font-bold text-ink text-sm mb-2">💻 Dev tip</div>
                <p className="text-xs text-ink-2 font-body leading-relaxed">
                  Try <strong>Cursor free</strong> for a week. Most developers never go back. It&apos;s the fastest path to AI-native development.
                </p>
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
  { name: 'Cursor',         type: 'AI editor',     best: 'Full codebase awareness',  price: 'Free / $20' },
  { name: 'GitHub Copilot', type: 'IDE plugin',    best: 'VS Code / JetBrains users', price: '$10' },
  { name: 'Claude',         type: 'AI assistant',  best: 'Code review & explanation', price: 'Free / $20' },
  { name: 'ChatGPT',        type: 'AI assistant',  best: 'Learning & debugging',      price: 'Free / $20' },
  { name: 'Replit AI',      type: 'Browser IDE',   best: 'Beginners & prototyping',   price: 'Free / $7' },
  { name: 'Tabnine',        type: 'IDE plugin',    best: 'Privacy-first teams',       price: 'Free / $12' },
]

const RELATED = [
  { label: 'AI Tools for Beginners',       href: '/ai-tools-for-beginners' },
  { label: 'Best AI Tools for Students',   href: '/best-ai-tools-for-students' },
  { label: 'Best AI Writing Tools',        href: '/best-ai-writing-tools' },
  { label: 'How to Create Videos with AI', href: '/how-to-create-videos-with-ai' },
]
