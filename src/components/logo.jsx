import { cn } from "../lib/utils"
import { Laptop } from "lucide-react"

export function Logo({ className, dark = false }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="relative flex h-11 w-11 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-90" />
        <span className="absolute inset-[3px] rounded-full bg-background" />
        <Laptop className="relative h-5 w-5 text-primary" strokeWidth={2.4} aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-lg font-extrabold tracking-tight",
            dark ? "text-dark-section-foreground" : "text-foreground",
          )}
        >
          YANTRAKIRAYA
          <sup className="ml-0.5 text-[0.5rem] font-bold">™</sup>
        </span>
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-accent">
          Technologies Pvt. Ltd.
        </span>
        <span
          className={cn(
            "text-[0.55rem] font-medium italic",
            dark ? "text-dark-section-foreground/60" : "text-muted-foreground",
          )}
        >
          — IT Rentals Made Easy —
        </span>
      </span>
    </div>
  )
}
