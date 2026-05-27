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

interface ToolCardProps {
  tool: Tool
  rank?: number
  compact?: boolean
}

// ─── Full card used on search results ──────────────────────────────────
export default function ToolCard({ tool, rank, compact = false }: ToolCardProps) {
  const bc = badgeClass[tool.category] || 'badge-writing'

  if (compact) {
    return (
      <Link href={`/tool/${tool.slug}`} className="block group">
        <div className="tool-card flex items-center gap-3 p-3 rounded-xl border border-border bg-white hover:bg-canvas">
          <div className="w-9 h-9 rounded-lg bg-canvas flex items-center justify-center text-lg flex-shrink-0">
            {tool.emoji}
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-display font-semibold text-ink text-sm truncate">{tool.name}</div>
            <div className="text-xs text-ink-3 truncate font-body">{tool.tagline}</div>
          </div>
          <span className={`text-xs font-mono px-2 py-0.5 rounded-full border flex-shrink-0 ${bc}`}>{tool.category}</span>
        </div>
      </Link>
    )
  }

  return (
    <div className="tool-card rounded-2xl border border-border bg-white overflow-hidden">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          {rank && (
            <span className="font-mono text-sm text-ink-3 pt-1 w-5 flex-shrink-0">#{rank}</span>
          )}
          <div className="w-11 h-11 rounded-xl bg-canvas flex items-center justify-center text-2xl flex-shrink-0 border border-border">
            {tool.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-display font-bold text-ink text-lg leading-tight">{tool.name}</h3>
              {tool.isNew && (
                <span className="text-xs font-mono bg-fire text-white rounded-full px-2 py-0.5">NEW</span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-0.5 flex-wrap">
              <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${bc}`}>{tool.category}</span>
              <span className="text-xs text-ink-3 font-body">{tool.pricing.split('/')[0].trim()}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-ink-2 leading-relaxed mb-4 font-body">{tool.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tool.tags.slice(0, 4).map(tag => (
            <span key={tag} className="text-xs font-mono text-ink-3 bg-canvas border border-border rounded-md px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(s => (
              <svg key={s} className={s <= Math.round(tool.rating) ? 'text-amber-400' : 'text-border'} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
              </svg>
            ))}
          </div>
          <span className="text-xs font-mono text-ink-2">{tool.rating}/5</span>
        </div>

        {/* CTA */}
        <div className="flex gap-2">
          <a
            href={tool.affiliateLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
            data-tool={tool.slug}
            data-affiliate="true"
            className="btn-fire flex-1 rounded-xl py-2.5 text-sm text-center block"
          >
            Try {tool.name} →
          </a>
          <Link
            href={`/tool/${tool.slug}`}
            className="px-4 rounded-xl border border-border text-ink-2 hover:text-ink hover:bg-canvas text-sm font-body transition-colors py-2.5"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}
