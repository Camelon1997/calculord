"use client"

import { useState } from "react"
import { Calculator, Calendar, CheckCircle, Info, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

interface VacacionesResult {
  diasVacacionesAnuales: number
  diasVacacionesProporcionales: number
  diasVacacionesPendientes: number
  valorEconomicoDia: number
  valorTotalVacaciones: number
  fechaInicioVacaciones: string
  fechaFinVacaciones: string
}

export default function CalculadoraVacaciones() {
  const [formData, setFormData] = useState({
    salarioMensual: "",
    fechaIngreso: "",
    fechaCalculo: "",
    tipoContrato: "",
    diasVacacionesDisfrutadas: "",
    convenio: "",
  })

  const [result, setResult] = useState<VacacionesResult | null>(null)
  const [showProjection, setShowProjection] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calculateVacaciones = () => {
    const salario = Number.parseFloat(formData.salarioMensual)
    const fechaIngreso = new Date(formData.fechaIngreso)
    const fechaCalculo = new Date(formData.fechaCalculo)
    const diasDisfrutadas = Number.parseInt(formData.diasVacacionesDisfrutadas) || 0

    if (!salario || !fechaIngreso || !fechaCalculo) return

    // Calcular antigüedad en años
    const antiguedadMs = fechaCalculo.getTime() - fechaIngreso.getTime()
    const antiguedadAnios = antiguedadMs / (1000 * 60 * 60 * 24 * 365.25)

    // Días de vacaciones según convenio (por defecto 22 días laborables)
    let diasVacacionesAnuales = 22
    if (formData.convenio === "metal") diasVacacionesAnuales = 23
    if (formData.convenio === "construccion") diasVacacionesAnuales = 24
    if (formData.convenio === "comercio") diasVacacionesAnuales = 22
    if (formData.convenio === "hosteleria") diasVacacionesAnuales = 22

    // Incremento por antigüedad (algunos convenios)
    if (antiguedadAnios >= 15) diasVacacionesAnuales += 1
    if (antiguedadAnios >= 20) diasVacacionesAnuales += 1

    // Calcular días proporcionales si no ha trabajado el año completo
    const inicioAnio = new Date(fechaCalculo.getFullYear(), 0, 1)
    const mesesTrabajados = Math.max(
      1,
      Math.ceil(
        (fechaCalculo.getTime() - Math.max(fechaIngreso.getTime(), inicioAnio.getTime())) /
          (1000 * 60 * 60 * 24 * 30.44),
      ),
    )
    const diasVacacionesProporcionales = Math.round((diasVacacionesAnuales * mesesTrabajados) / 12)

    // Días pendientes
    const diasVacacionesPendientes = Math.max(0, diasVacacionesProporcionales - diasDisfrutadas)

    // Valor económico por día (salario mensual / 30)
    const valorEconomicoDia = salario / 30
    const valorTotalVacaciones = diasVacacionesPendientes * valorEconomicoDia

    // Fechas sugeridas para vacaciones (próximos 30 días hábiles)
    const fechaInicio = new Date(fechaCalculo)
    fechaInicio.setDate(fechaInicio.getDate() + 7) // Una semana después
    const fechaFin = new Date(fechaInicio)
    fechaFin.setDate(fechaFin.getDate() + diasVacacionesPendientes)

    setResult({
      diasVacacionesAnuales,
      diasVacacionesProporcionales,
      diasVacacionesPendientes,
      valorEconomicoDia,
      valorTotalVacaciones,
      fechaInicioVacaciones: fechaInicio.toLocaleDateString("es-ES"),
      fechaFinVacaciones: fechaFin.toLocaleDateString("es-ES"),
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Calculord</span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <ArrowLeft className="h-4 w-4" />
                Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Calculadora de Vacaciones
            <span className="block text-green-600">Laborales 2025</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Calcula tus días de vacaciones según tu antigüedad, convenio y tiempo trabajado. Conoce el valor económico
            de tus vacaciones pendientes y planifica tu descanso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              onClick={() => document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calcular Ahora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 bg-transparent border-green-600 text-green-600 hover:bg-green-50"
              onClick={() => setShowProjection(!showProjection)}
            >
              Ver Ejemplo
            </Button>
          </div>
        </div>
      </section>

      {/* ¿Por qué usar nuestra calculadora? */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué usar nuestra calculadora de vacaciones?</h2>
            <p className="text-lg text-gray-600">Herramienta precisa para calcular tus derechos vacacionales</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cálculo por Convenio</h3>
              <p className="text-gray-600">
                Calcula según diferentes convenios colectivos con las bases y días correspondientes actualizados 2025
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vacaciones Proporcionales</h3>
              <p className="text-gray-600">
                Calcula la parte proporcional según los meses trabajados y la antigüedad en la empresa
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Valor Económico</h3>
              <p className="text-gray-600">
                Visualiza el valor económico de tus vacaciones pendientes y planifica tu tiempo libre
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora Principal */}
      <section id="calculadora" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-green-600 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Calculadora de Vacaciones Laborales</CardTitle>
              <CardDescription className="text-green-100">
                Cálculo preciso y actualizado con la normativa 2025
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="salario" className="text-white">
                    Salario Bruto Mensual (€)
                  </Label>
                  <Input
                    id="salario"
                    type="number"
                    placeholder="Ej: 2000"
                    value={formData.salarioMensual}
                    onChange={(e) => handleInputChange("salarioMensual", e.target.value)}
                    className="bg-white text-gray-900"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="convenio" className="text-white">
                    Convenio Colectivo
                  </Label>
                  <Select value={formData.convenio} onValueChange={(value) => handleInputChange("convenio", value)}>
                    <SelectTrigger className="bg-white text-gray-900">
                      <SelectValue placeholder="Selecciona tu convenio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Estatuto de los Trabajadores (22 días)</SelectItem>
                      <SelectItem value="metal">Metal (23 días)</SelectItem>
                      <SelectItem value="construccion">Construcción (24 días)</SelectItem>
                      <SelectItem value="comercio">Comercio (22 días)</SelectItem>
                      <SelectItem value="hosteleria">Hostelería (22 días)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fechaIngreso" className="text-white">
                    Fecha de Ingreso
                  </Label>
                  <Input
                    id="fechaIngreso"
                    type="date"
                    value={formData.fechaIngreso}
                    onChange={(e) => handleInputChange("fechaIngreso", e.target.value)}
                    className="bg-white text-gray-900"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fechaCalculo" className="text-white">
                    Fecha de Cálculo
                  </Label>
                  <Input
                    id="fechaCalculo"
                    type="date"
                    value={formData.fechaCalculo}
                    onChange={(e) => handleInputChange("fechaCalculo", e.target.value)}
                    className="bg-white text-gray-900"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipoContrato" className="text-white">
                    Tipo de Contrato
                  </Label>
                  <Select
                    value={formData.tipoContrato}
                    onValueChange={(value) => handleInputChange("tipoContrato", value)}
                  >
                    <SelectTrigger className="bg-white text-gray-900">
                      <SelectValue placeholder="Selecciona el tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="indefinido">Indefinido</SelectItem>
                      <SelectItem value="temporal">Temporal</SelectItem>
                      <SelectItem value="practicas">Prácticas</SelectItem>
                      <SelectItem value="formacion">Formación</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="diasDisfrutadas" className="text-white">
                    Días ya Disfrutados
                  </Label>
                  <Input
                    id="diasDisfrutadas"
                    type="number"
                    placeholder="Ej: 5"
                    value={formData.diasVacacionesDisfrutadas}
                    onChange={(e) => handleInputChange("diasVacacionesDisfrutadas", e.target.value)}
                    className="bg-white text-gray-900"
                  />
                </div>
              </div>

              <Button
                onClick={calculateVacaciones}
                className="w-full bg-white text-green-600 hover:bg-gray-100 font-semibold py-3"
                size="lg"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calcular Vacaciones
              </Button>
            </CardContent>
          </Card>

          {/* Resultados */}
          {result && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Resultados del Cálculo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">{result.diasVacacionesAnuales}</div>
                    <div className="text-sm text-gray-600">Días anuales por convenio</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{result.diasVacacionesProporcionales}</div>
                    <div className="text-sm text-gray-600">Días proporcionales</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{result.diasVacacionesPendientes}</div>
                    <div className="text-sm text-gray-600">Días pendientes</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Valor Económico</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Valor por día:</span>
                        <span className="font-semibold">{result.valorEconomicoDia.toFixed(2)}€</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total vacaciones pendientes:</span>
                        <span className="font-semibold text-green-600">{result.valorTotalVacaciones.toFixed(2)}€</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Planificación Sugerida</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Inicio sugerido:</span>
                        <span className="font-semibold">{result.fechaInicioVacaciones}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Fin sugerido:</span>
                        <span className="font-semibold">{result.fechaFinVacaciones}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Perfecto para */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfecto para planificar tu descanso</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Trabajadores por cuenta ajena</h3>
                    <p className="text-gray-600">Conoce exactamente cuántos días de vacaciones te corresponden</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Departamentos de RRHH</h3>
                    <p className="text-gray-600">Gestiona las vacaciones de tus empleados de forma precisa</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Gestorías laborales</h3>
                    <p className="text-gray-600">Asesora a tus clientes sobre sus derechos vacacionales</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Representantes sindicales</h3>
                    <p className="text-gray-600">Verifica que se respeten los derechos de los trabajadores</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Estudiantes de derecho laboral</h3>
                    <p className="text-gray-600">Aprende cómo se calculan las vacaciones en diferentes casos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-green-100 rounded-full mb-6">
                <Calendar className="h-16 w-16 text-green-600" />
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Normativa 2025</h3>
                <p className="text-gray-600 mb-4">
                  Actualizada con los últimos cambios normativos y convenios colectivos
                </p>
                <div className="text-sm text-green-600 font-medium">Datos y tipos de convenio vigentes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo que dicen nuestros usuarios</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Perfecta para saber exactamente cuántos días me corresponden. Me ayudó a planificar mis vacaciones de
                  verano."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">María López</p>
                  <p className="text-sm text-gray-500">Administrativa</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Como responsable de RRHH, esta herramienta me facilita mucho la gestión de vacaciones del equipo."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Jorge Ruiz</p>
                  <p className="text-sm text-gray-500">Director RRHH</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Muy útil para verificar que mis clientes reciben las vacaciones que les corresponden por convenio."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Elena Fernández</p>
                  <p className="text-sm text-gray-500">Gestora Laboral</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculadoras Relacionadas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculadoras Laborales Relacionadas</h2>
            <p className="text-lg text-gray-600">Otras herramientas laborales que te pueden interesar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Salario por Horas</h3>
                <p className="text-gray-600 mb-4">
                  Calcula tu salario según las horas trabajadas y SMI 2025. Perfecto para verificar si tu remuneración
                  es correcta.
                </p>
                <Link href="/calculadora-salario-por-horas">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Calcular Salario →</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Prestación por Desempleo</h3>
                <p className="text-gray-600 mb-4">
                  Calcula tu prestación por desempleo basada en tus cotizaciones. Una para verificar el cálculo de la
                  base reguladora.
                </p>
                <Link href="/calculadora-paro">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Calcular Prestación →</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Despidos y Finiquito</h3>
                <p className="text-gray-600 mb-4">
                  Calcula la indemnización por despido según el tipo. Útil para verificar el cálculo de la base
                  reguladora.
                </p>
                <Link href="/calculadora-despidos">
                  <Button className="w-full bg-red-600 hover:bg-red-700">Calcular Despido →</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesitas asesoramiento laboral especializado?</h2>
          <p className="text-xl mb-8 opacity-90">Calcula también los honorarios de abogados especialistas</p>
          <Link href="/calculadora-honorarios-abogado">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
              Honorarios de Abogado Laboralista →
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
                <Calculator className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Calculord</span>
              </div>
              <p className="text-gray-400">Calculadoras laborales profesionales actualizadas con la normativa 2025.</p>
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
                    Prestación Desempleo
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-nomina" className="hover:text-white">
                    Nómina Completa
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-vacaciones" className="hover:text-white">
                    Vacaciones
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/calculadora-honorarios-abogado" className="hover:text-white">
                    Honorarios Abogado
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500">Más calculadoras próximamente</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Términos de Uso
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
            <p>&copy; 2025 Calculord. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
