"use client"

import { useState } from "react"
import { Scale, Calculator, ArrowLeft, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CalculadoraHonorariosAbogado() {
  const [formData, setFormData] = useState({
    especialidad: "civil",
    tipoServicio: "consulta",
    cuantiaAsunto: "",
    horasEstimadas: "",
    complejidad: "media",
    experienciaAbogado: "intermedio",
  })
  const [resultados, setResultados] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const structuredDataCalculator = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Honorarios de Abogado 2025",
    description: "Calcula honorarios legales según baremos colegiales, complejidad del caso y tiempo invertido",
    url: "https://calculord.com/calculadora-honorarios-abogado",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Baremos colegiales oficiales",
      "Cálculo por especialidad jurídica",
      "Ajuste por complejidad del caso",
      "Factores de experiencia profesional",
      "Cálculo por horas y cuantía",
    ],
  }

  const professionalServiceStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Servicios de Cálculo de Honorarios Legales",
    description: "Herramienta para calcular honorarios de abogados según baremos profesionales",
    provider: {
      "@type": "Organization",
      name: "Calculord",
      url: "https://calculord.com",
    },
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    serviceType: "Calculadora de Honorarios Profesionales",
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
        name: "Calculadora Honorarios Abogado",
        item: "https://calculord.com/calculadora-honorarios-abogado",
      },
    ],
  }

  // Baremos base por especialidad (€/hora)
  const baremasEspecialidad = {
    civil: { base: 120, factor: 1.0 },
    penal: { base: 150, factor: 1.2 },
    mercantil: { base: 140, factor: 1.1 },
    laboral: { base: 110, factor: 0.9 },
    administrativo: { base: 130, factor: 1.05 },
    fiscal: { base: 160, factor: 1.3 },
    familia: { base: 100, factor: 0.85 },
    inmobiliario: { base: 125, factor: 1.0 },
  }

  // Factores de complejidad
  const factoresComplejidad = {
    baja: 0.8,
    media: 1.0,
    alta: 1.3,
    muy_alta: 1.6,
  }

  // Factores de experiencia
  const factoresExperiencia = {
    junior: 0.7,
    intermedio: 1.0,
    senior: 1.4,
    socio: 1.8,
  }

  // Tipos de servicio y sus multiplicadores
  const tiposServicio = {
    consulta: { horas: 1, factor: 1.0, descripcion: "Consulta puntual" },
    dictamen: { horas: 8, factor: 1.2, descripcion: "Dictamen jurídico" },
    contrato: { horas: 4, factor: 1.1, descripcion: "Redacción de contrato" },
    demanda: { horas: 12, factor: 1.3, descripcion: "Redacción de demanda" },
    procedimiento: { horas: 40, factor: 1.5, descripcion: "Procedimiento completo" },
    recurso: { horas: 16, factor: 1.4, descripcion: "Recurso de apelación" },
    negociacion: { horas: 20, factor: 1.2, descripcion: "Negociación extrajudicial" },
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsCalculating(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const resultadosCalculo = calcularHonorarios()
    setResultados(resultadosCalculo)
    setIsCalculating(false)
  }

  const calcularHonorarios = () => {
    const especialidad = baremasEspecialidad[formData.especialidad]
    const servicio = tiposServicio[formData.tipoServicio]
    const cuantiaAsunto = Number.parseFloat(formData.cuantiaAsunto) || 0
    const horasEstimadas = Number.parseFloat(formData.horasEstimadas) || servicio.horas
    const factorComplejidad = factoresComplejidad[formData.complejidad]
    const factorExperiencia = factoresExperiencia[formData.experienciaAbogado]

    // Calcular tarifa por hora ajustada
    const tarifaBaseHora = especialidad.base
    const tarifaAjustada =
      tarifaBaseHora * especialidad.factor * factorComplejidad * factorExperiencia * servicio.factor

    // Calcular honorarios por horas
    const honorariosPorHoras = horasEstimadas * tarifaAjustada

    // Calcular honorarios por cuantía (si aplica)
    let honorariosPorCuantia = 0
    if (cuantiaAsunto > 0) {
      if (cuantiaAsunto <= 3000) {
        honorariosPorCuantia = cuantiaAsunto * 0.1
      } else if (cuantiaAsunto <= 30000) {
        honorariosPorCuantia = 300 + (cuantiaAsunto - 3000) * 0.08
      } else if (cuantiaAsunto <= 150000) {
        honorariosPorCuantia = 2460 + (cuantiaAsunto - 30000) * 0.06
      } else {
        honorariosPorCuantia = 9660 + (cuantiaAsunto - 150000) * 0.04
      }
    }

    // Tomar el mayor entre honorarios por horas y por cuantía
    const honorariosBase = Math.max(honorariosPorHoras, honorariosPorCuantia)

    // Calcular IVA (21%)
    const iva = honorariosBase * 0.21
    const totalConIva = honorariosBase + iva

    // Calcular retención IRPF (15% para profesionales)
    const retencionIRPF = honorariosBase * 0.15
    const totalARecibir = totalConIva - retencionIRPF

    return {
      tarifaHora: tarifaAjustada,
      horasEstimadas: horasEstimadas,
      honorariosPorHoras: honorariosPorHoras,
      honorariosPorCuantia: honorariosPorCuantia,
      honorariosBase: honorariosBase,
      iva: iva,
      totalConIva: totalConIva,
      retencionIRPF: retencionIRPF,
      totalARecibir: totalARecibir,
      metodoCalculo: honorariosPorHoras > honorariosPorCuantia ? "Por horas" : "Por cuantía",
      factores: {
        especialidad: especialidad.factor,
        complejidad: factorComplejidad,
        experiencia: factorExperiencia,
        servicio: servicio.factor,
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

  const formatearEspecialidad = (especialidad) => {
    const especialidades = {
      civil: "Derecho Civil",
      penal: "Derecho Penal",
      mercantil: "Derecho Mercantil",
      laboral: "Derecho Laboral",
      administrativo: "Derecho Administrativo",
      fiscal: "Derecho Fiscal",
      familia: "Derecho de Familia",
      inmobiliario: "Derecho Inmobiliario",
    }
    return especialidades[especialidad] || especialidad
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataCalculator) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceStructuredData) }}
      />
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
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale className="h-10 w-10 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculadora de Honorarios
            <span className="block text-amber-600">de Abogado 2025</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Calcula honorarios legales según baremos colegiales, complejidad del caso y tiempo invertido. Actualizada
            con las tarifas profesionales 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
              onClick={() => document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Scale className="mr-2 h-5 w-5" />
              Calcular Ahora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg bg-transparent"
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
              ¿Por qué usar nuestra calculadora de honorarios?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Herramienta precisa para calcular honorarios profesionales de abogados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Baremos Oficiales</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Basado en los baremos orientativos de los colegios de abogados españoles
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Por Especialidad</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Tarifas diferenciadas según la especialidad jurídica y nivel de experiencia
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Complejidad del Caso</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Ajuste automático según la complejidad y tiempo estimado del asunto legal
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="calculadora">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale className="h-10 w-10 text-amber-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Calculadora de Honorarios de Abogado</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Calcula honorarios legales según baremos colegiales, complejidad del caso y tiempo invertido
          </p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-t-lg">
            <CardTitle className="text-2xl text-center">Calculadora de Honorarios Profesionales</CardTitle>
            <p className="text-center text-amber-100">Basada en baremos colegiales y factores profesionales</p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Especialidad Jurídica</label>
                  <select
                    value={formData.especialidad}
                    onChange={(e) => setFormData({ ...formData, especialidad: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                    required
                  >
                    <option value="civil">Derecho Civil</option>
                    <option value="penal">Derecho Penal</option>
                    <option value="mercantil">Derecho Mercantil</option>
                    <option value="laboral">Derecho Laboral</option>
                    <option value="administrativo">Derecho Administrativo</option>
                    <option value="fiscal">Derecho Fiscal</option>
                    <option value="familia">Derecho de Familia</option>
                    <option value="inmobiliario">Derecho Inmobiliario</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Servicio</label>
                  <select
                    value={formData.tipoServicio}
                    onChange={(e) => setFormData({ ...formData, tipoServicio: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                    required
                  >
                    <option value="consulta">Consulta puntual</option>
                    <option value="dictamen">Dictamen jurídico</option>
                    <option value="contrato">Redacción de contrato</option>
                    <option value="demanda">Redacción de demanda</option>
                    <option value="procedimiento">Procedimiento completo</option>
                    <option value="recurso">Recurso de apelación</option>
                    <option value="negociacion">Negociación extrajudicial</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cuantía del Asunto (€) - Opcional
                  </label>
                  <input
                    type="number"
                    value={formData.cuantiaAsunto}
                    onChange={(e) => setFormData({ ...formData, cuantiaAsunto: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                    placeholder="Ej: 50000"
                    min="0"
                    step="0.01"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Si el asunto tiene valor económico, se calculará también por cuantía
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Horas Estimadas</label>
                  <input
                    type="number"
                    value={formData.horasEstimadas}
                    onChange={(e) => setFormData({ ...formData, horasEstimadas: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                    placeholder={`Ej: ${tiposServicio[formData.tipoServicio]?.horas || 1}`}
                    min="0.5"
                    step="0.5"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Horas estimadas para completar el trabajo (por defecto:{" "}
                    {tiposServicio[formData.tipoServicio]?.horas || 1}h)
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Complejidad del Caso</label>
                  <select
                    value={formData.complejidad}
                    onChange={(e) => setFormData({ ...formData, complejidad: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                    required
                  >
                    <option value="baja">Baja (-20%)</option>
                    <option value="media">Media (estándar)</option>
                    <option value="alta">Alta (+30%)</option>
                    <option value="muy_alta">Muy Alta (+60%)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Experiencia del Abogado</label>
                  <select
                    value={formData.experienciaAbogado}
                    onChange={(e) => setFormData({ ...formData, experienciaAbogado: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
                    required
                  >
                    <option value="junior">Junior (-30%)</option>
                    <option value="intermedio">Intermedio (estándar)</option>
                    <option value="senior">Senior (+40%)</option>
                    <option value="socio">Socio (+80%)</option>
                  </select>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 text-lg font-semibold"
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
                    Calcular Honorarios
                  </>
                )}
              </Button>
            </form>

            {resultados && (
              <div className="mt-8 space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Cálculo de Honorarios</h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Honorarios Base</h4>
                      <p className="text-2xl font-bold text-amber-600">{formatearMoneda(resultados.honorariosBase)}</p>
                      <p className="text-sm text-gray-500">{resultados.metodoCalculo}</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">IVA (21%)</h4>
                      <p className="text-2xl font-bold text-green-600">{formatearMoneda(resultados.iva)}</p>
                      <p className="text-sm text-gray-500">Impuesto añadido</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Retención IRPF</h4>
                      <p className="text-2xl font-bold text-red-600">{formatearMoneda(resultados.retencionIRPF)}</p>
                      <p className="text-sm text-gray-500">15% retención</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Total a Recibir</h4>
                      <p className="text-2xl font-bold text-blue-600">{formatearMoneda(resultados.totalARecibir)}</p>
                      <p className="text-sm text-gray-500">Importe neto</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Detalles del Cálculo</h4>
                      <div className="space-y-1 text-sm">
                        <p>
                          <span className="font-medium">Especialidad:</span>{" "}
                          {formatearEspecialidad(formData.especialidad)}
                        </p>
                        <p>
                          <span className="font-medium">Tarifa por hora:</span> {formatearMoneda(resultados.tarifaHora)}
                        </p>
                        <p>
                          <span className="font-medium">Horas estimadas:</span> {resultados.horasEstimadas}h
                        </p>
                        <p>
                          <span className="font-medium">Método aplicado:</span> {resultados.metodoCalculo}
                        </p>
                      </div>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-amber-800 mb-2">Factores Aplicados</h4>
                      <div className="space-y-1 text-sm">
                        <p>
                          <span className="font-medium">Especialidad:</span> x{resultados.factores.especialidad}
                        </p>
                        <p>
                          <span className="font-medium">Complejidad:</span> x{resultados.factores.complejidad}
                        </p>
                        <p>
                          <span className="font-medium">Experiencia:</span> x{resultados.factores.experiencia}
                        </p>
                        <p>
                          <span className="font-medium">Tipo servicio:</span> x{resultados.factores.servicio}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Desglose Económico</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Honorarios por horas ({resultados.horasEstimadas}h)</span>
                      <span className="font-semibold text-gray-900">
                        {formatearMoneda(resultados.honorariosPorHoras)}
                      </span>
                    </div>
                    {resultados.honorariosPorCuantia > 0 && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Honorarios por cuantía</span>
                        <span className="font-semibold text-gray-900">
                          {formatearMoneda(resultados.honorariosPorCuantia)}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Honorarios base (mayor de los anteriores)</span>
                      <span className="font-semibold text-gray-900">{formatearMoneda(resultados.honorariosBase)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">IVA (21%)</span>
                      <span className="font-semibold text-gray-900">{formatearMoneda(resultados.iva)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Total con IVA</span>
                      <span className="font-semibold text-gray-900">{formatearMoneda(resultados.totalConIva)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Retención IRPF (15%)</span>
                      <span className="font-semibold text-red-600">-{formatearMoneda(resultados.retencionIRPF)}</span>
                    </div>
                    <div className="border-t-2 border-gray-300 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">TOTAL A RECIBIR</span>
                        <span className="text-xl font-bold text-blue-600">
                          {formatearMoneda(resultados.totalARecibir)}
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
    </div>
  )
}
