import { MetadataRoute } from 'next'
import { tools } from '@/data/tools'

const BASE_URL = 'https://toolflow.io'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                                   lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${BASE_URL}/about`,                        lastModified: now, changeFrequency: 'monthly',  priority: 0.6 },
    { url: `${BASE_URL}/best-ai-tools-for-students`,   lastModified: now, changeFrequency: 'weekly',   priority: 0.9 },
    { url: `${BASE_URL}/best-ai-writing-tools`,        lastModified: now, changeFrequency: 'weekly',   priority: 0.9 },
    { url: `${BASE_URL}/how-to-create-videos-with-ai`, lastModified: now, changeFrequency: 'weekly',   priority: 0.9 },
    { url: `${BASE_URL}/ai-tools-for-beginners`,       lastModified: now, changeFrequency: 'weekly',   priority: 0.9 },
    { url: `${BASE_URL}/best-ai-tools-for-coding`,     lastModified: now, changeFrequency: 'weekly',   priority: 0.9 },
  ]

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = [
    'video', 'writing', 'design', 'coding', 'productivity', 'audio',
  ].map(cat => ({
    url: `${BASE_URL}/category/${cat}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Tool pages
  const toolPages: MetadataRoute.Sitemap = tools.map(tool => ({
    url: `${BASE_URL}/tool/${tool.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Search pages (high-value queries)
  const searchPages: MetadataRoute.Sitemap = [
    'writing', 'design', 'video', 'coding', 'productivity', 'audio', 'research',
    'how+to+create+videos+with+AI',
    'best+AI+tools+for+writing',
    'best+AI+tools+for+students',
    'best+free+AI+tools',
    'best+AI+tools+for+beginners',
  ].map(q => ({
    url: `${BASE_URL}/search?q=${q}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...categoryPages, ...toolPages, ...searchPages]
}
