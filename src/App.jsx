import { useEffect, useRef, useState } from 'react'
import {
  Phone,
  Star,
  MapPin,
  Clock,
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Quote,
  MessageCircle,
  Navigation,
  GraduationCap,
  Languages,
  BadgeCheck,
  Bone,
  Brain,
  HeartPulse,
  Baby,
  Accessibility,
  Hand,
  Activity,
  PersonStanding,
  Stethoscope,
} from 'lucide-react'

const PHONE = '+917276065838'
const PHONE_LABEL = '+91 72760 65838'
const WA_LINK = 'https://wa.me/917276065838?text=Hello%20Dr.%20Radhika%2C%20I%20would%20like%20to%20book%20a%20physiotherapy%20consultation.'
const MAPS_LINK = 'https://www.google.com/maps/search/?api=1&query=Trimurti+Advanced+Physiotherapy+Kothrud+Pune+18.5082281+73.8144578'
const MAP_EMBED = 'https://www.google.com/maps?q=18.5082281,73.8144578&z=16&output=embed'

/* ---------- scroll reveal ---------- */
function useRevealRoot() {
  const ref = useRef(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const els = root.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return ref
}

function Stars({ className = 'h-4 w-4' }) {
  return (
    <span className="flex items-center gap-0.5" aria-label="4.9 out of 5 stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`${className} fill-rust text-rust`} />
      ))}
    </span>
  )
}

const CONDITIONS = [
  { icon: Activity, title: 'Cervical spondylitis & neck pain', desc: 'Stiffness, radiating pain, headaches — treated at the root, not just the symptoms.' },
  { icon: Bone, title: 'PIVD — slipped / prolapsed disc', desc: 'Sciatica-type leg pain, back spasms, disc bulge rehab without rushing to surgery.' },
  { icon: PersonStanding, title: 'Arthritis & osteoarthritis', desc: 'Knee, hip and hand arthritis — strength, mobility and pain management for daily life.' },
  { icon: Stethoscope, title: 'Ankylosing arthritis rehab', desc: 'Long-term posture, flexibility and breathing-led rehabilitation programs.' },
  { icon: Hand, title: 'Post-surgical rehabilitation', desc: 'Post hand-surgery, orthopedic surgery recovery — swelling, stiffness and strength.' },
  { icon: Brain, title: 'Neuromuscular rehabilitation', desc: 'Balance, coordination and strength retraining after neurological setbacks.' },
  { icon: Accessibility, title: 'Elderly care — strength & balance', desc: 'Fall prevention, walking confidence, joint mobility for older adults.', highlight: true },
  { icon: Baby, title: 'Antenatal & postnatal programs', desc: 'Safe, guided exercise for pregnancy recovery and core rebuilding.' },
  { icon: HeartPulse, title: 'Osteopathy & manual therapy', desc: 'Hands-on joint and tissue work for lasting mobility and alignment.' },
]

const TESTIMONIALS = [
  { text: 'Cervical spondylitis had made even turning my neck painful. Remarkable relief within sessions — she explained the root cause so clearly.', tag: 'Cervical spondylitis', name: 'Google review', initial: 'C' },
  { text: 'After my hand surgery there was stiffness, pain and swelling. Steady improvement every week. Very personal attention.', tag: 'Post hand-surgery rehab', name: 'Google review', initial: 'H' },
  { text: 'For my elderly mother — strength, mobility and balance all improved. The team is patient and never rushes.', tag: 'Elderly care', name: 'Google review', initial: 'E' },
  { text: 'Modern equipment, latest machinery, and they actually explain what is wrong instead of just giving heat therapy.', tag: 'Root-cause approach', name: 'Google review', initial: 'M' },
  { text: 'Personalized treatment plan, not a photocopy routine. Every session built on the last one.', tag: 'Personalized plans', name: 'Google review', initial: 'P' },
  { text: 'Polite, skilled team — Dr. Reva and Dr. Sakshi along with Dr. Radhika. Full attention in every visit.', tag: 'Caring team', name: 'Google review', initial: 'T' },
]

