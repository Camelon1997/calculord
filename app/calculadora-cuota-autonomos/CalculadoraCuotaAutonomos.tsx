"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Briefcase, TrendingUp, Calendar, AlertCircle, CheckCircle2 } from "lucide-react"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import RelatedCalculatorCard from "@/app/components/RelatedCalculatorCard"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

// Tramos de cotización 2025
const TRAMOS_2025 = [
  {
    min: 0,
    max: 670,
    baseMin: 653.59,
    cuotaMin: 200,
    baseMax: 1166.7,
    cuotaMax: 360,
    label: "Hasta 670€",
  },
  {
    min: 670,
    max: 900,
    baseMin: 718.95,
    cuotaMin: 220,
    baseMax: 1300,
    cuotaMax: 400,
    label: "670€ - 900€",
  },
  {
    min: 900,
    max: 1166.7,
    baseMin: 849.67,
    cuotaMin: 260,
    baseMax: 1500,
    cuotaMax: 460,
    label: "900€ - 1.166,70€",
  },
  {
    min: 1166.7,
    max: 1300,
    baseMin: 950.98,
    cuotaMin: 291,
    baseMax: 1700,
    cuotaMax: 520,
    label: "1.166,70€ - 1.300€",
  },
  {
    min: 1300,
    max: 1500,
    baseMin: 960.78,
    cuotaMin: 294,
    baseMax: 1850,
    cuotaMax: 560,
    label: "1.300€ - 1.500€",
  },
  {
    min: 1500,
    max: 1700,
    baseMin: 960.78,
    cuotaMin: 294,
    baseMax: 2030,
    cuotaMax: 600,
    label: "1.500€ - 1.700€",
  },
  {
    min: 1700,
    max: 1850,
    baseMin: 1143.79,
    cuotaMin: 350,
    baseMax: 2330,
    cuotaMax: 690,
    label: "1.700€ - 1.850€",
  },
  {
    min: 1850,
    max: 2030,
    baseMin: 1209.15,
    cuotaMin: 370,
    baseMax: 2760,
    cuotaMax: 820,
    label: "1.850€ - 2.030€",
  },
  {
    min: 2030,
    max: 2330,
    baseMin: 1274.51,
    cuotaMin: 390,
    baseMax: 3190,
    cuotaMax: 950,
    label: "2.030€ - 2.330€",
  },
  {
    min: 2330,
    max: 2760,
    baseMin: 1356.21,
    cuotaMin: 415,
    baseMax: 3620,
    cuotaMax: 1080,
    label: "2.330€ - 2.760€",
  },
  {
    min: 2760,
    max: 3190,
    baseMin: 1437.91,
    cuotaMin: 440,
    baseMax: 4050,
    cuotaMax: 1210,
    label: "2.760€ - 3.190€",
  },
  {
    min: 3190,
    max: 3620,
    baseMin: 1519.61,
    cuotaMin: 465,
    baseMax: 4500,
    cuotaMax: 1350,
    label: "3.190€ - 3.620€",
  },
  {
    min: 3620,
    max: 4050,
    baseMin: 1601.31,
    cuotaMin: 490,
    baseMax: 5000,
    cuotaMax: 1500,
    label: "3.620€ - 4.050€",
  },
  {
    min: 4050,
    max: 6000,
    baseMin: 1732.03,
    cuotaMin: 530,
    baseMax: 5500,
    cuotaMax: 1650,
    label: "4.050€ - 6.000€",
  },
  {
    min: 6000,
    max: Number.POSITIVE_INFINITY,
    baseMin: 1938.1,
    cuotaMin: 590,
    baseMax: 6000,
    cuotaMax: 1800,
    label: "Más de 6.000€",
  },
]

