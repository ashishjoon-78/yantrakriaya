"use client"

import { useState } from "react"
import { Mail, Phone, Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { Facebook, Linkedin, Twitter } from "./social-icons"
import { cn } from "../lib/utils"
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  // { label: "Gallery", href: "#gallery" },
  // { label: "Blog", href: "#blog" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact", href: "/#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation();
  

  return (
    <header id="home" className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-dark-section text-dark-section-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-4 py-2 text-sm sm:flex-row">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <a href="mailto:info@yantrakriaya.com" className="flex items-center gap-2 hover:text-accent">
              <Mail className="h-4 w-4 text-accent" />
              info@yantrakriaya.com
            </a>
            <a href="tel:+919599320980" className="flex items-center gap-2 hover:text-accent">
              <Phone className="h-4 w-4 text-accent" />
              +91-9466 049 211
              
            </a>
          </div>
          <div className="flex items-center gap-3">
            {[Facebook, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="text-dark-section-foreground/80 transition-colors hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border bg-background shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#home" aria-label="Yantrakiraya home">
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 xl:flex">
  {NAV.map((item) => {
    const isActive =
      (item.href === "/" && location.pathname === "/") ||
      (item.href === "/about" && location.pathname === "/about") ||
      (item.href === "/products" && location.pathname === "/products");

    return (
      <li key={item.label}>
        <HashLink
          smooth
          to={item.href}
          className={cn(
            "rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
            isActive
              ? "bg-primary text-primary-foreground"
              : "text-foreground hover:text-primary"
          )}
        >
          {item.label}
        </HashLink>
      </li>
    );
  })}
</ul>

          <button
            className="rounded-md p-2 text-foreground xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
  <ul className="flex flex-col gap-1 border-t border-border px-4 py-3 xl:hidden">
    {NAV.map((item) => {
      const isActive =
        (item.href === "/" && location.pathname === "/") ||
        (item.href === "/about" && location.pathname === "/about") ||
        (item.href === "/products" && location.pathname === "/products");

      return (
        <li key={item.label}>
          <HashLink
            smooth
            to={item.href}
            onClick={() => setOpen(false)}
            className={cn(
              "block rounded-md px-3.5 py-2.5 text-sm font-medium",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-secondary"
            )}
          >
            {item.label}
          </HashLink>
        </li>
      );
    })}
  </ul>
)}
      </div>
    </header>
  )
}
