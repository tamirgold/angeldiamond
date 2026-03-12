import { Zap, Network, Shield, LineChart } from 'lucide-react'

const advantages = [
  {
    icon: Zap,
    title: 'Technology First',
    description: 'Our portfolio companies provide cutting-edge tools that power our operations.',
  },
  {
    icon: Network,
    title: 'Integrated Systems',
    description: 'Seamless data flow between investments and operations creates unique insights.',
  },
  {
    icon: Shield,
    title: 'Proven Infrastructure',
    description: 'Battle-tested at scale across diverse property types and markets.',
  },
  {
    icon: LineChart,
    title: 'Measurable Results',
    description: 'Data-driven decision making translates to superior returns and satisfaction.',
  },
]

const Ecosystem = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-accent/5 to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-block px-4 py-2 mb-6 glass-effect rounded-full">
              <span className="text-sm text-emerald-accent font-semibold">The Ecosystem Advantage</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Where Investment Meets <span className="text-emerald-accent">Innovation</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our unique position as both investor and operator creates a powerful flywheel.
              Portfolio companies like <span className="text-emerald-accent font-semibold">betterdeal.ai</span> don't
              just receive capital—they gain real-world testing grounds and immediate enterprise customers.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Meanwhile, our managed properties benefit from proprietary technology and insights
              that traditional firms simply cannot access. This symbiotic relationship drives
              innovation and delivers measurable value across the entire ecosystem.
            </p>
          </div>

          {/* Right side - Advantage grid */}
          <div className="grid grid-cols-2 gap-6">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <div
                  key={index}
                  className="glass-effect glass-effect-hover rounded-xl p-6 group"
                >
                  <div className="w-12 h-12 mb-4 bg-emerald-accent/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-emerald-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-accent transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ecosystem
