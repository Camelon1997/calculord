"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Calculator, CheckCircle2, Info, Home, Briefcase, Car, Receipt, User, Building2 } from "lucide-react"
import Breadcrumbs from "@/app/components/Breadcrumbs"
import RelatedCalculatorCard from "@/app/components/RelatedCalculatorCard"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface GastoCategoria {
  nombre: string
  porcentaje: number
  esProrrateado?: boolean
}

export default function CalculadoraGastosDeducibles() {
  const [ingresosBrutos, setIngresosBrutos] = useState("")
  const [cuotaAutonomos, setCuotaAutonomos] = useState("")
  const [alquilerLocal, setAlquilerLocal] = useState("")
  const [suministrosLocal, setSuministrosLocal] = useState("")
  const [trabajaDesdeCasa, setTrabajaDesdeCasa] = useState(false)
  const [porcentajeVivienda, setPorcentajeVivienda] = useState("20")
  const [suministrosVivienda, setSuministrosVivienda] = useState("")
  const [combustible, setCombustible] = useState("")
  const [dietas, setDietas] = useState("")
  const [material, setMaterial] = useState("")
  const [serviciosProfesionales, setServiciosProfesionales] = useState("")
  const [seguros, setSeguros] = useState("")
  const [formacion, setFormacion] = useState("")
  const [publicidad, setPublicidad] = useState("")

  const calcularDeducibles = () => {
    const cuota = Number.parseFloat(cuotaAutonomos) || 0
    const alquiler = Number.parseFloat(alquilerLocal) || 0
    const suministros = Number.parseFloat(suministrosLocal) || 0

    let suministrosViviendaDeducibles = 0
    if (trabajaDesdeCasa) {
      const porcentaje = Number.parseFloat(porcentajeVivienda) || 0
      const totalSuministros = Number.parseFloat(suministrosVivienda) || 0
      suministrosViviendaDeducibles = totalSuministros * (porcentaje / 100) * 0.3
    }

    const combustibleVal = Number.parseFloat(combustible) || 0
    const dietasVal = Number.parseFloat(dietas) || 0
    const materialVal = Number.parseFloat(material) || 0
    const profesionalesVal = Number.parseFloat(serviciosProfesionales) || 0
    const segurosVal = Number.parseFloat(seguros) || 0
    const formacionVal = Number.parseFloat(formacion) || 0
    const publicidadVal = Number.parseFloat(publicidad) || 0

    const totalDeducible =
      cuota +
      alquiler +
      suministros +
      suministrosViviendaDeducibles +
      combustibleVal +
      dietasVal +
      materialVal +
      profesionalesVal +
      segurosVal +
      formacionVal +
      publicidadVal

    const ingresosVal = Number.parseFloat(ingresosBrutos) || 0
    const ahorroDespuesIRPF = totalDeducible * 0.3 // Estimación media IRPF

    return {
      totalDeducible,
      cuota,
      alquiler,
      suministros,
      suministrosViviendaDeducibles,
      combustibleVal,
      dietasVal,
      materialVal,
      profesionalesVal,
      segurosVal,
      formacionVal,
      publicidadVal,
      ahorroDespuesIRPF,
      porcentajeDeducible: ingresosVal > 0 ? (totalDeducible / ingresosVal) * 100 : 0,
    }
  }

  const resultado = calcularDeducibles()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumbs currentPage="Calculadora de Gastos Deducibles para Autónomos" />

        {/* Hero Section */}
        <div className="text-center mb-12 mt-8">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">Actualizado 2025</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Calculadora de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Gastos Deducibles
            </span>{" "}
            para Autónomos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Calcula todos tus gastos deducibles en el IRPF 2025. Descubre cuánto puedes ahorrar y optimiza tu
            declaración de la renta como autónomo.
          </p>
        </div>

        {/* Características Destacadas */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="pt-6">
              <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                <Receipt className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Todos los Gastos Deducibles</h3>
              <p className="text-sm text-muted-foreground">
                Desde cuota de autónomos hasta suministros, calcula todo lo que puedes deducir
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
            <CardContent className="pt-6">
              <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Trabajo desde Casa</h3>
              <p className="text-sm text-muted-foreground">
                Calcula el 30% de la parte proporcional de suministros del hogar
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="pt-6">
              <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Ahorro Real en IRPF</h3>
              <p className="text-sm text-muted-foreground">
                Descubre cuánto ahorrarás realmente en tu declaración de la renta
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculadora Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Datos Generales */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Datos Generales
                </CardTitle>
                <CardDescription>Introduce tus ingresos para calcular el porcentaje de deducción</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="ingresosBrutos">Ingresos Brutos Anuales (€)</Label>
                  <Input
                    id="ingresosBrutos"
                    type="number"
                    value={ingresosBrutos}
                    onChange={(e) => setIngresosBrutos(e.target.value)}
                    placeholder="50000"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Gastos Obligatorios */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  Gastos Obligatorios
                </CardTitle>
                <CardDescription>100% deducibles en tu declaración de la renta</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="cuotaAutonomos" className="flex items-center gap-2">
                    Cuota de Autónomos Anual (€)
                    <Badge variant="secondary" className="text-xs">
                      100% deducible
                    </Badge>
                  </Label>
                  <Input
                    id="cuotaAutonomos"
                    type="number"
                    value={cuotaAutonomos}
                    onChange={(e) => setCuotaAutonomos(e.target.value)}
                    placeholder="3600"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Suma todas las cuotas mensuales pagadas en el año
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Local o Despacho */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-green-600" />
                  Local o Despacho Profesional
                </CardTitle>
                <CardDescription>Si tienes un local exclusivo para tu actividad</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="alquilerLocal" className="flex items-center gap-2">
                    Alquiler Anual (€)
                    <Badge variant="secondary" className="text-xs">
                      100% deducible
                    </Badge>
                  </Label>
                  <Input
                    id="alquilerLocal"
                    type="number"
                    value={alquilerLocal}
                    onChange={(e) => setAlquilerLocal(e.target.value)}
                    placeholder="12000"
                  />
                </div>

                <div>
                  <Label htmlFor="suministrosLocal" className="flex items-center gap-2">
                    Suministros Anuales (€)
                    <Badge variant="secondary" className="text-xs">
                      100% deducible
                    </Badge>
                  </Label>
                  <Input
                    id="suministrosLocal"
                    type="number"
                    value={suministrosLocal}
                    onChange={(e) => setSuministrosLocal(e.target.value)}
                    placeholder="2400"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Luz, agua, internet, teléfono del local</p>
                </div>
              </CardContent>
            </Card>

            {/* Trabajo desde Casa */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-orange-600" />
                  Trabajo desde Casa
                </CardTitle>
                <CardDescription>Deduce el 30% de la parte proporcional de tu vivienda</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="trabajaDesdeCasa"
                    checked={trabajaDesdeCasa}
                    onChange={(e) => setTrabajaDesdeCasa(e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="trabajaDesdeCasa">Trabajo desde mi vivienda habitual</Label>
                </div>

                {trabajaDesdeCasa && (
                  <>
                    <div>
                      <Label htmlFor="porcentajeVivienda">Porcentaje de la vivienda usado para trabajar (%)</Label>
                      <Input
                        id="porcentajeVivienda"
                        type="number"
                        value={porcentajeVivienda}
                        onChange={(e) => setPorcentajeVivienda(e.target.value)}
                        placeholder="20"
                        min="0"
                        max="100"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Ej: Si usas 1 habitación de 20m² en una casa de 100m², sería 20%
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="suministrosVivienda" className="flex items-center gap-2">
                        Suministros Anuales de la Vivienda (€)
                        <Badge variant="secondary" className="text-xs">
                          30% del proporcional
                        </Badge>
                      </Label>
                      <Input
                        id="suministrosVivienda"
                        type="number"
                        value={suministrosVivienda}
                        onChange={(e) => setSuministrosVivienda(e.target.value)}
                        placeholder="3000"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Luz, agua, internet, comunidad, IBI (suma anual total)
                      </p>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <div className="flex gap-2">
                        <Info className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-orange-900">
                          <p className="font-semibold mb-1">¿Cómo se calcula?</p>
                          <p>Deducción = Suministros totales × {porcentajeVivienda}% × 30%</p>
                          {suministrosVivienda && (
                            <p className="mt-1">
                              = {suministrosVivienda}€ × {porcentajeVivienda}% × 30% ={" "}
                              <strong>
                                {(
                                  ((Number.parseFloat(suministrosVivienda) * Number.parseFloat(porcentajeVivienda)) /
                                    100) *
                                    0.3 || 0
                                ).toFixed(2)}
                                €
                              </strong>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Otros Gastos Deducibles */}
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-purple-600" />
                  Otros Gastos Deducibles
                </CardTitle>
                <CardDescription>Gastos adicionales relacionados con tu actividad</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="combustible">Combustible y Transporte (€)</Label>
                  <Input
                    id="combustible"
                    type="number"
                    value={combustible}
                    onChange={(e) => setCombustible(e.target.value)}
                    placeholder="2000"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Gasolina, peajes, parking relacionados con la actividad
                  </p>
                </div>

                <div>
                  <Label htmlFor="dietas">Dietas y Manutención (€)</Label>
                  <Input
                    id="dietas"
                    type="number"
                    value={dietas}
                    onChange={(e) => setDietas(e.target.value)}
                    placeholder="1500"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Comidas y alojamiento por desplazamientos de trabajo
                  </p>
                </div>

                <div>
                  <Label htmlFor="material">Material y Suministros (€)</Label>
                  <Input
                    id="material"
                    type="number"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    placeholder="3000"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Material de oficina, mercancías, materia prima</p>
                </div>

                <div>
                  <Label htmlFor="serviciosProfesionales">Servicios Profesionales (€)</Label>
                  <Input
                    id="serviciosProfesionales"
                    type="number"
                    value={serviciosProfesionales}
                    onChange={(e) => setServiciosProfesionales(e.target.value)}
                    placeholder="2000"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Gestoría, abogados, asesoría fiscal, hosting web</p>
                </div>

                <div>
                  <Label htmlFor="seguros">Seguros (€)</Label>
                  <Input
                    id="seguros"
                    type="number"
                    value={seguros}
                    onChange={(e) => setSeguros(e.target.value)}
                    placeholder="800"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Seguros de responsabilidad civil, local, vehículo profesional
                  </p>
                </div>

                <div>
                  <Label htmlFor="formacion">Formación (€)</Label>
                  <Input
                    id="formacion"
                    type="number"
                    value={formacion}
                    onChange={(e) => setFormacion(e.target.value)}
                    placeholder="1000"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Cursos, libros, conferencias relacionadas con tu actividad
                  </p>
                </div>

                <div>
                  <Label htmlFor="publicidad">Publicidad y Marketing (€)</Label>
                  <Input
                    id="publicidad"
                    type="number"
                    value={publicidad}
                    onChange={(e) => setPublicidad(e.target.value)}
                    placeholder="1500"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Google Ads, redes sociales, tarjetas de visita, web
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resultados */}
          <div className="space-y-6">
            <Card className="sticky top-4 border-2 border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Resultados
                </CardTitle>
                <CardDescription>Tu resumen de gastos deducibles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg p-6 text-white">
                  <p className="text-sm opacity-90 mb-1">Total Gastos Deducibles</p>
                  <p className="text-4xl font-bold">{resultado.totalDeducible.toFixed(2)}€</p>
                  {ingresosBrutos && (
                    <p className="text-sm opacity-90 mt-2">
                      {resultado.porcentajeDeducible.toFixed(1)}% de tus ingresos
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-muted-foreground">Ahorro estimado IRPF</span>
                    <span className="font-semibold text-green-600">{resultado.ahorroDespuesIRPF.toFixed(2)}€</span>
                  </div>

                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase">Desglose:</p>

                    {resultado.cuota > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>Cuota autónomos</span>
                        <span className="font-medium">{resultado.cuota.toFixed(2)}€</span>
                      </div>
                    )}

                    {resultado.alquiler > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>Alquiler local</span>
                        <span className="font-medium">{resultado.alquiler.toFixed(2)}€</span>
                      </div>
                    )}

                    {resultado.suministros > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>Suministros local</span>
                        <span className="font-medium">{resultado.suministros.toFixed(2)}€</span>
                      </div>
                    )}

                    {resultado.suministrosViviendaDeducibles > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>Suministros vivienda</span>
                        <span className="font-medium">{resultado.suministrosViviendaDeducibles.toFixed(2)}€</span>
                      </div>
                    )}

                    {resultado.combustibleVal > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>Combustible</span>
                        <span className="font-medium">{resultado.combustibleVal.toFixed(2)}€</span>
                      </div>
                    )}

                    {resultado.dietasVal > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>Dietas</span>
                        <span className="font-medium">{resultado.dietasVal.toFixed(2)}€</span>
                      </div>
                    )}

                    {resultado.materialVal > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>Material</span>
                        <span className="font-medium">{resultado.materialVal.toFixed(2)}€</span>
                      </div>
                    )}

                    {resultado.profesionalesVal > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>Servicios profesionales</span>
                        <span className="font-medium">{resultado.profesionalesVal.toFixed(2)}€</span>
                      </div>
                    )}

                    {resultado.segurosVal > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>Seguros</span>
                        <span className="font-medium">{resultado.segurosVal.toFixed(2)}€</span>
                      </div>
                    )}

                    {resultado.formacionVal > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>Formación</span>
                        <span className="font-medium">{resultado.formacionVal.toFixed(2)}€</span>
                      </div>
                    )}

                    {resultado.publicidadVal > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>Publicidad</span>
                        <span className="font-medium">{resultado.publicidadVal.toFixed(2)}€</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex gap-2">
                    <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-blue-900">
                      El ahorro real depende de tu tramo de IRPF. Esta estimación usa una media del 30%.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <CardTitle className="text-lg">Requisitos Importantes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <p className="text-sm">Factura completa con todos los datos</p>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <p className="text-sm">Relacionado con tu actividad económica</p>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <p className="text-sm">Registrado en los libros contables</p>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <p className="text-sm">Pago justificado documentalmente</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Guía Completa */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">Guía Completa de Gastos Deducibles para Autónomos 2025</CardTitle>
            <CardDescription>Todo lo que necesitas saber para maximizar tus deducciones fiscales</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h2 className="text-xl font-semibold mt-6 mb-4">¿Qué Gastos Puede Deducir un Autónomo?</h2>
            <p className="text-muted-foreground mb-4">
              Como autónomo en España, puedes deducir todos los gastos necesarios para desarrollar tu actividad
              económica. Para que un gasto sea deducible debe cumplir tres requisitos fundamentales:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Vinculación con la actividad:</strong> El gasto debe estar directamente relacionado con tu
                  actividad profesional o empresarial.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Justificación documental:</strong> Debes tener una factura completa que incluya datos del
                  emisor, receptor, descripción del servicio, base imponible e IVA.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Registro contable:</strong> El gasto debe estar debidamente registrado en tus libros de
                  contabilidad.
                </span>
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Principales Gastos Deducibles</h2>

            <h3 className="text-lg font-semibold mt-6 mb-3">1. Cuota de Autónomos (100% Deducible)</h3>
            <p className="text-muted-foreground mb-4">
              La cuota mensual que pagas a la Seguridad Social es 100% deducible en tu declaración de la renta.
              Simplemente suma todas las cuotas pagadas durante el año. El justificante de pago es tu extracto bancario
              donde aparecen los cargos.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">2. Suministros del Local o Vivienda</h3>
            <p className="text-muted-foreground mb-4">
              Si trabajas desde un local exclusivo para tu actividad, puedes deducir el 100% de luz, agua, internet,
              teléfono, comunidad e IBI. Sin embargo, si trabajas desde tu vivienda habitual, solo puedes deducir el 30%
              de la parte proporcional que uses para trabajar.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Ejemplo:</strong> Si tu casa tiene 100m² y usas una habitación de 20m² como despacho (20% de la
              vivienda), y tus suministros anuales son 3.000€, podrás deducir: 3.000€ × 20% × 30% = 180€.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">3. Alquiler de Local o Despacho</h3>
            <p className="text-muted-foreground mb-4">
              Si alquilas un local, oficina o coworking exclusivo para tu actividad, el 100% del alquiler es deducible.
              Necesitas el contrato de arrendamiento y las facturas o recibos de pago.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">4. Material y Suministros</h3>
            <p className="text-muted-foreground mb-4">
              Todos los consumibles necesarios para tu actividad son deducibles: material de oficina, mercancías para
              reventa, materias primas, envases, herramientas, equipamiento informático, etc.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">5. Vehículo y Transporte</h3>
            <p className="text-muted-foreground mb-4">
              Puedes deducir gastos de combustible, peajes, parking y mantenimiento del vehículo cuando lo uses para tu
              actividad profesional. Es recomendable llevar un registro de los kilómetros profesionales vs.
              particulares.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">6. Dietas y Manutención</h3>
            <p className="text-muted-foreground mb-4">
              Los gastos de comida y alojamiento en desplazamientos por motivos profesionales son deducibles. Hacienda
              establece límites diarios: 26,67€/día en España y 48,08€/día en el extranjero para manutención, y
              53,34€/día en España y 91,35€/día en el extranjero para estancia.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">7. Servicios Profesionales</h3>
            <p className="text-muted-foreground mb-4">
              Son deducibles los honorarios de gestoría, asesoría fiscal, abogados, notarios, auditores, servicios de
              hosting web, software profesional, etc.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">8. Formación</h3>
            <p className="text-muted-foreground mb-4">
              Los cursos, masters, conferencias, libros y material formativo relacionado con tu actividad son 100%
              deducibles. Es fundamental que estén vinculados a tu profesión.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">9. Seguros</h3>
            <p className="text-muted-foreground mb-4">
              Los seguros de responsabilidad civil, local, mercancías, y vehículo profesional son deducibles. También
              puedes deducir un seguro médico privado con ciertos límites.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">10. Publicidad y Marketing</h3>
            <p className="text-muted-foreground mb-4">
              Todos los gastos de promoción de tu negocio: diseño web, Google Ads, redes sociales, tarjetas de visita,
              folletos, asistencia a ferias, etc.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Gastos NO Deducibles</h2>
            <p className="text-muted-foreground mb-4">Es importante conocer también qué gastos NO puedes deducir:</p>
            <ul className="space-y-2 mb-6 text-muted-foreground">
              <li>• Multas y sanciones administrativas</li>
              <li>• Donativos (salvo excepciones específicas)</li>
              <li>• Gastos personales o domésticos sin relación con la actividad</li>
              <li>• Ropa que no sea uniforme o vestuario profesional específico</li>
              <li>• IVA soportado (se deduce por separado en el modelo 303)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Consejos para Optimizar tus Deducciones</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Card className="border-blue-200">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">📝 Guarda todas las facturas</h4>
                  <p className="text-sm text-muted-foreground">
                    Organiza tus facturas digitalmente. Hacienda puede pedirlas hasta 4 años después.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">📊 Usa software contable</h4>
                  <p className="text-sm text-muted-foreground">
                    Un buen programa de contabilidad te ayuda a no perder ninguna deducción.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">🔍 Revisa gastos mixtos</h4>
                  <p className="text-sm text-muted-foreground">
                    Identifica gastos parcialmente deducibles como el móvil o internet de casa.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">👨‍💼 Consulta con tu gestor</h4>
                  <p className="text-sm text-muted-foreground">
                    Un asesor fiscal puede identificar deducciones que desconoces.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">Preguntas Frecuentes</CardTitle>
            <CardDescription>Resuelve tus dudas sobre gastos deducibles</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Puedo deducir el 100% de los suministros si trabajo desde casa?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No. Si trabajas desde tu vivienda habitual, solo puedes deducir el 30% de la parte proporcional que
                  uses para trabajar. Por ejemplo, si usas el 20% de tu casa como despacho y tus suministros son 3.000€
                  anuales, deduces: 3.000€ × 20% × 30% = 180€. Para deducir el 100% necesitas un local exclusivo para la
                  actividad.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>¿Necesito factura o vale el ticket de compra?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Para gastos deducibles necesitas factura completa con tus datos fiscales (nombre, NIF), datos del
                  proveedor, descripción detallada, base imponible e IVA desglosado. Los tickets simplificados solo son
                  válidos para importes inferiores a 400€ y no permiten deducir el IVA. Siempre pide factura completa.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>¿Puedo deducir el móvil y el internet de casa?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sí, pero solo la parte proporcional que uses para tu actividad. Si usas el móvil al 50% para trabajo,
                  puedes deducir el 50% de la factura. En el caso del internet de casa, aplica la misma regla que los
                  suministros: si trabajas desde casa, un 30% de la parte proporcional. Es recomendable tener una línea
                  profesional separada para deducir el 100%.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>¿Cuánto tiempo debo guardar las facturas?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Debes conservar todas las facturas y justificantes durante al menos 4 años desde la finalización del
                  plazo de presentación de la declaración. Hacienda puede requerir la documentación durante este
                  período. Te recomendamos guardarlas digitalmente en la nube para mayor seguridad.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>¿Puedo deducir comidas con clientes?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sí, las comidas de negocios con clientes son deducibles si están relacionadas con tu actividad.
                  Necesitas la factura con datos completos y es recomendable anotar con quién fue la comida y el motivo.
                  Sin embargo, las comidas habituales durante tu jornada laboral NO son deducibles, salvo que estés de
                  viaje por trabajo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>¿Qué pasa si Hacienda considera que un gasto no es deducible?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Si Hacienda detecta en una inspección que has deducido gastos improcedentes, te exigirá devolver la
                  cantidad deducida indebidamente más intereses de demora y posibles sanciones (del 50% al 150% según la
                  gravedad). Por eso es fundamental que todos tus gastos deducibles cumplan los requisitos y estén bien
                  justificados documentalmente.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Calculadoras Relacionadas */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Calculadoras Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <RelatedCalculatorCard
              title="Calculadora de Cuota de Autónomos"
              description="Calcula tu cuota mensual según el nuevo sistema de cotización por tramos de ingresos reales en 2025"
              href="/calculadora-cuota-autonomos"
              icon="💰"
              iconBgColor="bg-blue-100"
              iconColor="text-blue-600"
              features={["15 tramos de cotización", "Base reguladora personalizada", "Cálculo anual y mensual"]}
              buttonText="Calcular Cuota"
              buttonVariant="default"
            />

            <RelatedCalculatorCard
              title="Calculadora de IRPF para Autónomos"
              description="Calcula el IRPF que pagarás en tu declaración de la renta según tus ingresos y gastos deducibles"
              href="/calculadora-irpf-autonomos"
              icon="📊"
              iconBgColor="bg-green-100"
              iconColor="text-green-600"
              features={["Tramos IRPF 2025", "Deducciones aplicables", "Pagos trimestrales"]}
              buttonText="Calcular IRPF"
              buttonVariant="default"
            />

            <RelatedCalculatorCard
              title="Calendario Fiscal de Autónomos"
              description="Consulta todas las fechas clave y obligaciones fiscales que debes cumplir durante el año"
              href="/calculadora-calendario-fiscal-autonomos"
              icon="📅"
              iconBgColor="bg-purple-100"
              iconColor="text-purple-600"
              features={["Todas las fechas importantes", "Modelos a presentar", "Recordatorios trimestrales"]}
              buttonText="Ver Calendario"
              buttonVariant="default"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
