import Link from "next/link"
import Image from "next/image"
import { blogPosts, blogCategories, popularCalculators } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, Calculator } from "lucide-react"

export default function BlogPage() {
  const posts = Object.values(blogPosts).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const featuredPosts = posts.slice(0, 2)
  const otherPosts = posts.slice(2)

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Blog Laboral y Financiero</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Guías actualizadas, análisis de normativa y consejos prácticos para profesionales de RRHH, trabajadores y
            empresas.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-8">
            {/* Featured Posts */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Destacados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <Card className="h-full overflow-hidden bg-gray-900 text-white hover:shadow-xl transition-shadow duration-300 flex flex-col">
                      <div className="relative h-40">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{post.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <h3 className="font-bold text-xl text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 line-clamp-3 mb-4 text-sm flex-grow">{post.excerpt}</p>
                        <div className="mt-auto pt-4 border-t border-gray-700 text-xs text-gray-500 flex justify-between items-center">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Todos los Artículos</h2>
              <div className="space-y-6">
                {otherPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 flex flex-col sm:flex-row gap-6 items-start">
                        <div className="relative w-full sm:w-48 h-32 sm:h-full rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="flex-grow">
                          <Badge className="mb-2">{post.category}</Badge>
                          <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 line-clamp-2 mb-3 text-sm">{post.excerpt}</p>
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
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all ml-auto hidden sm:block" />
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
