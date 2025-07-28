"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Calculator, TrendingUp, Users, Home } from "lucide-react"

// Tramos IRPF Estatal 2025
const TRAMOS_IRPF_ESTATAL = [
  { desde: 0, hasta: 12450, tipo: 19 },
  { desde: 12450, hasta: 20200, tipo: 24 },
  { desde: 20200, hasta: 35200, tipo: 30 },
  { desde: 35200, hasta: 60000, tipo: 37 },
  { desde: 60000, hasta: 300000, tipo: 47 },
  { desde: 300000, hasta: Number.POSITIVE_INFINITY, tipo: 47 },
]

// Tramos autonómicos 2025 - Todas las CCAA
const TRAMOS_AUTONOMICOS = {
  madrid: [
    { desde: 0, hasta: 12450, tipo: 0.5 },
    { desde: 12450, hasta: 17707, tipo: 1.5 },
    { desde: 17707, hasta: 33007, tipo: 1.9 },
    { desde: 33007, hasta: 53407, tipo: 2.1 },
    { desde: 53407, hasta: Number.POSITIVE_INFINITY, tipo: 2.3 },
  ],
  cataluna: [
    { desde: 0, hasta: 12450, tipo: 10.5 },
    { desde: 12450, hasta: 20200, tipo: 12 },
    { desde: 20200, hasta: 35200, tipo: 14 },
    { desde: 35200, hasta: 60000, tipo: 21.5 },
    { desde: 60000, hasta: 90000, tipo: 25.5 },
    { desde: 90000, hasta: Number.POSITIVE_INFINITY, tipo: 25.5 },
  ],
  andalucia: [
    { desde: 0, hasta: 12450, tipo: 9.5 },
    { desde: 12450, hasta: 20200, tipo: 12 },
    { desde: 20200, hasta: 28000, tipo: 15 },
    { desde: 28000, hasta: 35200, tipo: 18 },
    { desde: 35200, hasta: 60000, tipo: 22 },
    { desde: 60000, hasta: Number.POSITIVE_INFINITY, tipo: 24.5 },
  ],
  aragon: [
    { desde: 0, hasta: 12450, tipo: 10 },
    { desde: 12450, hasta: 20200, tipo: 11 },
    { desde: 20200, hasta: 35200, tipo: 15 },
    { desde: 35200, hasta: 60000, tipo: 22 },
    { desde: 60000, hasta: Number.POSITIVE_INFINITY, tipo: 24 },
  ],
  asturias: [
    { desde: 0, hasta: 12450, tipo: 10 },
    { desde: 12450, hasta: 20200, tipo: 12 },
    { desde: 20200, hasta: 35200, tipo: 15 },
    { desde: 35200, hasta: 60000, tipo: 23 },
    { desde: 60000, hasta: Number.POSITIVE_INFINITY, tipo: 25 },
  ],
  baleares: [
    { desde: 0, hasta: 12450, tipo: 10 },
    { desde: 12450, hasta: 20200, tipo: 12.5 },
    { desde: 20200, hasta: 30000, tipo: 15.5 },
    { desde: 30000, hasta: 60000, tipo: 22.5 },
    { desde: 60000, hasta: Number.POSITIVE_INFINITY, tipo: 24.5 },
  ],
  canarias: [
    { desde: 0, hasta: 12450, tipo: 9.5 },
    { desde: 12450, hasta: 20200, tipo: 11.5 },
    { desde: 20200, hasta: 35200, tipo: 13.5 },
    { desde: 35200, hasta: 60000, tipo: 19.5 },
    { desde: 60000, hasta: Number.POSITIVE_INFINITY, tipo: 22.5 },
  ],
  cantabria: [
    { desde: 0, hasta: 12450, tipo: 10 },
    { desde: 12450, hasta: 20200, tipo: 12 },
    { desde: 20200, hasta: 35200, tipo: 15 },
    { desde: 35200, hasta: 60000, tipo: 22 },
    { desde: 60000, hasta: Number.POSITIVE_INFINITY, tipo: 24 },
  ],
  castillalamancha: [
    { desde: 0, hasta: 12450, tipo: 9.5 },
    { desde: 12450, hasta: 20200, tipo: 12 },
    { desde: 20200, hasta: 35200, tipo: 15 },
    { desde: 35200, hasta: 60000, tipo: 22 },
    { desde: 60000, hasta: Number.POSITIVE_INFINITY, tipo: 24 },
  ],
  castillayleon: [
    { desde: 0, hasta: 12450, tipo: 9.5 },
    { desde: 12450, hasta: 20200, tipo: 12 },
    { desde: 20200, hasta: 35200, tipo: 15 },
    { desde: 35200, hasta: 60000, tipo: 22 },
    { desde: 60000, hasta: Number.POSITIVE_INFINITY, tipo: 24 },
  ],
  extremadura: [
    { desde: 0, hasta: 12450, tipo: 9.5 },
    { desde: 12450, hasta: 20200, tipo: 12 },
    { desde: 20200, hasta: 35200, tipo: 15 },
    { desde: 35200, hasta: 60000, tipo: 22 },
    { desde: 60000, hasta: Number.POSITIVE_INFINITY, tipo: 24 },
  ],
  galicia: [
    { desde: 0, hasta: 12450, tipo: 9.5 },
    { desde: 12450, hasta: 20200, tipo: 12 },
    { desde: 20200, hasta: 35200, tipo: 15 },
    { desde: 35200, hasta: 60000, tipo: 21.5 },
    { desde: 60000, hasta: Number.POSITIVE_INFINITY, tipo: 24.5 },
  ],
  murcia: [
    { desde: 0, hasta: 12450, tipo: 9.5 },
    { desde: 12450, hasta: 20200, tipo: 12 },
    { desde: 20200, hasta: 35200, tipo: 15 },
    { desde: 35200, hasta: 60000, tipo: 22 },
    { desde: 60000, hasta: Number.POSITIVE_INFINITY, tipo: 24 },
  ],
  navarra: [
    { desde: 0, hasta: 12450, tipo: 10.5 },
    { desde: 12450, hasta: 20200, tipo: 13 },
    { desde: 20200, hasta: 35200, tipo: 15.5 },
    { desde: 35200, hasta: 60000, tipo: 21.5 },
    { desde: 60000, hasta: Number.POSITIVE_INFINITY, tipo: 23.5 },
  ],
  paisvasco: [
    { desde: 0, hasta: 12450, tipo: 10 },
    { desde: 12450, hasta: 20200, tipo: 12.5 },
    { desde: 20200, hasta: 35200, tipo: 17.5 },
    { desde: 35200, hasta: 60000, tipo: 21.5 },
    { desde: 60000, hasta: Number.POSITIVE_INFINITY, tipo: 23.5 },
  ],
  larioja: [
    { desde: 0, hasta: 12450, tipo: 9.5 },
    { desde: 12450, hasta: 20200, tipo: 12 },
    { desde: 20200, hasta: 35200, tipo: 15 },
    { desde: 35200, hasta: 60000, tipo: 22 },
    { desde: 60000, hasta: Number.POSITIVE_INFINITY, tipo: 24 },
  ],
  valencia: [
    { desde: 0, hasta: 12450, tipo: 10 },
    { desde: 12450, hasta: 20200, tipo: 12 },
    { desde: 20200, hasta: 35200, tipo: 15 },
    { desde: 35200, hasta: 60000, tipo: 21.5 },
    { desde: 60000, hasta: Number.POSITIVE_INFINITY, tipo: 24.5 },
  ],
}

