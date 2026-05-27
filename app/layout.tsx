import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'ToolFlow — Ask Anything. Find the Best AI Tools.',
    template: '%s | ToolFlow',
  },
  description: 'ToolFlow is an AI tool recommendation engine. Ask a question, get an instant answer and the best AI tool recommendations. Used by students, creators, and professionals.',
  keywords: 'AI tools, best AI tools, artificial intelligence tools, AI for writing, AI for video, AI for design, AI coding tools',
  openGraph: {
    siteName: 'ToolFlow',
    type: 'website',
    url: 'https://toolflow.io',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
