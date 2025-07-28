"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, Building2, ArrowLeftRight, Info, TrendingUp } from "lucide-react"

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
    const tipoDesempleo = tipoContrato === "indefinido" ? 0.055 : 0.083 // 5.5% indefinido, 8.3% temporal
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
  ): number => {
    // Aproximación iterativa para encontrar el bruto que da el neto deseado
    let brutoPrueba = salarioNetoObjetivo * 1.4 // Estimación inicial
    let iteraciones = 0
    const maxIteraciones = 50
    const tolerancia = 10 // €10 de tolerancia

    while (iteraciones < maxIteraciones) {
      const irpf = calcularIRPF(brutoPrueba, situacion, hijos, discapacidad)
      const cotizacionesTrabajador = calcularCotizacionesTrabajador(brutoPrueba)
      const netoCalculado = brutoPrueba - irpf - cotizacionesTrabajador

      const diferencia = netoCalculado - salarioNetoObjetivo

      if (Math.abs(diferencia) <= tolerancia) {
        break
      }

      // Ajustar el bruto basado en la diferencia
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
      // Calcular bruto desde neto
      const salarioNetoObjetivo = Number.parseFloat(salarioNeto) || 0
      salarioBrutoFinal = calcularBrutoDesdeNeto(
        salarioNetoObjetivo,
        situacionFamiliar,
        Number.parseInt(numeroHijos) || 0,
        discapacidad,
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

  // Calcular automáticamente cuando cambien los valores
  useEffect(() => {
    calcular()
  }, [modoCalculo, salarioBruto, salarioNeto, tipoContrato, situacionFamiliar, numeroHijos, discapacidad])

  return (
    <div className="space-y-8" id="calculadora">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Building2 className="h-6 w-6 text-blue-600" />
            Calculadora Coste Total Empresa
          </CardTitle>
          <CardDescription>
            Calcula el coste real de un trabajador desde el salario bruto o neto deseado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            value={modoCalculo}
            onValueChange={(value) => setModoCalculo(value as "bruto" | "neto")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="bruto" className="flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                Desde Salario Bruto
              </TabsTrigger>
              <TabsTrigger value="neto" className="flex items-center gap-2">
                <ArrowLeftRight className="h-4 w-4" />
                Desde Salario Neto
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bruto" className="space-y-6 mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="salario-bruto">Salario Bruto Anual (€)</Label>
                    <Input
                      id="salario-bruto"
                      type="number"
                      value={salarioBruto}
                      onChange={(e) => setSalarioBruto(e.target.value)}
                      placeholder="35000"
                      className="text-lg"
                    />
                  </div>
                </div>

                <div className="space-y-4">
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
                        <SelectItem value="indefinido">Indefinido (29.9%)</SelectItem>
                        <SelectItem value="temporal">Temporal (37.2%)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="neto" className="space-y-6 mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="salario-neto">Salario Neto Deseado Anual (€)</Label>
                    <Input
                      id="salario-neto"
                      type="number"
                      value={salarioNeto}
                      onChange={(e) => setSalarioNeto(e.target.value)}
                      placeholder="28000"
                      className="text-lg"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="tipo-contrato-neto">Tipo de Contrato</Label>
                    <Select
                      value={tipoContrato}
                      onValueChange={(value) => setTipoContrato(value as "indefinido" | "temporal")}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="indefinido">Indefinido (29.9%)</SelectItem>
                        <SelectItem value="temporal">Temporal (37.2%)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Configuración común para ambos modos */}
            <div className="space-y-6 mt-6">
              <div className="grid md:grid-cols-3 gap-4">
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
                      <SelectItem value="soltero">Soltero/a</SelectItem>
                      <SelectItem value="casado">Casado/a</SelectItem>
                      <SelectItem value="viudo">Viudo/a</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="numero-hijos">Número de Hijos</Label>
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

                <div className="flex items-center space-x-2 pt-6">
                  <input
                    type="checkbox"
                    id="discapacidad"
                    checked={discapacidad}
                    onChange={(e) => setDiscapacidad(e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="discapacidad">Discapacidad ≥33%</Label>
                </div>
              </div>
            </div>
          </Tabs>
        </CardContent>
      </Card>

      {/* Resultados */}
      {resultado && (
        <div className="grid md:grid-cols-2 gap-8">
          {/* Resumen Principal */}
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-blue-600">
                <TrendingUp className="h-5 w-5" />
                Coste Total para la Empresa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {resultado.costeTotal.toLocaleString("es-ES")}€
                </div>
                <div className="text-sm text-gray-600">Coste Total Anual</div>
                <div className="text-lg font-semibold text-gray-700 mt-2">
                  {resultado.costeMensual.toLocaleString("es-ES")}€/mes
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Salario Bruto:</span>
                  <span className="font-semibold">{resultado.salarioBruto.toLocaleString("es-ES")}€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Salario Neto:</span>
                  <span className="font-semibold text-green-600">{resultado.salarioNeto.toLocaleString("es-ES")}€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Cotizaciones Empresa:</span>
                  <span className="font-semibold text-red-600">
                    +{resultado.cotizacionesEmpresa.total.toLocaleString("es-ES")}€
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-t-2 border-blue-200 font-bold text-lg">
                  <span>COSTE TOTAL:</span>
                  <span className="text-blue-600">{resultado.costeTotal.toLocaleString("es-ES")}€</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Desglose Detallado */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Desglose Completo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Deducciones del Trabajador */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">💰 Del Salario Bruto al Neto</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Salario Bruto:</span>
                    <span className="font-mono">{resultado.salarioBruto.toLocaleString("es-ES")}€</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>- IRPF:</span>
                    <span className="font-mono">-{resultado.irpf.toLocaleString("es-ES")}€</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>- SS Trabajador (6.35%):</span>
                    <span className="font-mono">-{resultado.cotizacionesTrabajador.toLocaleString("es-ES")}€</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2">
                    <span>Salario Neto:</span>
                    <span className="font-mono text-green-600">{resultado.salarioNeto.toLocaleString("es-ES")}€</span>
                  </div>
                </div>
              </div>

              {/* Cotizaciones Empresa */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🏢 Cotizaciones Empresariales</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Contingencias Comunes (23.6%):</span>
                    <span className="font-mono">
                      {resultado.cotizacionesEmpresa.contingenciasComunes.toLocaleString("es-ES")}€
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Desempleo ({tipoContrato === "indefinido" ? "5.5%" : "8.3%"}):
                    </span>
                    <span className="font-mono">
                      {resultado.cotizacionesEmpresa.desempleo.toLocaleString("es-ES")}€
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Formación Profesional (0.6%):</span>
                    <span className="font-mono">
                      {resultado.cotizacionesEmpresa.formacionProfesional.toLocaleString("es-ES")}€
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">FOGASA (0.2%):</span>
                    <span className="font-mono">{resultado.cotizacionesEmpresa.fogasa.toLocaleString("es-ES")}€</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2 text-red-600">
                    <span>Total Cotizaciones:</span>
                    <span className="font-mono">{resultado.cotizacionesEmpresa.total.toLocaleString("es-ES")}€</span>
                  </div>
                </div>
              </div>

              {/* Resumen Final */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">📊 Resumen Final</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Salario Bruto:</span>
                    <span className="font-mono">{resultado.salarioBruto.toLocaleString("es-ES")}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">+ Cotizaciones Empresa:</span>
                    <span className="font-mono text-red-600">
                      +{resultado.cotizacionesEmpresa.total.toLocaleString("es-ES")}€
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>COSTE TOTAL EMPRESA:</span>
                    <span className="font-mono text-blue-600">{resultado.costeTotal.toLocaleString("es-ES")}€</span>
                  </div>
                  <div className="text-center text-sm text-gray-500 mt-2">
                    ({resultado.costeMensual.toLocaleString("es-ES")}€ mensuales)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Información Adicional */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <Info className="h-5 w-5 text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-semibold mb-2">💡 Información importante:</p>
              <ul className="space-y-1 text-blue-700">
                <li>• Los cálculos están basados en la normativa fiscal y laboral de 2025</li>
                <li>• Los contratos temporales tienen un recargo del 8.3% vs 5.5% en desempleo</li>
                <li>• Existen bonificaciones disponibles para ciertos colectivos (jóvenes, mayores 45 años, etc.)</li>
                <li>• La base máxima de cotización para 2025 es de 4.495,50€/mes</li>
                <li>• No se incluyen otros costes como pagas extras, formación o prevención de riesgos</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
