"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Calculator, Building2, ArrowLeftRight, TrendingUp, User, Briefcase, PieChartIcon, Wallet } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

interface CotizacionesEmpresa {
  contingenciasComunes: number
  desempleo: number
  formacionProfesional: number
  fogasa: number
  total: number
}

interface ResultadoCalculo {
  salarioBruto: number
  salarioNeto: number
  irpf: number
  cotizacionesTrabajador: number
  cotizacionesEmpresa: CotizacionesEmpresa
  costeTotal: number
  costeMensual: number
  costeAnual: number
}

const COLORS = ["#10b981", "#ef4444"] // Verde para salario, Rojo para costes

export default function CalculadoraCosteTotalEmpresa() {
  const [modoCalculo, setModoCalculo] = useState<"bruto" | "neto">("bruto")
  const [salarioBruto, setSalarioBruto] = useState<string>("35000")
  const [salarioNeto, setSalarioNeto] = useState<string>("28000")
  const [tipoContrato, setTipoContrato] = useState<"indefinido" | "temporal">("indefinido")
  const [situacionFamiliar, setSituacionFamiliar] = useState<"soltero" | "casado" | "viudo">("soltero")
  const [numeroHijos, setNumeroHijos] = useState<string>("0")
  const [discapacidad, setDiscapacidad] = useState<boolean>(false)
  const [resultado, setResultado] = useState<ResultadoCalculo | null>(null)

  // Función para calcular IRPF
  const calcularIRPF = (salarioBruto: number, situacion: string, hijos: number, discapacidad: boolean): number => {
    let baseImponible = salarioBruto

    // Deducción personal
    let deduccionPersonal = 5550 // Base 2025
    if (situacion === "casado") deduccionPersonal += 3400
    if (situacion === "viudo") deduccionPersonal += 2150

    // Deducción por hijos
    if (hijos > 0) {
      deduccionPersonal += hijos <= 2 ? hijos * 2400 : 2 * 2400 + (hijos - 2) * 2700
    }

    // Deducción por discapacidad
    if (discapacidad) deduccionPersonal += 3000

    baseImponible = Math.max(0, baseImponible - deduccionPersonal)

    // Tramos IRPF 2025
    let irpf = 0
    if (baseImponible <= 12450) {
      irpf = baseImponible * 0.19
    } else if (baseImponible <= 20200) {
      irpf = 12450 * 0.19 + (baseImponible - 12450) * 0.24
    } else if (baseImponible <= 35200) {
      irpf = 12450 * 0.19 + 7750 * 0.24 + (baseImponible - 20200) * 0.3
    } else if (baseImponible <= 60000) {
      irpf = 12450 * 0.19 + 7750 * 0.24 + 15000 * 0.3 + (baseImponible - 35200) * 0.37
    } else if (baseImponible <= 300000) {
      irpf = 12450 * 0.19 + 7750 * 0.24 + 15000 * 0.3 + 24800 * 0.37 + (baseImponible - 60000) * 0.45
    } else {
      irpf = 12450 * 0.19 + 7750 * 0.24 + 15000 * 0.3 + 24800 * 0.37 + 240000 * 0.45 + (baseImponible - 300000) * 0.47
    }

    return Math.round(irpf)
  }

  // Función para calcular cotizaciones del trabajador
  const calcularCotizacionesTrabajador = (salarioBruto: number): number => {
    const baseCotizacion = Math.min(salarioBruto, 53946) // Base máxima 2025
    return Math.round(baseCotizacion * 0.0635) // 6.35% total trabajador
  }

  // Función para calcular cotizaciones de la empresa
  const calcularCotizacionesEmpresa = (salarioBruto: number, tipoContrato: string): CotizacionesEmpresa => {
    const baseCotizacion = Math.min(salarioBruto, 53946) // Base máxima 2025

    const contingenciasComunes = Math.round(baseCotizacion * 0.236) // 23.6%
    const formacionProfesional = Math.round(baseCotizacion * 0.006) // 0.6%
    const fogasa = Math.round(baseCotizacion * 0.002) // 0.2%

    // Desempleo varía según tipo de contrato
    const tipoDesempleo = tipoContrato === "indefinido" ? 0.055 : 0.067 // 5.5% indefinido, 6.7% temporal
    const desempleo = Math.round(baseCotizacion * tipoDesempleo)

    const total = contingenciasComunes + desempleo + formacionProfesional + fogasa

    return {
      contingenciasComunes,
      desempleo,
      formacionProfesional,
      fogasa,
      total,
    }
  }

  // Función para calcular salario bruto desde neto (proceso inverso)
  const calcularBrutoDesdeNeto = (
    salarioNetoObjetivo: number,
    situacion: string,
    hijos: number,
    discapacidad: boolean,
    tipoContrato: string,
  ): number => {
    let brutoPrueba = salarioNetoObjetivo * 1.4
    let iteraciones = 0
    const maxIteraciones = 50
    const tolerancia = 10

    while (iteraciones < maxIteraciones) {
      const irpf = calcularIRPF(brutoPrueba, situacion, hijos, discapacidad)
      const cotizacionesTrabajador = calcularCotizacionesTrabajador(brutoPrueba)
      const netoCalculado = brutoPrueba - irpf - cotizacionesTrabajador
      const diferencia = netoCalculado - salarioNetoObjetivo

      if (Math.abs(diferencia) <= tolerancia) {
        break
      }

      if (diferencia > 0) {
        brutoPrueba -= Math.abs(diferencia) * 0.7
      } else {
        brutoPrueba += Math.abs(diferencia) * 0.7
      }
      iteraciones++
    }
    return Math.round(brutoPrueba)
  }

  // Función principal de cálculo
  const calcular = () => {
    let salarioBrutoFinal: number

    if (modoCalculo === "bruto") {
      salarioBrutoFinal = Number.parseFloat(salarioBruto) || 0
    } else {
      const salarioNetoObjetivo = Number.parseFloat(salarioNeto) || 0
      salarioBrutoFinal = calcularBrutoDesdeNeto(
        salarioNetoObjetivo,
        situacionFamiliar,
        Number.parseInt(numeroHijos) || 0,
        discapacidad,
        tipoContrato,
      )
    }

    const irpf = calcularIRPF(salarioBrutoFinal, situacionFamiliar, Number.parseInt(numeroHijos) || 0, discapacidad)
    const cotizacionesTrabajador = calcularCotizacionesTrabajador(salarioBrutoFinal)
    const cotizacionesEmpresa = calcularCotizacionesEmpresa(salarioBrutoFinal, tipoContrato)
    const salarioNetoFinal = salarioBrutoFinal - irpf - cotizacionesTrabajador
    const costeTotal = salarioBrutoFinal + cotizacionesEmpresa.total

    setResultado({
      salarioBruto: salarioBrutoFinal,
      salarioNeto: salarioNetoFinal,
      irpf,
      cotizacionesTrabajador,
      cotizacionesEmpresa,
      costeTotal,
      costeMensual: Math.round(costeTotal / 12),
      costeAnual: costeTotal,
    })
  }

  useEffect(() => {
    calcular()
  }, [modoCalculo, salarioBruto, salarioNeto, tipoContrato, situacionFamiliar, numeroHijos, discapacidad])

  const chartData = resultado
    ? [
        { name: "Salario Bruto", value: resultado.salarioBruto },
        { name: "Cotizaciones Empresa", value: resultado.cotizacionesEmpresa.total },
      ]
    : []

  return (
    <div className="grid lg:grid-cols-2 gap-8" id="calculadora">
      {/* Columna de Inputs */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Calculator className="h-6 w-6 text-blue-600" />
            Configura tu Cálculo
          </CardTitle>
          <CardDescription>Ajusta los parámetros para obtener el coste exacto.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            value={modoCalculo}
            onValueChange={(value) => setModoCalculo(value as "bruto" | "neto")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="bruto" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Desde Salario Bruto
              </TabsTrigger>
              <TabsTrigger value="neto" className="flex items-center gap-2">
                <ArrowLeftRight className="h-4 w-4" />
                Desde Salario Neto
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bruto" className="mt-6">
              <div className="space-y-2">
                <Label htmlFor="salario-bruto" className="text-lg">
                  Salario Bruto Anual (€)
                </Label>
                <Input
                  id="salario-bruto"
                  type="number"
                  value={salarioBruto}
                  onChange={(e) => setSalarioBruto(e.target.value)}
                  placeholder="Ej: 35000"
                  className="text-xl h-12"
                />
              </div>
            </TabsContent>

            <TabsContent value="neto" className="mt-6">
              <div className="space-y-2">
                <Label htmlFor="salario-neto" className="text-lg">
                  Salario Neto Anual (€)
                </Label>
                <Input
                  id="salario-neto"
                  type="number"
                  value={salarioNeto}
                  onChange={(e) => setSalarioNeto(e.target.value)}
                  placeholder="Ej: 28000"
                  className="text-xl h-12"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="space-y-6 mt-8">
            <div className="space-y-4 p-4 border rounded-lg">
              <h3 className="font-semibold flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-500" />
                Datos del Contrato
              </h3>
              <div className="grid sm:grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="tipo-contrato">Tipo de Contrato</Label>
                  <Select
                    value={tipoContrato}
                    onValueChange={(value) => setTipoContrato(value as "indefinido" | "temporal")}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="indefinido">Indefinido General</SelectItem>
                      <SelectItem value="temporal">Temporal / Obra y Servicio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-4 p-4 border rounded-lg">
              <h3 className="font-semibold flex items-center gap-2">
                <User className="h-5 w-5 text-blue-500" />
                Datos Personales (para IRPF)
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="situacion-familiar">Situación Familiar</Label>
                  <Select
                    value={situacionFamiliar}
                    onValueChange={(value) => setSituacionFamiliar(value as "soltero" | "casado" | "viudo")}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="soltero">Soltero/a, divorciado/a</SelectItem>
                      <SelectItem value="casado">Casado/a (cónyuge &lt; 1500€/año)</SelectItem>
                      <SelectItem value="viudo">Viudo/a</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="numero-hijos">Nº Hijos a cargo</Label>
                  <Input
                    id="numero-hijos"
                    type="number"
                    min="0"
                    max="10"
                    value={numeroHijos}
                    onChange={(e) => setNumeroHijos(e.target.value)}
                    placeholder="0"
                  />
                </div>
                <div className="flex items-center space-x-2 pt-6 sm:col-span-2">
                  <Switch id="discapacidad" checked={discapacidad} onCheckedChange={setDiscapacidad} />
                  <Label htmlFor="discapacidad">¿El trabajador tiene una discapacidad reconocida ≥ 33%?</Label>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Columna de Resultados */}
      <div className="lg:col-span-1 space-y-8">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 sticky top-24">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-gray-800">
              <PieChartIcon className="h-6 w-6 text-blue-600" />
              Resumen de Costes
            </CardTitle>
          </CardHeader>
          <CardContent>
            {resultado ? (
              <div className="space-y-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-inner">
                  <Label className="text-sm font-medium text-gray-500">Coste Total Anual para la Empresa</Label>
                  <div className="text-5xl font-bold text-blue-600 my-2">
                    {resultado.costeTotal.toLocaleString("es-ES", {
                      style: "currency",
                      currency: "EUR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </div>
                  <div className="text-lg font-semibold text-gray-700">
                    (
                    {resultado.costeMensual.toLocaleString("es-ES", {
                      style: "currency",
                      currency: "EUR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}{" "}
                    / mes)
                  </div>
                </div>

                <div style={{ width: "100%", height: 250 }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => `${value.toLocaleString("es-ES")}€`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-4">
                  {/* Desglose Empresa */}
                  <div className="p-4 border rounded-lg bg-white/50">
                    <h4 className="font-semibold flex items-center gap-2 mb-2">
                      <Building2 className="h-5 w-5 text-red-500" />
                      Coste para la Empresa
                    </h4>
                    <div className="flex justify-between text-sm">
                      <span>Salario Bruto Anual</span>{" "}
                      <span className="font-mono">{resultado.salarioBruto.toLocaleString("es-ES")}€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>+ Cotizaciones S.S.</span>{" "}
                      <span className="font-mono text-red-600">
                        +{resultado.cotizacionesEmpresa.total.toLocaleString("es-ES")}€
                      </span>
                    </div>
                    <div className="flex justify-between text-base font-bold border-t mt-2 pt-2">
                      <span>= COSTE TOTAL</span>{" "}
                      <span className="font-mono text-blue-600">{resultado.costeTotal.toLocaleString("es-ES")}€</span>
                    </div>
                  </div>
                  {/* Desglose Trabajador */}
                  <div className="p-4 border rounded-lg bg-white/50">
                    <h4 className="font-semibold flex items-center gap-2 mb-2">
                      <Wallet className="h-5 w-5 text-green-600" />
                      Salario del Trabajador
                    </h4>
                    <div className="flex justify-between text-sm">
                      <span>Salario Bruto Anual</span>{" "}
                      <span className="font-mono">{resultado.salarioBruto.toLocaleString("es-ES")}€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>- IRPF</span>{" "}
                      <span className="font-mono text-red-600">-{resultado.irpf.toLocaleString("es-ES")}€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>- Cotizaciones S.S.</span>{" "}
                      <span className="font-mono text-red-600">
                        -{resultado.cotizacionesTrabajador.toLocaleString("es-ES")}€
                      </span>
                    </div>
                    <div className="flex justify-between text-base font-bold border-t mt-2 pt-2">
                      <span>= SALARIO NETO</span>{" "}
                      <span className="font-mono text-green-600">{resultado.salarioNeto.toLocaleString("es-ES")}€</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p>Los resultados aparecerán aquí.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
