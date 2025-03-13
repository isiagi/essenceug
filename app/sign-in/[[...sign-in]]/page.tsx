import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center py-12">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: "bg-black hover:bg-black/90 text-white",
            footerActionLink: "text-black hover:text-black/90",
          },
        }}
      />
    </div>
  )
}

