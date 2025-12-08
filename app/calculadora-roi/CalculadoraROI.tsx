"use client"

import { useState } from "react"
import { Calculator, TrendingUp, ArrowLeft, DollarSign, PieChart, Target, PiggyBank, Home, Receipt } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import RelatedCalculatorCard from "@/app/components/RelatedCalculatorCard"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CalculadoraROI() {
  const [inversionInicial, setInversionInicial] = useState<string>("10000")
  const [beneficioObtenido, setBeneficioObtenido] = useState<string>("15000")
  const [resultado, setResultado] = useState<{
    roi: number
    beneficioNeto: number
    multiplicador: number
    interpretacion: string
  } | null>(null)

  const calcularROI = () => {
    const inversion = Number.parseFloat(inversionInicial) || 0
    const beneficio = Number.parseFloat(beneficioObtenido) || 0

    if (inversion <= 0) {
      alert("La inversión inicial debe ser mayor a 0")
      return
    }

    const beneficioNeto = beneficio - inversion
    const roi = (beneficioNeto / inversion) * 100
    const multiplicador = beneficio / inversion

    let interpretacion = ""
    if (roi > 100) {
      interpretacion = "Excelente retorno de inversión. Has más que duplicado tu inversión inicial."
    } else if (roi > 50) {
      interpretacion = "Muy buen retorno de inversión. Tu inversión ha sido rentable."
    } else if (roi > 0) {
      interpretacion = "Retorno de inversión positivo. Has obtenido ganancias de tu inversión."
    } else if (roi === 0) {
      interpretacion = "Punto de equilibrio. Ni has ganado ni has perdido dinero con esta inversión."
    } else {
      interpretacion = "Retorno de inversión negativo. Has perdido dinero con esta inversión."
    }

    setResultado({
      roi,
      beneficioNeto,
      multiplicador,
      interpretacion,
    })
  }

  const limpiarFormulario = () => {
    setInversionInicial("10000")
    setBeneficioObtenido("15000")
    setResultado(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumbs currentPage="Calculadora de ROI" />

        <div className="mt-6 mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Calculadora de ROI y Rentabilidad</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calcula el retorno de inversión (ROI) de tus proyectos, campañas de marketing o cualquier inversión
            empresarial de forma rápida y precisa
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calculator className="w-6 h-6" />
                  Calcular ROI
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="inversion" className="text-base font-semibold flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-blue-600" />
                      Inversión Inicial (€)
                    </Label>
                    <Input
                      id="inversion"
                      type="number"
                      value={inversionInicial}
                      onChange={(e) => setInversionInicial(e.target.value)}
                      className="text-lg h-12"
                      placeholder="Ej: 10000"
                      min="0"
                      step="100"
                    />
                    <p className="text-sm text-gray-500">Cantidad total invertida en el proyecto o campaña</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="beneficio" className="text-base font-semibold flex items-center gap-2">
                      <Target className="w-4 h-4 text-green-600" />
                      Beneficio Obtenido (€)
                    </Label>
                    <Input
                      id="beneficio"
                      type="number"
                      value={beneficioObtenido}
                      onChange={(e) => setBeneficioObtenido(e.target.value)}
                      className="text-lg h-12"
                      placeholder="Ej: 15000"
                      min="0"
                      step="100"
                    />
                    <p className="text-sm text-gray-500">Ingresos o valor total generado por la inversión</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      onClick={calcularROI}
                      className="flex-1 h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Calculator className="w-5 h-5 mr-2" />
                      Calcular ROI
                    </Button>
                    <Button onClick={limpiarFormulario} variant="outline" className="h-12 text-lg bg-transparent">
                      Limpiar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {resultado && (
              <Card className="mt-6 shadow-xl border-0 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-green-700">
                    <PieChart className="w-6 h-6" />
                    Resultados del ROI
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                      <p className="text-sm text-gray-600 mb-1">ROI</p>
                      <p className="text-3xl font-bold text-blue-600">{resultado.roi.toFixed(2)}%</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                      <p className="text-sm text-gray-600 mb-1">Beneficio Neto</p>
                      <p className="text-3xl font-bold text-green-600">{resultado.beneficioNeto.toFixed(2)}€</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                      <p className="text-sm text-gray-600 mb-1">Multiplicador</p>
                      <p className="text-3xl font-bold text-purple-600">{resultado.multiplicador.toFixed(2)}x</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">Interpretación</h3>
                    <p className="text-gray-700">{resultado.interpretacion}</p>
                  </div>

                  <div className="mt-6 p-4 bg-blue-100 rounded-lg border border-blue-300">
                    <h4 className="font-semibold text-blue-900 mb-2">¿Qué significa esto?</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Por cada 1€ invertido, has obtenido {resultado.multiplicador.toFixed(2)}€</li>
                      <li>• Tu beneficio neto es de {resultado.beneficioNeto.toFixed(2)}€</li>
                      <li>• El retorno de inversión es del {resultado.roi.toFixed(2)}%</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card className="shadow-lg border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-lg">Fórmula del ROI</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-gray-50 rounded-lg font-mono text-center">
                    ROI = [(Beneficio - Inversión) / Inversión] × 100
                  </div>
                  <p className="text-gray-600">
                    El ROI mide el retorno que obtienes de una inversión en relación con su coste.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-lg">Ejemplo Práctico</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700">Campaña de Marketing</p>
                    <div className="mt-2 space-y-1 text-gray-600">
                      <p>• Inversión: 5,000€</p>
                      <p>• Ingresos: 12,000€</p>
                      <p>• Beneficio Neto: 7,000€</p>
                      <p className="font-semibold text-green-600">• ROI: 140%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-lg">Interpretación del ROI</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold text-green-600">ROI Positivo:</span> Has ganado dinero
                  </p>
                  <p>
                    <span className="font-semibold text-gray-600">ROI = 0%:</span> Punto de equilibrio
                  </p>
                  <p>
                    <span className="font-semibold text-red-600">ROI Negativo:</span> Has perdido dinero
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 prose prose-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Qué es el ROI y cómo calcularlo?</h2>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">¿Qué es el ROI (Return on Investment)?</h3>
            <p className="text-gray-700 mb-4">
              El ROI o Retorno de Inversión es una métrica financiera fundamental que mide la rentabilidad de una
              inversión. Te permite evaluar si una inversión ha sido exitosa comparando el beneficio obtenido con el
              coste inicial.
            </p>
            <p className="text-gray-700">
              Se expresa en porcentaje y es una de las métricas más utilizadas en el mundo empresarial para tomar
              decisiones de inversión, evaluar campañas de marketing, proyectos tecnológicos, y cualquier iniciativa que
              requiera una inversión económica.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fórmula del ROI: Cómo se Calcula</h3>
            <p className="text-gray-700 mb-4">La fórmula básica para calcular el ROI es la siguiente:</p>
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500 mb-4">
              <p className="font-mono text-lg text-center text-blue-900">
                ROI = [(Beneficio Obtenido - Inversión Inicial) / Inversión Inicial] × 100
              </p>
            </div>
            <p className="text-gray-700 mb-4">Donde:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Beneficio Obtenido:</strong> Los ingresos o valor total generado por la inversión
              </li>
              <li>
                <strong>Inversión Inicial:</strong> El coste total de la inversión realizada
              </li>
              <li>
                <strong>Beneficio Neto:</strong> La diferencia entre el beneficio y la inversión
              </li>
            </ul>
            <p className="text-gray-700">
              El resultado se multiplica por 100 para expresarlo en porcentaje, lo que facilita su interpretación y
              comparación con otras inversiones.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ejemplos de Cálculo de ROI</h3>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Ejemplo 1: Campaña de Google Ads</h4>
                <ul className="text-gray-700 space-y-1 mb-2">
                  <li>Inversión: 2,000€ en anuncios</li>
                  <li>Ingresos generados: 8,000€</li>
                  <li>Beneficio Neto: 6,000€</li>
                </ul>
                <p className="text-gray-700">
                  ROI = (6,000 / 2,000) × 100 = <span className="font-bold text-green-600">300%</span>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Por cada 1€ invertido, has obtenido 4€ (3€ de beneficio + 1€ de inversión).
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Ejemplo 2: Proyecto Tecnológico</h4>
                <ul className="text-gray-700 space-y-1 mb-2">
                  <li>Inversión: 50,000€ en desarrollo</li>
                  <li>Ingresos generados: 75,000€</li>
                  <li>Beneficio Neto: 25,000€</li>
                </ul>
                <p className="text-gray-700">
                  ROI = (25,000 / 50,000) × 100 = <span className="font-bold text-blue-600">50%</span>
                </p>
                <p className="text-sm text-gray-600 mt-2">Has obtenido un 50% de retorno sobre tu inversión inicial.</p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Ejemplo 3: Inversión No Rentable</h4>
                <ul className="text-gray-700 space-y-1 mb-2">
                  <li>Inversión: 10,000€ en inventario</li>
                  <li>Ingresos generados: 7,000€</li>
                  <li>Beneficio Neto: -3,000€</li>
                </ul>
                <p className="text-gray-700">
                  ROI = (-3,000 / 10,000) × 100 = <span className="font-bold text-red-600">-30%</span>
                </p>
                <p className="text-sm text-gray-600 mt-2">Has perdido el 30% de tu inversión inicial.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Usos del ROI en el Negocio</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Marketing Digital</h4>
                <p className="text-sm text-gray-700">
                  Medir la efectividad de campañas en Google Ads, Facebook Ads, email marketing y otras estrategias
                  digitales.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Proyectos Empresariales</h4>
                <p className="text-sm text-gray-700">
                  Evaluar la rentabilidad de nuevos productos, expansiones, inversiones en tecnología o infraestructura.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Formación y Desarrollo</h4>
                <p className="text-sm text-gray-700">
                  Calcular el retorno de la inversión en capacitación de empleados, cursos y certificaciones
                  profesionales.
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Equipamiento</h4>
                <p className="text-sm text-gray-700">
                  Determinar si la compra de maquinaria, software o equipamiento genera suficiente valor para justificar
                  el gasto.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ventajas y Limitaciones del ROI</h3>

            <div className="mb-6">
              <h4 className="font-semibold text-green-700 mb-3 text-lg">Ventajas del ROI</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Fácil de calcular:</strong> Fórmula simple que cualquiera puede entender
                </li>
                <li>
                  <strong>Universal:</strong> Permite comparar diferentes tipos de inversiones
                </li>
                <li>
                  <strong>Toma de decisiones:</strong> Ayuda a priorizar proyectos con mayor retorno
                </li>
                <li>
                  <strong>Medible:</strong> Proporciona un número concreto para evaluar el éxito
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-red-700 mb-3 text-lg">Limitaciones del ROI</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>No considera el tiempo:</strong> Un ROI del 50% en 1 mes es muy diferente a 50% en 5 años
                </li>
                <li>
                  <strong>Ignora el riesgo:</strong> No refleja el nivel de riesgo de la inversión
                </li>
                <li>
                  <strong>Costes ocultos:</strong> Puede no incluir todos los costes asociados
                </li>
                <li>
                  <strong>Beneficios intangibles:</strong> No captura valor de marca, satisfacción del cliente, etc.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Consejos para Mejorar tu ROI</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Reduce costes operativos</h4>
                  <p className="text-gray-700 text-sm">
                    Optimiza procesos, negocia con proveedores y elimina gastos innecesarios para aumentar el beneficio
                    neto.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Aumenta la conversión</h4>
                  <p className="text-gray-700 text-sm">
                    Mejora tus tasas de conversión mediante testing A/B, optimización de landing pages y mejor
                    segmentación.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Mide y analiza</h4>
                  <p className="text-gray-700 text-sm">
                    Implementa herramientas de análisis para identificar qué inversiones generan mayor retorno y duplica
                    esos esfuerzos.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Invierte en formación</h4>
                  <p className="text-gray-700 text-sm">
                    Capacita a tu equipo para maximizar la eficiencia y calidad del trabajo, generando mejores
                    resultados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Preguntas Frecuentes sobre ROI</h2>
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 hover:bg-gray-50">¿Qué es un buen ROI?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Un "buen" ROI depende del tipo de inversión, la industria y el plazo. En marketing digital, un ROI del
                  400% (5:1) se considera excelente. En inversiones financieras, un ROI del 7-10% anual es saludable.
                  Para proyectos empresariales, cualquier ROI superior al 15-20% suele considerarse positivo. Lo
                  importante es comparar con el coste de oportunidad de inversiones alternativas.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 hover:bg-gray-50">
                ¿Cuál es la diferencia entre ROI y ROAS?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  El ROI (Return on Investment) mide el beneficio neto en relación con la inversión, mientras que el
                  ROAS (Return on Ad Spend) mide los ingresos brutos generados por cada euro gastado en publicidad. El
                  ROAS no resta el coste de la inversión del resultado, por lo que siempre será más alto que el ROI para
                  la misma campaña.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 hover:bg-gray-50">
                ¿Cómo se calcula el ROI de una campaña de marketing?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700 mb-3">Para calcular el ROI de marketing, sigue estos pasos:</p>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Suma todos los costes de la campaña (anuncios, diseño, herramientas, etc.)</li>
                  <li>Calcula los ingresos directamente atribuibles a la campaña</li>
                  <li>Resta el coste de los productos vendidos si aplica</li>
                  <li>Aplica la fórmula: ROI = [(Ingresos - Costes) / Costes] × 100</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 hover:bg-gray-50">¿El ROI considera el factor tiempo?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  No, el ROI básico no considera el tiempo. Esta es una de sus principales limitaciones. Un ROI del 100%
                  en 1 año es muy diferente a un ROI del 100% en 10 años. Para considerar el tiempo, se utilizan
                  métricas complementarias como el ROI anualizado, el TIR (Tasa Interna de Retorno) o el valor presente
                  neto (VPN).
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 hover:bg-gray-50">¿Qué hacer si mi ROI es negativo?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700 mb-3">
                  Un ROI negativo indica que has perdido dinero. Acciones recomendadas:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Analiza dónde se están yendo los recursos sin generar retorno</li>
                  <li>Identifica qué canales o estrategias no funcionan y elimínalos</li>
                  <li>Optimiza la conversión y reduce costes operativos</li>
                  <li>Considera pivotar la estrategia o el producto/servicio</li>
                  <li>En algunos casos, abandonar la inversión puede ser lo más prudente</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="px-6 hover:bg-gray-50">¿Cómo interpretar un ROI del 200%?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Un ROI del 200% significa que has triplicado tu inversión inicial. Por cada 1€ invertido, has obtenido
                  3€ en total (2€ de beneficio + 1€ de inversión original). Es un retorno excelente que indica que la
                  inversión ha sido muy rentable. Por ejemplo, si invertiste 5,000€ y obtuviste 15,000€ en ingresos, tu
                  ROI es del 200%.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Calculadoras Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <RelatedCalculatorCard
              title="Calculadora de Ahorro"
              description="Calcula cuánto puedes ahorrar mensual y anualmente"
              href="/calculadora-ahorro"
              icon={<PiggyBank className="w-6 h-6 text-green-600" />}
              iconBgClassName="bg-green-100"
              buttonClassName="bg-green-600 hover:bg-green-700 text-white"
              buttonText="Calcular Ahorro"
            />
            <RelatedCalculatorCard
              title="Calculadora de Hipoteca"
              description="Calcula tu cuota mensual, intereses y amortización"
              href="/calculadora-hipoteca"
              icon={<Home className="w-6 h-6 text-blue-600" />}
              iconBgClassName="bg-blue-100"
              buttonClassName="bg-blue-600 hover:bg-blue-700 text-white"
              buttonText="Calcular Hipoteca"
            />
            <RelatedCalculatorCard
              title="Conversor IVA"
              description="Añade o quita IVA a cualquier precio fácilmente"
              href="/conversor-iva"
              icon={<Receipt className="w-6 h-6 text-purple-600" />}
              iconBgClassName="bg-purple-100"
              buttonClassName="bg-purple-600 hover:bg-purple-700 text-white"
              buttonText="Convertir IVA"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/">
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
