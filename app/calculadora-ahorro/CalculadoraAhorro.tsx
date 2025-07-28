"use client"

import { useState } from "react"
import { Calculator, PiggyBank } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ResultadoAhorro {
  capitalFinal: number
  totalAportado: number
  interesesGenerados: number
  proyeccionAnual: Array<{
    año: number
    capitalInicial: number
    aportaciones: number
    intereses: number
    capitalFinal: number
  }>
}

export default function CalculadoraAhorro() {
  const [capitalInicial, setCapitalInicial] = useState<string>("")
  const [aportacionMensual, setAportacionMensual] = useState<string>("")
  const [tasaInteres, setTasaInteres] = useState<string>("")
  const [plazoAnos, setPlazoAnos] = useState<string>("")
  const [frecuenciaCapitalizacion, setFrecuenciaCapitalizacion] = useState<string>("12")
  const [resultado, setResultado] = useState<ResultadoAhorro | null>(null)
  const [mostrarTabla, setMostrarTabla] = useState(false)

  const calcularAhorro = () => {
    const capital = Number.parseFloat(capitalInicial) || 0
    const aportacion = Number.parseFloat(aportacionMensual) || 0
    const tasa = Number.parseFloat(tasaInteres) / 100 || 0
    const años = Number.parseInt(plazoAnos) || 0
    const frecuencia = Number.parseInt(frecuenciaCapitalizacion) || 12

    if (años <= 0) return

    const proyeccion: Array<{
      año: number
      capitalInicial: number
      aportaciones: number
      intereses: number
      capitalFinal: number
    }> = []

    let capitalActual = capital
    let totalAportado = capital

    for (let año = 1; año <= años; año++) {
      const capitalInicialAño = capitalActual
      const aportacionesAño = aportacion * 12

      // Cálculo con interés compuesto
      let capitalConIntereses = capitalActual
      for (let mes = 1; mes <= 12; mes++) {
        capitalConIntereses = capitalConIntereses * (1 + tasa / frecuencia) + aportacion
      }

      const interesesAño = capitalConIntereses - capitalInicialAño - aportacionesAño

      proyeccion.push({
        año,
        capitalInicial: capitalInicialAño,
        aportaciones: aportacionesAño,
        intereses: interesesAño,
        capitalFinal: capitalConIntereses,
      })

      capitalActual = capitalConIntereses
      totalAportado += aportacionesAño
    }

    const capitalFinal = capitalActual
    const interesesGenerados = capitalFinal - totalAportado

    setResultado({
      capitalFinal,
      totalAportado,
      interesesGenerados,
      proyeccionAnual: proyeccion,
    })
  }

  const formatearMoneda = (cantidad: number): string => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(cantidad)
  }

  return (
    <div className="bg-white">
      {/* Calculadora Principal */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white text-gray-900 shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PiggyBank className="h-8 w-8 text-teal-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-teal-600">Calculadora de Ahorro 2025</CardTitle>
              <CardDescription className="text-gray-600">
                Calcula preciso y actualizado con las mejores tasas de interés 2025
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="capitalInicial">Capital Inicial (€)</Label>
                  <Input
                    id="capitalInicial"
                    type="number"
                    placeholder="Ej: 5000"
                    value={capitalInicial}
                    onChange={(e) => setCapitalInicial(e.target.value)}
                  />
                  <p className="text-sm text-gray-500">Dinero inicial que tienes ahorrado</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aportacionMensual">Aportación Mensual (€)</Label>
                  <Input
                    id="aportacionMensual"
                    type="number"
                    placeholder="Ej: 300"
                    value={aportacionMensual}
                    onChange={(e) => setAportacionMensual(e.target.value)}
                  />
                  <p className="text-sm text-gray-500">Cantidad que ahorrarás cada mes</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tasaInteres">Tasa de Interés Anual (%)</Label>
                  <Input
                    id="tasaInteres"
                    type="number"
                    step="0.01"
                    placeholder="Ej: 3.5"
                    value={tasaInteres}
                    onChange={(e) => setTasaInteres(e.target.value)}
                  />
                  <p className="text-sm text-gray-500">Rentabilidad anual esperada</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="plazoAnos">Plazo (años)</Label>
                  <Input
                    id="plazoAnos"
                    type="number"
                    placeholder="Ej: 10"
                    value={plazoAnos}
                    onChange={(e) => setPlazoAnos(e.target.value)}
                  />
                  <p className="text-sm text-gray-500">Tiempo que mantendrás el ahorro</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="frecuenciaCapitalizacion">Frecuencia de Capitalización</Label>
                <Select value={frecuenciaCapitalizacion} onValueChange={setFrecuenciaCapitalizacion}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Anual</SelectItem>
                    <SelectItem value="4">Trimestral</SelectItem>
                    <SelectItem value="12">Mensual</SelectItem>
                    <SelectItem value="365">Diaria</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-500">Con qué frecuencia se calculan los intereses</p>
              </div>

              <Button
                onClick={calcularAhorro}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg font-semibold"
                size="lg"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calcular Ahorro
              </Button>

              {resultado && (
                <div className="mt-8 space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="bg-teal-50 border-teal-200">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-teal-600">
                          {formatearMoneda(resultado.capitalFinal)}
                        </div>
                        <div className="text-sm text-gray-600">Capital Final</div>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {formatearMoneda(resultado.totalAportado)}
                        </div>
                        <div className="text-sm text-gray-600">Total Aportado</div>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-green-600">
                          {formatearMoneda(resultado.interesesGenerados)}
                        </div>
                        <div className="text-sm text-gray-600">Intereses Generados</div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="text-center">
                    <Button
                      variant="outline"
                      onClick={() => setMostrarTabla(!mostrarTabla)}
                      className="border-teal-600 text-teal-600 hover:bg-teal-50"
                    >
                      {mostrarTabla ? "Ocultar" : "Ver"} Proyección Detallada
                    </Button>
                  </div>

                  {mostrarTabla && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Proyección Año a Año</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">Año</th>
                                <th className="text-right p-2">Capital Inicial</th>
                                <th className="text-right p-2">Aportaciones</th>
                                <th className="text-right p-2">Intereses</th>
                                <th className="text-right p-2">Capital Final</th>
                              </tr>
                            </thead>
                            <tbody>
                              {resultado.proyeccionAnual.map((año) => (
                                <tr key={año.año} className="border-b hover:bg-gray-50">
                                  <td className="p-2 font-medium">{año.año}</td>
                                  <td className="p-2 text-right">{formatearMoneda(año.capitalInicial)}</td>
                                  <td className="p-2 text-right">{formatearMoneda(año.aportaciones)}</td>
                                  <td className="p-2 text-right text-green-600">{formatearMoneda(año.intereses)}</td>
                                  <td className="p-2 text-right font-semibold">{formatearMoneda(año.capitalFinal)}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