export default function CalculadoraCuotaAutonomos() {
  const [ingresosNetos, setIngresosNetos] = useState<string>("1500")
  const [baseCotizacion, setBaseCotizacion] = useState<string>("960.78")
  const [modalidadCalculo, setModalidadCalculo] = useState<"ingresos" | "base">("ingresos")

  const tramoActual = useMemo(() => {
    if (modalidadCalculo === "ingresos") {
      const ingresos = Number.parseFloat(ingresosNetos) || 0
      return TRAMOS_2025.find((t) => ingresos > t.min && ingresos <= t.max) || TRAMOS_2025[0]
    }
    return null
  }, [ingresosNetos, modalidadCalculo])

  const resultados = useMemo(() => {
    if (modalidadCalculo === "ingresos" && tramoActual) {
      const ingresos = Number.parseFloat(ingresosNetos) || 0
      const cuotaMensual = tramoActual.cuotaMin
      const cuotaAnual = cuotaMensual * 12

      return {
        cuotaMensual,
        cuotaAnual,
        baseMinima: tramoActual.baseMin,
        baseMaxima: tramoActual.baseMax,
        cuotaMinima: tramoActual.cuotaMin,
        cuotaMaxima: tramoActual.cuotaMax,
        tramo: tramoActual.label,
        ingresosNetos: ingresos,
      }
    } else {
      // Cálculo por base de cotización
      const base = Number.parseFloat(baseCotizacion) || 0
      const cuotaMensual = base * 0.306 // 30.6% tipo de cotización 2025
      const cuotaAnual = cuotaMensual * 12

      return {
        cuotaMensual,
        cuotaAnual,
        baseCotizacion: base,
      }
    }
  }, [ingresosNetos, baseCotizacion, tramoActual, modalidadCalculo])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Breadcrumbs currentPage="Calculadora Cuota Autónomos" />

        {/* Hero Section */}
        <div className="text-center mb-12 mt-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Actualizado 2025
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Calculadora de <span className="text-blue-600">Cuota de Autónomos</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Calcula tu cuota mensual según el nuevo sistema de cotización por tramos de ingresos reales (RETA 2025).
            Descubre cuánto pagarás a la Seguridad Social y elige la base que mejor se adapte a ti.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">15 Tramos de Cotización</h3>
              <p className="text-sm text-gray-600">Sistema actualizado según ingresos reales mensuales</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Desde 200€ hasta 590€</h3>
              <p className="text-sm text-gray-600">Cuotas ajustadas a tus ingresos netos mensuales</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ajustes hasta 6 veces/año</h3>
              <p className="text-sm text-gray-600">Adapta tu base de cotización según tu facturación</p>
            </div>
          </div>
        </div>

        {/* Calculadora */}
        <Card className="mb-12 shadow-lg border-2">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              Calcula tu Cuota
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            {/* Selector de modalidad */}
            <div className="mb-6">
              <Label className="text-base font-semibold mb-3 block">Método de Cálculo</Label>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => setModalidadCalculo("ingresos")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    modalidadCalculo === "ingresos"
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-semibold">Por Ingresos Netos</div>
                  <div className="text-sm text-gray-600">Sistema de tramos 2025</div>
                </Button>
                <Button
                  onClick={() => setModalidadCalculo("base")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    modalidadCalculo === "base" ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-semibold">Por Base de Cotización</div>
                  <div className="text-sm text-gray-600">Elige tu base libremente</div>
                </Button>
              </div>
            </div>

            {modalidadCalculo === "ingresos" ? (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="ingresos" className="text-base font-semibold mb-3 block">
                    Ingresos Netos Mensuales (€)
                  </Label>
                  <Input
                    id="ingresos"
                    type="number"
                    value={ingresosNetos}
                    onChange={(e) => setIngresosNetos(e.target.value)}
                    placeholder="1500"
                    className="text-lg h-12"
                  />
                  <p className="text-sm text-gray-500 mt-2">Tus ingresos después de restar gastos deducibles</p>
                </div>

                {tramoActual && resultados && "tramo" in resultados && (
                  <Alert className="bg-blue-50 border-blue-200">
                    <AlertCircle className="h-4 w-4 text-blue-600" />
                    <AlertDescription className="text-blue-900">
                      Tus ingresos de <strong>{resultados.ingresosNetos}€/mes</strong> están en el tramo:{" "}
                      <strong>{resultados.tramo}</strong>
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="base" className="text-base font-semibold mb-3 block">
                    Base de Cotización Mensual (€)
                  </Label>
                  <Input
                    id="base"
                    type="number"
                    value={baseCotizacion}
                    onChange={(e) => setBaseCotizacion(e.target.value)}
                    placeholder="960.78"
                    className="text-lg h-12"
                  />
                  <p className="text-sm text-gray-500 mt-2">Entre 735,29€ (mínima) y 4.720,50€ (máxima) en 2025</p>
                </div>
              </div>
            )}

            {/* Resultados */}
            {resultados && (
              <div className="mt-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                    <div className="text-sm font-medium text-blue-700 mb-2">Cuota Mensual 2025</div>
                    <div className="text-4xl font-bold text-blue-900">{resultados.cuotaMensual.toFixed(2)}€</div>
                    <div className="text-sm text-blue-700 mt-2">Pago cada mes</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
                    <div className="text-sm font-medium text-purple-700 mb-2">Cuota Anual</div>
                    <div className="text-4xl font-bold text-purple-900">{resultados.cuotaAnual.toFixed(2)}€</div>
                    <div className="text-sm text-purple-700 mt-2">Total al año</div>
                  </div>
                </div>

                {modalidadCalculo === "ingresos" && "baseMinima" in resultados && (
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">Información de tu Tramo ({resultados.tramo})</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Base Mínima:</span>
                        <span className="font-semibold ml-2">{resultados.baseMinima}€</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Base Máxima:</span>
                        <span className="font-semibold ml-2">{resultados.baseMaxima}€</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Cuota Mínima:</span>
                        <span className="font-semibold ml-2">{resultados.cuotaMinima}€/mes</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Cuota Máxima:</span>
                        <span className="font-semibold ml-2">{resultados.cuotaMaxima}€/mes</span>
                      </div>
                    </div>
                    <Alert className="mt-4 bg-green-50 border-green-200">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-900 text-sm">
                        Dentro de tu tramo puedes elegir libremente cualquier base de cotización entre{" "}
                        {resultados.baseMinima}€ y {resultados.baseMaxima}€
                      </AlertDescription>
                    </Alert>
                  </div>
                )}

                {modalidadCalculo === "base" && "baseCotizacion" in resultados && (
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">Detalle del Cálculo</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Base de cotización:</span>
                        <span className="font-semibold">{resultados.baseCotizacion}€</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tipo de cotización 2025:</span>
                        <span className="font-semibold">30,6%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tabla de Tramos 2025 */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Tabla Completa de Tramos 2025</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Ingresos Netos Mensuales</th>
                    <th className="text-left p-3 font-semibold">Base Mínima</th>
                    <th className="text-left p-3 font-semibold">Cuota Mínima</th>
                    <th className="text-left p-3 font-semibold">Base Máxima</th>
                    <th className="text-left p-3 font-semibold">Cuota Máxima</th>
                  </tr>
                </thead>
                <tbody>
                  {TRAMOS_2025.map((tramo, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 font-medium">{tramo.label}</td>
                      <td className="p-3">{tramo.baseMin.toFixed(2)}€</td>
                      <td className="p-3 text-blue-600 font-semibold">{tramo.cuotaMin}€</td>
                      <td className="p-3">{tramo.baseMax.toFixed(2)}€</td>
                      <td className="p-3 text-purple-600 font-semibold">{tramo.cuotaMax}€</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Guía Completa */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Guía Completa sobre la Cuota de Autónomos 2025</h2>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es el Sistema de Cotización por Tramos?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Desde 2023, los autónomos en España cotizan según un{" "}
              <strong>sistema de tramos basado en rendimientos netos reales</strong>. Este sistema, gestionado por el
              Régimen Especial de Trabajadores Autónomos (RETA), establece 15 tramos de ingresos con cuotas mínimas y
              máximas asociadas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En 2025, las cuotas oscilan entre <strong>200€ mensuales</strong> para ingresos de hasta 670€ y{" "}
              <strong>590€ mensuales</strong> para ingresos superiores a 6.000€. Cada autónomo debe elegir una base de
              cotización dentro del rango permitido por su tramo de ingresos.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo se Calculan los Ingresos Netos?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Los <strong>rendimientos netos</strong> se calculan restando a tus ingresos brutos todos los gastos
              deducibles de tu actividad:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Ingresos brutos:</strong> Total facturado (sin IVA)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Menos gastos deducibles:</strong> Alquiler, suministros, material, amortizaciones, seguros,
                  etc.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Resultado:</strong> Rendimiento neto que determina tu tramo
                </span>
              </li>
            </ul>
            <Alert className="mt-4 bg-yellow-50 border-yellow-200">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-900">
                Al final del año, si tus ingresos reales son diferentes a los estimados, la Seguridad Social
                regularizará tu cuota. Si pagaste de más, te devolverán la diferencia; si pagaste de menos, deberás
                abonar el importe pendiente.
              </AlertDescription>
            </Alert>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cambios de Base de Cotización en 2025</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Una de las grandes ventajas del sistema actual es la{" "}
              <strong>flexibilidad para cambiar tu base de cotización</strong>:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">Cambios Permitidos</h4>
                <ul className="space-y-2 text-sm text-blue-900">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Hasta 6 veces al año:</strong> Puedes ajustar tu base según evolucione tu actividad
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Dentro de tu tramo:</strong> Libertad total para elegir cualquier base entre el mínimo y
                      máximo
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Cambio de tramo:</strong> Si tus ingresos cambian y pasas a otro tramo, debes ajustar tu
                      base
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-3">Plazos y Efectos</h4>
                <ul className="space-y-2 text-sm text-purple-900">
                  <li className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Solicitud hasta el día 1:</strong> Efecto desde el mes siguiente
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>A través de Import@ss:</strong> Trámite online rápido y sencillo
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Sin penalización:</strong> Los cambios no tienen coste adicional
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Por Qué Elegir una Base más Alta?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aunque pagar más cuota cada mes puede parecer un gasto innecesario, cotizar por una base más alta tiene
              importantes <strong>ventajas a largo plazo</strong>:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">Mayor Pensión</h4>
                <p className="text-sm text-green-800">
                  Tu jubilación se calculará según tus bases de cotización. Cuanto más cotices, más cobrarás al
                  jubilarte.
                </p>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Mejores Prestaciones</h4>
                <p className="text-sm text-blue-800">
                  Las bajas por IT, maternidad/paternidad y cese de actividad se calculan sobre tu base de cotización.
                </p>
              </div>
              <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">Protección Familiar</h4>
                <p className="text-sm text-purple-800">
                  En caso de fallecimiento, las pensiones de viudedad y orfandad dependerán de tus cotizaciones.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bonificaciones y Tarifa Plana 2025</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si eres <strong>nuevo autónomo</strong>, puedes beneficiarte de la tarifa plana y otras reducciones:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Tarifa Plana (primeros 12 meses)</h4>
                <p className="text-gray-700">
                  <strong>80€/mes</strong> durante el primer año, independientemente de tus ingresos. Una reducción del
                  80% sobre la cuota mínima.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Reducción del 80% (meses 13-24)</h4>
                <p className="text-gray-700">
                  Segundo año con bonificación del 80% si tus ingresos son inferiores al SMI (1.134€/mes en 2025).
                </p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Reducción progresiva (meses 25-36)</h4>
                <p className="text-gray-700">
                  Tercer año con reducciones del 50% los primeros 6 meses y 30% los últimos 6 meses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ¿Cuál es la cuota mínima de autónomos en 2025?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                La cuota mínima en 2025 es de <strong>200€ mensuales</strong> para autónomos con ingresos netos de hasta
                670€ al mes. Esto supone una base de cotización mínima de 653,59€. Si tus ingresos son superiores,
                deberás pagar la cuota correspondiente a tu tramo.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ¿Cuál es la cuota máxima de autónomos en 2025?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                La cuota máxima en 2025 es de <strong>590€ mensuales</strong> para autónomos con ingresos superiores a
                6.000€ al mes, con una base de cotización de 1.938,10€. Si eliges cotizar por la base máxima absoluta
                (4.720,50€), la cuota puede llegar hasta <strong>1.444€/mes</strong>.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ¿Qué pasa si mis ingresos varían mucho cada mes?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Puedes <strong>cambiar tu base de cotización hasta 6 veces al año</strong> para adaptarla a tu
                situación. Debes estimar tus ingresos medios mensuales y elegir el tramo correspondiente. Al final del
                año, la Seguridad Social regularizará tu cuota según tus ingresos reales, devolviendo o cobrando la
                diferencia.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">¿Cómo se declaran los ingresos reales?</h3>
              <p className="text-gray-700 leading-relaxed">
                Los rendimientos netos se declaran a través de la <strong>declaración de la renta (modelo 100)</strong>{" "}
                y los <strong>pagos trimestrales (modelo 130 o 131)</strong>. La Seguridad Social utilizará estos datos
                para calcular la regularización anual de tu cuota de autónomo.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">¿Qué incluye la cuota de autónomos?</h3>
              <p className="text-gray-700 leading-relaxed">
                La cuota de autónomos incluye las siguientes coberturas: contingencias comunes (enfermedad, jubilación),
                accidentes de trabajo y enfermedades profesionales (AT y EP), formación profesional, y cese de actividad
                (paro del autónomo). También cubre prestaciones por IT, maternidad/paternidad e incapacidad permanente.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">¿Cuándo debo pagar la cuota de autónomos?</h3>
              <p className="text-gray-700 leading-relaxed">
                La cuota se domicilia mensualmente y se cobra el <strong>último día hábil de cada mes</strong>.
                Asegúrate de tener saldo suficiente en tu cuenta bancaria para evitar recargos por impago, que pueden
                ser del 20% sobre el importe adeudado.
              </p>
            </div>
          </div>
        </div>

        {/* Calculadoras Relacionadas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Calculadoras Relacionadas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RelatedCalculatorCard
              title="IRPF Autónomos"
              description="Calcula tus pagos trimestrales y retenciones de IRPF"
              href="/calculadora-irpf-autonomos"
              icon="FileText"
              iconColor="text-orange-600"
              iconBgColor="bg-orange-100"
              features={["Pagos trimestrales", "Retenciones", "Deducciones"]}
            />
            <RelatedCalculatorCard
              title="Conversor Bruto-Neto"
              description="Descubre tu salario neto después de impuestos y cotizaciones"
              href="/calculadora-bruto-neto"
              icon="TrendingUp"
              iconColor="text-blue-600"
              iconBgColor="bg-blue-100"
              features={["IRPF incluido", "Seguridad Social", "Desglose completo"]}
            />
            <RelatedCalculatorCard
              title="Calendario Fiscal"
              description="Calendario completo con todas las fechas clave fiscales"
              href="/calculadora-calendario-fiscal-autonomos"
              icon="Calendar"
              iconColor="text-purple-600"
              iconBgColor="bg-purple-100"
              features={["Modelos 130/131", "IVA trimestral", "Renta anual"]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
