"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import RelatedCalculatorCard from "@/app/components/RelatedCalculatorCard"
import { FileText, Download, Plus, Trash2, Building2, Calculator, Receipt, TrendingUp, Eye } from "lucide-react"

interface LineaFactura {
  id: number
  concepto: string
  cantidad: number
  precioUnitario: number
  descuento: number
}

export default function GeneradorFacturas() {
  const [numeroFactura, setNumeroFactura] = useState("")
  const [fecha, setFecha] = useState(new Date().toISOString().split("T")[0])

  // Datos emisor
  const [nombreEmisor, setNombreEmisor] = useState("")
  const [nifEmisor, setNifEmisor] = useState("")
  const [direccionEmisor, setDireccionEmisor] = useState("")
  const [cpEmisor, setCpEmisor] = useState("")
  const [ciudadEmisor, setCiudadEmisor] = useState("")

  // Datos cliente
  const [nombreCliente, setNombreCliente] = useState("")
  const [nifCliente, setNifCliente] = useState("")
  const [direccionCliente, setDireccionCliente] = useState("")
  const [cpCliente, setCpCliente] = useState("")
  const [ciudadCliente, setCiudadCliente] = useState("")

  // Configuración impuestos
  const [tipoImpuesto, setTipoImpuesto] = useState<"iva" | "igic">("iva")
  const [tipoIVA, setTipoIVA] = useState("21")
  const [tipoIGIC, setTipoIGIC] = useState("7")
  const [aplicarIRPF, setAplicarIRPF] = useState(false)
  const [tipoIRPF, setTipoIRPF] = useState("15")

  // Líneas de factura
  const [lineas, setLineas] = useState<LineaFactura[]>([
    { id: 1, concepto: "", cantidad: 1, precioUnitario: 0, descuento: 0 },
  ])

  const [plantilla, setPlantilla] = useState<"moderna" | "clasica" | "minimalista">("moderna")

  const agregarLinea = () => {
    setLineas([
      ...lineas,
      {
        id: Date.now(),
        concepto: "",
        cantidad: 1,
        precioUnitario: 0,
        descuento: 0,
      },
    ])
  }

  const eliminarLinea = (id: number) => {
    if (lineas.length > 1) {
      setLineas(lineas.filter((l) => l.id !== id))
    }
  }

  const actualizarLinea = (id: number, campo: keyof LineaFactura, valor: any) => {
    setLineas(lineas.map((l) => (l.id === id ? { ...l, [campo]: valor } : l)))
  }

  // Cálculos
  const calcularSubtotalLinea = (linea: LineaFactura) => {
    const subtotal = linea.cantidad * linea.precioUnitario
    const descuento = subtotal * (linea.descuento / 100)
    return subtotal - descuento
  }

  const baseImponible = lineas.reduce((sum, linea) => sum + calcularSubtotalLinea(linea), 0)

  const porcentajeImpuesto = tipoImpuesto === "iva" ? Number.parseFloat(tipoIVA) : Number.parseFloat(tipoIGIC)
  const cuotaImpuesto = baseImponible * (porcentajeImpuesto / 100)

  const cuotaIRPF = aplicarIRPF ? baseImponible * (Number.parseFloat(tipoIRPF) / 100) : 0
  const totalFactura = baseImponible + cuotaImpuesto - cuotaIRPF

  const generarPDF = () => {
    const contenidoFactura = document.getElementById("factura-preview")
    if (!contenidoFactura) return

    // Abrir ventana de impresión del navegador
    window.print()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumbs currentPage="Generador de Facturas" />

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Generador de Facturas Profesionales
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crea facturas profesionales gratis con cálculo automático de IVA, IGIC e IRPF. Exporta a PDF con diseño
            moderno.
          </p>
        </div>

        {/* Calculadora y Preview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Panel de Datos */}
          <div className="space-y-6">
            <Card className="p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-blue-600" />
                Datos de la Factura
              </h2>

              <Tabs defaultValue="basico" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="basico">Básico</TabsTrigger>
                  <TabsTrigger value="emisor">Emisor</TabsTrigger>
                  <TabsTrigger value="cliente">Cliente</TabsTrigger>
                  <TabsTrigger value="lineas">Líneas</TabsTrigger>
                </TabsList>

                <TabsContent value="basico" className="space-y-4">
                  <div>
                    <Label htmlFor="numero">Número de Factura *</Label>
                    <Input
                      id="numero"
                      placeholder="Ej: 2025-001"
                      value={numeroFactura}
                      onChange={(e) => setNumeroFactura(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="fecha">Fecha de Emisión *</Label>
                    <Input id="fecha" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                  </div>

                  <div>
                    <Label htmlFor="impuesto">Tipo de Impuesto *</Label>
                    <Select value={tipoImpuesto} onValueChange={(v: "iva" | "igic") => setTipoImpuesto(v)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="iva">IVA (Península y Baleares)</SelectItem>
                        <SelectItem value="igic">IGIC (Canarias)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {tipoImpuesto === "iva" ? (
                    <div>
                      <Label htmlFor="tipoIVA">Tipo de IVA *</Label>
                      <Select value={tipoIVA} onValueChange={setTipoIVA}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="21">General (21%)</SelectItem>
                          <SelectItem value="10">Reducido (10%)</SelectItem>
                          <SelectItem value="4">Superreducido (4%)</SelectItem>
                          <SelectItem value="0">Exento (0%)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ) : (
                    <div>
                      <Label htmlFor="tipoIGIC">Tipo de IGIC *</Label>
                      <Select value={tipoIGIC} onValueChange={setTipoIGIC}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">Tipo cero (0%)</SelectItem>
                          <SelectItem value="3">Reducido (3%)</SelectItem>
                          <SelectItem value="7">General (7%)</SelectItem>
                          <SelectItem value="9.5">Incrementado (9.5%)</SelectItem>
                          <SelectItem value="13.5">Especial (13.5%)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg">
                    <input
                      type="checkbox"
                      id="irpf"
                      checked={aplicarIRPF}
                      onChange={(e) => setAplicarIRPF(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <Label htmlFor="irpf" className="cursor-pointer">
                      Aplicar retención IRPF
                    </Label>
                  </div>

                  {aplicarIRPF && (
                    <div>
                      <Label htmlFor="tipoIRPF">Porcentaje IRPF</Label>
                      <Select value={tipoIRPF} onValueChange={setTipoIRPF}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="7">7% (Actividades profesionales)</SelectItem>
                          <SelectItem value="15">15% (Actividades profesionales general)</SelectItem>
                          <SelectItem value="19">19% (Actividades agrícolas/ganaderas)</SelectItem>
                          <SelectItem value="21">21% (Arrendamiento inmuebles urbanos)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="emisor" className="space-y-4">
                  <div>
                    <Label htmlFor="nombreEmisor">Nombre o Razón Social *</Label>
                    <Input
                      id="nombreEmisor"
                      placeholder="Tu nombre o empresa"
                      value={nombreEmisor}
                      onChange={(e) => setNombreEmisor(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="nifEmisor">NIF/CIF *</Label>
                    <Input
                      id="nifEmisor"
                      placeholder="12345678A"
                      value={nifEmisor}
                      onChange={(e) => setNifEmisor(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="direccionEmisor">Dirección</Label>
                    <Input
                      id="direccionEmisor"
                      placeholder="Calle, número, piso"
                      value={direccionEmisor}
                      onChange={(e) => setDireccionEmisor(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cpEmisor">Código Postal</Label>
                      <Input
                        id="cpEmisor"
                        placeholder="28001"
                        value={cpEmisor}
                        onChange={(e) => setCpEmisor(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="ciudadEmisor">Ciudad</Label>
                      <Input
                        id="ciudadEmisor"
                        placeholder="Madrid"
                        value={ciudadEmisor}
                        onChange={(e) => setCiudadEmisor(e.target.value)}
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="cliente" className="space-y-4">
                  <div>
                    <Label htmlFor="nombreCliente">Nombre o Razón Social *</Label>
                    <Input
                      id="nombreCliente"
                      placeholder="Nombre del cliente"
                      value={nombreCliente}
                      onChange={(e) => setNombreCliente(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="nifCliente">NIF/CIF</Label>
                    <Input
                      id="nifCliente"
                      placeholder="12345678B"
                      value={nifCliente}
                      onChange={(e) => setNifCliente(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="direccionCliente">Dirección</Label>
                    <Input
                      id="direccionCliente"
                      placeholder="Calle, número, piso"
                      value={direccionCliente}
                      onChange={(e) => setDireccionCliente(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cpCliente">Código Postal</Label>
                      <Input
                        id="cpCliente"
                        placeholder="28002"
                        value={cpCliente}
                        onChange={(e) => setCpCliente(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="ciudadCliente">Ciudad</Label>
                      <Input
                        id="ciudadCliente"
                        placeholder="Madrid"
                        value={ciudadCliente}
                        onChange={(e) => setCiudadCliente(e.target.value)}
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="lineas" className="space-y-4">
                  {lineas.map((linea, index) => (
                    <Card key={linea.id} className="p-4 bg-gray-50">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">Línea {index + 1}</h4>
                        {lineas.length > 1 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => eliminarLinea(linea.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>

                      <div className="space-y-3">
                        <div>
                          <Label>Concepto *</Label>
                          <Input
                            placeholder="Descripción del servicio/producto"
                            value={linea.concepto}
                            onChange={(e) => actualizarLinea(linea.id, "concepto", e.target.value)}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label>Cantidad</Label>
                            <Input
                              type="number"
                              min="1"
                              value={linea.cantidad}
                              onChange={(e) =>
                                actualizarLinea(linea.id, "cantidad", Number.parseFloat(e.target.value) || 1)
                              }
                            />
                          </div>
                          <div>
                            <Label>Precio Unit. (€)</Label>
                            <Input
                              type="number"
                              min="0"
                              step="0.01"
                              value={linea.precioUnitario}
                              onChange={(e) =>
                                actualizarLinea(linea.id, "precioUnitario", Number.parseFloat(e.target.value) || 0)
                              }
                            />
                          </div>
                        </div>

                        <div>
                          <Label>Descuento (%)</Label>
                          <Input
                            type="number"
                            min="0"
                            max="100"
                            value={linea.descuento}
                            onChange={(e) =>
                              actualizarLinea(linea.id, "descuento", Number.parseFloat(e.target.value) || 0)
                            }
                          />
                        </div>

                        <div className="pt-2 border-t">
                          <p className="text-sm font-semibold text-right">
                            Subtotal: {calcularSubtotalLinea(linea).toFixed(2)} €
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}

                  <Button onClick={agregarLinea} className="w-full bg-transparent" variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Añadir Línea
                  </Button>
                </TabsContent>
              </Tabs>
            </Card>

            {/* Resumen de Totales */}
            <Card className="p-6 shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-600" />
                Resumen de Totales
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Base imponible:</span>
                  <span className="font-semibold">{baseImponible.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>
                    {tipoImpuesto === "iva" ? "IVA" : "IGIC"} ({porcentajeImpuesto}%):
                  </span>
                  <span className="font-semibold">{cuotaImpuesto.toFixed(2)} €</span>
                </div>
                {aplicarIRPF && (
                  <div className="flex justify-between text-red-600">
                    <span>Retención IRPF ({tipoIRPF}%):</span>
                    <span className="font-semibold">-{cuotaIRPF.toFixed(2)} €</span>
                  </div>
                )}
                <div className="pt-3 border-t-2 border-blue-600 flex justify-between text-lg font-bold text-blue-600">
                  <span>TOTAL:</span>
                  <span>{totalFactura.toFixed(2)} €</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Vista Previa */}
          <div className="space-y-6">
            {/* Vista Previa de la Factura */}
            <Card className="lg:col-span-2">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 border-b flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Vista Previa
                </h2>
                <Select value={plantilla} onValueChange={(v: any) => setPlantilla(v)}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="moderna">Moderna</SelectItem>
                    <SelectItem value="clasica">Clásica</SelectItem>
                    <SelectItem value="minimalista">Minimalista</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="p-6 bg-white">
                <div id="factura-preview" className="bg-white p-8 rounded-lg border max-w-4xl mx-auto">
                  {plantilla === "moderna" && (
                    <div className="space-y-6">
                      <div className="flex justify-between items-start border-b-4 border-blue-600 pb-4">
                        <div>
                          <h1 className="text-3xl font-bold text-blue-600">FACTURA</h1>
                          <p className="text-sm text-gray-600 mt-1">Nº {numeroFactura || "____"}</p>
                          <p className="text-sm text-gray-600">Fecha: {fecha}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{nombreEmisor || "Tu Nombre/Empresa"}</p>
                          <p className="text-sm text-gray-600">NIF: {nifEmisor || "____"}</p>
                          {direccionEmisor && <p className="text-sm text-gray-600">{direccionEmisor}</p>}
                          {(cpEmisor || ciudadEmisor) && (
                            <p className="text-sm text-gray-600">
                              {cpEmisor} {ciudadEmisor}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-xs text-gray-500 mb-2">CLIENTE</p>
                        <p className="font-bold">{nombreCliente || "Nombre del Cliente"}</p>
                        {nifCliente && <p className="text-sm text-gray-600">NIF: {nifCliente}</p>}
                        {direccionCliente && <p className="text-sm text-gray-600">{direccionCliente}</p>}
                        {(cpCliente || ciudadCliente) && (
                          <p className="text-sm text-gray-600">
                            {cpCliente} {ciudadCliente}
                          </p>
                        )}
                      </div>

                      <div>
                        <table className="w-full text-sm">
                          <thead className="bg-blue-600 text-white">
                            <tr>
                              <th className="text-left p-2">Concepto</th>
                              <th className="text-right p-2">Cant.</th>
                              <th className="text-right p-2">Precio</th>
                              <th className="text-right p-2">Desc.</th>
                              <th className="text-right p-2">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {lineas.map((linea, idx) => (
                              <tr key={linea.id} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                                <td className="p-2">{linea.concepto || "Concepto"}</td>
                                <td className="text-right p-2">{linea.cantidad}</td>
                                <td className="text-right p-2">{linea.precioUnitario.toFixed(2)} €</td>
                                <td className="text-right p-2">{linea.descuento}%</td>
                                <td className="text-right p-2 font-semibold">
                                  {calcularSubtotalLinea(linea).toFixed(2)} €
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="flex justify-end">
                        <div className="w-64 space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Base imponible:</span>
                            <span className="font-semibold">{baseImponible.toFixed(2)} €</span>
                          </div>
                          <div className="flex justify-between">
                            <span>
                              {tipoImpuesto === "iva" ? "IVA" : "IGIC"} ({porcentajeImpuesto}%):
                            </span>
                            <span className="font-semibold">{cuotaImpuesto.toFixed(2)} €</span>
                          </div>
                          {aplicarIRPF && (
                            <div className="flex justify-between text-red-600">
                              <span>IRPF ({tipoIRPF}%):</span>
                              <span className="font-semibold">-{cuotaIRPF.toFixed(2)} €</span>
                            </div>
                          )}
                          <div className="flex justify-between pt-2 border-t-2 border-blue-600 text-lg font-bold text-blue-600">
                            <span>TOTAL:</span>
                            <span>{totalFactura.toFixed(2)} €</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {plantilla === "clasica" && (
                    <div className="space-y-6">
                      <div className="text-center border-b-2 border-gray-800 pb-4">
                        <h1 className="text-4xl font-serif font-bold text-gray-800">FACTURA</h1>
                        <p className="text-sm text-gray-600 mt-2">Nº {numeroFactura || "____"}</p>
                        <p className="text-sm text-gray-600">Fecha: {fecha}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <p className="text-xs font-bold text-gray-500 mb-2">EMISOR</p>
                          <p className="font-bold text-lg">{nombreEmisor || "Tu Nombre/Empresa"}</p>
                          <p className="text-sm text-gray-600">NIF: {nifEmisor || "____"}</p>
                          {direccionEmisor && <p className="text-sm text-gray-600">{direccionEmisor}</p>}
                          {(cpEmisor || ciudadEmisor) && (
                            <p className="text-sm text-gray-600">
                              {cpEmisor} {ciudadEmisor}
                            </p>
                          )}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-500 mb-2">CLIENTE</p>
                          <p className="font-bold text-lg">{nombreCliente || "Nombre del Cliente"}</p>
                          {nifCliente && <p className="text-sm text-gray-600">NIF: {nifCliente}</p>}
                          {direccionCliente && <p className="text-sm text-gray-600">{direccionCliente}</p>}
                          {(cpCliente || ciudadCliente) && (
                            <p className="text-sm text-gray-600">
                              {cpCliente} {ciudadCliente}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mt-6">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="border-b-2 border-gray-800">
                              <th className="text-left p-3 font-serif">Concepto</th>
                              <th className="text-right p-3 font-serif">Cant.</th>
                              <th className="text-right p-3 font-serif">Precio</th>
                              <th className="text-right p-3 font-serif">Desc.</th>
                              <th className="text-right p-3 font-serif">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {lineas.map((linea, idx) => (
                              <tr key={linea.id} className="border-b border-gray-200">
                                <td className="p-3">{linea.concepto || "Concepto"}</td>
                                <td className="text-right p-3">{linea.cantidad}</td>
                                <td className="text-right p-3">{linea.precioUnitario.toFixed(2)} €</td>
                                <td className="text-right p-3">{linea.descuento}%</td>
                                <td className="text-right p-3 font-semibold">
                                  {calcularSubtotalLinea(linea).toFixed(2)} €
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="flex justify-end mt-8">
                        <div className="w-64 space-y-2 text-sm">
                          <div className="flex justify-between py-1">
                            <span>Base imponible:</span>
                            <span className="font-semibold">{baseImponible.toFixed(2)} €</span>
                          </div>
                          <div className="flex justify-between py-1">
                            <span>
                              {tipoImpuesto === "iva" ? "IVA" : "IGIC"} ({porcentajeImpuesto}%):
                            </span>
                            <span className="font-semibold">{cuotaImpuesto.toFixed(2)} €</span>
                          </div>
                          {aplicarIRPF && (
                            <div className="flex justify-between py-1 text-red-600">
                              <span>IRPF ({tipoIRPF}%):</span>
                              <span className="font-semibold">-{cuotaIRPF.toFixed(2)} €</span>
                            </div>
                          )}
                          <div className="flex justify-between pt-3 border-t-2 border-gray-800 text-lg font-bold font-serif">
                            <span>TOTAL:</span>
                            <span>{totalFactura.toFixed(2)} €</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 text-center text-xs text-gray-500 border-t pt-4">
                        <p>Gracias por su confianza</p>
                      </div>
                    </div>
                  )}

                  {plantilla === "minimalista" && (
                    <div className="space-y-8">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500">FACTURA</p>
                          <p className="text-2xl font-light text-gray-800">{numeroFactura || "____"}</p>
                          <p className="text-sm text-gray-500 mt-1">{fecha}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-800">{nombreEmisor || "Tu Nombre/Empresa"}</p>
                          <p className="text-sm text-gray-500">{nifEmisor || "____"}</p>
                          {direccionEmisor && <p className="text-sm text-gray-500">{direccionEmisor}</p>}
                          {(cpEmisor || ciudadEmisor) && (
                            <p className="text-sm text-gray-500">
                              {cpEmisor} {ciudadEmisor}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="border-l-4 border-gray-800 pl-4">
                        <p className="text-xs text-gray-400 mb-1">PARA</p>
                        <p className="font-medium text-gray-800">{nombreCliente || "Nombre del Cliente"}</p>
                        {nifCliente && <p className="text-sm text-gray-500">{nifCliente}</p>}
                        {direccionCliente && <p className="text-sm text-gray-500">{direccionCliente}</p>}
                        {(cpCliente || ciudadCliente) && (
                          <p className="text-sm text-gray-500">
                            {cpCliente} {ciudadCliente}
                          </p>
                        )}
                      </div>

                      <div>
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-3 font-normal text-gray-500">Concepto</th>
                              <th className="text-right py-3 font-normal text-gray-500">Cant.</th>
                              <th className="text-right py-3 font-normal text-gray-500">Precio</th>
                              <th className="text-right py-3 font-normal text-gray-500">Desc.</th>
                              <th className="text-right py-3 font-normal text-gray-500">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {lineas.map((linea) => (
                              <tr key={linea.id} className="border-b border-gray-100">
                                <td className="py-3 text-gray-800">{linea.concepto || "Concepto"}</td>
                                <td className="text-right py-3 text-gray-600">{linea.cantidad}</td>
                                <td className="text-right py-3 text-gray-600">{linea.precioUnitario.toFixed(2)} €</td>
                                <td className="text-right py-3 text-gray-600">{linea.descuento}%</td>
                                <td className="text-right py-3 font-medium text-gray-800">
                                  {calcularSubtotalLinea(linea).toFixed(2)} €
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="flex justify-end">
                        <div className="w-64 space-y-3 text-sm">
                          <div className="flex justify-between text-gray-600">
                            <span>Base imponible</span>
                            <span>{baseImponible.toFixed(2)} €</span>
                          </div>
                          <div className="flex justify-between text-gray-600">
                            <span>
                              {tipoImpuesto === "iva" ? "IVA" : "IGIC"} {porcentajeImpuesto}%
                            </span>
                            <span>{cuotaImpuesto.toFixed(2)} €</span>
                          </div>
                          {aplicarIRPF && (
                            <div className="flex justify-between text-red-600">
                              <span>IRPF {tipoIRPF}%</span>
                              <span>-{cuotaIRPF.toFixed(2)} €</span>
                            </div>
                          )}
                          <div className="flex justify-between pt-3 border-t border-gray-800 text-base font-medium text-gray-800">
                            <span>Total</span>
                            <span>{totalFactura.toFixed(2)} €</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <Button onClick={generarPDF} className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Descargar PDF
              </Button>
            </Card>
          </div>
        </div>

        {/* Contenido SEO */}
        <div className="max-w-4xl mx-auto space-y-12 mb-16">
          {/* Guía Completa */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Generador de Facturas Profesionales Gratis 2025</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-4">
                Nuestro <strong>generador de facturas online</strong> te permite crear facturas profesionales de forma
                gratuita, con cálculo automático de IVA, IGIC e IRPF. Exporta tus facturas a PDF con diseños modernos y
                profesionales que cumplan con la normativa española vigente en 2025.
              </p>
              <p className="leading-relaxed">
                Ideal para autónomos, freelancers y pequeñas empresas que necesitan emitir facturas rápidamente sin
                complicaciones. Sin registro, sin límites, completamente gratis.
              </p>
            </div>
          </section>

          {/* Requisitos Legales */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Datos Obligatorios en una Factura en España</h2>
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-white">
              <p className="mb-4 text-gray-700">
                Según el Reglamento de Facturación (Real Decreto 1619/2012), toda factura debe incluir:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>
                    <strong>Número y serie de la factura:</strong> Identificación única y secuencial
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>
                    <strong>Fecha de emisión:</strong> Día, mes y año
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>
                    <strong>Datos del emisor:</strong> Nombre/razón social, NIF y domicilio fiscal
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>
                    <strong>Datos del cliente:</strong> Nombre/razón social y NIF (obligatorio si es empresa o
                    profesional)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>
                    <strong>Descripción del bien o servicio:</strong> Detalle claro y completo
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>
                    <strong>Base imponible:</strong> Importe antes de impuestos
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>
                    <strong>Tipo de IVA/IGIC aplicado:</strong> Con porcentaje y cuota
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>
                    <strong>Retención de IRPF:</strong> Si aplica (profesionales)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>
                    <strong>Total de la factura:</strong> Importe final a pagar
                  </span>
                </li>
              </ul>
            </Card>
          </section>

          {/* IVA vs IGIC */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">¿IVA o IGIC? Diferencias para tu Factura</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3 text-blue-600">IVA (Península y Baleares)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>General:</strong> 21%
                  </li>
                  <li>
                    <strong>Reducido:</strong> 10%
                  </li>
                  <li>
                    <strong>Superreducido:</strong> 4%
                  </li>
                  <li className="text-sm text-gray-600 pt-2">
                    Aplica en España peninsular, Islas Baleares, Ceuta y Melilla
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-l-4 border-orange-600">
                <h3 className="text-xl font-bold mb-3 text-orange-600">IGIC (Canarias)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Tipo cero:</strong> 0%
                  </li>
                  <li>
                    <strong>Reducido:</strong> 3%
                  </li>
                  <li>
                    <strong>General:</strong> 7%
                  </li>
                  <li>
                    <strong>Incrementado:</strong> 9.5% y 13.5%
                  </li>
                  <li className="text-sm text-gray-600 pt-2">Exclusivo para las Islas Canarias</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* VERI*FACTU */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Normativa VERI*FACTU 2025</h2>
            <Card className="p-6 bg-gradient-to-br from-yellow-50 to-white border-l-4 border-yellow-500">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">¿Qué es VERI*FACTU?</h3>
                  <p className="text-gray-700 mb-3">
                    El <strong>Reglamento VERI*FACTU</strong> (Real Decreto 1007/2023) establece requisitos técnicos
                    para los sistemas de facturación con el objetivo de combatir el fraude fiscal.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Plazo de adaptación:</strong> Los autónomos tienen hasta el 1 de julio de 2026 para adaptar
                    sus sistemas de facturación.
                  </p>
                  <p className="text-gray-700">
                    La Agencia Tributaria ofrece una aplicación gratuita de facturación que cumple con VERI*FACTU para
                    autónomos con bajo volumen de facturación.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Ventajas */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Por qué Usar Nuestro Generador de Facturas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Cálculo Automático</h3>
                    <p className="text-sm text-gray-600">
                      IVA, IGIC e IRPF se calculan automáticamente según los tipos seleccionados. Sin errores de
                      cálculo.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Diseños Profesionales</h3>
                    <p className="text-sm text-gray-600">
                      Elige entre plantillas modernas, clásicas o minimalistas para tus facturas.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Download className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Exportación Inmediata</h3>
                    <p className="text-sm text-gray-600">
                      Descarga tu factura en PDF al instante, lista para enviar a tus clientes.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">100% Gratis</h3>
                    <p className="text-sm text-gray-600">
                      Sin límites de facturas, sin registro obligatorio, sin costes ocultos.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Consejos */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Consejos para Facturar como Autónomo</h2>
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-blue-600">
                <h3 className="font-bold mb-2">1. Numera tus facturas correctamente</h3>
                <p className="text-gray-700">
                  Usa un sistema secuencial sin saltos (2025-001, 2025-002...). Puedes tener diferentes series para
                  distintos tipos de clientes o servicios.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-green-600">
                <h3 className="font-bold mb-2">2. Guarda copias de todas las facturas</h3>
                <p className="text-gray-700">
                  Debes conservar las facturas emitidas durante al menos 4 años por si Hacienda las solicita en una
                  inspección.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-purple-600">
                <h3 className="font-bold mb-2">3. Especifica bien el concepto</h3>
                <p className="text-gray-700">
                  Describe con claridad el servicio o producto. Evita términos genéricos como "servicios prestados" que
                  pueden generar dudas.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-orange-600">
                <h3 className="font-bold mb-2">4. Aplica el tipo de IVA correcto</h3>
                <p className="text-gray-700">
                  Verifica qué tipo de IVA/IGIC corresponde a tu actividad: general (21% IVA / 7% IGIC), reducido (10% /
                  3%) o superreducido (4% / 0%).
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-red-600">
                <h3 className="font-bold mb-2">5. No olvides el IRPF si aplica</h3>
                <p className="text-gray-700">
                  Los profesionales deben aplicar retención de IRPF en sus facturas (normalmente 15% o 7%). Esta
                  retención la ingresa el cliente a Hacienda por ti.
                </p>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Preguntas Frecuentes sobre Facturas</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-bold mb-2 text-lg">¿Puedo usar este generador si soy autónomo?</h3>
                <p className="text-gray-700">
                  Sí, nuestro generador de facturas está diseñado específicamente para autónomos y pequeñas empresas.
                  Cumple con todos los requisitos legales del Reglamento de Facturación español.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2 text-lg">¿Las facturas generadas son válidas legalmente?</h3>
                <p className="text-gray-700">
                  Sí, siempre que incluyas todos los datos obligatorios (número, fecha, datos del emisor y cliente,
                  concepto, base imponible, IVA/IGIC y total). Nuestro generador te guía para incluir toda la
                  información necesaria.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2 text-lg">¿Tengo que pagar por usar el generador?</h3>
                <p className="text-gray-700">
                  No, es completamente gratuito. Puedes generar y descargar todas las facturas que necesites sin coste
                  alguno ni necesidad de registro.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2 text-lg">¿Se guardan mis datos en el sistema?</h3>
                <p className="text-gray-700">
                  No, este generador funciona completamente en tu navegador. No guardamos ningún dato personal ni
                  información de tus facturas en nuestros servidores.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2 text-lg">¿Cuál es la diferencia entre IVA e IGIC?</h3>
                <p className="text-gray-700">
                  El IVA se aplica en España peninsular, Baleares, Ceuta y Melilla, mientras que el IGIC es el impuesto
                  indirecto que se aplica exclusivamente en las Islas Canarias. Los tipos son diferentes: IVA general
                  21% vs IGIC general 7%.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2 text-lg">¿Cuándo debo aplicar retención de IRPF?</h3>
                <p className="text-gray-700">
                  Debes aplicar retención de IRPF cuando facturas a empresas o profesionales por servicios
                  profesionales, actividades agrícolas/ganaderas o arrendamiento de inmuebles urbanos. El tipo más común
                  es 15% para actividades profesionales.
                </p>
              </Card>
            </div>
          </section>
        </div>

        {/* Calculadoras Relacionadas */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Calculadoras Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <RelatedCalculatorCard
              title="Calculadora IVA Repercutido y Soportado"
              description="Calcula el IVA a pagar o devolver"
              href="/calculadora-iva-repercutido-soportado"
              icon={<Receipt className="w-6 h-6" />}
              iconBgClassName="bg-blue-100"
              buttonClassName="bg-blue-600 hover:bg-blue-700 text-white"
              buttonText="Calcular IVA"
            />
            <RelatedCalculatorCard
              title="Calculadora IRPF Autónomos"
              description="Estima tu IRPF trimestral"
              href="/calculadora-irpf-autonomos"
              icon={<Calculator className="w-6 h-6" />}
              iconBgClassName="bg-green-100"
              buttonClassName="bg-green-600 hover:bg-green-700 text-white"
              buttonText="Calcular IRPF"
            />
            <RelatedCalculatorCard
              title="Conversor IVA"
              description="Añade o quita IVA fácilmente"
              href="/conversor-iva"
              icon={<TrendingUp className="w-6 h-6" />}
              iconBgClassName="bg-purple-100"
              buttonClassName="bg-purple-600 hover:bg-purple-700 text-white"
              buttonText="Convertir IVA"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
