import { ToolCategory } from './tools'

export interface AnswerEntry {
  id: string
  keywords: string[]          // triggers for matching
  category: ToolCategory | 'general' | 'student' | 'beginner' | 'business'
  canonicalQuestion: string   // H1 shown on search page
  shortAnswer: string         // 2-4 sentence answer block
  bulletPoints?: string[]     // optional tips
  toolSlugs: string[]         // ordered tool recommendations (3-6)
}

export const answers: AnswerEntry[] = [
  // ─── VIDEO ───────────────────────────────────────────────────────────
  {
    id: 'create-videos-ai',
    keywords: ['create video', 'make video', 'ai video', 'video generation', 'generate video', 'text to video'],
    category: 'video',
    canonicalQuestion: 'How to Create Videos with AI',
    shortAnswer:
      'AI video tools let you generate professional-quality videos from text prompts, images, or scripts — no camera or editing skills required. Tools like Runway ML and Pika Labs turn text into cinematic clips in seconds, while Synthesia creates talking-head videos with realistic avatars. For YouTube and social content, Descript lets you edit video by editing text, making the whole process dramatically faster.',
    bulletPoints: [
      'Start with Runway ML for cinematic text-to-video clips',
      'Use Synthesia if you need a presenter avatar without filming',
      'Try Descript to edit existing footage using transcript-based editing',
      'Pika Labs is the best free option for short social clips',
    ],
    toolSlugs: ['runway-ml', 'synthesia', 'pika-labs', 'descript', 'heygen'],
  },
  {
    id: 'youtube-ai-tools',
    keywords: ['youtube', 'youtube video', 'youtube content', 'youtube channel'],
    category: 'video',
    canonicalQuestion: 'Best AI Tools for YouTube Creators',
    shortAnswer:
      'Growing a YouTube channel is far faster with AI. Descript handles editing by transcript, ElevenLabs generates professional voiceovers, and Runway ML creates B-roll and cinematic inserts. For scripting and SEO-optimized titles and descriptions, ChatGPT is indispensable.',
    bulletPoints: [
      'Script + titles: ChatGPT',
      'Edit by text transcript: Descript',
      'Voiceover: ElevenLabs',
      'B-roll generation: Runway ML',
    ],
    toolSlugs: ['descript', 'elevenlabs', 'runway-ml', 'chatgpt', 'loom-ai'],
  },

  // ─── WRITING ─────────────────────────────────────────────────────────
  {
    id: 'ai-writing-tools',
    keywords: ['writing', 'write', 'best writing tool', 'ai for writing', 'write with ai', 'content writing'],
    category: 'writing',
    canonicalQuestion: 'Best AI Tools for Writing',
    shortAnswer:
      'AI writing tools have transformed content creation — you can now produce blog posts, marketing copy, and emails in a fraction of the time. Jasper is the gold standard for marketing teams, while ChatGPT and Claude handle everything from essays to code. For grammar and polish, Grammarly is an essential layer on top of any writing workflow.',
    bulletPoints: [
      'Long-form blog posts: Jasper or Writesonic',
      'Marketing copy: Copy.ai or Jasper',
      'Grammar and style: Grammarly',
      'Research and reasoning: Claude or ChatGPT',
    ],
    toolSlugs: ['jasper', 'chatgpt', 'grammarly', 'copy-ai', 'claude', 'writesonic'],
  },
  {
    id: 'blog-writing-ai',
    keywords: ['blog', 'blog post', 'article', 'write blog', 'seo article', 'seo content', 'seo writing'],
    category: 'writing',
    canonicalQuestion: 'Best AI Tools for Writing Blog Posts and Articles',
    shortAnswer:
      'Writing high-ranking blog posts with AI requires tools that understand SEO structure and factual accuracy. Writesonic\'s Article Writer generates long-form content with real-time web access. Jasper excels at brand-consistent copy. For research-backed content, Perplexity AI gives you cited facts you can build around.',
    bulletPoints: [
      'SEO blog posts: Writesonic or Jasper',
      'Research and citations: Perplexity AI',
      'Editing and clarity: Grammarly',
    ],
    toolSlugs: ['writesonic', 'jasper', 'perplexity-ai', 'grammarly', 'chatgpt'],
  },
  {
    id: 'email-writing-ai',
    keywords: ['email', 'write email', 'email copy', 'cold email', 'email marketing'],
    category: 'writing',
    canonicalQuestion: 'Best AI Tools for Writing Emails',
    shortAnswer:
      'Writing effective emails — whether cold outreach, marketing campaigns, or everyday communication — is dramatically faster with AI. ChatGPT and Copy.ai can generate entire email sequences from a brief. Grammarly ensures every email is polished and professional before it sends.',
    toolSlugs: ['chatgpt', 'copy-ai', 'grammarly', 'jasper'],
  },

  // ─── DESIGN ──────────────────────────────────────────────────────────
  {
    id: 'design-logos-ai',
    keywords: ['logo', 'logo design', 'design logo', 'ai logo', 'create logo', 'logo maker'],
    category: 'design',
    canonicalQuestion: 'How to Design Logos with AI',
    shortAnswer:
      'AI can generate stunning logo concepts in seconds — what used to take a designer days now takes minutes. Canva AI\'s Magic Design creates logos from a text description with editable templates. Midjourney produces world-class creative concepts you can refine. Adobe Firefly is ideal if you need commercially safe imagery for your brand assets.',
    bulletPoints: [
      'Quick editable logos: Canva AI (easiest for non-designers)',
      'Creative concepts: Midjourney (best quality)',
      'Commercial use: Adobe Firefly',
      'Iteration and refinement: DALL·E 3 inside ChatGPT',
    ],
    toolSlugs: ['canva-ai', 'midjourney', 'adobe-firefly', 'dalle-3', 'stable-diffusion'],
  },
  {
    id: 'ai-image-generation',
    keywords: ['image', 'generate image', 'ai image', 'ai art', 'image generation', 'ai artwork', 'text to image'],
    category: 'design',
    canonicalQuestion: 'Best AI Tools for Image Generation',
    shortAnswer:
      'Image generation AI has reached a level where outputs are indistinguishable from professional photography and illustration. Midjourney delivers the highest artistic quality. DALL·E 3 is the most prompt-faithful. Stable Diffusion is the free open-source choice for full control. Adobe Firefly is the safest option for commercial projects.',
    bulletPoints: [
      'Best quality: Midjourney',
      'Best prompt following: DALL·E 3',
      'Free & open source: Stable Diffusion',
      'Commercial safe: Adobe Firefly',
    ],
    toolSlugs: ['midjourney', 'dalle-3', 'stable-diffusion', 'adobe-firefly', 'canva-ai'],
  },
  {
    id: 'design-presentations-ai',
    keywords: ['presentation', 'slides', 'powerpoint', 'pitch deck', 'slide deck'],
    category: 'design',
    canonicalQuestion: 'Best AI Tools for Creating Presentations',
    shortAnswer:
      'AI presentation tools auto-format your content into polished slides so you can focus on ideas, not layout. Beautiful.ai designs slides that adjust automatically as you add content. Canva AI generates complete presentations from a text prompt. For maximum creative control, Figma AI gives product teams a collaborative environment.',
    toolSlugs: ['beautiful-ai', 'canva-ai', 'figma-ai', 'chatgpt'],
  },

  // ─── CODING ──────────────────────────────────────────────────────────
  {
    id: 'ai-coding-tools',
    keywords: ['coding', 'programming', 'developer tools', 'ai for coding', 'code faster', 'software development'],
    category: 'coding',
    canonicalQuestion: 'Best AI Tools for Coding and Development',
    shortAnswer:
      'AI coding tools have fundamentally changed software development — experienced developers report 30-50% productivity gains. Cursor is the best AI-native code editor with deep codebase understanding. GitHub Copilot offers the smoothest IDE integration for VS Code. For browser-based prototyping with zero setup, Replit AI lets you ship apps directly from your browser.',
    bulletPoints: [
      'Best overall editor: Cursor (AI-native, free tier)',
      'Best IDE plugin: GitHub Copilot (VS Code + JetBrains)',
      'Privacy-first teams: Tabnine (runs locally)',
      'Browser-based / beginners: Replit AI',
    ],
    toolSlugs: ['cursor', 'github-copilot', 'replit-ai', 'chatgpt', 'claude', 'tabnine'],
  },
  {
    id: 'learn-coding-ai',
    keywords: ['learn coding', 'learn to code', 'beginner coding', 'coding for beginners', 'learn programming'],
    category: 'coding',
    canonicalQuestion: 'Best AI Tools to Learn Coding as a Beginner',
    shortAnswer:
      'Learning to code with AI accelerates progress massively. ChatGPT can explain any concept, debug your errors, and generate practice exercises on demand. Replit AI provides an instant coding environment with an AI tutor built in — no installation required. GitHub Copilot teaches by example, showing real implementations as you type.',
    toolSlugs: ['chatgpt', 'replit-ai', 'github-copilot', 'claude'],
  },

  // ─── PRODUCTIVITY ────────────────────────────────────────────────────
  {
    id: 'automate-work-ai',
    keywords: ['automate', 'automation', 'workflow', 'automate work', 'productivity', 'save time'],
    category: 'productivity',
    canonicalQuestion: 'Best AI Tools to Automate Your Work',
    shortAnswer:
      'Automating repetitive work with AI can save hours every week. Zapier connects 6,000+ apps and lets you build AI-powered workflows without coding. Make (formerly Integromat) handles more complex multi-step automations. For AI-powered meeting notes and summaries, Otter.ai and Notion AI eliminate manual note-taking entirely.',
    bulletPoints: [
      'App automation: Zapier or Make',
      'Meeting transcription: Otter.ai',
      'Document automation: Notion AI',
      'General tasks: ChatGPT or Claude',
    ],
    toolSlugs: ['zapier-ai', 'make', 'otter-ai', 'notion-ai', 'chatgpt'],
  },
  {
    id: 'ai-meeting-tools',
    keywords: ['meeting', 'meetings', 'meeting notes', 'transcription', 'summarize meeting'],
    category: 'productivity',
    canonicalQuestion: 'Best AI Tools for Meetings and Note-Taking',
    shortAnswer:
      'Never take manual notes again. Otter.ai transcribes meetings in real time and detects action items. Notion AI summarizes notes you paste in. Loom AI is perfect for async teams — record a video message and let AI generate the summary and action points automatically.',
    toolSlugs: ['otter-ai', 'notion-ai', 'loom-ai', 'chatgpt'],
  },

  // ─── AUDIO ──────────────────────────────────────────────────────────
  {
    id: 'ai-voice-tools',
    keywords: ['voice', 'voiceover', 'text to speech', 'ai voice', 'narration', 'speech'],
    category: 'audio',
    canonicalQuestion: 'Best AI Tools for Voiceovers and Text-to-Speech',
    shortAnswer:
      'AI voice technology now sounds indistinguishable from human narration. ElevenLabs produces the most realistic AI voices and supports voice cloning. Murf AI is purpose-built for professional voiceovers in e-learning and video production. Both offer 20+ languages and are used by thousands of content creators worldwide.',
    toolSlugs: ['elevenlabs', 'murf-ai', 'chatgpt'],
  },
  {
    id: 'create-music-ai',
    keywords: ['music', 'ai music', 'create music', 'song', 'generate music', 'jingle', 'beat', 'compose'],
    category: 'audio',
    canonicalQuestion: 'How to Create Music with AI',
    shortAnswer:
      'Creating full songs with AI is now possible with zero musical knowledge. Suno AI generates complete tracks — with vocals, instruments, and lyrics — from a single text description. Just describe the genre and mood and it produces radio-ready songs in seconds. Perfect for YouTube intros, background music, ads, and creative projects.',
    toolSlugs: ['suno-ai', 'elevenlabs', 'murf-ai'],
  },

  // ─── RESEARCH ──────────────────────────────────────────────────────
  {
    id: 'research-ai-tools',
    keywords: ['research', 'search', 'find information', 'fact check', 'look up', 'study'],
    category: 'research',
    canonicalQuestion: 'Best AI Tools for Research',
    shortAnswer:
      'AI has reinvented research. Perplexity AI searches the web in real time and delivers cited answers instead of a list of links. Claude handles massive documents — up to 200,000 tokens — for deep analysis. ChatGPT with browsing enabled is excellent for synthesizing multiple sources into structured reports.',
    toolSlugs: ['perplexity-ai', 'claude', 'chatgpt', 'notion-ai'],
  },

  // ─── SPECIAL AUDIENCES ─────────────────────────────────────────────
  {
    id: 'ai-tools-students',
    keywords: ['student', 'students', 'study', 'school', 'college', 'university', 'homework', 'essay', 'academic'],
    category: 'general',
    canonicalQuestion: 'Best AI Tools for Students',
    shortAnswer:
      'Students who use AI tools effectively have a massive advantage — for research, writing, studying, and coding. Perplexity AI gives cited answers for research papers. ChatGPT and Claude help with essay writing, concept explanation, and problem-solving. Grammarly polishes final submissions. Notion AI organises notes and summarises lecture content.',
    bulletPoints: [
      'Research with citations: Perplexity AI',
      'Writing help: ChatGPT or Claude',
      'Grammar check: Grammarly (free tier is great)',
      'Note organisation: Notion AI',
      'Coding assignments: GitHub Copilot or Cursor',
    ],
    toolSlugs: ['perplexity-ai', 'chatgpt', 'claude', 'grammarly', 'notion-ai', 'github-copilot'],
  },
  {
    id: 'ai-tools-beginners',
    keywords: ['beginner', 'beginners', 'start with ai', 'first ai tool', 'new to ai', 'easy ai', 'simple ai'],
    category: 'general',
    canonicalQuestion: 'Best AI Tools for Beginners',
    shortAnswer:
      'If you\'re new to AI, start with tools that are immediately useful and require zero technical knowledge. ChatGPT is the best starting point — just type what you need. Canva AI makes design effortless with drag-and-drop. Grammarly improves your writing automatically. These three tools alone can save hours every week.',
    bulletPoints: [
      'Start here: ChatGPT (free tier)',
      'Design: Canva AI (free tier)',
      'Writing polish: Grammarly (free tier)',
      'Research: Perplexity AI (free)',
    ],
    toolSlugs: ['chatgpt', 'canva-ai', 'grammarly', 'perplexity-ai', 'notion-ai'],
  },
  {
    id: 'ai-tools-business',
    keywords: ['business', 'small business', 'startup', 'entrepreneur', 'company', 'marketing', 'sales'],
    category: 'business',
    canonicalQuestion: 'Best AI Tools for Business and Marketing',
    shortAnswer:
      'Businesses that adopt AI tools cut operational costs and outpace competitors. Jasper handles all marketing content at scale. Zapier automates repetitive business workflows across 6,000+ apps. HeyGen creates personalised video outreach without a film crew. Together these tools can replace significant manual work.',
    bulletPoints: [
      'Content at scale: Jasper',
      'Workflow automation: Zapier or Make',
      'Sales videos: HeyGen',
      'Customer support: ChatGPT (via API)',
    ],
    toolSlugs: ['jasper', 'zapier-ai', 'heygen', 'chatgpt', 'copy-ai', 'make'],
  },
  {
    id: 'ai-tools-freelancers',
    keywords: ['freelancer', 'freelance', 'solo', 'solopreneur', 'agency', 'client work'],
    category: 'general',
    canonicalQuestion: 'Best AI Tools for Freelancers',
    shortAnswer:
      'Freelancers who use AI can deliver faster, charge more, and take on more clients. ChatGPT handles first drafts, Canva AI produces client-ready designs, and Grammarly ensures professional output. Loom AI makes async client communication effortless. GitHub Copilot is essential for freelance developers.',
    toolSlugs: ['chatgpt', 'canva-ai', 'grammarly', 'loom-ai', 'github-copilot', 'jasper'],
  },
  {
    id: 'free-ai-tools',
    keywords: ['free', 'free ai tools', 'best free ai', 'no cost', 'free tier'],
    category: 'general',
    canonicalQuestion: 'Best Free AI Tools in 2024',
    shortAnswer:
      'Many of the best AI tools offer generous free tiers that are genuinely useful without paying. ChatGPT free tier handles most everyday tasks. Canva AI provides free design with AI features. Grammarly\'s free tier improves every piece of writing. Perplexity AI is completely free for web-based research.',
    bulletPoints: [
      'ChatGPT — free GPT-3.5 access',
      'Canva AI — free design with AI features',
      'Grammarly — free grammar and style',
      'Perplexity AI — free web research',
      'Stable Diffusion — free image generation (self-hosted)',
    ],
    toolSlugs: ['chatgpt', 'canva-ai', 'grammarly', 'perplexity-ai', 'stable-diffusion', 'replit-ai'],
  },
]

