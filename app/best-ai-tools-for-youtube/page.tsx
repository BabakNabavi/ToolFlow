import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQSection from '@/components/FAQSection'
import LandingToolCard from '@/components/LandingToolCard'
import { getToolBySlug } from '@/data/tools'

export const metadata: Metadata = {
  title: 'Best AI Tools for YouTube Creators in 2026 — ToolFlow',
  description: 'The best AI tools for YouTube creators in 2026. From scripting and voiceover to video editing and thumbnails — grow your channel faster with AI.',
  keywords: 'best AI tools for YouTube, AI for YouTube creators, AI video tools YouTube, YouTube automation AI, AI thumbnail maker, AI script writer YouTube',
  openGraph: {
    title: 'Best AI Tools for YouTube Creators in 2026',
    description: 'Grow your YouTube channel faster with these AI tools — for scripting, editing, voiceover, and thumbnails.',
    type: 'article',
  },
  alternates: { canonical: '/best-ai-tools-for-youtube' },
}

const TOOLS_WITH_HIGHLIGHTS = [
  { slug: 'descript',    highlight: 'Best for editing' },
  { slug: 'elevenlabs',  highlight: 'Best for voiceover' },
  { slug: 'runway-ml',   highlight: 'Best for B-roll' },
  { slug: 'chatgpt',     highlight: 'Best for scripting' },
  { slug: 'canva-ai',    highlight: 'Best for thumbnails' },
  { slug: 'otter-ai',    highlight: 'Best for transcripts' },
]

const FAQS = [
  {
    q: 'Which AI tool is best for YouTube videos?',
    a: 'Descript is the best all-in-one AI tool for YouTube — it transcribes your footage, lets you edit by editing text, removes filler words automatically, and exports in any format. For generating B-roll and cinematic clips, Runway ML is unmatched. Most successful YouTubers use both.',
  },
  {
    q: 'Can AI write YouTube scripts?',
    a: 'Yes. ChatGPT is excellent at writing YouTube scripts — just describe your topic, target audience, and video length. It generates structured scripts with hooks, main content, and CTAs. Many creators use it as a starting point and add their own personality on top.',
  },
  {
    q: 'What is the best AI tool for YouTube thumbnails?',
    a: 'Canva AI is the easiest tool for YouTube thumbnails — it generates designs from text and has hundreds of YouTube-specific templates. Midjourney produces more creative, eye-catching visuals if you want something unique. Most top creators use a combination of both.',
  },
  {
    q: 'Can I use AI voiceover for YouTube?',
    a: 'Yes, and it is increasingly common. ElevenLabs produces the most realistic AI voices — many viewers cannot tell the difference from human narration. You can also clone your own voice with ElevenLabs, so the AI sounds exactly like you even when you do not record.',
  },
  {
    q: 'Does using AI for YouTube violate any policies?',
    a: 'No — YouTube allows AI-generated content. However, YouTube requires disclosure if your content is "realistic" AI-generated video or audio that could mislead viewers. Always add a disclosure in your description if using AI avatars or synthetic voices for realistic content.',
  },
]

const YOUTUBE_WORKFLOW = [
  { step: '1', title: 'Research & Script', tool: 'ChatGPT', desc: 'Use ChatGPT to research your topic, find a compelling angle, and write a full script with hook, body, and CTA.' },
  { step: '2', title: 'Record or Generate Visuals', tool: 'Runway ML', desc: 'Record your footage or use Runway ML to generate cinematic B-roll clips from text descriptions.' },
  { step: '3', title: 'Edit by Transcript', tool: 'Descript', desc: 'Import your footage into Descript. Edit the video by editing the auto-generated transcript — delete words to cut footage.' },
  { step: '4', title: 'Add Voiceover', tool: 'ElevenLabs', desc: 'Generate a professional voiceover with ElevenLabs, or clone your own voice for hands-free narration.' },
  { step: '5', title: 'Design Thumbnail', tool: 'Canva AI', desc: 'Create a click-worthy thumbnail in Canva AI using YouTube-optimised templates and AI-generated images.' },
  { step: '6', title: 'Write Description & Tags', tool: 'ChatGPT', desc: 'Ask ChatGPT to write an SEO-optimised video description, tags, and chapter markers from your script.' },
]

