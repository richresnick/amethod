"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Loader2, AlertCircle, Check, X } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ProfilePage() {
  const { user, isLoading, logout } = useAuth()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [updateSuccess, setUpdateSuccess] = useState(false)
  const [updateError, setUpdateError] = useState<string | null>(null)
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false)
  const [changeDialogOpen, setChangeDialogOpen] = useState(false)

  useEffect(() => {
    if (user) {
      setName(user.name)
      setEmail(user.email)
    }
  }, [user])

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)
    setUpdateSuccess(false)
    setUpdateError(null)

    try {
      // In a real implementation, you would call your API to update the user profile
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

      setUpdateSuccess(true)
      setTimeout(() => setUpdateSuccess(false), 3000)
    } catch (error) {
      setUpdateError("Failed to update profile. Please try again.")
    } finally {
      setIsUpdating(false)
    }
  }

  const handleCancelSubscription = async () => {
    try {
      // In a real implementation, you would call your API to cancel the subscription
      await fetch("/api/subscriptions/cancel", {
        method: "POST",
      })

      setCancelDialogOpen(false)
      // Refresh user data to reflect subscription changes
      window.location.reload()
    } catch (error) {
      console.error("Error canceling subscription:", error)
    }
  }

  const handleChangeSubscription = async (newType: "monthly" | "annual") => {
    try {
      // In a real implementation, you would call your API to change the subscription
      await fetch("/api/subscriptions/change", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: newType }),
      })

      setChangeDialogOpen(false)
      // Refresh user data to reflect subscription changes
      window.location.reload()
    } catch (error) {
      console.error("Error changing subscription:", error)
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-slate-700" />
      </div>
    )
  }

  if (!user) {
    return null // Will be handled by middleware redirect
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 font-cormorant mb-8">Your Profile</h1>

          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="account">Account Settings</TabsTrigger>
              <TabsTrigger value="subscription">Subscription</TabsTrigger>
            </TabsList>

            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>Update your account details</CardDescription>
                </CardHeader>
                <form onSubmit={handleUpdateProfile}>
                  <CardContent className="space-y-4">
                    {updateSuccess && (
                      <Alert className="bg-green-50 text-green-800 border-green-200">
                        <Check className="h-4 w-4" />
                        <AlertDescription>Profile updated successfully!</AlertDescription>
                      </Alert>
                    )}

                    {updateError && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{updateError}</AlertDescription>
                      </Alert>
                    )}

                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                        Full Name
                      </label>
                      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
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
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button type="submit" className="bg-slate-700 hover:bg-slate-800" disabled={isUpdating}>
                      {isUpdating ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Updating...
                        </>
                      ) : (
                        "Save Changes"
                      )}
                    </Button>
                    <Button type="button" variant="outline" onClick={() => logout()}>
                      Sign Out
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="subscription">
              <Card>
                <CardHeader>
                  <CardTitle>Subscription Details</CardTitle>
                  <CardDescription>Manage your subscription to The A/Method</CardDescription>
                </CardHeader>
                <CardContent>
                  {user.isSubscribed ? (
                    <div className="space-y-6">
                      <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-green-800">Active Subscription</h3>
                          <p className="text-green-700 text-sm mt-1">
                            You have an active {user.subscriptionType} subscription to The A/Method.
                          </p>
                        </div>
                      </div>

                      <div className="border rounded-md p-6">
                        <h3 className="font-medium text-slate-900 mb-4">Current Plan</h3>
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <p className="font-medium text-slate-800">
                              {user.subscriptionType === "monthly" ? "Monthly" : "Annual"} Subscription
                            </p>
                            <p className="text-sm text-slate-600 mt-1">
                              {user.subscriptionType === "monthly"
                                ? "$100 billed monthly"
                                : "$960 billed annually ($80/month)"}
                            </p>
                          </div>
                          <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-xs font-medium">
                            Active
                          </span>
                        </div>

                        <div className="border-t pt-4 mt-4">
                          <p className="text-sm text-slate-600">
                            Your next billing date is <span className="font-medium text-slate-800">June 15, 2023</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Dialog open={changeDialogOpen} onOpenChange={setChangeDialogOpen}>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="flex-1">
                              Change Plan
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Change Subscription Plan</DialogTitle>
                              <DialogDescription>
                                Switch between monthly and annual billing. Changes will take effect at the start of your
                                next billing cycle.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                              <div className="flex items-center justify-between border rounded-md p-4">
                                <div>
                                  <p className="font-medium">Monthly Plan</p>
                                  <p className="text-sm text-slate-600">$100 per month</p>
                                </div>
                                <Button
                                  variant={user.subscriptionType === "monthly" ? "secondary" : "outline"}
                                  onClick={() => handleChangeSubscription("monthly")}
                                  disabled={user.subscriptionType === "monthly"}
                                >
                                  {user.subscriptionType === "monthly" ? "Current Plan" : "Select"}
                                </Button>
                              </div>
                              <div className="flex items-center justify-between border rounded-md p-4">
                                <div>
                                  <p className="font-medium">Annual Plan</p>
                                  <p className="text-sm text-slate-600">$960 per year (Save 20%)</p>
                                </div>
                                <Button
                                  variant={user.subscriptionType === "annual" ? "secondary" : "outline"}
                                  onClick={() => handleChangeSubscription("annual")}
                                  disabled={user.subscriptionType === "annual"}
                                >
                                  {user.subscriptionType === "annual" ? "Current Plan" : "Select"}
                                </Button>
                              </div>
                            </div>
                            <DialogFooter>
                              <Button variant="outline" onClick={() => setChangeDialogOpen(false)}>
                                Cancel
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                        <Dialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              className="flex-1 border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700"
                            >
                              Cancel Subscription
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Cancel Your Subscription</DialogTitle>
                              <DialogDescription>
                                Are you sure you want to cancel your subscription? You'll lose access to all premium
                                content at the end of your current billing period.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="py-4">
                              <p className="text-sm text-slate-600">
                                Your subscription will remain active until the end of your current billing period on{" "}
                                <span className="font-medium">June 15, 2023</span>.
                              </p>
                            </div>
                            <DialogFooter>
                              <Button variant="outline" onClick={() => setCancelDialogOpen(false)}>
                                Keep Subscription
                              </Button>
                              <Button variant="destructive" onClick={handleCancelSubscription}>
                                Cancel Subscription
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="bg-slate-100 border border-slate-200 rounded-md p-4 flex items-start">
                        <X className="h-5 w-5 text-slate-600 mr-3 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-slate-800">No Active Subscription</h3>
                          <p className="text-slate-600 text-sm mt-1">
                            You don't have an active subscription to The A/Method.
                          </p>
                        </div>
                      </div>

                      <div className="text-center py-6">
                        <h3 className="font-medium text-slate-900 mb-2">Ready to start your wellness journey?</h3>
                        <p className="text-slate-600 mb-6">
                          Subscribe to get unlimited access to premium content and transform your approach to movement
                          and wellness.
                        </p>
                        <Link href="/subscribe">
                          <Button className="bg-slate-700 hover:bg-slate-800">View Subscription Plans</Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
