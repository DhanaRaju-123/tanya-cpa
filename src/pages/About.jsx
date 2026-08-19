import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { Link } from 'react-router-dom'
import atHerDesk from '../images/tanya.jpg';

export default function About() {
  return (
    <div>
      <section className="relative h-72 flex items-center justify-center bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary opacity-90" />
        <h1 className="relative font-display text-4xl sm:text-5xl text-white tracking-widest">ABOUT US</h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="font-script text-4xl text-primary-dark block">Tanya</span>
          <h2 className="font-display text-2xl tracking-widest text-ink -mt-1 mb-6">BREWER</h2>
          <div className="space-y-4 text-ink-soft leading-relaxed">
            <p>
              Tanya Brewer has been a licensed CPA since 1990. She retired from Federal
              Law Enforcement in 2016. She spent 28+ years working for the Internal
              Revenue Service as a Special Agent and a Revenue Agent. She retired as
              the Assistant Special Agent in Charge, and received many awards
              throughout her career for her outstanding leadership and dedication.
            </p>
            <p>
              Tanya has extensive experience in federal income tax matters, and now
              assists her clients in preparation of their income tax returns as well
              as income tax planning. Tanya is also a dedicated community volunteer,
              sharing her leadership and experience with CASA of Central Texas, Boy
              Scouts of America and the Alpha Sigma Alpha Foundation.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-block mt-8 bg-primary hover:bg-primary-dark text-white font-display text-sm tracking-widest uppercase px-7 py-3 rounded-md transition-colors"
          >
            Contact Tanya
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          {/* <div className="rounded-xl overflow-hidden shadow-card h-[420px] bg-gradient-to-br from-primary-light to-primary flex items-end p-8">
            <div className="text-white">
              <p className="font-display text-sm tracking-widest">AT HER DESK</p>
              <p className="text-xs text-white/70">New Braunfels, TX</p>
            </div>
          </div> */}
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

      <section className="bg-section py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-ink mb-3">HERE FOR YOU</h2>
            <p className="text-ink-soft max-w-lg mx-auto mb-10">
              If you have any questions that Tanya Brewer can help with, please
              contact her today. Giving you a peace of mind with your financials.
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