export default function YouTubePage() {
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
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs font-mono text-ink-3 mb-8">
              <Link href="/" className="hover:text-fire transition-colors">Home</Link>
              <span>/</span>
              <Link href="/category/video" className="hover:text-fire transition-colors">Video</Link>
              <span>/</span>
              <span className="text-ink-2">AI Tools for YouTube</span>
            </nav>

            {/* Trust badges */}
            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span className="trust-badge">✓ Updated June 2026</span>
              <span className="trust-badge">✓ 6 tools reviewed</span>
              <span className="trust-badge">✓ Used by top creators</span>
            </div>

            {/* H1 */}
            <h1 className="font-display font-extrabold text-ink text-4xl sm:text-5xl leading-tight mb-5 animate-fade-up">
              Best AI Tools for YouTube Creators in 2026
            </h1>

            <p className="text-lg text-ink-2 font-body leading-relaxed mb-8 animate-fade-up delay-100">
              Growing a YouTube channel in 2026 without AI is like editing with a typewriter. The right AI tools cut your production time in half, improve video quality, and help you publish more consistently — the single biggest factor in channel growth.
            </p>

            {/* Quick answer */}
            <div className="answer-block rounded-2xl p-6 mb-10 animate-fade-up delay-150">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-fire flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                </div>
                <span className="text-xs font-mono text-fire font-semibold uppercase tracking-wide">Quick Answer</span>
              </div>
              <p className="font-display font-semibold text-ink text-lg mb-2">What are the best AI tools for YouTube creators?</p>
              <p className="text-ink-2 font-body text-sm leading-relaxed mb-4">
                The best YouTube AI stack is: <strong>ChatGPT</strong> for scripting, <strong>Descript</strong> for editing, <strong>ElevenLabs</strong> for voiceover, <strong>Runway ML</strong> for B-roll, and <strong>Canva AI</strong> for thumbnails.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  '📝 Script writing: ChatGPT',
                  '✂️ Video editing: Descript',
                  '🎙️ Voiceover: ElevenLabs',
                  '🎬 B-roll generation: Runway ML',
                  '🖼️ Thumbnails: Canva AI',
                  '📄 Transcripts: Otter.ai',
                ].map((pt, i) => (
                  <div key={i} className="text-sm font-body text-ink-2">{pt}</div>
                ))}
              </div>
            </div>

            {/* Full AI YouTube workflow */}
            <section className="mb-10">
              <div className="section-label mb-6">Workflow</div>
              <h2 className="font-display font-bold text-ink text-2xl mb-5">The Complete AI YouTube Workflow</h2>
              <div className="space-y-3">
                {YOUTUBE_WORKFLOW.map((s, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-2xl border border-border p-5">
                    <div className="w-8 h-8 rounded-xl bg-fire-light border border-fire-mid flex items-center justify-center flex-shrink-0">
                      <span className="font-mono font-bold text-fire text-sm">{s.step}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-display font-bold text-ink text-base">{s.title}</span>
                        <span className="text-xs font-mono text-fire bg-fire-light border border-fire-mid rounded-full px-2 py-0.5">{s.tool}</span>
                      </div>
                      <div className="text-sm font-body text-ink-2 leading-relaxed">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tools */}
            <div className="section-label mb-6">Top Picks</div>
            <h2 className="font-display font-bold text-ink text-2xl mb-6">6 Best AI Tools for YouTube in 2026</h2>
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
              <h2 className="font-display font-bold text-ink text-2xl mb-4">Why AI Tools Are Essential for YouTube Growth</h2>
              <div className="prose-landing">
                <p>
                  The YouTube algorithm rewards consistency above everything else. Channels that publish 2-3 videos per week grow significantly faster than those publishing once a month. The problem is production time — scripting, recording, editing, and publishing a quality video traditionally takes 8-15 hours.
                </p>
                <p>
                  AI tools cut this to 2-4 hours. Descript removes filler words and silences in one click. ChatGPT writes a full script in minutes. ElevenLabs records a professional voiceover while you sleep. The result is more videos, higher quality, and faster channel growth.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                  {[
                    { icon: '⏱️', title: '5x faster production', desc: 'Cut video production from 15 hours to 3 hours per video' },
                    { icon: '📈', title: 'More consistent uploads', desc: 'Publish 3x more videos — the biggest growth factor' },
                    { icon: '💰', title: 'Lower cost', desc: 'Replace expensive freelancers with AI tools under $50/month' },
                  ].map((b, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-border p-4 text-center">
                      <div className="text-3xl mb-2">{b.icon}</div>
                      <div className="font-display font-bold text-ink text-sm mb-1">{b.title}</div>
                      <div className="text-xs text-ink-3 font-body">{b.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <FAQSection faqs={FAQS} title="FAQs About AI Tools for YouTube" />

            {/* Internal links */}
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
                <div className="font-display font-bold text-ink text-sm mb-2">🎬 Creator tip</div>
                <p className="text-xs text-ink-2 font-body leading-relaxed">
                  Start with <strong>Descript free</strong> for editing and <strong>ChatGPT free</strong> for scripting. This combo alone saves 5+ hours per video.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-border p-5">
                <div className="font-display font-semibold text-ink text-sm mb-3">Explore by Category</div>
                <div className="space-y-2">
                  {[
                    { label: 'All Video Tools',       href: '/category/video' },
                    { label: 'All Writing Tools',     href: '/category/writing' },
                    { label: 'All Audio Tools',       href: '/category/audio' },
                    { label: 'All Design Tools',      href: '/category/design' },
                  ].map(r => (
                    <Link key={r.href} href={r.href} className="block text-xs font-body text-ink-3 hover:text-fire transition-colors">→ {r.label}</Link>
                  ))}
                </div>
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
  { label: 'How to Create Videos with AI',  href: '/how-to-create-videos-with-ai' },
  { label: 'Best Free AI Tools',            href: '/best-free-ai-tools' },
  { label: 'Best AI Writing Tools',         href: '/best-ai-writing-tools' },
  { label: 'AI Tools for Beginners',        href: '/ai-tools-for-beginners' },
]
