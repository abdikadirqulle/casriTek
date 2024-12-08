import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-3xl font-bold text-secondary">Who We Are</h2>
            <p className="text-secondary/80 text-lg">
              CasriTek is a leading web development agency based in the Somalia,
              dedicated to transforming businesses through innovative digital
              solutions. Our passion for technology and commitment to excellence
              drives us to create exceptional web experiences.
            </p>
            <Button variant="outline" className="group">
              Learn More About Us
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

export default About
