import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern online shopping experience",
    image: "placeholder.svg",
  },
  {
    title: "Healthcare Portal",
    description: "Patient management system",
    image: "placeholder.svg",
  },
  {
    title: "Educational Platform",
    description: "Online learning made simple",
    image: "placeholder.svg",
  },
  {
    title: "Hotel Management System",
    description: "A comprehensive hotel booking platform",
    image: "placeholder.svg",
  },
  {
    title: "Social Media App",
    description: "Connect with friends and share updates",
    image: "placeholder.svg",
  },
]

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
        <div className="animate-fade-up">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
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
                        <p className="text-secondary/80 mb-4">
                          {project.description}
                        </p>
                        <Button variant="ghost" className="group">
                          View Project
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute top-1/2 -translate-y-1/2 left-12 xl:left-2">
              <CarouselPrevious />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-12 xl:right-2">
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
