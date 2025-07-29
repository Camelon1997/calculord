"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Calculator, ChevronsRight, DollarSign, Percent, Users } from "lucide-react"

// Data for tax brackets (state and regional)
const tramosEstatales = [
  { limite: 12450, tipo: 0.095 },
  { limite: 20200, tipo: 0.12 },
  { limite: 35200, tipo: 0.15 },
  { limite: 60000, tipo: 0.185 },
  { limite: 300000, tipo: 0.225 },
  { limite: Number.POSITIVE_INFINITY, tipo: 0.245 },
]

// Simplified regional brackets for demonstration
const tramosAutonomicos = {
  madrid: [
    { limite: 12450, tipo: 0.085 },
    { limite: 17707.2, tipo: 0.107 },
    { limite: 33007.2, tipo: 0.128 },
    { limite: 53407.2, tipo: 0.174 },
    { limite: Number.POSITIVE_INFINITY, tipo: 0.205 },
  ],
  andalucia: [
    { limite: 12450, tipo: 0.095 },
    { limite: 20200, tipo: 0.12 },
    { limite: 35200, tipo: 0.15 },
    { limite: 60000, tipo: 0.185 },
    { limite: Number.POSITIVE_INFINITY, tipo: 0.225 },
  ],
  // A real implementation would have all communities
  default: [
    { limite: 12450, tipo: 0.095 },
    { limite: 20200, tipo: 0.12 },
    { limite: 35200, tipo: 0.15 },
    { limite: 60000, tipo: 0.185 },
    { limite: 300000, tipo: 0.225 },
    { limite: Number.POSITIVE_INFINITY, tipo: 0.245 },
  ],
}

// Personal and family minimums
const minimoPersonal = 5550
const minimoPorDescendiente = [2400, 2700, 4000, 4500] // for 1st, 2nd, 3rd, 4th+
const adicionalMenor3 = 2800

