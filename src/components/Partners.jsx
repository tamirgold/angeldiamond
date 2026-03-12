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
    <section className="py-16 px-6 border-y border-white/10 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
            Portfolio & Partners
          </h3>
        </div>

        {/* Marquee effect */}
        <div className="relative">
          <div className="flex space-x-16 animate-scroll">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0"
              >
                <span className="text-2xl font-bold text-gray-600 hover:text-emerald-accent transition-colors cursor-default whitespace-nowrap">
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
