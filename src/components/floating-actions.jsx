import { MessageCircle, Phone } from "lucide-react"

export function FloatingActions() {
  return (
    <>
      <a
        href="https://wa.me/919466049211"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>

      <a
        href="tel:+919466049211"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
      >
        <Phone className="h-5 w-5" />
        <span className="hidden sm:inline">Call Now</span>
      </a>
    </>
  )
}
