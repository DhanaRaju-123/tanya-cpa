import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { services } from '../data/content'


export default function Services() {
  return (
    <div>
      <section className="relative h-72 flex items-center justify-center bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary opacity-90" />
        <h1 className="relative font-display text-4xl sm:text-5xl text-white tracking-widest">SERVICES</h1>
      </section>

      {/* {services.map((s, i) => (
        <section
          key={s.title}
          className={`${i % 2 === 0 ? 'bg-white' : 'bg-section'}`}
        >
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="rounded-xl h-72 shadow-card bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
                <s.icon className="text-white" size={64} strokeWidth={1.2} />
              </div>
            </Reveal>
            <Reveal delay={0.1} className={i % 2 === 1 ? 'lg:order-1' : ''}>
              <span className="inline-block bg-primary text-white font-display text-sm tracking-widest uppercase px-4 py-2 rounded mb-4">
                {s.title}
              </span>
              <div className="space-y-3 text-ink-soft leading-relaxed">
                {s.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))} */}
      {/* {services.map((s, i) => (
        <section
          key={s.title}
          className={`${i % 2 === 0 ? 'bg-white' : 'bg-section'}`}
        >
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="rounded-xl h-72 shadow-card overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal
              delay={0.1}
              className={i % 2 === 1 ? 'lg:order-1' : ''}
            >
              <span className="inline-block bg-primary text-white font-display text-sm tracking-widest uppercase px-4 py-2 rounded mb-4">
                {s.title}
              </span>

              <div className="space-y-3 text-ink-soft leading-relaxed">
                {s.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </Reveal>

          </div>
        </section>
      ))} */}
      {services.map((s, i) => (
        <section
          key={s.title}
          className={i % 2 === 0 ? 'bg-white' : 'bg-section'}
        >
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="rounded-xl h-72 shadow-card overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal
              delay={0.1}
              className={i % 2 === 1 ? 'lg:order-1' : ''}
            >
              <span className="inline-block bg-primary text-white font-display text-sm tracking-widest uppercase px-4 py-2 rounded mb-4">
                {s.title}
              </span>
              <div className="space-y-3 text-ink-soft leading-relaxed">
                {s.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </Reveal>

          </div>
        </section>
      ))}
      

      <section className="bg-primary-light/50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-ink mb-3">WANTING TO KNOW MORE...?</h2>
            <p className="text-ink-soft max-w-lg mx-auto mb-10">
              Contact Tanya Brewer CPA today and get a peace of mind that your tax
              questions are handled by experience and knowledge of someone who cares!
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>

  )
}
