"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="bg-secondary py-20">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 md:px-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Need Laptops, Computers on Rent?
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-balance sm:text-4xl">
            You have reached the right place for your bulk rental needs.
          </h2>
          <p className="mt-6 font-semibold text-primary">Sorry, we don&apos;t cater to individuals.</p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            We invite you to submit a request for a free proposal tailored to meet your specific needs. By
            filling out the form and submitting it to us, you&apos;ll provide us with the details to better
            understand your requirements. Once we receive your information, one of our dedicated
            representatives will reach out to you promptly.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our team is committed to offering personalized assistance to help you find the best solution for
            your needs. We understand that time is important, and our goal is to respond quickly and provide
            the support and guidance you require to move forward efficiently.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <CheckCircle2 className="h-14 w-14 text-primary" />
              <h3 className="font-heading text-xl font-bold">Thank you!</h3>
              <p className="text-muted-foreground">
                Your request has been received. A representative will reach out to you shortly.
              </p>
            </div>
          ) : (
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <h3 className="font-heading text-xl font-bold">Request a Free Proposal</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Company Name" name="company" placeholder="Your company" />
                <Field label="Contact Person" name="name" placeholder="Full name" />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                <Field label="Phone" name="phone" type="tel" placeholder="+91-" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" htmlFor="product">
                    Product Needed
                  </label>
                  <select
                    id="product"
                    name="product"
                    className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option>Laptops</option>
                    <option>Desktops</option>
                    <option>Servers</option>
                    <option>Workstations</option>
                    <option>Apple Products</option>
                    <option>UPS / Power</option>
                  </select>
                </div>
                <Field label="Quantity" name="qty" type="number" placeholder="e.g. 25" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" htmlFor="message">
                  Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about your rental duration and requirements"
                  className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="mt-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Submit Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  )
}
