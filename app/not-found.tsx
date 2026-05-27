import Link from 'next/link'
import Navbar from '@/components/Navbar'
import SearchBar from '@/components/SearchBar'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-lg">
          <div className="font-mono text-fire text-sm mb-3">404</div>
          <h1 className="font-display font-bold text-ink text-4xl mb-3">Page not found</h1>
          <p className="text-ink-3 font-body mb-8">Try asking a question to find the right AI tools.</p>
          <div className="mb-8">
            <SearchBar size="hero" />
          </div>
          <Link href="/" className="text-sm text-fire hover:underline font-body">← Back to home</Link>
        </div>
      </div>
    </div>
  )
}
