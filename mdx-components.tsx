import type { MDXComponents } from "mdx/types"
import Image from "next/image"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-bold">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-bold">{children}</h6>,
    p: ({ children }) => <p className="text-base">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
    ol: ({ children }) => (
      <ol className="list-decimal list-inside">{children}</ol>
    ),
    li: ({ children }) => <li className="text-base">{children}</li>,
    a: ({ children, href }) => (
      <a href={href} className="text-blue-500 hover:underline">
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-gray-300 pl-4 py-2 my-4">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 p-1 rounded">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-100 p-4 rounded">{children}</pre>
    ),
    table: ({ children }) => <table className="table-auto">{children}</table>,
    th: ({ children }) => <th className="px-4 py-2 bg-gray-200">{children}</th>,
    td: ({ children }) => <td className="px-4 py-2">{children}</td>,
    // img: ({ src, alt }) => <Image src={src} alt={alt} className="w-full h-auto" />,

    ...components,
  }
}
