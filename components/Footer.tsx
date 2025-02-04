"use client"

import { Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import Link from "next/link"

import logo from "@/public/casritek/logo.png"

const Footer = () => {
  const { toast } = useToast()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      description: "Thanks for subscribing to our newsletter!",
    })
  }

  return (
    <footer className="bg-accent text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex-shrink-0 flex gap-0 items-center">
              <Image
                src={logo}
                alt="logo"
                className="mr-2"
                width={30}
                height={30}
              />
              <span className="text-2xl font-bold">CasriTek</span>
            </Link>
            {/* <h3 className="text-2xl font-bold">CasriTek</h3> */}
            <p className="text-white/80">
              Empowering businesses through innovative web solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="hover:text-primary transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/casritek1"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com/casritek"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/casritek"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/casritek1"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
              <Button type="submit" className="w-full">
                Subscribe
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60">
          <p>
            &copy; {new Date().getFullYear()} CasriTek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
