import { NextResponse } from "next/server"
import { Client, Environment } from "square"

// Initialize the Square client
const squareClient = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: process.env.NODE_ENV === "production" ? Environment.Production : Environment.Sandbox,
})

export async function POST(request: Request) {
  try {
    const { customerId, planId } = await request.json()

    // Create a subscription
    const response = await squareClient.subscriptionsApi.createSubscription({
      idempotencyKey: `${customerId}-${planId}-${Date.now()}`,
      locationId: process.env.SQUARE_LOCATION_ID!,
      planId: planId,
      customerId: customerId,
      startDate: "2023-01-01", // You would use a dynamic date here
      cardId: "CARD_ID", // You would get this from the payment form
    })

    return NextResponse.json({
      success: true,
      subscription: response.result.subscription,
    })
  } catch (error) {
    console.error("Error creating subscription:", error)
    return NextResponse.json({ success: false, error: "Failed to create subscription" }, { status: 500 })
  }
}
