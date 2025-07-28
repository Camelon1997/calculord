"use client"

import { useState } from "react"
import { Clock, Calculator, ArrowLeft, TrendingUp, ArrowRight, Banknote, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CalculadoraSalarioHoras() {
  const [formData, setFormData] = useState({
    horasTrabajadas: "",
    tipoCalculo: "semanal",
    salarioBase: "smi",
    salarioPersonalizado: "",
    horasExtra: "",
    tipoContrato: "general",
  })
  const [resultados, setResultados] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const structuredDataCalculator = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Salario por Horas 2025",
    description:
      "Calcula tu salario real basado en las horas trabajadas. Incluye SMI 2025 (9,26€/h) y horas extra con incremento del 75%",
    url: "https://calculord.com/calculadora-salario-por-horas",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Cálculo por horas trabajadas",
      "SMI 2025 actualizado (9,26€/h)",
      "Horas extra con incremento 75%",
      "Salario neto después cotizaciones",
      "Cálculo semanal y mensual",
    ],
  }

  const smiStructuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "SMI 2025",
    description: "Salario Mínimo Interprofesional para 2025 en España",
    termCode: "SMI2025",
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Normativa Laboral Española",
    },
    url: "https://calculord.com/calculadora-salario-por-horas",
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
        name: "Calculadora Salario por Horas",
        item: "https://calculord.com/calculadora-salario-por-horas",
      },
    ],
  }

  // SMI 2025 actualizado
  const SMI_2025 = {
    mensual: 1184,
    mensualProrrateo: 1381.33,
    anual: 16576,
    porHora: 9.26,
    porHoraGeneral: 7.73,
    horasSemanales: 40,
    horasMensuales: 153.33,
  }

  const cotizacionesGeneral = {
    trabajador: {
      contingenciasComunes: 4.7,
      desempleo: 1.55,
      formacionProfesional: 0.1,
    },
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsCalculating(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const resultadosCalculo = calcularSalario()
    setResultados(resultadosCalculo)
    setIsCalculating(false)
  }

  const calcularSalario = () => {
    const horasTrabajadas = Number.parseFloat(formData.horasTrabajadas) || 0
    const horasExtra = Number.parseFloat(formData.horasExtra) || 0

    // Determinar salario por hora base
    let salarioPorHora
    if (formData.salarioBase === "smi") {
      salarioPorHora = SMI_2025.porHora // 9.26€
    } else {
      salarioPorHora = Number.parseFloat(formData.salarioPersonalizado) || SMI_2025.porHora
    }

    // Calcular horas normales y extra
    let horasNormales = horasTrabajadas
    let horasExtraCalculadas = horasExtra

    // Si es cálculo semanal, verificar si excede 40h
    if (formData.tipoCalculo === "semanal" && horasTrabajadas > 40) {
      horasNormales = 40
      horasExtraCalculadas = horasTrabajadas - 40 + horasExtra
    }

    // Calcular salario bruto
    const salarioHorasNormales = horasNormales * salarioPorHora
    const salarioHorasExtra = horasExtraCalculadas * salarioPorHora * 1.75 // 75% extra mínimo

    let salarioBrutoSemanal = salarioHorasNormales + salarioHorasExtra
    let salarioBrutoMensual

    if (formData.tipoCalculo === "semanal") {
      salarioBrutoMensual = (salarioBrutoSemanal * 52) / 12 // Convertir a mensual
    } else {
      salarioBrutoMensual = salarioBrutoSemanal
      salarioBrutoSemanal = (salarioBrutoMensual * 12) / 52 // Convertir a semanal
    }

    // Calcular cotizaciones
    let cotizacionTrabajadorMensual = 0
    const desgloseTrabajador = {}

    for (const [concepto, porcentaje] of Object.entries(cotizacionesGeneral.trabajador)) {
      const cantidad = (salarioBrutoMensual * porcentaje) / 100
      cotizacionTrabajadorMensual += cantidad
      desgloseTrabajador[concepto] = {
        porcentaje: porcentaje,
        cantidad: cantidad,
      }
    }

    const salarioNetoMensual = salarioBrutoMensual - cotizacionTrabajadorMensual
    const salarioNetoSemanal = (salarioNetoMensual * 12) / 52

    return {
      horasTrabajadas: horasTrabajadas,
      horasExtra: horasExtraCalculadas,
      salarioPorHora: salarioPorHora,
      salarioBrutoSemanal: salarioBrutoSemanal,
      salarioBrutoMensual: salarioBrutoMensual,
      salarioBrutoAnual: salarioBrutoMensual * 14, // 14 pagas
      cotizacionTrabajador: cotizacionTrabajadorMensual,
      salarioNetoSemanal: salarioNetoSemanal,
      salarioNetoMensual: salarioNetoMensual,
      salarioNetoAnual: salarioNetoMensual * 14,
      desgloseTrabajador: desgloseTrabajador,
      porcentajeCotizacion: (cotizacionTrabajadorMensual / salarioBrutoMensual) * 100,
    }
  }

  const formatearMoneda = (cantidad) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(cantidad)
  }

  const formatearConcepto = (concepto) => {
    const conceptos = {
      contingenciasComunes: "Contingencias Comunes",
      desempleo: "Desempleo",
      formacionProfesional: "Formación Profesional",
    }
    return conceptos[concepto] || concepto
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataCalculator) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(smiStructuredData) }} />
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
      <section className="bg-gradient-to-br from-green-50 to-blue-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculadora de Salario
            <span className="block text-green-600">por Horas 2025</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Calcula tu salario real basado en las horas trabajadas. Incluye SMI 2025 (9,26€/h), horas extra con
            incremento del 75% y salario neto final.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              onClick={() => document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Clock className="mr-2 h-5 w-5" />
              Calcular Ahora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg bg-transparent"
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
              ¿Por qué usar nuestra calculadora de salario por horas?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Herramienta precisa para calcular tu salario real según las horas trabajadas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Cálculo por Horas</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Calcula tu salario exacto basado en las horas reales que trabajas, incluyendo horas extra
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">SMI 2025 Actualizado</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Basado en el Salario Mínimo Interprofesional actualizado: 1.184€/mes (9,26€/hora)
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Salario Neto Real</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Descuenta automáticamente las cotizaciones sociales para mostrarte tu salario neto final
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="calculadora">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Calculadora de Salario por Horas</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Calcula tu salario real basado en las horas trabajadas. Incluye SMI 2025 (9,26€/h) y horas extra con
            incremento del 75%
          </p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
            <CardTitle className="text-2xl text-center">Calculadora de Salario por Horas</CardTitle>
            <p className="text-center text-green-100">Calcula tu salario real según las horas trabajadas</p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Horas Trabajadas</label>
                  <input
                    type="number"
                    value={formData.horasTrabajadas}
                    onChange={(e) => setFormData({ ...formData, horasTrabajadas: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                    placeholder="Ej: 40"
                    min="0"
                    step="0.5"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Período de Cálculo</label>
                  <select
                    value={formData.tipoCalculo}
                    onChange={(e) => setFormData({ ...formData, tipoCalculo: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                  >
                    <option value="semanal">Por semana</option>
                    <option value="mensual">Por mes</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Salario Base</label>
                  <select
                    value={formData.salarioBase}
                    onChange={(e) => setFormData({ ...formData, salarioBase: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                  >
                    <option value="smi">SMI 2025 (9,26€/hora)</option>
                    <option value="personalizado">Salario personalizado</option>
                  </select>
                </div>

                {formData.salarioBase === "personalizado" && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Salario por Hora (€)</label>
                    <input
                      type="number"
                      value={formData.salarioPersonalizado}
                      onChange={(e) => setFormData({ ...formData, salarioPersonalizado: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                      placeholder="Ej: 10.00"
                      min="0"
                      step="0.01"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Horas Extra (opcional)</label>
                <input
                  type="number"
                  value={formData.horasExtra}
                  onChange={(e) => setFormData({ ...formData, horasExtra: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                  placeholder="Ej: 5"
                  min="0"
                  step="0.5"
                />
                <p className="text-sm text-gray-500 mt-1">Las horas extra se pagan con un 75% de incremento mínimo</p>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold"
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
                    Calcular Mi Salario
                  </>
                )}
              </Button>
            </form>

            {resultados && (
              <div className="mt-8 space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Tu Salario Calculado</h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Salario Semanal Neto</h4>
                      <p className="text-2xl font-bold text-green-600">
                        {formatearMoneda(resultados.salarioNetoSemanal)}
                      </p>
                      <p className="text-sm text-gray-500">Después de cotizaciones</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Salario Mensual Neto</h4>
                      <p className="text-2xl font-bold text-blue-600">
                        {formatearMoneda(resultados.salarioNetoMensual)}
                      </p>
                      <p className="text-sm text-gray-500">Después de cotizaciones</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Salario Anual Neto</h4>
                      <p className="text-2xl font-bold text-purple-600">
                        {formatearMoneda(resultados.salarioNetoAnual)}
                      </p>
                      <p className="text-sm text-gray-500">14 pagas</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Detalles del Cálculo</h4>
                      <div className="space-y-1 text-sm">
                        <p>
                          <span className="font-medium">Horas trabajadas:</span> {resultados.horasTrabajadas}h
                        </p>
                        <p>
                          <span className="font-medium">Horas extra:</span> {resultados.horasExtra}h
                        </p>
                        <p>
                          <span className="font-medium">Precio por hora:</span>{" "}
                          {formatearMoneda(resultados.salarioPorHora)}
                        </p>
                        <p>
                          <span className="font-medium">Salario bruto mensual:</span>{" "}
                          {formatearMoneda(resultados.salarioBrutoMensual)}
                        </p>
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Cotizaciones Descontadas</h4>
                      <div className="space-y-1 text-sm">
                        <p>
                          <span className="font-medium">Total cotizaciones:</span>{" "}
                          {formatearMoneda(resultados.cotizacionTrabajador)}
                        </p>
                        <p>
                          <span className="font-medium">Porcentaje:</span> {resultados.porcentajeCotizacion.toFixed(2)}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Desglose de Cotizaciones Mensuales</h4>
                  <div className="space-y-2">
                    {Object.entries(resultados.desgloseTrabajador).map(([concepto, datos]) => (
                      <div key={concepto} className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">
                          {formatearConcepto(concepto)} ({datos.porcentaje}%)
                        </span>
                        <span className="font-semibold text-gray-900">{formatearMoneda(datos.cantidad)}</span>
                      </div>
                    ))}
                    <div className="border-t-2 border-gray-300 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">TOTAL COTIZACIONES</span>
                        <span className="text-xl font-bold text-red-600">
                          {formatearMoneda(resultados.cotizacionTrabajador)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      {/* Calculadoras relacionadas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculadoras Laborales Relacionadas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Completa tu análisis salarial con estas herramientas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Cotizaciones Seguridad Social</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Calcula las cotizaciones exactas según tu salario por horas. Verifica cuánto cotizas realmente.
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
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Banknote className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Prestación por Desempleo</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Calcula tu prestación de paro según tu salario por horas. Conoce tus derechos laborales.
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
                  Calcula tu indemnización por despido basada en tu salario por horas. Protege tus derechos.
                </p>
                <Link href="/calculadora-despidos">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Calcular despido
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Problemas con tu salario por horas?</h2>
          <p className="text-xl text-green-100 mb-8">Consulta con un abogado laboralista especializado</p>
          <Link href="/calculadora-honorarios-abogado">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Honorarios de Abogado Laboralista
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
