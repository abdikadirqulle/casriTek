import React from "react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import FloatingContact from "@/components/floating-contact"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-16">
        <FloatingContact />
        {children}
      </div>
      <Footer />
    </div>
  )
}
