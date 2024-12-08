import React from "react"
import Footer from "./_components/Footer"
import Navbar from "./_components/Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
