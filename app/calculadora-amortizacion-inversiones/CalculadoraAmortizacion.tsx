"use client"

import { useState } from "react"
import { Calculator, TrendingDown, FileText, Building, Laptop, Truck, Wrench, Info } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import RelatedCalculatorCard from "@/app/components/RelatedCalculatorCard"

type AssetType = {
  name: string
  coefficient: number
  maxYears: number
  icon: any
}

const assetTypes: Record<string, AssetType> = {
  edificios: { name: "Edificios y construcciones", coefficient: 3, maxYears: 68, icon: Building },
  instalaciones: { name: "Instalaciones, mobiliario y enseres", coefficient: 10, maxYears: 20, icon: FileText },
  maquinaria: { name: "Maquinaria", coefficient: 12, maxYears: 18, icon: Wrench },
  transporte: { name: "Elementos de transporte", coefficient: 16, maxYears: 14, icon: Truck },
  informatica: { name: "Equipos informáticos y software", coefficient: 26, maxYears: 10, icon: Laptop },
  herramientas: { name: "Útiles y herramientas", coefficient: 30, maxYears: 8, icon: Wrench },
}

export default function CalculadoraAmortizacion() {
  const [assetType, setAssetType] = useState("informatica")
  const [purchaseValue, setPurchaseValue] = useState("")
  const [isUsed, setIsUsed] = useState(false)
  const [customYears, setCustomYears] = useState("")

  const selectedAsset = assetTypes[assetType]
  const effectiveCoefficient = isUsed ? selectedAsset.coefficient * 2 : selectedAsset.coefficient
  const years = customYears ? Number.parseInt(customYears) : selectedAsset.maxYears
  const purchaseAmount = Number.parseFloat(purchaseValue) || 0

  // Cálculos
  const annualAmortization = purchaseAmount * (effectiveCoefficient / 100)
  const monthlyAmortization = annualAmortization / 12
  const totalAmortization = annualAmortization * years
  const amortizationPercentage = (effectiveCoefficient / 100) * years * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumbs currentPage="Calculadora de Amortización" />

        {/* Header */}
        <div className="mt-8 mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <TrendingDown className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Calculadora de Amortización de Inversiones
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calcula la amortización de tus activos según las tablas oficiales de Hacienda y optimiza tus deducciones
            fiscales
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Calculadora */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-xl bg-white/80 backdrop-blur">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Datos de la Inversión</h2>
              </div>

              <Tabs defaultValue="calculadora" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="calculadora">Calculadora</TabsTrigger>
                  <TabsTrigger value="tabla">Tabla Completa</TabsTrigger>
                </TabsList>

                <TabsContent value="calculadora" className="space-y-6">
                  {/* Tipo de Activo */}
                  <div className="space-y-2">
                    <Label htmlFor="assetType">Tipo de Activo</Label>
                    <Select value={assetType} onValueChange={setAssetType}>
                      <SelectTrigger id="assetType">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(assetTypes).map(([key, asset]) => (
                          <SelectItem key={key} value={key}>
                            {asset.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Valor de Compra */}
                  <div className="space-y-2">
                    <Label htmlFor="purchaseValue">Valor de Compra (€)</Label>
                    <Input
                      id="purchaseValue"
                      type="number"
                      placeholder="15000"
                      value={purchaseValue}
                      onChange={(e) => setPurchaseValue(e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  {/* Activo Usado */}
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                    <input
                      type="checkbox"
                      id="isUsed"
                      checked={isUsed}
                      onChange={(e) => setIsUsed(e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300"
                    />
                    <Label htmlFor="isUsed" className="cursor-pointer">
                      Activo de segunda mano (coeficiente x2)
                    </Label>
                  </div>

                  {/* Años Personalizados */}
                  <div className="space-y-2">
                    <Label htmlFor="customYears">Años de Amortización (máx: {selectedAsset.maxYears})</Label>
                    <Input
                      id="customYears"
                      type="number"
                      placeholder={selectedAsset.maxYears.toString()}
                      value={customYears}
                      onChange={(e) => {
                        const val = Number.parseInt(e.target.value) || 0
                        if (val <= selectedAsset.maxYears) {
                          setCustomYears(e.target.value)
                        }
                      }}
                      max={selectedAsset.maxYears}
                    />
                  </div>

                  {/* Info del Activo */}
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm space-y-1">
                        <p className="font-semibold text-gray-900">Parámetros de {selectedAsset.name}:</p>
                        <p className="text-gray-700">
                          • Coeficiente lineal máximo: <strong>{effectiveCoefficient}%</strong>
                          {isUsed && " (x2 por ser usado)"}
                        </p>
                        <p className="text-gray-700">
                          • Período máximo: <strong>{selectedAsset.maxYears} años</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="tabla" className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-gray-300">
                          <th className="text-left py-3 px-2 font-semibold">Tipo de Activo</th>
                          <th className="text-center py-3 px-2 font-semibold">Coef. Máx.</th>
                          <th className="text-center py-3 px-2 font-semibold">Años Máx.</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {Object.entries(assetTypes).map(([key, asset]) => (
                          <tr key={key} className="hover:bg-gray-50">
                            <td className="py-3 px-2">{asset.name}</td>
                            <td className="text-center py-3 px-2 font-semibold text-blue-600">{asset.coefficient}%</td>
                            <td className="text-center py-3 px-2">{asset.maxYears}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-600 italic mt-4">
                    Tabla simplificada de amortización según la Agencia Tributaria para el régimen de estimación directa
                    simplificada.
                  </p>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Resultados */}
          <div className="space-y-6">
            <Card className="p-6 shadow-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingDown className="w-5 h-5" />
                Amortización Anual
              </h3>
              <p className="text-4xl font-bold mb-2">{annualAmortization.toFixed(2)} €</p>
              <p className="text-blue-100">Gasto deducible por año</p>
            </Card>

            <Card className="p-6 shadow-xl bg-white">
              <h3 className="text-sm font-semibold text-gray-600 mb-4">Desglose Completo</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Amortización mensual:</span>
                  <span className="font-bold text-gray-900">{monthlyAmortization.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Amortización anual:</span>
                  <span className="font-bold text-gray-900">{annualAmortization.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Total en {years} años:</span>
                  <span className="font-bold text-gray-900">{totalAmortization.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">% Amortizado:</span>
                  <span className="font-bold text-green-600">{Math.min(amortizationPercentage, 100).toFixed(1)}%</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
              <h3 className="text-sm font-semibold text-amber-900 mb-3 flex items-center gap-2">
                <Info className="w-4 h-4" />
                Importante
              </h3>
              <p className="text-sm text-amber-800">
                La amortización reduce tu base imponible en el IRPF. Asegúrate de registrarla correctamente en tu
                contabilidad cada año.
              </p>
            </Card>
          </div>
        </div>

        {/* Contenido SEO */}
        <div className="max-w-4xl mx-auto space-y-12 mb-16">
          {/* Qué es */}
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Qué es la Amortización de Inversiones?</h2>
            <p className="text-gray-700 leading-relaxed">
              La <strong>amortización de inversiones</strong> es un mecanismo fiscal que permite a los autónomos y
              empresas recuperar el coste de sus activos fijos distribuyendo su valor a lo largo de su vida útil. En
              lugar de deducir el coste total en el año de compra, se distribuye proporcionalmente durante varios años,
              reflejando la depreciación real del bien.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Este sistema permite deducir cada año una parte del valor de la inversión como gasto fiscalmente
              deducible, reduciendo así la base imponible del IRPF o del Impuesto de Sociedades. Es especialmente
              relevante para inversiones importantes como vehículos, equipos informáticos, maquinaria o inmuebles.
            </p>
          </section>

          {/* Cómo funciona */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Cómo Funciona la Amortización?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Método Lineal</h3>
                <p className="text-gray-700">
                  El método más común. Se aplica un porcentaje fijo cada año sobre el valor de adquisición. Por ejemplo,
                  un ordenador con coeficiente del 26% se amortiza en aproximadamente 4 años.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Tablas de Hacienda</h3>
                <p className="text-gray-700">
                  La Agencia Tributaria establece coeficientes máximos y períodos máximos de amortización para cada tipo
                  de activo, garantizando que las deducciones sean justas y acordes al desgaste real.
                </p>
              </Card>
            </div>
          </section>

          {/* Tabla Detallada */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tabla Oficial de Amortización 2025</h2>
            <Card className="p-6 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Tipo de Bien</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Coef. Máximo</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900">Período Máximo</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Ejemplo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4">Equipos informáticos y software</td>
                    <td className="text-center py-3 px-4 font-semibold text-blue-600">26%</td>
                    <td className="text-center py-3 px-4">10 años</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Ordenadores, portátiles, tablets</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Útiles y herramientas</td>
                    <td className="text-center py-3 px-4 font-semibold text-blue-600">30%</td>
                    <td className="text-center py-3 px-4">8 años</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Taladros, sierras, herramientas</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Elementos de transporte</td>
                    <td className="text-center py-3 px-4 font-semibold text-blue-600">16%</td>
                    <td className="text-center py-3 px-4">14 años</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Coches, furgonetas, motos</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Maquinaria</td>
                    <td className="text-center py-3 px-4 font-semibold text-blue-600">12%</td>
                    <td className="text-center py-3 px-4">18 años</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Maquinaria industrial, equipos</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Instalaciones y mobiliario</td>
                    <td className="text-center py-3 px-4 font-semibold text-blue-600">10%</td>
                    <td className="text-center py-3 px-4">20 años</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Mesas, sillas, estanterías</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Edificios y construcciones</td>
                    <td className="text-center py-3 px-4 font-semibold text-blue-600">3%</td>
                    <td className="text-center py-3 px-4">68 años</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Locales, naves, oficinas</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </section>

          {/* Requisitos */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Requisitos para Amortizar Correctamente</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ✓ El activo debe ser propiedad de la empresa o autónomo
                </h3>
                <p className="text-gray-700">
                  Solo puedes amortizar bienes que están registrados a nombre de tu actividad económica. Los bienes en
                  leasing pueden amortizarse bajo condiciones específicas.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ✓ Debe estar afecto a la actividad económica
                </h3>
                <p className="text-gray-700">
                  El bien debe utilizarse exclusivamente o principalmente para tu actividad profesional. Si un ordenador
                  se usa 80% para trabajo y 20% personal, solo se amortiza el 80%.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">✓ Debe registrarse contablemente</h3>
                <p className="text-gray-700">
                  La amortización debe aparecer en tus libros contables cada año. No registrarla significa perder la
                  deducción fiscal de ese ejercicio.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">✓ No superar el valor de adquisición</h3>
                <p className="text-gray-700">
                  La suma total de todas las amortizaciones no puede superar el precio de compra del bien más los costes
                  necesarios hasta su puesta en funcionamiento.
                </p>
              </Card>
            </div>
          </section>

          {/* Consejos */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos para Optimizar tus Amortizaciones</h2>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl">1.</span>
                  <div>
                    <strong className="text-gray-900">Aplica el coeficiente máximo:</strong>
                    <span className="text-gray-700">
                      {" "}
                      Usar el coeficiente máximo permitido acelera la recuperación de la inversión y reduce antes tu
                      base imponible.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl">2.</span>
                  <div>
                    <strong className="text-gray-900">Bienes usados duplican coeficiente:</strong>
                    <span className="text-gray-700">
                      {" "}
                      Si compras un activo de segunda mano, puedes aplicar el doble del coeficiente normal, amortizando
                      más rápido.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl">3.</span>
                  <div>
                    <strong className="text-gray-900">Registra todas las inversiones:</strong>
                    <span className="text-gray-700">
                      {" "}
                      Incluso las pequeñas compras como ratones, teclados o cables pueden sumarse como útiles y
                      herramientas.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl">4.</span>
                  <div>
                    <strong className="text-gray-900">Planifica grandes inversiones:</strong>
                    <span className="text-gray-700">
                      {" "}
                      Haz inversiones importantes a principio de año para amortizar todo el ejercicio, o a final si
                      necesitas reducir la base imponible de ese año.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl">5.</span>
                  <div>
                    <strong className="text-gray-900">Consulta con tu gestor:</strong>
                    <span className="text-gray-700">
                      {" "}
                      Cada situación es única. Un asesor fiscal puede ayudarte a optimizar tus amortizaciones según tu
                      caso concreto.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Puedo amortizar un ordenador que compré hace 2 años?
                </h3>
                <p className="text-gray-700">
                  Sí, pero solo a partir del momento en que lo afectes a tu actividad económica. Si lo compraste en 2023
                  y lo empiezas a usar para tu negocio en 2025, la amortización empieza en 2025.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Qué pasa si no amortic en un año?</h3>
                <p className="text-gray-700">
                  Si no registras la amortización en un ejercicio fiscal, pierdes esa deducción para ese año específico.
                  No puedes "recuperarla" en años posteriores. Por eso es importante amortizar consistentemente cada
                  año.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Puedo amortizar un coche personal usado para trabajo?
                </h3>
                <p className="text-gray-700">
                  Sí, pero solo la parte proporcional a su uso profesional. Si lo usas 60% para trabajo, solo amorticas
                  el 60% del valor. Además, hay límites específicos para vehículos turismo (máximo 25.000€ de base).
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Los activos de menos de 300€ se pueden deducir directamente?
                </h3>
                <p className="text-gray-700">
                  Sí, existe una excepción. Los bienes de escaso valor (menos de 300€) pueden deducirse como gasto del
                  ejercicio sin necesidad de amortizarlos, siempre que el total anual no supere 25.000€.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Qué hago si vendo un activo antes de amortizarlo completamente?
                </h3>
                <p className="text-gray-700">
                  Al vender el activo, debes calcular la diferencia entre el precio de venta y el valor neto contable
                  (valor inicial menos amortizaciones acumuladas). Esta diferencia genera una ganancia o pérdida
                  patrimonial que tributará en tu IRPF.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Puedo cambiar el método de amortización una vez empezado?
                </h3>
                <p className="text-gray-700">
                  Generalmente no. Una vez eliges un método y coeficiente de amortización, debes mantenerlo durante toda
                  la vida útil del activo salvo causas justificadas aprobadas por Hacienda.
                </p>
              </Card>
            </div>
          </section>
        </div>

        {/* Calculadoras Relacionadas */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Calculadoras Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <RelatedCalculatorCard
              title="Gastos Deducibles"
              description="Calcula todos tus gastos deducibles como autónomo"
              href="/calculadora-gastos-deducibles-autonomos"
              icon={<FileText className="w-6 h-6" />}
              iconBgClassName="bg-green-100"
              buttonText="Calcular Gastos"
              buttonClassName="bg-green-600 hover:bg-green-700 text-white"
            />
            <RelatedCalculatorCard
              title="Cuota Autónomos"
              description="Calcula tu cuota mensual de autónomos según tramos"
              href="/calculadora-cuota-autonomos"
              icon={<Calculator className="w-6 h-6" />}
              iconBgClassName="bg-blue-100"
              buttonText="Calcular Cuota"
              buttonClassName="bg-blue-600 hover:bg-blue-700 text-white"
            />
            <RelatedCalculatorCard
              title="IRPF Autónomos"
              description="Calcula tu IRPF trimestral como autónomo"
              href="/calculadora-irpf-autonomos"
              icon={<TrendingDown className="w-6 h-6" />}
              iconBgClassName="bg-purple-100"
              buttonText="Calcular IRPF"
              buttonClassName="bg-purple-600 hover:bg-purple-700 text-white"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