const FAQS = [
  { q: 'Do I need a doctor’s referral to visit?', a: 'No. You can book directly on call or WhatsApp. If you have an X-ray, MRI or prescription, bring it — it helps Dr. Radhika plan faster, but it is not compulsory.' },
  { q: 'What is the consultation fee?', a: '₹500 for both clinic visits and online consultations. Treatment session charges depend on your condition and plan, explained clearly before we begin.' },
  { q: 'What are the clinic timings?', a: 'Google lists Mon–Sat 9:00 AM – 9:00 PM, Sunday closed. Practo and Apollo sometimes show narrower booking slots (e.g. afternoons). Please call or WhatsApp to confirm the day’s availability before visiting.' },
  { q: 'Do you treat elderly patients and post-surgery cases?', a: 'Yes — a large part of the practice is elderly mobility/balance care and post-surgical rehab including post hand-surgery stiffness, pain and swelling.' },
  { q: 'Which languages do you speak?', a: 'English, Hindi and Marathi — so patients and family members can all discuss the condition comfortably.' },
  { q: 'Where exactly is the clinic?', a: 'Plot no 22, Siddhaved, Ishadan Society Rd, Anand Nagar, Kothrud, Paud Road, Pune 411038 — easy to reach from Kothrud and Paud Road.' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = [
    { label: 'Conditions', href: '#conditions' },
    { label: 'About', href: '#about' },
    { label: 'Approach', href: '#approach' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit', href: '#visit' },
    { label: 'FAQ', href: '#faq' },
  ]
  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'border-b border-pine/15 bg-cream/95 shadow-lg shadow-pine/10 backdrop-blur-xl' : 'border-b border-transparent bg-gradient-to-b from-pine-deep/60 to-transparent'}`}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[72px] sm:px-8">
          <a href="#top" className="flex min-w-0 flex-col leading-none">
            <span className={`font-serif text-lg font-semibold tracking-tight sm:text-xl ${scrolled ? 'text-pine' : 'text-cream'}`}>Trimurti</span>
            <span className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] ${scrolled ? 'text-charcoal/55' : 'text-cream/65'}`}>Advanced Physiotherapy</span>
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className={`calm-link text-[13px] font-medium tracking-wide ${scrolled ? 'text-charcoal/70 hover:text-pine' : 'text-cream/80 hover:text-cream'}`}>{l.label}</a>
            ))}
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <a href={`tel:${PHONE}`} className={`text-[13px] font-semibold ${scrolled ? 'text-pine' : 'text-cream'}`}>{PHONE_LABEL}</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-rust rounded-full bg-rust px-5 py-2.5 text-[13px] font-semibold text-cream">Book visit</a>
          </div>
          <button onClick={() => setOpen(true)} aria-label="Open menu" className={`rounded-full p-2.5 transition-colors lg:hidden ${scrolled ? 'bg-pine/10 text-pine' : 'bg-cream/15 text-cream'}`}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
      <div className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className="absolute inset-0 bg-pine-deep/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div className={`absolute inset-x-0 top-0 max-h-[88dvh] overflow-y-auto rounded-b-3xl bg-cream px-5 pb-8 pt-5 transition-transform duration-500 sm:px-6 ${open ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="mb-4 flex items-center justify-between">
            <span className="font-serif text-xl font-semibold text-pine">Trimurti</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="rounded-full bg-pine/10 p-2"><X className="h-5 w-5 text-pine" /></button>
          </div>
          <div className="flex flex-col">
            {[...links, { label: 'Book visit', href: '#contact' }].map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="border-b border-pine/10 py-3 font-serif text-xl font-medium text-pine">{l.label}</a>
            ))}
          </div>
          <a href={`tel:${PHONE}`} className="btn-rust mt-5 flex items-center justify-center gap-2 rounded-full bg-rust px-6 py-3.5 text-[15px] font-semibold text-cream"><Phone className="h-4 w-4" />{PHONE_LABEL}</a>
        </div>
      </div>
    </>
  )
}

