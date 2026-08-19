import { ArrowRight } from "lucide-react";
import AboutImage from "../assets/about.png";

export function About() {
  return (
    <section id="about" className="bg-background py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">About Us</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-balance sm:text-4xl">
            Welcome to Yantrakriaya Technologies Pvt. Ltd.
          </h2>
          <p className="mt-6 border-l-4 border-primary pl-5 text-lg font-medium italic leading-relaxed text-foreground/80">
            Yantrakriaya Technologies Pvt. Ltd. is one of the fastest growing Information Technology
            Companies, providing a wide range of products on rental basis to business houses — both large and
            small industries, Corporates, Software Development Firms and Public Sector Undertakings.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            We started our journey 20 years back with a group of people having varied experience from diverse
            fields of IT Hardware, Software and Networking. During this period we have provided exceptional
            services to clients and met their complex requirements consistently.
          </p>
          <a
            href="#products"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative">
          <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-2xl border-2 border-accent/40 lg:block" />
          <img
            src={AboutImage}
            alt="Rows of branded laptops and desktop computers available for rent"
            className="relative w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
