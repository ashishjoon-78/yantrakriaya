"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import hero1 from "../assets/hero1.avif";
import hero2 from "../assets/hero2.avif";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/heroo4.avif";


const SLIDES = [
  {
    title: "Upgrade",
    accent: "On",
    titleAfter: "Demand",
    subtitle:
      "Easily rent the latest computers, laptops, and printers whenever you need them. Flexible terms with fast delivery and support.",
    image: hero1,
  },
  {
    title: "Rent.",
    accent: "Work.",
    titleAfter: "Return",
    subtitle:
      "Get the latest computers, laptops, and printers on rent. Seamless delivery, setup, and support for your productivity needs.",
    image: hero2,
  },
  {
    title: "Empowering",
    accent: "Corporate",
    titleAfter: "IT",
    subtitle:
      "Flexible rentals for Computers, Laptops, Apple Products and Workstations to meet your business needs. We're here to help with all your IT B2B rental needs!",
    image: hero3,
  },
  {
    title: "Tech",
    accent: "Made",
    titleAfter: "Easy",
    subtitle:
      "We offer an extensive range of IT products and solutions across India and a wide array of office technology equipment tailored to meet corporate needs.",
      image: hero4,
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const count = SLIDES.length

  const go = useCallback((dir) => setIndex((i) => (i + dir + count) % count), [count])

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 6000)
    return () => clearInterval(t)
  }, [count])

  const slide = SLIDES[index]

  return (
    <section
      className="relative flex min-h-[560px] items-center overflow-hidden bg-dark-section text-dark-section-foreground"
      aria-roledescription="carousel"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35" aria-hidden />

      {/* Since badge */}
      <div className="absolute right-6 top-8 z-10 hidden h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-accent/70 bg-black/40 text-center backdrop-blur md:flex">
        <span className="text-[0.6rem] font-semibold uppercase tracking-widest text-accent">Since</span>
        <span className="font-heading text-2xl font-extrabold">2001</span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <div key={index} className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.title} <span className="text-accent">{slide.accent}</span>{" "}
            {slide.titleAfter && <span>{slide.titleAfter}</span>}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-dark-section-foreground/85 text-pretty sm:text-lg">
            {slide.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-md bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Read More
            </a>
            <a
              href="#contact"
              className="rounded-md bg-dark-section-foreground/10 px-7 py-3 text-sm font-semibold text-dark-section-foreground ring-1 ring-dark-section-foreground/25 backdrop-blur transition-colors hover:bg-primary hover:ring-primary"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2.5 text-dark-section-foreground backdrop-blur transition-colors hover:bg-primary"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2.5 text-dark-section-foreground backdrop-blur transition-colors hover:bg-primary"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-8 bg-accent" : "w-2.5 bg-dark-section-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
