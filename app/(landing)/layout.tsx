import React from "react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-16">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            </div> */}
        {children}
      </div>
      <Footer />
    </div>
  )
}
