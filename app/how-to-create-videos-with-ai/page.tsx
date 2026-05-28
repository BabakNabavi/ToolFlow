import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQSection from '@/components/FAQSection'
import LandingToolCard from '@/components/LandingToolCard'
import { getToolBySlug } from '@/data/tools'

export const metadata: Metadata = {
  title: 'How to Create Videos with AI in 2026 — ToolFlow',
  description: 'Step-by-step guide to creating professional videos with AI tools. Covers text-to-video, AI avatars, editing, and voiceovers. Best tools ranked.',
  keywords: 'how to create videos with AI, AI video generator, text to video AI, Runway ML, Synthesia, AI video tools, make video with AI',
  openGraph: {
    title: 'How to Create Videos with AI in 2026',
    description: 'The complete guide to AI video creation — from text-to-video to AI avatars and editing.',
    type: 'article',
  },
  alternates: { canonical: '/how-to-create-videos-with-ai' },
}

const TOOLS_WITH_HIGHLIGHTS = [
  { slug: 'runway-ml',  highlight: 'Best text-to-video' },
  { slug: 'synthesia',  highlight: 'Best AI avatars' },
  { slug: 'descript',   highlight: 'Best for editing' },
  { slug: 'pika-labs',  highlight: 'Best free option' },
  { slug: 'heygen',     highlight: 'Best for marketing' },
  { slug: 'elevenlabs', highlight: 'Best for voiceover' },
]

const FAQS = [
  {
    q: 'Can I create a professional video with AI for free?',
    a: 'Yes. Pika Labs offers a free tier for short video clips. Descript has a free plan for editing. ElevenLabs gives free voiceover credits. Combining these free tiers, you can produce professional-looking videos at zero cost — though premium plans unlock longer videos and higher quality.',
  },
  {
    q: 'How long does it take to create a video with AI?',
    a: 'With modern AI tools, a short 30-second video can be generated in 1-3 minutes. A full 2-minute explainer video with script, voiceover, and AI avatar (using Synthesia) typically takes 20-30 minutes — compared to days with traditional production methods.',
  },
  {
    q: 'What is the best AI tool for YouTube videos?',
    a: 'For YouTube, the best combination is: ChatGPT for scripting, ElevenLabs for voiceover, Runway ML or Pika Labs for B-roll clips, and Descript for editing the final cut. Many successful YouTube channels now use this exact workflow.',
  },
  {
    q: 'Do I need any video editing skills to use AI video tools?',
    a: 'No technical editing skills are needed. Tools like Synthesia and HeyGen are entirely text-based — you type a script and get a finished video. Descript lets you edit video by editing text, so if you can write, you can edit video.',
  },
  {
    q: 'What AI video tools do professionals use?',
    a: 'Professional filmmakers and content teams use Runway ML for high-quality generation, Descript for efficient editing, and HeyGen for scalable video production. ElevenLabs is the industry standard for AI voiceover. These tools are used by teams at major studios and agencies.',
  },
]

