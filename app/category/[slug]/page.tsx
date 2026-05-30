import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQSection from '@/components/FAQSection'
import LandingToolCard from '@/components/LandingToolCard'
import { tools, categories, ToolCategory } from '@/data/tools'

interface Props { params: { slug: string } }

type CatMeta = {
  title: string; h1: string; intro: string; why: string
  faqs: { q: string; a: string }[]
  relatedPages: { label: string; href: string }[]
}

const CATEGORY_META: Record<string, CatMeta> = {
  writing: {
    title: 'Best AI Writing Tools in 2026 — ToolFlow',
    h1: 'Best AI Writing Tools in 2026',
    intro: 'AI writing tools help you produce better content faster — from first draft to polished final copy. Whether you are writing blog posts, marketing copy, emails, or novels, these tools dramatically reduce the time and effort required.',
    why: 'Writing is one of the highest-leverage skills in any career. AI writing tools act as a tireless collaborator — always ready to generate a first draft, suggest improvements, or fix grammar. The best writers in 2026 use AI as a force multiplier.',
    faqs: [
      { q: 'What is the best AI writing tool for blogs?', a: 'Jasper and Writesonic are purpose-built for blog content with SEO features. ChatGPT is the most flexible option. Grammarly ensures the final output is polished.' },
      { q: 'Are AI writing tools good for SEO?', a: 'Yes. Tools like Writesonic and Jasper have built-in SEO modes. Google rewards helpful, accurate content regardless of how it was produced.' },
      { q: 'Can AI writing tools replace copywriters?', a: 'Not entirely. AI excels at first drafts, templates, and variations. Human copywriters add strategic thinking, brand nuance, and creative direction that AI cannot replicate.' },
    ],
    relatedPages: [
      { label: 'Best AI Writing Tools Guide', href: '/best-ai-writing-tools' },
      { label: 'Best AI Tools for Students', href: '/best-ai-tools-for-students' },
    ],
  },
  coding: {
    title: 'Best AI Coding Tools in 2026 — ToolFlow',
    h1: 'Best AI Coding Tools in 2026',
    intro: 'AI coding assistants have become indispensable for developers of all skill levels. The right tool can make you 2x faster, help you learn new languages, write better tests, and spend less time debugging.',
    why: 'Software development has been transformed by AI. Whether you are autocompleting boilerplate, explaining complex code, or building entire features from a description — AI coding tools provide leverage at every stage of the development process.',
    faqs: [
      { q: 'Cursor vs GitHub Copilot — which is better?', a: 'Cursor is better for developers who want deep AI integration and multi-file context. GitHub Copilot is better for developers who want to stay in their existing editor. Both are excellent.' },
      { q: 'Do AI coding tools work with all programming languages?', a: 'Most AI coding tools support Python, JavaScript, TypeScript, Java, C++, Go, Rust, and most other major languages. GitHub Copilot and Cursor support 30+ languages.' },
      { q: 'Is it safe to use AI coding tools for work?', a: 'For most companies, yes. GitHub Copilot for Business and Tabnine Enterprise offer data privacy guarantees. Always check your company code security policy.' },
    ],
    relatedPages: [
      { label: 'Best AI Coding Tools Guide', href: '/best-ai-tools-for-coding' },
      { label: 'AI Tools for Beginners', href: '/ai-tools-for-beginners' },
    ],
  },
  design: {
    title: 'Best AI Design Tools in 2026 — ToolFlow',
    h1: 'Best AI Design Tools in 2026',
    intro: 'AI design tools have democratised visual creation. Anyone can now produce professional logos, illustrations, marketing graphics, and UI designs without formal design training. The gap between a designer and a non-designer has never been smaller.',
    why: 'Great design is no longer a luxury for teams with budgets. AI image generators, logo makers, and design assistants give everyone access to professional-quality visuals in minutes.',
    faqs: [
      { q: 'What is the best AI tool for logo design?', a: 'Canva AI is the easiest for non-designers. Midjourney produces the highest-quality creative concepts. Adobe Firefly is best for commercial use due to its licensing model.' },
      { q: 'Is Midjourney better than DALL-E 3?', a: 'Midjourney produces more artistic, stylised outputs. DALL-E 3 follows prompts more precisely and handles text in images better. Both excel in different areas.' },
      { q: 'Can I use AI-generated images commercially?', a: 'It depends on the tool. Adobe Firefly is explicitly trained for commercial use. Midjourney Pro and ChatGPT Plus (DALL-E) allow commercial use. Always check the specific terms of service.' },
    ],
    relatedPages: [
      { label: 'AI Tools for Beginners', href: '/ai-tools-for-beginners' },
      { label: 'Best AI Writing Tools', href: '/best-ai-writing-tools' },
    ],
  },
  'image-generation': {
    title: 'Best AI Image Generation Tools in 2026 — ToolFlow',
    h1: 'Best AI Image Generators in 2026',
    intro: 'AI image generators create stunning visuals, artwork, and photos from simple text descriptions. Whether you need photorealistic images, artistic illustrations, or product mockups — these tools make it possible in seconds.',
    why: 'Visual content is essential for marketing, design, and communication. AI image generators have replaced expensive stock photo subscriptions and hours of Photoshop work. The best tools now produce outputs indistinguishable from professional photography.',
    faqs: [
      { q: 'Which AI image generator produces the best quality?', a: 'Midjourney consistently produces the highest artistic quality. DALL-E 3 (via ChatGPT) is best for prompt accuracy. Leonardo AI is great for game assets. Each has unique strengths.' },
      { q: 'Which AI image generator is free?', a: 'Bing Image Creator (DALL-E) is free with a Microsoft account. Playground AI, Leonardo AI, and Getimg.ai all offer generous free tiers. Stable Diffusion is free if you self-host.' },
      { q: 'What is the best AI image generator for text?', a: 'Ideogram AI specializes in text rendering in images and is the best option when your design needs readable text. Midjourney and DALL-E 3 also handle text reasonably well.' },
    ],
    relatedPages: [
      { label: 'Best AI Design Tools', href: '/category/design' },
      { label: 'How to Create Videos with AI', href: '/how-to-create-videos-with-ai' },
    ],
  },
  video: {
    title: 'Best AI Video Tools in 2026 — ToolFlow',
    h1: 'Best AI Video Tools in 2026',
    intro: 'AI video tools let you create, edit, and enhance professional-quality videos without a camera, editing software expertise, or a production budget. From text-to-video generation to AI avatars and smart editing.',
    why: 'Video content drives more engagement than any other format. AI tools have made professional video production accessible to everyone — from solo creators to enterprise teams. Generate B-roll clips in seconds, create explainer videos with AI avatars, and edit footage by editing text.',
    faqs: [
      { q: 'Can I create videos with AI for free?', a: 'Yes. Pika Labs and Descript both offer useful free tiers. Runway ML and Synthesia have free trial periods. You can produce a complete short video at zero cost using these free options.' },
      { q: 'What is the best AI tool for YouTube videos?', a: 'For YouTube: ChatGPT for scripting, ElevenLabs for voiceover, Runway ML for B-roll, and Descript for editing. This stack handles a full YouTube workflow.' },
      { q: 'How long does AI video generation take?', a: 'Short clips (under 10 seconds) generate in 30-60 seconds with tools like Runway ML and Pika. Full avatar videos in Synthesia take 2-5 minutes to render.' },
    ],
    relatedPages: [
      { label: 'How to Create Videos with AI', href: '/how-to-create-videos-with-ai' },
      { label: 'Best AI Tools for YouTube', href: '/best-ai-tools-for-youtube' },
    ],
  },
  productivity: {
    title: 'Best AI Productivity Tools in 2026 — ToolFlow',
    h1: 'Best AI Productivity Tools in 2026',
    intro: 'AI productivity tools automate repetitive tasks, summarise information, manage workflows, and free up hours every week for high-value work. These are the tools that make professionals dramatically more efficient.',
    why: 'Knowledge workers spend up to 60% of their time on repetitive, low-value tasks. AI productivity tools eliminate most of this. Tools like Zapier automate workflows across 6,000+ apps. Otter.ai transcribes every meeting. Perplexity AI answers research questions instantly.',
    faqs: [
      { q: 'What is the best AI tool for meeting notes?', a: 'Otter.ai and Fireflies.ai are the best dedicated meeting transcription tools. Fathom is the best free option for Zoom meetings. Krisp removes background noise during calls.' },
      { q: 'What is the best AI search engine?', a: 'Perplexity AI is the leading AI-powered search engine, providing cited answers from real-time web searches. It is significantly more efficient than traditional search for most research tasks.' },
      { q: 'Can AI tools replace a personal assistant?', a: 'AI tools handle many PA tasks: email drafting, meeting transcription, scheduling assistance, research summaries. For routine tasks, yes — AI handles them extremely well.' },
    ],
    relatedPages: [
      { label: 'Best Free AI Tools', href: '/best-free-ai-tools' },
      { label: 'AI Tools for Beginners', href: '/ai-tools-for-beginners' },
    ],
  },
  voice: {
    title: 'Best AI Voice and Text-to-Speech Tools in 2026 — ToolFlow',
    h1: 'Best AI Voice Tools in 2026',
    intro: 'AI voice tools convert text to realistic speech, clone voices, and power professional voiceover production without a recording studio. From podcast narration to audiobook creation — these tools are transforming audio content.',
    why: 'Professional voice-over once cost hundreds of dollars per hour and required booking studio time. AI voice tools like ElevenLabs produce results indistinguishable from human narrators, available instantly, at a fraction of the cost.',
    faqs: [
      { q: 'What is the most realistic AI voice generator?', a: 'ElevenLabs produces the most realistic AI voices in 2026. Its voice cloning feature can replicate a voice with just a few minutes of audio. Murf AI is excellent for professional e-learning voiceovers.' },
      { q: 'Is voice cloning legal?', a: 'Cloning your own voice is legal. Cloning someone else voice without consent may violate laws in many jurisdictions. Always use ethical practices and respect consent when using voice cloning tools.' },
      { q: 'Can AI voices be used in YouTube videos?', a: 'Yes. ElevenLabs, Murf AI, and Play.ht all allow commercial use of their voices. Always check the specific licensing terms for commercial content creation.' },
    ],
    relatedPages: [
      { label: 'How to Create Videos with AI', href: '/how-to-create-videos-with-ai' },
      { label: 'Best AI Tools for YouTube', href: '/best-ai-tools-for-youtube' },
    ],
  },
  music: {
    title: 'Best AI Music Generation Tools in 2026 — ToolFlow',
    h1: 'Best AI Music Generators in 2026',
    intro: 'AI music tools create original, royalty-free songs, background music, and full compositions from text descriptions. No musical training required — just describe the sound you want and the AI composes it.',
    why: 'Background music once required licensing stock tracks or hiring composers. AI music generators like Suno AI and Udio create original, royalty-free tracks in seconds. Perfect for content creators, marketers, and game developers.',
    faqs: [
      { q: 'What is the best AI music generator?', a: 'Suno AI is currently the best for full songs with vocals. Udio is a strong alternative. For royalty-free background music, Mubert and Soundraw offer the best options for content creators.' },
      { q: 'Is AI-generated music royalty-free?', a: 'It depends on the tool. Mubert, Soundraw, and Beatoven.ai are specifically designed for royalty-free commercial use. Suno and Udio have their own licensing terms that vary by plan.' },
      { q: 'Can AI create music in any genre?', a: 'Yes. Suno AI and Udio can generate music across hundreds of genres from classical and jazz to EDM, hip-hop, pop, and metal. You describe the style and the AI composes it.' },
    ],
    relatedPages: [
      { label: 'How to Create Videos with AI', href: '/how-to-create-videos-with-ai' },
      { label: 'Best AI Voice Tools', href: '/category/voice' },
    ],
  },
  research: {
    title: 'Best AI Research Tools in 2026 — ToolFlow',
    h1: 'Best AI Research Tools in 2026',
    intro: 'AI research tools help you find information faster, analyze academic papers, understand complex documents, and synthesize knowledge from multiple sources. These tools are essential for students, academics, and knowledge workers.',
    why: 'Research that once took days of library work can now be done in hours. AI tools like Perplexity AI search the web with real-time accuracy, Consensus synthesizes scientific literature, and ChatPDF lets you have conversations with any document.',
    faqs: [
      { q: 'What is the best AI tool for academic research?', a: 'Consensus is best for finding scientific evidence and research consensus. Elicit automates literature reviews. Research Rabbit helps you discover connected papers. Use all three for comprehensive academic research.' },
      { q: 'Can I use AI to summarize research papers?', a: 'Yes. ChatPDF lets you upload any PDF and ask questions. Humata AI summarizes and analyzes documents. Elicit extracts key data from scientific papers automatically.' },
      { q: 'Is Perplexity AI better than Google for research?', a: 'For quick factual research, Perplexity AI is often faster and more useful than Google because it synthesizes answers with citations. For finding specific pages or e-commerce, Google remains better.' },
    ],
    relatedPages: [
      { label: 'Best AI Tools for Students', href: '/best-ai-tools-for-students' },
      { label: 'Best AI Writing Tools', href: '/best-ai-writing-tools' },
    ],
  },
  marketing: {
    title: 'Best AI Marketing Tools in 2026 — ToolFlow',
    h1: 'Best AI Marketing Tools in 2026',
    intro: 'AI marketing tools automate content creation, optimize ad campaigns, personalize messaging, and analyze performance at scale. These tools give marketing teams the power to do more with less.',
    why: 'Marketing teams are expected to produce more content across more channels than ever before. AI tools compress the time it takes to create campaigns, optimize copy, and analyze results — making small teams as productive as large agencies.',
    faqs: [
      { q: 'What is the best AI tool for marketing content?', a: 'Jasper is purpose-built for marketing content with brand voice training and 50+ templates. HubSpot AI integrates content creation with your entire marketing platform. Copy.ai is the most affordable option.' },
      { q: 'Can AI replace human marketers?', a: 'AI handles execution tasks extremely well: writing variations, A/B testing copy, scheduling content, and analyzing data. Strategic marketing, brand positioning, and creative direction still require human expertise.' },
      { q: 'What AI tools are best for ad campaigns?', a: 'Albert.ai autonomously manages digital ad campaigns. Smartly.io automates social advertising. Phrasee optimizes ad copy language. These tools require significant budget to be worth the investment.' },
    ],
    relatedPages: [
      { label: 'Best AI Writing Tools', href: '/best-ai-writing-tools' },
      { label: 'Best AI SEO Tools', href: '/category/seo' },
    ],
  },
  seo: {
    title: 'Best AI SEO Tools in 2026 — ToolFlow',
    h1: 'Best AI SEO Tools in 2026',
    intro: 'AI SEO tools analyze search rankings, optimize content for Google, identify keyword opportunities, and scale content production — all while removing the guesswork from search engine optimization.',
    why: 'SEO has never been more competitive or more algorithmic. AI tools like Surfer SEO and Clearscope remove the guesswork by telling you exactly what your content needs to rank. Content teams using AI SEO tools consistently outperform those relying on intuition.',
    faqs: [
      { q: 'What is the best AI SEO tool?', a: 'Surfer SEO is the most comprehensive AI SEO tool with real-time content scoring, keyword research, and competitor analysis. Clearscope is preferred by professional writers for its clean interface. Frase is the best value for budget-conscious teams.' },
      { q: 'Does AI content rank on Google?', a: 'Yes. Google has confirmed it rewards helpful, accurate content regardless of how it was produced. AI-generated content that is well-researched, fact-checked, and genuinely useful can and does rank well.' },
      { q: 'Is Surfer SEO worth it?', a: 'For content teams producing multiple pieces of SEO content per month, Surfer SEO usually pays for itself through improved rankings. For occasional bloggers, Frase or NeuronWriter are more affordable alternatives.' },
    ],
    relatedPages: [
      { label: 'Best AI Writing Tools', href: '/best-ai-writing-tools' },
      { label: 'Best AI Marketing Tools', href: '/category/marketing' },
    ],
  },
  education: {
    title: 'Best AI Education Tools in 2026 — ToolFlow',
    h1: 'Best AI Education Tools in 2026',
    intro: 'AI education tools provide personalized tutoring, instant homework help, language learning, and on-demand explanations across every subject. These tools are changing how people learn at every age.',
    why: 'Access to quality education has historically been limited by geography, income, and availability. AI education tools give every student access to a patient, knowledgeable tutor available 24/7. From Khanmigo guided tutoring to Duolingo language learning — AI is democratizing education.',
    faqs: [
      { q: 'What is the best AI tool for students?', a: 'Khanmigo from Khan Academy is the best AI tutor using the Socratic method. Quillbot helps with writing and paraphrasing. Quizlet AI generates flashcards. Wolfram Alpha solves math problems step-by-step.' },
      { q: 'Can AI help me learn a new language?', a: 'Yes. Duolingo uses AI to personalize your learning and is the most accessible option. For conversation practice, Duolingo Max and speaking-focused apps provide AI conversation partners.' },
      { q: 'Is using AI for homework considered cheating?', a: 'Policies vary by institution. Using AI as a learning tool — to understand concepts and check your work — is generally acceptable. Submitting AI-generated work as your own without disclosure may violate academic integrity policies.' },
    ],
    relatedPages: [
      { label: 'Best AI Tools for Students', href: '/best-ai-tools-for-students' },
      { label: 'Best AI Research Tools', href: '/category/research' },
    ],
  },
  automation: {
    title: 'Best AI Automation Tools in 2026 — ToolFlow',
    h1: 'Best AI Automation Tools in 2026',
    intro: 'AI automation tools connect apps, eliminate manual tasks, and run complex workflows without code. From no-code automation builders to enterprise RPA platforms, these tools save hours of repetitive work every week.',
    why: 'Every business process has repetitive steps that can be automated. AI automation tools go beyond simple "if this, then that" logic — they can make decisions, process documents, extract data from unstructured content, and adapt to changing inputs.',
    faqs: [
      { q: 'What is the best no-code automation tool?', a: 'Zapier is the most accessible with 6,000+ integrations. Make (formerly Integromat) handles more complex workflows. n8n is the best self-hosted open-source option for developers who want full control.' },
      { q: 'Zapier vs Make — which should I use?', a: 'Use Zapier for simple, reliable automations across many apps. Use Make for complex, multi-step workflows that need advanced data transformation. Make is generally more powerful but has a steeper learning curve.' },
      { q: 'What is RPA?', a: 'Robotic Process Automation (RPA) automates repetitive tasks in desktop applications, web browsers, and legacy systems. UiPath and Automation Anywhere are the leading enterprise RPA platforms.' },
    ],
    relatedPages: [
      { label: 'Best AI Productivity Tools', href: '/category/productivity' },
      { label: 'Best AI Business Tools', href: '/category/business' },
    ],
  },
  'customer-support': {
    title: 'Best AI Customer Support Tools in 2026 — ToolFlow',
    h1: 'Best AI Customer Support Tools in 2026',
    intro: 'AI customer support tools resolve tickets automatically, assist human agents, and provide 24/7 self-service to customers. These tools reduce support costs while improving customer satisfaction.',
    why: 'Customer support is one of the highest-volume, most repetitive functions in any business. AI tools like Intercom Fin and Zendesk AI can autonomously resolve 30-50% of tickets, freeing human agents for complex issues that require empathy and judgment.',
    faqs: [
      { q: 'What is the best AI chatbot for customer support?', a: 'Intercom Fin is the most powerful AI support agent for mid-market and enterprise. Tidio is best for small businesses and e-commerce. Zendesk AI is best for teams already using Zendesk.' },
      { q: 'Can AI replace customer support agents?', a: 'AI handles routine, repetitive queries extremely well — order status, FAQs, password resets. Complex issues, emotional customers, and escalations still benefit from human agents. The best implementations use AI to handle volume and humans to handle nuance.' },
      { q: 'What is the best AI tool for e-commerce support?', a: 'Gorgias is purpose-built for e-commerce with deep Shopify integration. It accesses order data directly to answer questions about shipping, returns, and tracking without human involvement.' },
    ],
    relatedPages: [
      { label: 'Best AI Business Tools', href: '/category/business' },
      { label: 'Best AI Sales Tools', href: '/category/sales' },
    ],
  },
  business: {
    title: 'Best AI Business Tools in 2026 — ToolFlow',
    h1: 'Best AI Business Tools in 2026',
    intro: 'AI business tools boost team productivity across meetings, presentations, documents, and communications. From Microsoft Copilot across Office 365 to AI meeting recorders — these tools help every professional work smarter.',
    why: 'Business productivity has been transformed by AI. Professionals now use AI to draft emails, create presentations in minutes, summarize hour-long meetings, and find information across thousands of documents instantly.',
    faqs: [
      { q: 'Is Microsoft Copilot worth the price?', a: 'For teams heavily invested in Microsoft 365, Copilot adds significant value — especially for meeting summaries in Teams, email drafting in Outlook, and data analysis in Excel. The $30/user/month is justified for power users.' },
      { q: 'What is the best free AI tool for business meetings?', a: 'Fathom is the best free AI meeting tool for Zoom, offering unlimited meeting transcription and AI summaries at no cost for individuals. Otter.ai also offers a generous free tier.' },
      { q: 'What is the best AI tool for presentations?', a: 'Gamma.app creates beautiful presentations from prompts with the best design quality. Tome is great for narrative-driven decks. Beautiful.ai ensures professional formatting automatically.' },
    ],
    relatedPages: [
      { label: 'Best AI Productivity Tools', href: '/category/productivity' },
      { label: 'Best AI Automation Tools', href: '/category/automation' },
    ],
  },
  sales: {
    title: 'Best AI Sales Tools in 2026 — ToolFlow',
    h1: 'Best AI Sales Tools in 2026',
    intro: 'AI sales tools analyze conversations, personalize outreach, find prospects, and coach reps to close more deals. These tools give sales teams the intelligence and efficiency advantage they need in competitive markets.',
    why: 'Sales is one of the fields most transformed by AI. Gong and Salesloft analyze every sales call to identify what top performers do differently. Apollo.ai gives access to 275M+ B2B contacts. Lavender helps reps write emails that actually get replies.',
    faqs: [
      { q: 'What is the best AI tool for cold email?', a: 'Lavender is the best AI email coach, scoring your emails in real time. Apollo.ai is the best for finding prospects and running email sequences. The combination of both gives you prospecting and messaging in one workflow.' },
      { q: 'What is conversation intelligence?', a: 'Conversation intelligence tools (Gong, Salesloft) record and analyze sales calls to identify winning behaviors, deal risks, and coaching opportunities. They are the most impactful AI tools for enterprise sales teams.' },
      { q: 'Can AI generate sales leads?', a: 'Yes. Apollo.ai provides a database of 275M+ B2B contacts with AI-powered search. Warmly identifies anonymous website visitors. LinkedIn Sales Navigator uses AI to suggest leads.' },
    ],
    relatedPages: [
      { label: 'Best AI Marketing Tools', href: '/category/marketing' },
      { label: 'Best AI Customer Support Tools', href: '/category/customer-support' },
    ],
  },
  'social-media': {
    title: 'Best AI Social Media Tools in 2026 — ToolFlow',
    h1: 'Best AI Social Media Tools in 2026',
    intro: 'AI social media tools write posts, generate visuals, schedule content, research hashtags, and analyze performance across every platform. These tools make consistent, high-quality social presence achievable for any team size.',
    why: 'Maintaining an active social media presence across multiple platforms requires enormous amounts of content. AI social media tools automate the most time-consuming parts — writing captions, finding hashtags, repurposing content, and scheduling posts.',
    faqs: [
      { q: 'What is the best AI tool for social media?', a: 'Buffer AI is the best overall tool for scheduling with AI writing assistance. Taplio is the best for LinkedIn specifically. Tweet Hunter is best for X (Twitter). Flick is best for Instagram hashtag research.' },
      { q: 'Can AI write my social media posts?', a: 'Yes. Tools like Buffer AI, Predis.ai, and Ocoya generate complete social media posts including captions and visuals. The AI learns your brand voice and generates posts that sound authentic.' },
      { q: 'What is the best AI tool for LinkedIn growth?', a: 'Taplio is purpose-built for LinkedIn with AI content creation, scheduling, analytics, and a CRM for managing LinkedIn connections. It is the most comprehensive LinkedIn growth tool available.' },
    ],
    relatedPages: [
      { label: 'Best AI Marketing Tools', href: '/category/marketing' },
      { label: 'Best AI Writing Tools', href: '/best-ai-writing-tools' },
    ],
  },
  audio: {
    title: 'Best AI Audio Tools in 2026 — ToolFlow',
    h1: 'Best AI Audio Tools in 2026',
    intro: 'AI audio tools cover everything from noise cancellation and meeting transcription to podcast production and text-to-speech. These tools make professional audio accessible without a studio.',
    why: 'Professional audio production once required expensive equipment and technical expertise. AI tools have removed those barriers entirely — Krisp removes background noise from any call, Descript edits audio by editing text, and ElevenLabs produces studio-quality voices instantly.',
    faqs: [
      { q: 'What is the best AI tool for removing background noise?', a: 'Krisp is the best AI noise cancellation tool, working with any communication app to remove background noise and echo in real time. It is particularly useful for remote workers in noisy environments.' },
      { q: 'What is the best AI podcast editor?', a: 'Descript is the most powerful AI podcast editor, allowing you to edit audio by editing the transcript. Podcastle is a good all-in-one option for recording, editing, and distribution.' },
      { q: 'Can AI transcribe meetings accurately?', a: 'Yes. Otter.ai and Fireflies.ai both provide accurate real-time transcription for Zoom, Teams, and Google Meet. Accuracy is typically above 90% for clear English audio.' },
    ],
    relatedPages: [
      { label: 'Best AI Voice Tools', href: '/category/voice' },
      { label: 'Best AI Music Tools', href: '/category/music' },
    ],
  },
}

