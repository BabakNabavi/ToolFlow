# ToolFlow — AI Tool Recommendation Engine

A production-ready Next.js MVP that helps users find the best AI tools for any task.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 🏗️ Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deploy to Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no config needed
4. Click **Deploy**

## 📁 Project Structure

```
toolflow/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage with hero + trending
│   ├── not-found.tsx       # 404 page
│   ├── search/
│   │   └── page.tsx        # Search results with intent engine
│   └── tool/[slug]/
│       └── page.tsx        # Individual tool detail page
├── components/
│   ├── Navbar.tsx          # Fixed top navigation
│   ├── SearchBar.tsx       # Search input with suggestions
│   ├── ToolCard.tsx        # Tool card (3 variants)
│   └── Footer.tsx          # Site footer
├── data/
│   └── tools.ts            # 35+ AI tools database
├── lib/
│   └── search.ts           # Intent detection + ranking engine
└── ...config files
```

## 💰 Affiliate Monetization

Every tool has an `affiliateLink` field in `/data/tools.ts`. To monetize:

1. Sign up for affiliate programs (e.g. Jasper, Copy.ai, ElevenLabs all have programs)
2. Replace the `affiliateLink` values with your affiliate URLs
3. Update `websiteUrl` if it differs from your affiliate link
4. The "Try Now" and "Try [Tool] Free" buttons all use `affiliateLink`

Example:
```ts
affiliateLink: 'https://www.jasper.ai/?fpr=YOUR_REF_CODE'
```

## 🔧 Adding New Tools

Add to `/data/tools.ts`:

```ts
{
  name: 'New Tool',
  slug: 'new-tool',                    // URL: /tool/new-tool
  tagline: 'Short tagline',
  description: 'One sentence description',
  longDescription: 'Full paragraph...',
  category: 'writing',                 // video|writing|design|coding|productivity|audio|research|marketing
  affiliateLink: 'https://...',
  websiteUrl: 'https://...',
  tags: ['writing', 'content', ...],  // Used for search matching
  pros: ['Pro 1', 'Pro 2', ...],
  cons: ['Con 1', ...],
  useCases: ['Use case 1', ...],
  pricing: 'Free / $X/month',
  isTrending: false,
  isNew: true,
  rating: 4.5,
  emoji: '🔧',
}
```

## 🎨 Design System

- **Colors**: Dark theme with electric yellow (`#e8f840`) accent
- **Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono
- **Tailwind**: Extended config in `tailwind.config.js`

## 📈 SEO

- Each tool has its own page at `/tool/[slug]` with full metadata
- Search page has dynamic titles based on query
- `generateStaticParams()` pre-renders all tool pages at build time
- Clean URL structure throughout
