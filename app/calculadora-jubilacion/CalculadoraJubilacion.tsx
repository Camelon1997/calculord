"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Calculator,
  TrendingUp,
  Calendar,
  Euro,
  Users,
  Info,
  Download,
  Building2,
  FileText,
  Briefcase,
} from "lucide-react"
import { RelatedCalculatorCard } from "@/app/components/RelatedCalculatorCard"

export default function CalculadoraJubilacion() {
  const [salariosMensuales, setSalariosMensuales] = useState("")
  const [anosCotizados, setAnosCotizados] = useState("")
  const [mesesCotizados, setMesesCotizados] = useState("")
  const [edadActual, setEdadActual] = useState("")
  const [resultado, setResultado] = useState<{
    baseReguladora: number
    porcentaje: number
    pensionMensual: number
    pensionAnual: number
    pagas: number
    anosRequeridos100: number
    anosRequeridos100Meses: number
    diferenciaPension100: number
  } | null>(null)

  const calcularPorcentaje = (totalMeses: number): number => {
    if (totalMeses < 180) return 0

    let porcentaje = 50

    const mesesRestantes = totalMeses - 180

    if (mesesRestantes <= 49) {
      porcentaje += mesesRestantes * 0.21
    } else {
      porcentaje += 49 * 0.21
      const mesesAdicionales = mesesRestantes - 49
      porcentaje += Math.min(mesesAdicionales, 209) * 0.19
    }

    return Math.min(porcentaje, 100)
  }

  const calcularJubilacion = () => {
    const salario = Number.parseFloat(salariosMensuales)
    const anos = Number.parseInt(anosCotizados) || 0
    const meses = Number.parseInt(mesesCotizados) || 0
    const edad = Number.parseInt(edadActual) || 0

    if (!salario || salario <= 0) {
      alert("Por favor, introduce un salario válido")
      return
    }

    if (anos < 0 || meses < 0 || meses > 11) {
      alert("Por favor, introduce años y meses válidos")
      return
    }

    const totalMeses = anos * 12 + meses

    if (totalMeses < 180) {
      alert("Necesitas al menos 15 años (180 meses) cotizados para acceder a la pensión de jubilación")
      return
    }

    // Calcular base reguladora (dividimos por 350 según normativa 2025)
    const baseReguladora = (salario * 300) / 350

    // Calcular porcentaje según años cotizados
    const porcentaje = calcularPorcentaje(totalMeses)

    // Calcular pensión
    const pensionMensual = (baseReguladora * porcentaje) / 100

    // Límites 2025
    const pensionMaxima = 3267.6
    const pensionMinima = edad >= 65 ? 1065.9 : 1065.9

    const pensionFinal = Math.min(Math.max(pensionMensual, pensionMinima), pensionMaxima)
    const pensionAnual = pensionFinal * 14

    // Calcular años para 100%
    const mesesPara100 = 438 // 36 años y 6 meses en 2025
    const anosRequeridos100 = Math.floor(mesesPara100 / 12)
    const anosRequeridos100Meses = mesesPara100 % 12

    // Calcular diferencia si no tiene 100%
    const baseReguladora100 = baseReguladora
    const pension100 = Math.min(baseReguladora100, pensionMaxima)
    const diferenciaPension100 = pension100 - pensionFinal

    setResultado({
      baseReguladora,
      porcentaje,
      pensionMensual: pensionFinal,
      pensionAnual,
      pagas: 14,
      anosRequeridos100,
      anosRequeridos100Meses,
      diferenciaPension100: Math.max(diferenciaPension100, 0),
    })
  }

  const descargarResultados = () => {
    if (!resultado) return

    const anos = Number.parseInt(anosCotizados) || 0
    const meses = Number.parseInt(mesesCotizados) || 0

    const contenido = `CALCULADORA DE JUBILACIÓN 2025 - RESULTADOS
========================================

DATOS INTRODUCIDOS:
- Salario Mensual Promedio (últimos 25 años): ${salariosMensuales}€
- Años Cotizados: ${anos} años ${meses} meses
- Edad Actual: ${edadActual} años

CÁLCULO DE LA PENSIÓN:
- Base Reguladora: ${resultado.baseReguladora.toFixed(2)}€
- Porcentaje Aplicado: ${resultado.porcentaje.toFixed(2)}%
- Pensión Mensual: ${resultado.pensionMensual.toFixed(2)}€
- Pensión Anual (${resultado.pagas} pagas): ${resultado.pensionAnual.toFixed(2)}€

INFORMACIÓN ADICIONAL:
- Años requeridos para 100%: ${resultado.anosRequeridos100} años ${resultado.anosRequeridos100Meses} meses
- Diferencia con pensión al 100%: ${resultado.diferenciaPension100.toFixed(2)}€/mes

Calculado en: ${new Date().toLocaleDateString("es-ES")}
Fuente: Calculord.com

NOTA: Este cálculo es orientativo. La Seguridad Social realiza el cálculo oficial considerando 
las bases de cotización reales de los últimos 25 años actualizadas según el IPC.
`

    const blob = new Blob([contenido], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `pension-jubilacion-${new Date().toISOString().split("T")[0]}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Calculadora de Pensión de Jubilación 2025
            </h1>
            <p className="text-xl text-purple-100 mb-8 text-pretty">
              Calcula tu futura pensión según tus años cotizados y base reguladora. Normativa actualizada 2025.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4" />
                <span>Base reguladora 25 años</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4" />
                <span>100% con 36 años y 6 meses</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Euro className="w-4 h-4" />
                <span>Máximo 3.267,60€/mes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculadora */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Calculator className="w-6 h-6 text-purple-600" />
                Calcula tu Pensión de Jubilación
              </CardTitle>
              <CardDescription>
                Introduce tus datos para calcular tu pensión estimada según la normativa 2025
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert className="bg-yellow-50 border-yellow-200">
                <Info className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-sm text-yellow-800">
                  Este cálculo es orientativo. La Seguridad Social calcula la pensión con las bases reales de cotización
                  de los últimos 25 años actualizadas según el IPC.
                </AlertDescription>
              </Alert>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="salarios">Salario Mensual Promedio (últimos 25 años) *</Label>
                  <Input
                    id="salarios"
                    type="number"
                    placeholder="2500"
                    value={salariosMensuales}
                    onChange={(e) => setSalariosMensuales(e.target.value)}
                  />
                  <p className="text-sm text-gray-500">Aproximación de tu salario mensual promedio</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="edad">Edad Actual *</Label>
                  <Input
                    id="edad"
                    type="number"
                    placeholder="60"
                    value={edadActual}
                    onChange={(e) => setEdadActual(e.target.value)}
                  />
                  <p className="text-sm text-gray-500">Tu edad actual en años</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="anos">Años Cotizados *</Label>
                  <Input
                    id="anos"
                    type="number"
                    placeholder="35"
                    value={anosCotizados}
                    onChange={(e) => setAnosCotizados(e.target.value)}
                  />
                  <p className="text-sm text-gray-500">Mínimo 15 años para acceder a pensión</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meses">Meses Adicionales</Label>
                  <Input
                    id="meses"
                    type="number"
                    placeholder="6"
                    min="0"
                    max="11"
                    value={mesesCotizados}
                    onChange={(e) => setMesesCotizados(e.target.value)}
                  />
                  <p className="text-sm text-gray-500">Entre 0 y 11 meses</p>
                </div>
              </div>

              <Button onClick={calcularJubilacion} className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
                <Calculator className="w-5 h-5 mr-2" />
                Calcular Pensión de Jubilación
              </Button>

              {resultado && (
                <div className="space-y-6 pt-6 border-t">
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Tu Pensión Estimada</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Base Reguladora</p>
                        <p className="text-2xl font-bold text-purple-600">{resultado.baseReguladora.toFixed(2)}€</p>
                        <p className="text-xs text-gray-500 mt-1">Promedio últimos 25 años / 350 días</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Porcentaje Aplicado</p>
                        <p className="text-2xl font-bold text-indigo-600">{resultado.porcentaje.toFixed(2)}%</p>
                        <p className="text-xs text-gray-500 mt-1">Según años cotizados</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Pensión Mensual</p>
                        <p className="text-3xl font-bold text-green-600">{resultado.pensionMensual.toFixed(2)}€</p>
                        <p className="text-xs text-gray-500 mt-1">14 pagas anuales</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Pensión Anual</p>
                        <p className="text-3xl font-bold text-green-600">{resultado.pensionAnual.toFixed(2)}€</p>
                        <p className="text-xs text-gray-500 mt-1">Incluye pagas extra</p>
                      </div>
                    </div>
                  </div>

                  {resultado.porcentaje < 100 && (
                    <Alert className="bg-blue-50 border-blue-200">
                      <Info className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-sm text-blue-800">
                        <strong>Para alcanzar el 100%:</strong> Necesitas {resultado.anosRequeridos100} años y{" "}
                        {resultado.anosRequeridos100Meses} meses cotizados (36,5 años en 2025).
                        {resultado.diferenciaPension100 > 0 && (
                          <> Tu pensión aumentaría en {resultado.diferenciaPension100.toFixed(2)}€/mes.</>
                        )}
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Info className="w-4 h-4" />
                      Límites 2025
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Pensión Máxima</p>
                        <p className="font-semibold text-gray-900">3.267,60€/mes</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Pensión Mínima (≥65 años)</p>
                        <p className="font-semibold text-gray-900">1.065,90€/mes</p>
                      </div>
                    </div>
                  </div>

                  <Button onClick={descargarResultados} variant="outline" className="w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar Resultados
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Guía Educativa */}
          <div className="mt-12 space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Guía Completa sobre la Pensión de Jubilación</h2>
              <p className="text-gray-600 text-lg">Todo lo que necesitas saber para planificar tu jubilación</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="w-8 h-8 text-purple-600 mb-2" />
                  <CardTitle className="text-lg">Base Reguladora</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Se calcula con las bases de cotización de los últimos 25 años (300 meses), divididas entre 350. Los
                  últimos 24 meses se toman en valor nominal, el resto se actualiza según IPC.
                </CardContent>
              </Card>

              <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <TrendingUp className="w-8 h-8 text-indigo-600 mb-2" />
                  <CardTitle className="text-lg">Porcentaje Aplicado</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  15 años = 50%. Aumenta 0,21% por mes hasta el mes 229, luego 0,19% por mes. Se alcanza el 100% con 36
                  años y 6 meses en 2025.
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Euro className="w-8 h-8 text-green-600 mb-2" />
                  <CardTitle className="text-lg">Límites 2025</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  Máximo: 3.267,60€/mes. Mínimo con cónyuge: 1.065,90€/mes. La pensión se cobra en 14 pagas (12
                  ordinarias + 2 extra en junio y noviembre).
                </CardContent>
              </Card>
            </div>

            {/* Tipos de Jubilación */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Tipos de Jubilación en España</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Jubilación Ordinaria (67 años)</h3>
                    <p className="text-gray-600 mb-2">
                      Edad legal de jubilación en 2025. Requiere al menos 15 años cotizados (2 dentro de los últimos 15
                      años).
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Acceso sin penalizaciones</li>
                      <li>100% de la pensión con 36 años y 6 meses</li>
                      <li>Compatible con trabajo parcial en algunos casos</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Jubilación Anticipada Voluntaria</h3>
                    <p className="text-gray-600 mb-2">
                      Posible desde los 65 años (máximo 2 años antes de la edad ordinaria). Requiere 35 años cotizados.
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Reducción del 21% por cada año de anticipo (1,75% por mes)</li>
                      <li>No puede estar registrado como demandante de empleo</li>
                      <li>Incompatible con actividad laboral</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Jubilación Anticipada Involuntaria</h3>
                    <p className="text-gray-600 mb-2">
                      Por cese no voluntario (despido, ERE). Posible desde los 63 años. Requiere 33 años cotizados.
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Coeficiente reductor menor que la voluntaria</li>
                      <li>Debe estar inscrito como demandante de empleo</li>
                      <li>El cese debe ser ajeno a la voluntad del trabajador</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-semibold text-lg mb-2">Jubilación Activa</h3>
                    <p className="text-gray-600 mb-2">
                      Compatibiliza cobro de pensión (50-100%) con trabajo. Requiere edad ordinaria y 100% de la
                      pensión.
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Se cobra el 50% de la pensión si se trabaja por cuenta ajena</li>
                      <li>Se cobra el 100% si se trabaja por cuenta propia</li>
                      <li>Se sigue cotizando para mejorar la pensión</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Requisitos */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Requisitos para la Pensión de Jubilación</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      Edad Mínima
                    </h3>
                    <p className="text-sm text-gray-700">
                      <strong>67 años</strong> con menos de 38 años y 6 meses cotizados, o<strong> 65 años</strong> con
                      38 años y 6 meses o más cotizados.
                    </p>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-indigo-600" />
                      Cotización Mínima
                    </h3>
                    <p className="text-sm text-gray-700">
                      <strong>15 años cotizados</strong> (5.475 días), de los cuales al menos 2 años deben estar dentro
                      de los 15 años inmediatamente anteriores.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      Alta en Seguridad Social
                    </h3>
                    <p className="text-sm text-gray-700">
                      Estar en alta o situación asimilada al alta (desempleo, IT, ERTE) en el momento del hecho
                      causante.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-green-600" />
                      Documentación
                    </h3>
                    <p className="text-sm text-gray-700">
                      DNI, vida laboral actualizada, certificado de empresa del último empleo, y cuenta bancaria para
                      domiciliar la pensión.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mejora de la Pensión */}
            <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl">Cómo Mejorar tu Pensión de Jubilación</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Retrasar la Jubilación</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Por cada año de retraso más allá de la edad ordinaria, se añade:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>4% adicional con menos de 25 años cotizados</li>
                      <li>2,75% adicional con 25-37 años cotizados</li>
                      <li>4% adicional con más de 37 años cotizados</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Cotizar Más Años</h3>
                    <p className="text-sm text-gray-600 mb-2">Cada mes adicional cotizado aumenta el porcentaje:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>0,21% por mes hasta el mes 229</li>
                      <li>0,19% por mes desde el mes 230</li>
                      <li>Máximo 100% con 36 años y 6 meses</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Aumentar la Base de Cotización</h3>
                    <p className="text-sm text-gray-600">
                      Mejorando tu salario en los últimos 25 años aumentarás tu base reguladora. Los últimos 24 meses
                      tienen especial importancia al no actualizarse por IPC.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Jubilación Activa</h3>
                    <p className="text-sm text-gray-600">
                      Trabajando después de jubilarte con jubilación activa, sigues cotizando y puedes mejorar tu
                      pensión hasta un 2% adicional por año trabajado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Preguntas Frecuentes</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>¿Cuántos años necesito cotizar para jubilarme?</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      El mínimo son 15 años (180 meses) de cotización, de los cuales al menos 2 años deben estar dentro
                      de los 15 años inmediatamente anteriores al momento de la jubilación. Con 15 años recibirás el 50%
                      de la base reguladora. Para cobrar el 100% necesitas 36 años y 6 meses cotizados en 2025.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>¿Cómo se calcula la base reguladora?</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      La base reguladora se calcula sumando las bases de cotización de los últimos 300 meses (25 años) y
                      dividiendo el resultado entre 350. Los últimos 24 meses se toman en su valor nominal, mientras que
                      los 276 meses anteriores se actualizan según el IPC (Índice de Precios al Consumo).
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>¿Puedo jubilarme antes de los 67 años?</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Sí, existen dos tipos de jubilación anticipada: voluntaria (desde los 65 años con 35 años
                      cotizados) e involuntaria por cese no voluntario (desde los 63 años con 33 años cotizados). Ambas
                      conllevan coeficientes reductores que disminuyen la cuantía de la pensión. También puedes
                      jubilarte a los 65 años sin reducción si tienes 38 años y 6 meses cotizados.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>¿Cuál es la pensión máxima y mínima en 2025?</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      La pensión máxima de jubilación en 2025 es de 3.267,60€ mensuales (45.746,40€ anuales en 14
                      pagas). La pensión mínima varía según la situación familiar: con cónyuge a cargo es de
                      1.065,90€/mes, y sin cónyuge es de 1.065,90€/mes para mayores de 65 años.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>¿Puedo trabajar y cobrar la pensión de jubilación?</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Sí, a través de la jubilación activa. Debes tener la edad ordinaria de jubilación y el 100% de la
                      pensión. Si trabajas por cuenta ajena, cobras el 50% de la pensión; si es por cuenta propia, el
                      100%. Sigues cotizando y puedes mejorar tu pensión hasta un 2% por año trabajado. La cotización
                      adicional puede aumentar tu pensión futura.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Calculadoras Relacionadas */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Calculadoras Relacionadas</h2>
              <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                Complementa tu planificación de jubilación con estas herramientas para gestionar tus finanzas.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <RelatedCalculatorCard
                  icon={<Building2 className="h-6 w-6 text-blue-500" />}
                  title="Cotizaciones Seguridad Social"
                  description="Calcula tus cotizaciones mensuales. Conoce cuánto aportas para tu futura pensión."
                  features={["Cotización completa", "Bases 2025", "Desglose detallado"]}
                  href="/calculadora-cotizaciones-seguridad-social"
                  buttonText="Ver Cotizaciones"
                  buttonClassName="bg-blue-600 hover:bg-blue-700"
                  iconBgClassName="bg-blue-100"
                />
                <RelatedCalculatorCard
                  icon={<FileText className="h-6 w-6 text-green-500" />}
                  title="Calculadora de Nómina"
                  description="Calcula tu salario neto, deducciones y retenciones de IRPF y Seguridad Social."
                  features={["Nómina completa", "IRPF 2025", "Cotizaciones SS"]}
                  href="/calculadora-nomina"
                  buttonText="Ver Nómina"
                  buttonClassName="bg-green-600 hover:bg-green-700"
                  iconBgClassName="bg-green-100"
                />
                <RelatedCalculatorCard
                  icon={<Briefcase className="h-6 w-6 text-purple-500" />}
                  title="Calculadora de IRPF"
                  description="Calcula tu retención de IRPF y optimiza tu declaración de la renta."
                  features={["Tramos 2025", "Retenciones", "Desglose completo"]}
                  href="/calculadora-irpf"
                  buttonText="Calcular IRPF"
                  buttonClassName="bg-purple-600 hover:bg-purple-700"
                  iconBgClassName="bg-purple-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