export function generateStaticParams() {
  return categories.map(c => ({ slug: c.id }))
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = categories.find(c => c.id === params.slug)
  const meta = CATEGORY_META[params.slug]
  if (!cat) return { title: 'Category Not Found' }
  const title = meta?.title ?? `Best AI ${cat.label} Tools in 2026 — ToolFlow`
  const desc = meta?.intro ?? cat.description
  return {
    title,
    description: desc,
    openGraph: { title, description: desc, type: 'article' },
    alternates: { canonical: `/category/${params.slug}` },
    keywords: [cat.label, 'AI tools', 'best AI ' + cat.label, '2026', 'review'],
  }
}

export default function CategoryPage({ params }: Props) {
  const cat = categories.find(c => c.id === params.slug)
  if (!cat) notFound()
  const safeCat = cat!

  const meta = CATEGORY_META[params.slug] ?? {
    title: `Best AI ${safeCat.label} Tools in 2026`,
    h1: `Best AI ${safeCat.label} Tools in 2026`,
    intro: safeCat.description,
    why: `AI ${safeCat.label.toLowerCase()} tools are transforming how professionals work. These tools save time, reduce costs, and unlock new capabilities.`,
    faqs: [
      { q: `What is the best AI ${safeCat.label.toLowerCase()} tool?`, a: `Browse our ranked list above — we rate each tool by features, pricing, ease of use, and real-world performance to help you find the best fit.` },
    ],
    relatedPages: [],
  }

  const categoryTools = tools
    .filter(t => t.category === params.slug as ToolCategory)
    .sort((a, b) => b.rating - a.rating)

  const badgeMap: Record<string, string> = {
    writing: 'badge-writing', coding: 'badge-coding', design: 'badge-design',
    'image-generation': 'badge-design', video: 'badge-video', productivity: 'badge-productivity',
    voice: 'badge-audio', music: 'badge-audio', audio: 'badge-audio',
    research: 'badge-research', marketing: 'badge-marketing', seo: 'badge-marketing',
    education: 'badge-research', automation: 'badge-productivity', 'customer-support': 'badge-productivity',
    business: 'badge-productivity', sales: 'badge-marketing', 'social-media': 'badge-marketing',
  }

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          <article className="flex-1 min-w-0">
            <nav className="flex items-center gap-1.5 text-xs font-mono text-ink-3 mb-8">
              <Link href="/" className="hover:text-fire transition-colors">Home</Link>
              <span>/</span>
              <span className="text-ink-2">Categories</span>
              <span>/</span>
              <span className="text-ink-2">{safeCat.label}</span>
            </nav>

            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span className="trust-badge">✓ Updated June 2026</span>
              <span className="trust-badge">✓ {categoryTools.length} tools reviewed</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">{safeCat.emoji}</span>
              <h1 className="font-display font-extrabold text-ink text-4xl sm:text-5xl leading-tight animate-fade-up">
                {meta.h1}
              </h1>
            </div>

            <p className="text-lg text-ink-2 font-body leading-relaxed mb-10 animate-fade-up delay-100">
              {meta.intro}
            </p>

            <div className="section-label mb-6">All {safeCat.label} Tools</div>
            <h2 className="font-display font-bold text-ink text-2xl mb-6">
              {categoryTools.length} Best AI {safeCat.label} Tools Ranked
            </h2>
            <div className="space-y-5">
              {categoryTools.map((tool, i) => (
                <div key={tool.slug} className="animate-fade-up" style={{ animationDelay: `${i * 40}ms` }}>
                  <LandingToolCard tool={tool} rank={i + 1} />
                </div>
              ))}
            </div>

            <section className="mt-14">
              <div className="section-label mb-6">Why Use These Tools</div>
              <h2 className="font-display font-bold text-ink text-2xl mb-4">
                Why Use AI {safeCat.label} Tools??
              </h2>
              <div className="prose-landing">
                <p>{meta.why}</p>
              </div>
            </section>

            <FAQSection faqs={meta.faqs} title={`FAQs — AI ${safeCat.label} Tools`} />

            {meta.relatedPages.length > 0 && (
              <div className="mt-12 p-6 bg-white rounded-2xl border border-border">
                <div className="font-display font-semibold text-ink text-base mb-4">Related Guides</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {meta.relatedPages.map(r => (
                    <Link key={r.href} href={r.href} className="flex items-center gap-2 text-sm font-body text-ink-2 hover:text-fire transition-colors p-2 rounded-lg hover:bg-canvas">
                      <span className="text-fire">→</span> {r.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-20 space-y-5">
              <div className="bg-white rounded-2xl border border-border p-5">
                <div className="font-display font-semibold text-ink text-sm mb-3">All Categories</div>
                <div className="space-y-1 max-h-[60vh] overflow-y-auto">
                  {categories.filter(c => c.id !== 'audio').map(c => (
                    <Link key={c.id} href={`/category/${c.id}`}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-body transition-colors ${
                        c.id === params.slug
                          ? 'bg-fire-light text-fire font-medium'
                          : 'text-ink-2 hover:bg-canvas hover:text-ink'
                      }`}>
                      <span>{c.emoji}</span>
                      <span>{c.label}</span>
                      <span className="ml-auto text-xs font-mono text-ink-3">
                        {tools.filter(t => t.category === c.id).length}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {categoryTools[0] && (
                <div className="bg-fire-light rounded-2xl border border-fire-mid p-5">
                  <div className="font-display font-bold text-ink text-sm mb-2">{safeCat.emoji} Top pick</div>
                  <div className="font-display font-semibold text-ink text-base mb-1">{categoryTools[0].name}</div>
                  <div className="text-xs text-ink-2 font-body mb-3">{categoryTools[0].tagline}</div>
                  <a href={categoryTools[0].affiliateLink} target="_blank" rel="noopener noreferrer nofollow"
                    data-tool={categoryTools[0].slug} data-affiliate="true"
                    className="btn-fire block rounded-xl py-2.5 text-xs text-center">
                    Try {categoryTools[0].name} →
                  </a>
                </div>
              )}
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}
