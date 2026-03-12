import { TrendingUp, Building, Home, ExternalLink } from 'lucide-react'

const pillars = [
  {
    id: 'ventures',
    icon: TrendingUp,
    title: 'PropTech Ventures',
    description: 'We invest in high-growth startups redefining the built world.',
    highlight: 'Flagship Portfolio: betterdeal.ai',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    link: '#ventures',
  },
  {
    id: 'management',
    icon: Building,
    title: 'Commercial & Operational Management',
    description: 'Strategic oversight for complex property assets, ensuring maximum ROI and operational efficiency.',
    highlight: 'Data-Driven Excellence',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    link: '#management',
  },
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Portfolio',
    description: 'Curated residential management and investment. We focus on high-quality living spaces, tenant satisfaction, and long-term asset value.',
    highlight: 'Premium Living Experiences',
    gradient: 'from-purple-500/10 to-pink-500/10',
    link: '#residential',
  },
]

const PillarGrid = () => {
  return (
    <section id="pillars" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-emerald-accent">Three Pillars</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive approach to real estate excellence, powered by technology and operational expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.id}
                className="group relative glass-effect glass-effect-hover rounded-2xl p-8 overflow-hidden"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className="w-14 h-14 mb-6 bg-emerald-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-emerald-accent" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-accent transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-emerald-accent font-semibold text-sm mb-3">
                      {pillar.highlight}
                    </p>

                    <a
                      href={pillar.link}
                      className="inline-flex items-center text-sm text-gray-300 hover:text-emerald-accent transition-colors group/link"
                    >
                      <span>Learn more</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PillarGrid
