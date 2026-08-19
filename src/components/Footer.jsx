import { Link } from 'react-router-dom'
import { Home, User, Layers, Users, Phone, Mail, MapPin } from 'lucide-react'
import { contactInfo } from '../data/content'

export default function Footer() {
  return (
    <footer>
      <div className="bg-primary-dark text-white/90">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <span className="font-script text-3xl text-white block">
              Tanya <span className="font-display text-lg tracking-widest">BREWER</span>
            </span>
            <p className="text-xs font-display tracking-[0.25em] text-white/60 mb-4">
              CERTIFIED PUBLIC ACCOUNTANT
            </p>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Tanya has extensive experience in federal income tax matters, and now
              assists her clients in preparation of their income tax returns as well
              as income tax planning. Contact her today and get a peace of mind about
              your tax preparations and more.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <Link to="/" className="flex items-center gap-2 hover:text-white"><Home size={16}/> Home</Link>
            <Link to="/about" className="flex items-center gap-2 hover:text-white"><User size={16}/> About</Link>
            <Link to="/resources" className="flex items-center gap-2 hover:text-white"><Layers size={16}/> Resources</Link>
            <Link to="/services" className="flex items-center gap-2 hover:text-white"><Layers size={16}/> Services</Link>
            <Link to="/our-team" className="flex items-center gap-2 hover:text-white"><Users size={16}/> Our Team</Link>
            <Link to="/contact" className="flex items-center gap-2 hover:text-white"><Phone size={16}/> Contact Me</Link>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest uppercase mb-4 text-white">Contact info</h4>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail size={16}/> {contactInfo.email}
              </a>
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:text-white">
                <Phone size={16}/> {contactInfo.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16}/> {contactInfo.location}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0a3576] text-white/60 text-xs text-center py-4">
        Designed &amp; Developed with React
      </div>
    </footer>
  )
}
