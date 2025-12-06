"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, Info, Receipt } from "lucide-react"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import RelatedCalculatorCard from "@/app/components/RelatedCalculatorCard"

const tiposIVA = [
  { value: "21", label: "General (21%)", porcentaje: 21 },
  { value: "10", label: "Reducido (10%)", porcentaje: 10 },
  { value: "4", label: "Superreducido (4%)", porcentaje: 4 },
]

export default function ConversorIVA() {
  const [tipoIVA, setTipoIVA] = useState("21")
  const [precioSinIVA, setPrecioSinIVA] = useState("")
  const [precioConIVA, setPrecioConIVA] = useState("")

  const porcentajeIVA = tiposIVA.find((t) => t.value === tipoIVA)?.porcentaje || 21

  const calcularConIVA = (sinIVA: string) => {
    const valor = Number.parseFloat(sinIVA)
    if (!isNaN(valor) && valor >= 0) {
      const conIVA = valor * (1 + porcentajeIVA / 100)
      setPrecioConIVA(conIVA.toFixed(2))
    } else {
      setPrecioConIVA("")
    }
  }

  const calcularSinIVA = (conIVA: string) => {
    const valor = Number.parseFloat(conIVA)
    if (!isNaN(valor) && valor >= 0) {
      const sinIVA = valor / (1 + porcentajeIVA / 100)
      setPrecioSinIVA(sinIVA.toFixed(2))
    } else {
      setPrecioSinIVA("")
    }
  }

  const importeIVA =
    precioSinIVA && precioConIVA
      ? (Number.parseFloat(precioConIVA) - Number.parseFloat(precioSinIVA)).toFixed(2)
      : "0.00"

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs currentPage="Conversor IVA" />

        {/* Hero Section */}
        <div className="text-center mb-12 mt-8">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">✓ Actualizado 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Conversor de IVA
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calcula el precio con IVA o sin IVA al instante. Añade o quita el IVA de cualquier cantidad con los tipos
            oficial es 2025: 21%, 10% y 4%.
          </p>
        </div>

        {/* Calculadora Principal */}
        <Card className="max-w-4xl mx-auto mb-12 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50">
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Calculadora de IVA
            </CardTitle>
            <CardDescription>Selecciona el tipo de IVA y calcula el precio con o sin impuesto</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {/* Selector de Tipo de IVA */}
            <div className="mb-6">
              <Label htmlFor="tipoIVA" className="text-base font-semibold mb-2 block">
                Tipo de IVA
              </Label>
              <Select value={tipoIVA} onValueChange={setTipoIVA}>
                <SelectTrigger id="tipoIVA" className="h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {tiposIVA.map((tipo) => (
                    <SelectItem key={tipo.value} value={tipo.value}>
                      {tipo.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Tabs defaultValue="sin-iva" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="sin-iva">Añadir IVA</TabsTrigger>
                <TabsTrigger value="con-iva">Quitar IVA</TabsTrigger>
              </TabsList>

              <TabsContent value="sin-iva" className="space-y-4">
                <div>
                  <Label htmlFor="precioSinIVA" className="text-base font-semibold mb-2 block">
                    Precio sin IVA (€)
                  </Label>
                  <Input
                    id="precioSinIVA"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="100.00"
                    value={precioSinIVA}
                    onChange={(e) => {
                      setPrecioSinIVA(e.target.value)
                      calcularConIVA(e.target.value)
                    }}
                    className="h-12 text-lg"
                  />
                </div>

                {precioConIVA && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 p-6 rounded-lg">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Base imponible:</span>
                        <span className="text-xl font-bold">{precioSinIVA} €</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">IVA ({porcentajeIVA}%):</span>
                        <span className="text-xl font-bold text-blue-600">+ {importeIVA} €</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between items-center">
                        <span className="text-lg font-semibold">Precio con IVA:</span>
                        <span className="text-3xl font-bold text-blue-600">{precioConIVA} €</span>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="con-iva" className="space-y-4">
                <div>
                  <Label htmlFor="precioConIVA" className="text-base font-semibold mb-2 block">
                    Precio con IVA (€)
                  </Label>
                  <Input
                    id="precioConIVA"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="121.00"
                    value={precioConIVA}
                    onChange={(e) => {
                      setPrecioConIVA(e.target.value)
                      calcularSinIVA(e.target.value)
                    }}
                    className="h-12 text-lg"
                  />
                </div>

                {precioSinIVA && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 p-6 rounded-lg">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Precio total:</span>
                        <span className="text-xl font-bold">{precioConIVA} €</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">IVA ({porcentajeIVA}%):</span>
                        <span className="text-xl font-bold text-red-600">- {importeIVA} €</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between items-center">
                        <span className="text-lg font-semibold">Precio sin IVA:</span>
                        <span className="text-3xl font-bold text-blue-600">{precioSinIVA} €</span>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Guía Completa */}
        <div className="max-w-4xl mx-auto mb-12 space-y-8">
          <h2 className="text-3xl font-bold">Guía Completa sobre el IVA en España 2025</h2>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                ¿Qué es el IVA?
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                El <strong>IVA (Impuesto sobre el Valor Añadido)</strong> es un impuesto indirecto que grava el consumo
                de bienes y servicios en España. Es el consumidor final quien paga el IVA, mientras que las empresas
                actúan como intermediarias recaudadoras para Hacienda.
              </p>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-bold">Tipos de IVA en España 2025</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="bg-blue-50 dark:bg-blue-950/30">
                <CardTitle className="text-blue-600">IVA General (21%)</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Se aplica a la mayoría de bienes y servicios:</p>
                <ul className="text-sm space-y-2">
                  <li>• Electrónica y tecnología</li>
                  <li>• Ropa y calzado</li>
                  <li>• Servicios profesionales</li>
                  <li>• Hostelería y restauración</li>
                  <li>• Vehículos</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-cyan-50 dark:bg-cyan-950/30">
                <CardTitle className="text-cyan-600">IVA Reducido (10%)</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Aplicado a productos y servicios específicos:</p>
                <ul className="text-sm space-y-2">
                  <li>• Alimentos elaborados</li>
                  <li>• Transporte de viajeros</li>
                  <li>• Servicios de hostelería</li>
                  <li>• Entradas a espectáculos</li>
                  <li>• Vivienda de protección oficial</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-green-50 dark:bg-green-950/30">
                <CardTitle className="text-green-600">IVA Superreducido (4%)</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Reservado para productos de primera necesidad:</p>
                <ul className="text-sm space-y-2">
                  <li>• Pan y cereales</li>
                  <li>• Leche y derivados</li>
                  <li>• Frutas y verduras</li>
                  <li>• Medicamentos de uso humano</li>
                  <li>• Libros y periódicos</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold">Cómo Calcular el IVA</h3>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="h-5 w-5 text-blue-600" />
                Fórmulas de Cálculo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Añadir IVA (calcular precio final)</h4>
                <p className="font-mono text-sm">Precio con IVA = Precio sin IVA × (1 + % IVA / 100)</p>
                <p className="text-sm text-muted-foreground mt-2">Ejemplo: 100€ × 1.21 = 121€</p>
              </div>

              <div className="bg-cyan-50 dark:bg-cyan-950/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Quitar IVA (calcular base imponible)</h4>
                <p className="font-mono text-sm">Precio sin IVA = Precio con IVA / (1 + % IVA / 100)</p>
                <p className="text-sm text-muted-foreground mt-2">Ejemplo: 121€ / 1.21 = 100€</p>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Calcular solo el importe del IVA</h4>
                <p className="font-mono text-sm">Importe IVA = Precio sin IVA × (% IVA / 100)</p>
                <p className="text-sm text-muted-foreground mt-2">Ejemplo: 100€ × 0.21 = 21€</p>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-bold">Obligaciones con el IVA</h3>

          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">Para Autónomos y Empresas</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      <strong>Repercutir el IVA:</strong> Incluir el IVA en las facturas a clientes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      <strong>Deducir el IVA soportado:</strong> Descontar el IVA pagado en compras relacionadas con la
                      actividad
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      <strong>Declaraciones trimestrales:</strong> Presentar el modelo 303 cada trimestre
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      <strong>Resumen anual:</strong> Presentar el modelo 390 antes del 30 de enero
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Plazos de Presentación del IVA</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="font-semibold">Modelo 303 (Trimestral)</p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• 1T: 1-20 abril</li>
                      <li>• 2T: 1-20 julio</li>
                      <li>• 3T: 1-20 octubre</li>
                      <li>• 4T: 1-30 enero</li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="font-semibold">Modelo 390 (Anual)</p>
                    <p className="text-sm mt-2">Del 1 al 30 de enero del año siguiente</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-bold">Preguntas Frecuentes sobre el IVA</h3>

          <div className="space-y-4">
            {[
              {
                q: "¿Cuándo se aplica el IVA del 21%?",
                a: "El IVA general del 21% se aplica a la mayoría de bienes y servicios que no están incluidos en las categorías de IVA reducido o superreducido. Esto incluye electrónica, ropa, servicios profesionales, hostelería y la mayoría de productos de consumo general.",
              },
              {
                q: "¿Puedo recuperar el IVA que pago?",
                a: "Sí, si eres autónomo o empresa puedes deducir el IVA soportado en tus compras y gastos relacionados con tu actividad económica. La diferencia entre el IVA repercutido (cobrado) y el soportado (pagado) es lo que se ingresa a Hacienda trimestralmente.",
              },
              {
                q: "¿Cómo afecta el IVA al precio final?",
                a: "El IVA se añade al precio base del producto o servicio. Por ejemplo, un producto de 100€ más IVA del 21% costará 121€ al consumidor final. El vendedor recauda esos 21€ de IVA para ingresarlos a Hacienda.",
              },
              {
                q: "¿Qué productos tienen IVA del 4%?",
                a: "El IVA superreducido del 4% se aplica a productos de primera necesidad como pan, leche, huevos, frutas, verduras, cereales, quesos y medicamentos de uso humano. También se aplica a libros, periódicos y revistas no publicitarias.",
              },
              {
                q: "¿Cuándo debo presentar el IVA?",
                a: "Las declaraciones trimestrales del IVA (modelo 303) se presentan en abril, julio, octubre y enero. Además, antes del 30 de enero debes presentar el resumen anual (modelo 390). Los autónomos en ciertos regímenes pueden tener obligaciones diferentes.",
              },
              {
                q: "¿Existe IVA al 0% en España?",
                a: "No existe un tipo de IVA del 0% en España peninsular. Sin embargo, hay operaciones exentas de IVA como servicios médicos, educativos y financieros. En Canarias se aplica el IGIC en lugar del IVA, que sí tiene un tipo del 0%.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Calculadoras Relacionadas */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Calculadoras Relacionadas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <RelatedCalculatorCard
              title="Conversor IGIC (Canarias)"
              description="Calcula el precio con IGIC o sin IGIC para productos en Canarias"
              icon="💰"
              features={["Tipos IGIC 0%, 3%, 7%", "Específico para Canarias", "Cálculo instantáneo"]}
              href="/conversor-igic"
              buttonText="Calcular IGIC"
              iconBgColor="bg-yellow-100 dark:bg-yellow-900/30"
              iconColor="text-yellow-600 dark:text-yellow-400"
            />
            <RelatedCalculatorCard
              title="Conversor Bruto-Neto"
              description="Convierte salario bruto a neto con todas las deducciones aplicadas"
              icon="💵"
              features={["17 comunidades autónomas", "IRPF y Seguridad Social", "Cálculo mensual y anual"]}
              href="/conversor-salario-bruto-neto"
              buttonText="Convertir Salario"
              iconBgColor="bg-purple-100 dark:bg-purple-900/30"
              iconColor="text-purple-600 dark:text-purple-400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
