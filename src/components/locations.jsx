import { MapPin } from "lucide-react"

const CITIES = [
  "New Delhi",
  "Gurugram",
  "Noida",
  "Mumbai",
  "Pune",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Chandigarh",
]

export function Locations() {
  return (
    <section id="locations" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">Our Locations</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            We deliver IT rental equipment and on-site support across major cities in India.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {CITIES.map((city) => (
            <div
              key={city}
              className="flex items-center gap-3 rounded-xl border border-border bg-secondary/50 px-5 py-4 transition-colors hover:border-primary hover:bg-secondary"
            >
              <MapPin className="h-5 w-5 shrink-0 text-accent" />
              <span className="font-medium">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
