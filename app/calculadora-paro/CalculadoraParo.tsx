"use client"

import { useState } from "react"
import {
  Banknote,
  Calculator,
  ArrowLeft,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  FileText,
  ArrowRight,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CalculadoraParo() {
  const [formData, setFormData] = useState({
    salarioBruto: "",
    mesesCotizados: "",
    edad: "",
    tieneHijos: "",
    numeroHijos: "",
    situacionFamiliar: "",
    tipoContrato: "indefinido",
    motivoCese: "despido",
    fechaUltimoParo: "",
    cobroPrevio: "",
  })
  const [resultados, setResultados] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const structuredDataCalculator = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Paro 2025",
    description: "Calcula tu prestación por desempleo, subsidio y duración exacta según la normativa del SEPE",
    url: "https://calculord.com/calculadora-paro",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Cálculo prestación por desempleo",
      "Subsidio por desempleo",
      "Duración exacta de la prestación",
      "Base reguladora actualizada",
      "Topes máximos y mínimos 2025",
      "Requisitos de acceso",
    ],
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto tiempo puedo cobrar el paro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La duración depende de los meses cotizados: de 12 a 17 meses cotizados = 4 meses de paro; de 18 a 23 meses = 6 meses; y así sucesivamente hasta un máximo de 24 meses de prestación con 72 meses cotizados.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto dinero se cobra de paro en 2025?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se cobra el 70% de la base reguladora los primeros 6 meses y el 50% a partir del séptimo mes. La cuantía mínima es de 480,98€ y la máxima de 1.398,96€ mensuales (con hijos a cargo puede ser mayor).",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué requisitos necesito para cobrar el paro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Necesitas: estar en situación legal de desempleo, haber cotizado al menos 360 días en los últimos 6 años, estar inscrito como demandante de empleo, no haber rechazado ofertas de trabajo adecuadas, y no tener ingresos superiores al 75% del SMI.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo cobrar subsidio después del paro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, si has agotado la prestación contributiva, tienes responsabilidades familiares o eres mayor de 45 años, puedes acceder al subsidio por desempleo de 480,98€ mensuales durante 6-30 meses según tu situación.",
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
        name: "Calculadora de Paro",
        item: "https://calculord.com/calculadora-paro",
      },
    ],
  }

  // Datos actualizados 2025
  const DATOS_PARO_2025 = {
    topeMinimo: 480.98, // €/mes
    topeMaximo: 1398.96, // €/mes sin hijos
    topeMaximoConHijos1: 1678.75, // €/mes con 1 hijo
    topeMaximoConHijos2: 1958.54, // €/mes con 2+ hijos
    porcentajePrimeros6Meses: 70,
    porcentajeResto: 50,
    subsidio: 480.98, // €/mes
    smi2025: 1184, // €/mes
  }

  const calcularDuracionPrestacion = (mesesCotizados) => {
    if (mesesCotizados < 12) return 0
    if (mesesCotizados <= 17) return 4
    if (mesesCotizados <= 23) return 6
    if (mesesCotizados <= 29) return 8
    if (mesesCotizados <= 35) return 10
    if (mesesCotizados <= 41) return 12
    if (mesesCotizados <= 47) return 14
    if (mesesCotizados <= 53) return 16
    if (mesesCotizados <= 59) return 18
    if (mesesCotizados <= 65) return 20
    if (mesesCotizados <= 71) return 22
    return 24 // Máximo 24 meses
  }

  const calcularBaseReguladora = (salarioBruto) => {
    // Base reguladora = promedio de las bases de cotización de los últimos 180 días
    // Simplificamos usando el salario bruto mensual
    const baseAnual = salarioBruto * 12
    const baseDiaria = baseAnual / 365
    return baseDiaria * 30 // Base mensual
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsCalculating(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    const resultadosCalculo = calcularParo()
    setResultados(resultadosCalculo)
    setIsCalculating(false)
  }

  const calcularParo = () => {
    const salarioBruto = Number.parseFloat(formData.salarioBruto) || 0
    const mesesCotizados = Number.parseInt(formData.mesesCotizados) || 0
    const edad = Number.parseInt(formData.edad) || 0
    const numeroHijos = Number.parseInt(formData.numeroHijos) || 0

    // Verificar requisitos básicos
    const cumpleRequisitos = mesesCotizados >= 12

    if (!cumpleRequisitos) {
      return {
        cumpleRequisitos: false,
        motivoRechazo: "Necesitas al menos 12 meses cotizados en los últimos 6 años",
        puedeSubsidio: edad >= 45 || numeroHijos > 0,
      }
    }

    // Calcular duración
    const duracionMeses = calcularDuracionPrestacion(mesesCotizados)

    // Calcular base reguladora
    const baseReguladora = calcularBaseReguladora(salarioBruto)

    // Calcular cuantías
    const cuantiaPrimeros6Meses = baseReguladora * (DATOS_PARO_2025.porcentajePrimeros6Meses / 100)
    const cuantiaResto = baseReguladora * (DATOS_PARO_2025.porcentajeResto / 100)

    // Aplicar topes
    let topeMaximo = DATOS_PARO_2025.topeMaximo
    if (numeroHijos === 1) topeMaximo = DATOS_PARO_2025.topeMaximoConHijos1
    if (numeroHijos >= 2) topeMaximo = DATOS_PARO_2025.topeMaximoConHijos2

    const cuantiaFinalPrimeros6 = Math.max(DATOS_PARO_2025.topeMinimo, Math.min(cuantiaPrimeros6Meses, topeMaximo))
    const cuantiaFinalResto = Math.max(DATOS_PARO_2025.topeMinimo, Math.min(cuantiaResto, topeMaximo))

    // Calcular totales
    const mesesPrimerosPeriodo = Math.min(6, duracionMeses)
    const mesesSegundoPeriodo = Math.max(0, duracionMeses - 6)

    const totalPrimerosPeriodo = cuantiaFinalPrimeros6 * mesesPrimerosPeriodo
    const totalSegundoPeriodo = cuantiaFinalResto * mesesSegundoPeriodo
    const totalPrestacion = totalPrimerosPeriodo + totalSegundoPeriodo

    // Calcular subsidio posterior
    const puedeSubsidio = edad >= 45 || numeroHijos > 0 || formData.situacionFamiliar === "cargas_familiares"
    let duracionSubsidio = 0
    if (puedeSubsidio) {
      if (edad >= 55) duracionSubsidio = 30
      else if (edad >= 45) duracionSubsidio = 18
      else if (numeroHijos > 0) duracionSubsidio = 6
    }

    return {
      cumpleRequisitos: true,
      baseReguladora: baseReguladora,
      duracionMeses: duracionMeses,
      cuantiaFinalPrimeros6: cuantiaFinalPrimeros6,
      cuantiaFinalResto: cuantiaFinalResto,
      mesesPrimerosPeriodo: mesesPrimerosPeriodo,
      mesesSegundoPeriodo: mesesSegundoPeriodo,
      totalPrestacion: totalPrestacion,
      puedeSubsidio: puedeSubsidio,
      duracionSubsidio: duracionSubsidio,
      cuantiaSubsidio: DATOS_PARO_2025.subsidio,
      totalSubsidio: DATOS_PARO_2025.subsidio * duracionSubsidio,
      totalGeneral: totalPrestacion + DATOS_PARO_2025.subsidio * duracionSubsidio,
      porcentajesSalario: {
        primeros6: (cuantiaFinalPrimeros6 / salarioBruto) * 100,
        resto: (cuantiaFinalResto / salarioBruto) * 100,
      },
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
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataCalculator) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Calculadoras Laborales</span>
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
      <section className="bg-gradient-to-br from-orange-50 to-yellow-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Banknote className="h-10 w-10 text-orange-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculadora de Paro
            <span className="block text-orange-600">2025</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Calcula tu prestación por desempleo, subsidio y duración exacta. Actualizada con los topes y cuantías del
            SEPE 2025. Incluye requisitos de acceso y opciones de subsidio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
              onClick={() => document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Banknote className="mr-2 h-5 w-5" />
              Calcular Mi Paro
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg bg-transparent"
              onClick={() => document.getElementById("requisitos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Requisitos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">70%</div>
              <div className="text-gray-600 text-sm">Primeros 6 meses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600 mb-2">50%</div>
              <div className="text-gray-600 text-sm">Resto del período</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">24</div>
              <div className="text-gray-600 text-sm">Meses máximo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">1.399€</div>
              <div className="text-gray-600 text-sm">Tope máximo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Calculator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="calculadora">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculadora de Prestación por Desempleo</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre cuánto puedes cobrar de paro y durante cuánto tiempo
          </p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-t-lg">
            <CardTitle className="text-2xl text-center">Calculadora de Paro SEPE 2025</CardTitle>
            <p className="text-center text-orange-100">Cálculo preciso de tu prestación por desempleo</p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Salario Bruto Mensual (€)
                    <span className="text-xs text-gray-500 ml-2">Último salario antes del desempleo</span>
                  </label>
                  <input
                    type="number"
                    value={formData.salarioBruto}
                    onChange={(e) => setFormData({ ...formData, salarioBruto: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                    placeholder="Ej: 2000"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Meses Cotizados
                    <span className="text-xs text-gray-500 ml-2">En los últimos 6 años</span>
                  </label>
                  <input
                    type="number"
                    value={formData.mesesCotizados}
                    onChange={(e) => setFormData({ ...formData, mesesCotizados: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                    placeholder="Ej: 36"
                    min="0"
                    max="72"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Edad</label>
                  <input
                    type="number"
                    value={formData.edad}
                    onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                    placeholder="Ej: 35"
                    min="16"
                    max="67"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Motivo del Cese</label>
                  <select
                    value={formData.motivoCese}
                    onChange={(e) => setFormData({ ...formData, motivoCese: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                    required
                  >
                    <option value="despido">Despido</option>
                    <option value="fin_contrato">Fin de contrato temporal</option>
                    <option value="reduccion_jornada">Reducción de jornada</option>
                    <option value="suspension">Suspensión temporal</option>
                    <option value="otros">Otros motivos</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">¿Tienes hijos a cargo?</label>
                  <select
                    value={formData.tieneHijos}
                    onChange={(e) => setFormData({ ...formData, tieneHijos: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="no">No tengo hijos a cargo</option>
                    <option value="si">Sí, tengo hijos a cargo</option>
                  </select>
                </div>

                {formData.tieneHijos === "si" && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Número de hijos a cargo</label>
                    <input
                      type="number"
                      value={formData.numeroHijos}
                      onChange={(e) => setFormData({ ...formData, numeroHijos: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                      placeholder="Ej: 2"
                      min="0"
                      max="10"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Situación Familiar</label>
                <select
                  value={formData.situacionFamiliar}
                  onChange={(e) => setFormData({ ...formData, situacionFamiliar: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                  required
                >
                  <option value="">Selecciona tu situación</option>
                  <option value="sin_cargas">Sin cargas familiares</option>
                  <option value="cargas_familiares">Con cargas familiares</option>
                  <option value="familia_numerosa">Familia numerosa</option>
                  <option value="discapacidad">Con discapacidad ≥33%</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 text-lg font-semibold"
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
                    Calcular Mi Prestación
                  </>
                )}
              </Button>
            </form>

            {resultados && (
              <div className="mt-8 space-y-6">
                {!resultados.cumpleRequisitos ? (
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                      <h3 className="text-lg font-bold text-red-800">No cumples los requisitos</h3>
                    </div>
                    <p className="text-red-700 mb-4">{resultados.motivoRechazo}</p>
                    {resultados.puedeSubsidio && (
                      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 mb-2">💡 Posible alternativa:</h4>
                        <p className="text-yellow-700 text-sm">
                          Podrías tener derecho al subsidio por desempleo ({formatearMoneda(DATOS_PARO_2025.subsidio)}
                          /mes) por tu edad o situación familiar.
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                        🎉 Tu Prestación por Desempleo
                      </h3>

                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm border">
                          <h4 className="text-sm font-semibold text-gray-600 mb-1 flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            Duración Total
                          </h4>
                          <p className="text-2xl font-bold text-orange-600">{resultados.duracionMeses}</p>
                          <p className="text-sm text-gray-500">meses</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border">
                          <h4 className="text-sm font-semibold text-gray-600 mb-1">Primeros 6 meses</h4>
                          <p className="text-2xl font-bold text-green-600">
                            {formatearMoneda(resultados.cuantiaFinalPrimeros6)}
                          </p>
                          <p className="text-sm text-gray-500">
                            {resultados.porcentajesSalario.primeros6.toFixed(1)}% del salario
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border">
                          <h4 className="text-sm font-semibold text-gray-600 mb-1">Resto del período</h4>
                          <p className="text-2xl font-bold text-blue-600">
                            {formatearMoneda(resultados.cuantiaFinalResto)}
                          </p>
                          <p className="text-sm text-gray-500">
                            {resultados.porcentajesSalario.resto.toFixed(1)}% del salario
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border">
                          <h4 className="text-sm font-semibold text-gray-600 mb-1">💰 Total Prestación</h4>
                          <p className="text-2xl font-bold text-purple-600">
                            {formatearMoneda(resultados.totalPrestacion)}
                          </p>
                          <p className="text-sm text-gray-500">Importe total</p>
                        </div>
                      </div>

                      {resultados.puedeSubsidio && (
                        <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
                          <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Subsidio Posterior Disponible
                          </h4>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="font-medium text-green-700">Cuantía mensual:</p>
                              <p className="text-lg font-bold text-green-600">
                                {formatearMoneda(resultados.cuantiaSubsidio)}
                              </p>
                            </div>
                            <div>
                              <p className="font-medium text-green-700">Duración:</p>
                              <p className="text-lg font-bold text-green-600">{resultados.duracionSubsidio} meses</p>
                            </div>
                            <div>
                              <p className="font-medium text-green-700">Total subsidio:</p>
                              <p className="text-lg font-bold text-green-600">
                                {formatearMoneda(resultados.totalSubsidio)}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg border">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">📊 Desglose Detallado</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="text-gray-700">Base reguladora mensual</span>
                            <span className="font-semibold text-gray-900">
                              {formatearMoneda(resultados.baseReguladora)}
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="text-gray-700">
                              Primeros {resultados.mesesPrimerosPeriodo} meses (70%)
                            </span>
                            <span className="font-semibold text-green-600">
                              {formatearMoneda(resultados.cuantiaFinalPrimeros6 * resultados.mesesPrimerosPeriodo)}
                            </span>
                          </div>
                          {resultados.mesesSegundoPeriodo > 0 && (
                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                              <span className="text-gray-700">
                                Siguientes {resultados.mesesSegundoPeriodo} meses (50%)
                              </span>
                              <span className="font-semibold text-blue-600">
                                {formatearMoneda(resultados.cuantiaFinalResto * resultados.mesesSegundoPeriodo)}
                              </span>
                            </div>
                          )}
                          <div className="border-t-2 border-gray-300 pt-4">
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-bold text-gray-900">TOTAL A RECIBIR</span>
                              <span className="text-xl font-bold text-purple-600">
                                {formatearMoneda(resultados.totalGeneral)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-bold text-blue-800 mb-4">📋 Información Importante</h4>
                        <div className="space-y-3 text-sm text-blue-700">
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <p>Debes renovar la demanda cada 3 meses</p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <p>Obligatorio buscar activamente empleo</p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <p>No puedes rechazar ofertas adecuadas</p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <p>Ingresos máximos: 75% del SMI ({formatearMoneda(DATOS_PARO_2025.smi2025 * 0.75)})</p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <p>Estos cálculos son orientativos. Consulta con el SEPE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Requisitos Section */}
      <section id="requisitos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Requisitos para Cobrar el Paro</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Condiciones que debes cumplir para acceder a la prestación por desempleo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                title: "Tiempo Cotizado",
                description: "Haber cotizado al menos 360 días (12 meses) en los últimos 6 años.",
                color: "blue",
              },
              {
                icon: <FileText className="h-8 w-8 text-green-600" />,
                title: "Situación Legal",
                description: "Estar en situación legal de desempleo (no voluntario salvo excepciones).",
                color: "green",
              },
              {
                icon: <Users className="h-8 w-8 text-purple-600" />,
                title: "Demandante de Empleo",
                description: "Estar inscrito como demandante de empleo y disponible para trabajar.",
                color: "purple",
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
                title: "Límite de Ingresos",
                description: "No tener ingresos superiores al 75% del SMI (888€/mes en 2025).",
                color: "orange",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-emerald-600" />,
                title: "Búsqueda Activa",
                description: "Comprometerse a buscar activamente empleo y aceptar ofertas adecuadas.",
                color: "emerald",
              },
              {
                icon: <AlertTriangle className="h-8 w-8 text-red-600" />,
                title: "No Sanciones",
                description: "No haber sido sancionado por rechazar ofertas de trabajo o formación.",
                color: "red",
              },
            ].map((requisito, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 bg-${requisito.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    {requisito.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{requisito.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{requisito.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculadoras Relacionadas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculadoras Laborales Relacionadas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Herramientas para completar tu análisis de desempleo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Calculadora de Despidos</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Si vienes de un despido, calcula tu indemnización y finiquito completo antes de solicitar el paro.
                </p>
                <Link href="/calculadora-despidos">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Calcular despido
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Cotizaciones Seguridad Social</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Verifica tus cotizaciones para calcular correctamente la base reguladora de tu prestación por
                  desempleo.
                </p>
                <Link href="/calculadora-cotizaciones-seguridad-social">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Ver cotizaciones
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Salario por Horas</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Si trabajabas por horas, calcula tu salario real para verificar la base de tu prestación por
                  desempleo.
                </p>
                <Link href="/calculadora-salario-por-horas">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Calcular salario
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Problemas con el SEPE?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Calcula los honorarios de un abogado especialista en prestaciones por desempleo
          </p>
          <Link href="/calculadora-honorarios-abogado">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Honorarios de Abogado Laboralista
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-6 w-6 text-orange-400" />
                <span className="text-xl font-bold">Calculadoras Laborales</span>
              </div>
              <p className="text-gray-400">
                La herramienta más precisa para calcular tu prestación por desempleo y subsidios.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Calculadoras Laborales</h3>
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
                  <Link href="/calculadora-despidos" className="hover:text-white">
                    Despidos
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-paro" className="hover:text-white">
                    Paro
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios Profesionales</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/calculadora-honorarios-abogado" className="hover:text-white">
                    Honorarios Abogado
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Honorarios Arquitecto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Honorarios Médicos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Información</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    SEPE 2025
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Subsidios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Requisitos Paro
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
            <p className="text-sm mt-2">
              * Los cálculos son orientativos basados en la normativa del SEPE. Consulta siempre con el organismo
              oficial.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
