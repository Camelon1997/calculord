"use client"

import { useState } from "react"
import { Calculator, Calendar, HelpCircle, CheckCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface VacacionesResult {
  diasVacacionesAnuales: number
  diasVacacionesProporcionales: number
  diasVacacionesPendientes: number
  valorEconomicoDia: number
  valorTotalVacaciones: number
  fechaInicioVacaciones: string
  fechaFinVacaciones: string
  bonusAntiguedad: number
  diasBase: number
}

export default function CalculadoraVacaciones() {
  const [formData, setFormData] = useState({
    salarioMensual: "",
    fechaIngreso: "",
    fechaCalculo: new Date().toISOString().split("T")[0],
    tipoContrato: "indefinido",
    diasVacacionesDisfrutadas: "",
    convenio: "estatuto",
    diasConvenioPersonalizado: "22",
    modoCalculo: "laborables",
  })

  const [result, setResult] = useState<VacacionesResult | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calculateVacaciones = () => {
    const salario = Number.parseFloat(formData.salarioMensual)
    const fechaIngreso = new Date(formData.fechaIngreso)
    const fechaCalculo = new Date(formData.fechaCalculo)
    const diasDisfrutadas = Number.parseInt(formData.diasVacacionesDisfrutadas) || 0

    if (isNaN(salario) || isNaN(fechaIngreso.getTime()) || isNaN(fechaCalculo.getTime())) return

    const antiguedadMs = fechaCalculo.getTime() - fechaIngreso.getTime()
    const antiguedadAnios = antiguedadMs / (1000 * 60 * 60 * 24 * 365.25)

    let diasBase = formData.modoCalculo === "naturales" ? 30 : 22
    const convenios = {
      estatuto: formData.modoCalculo === "naturales" ? 30 : 22,
      metal: 23,
      construccion: 24,
      comercio: 22,
      hosteleria: 22,
      consultoria: 23,
      grandes_almacenes: 31,
    }

    if (formData.convenio === "personalizado") {
      diasBase = Number.parseInt(formData.diasConvenioPersonalizado) || diasBase
    } else {
      diasBase = convenios[formData.convenio] || diasBase
    }

    let bonusAntiguedad = 0
    if (antiguedadAnios >= 15) bonusAntiguedad += 1
    if (antiguedadAnios >= 20) bonusAntiguedad += 1
    const diasVacacionesAnuales = diasBase + bonusAntiguedad

    const inicioAnio = new Date(fechaCalculo.getFullYear(), 0, 1)
    const diasTrabajadosEnAno =
      (fechaCalculo.getTime() - Math.max(fechaIngreso.getTime(), inicioAnio.getTime())) / (1000 * 60 * 60 * 24) + 1
    const diasDelAno =
      (new Date(fechaCalculo.getFullYear(), 11, 31).getTime() - inicioAnio.getTime()) / (1000 * 60 * 60 * 24) + 1
    const diasVacacionesProporcionales = Math.round((diasVacacionesAnuales * diasTrabajadosEnAno) / diasDelAno)

    const diasVacacionesPendientes = Math.max(0, diasVacacionesProporcionales - diasDisfrutadas)
    const valorEconomicoDia = salario / 30
    const valorTotalVacaciones = diasVacacionesPendientes * valorEconomicoDia

    const fechaInicio = new Date(fechaCalculo)
    fechaInicio.setDate(fechaInicio.getDate() + 7)
    const fechaFin = new Date(fechaInicio)
    let diasHabilesContados = 0
    while (diasHabilesContados < diasVacacionesPendientes) {
      fechaFin.setDate(fechaFin.getDate() + 1)
      if (formData.modoCalculo === "laborables") {
        const diaSemana = fechaFin.getDay()
        if (diaSemana !== 0 && diaSemana !== 6) {
          diasHabilesContados++
        }
      } else {
        diasHabilesContados++
      }
    }

    setResult({
      diasVacacionesAnuales,
      diasVacacionesProporcionales,
      diasVacacionesPendientes,
      valorEconomicoDia,
      valorTotalVacaciones,
      fechaInicioVacaciones: fechaInicio.toLocaleDateString("es-ES"),
      fechaFinVacaciones: fechaFin.toLocaleDateString("es-ES"),
      bonusAntiguedad,
      diasBase,
    })
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-white">
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
              Calcula tus días de vacaciones (naturales o laborables) según tu antigüedad, convenio y tiempo trabajado.
              Conoce el valor económico y planifica tu descanso.
            </p>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              onClick={() => document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calcular Ahora
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Por qué usar nuestra calculadora de vacaciones?
              </h2>
              <p className="text-lg text-gray-600">Herramienta precisa para calcular tus derechos vacacionales</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cálculo por Convenio</h3>
                <p className="text-gray-600">
                  Calcula según diferentes convenios colectivos con las bases y días correspondientes actualizados 2025.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Vacaciones Proporcionales</h3>
                <p className="text-gray-600">
                  Calcula la parte proporcional según los meses trabajados y la antigüedad en la empresa.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Info className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Valor Económico</h3>
                <p className="text-gray-600">
                  Visualiza el valor económico de tus vacaciones pendientes y planifica tu tiempo libre.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="calculadora" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Calculadora de Vacaciones Laborales</CardTitle>
                <CardDescription className="text-gray-600 pt-1">
                  Introduce tus datos para un cálculo preciso y actualizado con la normativa 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-3 p-4 border rounded-lg">
                  <Label className="text-gray-800 font-semibold flex items-center">
                    Modo de Cálculo
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-4 w-4 ml-2 cursor-help text-gray-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Elige si tu convenio cuenta las vacaciones en días laborables (L-V) o naturales (L-D).
                          <br />
                          El mínimo legal son 30 días naturales, equivalentes a 22 laborables.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <RadioGroup
                    defaultValue="laborables"
                    value={formData.modoCalculo}
                    onValueChange={(value) => handleInputChange("modoCalculo", value)}
                    className="grid grid-cols-2 gap-4"
                  >
                    <Label className="flex items-center space-x-3 border border-gray-200 p-3 rounded-md cursor-pointer hover:bg-gray-50 data-[state=checked]:bg-green-50 data-[state=checked]:border-green-500 transition-all">
                      <RadioGroupItem value="laborables" id="r1" />
                      <span className="font-medium text-gray-800">Días Laborables</span>
                    </Label>
                    <Label className="flex items-center space-x-3 border border-gray-200 p-3 rounded-md cursor-pointer hover:bg-gray-50 data-[state=checked]:bg-green-50 data-[state=checked]:border-green-500 transition-all">
                      <RadioGroupItem value="naturales" id="r2" />
                      <span className="font-medium text-gray-800">Días Naturales</span>
                    </Label>
                  </RadioGroup>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="salario" className="text-gray-700 flex items-center">
                      Salario Bruto Mensual (€)
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 ml-2 cursor-help text-gray-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Incluye tu salario base y complementos salariales. Se usa para calcular el valor económico.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </Label>
                    <Input
                      id="salario"
                      type="number"
                      placeholder="Ej: 2000"
                      value={formData.salarioMensual}
                      onChange={(e) => handleInputChange("salarioMensual", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="convenio" className="text-gray-700 flex items-center">
                      Convenio Colectivo
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 ml-2 cursor-help text-gray-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Selecciona tu convenio. Muchos mejoran los 22 días laborables mínimos.
                            <br />
                            Si no está en la lista, elige "Personalizado".
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </Label>
                    <Select value={formData.convenio} onValueChange={(value) => handleInputChange("convenio", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu convenio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="estatuto">Estatuto de los Trabajadores</SelectItem>
                        <SelectItem value="consultoria">Consultoría (23 laborables)</SelectItem>
                        <SelectItem value="metal">Metal (23 laborables)</SelectItem>
                        <SelectItem value="construccion">Construcción (24 laborables)</SelectItem>
                        <SelectItem value="comercio">Comercio (22 laborables)</SelectItem>
                        <SelectItem value="hosteleria">Hostelería (22 laborables)</SelectItem>
                        <SelectItem value="grandes_almacenes">Grandes Almacenes (31 naturales)</SelectItem>
                        <SelectItem value="personalizado">Personalizado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.convenio === "personalizado" && (
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="diasConvenioPersonalizado" className="text-gray-700">
                        Días de vacaciones por convenio (personalizado)
                      </Label>
                      <Input
                        id="diasConvenioPersonalizado"
                        type="number"
                        placeholder="Ej: 25"
                        value={formData.diasConvenioPersonalizado}
                        onChange={(e) => handleInputChange("diasConvenioPersonalizado", e.target.value)}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="fechaIngreso" className="text-gray-700">
                      Fecha de Ingreso
                    </Label>
                    <Input
                      id="fechaIngreso"
                      type="date"
                      value={formData.fechaIngreso}
                      onChange={(e) => handleInputChange("fechaIngreso", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fechaCalculo" className="text-gray-700">
                      Fecha de Cálculo
                    </Label>
                    <Input
                      id="fechaCalculo"
                      type="date"
                      value={formData.fechaCalculo}
                      onChange={(e) => handleInputChange("fechaCalculo", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="diasDisfrutadas" className="text-gray-700 flex items-center">
                      Días ya Disfrutados este año
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 ml-2 cursor-help text-gray-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Introduce cuántos días de vacaciones has tomado en el año actual.</p>
                        </TooltipContent>
                      </Tooltip>
                    </Label>
                    <Input
                      id="diasDisfrutadas"
                      type="number"
                      placeholder="Ej: 5"
                      value={formData.diasVacacionesDisfrutadas}
                      onChange={(e) => handleInputChange("diasVacacionesDisfrutadas", e.target.value)}
                    />
                  </div>
                </div>

                <Button
                  onClick={calculateVacaciones}
                  className="w-full bg-green-600 text-white hover:bg-green-700 font-semibold"
                  size="lg"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calcular Vacaciones
                </Button>
              </CardContent>
            </Card>

            {result && (
              <Card className="mt-8 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Resultados del Cálculo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {result.diasVacacionesProporcionales}
                      </div>
                      <div className="text-sm text-gray-600">Días generados este año</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{result.diasVacacionesPendientes}</div>
                      <div className="text-sm text-gray-600">Días pendientes de disfrutar</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        {result.valorTotalVacaciones.toFixed(2)}€
                      </div>
                      <div className="text-sm text-gray-600">Valor económico pendiente</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Desglose del cálculo:</h3>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Días base por convenio/ley:</span>
                      <span className="font-medium">
                        {result.diasBase} {formData.modoCalculo}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Bonus por antigüedad:</span>
                      <span className="font-medium">+{result.bonusAntiguedad} días</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold border-t pt-2">
                      <span className="text-gray-800">Total días anuales correspondientes:</span>
                      <span className="text-gray-900">{result.diasVacacionesAnuales} días</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Valor Económico</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Valor por día de vacaciones:</span>
                          <span className="font-semibold">{result.valorEconomicoDia.toFixed(2)}€</span>
                        </div>
                        <div className="flex justify-between text-lg">
                          <span className="text-gray-600 font-bold">Total vacaciones pendientes:</span>
                          <span className="font-bold text-green-600">{result.valorTotalVacaciones.toFixed(2)}€</span>
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
                        <p className="text-xs text-gray-500 pt-2">
                          La fecha de fin es una estimación y no tiene en cuenta festivos nacionales o locales.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfecto para planificar tu descanso</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Trabajadores por cuenta ajena</h3>
                      <p className="text-gray-600">Conoce exactamente cuántos días de vacaciones te corresponden.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Departamentos de RRHH</h3>
                      <p className="text-gray-600">Gestiona las vacaciones de tus empleados de forma precisa y ágil.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Gestorías laborales</h3>
                      <p className="text-gray-600">
                        Asesora a tus clientes sobre sus derechos vacacionales con datos exactos.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Representantes sindicales</h3>
                      <p className="text-gray-600">
                        Verifica que se respeten los derechos de los trabajadores según la ley.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Estudiantes de derecho laboral</h3>
                      <p className="text-gray-600">
                        Aprende cómo se calculan las vacaciones en diferentes casos prácticos.
                      </p>
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
                    Actualizada con los últimos cambios normativos y convenios colectivos.
                  </p>
                  <div className="text-sm text-green-600 font-medium">Datos y tipos de convenio vigentes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Guía Definitiva sobre las Vacaciones Laborales</h2>
              <p className="text-lg text-gray-600">
                Entender tus derechos es el primer paso para disfrutar de tu descanso.
              </p>
            </div>
            <div className="space-y-8 bg-white p-8 rounded-lg shadow-sm">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Diferencia Clave: Días Naturales vs. Días Laborables
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Es la duda más frecuente. **Días naturales** incluyen todos los días del calendario (lunes a domingo,
                  incluidos festivos). El mínimo legal es de 30 días naturales. **Días laborables** solo cuentan los
                  días que normalmente trabajarías (generalmente de lunes a viernes, excluyendo festivos). El mínimo
                  legal equivalente es de 22 días laborables. Tu convenio colectivo especificará cuál se aplica en tu
                  caso. Nuestra calculadora te permite elegir el modo para un resultado exacto.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  El Devengo de las Vacaciones: ¿Cómo se "generan"?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  No tienes todos tus días de vacaciones desde el 1 de enero. Los vas "generando" a medida que trabajas.
                  Por cada mes trabajado, generas una parte proporcional de tus vacaciones anuales (2.5 días naturales
                  por mes). Por eso, si empiezas a trabajar a mitad de año, no te corresponden los 30 días completos,
                  sino la parte proporcional al tiempo que vayas a estar en la empresa ese año. La calculadora realiza
                  este cálculo automáticamente.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Planificación y Solicitud: ¿Cómo y Cuándo Pedir Vacaciones?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  El periodo de disfrute se pacta de mutuo acuerdo entre empresa y trabajador. La empresa debe publicar
                  el calendario vacacional con al menos **dos meses de antelación**. Si quieres solicitar unas fechas,
                  hazlo por escrito (email o sistema interno) para que quede constancia. En caso de desacuerdo, la
                  última palabra no la tiene la empresa de forma unilateral; se debe acudir a la jurisdicción social
                  para resolver el conflicto.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Casos Especiales: Contratos a Tiempo Parcial
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Un trabajador a tiempo parcial tiene derecho al **mismo número de días de vacaciones** que un
                  trabajador a tiempo completo (mínimo 30 días naturales). La diferencia radica en la retribución, que
                  será proporcional a su jornada laboral. No se tienen menos días de vacaciones por trabajar menos
                  horas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes (FAQ)</h2>
              <p className="text-lg text-gray-600">Resolvemos tus dudas más comunes sobre las vacaciones.</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg text-left">
                  ¿Se pueden pagar las vacaciones en lugar de disfrutarlas?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  No. La regla general es que las vacaciones están para disfrutarse y no pueden ser sustituidas por una
                  compensación económica, salvo en una única excepción: al finalizar la relación laboral. Si te vas de
                  la empresa y te quedan vacaciones pendientes, la empresa deberá pagártelas en el finiquito.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg text-left">
                  ¿Qué pasa si me pongo enfermo (baja por IT) durante mis vacaciones?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  Si caes de baja por incapacidad temporal durante tus vacaciones, estas se interrumpen. Tienes derecho
                  a recuperar los días de vacaciones que han coincidido con tu baja una vez recibas el alta médica,
                  siempre que no hayan pasado más de 18 meses desde el final del año en que se generaron.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg text-left">
                  ¿Puede la empresa obligarme a coger vacaciones en una fecha concreta?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  No unilateralmente. El periodo de vacaciones se fija de común acuerdo entre la empresa y el
                  trabajador, según lo establecido en el convenio colectivo. Debes conocer el calendario vacacional con
                  al menos dos meses de antelación. Si no hay acuerdo, se puede acudir a la jurisdicción social.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg text-left">
                  ¿Pierdo mis vacaciones si no las disfruto dentro del año natural?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  Por norma general, sí. Las vacaciones generadas en un año deben disfrutarse dentro de ese mismo año
                  natural (hasta el 31 de diciembre). Sin embargo, hay excepciones, como las bajas por maternidad,
                  paternidad o incapacidad temporal, que permiten disfrutarlas más tarde. Algunos convenios también
                  permiten disfrutarlas hasta el 15 o 31 de enero del año siguiente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg text-left">
                  ¿Y si tengo un contrato temporal (obra y servicio, eventual)?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  Tienes exactamente los mismos derechos a vacaciones que un trabajador indefinido. Te corresponden 2,5
                  días naturales de vacaciones por cada mes trabajado. Si al finalizar el contrato no las has
                  disfrutado, la empresa debe abonártelas en el finiquito.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

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
                    "Perfecta para saber exactamente cuántos días me corresponden. Me ayudó a planificar mis vacaciones
                    de verano."
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

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculadoras Laborales Relacionadas</h2>
              <p className="text-lg text-gray-600">Otras herramientas que te pueden interesar.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Calculator className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Salario Bruto a Neto</h3>
                  <p className="text-gray-600 mb-4">
                    Convierte tu salario bruto a neto y descubre cuánto recibirás en tu cuenta cada mes.
                  </p>
                  <Link href="/conversor-salario-bruto-neto">
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
                    Calcula la cuantía y duración de tu prestación por desempleo (paro) según tus cotizaciones.
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
                    Calcula la indemnización por despido (improcedente, objetivo) y tu finiquito correspondiente.
                  </p>
                  <Link href="/calculadora-despidos">
                    <Button className="w-full bg-red-600 hover:bg-red-700">Calcular Despido →</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </TooltipProvider>
  )
}
