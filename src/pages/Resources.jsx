import Reveal from '../components/Reveal'
import { blogPosts } from '../data/content'

export default function Resources() {
  return (
    <div>
      <section className="relative h-72 flex items-center justify-center bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary opacity-90" />
        <h1 className="relative font-display text-4xl sm:text-5xl text-white tracking-widest">RESOURCES</h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <Reveal className="text-center mb-14">
          <span className="font-script text-4xl text-primary-dark block mb-1">Blogs</span>
          <h2 className="font-display text-3xl text-ink">NEWS &amp; ARTICLES</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={(i % 3) * 0.08}>
              {/* <article className={`relative h-64 rounded-lg overflow-hidden bg-gradient-to-br ${post.color} shadow-card hover:shadow-card-hover transition-shadow group cursor-pointer`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors" />
                <div className="absolute bottom-0 p-5">
                  <span className="text-[10px] tracking-[0.2em] text-white/70 font-display">{post.tag}</span>
                  <h3 className="text-white font-display text-lg leading-snug mt-1">{post.title}</h3>
                </div>
              </article> */}
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
    </div>
  )
}
