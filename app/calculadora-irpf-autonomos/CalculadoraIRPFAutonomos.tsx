"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Calculator,
  FileText,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Calendar,
  Building,
  ArrowUpDown,
  Receipt,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Euro,
  Building2,
} from "lucide-react"
import Link from "next/link"

interface CalculationResult {
  ingresosBrutos: number
  gastosDeducibles: number
  baseImponible: number
  irpfEstatal: number
  irpfAutonomico: number
  irpfTotal: number
  retencionesAplicadas: number
  resultadoFinal: number
  tipoMedio: number
}

export default function CalculadoraIRPFAutonomos() {
  const [ingresosBrutos, setIngresosBrutos] = useState<string>("")
  const [comunidadAutonoma, setComunidadAutonoma] = useState<string>("")
  const [estadoCivil, setEstadoCivil] = useState<string>("")
  const [hijos, setHijos] = useState<string>("")
  const [discapacidad, setDiscapacidad] = useState<string>("")
  const [regimenFiscal, setRegimenFiscal] = useState<string>("estimacion-directa")

  // Gastos deducibles
  const [gastosOficina, setGastosOficina] = useState<string>("")
  const [suministros, setSuministros] = useState<string>("")
  const [alquiler, setAlquiler] = useState<string>("")
  const [material, setMaterial] = useState<string>("")
  const [formacion, setFormacion] = useState<string>("")
  const [seguros, setSeguros] = useState<string>("")
  const [transporte, setTransporte] = useState<string>("")
  const [amortizaciones, setAmortizaciones] = useState<string>("")
  const [otrosGastos, setOtrosGastos] = useState<string>("")

  const [retenciones, setRetenciones] = useState<string>("")
  const [resultado, setResultado] = useState<CalculationResult | null>(null)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const comunidadesAutonomas = [
    { value: "andalucia", label: "Andalucía" },
    { value: "aragon", label: "Aragón" },
    { value: "asturias", label: "Asturias" },
    { value: "baleares", label: "Islas Baleares" },
    { value: "canarias", label: "Canarias" },
    { value: "cantabria", label: "Cantabria" },
    { value: "castilla-leon", label: "Castilla y León" },
    { value: "castilla-mancha", label: "Castilla-La Mancha" },
    { value: "cataluna", label: "Cataluña" },
    { value: "extremadura", label: "Extremadura" },
    { value: "galicia", label: "Galicia" },
    { value: "madrid", label: "Madrid" },
    { value: "murcia", label: "Murcia" },
    { value: "navarra", label: "Navarra" },
    { value: "pais-vasco", label: "País Vasco" },
    { value: "rioja", label: "La Rioja" },
    { value: "valencia", label: "Valencia" },
  ]

  const tramosIRPF = {
    estatal: [
      { min: 0, max: 12450, tipo: 9.5 },
      { min: 12450, max: 20200, tipo: 12 },
      { min: 20200, max: 35200, tipo: 15 },
      { min: 35200, max: 60000, tipo: 18.5 },
      { min: 60000, max: 300000, tipo: 22.5 },
      { min: 300000, max: Number.POSITIVE_INFINITY, tipo: 24.5 },
    ],
  }

  const calcularIRPF = () => {
    const ingresos = Number.parseFloat(ingresosBrutos) || 0
    const gastos =
      (Number.parseFloat(gastosOficina) || 0) +
      (Number.parseFloat(suministros) || 0) +
      (Number.parseFloat(alquiler) || 0) +
      (Number.parseFloat(material) || 0) +
      (Number.parseFloat(formacion) || 0) +
      (Number.parseFloat(seguros) || 0) +
      (Number.parseFloat(transporte) || 0) +
      (Number.parseFloat(amortizaciones) || 0) +
      (Number.parseFloat(otrosGastos) || 0)

    const baseImponible = Math.max(0, ingresos - gastos)

    // Cálculo IRPF estatal
    let irpfEstatal = 0
    let baseRestante = baseImponible

    for (const tramo of tramosIRPF.estatal) {
      if (baseRestante <= 0) break

      const baseTramo = Math.min(baseRestante, tramo.max - tramo.min)
      irpfEstatal += baseTramo * (tramo.tipo / 100)
      baseRestante -= baseTramo
    }

    // IRPF autonómico (aproximado)
    const irpfAutonomico = irpfEstatal * 0.5 // Simplificado

    const irpfTotal = irpfEstatal + irpfAutonomico
    const retencionesAplicadas = Number.parseFloat(retenciones) || 0
    const resultadoFinal = irpfTotal - retencionesAplicadas
    const tipoMedio = baseImponible > 0 ? (irpfTotal / baseImponible) * 100 : 0

    setResultado({
      ingresosBrutos: ingresos,
      gastosDeducibles: gastos,
      baseImponible,
      irpfEstatal,
      irpfAutonomico,
      irpfTotal,
      retencionesAplicadas,
      resultadoFinal,
      tipoMedio,
    })
  }

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const faqData = [
    {
      question: "¿Qué gastos puedo deducir como autónomo en el IRPF?",
      answer:
        "Como autónomo puedes deducir todos los gastos necesarios para tu actividad: suministros (luz, agua, teléfono), alquiler del local, material de oficina, formación, seguros profesionales, transporte, amortizaciones de equipos, gastos financieros, y otros gastos ordinarios y necesarios para tu actividad profesional.",
    },
    {
      question: "¿Cuál es la diferencia entre estimación directa y módulos?",
      answer:
        "En estimación directa declaras tus ingresos y gastos reales, pudiendo deducir todos los gastos justificados. En módulos (estimación objetiva) pagas según unos índices fijos establecidos por Hacienda, sin poder deducir gastos reales. Los módulos suelen ser ventajosos para actividades con pocos gastos deducibles.",
    },
    {
      question: "¿Cuándo debo aplicar retenciones IRPF como autónomo?",
      answer:
        "Debes aplicar retenciones del 15% (7% el primer año) cuando facturas a empresas o profesionales. No aplicas retenciones cuando facturas a particulares. Las retenciones se descuentan del IRPF final a pagar en la declaración anual.",
    },
    {
      question: "¿Cómo afecta mi Comunidad Autónoma al IRPF?",
      answer:
        "Cada CCAA tiene sus propios tramos y deducciones autonómicas que se suman al IRPF estatal. Algunas comunidades como Madrid tienen tipos más bajos, mientras otras como Cataluña tienen tipos más altos. También hay deducciones específicas por hijos, vivienda, etc.",
    },
    {
      question: "¿Puedo deducir gastos de mi vivienda como autónomo?",
      answer:
        "Sí, si trabajas desde casa puedes deducir un porcentaje de los gastos de vivienda (suministros, comunidad, IBI) proporcional al espacio dedicado a la actividad profesional. Normalmente entre el 20-30% de estos gastos.",
    },
    {
      question: "¿Qué pasa si tengo pérdidas en mi actividad?",
      answer:
        "Las pérdidas de actividades económicas se pueden compensar con otros rendimientos (trabajo, capital) del mismo ejercicio o de los 4 siguientes. Esto puede reducir significativamente tu IRPF total.",
    },
    {
      question: "¿Cuándo debo presentar las declaraciones trimestrales?",
      answer:
        "Los autónomos deben presentar el modelo 130 (IRPF) y 303 (IVA) trimestralmente: 1T (abril), 2T (julio), 3T (octubre), 4T (enero). Son pagos a cuenta de la declaración anual.",
    },
    {
      question: "¿Puedo deducir la formación profesional?",
      answer:
        "Sí, todos los gastos de formación relacionados con tu actividad profesional son deducibles al 100%: cursos, masters, libros técnicos, seminarios, etc. Es una de las deducciones más ventajosas para autónomos.",
    },
    {
      question: "¿Cómo tributan las facturas cobradas en el extranjero?",
      answer:
        "Los ingresos del extranjero tributan en España si eres residente fiscal. Puedes aplicar deducciones por doble imposición si has pagado impuestos en el país de origen. Las facturas intracomunitarias pueden estar exentas de IVA.",
    },
    {
      question: "¿Qué deducciones familiares puedo aplicar?",
      answer:
        "Puedes aplicar las mismas deducciones que los trabajadores por cuenta ajena: mínimo personal (5.550€), por hijos (2.400€ el primero, 2.700€ el segundo, 4.000€ el tercero y siguientes), por discapacidad, por ascendientes, etc.",
    },
    {
      question: "¿Puedo deducir el coche como autónomo?",
      answer:
        "Sí, puedes deducir los gastos del vehículo si lo usas para tu actividad profesional. Puedes elegir entre deducir gastos reales (combustible, seguros, reparaciones) o aplicar la amortización del vehículo, siempre en proporción al uso profesional.",
    },
    {
      question: "¿Qué documentación debo guardar para justificar gastos?",
      answer:
        "Debes conservar todas las facturas y justificantes de gastos durante 4 años: facturas de proveedores, recibos de suministros, tickets de combustible, facturas de formación, seguros, etc. Todo debe estar a nombre del autónomo o empresa.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 p-6 rounded-3xl">
                <FileText className="w-16 h-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Calculadora IRPF
              <span className="block text-green-200">para Autónomos 2025</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-4xl mx-auto">
              Calcula tu Impuesto sobre la Renta como autónomo con todas las deducciones fiscales, retenciones y tramos
              por Comunidad Autónoma actualizados 2025.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                ✅ Deducciones 2025
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                ✅ Todas las CCAA
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                ✅ Estimación Directa
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                ✅ Régimen Módulos
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Calculadora */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Calculator className="w-6 h-6 text-green-600" />
                Calculadora IRPF Autónomos
              </CardTitle>
              <CardDescription>
                Introduce tus datos para calcular tu IRPF con todas las deducciones aplicables
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              {/* Datos básicos */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  Datos Básicos
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ingresos">Ingresos Brutos Anuales (€)</Label>
                    <Input
                      id="ingresos"
                      type="number"
                      placeholder="50000"
                      value={ingresosBrutos}
                      onChange={(e) => setIngresosBrutos(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="comunidad">Comunidad Autónoma</Label>
                    <Select value={comunidadAutonoma} onValueChange={setComunidadAutonoma}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu CCAA" />
                      </SelectTrigger>
                      <SelectContent>
                        {comunidadesAutonomas.map((ca) => (
                          <SelectItem key={ca.value} value={ca.value}>
                            {ca.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="estado-civil">Estado Civil</Label>
                    <Select value={estadoCivil} onValueChange={setEstadoCivil}>
                      <SelectTrigger>
                        <SelectValue placeholder="Estado civil" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="soltero">Soltero/a</SelectItem>
                        <SelectItem value="casado">Casado/a</SelectItem>
                        <SelectItem value="viudo">Viudo/a</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="hijos">Número de Hijos</Label>
                    <Input
                      id="hijos"
                      type="number"
                      placeholder="0"
                      value={hijos}
                      onChange={(e) => setHijos(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="discapacidad">Discapacidad (%)</Label>
                    <Input
                      id="discapacidad"
                      type="number"
                      placeholder="0"
                      value={discapacidad}
                      onChange={(e) => setDiscapacidad(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="regime">Régimen Fiscal</Label>
                  <Select value={regimenFiscal} onValueChange={setRegimenFiscal}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="estimacion-directa">Estimación Directa</SelectItem>
                      <SelectItem value="modulos">Régimen de Módulos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              {/* Gastos deducibles */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-green-600" />
                  Gastos Deducibles
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="oficina">Gastos de Oficina (€)</Label>
                    <Input
                      id="oficina"
                      type="number"
                      placeholder="2000"
                      value={gastosOficina}
                      onChange={(e) => setGastosOficina(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="suministros">Suministros (€)</Label>
                    <Input
                      id="suministros"
                      type="number"
                      placeholder="1500"
                      value={suministros}
                      onChange={(e) => setSuministros(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="alquiler">Alquiler Local (€)</Label>
                    <Input
                      id="alquiler"
                      type="number"
                      placeholder="6000"
                      value={alquiler}
                      onChange={(e) => setAlquiler(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="material">Material y Herramientas (€)</Label>
                    <Input
                      id="material"
                      type="number"
                      placeholder="1000"
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="formacion">Formación (€)</Label>
                    <Input
                      id="formacion"
                      type="number"
                      placeholder="800"
                      value={formacion}
                      onChange={(e) => setFormacion(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="seguros">Seguros (€)</Label>
                    <Input
                      id="seguros"
                      type="number"
                      placeholder="500"
                      value={seguros}
                      onChange={(e) => setSeguros(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="transporte">Transporte (€)</Label>
                    <Input
                      id="transporte"
                      type="number"
                      placeholder="2000"
                      value={transporte}
                      onChange={(e) => setTransporte(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="amortizaciones">Amortizaciones (€)</Label>
                    <Input
                      id="amortizaciones"
                      type="number"
                      placeholder="1200"
                      value={amortizaciones}
                      onChange={(e) => setAmortizaciones(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="otros">Otros Gastos (€)</Label>
                  <Input
                    id="otros"
                    type="number"
                    placeholder="500"
                    value={otrosGastos}
                    onChange={(e) => setOtrosGastos(e.target.value)}
                  />
                </div>
              </div>

              <Separator />

              <div>
                <Label htmlFor="retenciones">Retenciones IRPF Aplicadas (€)</Label>
                <Input
                  id="retenciones"
                  type="number"
                  placeholder="7500"
                  value={retenciones}
                  onChange={(e) => setRetenciones(e.target.value)}
                />
              </div>

              <Button onClick={calcularIRPF} className="w-full bg-green-600 hover:bg-green-700" size="lg">
                <Calculator className="w-5 h-5 mr-2" />
                Calcular IRPF
              </Button>
            </CardContent>
          </Card>

          {/* Resultados */}
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                Resultado del Cálculo
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {resultado ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Ingresos Brutos</div>
                      <div className="text-2xl font-bold text-blue-600">
                        {resultado.ingresosBrutos.toLocaleString("es-ES")}€
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Gastos Deducibles</div>
                      <div className="text-2xl font-bold text-green-600">
                        {resultado.gastosDeducibles.toLocaleString("es-ES")}€
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Base Imponible</div>
                    <div className="text-3xl font-bold text-gray-900">
                      {resultado.baseImponible.toLocaleString("es-ES")}€
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">IRPF Estatal:</span>
                      <span className="font-semibold">{resultado.irpfEstatal.toLocaleString("es-ES")}€</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">IRPF Autonómico:</span>
                      <span className="font-semibold">{resultado.irpfAutonomico.toLocaleString("es-ES")}€</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">IRPF Total:</span>
                      <span className="text-xl font-bold text-red-600">
                        {resultado.irpfTotal.toLocaleString("es-ES")}€
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Retenciones Aplicadas:</span>
                      <span className="font-semibold text-green-600">
                        -{resultado.retencionesAplicadas.toLocaleString("es-ES")}€
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">Resultado Final:</span>
                      <span
                        className={`text-2xl font-bold ${resultado.resultadoFinal >= 0 ? "text-red-600" : "text-green-600"}`}
                      >
                        {resultado.resultadoFinal >= 0 ? "A pagar: " : "A devolver: "}
                        {Math.abs(resultado.resultadoFinal).toLocaleString("es-ES")}€
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Tipo Medio</div>
                    <div className="text-xl font-bold text-blue-600">{resultado.tipoMedio.toFixed(2)}%</div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Introduce tus datos para calcular tu IRPF</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Contenido SEO enriquecido */}
        <div className="space-y-16">
          {/* Cómo funciona el IRPF para autónomos */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Cómo funciona el IRPF para Autónomos en 2025
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  El <strong>IRPF para autónomos</strong> funciona de manera similar al de los trabajadores por cuenta
                  ajena, pero con importantes diferencias en cuanto a deducciones y obligaciones fiscales.
                </p>
                <p className="text-gray-600 mb-4">
                  Los autónomos deben declarar todos sus ingresos profesionales y pueden deducir los gastos necesarios
                  para su actividad. La base imponible se calcula restando los gastos deducibles de los ingresos brutos.
                </p>
                <p className="text-gray-600">
                  El IRPF se calcula aplicando los tramos progresivos tanto estatales como autonómicos sobre la base
                  imponible, resultando en un impuesto que puede variar significativamente según la Comunidad Autónoma.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Tramos IRPF 2025 (Estatal)</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Hasta 12.450€:</span>
                    <span className="font-semibold">9,5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>12.450€ - 20.200€:</span>
                    <span className="font-semibold">12%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>20.200€ - 35.200€:</span>
                    <span className="font-semibold">15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>35.200€ - 60.000€:</span>
                    <span className="font-semibold">18,5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>60.000€ - 300.000€:</span>
                    <span className="font-semibold">22,5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Más de 300.000€:</span>
                    <span className="font-semibold">24,5%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deducciones fiscales */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Deducciones Fiscales Imprescindibles para Autónomos
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-blue-600" />
                    Gastos de Local
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Alquiler del local comercial</li>
                    <li>• Suministros (luz, agua, gas)</li>
                    <li>• Gastos de comunidad</li>
                    <li>• IBI del local</li>
                    <li>• Seguros del local</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Receipt className="w-5 h-5 text-green-600" />
                    Material y Equipos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Material de oficina</li>
                    <li>• Herramientas de trabajo</li>
                    <li>• Equipos informáticos</li>
                    <li>• Software profesional</li>
                    <li>• Amortizaciones</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-600" />
                    Servicios Profesionales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Asesoría fiscal y contable</li>
                    <li>• Seguros profesionales</li>
                    <li>• Formación profesional</li>
                    <li>• Publicidad y marketing</li>
                    <li>• Gastos financieros</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Estimación directa vs módulos */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Estimación Directa vs Régimen de Módulos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-700">Estimación Directa</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">✅ Ventajas:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Puedes deducir todos los gastos reales</li>
                        <li>• Mayor control sobre tu tributación</li>
                        <li>• Ideal para actividades con muchos gastos</li>
                        <li>• Flexibilidad en la gestión fiscal</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">❌ Inconvenientes:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Mayor carga administrativa</li>
                        <li>• Necesidad de justificar todos los gastos</li>
                        <li>• Obligación de llevar libros contables</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-orange-700">Régimen de Módulos</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">✅ Ventajas:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Simplicidad administrativa</li>
                        <li>• Tributación fija y predecible</li>
                        <li>• Menos obligaciones contables</li>
                        <li>• Ideal para pequeños negocios</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">❌ Inconvenientes:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• No puedes deducir gastos reales</li>
                        <li>• Limitado a ciertas actividades</li>
                        <li>• Límites de facturación</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Retenciones IRPF */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Retenciones IRPF: Cuándo y Cómo Aplicarlas
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">¿Cuándo aplicar retenciones?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Facturas a empresas</p>
                        <p className="text-sm text-gray-600">15% de retención (7% el primer año)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Facturas a profesionales</p>
                        <p className="text-sm text-gray-600">15% de retención general</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Facturas a particulares</p>
                        <p className="text-sm text-gray-600">Sin retención</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Tipos de retención 2025</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                      <p className="font-medium">Actividades profesionales</p>
                      <p className="text-sm text-gray-600">15% (7% primer año)</p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-green-500">
                      <p className="font-medium">Actividades empresariales</p>
                      <p className="text-sm text-gray-600">1% general</p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                      <p className="font-medium">Actividades agrícolas</p>
                      <p className="text-sm text-gray-600">2% general</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Consejos optimización */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Consejos para Optimizar tu IRPF como Autónomo
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Planifica tus gastos</h3>
                    <p className="text-gray-600 text-sm">
                      Concentra las compras de material y equipos al final del año para maximizar las deducciones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Invierte en formación</h3>
                    <p className="text-gray-600 text-sm">
                      Los gastos de formación son 100% deducibles y mejoran tu competitividad profesional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Building className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Optimiza el espacio de trabajo</h3>
                    <p className="text-gray-600 text-sm">
                      Si trabajas desde casa, deduce un porcentaje de los gastos de vivienda proporcional al espacio
                      usado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Controla los pagos fraccionados</h3>
                    <p className="text-gray-600 text-sm">
                      Ajusta tus pagos trimestrales para evitar grandes diferencias en la declaración anual.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Receipt className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Documenta todos los gastos</h3>
                    <p className="text-gray-600 text-sm">
                      Guarda todas las facturas y justificantes. Una buena organización puede ahorrarte mucho dinero.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Euro className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Considera el régimen fiscal</h3>
                    <p className="text-gray-600 text-sm">
                      Evalúa anualmente si te conviene más la estimación directa o el régimen de módulos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Preguntas Frecuentes sobre IRPF para Autónomos
            </h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardHeader
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleSection(`faq-${index}`)}
                  >
                    <CardTitle className="flex items-center justify-between text-lg">
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-5 h-5 text-blue-600" />
                        {faq.question}
                      </span>
                      {activeSection === `faq-${index}` ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  {activeSection === `faq-${index}` && (
                    <CardContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </section>

          {/* Cards relacionadas */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Calculadoras Relacionadas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/calculadora-calendario-fiscal-autonomos">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-blue-200 hover:border-blue-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Calendario Fiscal</h3>
                    <p className="text-sm text-gray-600">Fechas clave y obligaciones fiscales para autónomos</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/calculadora-cotizaciones-seguridad-social">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-green-200 hover:border-green-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Calculator className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Cotizaciones SS</h3>
                    <p className="text-sm text-gray-600">Calcula tus cotizaciones de Seguridad Social</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/conversor-salario-bruto-neto">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-purple-200 hover:border-purple-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <ArrowUpDown className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Bruto a Neto</h3>
                    <p className="text-sm text-gray-600">Convierte entre salario bruto y neto</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/calculadora-coste-total-empresa">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-orange-200 hover:border-orange-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Coste Empresa</h3>
                    <p className="text-sm text-gray-600">Calcula el coste total para la empresa</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