function Hero() {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setOffset(Math.min(window.scrollY * 0.12, 120)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <header id="top" className="relative overflow-hidden bg-pine-deep">
      <div className="paper absolute inset-0 opacity-60" />
      <div className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-pine-soft/40 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-[320px] w-[320px] rounded-full bg-rust/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-5 pb-14 pt-24 sm:gap-10 sm:px-8 sm:pb-16 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24">
        <div className="min-w-0">
          <p className="reveal flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/60 sm:text-xs sm:tracking-[0.2em]">
            <span className="inline-block h-px w-6 shrink-0 bg-rust sm:w-8" />
            <span className="text-balance">Kothrud, Pune — Orthopedic Physiotherapy</span>
          </p>
          <h1 className="reveal mt-4 text-balance font-serif text-4xl font-medium leading-[1.04] tracking-tight text-cream sm:mt-5 sm:text-6xl sm:leading-[1.02] lg:text-[68px]" style={{ '--reveal-delay': '80ms' }}>
            Dr. Radhika<br />Kulkarni
            <span className="mt-2 block text-lg font-normal italic text-cream/70 sm:text-2xl">MPT Ortho — calm, root-cause recovery</span>
          </h1>
          <p className="reveal mt-5 max-w-xl text-[15px] leading-relaxed text-cream/75 sm:mt-6 sm:text-base" style={{ '--reveal-delay': '160ms' }}>
            Trimurti Advanced Physiotherapy and Osteopathy. 10+ years of experience in orthopedic rehab —
            cervical pain, slipped disc, arthritis, post-surgical and elderly care — explained plainly,
            treated personally.
          </p>
          <div className="reveal mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mt-6 sm:gap-x-5 sm:gap-y-3" style={{ '--reveal-delay': '220ms' }}>
            <Stars className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="text-sm font-semibold text-cream">4.9</span>
            <span className="text-sm text-cream/60">107 Google reviews</span>
            <span className="hidden h-4 w-px bg-cream/20 sm:inline-block" />
            <span className="w-full text-[13px] text-cream/60 sm:w-auto sm:text-sm">BPT, MPT · Reg. 2013/07/PT/002883</span>
          </div>
          <div className="reveal mt-6 flex flex-col gap-2.5 sm:mt-8 sm:gap-3 lg:flex-row lg:flex-wrap" style={{ '--reveal-delay': '280ms' }}>
            <a href={`tel:${PHONE}`} className="btn-rust inline-flex w-full items-center justify-center gap-2 rounded-full bg-rust px-7 py-3.5 text-[15px] font-semibold text-cream sm:w-auto sm:py-4">
              <Phone className="h-4 w-4" /> Call {PHONE_LABEL}
            </a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-ghost inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-[15px] font-medium text-cream hover:border-cream/50 hover:bg-cream/10 sm:w-auto sm:py-4">
              <MessageCircle className="h-4 w-4" /> WhatsApp to book
            </a>
            <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="btn-ghost inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[15px] font-medium text-cream/80 hover:text-cream sm:w-auto sm:py-4">
              <Navigation className="h-4 w-4" /> Directions
            </a>
          </div>
          <div className="reveal mt-6 flex flex-col gap-2 text-[13px] text-cream/60 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2" style={{ '--reveal-delay': '340ms' }}>
            <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 shrink-0 text-rust-soft" /> ₹500 clinic & online consult</span>
            <span className="inline-flex items-center gap-1.5"><Languages className="h-4 w-4 shrink-0 text-rust-soft" /> English · Hindi · Marathi</span>
          </div>
        </div>
        <div className="reveal relative min-w-0 pb-14 sm:pb-0" style={{ '--reveal-delay': '200ms' }}>
          <div className="overflow-hidden rounded-3xl border border-cream/15 shadow-2xl shadow-black/30 sm:rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80"
              alt="Calm hands-on physiotherapy treatment"
              className="breathe h-[300px] w-full object-cover sm:h-[480px]"
              style={{ transform: `translateY(${offset * 0.15}px)` }}
              loading="eager"
            />
          </div>
          <div className="absolute inset-x-4 -bottom-2 rounded-2xl bg-cream px-4 py-3.5 shadow-xl sm:inset-x-auto sm:-bottom-5 sm:left-8 sm:right-auto sm:min-w-[320px] sm:px-5 sm:py-4">
            <div className="flex items-center gap-3">
              <p className="flex min-w-0 flex-1 items-center gap-2 text-[13px] font-semibold text-pine sm:text-sm"><Clock className="h-4 w-4 shrink-0 text-rust" /> <span className="truncate">Mon–Sat · 9 AM – 9 PM</span></p>
              <a href="#visit" className="hidden shrink-0 rounded-full bg-pine px-4 py-2 text-xs font-semibold text-cream sm:inline-block">Visit info</a>
            </div>
            <p className="mt-1 text-xs leading-snug text-charcoal/60">Sunday closed · confirm slot on call</p>
          </div>
        </div>
      </div>
    </header>
  )
}

