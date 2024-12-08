"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern online shopping experience",
    image: "placeholder.svg",
    challenge:
      "Creating a scalable and performant e-commerce platform that can handle high traffic and complex product configurations.",
    solution:
      "Implemented a microservices architecture with React and Node.js, utilizing Redis for caching and MongoDB for flexible data storage.",
    results: [
      "50% increase in conversion rate",
      "30% faster page load times",
      "99.9% uptime",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
  },
  {
    title: "Healthcare Portal",
    description: "Patient management system",
    image: "placeholder.svg",
    challenge:
      "Developing a secure and compliant healthcare portal that streamlines patient care and administrative tasks.",
    solution:
      "Built a HIPAA-compliant platform using React and .NET, with end-to-end encryption and role-based access control.",
    results: [
      "40% reduction in administrative time",
      "95% patient satisfaction",
      "Zero security incidents",
    ],
    technologies: ["React", ".NET", "SQL Server", "Azure", "HIPAA Compliance"],
  },
  {
    title: "Educational Platform",
    description: "Online learning made simple",
    image: "placeholder.svg",
    challenge:
      "Creating an engaging and interactive learning platform that supports various content types and learning styles.",
    solution:
      "Developed a custom LMS using React and Python, with real-time collaboration features and adaptive learning paths.",
    results: [
      "85% course completion rate",
      "4.8/5 user satisfaction",
      "200% user growth",
    ],
    technologies: ["React", "Python", "PostgreSQL", "WebRTC", "AWS"],
  },
]

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null)

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
                <Button
                  variant="ghost"
                  className="group"
                  //   onClick={() => setSelectedProject(project)}
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

// export const DialogPortfolio = () => {
//   return (
//     <Dialog
//     open={selectedProject !== null}
//     onOpenChange={() => setSelectedProject(null)}
//   >

//       <DialogContent className="max-w-3xl">
//         <DialogHeader>
//           <DialogTitle>{selectedProject?.title}</DialogTitle>
//           <DialogDescription>
//             <div className="mt-4">
//               <Image
//                 src={selectedProject.image}
//                 alt={selectedProject.title}
//                 className="w-full aspect-video object-cover rounded-lg mb-6"
//               />
//               <div className="space-y-6">
//                 <div>
//                   <h4 className="font-semibold text-secondary mb-2">
//                     Challenge
//                   </h4>
//                   <p className="text-secondary/80">
//                     {selectedProject.challenge}
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-secondary mb-2">
//                     Solution
//                   </h4>
//                   <p className="text-secondary/80">
//                     {selectedProject.solution}
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-secondary mb-2">
//                     Results
//                   </h4>
//                   <ul className="list-disc pl-5 text-secondary/80">
//                     {selectedProject?.results.map((result, index) => (
//                       <li key={index}>{result}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-secondary mb-2">
//                     Technologies Used
//                   </h4>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedProject.technologies.map((tech, index) => (
//                       <span
//                         key={index}
//                         className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </DialogDescription>
//         </DialogHeader>
//       </DialogContent>
//     )}
//   </Dialog>
//   )
// }
