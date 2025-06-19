"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { submitContactForm } from "@/app/actions"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"

export default function ContactForm() {
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string | null
  }>({
    type: null,
    message: null,
  })

  // Pre-select service if provided in URL
  const serviceParam = searchParams.get("service")
  let defaultService = "General Inquiry"

  if (serviceParam === "private") {
    defaultService = "Private Sessions"
  } else if (serviceParam === "group") {
    defaultService = "Group Sessions"
  } else if (serviceParam === "library") {
    defaultService = "On-Demand Library"
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    message: "",
    antiSpam: false,
    honeypot: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message: "Please fill out all required fields.",
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: "error",
        message: "Please enter a valid email address.",
      })
      return
    }

    // Anti-spam check
    if (!formData.antiSpam) {
      setFormStatus({
        type: "error",
        message: "Please confirm you are not a robot.",
      })
      return
    }

    // If honeypot field is filled, silently reject (bot detected)
    if (formData.honeypot) {
      setFormStatus({
        type: "success",
        message: "Thank you for your message. We'll be in touch soon!",
      })
      return
    }

    setIsSubmitting(true)
    setFormStatus({ type: null, message: null })

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setFormStatus({
          type: "success",
          message: "Thank you for your message. We'll be in touch soon!",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: defaultService,
          message: "",
          antiSpam: false,
          honeypot: "",
        })
      } else {
        setFormStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {formStatus.type && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            formStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          }`}
        >
          <div className="flex">
            {formStatus.type === "success" ? (
              <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
            )}
            <div>
              <h4 className="text-sm font-medium">{formStatus.type === "success" ? "Success" : "Error"}</h4>
              <p className="text-sm">{formStatus.message}</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from users, but bots will fill it out */}
        <div className="hidden">
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
              Phone (Optional)
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
              Service of Interest <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              required
            >
              <option value="Private Sessions">Private Sessions</option>
              <option value="Group Sessions">Group Sessions</option>
              <option value="On-Demand Library">On-Demand Library</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Tell us about your interests and any questions you might have..."
            required
          ></textarea>
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="antiSpam"
              name="antiSpam"
              type="checkbox"
              checked={formData.antiSpam}
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded border-gray-300 text-slate-700 focus:ring-slate-500"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="antiSpam" className="font-medium text-slate-700">
              I confirm I am not a robot <span className="text-red-500">*</span>
            </label>
            <p className="text-slate-500">This helps us prevent spam submissions.</p>
          </div>
        </div>

        <Button type="submit" className="w-full bg-slate-700 hover:bg-slate-800" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  )
}
