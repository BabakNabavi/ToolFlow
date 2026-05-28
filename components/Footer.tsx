import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-ink flex items-center justify-center">
                <span className="font-display font-bold text-white text-xs">TF</span>
              </div>
              <span className="font-display font-bold text-ink text-base">ToolFlow</span>
            </div>
            <p className="text-sm text-ink-3 font-body leading-relaxed mb-4">
              The AI tool recommendation engine. Ask any question, get instant answers and the best AI tools — ranked and ready.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="trust-badge">✓ Updated 2026</span>
              <span className="trust-badge">✓ 35+ Tools</span>
            </div>
          </div>

          {/* Popular pages */}
          <div>
            <div className="font-display font-semibold text-ink text-sm mb-4">Popular Guides</div>
            <div className="space-y-2.5 font-body">
              {FOOTER_GUIDES.map(g => (
                <Link key={g.href} href={g.href} className="block text-sm text-ink-3 hover:text-fire transition-colors leading-snug">
                  {g.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <div className="font-display font-semibold text-ink text-sm mb-4">Categories</div>
            <div className="space-y-2.5 font-body">
              {FOOTER_CATS.map(c => (
                <Link key={c.href} href={c.href} className="block text-sm text-ink-3 hover:text-fire transition-colors">
                  {c.icon} {c.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="font-display font-semibold text-ink text-sm mb-4">Company</div>
            <div className="space-y-2.5 font-body">
              <Link href="/about" className="block text-sm text-ink-3 hover:text-fire transition-colors">About ToolFlow</Link>
              <Link href="/about" className="block text-sm text-ink-3 hover:text-fire transition-colors">How It Works</Link>
              <Link href="/about" className="block text-sm text-ink-3 hover:text-fire transition-colors">Submit a Tool</Link>
              <Link href="/about" className="block text-sm text-ink-3 hover:text-fire transition-colors">Affiliate Disclosure</Link>
              <Link href="/about" className="block text-sm text-ink-3 hover:text-fire transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p className="text-xs text-ink-3 font-body">© 2026 ToolFlow by Babak Nabavi. All rights reserved.</p>
            <p className="text-xs text-ink-3 font-body max-w-sm text-right">
              <strong>Affiliate Disclosure:</strong> Some links on this site are affiliate links. We may earn a small commission at no extra cost to you.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const FOOTER_GUIDES = [
  { label: 'Best AI Tools for Students',   href: '/best-ai-tools-for-students' },
  { label: 'Best AI Writing Tools',        href: '/best-ai-writing-tools' },
  { label: 'AI Tools for Beginners',       href: '/ai-tools-for-beginners' },
  { label: 'Create Videos with AI',        href: '/how-to-create-videos-with-ai' },
  { label: 'Best AI Tools for Coding',     href: '/best-ai-tools-for-coding' },
]

const FOOTER_CATS = [
  { icon: '✍️', label: 'Writing Tools',      href: '/category/writing' },
  { icon: '🎨', label: 'Design Tools',       href: '/category/design' },
  { icon: '🎬', label: 'Video Tools',        href: '/category/video' },
  { icon: '💻', label: 'Coding Tools',       href: '/category/coding' },
  { icon: '⚡', label: 'Productivity Tools', href: '/category/productivity' },
  { icon: '🎵', label: 'Audio Tools',        href: '/category/audio' },
]
