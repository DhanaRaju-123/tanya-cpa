import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { services, blogPosts, testimonials } from '../data/content'
import IMG1 from '../images/02.jpg'
import IMG2 from '../images/03.jpg'
import IMG3 from '../images/06.jpg'
import IMG4 from '../images/tanya.jpg'
import atHerDesk from '../images/tanya.jpg';


const gallery = [
  { title: 'Family day out', image: IMG1 },
  { title: 'Community volunteering', image: IMG2 },
  { title: 'Coastal getaway', image: IMG3 },
  { title: 'At the office', image: IMG4 },
]

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] flex items-center ">
   
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src={`${import.meta.env.BASE_URL}videos/monstera-hero.mp4`}
            type="video/mp4"
          />
        </video>
        

        <div className="relative max-w-7xl mx-auto px-6 items-center overflow-hidden w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <span className="font-script text-5xl sm:text-6xl text-white block">Tanya</span>
            <h1 className="font-display text-2xl sm:text-3xl tracking-[0.15em] text-white -mt-2">BREWER</h1>
            <div className="w-24 h-px bg-white/40 my-4" />
            <p className="font-display tracking-[0.3em] text-primary-light text-sm mb-8">
              CERTIFIED PUBLIC ACCOUNTANT
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary-dark font-display tracking-widest text-sm uppercase px-7 py-3 rounded-md hover:bg-primary-light transition-colors"
            >
              Contact Tanya <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal delay={0.15}>
            <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-4">
            28+ YEARS WORKING FOR THE<br />INTERNAL REVENUE SERVICE
          </h2>
          <p className="text-ink-soft leading-relaxed">
            Tanya has extensive experience in federal income tax matters, and now
            assists her clients in preparation of their income tax returns as well
            as income tax planning. Contact her today and get a peace of mind about
            your tax preparations and more.
          </p>
        </Reveal>
        <Reveal>
          
          <div
            className="relative rounded-xl overflow-hidden shadow-card h-[420px] flex items-end p-8 bg-cover bg-center"
            style={{
              backgroundImage: `url(${atHerDesk})`,
            }}
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/25" />

            <div className="relative z-10 text-white">
              <p className="font-display text-sm tracking-widest">
                AT HER DESK
              </p>

              <p className="text-xs text-white/70">
                New Braunfels, TX
              </p>
            </div>
          </div>
      
        </Reveal>
     
      </section>

      {/* SERVICES */}
      <section className="bg-section py-20">
        <div className="max-w-7xl mx-auto px-6">

          <Reveal className="flex items-center gap-4 mb-12">
            <span className="w-3 h-3 rounded-full bg-primary" />
            <h2 className="font-display text-3xl text-ink">
              SERVICES WE OFFER
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden shadow-card">

            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06} y={16}>
                <div className="bg-white p-8 h-full hover:bg-primary-light/40 transition-colors">

                  {/* Service Image */}
                  <div className="w-12 h-12 rounded-lg overflow-hidden mb-4">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display text-lg text-ink mb-2">
                    {s.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {s.blurb}
                  </p>

                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* RESOURCES PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <Reveal className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-display text-3xl text-ink">BLOGS &amp; NEWS</h2>
          <Link to="/resources" className="text-primary font-display text-sm tracking-widest uppercase inline-flex items-center gap-2">
            View More News <ArrowRight size={14} />
          </Link>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
             
              
              <div className="relative h-64 rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer">

                {/* Background Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

                {/* Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 p-5 z-10">
                  <span className="text-[10px] tracking-[0.2em] text-white/80 font-display">
                    {post.tag}
                  </span>

                  <h3 className="text-white font-display text-lg leading-snug mt-1">
                    {post.title}
                  </h3>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary-light/50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-ink mb-12">
              WHAT OUR CUSTOMERS SAID <span className="text-primary">ABOUT US</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-lg shadow-card p-6 h-full flex flex-col items-center">
                  <Quote className="text-primary mb-3" size={22} />
                  <p className="text-sm text-ink-soft leading-relaxed mb-4">"{t.quote}"</p>
                  <span className="font-display text-xs tracking-widest text-ink">{t.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {gallery.map((item, i) => (
          <div key={item.title} className="relative h-56 md:h-72 overflow-hidden group">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',

              }}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors flex items-end p-4">
              <span className="text-white text-xs font-display tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <Reveal className="text-center mb-10">
          <h2 className="font-display text-3xl text-ink mb-3">LET'S GET IN TOUCH</h2>
          <p className="text-ink-soft max-w-lg mx-auto">
            Contact Tanya Brewer CPA today and get a peace of mind that your tax
            questions are handled by experience and knowledge of someone who cares!
          </p>
        </Reveal>
        <Reveal delay={0.15} className="max-w-3xl mx-auto">
          <ContactForm />
        </Reveal>
      </section>
    </div>
  )
}
