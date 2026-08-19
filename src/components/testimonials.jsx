import { Quote, Star } from "lucide-react"

const TESTIMONIALS = [
  {
    quote:
      "Wonderful support! Multisoft delivered our bulk laptop requirement on time and the machines were in excellent condition. Their team handled everything seamlessly.",
    name: "Mr. Gautam Tewari",
    role: "Co-Founder, SmartvizX",
    initials: "GT",
  },
  {
    quote:
      "We rented workstations for a demanding project and the performance was flawless. Quick delivery, fair pricing and responsive after-sales support.",
    name: "Anjali Sharma",
    role: "IT Manager, Corporate Client",
    initials: "AS",
  },
  {
    quote:
      "Reliable partner for all our IT rental needs. From servers to MacBooks, they always have the right equipment ready when we scale up our teams.",
    name: "Rahul Verma",
    role: "Operations Head, Tech Firm",
    initials: "RV",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-dark-section py-20 text-dark-section-foreground">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">What Our Customers Say!</h2>
          <p className="mt-4 leading-relaxed text-dark-section-foreground/70">
            We thank all our awesome customers! There are hundreds of happy clients — here&apos;s what a few of
            them say about us.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur"
            >
              <Quote className="h-9 w-9 text-accent" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-dark-section-foreground/90">
                {t.quote}
              </blockquote>
              <div className="mt-5 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-heading font-bold text-primary-foreground">
                  {t.initials}
                </span>
                <div>
                  <div className="font-heading font-bold">{t.name}</div>
                  <div className="text-sm text-dark-section-foreground/60">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
