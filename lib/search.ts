import { tools, Tool, ToolCategory } from '@/data/tools'

const intentMap: Record<string, ToolCategory[]> = {
  // Video
  video: ['video'], videos: ['video'], 'create video': ['video'], 'make video': ['video'],
  film: ['video'], movie: ['video'], animation: ['video'], animate: ['video'],
  reel: ['video'], 'short film': ['video'], youtube: ['video'], tiktok: ['video'],
  explainer: ['video'], 'avatar video': ['video'], 'text to video': ['video'],

  // Writing
  write: ['writing'], writing: ['writing'], blog: ['writing'], article: ['writing'],
  content: ['writing', 'marketing'], copy: ['writing', 'marketing'],
  copywriting: ['writing', 'marketing'], essay: ['writing'], email: ['writing', 'productivity'],
  emails: ['writing', 'productivity'], grammar: ['writing'], proofread: ['writing'],
  edit: ['writing'], paraphrase: ['writing'], novel: ['writing'], fiction: ['writing'],

  // Design
  design: ['design'], logo: ['design'], art: ['design', 'image-generation'],
  illustration: ['design', 'image-generation'], graphic: ['design'], banner: ['design'],
  thumbnail: ['design'], poster: ['design', 'image-generation'], visual: ['design'],
  ui: ['design'], ux: ['design'], presentation: ['design', 'business'],
  slides: ['design', 'business'], website: ['design', 'coding'], wireframe: ['design'],
  mockup: ['design'], prototype: ['design'],

  // Image Generation
  'image generation': ['image-generation'], 'generate image': ['image-generation'],
  'ai art': ['image-generation'], midjourney: ['image-generation'],
  dalle: ['image-generation'], 'stable diffusion': ['image-generation'],
  'create image': ['image-generation'], 'ai image': ['image-generation'],
  artwork: ['image-generation'], photograph: ['image-generation'],

  // Coding
  code: ['coding'], coding: ['coding'], programming: ['coding'], developer: ['coding'],
  development: ['coding'], debug: ['coding'], software: ['coding'],
  script: ['coding'], python: ['coding'], javascript: ['coding'],
  react: ['coding'], 'github copilot': ['coding'], cursor: ['coding'],

  // Productivity
  automate: ['productivity', 'automation'], automation: ['automation'],
  productivity: ['productivity'], workflow: ['productivity', 'automation'],
  notes: ['productivity'], meetings: ['productivity'], organize: ['productivity'],
  tasks: ['productivity'], schedule: ['productivity'], calendar: ['productivity'],
  transcribe: ['productivity', 'voice'], transcription: ['productivity', 'voice'],

  // Voice & Audio
  voice: ['voice'], voiceover: ['voice'], tts: ['voice'], 'text to speech': ['voice'],
  podcast: ['voice'], narration: ['voice'], speech: ['voice'],
  'voice cloning': ['voice'], elevenlabs: ['voice'],

  // Music
  music: ['music'], song: ['music'], compose: ['music'], 'create music': ['music'],
  jingle: ['music'], beat: ['music'], soundtrack: ['music'], suno: ['music'],
  udio: ['music'], royalty: ['music'],

  // Research
  research: ['research'], 'academic papers': ['research'], papers: ['research'],
  'literature review': ['research'], science: ['research'], scholar: ['research'],
  pdf: ['research'], 'chat with pdf': ['research'], summarize: ['research'],

  // Marketing
  marketing: ['marketing'], ads: ['marketing', 'seo'], 'social media': ['marketing', 'social-media'],
  brand: ['marketing', 'design'], growth: ['marketing'], campaign: ['marketing'],
  'digital marketing': ['marketing'], 'content marketing': ['marketing', 'seo'],

  // SEO
  seo: ['seo'], 'search engine': ['seo'], ranking: ['seo'], keyword: ['seo'],
  'content optimization': ['seo'], 'on-page seo': ['seo'], 'surfer seo': ['seo'],
  'rank higher': ['seo'], backlink: ['seo'],

  // Education
  education: ['education'], learn: ['education'], study: ['education'],
  tutoring: ['education'], homework: ['education'], student: ['education'],
  language: ['education'], math: ['education'], course: ['education'],
  'online learning': ['education'], flashcards: ['education'],

  // Automation
  rpa: ['automation'], 'robotic process': ['automation'], 'no-code': ['automation', 'productivity'],
  'low-code': ['automation'], 'web scraping': ['automation'], scraping: ['automation'],
  'zap': ['automation', 'productivity'],

  // Customer Support
  'customer support': ['customer-support'], chatbot: ['customer-support'],
  helpdesk: ['customer-support'], 'live chat': ['customer-support'],
  'customer service': ['customer-support'], support: ['customer-support'],
  tickets: ['customer-support'],

  // Business
  business: ['business'], enterprise: ['business'], 'pitch deck': ['business'],
  'meeting notes': ['business', 'productivity'], office: ['business'],
  microsoft: ['business'], workspace: ['business'],

  // Sales
  sales: ['sales'], 'cold email': ['sales'], outreach: ['sales'],
  prospecting: ['sales'], crm: ['sales'], 'sales call': ['sales'],
  'lead generation': ['sales'], 'sales intelligence': ['sales'],

  // Social Media
  instagram: ['social-media'], twitter: ['social-media'], linkedin: ['social-media', 'sales'],
  'social scheduling': ['social-media'], hashtag: ['social-media'],
  'social content': ['social-media'], 'social media management': ['social-media'],
}

