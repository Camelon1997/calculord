"use client"

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const SMI_2025 = {
  porHora: 9.26,
}

const COTIZACIONES_GENERAL = {
  trabajador: {
    contingenciasComunes: 4.7,
    desempleo: 1.55,
    formacionProfesional: 0.1,
  },
}

const formatearMoneda = (cantidad) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(cantidad)
}

export default function CalculadoraSalarioHoras() {
  const [horasTrabajadas, setHorasTrabajadas] = useState("40")
  const [tipoCalculo, setTipoCalculo] = useState("semanal")
  const [salarioBase, setSalarioBase] = useState("smi")
  const [salarioPersonalizado, setSalarioPersonalizado] = useState("")
  const [horasExtra, setHorasExtra] = useState("0")

  const [resultados, setResultados] = useState(null)

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
      const salarioHorasExtraBruto = horasExtraCalculadas * salarioPorHora * 1.75

      let salarioBrutoSemanal = salarioHorasNormales + salarioHorasExtraBruto
      let salarioBrutoMensual

      if (tipoCalculo === "semanal") {
        salarioBrutoMensual = (salarioBrutoSemanal * 52) / 12
      } else {
        salarioBrutoMensual = salarioBrutoSemanal // Asumimos que el input mensual ya es el total
        salarioBrutoSemanal = (salarioBrutoMensual * 12) / 52
      }

      let cotizacionTotalTrabajador = 0
      const desgloseCotizaciones = {}
      for (const [concepto, porcentaje] of Object.entries(COTIZACIONES_GENERAL.trabajador)) {
        const cantidad = (salarioBrutoMensual * porcentaje) / 100
        cotizacionTotalTrabajador += cantidad
        desgloseCotizaciones[concepto] = cantidad
      }

      const salarioNetoMensual = salarioBrutoMensual - cotizacionTotalTrabajador
      const salarioNetoSemanal = (salarioNetoMensual * 12) / 52

      setResultados({
        salarioBrutoMensual,
        cotizacionTotalTrabajador,
        salarioNetoMensual,
        salarioNetoSemanal,
        salarioBrutoAnual: salarioBrutoMensual * 12,
        salarioNetoAnual: salarioNetoMensual * 12,
        desgloseCotizaciones,
      })
    }
    calcular()
  }, [horasTrabajadas, tipoCalculo, salarioBase, salarioPersonalizado, horasExtra])

  const chartData = useMemo(() => {
    if (!resultados) return []
    return [
      { name: "Salario Neto", value: resultados.salarioNetoMensual },
      { name: "Cotizaciones", value: resultados.cotizacionTotalTrabajador },
    ]
  }, [resultados])

  const COLORS = ["#10B981", "#EF4444"]

  return (
    <div id="calculadora" className="max-w-6xl mx-auto py-12 px-4">
      <Card className="overflow-hidden shadow-2xl border-0">
        <div className="grid md:grid-cols-2">
          {/* Columna de Inputs */}
          <div className="p-8 bg-white">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold text-gray-900">Introduce tus datos</CardTitle>
              <p className="text-gray-600">Calcula tu salario en tiempo real.</p>
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
                  />
                </div>
              )}
              <div>
                <Label htmlFor="horasExtra" className="font-semibold">
                  Horas Extra (opcional)
                </Label>
                <Input
                  id="horasExtra"
                  type="number"
                  value={horasExtra}
                  onChange={(e) => setHorasExtra(e.target.value)}
                  placeholder="0"
                />
                <p className="text-xs text-gray-500 mt-1">Se pagan con un 75% de incremento mínimo.</p>
              </div>
            </CardContent>
          </div>

          {/* Columna de Resultados */}
          <div className="p-8 bg-gray-50 flex flex-col">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold text-gray-900">Tu Salario Neto</CardTitle>
              <p className="text-gray-600">Desglose de tu retribución.</p>
            </CardHeader>
            {resultados && (
              <CardContent className="p-0 flex-grow flex flex-col justify-center">
                <div className="text-center mb-6">
                  <p className="text-lg text-gray-600">Salario Neto Mensual</p>
                  <p className="text-5xl font-bold text-green-600 tracking-tighter">
                    {formatearMoneda(resultados.salarioNetoMensual)}
                  </p>
                </div>
                <div className="h-48 w-full mb-6">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        fill="#8884d8"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => formatearMoneda(value)} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="font-medium text-gray-700">Salario Neto Mensual</span>
                    </div>
                    <span className="font-bold text-gray-900">{formatearMoneda(resultados.salarioNetoMensual)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                      <span className="font-medium text-gray-700">Cotizaciones</span>
                    </div>
                    <span className="font-bold text-gray-900">
                      {formatearMoneda(resultados.cotizacionTotalTrabajador)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg border">
                    <span className="font-medium text-gray-800">Salario Bruto Mensual</span>
                    <span className="font-bold text-gray-900">{formatearMoneda(resultados.salarioBrutoMensual)}</span>
                  </div>
                </div>
              </CardContent>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}
