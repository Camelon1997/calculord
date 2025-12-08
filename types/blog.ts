export interface Author {
  name: string
  avatar: string
}

export interface TocItem {
  id: string
  text: string
  icon: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  categories: string[]
  tags: string[]
  date: string
  readTime: string
  author: Author
  toc?: TocItem[]
  keyData?: Record<string, string>
  relatedPosts?: string[]
}

export interface BlogCategory {
  name: string
  count: number
}

export interface PopularCalculator {
  name: string
  description: string
  href: string
}
