"use client"

import { useState } from "react"
import {
  Home,
  Calculator,
  ArrowLeft,
  TrendingUp,
  CheckCircle,
  Star,
  Clock,
  Banknote,
  Briefcase,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const structuredDataCalculator = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de Hipoteca 2025",
  description: "Calcula tu cuota mensual de hipoteca, intereses totales y tabla de amortización completa",
  url: "https://calculord.com/calculadora-hipoteca",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Cálculo cuota mensual",
    "Tabla de amortización",
    "Intereses totales",
    "Sistema francés",
    "Simulador hipoteca",
  ],
  provider: {
    "@type": "Organization",
    name: "Calculord",
    url: "https://calculord.com",
  },
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo se calcula la cuota mensual de una hipoteca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La cuota mensual se calcula usando el sistema de amortización francés: M = P * [r(1+r)^n] / [(1+r)^n - 1], donde P es el capital, r el interés mensual y n el número de cuotas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué porcentaje de mis ingresos debería destinar a la hipoteca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se recomienda que la cuota hipotecaria no supere el 30-35% de tus ingresos netos mensuales para mantener una situación financiera saludable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué gastos adicionales tiene una hipoteca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Además de la cuota mensual, debes considerar gastos de notaría, registro, tasación, gestoría y seguros obligatorios, que pueden suponer entre un 8-12% del precio de la vivienda.",
      },
    },
  ],
}

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://calculord.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Calculadora de Hipoteca",
      item: "https://calculord.com/calculadora-hipoteca",
    },
  ],
}

