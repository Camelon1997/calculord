import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blog-data"
import BlogPostClientPage from "./client-page"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug]

  if (!post) {
    return {
      title: "Artículo no encontrado",
    }
  }

  return {
    title: `${post.title} | Calculord Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return <BlogPostClientPage post={post} />
}
