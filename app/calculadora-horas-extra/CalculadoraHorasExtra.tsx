"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Calculator, TrendingUp, AlertTriangle, Info, Calendar, Moon, Sun, CheckCircle2 } from "lucide-react"
import { RelatedCalculatorCard } from "@/app/components/RelatedCalculatorCard"

const formatearMoneda = (cantidad: number) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(cantidad)
}

export default function CalculadoraHorasExtra() {
  // Inputs
  const [salarioBrutoMensual, setSalarioBrutoMensual] = useState("1500")
  const [horasOrdinariasSemanales, setHorasOrdinariasSemanales] = useState("40")
  const [horasExtraOrdinarias, setHorasExtraOrdinarias] = useState("0")
  const [horasExtraEstructurales, setHorasExtraEstructurales] = useState("0")
  const [horasExtraFestivos, setHorasExtraFestivos] = useState("0")
  const [horasExtraNocturnas, setHorasExtraNocturnas] = useState("0")
  const [recargoConvenio, setRecargoConvenio] = useState("0")

  // Resultados
  const [resultados, setResultados] = useState<any>(null)

  useEffect(() => {
    calcular()
  }, [
    salarioBrutoMensual,
    horasOrdinariasSemanales,
    horasExtraOrdinarias,
    horasExtraEstructurales,
    horasExtraFestivos,
    horasExtraNocturnas,
    recargoConvenio,
  ])

  const calcular = () => {
    const salarioBruto = Number.parseFloat(salarioBrutoMensual) || 0
    const horasSemanales = Number.parseFloat(horasOrdinariasSemanales) || 40

    // Calcular salario por hora base
    const horasMensuales = (horasSemanales * 52) / 12
    const salarioPorHora = salarioBruto / horasMensuales

    // Horas extra por tipo
    const hExtraOrdinarias = Number.parseFloat(horasExtraOrdinarias) || 0
    const hExtraEstructurales = Number.parseFloat(horasExtraEstructurales) || 0
    const hExtraFestivos = Number.parseFloat(horasExtraFestivos) || 0
    const hExtraNocturnas = Number.parseFloat(horasExtraNocturnas) || 0

    // Porcentajes de recargo
    const recargoExtra = Number.parseFloat(recargoConvenio) || 0
    const porcentajeOrdinarias = Math.max(25, recargoExtra)
    const porcentajeEstructurales = Math.max(50, recargoExtra)
    const porcentajeFestivos = Math.max(75, recargoExtra)
    const porcentajeNocturnas = Math.max(25, recargoExtra)

    // Cálculo de pago por tipo
    const pagoOrdinarias = hExtraOrdinarias * salarioPorHora * (1 + porcentajeOrdinarias / 100)
    const pagoEstructurales = hExtraEstructurales * salarioPorHora * (1 + porcentajeEstructurales / 100)
    const pagoFestivos = hExtraFestivos * salarioPorHora * (1 + porcentajeFestivos / 100)
    const pagoNocturnas = hExtraNocturnas * salarioPorHora * (1 + porcentajeNocturnas / 100)

    const totalHorasExtra = hExtraOrdinarias + hExtraEstructurales + hExtraFestivos + hExtraNocturnas
    const totalPagoHorasExtra = pagoOrdinarias + pagoEstructurales + pagoFestivos + pagoNocturnas

    // Salario total con horas extra
    const salarioTotalMensual = salarioBruto + totalPagoHorasExtra

    // Cotizaciones (simplificado)
    const cotizacionSS = salarioTotalMensual * 0.0635

    const salarioNetoMensual = salarioTotalMensual - cotizacionSS

    // Límite anual
    const horasExtraAnuales = totalHorasExtra * 12
    const superaLimite = horasExtraAnuales > 80

    setResultados({
      salarioPorHora,
      totalHorasExtra,
      totalPagoHorasExtra,
      salarioTotalMensual,
      salarioNetoMensual,
      cotizacionSS,
      desglose: {
        ordinarias: { horas: hExtraOrdinarias, pago: pagoOrdinarias, porcentaje: porcentajeOrdinarias },
        estructurales: { horas: hExtraEstructurales, pago: pagoEstructurales, porcentaje: porcentajeEstructurales },
        festivos: { horas: hExtraFestivos, pago: pagoFestivos, porcentaje: porcentajeFestivos },
        nocturnas: { horas: hExtraNocturnas, pago: pagoNocturnas, porcentaje: porcentajeNocturnas },
      },
      horasExtraAnuales,
      superaLimite,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Actualizado 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Calculadora de Horas Extra 2025</h1>
            <p className="text-xl md:text-2xl text-orange-50 mb-8 text-pretty">
              Calcula el pago de horas extraordinarias: ordinarias, estructurales, festivos y nocturnas con todos los
              recargos aplicables
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4" />
                <span>Ordinarias +25%</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4" />
                <span>Estructurales +50%</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4" />
                <span>Festivos +75%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora */}
      <section className="py-12 -mt-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calculator className="w-6 h-6" />
                Calcula tus Horas Extra
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Columna de Inputs */}
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="salario" className="text-base font-semibold">
                      Salario Bruto Mensual (€)
                    </Label>
                    <Input
                      id="salario"
                      type="number"
                      value={salarioBrutoMensual}
                      onChange={(e) => setSalarioBrutoMensual(e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="horas-semanales" className="text-base font-semibold">
                      Horas Ordinarias Semanales
                    </Label>
                    <Input
                      id="horas-semanales"
                      type="number"
                      value={horasOrdinariasSemanales}
                      onChange={(e) => setHorasOrdinariasSemanales(e.target.value)}
                      className="mt-2"
                    />
                    <p className="text-sm text-gray-500 mt-1">Normalmente 40 horas/semana</p>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Sun className="w-5 h-5 text-orange-600" />
                      Horas Extra Mensuales
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="ordinarias" className="text-sm">
                          Ordinarias (+25% mínimo)
                        </Label>
                        <Input
                          id="ordinarias"
                          type="number"
                          value={horasExtraOrdinarias}
                          onChange={(e) => setHorasExtraOrdinarias(e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="estructurales" className="text-sm">
                          Estructurales (+50% mínimo)
                        </Label>
                        <Input
                          id="estructurales"
                          type="number"
                          value={horasExtraEstructurales}
                          onChange={(e) => setHorasExtraEstructurales(e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="festivos" className="text-sm flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          En Festivos (+75% mínimo)
                        </Label>
                        <Input
                          id="festivos"
                          type="number"
                          value={horasExtraFestivos}
                          onChange={(e) => setHorasExtraFestivos(e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="nocturnas" className="text-sm flex items-center gap-1">
                          <Moon className="w-4 h-4" />
                          Nocturnas (+25% mínimo)
                        </Label>
                        <Input
                          id="nocturnas"
                          type="number"
                          value={horasExtraNocturnas}
                          onChange={(e) => setHorasExtraNocturnas(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="convenio" className="text-sm">
                      Recargo Convenio Colectivo (% adicional)
                    </Label>
                    <Input
                      id="convenio"
                      type="number"
                      value={recargoConvenio}
                      onChange={(e) => setRecargoConvenio(e.target.value)}
                      className="mt-1"
                      placeholder="0"
                    />
                    <p className="text-xs text-gray-500 mt-1">Si tu convenio establece un recargo superior</p>
                  </div>
                </div>

                {/* Columna de Resultados */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg">
                  {resultados && (
                    <div className="space-y-6">
                      <div className="text-center pb-6 border-b">
                        <p className="text-sm text-gray-600 mb-2">Salario Total Mensual</p>
                        <p className="text-4xl font-bold text-orange-600">
                          {formatearMoneda(resultados.salarioTotalMensual)}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                          +{formatearMoneda(resultados.totalPagoHorasExtra)} en horas extra
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Salario Base por Hora</p>
                          <p className="text-2xl font-bold text-gray-900">
                            {formatearMoneda(resultados.salarioPorHora)}
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Total Horas Extra Mensuales</p>
                          <p className="text-2xl font-bold text-gray-900">{resultados.totalHorasExtra}h</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Pago por Horas Extra</p>
                          <p className="text-2xl font-bold text-green-600">
                            +{formatearMoneda(resultados.totalPagoHorasExtra)}
                          </p>
                        </div>

                        <div className="border-t pt-4">
                          <h4 className="font-semibold mb-3 text-sm">Desglose por Tipo:</h4>
                          <div className="space-y-2 text-sm">
                            {resultados.desglose.ordinarias.horas > 0 && (
                              <div className="flex justify-between">
                                <span className="text-gray-600">
                                  Ordinarias ({resultados.desglose.ordinarias.horas}h +
                                  {resultados.desglose.ordinarias.porcentaje}%)
                                </span>
                                <span className="font-semibold">
                                  {formatearMoneda(resultados.desglose.ordinarias.pago)}
                                </span>
                              </div>
                            )}
                            {resultados.desglose.estructurales.horas > 0 && (
                              <div className="flex justify-between">
                                <span className="text-gray-600">
                                  Estructurales ({resultados.desglose.estructurales.horas}h +
                                  {resultados.desglose.estructurales.porcentaje}%)
                                </span>
                                <span className="font-semibold">
                                  {formatearMoneda(resultados.desglose.estructurales.pago)}
                                </span>
                              </div>
                            )}
                            {resultados.desglose.festivos.horas > 0 && (
                              <div className="flex justify-between">
                                <span className="text-gray-600">
                                  Festivos ({resultados.desglose.festivos.horas}h +
                                  {resultados.desglose.festivos.porcentaje}%)
                                </span>
                                <span className="font-semibold">
                                  {formatearMoneda(resultados.desglose.festivos.pago)}
                                </span>
                              </div>
                            )}
                            {resultados.desglose.nocturnas.horas > 0 && (
                              <div className="flex justify-between">
                                <span className="text-gray-600">
                                  Nocturnas ({resultados.desglose.nocturnas.horas}h +
                                  {resultados.desglose.nocturnas.porcentaje}%)
                                </span>
                                <span className="font-semibold">
                                  {formatearMoneda(resultados.desglose.nocturnas.pago)}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span className="text-sm text-gray-600">Salario Bruto Total</span>
                            <span className="font-semibold">{formatearMoneda(resultados.salarioTotalMensual)}</span>
                          </div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm text-gray-600">Cotizaciones SS (aprox.)</span>
                            <span className="text-red-600">-{formatearMoneda(resultados.cotizacionSS)}</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-gray-300">
                            <span className="font-semibold">Salario Neto</span>
                            <span className="font-bold text-green-600">
                              {formatearMoneda(resultados.salarioNetoMensual)}
                            </span>
                          </div>
                        </div>

                        {resultados.superaLimite && (
                          <Alert className="bg-red-50 border-red-200">
                            <AlertTriangle className="h-4 w-4 text-red-600" />
                            <AlertDescription className="text-red-800">
                              <strong>¡Atención!</strong> Con {resultados.totalHorasExtra}h/mes acumularías{" "}
                              {resultados.horasExtraAnuales}h anuales, superando el límite legal de 80h/año.
                            </AlertDescription>
                          </Alert>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guía Completa */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Guía Completa de Horas Extra en España 2025</h2>

          <Tabs defaultValue="tipos" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="tipos">Tipos</TabsTrigger>
              <TabsTrigger value="calculo">Cálculo</TabsTrigger>
              <TabsTrigger value="limites">Límites</TabsTrigger>
              <TabsTrigger value="derechos">Derechos</TabsTrigger>
            </TabsList>

            <TabsContent value="tipos" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="w-5 h-5 text-orange-600" />
                    Tipos de Horas Extra
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">1. Horas Extra Ordinarias</h3>
                    <p className="text-gray-600">
                      Las primeras horas extraordinarias realizadas que superan la jornada ordinaria. Se pagan con un
                      recargo mínimo del <strong>25%</strong> sobre el salario base por hora.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">2. Horas Extra Estructurales</h3>
                    <p className="text-gray-600">
                      Aquellas que superan las primeras 43 horas extra mensuales (aproximadamente). Habitualmente desde
                      la hora 44 en adelante. Se pagan con un recargo mínimo del <strong>50%</strong>.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">3. Horas Extra en Festivos</h3>
                    <p className="text-gray-600">
                      Las realizadas en días festivos oficiales. Tienen un recargo mínimo del <strong>75%</strong> sobre
                      el salario base por hora según el Estatuto de los Trabajadores.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">4. Horas Extra Nocturnas</h3>
                    <p className="text-gray-600">
                      Las realizadas entre las 22:00 y las 6:00 horas. Tienen un plus adicional que varía según el
                      convenio colectivo, habitualmente con recargo mínimo del <strong>25%</strong>. Los trabajadores
                      nocturnos tienen prohibido realizar horas extra si exceden 8h diarias de media en 15 días.
                    </p>
                  </div>

                  <Alert className="bg-yellow-50 border-yellow-200">
                    <Info className="h-4 w-4 text-yellow-600" />
                    <AlertDescription>
                      Tu <strong>convenio colectivo</strong> puede establecer porcentajes de recargo superiores a los
                      mínimos legales, pero nunca inferiores al 10%.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="calculo" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-orange-600" />
                    Cómo se Calculan las Horas Extra
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Paso 1: Calcular el Valor de la Hora Ordinaria</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <code className="text-sm">
                        Salario Hora = Salario Bruto Mensual / [(Horas Semanales × 52) / 12]
                      </code>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Ejemplo: Con 1.500€/mes y 40h/semana: 1.500 / 173,33 = 8,65€/hora
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Paso 2: Aplicar el Recargo según el Tipo</h3>
                    <div className="space-y-2">
                      <div className="bg-orange-50 p-3 rounded">
                        <p className="font-semibold">Ordinarias: Hora ordinaria × 1,25</p>
                        <p className="text-sm text-gray-600">Ejemplo: 8,65€ × 1,25 = 10,81€/hora</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded">
                        <p className="font-semibold">Estructurales: Hora ordinaria × 1,50</p>
                        <p className="text-sm text-gray-600">Ejemplo: 8,65€ × 1,50 = 12,98€/hora</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded">
                        <p className="font-semibold">Festivos: Hora ordinaria × 1,75</p>
                        <p className="text-sm text-gray-600">Ejemplo: 8,65€ × 1,75 = 15,14€/hora</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Paso 3: Multiplicar por Horas Realizadas</h3>
                    <p className="text-gray-600">
                      Suma todas las horas extra del mes de cada tipo y multiplícalas por su valor correspondiente. El
                      resultado es el importe adicional que debe sumarse al salario base.
                    </p>
                  </div>

                  <Alert className="bg-blue-50 border-blue-200">
                    <Info className="h-4 w-4 text-blue-600" />
                    <AlertDescription>
                      Las horas extra cotizan a la Seguridad Social. Se incluyen en la base de cotización aplicándose
                      los mismos porcentajes que al salario ordinario.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="limites" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                    Límites y Restricciones
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Límite Anual: 80 Horas Extra</h3>
                    <p className="text-gray-600">
                      El Estatuto de los Trabajadores establece un máximo de <strong>80 horas extraordinarias</strong>{" "}
                      al año por trabajador. Este límite puede ser modificado por convenio colectivo.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Excepciones al Límite</h3>
                    <p className="text-gray-600 mb-2">No se computan dentro del límite de 80 horas anuales:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      <li>Horas extra compensadas con tiempo de descanso equivalente</li>
                      <li>
                        Horas realizadas para prevenir o reparar siniestros y otros daños extraordinarios y urgentes
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Trabajadores Nocturnos</h3>
                    <p className="text-gray-600">
                      Los trabajadores nocturnos tienen <strong>prohibido realizar horas extraordinarias</strong> si con
                      ellas exceden una media de 8 horas diarias en un periodo de referencia de 15 días.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Menores de 18 Años</h3>
                    <p className="text-gray-600">
                      Los trabajadores menores de 18 años <strong>no pueden realizar horas extraordinarias</strong> bajo
                      ninguna circunstancia.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Voluntariedad</h3>
                    <p className="text-gray-600">
                      La realización de horas extra es <strong>voluntaria</strong>, salvo que se haya pactado lo
                      contrario en el convenio colectivo o en el contrato de trabajo del empleado.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="derechos" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600" />
                    Derechos del Trabajador
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Compensación Económica o en Tiempo</h3>
                    <p className="text-gray-600">
                      Las horas extra pueden ser retribuidas económicamente o compensadas con tiempo de descanso
                      equivalente según lo establecido en convenio o contrato. En ausencia de pacto, se compensarán con
                      descanso en los <strong>4 meses siguientes</strong> a su realización.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Recargo Mínimo Garantizado</h3>
                    <p className="text-gray-600">
                      El recargo por horas extra nunca puede ser inferior al <strong>10%</strong> del salario ordinario,
                      aunque el convenio colectivo puede establecer porcentajes superiores y diferentes según el tipo de
                      hora extra.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Registro Obligatorio</h3>
                    <p className="text-gray-600">
                      La empresa debe llevar un <strong>registro diario de horas extra</strong> realizadas por cada
                      trabajador y entregar mensualmente una copia del resumen a la representación legal de los
                      trabajadores.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cotización a la Seguridad Social</h3>
                    <p className="text-gray-600">
                      Las horas extra cotizan a la Seguridad Social y computan para el cálculo de prestaciones como la
                      pensión de jubilación, IT por baja laboral, o prestación por desempleo.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Derecho a Rechazar</h3>
                    <p className="text-gray-600">
                      Salvo pacto en contrario en convenio o contrato, el trabajador tiene derecho a{" "}
                      <strong>rechazar la realización de horas extraordinarias</strong> sin que esto pueda ser motivo de
                      sanción.
                    </p>
                  </div>

                  <Alert className="bg-green-50 border-green-200">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <AlertDescription>
                      Siempre verifica tu <strong>convenio colectivo</strong> específico, ya que puede mejorar las
                      condiciones mínimas establecidas por ley.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Diferencias Horas Extra vs Complementarias */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Horas Extra vs Horas Complementarias</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="bg-orange-100">
                <CardTitle>Horas Extra</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <span>Contratos a tiempo completo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <span>Superan la jornada ordinaria máxima</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <span>Se pagan con recargo (+25%, +50%, +75%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <span>Límite de 80 horas/año</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <span>Voluntarias (salvo pacto)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-blue-100">
                <CardTitle>Horas Complementarias</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Solo contratos a tiempo parcial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Adicionales a la jornada pactada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Se pagan como horas ordinarias (sin recargo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Límite: 30% pactadas + 15% aceptadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Requieren pacto escrito previo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cuánto se paga por una hora extra en España 2025?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Las horas extra ordinarias se pagan con un mínimo del 25% de incremento, las estructurales con un 50%,
                  y las realizadas en festivos con al menos un 75% de incremento sobre el salario base por hora. Tu
                  convenio colectivo puede establecer porcentajes superiores.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cuál es el límite máximo de horas extra al año?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  El Estatuto de los Trabajadores establece un máximo de 80 horas extraordinarias al año por trabajador.
                  No se computan las horas extra compensadas con descanso equivalente ni las realizadas para prevenir o
                  reparar siniestros y otros daños extraordinarios y urgentes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  ¿Qué diferencia hay entre horas extra y horas complementarias?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Las horas extra superan la jornada ordinaria en contratos a tiempo completo y se pagan con recargo.
                  Las horas complementarias son adicionales en contratos a tiempo parcial, se pagan como horas
                  ordinarias sin recargo, y requieren pacto escrito previo con límites del 30% (pactadas) o 15%
                  (aceptadas).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Se pueden compensar las horas extra con descanso?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sí, las horas extra pueden compensarse con tiempo de descanso equivalente en lugar de retribución
                  económica si así se pacta en convenio colectivo o contrato. En ausencia de pacto, se compensarán con
                  descanso en los 4 meses siguientes a su realización.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cotizan las horas extra a la Seguridad Social?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sí, las horas extra cotizan a la Seguridad Social. Se incluyen en la base de cotización por
                  contingencias comunes y profesionales, aplicándose los mismos porcentajes de cotización que al salario
                  ordinario.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculadoras Relacionadas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculadoras Laborales Relacionadas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complementa tu cálculo de horas extra con estas herramientas esenciales para gestionar tu salario.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <RelatedCalculatorCard
              icon={<Clock className="h-6 w-6 text-green-500" />}
              title="Salario por Horas"
              description="Calcula tu salario basado en horas trabajadas. Perfecto para contratos por horas."
              features={["Cálculo por horas", "SMI 2025", "Salario neto"]}
              href="/calculadora-salario-por-horas"
              buttonText="Calcular Salario"
              buttonClassName="bg-green-600 hover:bg-green-700"
              iconBgClassName="bg-green-100"
            />
            <RelatedCalculatorCard
              icon={<Calculator className="h-6 w-6 text-blue-500" />}
              title="Calculadora de Nómina"
              description="Calcula tu nómina completa con todas las deducciones y cotizaciones."
              features={["Nómina completa", "IRPF 2025", "Cotizaciones SS"]}
              href="/calculadora-nomina"
              buttonText="Ver Nómina"
              buttonClassName="bg-blue-600 hover:bg-blue-700"
              iconBgClassName="bg-blue-100"
            />
            <RelatedCalculatorCard
              icon={<TrendingUp className="h-6 w-6 text-purple-500" />}
              title="Conversor Bruto-Neto"
              description="Convierte entre salario bruto y neto. Conoce tu sueldo real."
              features={["Conversión bidireccional", "Cálculo preciso", "Desglose detallado"]}
              href="/conversor-salario-bruto-neto"
              buttonText="Convertir Salario"
              buttonClassName="bg-purple-600 hover:bg-purple-700"
              iconBgClassName="bg-purple-100"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