export default function CalculadoraHipoteca() {
  const [formData, setFormData] = useState({
    importe: "",
    interes: "3.5",
    plazo: "25",
  })
  const [resultados, setResultados] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [mostrarTabla, setMostrarTabla] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsCalculating(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const resultadosCalculo = calcularHipoteca()
    setResultados(resultadosCalculo)
    setIsCalculating(false)
  }

  const calcularHipoteca = () => {
    const P = Number.parseFloat(formData.importe) || 0
    const r = Number.parseFloat(formData.interes) / 100 / 12
    const n = Number.parseFloat(formData.plazo) * 12

    if (P <= 0 || r < 0 || n <= 0) {
      return null
    }

    // Fórmula de cuota mensual
    const cuotaMensual = r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const importeTotal = cuotaMensual * n
    const interesesTotales = importeTotal - P

    // Generar tabla de amortización
    const tablaAmortizacion = []
    let capitalPendiente = P

    for (let mes = 1; mes <= n; mes++) {
      const interesesMes = capitalPendiente * r
      const capitalMes = cuotaMensual - interesesMes
      capitalPendiente -= capitalMes

      if (capitalPendiente < 0) capitalPendiente = 0

      tablaAmortizacion.push({
        mes,
        cuotaMensual,
        capital: capitalMes,
        intereses: interesesMes,
        capitalPendiente,
      })
    }

    return {
      cuotaMensual,
      interesesTotales,
      importeTotal,
      tablaAmortizacion,
    }
  }

  const formatearMoneda = (cantidad) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(cantidad)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataCalculator) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center space-x-2">
                <Calculator className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">Calculord</span>
              </Link>
              <Link href="/">
                <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Volver al inicio</span>
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Home className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Calculadora de Hipoteca
              <span className="block text-blue-600">2025</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Calcula tu cuota mensual de hipoteca, intereses totales y tabla de amortización completa. Sistema de
              amortización francés actualizado 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calcular Ahora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg bg-transparent"
              >
                Ver Ejemplo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Por qué usar nuestra calculadora de hipoteca?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Herramienta precisa para calcular tu hipoteca con sistema francés
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Cuota Mensual</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Calcula tu cuota mensual exacta con el sistema de amortización francés más utilizado
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Tabla de Amortización</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Visualiza mes a mes cómo evoluciona tu deuda y cuánto pagas de capital e intereses
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Cálculo Preciso</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Fórmulas matemáticas exactas para obtener resultados precisos y confiables
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Calculator */}
        <section className="py-20 bg-gray-50" id="calculadora">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="text-2xl text-center">Calculadora de Hipoteca</CardTitle>
                <p className="text-center text-blue-100">Cálculo preciso y actualizado con la normativa 2025</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Importe del Préstamo (€)
                      <span className="text-xs text-gray-500 ml-2">
                        Introduce el importe total que necesitas financiar
                      </span>
                    </label>
                    <input
                      type="number"
                      value={formData.importe}
                      onChange={(e) => setFormData({ ...formData, importe: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                      placeholder="Ej: 200000"
                      min="0"
                      step="1000"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Tipo de Interés Anual (%)
                        <span className="text-xs text-gray-500 ml-2">TIN ofrecido por el banco</span>
                      </label>
                      <input
                        type="number"
                        value={formData.interes}
                        onChange={(e) => setFormData({ ...formData, interes: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                        placeholder="Ej: 3.5"
                        min="0"
                        max="15"
                        step="0.01"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Plazo (años)
                        <span className="text-xs text-gray-500 ml-2">Duración del préstamo</span>
                      </label>
                      <input
                        type="number"
                        value={formData.plazo}
                        onChange={(e) => setFormData({ ...formData, plazo: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                        placeholder="Ej: 25"
                        min="1"
                        max="40"
                        step="1"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
                    disabled={isCalculating}
                  >
                    {isCalculating ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Calculando...
                      </>
                    ) : (
                      <>
                        <Calculator className="mr-2 h-5 w-5" />
                        Calcular Hipoteca
                      </>
                    )}
                  </Button>
                </form>

                {resultados && (
                  <div className="mt-8 space-y-6">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Resultados del Cálculo</h3>

                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm border">
                          <h4 className="text-sm font-semibold text-gray-600 mb-1">Cuota Mensual</h4>
                          <p className="text-2xl font-bold text-blue-600">{formatearMoneda(resultados.cuotaMensual)}</p>
                          <p className="text-sm text-gray-500">Pago mensual fijo</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border">
                          <h4 className="text-sm font-semibold text-gray-600 mb-1">Intereses Totales</h4>
                          <p className="text-2xl font-bold text-orange-600">
                            {formatearMoneda(resultados.interesesTotales)}
                          </p>
                          <p className="text-sm text-gray-500">Coste del préstamo</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border">
                          <h4 className="text-sm font-semibold text-gray-600 mb-1">Total a Pagar</h4>
                          <p className="text-2xl font-bold text-purple-600">
                            {formatearMoneda(resultados.importeTotal)}
                          </p>
                          <p className="text-sm text-gray-500">Capital + intereses</p>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <Button
                          onClick={() => setMostrarTabla(!mostrarTabla)}
                          variant="outline"
                          className="bg-transparent"
                        >
                          {mostrarTabla ? "Ocultar" : "Ver"} tabla de amortización
                        </Button>
                      </div>
                    </div>

                    {mostrarTabla && (
                      <div className="bg-gray-50 p-6 rounded-lg border">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Tabla de Amortización</h4>
                        <div className="max-h-96 overflow-y-auto">
                          <table className="w-full text-sm">
                            <thead className="bg-gray-100 sticky top-0">
                              <tr>
                                <th className="px-4 py-2 text-left">Mes</th>
                                <th className="px-4 py-2 text-right">Cuota</th>
                                <th className="px-4 py-2 text-right">Capital</th>
                                <th className="px-4 py-2 text-right">Intereses</th>
                                <th className="px-4 py-2 text-right">Pendiente</th>
                              </tr>
                            </thead>
                            <tbody>
                              {resultados.tablaAmortizacion.slice(0, 60).map((fila, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                  <td className="px-4 py-2 font-medium">{fila.mes}</td>
                                  <td className="px-4 py-2 text-right">{formatearMoneda(fila.cuotaMensual)}</td>
                                  <td className="px-4 py-2 text-right text-green-600">
                                    {formatearMoneda(fila.capital)}
                                  </td>
                                  <td className="px-4 py-2 text-right text-red-600">
                                    {formatearMoneda(fila.intereses)}
                                  </td>
                                  <td className="px-4 py-2 text-right">{formatearMoneda(fila.capitalPendiente)}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Perfecto para compradores de vivienda
                </h2>
                <div className="space-y-4">
                  {[
                    "Compradores de primera vivienda",
                    "Inversores inmobiliarios",
                    "Asesores financieros",
                    "Agentes inmobiliarios",
                    "Cualquier persona que busque hipoteca",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                <div className="text-center">
                  <Home className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Actualizado 2025</h3>
                  <p className="text-gray-600">Con las condiciones del mercado actual</p>
                  <p className="text-sm text-gray-500 mt-2">Fórmulas matemáticas precisas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros usuarios</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Laura Fernández",
                  role: "Compradora de vivienda",
                  content:
                    "Me ayudó a comparar diferentes ofertas bancarias y elegir la mejor hipoteca. Muy fácil de usar y precisa.",
                  rating: 5,
                },
                {
                  name: "Miguel Santos",
                  role: "Asesor Financiero",
                  content:
                    "Uso esta calculadora con mis clientes para mostrarles diferentes escenarios. Los resultados son exactos.",
                  rating: 5,
                },
                {
                  name: "Carmen López",
                  role: "Agente Inmobiliaria",
                  content:
                    "Perfecta para ayudar a mis clientes a entender cuánto pueden permitirse. La tabla de amortización es muy útil.",
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

        {/* Calculadoras relacionadas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculadoras Laborales Relacionadas</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Otras herramientas laborales que te pueden interesar
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Salario por Horas</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Calcula el salario según las horas trabajadas y las cotizaciones de la Seguridad Social 2025.
                    Perfecto para verificar si tus cotizaciones son correctas.
                  </p>
                  <Link href="/calculadora-salario-por-horas">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Calcular salario
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Banknote className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Prestación por Desempleo</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Calcula la prestación de paro basada en tus cotizaciones. Una de las más útiles para verificar el
                    cálculo de la base reguladora.
                  </p>
                  <Link href="/calculadora-paro">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      Calcular paro
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Despidos y Finiquito</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Calcula la indemnización por despido según el tipo. Útil para verificar el cálculo de la base
                    reguladora.
                  </p>
                  <Link href="/calculadora-despidos">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Calcular despidos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Necesitas asesoramiento legal laboral?</h2>
            <p className="text-xl text-blue-100 mb-8">Calcula también los honorarios de abogados especialistas</p>
            <Link href="/calculadora-honorarios-abogado">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Honorarios de Abogado Laboralista
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
