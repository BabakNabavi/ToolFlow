import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQSection from '@/components/FAQSection'
import LandingToolCard from '@/components/LandingToolCard'
import { getToolBySlug } from '@/data/tools'

export const metadata: Metadata = {
  title: 'Best AI Tools for Resumes and Job Applications in 2026 — ToolFlow',
  description: 'The best AI tools for writing resumes, cover letters, and landing your dream job in 2026. Ranked by real job seekers and career coaches.',
  keywords: 'AI tools for resumes, AI resume writer, AI cover letter, best AI for job applications, ChatGPT resume, AI resume builder 2026',
  openGraph: {
    title: 'Best AI Tools for Resumes and Job Applications in 2026',
    description: 'Write a standout resume and cover letter with AI — ranked tools for job seekers in 2026.',
    type: 'article',
  },
  alternates: { canonical: '/ai-tools-for-resumes' },
}

const TOOLS_WITH_HIGHLIGHTS = [
  { slug: 'chatgpt',       highlight: 'Best for resume writing' },
  { slug: 'grammarly',     highlight: 'Best for proofreading' },
  { slug: 'claude',        highlight: 'Best for cover letters' },
  { slug: 'perplexity-ai', highlight: 'Best for company research' },
  { slug: 'canva-ai',      highlight: 'Best for resume design' },
  { slug: 'jasper',        highlight: 'Best for LinkedIn content' },
]

const RESUME_STEPS = [
  {
    step: '1',
    title: 'Research the company and role',
    tool: 'Perplexity AI',
    desc: 'Use Perplexity AI to research the company, its culture, recent news, and the specific role. This lets you tailor your resume and cover letter precisely to what they are looking for.',
  },
  {
    step: '2',
    title: 'Write or rewrite your resume',
    tool: 'ChatGPT',
    desc: 'Paste your current resume and job description into ChatGPT. Ask it to rewrite your bullet points using strong action verbs, quantify achievements, and match keywords from the job posting.',
  },
  {
    step: '3',
    title: 'Write a personalised cover letter',
    tool: 'Claude',
    desc: 'Claude excels at nuanced, professional writing. Give it your resume, the job description, and company research — it writes a compelling cover letter that feels human and tailored.',
  },
  {
    step: '4',
    title: 'Proofread everything',
    tool: 'Grammarly',
    desc: 'Run your resume and cover letter through Grammarly to catch typos, grammar errors, and awkward phrasing. One error can disqualify an otherwise strong application.',
  },
  {
    step: '5',
    title: 'Design a professional resume',
    tool: 'Canva AI',
    desc: 'Use Canva AI to format your resume beautifully. Choose from professional templates, match the company brand colours, and export as a clean PDF.',
  },
]

const FAQS = [
  {
    q: 'Can AI write my resume for me?',
    a: 'AI can write a strong first draft of your resume, but you should always review, personalise, and verify every statement. Use ChatGPT or Claude to rewrite your bullet points with stronger language and relevant keywords — but the facts, achievements, and experiences must be genuinely yours.',
  },
  {
    q: 'Does using AI for resumes get detected by employers?',
    a: 'AI detection tools for resumes are unreliable and most employers do not use them. What matters is whether your resume is accurate, well-written, and relevant to the role. AI-assisted resumes that are properly personalised are indistinguishable from human-written ones and often better structured.',
  },
  {
    q: 'What is the best AI tool to write a cover letter?',
    a: 'Claude is the best AI for cover letters because of its nuanced, natural writing style. Give it your resume, the job description, and two or three things you want to highlight about yourself. It produces personalised, professional cover letters that do not sound AI-generated when properly prompted.',
  },
  {
    q: 'How do I use ChatGPT to improve my resume?',
    a: 'Paste your current resume into ChatGPT and say: "Rewrite these bullet points using strong action verbs, quantify achievements where possible, and include keywords from this job description: [paste job description]." Review the output, keep what is accurate, and adjust the tone to match your voice.',
  },
  {
    q: 'Can AI help me prepare for job interviews?',
    a: 'Yes. ChatGPT and Claude are excellent interview prep tools. Ask them to generate likely interview questions for your role, practice answering with the STAR method (Situation, Task, Action, Result), and critique your answers. You can also ask them to research common interview questions at specific companies.',
  },
]

