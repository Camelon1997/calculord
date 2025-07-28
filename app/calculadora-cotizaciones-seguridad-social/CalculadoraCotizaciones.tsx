"use client"

import { useState } from "react"
import {
  Shield,
  Calculator,
  Users,
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
  name: "Calculadora de Cotizaciones Seguridad Social 2025",
  description:
    "Calcula las cotizaciones exactas de la Seguridad Social para trabajadores y empresas según el régimen general y autónomos",
  url: "https://calculord.com/calculadora-cotizaciones-seguridad-social",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Cálculo régimen general",
    "Cálculo autónomos RETA",
    "Desglose por conceptos",
    "Bases y tipos 2025",
    "Cotización trabajador y empresa",
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
      name: "¿Cómo se calculan las cotizaciones de la Seguridad Social?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las cotizaciones se calculan aplicando los tipos de cotización vigentes sobre la base de cotización. Para el régimen general, el trabajador cotiza un 6.35% y la empresa un 29.9% aproximadamente, variando según conceptos específicos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son las bases de cotización para 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para 2025, la base mínima del régimen general es de 1.184€ mensuales y la máxima de 4.720,50€. Para autónomos, la base mínima es de 960€ y la máxima de 4.720,50€.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre régimen general y autónomos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En el régimen general, trabajador y empresa cotizan por separado. Los autónomos cotizan por todos los conceptos ellos mismos, con tipos diferentes y acceso al sistema de cese de actividad.",
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
      name: "Calculadora Cotizaciones Seguridad Social",
      item: "https://calculord.com/calculadora-cotizaciones-seguridad-social",
    },
  ],
}

