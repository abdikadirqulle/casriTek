"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
} from "lucide-react"
import { useForm } from "react-hook-form"

interface FormData {
  name: string
  email: string
  phone?: string // Optional field
  message: string
}

const ContactPage = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 animate-fade-up">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-secondary/80">
                Ready to start your next project? Get in touch with us to
                discuss how we can help bring your vision to life.
              </p>
            </div>

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
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="space-y-8 lg:pl-8 animate-fade-up delay-200">
            <div className="aspect-square relative rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.542156465726!2d-0.12764492384815924!3d51.50735067181421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce3941eb1f%3A0x1a5342fdf089c627!2sTrafalgar%20Square!5e0!3m2!1sen!2suk!4v1710337160595!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="bg-accent text-white rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>hello@casritek.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+44 (0) 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>London, United Kingdom</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Office Hours</h4>
                <div className="space-y-2 text-white/80">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
