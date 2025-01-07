import Hero from "./_components/Hero"
import Services from "./_components/Services"
import Testimonials from "./_components/Testimonials"
import Portfolio from "./_components/Portfolio"
import About from "./_components/About"
import Contact from "./_components/Contact"
import { TrustedCompanies } from "./_components/TrustedCompanies"
import Pricing from "./_components/Pricing"
import Companies from "./_components/Companies"

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
      <Pricing />
      <Contact />
    </div>
  )
}

export default Home
