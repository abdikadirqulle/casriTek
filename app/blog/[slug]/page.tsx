import { notFound } from "next/navigation"
import { readFile, readdir } from "fs/promises"
import path from "path"
// import matter from "gray-matter";
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, ArrowLeft, Share2 } from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link"

// Sample blog post data (in a real app, this would come from an API)
const blogPost = {
  id: 1,
  title: "The Future of Web Development: What's Next in 2024",
  content: `
    Web development continues to evolve at a rapid pace, bringing new technologies and methodologies that shape how we build digital experiences. In this article, we'll explore the latest trends and innovations that are transforming the web development landscape.

    First, we'll look at the rise of AI-powered development tools and how they're streamlining the development process. Then, we'll discuss the growing importance of performance optimization and how new technologies are making websites faster than ever.

    We'll also examine the impact of WebAssembly, edge computing, and other emerging technologies that are pushing the boundaries of what's possible on the web.
  `,
  category: "Web Development",
  author: "John Smith",
  date: "February 15, 2024",
  readTime: "5 min read",
  image: "photo-1461749280684-dccba630e2f6",
}

async function getPost(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`)
    const fileContent = await readFile(filePath, "utf8")
    //   const { data: frontmatter, content } = matter(fileContent);

    return {
      fileContent,
      slug,
    }
  } catch {
    notFound()
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  return (
    <article className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 animate-fade-up">
          <Image
            src={`/about/about.jpg`}
            alt={blogPost.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
            width={1000}
            height={1000}
          />
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{blogPost.date}</span>
              <span>•</span>
              <span>{blogPost.readTime}</span>
              <span>•</span>
              <span>{blogPost.category}</span>
            </div>
            <h1 className="text-4xl font-bold text-secondary">
              {blogPost.title}
            </h1>
            <p className="text-muted-foreground">By {blogPost.author}</p>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12 animate-fade-up">
          {blogPost.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-6 text-secondary/80 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share Buttons */}
        <div className="border-t pt-8">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share Article
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto">
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  //   onClick={() => handleShare("facebook")}
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  //   onClick={() => handleShare("twitter")}
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  //   onClick={() => handleShare("linkedin")}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </article>
  )
}
