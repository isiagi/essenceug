import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center py-12">
      <SignUp
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

