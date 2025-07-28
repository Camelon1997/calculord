import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Blog Laboral y Financiero 2025 | Calculord",
  description:
    "📚 Blog especializado en derecho laboral, nóminas, cotizaciones y finanzas. Guías actualizadas 2025, consejos prácticos y análisis de normativa española.",
  keywords: [
    "blog laboral 2025",
    "derecho laboral España",
    "nóminas y cotizaciones",
    "SMI 2025",
    "IRPF 2025",
    "seguridad social",
    "finiquitos y despidos",
    "calculadoras laborales",
    "recursos humanos",
    "finanzas personales",
  ].join(", "),
  openGraph: {
    title: "Blog Laboral y Financiero 2025 | Calculord",
    description:
      "📚 Guías actualizadas sobre derecho laboral, nóminas y finanzas. Consejos prácticos y análisis de normativa española.",
    url: "https://calculord.com/blog",
    images: ["/og-image-blog.jpg"],
  },
  alternates: {
    canonical: "https://calculord.com/blog",
  },
}

const blogPosts = [
  {
    slug: "smi-2025-subida-salario-minimo-interprofesional",
    title: "SMI 2025: Nueva Subida a 1.184€ - Cómo Te Afecta",
    description:
      "Análisis completo de la subida del Salario Mínimo Interprofesional 2025. Impacto en nóminas, cotizaciones y calculadoras actualizadas.",
    category: "Normativa",
    readTime: "5 min",
    publishDate: "2025-01-28",
    featured: true,
    image: "/images/blog/smi-2025-hero.jpg",
    tags: ["SMI", "Salario Mínimo", "2025", "Normativa"],
  },
  {
    slug: "cotizaciones-seguridad-social-2025-cambios",
    title: "Cotizaciones Seguridad Social 2025: Todos los Cambios",
    description:
      "Nuevas bases de cotización, tipos y límites para 2025. Cómo calcular correctamente las cotizaciones de empresa y trabajador.",
    category: "Cotizaciones",
    readTime: "7 min",
    publishDate: "2025-01-27",
    featured: true,
    image: "/images/blog/cotizaciones-2025-hero.jpg",
    tags: ["Cotizaciones", "Seguridad Social", "2025"],
  },
  {
    slug: "como-calcular-finiquito-paso-a-paso",
    title: "Cómo Calcular tu Finiquito Paso a Paso [Con Ejemplos]",
    description:
      "Guía completa para calcular finiquitos: vacaciones pendientes, pagas extras, indemnizaciones. Ejemplos prácticos y calculadora gratuita.",
    category: "Guías Prácticas",
    readTime: "8 min",
    publishDate: "2025-01-26",
    featured: false,
    image: "/images/blog/finiquito-calculo-hero.jpg",
    tags: ["Finiquito", "Despidos", "Cálculo"],
  },
  {
    slug: "irpf-2025-nuevos-tramos-deducciones",
    title: "IRPF 2025: Nuevos Tramos y Deducciones Fiscales",
    description:
      "Cambios en el IRPF para 2025: nuevos tramos, deducciones familiares y cómo afecta a tu nómina. Calculadora IRPF actualizada.",
    category: "Fiscal",
    readTime: "6 min",
    publishDate: "2025-01-25",
    featured: false,
    image: "/images/blog/irpf-2025-hero.jpg",
    tags: ["IRPF", "Fiscal", "2025", "Deducciones"],
  },
  {
    slug: "despido-procedente-improcedente-diferencias",
    title: "Despido Procedente vs Improcedente: Diferencias Clave",
    description:
      "Guía completa sobre tipos de despido, indemnizaciones correspondientes y cómo calcular la compensación. Casos prácticos incluidos.",
    category: "Derecho Laboral",
    readTime: "9 min",
    publishDate: "2025-01-24",
    featured: false,
    image: "/images/blog/despidos-tipos-hero.jpg",
    tags: ["Despidos", "Indemnización", "Derecho Laboral"],
  },
  {
    slug: "calculadora-vs-excel-nominas-ventajas",
    title: "Calculadora vs Excel: ¿Qué es Mejor para Nóminas?",
    description:
      "Comparativa detallada entre calculadoras online y Excel para gestión de nóminas. Ventajas, desventajas y recomendaciones profesionales.",
    category: "Herramientas",
    readTime: "5 min",
    publishDate: "2025-01-23",
    featured: false,
    image: "/images/blog/calculadora-excel-hero.jpg",
    tags: ["Calculadoras", "Excel", "Nóminas", "Herramientas"],
  },
]

const categories = [
  { name: "Normativa", count: 8, color: "bg-blue-100 text-blue-800" },
  { name: "Guías Prácticas", count: 12, color: "bg-green-100 text-green-800" },
  { name: "Cotizaciones", count: 6, color: "bg-purple-100 text-purple-800" },
  { name: "Fiscal", count: 5, color: "bg-orange-100 text-orange-800" },
  { name: "Derecho Laboral", count: 9, color: "bg-red-100 text-red-800" },
  { name: "Herramientas", count: 4, color: "bg-indigo-100 text-indigo-800" },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">Calculord</span>
            </div>
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog Laboral y Financiero</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Guías actualizadas, análisis de normativa y consejos prácticos para profesionales de RRHH, trabajadores y
              empresas
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-blue-500/20 px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4 mr-2" />
                Actualizado 2025
              </div>
              <div className="flex items-center bg-blue-500/20 px-3 py-1 rounded-full">
                <Calculator className="w-4 h-4 mr-2" />
                Con Calculadoras
              </div>
              <div className="flex items-center bg-blue-500/20 px-3 py-1 rounded-full">
                <Clock className="w-4 h-4 mr-2" />
                Contenido Práctico
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Destacados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-gradient-to-r from-blue-500 to-blue-600 relative">
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white text-gray-900">{post.category}</Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">{post.title}</h3>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.publishDate).toLocaleDateString("es-ES")}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <Button className="w-full">
                            Leer Artículo
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Regular Posts */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Todos los Artículos</h2>
              <div className="space-y-6">
                {regularPosts.map((post) => (
                  <Card key={post.slug} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-48 h-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{post.category}</Badge>
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(post.publishDate).toLocaleDateString("es-ES")}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 4).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Link href={`/blog/${post.slug}`}>
                            <Button variant="outline" size="sm">
                              Leer más
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg">Categorías</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{category.name}</span>
                      <Badge className={category.color}>{category.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Calculators */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Calculadoras Populares</CardTitle>
                <CardDescription>Herramientas más utilizadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link
                    href="/calculadora-cotizaciones-seguridad-social"
                    className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-sm text-gray-900">Cotizaciones SS</div>
                    <div className="text-xs text-gray-500">Calcula cotizaciones 2025</div>
                  </Link>
                  <Link
                    href="/calculadora-coste-total-empresa"
                    className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-sm text-gray-900">Coste Total Empresa</div>
                    <div className="text-xs text-gray-500">Bruto a neto y viceversa</div>
                  </Link>
                  <Link
                    href="/calculadora-nomina"
                    className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-sm text-gray-900">Calculadora Nómina</div>
                    <div className="text-xs text-gray-500">Nómina completa IRPF</div>
                  </Link>
                  <Link
                    href="/calculadora-despidos"
                    className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-sm text-gray-900">Despidos</div>
                    <div className="text-xs text-gray-500">Indemnizaciones 2025</div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
