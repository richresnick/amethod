import Image from "next/image"
import { Suspense } from "react"
import ContactForm from "@/components/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image9-6vn1vfnVEdVObVMAH8VZT6GEH43F6c.jpeg"
            alt="Contact The A/Method"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/40" />
        </div>
        <div className="container relative z-10 mx-auto px-6 py-32 md:py-40 text-center lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-cormorant">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-white">
              Have questions about our services or ready to begin your wellness journey? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-cormorant">Get in Touch</h2>
              <p className="mt-6 text-lg text-slate-600">
                We're here to answer any questions you might have about The A/Method and our services. Fill out the form
                and we'll get back to you as soon as possible.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                      <Mail className="h-6 w-6 text-slate-700" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900">Email</h3>
                    <p className="mt-1 text-slate-600">
                      <a href="mailto:francesca@theamethod.com" className="hover:text-slate-900">
                        francesca@theamethod.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                      <Phone className="h-6 w-6 text-slate-700" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900">Phone</h3>
                    <p className="mt-1 text-slate-600">
                      <a href="tel:+18584057365" className="hover:text-slate-900">
                        (858) 405-7365
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                      <MapPin className="h-6 w-6 text-slate-700" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900">Location</h3>
                    <p className="mt-1 text-slate-600">New York City, NY</p>
                    <p className="text-slate-600">Available for sessions in-person and virtually</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-medium text-slate-900">Follow Us</h3>
                <div className="mt-4 flex space-x-6">
                  <a href="#" className="text-slate-500 hover:text-slate-900">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-slate-500 hover:text-slate-900">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 font-cormorant">Send Us a Message</h3>
              <div className="mt-8">
                <Suspense fallback={<FormSkeleton />}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Loading skeleton for the form
function FormSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <div className="h-5 w-20 bg-slate-200 rounded mb-2"></div>
          <div className="h-10 bg-slate-200 rounded w-full"></div>
        </div>
        <div>
          <div className="h-5 w-20 bg-slate-200 rounded mb-2"></div>
          <div className="h-10 bg-slate-200 rounded w-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <div className="h-5 w-20 bg-slate-200 rounded mb-2"></div>
          <div className="h-10 bg-slate-200 rounded w-full"></div>
        </div>
        <div>
          <div className="h-5 w-20 bg-slate-200 rounded mb-2"></div>
          <div className="h-10 bg-slate-200 rounded w-full"></div>
        </div>
      </div>

      <div>
        <div className="h-5 w-20 bg-slate-200 rounded mb-2"></div>
        <div className="h-32 bg-slate-200 rounded w-full"></div>
      </div>

      <div className="flex items-start">
        <div className="h-5 w-5 bg-slate-200 rounded mr-3"></div>
        <div className="flex-1">
          <div className="h-5 w-40 bg-slate-200 rounded mb-1"></div>
          <div className="h-4 w-60 bg-slate-200 rounded"></div>
        </div>
      </div>

      <div className="h-10 bg-slate-300 rounded w-full"></div>
    </div>
  )
}
