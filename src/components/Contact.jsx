import { useState } from 'react'
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    userType: '',
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // Format email body
      const emailBody = `
New Contact Form Submission from AngelDiamond.com

User Type: ${formData.userType}
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `.trim()

      // Create mailto link as fallback
      const mailtoLink = `mailto:tamir@angeldiamond.com?subject=Contact Form: ${formData.userType}&body=${encodeURIComponent(emailBody)}`

      // Try to send via fetch to a backend endpoint (you can set this up later)
      // For now, we'll use Web3Forms service (free email forwarding)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with actual key from https://web3forms.com
          subject: `AngelDiamond Contact: ${formData.userType}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
          user_type: formData.userType,
          to_email: 'tamir@angeldiamond.com',
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! We will be in touch soon.',
        })
        // Reset form
        setFormData({
          userType: '',
          name: '',
          email: '',
          message: '',
        })
      } else {
        // Fallback to mailto if API fails
        window.location.href = mailtoLink
        setStatus({
          type: 'info',
          message: 'Opening your email client...',
        })
      }
    } catch (error) {
      // Fallback to mailto on error
      const emailBody = `
New Contact Form Submission

User Type: ${formData.userType}
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `.trim()

      const mailtoLink = `mailto:tamir@angeldiamond.com?subject=Contact Form: ${formData.userType}&body=${encodeURIComponent(emailBody)}`

      window.location.href = mailtoLink
      setStatus({
        type: 'info',
        message: 'Opening your email client to send the message...',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 px-6 relative scroll-mt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-accent/5 to-transparent -z-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-emerald-accent/20 to-emerald-accent/10 rounded-2xl shadow-lg shadow-emerald-accent/20 animate-pulse">
            <Mail className="w-8 h-8 text-emerald-accent" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you're a founder, property owner, or prospective tenant, we'd love to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="space-y-6">
            {/* User type dropdown */}
            <div>
              <label htmlFor="userType" className="block text-sm font-semibold mb-2 text-gray-300">
                I am a... <span className="text-emerald-accent">*</span>
              </label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-accent focus:border-transparent text-gray-100 transition-all hover:bg-white/10"
              >
                <option value="" className="bg-slate-900">Select an option</option>
                <option value="Founder seeking investment" className="bg-slate-900">Founder seeking investment</option>
                <option value="Property owner seeking management" className="bg-slate-900">Property owner seeking management</option>
                <option value="Prospective tenant" className="bg-slate-900">Prospective tenant</option>
                <option value="Other inquiry" className="bg-slate-900">Other inquiry</option>
              </select>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                Full Name <span className="text-emerald-accent">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-accent focus:border-transparent text-gray-100 transition-all hover:bg-white/10"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                Email Address <span className="text-emerald-accent">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-accent focus:border-transparent text-gray-100 transition-all hover:bg-white/10"
                placeholder="john@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                Message <span className="text-emerald-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-accent focus:border-transparent text-gray-100 transition-all resize-none hover:bg-white/10"
                placeholder="Tell us about your needs..."
              />
            </div>

            {/* Status message */}
            {status.message && (
              <div
                className={`flex items-start space-x-3 p-4 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-emerald-500/10 border border-emerald-500/20'
                    : status.type === 'error'
                    ? 'bg-red-500/10 border border-red-500/20'
                    : 'bg-blue-500/10 border border-blue-500/20'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                )}
                <p className="text-sm text-gray-300">{status.message}</p>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl shadow-emerald-accent/30 hover:shadow-emerald-accent/50 hover:scale-105 transform"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to be contacted by AngelDiamond.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
