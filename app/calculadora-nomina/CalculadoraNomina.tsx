"use client"
import { useState } from "react"
import { Calculator, Download, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

// Datos actualizados 2025
const TRAMOS_IRPF_2025 = [
  { desde: 0, hasta: 12450, tipo: 19 },
  { desde: 12450, hasta: 20200, tipo: 24 },
  { desde: 20200, hasta: 35200, tipo: 30 },
  { desde: 35200, hasta: 60000, tipo: 37 },
  { desde: 60000, hasta: Number.POSITIVE_INFINITY, tipo: 47 },
]

const GRUPOS_TARIFA = [
  { id: "1", nombre: "Ingenieros y Licenciados", base: 1500 },
  { id: "2", nombre: "Ingenieros Técnicos, Peritos y Ayudantes Titulados", base: 1200 },
  { id: "3", nombre: "Jefes Administrativos y de Taller", base: 1000 },
  { id: "4", nombre: "Ayudantes no Titulados", base: 900 },
  { id: "5", nombre: "Oficiales Administrativos", base: 850 },
  { id: "6", nombre: "Subalternos", base: 800 },
  { id: "7", nombre: "Auxiliares Administrativos", base: 750 },
  { id: "8", nombre: "Oficiales de primera y segunda", base: 900 },
  { id: "9", nombre: "Oficiales de tercera y Especialistas", base: 850 },
  { id: "10", nombre: "Peones", base: 700 },
  { id: "11", nombre: "Trabajadores menores de 18 años", base: 650 },
]

const MINIMO_PERSONAL_2025 = 5550
const MINIMO_POR_HIJO = 2400
const MINIMO_DISCAPACIDAD = 3000

interface NominaResult {
  salarioBrutoMensual: number
  salarioBrutoAnual: number
  cotizacionesTrabajadorMensual: number
  cotizacionesTrabajadorAnual: number
  irpfMensual: number
  irpfAnual: number
  salarioNetoMensual: number
  salarioNetoAnual: number
  cotizacionesEmpresaMensual: number
  cotizacionesEmpresaAnual: number
  costeTotalEmpresaMensual: number
  costeTotalEmpresaAnual: number
  baseImponible: number
  deducciones: number
}

export default function CalculadoraNomina() {
  const [salarioBruto, setSalarioBruto] = useState("")
  const [grupoTarifa, setGrupoTarifa] = useState("")
  const [numHijos, setNumHijos] = useState("")
  const [discapacidad, setDiscapacidad] = useState(false)
  const [planPensiones, setPlanPensiones] = useState("")
  const [pagasExtra, setPagasExtra] = useState("prorrateadas")
  const [resultados, setResultados] = useState<NominaResult | null>(null)

  const calcularNomina = () => {
    const bruto = Number.parseFloat(salarioBruto) || 0
    const hijos = Number.parseInt(numHijos) || 0
    const pensiones = Number.parseFloat(planPensiones) || 0

    if (bruto <= 0) return

    // Salario bruto anual (incluyendo pagas extra)
    const salarioBrutoAnual = pagasExtra === "prorrateadas" ? bruto * 12 : bruto * 14

    // Cotizaciones trabajador (6,35%)
    const cotizacionesTrabajadorAnual = salarioBrutoAnual * 0.0635

    // Base imponible IRPF
    let baseImponible = salarioBrutoAnual - cotizacionesTrabajadorAnual

    // Deducciones
    let deducciones = MINIMO_PERSONAL_2025
    deducciones += hijos * MINIMO_POR_HIJO
    if (discapacidad) deducciones += MINIMO_DISCAPACIDAD
    deducciones += Math.min(pensiones, 1500) // Máximo 1.500€ plan pensiones

    baseImponible = Math.max(0, baseImponible - deducciones)

    // Cálculo IRPF por tramos
    let irpf = 0
    let baseRestante = baseImponible

    for (const tramo of TRAMOS_IRPF_2025) {
      if (baseRestante <= 0) break

      const baseTramo = Math.min(baseRestante, tramo.hasta - tramo.desde)
      irpf += baseTramo * (tramo.tipo / 100)
      baseRestante -= baseTramo
    }

    // Cotizaciones empresa (30,9%)
    const cotizacionesEmpresaAnual = salarioBrutoAnual * 0.309

    // Salario neto anual
    const salarioNetoAnual = salarioBrutoAnual - cotizacionesTrabajadorAnual - irpf

    // Resultados mensuales
    const resultadosCalculados: NominaResult = {
      salarioBrutoMensual: bruto,
      salarioBrutoAnual: salarioBrutoAnual,
      cotizacionesTrabajadorMensual: cotizacionesTrabajadorAnual / 12,
      cotizacionesTrabajadorAnual: cotizacionesTrabajadorAnual,
      irpfMensual: irpf / 12,
      irpfAnual: irpf,
      salarioNetoMensual: salarioNetoAnual / 12,
      salarioNetoAnual: salarioNetoAnual,
      cotizacionesEmpresaMensual: cotizacionesEmpresaAnual / 12,
      cotizacionesEmpresaAnual: cotizacionesEmpresaAnual,
      costeTotalEmpresaMensual: (salarioBrutoAnual + cotizacionesEmpresaAnual) / 12,
      costeTotalEmpresaAnual: salarioBrutoAnual + cotizacionesEmpresaAnual,
      baseImponible: baseImponible,
      deducciones: deducciones,
    }

    setResultados(resultadosCalculados)
  }

  const exportarResultados = () => {
    if (!resultados) return

    const contenido = `
CALCULADORA DE NÓMINA 2025 - RESULTADOS
=====================================

DATOS INTRODUCIDOS:
- Salario Bruto Mensual: ${resultados.salarioBrutoMensual.toFixed(2)}€
- Número de Hijos: ${numHijos || 0}
- Discapacidad: ${discapacidad ? "Sí" : "No"}
- Plan de Pensiones: ${planPensiones || 0}€
- Pagas Extra: ${pagasExtra}

RESULTADOS MENSUALES:
- Salario Bruto: ${resultados.salarioBrutoMensual.toFixed(2)}€
- Cotizaciones SS: -${resultados.cotizacionesTrabajadorMensual.toFixed(2)}€
- Retención IRPF: -${resultados.irpfMensual.toFixed(2)}€
- SALARIO NETO: ${resultados.salarioNetoMensual.toFixed(2)}€

RESULTADOS ANUALES:
- Salario Bruto: ${resultados.salarioBrutoAnual.toFixed(2)}€
- Cotizaciones SS: -${resultados.cotizacionesTrabajadorAnual.toFixed(2)}€
- Retención IRPF: -${resultados.irpfAnual.toFixed(2)}€
- SALARIO NETO: ${resultados.salarioNetoAnual.toFixed(2)}€

COSTE PARA LA EMPRESA:
- Cotizaciones Empresa (mensual): ${resultados.cotizacionesEmpresaMensual.toFixed(2)}€
- COSTE TOTAL MENSUAL: ${resultados.costeTotalEmpresaMensual.toFixed(2)}€
- COSTE TOTAL ANUAL: ${resultados.costeTotalEmpresaAnual.toFixed(2)}€

Calculado en: ${new Date().toLocaleDateString("es-ES")}
Fuente: Calculord.com
    `

    const blob = new Blob([contenido], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "calculo-nomina-2025.txt"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulario */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="h-5 w-5 text-purple-600" />
                <span>Datos para el Cálculo</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Datos Salariales */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Datos Salariales</h3>

                <div>
                  <Label htmlFor="salario-bruto">Salario Bruto Mensual (€)</Label>
                  <Input
                    id="salario-bruto"
                    type="number"
                    placeholder="Ej: 2500"
                    value={salarioBruto}
                    onChange={(e) => setSalarioBruto(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="grupo-tarifa">Grupo de Tarifa</Label>
                  <Select value={grupoTarifa} onValueChange={setGrupoTarifa}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecciona tu grupo profesional" />
                    </SelectTrigger>
                    <SelectContent>
                      {GRUPOS_TARIFA.map((grupo) => (
                        <SelectItem key={grupo.id} value={grupo.id}>
                          {grupo.nombre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="pagas-extra">Pagas Extraordinarias</Label>
                  <Select value={pagasExtra} onValueChange={setPagasExtra}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="prorrateadas">Prorrateadas (12 pagas)</SelectItem>
                      <SelectItem value="separadas">Separadas (14 pagas)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              {/* Situación Personal */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Situación Personal</h3>

                <div>
                  <Label htmlFor="hijos">Número de Hijos</Label>
                  <Input
                    id="hijos"
                    type="number"
                    placeholder="0"
                    value={numHijos}
                    onChange={(e) => setNumHijos(e.target.value)}
                    min="0"
                    className="mt-1"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="discapacidad"
                    checked={discapacidad}
                    onChange={(e) => setDiscapacidad(e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="discapacidad">Discapacidad (≥33%)</Label>
                </div>
              </div>

              <Separator />

              {/* Deducciones */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Deducciones Adicionales</h3>

                <div>
                  <Label htmlFor="plan-pensiones">Plan de Pensiones Anual (€)</Label>
                  <Input
                    id="plan-pensiones"
                    type="number"
                    placeholder="0"
                    value={planPensiones}
                    onChange={(e) => setPlanPensiones(e.target.value)}
                    min="0"
                    max="1500"
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">Máximo deducible: 1.500€</p>
                </div>
              </div>

              <Button
                onClick={calcularNomina}
                className="w-full bg-purple-600 hover:bg-purple-700"
                disabled={!salarioBruto}
              >
                <Calculator className="mr-2 h-4 w-4" />
                Calcular Nómina
              </Button>
            </CardContent>
          </Card>

          {/* Resultados */}
          {resultados && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <Info className="h-5 w-5 text-purple-600" />
                    <span>Resultado de la Nómina</span>
                  </span>
                  <Button onClick={exportarResultados} variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Exportar
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Resumen Principal */}
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Salario Neto Mensual</p>
                    <p className="text-3xl font-bold text-purple-600">{resultados.salarioNetoMensual.toFixed(2)}€</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                    <div className="text-center">
                      <p className="text-gray-600">Salario Bruto</p>
                      <p className="font-semibold">{resultados.salarioBrutoMensual.toFixed(2)}€</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600">Coste Empresa</p>
                      <p className="font-semibold">{resultados.costeTotalEmpresaMensual.toFixed(2)}€</p>
                    </div>
                  </div>
                </div>

                {/* Desglose Detallado */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Desglose Detallado</h3>

                  {/* Desglose Mensual */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-3">Desglose Mensual</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Salario Bruto:</span>
                        <span className="font-medium">+{resultados.salarioBrutoMensual.toFixed(2)}€</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Cotizaciones SS (6,35%):</span>
                        <span>-{resultados.cotizacionesTrabajadorMensual.toFixed(2)}€</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Retención IRPF:</span>
                        <span>-{resultados.irpfMensual.toFixed(2)}€</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold text-green-600">
                        <span>Salario Neto:</span>
                        <span>{resultados.salarioNetoMensual.toFixed(2)}€</span>
                      </div>
                    </div>
                  </div>

                  {/* Coste Empresa */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-3">Coste para la Empresa</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Salario Bruto:</span>
                        <span>{resultados.salarioBrutoMensual.toFixed(2)}€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cotizaciones Empresa (30,9%):</span>
                        <span>+{resultados.cotizacionesEmpresaMensual.toFixed(2)}€</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold text-blue-600">
                        <span>Coste Total:</span>
                        <span>{resultados.costeTotalEmpresaMensual.toFixed(2)}€</span>
                      </div>
                    </div>
                  </div>

                  {/* Información Fiscal */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-3">Información Fiscal</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Salario Bruto Anual:</span>
                        <span>{resultados.salarioBrutoAnual.toFixed(2)}€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Base Imponible IRPF:</span>
                        <span>{resultados.baseImponible.toFixed(2)}€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Deducciones Aplicadas:</span>
                        <span>{resultados.deducciones.toFixed(2)}€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tipo Efectivo IRPF:</span>
                        <span>
                          {resultados.salarioBrutoAnual > 0
                            ? ((resultados.irpfAnual / resultados.salarioBrutoAnual) * 100).toFixed(2)
                            : "0.00"}
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
