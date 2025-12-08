import Link from "next/link"
import Image from "next/image"
import { blogPosts, blogCategories, popularCalculators } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, Calculator } from "lucide-react"

export default function BlogPage() {
  const posts = Object.values(blogPosts).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const featuredPosts = posts.slice(0, 3)
  const otherPosts = posts.slice(3)

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-balance">
            Blog Laboral y Financiero
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto text-pretty">
            Guías actualizadas, análisis de normativa y consejos prácticos para profesionales de RRHH, trabajadores,
            autónomos y jubilados en España.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-8">
            {/* Featured Posts */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </span>
                Artículos Destacados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                      <div className="relative h-48">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                            {post.categories[0]}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-3 mb-4 text-sm flex-grow">{post.excerpt}</p>
                        <div className="mt-auto pt-4 border-t text-xs text-gray-500 flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{new Date(post.date).toLocaleDateString("es-ES")}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>

            {/* All Posts */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Todos los Artículos</h2>
              <div className="space-y-6">
                {otherPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <Card className="hover:shadow-xl transition-all duration-300 hover:border-blue-300">
                      <CardContent className="p-6 flex flex-col sm:flex-row gap-6 items-start">
                        <div className="relative w-full sm:w-56 h-36 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-grow">
                          <Badge className="mb-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                            {post.categories[0]}
                          </Badge>
                          <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 line-clamp-2 mb-4 text-sm">{post.excerpt}</p>
                          <div className="text-xs text-gray-500 flex items-center gap-4">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{new Date(post.date).toLocaleDateString("es-ES")}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all ml-auto hidden sm:block" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categorías</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {blogCategories.map((category) => (
                      <li key={category.name}>
                        <Link
                          href="#"
                          className="flex justify-between items-center text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-100 p-2 rounded-md transition-colors"
                        >
                          <span>{category.name}</span>
                          <Badge variant="secondary">{category.count}</Badge>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Popular Calculators */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Calculadoras Populares</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {popularCalculators.map((calc) => (
                      <li key={calc.name}>
                        <Link
                          href={calc.href}
                          className="group flex items-start gap-4 p-2 rounded-md hover:bg-gray-100 transition-colors"
                        >
                          <div className="bg-blue-100 text-blue-600 p-2 rounded-md">
                            <Calculator className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-gray-900 group-hover:text-blue-600">{calc.name}</p>
                            <p className="text-xs text-gray-500">{calc.description}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
