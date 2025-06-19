import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="https://instagram.com" className="text-slate-600 hover:text-slate-800">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="https://facebook.com" className="text-slate-600 hover:text-slate-800">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="https://twitter.com" className="text-slate-600 hover:text-slate-800">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="https://youtube.com" className="text-slate-600 hover:text-slate-800">
            <span className="sr-only">YouTube</span>
            <Youtube className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start">
            <div className="relative h-12 w-12 mr-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bluelogo-cfT3EZt8Fegtr36lF8uRbQC1s72xSm.png"
                alt="The A/Method Logo"
                width={50}
                height={50}
                className="h-full w-full"
              />
            </div>
            <p className="text-center text-xs leading-5 text-slate-600">
              &copy; {new Date().getFullYear()} The A/Method by Francesca Antonacci. All rights reserved.
            </p>
          </div>
          <div className="mt-4 flex justify-center space-x-6 md:justify-start">
            <Link href="/privacy-policy" className="text-xs text-slate-600 hover:text-slate-800">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-slate-600 hover:text-slate-800">
              Terms of Service
            </Link>
            <Link href="/faq" className="text-xs text-slate-600 hover:text-slate-800">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
