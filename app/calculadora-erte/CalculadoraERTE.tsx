"use client"

import { useState } from "react"
import {
  Banknote,
  Calculator,
  CheckCircle,
  TrendingUp,
  Users,
  FileText,
  ArrowRight,
  Briefcase,
  BookOpen,
  ClipboardList,
  Info,
  BarChart3,
  CalendarDays,
  UserCheck,
  Scale,
  Building2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

export default function CalculadoraERTE() {
  const [formData, setFormData] = useState({
    salarioBruto: "",
    tipoERTE: "fuerza-mayor",
    porcentajeReduccion: "100",
    tieneHijos: "no",
    numeroHijos: "0",
  })
  const [resultados, setResultados] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const structuredDataCalculator = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de ERTE 2025",
    description: "Calcula tu prestación por ERTE según la normativa del SEPE",
    url: "https://calculord.com/calculadora-erte",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Cálculo prestación por ERTE",
      "Base reguladora actualizada",
      "Topes máximos y mínimos 2025",
      "Diferencias ERTE vs paro",
      "Requisitos de acceso",
    ],
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto se cobra en ERTE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Durante los primeros 180 días (6 meses) se cobra el 70% de tu base reguladora. A partir del día 181, la cuantía se reduce al 60% de la base reguladora. Existen topes máximos y mínimos según si tienes hijos a cargo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es un ERTE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un ERTE (Expediente de Regulación Temporal de Empleo) es una medida que permite a la empresa suspender temporalmente los contratos o reducir la jornada laboral de sus trabajadores por causas económicas, técnicas, organizativas, de producción o fuerza mayor.",
        },
      },
      {
        "@type": "Question",
        name: "¿La empresa cotiza durante el ERTE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, durante un ERTE la empresa sigue cotizando por el trabajador, aunque en algunos casos con bonificaciones o exoneraciones según el tipo de ERTE y la normativa vigente. El trabajador mantiene su antigüedad en la empresa.",
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
        name: "Calculadora de ERTE",
        item: "https://calculord.com/calculadora-erte",
      },
    ],
  }

  // Datos actualizados 2025
  const IPREM_2025 = 620
  const DATOS_ERTE_2025 = {
    topeMinimoSinHijos: IPREM_2025 * 0.8, // 80% IPREM = 496€
    topeMinimoConHijos: IPREM_2025 * 1.07, // 107% IPREM = 663.4€
    topeMaximoSinHijos: IPREM_2025 * 1.75, // 175% IPREM = 1085€
    topeMaximoCon1Hijo: IPREM_2025 * 2.0, // 200% IPREM = 1240€
    topeMaximoCon2HijosOMas: IPREM_2025 * 2.25, // 225% IPREM = 1395€
    porcentajePrimeros6Meses: 70,
    porcentajeResto: 60,
    smi2025: 1184,
  }

  const calcularBaseReguladora = (salarioBruto) => {
    // La base reguladora es el promedio de los últimos 180 días de cotización
    // Aproximadamente el 85-90% del salario bruto (quitando IRPF y otras deducciones)
    return salarioBruto * 0.9
  }

  const formatearMoneda = (cantidad) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(cantidad)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsCalculating(true)

    setTimeout(() => {
      const salarioBruto = Number.parseFloat(formData.salarioBruto)
      const porcentajeReduccion = Number.parseFloat(formData.porcentajeReduccion)
      const numeroHijos = Number.parseInt(formData.numeroHijos)

      // Calcular base reguladora
      const baseReguladora = calcularBaseReguladora(salarioBruto)

      // Calcular cuantías antes de aplicar topes
      const cuantia70 = baseReguladora * (DATOS_ERTE_2025.porcentajePrimeros6Meses / 100)
      const cuantia60 = baseReguladora * (DATOS_ERTE_2025.porcentajeResto / 100)

      // Determinar topes según hijos
      let topeMinimo = DATOS_ERTE_2025.topeMinimoSinHijos
      let topeMaximo = DATOS_ERTE_2025.topeMaximoSinHijos

      if (numeroHijos === 1) {
        topeMinimo = DATOS_ERTE_2025.topeMinimoConHijos
        topeMaximo = DATOS_ERTE_2025.topeMaximoCon1Hijo
      } else if (numeroHijos >= 2) {
        topeMinimo = DATOS_ERTE_2025.topeMinimoConHijos
        topeMaximo = DATOS_ERTE_2025.topeMaximoCon2HijosOMas
      }

      // Aplicar topes
      const cuantiaFinalPrimeros6 = Math.min(Math.max(cuantia70, topeMinimo), topeMaximo)
      const cuantiaFinalResto = Math.min(Math.max(cuantia60, topeMinimo), topeMaximo)

      // Si es reducción de jornada, calcular proporcionalmente
      const cuantiaRealPrimeros6 = cuantiaFinalPrimeros6 * (porcentajeReduccion / 100)
      const cuantiaRealResto = cuantiaFinalResto * (porcentajeReduccion / 100)

      // Calcular salario que recibirá de la empresa (si es reducción de jornada)
      const salarioEmpresa = porcentajeReduccion < 100 ? salarioBruto * (1 - porcentajeReduccion / 100) : 0

      // Ingresos totales
      const ingresosTotalesPrimeros6 = cuantiaRealPrimeros6 + salarioEmpresa
      const ingresosTotalesResto = cuantiaRealResto + salarioEmpresa

      // Porcentaje real sobre salario original
      const porcentajeSalarioPrimeros6 = (ingresosTotalesPrimeros6 / salarioBruto) * 100
      const porcentajeSalarioResto = (ingresosTotalesResto / salarioBruto) * 100

      setResultados({
        baseReguladora: baseReguladora,
        cuantiaFinalPrimeros6: cuantiaRealPrimeros6,
        cuantiaFinalResto: cuantiaRealResto,
        salarioEmpresa: salarioEmpresa,
        ingresosTotalesPrimeros6: ingresosTotalesPrimeros6,
        ingresosTotalesResto: ingresosTotalesResto,
        porcentajeSalario: {
          primeros6: porcentajeSalarioPrimeros6,
          resto: porcentajeSalarioResto,
        },
        topeMinimo: topeMinimo,
        topeMaximo: topeMaximo,
        esReduccionJornada: porcentajeReduccion < 100,
      })

      setIsCalculating(false)
    }, 800)
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Building2 className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Calculadora de ERTE 2025: Tu Guía Completa
            <span className="block text-blue-600">para el Expediente de Regulación Temporal</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Calcula tu prestación por ERTE (suspensión o reducción de jornada) con la normativa actualizada del SEPE
            2025. Descubre cuánto cobrarás, tus derechos y las diferencias clave con el paro tradicional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calcular Mi ERTE Ahora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold bg-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculadora de Prestación por ERTE</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Introduce tus datos para obtener una estimación precisa de tu prestación. Actualizado a 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-t-4 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Calculator className="h-6 w-6 text-blue-600" />
                    Introduce tus datos
                  </CardTitle>
                  <CardDescription>Rellena los campos para calcular tu prestación por ERTE.</CardDescription>
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
                      <p className="text-xs text-gray-500">Tu salario mensual antes del ERTE.</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tipoERTE" className="flex items-center gap-1.5">
                        <FileText className="h-4 w-4" />
                        Tipo de ERTE
                      </Label>
                      <Select
                        value={formData.tipoERTE}
                        onValueChange={(value) => setFormData({ ...formData, tipoERTE: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fuerza-mayor">Fuerza Mayor</SelectItem>
                          <SelectItem value="etop">
                            Causas ETOP (Económicas, Técnicas, Organizativas, Producción)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-gray-500">
                        {formData.tipoERTE === "fuerza-mayor"
                          ? "No consume tu derecho a paro futuro."
                          : "Consume parcialmente tu derecho a paro futuro."}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="porcentajeReduccion" className="flex items-center gap-1.5">
                        <TrendingUp className="h-4 w-4" />
                        Porcentaje de Reducción/Suspensión (%)
                      </Label>
                      <Select
                        value={formData.porcentajeReduccion}
                        onValueChange={(value) => setFormData({ ...formData, porcentajeReduccion: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el porcentaje" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="100">100% - Suspensión Total</SelectItem>
                          <SelectItem value="75">75% - Reducción de Jornada</SelectItem>
                          <SelectItem value="50">50% - Reducción de Jornada</SelectItem>
                          <SelectItem value="25">25% - Reducción de Jornada</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-gray-500">
                        {formData.porcentajeReduccion === "100"
                          ? "No trabajas, solo cobras la prestación."
                          : `Trabajas ${100 - Number.parseFloat(formData.porcentajeReduccion)}% y cobras prestación por el ${formData.porcentajeReduccion}%.`}
                      </p>
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
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isCalculating}>
                      {isCalculating ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Calculando...
                        </>
                      ) : (
                        <>
                          <Calculator className="mr-2 h-5 w-5" />
                          Calcular Prestación ERTE
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
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BarChart3 className="h-8 w-8 text-blue-500" />
                      </div>
                      <CardTitle className="text-2xl">Tus resultados aparecerán aquí</CardTitle>
                      <CardDescription>Completa el formulario para ver tu estimación.</CardDescription>
                    </CardHeader>
                  </Card>
                )}

                {resultados && (
                  <Card className="shadow-xl border-t-4 border-green-500">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <UserCheck className="h-8 w-8 text-green-500" />
                      </div>
                      <CardTitle className="text-2xl text-green-700">Resumen de tu Prestación por ERTE</CardTitle>
                      <CardDescription>
                        Estimación basada en los datos introducidos y la normativa de 2025.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-600">Ingresos Totales (1os 6m)</p>
                          <p className="text-3xl font-bold text-blue-600">
                            {formatearMoneda(resultados.ingresosTotalesPrimeros6)}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {resultados.porcentajeSalario.primeros6.toFixed(1)}% de tu salario
                          </p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-600">Ingresos Totales (resto)</p>
                          <p className="text-3xl font-bold text-purple-600">
                            {formatearMoneda(resultados.ingresosTotalesResto)}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {resultados.porcentajeSalario.resto.toFixed(1)}% de tu salario
                          </p>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-center">Desglose Mensual</h4>
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <p className="font-semibold text-green-800">Primeros 6 meses</p>
                                <p className="text-sm text-green-600">
                                  {DATOS_ERTE_2025.porcentajePrimeros6Meses}% de la base reguladora
                                </p>
                              </div>
                              <p className="text-2xl font-bold text-green-700">
                                {formatearMoneda(resultados.cuantiaFinalPrimeros6)}
                              </p>
                            </div>
                            {resultados.esReduccionJornada && (
                              <>
                                <Separator className="my-2" />
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-600">+ Salario empresa:</span>
                                  <span className="font-medium">{formatearMoneda(resultados.salarioEmpresa)}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm font-bold mt-1">
                                  <span className="text-gray-800">= Total mensual:</span>
                                  <span className="text-green-700">
                                    {formatearMoneda(resultados.ingresosTotalesPrimeros6)}
                                  </span>
                                </div>
                              </>
                            )}
                          </div>

                          <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <p className="font-semibold text-blue-800">A partir del 7º mes</p>
                                <p className="text-sm text-blue-600">
                                  {DATOS_ERTE_2025.porcentajeResto}% de la base reguladora
                                </p>
                              </div>
                              <p className="text-2xl font-bold text-blue-700">
                                {formatearMoneda(resultados.cuantiaFinalResto)}
                              </p>
                            </div>
                            {resultados.esReduccionJornada && (
                              <>
                                <Separator className="my-2" />
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-600">+ Salario empresa:</span>
                                  <span className="font-medium">{formatearMoneda(resultados.salarioEmpresa)}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm font-bold mt-1">
                                  <span className="text-gray-800">= Total mensual:</span>
                                  <span className="text-blue-700">
                                    {formatearMoneda(resultados.ingresosTotalesResto)}
                                  </span>
                                </div>
                              </>
                            )}
                          </div>
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
                            <span className="text-gray-600">Tope Mínimo:</span>
                            <span className="font-medium">{formatearMoneda(resultados.topeMinimo)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tope Máximo:</span>
                            <span className="font-medium">{formatearMoneda(resultados.topeMaximo)}</span>
                          </div>
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

      {/* Guía Detallada */}
      <section id="guia-detallada" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Qué es un ERTE y Cómo Funciona?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entiende a fondo el Expediente de Regulación Temporal de Empleo y tus derechos.
            </p>
          </div>
          <div className="space-y-12">
            {/* Qué es ERTE */}
            <div className="p-8 border rounded-lg shadow-lg bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Building2 className="h-7 w-7 text-blue-500" />
                1. ¿Qué es un ERTE?
              </h3>
              <p className="text-gray-600 mb-4">
                Un ERTE (Expediente de Regulación Temporal de Empleo) es una medida laboral que permite a la empresa
                <span className="font-bold"> suspender temporalmente los contratos</span> de trabajo o{" "}
                <span className="font-bold">reducir la jornada laboral</span> de sus empleados por causas justificadas.
              </p>
              <p className="text-gray-600 mb-4">
                A diferencia del despido, en un ERTE{" "}
                <span className="font-bold">mantienes tu vínculo con la empresa</span>. No pierdes tu puesto de trabajo,
                solo está "en pausa" temporalmente. Cuando el ERTE finaliza, vuelves a tu puesto con las mismas
                condiciones que tenías antes.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="font-semibold text-blue-800">Diferencia Clave:</p>
                <p className="text-blue-700 text-sm">
                  En un ERTE sigues siendo empleado de la empresa (conservas antigüedad), mientras que en el paro has
                  perdido tu empleo y buscas uno nuevo.
                </p>
              </div>
            </div>

            {/* Tipos de ERTE */}
            <div className="p-8 border rounded-lg shadow-lg bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <FileText className="h-7 w-7 text-green-500" />
                2. Tipos de ERTE
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">ERTE por Fuerza Mayor</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Se aplica cuando hay circunstancias excepcionales e inevitables (pandemias, desastres naturales,
                    incendios, etc.) que impiden que la empresa opere normally.
                  </p>
                  <p className="text-green-700 font-semibold text-sm">
                    ✓ Ventaja: NO consume tu derecho a paro futuro. Cuando termine el ERTE, mantendrás íntegros tus días
                    de prestación por desempleo para cuando realmente pierdas el trabajo.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">
                    ERTE por Causas ETOP (Económicas, Técnicas, Organizativas, Producción)
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Se aplica cuando la empresa tiene problemas económicos, necesita reorganizarse, modernizar su
                    tecnología o hay una bajada de producción temporal.
                  </p>
                  <p className="text-orange-700 font-semibold text-sm">
                    ⚠ Importante: SÍ consume parcialmente tu derecho a paro futuro. Los días que cobres prestación por
                    este ERTE se descontarán de tu futura prestación por desempleo.
                  </p>
                </div>
              </div>
            </div>

            {/* Base Reguladora */}
            <div className="p-8 border rounded-lg shadow-lg bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Scale className="h-7 w-7 text-purple-500" />
                3. Cálculo de la Prestación: Base Reguladora
              </h3>
              <p className="text-gray-600 mb-4">
                La base reguladora en un ERTE se calcula igual que en el paro normal: es el promedio de tus bases de
                cotización de los <span className="font-bold">últimos 180 días</span> trabajados antes del ERTE.
              </p>
              <p className="text-gray-600 mb-4">Una vez calculada la base reguladora:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>
                  <span className="font-bold text-green-600">Primeros 180 días (6 meses):</span> Cobrarás el 70% de tu
                  base reguladora.
                </li>
                <li>
                  <span className="font-bold text-blue-600">A partir del día 181:</span> La cuantía baja al 60% de tu
                  base reguladora.
                </li>
              </ul>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <p className="font-semibold text-purple-800">Ejemplo práctico:</p>
                <p className="text-purple-700 text-sm">
                  Si tu base reguladora es 1500€: <br />- Primeros 6 meses: 1500€ × 70% = <strong>1050€/mes</strong>
                  <br />- A partir del 7º mes: 1500€ × 60% = <strong>900€/mes</strong>
                </p>
              </div>
            </div>

            {/* ERTE Parcial */}
            <div className="p-8 border rounded-lg shadow-lg bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <TrendingUp className="h-7 w-7 text-indigo-500" />
                4. ERTE con Reducción de Jornada
              </h3>
              <p className="text-gray-600 mb-4">
                No todos los ERTE son de suspensión total. La empresa puede optar por una{" "}
                <span className="font-bold">reducción de jornada</span>, en cuyo caso trabajarás menos horas y el resto
                del tiempo lo cubrirá la prestación por desempleo.
              </p>
              <p className="text-gray-600 mb-4">Por ejemplo, si te reducen la jornada un 50%:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Trabajarás el 50% de tu jornada habitual y cobrarás el 50% de tu salario de la empresa.</li>
                <li>El otro 50% del tiempo no trabajado lo cubre el SEPE con el 50% de la prestación calculada.</li>
              </ul>
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mt-4">
                <p className="font-semibold text-indigo-800">Ventaja:</p>
                <p className="text-indigo-700 text-sm">
                  En un ERTE parcial, tus ingresos totales suelen ser más altos que con una suspensión total, ya que
                  combinas salario + prestación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ERTE vs Paro */}
      <section id="comparativa" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ERTE vs Paro: Diferencias Clave</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aunque ambos permiten cobrar una prestación por desempleo, hay diferencias importantes que debes conocer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-xl border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">ERTE</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Vínculo Laboral:</span> Sigues siendo empleado de la empresa. Tu
                    contrato está suspendido temporalmente.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Antigüedad:</span> Mantienes tu antigüedad en la empresa durante el
                    ERTE.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Cotización:</span> La empresa sigue cotizando por ti (con posibles
                    bonificaciones según el tipo de ERTE).
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Duración:</span> La decide la empresa según sus necesidades. Puede
                    ser de semanas a meses.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Regreso:</span> Cuando termine el ERTE, vuelves automáticamente a tu
                    puesto.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl border border-orange-200">
              <h3 className="text-2xl font-bold text-orange-700 mb-4">Paro (Desempleo)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Vínculo Laboral:</span> Has perdido tu empleo. La relación laboral
                    ha terminado.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Antigüedad:</span> Si encuentras un nuevo trabajo, empiezas desde
                    cero en cuanto a antigüedad.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Cotización:</span> El SEPE cotiza por ti solo para la jubilación, no
                    para otras contingencias.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Duración:</span> Depende de tus meses cotizados (de 4 a 24 meses
                    máximo).
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Regreso:</span> No hay garantía de volver. Debes buscar un nuevo
                    empleo activamente.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tus Derechos */}
      <section id="derechos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tus Derechos en un ERTE</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Como trabajador afectado por un ERTE, tienes derechos que la empresa debe respetar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="h-8 w-8 text-blue-600" />,
                title: "Derecho a la Información",
                description:
                  "La empresa debe informarte por escrito sobre el ERTE: motivo, duración prevista, y tus derechos. No pueden aplicarlo sin previo aviso.",
                color: "blue",
              },
              {
                icon: <Briefcase className="h-8 w-8 text-green-600" />,
                title: "Conservación del Puesto",
                description:
                  "Tu puesto de trabajo está garantizado. Cuando el ERTE termine, la empresa debe reincorporarte con las mismas condiciones laborales.",
                color: "green",
              },
              {
                icon: <Banknote className="h-8 w-8 text-purple-600" />,
                title: "Prestación por Desempleo",
                description:
                  "Tienes derecho a cobrar la prestación por desempleo aunque no hayas cotizado los meses mínimos habituales (360 días).",
                color: "purple",
              },
              {
                icon: <CalendarDays className="h-8 w-8 text-orange-600" />,
                title: "Mantenimiento de Antigüedad",
                description:
                  "El tiempo que dure el ERTE cuenta como antigüedad en la empresa. No pierdes tu posición ni derechos acumulados.",
                color: "orange",
              },
              {
                icon: <Scale className="h-8 w-8 text-red-600" />,
                title: "Representación Legal",
                description:
                  "Los representantes de los trabajadores deben ser consultados. Tienes derecho a que te representen en el proceso del ERTE.",
                color: "red",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-emerald-600" />,
                title: "No Discriminación",
                description:
                  "La empresa no puede elegir arbitrariamente a quién afecta el ERTE. Debe aplicar criterios objetivos y justos.",
                color: "emerald",
              },
            ].map((derecho, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 bg-${derecho.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    {derecho.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{derecho.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{derecho.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo solicitar */}
      <section id="como-solicitar" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cómo Solicitar la Prestación por ERTE</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pasos esenciales para tramitar tu prestación sin problemas
            </p>
          </div>
          <ol className="space-y-12 relative border-l-2 border-blue-200">
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-gray-50">
                <FileText className="w-5 h-5 text-blue-600" />
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. La Empresa Comunica el ERTE</h3>
              <p className="text-gray-600">
                Es la empresa la que debe iniciar el procedimiento del ERTE ante la autoridad laboral. Te notificarán
                por escrito que vas a ser afectado por el ERTE y te indicarán si es suspensión total o reducción de
                jornada.
              </p>
            </li>
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-gray-50">
                <Users className="w-5 h-5 text-blue-600" />
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Inscríbete como Demandante de Empleo</h3>
              <p className="text-gray-600">
                Aunque no hayas perdido tu empleo, debes inscribirte como demandante de empleo en tu servicio de empleo
                autonómico. Puedes hacerlo online o presencialmente pidiendo cita previa.
              </p>
              <div className="mt-3 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg">
                <p className="text-sm text-yellow-800">
                  <span className="font-bold">Importante:</span> Hazlo cuanto antes para no perder días de prestación.
                  El derecho nace desde que te inscribes, no desde que la empresa aprueba el ERTE.
                </p>
              </div>
            </li>
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-gray-50">
                <ClipboardList className="w-5 h-5 text-blue-600" />
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Solicita la Prestación en el SEPE</h3>
              <p className="text-gray-600">
                Pide cita previa en el SEPE (online o por teléfono) y presenta la solicitud de prestación por desempleo.
                La empresa normalmente envía el certificado directamente al SEPE, pero confirma que lo hayan hecho.
              </p>
              <div className="mt-3 bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                <p className="text-sm text-blue-800">
                  <span className="font-bold">Consejo:</span> Puedes hacerlo telemáticamente desde la Sede Electrónica
                  del SEPE con certificado digital, Cl@ve o DNIe. Es más rápido y cómodo.
                </p>
              </div>
            </li>
            <li className="ml-8">
              <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-gray-50">
                <CheckCircle className="w-5 h-5 text-blue-600" />
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Espera la Resolución y Cobra</h3>
              <p className="text-gray-600">
                El SEPE te enviará una resolución aprobando tu prestación. Si todo está correcto, empezarás a cobrar
                mensualmente. Recuerda renovar tu demanda de empleo ("sellar el paro") mensualmente para no perder la
                prestación.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes sobre ERTE</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Resolvemos las dudas más comunes</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Puedo trabajar en otra empresa mientras estoy en ERTE?</AccordionTrigger>
              <AccordionContent>
                Si estás en ERTE de suspensión total (100%), sí puedes trabajar en otra empresa temporalmente, pero
                debes comunicarlo al SEPE. Tu prestación se suspenderá mientras trabajas y se reanudará al finalizar ese
                trabajo. Si es reducción de jornada, dependerá de que no haya incompatibilidad horaria con tu empresa
                actual.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Me pueden despedir estando en ERTE?</AccordionTrigger>
              <AccordionContent>
                Técnicamente sí, la empresa puede despedirte, pero debe tener una causa justificada diferente a la del
                ERTE. Además, muchos ERTE tienen cláusulas de salvaguarda del empleo que obligan a la empresa a mantener
                los puestos durante un tiempo determinado tras finalizar el ERTE. Si te despiden injustificadamente,
                tienes derecho a reclamar.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿El ERTE aparece en mi vida laboral?</AccordionTrigger>
              <AccordionContent>
                Sí, el periodo de ERTE aparece en tu vida laboral de la Seguridad Social. Se indica el tipo de situación
                (ERTE) y el periodo afectado. Esto es normal y no es negativo; simplemente refleja que estuviste en una
                situación de regulación temporal aprobada legalmente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>¿Tengo que devolver el dinero del ERTE?</AccordionTrigger>
              <AccordionContent>
                No, salvo que haya habido un error en el cálculo o fraude. Si el SEPE te paga más de lo debido por
                error, pueden reclamarte la devolución. Pero si todo se ha tramitado correctamente y has cumplido con
                tus obligaciones, el dinero es tuyo y no tienes que devolverlo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>¿Qué pasa si la empresa no me reincorpora tras el ERTE?</AccordionTrigger>
              <AccordionContent>
                Si el ERTE ha finalizado oficialmente y la empresa no te llama para volver a trabajar, está incumpliendo
                la ley. Debes contactar con la empresa por escrito para exigir tu reincorporación. Si se niegan, puedes
                considerarlo un despido improcedente y reclamar ante el juzgado de lo social.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>¿El ERTE afecta a mi futura pensión de jubilación?</AccordionTrigger>
              <AccordionContent>
                Depende del tipo de ERTE. En un ERTE de fuerza mayor, la empresa sigue cotizando (aunque con posibles
                exoneraciones) y el periodo cuenta para la jubilación. En ERTE por causas ETOP, también se cotiza. En
                general, el tiempo de ERTE sí cuenta para tu jubilación, aunque la base de cotización puede ser
                diferente.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Calculadoras Relacionadas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculadoras Laborales Relacionadas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Herramientas para completar tu análisis laboral</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Banknote className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Calculadora de Paro</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Calcula tu prestación por desempleo normal si terminas perdiendo tu empleo tras el ERTE.
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
                <CardTitle className="text-xl text-gray-900">Calculadora de Despidos</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Si tras el ERTE te despiden, calcula tu indemnización y finiquito completo.
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
                  Verifica tus cotizaciones y entiende cómo afecta el ERTE a tu base reguladora.
                </p>
                <Link href="/calculadora-cotizaciones-seguridad-social">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Ver cotizaciones
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Dudas sobre tu ERTE?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Si crees que tu empresa no está respetando tus derechos o tienes problemas con la prestación, consulta con
            un especialista.
          </p>
          <Link href="/calculadora-honorarios-abogado">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Calcular Honorarios de Abogado Laboralista
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
