import { tools, Tool, ToolCategory } from '@/data/tools'

// Maps natural language intent to categories
const intentMap: Record<string, ToolCategory[]> = {
  // Video
  video: ['video'],
  videos: ['video'],
  'create video': ['video'],
  'make video': ['video'],
  'film': ['video'],
  'movie': ['video'],
  'animation': ['video'],
  'animate': ['video'],
  'reel': ['video'],
  'short film': ['video'],
  'youtube': ['video'],
  'tiktok': ['video'],
  'explainer': ['video'],
  'avatar video': ['video'],

  // Writing
  write: ['writing'],
  writing: ['writing'],
  blog: ['writing'],
  article: ['writing'],
  content: ['writing', 'marketing'],
  copy: ['writing', 'marketing'],
  copywriting: ['writing', 'marketing'],
  essay: ['writing'],
  email: ['writing', 'productivity'],
  emails: ['writing', 'productivity'],
  seo: ['writing'],
  grammar: ['writing'],
  proofread: ['writing'],
  edit: ['writing'],

  // Design
  design: ['design'],
  image: ['design'],
  images: ['design'],
  picture: ['design'],
  logo: ['design'],
  art: ['design'],
  illustration: ['design'],
  graphic: ['design'],
  banner: ['design'],
  thumbnail: ['design'],
  poster: ['design'],
  visual: ['design'],
  ui: ['design'],
  ux: ['design'],
  presentation: ['design'],
  slides: ['design'],

  // Coding
  code: ['coding'],
  coding: ['coding'],
  programming: ['coding'],
  developer: ['coding'],
  development: ['coding'],
  debug: ['coding'],
  software: ['coding'],
  app: ['coding'],
  website: ['coding'],
  script: ['coding'],
  python: ['coding'],
  javascript: ['coding'],
  react: ['coding'],

  // Productivity
  automate: ['productivity'],
  automation: ['productivity'],
  productivity: ['productivity'],
  workflow: ['productivity'],
  notes: ['productivity'],
  meetings: ['productivity'],
  organize: ['productivity'],
  tasks: ['productivity'],
  schedule: ['productivity'],

  // Audio
  audio: ['audio'],
  music: ['audio'],
  song: ['audio'],
  voice: ['audio'],
  voiceover: ['audio'],
  podcast: ['audio'],
  narration: ['audio'],
  speech: ['audio'],
  sound: ['audio'],
  compose: ['audio'],
  beat: ['audio'],

  // Research
  research: ['research'],
  search: ['research'],
  find: ['research'],
  learn: ['research'],
  information: ['research'],
  facts: ['research'],

  // Marketing
  marketing: ['marketing', 'writing'],
  ads: ['marketing', 'writing'],
  social: ['marketing', 'writing'],
  'social media': ['marketing', 'writing'],
  brand: ['marketing'],
  growth: ['marketing'],
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

  // Check multi-word phrases first
  for (const [phrase, cats] of Object.entries(intentMap)) {
    if (lower.includes(phrase)) {
      cats.forEach((c) => found.add(c))
    }
  }

  // If no match, try individual words
  if (found.size === 0) {
    const words = tokenize(lower)
    for (const word of words) {
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

  // Category match (highest weight)
  if (targetCategories.includes(tool.category)) {
    score += 60
    reasons.push(`Matches your ${tool.category} goal`)
  }

  // Tag matches
  for (const word of words) {
    for (const tag of tool.tags) {
      if (tag.includes(word) || word.includes(tag)) {
        score += 10
        if (!reasons.includes('Matches your keywords')) {
          reasons.push('Matches your keywords')
        }
        break
      }
    }
  }

  // Direct query match in name/description
  if (tool.name.toLowerCase().includes(lower) || lower.includes(tool.name.toLowerCase())) {
    score += 30
    reasons.push(`Direct match for "${tool.name}"`)
  }

  // Partial word match in description/tagline
  for (const word of words) {
    if (word.length > 3) {
      if (
        tool.description.toLowerCase().includes(word) ||
        tool.tagline.toLowerCase().includes(word) ||
        tool.tags.some((t) => t.includes(word))
      ) {
        score += 5
      }
    }
  }

  // Boost trending tools slightly
  if (tool.isTrending) {
    score += 5
    if (score > 0) reasons.push('Trending tool')
  }

  // Rating boost
  score += (tool.rating - 4) * 10

  return { score, reasons }
}

export function searchTools(query: string): SearchResult[] {
  if (!query.trim()) {
    return tools
      .filter((t) => t.isTrending)
      .map((t) => ({ tool: t, score: 100, matchReasons: ['Trending tool'] }))
  }

  const targetCategories = detectCategories(query)
  const results: SearchResult[] = []

  for (const tool of tools) {
    const { score, reasons } = scoreTool(tool, query, targetCategories)
    if (score > 0) {
      results.push({ tool, score, matchReasons: reasons })
    }
  }

  // Sort by score descending
  results.sort((a, b) => b.score - a.score)

  // If nothing matched, return trending + general recommendations
  if (results.length === 0) {
    return tools
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 8)
      .map((t) => ({
        tool: t,
        score: 50,
        matchReasons: ['Top-rated tool'],
      }))
  }

  return results.slice(0, 12)
}

export function getDetectedCategory(query: string): ToolCategory | null {
  const cats = detectCategories(query)
  return cats[0] ?? null
}
