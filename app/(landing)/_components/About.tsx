import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import about from "@/public/about/about.jpg"

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
            </p>{" "}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">Our Mission</h3>
                  <p className="text-secondary/80">
                    To empower businesses through innovative digital solutions
                    that drive growth and success.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">Our Vision</h3>
                  <p className="text-secondary/80">
                    To be the leading force in digital transformation, setting
                    new standards in web development excellence.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">Our Goal</h3>
                  <p className="text-secondary/80">
                    To bridge the gap between technology and businesses,
                    enabling them to thrive in the digital era by creating
                    solutions that are not only visually stunning but also
                    scalable and impactful.
                  </p>
                </div>
              </div>
            </div>
            <Button variant="ghost">
              <Link href="/about" className="group flex items-center">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="relative animate-fade-up delay-200">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl">
              <div className="absolute inset-0 hero-pattern opacity-20 rounded-2xl">
                <Image
                  src={about}
                  alt="about"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
