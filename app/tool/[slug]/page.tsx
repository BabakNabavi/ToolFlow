import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getToolBySlug, tools } from '@/data/tools'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ToolCard from '@/components/ToolCard'

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return tools.map(t => ({ slug: t.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const tool = getToolBySlug(params.slug)
  if (!tool) return { title: 'Tool Not Found' }
  return {
    title: `${tool.name} — ${tool.tagline} | ToolFlow`,
    description: `${tool.description} Pricing: ${tool.pricing}. Discover ${tool.name} pros, cons, use cases, and best alternatives.`,
    keywords: [...tool.tags, tool.name, 'AI tool', tool.category, 'review', 'alternative', 'pricing'],
    openGraph: { title: `${tool.name} — ${tool.tagline}`, description: tool.description },
    alternates: { canonical: `/tool/${tool.slug}` },
  }
}

const badgeClass: Record<string, string> = {
  video:            'badge-video',
  writing:          'badge-writing',
  design:           'badge-design',
  'image-generation': 'badge-design',
  coding:           'badge-coding',
  productivity:     'badge-productivity',
  audio:            'badge-audio',
  voice:            'badge-audio',
  music:            'badge-audio',
  research:         'badge-research',
  marketing:        'badge-marketing',
  seo:              'badge-marketing',
  education:        'badge-research',
  automation:       'badge-productivity',
  'customer-support': 'badge-productivity',
  business:         'badge-productivity',
  sales:            'badge-marketing',
  'social-media':   'badge-marketing',
}

const categoryLabel: Record<string, string> = {
  'image-generation': 'Image Generation',
  'customer-support': 'Customer Support',
  'social-media':     'Social Media',
}

export default function ToolPage({ params }: Props) {
  const tool = getToolBySlug(params.slug)
  if (!tool) notFound()
  const t = tool!

  const related = tools
    .filter(r => r.slug !== t.slug && r.category === t.category)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4)

  const bc = badgeClass[t.category] || 'badge-writing'
  const catLabel = categoryLabel[t.category] || t.category.replace(/-/g, ' ')

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs font-mono text-ink-3 mb-8">
          <Link href="/" className="hover:text-fire transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/category/${t.category}`} className="hover:text-fire transition-colors capitalize">{catLabel}</Link>
          <span>/</span>
          <span className="text-ink-2">{t.name}</span>
        </nav>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ─── MAIN ─────────────────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Tool header */}
            <div className="bg-white rounded-3xl border border-border p-8 animate-fade-up">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-canvas border border-border flex items-center justify-center text-4xl flex-shrink-0">
                  {t.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h1 className="font-display font-extrabold text-ink text-3xl tracking-tight">{t.name}</h1>
                    {t.isNew && <span className="text-xs font-mono bg-fire text-white rounded-full px-2.5 py-0.5">NEW</span>}
                    {t.isTrending && <span className="text-xs font-mono bg-amber-100 text-amber-700 border border-amber-200 rounded-full px-2.5 py-0.5">🔥 Trending</span>}
                  </div>
                  <p className="text-lg text-ink-2 font-body mb-3 leading-snug">{t.tagline}</p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${bc}`}>{catLabel}</span>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-amber-500">★</span>
                      <span className="font-mono font-bold text-ink">{t.rating}</span>
                      <span className="text-ink-3">/5</span>
                    </div>
                    <span className="text-sm text-ink-3 font-body">{t.pricing}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What it does */}
            <section className="animate-fade-up delay-100">
              <h2 className="font-display font-bold text-ink text-xl mb-4">What is {t.name}?</h2>
              <div className="bg-white rounded-2xl border border-border p-6">
                <p className="text-ink-2 font-body leading-relaxed text-base">{t.longDescription}</p>
              </div>
            </section>

            {/* Best use cases */}
            <section className="animate-fade-up delay-150">
              <h2 className="font-display font-bold text-ink text-xl mb-4">Best Use Cases</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.useCases.map((uc, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-xl border border-border p-4">
                    <div className="w-6 h-6 rounded-full bg-fire-light border border-fire-mid flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-fire text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-sm font-body text-ink-2 leading-relaxed">{uc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Pros & Cons */}
            <section className="animate-fade-up delay-200">
              <h2 className="font-display font-bold text-ink text-xl mb-4">Pros & Cons</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-green-100 p-5">
                  <div className="font-display font-bold text-green-700 text-sm mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-xs">✓</span>
                    What we love
                  </div>
                  <ul className="space-y-2.5">
                    {t.pros.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm font-body text-ink-2">
                        <span className="text-green-500 font-bold mt-0.5">+</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl border border-red-100 p-5">
                  <div className="font-display font-bold text-red-600 text-sm mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-xs">!</span>
                    Watch out for
                  </div>
                  <ul className="space-y-2.5">
                    {t.cons.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm font-body text-ink-2">
                        <span className="text-red-400 font-bold mt-0.5">−</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Tags */}
            <section className="animate-fade-up delay-250">
              <h2 className="font-display font-bold text-ink text-lg mb-3">Related Topics</h2>
              <div className="flex flex-wrap gap-2">
                {t.tags.map(tag => (
                  <Link
                    key={tag}
                    href={`/search?q=${encodeURIComponent(tag)}`}
                    className="text-xs font-mono text-ink-3 bg-white border border-border rounded-lg px-3 py-1.5 hover:text-fire hover:border-fire/30 transition-all"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </section>

          </div>

          {/* ─── SIDEBAR ─────────────────────────────────────────────── */}
          <aside className="space-y-5">
            <div className="lg:sticky lg:top-20 space-y-4">

              {/* Main CTA card */}
              <div className="bg-white rounded-2xl border border-border p-6 text-center animate-fade-up delay-100">
                <div className="text-5xl mb-3">{t.emoji}</div>
                <div className="font-display font-bold text-ink text-xl mb-1">{t.name}</div>
                <div className="text-sm text-ink-3 font-body mb-4">{t.pricing}</div>

                {/* Rating */}
                <div className="flex justify-between text-sm font-body mb-2">
                  <span className="text-ink-3">Rating</span>
                  <span className="font-mono font-semibold text-ink">{t.rating}/5</span>
                </div>
                <div className="w-full h-2 bg-canvas rounded-full mb-5 overflow-hidden">
                  <div className="h-full bg-fire rounded-full" style={{ width: `${(tool.rating/5)*100}%` }} />
                </div>

                {/* Affiliate CTA */}
                <a
                  href={t.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  data-tool={t.slug}
                  data-affiliate="true"
                  data-category={t.category}
                  className="btn-fire block w-full rounded-xl py-3.5 text-base mb-3"
                >
                  Try {t.name} Free →
                </a>
                <a
                  href={t.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-border text-ink-2 hover:text-ink hover:bg-canvas text-sm font-body rounded-xl py-2.5 transition-colors"
                >
                  Visit Website ↗
                </a>
                <p className="text-xs text-ink-3/60 mt-3 font-body">Affiliate link · We may earn a commission</p>
              </div>

              {/* Quick facts */}
              <div className="bg-white rounded-2xl border border-border p-5">
                <div className="font-display font-semibold text-ink text-sm mb-4">Quick Facts</div>
                <div className="space-y-3">
                  {[
                    { label: 'Category', value: catLabel, className: 'capitalize' },
                    { label: 'Pricing',  value: tool.pricing.split('/')[0].trim(), className: '' },
                    { label: 'Rating',   value: `${t.rating} / 5`, className: 'font-mono' },
                    ...(tool.isTrending ? [{ label: 'Status', value: '🔥 Trending', className: '' }] : []),
                  ].map(r => (
                    <div key={r.label} className="flex justify-between text-sm font-body">
                      <span className="text-ink-3">{r.label}</span>
                      <span className={`text-ink font-medium ${r.className}`}>{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related tools */}
              {related.length > 0 && (
                <div>
                  <div className="font-display font-semibold text-ink text-sm mb-3">Similar Tools</div>
                  <div className="space-y-2">
                    {related.map(t => <ToolCard key={t.slug} tool={t} compact />)}
                  </div>
                  <Link href={`/category/${t.category}`} className="block text-center text-sm text-fire hover:underline mt-3 font-body">
                    See all {catLabel} tools →
                  </Link>
                </div>
              )}

            </div>
          </aside>

        </div>
      </main>

      <Footer />
    </div>
  )
}
