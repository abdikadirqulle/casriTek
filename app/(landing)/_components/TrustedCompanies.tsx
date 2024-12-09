"use client"
import React, { useState } from "react"

import {
  Apple,
  Monitor, // Replacing Microsoft with Monitor
  Facebook,
  Linkedin,
  Twitter,
  ShoppingCart,
  Chrome,
  Github,
  Slack,
  Figma,
} from "lucide-react"

interface CompanyLogoProps {
  name: string
  logo: React.ReactNode
}

export const TrustedCompanies: React.FC = () => {
  const companies = [
    { name: "Apple", logo: <Apple size={48} /> },
    { name: "Microsoft", logo: <Monitor size={48} /> },
    { name: "Facebook", logo: <Facebook size={48} /> },
    { name: "LinkedIn", logo: <Linkedin size={48} /> },
    { name: "Twitter", logo: <Twitter size={48} /> },
    { name: "Amazon", logo: <ShoppingCart size={48} /> },
    { name: "Google", logo: <Chrome size={48} /> },
    { name: "GitHub", logo: <Github size={48} /> },
    { name: "Slack", logo: <Slack size={48} /> },
    { name: "Figma", logo: <Figma size={48} /> },
  ]
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted By Leading Companies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join the thousands of businesses worldwide that trust us with their
            operations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {companies.map((company) => (
            <CompanyLogo
              key={company.name}
              name={company.name}
              logo={company.logo}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const CompanyLogo = ({ name, logo }: CompanyLogoProps) => {
  return (
    <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[200px]">
      <div className="text-gray-600 w-24 h-24 flex items-center justify-center">
        {logo}
      </div>
    </div>
  )
}

interface ScrollingLogosProps {
  companies: Array<{ name: string; logo: React.ReactNode }>
  direction: "left" | "right"
}

export const ScrollingLogos: React.FC<ScrollingLogosProps> = ({
  companies,
  direction,
}) => {
  const [isPaused, setIsPaused] = useState(false)
  const baseAnimationClass =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
  const animationClass = isPaused ? "animate-none" : baseAnimationClass

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex gap-8 whitespace-nowrap">
        <div
          className={`flex gap-8 ${animationClass}`}
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {companies.map(
            (company: { name: string; logo: React.ReactNode }, index) => (
              <div key={`${company.name}-${index}`} className="flex-shrink-0">
                <CompanyLogo name={company.name} logo={company.logo} />
              </div>
            )
          )}
          {/* Duplicate set for seamless loop */}
          {companies.map(
            (company: { name: string; logo: React.ReactNode }, index) => (
              <div
                key={`${company.name}-duplicate-${index}`}
                className="flex-shrink-0"
              >
                <CompanyLogo name={company.name} logo={company.logo} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
