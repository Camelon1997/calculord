"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, Info, Palmtree, Receipt } from "lucide-react"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import RelatedCalculatorCard from "@/app/components/RelatedCalculatorCard"

const tiposIGIC = [
  { value: "0", label: "Tipo Cero (0%)", porcentaje: 0 },
  { value: "3", label: "Reducido (3%)", porcentaje: 3 },
  { value: "7", label: "General (7%)", porcentaje: 7 },
  { value: "9.5", label: "Incrementado (9.5%)", porcentaje: 9.5 },
  { value: "13.5", label: "Incrementado (13.5%)", porcentaje: 13.5 },
  { value: "20", label: "Especial (20%)", porcentaje: 20 },
]

export default function ConversorIGIC() {
  const [tipoIGIC, setTipoIGIC] = useState("7")
  const [precioSinIGIC, setPrecioSinIGIC] = useState("")
  const [precioConIGIC, setPrecioConIGIC] = useState("")

  const porcentajeIGIC = tiposIGIC.find((t) => t.value === tipoIGIC)?.porcentaje || 7

  const calcularConIGIC = (sinIGIC: string) => {
    const valor = Number.parseFloat(sinIGIC)
    if (!isNaN(valor) && valor >= 0) {
      const conIGIC = valor * (1 + porcentajeIGIC / 100)
      setPrecioConIGIC(conIGIC.toFixed(2))
    } else {
      setPrecioConIGIC("")
    }
  }

  const calcularSinIGIC = (conIGIC: string) => {
    const valor = Number.parseFloat(conIGIC)
    if (!isNaN(valor) && valor >= 0) {
      const sinIGIC = valor / (1 + porcentajeIGIC / 100)
      setPrecioSinIGIC(sinIGIC.toFixed(2))
    } else {
      setPrecioSinIGIC("")
    }
  }

  const importeIGIC =
    precioSinIGIC && precioConIGIC
      ? (Number.parseFloat(precioConIGIC) - Number.parseFloat(precioSinIGIC)).toFixed(2)
      : "0.00"

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs currentPage="Conversor IGIC" />

        {/* Hero Section */}
        <div className="text-center mb-12 mt-8">
          <div className="inline-block mb-4 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
            <span className="text-yellow-600 dark:text-yellow-400 font-semibold flex items-center gap-2">
              <Palmtree className="h-4 w-4" />
              Específico para Canarias - Actualizado 2025
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Conversor de IGIC Canarias
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calcula el precio con IGIC o sin IGIC al instante. El impuesto específico de Canarias con todos los tipos
            oficiales 2025: 0%, 3%, 7%, 9.5%, 13.5% y 20%.
          </p>
        </div>

        {/* Calculadora Principal */}
        <Card className="max-w-4xl mx-auto mb-12 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/50 dark:to-orange-950/50">
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Calculadora de IGIC
            </CardTitle>
            <CardDescription>Selecciona el tipo de IGIC y calcula el precio con o sin impuesto</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {/* Selector de Tipo de IGIC */}
            <div className="mb-6">
              <Label htmlFor="tipoIGIC" className="text-base font-semibold mb-2 block">
                Tipo de IGIC
              </Label>
              <Select value={tipoIGIC} onValueChange={setTipoIGIC}>
                <SelectTrigger id="tipoIGIC" className="h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {tiposIGIC.map((tipo) => (
                    <SelectItem key={tipo.value} value={tipo.value}>
                      {tipo.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Tabs defaultValue="sin-igic" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="sin-igic">Añadir IGIC</TabsTrigger>
                <TabsTrigger value="con-igic">Quitar IGIC</TabsTrigger>
              </TabsList>

              <TabsContent value="sin-igic" className="space-y-4">
                <div>
                  <Label htmlFor="precioSinIGIC" className="text-base font-semibold mb-2 block">
                    Precio sin IGIC (€)
                  </Label>
                  <Input
                    id="precioSinIGIC"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="100.00"
                    value={precioSinIGIC}
                    onChange={(e) => {
                      setPrecioSinIGIC(e.target.value)
                      calcularConIGIC(e.target.value)
                    }}
                    className="h-12 text-lg"
                  />
                </div>

                {precioConIGIC && (
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/50 dark:to-orange-950/50 p-6 rounded-lg">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Base imponible:</span>
                        <span className="text-xl font-bold">{precioSinIGIC} €</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">IGIC ({porcentajeIGIC}%):</span>
                        <span className="text-xl font-bold text-yellow-600">+ {importeIGIC} €</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between items-center">
                        <span className="text-lg font-semibold">Precio con IGIC:</span>
                        <span className="text-3xl font-bold text-yellow-600">{precioConIGIC} €</span>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="con-igic" className="space-y-4">
                <div>
                  <Label htmlFor="precioConIGIC" className="text-base font-semibold mb-2 block">
                    Precio con IGIC (€)
                  </Label>
                  <Input
                    id="precioConIGIC"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="107.00"
                    value={precioConIGIC}
                    onChange={(e) => {
                      setPrecioConIGIC(e.target.value)
                      calcularSinIGIC(e.target.value)
                    }}
                    className="h-12 text-lg"
                  />
                </div>

                {precioSinIGIC && (
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/50 dark:to-orange-950/50 p-6 rounded-lg">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Precio total:</span>
                        <span className="text-xl font-bold">{precioConIGIC} €</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">IGIC ({porcentajeIGIC}%):</span>
                        <span className="text-xl font-bold text-red-600">- {importeIGIC} €</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between items-center">
                        <span className="text-lg font-semibold">Precio sin IGIC:</span>
                        <span className="text-3xl font-bold text-yellow-600">{precioSinIGIC} €</span>
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
          <h2 className="text-3xl font-bold">Guía Completa sobre el IGIC en Canarias 2025</h2>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-yellow-600" />
                ¿Qué es el IGIC?
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                El <strong>IGIC (Impuesto General Indirecto Canario)</strong> es el impuesto que se aplica en las Islas
                Canarias en lugar del IVA. Se trata de un impuesto indirecto que grava el consumo de bienes y servicios
                en el archipiélago canario. Los tipos del IGIC son considerablemente más bajos que los del IVA
                peninsular, siendo una de las ventajas fiscales del Régimen Económico y Fiscal (REF) de Canarias.
              </p>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-bold">Tipos de IGIC en Canarias 2025</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="bg-green-50 dark:bg-green-950/30">
                <CardTitle className="text-green-600">Tipo Cero (0%)</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Productos de primera necesidad:</p>
                <ul className="text-sm space-y-2">
                  <li>• Pan, leche, huevos</li>
                  <li>• Medicamentos esenciales</li>
                  <li>• Agua potable</li>
                  <li>• Libros y periódicos</li>
                  <li>• Material escolar</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-cyan-50 dark:bg-cyan-950/30">
                <CardTitle className="text-cyan-600">Reducido (3%)</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Productos y servicios específicos:</p>
                <ul className="text-sm space-y-2">
                  <li>• Productos industriales</li>
                  <li>• Productos textiles y cuero</li>
                  <li>• Productos químicos</li>
                  <li>• Entradas a cine y teatro</li>
                  <li>• Productos agrícolas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-yellow-50 dark:bg-yellow-950/30">
                <CardTitle className="text-yellow-600">General (7%)</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Tipo estándar para la mayoría:</p>
                <ul className="text-sm space-y-2">
                  <li>• Electrónica y tecnología</li>
                  <li>• Ropa y calzado</li>
                  <li>• Servicios profesionales</li>
                  <li>• Hostelería</li>
                  <li>• La mayoría de productos</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-orange-50 dark:bg-orange-950/30">
                <CardTitle className="text-orange-600">Incrementado (9.5%)</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Vehículos y servicios relacionados:</p>
                <ul className="text-sm space-y-2">
                  <li>• Vehículos automóviles</li>
                  <li>• Servicios de taller</li>
                  <li>• Repuestos de vehículos</li>
                  <li>• Accesorios de automóvil</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-red-50 dark:bg-red-950/30">
                <CardTitle className="text-red-600">Incrementado (13.5%)</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Productos de lujo:</p>
                <ul className="text-sm space-y-2">
                  <li>• Bebidas alcohólicas</li>
                  <li>• Joyería y bisutería</li>
                  <li>• Perfumería de lujo</li>
                  <li>• Productos selectos</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-purple-50 dark:bg-purple-950/30">
                <CardTitle className="text-purple-600">Especial (20%)</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Productos del tabaco:</p>
                <ul className="text-sm space-y-2">
                  <li>• Tabaco negro</li>
                  <li>• Cigarros y puros</li>
                  <li>• Productos relacionados</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold">Diferencias entre IGIC e IVA</h3>

          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Palmtree className="h-5 w-5 text-yellow-600" />
                    IGIC (Canarias)
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>Tipo general: 7% (más bajo)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>Solo en Islas Canarias</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>Tiene tipo 0% para básicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>Más tipos diferenciados (6 tipos)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span>Parte del REF de Canarias</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Receipt className="h-5 w-5 text-blue-600" />
                    IVA (Península)
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Tipo general: 21% (más alto)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>En resto de España</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Tipo mínimo: 4% (superreducido)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Tres tipos principales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Régimen tributario común UE</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-bold">Obligaciones con el IGIC</h3>

          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">Para Autónomos y Empresas en Canarias</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">✓</span>
                    <span>
                      <strong>Repercutir el IGIC:</strong> Incluir el IGIC en las facturas a clientes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">✓</span>
                    <span>
                      <strong>Deducir el IGIC soportado:</strong> Descontar el IGIC pagado en compras de la actividad
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">✓</span>
                    <span>
                      <strong>Declaraciones trimestrales:</strong> Presentar el modelo 420 cada trimestre
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">✓</span>
                    <span>
                      <strong>Resumen anual:</strong> Presentar el modelo 425 antes del 30 de enero
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Plazos de Presentación del IGIC</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="font-semibold">Modelo 420 (Trimestral)</p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• 1T: 1-20 abril</li>
                      <li>• 2T: 1-20 julio</li>
                      <li>• 3T: 1-20 octubre</li>
                      <li>• 4T: 1-30 enero</li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="font-semibold">Modelo 425 (Anual)</p>
                    <p className="text-sm mt-2">Del 1 al 30 de enero del año siguiente</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-bold">Preguntas Frecuentes sobre el IGIC</h3>

          <div className="space-y-4">
            {[
              {
                q: "¿Por qué el IGIC es más bajo que el IVA?",
                a: "El IGIC es parte del Régimen Económico y Fiscal (REF) de Canarias, diseñado para compensar las desventajas geográficas y económicas del archipiélago. Los tipos más bajos fomentan el consumo y la actividad económica en las islas.",
              },
              {
                q: "¿Puedo comprar en Península sin pagar IVA si soy de Canarias?",
                a: "No exactamente. Las compras online desde Península a Canarias no llevan IVA, pero pueden llevar IGIC y derechos de importación según el valor del envío. Las empresas peninsulares no deben repercutir IVA en ventas a Canarias.",
              },
              {
                q: "¿Cuándo se aplica el IGIC del 0%?",
                a: "El tipo cero del IGIC se aplica a productos de primera necesidad como pan, leche, huevos, frutas, verduras, agua potable, medicamentos esenciales, libros, periódicos y material escolar. También a la electricidad para uso doméstico con potencia contratada hasta 10kW.",
              },
              {
                q: "¿Qué productos llevan IGIC del 13.5%?",
                a: "El tipo incrementado del 13.5% se aplica principalmente a productos de lujo como bebidas alcohólicas (excepto vino y cerveza), perfumería selecta, joyería, bisutería fina y algunos productos del tabaco. Es equivalente a gravar productos no esenciales.",
              },
              {
                q: "¿Tengo que declarar el IGIC si soy autónomo en Canarias?",
                a: "Sí, si eres autónomo o empresa en Canarias debes repercutir el IGIC correspondiente en tus facturas y presentar las declaraciones trimestrales (modelo 420) y el resumen anual (modelo 425). Puedes deducir el IGIC soportado en tus compras relacionadas con la actividad.",
              },
              {
                q: "¿El IGIC es deducible para empresas?",
                a: "Sí, las empresas y autónomos en Canarias pueden deducir el IGIC soportado (pagado) en sus compras y gastos relacionados con la actividad económica. La diferencia entre el IGIC repercutido y el soportado es lo que se ingresa o se solicita devolución a Hacienda.",
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
              title="Conversor IVA"
              description="Calcula el precio con IVA o sin IVA para productos en España peninsular"
              icon="💰"
              features={["Tipos IVA 21%, 10%, 4%", "España peninsular", "Cálculo instantáneo"]}
              href="/conversor-iva"
              buttonText="Calcular IVA"
              iconBgColor="bg-blue-100 dark:bg-blue-900/30"
              iconColor="text-blue-600 dark:text-blue-400"
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
