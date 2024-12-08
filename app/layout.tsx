import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const WorkSans = localFont({
  src: "./fonts/WorkSansVF.ttf",
  variable: "--font-work-sans",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Casritek - Web Development Solutions",
  description: "Expert web development services for businesses and individuals",
  icons: {
    icon: "/casritek/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${WorkSans.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
