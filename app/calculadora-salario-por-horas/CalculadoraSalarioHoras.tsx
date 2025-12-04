"use client"

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info, TrendingUp, TrendingDown, Clock, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const SMI_2025 = {
  porHora: 9.26,
  mensual: 1184,
}

const COTIZACIONES_GENERAL = {
  trabajador: {
    contingenciasComunes: 4.7,
    desempleo: 1.55,
    formacionProfesional: 0.1,
  },
}

const TRAMOS_IRPF_2025 = [
  { desde: 0, hasta: 12450, tipo: 19 },
  { desde: 12450, hasta: 20200, tipo: 24 },
  { desde: 20200, hasta: 35200, tipo: 30 },
  { desde: 35200, hasta: 60000, tipo: 37 },
  { desde: 60000, hasta: 300000, tipo: 45 },
  { desde: 300000, hasta: Number.POSITIVE_INFINITY, tipo: 47 },
]

const formatearMoneda = (cantidad: number) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(cantidad)
}

const calcularIRPF = (baseAnual: number): number => {
  let irpfTotal = 0
  let baseRestante = baseAnual

  for (const tramo of TRAMOS_IRPF_2025) {
    if (baseRestante <= 0) break

    const baseTramo = Math.min(baseRestante, tramo.hasta - tramo.desde)
    irpfTotal += (baseTramo * tramo.tipo) / 100
    baseRestante -= baseTramo
  }

  return irpfTotal / 12 // Mensual
}

