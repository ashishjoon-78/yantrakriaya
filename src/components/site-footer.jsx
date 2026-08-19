import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { Logo } from "./logo";
import { Facebook, Linkedin, Twitter } from "./social-icons";

const QUICK = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

const COMPANY = [
  { label: "Enquire Now", href: "#contact" },
  { label: "Contact", href: "#contact" },
  { label: "Our Locations", href: "#locations" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export function SiteFooter() {
  return (
    <footer className="bg-dark-section text-dark-section-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-4">
        {/* Company Info */}
        <div>
          <Logo dark />

          <p className="mt-5 flex items-start gap-2 text-sm text-dark-section-foreground/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>
              1, First-Floor, Bhangrola,
              <br />
              Farukhnagar, Haryana , India.
            </span>
          </p>

          <p className="mt-4 text-sm leading-relaxed text-dark-section-foreground/60">
            The company aspires to grow by implementing specific projects in the
            area of Computer Rentals, Hardware Integration and Network Solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading text-lg font-bold">Quick Links</h3>

          <ul className="mt-5 space-y-3">
            {QUICK.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="flex items-center gap-1.5 text-sm text-dark-section-foreground/70 transition-colors hover:text-accent"
                >
                  <ChevronRight className="h-4 w-4 text-accent" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-heading text-lg font-bold">Company</h3>

          <ul className="mt-5 space-y-3">
            {COMPANY.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-1.5 text-sm text-dark-section-foreground/70 transition-colors hover:text-accent"
                >
                  <ChevronRight className="h-4 w-4 text-accent" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-lg font-bold">Get In Touch</h3>

          <a
            href="mailto:info@yantrakriaya.com"
            className="mt-5 flex items-center gap-2 text-sm font-semibold hover:text-accent"
          >
            <Mail className="h-4 w-4 text-accent" />
            info@yantrakriaya.com
          </a>

          <a
            href="tel:+919599320980"
            className="mt-3 flex items-center gap-2 text-sm font-semibold hover:text-accent"
          >
            <Phone className="h-4 w-4 text-accent" />
            +91-9289 390 789
          </a>

          <div className="mt-5 flex gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
            >
              <Facebook className="h-4 w-4" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-sm text-dark-section-foreground/60 md:px-10">
          All Rights Reserved. © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-dark-section-foreground">
            Yantrakriaya Technologies Pvt. Ltd.
          </span>
        </div>
      </div>
    </footer>
  );
}