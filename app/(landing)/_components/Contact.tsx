"use client"

import { useForm } from "react-hook-form"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import contact from "@/public/about/about.jpg"
import Link from "next/link"

interface FormData {
  name: string
  email: string
  phone?: string // Optional field
  message: string
}

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<FormData>()
  const { toast } = useToast()

  const onSubmit = (data: FormData) => {
    console.log(data)
    toast({
      description: "Message sent successfully!",
    })
    reset()
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* contact info */}
          <div className="space-y-6 animate-fade-up ">
            <h2 className="text-3xl font-bold text-secondary">
              Let&apos;s Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-secondary/80">
              Ready to start your next project? Get in touch with us to discuss
              how we can help bring your vision to life.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-secondary">info@casritek.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-secondary">+252 61 2037075</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-secondary">Kismayo, Somalia</span>
              </div>
            </div>
          </div>

          {/* contact form */}
          <div className="relative animate-fade-up delay-200">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  {...register("phone")}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[150px]"
                  {...register("message", { required: true })}
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
