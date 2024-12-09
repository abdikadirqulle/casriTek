import {
  Code,
  Palette,
  ShoppingBag,
  ArrowRight,
  Smartphone,
  Monitor,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: <Monitor className="h-8 w-8 text-primary" />,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
  },
  {
    icon: <Headphones className="h-8 w-8 text-primary" />,
    title: "IT Consulting",
    description: "Expert guidance on technology strategy and implementation.",
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    title: "E-commerce Solutions",
    description: "Scalable online stores that drive sales and growth.",
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love.",
  },
]

const Services = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We offer a comprehensive range of web development services to help
            your business succeed in the digital world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-xl shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-2">
                {service.title}
              </h3>
              <p className="text-secondary/80 mb-4">{service.description}</p>
              <Link href="/services">
                <Button variant="ghost" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
