"use client"
import { useState } from "react"
import { Calculator, Download, Info, Wallet, Building, FileText, ClipboardList } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

// Datos actualizados 2025
const TRAMOS_IRPF_2025 = [
  { desde: 0, hasta: 12450, tipo: 19 },
  { desde: 12450, hasta: 20200, tipo: 24 },
  { desde: 20200, hasta: 35200, tipo: 30 },
  { desde: 35200, hasta: 60000, tipo: 37 },
  { desde: 60000, hasta: Number.POSITIVE_INFINITY, tipo: 47 },
]

const GRUPOS_TARIFA = [
  { id: "1", nombre: "Ingenieros y Licenciados" },
  { id: "2", nombre: "Ingenieros Técnicos, Peritos y Ayudantes Titulados" },
  { id: "3", nombre: "Jefes Administrativos y de Taller" },
  { id: "4", nombre: "Ayudantes no Titulados" },
  { id: "5", nombre: "Oficiales Administrativos" },
  { id: "6", nombre: "Subalternos" },
  { id: "7", nombre: "Auxiliares Administrativos" },
  { id: "8", nombre: "Oficiales de primera y segunda" },
  { id: "9", nombre: "Oficiales de tercera y Especialistas" },
  { id: "10", nombre: "Peones" },
  { id: "11", nombre: "Trabajadores menores de 18 años" },
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
  const [grupoTarifa, setGrupoTarifa] = useState("1")
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

    const salarioBrutoAnual = pagasExtra === "prorrateadas" ? bruto * 12 : bruto * 14
    const cotizacionesTrabajadorAnual = salarioBrutoAnual * 0.0635
    let baseImponible = salarioBrutoAnual - cotizacionesTrabajadorAnual
    let deducciones = MINIMO_PERSONAL_2025
    deducciones += hijos * MINIMO_POR_HIJO
    if (discapacidad) deducciones += MINIMO_DISCAPACIDAD
    deducciones += Math.min(pensiones, 1500)
    baseImponible = Math.max(0, baseImponible - deducciones)

    let irpf = 0
    let baseRestante = baseImponible
    for (const tramo of TRAMOS_IRPF_2025) {
      if (baseRestante <= 0) break
      const baseTramo = Math.min(baseRestante, tramo.hasta - tramo.desde)
      irpf += baseTramo * (tramo.tipo / 100)
      baseRestante -= baseTramo
    }

    const cotizacionesEmpresaAnual = salarioBrutoAnual * 0.309
    const salarioNetoAnual = salarioBrutoAnual - cotizacionesTrabajadorAnual - irpf

    const resultadosCalculados: NominaResult = {
      salarioBrutoMensual: pagasExtra === "prorrateadas" ? bruto : salarioBrutoAnual / 14,
      salarioBrutoAnual,
      cotizacionesTrabajadorMensual: cotizacionesTrabajadorAnual / 12,
      cotizacionesTrabajadorAnual,
      irpfMensual: irpf / 12,
      irpfAnual: irpf,
      salarioNetoMensual: salarioNetoAnual / 12,
      salarioNetoAnual,
      cotizacionesEmpresaMensual: cotizacionesEmpresaAnual / 12,
      cotizacionesEmpresaAnual,
      costeTotalEmpresaMensual: (salarioBrutoAnual + cotizacionesEmpresaAnual) / 12,
      costeTotalEmpresaAnual: salarioBrutoAnual + cotizacionesEmpresaAnual,
      baseImponible,
      deducciones,
    }
    setResultados(resultadosCalculados)
  }

  const exportarResultados = () => {
    if (!resultados) return
    const contenido = `CALCULADORA DE NÓMINA 2025 - RESULTADOS\n=====================================\n\nDATOS INTRODUCIDOS:\n- Salario Bruto Mensual: ${resultados.salarioBrutoMensual.toFixed(2)}€\n- Número de Hijos: ${numHijos || 0}\n- Discapacidad: ${discapacidad ? "Sí" : "No"}\n- Plan de Pensiones: ${planPensiones || 0}€\n- Pagas Extra: ${pagasExtra}\n\nRESULTADOS MENSUALES:\n- Salario Bruto: ${resultados.salarioBrutoMensual.toFixed(2)}€\n- Cotizaciones SS: -${resultados.cotizacionesTrabajadorMensual.toFixed(2)}€\n- Retención IRPF: -${resultados.irpfMensual.toFixed(2)}€\n- SALARIO NETO: ${resultados.salarioNetoMensual.toFixed(2)}€\n\nRESULTADOS ANUALES:\n- Salario Bruto: ${resultados.salarioBrutoAnual.toFixed(2)}€\n- Cotizaciones SS: -${resultados.cotizacionesTrabajadorAnual.toFixed(2)}€\n- Retención IRPF: -${resultados.irpfAnual.toFixed(2)}€\n- SALARIO NETO: ${resultados.salarioNetoAnual.toFixed(2)}€\n\nCOSTE PARA LA EMPRESA:\n- Cotizaciones Empresa (mensual): ${resultados.cotizacionesEmpresaMensual.toFixed(2)}€\n- COSTE TOTAL MENSUAL: ${resultados.costeTotalEmpresaMensual.toFixed(2)}€\n- COSTE TOTAL ANUAL: ${resultados.costeTotalEmpresaAnual.toFixed(2)}€\n\nCalculado en: ${new Date().toLocaleDateString("es-ES")}\nFuente: Calculord.com`
    const blob = new Blob([contenido], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "calculo-nomina-2025.txt"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-xl">
              <Calculator className="h-6 w-6 text-purple-600" />
              <span>Datos para el Cálculo</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 p-4 border rounded-lg">
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

            <div className="space-y-4 p-4 border rounded-lg">
              <h3 className="font-semibold text-gray-900">Situación Personal y Profesional</h3>
              <div>
                <Label htmlFor="grupo-tarifa">Grupo de Cotización</Label>
                <Select value={grupoTarifa} onValueChange={setGrupoTarifa}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecciona tu grupo" />
                  </SelectTrigger>
                  <SelectContent>
                    {GRUPOS_TARIFA.map((grupo) => (
                      <SelectItem key={grupo.id} value={grupo.id}>
                        {grupo.id} - {grupo.nombre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="hijos">Número de Hijos a cargo</Label>
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
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox
                  id="discapacidad"
                  checked={discapacidad}
                  onCheckedChange={(checked) => setDiscapacidad(Boolean(checked))}
                />
                <Label htmlFor="discapacidad" className="font-medium">
                  Tengo una discapacidad (≥33%)
                </Label>
              </div>
            </div>

            <div className="space-y-4 p-4 border rounded-lg">
              <h3 className="font-semibold text-gray-900">Deducciones Adicionales</h3>
              <div>
                <Label htmlFor="plan-pensiones">Aportación Anual a Plan de Pensiones (€)</Label>
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
                <p className="text-xs text-gray-500 mt-1">Máximo deducible: 1.500€ anuales.</p>
              </div>
            </div>

            <Button
              onClick={calcularNomina}
              className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6"
              disabled={!salarioBruto}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calcular Nómina
            </Button>
          </CardContent>
        </Card>

        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center space-x-2 text-xl">
                <Info className="h-6 w-6 text-purple-600" />
                <span>Resultado de la Nómina</span>
              </span>
              {resultados && (
                <Button onClick={exportarResultados} variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {resultados ? (
              <>
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <p className="text-sm text-gray-600 mb-1">Salario Neto Mensual</p>
                  <p className="text-4xl font-bold text-purple-600">{resultados.salarioNetoMensual.toFixed(2)}€</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Salario Neto Anual: {resultados.salarioNetoAnual.toFixed(2)}€
                  </p>
                </div>

                <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-base font-semibold">
                      <div className="flex items-center space-x-2">
                        <Wallet className="h-5 w-5 text-green-600" />
                        <span>Desglose Mensual</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm space-y-2 pt-2">
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
                      <Separator className="my-2" />
                      <div className="flex justify-between font-bold text-green-600 text-base">
                        <span>Salario Neto:</span>
                        <span>{resultados.salarioNetoMensual.toFixed(2)}€</span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-base font-semibold">
                      <div className="flex items-center space-x-2">
                        <Building className="h-5 w-5 text-blue-600" />
                        <span>Coste para la Empresa</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm space-y-2 pt-2">
                      <div className="flex justify-between">
                        <span>Salario Bruto Mensual:</span>
                        <span>{resultados.salarioBrutoMensual.toFixed(2)}€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cotizaciones Empresa (30,9%):</span>
                        <span>+{resultados.cotizacionesEmpresaMensual.toFixed(2)}€</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-bold text-blue-600 text-base">
                        <span>Coste Total Mensual:</span>
                        <span>{resultados.costeTotalEmpresaMensual.toFixed(2)}€</span>
                      </div>
                      <div className="flex justify-between text-gray-500 mt-2">
                        <span>Coste Total Anual:</span>
                        <span>{resultados.costeTotalEmpresaAnual.toFixed(2)}€</span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-base font-semibold">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-orange-600" />
                        <span>Información Fiscal (Anual)</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm space-y-2 pt-2">
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
                      <div className="flex justify-between font-semibold">
                        <span>Tipo Efectivo IRPF:</span>
                        <span>
                          {resultados.salarioBrutoAnual > 0
                            ? ((resultados.irpfAnual / resultados.salarioBrutoAnual) * 100).toFixed(2)
                            : "0.00"}
                          %
                        </span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </>
            ) : (
              <div className="text-center py-10 px-4">
                <ClipboardList className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">Tu desglose aparecerá aquí</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Rellena los datos de la izquierda y pulsa 'Calcular Nómina' para ver el análisis detallado.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
