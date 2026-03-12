import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-slate via-slate-900 to-emerald-accent/10 -z-10" />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px] -z-10" />

      {/* Enhanced decorative elements with animation */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-emerald-accent/10 rounded-full blur-3xl animate-pulse"
           style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center px-4 py-2 mb-8 glass-effect rounded-full shadow-lg shadow-emerald-accent/10 hover:shadow-emerald-accent/20 transition-all">
          <Sparkles className="w-4 h-4 text-emerald-accent mr-2 animate-pulse" />
          <span className="text-sm text-gray-300 font-medium">Where Vision Meets Execution</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          The Convergence of{' '}
          <span className="gradient-text animate-gradient">Real Estate Intelligence</span>
          {' '}and Operational Excellence
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Investing in the future of PropTech, managing the spaces of today,
          and elevating residential living.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pillars"
            className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 flex items-center space-x-2 shadow-xl shadow-emerald-accent/30 hover:shadow-emerald-accent/50 hover:scale-105 transform"
          >
            <span>Explore Our Ventures</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 glass-effect glass-effect-hover rounded-lg font-semibold flex items-center space-x-2 shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            <span>Management Services</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="mt-20 animate-bounce">
          <a href="#pillars" className="block">
            <div className="w-6 h-10 border-2 border-emerald-accent/50 rounded-full mx-auto flex items-start justify-center p-2 hover:border-emerald-accent transition-colors">
              <div className="w-1.5 h-3 bg-emerald-accent rounded-full animate-pulse" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
