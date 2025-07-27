"use client"
import { Calculator, Clock, Scale, Users, TrendingUp, CheckCircle, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadoras Laborales Profesionales 2025",
  description:
    "Suite completa de herramientas gratuitas para calcular salarios, cotizaciones, SMI y más. Actualizadas con la normativa 2025.",
  url: "https://calculord.com",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Calculadora de Cotizaciones Seguridad Social",
    "Calculadora de Salario por Horas",
    "Calculadora de Honorarios de Abogado",
    "SMI 2025 actualizado",
    "Cálculos precisos y actualizados",
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <Calculator className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">Calculadoras Laborales</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#calculadoras" className="text-gray-700 hover:text-blue-600 font-medium">
                  Calculadoras
                </a>
                <a href="#caracteristicas" className="text-gray-700 hover:text-blue-600 font-medium">
                  Características
                </a>
                <a href="#testimonios" className="text-gray-700 hover:text-blue-600 font-medium">
                  Testimonios
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Calculadoras Laborales
                <span className="block text-blue-600">Profesionales 2025</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Suite completa de herramientas gratuitas para calcular salarios, cotizaciones, SMI y más. Actualizadas
                con la normativa 2025 y diseñadas para profesionales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                  onClick={() => {
                    document.getElementById("calculadoras")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Ver Calculadoras
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg bg-transparent"
                  onClick={() => {
                    document.getElementById("caracteristicas")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Conocer Más
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">+50K</div>
                  <div className="text-gray-600">Cálculos realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600">Gratuito</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2025</div>
                  <div className="text-gray-600">Actualizado</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculadoras Section */}
        <section id="calculadoras" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Calculadoras</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Herramientas profesionales para todos tus cálculos laborales
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Calculadora de Cotizaciones */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Cotizaciones Seguridad Social</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Calcula las cotizaciones exactas de trabajadores y empresas según el régimen general y autónomos.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Régimen General</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Autónomos</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Desglose detallado</span>
                    </div>
                  </div>
                  <Link href="/calculadora-cotizaciones-seguridad-social">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Usar Calculadora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Calculadora de Salario por Horas */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Salario por Horas</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Calcula tu salario real basado en las horas trabajadas. Incluye SMI 2025 y horas extra.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>SMI 2025 (9,26€/h)</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Horas extra +75%</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Salario neto real</span>
                    </div>
                  </div>
                  <Link href="/calculadora-salario-por-horas">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Usar Calculadora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Calculadora de Honorarios de Abogado */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Scale className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Honorarios de Abogado</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Calcula honorarios legales según baremos colegiales, complejidad del caso y tiempo invertido.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Baremos oficiales</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Por especialidad</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Tiempo y complejidad</span>
                    </div>
                  </div>
                  <Link href="/calculadora-honorarios-abogado">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                      Usar Calculadora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Próximamente - Calculadora de Nómina */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow opacity-75">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Calculadora de Nómina</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Genera nóminas completas con todos los conceptos salariales y deducciones.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>IRPF automático</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Todas las deducciones</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Exportar PDF</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gray-400 text-white cursor-not-allowed" disabled>
                    Próximamente ⚡
                  </Button>
                </CardContent>
              </Card>

              {/* Próximamente - Calculadora de IRPF */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow opacity-75">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Calculadora de IRPF</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Calcula el IRPF que debes pagar según tus ingresos y situación personal.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Tramos 2025</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Deducciones</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Por CCAA</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gray-400 text-white cursor-not-allowed" disabled>
                    Próximamente ⚡
                  </Button>
                </CardContent>
              </Card>

              {/* Próximamente - Calculadora de Finiquito */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow opacity-75">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Calculadora de Finiquito</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">Calcula el finiquito exacto al finalizar un contrato laboral.</p>
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Vacaciones pendientes</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Pagas prorrateadas</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Indemnizaciones</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gray-400 text-white cursor-not-allowed" disabled>
                    Próximamente ⚡
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Calculadoras de Honorarios Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Calculadoras de Honorarios Profesionales
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Herramientas especializadas para calcular honorarios y tarifas profesionales
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Calculadora de Honorarios de Abogado */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Scale className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Honorarios de Abogado</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Calcula honorarios legales según baremos colegiales, complejidad del caso y tiempo invertido.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Baremos oficiales</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Por especialidad</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Tiempo y complejidad</span>
                    </div>
                  </div>
                  <Link href="/calculadora-honorarios-abogado">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                      Usar Calculadora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Próximamente - Calculadora de Honorarios de Arquitecto */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow opacity-75">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-cyan-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Honorarios de Arquitecto</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Calcula honorarios de arquitectura según superficie, tipo de proyecto y fases del trabajo.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Por m² construidos</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Fases del proyecto</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Baremos colegiales</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gray-400 text-white cursor-not-allowed" disabled>
                    Próximamente ⚡
                  </Button>
                </CardContent>
              </Card>

              {/* Próximamente - Calculadora de Honorarios Médicos */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow opacity-75">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Honorarios Médicos</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Calcula honorarios médicos para consultas privadas, cirugías y tratamientos especializados.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Por especialidad</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Tipo de intervención</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Tarifas referenciales</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gray-400 text-white cursor-not-allowed" disabled>
                    Próximamente ⚡
                  </Button>
                </CardContent>
              </Card>

              {/* Próximamente - Calculadora de Honorarios de Consultor */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow opacity-75">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Honorarios de Consultor</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Calcula tarifas de consultoría según experiencia, sector y modalidad de trabajo.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Por horas/proyecto</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Nivel de experiencia</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Sector especializado</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gray-400 text-white cursor-not-allowed" disabled>
                    Próximamente ⚡
                  </Button>
                </CardContent>
              </Card>

              {/* Próximamente - Calculadora de Honorarios de Ingeniero */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow opacity-75">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-slate-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Honorarios de Ingeniero</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Calcula honorarios de ingeniería según tipo de proyecto, complejidad técnica y normativas.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Por especialidad</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Complejidad técnica</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Baremos oficiales</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gray-400 text-white cursor-not-allowed" disabled>
                    Próximamente ⚡
                  </Button>
                </CardContent>
              </Card>

              {/* Próximamente - Calculadora de Honorarios de Notario */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow opacity-75">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Scale className="h-8 w-8 text-rose-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Honorarios de Notario</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Calcula aranceles notariales según tipo de documento, cuantía y normativa vigente.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Aranceles oficiales</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Por tipo de documento</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Según cuantía</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gray-400 text-white cursor-not-allowed" disabled>
                    Próximamente ⚡
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="caracteristicas" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir nuestras calculadoras?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Herramientas profesionales diseñadas para obtener resultados precisos y actualizados
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Precisión Garantizada</h3>
                  <p className="text-gray-600">Algoritmos actualizados con la normativa laboral más reciente de 2025</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Resultados Instantáneos</h3>
                  <p className="text-gray-600">
                    Obtén cálculos complejos en segundos con nuestra tecnología optimizada
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">100% Privado</h3>
                  <p className="text-gray-600">
                    Todos los cálculos se realizan en tu navegador. No almacenamos datos personales
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonios" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Profesionales que confían en nosotros
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ana García",
                  role: "Gestora Laboral",
                  content:
                    "Uso estas calculadoras a diario en mi gestoría. Son precisas, rápidas y me ahorran mucho tiempo.",
                  rating: 5,
                },
                {
                  name: "Carlos Martínez",
                  role: "Director RRHH",
                  content: "Perfectas para calcular costes laborales y hacer presupuestos. Las recomiendo totalmente.",
                  rating: 5,
                },
                {
                  name: "Laura Sánchez",
                  role: "Trabajadora Autónoma",
                  content:
                    "Me ayudan a entender mis cotizaciones y planificar mis finanzas. Muy útiles y fáciles de usar.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para simplificar tus cálculos laborales?</h2>
            <p className="text-xl mb-8 opacity-90">Únete a miles de profesionales que ya usan nuestras herramientas</p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg font-semibold px-8 py-4"
              onClick={() => {
                document.getElementById("calculadoras")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Empezar Ahora - Es Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Calculator className="h-6 w-6 text-blue-400" />
                  <span className="text-xl font-bold">Calculadoras Laborales</span>
                </div>
                <p className="text-gray-400">Suite completa de herramientas laborales gratuitas para profesionales.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Calculadoras</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/calculadora-cotizaciones-seguridad-social" className="hover:text-white">
                      Cotizaciones SS
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculadora-salario-por-horas" className="hover:text-white">
                      Salario por Horas
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculadora-honorarios-abogado" className="hover:text-white">
                      Honorarios Abogado
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Información</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      SMI 2025
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Normativa Laboral
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Guías
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Privacidad
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Términos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Calculadoras Laborales. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
