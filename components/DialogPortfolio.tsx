"use client"

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
import { DialogTrigger } from "@radix-ui/react-dialog"

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
      <DialogContent className="sm:max-w-[725px]">
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
                    {project?.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
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
