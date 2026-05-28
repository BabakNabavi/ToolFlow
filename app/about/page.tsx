import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { tools } from '@/data/tools'

export const metadata: Metadata = {
  title: 'About ToolFlow — AI Tool Recommendation Engine',
  description: 'Learn about ToolFlow — how it works, how tools are recommended, and our affiliate disclosure. Transparent, honest AI tool recommendations.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-fire" />
            <span className="text-xs font-mono text-ink-2 uppercase tracking-wide">About Us</span>
          </div>
          <h1 className="font-display font-extrabold text-ink text-4xl sm:text-5xl leading-tight mb-5">
            About ToolFlow
          </h1>
          <p className="text-lg text-ink-2 font-body max-w-2xl mx-auto leading-relaxed">
            ToolFlow is an AI tool recommendation engine that helps people find the right AI tools for any task — instantly, for free.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {[
            { value: `${tools.length}+`, label: 'AI Tools Reviewed' },
            { value: '8',               label: 'Categories Covered' },
            { value: '2026',            label: 'Last Updated' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl border border-border p-6 text-center">
              <div className="font-display font-extrabold text-fire text-3xl mb-1">{s.value}</div>
              <div className="text-sm text-ink-3 font-body">{s.label}</div>
            </div>
          ))}
        </div>

        {/* What is ToolFlow */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-ink text-2xl mb-4">What is ToolFlow?</h2>
          <div className="bg-white rounded-2xl border border-border p-6 space-y-4 font-body text-ink-2 leading-relaxed">
            <p>
              ToolFlow is an <strong className="text-ink">AI answer engine for AI tools</strong>. Instead of browsing a directory, you type what you want to accomplish — and ToolFlow instantly recommends the best tools for that specific goal.
            </p>
            <p>
              We cover over {tools.length} real AI tools across writing, design, video, coding, productivity, audio, and research. Every recommendation is based on hands-on evaluation, user reviews, and real-world use cases.
            </p>
            <p>
              ToolFlow was built because finding the right AI tool is harder than it should be. There are thousands of tools launching every month, with overlapping features and confusing pricing. We cut through the noise.
            </p>
          </div>
        </section>

        {/* How recommendations work */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-ink text-2xl mb-4">How Our Recommendations Work</h2>
          <div className="space-y-4">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border p-5 flex gap-4">
                <div className="w-8 h-8 rounded-xl bg-fire-light border border-fire-mid flex items-center justify-center flex-shrink-0">
                  <span className="font-mono font-bold text-fire text-sm">{i + 1}</span>
                </div>
                <div>
                  <div className="font-display font-bold text-ink text-base mb-1">{step.title}</div>
                  <div className="text-sm font-body text-ink-2 leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Evaluation criteria */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-ink text-2xl mb-4">How We Evaluate Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CRITERIA.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border p-5">
                <div className="text-2xl mb-2">{c.icon}</div>
                <div className="font-display font-semibold text-ink text-base mb-1">{c.title}</div>
                <div className="text-sm font-body text-ink-3 leading-relaxed">{c.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Affiliate disclosure */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-ink text-2xl mb-4">Affiliate Disclosure</h2>
          <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6 font-body text-ink-2 leading-relaxed space-y-3">
            <p>
              <strong className="text-ink">ToolFlow participates in affiliate programs.</strong> Some links on this site are affiliate links — when you click and make a purchase, we may earn a small commission at no extra cost to you.
            </p>
            <p>
              Affiliate relationships <strong className="text-ink">do not influence our recommendations</strong>. We evaluate tools on their merits and recommend only what we believe is genuinely useful. Many tools we recommend do not have affiliate programs.
            </p>
            <p>
              We are transparent about this because we believe you deserve to know how we operate. If you have questions about any specific recommendation, you can contact us directly.
            </p>
          </div>
        </section>

        {/* Contact / Submit */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-ink text-2xl mb-4">Submit a Tool</h2>
          <div className="bg-white rounded-2xl border border-border p-6">
            <p className="text-ink-2 font-body leading-relaxed mb-4">
              Know an AI tool that should be featured on ToolFlow? We review all submissions and add tools that meet our quality bar. The tool must be:
            </p>
            <ul className="space-y-2 mb-6">
              {['Currently available and actively maintained', 'Genuinely useful for one of our categories', 'Transparent about pricing', 'Not spammy or misleading in its claims'].map((r, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-body text-ink-2">
                  <span className="w-4 h-4 rounded-full bg-fire-light border border-fire-mid flex items-center justify-center flex-shrink-0">
                    <span className="text-fire text-xs">✓</span>
                  </span>
                  {r}
                </li>
              ))}
            </ul>
            <Link href="mailto:hello@toolflow.io"
              className="btn-fire inline-block rounded-xl px-6 py-3 text-sm font-display font-bold">
              Submit a Tool →
            </Link>
          </div>
        </section>

        {/* Quick links */}
        <div className="bg-canvas rounded-2xl border border-border p-6">
          <div className="font-display font-semibold text-ink text-base mb-4">Explore ToolFlow</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {EXPLORE.map(l => (
              <Link key={l.href} href={l.href}
                className="flex items-center gap-2 text-sm font-body text-ink-2 hover:text-fire p-2 rounded-lg hover:bg-white transition-colors">
                <span>{l.icon}</span>
                <span>{l.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

const HOW_IT_WORKS = [
  { title: 'You describe your goal', desc: 'Type what you want to do in plain English — "create YouTube videos", "write blog posts", "learn to code". No need to know which tools exist.' },
  { title: 'We detect your intent', desc: 'Our recommendation engine analyses your query, identifies the goal category, and matches it to the most relevant AI tools in our database.' },
  { title: 'You get ranked recommendations', desc: 'We surface 3-6 tools ranked by relevance to your goal, along with a short answer explaining how to approach the task.' },
  { title: 'You try the best tool', desc: 'Each recommendation links directly to the tool with pricing info, pros and cons, and a one-click affiliate link to get started.' },
]

const CRITERIA = [
  { icon: '⚡', title: 'Actual usefulness',     desc: 'Does it genuinely solve the problem? We prioritise tools that deliver real results over those with impressive marketing.' },
  { icon: '💸', title: 'Pricing transparency',  desc: 'We favour tools with clear, honest pricing and meaningful free tiers. Hidden fees and dark patterns get penalised.' },
  { icon: '⭐', title: 'User satisfaction',     desc: 'We factor in community reviews, third-party ratings, and expert opinions from across the web.' },
  { icon: '🔄', title: 'Active development',    desc: 'We only recommend tools that are actively maintained and improving. Abandoned tools get removed.' },
]

const EXPLORE = [
  { icon: '🔍', label: 'Search tools',             href: '/search?q=' },
  { icon: '✍️', label: 'Writing tools',            href: '/category/writing' },
  { icon: '🎬', label: 'Video tools',              href: '/category/video' },
  { icon: '💻', label: 'Coding tools',             href: '/category/coding' },
  { icon: '🎓', label: 'Tools for students',       href: '/best-ai-tools-for-students' },
  { icon: '🌱', label: 'Tools for beginners',      href: '/ai-tools-for-beginners' },
]
