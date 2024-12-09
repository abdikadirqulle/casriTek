"use client"
import Image from "next/image"
import { useEffect, useRef } from "react"

import company1 from "@/public/companies/company1.svg"
import company2 from "@/public/companies/company2.svg"
import company3 from "@/public/companies/company3.svg"
import company4 from "@/public/companies/company4.svg"
import company5 from "@/public/companies/company5.svg"

const companies = [
  { logo: company1, id: 1, label: "Company 1" },
  { logo: company2, id: 2, label: "Company 2" },
  { logo: company3, id: 3, label: "Company 3" },
  { logo: company4, id: 4, label: "Company 4" },
  { logo: company5, id: 5, label: "Company 5" },
]

const Companies = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    const container = containerRef.current
    if (container) {
      observer.observe(container)
    }

    return () => {
      if (container) {
        observer.unobserve(container)
      }
    }
  }, [])

  return (
    <section className="py-20 bg-white">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={containerRef}
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted By Leading Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-0">
          {companies.map((logo, index) => (
            <div key={index} className="flex justify-center items-center p-4 ">
              <Image
                src={logo.logo}
                alt={logo.label}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                width={100}
                height={40}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Companies
