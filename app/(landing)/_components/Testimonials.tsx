import { testimonials } from "@/constants"
import { Star } from "lucide-react"

const Testimonials = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from some of our
            satisfied clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white p-8 rounded-xl shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-secondary/80 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-bold text-secondary">{testimonial.name}</p>
                <p className="text-secondary/60 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
