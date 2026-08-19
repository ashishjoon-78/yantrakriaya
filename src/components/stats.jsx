import { Monitor, Wrench, Handshake, Building2 } from "lucide-react";
import HeroWorkSpace from "../assets/heroWorkspace.png";

const STATS = [
  { icon: Monitor, value: "10000+", label: "Computers Rented" },
  { icon: Wrench, value: "40+", label: "Expert Technicians" },
  { icon: Handshake, value: "1000+", label: "Completed Deals" },
  { icon: Building2, value: "500+", label: "Organizations" },
]

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-dark-section py-16 text-dark-section-foreground">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${HeroWorkSpace})` }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:px-10 lg:grid-cols-4">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/90 shadow-lg">
              <Icon className="h-8 w-8 text-primary-foreground" />
            </span>
            <span className="mt-4 font-heading text-3xl font-extrabold text-accent sm:text-4xl">{value}</span>
            <span className="mt-1 text-sm font-medium text-dark-section-foreground/80">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
