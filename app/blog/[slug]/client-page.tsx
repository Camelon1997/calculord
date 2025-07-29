"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import type { BlogPost } from "@/types/blog"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Clock,
  User,
  Mail,
  Info,
  TrendingUp,
  BookOpen,
  Scale,
  Share2,
  Bookmark,
  FileText,
  Briefcase,
  Calculator,
  PiggyBank,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface BlogPostClientPageProps {
  post: BlogPost
}

const iconMap: { [key: string]: React.ReactNode } = {
  info: <FileText className="w-4 h-4" />,
  quien: <User className="w-4 h-4" />,
  practico: <Calculator className="w-4 h-4" />,
  historia: <TrendingUp className="w-4 h-4" />,
  legal: <Scale className="w-4 h-4" />,
  economia: <PiggyBank className="w-4 h-4" />,
  empresa: <Briefcase className="w-4 h-4" />,
}

export default function BlogPostClientPage({ post }: BlogPostClientPageProps) {
  const [activeTocId, setActiveTocId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTocId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -70% 0px" },
    )

    const headings = document.querySelectorAll("#blog-content h2")
    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <Link href="/blog" className="text-sm text-blue-600 hover:underline">
                Inicio
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/blog" className="text-sm text-blue-600 hover:underline">
                Blog
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-sm text-gray-500">{post.title}</span>
            </div>
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">{post.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString("es-ES")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Guardar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Content */}
          <main className="lg:col-span-8">
            <article
              id="blog-content"
              className="prose-calculord max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              {post.toc && post.toc.length > 0 && (
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-base font-bold flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      Índice
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {post.toc.map((item) => (
                        <li key={item.id} className="!mb-0">
                          <a
                            href={`#${item.id}`}
                            className={`flex items-center gap-3 text-sm p-2 rounded-md transition-all ${
                              activeTocId === item.id
                                ? "bg-blue-50 text-blue-700 font-semibold"
                                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                            }`}
                          >
                            <span className="text-gray-500">{iconMap[item.icon]}</span>
                            <span>{item.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Key Data */}
              {post.keyData && (
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-base font-bold flex items-center gap-2 text-blue-800">
                      <Info className="w-5 h-5" />
                      Datos Clave
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {Object.entries(post.keyData).map(([key, value]) => (
                        <li key={key} className="flex justify-between items-center text-sm !p-0">
                          <span className="text-gray-700">{key}:</span>
                          <span className="font-bold text-blue-900 bg-white px-2 py-0.5 rounded">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Newsletter */}
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-base font-bold flex items-center gap-2 text-green-800">
                    <Mail className="w-5 h-5" />
                    Newsletter Calculord
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-700 mb-4">
                    Recibe análisis, nuevas calculadoras y consejos laborales directamente en tu email.
                  </p>
                  <form className="space-y-2">
                    <Input type="email" placeholder="tu@email.com" className="bg-white" />
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Suscribirme Gratis</Button>
                  </form>
                  <p className="text-xs text-green-600 mt-2 text-center">Sin spam. Cancela cuando quieras.</p>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
