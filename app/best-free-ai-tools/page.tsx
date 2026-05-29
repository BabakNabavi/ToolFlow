import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQSection from '@/components/FAQSection'
import LandingToolCard from '@/components/LandingToolCard'
import { getToolBySlug } from '@/data/tools'

export const metadata: Metadata = {
  title: 'Best Free AI Tools in 2026 — No Credit Card Required — ToolFlow',
  description: 'The best completely free AI tools in 2026. No credit card, no hidden fees. Top-rated free AI tools for writing, design, coding, research, and productivity.',
  keywords: 'best free AI tools, free AI tools 2026, free ChatGPT alternatives, free AI writing tools, free AI image generator, no cost AI tools',
  openGraph: {
    title: 'Best Free AI Tools in 2026 — No Credit Card Required',
    description: 'The top free AI tools for writing, design, research, and productivity — all with generous free tiers.',
    type: 'article',
  },
  alternates: { canonical: '/best-free-ai-tools' },
}

const TOOLS_WITH_HIGHLIGHTS = [
  { slug: 'chatgpt',       highlight: 'Free GPT-4o access' },
  { slug: 'perplexity-ai', highlight: 'Free web research' },
  { slug: 'grammarly',     highlight: 'Free writing polish' },
  { slug: 'canva-ai',      highlight: 'Free design tools' },
  { slug: 'replit-ai',     highlight: 'Free coding IDE' },
  { slug: 'otter-ai',      highlight: 'Free transcription' },
]

const FREE_TIERS = [
  { tool: 'ChatGPT',        what: 'GPT-4o access (limited)',     limit: '15 messages/day on 4o' },
  { tool: 'Perplexity AI',  what: 'Unlimited web search',        limit: 'Pro searches limited' },
  { tool: 'Grammarly',      what: 'Grammar + basic style',       limit: 'Advanced tone on Pro' },
  { tool: 'Canva AI',       what: 'Design + Magic Write',        limit: '50 AI credits/month' },
  { tool: 'Replit AI',      what: 'AI coding + deployment',      limit: 'Storage limits' },
  { tool: 'Otter.ai',       what: 'Meeting transcription',       limit: '300 mins/month' },
  { tool: 'Claude',         what: 'Sonnet model access',         limit: 'Rate limited' },
  { tool: 'Stable Diffusion', what: 'Unlimited image generation', limit: 'Requires own GPU' },
]

const FAQS = [
  {
    q: 'Are free AI tools actually good?',
    a: 'Yes — the free tiers of the best AI tools are genuinely powerful. ChatGPT free handles most everyday tasks. Grammarly free fixes all grammar issues. Canva AI free creates professional designs. Perplexity AI is completely free for research. For most users, free tiers are sufficient for months before needing to upgrade.',
  },
  {
    q: 'What is the best completely free AI tool?',
    a: 'Perplexity AI is the best completely free AI tool — unlimited searches with cited sources, no account required. ChatGPT free is the best free AI assistant. Grammarly free is the best free writing tool. All three have no credit card requirement to get started.',
  },
  {
    q: 'What is the difference between free and paid AI tools?',
    a: 'Free tiers typically have usage limits (messages per day, minutes per month), access to older or smaller models, and fewer features. Paid plans unlock higher usage limits, the latest and most powerful models, priority access during peak times, and advanced features like longer context or voice modes.',
  },
  {
    q: 'Can I build a business using only free AI tools?',
    a: 'Yes, especially when starting out. Many solopreneurs and small businesses run entirely on free AI tiers: ChatGPT free for content, Canva free for design, Grammarly free for editing, Perplexity free for research. As revenue grows, upgrading specific tools makes sense.',
  },
  {
    q: 'Which free AI tool is best for students?',
    a: 'Perplexity AI is the best free AI tool for students — it provides cited research from the live web at no cost. ChatGPT free is excellent for understanding concepts and getting writing help. Grammarly free ensures every submission is polished. All three together cover 90% of student AI needs for free.',
  },
]

