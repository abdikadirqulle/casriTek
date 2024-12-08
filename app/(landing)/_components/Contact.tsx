import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-3xl font-bold text-secondary">
              Let&apos;s Work Together
            </h2>
            <p className="text-secondary/80">
              Ready to start your next project? Get in touch with us to discuss
              how we can help bring your vision to life.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-secondary">hello@casritek.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-secondary">+44 (0) 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-secondary">London, United Kingdom</span>
              </div>
            </div>
            <Button className="group">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="relative animate-fade-up delay-200">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl">
              <div className="absolute inset-0 hero-pattern opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