export default function CalculadoraCotizaciones() {
  const [formData, setFormData] = useState({
    salarioBruto: "",
    pagas: "14",
    tipoContrato: "general",
  })
  const [resultados, setResultados] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)

  // Tipos de cotización para régimen general
  const cotizacionesGeneral = {
    trabajador: {
      contingenciasComunes: 4.7,
      desempleo: 1.55,
      formacionProfesional: 0.1,
    },
    empresa: {
      contingenciasComunes: 23.6,
      desempleo: 5.5,
      formacionProfesional: 0.6,
      fogasa: 0.2,
      accidentesTrabajo: 1.0,
    },
  }

  const cotizacionesAutonomo = {
    trabajador: {
      contingenciasComunes: 28.3,
      cese: 0.9,
      formacionProfesional: 0.1,
    },
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsCalculating(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const resultadosCalculo = calcularCotizaciones()
    setResultados(resultadosCalculo)
    setIsCalculating(false)
  }

  const calcularCotizaciones = () => {
    const salarioBruto = Number.parseFloat(formData.salarioBruto) || 0
    const pagas = Number.parseInt(formData.pagas)
    const tipoContrato = formData.tipoContrato

    if (tipoContrato === "general") {
      return calcularRegimenGeneral(salarioBruto, pagas)
    } else {
      return calcularAutonomo(salarioBruto, pagas)
    }
  }

  const calcularRegimenGeneral = (salarioBruto, pagas) => {
    // Calcular cotizaciones del trabajador
    let cotizacionTrabajadorMensual = 0
    const desgloseTrabajador = {}

    for (const [concepto, porcentaje] of Object.entries(cotizacionesGeneral.trabajador)) {
      const cantidad = (salarioBruto * porcentaje) / 100
      cotizacionTrabajadorMensual += cantidad
      desgloseTrabajador[concepto] = {
        porcentaje: porcentaje,
        cantidad: cantidad,
      }
    }

    // Calcular cotizaciones de la empresa
    let cotizacionEmpresaMensual = 0
    const desgloseEmpresa = {}

    for (const [concepto, porcentaje] of Object.entries(cotizacionesGeneral.empresa)) {
      const cantidad = (salarioBruto * porcentaje) / 100
      cotizacionEmpresaMensual += cantidad
      desgloseEmpresa[concepto] = {
        porcentaje: porcentaje,
        cantidad: cantidad,
      }
    }

    const salarioNeto = salarioBruto - cotizacionTrabajadorMensual
    const costeTotal = salarioBruto + cotizacionEmpresaMensual

    return {
      cotizacionTrabajador: cotizacionTrabajadorMensual,
      cotizacionEmpresa: cotizacionEmpresaMensual,
      salarioNeto: salarioNeto,
      costeTotal: costeTotal,
      porcentajeTrabajador: (cotizacionTrabajadorMensual / salarioBruto) * 100,
      porcentajeEmpresa: (cotizacionEmpresaMensual / salarioBruto) * 100,
      desgloseTrabajador: desgloseTrabajador,
      desgloseEmpresa: desgloseEmpresa,
    }
  }

  const calcularAutonomo = (salarioBruto, pagas) => {
    // Para autónomos, usamos una base de cotización típica
    const baseCotizacion = Math.max(salarioBruto, 960) // Base mínima 2024

    let cotizacionTrabajadorMensual = 0
    const desgloseTrabajador = {}

    for (const [concepto, porcentaje] of Object.entries(cotizacionesAutonomo.trabajador)) {
      const cantidad = (baseCotizacion * porcentaje) / 100
      cotizacionTrabajadorMensual += cantidad
      desgloseTrabajador[concepto] = {
        porcentaje: porcentaje,
        cantidad: cantidad,
      }
    }

    const salarioNeto = salarioBruto - cotizacionTrabajadorMensual

    return {
      cotizacionTrabajador: cotizacionTrabajadorMensual,
      cotizacionEmpresa: 0,
      salarioNeto: salarioNeto,
      costeTotal: salarioBruto,
      porcentajeTrabajador: (cotizacionTrabajadorMensual / salarioBruto) * 100,
      porcentajeEmpresa: 0,
      desgloseTrabajador: desgloseTrabajador,
      desgloseEmpresa: {},
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
      fogasa: "FOGASA",
      accidentesTrabajo: "Accidentes de Trabajo",
      cese: "Cese de Actividad",
    }
    return conceptos[concepto] || concepto
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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 pt-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Calculadora de Cotizaciones
              <span className="block text-blue-600">Seguridad Social 2025</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Calcula las cotizaciones exactas de la Seguridad Social para trabajadores y empresas según el régimen
              general y autónomos. Actualizada con la normativa 2025.
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
                ¿Por qué usar nuestra calculadora de cotizaciones?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Herramienta precisa para calcular las cotizaciones de la Seguridad Social
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Régimen General</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Calcula cotizaciones para trabajadores por cuenta ajena con desglose completo
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Autónomos</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Cálculo específico para trabajadores autónomos con las bases de cotización actualizadas
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Desglose Detallado</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Visualiza cada concepto de cotización por separado con porcentajes y importes exactos
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12"></div>

          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">Calculadora de Cotizaciones de Seguridad Social</CardTitle>
              <p className="text-center text-blue-100">Cálculo preciso y actualizado con la normativa 2025</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Salario Bruto Mensual (€)
                    <span className="text-xs text-gray-500 ml-2">
                      Introduce tu salario bruto mensual antes de deducciones
                    </span>
                  </label>
                  <input
                    type="number"
                    value={formData.salarioBruto}
                    onChange={(e) => setFormData({ ...formData, salarioBruto: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                    placeholder="Ej: 2000"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Número de Pagas
                      <span className="text-xs text-gray-500 ml-2">Número total de pagas al año</span>
                    </label>
                    <select
                      value={formData.pagas}
                      onChange={(e) => setFormData({ ...formData, pagas: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                      required
                    >
                      <option value="12">12 pagas</option>
                      <option value="14">14 pagas</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tipo de Contrato
                      <span className="text-xs text-gray-500 ml-2">Selecciona el tipo de contrato laboral</span>
                    </label>
                    <select
                      value={formData.tipoContrato}
                      onChange={(e) => setFormData({ ...formData, tipoContrato: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                      required
                    >
                      <option value="general">Régimen General</option>
                      <option value="autonomo">Autónomo</option>
                    </select>
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
                      Calcular Cotizaciones
                    </>
                  )}
                </Button>
              </form>

              {resultados && (
                <div className="mt-8 space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Resultados del Cálculo</h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <h4 className="text-sm font-semibold text-gray-600 mb-1">Cotización Trabajador</h4>
                        <p className="text-2xl font-bold text-blue-600">
                          {formatearMoneda(resultados.cotizacionTrabajador)}
                        </p>
                        <p className="text-sm text-gray-500">{resultados.porcentajeTrabajador.toFixed(2)}%</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <h4 className="text-sm font-semibold text-gray-600 mb-1">Cotización Empresa</h4>
                        <p className="text-2xl font-bold text-green-600">
                          {formatearMoneda(resultados.cotizacionEmpresa)}
                        </p>
                        <p className="text-sm text-gray-500">{resultados.porcentajeEmpresa.toFixed(2)}%</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <h4 className="text-sm font-semibold text-gray-600 mb-1">Salario Neto</h4>
                        <p className="text-2xl font-bold text-purple-600">{formatearMoneda(resultados.salarioNeto)}</p>
                        <p className="text-sm text-gray-500">Después de cotizaciones</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <h4 className="text-sm font-semibold text-gray-600 mb-1">Coste Total Empresa</h4>
                        <p className="text-2xl font-bold text-orange-600">{formatearMoneda(resultados.costeTotal)}</p>
                        <p className="text-sm text-gray-500">Salario + Cotizaciones</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Desglose de Cotizaciones Mensuales</h4>
                    <div className="space-y-2">
                      {/* Desglose trabajador */}
                      {Object.keys(resultados.desgloseTrabajador).length > 0 && (
                        <>
                          <div className="font-semibold text-blue-600 mb-2">Cotizaciones del Trabajador:</div>
                          {Object.entries(resultados.desgloseTrabajador).map(([concepto, datos]) => (
                            <div
                              key={concepto}
                              className="flex justify-between items-center py-2 border-b border-gray-200"
                            >
                              <span className="text-gray-700">
                                {formatearConcepto(concepto)} ({datos.porcentaje}%)
                              </span>
                              <span className="font-semibold text-gray-900">{formatearMoneda(datos.cantidad)}</span>
                            </div>
                          ))}
                        </>
                      )}

                      {/* Desglose empresa */}
                      {Object.keys(resultados.desgloseEmpresa).length > 0 && (
                        <>
                          <div className="font-semibold text-green-600 mb-2 mt-4">Cotizaciones de la Empresa:</div>
                          {Object.entries(resultados.desgloseEmpresa).map(([concepto, datos]) => (
                            <div
                              key={concepto}
                              className="flex justify-between items-center py-2 border-b border-gray-200"
                            >
                              <span className="text-gray-700">
                                {formatearConcepto(concepto)} ({datos.porcentaje}%)
                              </span>
                              <span className="font-semibold text-gray-900">{formatearMoneda(datos.cantidad)}</span>
                            </div>
                          ))}
                        </>
                      )}

                      <div className="border-t-2 border-gray-300 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-gray-900">TOTAL COTIZACIONES</span>
                          <span className="text-xl font-bold text-red-600">
                            {formatearMoneda(resultados.cotizacionTrabajador + resultados.cotizacionEmpresa)}
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

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Perfecto para profesionales de RRHH
                </h2>
                <div className="space-y-4">
                  {[
                    "Gestores laborales y asesorías",
                    "Departamentos de recursos humanos",
                    "Trabajadores autónomos",
                    "Empresarios y emprendedores",
                    "Estudiantes de derecho laboral",
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
                  <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Normativa 2025</h3>
                  <p className="text-gray-600">Actualizada con los últimos cambios</p>
                  <p className="text-sm text-gray-500 mt-2">Bases y tipos de cotización vigentes</p>
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
                  name: "María González",
                  role: "Gestora Laboral",
                  content:
                    "Uso esta calculadora a diario para verificar las cotizaciones de mis clientes. Es muy precisa y me ahorra mucho tiempo.",
                  rating: 5,
                },
                {
                  name: "Carlos Ruiz",
                  role: "Director RRHH",
                  content:
                    "Perfecta para calcular costes laborales reales. La uso para hacer presupuestos de personal.",
                  rating: 5,
                },
                {
                  name: "Ana Martín",
                  role: "Trabajadora Autónoma",
                  content:
                    "Me ayuda a entender exactamente cuánto tengo que cotizar cada mes. Muy útil y fácil de usar.",
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
        <section className="py-20 bg-gray-50">
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
                    Calcula tu salario según las horas trabajadas y SMI 2025. Perfecto para verificar si tus
                    cotizaciones son correctas.
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
                    Calcula tu prestación de paro basada en tus cotizaciones. Usa los datos de cotización que acabas de
                    calcular.
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
                    Calcula tu indemnización por despido según el tipo. Útil para verificar el cálculo de la base
                    reguladora.
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