// ─── Category-level fallback answers ────────────────────────────────────
export const categoryAnswers: Record<string, Omit<AnswerEntry, 'id' | 'keywords'>> = {
  video: {
    category: 'video',
    canonicalQuestion: 'Best AI Tools for Video',
    shortAnswer:
      'AI video tools let you create, edit, and enhance video content without professional equipment or editing experience. From text-to-video generation to automated editing, these tools dramatically reduce production time.',
    toolSlugs: ['runway-ml', 'synthesia', 'pika-labs', 'descript', 'heygen', 'loom-ai'],
  },
  writing: {
    category: 'writing',
    canonicalQuestion: 'Best AI Tools for Writing',
    shortAnswer:
      'AI writing tools help you create better content faster — from first draft to polished final copy. Whether you\'re writing blog posts, emails, or marketing materials, AI makes every writer more productive.',
    toolSlugs: ['chatgpt', 'jasper', 'grammarly', 'copy-ai', 'claude', 'writesonic'],
  },
  design: {
    category: 'design',
    canonicalQuestion: 'Best AI Tools for Design',
    shortAnswer:
      'AI design tools have democratised visual creation — anyone can now produce stunning images, logos, presentations and graphics without design training. The gap between a designer and a non-designer has never been smaller.',
    toolSlugs: ['midjourney', 'canva-ai', 'dalle-3', 'adobe-firefly', 'figma-ai', 'stable-diffusion'],
  },
  coding: {
    category: 'coding',
    canonicalQuestion: 'Best AI Tools for Coding',
    shortAnswer:
      'AI coding assistants have become indispensable for developers of all skill levels. They autocomplete code, explain errors, suggest refactors, and even build entire features from a description.',
    toolSlugs: ['cursor', 'github-copilot', 'chatgpt', 'claude', 'replit-ai', 'tabnine'],
  },
  productivity: {
    category: 'productivity',
    canonicalQuestion: 'Best AI Productivity Tools',
    shortAnswer:
      'AI productivity tools automate repetitive tasks, summarise information, and manage workflows — giving you back hours every week to focus on higher-value work.',
    toolSlugs: ['chatgpt', 'notion-ai', 'zapier-ai', 'otter-ai', 'loom-ai', 'make'],
  },
  audio: {
    category: 'audio',
    canonicalQuestion: 'Best AI Tools for Audio and Music',
    shortAnswer:
      'AI audio tools cover everything from realistic voiceovers and text-to-speech to full song generation. Content creators, podcasters, and marketers use them to produce professional audio without a studio.',
    toolSlugs: ['elevenlabs', 'suno-ai', 'murf-ai'],
  },
  research: {
    category: 'research',
    canonicalQuestion: 'Best AI Tools for Research',
    shortAnswer:
      'AI research tools find, synthesise, and cite information faster than any traditional search. They\'re essential for students, analysts, journalists, and anyone who needs reliable facts quickly.',
    toolSlugs: ['perplexity-ai', 'chatgpt', 'claude', 'notion-ai'],
  },
}
