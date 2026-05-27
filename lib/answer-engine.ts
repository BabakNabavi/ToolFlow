import { answers, categoryAnswers, AnswerEntry } from '@/data/answers'
import { tools, Tool, ToolCategory } from '@/data/tools'

export interface EngineResult {
  canonicalQuestion: string
  shortAnswer: string
  bulletPoints?: string[]
  tools: Tool[]
  detectedCategory: string | null
  confidence: 'high' | 'medium' | 'low'
}

// Score an answer entry against a query
function scoreEntry(entry: AnswerEntry, query: string): number {
  const q = query.toLowerCase().trim()
  let score = 0

  for (const kw of entry.keywords) {
    if (q === kw) { score += 100; continue }
    if (q.includes(kw)) { score += 60; continue }
    if (kw.includes(q)) { score += 40; continue }
    // partial word overlap
    const qWords = q.split(/\s+/)
    const kWords = kw.split(/\s+/)
    const overlap = qWords.filter(w => kWords.includes(w)).length
    if (overlap > 0) score += overlap * 15
  }

  return score
}

// Detect category from raw query
const CATEGORY_SIGNALS: Record<ToolCategory, string[]> = {
  video:        ['video','film','movie','animation','animate','youtube','tiktok','reel','clip','footage','explainer','record screen'],
  writing:      ['write','writing','blog','article','essay','copy','content','email','grammar','proofread','seo','caption','script'],
  design:       ['design','image','logo','art','illustration','graphic','banner','poster','thumbnail','ui','ux','visual','picture','photo','generate image','artwork'],
  coding:       ['code','coding','programming','developer','software','app','website','debug','script','python','javascript','typescript','react'],
  productivity: ['automate','automation','workflow','productivity','meeting','notes','organise','organize','task','schedule','calendar','summary'],
  audio:        ['voice','audio','music','song','podcast','narration','voiceover','speech','sound','compose','beat','jingle'],
  research:     ['research','search','find','facts','information','study','learn','citation','academic'],
  marketing:    ['marketing','ads','advertising','social media','brand','growth','campaign','sales','lead'],
}

function detectCategory(query: string): ToolCategory | null {
  const q = query.toLowerCase()
  let best: { cat: ToolCategory; score: number } | null = null

  for (const [cat, signals] of Object.entries(CATEGORY_SIGNALS)) {
    let score = 0
    for (const s of signals) {
      if (q.includes(s)) score += s.split(' ').length > 1 ? 3 : 1
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { cat: cat as ToolCategory, score }
    }
  }

  return best?.cat ?? null
}

function getToolsBySlugs(slugs: string[]): Tool[] {
  const result: Tool[] = []
  for (const slug of slugs) {
    const t = tools.find(t => t.slug === slug)
    if (t) result.push(t)
  }
  return result
}

export function runAnswerEngine(query: string): EngineResult {
  if (!query.trim()) {
    // Return featured content
    const featured = tools.filter(t => t.isTrending).slice(0, 5)
    return {
      canonicalQuestion: 'Best AI Tools Right Now',
      shortAnswer: 'Explore the top AI tools across writing, design, video, coding, and productivity. These are the tools professionals and creators rely on every day.',
      tools: featured,
      detectedCategory: null,
      confidence: 'low',
    }
  }

  // 1. Try exact/close match against answer library
  let bestEntry: AnswerEntry | null = null
  let bestScore = 0

  for (const entry of answers) {
    const score = scoreEntry(entry, query)
    if (score > bestScore) {
      bestScore = score
      bestEntry = entry
    }
  }

  // High-confidence specific answer match
  if (bestEntry && bestScore >= 40) {
    return {
      canonicalQuestion: bestEntry.canonicalQuestion,
      shortAnswer: bestEntry.shortAnswer,
      bulletPoints: bestEntry.bulletPoints,
      tools: getToolsBySlugs(bestEntry.toolSlugs).slice(0, 5),
      detectedCategory: bestEntry.category === 'general' || bestEntry.category === 'business' || bestEntry.category === 'student' || bestEntry.category === 'beginner'
        ? detectCategory(query)
        : bestEntry.category as string,
      confidence: bestScore >= 60 ? 'high' : 'medium',
    }
  }

  // 2. Fall back to category-level answer
  const cat = detectCategory(query)
  if (cat && categoryAnswers[cat]) {
    const catAnswer = categoryAnswers[cat]
    return {
      canonicalQuestion: catAnswer.canonicalQuestion,
      shortAnswer: catAnswer.shortAnswer,
      bulletPoints: catAnswer.bulletPoints,
      tools: getToolsBySlugs(catAnswer.toolSlugs).slice(0, 5),
      detectedCategory: cat,
      confidence: 'medium',
    }
  }

  // 3. Generic fallback — score all tools against query
  const scored = tools.map(tool => {
    const q = query.toLowerCase()
    let score = 0
    for (const tag of tool.tags) { if (q.includes(tag) || tag.includes(q.split(' ')[0])) score += 5 }
    if (tool.name.toLowerCase().includes(q.split(' ')[0])) score += 20
    if (tool.isTrending) score += 2
    score += (tool.rating - 4) * 3
    return { tool, score }
  }).filter(r => r.score > 0).sort((a, b) => b.score - a.score)

  const fallbackTools = scored.length > 0
    ? scored.slice(0, 5).map(r => r.tool)
    : tools.filter(t => t.isTrending).slice(0, 5)

  return {
    canonicalQuestion: `AI Tools for "${query}"`,
    shortAnswer: `Here are the best AI tools that can help you with "${query}". These are hand-picked based on quality, reliability, and real-world usefulness.`,
    tools: fallbackTools,
    detectedCategory: null,
    confidence: 'low',
  }
}

export { detectCategory }
