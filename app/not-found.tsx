"use client"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
const NotFound = () => {
  const navigate = useRouter()

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center animate-fade-up">
        {/* 404 Text */}
        <h1 className="text-9xl font-bold text-primary">404</h1>

        {/* Error Message */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-secondary">
            Page Not Found
          </h2>
          <p className="text-muted-foreground">
            Oops! The page you&apos;re looking for seems to have vanished into
            the digital void.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            variant="outline"
            onClick={() => navigate.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>

          <Button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Return Home
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
