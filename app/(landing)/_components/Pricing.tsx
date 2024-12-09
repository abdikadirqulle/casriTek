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
import { Check } from "lucide-react"

import { faqs, plans } from "@/constants"
const Pricing = () => {
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
                  variant={plan.popular ? "default" : "ghost"}
                  onClick={() => (window.location.href = "/contact")}
                >
                  {`${index == 2 ? "Contact sales" : "Get Started"}`}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Pricing
