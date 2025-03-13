"use client"

import { useUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { User, Package, CreditCard, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AccountPage() {
  const { isLoaded, isSignedIn, user } = useUser()

  // Redirect if not signed in
  if (isLoaded && !isSignedIn) {
    redirect("/sign-in")
  }

  if (!isLoaded) {
    return <div className="container py-12">Loading...</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-12">
        <div className="container">
          <div className="flex flex-col items-start mb-8">
            <h1 className="text-2xl md:text-3xl font-light mb-2">My Account</h1>
            <div className="w-20 h-px bg-neutral-300 mb-4" />
            <p className="text-neutral-600">
              Welcome back, {user?.firstName || user?.emailAddresses?.[0]?.emailAddress?.split("@")[0] || "User"}
            </p>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span className="hidden sm:inline">Orders</span>
              </TabsTrigger>
              <TabsTrigger value="payment" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span className="hidden sm:inline">Payment</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>View and update your personal information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          defaultValue={user?.firstName || ""}
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          defaultValue={user?.lastName || ""}
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full p-2 border rounded"
                          defaultValue={user?.emailAddresses?.[0]?.emailAddress || ""}
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>Update Profile</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>View your past orders and track current orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-neutral-600 mb-4">You haven't placed any orders yet.</p>
                    <Button asChild>
                      <a href="/shop">Start Shopping</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payment">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Manage your payment methods</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-neutral-600 mb-4">You don't have any saved payment methods.</p>
                    <Button>Add Payment Method</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Email Preferences</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input type="checkbox" id="marketing" className="mr-2" />
                          <label htmlFor="marketing">Receive marketing emails</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="orders" className="mr-2" />
                          <label htmlFor="orders">Receive order updates</label>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>Save Settings</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