// Mínimos personales y familiares 2025
const MINIMOS = {
  personal: 5550,
  mayores65: 1400,
  mayores75: 1400,
  discapacidad: 3000,
  discapacidadGrave: 9000,
  descendiente: 2400,
  descendienteMenor3: 2800,
  ascendiente: 1150,
  ascendienteMayor65: 1400,
  ascendienteMayor75: 1400,
}

interface ResultadoIRPF {
  baseImponible: number
  cuotaEstatal: number
  cuotaAutonomica: number
  cuotaTotal: number
  tipoMedio: number
  tipoMarginal: number
  detalleTramos: Array<{
    desde: number
    hasta: number
    base: number
    tipo: number
    cuota: number
  }>
}

export default function CalculadoraIRPF() {
  const [ingresos, setIngresos] = useState<string>("")
  const [comunidad, setComunidad] = useState<string>("madrid")
  const [situacionFamiliar, setSituacionFamiliar] = useState<string>("soltero")
  const [hijos, setHijos] = useState<string>("0")
  const [edad, setEdad] = useState<string>("menor65")
  const [discapacidad, setDiscapacidad] = useState<string>("ninguna")
  const [resultado, setResultado] = useState<ResultadoIRPF | null>(null)

  const calcularIRPF = () => {
    const ingresosNum = Number.parseFloat(ingresos) || 0
    if (ingresosNum <= 0) return

    // Calcular mínimos aplicables
    let minimoPersonal = MINIMOS.personal
    if (edad === "mayor65") minimoPersonal += MINIMOS.mayores65
    if (edad === "mayor75") minimoPersonal += MINIMOS.mayores75

    let minimoFamiliar = 0
    const numHijos = Number.parseInt(hijos) || 0
    minimoFamiliar += numHijos * MINIMOS.descendiente

    if (discapacidad === "normal") minimoPersonal += MINIMOS.discapacidad
    if (discapacidad === "grave") minimoPersonal += MINIMOS.discapacidadGrave

    // Base imponible (simplificado)
    const baseImponible = Math.max(0, ingresosNum - minimoPersonal - minimoFamiliar)

    // Calcular cuota estatal
    let cuotaEstatal = 0
    let baseRestante = baseImponible
    const detalleTramos: Array<{ desde: number; hasta: number; base: number; tipo: number; cuota: number }> = []

    for (const tramo of TRAMOS_IRPF_ESTATAL) {
      if (baseRestante <= 0) break

      const baseTramo = Math.min(baseRestante, tramo.hasta - tramo.desde)
      const cuotaTramo = baseTramo * (tramo.tipo / 100)

      cuotaEstatal += cuotaTramo
      detalleTramos.push({
        desde: tramo.desde,
        hasta: Math.min(tramo.hasta, baseImponible),
        base: baseTramo,
        tipo: tramo.tipo,
        cuota: cuotaTramo,
      })

      baseRestante -= baseTramo
    }

    // Calcular cuota autonómica
    let cuotaAutonomica = 0
    const tramosAuto = TRAMOS_AUTONOMICOS[comunidad as keyof typeof TRAMOS_AUTONOMICOS] || TRAMOS_AUTONOMICOS.madrid
    baseRestante = baseImponible

    for (const tramo of tramosAuto) {
      if (baseRestante <= 0) break

      const baseTramo = Math.min(baseRestante, tramo.hasta - tramo.desde)
      cuotaAutonomica += baseTramo * (tramo.tipo / 100)
      baseRestante -= baseTramo
    }

    const cuotaTotal = cuotaEstatal + cuotaAutonomica
    const tipoMedio = baseImponible > 0 ? (cuotaTotal / baseImponible) * 100 : 0

    // Tipo marginal (último tramo aplicado)
    const ultimoTramoEstatal = TRAMOS_IRPF_ESTATAL.find((t) => baseImponible > t.desde && baseImponible <= t.hasta)
    const ultimoTramoAuto = tramosAuto.find((t) => baseImponible > t.desde && baseImponible <= t.hasta)
    const tipoMarginal = (ultimoTramoEstatal?.tipo || 0) + (ultimoTramoAuto?.tipo || 0)

    setResultado({
      baseImponible,
      cuotaEstatal,
      cuotaAutonomica,
      cuotaTotal,
      tipoMedio,
      tipoMarginal,
      detalleTramos: detalleTramos.filter((t) => t.base > 0),
    })
  }

  useEffect(() => {
    if (ingresos) {
      calcularIRPF()
    }
  }, [ingresos, comunidad, situacionFamiliar, hijos, edad, discapacidad])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const formatPercentage = (percentage: number) => {
    return `${percentage.toFixed(2)}%`
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Calculator className="h-16 w-16 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Calculadora IRPF 2025</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calcula tu Impuesto sobre la Renta con los tramos actualizados de 2025. Incluye todas las Comunidades
          Autónomas y deducciones aplicables.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Panel de Entrada */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <span>Datos para el Cálculo</span>
            </CardTitle>
            <CardDescription>Introduce tus datos para calcular el IRPF correspondiente</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="ingresos">Ingresos Anuales Brutos (€)</Label>
              <Input
                id="ingresos"
                type="number"
                placeholder="Ej: 35000"
                value={ingresos}
                onChange={(e) => setIngresos(e.target.value)}
                className="text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="comunidad">Comunidad Autónoma</Label>
              <Select value={comunidad} onValueChange={setComunidad}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu comunidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="andalucia">Andalucía</SelectItem>
                  <SelectItem value="aragon">Aragón</SelectItem>
                  <SelectItem value="asturias">Asturias</SelectItem>
                  <SelectItem value="baleares">Islas Baleares</SelectItem>
                  <SelectItem value="canarias">Canarias</SelectItem>
                  <SelectItem value="cantabria">Cantabria</SelectItem>
                  <SelectItem value="castillalamancha">Castilla-La Mancha</SelectItem>
                  <SelectItem value="castillayleon">Castilla y León</SelectItem>
                  <SelectItem value="cataluna">Cataluña</SelectItem>
                  <SelectItem value="extremadura">Extremadura</SelectItem>
                  <SelectItem value="galicia">Galicia</SelectItem>
                  <SelectItem value="madrid">Madrid</SelectItem>
                  <SelectItem value="murcia">Murcia</SelectItem>
                  <SelectItem value="navarra">Navarra</SelectItem>
                  <SelectItem value="paisvasco">País Vasco</SelectItem>
                  <SelectItem value="larioja">La Rioja</SelectItem>
                  <SelectItem value="valencia">Valencia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="situacion">Situación Familiar</Label>
              <Select value={situacionFamiliar} onValueChange={setSituacionFamiliar}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu situación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="soltero">Soltero/a</SelectItem>
                  <SelectItem value="casado">Casado/a</SelectItem>
                  <SelectItem value="viudo">Viudo/a</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hijos">Número de Hijos</Label>
              <Select value={hijos} onValueChange={setHijos}>
                <SelectTrigger>
                  <SelectValue placeholder="Número de hijos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0 hijos</SelectItem>
                  <SelectItem value="1">1 hijo</SelectItem>
                  <SelectItem value="2">2 hijos</SelectItem>
                  <SelectItem value="3">3 hijos</SelectItem>
                  <SelectItem value="4">4 o más hijos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edad">Edad</Label>
              <Select value={edad} onValueChange={setEdad}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu edad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="menor65">Menor de 65 años</SelectItem>
                  <SelectItem value="mayor65">Entre 65 y 75 años</SelectItem>
                  <SelectItem value="mayor75">Mayor de 75 años</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="discapacidad">Discapacidad</Label>
              <Select value={discapacidad} onValueChange={setDiscapacidad}>
                <SelectTrigger>
                  <SelectValue placeholder="Grado de discapacidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ninguna">Sin discapacidad</SelectItem>
                  <SelectItem value="normal">Discapacidad 33-65%</SelectItem>
                  <SelectItem value="grave">Discapacidad +65%</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={calcularIRPF} className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
              <Calculator className="mr-2 h-5 w-5" />
              Calcular IRPF
            </Button>
          </CardContent>
        </Card>

        {/* Panel de Resultados */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-green-600" />
              <span>Resultado del Cálculo</span>
            </CardTitle>
            <CardDescription>Desglose completo de tu IRPF 2025</CardDescription>
          </CardHeader>
          <CardContent>
            {resultado ? (
              <div className="space-y-6">
                {/* Resumen Principal */}
                <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Base Imponible:</span>
                    <span className="text-lg font-bold text-blue-600">{formatCurrency(resultado.baseImponible)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Cuota Estatal:</span>
                    <span className="text-lg font-semibold text-gray-900">
                      {formatCurrency(resultado.cuotaEstatal)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Cuota Autonómica:</span>
                    <span className="text-lg font-semibold text-gray-900">
                      {formatCurrency(resultado.cuotaAutonomica)}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">IRPF Total:</span>
                    <span className="text-2xl font-bold text-red-600">{formatCurrency(resultado.cuotaTotal)}</span>
                  </div>
                </div>

                {/* Tipos Impositivos */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">{formatPercentage(resultado.tipoMedio)}</div>
                    <div className="text-sm text-gray-600">Tipo Medio</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-600">{formatPercentage(resultado.tipoMarginal)}</div>
                    <div className="text-sm text-gray-600">Tipo Marginal</div>
                  </div>
                </div>

                {/* Detalle por Tramos */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Detalle por Tramos (Estatal):</h4>
                  <div className="space-y-2">
                    {resultado.detalleTramos.map((tramo, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded text-sm">
                        <div className="flex justify-between">
                          <span>
                            {formatCurrency(tramo.desde)} -{" "}
                            {tramo.hasta === Number.POSITIVE_INFINITY ? "∞" : formatCurrency(tramo.hasta)}
                          </span>
                          <span className="font-medium">{tramo.tipo}%</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                          <span>Base: {formatCurrency(tramo.base)}</span>
                          <span>Cuota: {formatCurrency(tramo.cuota)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Salario Neto Estimado */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">Ingresos Netos Estimados:</span>
                    <span className="text-2xl font-bold text-green-600">
                      {formatCurrency(Number.parseFloat(ingresos) - resultado.cuotaTotal)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    * Estimación sin considerar otras deducciones ni retenciones aplicadas
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Introduce tus datos para ver el cálculo del IRPF</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Información Adicional */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Home className="h-5 w-5 text-blue-600" />
            <span>Información Importante</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">⚠️ Limitaciones del Cálculo</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Este cálculo es orientativo y simplificado</li>
                <li>• No incluye todas las deducciones posibles</li>
                <li>• No considera retenciones ya aplicadas</li>
                <li>• Para cálculos exactos, consulta a un profesional</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">📋 Deducciones No Incluidas</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Gastos deducibles (vivienda, educación, etc.)</li>
                <li>• Aportaciones a planes de pensiones</li>
                <li>• Donativos y otras deducciones específicas</li>
                <li>• Compensación de pérdidas patrimoniales</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
