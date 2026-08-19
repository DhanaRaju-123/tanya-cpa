import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Facebook } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { nav } from '../data/content'

export default function Navbar({ transparent }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = !transparent || scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex flex-col leading-none">
          <span className={`font-script text-3xl ${solid ? 'text-primary-dark' : 'text-white'}`}>
            Tanya <span className="font-display text-xl align-middle tracking-widest">BREWER</span>
          </span>
          <span className={`text-[10px] font-display tracking-[0.25em] ${solid ? 'text-ink-soft' : 'text-white/80'}`}>
            CERTIFIED PUBLIC ACCOUNTANT
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link font-display text-sm tracking-wider uppercase ${
                  isActive ? 'active' : ''
                } ${solid ? 'text-ink' : 'text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className={`w-9 h-9 rounded-full flex items-center justify-center ${
              solid ? 'bg-ink text-white' : 'bg-white/20 text-white'
            }`}
          >
            <Facebook size={16} />
          </a>
        </nav>

        <button
          className={`lg:hidden ${solid ? 'text-ink' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white overflow-hidden border-t border-border"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-display text-sm tracking-wider uppercase ${
                      isActive ? 'text-primary' : 'text-ink'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
