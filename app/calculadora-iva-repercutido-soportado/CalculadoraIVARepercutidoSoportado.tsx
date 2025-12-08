"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, TrendingDown, ArrowRight, Info, PiggyBank, FileText } from "lucide-react"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import RelatedCalculatorCard from "@/app/components/RelatedCalculatorCard"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CalculadoraIVARepercutidoSoportado() {
  const [ivaRepercutido, setIvaRepercutido] = useState<string>("")
  const [ivaSoportado, setIvaSoportado] = useState<string>("")

  const calcularDiferencia = () => {
    const repercutido = Number.parseFloat(ivaRepercutido) || 0
    const soportado = Number.parseFloat(ivaSoportado) || 0
    return repercutido - soportado
  }

  const diferencia = calcularDiferencia()
  const esAPagar = diferencia > 0
  const esADevolver = diferencia < 0

  const resetear = () => {
    setIvaRepercutido("")
    setIvaSoportado("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-7xl">
        <Breadcrumbs currentPage="Calculadora de IVA Repercutido y Soportado" />

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4 shadow-lg">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Calculadora de IVA Repercutido y Soportado
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Calcula la diferencia entre el IVA repercutido y soportado para saber cuánto debes pagar o devolver a
            Hacienda
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Calculadora */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-xl">
                <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                  <Calculator className="h-6 w-6" />
                  Calcula tu IVA
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-6">
                  {/* IVA Repercutido */}
                  <div className="space-y-2">
                    <Label htmlFor="ivaRepercutido" className="text-base font-semibold flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      IVA Repercutido (cobrado a clientes)
                    </Label>
                    <div className="relative">
                      <Input
                        id="ivaRepercutido"
                        type="number"
                        placeholder="0.00"
                        value={ivaRepercutido}
                        onChange={(e) => setIvaRepercutido(e.target.value)}
                        className="text-lg pl-8 h-12"
                        step="0.01"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                    </div>
                    <p className="text-sm text-gray-600 flex items-start gap-2">
                      <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      El IVA que has cobrado a tus clientes en tus facturas emitidas
                    </p>
                  </div>

                  {/* IVA Soportado */}
                  <div className="space-y-2">
                    <Label htmlFor="ivaSoportado" className="text-base font-semibold flex items-center gap-2">
                      <TrendingDown className="h-5 w-5 text-red-600" />
                      IVA Soportado (pagado a proveedores)
                    </Label>
                    <div className="relative">
                      <Input
                        id="ivaSoportado"
                        type="number"
                        placeholder="0.00"
                        value={ivaSoportado}
                        onChange={(e) => setIvaSoportado(e.target.value)}
                        className="text-lg pl-8 h-12"
                        step="0.01"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                    </div>
                    <p className="text-sm text-gray-600 flex items-start gap-2">
                      <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      El IVA que has pagado en tus compras y gastos deducibles
                    </p>
                  </div>

                  {/* Botones */}
                  <div className="flex gap-3 pt-4">
                    <Button onClick={resetear} variant="outline" className="flex-1 h-12 bg-transparent">
                      Resetear
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resultados */}
          <div className="space-y-6">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="text-lg">Resultado</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Diferencia */}
                <div
                  className={`p-6 rounded-xl ${
                    esAPagar
                      ? "bg-gradient-to-br from-red-500 to-orange-500"
                      : esADevolver
                        ? "bg-gradient-to-br from-green-500 to-emerald-500"
                        : "bg-gradient-to-br from-gray-400 to-gray-500"
                  } text-white shadow-lg`}
                >
                  <p className="text-sm font-medium mb-2 opacity-90">
                    {esAPagar ? "A pagar a Hacienda" : esADevolver ? "A devolver por Hacienda" : "Diferencia"}
                  </p>
                  <p className="text-3xl sm:text-4xl font-bold">{Math.abs(diferencia).toFixed(2)} €</p>
                  {diferencia !== 0 && (
                    <p className="text-sm mt-2 opacity-90">
                      {esAPagar ? "Debes ingresar esta cantidad" : "Hacienda te devolverá esta cantidad"}
                    </p>
                  )}
                </div>

                {/* Desglose */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-sm text-gray-600 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      IVA Repercutido
                    </span>
                    <span className="font-semibold text-green-600">
                      {Number.parseFloat(ivaRepercutido || "0").toFixed(2)} €
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-sm text-gray-600 flex items-center gap-2">
                      <TrendingDown className="h-4 w-4 text-red-600" />
                      IVA Soportado
                    </span>
                    <span className="font-semibold text-red-600">
                      {Number.parseFloat(ivaSoportado || "0").toFixed(2)} €
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Información adicional */}
            <Card className="shadow-lg border-blue-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-600" />
                  Información
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-600" />
                    <span>Declaración trimestral (Modelo 303) o mensual según tu actividad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-600" />
                    <span>Si el resultado es negativo, puedes solicitar devolución o compensar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-600" />
                    <span>Conserva todas las facturas que justifiquen el IVA soportado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contenido SEO */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">¿Qué es el IVA Repercutido y Soportado?</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-blue max-w-none">
                <Tabs defaultValue="repercutido" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="repercutido">IVA Repercutido</TabsTrigger>
                    <TabsTrigger value="soportado">IVA Soportado</TabsTrigger>
                  </TabsList>
                  <TabsContent value="repercutido" className="space-y-4 mt-4">
                    <h3 className="text-xl font-semibold text-gray-900">IVA Repercutido</h3>
                    <p className="text-gray-600">
                      El <strong>IVA repercutido</strong> es el impuesto que un autónomo o empresa cobra a sus clientes
                      cuando vende productos o presta servicios. Este IVA aparece en las facturas que emites y no es un
                      ingreso propio, sino un tributo que debes entregar a Hacienda.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                      <p className="text-sm text-green-800 font-medium mb-1">Ejemplo práctico</p>
                      <p className="text-sm text-green-700">
                        Si vendes un servicio por 1.000€ + 21% IVA (210€), el total facturado es 1.210€. Los 210€ de IVA
                        son el IVA repercutido que has cobrado a tu cliente.
                      </p>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 mt-0.5 text-green-600 flex-shrink-0" />
                        <span>Se cobra en las facturas emitidas a clientes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 mt-0.5 text-green-600 flex-shrink-0" />
                        <span>Aparece como pasivo en tu contabilidad</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 mt-0.5 text-green-600 flex-shrink-0" />
                        <span>Debe ingresarse íntegramente a Hacienda (menos el IVA soportado deducible)</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="soportado" className="space-y-4 mt-4">
                    <h3 className="text-xl font-semibold text-gray-900">IVA Soportado</h3>
                    <p className="text-gray-600">
                      El <strong>IVA soportado</strong> es el impuesto que un autónomo o empresa paga cuando adquiere
                      productos o servicios necesarios para su actividad económica. Este IVA aparece en las facturas que
                      recibes de tus proveedores y gastos deducibles.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                      <p className="text-sm text-blue-800 font-medium mb-1">Ejemplo práctico</p>
                      <p className="text-sm text-blue-700">
                        Si compras material de oficina por 500€ + 21% IVA (105€), pagas un total de 605€. Los 105€ de
                        IVA son el IVA soportado que puedes deducir.
                      </p>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span>Se paga en las facturas recibidas de proveedores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span>Aparece como activo en tu contabilidad</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span>Es deducible si está relacionado con tu actividad profesional</span>
                      </li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Cómo Calcular la Diferencia de IVA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Fórmula del cálculo</h3>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200">
                    <p className="text-center text-xl font-bold text-blue-900 mb-2">
                      IVA a Pagar/Devolver = IVA Repercutido - IVA Soportado
                    </p>
                    <p className="text-center text-sm text-blue-700">(Modelo 303 - Casilla 71)</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Posibles resultados</h3>

                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Resultado Positivo (A pagar)
                    </h4>
                    <p className="text-sm text-red-800">
                      Si el IVA repercutido es mayor que el soportado, debes ingresar la diferencia a Hacienda en los
                      plazos establecidos (trimestral o mensual según tu régimen).
                    </p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <TrendingDown className="h-5 w-5" />
                      Resultado Negativo (A devolver)
                    </h4>
                    <p className="text-sm text-green-800">
                      Si el IVA soportado es mayor que el repercutido, puedes solicitar la devolución a Hacienda o
                      compensar con siguientes declaraciones. La devolución suele tardar unos 6 meses.
                    </p>
                  </div>

                  <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">Resultado Cero</h4>
                    <p className="text-sm text-gray-700">
                      Si ambas cantidades son iguales, no hay nada que pagar ni devolver, pero debes presentar
                      igualmente la declaración.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Requisitos para Deducir el IVA Soportado</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  No todo el IVA que pagas es deducible. Para que el IVA soportado sea deducible debe cumplir estos
                  requisitos:
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Relacionado con la actividad</h4>
                      <p className="text-sm text-gray-600">
                        El bien o servicio debe estar vinculado a tu actividad profesional o empresarial. No puedes
                        deducir gastos personales.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Factura completa</h4>
                      <p className="text-sm text-gray-600">
                        Debes tener una factura completa con todos los datos obligatorios (NIF, base imponible, IVA
                        desglosado, etc.).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Actividad con derecho a deducción</h4>
                      <p className="text-sm text-gray-600">
                        Tu actividad debe dar derecho a deducir el IVA. Algunas actividades exentas (sanidad, educación,
                        seguros) no permiten la deducción.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Registro contable</h4>
                      <p className="text-sm text-gray-600">
                        Las facturas deben estar correctamente registradas en tus libros contables y en el registro de
                        IVA soportado.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Plazos de Declaración del IVA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  La presentación del IVA (Modelo 303) depende de tu régimen de declaración:
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Declaración Trimestral (Lo más común)</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>
                        <strong>1er Trimestre:</strong> Del 1 al 20 de abril
                      </li>
                      <li>
                        <strong>2º Trimestre:</strong> Del 1 al 20 de julio
                      </li>
                      <li>
                        <strong>3er Trimestre:</strong> Del 1 al 20 de octubre
                      </li>
                      <li>
                        <strong>4º Trimestre:</strong> Del 1 al 30 de enero
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Declaración Mensual</h4>
                    <p className="text-sm text-gray-600">
                      Obligatorio para grandes empresas (facturación superior a 6 millones de euros) y opcional para
                      otras. Se presenta del 1 al 20 del mes siguiente al declarado.
                    </p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-sm text-amber-800 font-medium flex items-start gap-2">
                      <Info className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>
                        Recuerda presentar el Modelo 390 (resumen anual del IVA) en enero, que incluye toda la
                        información del año anterior.
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Errores Comunes al Calcular el IVA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Deducir IVA de gastos no relacionados con la actividad
                      </h4>
                      <p className="text-sm text-gray-600">
                        Solo es deducible el IVA de gastos profesionales. Los gastos personales o no justificados no dan
                        derecho a deducción.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">No conservar las facturas originales</h4>
                      <p className="text-sm text-gray-600">
                        Hacienda puede requerir las facturas que justifican el IVA soportado hasta 4 años después.
                        Guárdalas todas correctamente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Confundir la base imponible con el total</h4>
                      <p className="text-sm text-gray-600">
                        El IVA se calcula sobre la base imponible, no sobre el total de la factura que ya incluye el
                        IVA.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Olvidar presentar la declaración con resultado cero
                      </h4>
                      <p className="text-sm text-gray-600">
                        Aunque el resultado sea 0, debes presentar el Modelo 303 igualmente o podrías recibir sanciones.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">No aplicar la prorrata cuando corresponde</h4>
                      <p className="text-sm text-gray-600">
                        Si realizas operaciones con y sin derecho a deducción, debes calcular la prorrata de IVA
                        deducible.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-lg sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Consejos para Optimizar tu IVA</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Digitaliza todas tus facturas para no perder ninguna deducción</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Revisa que todas las facturas tengan el IVA correctamente desglosado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Considera solicitar devoluciones trimestrales si tu IVA soportado es alto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Usa software de contabilidad para automatizar el cálculo y evitar errores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>Planifica tus compras: si esperas pagar mucho IVA, adelanta gastos deducibles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <Card className="shadow-lg mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Preguntas Frecuentes</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  ¿Qué pasa si no puedo pagar el IVA a Hacienda?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Si no puedes pagar el IVA en el plazo establecido, Hacienda te cobrará intereses de demora y posibles
                  recargos. Puedes solicitar un aplazamiento o fraccionamiento de la deuda antes de que venza el plazo.
                  Es importante no ignorar el problema, ya que las sanciones aumentan con el tiempo. Contacta con un
                  asesor fiscal para evaluar las mejores opciones en tu caso.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  ¿Puedo deducir el IVA de compras anteriores a darme de alta como autónomo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Sí, puedes deducir el IVA de compras realizadas hasta 4 años antes de iniciar la actividad, siempre
                  que los bienes o servicios se utilicen para la actividad profesional. Debes tener las facturas
                  completas a tu nombre y el gasto debe estar directamente relacionado con tu actividad empresarial.
                  Esto incluye equipos, mobiliario, herramientas, etc.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  ¿Cuándo puedo solicitar la devolución del IVA?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Puedes solicitar la devolución del IVA cuando el IVA soportado supera al repercutido. Hay dos
                  opciones: solicitar la devolución en cada declaración trimestral, o compensar el saldo negativo en
                  trimestres posteriores. Las devoluciones suelen tardar unos 6 meses, aunque pueden adelantarse si
                  aportas garantías. En la declaración anual (Modelo 390) se regulariza toda la situación del año.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">¿Qué es la regla de prorrata del IVA?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  La regla de prorrata se aplica cuando realizas operaciones con derecho a deducción y operaciones sin
                  derecho a deducción (exentas). En estos casos, solo puedes deducir un porcentaje del IVA soportado,
                  calculado según la proporción de tus ingresos que dan derecho a deducción. Por ejemplo, si el 80% de
                  tus ingresos dan derecho a deducción, solo podrás deducir el 80% del IVA soportado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">¿Puedo deducir el IVA de un coche o gasolina?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  La deducción del IVA de vehículos y combustible es limitada. Solo puedes deducir el IVA del coche si
                  se usa exclusivamente para la actividad (taxis, autoescuelas, comerciales). En coches mixtos (uso
                  personal y profesional) no se puede deducir el IVA. La gasolina tiene las mismas restricciones. Sin
                  embargo, sí puedes deducir el IVA de reparaciones, seguros y parking si el vehículo se usa para la
                  actividad.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  ¿Qué diferencia hay entre el IVA trimestral y el Modelo 390?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  El Modelo 303 es la declaración trimestral del IVA donde ingresas o solicitas la devolución del IVA
                  cada 3 meses. El Modelo 390 es el resumen anual de todas las operaciones del año, donde se consolidan
                  los 4 trimestres. El 390 es informativo y no conlleva pagos adicionales (el pago se hace
                  trimestralmente), pero es obligatorio presentarlo en enero. Ambos deben coincidir en los datos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Calculadoras Relacionadas */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Calculadoras Relacionadas
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <RelatedCalculatorCard
              title="Calculadora IGIC Repercutido y Soportado"
              description="Calcula el IGIC para empresas en Canarias"
              href="/calculadora-igic-repercutido-soportado"
              icon={<Calculator className="h-6 w-6" />}
              bgColor="from-purple-500 to-pink-500"
              iconBgClassName="bg-purple-100"
              buttonClassName="bg-purple-600 hover:bg-purple-700 text-white"
              buttonText="Calcular IGIC"
            />
            <RelatedCalculatorCard
              title="Conversor IVA"
              description="Añade o quita IVA a cualquier precio"
              href="/conversor-iva"
              icon={<FileText className="h-6 w-6" />}
              bgColor="from-blue-500 to-cyan-500"
              iconBgClassName="bg-blue-100"
              buttonClassName="bg-blue-600 hover:bg-blue-700 text-white"
              buttonText="Convertir IVA"
            />
            <RelatedCalculatorCard
              title="Gastos Deducibles Autónomos"
              description="Calcula todos tus gastos deducibles"
              href="/calculadora-gastos-deducibles-autonomos"
              icon={<PiggyBank className="h-6 w-6" />}
              bgColor="from-green-500 to-emerald-500"
              iconBgClassName="bg-green-100"
              buttonClassName="bg-green-600 hover:bg-green-700 text-white"
              buttonText="Ver Gastos"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
