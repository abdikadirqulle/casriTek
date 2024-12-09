export const plans = [
  {
    name: "Starter Plan",
    price: "$200 - $500",
    description:
      "Best for small businesses and personal projects starting their digital journey.",
    features: [
      "5-page responsive website",
      "Custom domain setup assistance",
      "Basic SEO setup",
      "Contact form integration",
      "1 month free maintenance",
    ],
    deliveryTime: "7-10 business days",
    idealFor: ["Entrepreneurs", "Freelancers"],
    popular: false,
  },
  {
    name: "Professional Plan",
    price: "$1,500",
    description:
      "Perfect for growing businesses looking to establish a robust online presence.",
    features: [
      "Up to 15 custom pages",
      "Mobile-first responsive design",
      "Advanced SEO integration",
      "E-commerce functionality (50 products)",
      "Blog with CMS",
      "2 months free maintenance",
      "Third-party integrations",
    ],
    deliveryTime: "15-20 business days",
    idealFor: ["Small-to-medium businesses", "Startups"],
    popular: true,
  },
  {
    name: "Enterprise Plan",
    price: "$5,000+",
    description: "Comprehensive solutions for businesses with complex needs.",
    features: [
      "Unlimited pages and features",
      "Custom web application development",
      "Advanced UI/UX design",
      "Scalability for high-traffic",
      "Dedicated project manager",
      "Performance optimization",
      "6 months free maintenance",
    ],
    deliveryTime: "Based on project scope",
    idealFor: ["Enterprises", "Large-scale platforms"],
    popular: false,
  },
]
export const faqs = [
  {
    question: "What happens after I select a plan?",
    answer:
      "Our team will contact you within 24 hours to discuss your project requirements and next steps.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, you can upgrade your plan at any time. We'll help you transition smoothly to the new plan.",
  },
  {
    question: "Do you offer discounts for nonprofits or startups?",
    answer:
      "Yes, we offer special pricing for nonprofits and early-stage startups. Contact us to learn more.",
  },
]

// about page constants
export const milestones = [
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

// projects
export const projects = [
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
  {
    title: "Hotel Management System",
    description: "A comprehensive hotel booking platform",
    image: "placeholder.svg",
    challenge:
      "Creating an engaging and interactive learning platform that supports various content types and learning styles.",
    solution:
      "Developed a custom LMS using React and Next.js, with real-time collaboration features and adaptive learning paths.",
    results: [
      "85% course completion rate",
      "4.7/5 user satisfaction",
      "200% user growth",
    ],
    technologies: ["React", "Next.js", "PostgreSQL", "shadcn/ui", "AWS"],
  },
]
