import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-ink flex items-center justify-center">
                <span className="font-display font-bold text-white text-xs">TF</span>
              </div>
              <span className="font-display font-bold text-ink text-base">ToolFlow</span>
            </div>
            <p className="text-sm text-ink-3 font-body leading-relaxed">
              Ask anything. Get instant AI tool recommendations. The answer engine for the AI era.
            </p>
            <p className="text-xs text-ink-3/70 font-body mt-3">
              Some links are affiliate links. We may earn a commission at no extra cost to you.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="font-display font-semibold text-ink mb-3">Questions</div>
              <div className="space-y-2 font-body">
                {FOOTER_Q.map(q => (
                  <Link key={q.href} href={q.href} className="block text-ink-3 hover:text-fire transition-colors">{q.label}</Link>
                ))}
              </div>
            </div>
            <div>
              <div className="font-display font-semibold text-ink mb-3">Categories</div>
              <div className="space-y-2 font-body">
                {FOOTER_CATS.map(c => (
                  <Link key={c.href} href={c.href} className="block text-ink-3 hover:text-fire transition-colors">{c.label}</Link>
                ))}
              </div>
            </div>
            <div>
              <div className="font-display font-semibold text-ink mb-3">Company</div>
              <div className="space-y-2 font-body">
                <Link href="/" className="block text-ink-3 hover:text-fire transition-colors">About</Link>
                <Link href="/" className="block text-ink-3 hover:text-fire transition-colors">Submit a Tool</Link>
                <Link href="/" className="block text-ink-3 hover:text-fire transition-colors">Advertise</Link>
                <Link href="/" className="block text-ink-3 hover:text-fire transition-colors">Privacy</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-ink-3 font-body">© 2026 ToolFlow (Babak Nabavi). All rights reserved.</p>
          <p className="text-xs text-ink-3 font-mono">Built for AI explorers 🚀</p>
        </div>
      </div>
    </footer>
  )
}

const FOOTER_Q = [
  { label: 'How to create videos with AI?', href: '/search?q=how+to+create+videos+with+AI' },
  { label: 'Best AI tools for writing?',    href: '/search?q=best+AI+tools+for+writing' },
  { label: 'Best AI tools for students?',   href: '/search?q=best+AI+tools+for+students' },
  { label: 'How to design logos with AI?',  href: '/search?q=how+to+design+logos+with+AI' },
  { label: 'Best free AI tools?',           href: '/search?q=best+free+AI+tools' },
]

const FOOTER_CATS = [
  { label: 'Video Tools',       href: '/search?q=video' },
  { label: 'Writing Tools',     href: '/search?q=writing' },
  { label: 'Design Tools',      href: '/search?q=design' },
  { label: 'Coding Tools',      href: '/search?q=coding' },
  { label: 'Productivity',      href: '/search?q=productivity' },
  { label: 'Audio Tools',       href: '/search?q=audio' },
]
