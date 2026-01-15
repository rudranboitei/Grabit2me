'use client'

import { ArrowLeft, Loader2, Mail, Send } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = new FormData()
      form.append("access_key", "ac79758c-6137-4a96-aed7-d26d3a16e1f3")
      form.append("name", formData.name)
      form.append("email", formData.email)
      form.append("subject", formData.subject)
      form.append("message", formData.message)
      form.append("from_name", "grabit2me Contact Form")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      })

      const data = await response.json()

      if (data.success) {
        toast.success("Thank you for reaching out! We'll get back to you soon.")
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error(data.message || "Form submission failed")
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-20 sm:py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-3 sm:px-4">
        <Link href="/" className="inline-flex  rounded-2xl items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white border-2 sm:border-3 border-[#1a1a1a] font-bold text-xs sm:text-sm transition-all hover:shadow-md mb-6 sm:mb-8" style={{ boxShadow: '2px 2px 0px 0px #1a1a1a' }}>
          <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-8">
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl sm:text-5xl rounded-full font-black inline-block bg-[#ff6b9d] border-3 border-[#1a1a1a] px-6 py-3 -rotate-1 shadow-md">Contact Us</h1>
            <p className="text-lg font-medium">
              Have a question or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white border-3 border-[#1a1a1a] p-6 space-y-4 shadow-lg rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary border-2 border-[#1a1a1a] flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Support</h3>
                    <p className="text-sm text-muted-foreground">We'll respond within 24-48 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#ffd93d] rounded-2xl border-3 border-[#1a1a1a] p-6 space-y-3" style={{ boxShadow: '3px 3px 0px 0px #1a1a1a' }}>
                <h3 className="font-bold">Before contacting us:</h3>
                <ul className="text-sm font-medium space-y-2">
                  <li>• Check our <Link href="/faq" className="underline font-bold hover:text-[#ff6b9d]">FAQ page</Link> for quick answers</li>
                  <li>• Review our <Link href="/terms" className="underline font-bold hover:text-[#ff6b9d]">Terms of Service</Link></li>
                  <li>• Read our <Link href="/privacy" className="underline font-bold hover:text-[#ff6b9d]">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-3 border-[#1a1a1a] p-6" style={{ boxShadow: '4px 4px 0px 0px #1a1a1a' }}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold">Name</label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={isSubmitting}
                    className="w-full h-12 px-4 rounded-full text-base font-medium bg-white border-3 border-[#1a1a1a] focus:outline-none focus:border-[#ff6b9d] transition-all disabled:opacity-50"
                    style={{ boxShadow: '2px 2px 0px 0px #1a1a1a' }}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={isSubmitting}
                    className="w-full h-12 px-4 text-base rounded-full font-medium bg-white border-3 border-[#1a1a1a] focus:outline-none focus:border-[#ff6b9d] transition-all disabled:opacity-50"
                    style={{ boxShadow: '2px 2px 0px 0px #1a1a1a' }}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-full h-12 px-4 text-base font-medium bg-white border-3 border-[#1a1a1a] focus:outline-none focus:border-[#ff6b9d] transition-all disabled:opacity-50"
                    style={{ boxShadow: '2px 2px 0px 0px #1a1a1a' }}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full rounded-2xl px-4 py-3 text-base font-medium bg-white border-3 border-[#1a1a1a] focus:outline-none focus:border-[#ff6b9d] transition-all disabled:opacity-50 resize-none"
                    style={{ boxShadow: '2px 2px 0px 0px #1a1a1a' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-2xl bg-[#1a1a1a] text-white border-3 border-[#1a1a1a] font-bold text-base flex items-center justify-center gap-2 transition-all duration-150 hover:shadow-xl active:shadow-md disabled:opacity-50"
                  style={{ boxShadow: '4px 4px 0px 0px #ff6b9d' }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
