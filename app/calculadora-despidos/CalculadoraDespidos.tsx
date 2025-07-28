"use client"

import { useState } from "react"
import {
  Briefcase,
  Calculator,
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Clock,
  Euro,
  FileText,
  Banknote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CalculadoraDespidos() {
  const [formData, setFormData] = useState({
    salarioBruto: "",
    pagas: "14",
    antiguedad: "",
    fechaInicio: "",
    tipoDespido: "",
    tipoContrato: "indefinido",
    vacacionesPendientes: "",
    horasExtra: "",
    complementos: "",
    causaDespido: "",
    procedimiento: "",
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [resultados, setResultados] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const structuredDataCalculator = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Despidos 2025",
    description:
      "Calcula la indemnización por despido, finiquito y prestación por desempleo según la normativa laboral española",
    url: "https://calculord.com/calculadora-despidos",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Cálculo de indemnización por despido",
      "Finiquito completo",
      "Prestación por desempleo",
      "Todos los tipos de despido",
      "Salarios de tramitación",
      "Vacaciones pendientes",
    ],
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto me corresponde por despido improcedente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Por despido improcedente corresponden 33 días de salario por año trabajado, con un máximo de 24 mensualidades. Además del finiquito con vacaciones pendientes y pagas prorrateadas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué diferencia hay entre despido procedente e improcedente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El despido procedente no genera derecho a indemnización (solo finiquito). El improcedente da derecho a 33 días por año trabajado o readmisión, y el nulo obliga a la readmisión más salarios de tramitación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo tengo derecho a salarios de tramitación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los salarios de tramitación se generan desde la fecha del despido hasta la sentencia firme, solo en casos de despido nulo o cuando se opta por la readmisión en despido improcedente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se calcula el finiquito?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El finiquito incluye: días trabajados del mes en curso, vacaciones no disfrutadas, pagas extraordinarias prorrateadas (si no se cobran enteras) y cualquier concepto salarial pendiente.",
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
        name: "Calculadora de Despidos",
        item: "https://calculord.com/calculadora-despidos",
      },
    ],
  }

  // Tipos de despido y sus indemnizaciones
  const tiposDespido = {
    procedente: {
      nombre: "Despido Procedente",
      indemnizacion: 0,
      descripcion: "Despido con causa justificada. No hay derecho a indemnización.",
    },
    improcedente: {
      nombre: "Despido Improcedente",
      indemnizacion: 33, // días por año
      maximo: 24, // mensualidades máximas
      descripcion: "Despido sin causa o con forma incorrecta. 33 días por año, máximo 24 mensualidades.",
    },
    nulo: {
      nombre: "Despido Nulo",
      indemnizacion: 0, // Readmisión obligatoria
      descripcion:
        "Despido discriminatorio o que vulnera derechos fundamentales. Readmisión + salarios de tramitación.",
    },
    objetivo: {
      nombre: "Despido Objetivo",
      indemnizacion: 20, // días por año
      maximo: 12, // mensualidades máximas
      descripcion:
        "Por causas económicas, técnicas, organizativas o productivas. 20 días por año, máximo 12 mensualidades.",
    },
    disciplinario: {
      nombre: "Despido Disciplinario",
      indemnizacion: 0,
      descripcion:
        "Por falta muy grave. Si es procedente, no hay indemnización. Si es improcedente, como el improcedente común.",
    },
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsCalculating(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    const resultadosCalculo = calcularDespido()
    setResultados(resultadosCalculo)
    setIsCalculating(false)
  }

  const calcularDespido = () => {
    const salarioBruto = Number.parseFloat(formData.salarioBruto) || 0
    const antiguedad = Number.parseFloat(formData.antiguedad) || 0
    const pagas = Number.parseInt(formData.pagas)
    const vacacionesPendientes = Number.parseFloat(formData.vacacionesPendientes) || 0
    const horasExtra = Number.parseFloat(formData.horasExtra) || 0
    const complementos = Number.parseFloat(formData.complementos) || 0

    // Calcular salario diario
    const salarioDiario = (salarioBruto * pagas) / 365

    // Calcular indemnización según tipo de despido
    let indemnizacion = 0
    let readmision = false
    let salariosTramitacion = 0

    const tipoDespido = tiposDespido[formData.tipoDespido]

    if (formData.tipoDespido === "improcedente") {
      const diasIndemnizacion = Math.min(antiguedad * 33, tipoDespido.maximo * 30)
      indemnizacion = diasIndemnizacion * salarioDiario
    } else if (formData.tipoDespido === "objetivo") {
      const diasIndemnizacion = Math.min(antiguedad * 20, tipoDespido.maximo * 30)
      indemnizacion = diasIndemnizacion * salarioDiario
    } else if (formData.tipoDespido === "nulo") {
      readmision = true
      // Salarios de tramitación (estimamos 12 meses de media)
      salariosTramitacion = salarioBruto * 12
    } else if (formData.tipoDespido === "disciplinario") {
      // Si es disciplinario improcedente, se calcula como improcedente
      if (formData.procedimiento === "improcedente") {
        const diasIndemnizacion = Math.min(antiguedad * 33, 24 * 30)
        indemnizacion = diasIndemnizacion * salarioDiario
      }
    }

    // Calcular finiquito
    const diasTrabajadosMes = new Date().getDate() // Simulamos días del mes actual
    const salarioDiasTrabajados = (salarioBruto / 30) * diasTrabajadosMes

    // Vacaciones pendientes
    const vacacionesEuros = (vacacionesPendientes / 30) * salarioBruto

    // Pagas prorrateadas (si las pagas no se cobran enteras)
    let pagasProrrateadas = 0
    if (pagas === 14) {
      const mesesTrabajados = new Date().getMonth() + 1 // Simulamos meses del año
      pagasProrrateadas = (salarioBruto * 2 * mesesTrabajados) / 12
    }

    const finiquitoTotal = salarioDiasTrabajados + vacacionesEuros + pagasProrrateadas + horasExtra + complementos

    // Calcular prestación por desempleo (estimación)
    const baseReguladoras = Math.min(salarioBruto, 1398.96) // Tope máximo 2024
    const prestacionDesempleo = baseReguladoras * 0.7 // 70% los primeros 6 meses

    // Duración prestación (1 día por cada 3 cotizados, mínimo 4 meses)
    const diasCotizados = antiguedad * 365
    const duracionPrestacion = Math.max(Math.min(diasCotizados / 3, 720), 120) // Máximo 24 meses, mínimo 4

    const totalARecibir = indemnizacion + finiquitoTotal + salariosTramitacion

    return {
      tipoDespido: tipoDespido.nombre,
      salarioDiario: salarioDiario,
      indemnizacion: indemnizacion,
      finiquito: finiquitoTotal,
      salariosTramitacion: salariosTramitacion,
      totalARecibir: totalARecibir,
      readmision: readmision,
      prestacionDesempleo: prestacionDesempleo,
      duracionPrestacion: Math.round(duracionPrestacion / 30), // En meses
      desglose: {
        salarioDiasTrabajados: salarioDiasTrabajados,
        vacacionesEuros: vacacionesEuros,
        pagasProrrateadas: pagasProrrateadas,
        horasExtra: horasExtra,
        complementos: complementos,
      },
      diasIndemnizacion:
        formData.tipoDespido === "improcedente"
          ? Math.min(antiguedad * 33, 24 * 30)
          : formData.tipoDespido === "objetivo"
            ? Math.min(antiguedad * 20, 12 * 30)
            : 0,
    }
  }

  const formatearMoneda = (cantidad) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(cantidad)
  }

  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">¿Qué tipo de despido es?</label>
            <div className="space-y-3">
              {Object.entries(tiposDespido).map(([key, tipo]) => (
                <label
                  key={key}
                  className={`cursor-pointer p-4 border-2 rounded-lg transition-all block ${
                    formData.tipoDespido === key ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-red-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="tipoDespido"
                    value={key}
                    checked={formData.tipoDespido === key}
                    onChange={(e) => setFormData({ ...formData, tipoDespido: e.target.value })}
                    className="sr-only"
                  />
                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                        formData.tipoDespido === key ? "border-red-500 bg-red-500" : "border-gray-300"
                      }`}
                    >
                      {formData.tipoDespido === key && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 mb-1">{tipo.nombre}</div>
                      <div className="text-sm text-gray-600">{tipo.descripcion}</div>
                      {tipo.indemnizacion > 0 && (
                        <div className="text-sm font-medium text-red-600 mt-1">
                          {tipo.indemnizacion} días por año trabajado
                          {tipo.maximo && ` (máximo ${tipo.maximo} mensualidades)`}
                        </div>
                      )}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {formData.tipoDespido === "disciplinario" && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ¿Cómo consideras que será el resultado?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "procedente", label: "Procedente", desc: "La empresa tenía razón" },
                  { id: "improcedente", label: "Improcedente", desc: "La empresa no tenía razón" },
                ].map((option) => (
                  <label
                    key={option.id}
                    className={`cursor-pointer p-3 border-2 rounded-lg transition-all ${
                      formData.procedimiento === option.id
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200 hover:border-red-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="procedimiento"
                      value={option.id}
                      checked={formData.procedimiento === option.id}
                      onChange={(e) => setFormData({ ...formData, procedimiento: e.target.value })}
                      className="sr-only"
                    />
                    <div className="font-medium text-sm">{option.label}</div>
                    <div className="text-xs text-gray-500">{option.desc}</div>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      )
    }

    if (currentStep === 2) {
      return (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Datos laborales</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Salario Bruto Mensual (€)
                <span className="text-xs text-gray-500 ml-2">Sin deducciones</span>
              </label>
              <input
                type="number"
                value={formData.salarioBruto}
                onChange={(e) => setFormData({ ...formData, salarioBruto: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-lg"
                placeholder="Ej: 2000"
                min="0"
                step="0.01"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Años de Antigüedad
                <span className="text-xs text-gray-500 ml-2">En la empresa</span>
              </label>
              <input
                type="number"
                value={formData.antiguedad}
                onChange={(e) => setFormData({ ...formData, antiguedad: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-lg"
                placeholder="Ej: 5.5"
                min="0"
                step="0.1"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Número de Pagas</label>
              <select
                value={formData.pagas}
                onChange={(e) => setFormData({ ...formData, pagas: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-lg"
                required
              >
                <option value="12">12 pagas</option>
                <option value="14">14 pagas</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Contrato</label>
              <select
                value={formData.tipoContrato}
                onChange={(e) => setFormData({ ...formData, tipoContrato: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-lg"
                required
              >
                <option value="indefinido">Indefinido</option>
                <option value="temporal">Temporal</option>
                <option value="obra">Obra y servicio</option>
              </select>
            </div>
          </div>
        </div>
      )
    }

    if (currentStep === 3) {
      return (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Conceptos adicionales del finiquito</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Días de Vacaciones Pendientes
                <span className="text-xs text-gray-500 ml-2">No disfrutados</span>
              </label>
              <input
                type="number"
                value={formData.vacacionesPendientes}
                onChange={(e) => setFormData({ ...formData, vacacionesPendientes: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-lg"
                placeholder="Ej: 15"
                min="0"
                max="30"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Horas Extra Pendientes (€)
                <span className="text-xs text-gray-500 ml-2">Sin cobrar</span>
              </label>
              <input
                type="number"
                value={formData.horasExtra}
                onChange={(e) => setFormData({ ...formData, horasExtra: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-lg"
                placeholder="Ej: 300"
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Otros Complementos Pendientes (€)
              <span className="text-xs text-gray-500 ml-2">Comisiones, plus, etc.</span>
            </label>
            <input
              type="number"
              value={formData.complementos}
              onChange={(e) => setFormData({ ...formData, complementos: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-lg"
              placeholder="Ej: 200"
              min="0"
              step="0.01"
            />
          </div>
        </div>
      )
    }
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
      <section className="bg-gradient-to-br from-red-50 to-orange-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Briefcase className="h-10 w-10 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculadora de Despidos
            <span className="block text-red-600">2025</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Calcula tu indemnización por despido, finiquito completo y prestación por desempleo. Todos los tipos de
            despido según la normativa laboral española actualizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
              onClick={() => document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Calcular Mi Despido
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 text-lg bg-transparent"
              onClick={() => document.getElementById("tipos-despido")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Tipos de Despido
            </Button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">33</div>
              <div className="text-gray-600 text-sm">Días por año (improcedente)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">20</div>
              <div className="text-gray-600 text-sm">Días por año (objetivo)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">24</div>
              <div className="text-gray-600 text-sm">Mensualidades máximo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">2025</div>
              <div className="text-gray-600 text-sm">Normativa actualizada</div>
            </div>
          </div>
        </div>
      </section>

      {/* Alerta Legal */}
      <section className="py-8 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-1">⚖️ Aviso Legal Importante</h3>
              <p className="text-yellow-700 text-sm">
                Esta calculadora ofrece estimaciones orientativas basadas en la normativa general. Cada caso es único y
                puede tener particularidades.
                <strong> Consulta siempre con un abogado laboralista</strong> para obtener asesoramiento personalizado
                sobre tu situación específica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Calculator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="calculadora">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculadora de Despidos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Obtén un cálculo detallado de tu indemnización, finiquito y prestación por desempleo
          </p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
            <CardTitle className="text-2xl text-center">
              Paso {currentStep} de 3:{" "}
              {currentStep === 1 ? "Tipo de Despido" : currentStep === 2 ? "Datos Laborales" : "Finiquito"}
            </CardTitle>
            <div className="w-full bg-red-800 rounded-full h-2 mt-4">
              <div
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {renderStepContent()}

              <div className="flex justify-between pt-6">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="border-red-600 text-red-600 hover:bg-red-50"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Anterior
                  </Button>
                )}

                {currentStep < 3 ? (
                  <Button
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    disabled={
                      !formData.tipoDespido || (currentStep === 2 && (!formData.salarioBruto || !formData.antiguedad))
                    }
                    className="bg-red-600 hover:bg-red-700 text-white ml-auto"
                  >
                    Siguiente
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white py-4 px-8 text-lg font-semibold ml-auto"
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
                        Calcular Despido
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>

            {resultados && (
              <div className="mt-8 space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">📊 Resultado de tu Despido</h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1 flex items-center">
                        <Euro className="h-4 w-4 mr-1" />
                        Indemnización
                      </h4>
                      <p className="text-2xl font-bold text-red-600">{formatearMoneda(resultados.indemnizacion)}</p>
                      <p className="text-sm text-gray-500">
                        {resultados.diasIndemnizacion > 0 ? `${resultados.diasIndemnizacion} días` : "No aplica"}
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1 flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        Finiquito
                      </h4>
                      <p className="text-2xl font-bold text-blue-600">{formatearMoneda(resultados.finiquito)}</p>
                      <p className="text-sm text-gray-500">Conceptos pendientes</p>
                    </div>

                    {resultados.salariosTramitacion > 0 && (
                      <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <h4 className="text-sm font-semibold text-gray-600 mb-1 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Salarios Tramitación
                        </h4>
                        <p className="text-2xl font-bold text-purple-600">
                          {formatearMoneda(resultados.salariosTramitacion)}
                        </p>
                        <p className="text-sm text-gray-500">Estimación 12 meses</p>
                      </div>
                    )}

                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">💰 Total a Recibir</h4>
                      <p className="text-2xl font-bold text-green-600">{formatearMoneda(resultados.totalARecibir)}</p>
                      <p className="text-sm text-gray-500">Importe total</p>
                    </div>
                  </div>

                  {resultados.readmision && (
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600" />
                        <h4 className="font-semibold text-yellow-800">Despido Nulo - Readmisión Obligatoria</h4>
                      </div>
                      <p className="text-yellow-700 text-sm">
                        En caso de despido nulo, la empresa debe readmitirte y pagar los salarios de tramitación desde
                        el despido hasta la readmisión.
                      </p>
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">💼 Desglose del Finiquito</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Días trabajados del mes</span>
                        <span className="font-semibold text-gray-900">
                          {formatearMoneda(resultados.desglose.salarioDiasTrabajados)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Vacaciones pendientes</span>
                        <span className="font-semibold text-gray-900">
                          {formatearMoneda(resultados.desglose.vacacionesEuros)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Pagas prorrateadas</span>
                        <span className="font-semibold text-gray-900">
                          {formatearMoneda(resultados.desglose.pagasProrrateadas)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Horas extra</span>
                        <span className="font-semibold text-gray-900">
                          {formatearMoneda(resultados.desglose.horasExtra)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Otros complementos</span>
                        <span className="font-semibold text-gray-900">
                          {formatearMoneda(resultados.desglose.complementos)}
                        </span>
                      </div>
                      <div className="border-t-2 border-gray-300 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-gray-900">TOTAL FINIQUITO</span>
                          <span className="text-xl font-bold text-blue-600">
                            {formatearMoneda(resultados.finiquito)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h4 className="text-lg font-bold text-green-800 mb-4">💰 Prestación por Desempleo</h4>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          {formatearMoneda(resultados.prestacionDesempleo)}
                        </div>
                        <div className="text-sm text-green-700">por mes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 mb-2">{resultados.duracionPrestacion}</div>
                        <div className="text-sm text-green-700">meses de duración estimada</div>
                      </div>
                      <div className="text-xs text-green-600 text-center">
                        * Estimación basada en el 70% de la base reguladora
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="text-lg font-bold text-blue-800 mb-3">📋 Resumen de tu Caso</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p>
                        <strong>Tipo de despido:</strong> {resultados.tipoDespido}
                      </p>
                      <p>
                        <strong>Salario diario:</strong> {formatearMoneda(resultados.salarioDiario)}
                      </p>
                      <p>
                        <strong>Antigüedad:</strong> {formData.antiguedad} años
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Salario bruto:</strong> {formatearMoneda(Number.parseFloat(formData.salarioBruto))}
                      </p>
                      <p>
                        <strong>Pagas anuales:</strong> {formData.pagas}
                      </p>
                      <p>
                        <strong>Tipo contrato:</strong> {formData.tipoContrato}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <h4 className="text-lg font-bold text-amber-800 mb-3">💡 Próximos Pasos Recomendados</h4>
                  <div className="space-y-2 text-sm text-amber-700">
                    <p>
                      • <strong>Consulta con un abogado laboralista</strong> para validar estos cálculos
                    </p>
                    <p>
                      • <strong>Recopila toda la documentación:</strong> nóminas, contrato, comunicación del despido
                    </p>
                    <p>
                      • <strong>Tienes 20 días hábiles</strong> desde el despido para presentar demanda
                    </p>
                    <p>
                      • <strong>Solicita el certificado de empresa</strong> en el SEPE para la prestación por desempleo
                    </p>
                    <p>
                      • <strong>Guarda todas las comunicaciones</strong> con la empresa relacionadas con el despido
                    </p>
                    {formData.tipoDespido === "nulo" && (
                      <p>
                        • <strong>Despido nulo:</strong> Actúa rápidamente, tienes derecho a readmisión inmediata
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Tipos de Despido Section */}
      <section id="tipos-despido" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tipos de Despido en España</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conoce las diferencias entre cada tipo de despido y sus indemnizaciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(tiposDespido).map(([key, tipo]) => (
              <Card key={key} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      key === "procedente"
                        ? "bg-green-100"
                        : key === "improcedente"
                          ? "bg-red-100"
                          : key === "nulo"
                            ? "bg-purple-100"
                            : key === "objetivo"
                              ? "bg-blue-100"
                              : "bg-orange-100"
                    }`}
                  >
                    {key === "procedente" && <CheckCircle className="h-8 w-8 text-green-600" />}
                    {key === "improcedente" && <AlertTriangle className="h-8 w-8 text-red-600" />}
                    {key === "nulo" && <Briefcase className="h-8 w-8 text-purple-600" />}
                    {key === "objetivo" && <FileText className="h-8 w-8 text-blue-600" />}
                    {key === "disciplinario" && <AlertTriangle className="h-8 w-8 text-orange-600" />}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{tipo.nombre}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{tipo.descripcion}</p>
                  {tipo.indemnizacion > 0 ? (
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-red-600 mb-1">{tipo.indemnizacion} días</div>
                      <div className="text-sm text-gray-500">por año trabajado</div>
                      {tipo.maximo && (
                        <div className="text-xs text-gray-400 mt-1">Máximo {tipo.maximo} mensualidades</div>
                      )}
                    </div>
                  ) : key === "nulo" ? (
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="text-lg font-bold text-purple-600 mb-1">Readmisión</div>
                      <div className="text-sm text-gray-500">+ Salarios tramitación</div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-lg font-bold text-gray-600 mb-1">Sin indemnización</div>
                      <div className="text-sm text-gray-500">Solo finiquito</div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes sobre Despidos</h2>
            <p className="text-xl text-gray-600">Resolvemos las dudas más comunes sobre despidos laborales</p>
          </div>

          <div className="space-y-8">
            {[
              {
                pregunta: "¿Cuánto me corresponde por despido improcedente?",
                respuesta:
                  "Por despido improcedente corresponden 33 días de salario por año trabajado, con un máximo de 24 mensualidades. Además del finiquito con vacaciones pendientes y pagas prorrateadas.",
              },
              {
                pregunta: "¿Qué diferencia hay entre despido procedente e improcedente?",
                respuesta:
                  "El despido procedente no genera derecho a indemnización (solo finiquito). El improcedente da derecho a 33 días por año trabajado o readmisión, y el nulo obliga a la readmisión más salarios de tramitación.",
              },
              {
                pregunta: "¿Cuándo tengo derecho a salarios de tramitación?",
                respuesta:
                  "Los salarios de tramitación se generan desde la fecha del despido hasta la sentencia firme, solo en casos de despido nulo o cuando se opta por la readmisión en despido improcedente.",
              },
              {
                pregunta: "¿Cómo se calcula el finiquito?",
                respuesta:
                  "El finiquito incluye: días trabajados del mes en curso, vacaciones no disfrutadas, pagas extraordinarias prorrateadas (si no se cobran enteras) y cualquier concepto salarial pendiente.",
              },
              {
                pregunta: "¿Cuánto tiempo tengo para reclamar un despido?",
                respuesta:
                  "Tienes 20 días hábiles desde la fecha del despido para presentar demanda por despido. Es un plazo de caducidad, por lo que es improrrogable.",
              },
              {
                pregunta: "¿Puedo cobrar el paro después de un despido?",
                respuesta:
                  "Sí, puedes solicitar la prestación por desempleo si tienes al menos 360 días cotizados en los últimos 6 años. La cuantía es el 70% de la base reguladora los primeros 6 meses.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.pregunta}</h3>
                  <p className="text-gray-600">{faq.respuesta}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculadoras relacionadas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculadoras Laborales Relacionadas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Herramientas complementarias para tu situación laboral
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Banknote className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Prestación por Desempleo</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Después del despido, calcula tu prestación de paro. Usa tu salario para obtener la base reguladora
                  exacta.
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Cotizaciones Seguridad Social</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Verifica si tus cotizaciones fueron correctas. Importante para calcular correctamente tu
                  indemnización.
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
                  Si trabajabas por horas, calcula tu salario real para verificar la base de tu indemnización.
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
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Necesitas reclamar tu despido?</h2>
          <p className="text-xl text-red-100 mb-8">
            Calcula los honorarios de un abogado laboralista para defender tus derechos
          </p>
          <Link href="/calculadora-honorarios-abogado">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
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
                <Calculator className="h-6 w-6 text-red-400" />
                <span className="text-xl font-bold">Calculord</span>
              </div>
              <p className="text-gray-400">
                La herramienta más precisa para calcular despidos e indemnizaciones laborales.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Tipos de Despido</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Despido Procedente
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Despido Improcedente
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Despido Nulo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Despido Objetivo
                  </a>
                </li>
              </ul>
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
                <li>
                  <Link href="/calculadora-despidos" className="hover:text-white">
                    Despidos
                  </Link>
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
                <li>
                  <a href="#" className="hover:text-white">
                    Normativa Laboral
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Calculord. Todos los derechos reservados.</p>
            <p className="text-sm mt-2">
              * Los cálculos son orientativos. Consulta siempre con un profesional del derecho laboral.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
