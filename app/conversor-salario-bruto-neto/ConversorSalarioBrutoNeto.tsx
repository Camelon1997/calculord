"use client"

import { useState } from "react"
import { Calculator, ArrowLeftRight, TrendingUp, Info, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface CalculationResult {
  salarioBruto: number
  salarioNeto: number
  irpf: number
  cotizacionesEmpleado: number
  baseIRPF: number
  deduccionPersonal: number
  tipoIRPF: number
}

export default function ConversorSalarioBrutoNeto() {
  const [modo, setModo] = useState<"bruto-neto" | "neto-bruto">("bruto-neto")
  const [salarioInput, setSalarioInput] = useState("30000")
  const [situacionFamiliar, setSituacionFamiliar] = useState("soltero")
  const [numeroHijos, setNumeroHijos] = useState("0")
  const [comunidadAutonoma, setComunidadAutonoma] = useState("madrid")
  const [discapacidad, setDiscapacidad] = useState("no")
  const [resultado, setResultado] = useState<CalculationResult | null>(null)

  // Tipos de cotización 2025
  const tiposCotizacion = {
    contingenciasComunes: 4.7,
    desempleo: 1.55,
    formacionProfesional: 0.1,
    total: 6.35,
  }

  // Tramos IRPF 2025 (estatales)
  const tramosIRPF = [
    { hasta: 12450, tipo: 19 },
    { hasta: 20200, tipo: 24 },
    { hasta: 35200, tipo: 30 },
    { hasta: 60000, tipo: 37 },
    { hasta: 300000, tipo: 45 },
    { hasta: Number.POSITIVE_INFINITY, tipo: 47 },
  ]

  // Deducciones personales por situación familiar
  const deduccionesPersonales = {
    soltero: 5550,
    casado: 5550,
    viudo: 5550,
  }

  // Deducciones por hijos
  const deduccionesPorHijos = {
    0: 0,
    1: 2400,
    2: 2700,
    3: 4000,
    4: 4500,
  }

  const tiposAutonomicos: Record<string, Array<{ hasta: number; tipo: number }>> = {
    andalucia: [
      { hasta: 12450, tipo: 9.5 },
      { hasta: 20200, tipo: 12 },
      { hasta: 35200, tipo: 15 },
      { hasta: 60000, tipo: 18.5 },
      { hasta: 300000, tipo: 22.5 },
      { hasta: Number.POSITIVE_INFINITY, tipo: 24.5 },
    ],
    aragon: [
      { hasta: 12450, tipo: 10 },
      { hasta: 20200, tipo: 12 },
      { hasta: 35200, tipo: 15 },
      { hasta: 60000, tipo: 18 },
      { hasta: 300000, tipo: 22 },
      { hasta: Number.POSITIVE_INFINITY, tipo: 24 },
    ],
    asturias: [
      { hasta: 12450, tipo: 10 },
      { hasta: 20200, tipo: 12 },
      { hasta: 35200, tipo: 15 },
      { hasta: 60000, tipo: 18 },
      { hasta: 300000, tipo: 23 },
      { hasta: Number.POSITIVE_INFINITY, tipo: 25 },
    ],
    baleares: [
      { hasta: 12450, tipo: 9.5 },
      { hasta: 20200, tipo: 12 },
      { hasta: 35200, tipo: 15 },
      { hasta: 60000, tipo: 18.5 },
      { hasta: 300000, tipo: 23.5 },
      { hasta: Number.POSITIVE_INFINITY, tipo: 25.5 },
    ],
    canarias: [
      { hasta: 12450, tipo: 9 },
      { hasta: 20200, tipo: 11.5 },
      { hasta: 35200, tipo: 14.5 },
      { hasta: 60000, tipo: 18 },
      { hasta: 300000, tipo: 22.5 },
      { hasta: Number.POSITIVE_INFINITY, tipo: 24.5 },
    ],
    cantabria: [
      { hasta: 12450, tipo: 9.5 },
      { hasta: 20200, tipo: 12 },
      { hasta: 35200, tipo: 15 },
      { hasta: 60000, tipo: 18.5 },
      { hasta: 300000, tipo: 22.5 },
      { hasta: Number.POSITIVE_INFINITY, tipo: 24.5 },
    ],
    castillaleon: [
      { hasta: 12450, tipo: 9.5 },
      { hasta: 20200, tipo: 12 },
      { hasta: 35200, tipo: 15 },
      { hasta: 60000, tipo: 18.5 },
      { hasta: 300000, tipo: 22.5 },
      { hasta: Number.POSITIVE_INFINITY, tipo: 24.5 },
    ],
    castillamancha: [
      { hasta: 12450, tipo: 9.5 },
      { hasta: 20200, tipo: 12 },
      { hasta: 35200, tipo: 15 },
      { hasta: 60000, tipo: 18.5 },
      { hasta: 300000, tipo: 22.5 },
      { hasta: Number.POSITIVE_INFINITY, tipo: 24.5 },
    ],
    cataluna: [
      { hasta: 12450, tipo: 12 },
      { hasta: 20200, tipo: 14 },
      { hasta: 35200, tipo: 16.5 },
      { hasta: 60000, tipo: 21.5 },
      { hasta: 300000, tipo: 25.5 },
      { hasta: Number.POSITIVE_INFINITY, tipo: 27.5 },
    ],
    extremadura: [
      { hasta: 12450, tipo: 9.5 },
      { hasta: 20200, tipo: 12 },
      { hasta: 35200, tipo: 15 },
      { hasta: 60000, tipo: 18 },
      { hasta: 300000, tipo: 22 },
      { hasta: Number.POSITIVE_INFINITY, tipo: 24 },
    ],
    galicia: [
      { hasta: 12450, tipo: 9.5 },
      { hasta: 20200, tipo: 11.8 },
      { hasta: 35200, tipo: 15 },
      { hasta: 60000, tipo: 18.5 },
      { hasta: 300000, tipo: 22 },
      { hasta: Number.POSITIVE_INFINITY, tipo: 24.5 },
    ],
    madrid: [
      { hasta: 12450, tipo: 9 },
      { hasta: 20200, tipo: 11.5 },
      { hasta: 35200, tipo: 15.5 },
      { hasta: 60000, tipo: 18.5 },
      { hasta: 300000, tipo: 22.5 },
      { hasta: Number.POSITIVE_INFINITY, tipo: 24.5 },
    ],
    murcia: [
      { hasta: 12450, tipo: 9.5 },
      { hasta: 20200, tipo: 12 },
      { hasta: 35200, tipo: 15 },
      { hasta: 60000, tipo: 18.5 },
      { hasta: 300000, tipo: 22.5 },
      { hasta: Number.POSITIVE_INFINITY, tipo: 24.5 },
    ],
    navarra: [
      { hasta: 12450, tipo: 10 },
      { hasta: 20200, tipo: 13 },
      { hasta: 35200, tipo: 16 },
      { hasta: 60000, tipo: 19 },
      { hasta: 300000, tipo: 23 },
      { hasta: Number.POSITIVE_INFINITY, tipo: 25 },
    ],
    paisvasco: [
      { hasta: 12450, tipo: 10 },
      { hasta: 20200, tipo: 12.5 },
      { hasta: 35200, tipo: 16 },
      { hasta: 60000, tipo: 19 },
      { hasta: 300000, tipo: 23 },
      { hasta: Number.POSITIVE_INFINITY, tipo: 25 },
    ],
    larioja: [
      { hasta: 12450, tipo: 9.5 },
      { hasta: 20200, tipo: 11.9 },
      { hasta: 35200, tipo: 15 },
      { hasta: 60000, tipo: 18.5 },
      { hasta: 300000, tipo: 22.5 },
      { hasta: Number.POSITIVE_INFINITY, tipo: 24.5 },
    ],
    valencia: [
      { hasta: 12450, tipo: 10 },
      { hasta: 20200, tipo: 12 },
      { hasta: 35200, tipo: 15 },
      { hasta: 60000, tipo: 18.5 },
      { hasta: 300000, tipo: 23.5 },
      { hasta: Number.POSITIVE_INFINITY, tipo: 25.5 },
    ],
  }

  const calcularIRPF = (baseImponible: number, deduccionTotal: number): { irpf: number; tipoEfectivo: number } => {
    const baseGravable = Math.max(0, baseImponible - deduccionTotal)
    let irpfEstatal = 0
    let irpfAutonomico = 0
    let baseRestante = baseGravable
    let baseAnterior = 0

    for (const tramo of tramosIRPF) {
      if (baseRestante <= 0) break
      const baseTramo = Math.min(baseRestante, tramo.hasta - baseAnterior)
      irpfEstatal += baseTramo * (tramo.tipo / 100) * 0.5 // 50% estatal
      baseRestante -= baseTramo
      baseAnterior = tramo.hasta
    }

    const tramosAutonomicos = tiposAutonomicos[comunidadAutonoma] || tiposAutonomicos.madrid
    baseRestante = baseGravable
    baseAnterior = 0
    for (const tramo of tramosAutonomicos) {
      if (baseRestante <= 0) break
      const baseTramo = Math.min(baseRestante, tramo.hasta - baseAnterior)
      irpfAutonomico += baseTramo * (tramo.tipo / 100)
      baseRestante -= baseTramo
      baseAnterior = tramo.hasta
    }

    const irpfTotal = irpfEstatal + irpfAutonomico
    const tipoEfectivo = baseImponible > 0 ? (irpfTotal / baseImponible) * 100 : 0
    return { irpf: irpfTotal, tipoEfectivo }
  }

  const calcularBrutoANeto = (salarioBrutoAnual: number): CalculationResult => {
    const cotizacionesEmpleado = salarioBrutoAnual * (tiposCotizacion.total / 100)
    const baseIRPF = salarioBrutoAnual - cotizacionesEmpleado
    const deduccionPersonal = deduccionesPersonales[situacionFamiliar as keyof typeof deduccionesPersonales] || 5550
    const deduccionFamiliar = deduccionesPorHijos[numeroHijos as keyof typeof deduccionesPorHijos] || 0
    const deduccionDiscapacidad = discapacidad === "si" ? 3000 : 0
    const deduccionTotal = deduccionPersonal + deduccionFamiliar + deduccionDiscapacidad
    const { irpf, tipoEfectivo } = calcularIRPF(baseIRPF, deduccionTotal)
    const salarioNeto = salarioBrutoAnual - cotizacionesEmpleado - irpf

    return {
      salarioBruto: salarioBrutoAnual,
      salarioNeto,
      irpf,
      cotizacionesEmpleado,
      baseIRPF,
      deduccionPersonal: deduccionTotal,
      tipoIRPF: tipoEfectivo,
    }
  }

  const calcularNetoABruto = (salarioNetoAnual: number): CalculationResult => {
    let salarioBruto = salarioNetoAnual * 1.4
    let iteraciones = 0
    const maxIteraciones = 50
    const precision = 1

    while (iteraciones < maxIteraciones) {
      const resultado = calcularBrutoANeto(salarioBruto)
      const diferencia = resultado.salarioNeto - salarioNetoAnual
      if (Math.abs(diferencia) < precision) return resultado
      salarioBruto -= diferencia * 0.5
      iteraciones++
    }
    return calcularBrutoANeto(salarioBruto)
  }

  const handleCalcular = () => {
    const salario = Number.parseFloat(salarioInput)
    if (!salario || salario <= 0) return
    const result = modo === "bruto-neto" ? calcularBrutoANeto(salario) : calcularNetoABruto(salario)
    setResultado(result)
  }

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(amount)
  const formatPercentage = (percentage: number) => `${percentage.toFixed(2)}%`

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
      <Card className="h-fit shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <DollarSign className="h-6 w-6 text-blue-600" />
            Conversor de Salario
          </CardTitle>
          <CardDescription>
            Selecciona el tipo de conversión y completa los datos para ver el resultado.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs value={modo} onValueChange={(value) => setModo(value as "bruto-neto" | "neto-bruto")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="bruto-neto">Bruto → Neto</TabsTrigger>
              <TabsTrigger value="neto-bruto">Neto → Bruto</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-2">
            <Label htmlFor="salario" className="text-base">
              {modo === "bruto-neto" ? "Salario Bruto Anual (€)" : "Salario Neto Anual Deseado (€)"}
            </Label>
            <Input
              id="salario"
              type="number"
              placeholder={modo === "bruto-neto" ? "Ej: 30000" : "Ej: 22000"}
              value={salarioInput}
              onChange={(e) => setSalarioInput(e.target.value)}
              className="text-lg"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Situación Familiar</Label>
              <Select value={situacionFamiliar} onValueChange={setSituacionFamiliar}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="soltero">Soltero/a</SelectItem>
                  <SelectItem value="casado">Casado/a</SelectItem>
                  <SelectItem value="viudo">Viudo/a</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Número de Hijos</Label>
              <Select value={numeroHijos} onValueChange={setNumeroHijos}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0 hijos</SelectItem>
                  <SelectItem value="1">1 hijo</SelectItem>
                  <SelectItem value="2">2 hijos</SelectItem>
                  <SelectItem value="3">3 hijos</SelectItem>
                  <SelectItem value="4">4 o más</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Comunidad Autónoma</Label>
              <Select value={comunidadAutonoma} onValueChange={setComunidadAutonoma}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="andalucia">Andalucía</SelectItem>
                  <SelectItem value="aragon">Aragón</SelectItem>
                  <SelectItem value="asturias">Asturias</SelectItem>
                  <SelectItem value="baleares">Islas Baleares</SelectItem>
                  <SelectItem value="canarias">Canarias</SelectItem>
                  <SelectItem value="cantabria">Cantabria</SelectItem>
                  <SelectItem value="castillaleon">Castilla y León</SelectItem>
                  <SelectItem value="castillamancha">Castilla-La Mancha</SelectItem>
                  <SelectItem value="cataluna">Cataluña</SelectItem>
                  <SelectItem value="extremadura">Extremadura</SelectItem>
                  <SelectItem value="galicia">Galicia</SelectItem>
                  <SelectItem value="madrid">Madrid</SelectItem>
                  <SelectItem value="murcia">Murcia</SelectItem>
                  <SelectItem value="navarra">Navarra</SelectItem>
                  <SelectItem value="paisvasco">País Vasco</SelectItem>
                  <SelectItem value="larioja">La Rioja</SelectItem>
                  <SelectItem value="valencia">Comunidad Valenciana</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Discapacidad reconocida</Label>
              <Select value={discapacidad} onValueChange={setDiscapacidad}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="si">Sí (≥33%)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={handleCalcular} size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg">
            <Calculator className="mr-2 h-5 w-5" />
            Calcular Conversión
          </Button>
        </CardContent>
      </Card>

      <div className="h-fit sticky top-24">
        {resultado ? (
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="h-6 w-6 text-green-600" />
                Resultado de la Conversión
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-center">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Salario Bruto Anual</p>
                    <p className="text-3xl font-bold text-blue-700">{formatCurrency(resultado.salarioBruto)}</p>
                    <p className="text-sm text-gray-500">{formatCurrency(resultado.salarioBruto / 12)} / mes</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Salario Neto Anual</p>
                    <p className="text-3xl font-bold text-green-600">{formatCurrency(resultado.salarioNeto)}</p>
                    <p className="text-sm text-gray-500">{formatCurrency(resultado.salarioNeto / 12)} / mes</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-lg">Desglose de Deducciones</h4>
                <div className="space-y-3 text-base">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Cotizaciones S.S. ({formatPercentage(tiposCotizacion.total)})</span>
                    <span className="font-medium text-red-600">-{formatCurrency(resultado.cotizacionesEmpleado)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Retención IRPF ({formatPercentage(resultado.tipoIRPF)})</span>
                    <span className="font-medium text-red-600">-{formatCurrency(resultado.irpf)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Base Imponible IRPF</span>
                    <span className="font-medium">{formatCurrency(resultado.baseIRPF)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Deducciones aplicadas</span>
                    <span className="font-medium text-green-600">-{formatCurrency(resultado.deduccionPersonal)}</span>
                  </div>
                </div>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Los cálculos son una estimación basada en la normativa estatal. Consulta a un asesor para tu caso
                  particular.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        ) : (
          <Card className="flex flex-col items-center justify-center text-center p-8 h-full shadow-lg">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <ArrowLeftRight className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Esperando tus datos</h3>
            <p className="text-gray-500 max-w-sm">
              Introduce tu salario y situación personal en el formulario de la izquierda para ver el desglose completo.
            </p>
          </Card>
        )}
      </div>
    </div>
  )
}