export default function CalculadoraSalarioHoras() {
  const [horasTrabajadas, setHorasTrabajadas] = useState("40")
  const [tipoCalculo, setTipoCalculo] = useState("semanal")
  const [salarioBase, setSalarioBase] = useState("smi")
  const [salarioPersonalizado, setSalarioPersonalizado] = useState("")
  const [horasExtra, setHorasExtra] = useState("0")
  const [tipoContrato, setTipoContrato] = useState("indefinido")
  const [incrementoHorasExtra, setIncrementoHorasExtra] = useState("75")
  const [aplicarIRPF, setAplicarIRPF] = useState("si")

  const [resultados, setResultados] = useState<any>(null)

  useEffect(() => {
    const calcular = () => {
      const numHorasTrabajadas = Number.parseFloat(horasTrabajadas) || 0
      const numHorasExtra = Number.parseFloat(horasExtra) || 0

      const salarioPorHora =
        salarioBase === "smi" ? SMI_2025.porHora : Number.parseFloat(salarioPersonalizado) || SMI_2025.porHora

      let horasNormales = numHorasTrabajadas
      let horasExtraCalculadas = numHorasExtra

      if (tipoCalculo === "semanal" && numHorasTrabajadas > 40) {
        horasNormales = 40
        horasExtraCalculadas += numHorasTrabajadas - 40
      }

      const salarioHorasNormales = horasNormales * salarioPorHora
      const incremento = 1 + Number.parseFloat(incrementoHorasExtra) / 100
      const salarioHorasExtraBruto = horasExtraCalculadas * salarioPorHora * incremento

      let salarioBrutoSemanal = salarioHorasNormales + salarioHorasExtraBruto
      let salarioBrutoMensual

      if (tipoCalculo === "semanal") {
        salarioBrutoMensual = (salarioBrutoSemanal * 52) / 12
      } else {
        salarioBrutoMensual = salarioBrutoSemanal
        salarioBrutoSemanal = (salarioBrutoMensual * 12) / 52
      }

      let cotizacionDesempleo = COTIZACIONES_GENERAL.trabajador.desempleo
      if (tipoContrato === "temporal") {
        cotizacionDesempleo = 1.6 // Temporal tiene 1.6%
      }

      let cotizacionTotalTrabajador = 0
      const desgloseCotizaciones: any = {}

      desgloseCotizaciones.contingenciasComunes =
        (salarioBrutoMensual * COTIZACIONES_GENERAL.trabajador.contingenciasComunes) / 100
      desgloseCotizaciones.desempleo = (salarioBrutoMensual * cotizacionDesempleo) / 100
      desgloseCotizaciones.formacionProfesional =
        (salarioBrutoMensual * COTIZACIONES_GENERAL.trabajador.formacionProfesional) / 100

      cotizacionTotalTrabajador = Object.values(desgloseCotizaciones).reduce((a: any, b: any) => a + b, 0)

      let irpfMensual = 0
      if (aplicarIRPF === "si") {
        irpfMensual = calcularIRPF(salarioBrutoMensual * 12)
      }

      const salarioNetoMensual = salarioBrutoMensual - cotizacionTotalTrabajador - irpfMensual
      const salarioNetoSemanal = (salarioNetoMensual * 12) / 52

      const salarioPorHoraEfectivo =
        tipoCalculo === "semanal"
          ? salarioNetoSemanal / numHorasTrabajadas
          : salarioNetoMensual / (numHorasTrabajadas * 4.33) // 4.33 semanas promedio al mes

      setResultados({
        salarioBrutoMensual,
        cotizacionTotalTrabajador,
        irpfMensual,
        salarioNetoMensual,
        salarioNetoSemanal,
        salarioBrutoAnual: salarioBrutoMensual * 12,
        salarioNetoAnual: salarioNetoMensual * 12,
        desgloseCotizaciones,
        salarioPorHoraEfectivo,
        horasNormales,
        horasExtraCalculadas,
        salarioHorasNormales,
        salarioHorasExtraBruto,
      })
    }
    calcular()
  }, [
    horasTrabajadas,
    tipoCalculo,
    salarioBase,
    salarioPersonalizado,
    horasExtra,
    tipoContrato,
    incrementoHorasExtra,
    aplicarIRPF,
  ])

  const chartData = useMemo(() => {
    if (!resultados) return []
    const data = [
      { name: "Salario Neto", value: resultados.salarioNetoMensual, color: "#10B981" },
      { name: "Cotizaciones SS", value: resultados.cotizacionTotalTrabajador, color: "#EF4444" },
    ]
    if (resultados.irpfMensual > 0) {
      data.push({ name: "IRPF", value: resultados.irpfMensual, color: "#F59E0B" })
    }
    return data
  }, [resultados])

  return (
    <div id="calculadora" className="max-w-7xl mx-auto py-12 px-4">
      <Card className="overflow-hidden shadow-2xl border-0">
        <div className="grid lg:grid-cols-5">
          <div className="lg:col-span-2 p-8 bg-white">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold text-gray-900">Introduce tus datos</CardTitle>
              <p className="text-gray-600">Configura todos los parámetros de tu salario.</p>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="horasTrabajadas" className="font-semibold">
                    Horas Trabajadas
                  </Label>
                  <Input
                    id="horasTrabajadas"
                    type="number"
                    value={horasTrabajadas}
                    onChange={(e) => setHorasTrabajadas(e.target.value)}
                    placeholder="40"
                  />
                </div>
                <div>
                  <Label htmlFor="tipoCalculo" className="font-semibold">
                    Período
                  </Label>
                  <Select value={tipoCalculo} onValueChange={setTipoCalculo}>
                    <SelectTrigger id="tipoCalculo">
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="semanal">Semanal</SelectItem>
                      <SelectItem value="mensual">Mensual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label className="font-semibold">Salario Base</Label>
                <Select value={salarioBase} onValueChange={setSalarioBase}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smi">SMI 2025 ({formatearMoneda(SMI_2025.porHora)}/hora)</SelectItem>
                    <SelectItem value="personalizado">Personalizado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {salarioBase === "personalizado" && (
                <div>
                  <Label htmlFor="salarioPersonalizado" className="font-semibold">
                    Salario Bruto por Hora (€)
                  </Label>
                  <Input
                    id="salarioPersonalizado"
                    type="number"
                    value={salarioPersonalizado}
                    onChange={(e) => setSalarioPersonalizado(e.target.value)}
                    placeholder="12.50"
                    step="0.01"
                  />
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="horasExtra" className="font-semibold">
                    Horas Extra
                  </Label>
                  <Input
                    id="horasExtra"
                    type="number"
                    value={horasExtra}
                    onChange={(e) => setHorasExtra(e.target.value)}
                    placeholder="0"
                  />
                </div>
                <div>
                  <Label htmlFor="incrementoHorasExtra" className="font-semibold">
                    Incremento (%)
                  </Label>
                  <Select value={incrementoHorasExtra} onValueChange={setIncrementoHorasExtra}>
                    <SelectTrigger id="incrementoHorasExtra">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="25">+25% (Mínimo)</SelectItem>
                      <SelectItem value="50">+50%</SelectItem>
                      <SelectItem value="75">+75% (Común)</SelectItem>
                      <SelectItem value="100">+100%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="tipoContrato" className="font-semibold">
                  Tipo de Contrato
                </Label>
                <Select value={tipoContrato} onValueChange={setTipoContrato}>
                  <SelectTrigger id="tipoContrato">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="indefinido">Indefinido (Desempleo 1.55%)</SelectItem>
                    <SelectItem value="temporal">Temporal (Desempleo 1.6%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="aplicarIRPF" className="font-semibold">
                  Aplicar IRPF
                </Label>
                <Select value={aplicarIRPF} onValueChange={setAplicarIRPF}>
                  <SelectTrigger id="aplicarIRPF">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="si">Sí (Más realista)</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {resultados && resultados.horasExtraCalculadas > 0 && (
                <Alert className="bg-amber-50 border-amber-200">
                  <Info className="h-4 w-4 text-amber-600" />
                  <AlertDescription className="text-amber-800">
                    Tienes {resultados.horasExtraCalculadas.toFixed(1)} horas extra que se pagan con{" "}
                    {incrementoHorasExtra}% de incremento.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </div>

          <div className="lg:col-span-3 p-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold text-gray-900">Tu Salario Calculado</CardTitle>
              <p className="text-gray-600">Desglose completo de tu retribución mensual y anual.</p>
            </CardHeader>
            {resultados && (
              <CardContent className="p-0 space-y-6">
                {/* Salario Neto Principal */}
                <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-green-100">
                  <Badge className="mb-2 bg-green-100 text-green-700">Salario Neto Mensual</Badge>
                  <p className="text-5xl font-bold text-green-600 tracking-tight mb-2">
                    {formatearMoneda(resultados.salarioNetoMensual)}
                  </p>
                  <p className="text-sm text-gray-500">{formatearMoneda(resultados.salarioNetoAnual)} al año</p>
                  {resultados.salarioPorHoraEfectivo > 0 && (
                    <p className="text-sm text-gray-600 mt-2">
                      <Clock className="inline h-4 w-4 mr-1" />
                      {formatearMoneda(resultados.salarioPorHoraEfectivo)}/hora neto
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Gráfico */}
                  <Card className="border-0 shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Distribución del Salario</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-48 w-full">
                        <ResponsiveContainer>
                          <PieChart>
                            <Pie
                              data={chartData}
                              dataKey="value"
                              nameKey="name"
                              cx="50%"
                              cy="50%"
                              outerRadius={60}
                              label={(entry) => `${((entry.value / resultados.salarioBrutoMensual) * 100).toFixed(0)}%`}
                            >
                              {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip formatter={(value: any) => formatearMoneda(value)} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Desglose de Horas */}
                  <Card className="border-0 shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Desglose de Horas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Horas Normales</span>
                        <span className="font-semibold">{resultados.horasNormales}h</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Salario Horas Normales</span>
                        <span className="font-semibold">{formatearMoneda(resultados.salarioHorasNormales)}</span>
                      </div>
                      {resultados.horasExtraCalculadas > 0 && (
                        <>
                          <div className="border-t pt-2 flex justify-between items-center">
                            <span className="text-sm text-gray-600">Horas Extra</span>
                            <span className="font-semibold text-amber-600">
                              {resultados.horasExtraCalculadas.toFixed(1)}h
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Salario Horas Extra</span>
                            <span className="font-semibold text-amber-600">
                              {formatearMoneda(resultados.salarioHorasExtraBruto)}
                            </span>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Desglose Detallado */}
                <Card className="border-0 shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Desglose Detallado Mensual</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-gray-700">Salario Bruto</span>
                      </div>
                      <span className="font-bold text-gray-900">{formatearMoneda(resultados.salarioBrutoMensual)}</span>
                    </div>

                    <div className="pl-6 space-y-1 border-l-2 border-red-200 ml-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Contingencias Comunes (4.7%)</span>
                        <span className="text-gray-700">
                          -{formatearMoneda(resultados.desgloseCotizaciones.contingenciasComunes)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">
                          Desempleo ({tipoContrato === "indefinido" ? "1.55" : "1.6"}%)
                        </span>
                        <span className="text-gray-700">
                          -{formatearMoneda(resultados.desgloseCotizaciones.desempleo)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Formación Profesional (0.1%)</span>
                        <span className="text-gray-700">
                          -{formatearMoneda(resultados.desgloseCotizaciones.formacionProfesional)}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-red-50 to-transparent rounded-lg">
                      <div className="flex items-center gap-2">
                        <TrendingDown className="h-4 w-4 text-red-600" />
                        <span className="font-medium text-gray-700">Total Cotizaciones SS</span>
                      </div>
                      <span className="font-bold text-red-600">
                        -{formatearMoneda(resultados.cotizacionTotalTrabajador)}
                      </span>
                    </div>

                    {resultados.irpfMensual > 0 && (
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-amber-50 to-transparent rounded-lg">
                        <div className="flex items-center gap-2">
                          <TrendingDown className="h-4 w-4 text-amber-600" />
                          <span className="font-medium text-gray-700">IRPF (estimado)</span>
                        </div>
                        <span className="font-bold text-amber-600">-{formatearMoneda(resultados.irpfMensual)}</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-100 to-green-50 rounded-lg border-2 border-green-200 mt-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-green-600" />
                        <span className="font-bold text-gray-900">Salario Neto Final</span>
                      </div>
                      <span className="font-bold text-2xl text-green-600">
                        {formatearMoneda(resultados.salarioNetoMensual)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}
