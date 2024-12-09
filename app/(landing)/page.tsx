import Companies from "./_components/Companies"
import Hero from "./_components/Hero"

import Services from "./_components/Services"
import Testimonials from "./_components/Testimonials"
import Portfolio from "./_components/Portfolio"
import About from "./_components/About"
import Contact from "./_components/Contact"
import ContactPage from "./contact/page"
import { TrustedCompanies } from "./_components/TrustedCompanies"

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <TrustedCompanies />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home
