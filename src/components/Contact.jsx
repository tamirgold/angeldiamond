import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    userType: '',
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will be in touch soon.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-emerald-accent/10 rounded-2xl">
            <Mail className="w-8 h-8 text-emerald-accent" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-emerald-accent">Connect</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you're a founder, property owner, or prospective tenant, we'd love to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 md:p-12">
          <div className="space-y-6">
            {/* User type dropdown */}
            <div>
              <label htmlFor="userType" className="block text-sm font-semibold mb-2 text-gray-300">
                I am a...
              </label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-accent focus:border-transparent text-gray-100 transition-all"
              >
                <option value="" className="bg-slate-900">Select an option</option>
                <option value="founder" className="bg-slate-900">Founder seeking investment</option>
                <option value="owner" className="bg-slate-900">Property owner seeking management</option>
                <option value="tenant" className="bg-slate-900">Prospective tenant</option>
                <option value="other" className="bg-slate-900">Other inquiry</option>
              </select>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-accent focus:border-transparent text-gray-100 transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-accent focus:border-transparent text-gray-100 transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-accent focus:border-transparent text-gray-100 transition-all resize-none"
                placeholder="Tell us about your needs..."
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-emerald-accent text-white rounded-lg font-semibold hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-accent/20"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
