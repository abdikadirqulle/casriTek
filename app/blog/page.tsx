"use client"

import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { Search, Filter, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"

// Sample blog data (in a real app, this would come from an API)
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: What's Next in 2024",
    excerpt:
      "Explore the latest trends and technologies shaping the future of web development...",
    category: "Web Development",
    author: "John Smith",
    date: "2024-02-15",
    readTime: "5 min read",
    image: "photo-1461749280684-dccba630e2f6",
    slug: "the-future-of-web-development-whats-next-in-2024",
  },
  {
    id: 2,
    title: "Building Scalable Applications with React and Node.js",
    excerpt:
      "Learn how to create robust and scalable applications using modern technologies...",
    category: "Technology",
    author: "Sarah Johnson",
    date: "2024-02-10",
    readTime: "8 min read",
    image: "photo-1498050108023-c5249f4df085",
    slug: "building-scalable-applications-with-react-and-nodejs",
  },

  {
    id: 4,
    slug: "how-to-become-freelance",
    title: "How to Become a Freelance Developer",
    excerpt:
      "Master the fundamentals of creating user-friendly and visually appealing interfaces...",
    category: "Design",
    author: "Mike Wilson",
    date: "2024-02-05",
    readTime: "6 min read",
    image: "photo-1486312338219-ce68d2c6f44d",
  },
]

const categories = [
  "All",
  "Web Development",
  "Technology",
  "Design",
  "Business",
]

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Thanks for subscribing to our newsletter!",
      description:
        "We'll send you the latest articles, tutorials, and updates.",
    })
    setEmail("")
  }
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl font-bold text-secondary mb-4">
            CasriTek Blog
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and updates from our team of experts. Stay
            informed about the latest in web development and technology.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center items-center">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group hover:no-underline"
            >
              <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-4px] animate-fade-up">
                <Image
                  src={`/about/about.jpg`}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  width={500}
                  height={500}
                />
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                  <h2 className="text-xl font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="my-16 bg-accent rounded-lg p-8 text-center animate-fade-up md:h-64 flex items-center justify-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/80 mb-6">
            Get the latest articles, tutorials, and updates delivered straight
            to your inbox.
          </p>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              required
            />
            <Button type="submit" className="whitespace-nowrap">
              Subscribe
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default BlogList
