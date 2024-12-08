"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check, HelpCircle } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useRouter } from "next/navigation"

const PricingPage = () => {
  const navigate = useRouter()
  const plans = [
    {
      name: "Starter Plan",
      price: "$500",
      description:
        "Best for small businesses and personal projects starting their digital journey.",
      features: [
        "5-page responsive website",
        "Custom domain setup assistance",
        "Basic SEO setup",
        "Contact form integration",
        "1 month free maintenance",
      ],
      deliveryTime: "7-10 business days",
      idealFor: ["Entrepreneurs", "Freelancers"],
      popular: false,
    },
    {
      name: "Professional Plan",
      price: "$1,500",
      description:
        "Perfect for growing businesses looking to establish a robust online presence.",
      features: [
        "Up to 15 custom pages",
        "Mobile-first responsive design",
        "Advanced SEO integration",
        "E-commerce functionality (50 products)",
        "Blog with CMS",
        "2 months free maintenance",
        "Third-party integrations",
      ],
      deliveryTime: "15-20 business days",
      idealFor: ["Small-to-medium businesses", "Startups"],
      popular: true,
    },
    {
      name: "Enterprise Plan",
      price: "$5,000+",
      description: "Comprehensive solutions for businesses with complex needs.",
      features: [
        "Unlimited pages and features",
        "Custom web application development",
        "Advanced UI/UX design",
        "Scalability for high-traffic",
        "Dedicated project manager",
        "Performance optimization",
        "6 months free maintenance",
      ],
      deliveryTime: "Based on project scope",
      idealFor: ["Enterprises", "Large-scale platforms"],
      popular: false,
    },
  ]
  const faqs = [
    {
      question: "What happens after I select a plan?",
      answer:
        "Our team will contact you within 24 hours to discuss your project requirements and next steps.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Yes, you can upgrade your plan at any time. We'll help you transition smoothly to the new plan.",
    },
    {
      question: "Do you offer discounts for nonprofits or startups?",
      answer:
        "Yes, we offer special pricing for nonprofits and early-stage startups. Contact us to learn more.",
    },
  ]
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 animate-fade-down">
          Choose the Perfect Plan for Your Business Goals
        </h1>
        <p className="text-secondary/80 max-w-3xl mx-auto mb-8 animate-fade-up">
          Flexible pricing packages designed to meet the needs of businesses at
          every stage. Whether you&apos;re launching your first website or
          scaling an enterprise platform, we&apos;ve got you covered.
        </p>
        <Button
          size="lg"
          variant="outline"
          onClick={() => (window.location.href = "/contact")}
          className="animate-fade-up"
        >
          Need a Custom Solution? Contact Us!
        </Button>
      </section>
      {/* Pricing Cards */}
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular ? "border-primary shadow-lg" : ""
              } animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-3xl font-bold text-primary mt-4">
                  {plan.price}
                </p>
                <p className="text-secondary/80 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <p className="font-semibold">Delivery Time:</p>
                  <p className="text-secondary/80">{plan.deliveryTime}</p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Ideal For:</p>
                  <ul className="list-disc list-inside text-secondary/80">
                    {plan.idealFor.map((ideal) => (
                      <li key={ideal}>{ideal}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      {/* Comparison Table */}
      <section className="px-4 py-16 max-w-7xl mx-auto bg-accent/5">
        <h2 className="text-3xl font-bold text-center mb-8">Compare Plans</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Features</TableHead>
                <TableHead>Starter</TableHead>
                <TableHead>Professional</TableHead>
                <TableHead>Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Pages</TableCell>
                <TableCell>5 pages</TableCell>
                <TableCell>Up to 15 pages</TableCell>
                <TableCell>Unlimited</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SEO Setup</TableCell>
                <TableCell>Basic</TableCell>
                <TableCell>Advanced</TableCell>
                <TableCell>Custom</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Maintenance</TableCell>
                <TableCell>1 month</TableCell>
                <TableCell>2 months</TableCell>
                <TableCell>6 months</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>E-commerce</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Up to 50 products</TableCell>
                <TableCell>Unlimited</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="px-4 py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <Card key={faq.question}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-secondary/80">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="px-4 py-16 bg-accent text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Not Sure Which Plan to Choose?
          </h2>
          <p className="mb-8">
            Our team is here to help you select the perfect plan for your
            business needs. Let&apos;s discuss your project requirements and
            find the best solution together.
          </p>
          <Button
            size="lg"
            variant="default"
            onClick={() => (window.location.href = "/contact")}
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
export default PricingPage