import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "CasriTek transformed our online presence with a beautiful, functional website that perfectly represents our brand.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthLabs",
    content:
      "Working with CasriTek was a game-changer for our business. Their expertise and dedication are unmatched.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Marketing Director, InnovateCo",
    content:
      "The team at CasriTek delivered beyond our expectations. Our new website has significantly improved our conversion rates.",
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
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