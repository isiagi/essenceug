"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth, useUser, SignOutButton } from "@clerk/nextjs"
import { LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function UserButton() {
  const { isSignedIn } = useAuth()
  const { user } = useUser()
  const router = useRouter()

  if (!isSignedIn) {
    return (
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    )
  }

  const initials =
    user?.firstName && user?.lastName
      ? `${user.firstName[0]}${user.lastName[0]}`
      : user?.firstName?.[0] || user?.emailAddresses?.[0]?.emailAddress?.[0] || "U"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User"} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user?.fullName && <p className="font-medium">{user.fullName}</p>}
            {user?.emailAddresses?.[0]?.emailAddress && (
              <p className="text-sm text-muted-foreground">{user.emailAddresses[0].emailAddress}</p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/account" className="cursor-pointer">
            Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/orders" className="cursor-pointer">
            Orders
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <SignOutButton signOutCallback={() => router.push("/")}>
            <div className="flex w-full cursor-pointer items-center">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sign out</span>
            </div>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

