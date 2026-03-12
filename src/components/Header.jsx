import { Building2, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#pillars', label: 'Ventures' },
    { href: '#management', label: 'Management' },
    { href: '#residential', label: 'Residential' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-lg shadow-black/5">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-emerald-accent/20">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Angel<span className="text-emerald-accent">Diamond</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-emerald-accent transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-accent text-emerald-accent rounded-lg hover:from-emerald-500 hover:to-emerald-600 hover:text-white transition-all duration-300 shadow-lg shadow-emerald-accent/10 hover:shadow-emerald-accent/30 transform hover:scale-105"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 glass-effect rounded-lg hover:bg-white/10 transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-emerald-accent" />
            ) : (
              <Menu className="w-6 h-6 text-emerald-accent" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 glass-effect rounded-xl space-y-3 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-emerald-accent transition-colors py-2 px-4 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 text-center shadow-lg shadow-emerald-accent/30"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
