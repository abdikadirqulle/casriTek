"use client"
import Image from "next/image"
import { useEffect, useRef } from "react"

import company1 from "@/public/companies/aws.png"
import company2 from "@/public/companies/campus.png"
import company3 from "@/public/companies/dragon.png"
import company4 from "@/public/companies/edal.png"
import company5 from "@/public/companies/ipro.png"

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
    <section className="py-20 bg-gray-50">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={containerRef}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Trusted By Leading Companies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join the thousands of businesses worldwide that trust us with their
            operations
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center ">
          {companies.map((logo, index) => (
            <div key={index} className="flex justify-center items-center p-4 ">
              <Image
                src={logo.logo}
                alt={logo.label}
                className=" w-auto grayscale hover:grayscale-0 transition-all duration-300"
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
