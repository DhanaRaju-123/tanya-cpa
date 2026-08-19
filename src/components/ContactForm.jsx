import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm({ withSubject }) {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sent')
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input
        type="text"
        required
        placeholder="Your Name*"
        className="w-full border border-border rounded-md px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
      />
      <input
        type="tel"
        required
        placeholder="Your Number*"
        className="w-full border border-border rounded-md px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
      />
      <input
        type="email"
        required
        placeholder="Your Email*"
        className="w-full border border-border rounded-md px-4 py-3 text-sm focus:border-primary outline-none transition-colors sm:col-span-2"
      />
      {withSubject && (
        <input
          type="text"
          placeholder="Subject*"
          className="w-full border border-border rounded-md px-4 py-3 text-sm focus:border-primary outline-none transition-colors sm:col-span-2"
        />
      )}
      <textarea
        required
        placeholder={withSubject ? 'Message *' : 'Your message*'}
        rows={5}
        className="w-full border border-border rounded-md px-4 py-3 text-sm focus:border-primary outline-none transition-colors sm:col-span-2"
      />
      <div className="sm:col-span-2 flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="bg-primary hover:bg-primary-dark text-white font-display text-sm tracking-widest uppercase px-8 py-3 rounded-md transition-colors"
        >
          Submit
        </motion.button>
        {status === 'sent' && (
          <span className="text-success text-sm">Thanks — we'll be in touch shortly.</span>
        )}
      </div>
    </form>
  )
}
