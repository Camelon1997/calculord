"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FileText, Briefcase, UserX, AlertTriangle, Calculator, Sparkles } from "lucide-react"

const tiposDespido = {
  improcedente: { indemnizacion: 33, maximo: 24 },
  objetivo: { indemnizacion: 20, maximo: 12 },
  procedente: { indemnizacion: 0, maximo: 0 },
  disciplinario_improcedente: { indemnizacion: 33, maximo: 24 },
  nulo: { indemnizacion: 0, maximo: 0, readmision: true },
}

const formatearMoneda = (cantidad: number) => {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(cantidad || 0)
}

export default function CalculadoraDespidos() {
  const [salarioBrutoAnual, setSalarioBrutoAnual] = useState<string>("")
  const [antiguedad, setAntiguedad] = useState<string>("")
  const [tipoDespido, setTipoDespido] = useState<string>("improcedente")
  const [diasVacaciones, setDiasVacaciones] = useState<string>("")
  const [otrosConceptos, setOtrosConceptos] = useState<string>("")

  const resultados = useMemo(() => {
    const salarioNum = Number.parseFloat(salarioBrutoAnual)
    const antiguedadNum = Number.parseFloat(antiguedad)

    if (isNaN(salarioNum) || isNaN(antiguedadNum) || salarioNum <= 0 || antiguedadNum < 0) {
      return null
    }

    const salarioDiario = salarioNum / 365
    const configDespido = tiposDespido[tipoDespido]

    // Cálculo Indemnización
    const diasIndemnizacionPorAnio = configDespido.indemnizacion
    const maximoMensualidades = configDespido.maximo
    let indemnizacionBruta = salarioDiario * diasIndemnizacionPorAnio * antiguedadNum
    if (maximoMensualidades > 0) {
      const maximoIndemnizacion = (salarioNum / 12) * maximoMensualidades
      indemnizacionBruta = Math.min(indemnizacionBruta, maximoIndemnizacion)
    }

    // Cálculo Finiquito
    const vacacionesNum = Number.parseFloat(diasVacaciones) || 0
    const otrosConceptosNum = Number.parseFloat(otrosConceptos) || 0
    const valorVacaciones = salarioDiario * vacacionesNum
    const finiquitoBruto = valorVacaciones + otrosConceptosNum

    const totalARecibir = indemnizacionBruta + finiquitoBruto

    return {
      indemnizacion: indemnizacionBruta,
      finiquito: finiquitoBruto,
      total: totalARecibir,
      salarioDiario: salarioDiario,
      readmision: configDespido.readmision || false,
      desgloseFiniquito: {
        vacaciones: valorVacaciones,
        otros: otrosConceptosNum,
      },
    }
  }, [salarioBrutoAnual, antiguedad, tipoDespido, diasVacaciones, otrosConceptos])

  return (
    <Card className="overflow-hidden shadow-2xl border-gray-200/60">
      <div className="grid md:grid-cols-2">
        {/* Columna de Inputs */}
        <div className="p-8 bg-gray-50/50">
          <CardHeader className="p-0 mb-8">
            <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <Calculator className="w-7 h-7 text-red-600" />
              Introduce tus Datos
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-6">
            {/* Datos del Contrato */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700 border-b pb-2 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-red-500" />
                Datos del Contrato
              </h3>
              <div>
                <label htmlFor="salario" className="block text-sm font-medium text-gray-600 mb-1.5">
                  Salario Bruto Anual (€)
                </label>
                <Input
                  id="salario"
                  type="number"
                  placeholder="Ej: 25000"
                  value={salarioBrutoAnual}
                  onChange={(e) => setSalarioBrutoAnual(e.target.value)}
                  className="text-base"
                />
              </div>
              <div>
                <label htmlFor="antiguedad" className="block text-sm font-medium text-gray-600 mb-1.5">
                  Antigüedad en la empresa (años)
                </label>
                <Input
                  id="antiguedad"
                  type="number"
                  placeholder="Ej: 5.5"
                  value={antiguedad}
                  onChange={(e) => setAntiguedad(e.target.value)}
                  className="text-base"
                />
              </div>
              <div>
                <label htmlFor="tipo-despido" className="block text-sm font-medium text-gray-600 mb-1.5">
                  Tipo de Despido
                </label>
                <Select value={tipoDespido} onValueChange={setTipoDespido}>
                  <SelectTrigger className="text-base">
                    <SelectValue placeholder="Selecciona un tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="improcedente">Despido Improcedente</SelectItem>
                    <SelectItem value="objetivo">Despido Objetivo</SelectItem>
                    <SelectItem value="disciplinario_improcedente">Disciplinario (declarado improcedente)</SelectItem>
                    <SelectItem value="procedente">Despido Procedente</SelectItem>
                    <SelectItem value="nulo">Despido Nulo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Conceptos del Finiquito */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700 border-b pb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-red-500" />
                Conceptos del Finiquito
              </h3>
              <div>
                <label htmlFor="vacaciones" className="block text-sm font-medium text-gray-600 mb-1.5">
                  Días de vacaciones no disfrutadas
                </label>
                <Input
                  id="vacaciones"
                  type="number"
                  placeholder="Ej: 10"
                  value={diasVacaciones}
                  onChange={(e) => setDiasVacaciones(e.target.value)}
                  className="text-base"
                />
              </div>
              <div>
                <label htmlFor="otros" className="block text-sm font-medium text-gray-600 mb-1.5">
                  Otros conceptos pendientes (€)
                </label>
                <Input
                  id="otros"
                  type="number"
                  placeholder="Ej: 300 (bonus, horas extra...)"
                  value={otrosConceptos}
                  onChange={(e) => setOtrosConceptos(e.target.value)}
                  className="text-base"
                />
              </div>
            </div>
          </CardContent>
        </div>

        {/* Columna de Resultados */}
        <div className="p-8 bg-gradient-to-br from-red-50 to-orange-50 flex flex-col">
          <CardHeader className="p-0 mb-8">
            <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-red-600" />
              Resultado Estimado
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-grow flex flex-col justify-center">
            {resultados ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="text-center bg-white/60 p-6 rounded-xl shadow-inner border border-red-100">
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">Total a Recibir (Bruto)</h4>
                  <p className="text-5xl font-extrabold text-red-600 tracking-tight">
                    {formatearMoneda(resultados.total)}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/60 rounded-lg border border-gray-200/80">
                    <div className="flex items-center gap-3">
                      <UserX className="w-5 h-5 text-red-500" />
                      <span className="font-semibold text-gray-700">Indemnización</span>
                    </div>
                    <span className="font-bold text-lg text-gray-800">{formatearMoneda(resultados.indemnizacion)}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/60 rounded-lg border border-gray-200/80">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-500" />
                      <span className="font-semibold text-gray-700">Finiquito</span>
                    </div>
                    <span className="font-bold text-lg text-gray-800">{formatearMoneda(resultados.finiquito)}</span>
                  </div>
                </div>

                {resultados.readmision && (
                  <Alert variant="default" className="bg-purple-100 border-purple-200 text-purple-800">
                    <AlertTriangle className="h-5 w-5 text-purple-600" />
                    <AlertTitle className="font-bold">Despido Nulo</AlertTitle>
                    <AlertDescription>
                      En este caso, la empresa está obligada a readmitirte y pagarte los salarios de tramitación.
                    </AlertDescription>
                  </Alert>
                )}
              </motion.div>
            ) : (
              <div className="text-center text-gray-500 flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Calculator className="w-8 h-8 text-gray-400" />
                </div>
                <p className="font-medium">Introduce tus datos para ver el cálculo.</p>
                <p className="text-sm">Los resultados aparecerán aquí.</p>
              </div>
            )}
          </CardContent>
        </div>
      </div>
    </Card>
  )
}
