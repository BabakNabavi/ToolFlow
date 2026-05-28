import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQSection from '@/components/FAQSection'
import LandingToolCard from '@/components/LandingToolCard'
import { tools, ToolCategory } from '@/data/tools'

interface Props { params: { slug: string } }

const CATEGORY_DATA: Record<string, {
  title: string
  h1: string
  intro: string
  why: string
  faqs: { q: string; a: string }[]
  relatedPages: { label: string; href: string }[]
  emoji: string
  color: string
}> = {
  video: {
    title: 'Best AI Video Tools in 2026 — ToolFlow',
    h1: 'Best AI Video Tools in 2026',
    emoji: '🎬',
    color: 'badge-video',
    intro: 'AI video tools let you create, edit, and enhance professional-quality videos without a camera, editing software expertise, or a production budget. From text-to-video generation to AI avatars and smart editing — these are the tools leading creators rely on.',
    why: 'Video content drives more engagement than any other format. AI tools have made professional video production accessible to everyone — from solo creators to enterprise teams. Generate B-roll clips in seconds, create explainer videos with AI avatars, and edit footage by editing text.',
    faqs: [
      { q: 'Can I create videos with AI for free?', a: 'Yes. Pika Labs and Descript both offer useful free tiers. Runway ML and Synthesia have free trial periods. You can produce a complete short video at zero cost using these free options.' },
      { q: 'What is the best AI tool for YouTube videos?', a: 'For YouTube: ChatGPT for scripting, ElevenLabs for voiceover, Runway ML for B-roll, and Descript for editing. This stack handles a full YouTube workflow.' },
      { q: 'How long does AI video generation take?', a: 'Short clips (under 10 seconds) generate in 30-60 seconds with tools like Runway ML and Pika. Full avatar videos in Synthesia take 2-5 minutes to render.' },
    ],
    relatedPages: [
      { label: 'How to Create Videos with AI',   href: '/how-to-create-videos-with-ai' },
      { label: 'Best AI Tools for Beginners',    href: '/ai-tools-for-beginners' },
    ],
  },
  writing: {
    title: 'Best AI Writing Tools in 2026 — ToolFlow',
    h1: 'Best AI Writing Tools in 2026',
    emoji: '✍️',
    color: 'badge-writing',
    intro: 'AI writing tools help you produce better content faster — from first draft to polished final copy. Whether you are writing blog posts, marketing copy, emails, or essays, these tools dramatically reduce the time and effort required.',
    why: 'Writing is one of the highest-leverage skills in any career. AI writing tools act as a tireless collaborator — available 24/7, never blocked by writer\'s block, always ready to generate a first draft. The best writers in 2026 use AI as a force multiplier, not a replacement.',
    faqs: [
      { q: 'What is the best AI writing tool for blogs?', a: 'Jasper and Writesonic are purpose-built for blog content with SEO features. ChatGPT is the most flexible option. Grammarly ensures the final output is polished.' },
      { q: 'Are AI writing tools good for SEO?', a: 'Yes. Tools like Writesonic and Jasper have built-in SEO modes. Google rewards helpful, accurate content regardless of how it was produced.' },
      { q: 'Can AI writing tools replace copywriters?', a: 'Not entirely. AI excels at first drafts, templates, and variations. Human copywriters add strategic thinking, brand nuance, and creative direction that AI cannot replicate.' },
    ],
    relatedPages: [
      { label: 'Best AI Writing Tools Guide',    href: '/best-ai-writing-tools' },
      { label: 'Best AI Tools for Students',     href: '/best-ai-tools-for-students' },
    ],
  },
  design: {
    title: 'Best AI Design Tools in 2026 — ToolFlow',
    h1: 'Best AI Design Tools in 2026',
    emoji: '🎨',
    color: 'badge-design',
    intro: 'AI design tools have democratised visual creation. Anyone can now produce professional logos, illustrations, marketing graphics, and UI designs without formal design training. The gap between a designer and a non-designer has never been smaller.',
    why: 'Great design is no longer a luxury for teams with budgets. AI image generators, logo makers, and design assistants give everyone access to professional-quality visuals in minutes. Whether you need social media graphics, a brand identity, or product mockups — AI design tools deliver.',
    faqs: [
      { q: 'What is the best AI tool for logo design?', a: 'Canva AI is the easiest for non-designers. Midjourney produces the highest-quality creative concepts. Adobe Firefly is best for commercial use due to its licensing model.' },
      { q: 'Is Midjourney better than DALL·E 3?', a: 'Midjourney produces more artistic, stylised outputs. DALL·E 3 follows prompts more precisely and handles text in images better. Both excel in different areas.' },
      { q: 'Can I use AI-generated images commercially?', a: 'It depends on the tool. Adobe Firefly is explicitly trained for commercial use. Midjourney Pro and ChatGPT Plus (DALL·E) allow commercial use. Always check the specific terms of service.' },
    ],
    relatedPages: [
      { label: 'How to Design Logos with AI',    href: '/search?q=how+to+design+logos+with+AI' },
      { label: 'AI Tools for Beginners',         href: '/ai-tools-for-beginners' },
    ],
  },
  coding: {
    title: 'Best AI Coding Tools in 2026 — ToolFlow',
    h1: 'Best AI Coding Tools in 2026',
    emoji: '💻',
    color: 'badge-coding',
    intro: 'AI coding assistants have become indispensable for developers of all skill levels. The right tool can make you 2x faster, help you learn new languages, write better tests, and spend less time debugging.',
    why: 'Software development has been transformed by AI. Whether you\'re autocompleting boilerplate, explaining complex code, or building entire features from a description — AI coding tools provide leverage at every stage of the development process. Developers who use them consistently outperform those who don\'t.',
    faqs: [
      { q: 'Cursor vs GitHub Copilot — which is better?', a: 'Cursor is better for developers who want deep AI integration and multi-file context. GitHub Copilot is better for developers who want to stay in their existing editor. Both are excellent and many developers use both.' },
      { q: 'Do AI coding tools work with all programming languages?', a: 'Most AI coding tools support Python, JavaScript, TypeScript, Java, C++, Go, Rust, and most other major languages. GitHub Copilot and Cursor claim support for 30+ languages.' },
      { q: 'Is it safe to use AI coding tools for work?', a: 'For most companies, yes. GitHub Copilot for Business and Tabnine Enterprise offer data privacy guarantees. Always check your company\'s code security policy.' },
    ],
    relatedPages: [
      { label: 'Best AI Coding Tools Guide',     href: '/best-ai-tools-for-coding' },
      { label: 'AI Tools for Beginners',         href: '/ai-tools-for-beginners' },
    ],
  },
  productivity: {
    title: 'Best AI Productivity Tools in 2026 — ToolFlow',
    h1: 'Best AI Productivity Tools in 2026',
    emoji: '⚡',
    color: 'badge-productivity',
    intro: 'AI productivity tools automate repetitive tasks, summarise information, manage workflows, and free up hours every week for high-value work. These are the tools that make professionals dramatically more efficient.',
    why: 'Knowledge workers spend up to 60% of their time on repetitive, low-value tasks — scheduling, email, note-taking, data entry. AI productivity tools eliminate most of this. Tools like Zapier automate workflows across 6,000+ apps. Otter.ai transcribes every meeting. Notion AI summarises any document instantly.',
    faqs: [
      { q: 'What is the best AI tool for automation?', a: 'Zapier is the most accessible tool for automating workflows across apps — no coding required. Make (Integromat) handles more complex multi-step automations with better data transformation capabilities.' },
      { q: 'Can AI tools replace a personal assistant?', a: 'AI tools handle many PA tasks: email drafting, meeting transcription, scheduling assistance, research summaries. For most routine tasks, yes — AI can handle them. For relationship management and judgement calls, a human PA still adds value.' },
      { q: 'What AI tool is best for meetings?', a: 'Otter.ai is the best dedicated meeting transcription tool with real-time transcription and action item detection. Notion AI is excellent for summarising notes after the fact. Loom AI handles async communication perfectly.' },
    ],
    relatedPages: [
      { label: 'How to Automate Work with AI',   href: '/search?q=how+to+automate+work+with+AI' },
      { label: 'AI Tools for Beginners',         href: '/ai-tools-for-beginners' },
    ],
  },
  audio: {
    title: 'Best AI Audio Tools in 2026 — ToolFlow',
    h1: 'Best AI Audio Tools in 2026',
    emoji: '🎵',
    color: 'badge-audio',
    intro: 'AI audio tools cover text-to-speech, voice cloning, full song generation, and professional voiceovers — all without a studio. From podcast production to music creation, AI has transformed how audio content is made.',
    why: 'Professional audio production once required a recording studio, voice talent, and music producers. AI audio tools have removed every one of those barriers. ElevenLabs produces voices indistinguishable from human narration. Suno AI generates complete songs with vocals in seconds.',
    faqs: [
      { q: 'What is the most realistic AI voice generator?', a: 'ElevenLabs produces the most realistic AI voices in 2026. Its voice cloning feature can replicate a voice with just a few minutes of audio. Murf AI is a close second, particularly for professional voiceover workflows.' },
      { q: 'Can AI create original music?', a: 'Yes. Suno AI generates complete original songs — with vocals, instruments, and lyrics — from a text description. The quality is impressive and suitable for background music, ads, and creative projects.' },
      { q: 'Is AI voice generation legal?', a: 'Generating voices with AI using your own voice data or licensed voices is legal. Cloning someone else\'s voice without consent may violate laws in many jurisdictions. Always use ethical practices and respect consent.' },
    ],
    relatedPages: [
      { label: 'How to Create Music with AI',    href: '/search?q=create+music+AI' },
      { label: 'How to Create Videos with AI',   href: '/how-to-create-videos-with-ai' },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(CATEGORY_DATA).map(slug => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const data = CATEGORY_DATA[params.slug]
  if (!data) return { title: 'Category Not Found' }
  return {
    title: data.title,
    description: data.intro,
    openGraph: { title: data.h1, description: data.intro, type: 'article' },
    alternates: { canonical: `/category/${params.slug}` },
  }
}

export default function CategoryPage({ params }: Props) {
  const data = CATEGORY_DATA[params.slug]
  if (!data) notFound()

  const categoryTools = tools
    .filter(t => t.category === params.slug as ToolCategory)
    .sort((a, b) => b.rating - a.rating)

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          <article className="flex-1 min-w-0">
            <nav className="flex items-center gap-1.5 text-xs font-mono text-ink-3 mb-8">
              <Link href="/" className="hover:text-fire transition-colors">Home</Link>
              <span>/</span>
              <Link href="/search?q=" className="hover:text-fire transition-colors">Categories</Link>
              <span>/</span>
              <span className="text-ink-2 capitalize">{params.slug}</span>
            </nav>

            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span className="trust-badge">✓ Updated June 2026</span>
              <span className="trust-badge">✓ {categoryTools.length} tools reviewed</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">{data.emoji}</span>
              <h1 className="font-display font-extrabold text-ink text-4xl sm:text-5xl leading-tight animate-fade-up">
                {data.h1}
              </h1>
            </div>

            <p className="text-lg text-ink-2 font-body leading-relaxed mb-10 animate-fade-up delay-100">
              {data.intro}
            </p>

            <div className="section-label mb-6">All Tools</div>
            <h2 className="font-display font-bold text-ink text-2xl mb-6">
              {categoryTools.length} Best {params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} AI Tools
            </h2>
            <div className="space-y-5">
              {categoryTools.map((tool, i) => (
                <div key={tool.slug} className="animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <LandingToolCard tool={tool} rank={i + 1} />
                </div>
              ))}
            </div>

            <section className="mt-14">
              <div className="section-label mb-6">Why Use These Tools</div>
              <h2 className="font-display font-bold text-ink text-2xl mb-4">
                Why Use AI {params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} Tools?
              </h2>
              <div className="prose-landing">
                <p>{data.why}</p>
              </div>
            </section>

            <FAQSection faqs={data.faqs} title={`FAQs About AI ${params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} Tools`} />

            <div className="mt-12 p-6 bg-white rounded-2xl border border-border">
              <div className="font-display font-semibold text-ink text-base mb-4">Related Guides</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {data.relatedPages.map(r => (
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
                <div className="font-display font-semibold text-ink text-sm mb-3">All Categories</div>
                <div className="space-y-1">
                  {Object.entries(CATEGORY_DATA).map(([slug, cat]) => (
                    <Link key={slug} href={`/category/${slug}`}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-body transition-colors ${
                        slug === params.slug ? 'bg-fire-light text-fire font-medium' : 'text-ink-2 hover:bg-canvas hover:text-ink'
                      }`}>
                      <span>{cat.emoji}</span>
                      <span className="capitalize">{slug}</span>
                      <span className="ml-auto text-xs font-mono text-ink-3">
                        {tools.filter(t => t.category === slug).length}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-fire-light rounded-2xl border border-fire-mid p-5">
                <div className="font-display font-bold text-ink text-sm mb-2">{data.emoji} Top pick</div>
                {categoryTools[0] && (
                  <div>
                    <div className="font-display font-semibold text-ink text-base mb-1">{categoryTools[0].name}</div>
                    <div className="text-xs text-ink-2 font-body mb-3">{categoryTools[0].tagline}</div>
                    <a href={categoryTools[0].affiliateLink} target="_blank" rel="noopener noreferrer nofollow"
                      data-tool={categoryTools[0].slug} data-affiliate="true"
                      className="btn-fire block rounded-xl py-2.5 text-xs text-center">
                      Try {categoryTools[0].name} →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}
