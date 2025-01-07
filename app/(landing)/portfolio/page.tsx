"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { projects } from "@/constants"
import { DialogTrigger } from "@radix-ui/react-dialog"

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

// ProjectProps is the type for the project object
interface ProjectProps {
  title: string
  description: string
  image: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
}

export const DialogPortfolio = ({ project }: { project: ProjectProps }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="group">
          View Details
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>
            <div className="mt-4">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover rounded-lg mb-6"
                width={500}
                height={500}
              />
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-secondary mb-2">
                    Challenge
                  </h4>
                  <p className="text-secondary/80">{project.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-2">
                    Solution
                  </h4>
                  <p className="text-secondary/80">{project.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Results</h4>
                  <ul className="list-disc pl-5 text-secondary/80">
                    {project?.results.map((result: string, index: number) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
