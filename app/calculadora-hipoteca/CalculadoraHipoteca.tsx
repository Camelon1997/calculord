"use client"

import { useState } from "react"
import { Home, Calculator, TrendingUp, CheckCircle, Star, ArrowRight, Info, DollarSign, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import RelatedCalculatorCard from "@/app/components/RelatedCalculatorCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
    entrada: "",
    interes: "3.5",
    plazo: "25",
    gastosNotaria: "1500",
    gastosRegistro: "800",
    tasacion: "300",
    gestoria: "500",
  })
  const [resultados, setResultados] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [mostrarTabla, setMostrarTabla] = useState(false)
  const [mostrarGastos, setMostrarGastos] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsCalculating(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const resultadosCalculo = calcularHipoteca()
    setResultados(resultadosCalculo)
    setIsCalculating(false)
  }

  const calcularHipoteca = () => {
    const precioVivienda = Number.parseFloat(formData.importe) || 0
    const entrada = Number.parseFloat(formData.entrada) || 0
    const P = precioVivienda - entrada
    const r = Number.parseFloat(formData.interes) / 100 / 12
    const n = Number.parseFloat(formData.plazo) * 12

    const gastosNotaria = Number.parseFloat(formData.gastosNotaria) || 0
    const gastosRegistro = Number.parseFloat(formData.gastosRegistro) || 0
    const tasacion = Number.parseFloat(formData.tasacion) || 0
    const gestoria = Number.parseFloat(formData.gestoria) || 0
    const gastosIniciales = gastosNotaria + gastosRegistro + tasacion + gestoria
    const desembolsoInicial = entrada + gastosIniciales

    if (P <= 0 || r < 0 || n <= 0) {
      return null
    }

    // Fórmula de cuota mensual
    const cuotaMensual = r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const importeTotal = cuotaMensual * n
    const interesesTotales = importeTotal - P

    const tae = (Math.pow(1 + r, 12) - 1) * 100

    const porcentajeIntereses = (interesesTotales / importeTotal) * 100

    // Generar tabla de amortización
    const tablaAmortizacion = []
    let capitalPendiente = P
    let interesesAcumulados = 0
    let capitalAcumulado = 0

    for (let mes = 1; mes <= n; mes++) {
      const interesesMes = capitalPendiente * r
      const capitalMes = cuotaMensual - interesesMes
      capitalPendiente -= capitalMes
      interesesAcumulados += interesesMes
      capitalAcumulado += capitalMes

      if (capitalPendiente < 0) capitalPendiente = 0

      tablaAmortizacion.push({
        mes,
        cuotaMensual,
        capital: capitalMes,
        intereses: interesesMes,
        capitalPendiente,
        interesesAcumulados,
        capitalAcumulado,
        porcentajeAmortizado: (capitalAcumulado / P) * 100,
      })
    }

    return {
      precioVivienda,
      entrada,
      capitalPrestamo: P,
      cuotaMensual,
      interesesTotales,
      importeTotal,
      tae,
      porcentajeIntereses,
      gastosIniciales,
      desembolsoInicial,
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
        {/* Hero Section - simplificado */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Actualizado 2025
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Calculadora de Hipoteca
              <span className="block text-blue-600 mt-2">Sistema Francés</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Calcula tu cuota mensual, TAE, intereses totales y gastos de compraventa. Tabla de amortización completa
              mes a mes.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              onClick={() => document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calcular Mi Hipoteca
            </Button>
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
        <section className="py-12 sm:py-20 bg-gray-50" id="calculadora">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-xl sm:text-2xl text-center">Simulador de Hipoteca 2025</CardTitle>
                <p className="text-center text-blue-100 text-sm">
                  Sistema de amortización francés con gastos incluidos
                </p>
              </CardHeader>
              <CardContent className="p-4 sm:p-8">
                <Tabs defaultValue="basico" className="mb-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="basico">Datos Básicos</TabsTrigger>
                    <TabsTrigger value="gastos" onClick={() => setMostrarGastos(true)}>
                      Gastos Adicionales
                    </TabsTrigger>
                  </TabsList>

                  <form onSubmit={handleSubmit}>
                    <TabsContent value="basico" className="space-y-6 mt-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Precio de la Vivienda (€)
                          <span className="text-xs text-gray-500 ml-2 font-normal">Precio total de compra</span>
                        </label>
                        <input
                          type="number"
                          value={formData.importe}
                          onChange={(e) => setFormData({ ...formData, importe: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                          placeholder="Ej: 250000"
                          min="0"
                          step="1000"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Entrada / Ahorros (€)
                          <span className="text-xs text-gray-500 ml-2 font-normal">
                            Mínimo recomendado 20% del precio
                          </span>
                        </label>
                        <input
                          type="number"
                          value={formData.entrada}
                          onChange={(e) => setFormData({ ...formData, entrada: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                          placeholder="Ej: 50000"
                          min="0"
                          step="1000"
                          required
                        />
                        {formData.importe && formData.entrada && (
                          <p className="text-sm text-gray-600 mt-1">
                            Entrada:{" "}
                            {(
                              (Number.parseFloat(formData.entrada) / Number.parseFloat(formData.importe)) *
                              100
                            ).toFixed(1)}
                            %
                            {Number.parseFloat(formData.entrada) / Number.parseFloat(formData.importe) < 0.2 && (
                              <span className="text-orange-600 ml-2">⚠️ Mínimo recomendado 20%</span>
                            )}
                          </p>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Tipo de Interés Anual (%)
                            <span className="text-xs text-gray-500 ml-2 font-normal">TIN del banco</span>
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
                            <span className="text-xs text-gray-500 ml-2 font-normal">Duración total</span>
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
                    </TabsContent>

                    <TabsContent value="gastos" className="space-y-4 sm:space-y-6 mt-6">
                      <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <p className="text-sm text-gray-700">
                          <Info className="inline h-4 w-4 mr-1" />
                          Estos son gastos aproximados típicos. Ajústalos según tu caso específico.
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Notaría (€)</label>
                          <input
                            type="number"
                            value={formData.gastosNotaria}
                            onChange={(e) => setFormData({ ...formData, gastosNotaria: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="1500"
                            min="0"
                            step="100"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Registro (€)</label>
                          <input
                            type="number"
                            value={formData.gastosRegistro}
                            onChange={(e) => setFormData({ ...formData, gastosRegistro: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="800"
                            min="0"
                            step="100"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Tasación (€)</label>
                          <input
                            type="number"
                            value={formData.tasacion}
                            onChange={(e) => setFormData({ ...formData, tasacion: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="300"
                            min="0"
                            step="50"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Gestoría (€)</label>
                          <input
                            type="number"
                            value={formData.gestoria}
                            onChange={(e) => setFormData({ ...formData, gestoria: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="500"
                            min="0"
                            step="100"
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold mt-6"
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
                </Tabs>

                {resultados && (
                  <div className="mt-8 space-y-6">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Resumen de tu Hipoteca</h3>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm border">
                          <h4 className="text-xs font-semibold text-gray-600 mb-1">Cuota Mensual</h4>
                          <p className="text-xl sm:text-2xl font-bold text-blue-600">
                            {formatearMoneda(resultados.cuotaMensual)}
                          </p>
                          <p className="text-xs text-gray-500">Pago fijo mensual</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border">
                          <h4 className="text-xs font-semibold text-gray-600 mb-1">TAE</h4>
                          <p className="text-xl sm:text-2xl font-bold text-purple-600">{resultados.tae.toFixed(2)}%</p>
                          <p className="text-xs text-gray-500">Coste real anual</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border">
                          <h4 className="text-xs font-semibold text-gray-600 mb-1">Intereses Totales</h4>
                          <p className="text-lg sm:text-xl font-bold text-orange-600">
                            {formatearMoneda(resultados.interesesTotales)}
                          </p>
                          <p className="text-xs text-gray-500">
                            {resultados.porcentajeIntereses.toFixed(1)}% del total
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border">
                          <h4 className="text-xs font-semibold text-gray-600 mb-1">Total a Pagar</h4>
                          <p className="text-lg sm:text-xl font-bold text-gray-900">
                            {formatearMoneda(resultados.importeTotal)}
                          </p>
                          <p className="text-xs text-gray-500">Capital + intereses</p>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">💰 Desembolso Inicial Total</h4>
                        <div className="space-y-1 text-sm text-gray-700">
                          <div className="flex justify-between">
                            <span>Entrada:</span>
                            <span className="font-semibold">{formatearMoneda(resultados.entrada)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Gastos (notaría, registro, etc.):</span>
                            <span className="font-semibold">{formatearMoneda(resultados.gastosIniciales)}</span>
                          </div>
                          <div className="flex justify-between border-t border-yellow-300 pt-2 text-base font-bold">
                            <span>Total necesario:</span>
                            <span className="text-orange-700">{formatearMoneda(resultados.desembolsoInicial)}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 flex-wrap justify-center">
                        <Button onClick={() => setMostrarTabla(!mostrarTabla)} variant="outline" size="sm">
                          {mostrarTabla ? "Ocultar" : "Ver"} Tabla de Amortización
                        </Button>
                      </div>
                    </div>

                    {/* ... existing code for tabla ... */}

                    {mostrarTabla && (
                      <div className="bg-white p-4 sm:p-6 rounded-lg border shadow-sm">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Tabla de Amortización Mensual</h4>
                        <div className="overflow-x-auto">
                          <div className="max-h-96 overflow-y-auto">
                            <table className="w-full text-sm">
                              <thead className="bg-gray-100 sticky top-0">
                                <tr>
                                  <th className="px-3 py-2 text-left text-xs">Mes</th>
                                  <th className="px-3 py-2 text-right text-xs">Cuota</th>
                                  <th className="px-3 py-2 text-right text-xs">Capital</th>
                                  <th className="px-3 py-2 text-right text-xs">Intereses</th>
                                  <th className="px-3 py-2 text-right text-xs">Pendiente</th>
                                  <th className="px-3 py-2 text-right text-xs">% Amortizado</th>
                                </tr>
                              </thead>
                              <tbody>
                                {resultados.tablaAmortizacion.map((fila, index) => (
                                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="px-3 py-2 font-medium">{fila.mes}</td>
                                    <td className="px-3 py-2 text-right">{formatearMoneda(fila.cuotaMensual)}</td>
                                    <td className="px-3 py-2 text-right text-green-600">
                                      {formatearMoneda(fila.capital)}
                                    </td>
                                    <td className="px-3 py-2 text-right text-red-600">
                                      {formatearMoneda(fila.intereses)}
                                    </td>
                                    <td className="px-3 py-2 text-right">{formatearMoneda(fila.capitalPendiente)}</td>
                                    <td className="px-3 py-2 text-right text-blue-600">
                                      {fila.porcentajeAmortizado.toFixed(1)}%
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Guía Completa sobre Hipotecas en España 2025
            </h2>

            <div className="prose prose-blue max-w-none space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">¿Cómo se Calcula la Cuota de una Hipoteca?</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  En España, el sistema más utilizado es el de <strong>amortización francesa</strong>, donde pagas una
                  cuota mensual fija durante toda la vida del préstamo. Esta cuota se calcula con la fórmula:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  Cuota = P × [r(1+r)^n] / [(1+r)^n - 1]
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  Donde P es el capital prestado, r el tipo de interés mensual, y n el número total de cuotas.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tipos de Hipotecas Disponibles en 2025</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Hipoteca Fija</h4>
                    <p className="text-gray-700">
                      El tipo de interés permanece constante durante toda la vida del préstamo. Ofrece seguridad y
                      previsibilidad en tus pagos mensuales.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Hipoteca Variable</h4>
                    <p className="text-gray-700">
                      El tipo de interés se revisa periódicamente (generalmente cada 6 o 12 meses) según un índice de
                      referencia como el Euríbor. Puede subir o bajar.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Hipoteca Mixta</h4>
                    <p className="text-gray-700">
                      Combina un periodo inicial a tipo fijo (generalmente 5-10 años) seguido de un tipo variable.
                      Equilibra seguridad inicial con flexibilidad futura.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gastos Adicionales de la Hipoteca</h3>
                <p className="text-gray-700 mb-3">
                  Además del precio de la vivienda y la entrada, debes considerar estos gastos iniciales:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Notaría:</strong> Entre 600€ y 2.000€ para formalizar la escritura de compraventa y el
                      préstamo hipotecario
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Registro de la Propiedad:</strong> Entre 400€ y 1.200€ para inscribir la hipoteca
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Tasación:</strong> Entre 250€ y 600€ para valorar oficialmente la vivienda
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Gestoría:</strong> Entre 300€ y 800€ para tramitar toda la documentación
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Seguros obligatorios:</strong> Seguro de hogar y seguro de vida (varía según perfil)
                    </span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-3">
                  <strong>Total estimado:</strong> Entre el 8% y 12% del precio de la vivienda en gastos adicionales.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Consejos para Elegir tu Hipoteca</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">💰 Entrada Mínima</h4>
                    <p className="text-sm text-gray-700">
                      Los bancos suelen financiar hasta el 80% del valor de tasación. Necesitarás al menos un 20% de
                      entrada más gastos.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">📊 Cuota vs Ingresos</h4>
                    <p className="text-sm text-gray-700">
                      La cuota no debería superar el 30-35% de tus ingresos netos mensuales para mantener estabilidad
                      financiera.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">⏱️ Plazo Adecuado</h4>
                    <p className="text-sm text-gray-700">
                      Plazos más largos reducen la cuota mensual pero aumentan los intereses totales. Busca el
                      equilibrio.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">🔍 Compara Ofertas</h4>
                    <p className="text-sm text-gray-700">
                      Compara el TAE (no solo el TIN) entre diferentes bancos. Pequeñas diferencias suponen miles de
                      euros.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Diferencia entre TIN y TAE</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">TIN (Tipo de Interés Nominal)</h4>
                    <p className="text-gray-700">
                      Es el porcentaje fijo que se aplica sobre el capital pendiente. Es el que aparece en el contrato
                      pero NO incluye gastos ni comisiones.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">TAE (Tasa Anual Equivalente)</h4>
                    <p className="text-gray-700">
                      Es el coste real de la hipoteca incluyendo el TIN, comisiones y gastos. Es el indicador que debes
                      usar para comparar ofertas entre bancos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Calculadoras Financieras Relacionadas
              </h2>
              <p className="text-lg text-gray-600">Otras herramientas útiles para tu economía personal</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <RelatedCalculatorCard
                title="Calculadora de Ahorro"
                description="Calcula el crecimiento de tus ahorros con intereses compuestos. Planifica tu futuro financiero y alcanza tus objetivos."
                href="/calculadora-ahorro"
                icon={<TrendingUp className="h-8 w-8 text-green-600" />}
                iconBgClassName="bg-green-100"
                buttonClassName="bg-green-600 hover:bg-green-700 text-white"
                buttonText="Calcular Ahorro"
                features={["Interés compuesto", "Aportaciones periódicas", "Proyección a largo plazo"]}
              />

              <RelatedCalculatorCard
                title="Conversor Bruto-Neto"
                description="Convierte tu salario bruto en neto aplicando IRPF y Seguridad Social según tu comunidad autónoma."
                href="/conversor-salario-bruto-neto"
                icon={<DollarSign className="h-8 w-8 text-blue-600" />}
                iconBgClassName="bg-blue-100"
                buttonClassName="bg-blue-600 hover:bg-blue-700 text-white"
                buttonText="Convertir Salario"
                features={["17 comunidades", "IRPF 2025", "Resultados inmediatos"]}
              />

              <RelatedCalculatorCard
                title="Conversor IVA"
                description="Calcula precios con y sin IVA. Incluye todos los tipos: general 21%, reducido 10% y superreducido 4%."
                href="/conversor-iva"
                icon={<FileText className="h-8 w-8 text-purple-600" />}
                iconBgClassName="bg-purple-100"
                buttonClassName="bg-purple-600 hover:bg-purple-700 text-white"
                buttonText="Calcular IVA"
                features={["Añadir/Quitar IVA", "3 tipos de IVA", "Cálculo instantáneo"]}
              />
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
