import { Check } from "lucide-react"

import Image from "next/image"
import casritekTeam from "@/public/about/about.jpg"

import user from "@/public/about/user.png"
import { milestones } from "@/constants"

const AboutUs = () => {
  const team = [
    {
      name: "Abdikadir qulle",
      role: "CEO & Founder",
      image: "/about/abdikadir-qulle.jpg",
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      image: user,
    },
    {
      name: "Emma Williams",
      role: "Design Lead",
      image: user,
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
                Founded in 2024, CasriTek emerged from a vision to bridge the
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
            </div>
            <div className="relative animate-fade-up delay-200">
              <Image
                src={casritekTeam}
                alt="Team at work"
                className="rounded-2xl shadow-xl"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-secondary/5">
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
                  src={member.image}
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
      </section> */}

      {/* Milestones Section */}
      {/* <section className="py-16">
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
      </section> */}
    </div>
  )
}

export default AboutUs
