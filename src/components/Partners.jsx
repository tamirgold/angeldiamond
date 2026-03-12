const partners = [
  'betterdeal.ai',
  'PropTech Innovators',
  'Real Estate Intelligence',
  'Smart Buildings Inc',
  'Urban Analytics',
  'Property Systems',
]

const Partners = () => {
  return (
    <section id="partners" className="py-16 px-6 border-y border-white/10 overflow-hidden relative scroll-mt-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-accent/5 to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
            Portfolio & Partners
          </h3>
          <p className="text-gray-400">Companies we've invested in and collaborate with</p>
        </div>

        {/* Marquee effect */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-deep-slate to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-deep-slate to-transparent z-10" />

          <div className="flex space-x-16 animate-scroll">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 group"
              >
                <span className="text-2xl font-bold text-gray-600 hover:text-emerald-accent transition-colors cursor-default whitespace-nowrap inline-flex items-center">
                  <span className="w-2 h-2 bg-emerald-accent/50 rounded-full mr-3 group-hover:scale-150 transition-transform" />
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