export default function FreePage() {
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
              <span className="text-ink-2">Best Free AI Tools</span>
            </nav>

            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span className="trust-badge">✓ Updated June 2026</span>
              <span className="trust-badge">✓ No credit card needed</span>
              <span className="trust-badge">✓ 8 tools reviewed</span>
            </div>

            <h1 className="font-display font-extrabold text-ink text-4xl sm:text-5xl leading-tight mb-5 animate-fade-up">
              Best Free AI Tools in 2026
            </h1>

            <p className="text-lg text-ink-2 font-body leading-relaxed mb-8 animate-fade-up delay-100">
              You do not need to spend a cent to access powerful AI. The best AI tools in the world — from ChatGPT to Canva AI — offer free tiers that are genuinely useful. Here are the best free AI tools you can start using today, no credit card required.
            </p>

            {/* Quick answer */}
            <div className="answer-block rounded-2xl p-6 mb-10 animate-fade-up delay-150">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-fire flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                </div>
                <span className="text-xs font-mono text-fire font-semibold uppercase tracking-wide">Quick Answer</span>
              </div>
              <p className="font-display font-semibold text-ink text-lg mb-2">What are the best free AI tools in 2026?</p>
              <p className="text-ink-2 font-body text-sm leading-relaxed mb-4">
                <strong>Perplexity AI</strong> (free research), <strong>ChatGPT</strong> (free assistant), <strong>Grammarly</strong> (free writing), and <strong>Canva AI</strong> (free design) together cover most AI needs at zero cost.
              </p>
              <div className="bg-white rounded-xl border border-border p-4">
                <div className="text-xs font-mono text-ink-3 mb-3 uppercase tracking-wide">Your free AI starter kit</div>
                {[
                  { emoji: '🤖', tool: 'ChatGPT Free',     use: 'Writing, research, coding help, daily assistant' },
                  { emoji: '🔍', tool: 'Perplexity AI',    use: 'Real-time web research with citations' },
                  { emoji: '✅', tool: 'Grammarly Free',   use: 'Grammar, spelling, basic style checks' },
                  { emoji: '🎨', tool: 'Canva AI Free',    use: 'Graphic design, presentations, social posts' },
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-3 py-2.5 border-b border-border last:border-0">
                    <span className="text-xl flex-shrink-0">{r.emoji}</span>
                    <div>
                      <div className="font-display font-semibold text-ink text-sm">{r.tool}</div>
                      <div className="text-xs font-body text-ink-3">{r.use}</div>
                    </div>
                    <span className="ml-auto text-xs font-mono bg-green-50 text-green-700 border border-green-200 rounded-full px-2 py-0.5 flex-shrink-0">FREE</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Free tier comparison table */}
            <section className="mb-10 overflow-x-auto">
              <div className="section-label mb-4">At a glance</div>
              <h2 className="font-display font-bold text-ink text-xl mb-4">Free Tier Comparison</h2>
              <div className="rounded-2xl border border-border bg-white overflow-hidden">
                <table className="w-full text-sm font-body">
                  <thead className="bg-canvas border-b border-border">
                    <tr>
                      {['Tool', 'What you get free', 'Limitation'].map(h => (
                        <th key={h} className="text-left px-4 py-3 font-display font-semibold text-ink text-xs">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {FREE_TIERS.map((r, i) => (
                      <tr key={i} className="hover:bg-canvas/50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-ink">{r.tool}</td>
                        <td className="px-4 py-3 text-ink-2">{r.what}</td>
                        <td className="px-4 py-3 text-xs font-mono text-ink-3">{r.limit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Tools */}
            <div className="section-label mb-6">Top Picks</div>
            <h2 className="font-display font-bold text-ink text-2xl mb-6">6 Best Free AI Tools Reviewed</h2>
            <div className="space-y-5">
              {tools.map(({ tool, highlight }, i) => (
                <div key={tool.slug} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <LandingToolCard tool={tool} rank={i + 1} highlight={highlight} />
                </div>
              ))}
            </div>

            {/* Why section */}
            <section className="mt-14">
              <div className="section-label mb-6">Why It Matters</div>
              <h2 className="font-display font-bold text-ink text-2xl mb-4">Are Free AI Tools Worth Using?</h2>
              <div className="prose-landing">
                <p>
                  The quality gap between free and paid AI tools has narrowed dramatically in 2026. ChatGPT&apos;s free tier now includes access to GPT-4o — the same model that costs $20/month on Plus. Canva&apos;s free tier includes AI generation features. Perplexity AI&apos;s core web search is completely free.
                </p>
                <p>
                  For most everyday use cases — writing emails, doing research, creating graphics, checking grammar — free tiers are more than sufficient. You typically only need paid plans if you are a power user hitting daily limits, a professional needing advanced features, or a team needing collaboration tools.
                </p>
                <h3>When should you upgrade from free to paid?</h3>
                <ul>
                  <li>You are hitting daily message limits on ChatGPT</li>
                  <li>You need access to the very latest models (o1, Claude Opus)</li>
                  <li>You need to process large documents or long contexts</li>
                  <li>You are generating commercial content and need usage rights clarity</li>
                  <li>You need team features or API access</li>
                </ul>
              </div>
            </section>

            <FAQSection faqs={FAQS} title="FAQs About Free AI Tools" />

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

          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-20 space-y-5">
              <div className="bg-white rounded-2xl border border-border p-5">
                <div className="font-display font-semibold text-ink text-sm mb-3">Free Tools Reviewed</div>
                <div className="space-y-1">
                  {tools.map(({ tool }, i) => (
                    <div key={tool.slug} className="flex items-center gap-2 text-sm font-body text-ink-3 py-1.5">
                      <span className="font-mono text-fire text-xs w-4">#{i+1}</span>
                      <span>{tool.emoji}</span>
                      <span>{tool.name}</span>
                      <span className="ml-auto text-xs font-mono bg-green-50 text-green-700 border border-green-200 rounded-full px-1.5 py-0.5">FREE</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-fire-light rounded-2xl border border-fire-mid p-5">
                <div className="font-display font-bold text-ink text-sm mb-2">💡 Pro tip</div>
                <p className="text-xs text-ink-2 font-body leading-relaxed">
                  Use <strong>multiple free tiers</strong> together. ChatGPT + Grammarly + Perplexity + Canva = a complete AI toolkit for $0.
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

const RELATED = [
  { label: 'AI Tools for Beginners',        href: '/ai-tools-for-beginners' },
  { label: 'Best AI Tools for Students',    href: '/best-ai-tools-for-students' },
  { label: 'Best AI Writing Tools',         href: '/best-ai-writing-tools' },
  { label: 'Best AI Tools for YouTube',     href: '/best-ai-tools-for-youtube' },
]
