import { Building2, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 py-12 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-accent/5 to-transparent -z-10" />

      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-accent/20">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                Angel<span className="text-emerald-accent">Diamond</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              The convergence of real estate intelligence and operational excellence.
              Investing in PropTech, managing properties, and elevating residential living.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="w-4 h-4 text-emerald-accent" />
              <a
                href="mailto:tamir@angeldiamond.com"
                className="text-gray-400 hover:text-emerald-accent transition-colors"
              >
                tamir@angeldiamond.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#ventures" className="text-gray-400 hover:text-emerald-accent transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-accent rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  PropTech Ventures
                </a>
              </li>
              <li>
                <a href="#management" className="text-gray-400 hover:text-emerald-accent transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-accent rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Management Services
                </a>
              </li>
              <li>
                <a href="#residential" className="text-gray-400 hover:text-emerald-accent transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-accent rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Residential Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-emerald-accent transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-accent rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-effect glass-effect-hover rounded-lg flex items-center justify-center group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-emerald-accent group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-effect glass-effect-hover rounded-lg flex items-center justify-center group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-emerald-accent group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:tamir@angeldiamond.com"
                className="w-10 h-10 glass-effect glass-effect-hover rounded-lg flex items-center justify-center group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-emerald-accent group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="w-full px-4 py-2 glass-effect glass-effect-hover rounded-lg flex items-center justify-center space-x-2 group"
              aria-label="Back to top"
            >
              <span className="text-sm text-gray-400 group-hover:text-emerald-accent transition-colors">Back to Top</span>
              <ArrowUp className="w-4 h-4 text-emerald-accent group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {currentYear} AngelDiamond. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-accent transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-emerald-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