export interface SearchResult {
  tool: Tool
  score: number
  matchReasons: string[]
}

function tokenize(text: string): string[] {
  return text.toLowerCase().trim().split(/\s+/)
}

function detectCategories(query: string): ToolCategory[] {
  const lower = query.toLowerCase()
  const found = new Set<ToolCategory>()

  // Check multi-word phrases first (longer phrases take priority)
  const sortedPhrases = Object.keys(intentMap).sort((a, b) => b.length - a.length)
  for (const phrase of sortedPhrases) {
    if (lower.includes(phrase)) {
      intentMap[phrase].forEach((c) => found.add(c))
    }
  }

  // Single word fallback
  if (found.size === 0) {
    for (const word of tokenize(lower)) {
      if (intentMap[word]) {
        intentMap[word].forEach((c) => found.add(c))
      }
    }
  }

  return Array.from(found)
}

function scoreTool(tool: Tool, query: string, targetCategories: ToolCategory[]): { score: number; reasons: string[] } {
  const lower = query.toLowerCase()
  const words = tokenize(lower)
  let score = 0
  const reasons: string[] = []

  // Exact name match (highest)
  if (tool.name.toLowerCase() === lower) {
    score += 100
    reasons.push(`Exact match for "${tool.name}"`)
  } else if (tool.name.toLowerCase().includes(lower) || lower.includes(tool.name.toLowerCase())) {
    score += 40
    reasons.push(`Matches "${tool.name}"`)
  }

  // Category match
  if (targetCategories.includes(tool.category)) {
    score += 50
    reasons.push(`Matches ${tool.category} category`)
  }

  // Slug match
  if (tool.slug.includes(lower.replace(/\s+/g, '-'))) {
    score += 30
  }

  // Tag matches
  for (const word of words) {
    if (word.length < 2) continue
    for (const tag of tool.tags) {
      if (tag === word || tag.includes(word) || word.includes(tag)) {
        score += 12
        if (!reasons.includes('Matches your keywords')) reasons.push('Matches your keywords')
        break
      }
    }
  }

  // Description/tagline keyword match
  for (const word of words) {
    if (word.length > 3) {
      if (tool.description.toLowerCase().includes(word) || tool.tagline.toLowerCase().includes(word)) {
        score += 6
      }
      if (tool.longDescription.toLowerCase().includes(word)) {
        score += 3
      }
    }
  }

  // Use case match
  for (const word of words) {
    if (word.length > 3) {
      if (tool.useCases.some(u => u.toLowerCase().includes(word))) {
        score += 8
        if (!reasons.includes('Fits your use case')) reasons.push('Fits your use case')
      }
    }
  }

  // Trending + rating boosts
  if (tool.isTrending && score > 0) {
    score += 5
    if (!reasons.some(r => r.includes('Trending'))) reasons.push('🔥 Trending')
  }
  score += (tool.rating - 4) * 8

  return { score, reasons }
}

export function searchTools(query: string): SearchResult[] {
  if (!query.trim()) {
    return tools
      .filter((t) => t.isTrending)
      .sort((a, b) => b.rating - a.rating)
      .map((t) => ({ tool: t, score: 100, matchReasons: ['🔥 Trending tool'] }))
  }

  const targetCategories = detectCategories(query)
  const results: SearchResult[] = []

  for (const tool of tools) {
    const { score, reasons } = scoreTool(tool, query, targetCategories)
    if (score > 0) {
      results.push({ tool, score, matchReasons: reasons })
    }
  }

  results.sort((a, b) => b.score - a.score)

  if (results.length === 0) {
    return tools
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 8)
      .map((t) => ({ tool: t, score: 50, matchReasons: ['Top-rated tool'] }))
  }

  return results.slice(0, 16)
}

export function getDetectedCategory(query: string): ToolCategory | null {
  const cats = detectCategories(query)
  return cats[0] ?? null
}
