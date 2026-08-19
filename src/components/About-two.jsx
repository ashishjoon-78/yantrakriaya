'use client'

import { useState } from 'react'

import AboutImage from "../assets/about.png";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Headphones,
  Laptop,
  Menu,
  Monitor,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from 'lucide-react'

const values = [
  { icon: ShieldCheck, title: 'Reliable by design', text: 'Every device is tested, cleaned, and ready before it reaches you.' },
  { icon: Zap, title: 'Fast when it matters', text: 'From a single laptop to a full office setup, we move at your pace.' },
  { icon: Headphones, title: 'People-first support', text: 'Real help from a team that understands the pressure behind every deadline.' },
]

const steps = [
  ['01', 'Tell us what you need', 'Share your dates, device requirements, and budget.'],
  ['02', 'We prepare your setup', 'Our team matches, tests, and configures the right equipment.'],
  ['03', 'You get to work', 'Receive dependable tech on time, with support whenever you need it.'],
]

export function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Yantrakriaya home">
            <span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20"><Laptop className="size-5" /></span>
            <span className="font-mono text-lg font-bold tracking-tight">yantrakriaya<span className="text-accent">.</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#story">Our story</a>
            <a className="transition-colors hover:text-foreground" href="#values">Why us</a>
            <a className="transition-colors hover:text-foreground" href="#process">How it works</a>
            <a className="rounded-full bg-foreground px-5 py-2.5 text-background transition-transform hover:-translate-y-0.5" href="#contact">Rent equipment <ArrowRight className="ml-1 inline size-4" /></a>
          </nav>
          <button className="rounded-lg p-2 md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="mx-4 grid gap-2 rounded-2xl border border-border bg-card p-4 shadow-xl md:hidden"><a href="#story" className="p-3" onClick={() => setMenuOpen(false)}>Our story</a><a href="#values" className="p-3" onClick={() => setMenuOpen(false)}>Why us</a><a href="#process" className="p-3" onClick={() => setMenuOpen(false)}>How it works</a><a href="#contact" className="p-3 font-semibold" onClick={() => setMenuOpen(false)}>Rent equipment</a></nav>}
      </header> */}

      <section id="top" className="relative isolate flex min-h-[720px] items-center border-b border-border/60 bg-secondary/40 px-6 pb-20 pt-10 lg:min-h-[800px] lg:px-10">
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-[radial-gradient(circle_at_70%_35%,oklch(0.76_0.14_206/.3),transparent_52%)]" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          <div className="animate-rise">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"><Sparkles className="size-3.5 text-accent" /> Tech that works for you</div>
            <h1 className="max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.02] tracking-[-0.06em] sm:text-7xl lg:text-8xl">The right tech.<br /><span className="text-primary">Right when</span> you need it.</h1>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">Yantrakriaya makes high-performance laptops and PCs accessible, flexible, and hassle-free — whether you are scaling a team, launching an event, or getting work done.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4"><a href="#contact" className="rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-transform hover:-translate-y-1">Explore rental solutions <ArrowRight className="ml-2 inline size-4" /></a><a href="#story" className="font-semibold text-foreground underline decoration-border underline-offset-8 transition-colors hover:decoration-accent">Learn about us</a></div>
            <div className="mt-14 flex gap-10 border-t border-border pt-6"><div><p className="text-3xl font-bold tracking-tight">20<span className="text-accent">+</span></p><p className="mt-1 text-sm text-muted-foreground">years of experience</p></div><div><p className="text-3xl font-bold tracking-tight">10k<span className="text-accent">+</span></p><p className="mt-1 text-sm text-muted-foreground">devices delivered</p></div></div>
          </div>
          <div className="animate-float relative mx-auto w-full max-w-[560px]">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-accent/30" />
            <div className="relative aspect-[1.05] overflow-hidden rounded-[2rem] bg-primary p-6 shadow-2xl shadow-primary/25 sm:p-10">
              <div className="absolute -right-12 -top-16 size-64 rounded-full border-[28px] border-accent/20" />
              <div className="relative flex h-full flex-col justify-between"><div className="flex items-center justify-between text-primary-foreground/70"><span className="font-mono text-xs uppercase tracking-[0.2em]">Rental ready / 2026</span><Monitor className="size-5" /></div><div className="relative mx-auto w-[78%]"><div className="aspect-[1.5] rounded-xl border-[10px] border-primary-foreground/80 bg-secondary shadow-2xl"><div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,oklch(0.24_0.06_240),oklch(0.55_0.14_205))]"><span className="font-mono text-4xl font-bold text-primary-foreground/90">YK<span className="text-accent">_</span></span></div></div><div className="mx-auto h-3 w-[115%] -translate-x-[6.5%] rounded-b-xl bg-primary-foreground/80" /></div><div className="flex items-end justify-between"><p className="max-w-[200px] text-xl font-semibold leading-tight text-primary-foreground">Built for focus.<br />Backed by care.</p><div className="grid size-14 place-items-center rounded-full bg-accent text-accent-foreground"><ArrowRight className="size-6 -rotate-45" /></div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-background py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">About Us</p>
                <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-balance sm:text-4xl">
                  Welcome to Yantrakriaya Technologies Pvt. Ltd.
                </h2>
                <p className="mt-6 border-l-4 border-primary pl-5 text-lg font-medium italic leading-relaxed text-foreground/80">
                  Yantrakriaya Technologies Pvt. Ltd. is one of the fastest growing Information Technology
                  Companies, providing a wide range of products on rental basis to business houses — both large and
                  small industries, Corporates, Software Development Firms and Public Sector Undertakings.
                </p>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  We started our journey 20 years back with a group of people having varied experience from diverse
                  fields of IT Hardware, Software and Networking. During this period we have provided exceptional
                  services to clients and met their complex requirements consistently.
                </p>
                <a
                  href="#products"
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
      
              <div className="relative">
                <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-2xl border-2 border-accent/40 lg:block" />
                <img
                  src={AboutImage}
                  alt="Rows of branded laptops and desktop computers available for rent"
                  className="relative w-full rounded-2xl object-cover shadow-xl"
                />
              </div>
            </div>
          </section>

      <section id="values" className="border-y border-border bg-secondary/50 px-6 py-24 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl"><div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">The Yantrakriaya difference</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Less friction.<br />More momentum.</h2></div><p className="max-w-sm text-muted-foreground">From your first enquiry to the final return, we make every part of renting feel considered.</p></div><div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">{values.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background p-8 transition-colors hover:bg-card lg:p-10"><Icon className="size-7 text-accent" /><h3 className="mt-16 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p></article>)}</div></div></section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">How it works</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Simple from start to finish.</h2></div><div className="grid divide-y divide-border border-y border-border">{steps.map(([number, title, text]) => <div className="grid gap-5 py-7 sm:grid-cols-[80px_1fr] sm:items-start" key={number}><span className="font-mono text-sm text-accent">{number}</span><div><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 text-muted-foreground">{text}</p></div></div>)}</div></div></section>

      <section className="bg-primary px-6 py-20 text-primary-foreground lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 sm:flex-row sm:items-end"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Ready when you are</p><h2 className="mt-4 max-w-2xl text-balance text-4xl font-bold tracking-tight sm:text-6xl">Let&apos;s get the right setup in your hands.</h2></div><a id="contact" href="mailto:hello@yantrakriaya.com" className="shrink-0 rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-foreground transition-transform hover:-translate-y-1">Talk to our team <ArrowRight className="ml-2 inline size-4" /></a></div></section>

      <section className="mx-auto max-w-3xl px-6 py-24 lg:py-28"><div className="text-center"><p className="eyebrow">Good to know</p><h2 className="mt-4 text-4xl font-bold tracking-tight">Questions, answered.</h2></div><div className="mt-10 divide-y divide-border border-y border-border">{['What can I rent from Yantrakriaya?', 'Who do you serve?', 'Are devices tested before delivery?'].map((question, index) => <div key={question}><button className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold" onClick={() => setOpenFaq(openFaq === index ? null : index)}>{question}<ChevronDown className={`size-5 shrink-0 transition-transform ${openFaq === index ? 'rotate-180 text-accent' : ''}`} /></button>{openFaq === index && <p className="pb-5 pr-10 leading-7 text-muted-foreground">We offer laptops, desktops, workstations, monitors, and essential IT equipment for short-term events, projects, teams, and ongoing business needs.</p>}</div>)}</div></section>

      <footer className="border-t border-border px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-muted-foreground sm:flex-row"><p className="font-mono font-bold text-foreground">yantrakriaya<span className="text-accent">.</span></p><p>Quality equipment. Flexible rentals. Human support.</p><p>© 2026 Yantrakriaya</p></div></footer>
    </main>
  )
}

export { Check, Clock3, PackageCheck, Users }
