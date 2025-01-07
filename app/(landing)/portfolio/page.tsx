"use client"

import { DialogPortfolio } from "@/components/DialogPortfolio"
import Image from "next/image"
import { projects } from "@/constants"

const Portfolio = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Our Latest Work
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            Take a look at some of our recent projects that showcase our
            expertise in web development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover"
                width={500}
                height={500}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary/80 mb-4">{project.description}</p>
                <DialogPortfolio project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
