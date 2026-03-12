import { Building2, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Building2 className="w-8 h-8 text-emerald-accent" />
              <span className="text-2xl font-bold">
                Angel<span className="text-emerald-accent">Diamond</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              The convergence of real estate intelligence and operational excellence.
              Investing in PropTech, managing properties, and elevating residential living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#ventures" className="text-gray-400 hover:text-emerald-accent transition-colors">
                  PropTech Ventures
                </a>
              </li>
              <li>
                <a href="#management" className="text-gray-400 hover:text-emerald-accent transition-colors">
                  Management Services
                </a>
              </li>
              <li>
                <a href="#residential" className="text-gray-400 hover:text-emerald-accent transition-colors">
                  Residential Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-emerald-accent transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 glass-effect glass-effect-hover rounded-lg flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-emerald-accent" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-effect glass-effect-hover rounded-lg flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-emerald-accent" />
              </a>
              <a
                href="mailto:contact@angeldiamond.com"
                className="w-10 h-10 glass-effect glass-effect-hover rounded-lg flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-emerald-accent" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {currentYear} AngelDiamond. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-accent transition-colors">
              Privacy Policy
            </a>
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
