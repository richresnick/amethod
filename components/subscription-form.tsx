"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export default function SubscriptionForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubscribe = async () => {
    setIsLoading(true)

    try {
      // In a real implementation, you would:
      // 1. Collect payment information using Square's Web Payments SDK
      // 2. Create a customer if they don't exist
      // 3. Call your API endpoint to create the subscription

      const response = await fetch("/api/square/create-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerId: "CUSTOMER_ID", // You would get this from authentication
          planId: "PREMIUM_MONTHLY", // Your subscription plan ID
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Subscription created!",
          description: "Your subscription has been successfully created.",
        })
      } else {
        throw new Error(data.error || "Failed to create subscription")
      }
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: "Error",
        description: "There was a problem creating your subscription. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-slate-900 font-cormorant">Premium Digital Subscription</CardTitle>
        <CardDescription>Get unlimited access to The A/Method digital content</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-center mb-6">
          <span className="text-5xl font-bold tracking-tight text-slate-900 font-cormorant">$100</span>
          <span className="text-xl text-slate-600 font-cormorant">/month</span>
        </div>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center">
            <svg className="h-5 w-5 text-slate-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>50+ premium video sessions</span>
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 text-slate-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>New content weekly</span>
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 text-slate-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Stream on any device</span>
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 text-slate-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Cancel anytime</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-slate-700 hover:bg-slate-800" onClick={handleSubscribe} disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
            </>
          ) : (
            "Subscribe Now"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
