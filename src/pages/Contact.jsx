import { Mail, Phone, MapPin, Facebook } from 'lucide-react'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { contactInfo } from '../data/content'

export default function Contact() {
  return (
    <div>
      <section className="relative h-72 flex items-center justify-center bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary opacity-90" />
        <h1 className="relative font-display text-4xl sm:text-5xl text-white tracking-widest">CONTACT US</h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14">
        <Reveal>
          <h2 className="font-display text-2xl text-ink mb-6">GET IN TOUCH</h2>
          <div className="space-y-5 text-ink-soft">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 hover:text-primary transition-colors">
              <Mail size={18} className="text-primary" /> {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 hover:text-primary transition-colors">
              <Phone size={18} className="text-primary" /> {contactInfo.phone}
            </a>
            <span className="flex items-center gap-3">
              <MapPin size={18} className="text-primary" /> {contactInfo.location}
            </span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-section text-primary hover:bg-primary hover:text-white transition-colors mt-2"
            >
              <Facebook size={16} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="bg-section rounded-xl p-8 shadow-card">
          <ContactForm withSubject />
        </Reveal>
      </section>
    </div>
  )
}
