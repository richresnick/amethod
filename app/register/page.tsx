"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (!agreeTerms) {
      setError("You must agree to the terms and conditions")
      return
    }

    setIsLoading(true)

    try {
      // Simulate registration process
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real implementation, you would call your registration API here
      console.log("Registration data:", { name, email, password })

      // Redirect to login page after successful registration
      router.push("/login")
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignup = async () => {
    setIsLoading(true)
    try {
      // In a real implementation, this would redirect to Google OAuth
      console.log("Google signup clicked")
      // Simulate redirect
      await new Promise((resolve) => setTimeout(resolve, 500))
      window.location.href = "/api/auth/google"
    } catch (err) {
      setError("Google signup failed. Please try again.")
      setIsLoading(false)
    }
  }

  const handleShopifySignup = async () => {
    setIsLoading(true)
    try {
      // In a real implementation, this would redirect to Shopify OAuth
      console.log("Shopify signup clicked")
      // Simulate redirect
      await new Promise((resolve) => setTimeout(resolve, 500))
      window.location.href = "/api/auth/shopify"
    } catch (err) {
      setError("Shopify signup failed. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-center">
          <Link href="/" className="mb-8 inline-block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bluelogo-cfT3EZt8Fegtr36lF8uRbQC1s72xSm.png"
              alt="The A/Method Logo"
              width={80}
              height={80}
              className="h-16 w-16"
            />
          </Link>
        </div>

        <Card className="mx-auto max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold font-cormorant">Create an Account</CardTitle>
            <CardDescription>Sign up to access The A/Method content</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 pt-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleGoogleSignup}
                className="w-full bg-white text-slate-900 border border-slate-300 hover:bg-slate-100"
                disabled={isLoading}
                type="button"
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                )}
                Sign up with Google
              </Button>

              <Button
                onClick={handleShopifySignup}
                className="w-full bg-[#95BF47] text-white hover:bg-[#7EA83B]"
                disabled={isLoading}
                type="button"
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="white">
                    <path d="M15.34 15.48l.68-4.3a.59.59 0 00-.67-.67l-1.17.18a.36.36 0 01-.42-.3l-.24-1.48a.59.59 0 00-.67-.49l-1.05.18a.36.36 0 01-.42-.3L11.14 7a.59.59 0 00-.67-.49l-1.05.18a.36.36 0 01-.42-.3l-.24-1.48a.59.59 0 00-.67-.49l-1.05.18a.36.36 0 01-.42-.3L6.38 3a.59.59 0 00-.67-.49L3 3.3c-.37.06-.49.43-.43.8l2.1 13.85c.06.37.43.49.8.43l8.44-1.3c.37-.06.49-.43.43-.8z" />
                    <path d="M17.92 5.8l-.24-1.48a.59.59 0 00-.67-.49l-1.05.18a.36.36 0 01-.42-.3L15.3 2.3a.59.59 0 00-.67-.49l-2.71.43c-.37.06-.49.43-.43.8l2.1 13.85c.06.37.43.49.8.43l4.7-.74c.37-.06.49-.43.43-.8l-1.6-9.98z" />
                  </svg>
                )}
                Sign up with Shopify
              </Button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-500">Or continue with email</span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-slate-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-slate-700 hover:text-slate-900 underline">
                    terms and conditions
                  </Link>
                </label>
              </div>

              <Button type="submit" className="w-full bg-slate-700 hover:bg-slate-800" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating account...
                  </>
                ) : (
                  "Create account"
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-slate-700 hover:text-slate-900">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
