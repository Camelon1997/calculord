"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, TrendingDown, ArrowRight, Info, PiggyBank, FileText, Palmtree } from "lucide-react"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import RelatedCalculatorCard from "@/app/components/RelatedCalculatorCard"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CalculadoraIGICRepercutidoSoportado() {
  const [igicRepercutido, setIgicRepercutido] = useState<string>("")
  const [igicSoportado, setIgicSoportado] = useState<string>("")

  const calcularDiferencia = () => {
    const repercutido = Number.parseFloat(igicRepercutido) || 0
    const soportado = Number.parseFloat(igicSoportado) || 0
    return repercutido - soportado
  }

  const diferencia = calcularDiferencia()
  const esAPagar = diferencia > 0
  const esADevolver = diferencia < 0

  const resetear = () => {
    setIgicRepercutido("")
    setIgicSoportado("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-7xl">
        <Breadcrumbs currentPage="Calculadora de IGIC Repercutido y Soportado" />

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <Palmtree className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Calculadora de IGIC Repercutido y Soportado
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Calcula la diferencia entre el IGIC repercutido y soportado para Canarias y saber cuánto debes pagar o
            devolver
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Calculadora */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-xl">
                <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                  <Calculator className="h-6 w-6" />
                  Calcula tu IGIC
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-6">
                  {/* IGIC Repercutido */}
                  <div className="space-y-2">
                    <Label htmlFor="igicRepercutido" className="text-base font-semibold flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      IGIC Repercutido (cobrado a clientes)
                    </Label>
                    <div className="relative">
                      <Input
                        id="igicRepercutido"
                        type="number"
                        placeholder="0.00"
                        value={igicRepercutido}
                        onChange={(e) => setIgicRepercutido(e.target.value)}
                        className="text-lg pl-8 h-12"
                        step="0.01"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                    </div>
                    <p className="text-sm text-gray-600 flex items-start gap-2">
                      <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      El IGIC que has cobrado a tus clientes en tus facturas emitidas
                    </p>
                  </div>

                  {/* IGIC Soportado */}
                  <div className="space-y-2">
                    <Label htmlFor="igicSoportado" className="text-base font-semibold flex items-center gap-2">
                      <TrendingDown className="h-5 w-5 text-red-600" />
                      IGIC Soportado (pagado a proveedores)
                    </Label>
                    <div className="relative">
                      <Input
                        id="igicSoportado"
                        type="number"
                        placeholder="0.00"
                        value={igicSoportado}
                        onChange={(e) => setIgicSoportado(e.target.value)}
                        className="text-lg pl-8 h-12"
                        step="0.01"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                    </div>
                    <p className="text-sm text-gray-600 flex items-start gap-2">
                      <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      El IGIC que has pagado en tus compras y gastos deducibles
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
            <Card className="shadow-xl border-0 bg-gradient-to-br from-purple-50 to-pink-50">
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
                    {esAPagar
                      ? "A pagar a Hacienda Canaria"
                      : esADevolver
                        ? "A devolver por Hacienda Canaria"
                        : "Diferencia"}
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
                      IGIC Repercutido
                    </span>
                    <span className="font-semibold text-green-600">
                      {Number.parseFloat(igicRepercutido || "0").toFixed(2)} €
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-sm text-gray-600 flex items-center gap-2">
                      <TrendingDown className="h-4 w-4 text-red-600" />
                      IGIC Soportado
                    </span>
                    <span className="font-semibold text-red-600">
                      {Number.parseFloat(igicSoportado || "0").toFixed(2)} €
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Información adicional */}
            <Card className="shadow-lg border-purple-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Info className="h-5 w-5 text-purple-600" />
                  Información
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-purple-600" />
                    <span>Declaración trimestral (Modelo 420) para empresas canarias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-purple-600" />
                    <span>El IGIC es exclusivo de Canarias, similar al IVA peninsular</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-purple-600" />
                    <span>Los tipos del IGIC (0%, 3%, 7%) son menores que el IVA</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contenido SEO - Similar estructura pero adaptado a IGIC Canarias */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">¿Qué es el IGIC Repercutido y Soportado?</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-purple max-w-none">
                <p className="text-gray-600 mb-4">
                  El <strong>IGIC (Impuesto General Indirecto Canario)</strong> es el equivalente al IVA en las Islas
                  Canarias. Funciona de manera similar pero con tipos impositivos más bajos, adaptados a la especial
                  situación económica del archipiélago.
                </p>

                <Tabs defaultValue="repercutido" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="repercutido">IGIC Repercutido</TabsTrigger>
                    <TabsTrigger value="soportado">IGIC Soportado</TabsTrigger>
                  </TabsList>
                  <TabsContent value="repercutido" className="space-y-4 mt-4">
                    <h3 className="text-xl font-semibold text-gray-900">IGIC Repercutido</h3>
                    <p className="text-gray-600">
                      El <strong>IGIC repercutido</strong> es el impuesto que un autónomo o empresa en Canarias cobra a
                      sus clientes al vender productos o prestar servicios. Este IGIC se añade a las facturas emitidas y
                      debe ingresarse posteriormente en la Agencia Tributaria Canaria.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                      <p className="text-sm text-green-800 font-medium mb-1">Ejemplo práctico</p>
                      <p className="text-sm text-green-700">
                        Si vendes un producto por 1.000€ + 7% IGIC (70€), el total facturado es 1.070€. Los 70€ de IGIC
                        son el IGIC repercutido que has cobrado a tu cliente.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="soportado" className="space-y-4 mt-4">
                    <h3 className="text-xl font-semibold text-gray-900">IGIC Soportado</h3>
                    <p className="text-gray-600">
                      El <strong>IGIC soportado</strong> es el impuesto que un autónomo o empresa paga cuando adquiere
                      bienes o servicios en Canarias para su actividad económica. Este IGIC es deducible si cumple los
                      requisitos establecidos.
                    </p>
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                      <p className="text-sm text-purple-800 font-medium mb-1">Ejemplo práctico</p>
                      <p className="text-sm text-purple-700">
                        Si compras material para tu negocio por 500€ + 7% IGIC (35€), pagas 535€. Los 35€ de IGIC son el
                        IGIC soportado que puedes deducir.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Tipos de IGIC en Canarias 2025</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">El IGIC tiene varios tipos impositivos según el producto o servicio:</p>

                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 border-l-4 border-gray-400 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-900">Tipo Cero</h4>
                      <span className="text-2xl font-bold text-gray-700">0%</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Bienes esenciales: agua, alimentos básicos, medicamentos, libros, prensa y electricidad doméstica.
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-900">Tipo Reducido</h4>
                      <span className="text-2xl font-bold text-green-700">3%</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Productos industriales, textil, papel, servicios culturales, productos agrícolas y ganaderos.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-900">Tipo General</h4>
                      <span className="text-2xl font-bold text-blue-700">7%</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      La mayoría de bienes y servicios no incluidos en otras categorías. Equivalente al 21% del IVA
                      peninsular.
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-900">Tipo Incrementado</h4>
                      <span className="text-2xl font-bold text-orange-700">9.5% - 13.5%</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Vehículos (9.5%), bebidas alcohólicas, joyería y perfumería (13.5%).
                    </p>
                  </div>

                  <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-900">Tipo Especial</h4>
                      <span className="text-2xl font-bold text-red-700">20% - 35%</span>
                    </div>
                    <p className="text-sm text-gray-600">Tabacos: 20% para tabaco negro y 35% para tabaco rubio.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Más contenido similar al IVA pero adaptado a IGIC */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Diferencias entre IGIC e IVA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                      <Palmtree className="h-5 w-5" />
                      IGIC (Canarias)
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-purple-600" />
                        Tipo general: 7%
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-purple-600" />
                        Solo aplica en Canarias
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-purple-600" />
                        Modelo 420 (trimestral)
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-purple-600" />
                        Gestión: Agencia Tributaria Canaria
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">IVA (Península)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-600" />
                        Tipo general: 21%
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-600" />
                        Aplica en España peninsular
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-600" />
                        Modelo 303 (trimestral)
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-600" />
                        Gestión: Agencia Tributaria
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mt-4">
                  <p className="text-sm text-amber-800 font-medium flex items-start gap-2">
                    <Info className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>
                      Importante: Canarias tiene un régimen fiscal especial que permite tipos más bajos para fomentar la
                      economía insular.
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-lg sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Ventajas del IGIC en Canarias</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-600 flex-shrink-0" />
                    <span>Tipos impositivos más bajos que el IVA peninsular</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-600 flex-shrink-0" />
                    <span>Menor carga fiscal para empresas y consumidores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-600 flex-shrink-0" />
                    <span>Fomenta la competitividad de las empresas canarias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-600 flex-shrink-0" />
                    <span>Sistema simplificado adaptado a la economía insular</span>
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
                <AccordionTrigger className="text-left">¿El IGIC es lo mismo que el IVA?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  No, aunque son similares. El IGIC es el impuesto indirecto que se aplica exclusivamente en Canarias,
                  mientras que el IVA se aplica en la península y Baleares. El IGIC tiene tipos más bajos (7% general
                  frente al 21% del IVA) debido al régimen fiscal especial de Canarias. Ambos funcionan de la misma
                  manera: se cobra a clientes y se deduce de proveedores.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  ¿Cuándo debo presentar la declaración del IGIC?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  La declaración del IGIC (Modelo 420) se presenta trimestralmente: del 1 al 20 de abril, julio, octubre
                  y enero (este último del 1 al 30). Además, debes presentar el resumen anual (Modelo 425) en enero.
                  Algunas grandes empresas pueden estar obligadas a declarar mensualmente. Los plazos son similares a
                  los del IVA peninsular.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">¿Puedo deducir el IGIC de todas mis compras?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  No, solo puedes deducir el IGIC soportado de compras y gastos relacionados directamente con tu
                  actividad económica. Debes tener facturas completas, estar dado de alta en el registro de empresarios,
                  y que tu actividad dé derecho a deducción. No son deducibles gastos personales, ni el IGIC de ciertos
                  bienes como vehículos de uso mixto, excepto casos específicos (taxis, autoescuelas, etc.).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  ¿Qué pasa si vendo a península desde Canarias?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Las ventas de Canarias a la península están exentas de IGIC (se considera exportación). El comprador
                  peninsular no paga IGIC sino IVA en destino (inversión del sujeto pasivo). Debes emitir la factura sin
                  IGIC y conservar la documentación de transporte. Para ventas a particulares peninsulares, puede
                  aplicar IVA según las reglas de comercio a distancia. Es importante documentar bien estas operaciones.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  ¿Puedo solicitar devolución del IGIC soportado?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Sí, si tu IGIC soportado supera al repercutido puedes solicitar la devolución en cada declaración
                  trimestral o compensarlo en trimestres futuros. La Agencia Tributaria Canaria suele tardar unos 6
                  meses en devolver el IGIC. Es común en empresas con inversiones altas o exportadoras que tienen mucho
                  IGIC soportado pero poco repercutido. Asegúrate de tener toda la documentación en regla.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  ¿Necesito software especial para gestionar el IGIC?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  No es obligatorio, pero es muy recomendable usar software de contabilidad que soporte IGIC para
                  automatizar cálculos y evitar errores. La mayoría de programas de facturación y contabilidad españoles
                  incluyen soporte para IGIC. También puedes usar esta calculadora para verificar manualmente tus
                  cálculos trimestrales y asegurarte de que todo está correcto antes de presentar la declaración.
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
              title="Calculadora IVA Repercutido y Soportado"
              description="Calcula el IVA para empresas en península"
              href="/calculadora-iva-repercutido-soportado"
              icon={<Calculator className="h-6 w-6" />}
              bgColor="from-blue-500 to-indigo-500"
              iconBgClassName="bg-blue-100"
              buttonClassName="bg-blue-600 hover:bg-blue-700 text-white"
              buttonText="Calcular IVA"
            />
            <RelatedCalculatorCard
              title="Conversor IGIC"
              description="Añade o quita IGIC a cualquier precio"
              href="/conversor-igic"
              icon={<FileText className="h-6 w-6" />}
              bgColor="from-purple-500 to-pink-500"
              iconBgClassName="bg-purple-100"
              buttonClassName="bg-purple-600 hover:bg-purple-700 text-white"
              buttonText="Convertir IGIC"
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
