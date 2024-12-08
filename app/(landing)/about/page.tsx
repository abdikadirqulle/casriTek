import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const AboutUs = () => {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "CasriTek was established in Kismayo, Somalia",
    },
    {
      year: "2019",
      title: "First Major Client",
      description: "Secured partnership with a FTSE 100 company",
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Grew to 25+ talented professionals",
    },
    {
      year: "2021",
      title: "International Presence",
      description: "Opened offices in Manchester and Edinburgh",
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Won 'Best Web Development Agency' award",
    },
    {
      year: "2023",
      title: "Innovation Leader",
      description: "Launched AI-powered development solutions",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "photo-1581091226825-a6a2a5aee158",
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      image: "photo-1581092795360-fd1ca04f0952",
    },
    {
      name: "Emma Williams",
      role: "Design Lead",
      image: "photo-1486312338219-ce68d2c6f44d",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary text-center">
            About CasriTek
          </h1>
          <p className="mt-4 text-lg text-center text-secondary/80 max-w-3xl mx-auto">
            We&apos;re a team of passionate developers, designers, and digital
            strategists committed to delivering exceptional web solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl font-bold text-secondary">Our Story</h2>
              <p className="text-secondary/80">
                Founded in 2018, CasriTek emerged from a vision to bridge the
                gap between technical excellence and business success. What
                started as a small team of dedicated developers has grown into a
                full-service digital agency, trusted by businesses across the
                Somalia and beyond.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary">
                      Our Mission
                    </h3>
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
              </div>
              <Button variant="outline" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative animate-fade-up delay-200">
              <Image
                src={``}
                alt="Team at work"
                className="rounded-2xl shadow-xl"
                width={500}
                height={256}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">Our Team</h2>
            <p className="mt-4 text-secondary/80">
              Meet the talented individuals who make CasriTek exceptional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Image
                  src={``}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  width={500}
                  height={256}
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-secondary">
                    {member.name}
                  </h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">Our Journey</h2>
            <p className="mt-4 text-secondary/80">
              Key milestones that shaped our success
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex flex-col md:flex-row gap-8 items-center animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="md:w-1/4">
                  <div className="text-4xl font-bold text-primary">
                    {milestone.year}
                  </div>
                </div>
                <div className="md:w-3/4 bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-xl text-secondary mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-secondary/80">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
