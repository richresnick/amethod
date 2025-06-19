"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/contexts/auth-context"

// Update the navigation array to remove the Blog link
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const { user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsAtTop(scrollPosition < 10)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${isAtTop ? "bg-transparent" : "bg-white/90 backdrop-blur-sm shadow-sm"}`}
    >
      <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">The A/Method</span>
            <div className="relative h-20 w-20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bluelogo-cfT3EZt8Fegtr36lF8uRbQC1s72xSm.png"
                alt="The A/Method Logo"
                width={100}
                height={100}
                className="h-full w-full"
              />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isAtTop ? "text-white" : "text-slate-700"}>
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">The A/Method</span>
                  <div className="relative h-16 w-16">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bluelogo-cfT3EZt8Fegtr36lF8uRbQC1s72xSm.png"
                      alt="The A/Method Logo"
                      width={80}
                      height={80}
                      className="h-full w-full"
                    />
                  </div>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </Button>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  {user ? (
                    <>
                      <Link
                        href="/dashboard"
                        className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/profile"
                        className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Profile
                      </Link>
                      <Button
                        variant="outline"
                        className="mt-4 w-full"
                        onClick={() => {
                          logout()
                          setMobileMenuOpen(false)
                        }}
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="block rounded-md border border-input bg-background px-3 py-2 text-base font-medium text-slate-700 hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Log in
                      </Link>
                      <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="mt-4 w-full bg-slate-700 hover:bg-slate-800">Sign up</Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold ${isAtTop ? "text-white hover:text-slate-200" : "text-slate-800 hover:text-slate-900"}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          {user ? (
            <>
              <Link href="/dashboard" className={`text-sm font-medium ${isAtTop ? "text-white" : "text-slate-800"}`}>
                Dashboard
              </Link>
              <Link href="/profile" className={`text-sm font-medium ${isAtTop ? "text-white" : "text-slate-800"}`}>
                Profile
              </Link>
              <Button
                variant="outline"
                className={isAtTop ? "border-white text-white hover:bg-white/10" : ""}
                onClick={() => logout()}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  isAtTop
                    ? "border border-white text-white hover:bg-white/10"
                    : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                } h-10 px-4 py-2`}
              >
                Log in
              </Link>
              <Link href="/signup">
                <Button
                  className={isAtTop ? "bg-white text-slate-800 hover:bg-slate-200" : "bg-slate-800 hover:bg-slate-900"}
                >
                  Sign up
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
