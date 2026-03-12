import { Building2 } from 'lucide-react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Building2 className="w-8 h-8 text-emerald-accent" />
            <span className="text-2xl font-bold tracking-tight">
              Angel<span className="text-emerald-accent">Diamond</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#ventures" className="text-gray-300 hover:text-emerald-accent transition-colors">
              Ventures
            </a>
            <a href="#management" className="text-gray-300 hover:text-emerald-accent transition-colors">
              Management
            </a>
            <a href="#residential" className="text-gray-300 hover:text-emerald-accent transition-colors">
              Residential
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-emerald-accent/10 border border-emerald-accent text-emerald-accent rounded-lg hover:bg-emerald-accent hover:text-white transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
