import { Linkedin } from 'lucide-react'
import Reveal from '../components/Reveal'
import { team } from '../data/content'

export default function OurTeam() {
  return (
    <div>
      <section className="relative h-72 flex items-center justify-center bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary opacity-90" />
        <h1 className="relative font-display text-4xl sm:text-5xl text-white tracking-widest">OUR TEAM</h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              {/* <div className="rounded-lg overflow-hidden shadow-card bg-white h-full">
                <div className="h-56 bg-gradient-to-br from-primary to-primary-dark" />
                <div className="p-8 text-center">
                  <h3 className="font-display text-xl tracking-widest text-ink mb-1">
                    {member.name.toUpperCase()}
                  </h3>
                  <p className="text-primary font-display text-xs tracking-[0.2em] uppercase mb-4">
                    {member.role}
                  </p>
                  <div className="space-y-3 text-sm text-ink-soft leading-relaxed text-left">
                    {member.bio.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-section text-primary mt-6 hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div> */}
              <div className="rounded-lg overflow-hidden shadow-card bg-white h-full">

                {/* Team Member Image */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8 text-center">

                  <h3 className="font-display text-xl tracking-widest text-ink mb-1">
                    {member.name.toUpperCase()}
                  </h3>

                  <p className="text-primary font-display text-xs tracking-[0.2em] uppercase mb-4">
                    {member.role}
                  </p>

                  <div className="space-y-3 text-sm text-ink-soft leading-relaxed text-left">
                    {member.bio.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-section text-primary mt-6 hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>

                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
