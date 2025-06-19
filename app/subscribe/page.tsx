"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Loader2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Script from "next/script"

export default function SubscribePage() {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">("monthly")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [shopifyScriptLoaded, setShopifyScriptLoaded] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user && !isLoading) {
      router.push("/login?from=/subscribe")
    }
  }, [user, isLoading, router])

  // Initialize Shopify Buy Button when script is loaded
  useEffect(() => {
    if (shopifyScriptLoaded && window.ShopifyBuy) {
      const client = window.ShopifyBuy.buildClient({
        domain: "your-store.myshopify.com",
        storefrontAccessToken: "your-storefront-access-token",
      })

      // Product IDs for your subscription plans
      const productIds = {
        monthly: "1234567890123", // Replace with your actual monthly plan product ID
        annual: "9876543210987", // Replace with your actual annual plan product ID
      }

      // Create the UI for monthly plan
      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent("product", {
          id: productIds.monthly,
          node: document.getElementById("monthly-subscription-container"),
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "0",
                  },
                },
                button: {
                  "background-color": "#475569",
                  "font-family": "var(--font-inter), sans-serif",
                  ":hover": {
                    "background-color": "#334155",
                  },
                  "border-radius": "6px",
                },
              },
              buttonDestination: "checkout",
              contents: {
                img: false,
                title: false,
                price: false,
                options: false,
                description: false,
                button: true,
              },
              text: {
                button: "Subscribe Monthly",
              },
            },
            cart: {
              styles: {
                button: {
                  "background-color": "#475569",
                  "font-family": "var(--font-inter), sans-serif",
                  ":hover": {
                    "background-color": "#334155",
                  },
                  "border-radius": "6px",
                },
              },
            },
          },
        })
      })

      // Create the UI for annual plan
      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent("product", {
          id: productIds.annual,
          node: document.getElementById("annual-subscription-container"),
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "0",
                  },
                },
                button: {
                  "background-color": "#475569",
                  "font-family": "var(--font-inter), sans-serif",
                  ":hover": {
                    "background-color": "#334155",
                  },
                  "border-radius": "6px",
                },
              },
              buttonDestination: "checkout",
              contents: {
                img: false,
                title: false,
                price: false,
                options: false,
                description: false,
                button: true,
              },
              text: {
                button: "Subscribe Annually",
              },
            },
            cart: {
              styles: {
                button: {
                  "background-color": "#475569",
                  "font-family": "var(--font-inter), sans-serif",
                  ":hover": {
                    "background-color": "#334155",
                  },
                  "border-radius": "6px",
                },
              },
            },
          },
        })
      })

      setIsLoading(false)
    }
  }, [shopifyScriptLoaded])

  if (!user && !isLoading) {
    return null // Will redirect to login
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-24">
      <Script
        src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"
        onLoad={() => setShopifyScriptLoaded(true)}
      />

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-cormorant">
              Choose Your Subscription
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Get unlimited access to The A/Method's premium content and transform your wellness journey
            </p>
          </div>

          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Tabs
            defaultValue="monthly"
            value={selectedPlan}
            onValueChange={(value) => setSelectedPlan(value as "monthly" | "annual")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="monthly">Monthly Plan</TabsTrigger>
              <TabsTrigger value="annual">Annual Plan (Save 20%)</TabsTrigger>
            </TabsList>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TabsContent value="monthly" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-900 font-cormorant">
                      Monthly Subscription
                    </CardTitle>
                    <CardDescription>Flexible month-to-month access</CardDescription>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-5xl font-bold tracking-tight text-slate-900 font-cormorant">$100</span>
                      <span className="ml-1 text-xl text-slate-600 font-cormorant">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex">
                        <Check className="h-5 w-5 text-slate-700 mr-2 flex-shrink-0" />
                        <span>Unlimited access to all content</span>
                      </li>
                      <li className="flex">
                        <Check className="h-5 w-5 text-slate-700 mr-2 flex-shrink-0" />
                        <span>New videos added weekly</span>
                      </li>
                      <li className="flex">
                        <Check className="h-5 w-5 text-slate-700 mr-2 flex-shrink-0" />
                        <span>Stream on any device</span>
                      </li>
                      <li className="flex">
                        <Check className="h-5 w-5 text-slate-700 mr-2 flex-shrink-0" />
                        <span>Cancel anytime</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <div id="monthly-subscription-container" className="w-full">
                      {isLoading && (
                        <Button disabled className="w-full bg-slate-700">
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading...
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="annual" className="mt-0">
                <Card>
                  <CardHeader>
                    <div className="absolute -top-4 right-4 bg-slate-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Best Value
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 font-cormorant">
                      Annual Subscription
                    </CardTitle>
                    <CardDescription>Save 20% with yearly billing</CardDescription>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-5xl font-bold tracking-tight text-slate-900 font-cormorant">$960</span>
                      <span className="ml-1 text-xl text-slate-600 font-cormorant">/year</span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">Equivalent to $80/month</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex">
                        <Check className="h-5 w-5 text-slate-700 mr-2 flex-shrink-0" />
                        <span>All benefits of monthly plan</span>
                      </li>
                      <li className="flex">
                        <Check className="h-5 w-5 text-slate-700 mr-2 flex-shrink-0" />
                        <span>Save 20% compared to monthly billing</span>
                      </li>
                      <li className="flex">
                        <Check className="h-5 w-5 text-slate-700 mr-2 flex-shrink-0" />
                        <span>Priority access to new content</span>
                      </li>
                      <li className="flex">
                        <Check className="h-5 w-5 text-slate-700 mr-2 flex-shrink-0" />
                        <span>Exclusive annual subscriber bonuses</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <div id="annual-subscription-container" className="w-full">
                      {isLoading && (
                        <Button disabled className="w-full bg-slate-700">
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading...
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
            </div>
          </Tabs>

          <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-slate-900 mb-4">Subscription FAQs</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-slate-900">When will I be charged?</h4>
                <p className="text-slate-600 text-sm mt-1">
                  Your subscription will begin immediately after checkout. For monthly plans, you'll be billed every 30
                  days. For annual plans, you'll be billed once per year.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-slate-900">Can I cancel anytime?</h4>
                <p className="text-slate-600 text-sm mt-1">
                  Yes, you can cancel your subscription at any time from your account profile. Your access will continue
                  until the end of your current billing period.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-slate-900">Can I switch between plans?</h4>
                <p className="text-slate-600 text-sm mt-1">
                  Yes, you can upgrade or downgrade your subscription at any time. Changes will take effect at the start
                  of your next billing cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
