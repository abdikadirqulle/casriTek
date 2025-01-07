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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const services = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies.",
    features: [
      "Responsive Design",
      "Custom CMS Integration",
      "Performance Optimization",
      "SEO Best Practices",
    ],
    benefits: [
      "Increased Online Presence",
      "Better User Experience",
      "Higher Conversion Rates",
      "Improved Search Rankings",
    ],
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "Cross-Platform Development",
      "Native App Development",
      "UI/UX Design",
      "App Store Optimization",
    ],
    benefits: [
      "Wider Market Reach",
      "Enhanced User Engagement",
      "Improved Customer Service",
      "Increased Brand Loyalty",
    ],
  },
  {
    icon: <Monitor className="h-8 w-8 text-primary" />,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
    features: [
      "Custom Software Solutions",
      "Legacy System Integration",
      "Cloud Migration",
      "API Development",
    ],
    benefits: [
      "Improved Efficiency",
      "Cost Reduction",
      "Scalable Solutions",
      "Better Data Management",
    ],
  },
  {
    icon: <Headphones className="h-8 w-8 text-primary" />,
    title: "IT Consulting",
    description: "Expert guidance on technology strategy and implementation.",
    features: [
      "Technology Assessment",
      "Digital Transformation",
      "Security Consulting",
      "Project Management",
    ],
    benefits: [
      "Strategic Growth",
      "Risk Mitigation",
      "Competitive Advantage",
      "Optimized Operations",
    ],
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    title: "E-commerce Solutions",
    description: "Scalable online stores that drive sales and growth.",
    features: [
      "Custom E-commerce Platforms",
      "Payment Gateway Integration",
      "Inventory Management",
      "Analytics Integration",
    ],
    benefits: [
      "Increased Sales",
      "Global Market Access",
      "Automated Operations",
      "Better Customer Insights",
    ],
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
    benefits: [
      "Enhanced User Experience",
      "Higher User Retention",
      "Reduced Support Costs",
      "Increased Satisfaction",
    ],
  },
]

const ServicesPage = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Our Services
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            We offer a comprehensive range of web development services to help
            your business succeed in the digital world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <Accordion type="single" collapsible>
                <AccordionItem value="features">
                  <AccordionTrigger>Features</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-secondary/80">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="benefits">
                  <AccordionTrigger>Benefits</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="text-secondary/80">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Button variant="ghost" className="group mt-4">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPage
