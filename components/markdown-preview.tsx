"use client"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import type { Components } from "react-markdown"

interface MarkdownPreviewProps {
  content: string
}

export function MarkdownPreview({ content }: MarkdownPreviewProps) {
  const components: Components = {
    h1: ({ children }) => <h1 className="text-xl font-bold mt-6 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-lg font-bold mt-5 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-md font-bold mt-4 mb-2">{children}</h3>,
    p: ({ children }) => <p className="my-3 text-sm">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-6 my-3">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 my-3">{children}</ol>,
    li: ({ children }) => <li className="my-1">{children}</li>,
    a: ({ children, href }) => (
      <a href={href} className="text-primary underline text-sm">
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-200 pl-4 italic my-4">{children}</blockquote>
    ),
    img: ({ src, alt }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img 
        src={typeof src === 'string' ? src : "/placeholder.svg"} 
        alt={alt || ""} 
        width={800}
        height={400}
        className="max-w-full h-auto my-4 rounded" 
      />
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    code: ({ className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "")
      return !props.inline && match ? (
        <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div">
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5">{children}</code>
      )
    },
    table: ({ children }) => (
      <div className="overflow-x-auto my-4">
        <table className="min-w-full divide-y divide-gray-200">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-gray-50 dark:bg-gray-800">{children}</thead>,
    tr: ({ children }) => <tr className="border-b">{children}</tr>,
    th: ({ children }) => <th className="px-3 py-2 text-left font-medium">{children}</th>,
    td: ({ children }) => <td className="px-3 py-2">{children}</td>,
  }

  return (
    <div className="prose prose-slate max-w-none dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {content || "*No content to preview*"}
      </ReactMarkdown>
    </div>
  )
}