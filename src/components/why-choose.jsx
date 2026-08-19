import { ShieldCheck, Zap, IndianRupee, Clock, PackageCheck, Users } from "lucide-react";
import WhyChooseImage from "../assets/whyChoose.png";

const REASONS = [
  { icon: PackageCheck, title: "Wide Product Range", desc: "Laptops, desktops, printers, tablets, servers and more." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Cost-effective rental plans with no hidden charges." },
  { icon: Zap, title: "Fast Delivery", desc: "Quick doorstep delivery and professional setup." },
  { icon: ShieldCheck, title: "Quality Assured", desc: "Well-maintained, branded and tested equipment." },
  { icon: Clock, title: "Flexible Terms", desc: "Short-term and long-term rentals to fit your needs." },
  { icon: Users, title: "Expert Support", desc: "40+ technicians ready to assist through the rental." },
]

export function WhyChoose() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Our Strengths</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl">Why Choose Yantrakriaya</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We provide a wide range of products across India, including laptops, desktops, printers, tablets,
            servers, and various other office IT equipment.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {REASONS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-2xl bg-primary/10 lg:block" />
          <img
            src={WhyChooseImage}
            alt="Professional working on a laptop rented from Multisoft"
            className="relative w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
