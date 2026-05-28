'use client'

import { useState } from 'react'

interface FAQ {
  q: string
  a: string
}

export default function FAQSection({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQ[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mt-16">
      <div className="section-label mb-6">FAQ</div>
      <h2 className="font-display font-bold text-ink text-2xl mb-6">{title}</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="rounded-2xl border border-border bg-white overflow-hidden">
            <button
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-canvas transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-display font-semibold text-ink text-base leading-snug">{faq.q}</span>
              <span className={`w-5 h-5 flex-shrink-0 rounded-full border border-border flex items-center justify-center transition-transform ${open === i ? 'rotate-45 border-fire bg-fire-light' : ''}`}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={open === i ? '#e8440c' : '#787878'} strokeWidth="2.5" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </span>
            </button>
            {open === i && (
              <div className="px-6 pb-5 border-t border-border/50">
                <p className="text-ink-2 font-body text-sm leading-relaxed pt-4">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
