import { Zap, Network, Shield, LineChart } from 'lucide-react'

const advantages = [
  {
    icon: Zap,
    title: 'Technology First',
    description: 'Our portfolio companies provide cutting-edge tools that power our operations.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Network,
    title: 'Integrated Systems',
    description: 'Seamless data flow between investments and operations creates unique insights.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Proven Infrastructure',
    description: 'Battle-tested at scale across diverse property types and markets.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: LineChart,
    title: 'Measurable Results',
    description: 'Data-driven decision making translates to superior returns and satisfaction.',
    color: 'from-purple-500 to-pink-500',
  },
]

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-24 px-6 relative overflow-hidden scroll-mt-20">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-accent/5 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-block px-4 py-2 mb-6 glass-effect rounded-full shadow-lg">
              <span className="text-sm text-emerald-accent font-semibold">The Ecosystem Advantage</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Where Investment Meets <span className="gradient-text">Innovation</span>
            </h2>

            <div className="space-y-6 mb-8">
              <p className="text-gray-400 text-lg leading-relaxed">
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

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-deep-slate" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-deep-slate" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-deep-slate" />
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-emerald-accent font-bold">15+</span> Portfolio Companies
              </p>
            </div>
          </div>

          {/* Right side - Enhanced advantage grid */}
          <div className="grid grid-cols-2 gap-6">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <div
                  key={index}
                  className="glass-effect glass-effect-hover rounded-xl p-6 group transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 mb-4 bg-gradient-to-br ${advantage.color} rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
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
