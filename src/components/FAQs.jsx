"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "What products do you provide on rent?",
    answer:
      "We offer laptops, desktops, workstations, servers, printers, Apple products, networking devices, UPS systems, and other IT equipment for businesses.",
  },
  {
    question: "Who can rent equipment from Yantrakiraya?",
    answer:
      "Our services are exclusively for businesses, startups, educational institutions, government organizations, and corporate clients. We also provide rentals for individual use.",
  },
  {
    question: "What is the minimum rental period?",
    answer:
      "We provide flexible rental plans ranging from short-term requirements to long-term enterprise contracts. Our team will recommend the best plan based on your needs.",
  },
  {
    question: "Do you provide installation and technical support?",
    answer:
      "Yes. Our team delivers, installs, configures, and provides technical support throughout the rental period to ensure uninterrupted business operations.",
  },
  {
    question: "Can I rent equipment in bulk?",
    answer:
      "Absolutely. We specialize in bulk IT rentals for corporate offices, events, training programs, examinations, conferences, and project-based deployments.",
  },
  {
    question: "Which cities do you serve?",
    answer:
      "We provide IT rental services across major cities in India. Contact our team to confirm availability for your location.",
  },
];

export function FAQs() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faqs" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            FAQs
          </p>

          <h2 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground leading-relaxed">
            Find answers to the most common questions about our IT equipment
            rental services. If you need more information, feel free to contact
            our team.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-5">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                {open === index ? (
                  <Minus className="h-5 w-5 text-primary" />
                ) : (
                  <Plus className="h-5 w-5 text-primary" />
                )}
              </button>

              {open === index && (
                <div className="border-t border-border px-6 py-5 text-muted-foreground leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}