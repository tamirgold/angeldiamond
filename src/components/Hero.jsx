import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-slate via-slate-900 to-emerald-accent/10 -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-emerald-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center px-4 py-2 mb-8 glass-effect rounded-full">
          <Sparkles className="w-4 h-4 text-emerald-accent mr-2" />
          <span className="text-sm text-gray-300">Where Vision Meets Execution</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          The Convergence of{' '}
          <span className="text-emerald-accent">Real Estate Intelligence</span>
          {' '}and Operational Excellence
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Investing in the future of PropTech, managing the spaces of today,
          and elevating residential living.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pillars"
            className="group px-8 py-4 bg-emerald-accent text-white rounded-lg font-semibold hover:bg-emerald-600 transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-emerald-accent/20"
          >
            <span>Explore Our Ventures</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 glass-effect glass-effect-hover rounded-lg font-semibold flex items-center space-x-2"
          >
            <span>Management Services</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-emerald-accent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
