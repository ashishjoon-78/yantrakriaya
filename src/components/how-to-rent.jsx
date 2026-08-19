import { FileText, CreditCard, Truck, Headphones } from "lucide-react"

const STEPS = [
  { icon: FileText, title: "Request a Quote", desc: "Share your requirements and get a tailored proposal." },
  { icon: CreditCard, title: "Payment", desc: "Confirm your order with simple, transparent billing." },
  { icon: Truck, title: "Delivery", desc: "Hassle-free doorstep delivery and setup across India." },
  { icon: Headphones, title: "Post Rental Support", desc: "Ongoing technical support for the full rental term." },
]

export function HowToRent() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">How To Rent Your Equipment?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We are a professionally managed organization offering affordable, high-quality IT rental services
            across India. Enjoy hassle-free doorstep delivery of all IT equipment and services.
          </p>
        </div>

        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative flex flex-col items-center text-center">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                <Icon className="h-8 w-8" />
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
