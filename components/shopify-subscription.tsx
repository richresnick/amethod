"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import Script from "next/script"

// This component uses Shopify's Buy Button SDK to embed a subscription product
export default function ShopifySubscription() {
  const [isLoading, setIsLoading] = useState(true)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    if (scriptLoaded && window.ShopifyBuy) {
      const client = window.ShopifyBuy.buildClient({
        domain: "your-store.myshopify.com",
        storefrontAccessToken: "your-storefront-access-token",
      })

      // Replace with your actual product ID for the subscription
      const productId = "1234567890123"

      // Create the UI
      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent("product", {
          id: productId,
          node: document.getElementById("shopify-subscription-container"),
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "50px",
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
            toggle: {
              styles: {
                toggle: {
                  "font-family": "var(--font-inter), sans-serif",
                  "background-color": "#475569",
                  ":hover": {
                    "background-color": "#334155",
                  },
                },
              },
            },
          },
        })
        setIsLoading(false)
      })
    }
  }, [scriptLoaded])

  return (
    <>
      <Script
        src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"
        onLoad={() => setScriptLoaded(true)}
      />

      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-slate-900 font-cormorant">
            Premium Digital Subscription
          </CardTitle>
          <CardDescription>Get unlimited access to The A/Method digital content</CardDescription>
        </CardHeader>

        {isLoading ? (
          <CardContent className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-slate-700" />
          </CardContent>
        ) : (
          <CardContent>
            <div id="shopify-subscription-container"></div>
          </CardContent>
        )}
      </Card>
    </>
  )
}