function Conditions() {
  return (
    <section id="conditions" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="reveal text-[11px] font-semibold uppercase tracking-[0.16em] text-rust sm:text-xs sm:tracking-[0.2em]">Conditions treated</p>
            <h2 className="reveal mt-3 text-balance font-serif text-[32px] font-medium leading-[1.08] tracking-tight text-pine sm:mt-4 sm:text-5xl sm:leading-[1.05]" style={{ '--reveal-delay': '80ms' }}>
              Start with what hurts.<br /><span className="italic text-charcoal/70">We’ll trace it to the cause.</span>
            </h2>
          </div>
          <p className="reveal max-w-xs text-sm leading-relaxed text-charcoal/65" style={{ '--reveal-delay': '140ms' }}>
            No rushed 10-minute sessions. Every plan is built around your life, age and goals.
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONDITIONS.map((c, i) => {
            const Icon = c.icon
            return (
              <a
                key={c.title}
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className={`reveal card-premium group relative overflow-hidden rounded-3xl border p-5 sm:p-6 ${
                  c.highlight
                    ? 'border-pine bg-pine text-cream'
                    : 'border-pine/12 bg-white/80 text-charcoal hover:border-rust/40'
                }`}
                style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}
              >
                {c.highlight && <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-rust/20 blur-2xl" />}
                <div className="relative flex items-start justify-between gap-3">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${c.highlight ? 'bg-cream/15' : 'bg-sage-light'}`}>
                    <Icon className={`h-5 w-5 ${c.highlight ? 'text-cream' : 'text-pine'}`} />
                  </span>
                  <ArrowUpRight className={`card-arrow h-5 w-5 shrink-0 ${c.highlight ? 'text-cream' : 'text-rust'}`} />
                </div>
                <h3 className={`relative mt-4 font-serif text-lg font-medium leading-snug sm:text-xl ${c.highlight ? 'text-cream' : 'text-pine'}`}>{c.title}</h3>
                <p className={`relative mt-1.5 text-sm leading-relaxed ${c.highlight ? 'text-cream/75' : 'text-charcoal/65'}`}>{c.desc}</p>
                {c.highlight && (
                  <span className="relative mt-3 inline-block rounded-full bg-rust px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cream">Most loved</span>
                )}
              </a>
            )
          })}
        </div>
        <div className="reveal mt-6 flex flex-col items-stretch gap-3 rounded-3xl border border-rust/25 bg-white/70 p-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="text-sm leading-relaxed text-charcoal/70 sm:text-[15px]">
            <strong className="font-serif text-lg font-medium text-pine sm:text-xl">Unsure if your condition fits?</strong><br />
            Describe it on WhatsApp — you’ll get honest guidance on the right next step.
          </p>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-rust inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-rust px-6 py-3.5 text-sm font-semibold text-cream">
            Ask on WhatsApp <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 pb-12 sm:px-8 sm:pb-24">
        <hr className="hairline mb-10 sm:mb-20" />
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="reveal relative min-w-0">
            <div className="overflow-hidden rounded-3xl sm:rounded-[28px]">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80"
                alt="Guided rehabilitation exercise"
                className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[520px]"
                loading="lazy"
              />
            </div>
            <div className="mt-3 rounded-2xl bg-sage-light p-4 sm:mt-4 sm:p-5">
              <p className="font-serif text-[17px] italic leading-relaxed text-pine sm:text-lg">
                “We don’t chase only the pain. We find why it started — then rebuild from there.”
              </p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/50 sm:text-xs">— Treatment philosophy at Trimurti</p>
            </div>
          </div>
          <div className="min-w-0">
            <p className="reveal text-[11px] font-semibold uppercase tracking-[0.16em] text-rust sm:text-xs sm:tracking-[0.2em]">About</p>
            <h2 className="reveal mt-3 text-balance font-serif text-[32px] font-medium leading-[1.08] tracking-tight text-pine sm:mt-4 sm:text-5xl sm:leading-[1.05]" style={{ '--reveal-delay': '80ms' }}>
              A clinician you can<br className="hidden sm:block" /> ask questions to.
            </h2>
            <div className="reveal mt-6 space-y-4 text-[15px] leading-relaxed text-charcoal/75 sm:text-base" style={{ '--reveal-delay': '140ms' }}>
              <p>
                <strong className="font-semibold text-pine">Dr. Radhika Rahul Kulkarni (PT)</strong> — BPT, MPT in Orthopedic
                Physiotherapy (Maharashtra University, 2016), 10+ years of practice. Registered physiotherapist
                <span className="text-charcoal/60"> (2013/07/PT/002883)</span>.
              </p>
              <p>
                Her clinic, <strong className="font-semibold text-pine">Trimurti Advanced Physiotherapy and Osteopathy</strong> in
                Kothrud, is known for three things patients repeat in reviews: modern equipment, explaining the root
                cause in simple words, and plans personalised to age and lifestyle — from young disc patients to
                elderly balance care.
              </p>
            </div>
            <div className="reveal mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2" style={{ '--reveal-delay': '200ms' }}>
              <div className="card-premium flex items-start gap-3 rounded-2xl border border-pine/12 bg-white/80 p-4 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage-light"><GraduationCap className="h-5 w-5 text-pine" /></span>
                <p className="min-w-0 text-sm leading-relaxed text-charcoal/75"><strong className="font-semibold text-pine">MPT Ortho, 2016</strong><br />Maharashtra University · 10+ yrs</p>
              </div>
              <div className="card-premium flex items-start gap-3 rounded-2xl border border-pine/12 bg-white/80 p-4 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage-light"><Languages className="h-5 w-5 text-pine" /></span>
                <p className="min-w-0 text-sm leading-relaxed text-charcoal/75"><strong className="font-semibold text-pine">English · Hindi · Marathi</strong><br />Easy for patients & families</p>
              </div>
            </div>
            <div className="reveal card-premium mt-4 rounded-3xl bg-pine p-5 text-cream sm:mt-6 sm:p-6" style={{ '--reveal-delay': '260ms' }}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/60">The team</p>
              <p className="mt-2 text-[15px] leading-relaxed text-cream/85">
                Supported by associate physiotherapists <strong className="font-semibold text-cream">Dr. Reva</strong> and{' '}
                <strong className="font-semibold text-cream">Dr. Sakshi</strong> — praised in reviews for patience
                and full attention in every visit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Approach() {
  const steps = [
    { n: '01', title: 'Listen first', desc: 'Your history, your pain pattern, your daily routine. No interruptions, no jargon. Older patients especially — we take the time.' },
    { n: '02', title: 'Find the root cause', desc: 'Movement assessment, strength testing, review of scans if you have them. We explain why it hurts, in plain language.' },
    { n: '03', title: 'Rebuild with a plan', desc: 'Hands-on therapy + guided exercise + home program. Modern machinery where it helps, honest timelines throughout.' },
  ]
  return (
    <section id="approach" className="bg-sage-light/60">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-24">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div className="max-w-xl">
            <p className="reveal text-[11px] font-semibold uppercase tracking-[0.16em] text-rust sm:text-xs sm:tracking-[0.2em]">Approach</p>
            <h2 className="reveal mt-3 font-serif text-[32px] font-medium tracking-tight text-pine sm:mt-4 sm:text-5xl" style={{ '--reveal-delay': '80ms' }}>Calm. Clear. Consistent.</h2>
          </div>
          <p className="reveal max-w-sm text-sm leading-relaxed text-charcoal/65" style={{ '--reveal-delay': '140ms' }}>Recovery is not a single session — it’s a guided sequence. Here’s how every case at Trimurti moves.</p>
        </div>
        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="reveal card-premium relative overflow-hidden rounded-3xl border border-pine/12 bg-cream p-6 sm:p-7" style={{ '--reveal-delay': `${i * 100}ms` }}>
              <span className="font-serif text-5xl font-medium text-pine/10 sm:text-6xl">{s.n}</span>
              <h3 className="mt-2 font-serif text-xl font-medium text-pine sm:text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70 sm:mt-3 sm:text-[15px]">{s.desc}</p>
              <span className="mt-4 block h-1 w-10 rounded-full bg-rust" />
            </div>
          ))}
        </div>
        <div className="reveal mt-4 grid gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-4">
          {[
            { t: 'Modern equipment', d: 'Latest machinery where it genuinely helps.' },
            { t: 'Root-cause first', d: 'Explained plainly — never just heat + leave.' },
            { t: 'Personal plans', d: 'Built around age, lifestyle and goals.' },
          ].map((b) => (
            <div key={b.t} className="flex items-center gap-3 rounded-2xl bg-pine px-5 py-4">
              <BadgeCheck className="h-5 w-5 shrink-0 text-rust-soft" />
              <p className="text-sm text-cream/90"><strong className="font-semibold text-cream">{b.t}</strong> — {b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const row = [...TESTIMONIALS, ...TESTIMONIALS]
  return (
    <section id="reviews" className="overflow-hidden bg-cream">
      <div className="mx-auto max-w-6xl px-5 pt-12 sm:px-8 sm:pt-24">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div>
            <p className="reveal text-[11px] font-semibold uppercase tracking-[0.16em] text-rust sm:text-xs sm:tracking-[0.2em]">Reviews</p>
            <h2 className="reveal mt-3 font-serif text-[32px] font-medium tracking-tight text-pine sm:mt-4 sm:text-5xl" style={{ '--reveal-delay': '80ms' }}>Trusted in Kothrud.</h2>
          </div>
          <div className="reveal flex items-center gap-2.5 sm:gap-3" style={{ '--reveal-delay': '140ms' }}>
            <Stars className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <p className="text-sm text-charcoal/70"><strong className="font-semibold text-pine">4.9 / 5</strong> · 107 Google reviews</p>
          </div>
        </div>
      </div>
      <div className="reveal relative mt-6 pb-12 sm:mt-10 sm:pb-24" style={{ '--reveal-delay': '180ms' }}>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-cream to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-cream to-transparent sm:w-28" />
        <div className="drift flex w-max gap-3 px-4 sm:gap-4 sm:px-5">
          {row.map((t, i) => (
            <figure key={i} className="card-premium w-[272px] shrink-0 rounded-3xl border border-pine/12 bg-white p-5 shadow-sm sm:w-[360px] sm:p-6">
              <Quote className="h-5 w-5 text-rust" />
              <blockquote className="mt-3 text-[14px] leading-relaxed text-charcoal/80">“{t.text}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-pine/10 pt-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pine font-serif text-sm font-semibold text-cream">{t.initial}</span>
                <span>
                  <span className="block text-[13px] font-semibold text-pine">{t.name}</span>
                  <span className="block text-xs text-rust">{t.tag}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Visit() {
  return (
    <section id="visit" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 pb-12 sm:px-8 sm:pb-24">
        <hr className="hairline mb-10 sm:mb-14" />
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="min-w-0">
            <p className="reveal text-[11px] font-semibold uppercase tracking-[0.16em] text-rust sm:text-xs sm:tracking-[0.2em]">Visit</p>
            <h2 className="reveal mt-3 font-serif text-[32px] font-medium tracking-tight text-pine sm:mt-4 sm:text-5xl" style={{ '--reveal-delay': '80ms' }}>Find us in Kothrud.</h2>
            <div className="reveal mt-5 space-y-4 sm:mt-6" style={{ '--reveal-delay': '140ms' }}>
              <p className="flex items-start gap-3 text-[15px] leading-relaxed text-charcoal/80">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-rust" />
                <span className="min-w-0">Plot no 22, Siddhaved, Ishadan Society Rd, Anand Nagar, Kothrud, Paud Road, Pune, Maharashtra 411038</span>
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="card-premium rounded-3xl border border-pine/12 bg-white p-5 shadow-sm">
                  <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-pine sm:text-[13px]"><span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sage-light"><Clock className="h-4 w-4 shrink-0 text-pine" /></span> Hours</p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/75">Mon–Sat · 9:00 AM – 9:00 PM<br />Sunday · Closed</p>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal/55">Practo/Apollo show narrower slots. Call to confirm.</p>
                </div>
                <div className="card-premium rounded-3xl border border-pine/12 bg-white p-5 shadow-sm">
                  <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-pine sm:text-[13px]"><span className="flex h-8 w-8 items-center justify-center rounded-xl bg-rust/10"><BadgeCheck className="h-4 w-4 shrink-0 text-rust" /></span> Fee & languages</p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/75">₹500 — clinic & online<br />English · Hindi · Marathi</p>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal/55">Carry scans/prescriptions if you have them.</p>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
                <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="btn-rust inline-flex w-full flex-1 items-center justify-center gap-2 rounded-full bg-pine px-6 py-3.5 text-sm font-semibold text-cream sm:w-auto">
                  Open in Google Maps <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href={`tel:${PHONE}`} className="btn-ghost inline-flex w-full flex-1 items-center justify-center gap-2 rounded-full border border-pine/25 px-6 py-3.5 text-sm font-semibold text-pine hover:border-pine sm:w-auto">
                  <Phone className="h-4 w-4" /> {PHONE_LABEL}
                </a>
              </div>
            </div>
          </div>
          <div className="reveal min-w-0 overflow-hidden rounded-3xl border border-pine/12 shadow-xl sm:rounded-[28px]" style={{ '--reveal-delay': '180ms' }}>
            <iframe
              title="Trimurti Advanced Physiotherapy — map"
              src={MAP_EMBED}
              width="100%"
              height="100%"
              className="min-h-[300px] w-full sm:min-h-[380px] lg:min-h-[480px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  const bodyRefs = useRef([])
  return (
    <section id="faq" className="bg-cream">
      <div className="mx-auto max-w-3xl px-5 pb-12 sm:px-8 sm:pb-24">
        <p className="reveal text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-rust sm:text-xs sm:tracking-[0.2em]">Questions</p>
        <h2 className="reveal mt-3 text-center font-serif text-[32px] font-medium tracking-tight text-pine sm:mt-4 sm:text-5xl" style={{ '--reveal-delay': '80ms' }}>Before you visit.</h2>
        <div className="reveal mt-6 space-y-2.5 sm:mt-10 sm:space-y-3" style={{ '--reveal-delay': '140ms' }}>
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen ? 'border-rust/50 bg-white shadow-sm' : 'border-pine/12 bg-white/70 hover:border-pine/25 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-3 p-4 text-left sm:gap-4 sm:p-5"
                >
                  <span className="min-w-0 font-serif text-[17px] font-medium leading-snug text-pine sm:text-lg">{f.q}</span>
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? 'bg-rust/10' : 'bg-transparent'}`}>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-rust' : 'text-charcoal/40'}`} />
                  </span>
                </button>
                <div
                  ref={(el) => (bodyRefs.current[i] = el)}
                  style={{
                    maxHeight: isOpen
                      ? `${bodyRefs.current[i]?.scrollHeight ? bodyRefs.current[i].scrollHeight + 24 : 500}px`
                      : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                  className="overflow-hidden transition-[max-height,opacity] duration-300 ease-out"
                >
                  <p className="px-5 pb-5 text-[15px] leading-relaxed text-charcoal/70">{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [status, setStatus] = useState('idle')
  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1100)
  }
  return (
    <section id="contact" className="bg-pine-deep">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:gap-10 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <p className="reveal text-[11px] font-semibold uppercase tracking-[0.16em] text-rust-soft sm:text-xs sm:tracking-[0.2em]">Book</p>
          <h2 className="reveal mt-3 text-balance font-serif text-[32px] font-medium leading-[1.08] tracking-tight text-cream sm:mt-4 sm:text-5xl sm:leading-[1.05]" style={{ '--reveal-delay': '80ms' }}>
            Tell us what hurts.<br /><span className="italic text-cream/70">We’ll guide the rest.</span>
          </h2>
          <p className="reveal mt-4 max-w-md text-[15px] leading-relaxed text-cream/70 sm:mt-5 sm:text-base" style={{ '--reveal-delay': '140ms' }}>
            Call or WhatsApp for the fastest response — usually within clinic hours. Or leave a request here
            and we’ll call you back.
          </p>
          <div className="reveal mt-6 space-y-2.5 sm:mt-7 sm:space-y-3" style={{ '--reveal-delay': '200ms' }}>
            <a href={`tel:${PHONE}`} className="flex items-center gap-3 rounded-2xl bg-cream/10 p-3.5 transition-colors hover:bg-cream/15 sm:gap-4 sm:p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rust sm:h-11 sm:w-11"><Phone className="h-5 w-5 text-cream" /></span>
              <span className="min-w-0"><span className="block text-[11px] uppercase tracking-wider text-cream/50 sm:text-xs">Call the clinic</span><span className="block truncate font-semibold text-cream">{PHONE_LABEL}</span></span>
            </a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-cream/10 p-3.5 transition-colors hover:bg-cream/15 sm:gap-4 sm:p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream/15 sm:h-11 sm:w-11"><MessageCircle className="h-5 w-5 text-cream" /></span>
              <span className="min-w-0"><span className="block text-[11px] uppercase tracking-wider text-cream/50 sm:text-xs">WhatsApp</span><span className="block truncate font-semibold text-cream">Describe your pain, get a slot</span></span>
            </a>
          </div>
        </div>
        <div className="reveal min-w-0" style={{ '--reveal-delay': '180ms' }}>
          {status === 'sent' ? (
            <div className="rounded-3xl bg-cream p-8 text-center sm:rounded-[24px] sm:p-12">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pine"><BadgeCheck className="h-7 w-7 text-cream" /></span>
              <h3 className="mt-4 font-serif text-2xl font-medium text-pine sm:text-3xl">Request received.</h3>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-charcoal/65 sm:text-[15px]">Thank you. The clinic will call you back during working hours (Mon–Sat, 9 AM – 9 PM) to confirm your slot.</p>
              <a href={`tel:${PHONE}`} className="btn-rust mt-6 inline-flex items-center gap-2 rounded-full bg-rust px-6 py-3 text-sm font-semibold text-cream"><Phone className="h-4 w-4" /> Or call now</a>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-3xl bg-cream p-5 sm:rounded-[24px] sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/55">Name</label>
                  <input required placeholder="Your name" className="w-full rounded-xl border border-pine/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-rust focus:ring-2 focus:ring-rust/20" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/55">Phone</label>
                  <input required type="tel" placeholder="+91 …" className="w-full rounded-xl border border-pine/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-rust focus:ring-2 focus:ring-rust/20" />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/55">What are you facing?</label>
                <select className="w-full rounded-xl border border-pine/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-rust focus:ring-2 focus:ring-rust/20">
                  <option>Back / neck pain</option>
                  <option>Slipped disc / sciatica</option>
                  <option>Knee / arthritis pain</option>
                  <option>Post-surgery rehab</option>
                  <option>Elderly balance / weakness</option>
                  <option>Pregnancy-related</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/55">Message</label>
                <textarea rows={4} placeholder="Since when, where exactly, what makes it worse…" className="w-full resize-none rounded-xl border border-pine/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-rust focus:ring-2 focus:ring-rust/20" />
              </div>
              <button disabled={status === 'sending'} className="btn-rust mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-rust py-4 font-semibold text-cream disabled:opacity-60">
                {status === 'sending' ? 'Sending…' : <>Request callback <ArrowRight className="h-4 w-4" /></>}
              </button>
              <p className="mt-3 text-center text-xs text-charcoal/50">Prefer instant? <a href={WA_LINK} target="_blank" rel="noreferrer" className="font-semibold text-rust">WhatsApp us directly</a></p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-pine-deep pb-8 pt-10 sm:pt-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 border-t border-cream/10 pt-8 sm:pt-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="min-w-0">
            <p className="font-serif text-2xl font-semibold text-cream">Trimurti</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-cream/50 sm:text-xs">Advanced Physiotherapy and Osteopathy</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">Dr. Radhika Kulkarni (PT) · MPT Ortho · 10+ years · Kothrud, Pune. Root-cause rehab, explained plainly.</p>
              <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-cream/70"><Stars className="h-3.5 w-3.5" /><strong className="font-semibold text-cream">4.9 / 5</strong><span className="rounded-full bg-cream/10 px-2.5 py-0.5 text-xs font-semibold text-cream/80">107 Google reviews</span></p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rust-soft sm:text-xs">Explore</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm md:grid-cols-1 md:space-y-2 md:gap-0">
              {[['Conditions', '#conditions'], ['About', '#about'], ['Approach', '#approach'], ['Reviews', '#reviews'], ['Visit', '#visit'], ['Book', '#contact']].map(([label, href]) => (
                <li key={href}><a href={href} className="calm-link text-cream/65 hover:text-cream">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rust-soft sm:text-xs">Clinic</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-cream/65">
              <li className="max-w-[280px]">Plot no 22, Siddhaved, Ishadan Society Rd, Kothrud, Pune 411038</li>
              <li><a href={`tel:${PHONE}`} className="hover:text-cream">{PHONE_LABEL}</a> · ₹500 consult</li>
              <li>Mon–Sat 9 AM – 9 PM · Sun closed</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-cream/10 pt-6 sm:mt-10 sm:flex-row sm:items-center sm:gap-3">
          <p className="text-xs leading-relaxed text-cream/40">© 2026 Trimurti Advanced Physiotherapy. All rights reserved.</p>
          <p className="text-xs text-cream/40">BPT · MPT Ortho (2016) · Reg. 2013/07/PT/002883</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const rootRef = useRevealRoot()
  return (
    <div ref={rootRef} className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <div className="border-y border-pine/10 bg-sage-light/70">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-2 px-5 py-3.5 text-[12.5px] font-medium text-pine/80 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8 sm:px-8 sm:text-[13px]">
            <span>MPT Orthopedic Physiotherapy</span>
            <span>10+ years experience</span>
            <span>Osteopathy & manual therapy</span>
            <span className="text-rust">4.9★ rated · 107 Google reviews</span>
          </div>
        </div>
        <Conditions />
        <About />
        <Approach />
        <Reviews />
        <Visit />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
