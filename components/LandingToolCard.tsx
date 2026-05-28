import Link from 'next/link'
import { Tool } from '@/data/tools'

const badgeClass: Record<string, string> = {
  video:        'badge-video',
  writing:      'badge-writing',
  design:       'badge-design',
  coding:       'badge-coding',
  productivity: 'badge-productivity',
  audio:        'badge-audio',
  research:     'badge-research',
  marketing:    'badge-marketing',
}

interface LandingToolCardProps {
  tool: Tool
  rank: number
  highlight?: string   // e.g. "Best for writing"
}

export default function LandingToolCard({ tool, rank, highlight }: LandingToolCardProps) {
  const bc = badgeClass[tool.category] || 'badge-writing'

  return (
    <div className="tool-card rounded-2xl border border-border bg-white overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Rank */}
          <div className="w-7 h-7 rounded-lg bg-fire-light border border-fire-mid flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="font-mono font-bold text-fire text-xs">#{rank}</span>
          </div>

          {/* Emoji */}
          <div className="w-12 h-12 rounded-xl bg-canvas border border-border flex items-center justify-center text-2xl flex-shrink-0">
            {tool.emoji}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="font-display font-bold text-ink text-xl">{tool.name}</h3>
              {tool.isTrending && (
                <span className="text-xs font-mono bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-2 py-0.5">🔥 Trending</span>
              )}
              {tool.isNew && (
                <span className="text-xs font-mono bg-fire text-white rounded-full px-2 py-0.5">NEW</span>
              )}
            </div>
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${bc}`}>{tool.category}</span>
              {highlight && (
                <span className="highlight-chip">{highlight}</span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-ink-2 font-body text-sm leading-relaxed mt-4 mb-4">{tool.description}</p>

        {/* Use case highlight */}
        <div className="bg-canvas rounded-xl border border-border p-3 mb-4">
          <div className="text-xs font-mono text-ink-3 mb-1 uppercase tracking-wide">Best for</div>
          <div className="text-sm font-body text-ink-2">{tool.useCases[0]}</div>
        </div>

        {/* Pricing + rating row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(s => (
              <svg key={s} className={s <= Math.round(tool.rating) ? 'text-amber-400' : 'text-border'} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
              </svg>
            ))}
            <span className="text-xs font-mono text-ink-2 ml-1">{tool.rating}/5</span>
          </div>
          <span className="text-sm font-body text-ink-3">{tool.pricing}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tool.tags.slice(0, 4).map(tag => (
            <span key={tag} className="text-xs font-mono text-ink-3 bg-canvas border border-border rounded-md px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-2">
          <a
            href={tool.affiliateLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
            data-tool={tool.slug}
            data-affiliate="true"
            data-category={tool.category}
            className="btn-fire flex-1 rounded-xl py-3 text-sm text-center block font-display font-bold"
          >
            Try {tool.name} Free →
          </a>
          <Link
            href={`/tool/${tool.slug}`}
            className="px-4 rounded-xl border border-border text-ink-2 hover:text-ink hover:bg-canvas text-sm font-body transition-colors py-3 flex-shrink-0"
          >
            Review
          </Link>
        </div>
      </div>
    </div>
  )
}
