import { NextResponse } from "next/server"

// NOTE: Square SDK is loaded dynamically so a missing package or bad import
//       will not break the build when the integration is not configured.
export async function POST(request: Request) {
  // Ensure required env vars exist
  const { SQUARE_ACCESS_TOKEN, SQUARE_LOCATION_ID, NODE_ENV } = process.env
  if (!SQUARE_ACCESS_TOKEN || !SQUARE_LOCATION_ID) {
    return NextResponse.json(
      {
        success: false,
        error: "Square integration is not configured (missing SQUARE_ACCESS_TOKEN or SQUARE_LOCATION_ID).",
      },
      { status: 501 },
    )
  }

  // Dynamically import the Square SDK (avoids build-time crashes)
  const { Client, Environment } = await import("square")

  const squareClient = new Client({
    accessToken: SQUARE_ACCESS_TOKEN,
    environment: NODE_ENV === "production" ? Environment.Production : Environment.Sandbox,
  })

  try {
    const { customerId, planId } = await request.json()

    const response = await squareClient.subscriptionsApi.createSubscription({
      idempotencyKey: `${customerId}-${planId}-${Date.now()}`,
      locationId: SQUARE_LOCATION_ID,
      planId,
      customerId,
      // In production calculate an appropriate start date & cardId
      startDate: new Date().toISOString().split("T")[0],
      cardId: "CARD_ID",
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
