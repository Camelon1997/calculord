"use client"

import { useState } from "react"
import {
  Banknote,
  Calculator,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  FileText,
  ArrowRight,
  Briefcase,
  BookOpen,
  ShieldAlert,
  ClipboardList,
  Lightbulb,
  Info,
  BarChart3,
  CalendarDays,
  UserCheck,
  UserX,
  PiggyBank,
  Scale,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

export default function CalculadoraParo() {
  const [formData, setFormData] = useState({
    salarioBruto: "",
    mesesCotizados: "",
    edad: "",
    tieneHijos: "no",
    numeroHijos: "0",
    motivoCese: "despido",
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
          text: "La duración depende de los meses cotizados. Con 360 días (12 meses) cotizados tienes derecho a 4 meses de prestación. Este periodo aumenta progresivamente hasta un máximo de 720 días (24 meses) de prestación si has cotizado 6 años o más.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto dinero se cobra de paro en 2025?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Durante los primeros 180 días (6 meses) se cobra el 70% de tu base reguladora. A partir del día 181, la cuantía se reduce al 60% de la base reguladora. Existen topes máximos y mínimos según si tienes hijos a cargo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué requisitos necesito para cobrar el paro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Principalmente, necesitas estar en situación legal de desempleo, haber cotizado un mínimo de 360 días en los últimos 6 años, estar inscrito como demandante de empleo y suscribir el compromiso de actividad.",
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

  // Datos actualizados 2025 (con IPREM hipotético para mayor realismo)
  const IPREM_2025 = 620 // IPREM mensual hipotético para 2025
  const DATOS_PARO_2025 = {
    topeMinimoSinHijos: IPREM_2025 * 0.8, // 80% IPREM
    topeMinimoConHijos: IPREM_2025 * 1.07, // 107% IPREM
    topeMaximoSinHijos: IPREM_2025 * 1.75, // 175% IPREM
    topeMaximoCon1Hijo: IPREM_2025 * 2.0, // 200% IPREM
    topeMaximoCon2HijosOMas: IPREM_2025 * 2.25, // 225% IPREM
    porcentajePrimeros6Meses: 70,
    porcentajeResto: 60,
    subsidio: IPREM_2025 * 0.8, // 80% del IPREM
    smi2025: 1184,
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
    return 24
  }

  const calcularBaseReguladora = (salarioBruto) => {
    return salarioBruto
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsCalculating(true)
    setResultados(null)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const resultadosCalculo = calcularParo()
    setResultados(resultadosCalculo)
    setIsCalculating(false)
  }

  const calcularParo = () => {
    const salarioBruto = Number.parseFloat(formData.salarioBruto) || 0
    const mesesCotizados = Number.parseInt(formData.mesesCotizados) || 0
    const numeroHijos = Number.parseInt(formData.numeroHijos) || 0

    const cumpleRequisitos = mesesCotizados >= 12

    if (!cumpleRequisitos) {
      return {
        cumpleRequisitos: false,
        motivoRechazo:
          "Necesitas al menos 12 meses cotizados en los últimos 6 años para acceder a la prestación contributiva.",
        puedeSubsidio: mesesCotizados >= 6 || (mesesCotizados >= 3 && numeroHijos > 0),
      }
    }

    const duracionMeses = calcularDuracionPrestacion(mesesCotizados)
    const baseReguladora = calcularBaseReguladora(salarioBruto)

    const cuantiaPrimeros6Meses = baseReguladora * (DATOS_PARO_2025.porcentajePrimeros6Meses / 100)
    const cuantiaResto = baseReguladora * (DATOS_PARO_2025.porcentajeResto / 100)

    let topeMaximo, topeMinimo
    if (numeroHijos === 0) {
      topeMinimo = DATOS_PARO_2025.topeMinimoSinHijos
      topeMaximo = DATOS_PARO_2025.topeMaximoSinHijos
    } else if (numeroHijos === 1) {
      topeMinimo = DATOS_PARO_2025.topeMinimoConHijos
      topeMaximo = DATOS_PARO_2025.topeMaximoCon1Hijo
    } else {
      topeMinimo = DATOS_PARO_2025.topeMinimoConHijos
      topeMaximo = DATOS_PARO_2025.topeMaximoCon2HijosOMas
    }

    const cuantiaFinalPrimeros6 = Math.max(topeMinimo, Math.min(cuantiaPrimeros6Meses, topeMaximo))
    const cuantiaFinalResto = Math.max(topeMinimo, Math.min(cuantiaResto, topeMaximo))

    const mesesPrimerosPeriodo = Math.min(6, duracionMeses)
    const mesesSegundoPeriodo = Math.max(0, duracionMeses - 6)

    const totalPrimerosPeriodo = cuantiaFinalPrimeros6 * mesesPrimerosPeriodo
    const totalSegundoPeriodo = cuantiaFinalResto * mesesSegundoPeriodo
    const totalPrestacion = totalPrimerosPeriodo + totalSegundoPeriodo

    return {
      cumpleRequisitos: true,
      baseReguladora,
      duracionMeses,
      cuantiaFinalPrimeros6,
      cuantiaFinalResto,
      totalPrestacion,
      porcentajesSalario: {
        primeros6: salarioBruto > 0 ? (cuantiaFinalPrimeros6 / salarioBruto) * 100 : 0,
        resto: salarioBruto > 0 ? (cuantiaFinalResto / salarioBruto) * 100 : 0,
      },
    }
  }

  const formatearMoneda = (cantidad) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(cantidad)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataCalculator) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-yellow-100 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Banknote className="h-10 w-10 text-orange-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Calculadora de Paro 2025: Tu Guía Definitiva
            <span className="block text-orange-600">para la Prestación por Desempleo</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Obtén un cálculo preciso de tu prestación y subsidio por desempleo con la normativa SEPE 2025. Descubre la
            duración, cuantía exacta, topes actualizados y todos los requisitos. La herramienta más completa para
            afrontar tu situación con seguridad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calcular Mi Paro Ahora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold bg-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => document.getElementById("guia-detallada")?.scrollIntoView({ behavior: "smooth" })}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Leer la Guía Completa
            </Button>
          </div>
        </div>
      </section>

      {/* Main Calculator Section */}
      <main id="calculadora" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculadora de Prestación por Desempleo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Introduce tus datos para obtener una estimación precisa de tu prestación. Actualizado a la normativa de
              2025.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-t-4 border-orange-500">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Calculator className="h-6 w-6 text-orange-600" />
                    Introduce tus datos
                  </CardTitle>
                  <CardDescription>Rellena los campos para calcular tu prestación.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="salarioBruto" className="flex items-center gap-1.5">
                        <Banknote className="h-4 w-4" />
                        Salario Bruto Mensual (€)
                      </Label>
                      <Input
                        id="salarioBruto"
                        type="number"
                        placeholder="Ej: 1800"
                        value={formData.salarioBruto}
                        onChange={(e) => setFormData({ ...formData, salarioBruto: e.target.value })}
                        required
                        min="0"
                        step="10"
                      />
                      <p className="text-xs text-gray-500">Promedio de los últimos 6 meses.</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mesesCotizados" className="flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4" />
                        Meses Cotizados
                      </Label>
                      <Input
                        id="mesesCotizados"
                        type="number"
                        placeholder="Ej: 48"
                        value={formData.mesesCotizados}
                        onChange={(e) => setFormData({ ...formData, mesesCotizados: e.target.value })}
                        required
                        min="0"
                        max="72"
                      />
                      <p className="text-xs text-gray-500">Total en los últimos 6 años (máx 72).</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="edad" className="flex items-center gap-1.5">
                        <Users className="h-4 w-4" />
                        Edad
                      </Label>
                      <Input
                        id="edad"
                        type="number"
                        placeholder="Ej: 35"
                        value={formData.edad}
                        onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
                        required
                        min="16"
                        max="67"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tieneHijos" className="flex items-center gap-1.5">
                        <Users className="h-4 w-4" />
                        Hijos a cargo menores de 26
                      </Label>
                      <Select
                        value={formData.tieneHijos}
                        onValueChange={(value) =>
                          setFormData({ ...formData, tieneHijos: value, numeroHijos: value === "no" ? "0" : "1" })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="si">Sí</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.tieneHijos === "si" && (
                      <div className="space-y-2">
                        <Label htmlFor="numeroHijos">Número de hijos</Label>
                        <Input
                          id="numeroHijos"
                          type="number"
                          placeholder="1"
                          value={formData.numeroHijos}
                          onChange={(e) => setFormData({ ...formData, numeroHijos: e.target.value })}
                          min="1"
                          max="10"
                        />
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" disabled={isCalculating}>
                      {isCalculating ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Calculando...
                        </>
                      ) : (
                        <>
                          <Calculator className="mr-2 h-5 w-5" />
                          Calcular Prestación
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                {!resultados && (
                  <Card className="shadow-xl border-dashed border-2 flex flex-col items-center justify-center h-full min-h-[400px] bg-gray-50/50">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BarChart3 className="h-8 w-8 text-orange-500" />
                      </div>
                      <CardTitle className="text-2xl">Tus resultados aparecerán aquí</CardTitle>
                      <CardDescription>Completa el formulario para ver tu estimación.</CardDescription>
                    </CardHeader>
                  </Card>
                )}

                {resultados && !resultados.cumpleRequisitos && (
                  <Card className="shadow-xl border-t-4 border-red-500">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <UserX className="h-8 w-8 text-red-500" />
                      </div>
                      <CardTitle className="text-2xl text-red-700">No tienes derecho a prestación</CardTitle>
                      <CardDescription>{resultados.motivoRechazo}</CardDescription>
                    </CardHeader>
                    {resultados.puedeSubsidio && (
                      <CardContent className="bg-yellow-50 border-t border-yellow-200 p-4">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="h-6 w-6 text-yellow-600 mt-1" />
                          <div>
                            <h4 className="font-semibold text-yellow-800">Alternativa: Subsidio por desempleo</h4>
                            <p className="text-sm text-yellow-700">
                              Podrías tener derecho a un subsidio de {formatearMoneda(DATOS_PARO_2025.subsidio)}/mes.
                              Consulta los requisitos en el SEPE.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                )}

                {resultados && resultados.cumpleRequisitos && (
                  <Card className="shadow-xl border-t-4 border-green-500">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <UserCheck className="h-8 w-8 text-green-500" />
                      </div>
                      <CardTitle className="text-2xl text-green-700">Resumen de tu Prestación</CardTitle>
                      <CardDescription>
                        Estimación basada en los datos introducidos y la normativa de 2025.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <p className="text-sm text-gray-600">Duración</p>
                          <p className="text-3xl font-bold text-orange-600">{resultados.duracionMeses} meses</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <p className="text-sm text-gray-600">Total a recibir</p>
                          <p className="text-3xl font-bold text-purple-600">
                            {formatearMoneda(resultados.totalPrestacion)}
                          </p>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-center">Desglose Mensual</h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg">
                            <div>
                              <p className="font-semibold text-green-800">Primeros 6 meses</p>
                              <p className="text-sm text-green-600">
                                {DATOS_PARO_2025.porcentajePrimeros6Meses}% de la base reguladora
                              </p>
                            </div>
                            <p className="text-2xl font-bold text-green-700">
                              {formatearMoneda(resultados.cuantiaFinalPrimeros6)}
                            </p>
                          </div>
                          {resultados.duracionMeses > 6 && (
                            <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
                              <div>
                                <p className="font-semibold text-blue-800">A partir del 7º mes</p>
                                <p className="text-sm text-blue-600">
                                  {DATOS_PARO_2025.porcentajeResto}% de la base reguladora
                                </p>
                              </div>
                              <p className="text-2xl font-bold text-blue-700">
                                {formatearMoneda(resultados.cuantiaFinalResto)}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      <Separator />

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2 text-center">Detalles del Cálculo</h4>
                        <div className="text-sm space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Base Reguladora:</span>
                            <span className="font-medium">{formatearMoneda(resultados.baseReguladora)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">% sobre salario (1os 6m):</span>
                            <span className="font-medium">{resultados.porcentajesSalario.primeros6.toFixed(1)}%</span>
                          </div>
                          {resultados.duracionMeses > 6 && (
                            <div className="flex justify-between">
                              <span className="text-gray-600">% sobre salario (resto):</span>
                              <span className="font-medium">{resultados.porcentajesSalario.resto.toFixed(1)}%</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <p className="text-xs text-gray-500 text-center w-full">
                        <Info className="inline h-3 w-3 mr-1" />
                        Este cálculo es una estimación. La cantidad final será confirmada por el SEPE.
                      </p>
                    </CardFooter>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Guía Detallada de la Prestación */}
      <section id="guia-detallada" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Guía Detallada de tu Prestación por Desempleo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entiende a fondo cada componente de tu prestación para que no se te escape nada.
            </p>
          </div>
          <div className="space-y-12">
            {/* Base Reguladora */}
            <div className="p-8 border rounded-lg shadow-lg bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Scale className="h-7 w-7 text-orange-500" />
                1. La Base Reguladora: El Corazón del Cálculo
              </h3>
              <p className="text-gray-600 mb-4">
                La base reguladora es la media de tus bases de cotización por contingencias profesionales durante los
                últimos 180 días (6 meses) trabajados, sin contar las horas extraordinarias. Es la cifra sobre la que se
                aplican los porcentajes para saber cuánto cobrarás.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                <p className="font-semibold text-orange-800">Ejemplo práctico:</p>
                <p className="text-orange-700 text-sm">
                  Si tus bases de los últimos 6 meses fueron: 2000€, 2000€, 2100€, 2100€, 2150€, 2150€. <br />
                  Suma total: 12500€ / 6 meses = <strong>2083.33€ de base reguladora mensual</strong>.
                </p>
              </div>
            </div>

            {/* Duración */}
            <div className="p-8 border rounded-lg shadow-lg bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <CalendarDays className="h-7 w-7 text-blue-500" />
                2. Duración de la Prestación: ¿Cuánto Tiempo?
              </h3>
              <p className="text-gray-600 mb-4">
                El tiempo que puedes cobrar el paro depende directamente de cuánto hayas cotizado en los últimos 6 años.
                Se necesita un mínimo de 360 días para tener derecho a 120 días de prestación.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 bg-gray-200 font-semibold text-sm text-gray-700 border-b">
                        Días Cotizados
                      </th>
                      <th className="py-2 px-4 bg-gray-200 font-semibold text-sm text-gray-700 border-b">
                        Días de Prestación (Paro)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b">De 360 a 539 días</td>
                      <td className="py-2 px-4 border-b">120 días (4 meses)</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b">De 540 a 719 días</td>
                      <td className="py-2 px-4 border-b">180 días (6 meses)</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b">... (aumenta progresivamente) ...</td>
                      <td className="py-2 px-4 border-b">...</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b">2160 días o más</td>
                      <td className="py-2 px-4 border-b">720 días (24 meses - MÁXIMO)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cuantía y Topes */}
            <div className="p-8 border rounded-lg shadow-lg bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <PiggyBank className="h-7 w-7 text-green-500" />
                3. Cuantía y Topes: ¿Cuánto Dinero?
              </h3>
              <p className="text-gray-600 mb-4">
                La ley establece unos límites (topes) para que nadie cobre por encima de un máximo ni por debajo de un
                mínimo, independientemente de su base reguladora. Estos topes se basan en el IPREM (Indicador Público de
                Renta de Efectos Múltiples).
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Primeros 180 días (6 meses):</span> Cobrarás el{" "}
                  <span className="font-bold text-green-600">70%</span> de tu base reguladora.
                </li>
                <li>
                  <span className="font-semibold">A partir del día 181:</span> La cuantía pasa al{" "}
                  <span className="font-bold text-blue-600">60%</span> de tu base reguladora (actualizado para 2025).
                </li>
                <li>
                  <span className="font-semibold">Tope Máximo:</span> La cuantía no podrá superar el 175% del IPREM,
                  incrementado según el número de hijos a cargo (200% con un hijo, 225% con dos o más).
                </li>
                <li>
                  <span className="font-semibold">Tope Mínimo:</span> Tampoco podrá ser inferior al 80% del IPREM si no
                  tienes hijos, o al 107% si los tienes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requisitos Section */}
      <section id="requisitos" className="py-20 bg-gray-50">
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
                title: "Cotización Mínima",
                description: "Haber cotizado al menos 360 días (12 meses) en los últimos 6 años previos al desempleo.",
                color: "blue",
              },
              {
                icon: <FileText className="h-8 w-8 text-green-600" />,
                title: "Situación Legal de Desempleo",
                description: "El cese no debe ser voluntario. Válido para despidos, fin de contrato, ERE, etc.",
                color: "green",
              },
              {
                icon: <Users className="h-8 w-8 text-purple-600" />,
                title: "Inscripción como Demandante",
                description:
                  "Estar inscrito como demandante de empleo y mantener la inscripción durante toda la prestación.",
                color: "purple",
              },
              {
                icon: <Briefcase className="h-8 w-8 text-orange-600" />,
                title: "Compromiso de Actividad",
                description: "Suscribir el compromiso de buscar activamente empleo y aceptar una colocación adecuada.",
                color: "orange",
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-red-600" />,
                title: "No tener Edad de Jubilación",
                description: "No haber alcanzado la edad ordinaria para jubilarse y cobrar la pensión contributiva.",
                color: "red",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-emerald-600" />,
                title: "No realizar Actividad",
                description:
                  "No realizar una actividad por cuenta propia o trabajo por cuenta ajena a tiempo completo.",
                color: "emerald",
              },
            ].map((requisito, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
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

      {/* Prestación vs Subsidio */}
      <section id="comparativa" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prestación Contributiva vs. Subsidio por Desempleo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No son lo mismo. Conoce las diferencias clave para saber a qué tienes derecho.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-xl border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Prestación Contributiva (El "Paro")</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Origen:</span> Es un derecho generado por tus cotizaciones.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Requisito Clave:</span> Haber cotizado al menos 360 días en los
                    últimos 6 años.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Cuantía:</span> Depende de tu base reguladora (70% y luego 60%).
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Duración:</span> De 4 a 24 meses, según lo cotizado.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl border border-green-200">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Subsidio por Desempleo</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Origen:</span> Es una ayuda asistencial, no depende de cotizaciones.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Requisito Clave:</span> No tener rentas suficientes y/o tener cargas
                    familiares. Para quienes no llegan al paro o lo han agotado.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Cuantía:</span> Fija, basada en el IPREM (ej: 496€/mes en 2025).
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Duración:</span> Variable (6, 18, 24, 30 meses) según edad y
                    situación familiar.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo solicitar el paro */}
      <section id="como-solicitar" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cómo Solicitar el Paro Paso a Paso (Guía 2025)
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sigue estos pasos para tramitar tu prestación sin complicaciones y evitar errores.
            </p>
          </div>
          <ol className="space-y-12 relative border-l-2 border-orange-200">
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full -left-5 ring-8 ring-gray-50">
                <FileText className="w-5 h-5 text-orange-600" />
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Inscríbete como Demandante de Empleo</h3>
              <p className="text-gray-600">
                Es el primer paso <span className="font-bold">obligatorio</span>. Antes de contactar al SEPE, debes
                darte de alta como demandante de empleo en el Servicio de Empleo de tu Comunidad Autónoma. Puedes
                hacerlo online o pidiendo cita en tu oficina local.
              </p>
              <div className="mt-3 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg">
                <p className="text-sm text-yellow-800">
                  <span className="font-bold">¡Ojo!</span> No confundas el SEPE (Servicio Público de Empleo Estatal, que
                  paga las prestaciones) con el servicio de empleo autonómico (que gestiona la demanda de empleo).
                </p>
              </div>
            </li>
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full -left-5 ring-8 ring-gray-50">
                <Clock className="w-5 h-5 text-orange-600" />
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Pide Cita Previa en el SEPE (¡Tienes Plazo!)
              </h3>
              <p className="text-gray-600">
                Dispones de <span className="font-bold">15 días hábiles</span> (no cuentan sábados, domingos ni
                festivos) desde tu último día de trabajo para solicitar la prestación. Pide cita previa en la Sede
                Electrónica del SEPE o por teléfono.
              </p>
              <div className="mt-3 bg-red-50 border-l-4 border-red-400 p-3 rounded-r-lg">
                <p className="text-sm text-red-800">
                  <span className="font-bold">¡Crítico!</span> Si se te pasa el plazo, no pierdes el derecho, pero sí
                  empezarás a cobrar desde el día de la solicitud, perdiendo los días de retraso.
                </p>
              </div>
            </li>
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full -left-5 ring-8 ring-gray-50">
                <ClipboardList className="w-5 h-5 text-orange-600" />
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Reúne y Presenta la Documentación</h3>
              <p className="text-gray-600">
                Prepara tu DNI/NIE, el modelo de solicitud de la prestación, y tu número de cuenta bancaria. El
                <span className="font-bold"> certificado de empresa</span> normalmente lo envía tu empleador
                directamente al SEPE a través del sistema Certific@2, pero no está de más confirmarlo.
              </p>
              <div className="mt-3 bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                <p className="text-sm text-blue-800">
                  <span className="font-bold">Consejo Pro:</span> La forma más rápida es a través de la Sede Electrónica
                  del SEPE con Cl@ve, certificado digital o DNIe. Evitarás desplazamientos y podrás hacer seguimiento.
                </p>
              </div>
            </li>
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full -left-5 ring-8 ring-gray-50">
                <CheckCircle className="w-5 h-5 text-orange-600" />
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Espera la Resolución y ¡Revisa!</h3>
              <p className="text-gray-600">
                Una vez presentada la solicitud, el SEPE te enviará una resolución aprobando o denegando tu prestación.
                Revisa que todos los datos sean correctos: la base reguladora, la duración y la cuantía. Si hay algún
                error, tienes un plazo para reclamar.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Obligaciones y Errores */}
      <section id="obligaciones-errores" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Obligaciones y Errores Comunes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cobrar el paro implica responsabilidades. Evita sanciones conociendo tus deberes y los fallos más
              habituales.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Obligaciones */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <ClipboardList className="h-7 w-7 mr-3 text-blue-600" />
                Tus Obligaciones como Perceptor
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Renovar la Demanda ("Sellar el Paro")</h4>
                    <p className="text-gray-600 text-sm">
                      Es tu responsabilidad hacerlo en la fecha indicada por tu servicio autonómico de empleo. Un olvido
                      puede suponer la pérdida de un mes de prestación.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Búsqueda Activa de Empleo</h4>
                    <p className="text-gray-600 text-sm">
                      Debes acudir a las citas del SEPE, participar en cursos de formación si te convocan y no rechazar
                      ofertas de empleo adecuadas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Comunicar Cambios</h4>
                    <p className="text-gray-600 text-sm">
                      Informa al SEPE si empiezas a trabajar (incluso a tiempo parcial), si te mudas, si viajas al
                      extranjero o si cambia tu situación familiar (matrimonio, hijos).
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Errores Comunes */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <ShieldAlert className="h-7 w-7 mr-3 text-red-600" />
                Errores Comunes que Debes Evitar
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">No inscribirse como demandante ANTES de ir al SEPE</h4>
                    <p className="text-gray-600 text-sm">
                      Es el error más frecuente. El SEPE no te atenderá si no tienes la "tarjeta del paro" de tu
                      comunidad.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Dejar pasar el plazo de 15 días hábiles</h4>
                    <p className="text-gray-600 text-sm">
                      Cada día que te retrases en la solicitud es un día de prestación que pierdes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">No comunicar un trabajo, aunque sea de pocos días</h4>
                    <p className="text-gray-600 text-sm">
                      El cruce de datos entre la Seguridad Social y el SEPE es automático. Si no lo comunicas, se
                      considera una infracción grave y puede suponer la extinción de tu prestación.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes (FAQ)</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre la prestación por desempleo.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                ¿Qué pasa si encuentro un trabajo a tiempo parcial mientras cobro el paro?
              </AccordionTrigger>
              <AccordionContent>
                Tienes dos opciones: 1) Suspender la prestación y reanudarla si el contrato finaliza. 2) Compatibilizar
                el trabajo con el cobro del paro. En este caso, la cuantía de tu prestación se reducirá en proporción a
                la jornada que realices. Debes comunicarlo al SEPE inmediatamente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Puedo capitalizar el paro para montar mi propio negocio?</AccordionTrigger>
              <AccordionContent>
                Sí, existe la modalidad de pago único. Puedes solicitar que te abonen en un solo pago todo o parte del
                importe de la prestación que te quede por percibir para iniciar una actividad como trabajador autónomo o
                para incorporarte a una cooperativa o sociedad laboral.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿Cómo afecta el paro a mi cotización para la jubilación?</AccordionTrigger>
              <AccordionContent>
                Mientras cobras la prestación contributiva, el SEPE se encarga de ingresar la cotización a la Seguridad
                Social por la contingencia de jubilación, por lo que ese tiempo cuenta como cotizado. La base de
                cotización será el promedio de las bases de los últimos seis meses de ocupación.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>¿Tengo que declarar el paro en la RENTA?</AccordionTrigger>
              <AccordionContent>
                Sí, la prestación por desempleo se considera un rendimiento del trabajo y está sujeta a retención de
                IRPF. El SEPE actúa como un pagador más. Si has tenido dos o más pagadores en el año (tu empresa y el
                SEPE), es muy probable que estés obligado a presentar la declaración de la Renta.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                ¿Qué diferencia hay entre un fijo discontinuo y un temporal a efectos del paro?
              </AccordionTrigger>
              <AccordionContent>
                Un trabajador fijo discontinuo, durante sus periodos de inactividad, se encuentra en situación legal de
                desempleo y puede solicitar la prestación si cumple los requisitos de cotización. Un trabajador temporal
                solo puede solicitarla al finalizar su contrato.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>¿Qué es el subsidio para mayores de 52 años?</AccordionTrigger>
              <AccordionContent>
                Es una ayuda especial para personas que han agotado el paro, tienen 52 años o más y cumplen ciertos
                requisitos de cotización para la jubilación. Su gran ventaja es que se cobra hasta alcanzar la edad de
                jubilación y, además, cotiza para la misma.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Calculadoras Relacionadas */}
      <section className="py-20 bg-white">
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
            Si te han denegado la prestación o no estás de acuerdo con la cuantía, un experto puede ayudarte.
          </p>
          <Link href="/calculadora-honorarios-abogado">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Calcular Honorarios de Abogado Laboralista
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