export default function ResumePage() {
  const tools = TOOLS_WITH_HIGHLIGHTS.map(t => ({
    tool: getToolBySlug(t.slug)!,
    highlight: t.highlight,
  })).filter(t => t.tool)

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          <article className="flex-1 min-w-0">
            <nav className="flex items-center gap-1.5 text-xs font-mono text-ink-3 mb-8">
              <Link href="/" className="hover:text-fire transition-colors">Home</Link>
              <span>/</span>
              <Link href="/category/writing" className="hover:text-fire transition-colors">Writing</Link>
              <span>/</span>
              <span className="text-ink-2">AI Tools for Resumes</span>
            </nav>

            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span className="trust-badge">✓ Updated June 2026</span>
              <span className="trust-badge">✓ 6 tools reviewed</span>
              <span className="trust-badge">✓ Used by job seekers</span>
            </div>

            <h1 className="font-display font-extrabold text-ink text-4xl sm:text-5xl leading-tight mb-5 animate-fade-up">
              Best AI Tools for Resumes in 2026
            </h1>

            <p className="text-lg text-ink-2 font-body leading-relaxed mb-8 animate-fade-up delay-100">
              Landing a job in 2026 is competitive. AI tools give you an edge — helping you write stronger bullet points, craft personalised cover letters, research companies deeply, and design a resume that stands out. Here are the best tools job seekers are using right now.
            </p>

            {/* Quick answer */}
            <div className="answer-block rounded-2xl p-6 mb-10 animate-fade-up delay-150">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-fire flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                </div>
                <span className="text-xs font-mono text-fire font-semibold uppercase tracking-wide">Quick Answer</span>
              </div>
              <p className="font-display font-semibold text-ink text-lg mb-2">What AI tools help with resumes?</p>
              <p className="text-ink-2 font-body text-sm leading-relaxed mb-4">
                <strong>ChatGPT</strong> rewrites resume bullet points with strong action verbs. <strong>Claude</strong> writes personalised cover letters. <strong>Grammarly</strong> proofreads everything. <strong>Canva AI</strong> designs a professional-looking resume. All have free tiers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  '📝 Resume bullet points: ChatGPT',
                  '💌 Cover letters: Claude',
                  '✅ Proofreading: Grammarly',
                  '🎨 Resume design: Canva AI',
                  '🔍 Company research: Perplexity AI',
                  '💼 LinkedIn optimisation: Jasper',
                ].map((pt, i) => (
                  <div key={i} className="text-sm font-body text-ink-2">{pt}</div>
                ))}
              </div>
            </div>

            {/* Step by step */}
            <section className="mb-10">
              <div className="section-label mb-6">Workflow</div>
              <h2 className="font-display font-bold text-ink text-2xl mb-5">The AI Job Application Workflow</h2>
              <div className="space-y-3">
                {RESUME_STEPS.map((s, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-2xl border border-border p-5">
                    <div className="w-8 h-8 rounded-xl bg-fire-light border border-fire-mid flex items-center justify-center flex-shrink-0">
                      <span className="font-mono font-bold text-fire text-sm">{s.step}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-display font-bold text-ink text-base">{s.title}</span>
                        <span className="text-xs font-mono text-fire bg-fire-light border border-fire-mid rounded-full px-2 py-0.5">{s.tool}</span>
                      </div>
                      <div className="text-sm font-body text-ink-2 leading-relaxed">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ChatGPT prompt box */}
            <section className="mb-10">
              <div className="section-label mb-4">Ready to use</div>
              <h2 className="font-display font-bold text-ink text-xl mb-4">Copy-Paste ChatGPT Prompts for Your Resume</h2>
              <div className="space-y-3">
                {PROMPTS.map((p, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-border p-5">
                    <div className="text-xs font-mono text-ink-3 uppercase tracking-wide mb-2">{p.label}</div>
                    <div className="bg-canvas rounded-xl border border-border p-3 font-mono text-xs text-ink-2 leading-relaxed">
                      {p.prompt}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tools */}
            <div className="section-label mb-6">Top Picks</div>
            <h2 className="font-display font-bold text-ink text-2xl mb-6">6 Best AI Tools for Job Applications</h2>
            <div className="space-y-5">
              {tools.map(({ tool, highlight }, i) => (
                <div key={tool.slug} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <LandingToolCard tool={tool} rank={i + 1} highlight={highlight} />
                </div>
              ))}
            </div>

            {/* Why section */}
            <section className="mt-14">
              <div className="section-label mb-6">Why It Matters</div>
              <h2 className="font-display font-bold text-ink text-2xl mb-4">Why Use AI for Your Job Search?</h2>
              <div className="prose-landing">
                <p>
                  The average corporate job opening receives 250 applications. Recruiters spend an average of 7 seconds reviewing each resume before deciding whether to continue reading. Your resume needs to pass an ATS (Applicant Tracking System) scan and immediately communicate your value.
                </p>
                <p>
                  AI tools help on both fronts. ChatGPT can rewrite your resume to match keywords in the job description — dramatically improving your ATS score. Claude can write a cover letter that feels genuinely personal rather than templated. Grammarly ensures there are zero errors.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                  {[
                    { icon: '🎯', title: 'ATS optimisation', desc: 'Match keywords from job descriptions to pass automated screening' },
                    { icon: '⚡', title: 'Apply faster', desc: 'Write tailored applications in minutes instead of hours' },
                    { icon: '📈', title: 'Higher response rate', desc: 'Stronger writing and perfect formatting improve callback rates' },
                  ].map((b, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-border p-4 text-center">
                      <div className="text-3xl mb-2">{b.icon}</div>
                      <div className="font-display font-bold text-ink text-sm mb-1">{b.title}</div>
                      <div className="text-xs text-ink-3 font-body">{b.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <FAQSection faqs={FAQS} title="FAQs About AI Resume Tools" />

            <div className="mt-12 p-6 bg-white rounded-2xl border border-border">
              <div className="font-display font-semibold text-ink text-base mb-4">Related Guides</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {RELATED.map(r => (
                  <Link key={r.href} href={r.href} className="flex items-center gap-2 text-sm font-body text-ink-2 hover:text-fire transition-colors p-2 rounded-lg hover:bg-canvas">
                    <span className="text-fire">→</span> {r.label}
                  </Link>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-20 space-y-5">
              <div className="bg-white rounded-2xl border border-border p-5">
                <div className="font-display font-semibold text-ink text-sm mb-3">Tools in This Guide</div>
                <div className="space-y-1">
                  {tools.map(({ tool }, i) => (
                    <div key={tool.slug} className="flex items-center gap-2 text-sm font-body text-ink-3 py-1.5">
                      <span className="font-mono text-fire text-xs w-4">#{i+1}</span>
                      <span>{tool.emoji}</span>
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-fire-light rounded-2xl border border-fire-mid p-5">
                <div className="font-display font-bold text-ink text-sm mb-2">💼 Job seeker tip</div>
                <p className="text-xs text-ink-2 font-body leading-relaxed">
                  Always tailor your resume for <strong>each application</strong>. Use ChatGPT to match keywords from the specific job description — it takes 5 minutes and significantly improves your ATS score.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-border p-5">
                <div className="font-display font-semibold text-ink text-sm mb-3">Related Guides</div>
                <div className="space-y-2">
                  {RELATED.map(r => (
                    <Link key={r.href} href={r.href} className="block text-xs font-body text-ink-3 hover:text-fire transition-colors">→ {r.label}</Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}

const PROMPTS = [
  {
    label: 'Rewrite resume bullet points',
    prompt: 'Rewrite these resume bullet points using strong action verbs, quantify achievements where possible, and include these keywords from the job description: [paste keywords]. My bullet points: [paste yours]',
  },
  {
    label: 'Write a cover letter',
    prompt: 'Write a personalised cover letter for this role. My resume: [paste resume]. Job description: [paste JD]. Company info: [paste research]. Keep it under 300 words and make it sound human, not templated.',
  },
  {
    label: 'Interview prep',
    prompt: 'Generate the 10 most likely interview questions for a [job title] at [company name]. For each question, suggest a strong answer using the STAR method based on my experience: [paste relevant experience].',
  },
]

const RELATED = [
  { label: 'Best AI Writing Tools',       href: '/best-ai-writing-tools' },
  { label: 'Best Free AI Tools',          href: '/best-free-ai-tools' },
  { label: 'Best AI Tools for Students',  href: '/best-ai-tools-for-students' },
  { label: 'AI Tools for Beginners',      href: '/ai-tools-for-beginners' },
]