export default function CalculadoraIRPF() {
  const [salarioBruto, setSalarioBruto] = useState("30000")
  const [edad, setEdad] = useState("35")
  const [comunidad, setComunidad] = useState("madrid")
  const [situacion, setSituacion] = useState("soltero")
  const [hijos, setHijos] = useState("0")
  const [hijosMenores3, setHijosMenores3] = useState("0")

  const [resultado, setResultado] = useState(null)

  const calcularIRPF = (e) => {
    e.preventDefault()

    const bruto = Number.parseFloat(salarioBruto)
    if (isNaN(bruto) || bruto < 0) return

    const numHijos = Number.parseInt(hijos)
    const numHijosMenores3 = Number.parseInt(hijosMenores3)

    // 1. Calcular cotizaciones a la Seguridad Social
    const contingenciasComunes = bruto * 0.048
    const formacion = bruto * 0.001
    const desempleo = bruto * 0.0155
    const cotizacionesSS = contingenciasComunes + formacion + desempleo

    // 2. Calcular base imponible
    const gastosDeducibles = 2000
    const baseImponibleGeneral = bruto - cotizacionesSS - gastosDeducibles

    if (baseImponibleGeneral <= 0) {
      setResultado({
        salarioNetoAnual: bruto - cotizacionesSS,
        salarioNeto12: (bruto - cotizacionesSS) / 12,
        salarioNeto14: (bruto - cotizacionesSS) / 14,
        retencionTotal: 0,
        tipoMedio: 0,
        cotizacionesSS: cotizacionesSS,
      })
      return
    }

    // 3. Calcular mínimo personal y familiar
    let minimoTotal = minimoPersonal
    if (numHijos > 0) {
      for (let i = 0; i < numHijos; i++) {
        minimoTotal += minimoPorDescendiente[Math.min(i, 3)]
      }
    }
    minimoTotal += numHijosMenores3 * adicionalMenor3

    // 4. Calcular base liquidable
    const baseLiquidable = Math.max(0, baseImponibleGeneral)

    // 5. Calcular cuota íntegra (estatal y autonómica)
    const tramosCCAA = tramosAutonomicos[comunidad] || tramosAutonomicos.default

    const calcularCuota = (base, tramos) => {
      let cuota = 0
      let baseRestante = base
      let limiteAnterior = 0
      for (const tramo of tramos) {
        if (baseRestante <= 0) break
        const baseEnTramo = Math.min(baseRestante, tramo.limite - limiteAnterior)
        cuota += baseEnTramo * tramo.tipo
        baseRestante -= baseEnTramo
        limiteAnterior = tramo.limite
      }
      return cuota
    }

    const cuotaEstatal = calcularCuota(baseLiquidable, tramosEstatales)
    const cuotaAutonomica = calcularCuota(baseLiquidable, tramosCCAA)

    // 6. Calcular reducción de cuota por mínimo
    const reduccionCuotaEstatal = calcularCuota(minimoTotal, tramosEstatales)
    const reduccionCuotaAutonomica = calcularCuota(minimoTotal, tramosCCAA)

    const cuotaEstatalFinal = Math.max(0, cuotaEstatal - reduccionCuotaEstatal)
    const cuotaAutonomicaFinal = Math.max(0, cuotaAutonomica - reduccionCuotaAutonomica)
    const retencionTotal = cuotaEstatalFinal + cuotaAutonomicaFinal

    // 7. Calcular salario neto
    const salarioNetoAnual = bruto - cotizacionesSS - retencionTotal
    const salarioNeto12 = salarioNetoAnual / 12
    const salarioNeto14 = salarioNetoAnual / 14
    const tipoMedio = bruto > 0 ? (retencionTotal / bruto) * 100 : 0

    setResultado({
      salarioNetoAnual,
      salarioNeto12,
      salarioNeto14,
      retencionTotal,
      tipoMedio,
      cotizacionesSS,
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
              <Calculator className="h-6 w-6 text-blue-600" />
              Introduce tus datos
            </CardTitle>
            <CardDescription>Rellena los campos para obtener una simulación precisa de tu IRPF.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={calcularIRPF} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="salarioBruto">Salario Bruto Anual (€)</Label>
                <Input
                  id="salarioBruto"
                  type="number"
                  value={salarioBruto}
                  onChange={(e) => setSalarioBruto(e.target.value)}
                  placeholder="Ej: 30000"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="comunidad">Comunidad Autónoma</Label>
                <Select value={comunidad} onValueChange={setComunidad}>
                  <SelectTrigger id="comunidad">
                    <SelectValue placeholder="Selecciona tu CCAA" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="madrid">Comunidad de Madrid</SelectItem>
                    <SelectItem value="catalunya">Cataluña</SelectItem>
                    <SelectItem value="andalucia">Andalucía</SelectItem>
                    <SelectItem value="valencia">Comunidad Valenciana</SelectItem>
                    <SelectItem value="galicia">Galicia</SelectItem>
                    <SelectItem value="pais_vasco">País Vasco (Foral)</SelectItem>
                    <SelectItem value="navarra">Navarra (Foral)</SelectItem>
                    <SelectItem value="default">Resto de CCAA (Territorio Común)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edad">Edad</Label>
                <Input
                  id="edad"
                  type="number"
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                  placeholder="Ej: 35"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="situacion">Situación Familiar</Label>
                <Select value={situacion} onValueChange={setSituacion}>
                  <SelectTrigger id="situacion">
                    <SelectValue placeholder="Selecciona tu situación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="soltero">Soltero/a, viudo/a, divorciado/a</SelectItem>
                    <SelectItem value="casado_conjunta">Casado/a (declaración conjunta)</SelectItem>
                    <SelectItem value="casado_separada">Casado/a (declaración separada)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hijos">Nº Hijos</Label>
                  <Input id="hijos" type="number" value={hijos} onChange={(e) => setHijos(e.target.value)} min="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hijosMenores3">Hijos &lt; 3 años</Label>
                  <Input
                    id="hijosMenores3"
                    type="number"
                    value={hijosMenores3}
                    onChange={(e) => setHijosMenores3(e.target.value)}
                    min="0"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full text-lg py-6">
                <ChevronsRight className="mr-2 h-5 w-5" /> Calcular IRPF
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-2">
        <Card className="bg-gradient-to-br from-blue-900 to-slate-900 text-white sticky top-24">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
              <BarChart />
              Resultado de la Simulación
            </CardTitle>
            <CardDescription className="text-blue-200">
              Aquí tienes el desglose de tu salario y tus impuestos.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-center min-h-[480px]">
            {resultado ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-sm text-blue-200">Salario Neto Anual</p>
                    <p className="text-3xl font-bold">
                      {resultado.salarioNetoAnual.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-sm text-blue-200">Retención Total IRPF</p>
                    <p className="text-3xl font-bold text-amber-400">
                      {resultado.retencionTotal.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-black/20 rounded-md">
                    <span className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-400" />
                      Salario Neto Mensual (12 pagas)
                    </span>
                    <span className="font-semibold text-lg">
                      {resultado.salarioNeto12.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-black/20 rounded-md">
                    <span className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-400" />
                      Salario Neto Mensual (14 pagas)
                    </span>
                    <span className="font-semibold text-lg">
                      {resultado.salarioNeto14.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-black/20 rounded-md">
                    <span className="flex items-center gap-2">
                      <Percent className="h-4 w-4 text-amber-400" />
                      Tipo Medio de Retención
                    </span>
                    <span className="font-semibold text-lg">{resultado.tipoMedio.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-black/20 rounded-md">
                    <span className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-sky-400" />
                      Cotizaciones a la S. Social
                    </span>
                    <span className="font-semibold text-lg">
                      {resultado.cotizacionesSS.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-blue-300 pt-4 border-t border-white/20">
                  <p>
                    * Este es un cálculo orientativo y no reemplaza una consulta profesional. Los resultados pueden
                    variar según deducciones específicas no contempladas en este simulador.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-blue-200">Rellena el formulario y pulsa "Calcular" para ver los resultados.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
