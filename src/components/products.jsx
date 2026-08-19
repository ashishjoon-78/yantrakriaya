"use client"

import { useMemo, useState } from "react"
import { Check } from "lucide-react"
import { products, categories } from "../lib/products"
import { cn } from "../lib/utils"

// type Filter = "All" | ProductCategory
const FILTERS = ["All", ...categories]

export function Products() {
  const [filter, setFilter] = useState("All");

  const list = useMemo(
    () => (filter === "All" ? products : products.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="products" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Catalog</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl">Our Products on Rent</h2>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Get the latest technology at your fingertips with our rental options for computers, laptops, and
            servers. Flexible rental plans tailored to suit your short-term or long-term needs, with seamless
            delivery and support.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-background text-foreground hover:border-primary hover:text-primary",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative flex h-44 items-center justify-center overflow-hidden bg-secondary/60 p-6">
                <img
                  src={p.image || "/placeholder.svg"}
                  alt={p.name}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-base font-bold leading-snug text-balance">{p.name}</h3>
                <ul className="mt-4 flex-1 space-y-2">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Get Quote
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
