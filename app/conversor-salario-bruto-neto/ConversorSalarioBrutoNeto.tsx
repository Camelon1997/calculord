"use client"

import { useState } from "react"
import { Calculator, ArrowLeftRight, TrendingUp, Users, Shield, CheckCircle, Info, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

interface CalculationResult {
  salarioBruto: number
  salarioNeto: number
  irpf: number
  cotizacionesEmpleado: number
  baseIRPF: number
  deduccionPersonal: number
  deduccionFamiliar: number
  tipoIRPF: number
}

export default function ConversorSalarioBrutoNeto() {
  const [modo, setModo] = useState<"bruto-neto" | "neto-bruto">("bruto-neto")
  const [salarioInput, setSalarioInput] = useState("")
  const [situacionFamiliar, setSituacionFamiliar] = useState("soltero")
  const [numeroHijos, setNumeroHijos] = useState("0")
  const [comunidadAutonoma, setComunidadAutonoma] = useState("madrid")
  const [discapacidad, setDiscapacidad] = useState("no")
  const [resultado, setResultado] = useState<CalculationResult | null>(null)

  // Tipos de cotización 2025
  const tiposCotizacion = {
    contingenciasComunes: 4.7,
    desempleo: 1.55,
    formacionProfesional: 0.1,
    total: 6.35,
  }

  // Tramos IRPF 2025
  const tramosIRPF = [
    { hasta: 12450, tipo: 19 },
    { hasta: 20200, tipo: 24 },
    { hasta: 35200, tipo: 30 },
    { hasta: 60000, tipo: 37 },
    { hasta: 300000, tipo: 45 },
    { hasta: Number.POSITIVE_INFINITY, tipo: 47 },
  ]

  // Deducciones personales por situación familiar
  const deduccionesPersonales = {
    soltero: 5550,
    casado: 5550,
    viudo: 5550,
  }

  // Deducciones por hijos
  const deduccionesPorHijos = {
    0: 0,
    1: 2400,
    2: 2700,
    3: 4000,
    4: 4500,
  }

  const calcularIRPF = (baseImponible: number, deduccionTotal: number): { irpf: number; tipoEfectivo: number } => {
    const baseGravable = Math.max(0, baseImponible - deduccionTotal)
    let irpfTotal = 0
    let baseRestante = baseGravable
    let baseAnterior = 0

    for (const tramo of tramosIRPF) {
      if (baseRestante <= 0) break

      const baseTramo = Math.min(baseRestante, tramo.hasta - baseAnterior)
      irpfTotal += baseTramo * (tramo.tipo / 100)
      baseRestante -= baseTramo
      baseAnterior = tramo.hasta
    }

    const tipoEfectivo = baseGravable > 0 ? (irpfTotal / baseGravable) * 100 : 0
    return { irpf: irpfTotal, tipoEfectivo }
  }

  const calcularBrutoANeto = (salarioBrutoAnual: number): CalculationResult => {
    // Cotizaciones del empleado
    const cotizacionesEmpleado = salarioBrutoAnual * (tiposCotizacion.total / 100)

    // Base para IRPF (salario bruto - cotizaciones empleado)
    const baseIRPF = salarioBrutoAnual - cotizacionesEmpleado

    // Deducciones
    const deduccionPersonal = deduccionesPersonales[situacionFamiliar as keyof typeof deduccionesPersonales] || 5550
    const deduccionFamiliar = deduccionesPorHijos[numeroHijos as keyof typeof deduccionesPorHijos] || 0
    const deduccionDiscapacidad = discapacidad === "si" ? 3000 : 0
    const deduccionTotal = deduccionPersonal + deduccionFamiliar + deduccionDiscapacidad

    // Cálculo IRPF
    const { irpf, tipoEfectivo } = calcularIRPF(baseIRPF, deduccionTotal)

    // Salario neto
    const salarioNeto = salarioBrutoAnual - cotizacionesEmpleado - irpf

    return {
      salarioBruto: salarioBrutoAnual,
      salarioNeto,
      irpf,
      cotizacionesEmpleado,
      baseIRPF,
      deduccionPersonal: deduccionTotal,
      deduccionFamiliar,
      tipoIRPF: tipoEfectivo,
    }
  }

  const calcularNetoABruto = (salarioNetoAnual: number): CalculationResult => {
    // Aproximación iterativa para encontrar el salario bruto
    let salarioBruto = salarioNetoAnual * 1.4 // Estimación inicial
    let iteraciones = 0
    const maxIteraciones = 50
    const precision = 1

    while (iteraciones < maxIteraciones) {
      const resultado = calcularBrutoANeto(salarioBruto)
      const diferencia = resultado.salarioNeto - salarioNetoAnual

      if (Math.abs(diferencia) < precision) {
        return resultado
      }

      // Ajustar salario bruto
      salarioBruto -= diferencia * 0.5
      iteraciones++
    }

    return calcularBrutoANeto(salarioBruto)
  }

  const handleCalcular = () => {
    const salario = Number.parseFloat(salarioInput)
    if (!salario || salario <= 0) return

    let result: CalculationResult
    if (modo === "bruto-neto") {
      result = calcularBrutoANeto(salario)
    } else {
      result = calcularNetoABruto(salario)
    }

    setResultado(result)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(amount)
  }

  const formatPercentage = (percentage: number) => {
    return `${percentage.toFixed(2)}%`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Calculord</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/#calculadoras" className="text-gray-600 hover:text-blue-600 font-medium">
                Calculadoras
              </Link>
              <Link href="/#caracteristicas" className="text-gray-600 hover:text-blue-600 font-medium">
                Características
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ArrowLeftRight className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conversor Salario Bruto a Neto
            <span className="block text-blue-600 text-3xl md:text-4xl mt-2">Actualizado 2025</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Convierte tu salario bruto a neto y viceversa con los tipos de IRPF 2025 actualizados. Incluye cotizaciones,
            deducciones personales y familiares.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              IRPF 2025 Actualizado
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Conversión Bidireccional
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Desglose Completo
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                  Conversor de Salario
                </CardTitle>
                <CardDescription>Selecciona el tipo de conversión y completa los datos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Modo de conversión */}
                <div className="space-y-2">
                  <Label>Tipo de Conversión</Label>
                  <Tabs value={modo} onValueChange={(value) => setModo(value as "bruto-neto" | "neto-bruto")}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="bruto-neto">Bruto → Neto</TabsTrigger>
                      <TabsTrigger value="neto-bruto">Neto → Bruto</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Input de salario */}
                <div className="space-y-2">
                  <Label htmlFor="salario">
                    {modo === "bruto-neto" ? "Salario Bruto Anual (€)" : "Salario Neto Anual Deseado (€)"}
                  </Label>
                  <Input
                    id="salario"
                    type="number"
                    placeholder={modo === "bruto-neto" ? "Ej: 30000" : "Ej: 22000"}
                    value={salarioInput}
                    onChange={(e) => setSalarioInput(e.target.value)}
                  />
                </div>

                {/* Situación familiar */}
                <div className="space-y-2">
                  <Label>Situación Familiar</Label>
                  <Select value={situacionFamiliar} onValueChange={setSituacionFamiliar}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="soltero">Soltero/a</SelectItem>
                      <SelectItem value="casado">Casado/a</SelectItem>
                      <SelectItem value="viudo">Viudo/a</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Número de hijos */}
                <div className="space-y-2">
                  <Label>Número de Hijos</Label>
                  <Select value={numeroHijos} onValueChange={setNumeroHijos}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0 hijos</SelectItem>
                      <SelectItem value="1">1 hijo</SelectItem>
                      <SelectItem value="2">2 hijos</SelectItem>
                      <SelectItem value="3">3 hijos</SelectItem>
                      <SelectItem value="4">4 o más hijos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Comunidad Autónoma */}
                <div className="space-y-2">
                  <Label>Comunidad Autónoma</Label>
                  <Select value={comunidadAutonoma} onValueChange={setComunidadAutonoma}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="madrid">Madrid</SelectItem>
                      <SelectItem value="cataluna">Cataluña</SelectItem>
                      <SelectItem value="andalucia">Andalucía</SelectItem>
                      <SelectItem value="valencia">Valencia</SelectItem>
                      <SelectItem value="otras">Otras</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Discapacidad */}
                <div className="space-y-2">
                  <Label>¿Tienes discapacidad reconocida?</Label>
                  <Select value={discapacidad} onValueChange={setDiscapacidad}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="si">Sí (≥33%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={handleCalcular} className="w-full bg-blue-600 hover:bg-blue-700">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calcular Conversión
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            {resultado && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Resultado de la Conversión
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Resultado principal */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Salario Bruto Anual</p>
                        <p className="text-2xl font-bold text-blue-600">{formatCurrency(resultado.salarioBruto)}</p>
                        <p className="text-sm text-gray-500">{formatCurrency(resultado.salarioBruto / 12)} / mes</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Salario Neto Anual</p>
                        <p className="text-2xl font-bold text-green-600">{formatCurrency(resultado.salarioNeto)}</p>
                        <p className="text-sm text-gray-500">{formatCurrency(resultado.salarioNeto / 12)} / mes</p>
                      </div>
                    </div>
                  </div>

                  {/* Desglose de deducciones */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Desglose de Deducciones</h4>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">
                          Cotizaciones Seguridad Social ({formatPercentage(tiposCotizacion.total)})
                        </span>
                        <span className="font-medium text-red-600">
                          -{formatCurrency(resultado.cotizacionesEmpleado)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">IRPF ({formatPercentage(resultado.tipoIRPF)})</span>
                        <span className="font-medium text-red-600">-{formatCurrency(resultado.irpf)}</span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Base Imponible IRPF</span>
                        <span className="font-medium">{formatCurrency(resultado.baseIRPF)}</span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Deducciones Personales/Familiares</span>
                        <span className="font-medium text-green-600">
                          -{formatCurrency(resultado.deduccionPersonal)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Información adicional */}
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      Los cálculos son orientativos y pueden variar según circunstancias específicas. Consulta con un
                      asesor fiscal para casos particulares.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Características del Conversor</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas para calcular tu salario real</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ArrowLeftRight className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Conversión Bidireccional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Convierte de bruto a neto o de neto a bruto según tus necesidades</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>IRPF 2025 Actualizado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Cálculos con los tramos de IRPF y deducciones vigentes en 2025</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Situación Familiar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Incluye deducciones por hijos, estado civil y discapacidad</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cómo funciona la conversión de neto a bruto?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Utilizamos un algoritmo iterativo que calcula el salario bruto necesario para obtener el salario neto
                  deseado, teniendo en cuenta todas las deducciones aplicables.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Están actualizados los tipos de IRPF para 2025?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sí, utilizamos los tramos de IRPF vigentes para 2025 y las deducciones personales y familiares
                  actualizadas según la normativa fiscal.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Se incluyen las cotizaciones a la Seguridad Social?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sí, se incluyen todas las cotizaciones del trabajador: contingencias comunes (4,7%), desempleo (1,55%)
                  y formación profesional (0,1%).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculadoras Relacionadas</h2>
            <p className="text-xl text-gray-600">Otras herramientas que te pueden interesar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Calculadora de Nómina</CardTitle>
                <CardDescription>Calcula tu nómina completa con todos los conceptos detallados</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculadora-nomina">
                  <Button className="w-full">Ver Calculadora</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Cotizaciones Seguridad Social</CardTitle>
                <CardDescription>Calcula las cotizaciones exactas de trabajador y empresa</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculadora-cotizaciones-seguridad-social">
                  <Button className="w-full">Ver Calculadora</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Salario por Horas</CardTitle>
                <CardDescription>Calcula tu salario basado en horas trabajadas y extras</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculadora-salario-por-horas">
                  <Button className="w-full">Ver Calculadora</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Calculord</span>
              </div>
              <p className="text-gray-400">Conversor de salario bruto a neto con IRPF 2025 actualizado</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Calculadoras Laborales</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/calculadora-nomina" className="hover:text-white">
                    Calculadora de Nómina
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-cotizaciones-seguridad-social" className="hover:text-white">
                    Cotizaciones SS
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-salario-por-horas" className="hover:text-white">
                    Salario por Horas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Guía IRPF 2025
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Tramos Fiscales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Deducciones
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Términos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Calculord. Conversor Salario Bruto Neto - Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