export default function VideoPage() {
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
              <span className="text-ink-2">How to Create Videos with AI</span>
            </nav>

            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span className="trust-badge">✓ Updated June 2026</span>
              <span className="trust-badge">✓ 6 tools reviewed</span>
              <span className="trust-badge">✓ No camera needed</span>
            </div>

            <h1 className="font-display font-extrabold text-ink text-4xl sm:text-5xl leading-tight mb-5 animate-fade-up">
              How to Create Videos with AI in 2026
            </h1>

            <p className="text-lg text-ink-2 font-body leading-relaxed mb-8 animate-fade-up delay-100">
              You no longer need a camera, editing software, or a production budget to create professional videos. AI video tools have made it possible for anyone to produce YouTube videos, marketing content, training materials, and cinematic clips from just a text description.
            </p>

            {/* Quick answer */}
            <div className="answer-block rounded-2xl p-6 mb-10 animate-fade-up delay-150">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-fire flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                </div>
                <span className="text-xs font-mono text-fire font-semibold uppercase tracking-wide">Quick Answer</span>
              </div>
              <p className="font-display font-semibold text-ink text-lg mb-2">How do you create videos with AI?</p>
              <p className="text-ink-2 font-body text-sm leading-relaxed mb-3">
                Use <strong>Runway ML</strong> or <strong>Pika Labs</strong> to generate video clips from text. Use <strong>Synthesia</strong> for presenter videos without filming. Use <strong>Descript</strong> to edit existing footage by editing the transcript. Add professional voiceover with <strong>ElevenLabs</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  '🎬 Text-to-video clips: Runway ML',
                  '👤 Presenter avatar: Synthesia',
                  '✂️ Edit by text: Descript',
                  '🎙️ Voiceover: ElevenLabs',
                ].map((pt, i) => (
                  <div key={i} className="text-sm font-body text-ink-2">{pt}</div>
                ))}
              </div>
            </div>

            {/* Step by step */}
            <section className="mb-10">
              <div className="section-label mb-6">Workflow</div>
              <h2 className="font-display font-bold text-ink text-2xl mb-5">Step-by-Step: Creating a Video with AI</h2>
              <div className="space-y-4">
                {STEPS.map((s, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-2xl border border-border p-5">
                    <div className="w-8 h-8 rounded-xl bg-fire-light border border-fire-mid flex items-center justify-center flex-shrink-0">
                      <span className="font-mono font-bold text-fire text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <div className="font-display font-bold text-ink text-base mb-1">{s.title}</div>
                      <div className="text-sm font-body text-ink-2 leading-relaxed">{s.desc}</div>
                      {s.tool && <div className="mt-2 text-xs font-mono text-fire">Recommended: {s.tool}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tools section */}
            <div className="section-label mb-6">Top Picks</div>
            <h2 className="font-display font-bold text-ink text-2xl mb-6">Best AI Video Tools in 2026</h2>
            <div className="space-y-5">
              {tools.map(({ tool, highlight }, i) => (
                <div key={tool.slug} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <LandingToolCard tool={tool} rank={i + 1} highlight={highlight} />
                </div>
              ))}
            </div>

            {/* Why section */}
            <section className="mt-14">
              <div className="section-label mb-6">Context</div>
              <h2 className="font-display font-bold text-ink text-2xl mb-4">Why AI Video Tools Are a Game Changer</h2>
              <div className="prose-landing">
                <p>
                  Traditional video production requires a camera crew, studio equipment, editing software expertise, and significant time investment. A single corporate training video might cost $5,000–$20,000 to produce professionally.
                </p>
                <p>
                  AI video tools have collapsed this cost to near zero. Synthesia lets you create a presenter video in any of 120 languages — with a realistic AI avatar — in 20 minutes. Runway ML generates cinematic B-roll from a text description. The quality now rivals what cost thousands just two years ago.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                  {[
                    { icon: '💸', title: 'No production budget', desc: 'Free and low-cost tools for professional quality' },
                    { icon: '🌍', title: '120+ languages', desc: 'Reach global audiences with AI translation and dubbing' },
                    { icon: '⚡', title: '10x faster', desc: 'From idea to finished video in minutes, not days' },
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

            <FAQSection faqs={FAQS} title="FAQs About AI Video Creation" />

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
                <div className="font-display font-semibold text-ink text-sm mb-3">Tools Covered</div>
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
                <div className="font-display font-bold text-ink text-sm mb-2">🎬 Quick start</div>
                <p className="text-xs text-ink-2 font-body leading-relaxed">
                  New to AI video? Start with <strong>Pika Labs</strong> (free) for your first clip, then upgrade to <strong>Runway ML</strong> for professional quality.
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

const STEPS = [
  { title: 'Write your script', desc: 'Use ChatGPT to draft a script for your video. Describe the topic, audience, and desired length.', tool: 'ChatGPT' },
  { title: 'Generate visuals or avatar', desc: 'Upload your script to Synthesia for an AI avatar video, or use Runway ML to generate cinematic clips from text prompts.', tool: 'Synthesia or Runway ML' },
  { title: 'Add professional voiceover', desc: 'If not using Synthesia\'s built-in voice, use ElevenLabs to generate a realistic narration from your script.', tool: 'ElevenLabs' },
  { title: 'Edit and polish', desc: 'Import everything into Descript. Edit the video by editing the text transcript — delete words to cut footage.', tool: 'Descript' },
  { title: 'Export and publish', desc: 'Export in your preferred format and upload to YouTube, LinkedIn, or wherever your audience is.' },
]

const RELATED = [
  { label: 'Best AI Tools for Students',  href: '/best-ai-tools-for-students' },
  { label: 'Best AI Writing Tools',       href: '/best-ai-writing-tools' },
  { label: 'AI Tools for Beginners',      href: '/ai-tools-for-beginners' },
  { label: 'Best AI Coding Tools',        href: '/best-ai-tools-for-coding' },
]
