import Hero from "./_components/Hero"
import Services from "./_components/Services"
import Testimonials from "./_components/Testimonials"
import Portfolio from "./_components/Portfolio"
import About from "./_components/About"
import Contact from "./_components/Contact"
import { TrustedCompanies } from "./_components/TrustedCompanies"
import Pricing from "./_components/Pricing"
import Companies from "./_components/Companies"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />

      <Companies />
      {/* <TrustedCompanies /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Contact /> */}
      {/* CTA Section */}
      <section className="px-4 py-16  bg-secondary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Not Sure Which Plan to Choose?
          </h2>
          <p className="mb-8">
            Our team is here to help you select the perfect plan for your
            business needs. Let&apos;s discuss your project requirements and
            find the best solution together.
          </p>
          <Button size="lg" variant="default">
            <Link
              target="_blank"
              // href="/contact"
              href="https://cal.com/abdikadirqulle/discovery-call"
            >
              Schedule a Consultation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home
