"use client"

import { useAuth } from "@/contexts/auth-context"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Video, User, CreditCard } from "lucide-react"

export default function DashboardPage() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-slate-700" />
      </div>
    )
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-24">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 font-cormorant mb-8">
          Welcome{user ? `, ${user.name}` : " to The A/Method"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Subscription Status</CardTitle>
              <CardDescription>
                {user?.isSubscribed ? "Your subscription is active" : "No active subscription"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {user?.isSubscribed ? (
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm font-medium text-green-600">
                    {user.subscriptionType === "monthly" ? "Monthly" : "Annual"} Plan
                  </span>
                </div>
              ) : (
                <Link href="/subscribe">
                  <Button size="sm" className="bg-slate-700 hover:bg-slate-800 mt-2">
                    Subscribe Now
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Video Library</CardTitle>
              <CardDescription>Access premium content</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/videos">
                <Button size="sm" variant="outline" className="flex items-center">
                  <Video className="h-4 w-4 mr-2" />
                  Browse Videos
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Account Settings</CardTitle>
              <CardDescription>Manage your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/profile">
                <Button size="sm" variant="outline" className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  View Profile
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4 font-cormorant">Getting Started</h2>
          <p className="text-slate-600 mb-6">
            Welcome to The A/Method online platform. Here you can access premium content, manage your subscription, and
            track your wellness journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-slate-900 mb-2">New to The A/Method?</h3>
              <p className="text-sm text-slate-600 mb-4">
                Start with our beginner-friendly videos to learn the fundamentals of our approach to movement and
                wellness.
              </p>
              <Link href="/videos?level=beginner">
                <Button size="sm" variant="outline">
                  Beginner Videos
                </Button>
              </Link>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-slate-900 mb-2">Subscription Benefits</h3>
              <p className="text-sm text-slate-600 mb-4">
                Your subscription gives you unlimited access to our growing library of premium content, with new videos
                added weekly.
              </p>
              <Link href="/subscribe">
                <Button size="sm" variant="outline" className="flex items-center">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Manage Subscription
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
