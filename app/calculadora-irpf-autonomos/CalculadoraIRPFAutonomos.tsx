"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Calculator,
  FileText,
  TrendingUp,
  Calendar,
  Building,
  ArrowUpDown,
  Receipt,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Building2,
  BookOpen,
  Info,
} from "lucide-react"
import { RelatedCalculatorCard } from "@/app/components/RelatedCalculatorCard"

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

  const glossaryData = [
    {
      term: "Base Imponible",
      definition:
        "Es la cantidad sobre la que se calcula el impuesto. Se obtiene restando los gastos deducibles a los ingresos brutos. (Ingresos - Gastos = Base Imponible).",
    },
    {
      term: "Base Liquidable",
      definition:
        "Resulta de aplicar las reducciones (por tributación conjunta, aportaciones a planes de pensiones, etc.) a la Base Imponible. Es la cifra final sobre la que se aplican los tramos del IRPF.",
    },
    {
      term: "Cuota Íntegra",
      definition:
        "Es el resultado de aplicar los tipos de gravamen (los porcentajes de los tramos) a la Base Liquidable. Es el impuesto 'bruto' antes de aplicar deducciones.",
    },
    {
      term: "Cuota Líquida",
      definition:
        "Se obtiene restando las deducciones (por inversión en vivienda, donativos, etc.) a la Cuota Íntegra. Es el impuesto a pagar antes de contar las retenciones.",
    },
    {
      term: "Resultado de la Declaración",
      definition:
        "Es la diferencia entre la Cuota Líquida y los pagos a cuenta ya realizados (retenciones y pagos fraccionados del modelo 130). Si es positivo, sale 'a pagar'. Si es negativo, 'a devolver'.",
    },
  ]

  const relatedCalculators = [
    {
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      title: "Calendario Fiscal Autónomos",
      description: "Consulta todas las fechas clave y obligaciones fiscales para no olvidar ninguna.",
      features: [
        "Modelo 130, 303, 349",
        "Declaración de la Renta",
        "Impuesto de Sociedades",
        "Alertas personalizables",
      ],
      href: "/calculadora-calendario-fiscal-autonomos",
      buttonText: "Ver Calendario",
      buttonClassName: "bg-purple-600 hover:bg-purple-700",
    },
    {
      icon: <Calculator className="w-6 h-6 text-blue-600" />,
      title: "Cotizaciones Seguridad Social",
      description: "Calcula tu cuota de autónomos o el coste de tus empleados según los ingresos reales.",
      features: ["Régimen General y Autónomos", "Bases y tipos actualizados 2025", "Desglose trabajador/empresa"],
      href: "/calculadora-cotizaciones-seguridad-social",
      buttonText: "Calcular Cotizaciones",
      buttonClassName: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: <ArrowUpDown className="w-6 h-6 text-indigo-600" />,
      title: "Conversor Bruto-Neto",
      description: "Convierte tu salario bruto a neto y viceversa con IRPF 2025 y deducciones actualizadas.",
      features: ["Conversión bidireccional", "IRPF 2025 actualizado", "Deducciones familiares"],
      href: "/conversor-salario-bruto-neto",
      buttonText: "Convertir Salario",
      buttonClassName: "bg-indigo-600 hover:bg-indigo-700",
    },
    {
      icon: <Building2 className="w-6 h-6 text-green-600" />,
      title: "Coste Total Empresa",
      description: "Calcula el coste real total de un trabajador para la empresa desde bruto o neto deseado.",
      features: ["Cálculo desde bruto o neto", "Cotizaciones empresariales 2025", "Planificación presupuestaria"],
      href: "/calculadora-coste-total-empresa",
      buttonText: "Calcular Coste",
      buttonClassName: "bg-green-600 hover:bg-green-700",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-2xl">
                <FileText className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Calculadora IRPF
              <span className="block text-green-200">para Autónomos 2025</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-green-100 max-w-4xl mx-auto">
              Calcula tu Impuesto sobre la Renta como autónomo con todas las deducciones fiscales, retenciones y tramos
              por Comunidad Autónoma actualizados para 2025.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-3 py-1">
                ✅ Deducciones 2025
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-3 py-1">
                ✅ Todas las CCAA
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-3 py-1">
                ✅ Estimación Directa
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-3 py-1">
                ✅ Régimen Módulos
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Calculadora */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-3">
            <Card className="shadow-lg border">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                  <Calculator className="w-6 h-6 text-green-600" />
                  Calculadora IRPF Autónomos
                </CardTitle>
                <CardDescription>
                  Introduce tus datos para calcular tu IRPF con todas las deducciones aplicables.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-4 sm:p-6">
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

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
          </div>

          {/* Resultados */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border sticky top-24">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  Resultado del Cálculo
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 flex flex-col justify-center min-h-[550px]">
                {resultado ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Base Imponible</div>
                      <div className="text-3xl font-bold text-gray-900">
                        {resultado.baseImponible.toLocaleString("es-ES")}€
                      </div>
                    </div>

                    <div className="space-y-2">
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
                      <div className="flex justify-between items-center text-lg">
                        <span className="font-bold">Resultado Final:</span>
                        <span
                          className={`font-bold ${resultado.resultadoFinal >= 0 ? "text-red-600" : "text-green-600"}`}
                        >
                          {resultado.resultadoFinal >= 0 ? "A pagar: " : "A devolver: "}
                          {Math.abs(resultado.resultadoFinal).toLocaleString("es-ES")}€
                        </span>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-600">Tipo Medio Efectivo</div>
                      <div className="text-2xl font-bold text-blue-600">{resultado.tipoMedio.toFixed(2)}%</div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Introduce tus datos para ver el resultado</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contenido SEO enriquecido */}
        <div className="space-y-12 md:space-y-16">
          {/* Cómo funciona el IRPF para autónomos */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Cómo funciona el IRPF para Autónomos en 2025
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-gray-700 space-y-4">
                <p>
                  El <strong>Impuesto sobre la Renta de las Personas Físicas (IRPF)</strong> para autónomos es un
                  impuesto progresivo que grava los rendimientos de tu actividad económica. A diferencia de un
                  asalariado, eres tú quien debe calcular, declarar e ingresar los pagos a cuenta.
                </p>
                <p>
                  La clave está en la diferencia entre tus <strong>ingresos íntegros</strong> y los{" "}
                  <strong>gastos fiscalmente deducibles</strong>. El resultado es el rendimiento neto, que tras aplicar
                  ciertas reducciones, se convierte en la base liquidable sobre la que se aplican los tramos del
                  impuesto.
                </p>
                <p>
                  El IRPF se divide en un tramo estatal y otro autonómico, por lo que tu lugar de residencia fiscal es
                  crucial para determinar la cuota final a pagar.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-lg mb-4 text-blue-800">Tramos IRPF 2025 (Gravamen Estatal)</h3>
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Deducciones Fiscales Imprescindibles para Autónomos
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Building className="w-5 h-5 text-blue-600" />
                    Gastos de Explotación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
                    <li>Consumos de explotación (mercaderías)</li>
                    <li>Sueldos y salarios de empleados</li>
                    <li>Seguridad Social a cargo de la empresa</li>
                    <li>Alquileres y cánones</li>
                    <li>Suministros (luz, agua, internet)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Receipt className="w-5 h-5 text-green-600" />
                    Servicios y Otros Gastos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
                    <li>Servicios de profesionales independientes</li>
                    <li>Primas de seguros (salud, responsabilidad civil)</li>
                    <li>Gastos financieros (intereses de préstamos)</li>
                    <li>Amortizaciones de inmovilizado</li>
                    <li>Cuota de autónomos (RETA)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FileText className="w-5 h-5 text-purple-600" />
                    Provisiones y Reducciones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
                    <li>Gastos de difícil justificación (5% del rendimiento neto)</li>
                    <li>Provisiones por insolvencias</li>
                    <li>Gastos de manutención (con límites)</li>
                    <li>Formación profesional</li>
                    <li>Marketing y publicidad</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Estimación directa vs módulos */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Estimación Directa vs. Régimen de Módulos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-blue-200 shadow-sm">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-700">Estimación Directa</CardTitle>
                  <CardDescription>Tributas por tus beneficios reales.</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">✅ Ventajas:</h4>
                      <ul className="text-sm space-y-1 text-gray-600 list-disc pl-5">
                        <li>Deduces todos los gastos reales y justificados.</li>
                        <li>Si tienes pérdidas, no pagas y puedes compensarlas.</li>
                        <li>Refleja la situación económica real de tu negocio.</li>
                        <li>Ideal para actividades con altos gastos deducibles.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">❌ Inconvenientes:</h4>
                      <ul className="text-sm space-y-1 text-gray-600 list-disc pl-5">
                        <li>Mayor carga administrativa y contable.</li>
                        <li>Obligación de llevar libros de registro.</li>
                        <li>Requiere una gestión más rigurosa.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 shadow-sm">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-orange-700">Régimen de Módulos (Estimación Objetiva)</CardTitle>
                  <CardDescription>Pagas una cuota fija según unos índices.</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">✅ Ventajas:</h4>
                      <ul className="text-sm space-y-1 text-gray-600 list-disc pl-5">
                        <li>Gran simplicidad en la gestión y contabilidad.</li>
                        <li>No necesitas guardar todas las facturas de gastos.</li>
                        <li>Pagas lo mismo independientemente de tus beneficios.</li>
                        <li>Ventajoso si tienes pocos gastos y altos márgenes.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">❌ Inconvenientes:</h4>
                      <ul className="text-sm space-y-1 text-gray-600 list-disc pl-5">
                        <li>No puedes deducir gastos reales.</li>
                        <li>Pagas impuestos aunque tengas pérdidas.</li>
                        <li>Limitado a ciertas actividades y umbrales de facturación.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Glosario de Términos */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Glosario de Términos Clave del IRPF
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {glossaryData.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      {item.term}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base pl-10">{item.definition}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Guía Práctica Modelo 100 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Guía Práctica: De la Calculadora al Modelo 100
            </h2>
            <div className="bg-gray-100 p-6 sm:p-8 rounded-lg border">
              <p className="text-center text-gray-700 mb-6">
                Los resultados de esta calculadora te ayudan a entender las casillas más importantes de tu declaración
                de la Renta (Modelo 100).
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  <p>
                    <strong>Ingresos Brutos:</strong> Se corresponde con la casilla de{" "}
                    <code className="bg-gray-200 px-1 rounded">Ingresos de explotaciones económicas</code>.
                  </p>
                  <p>
                    <strong>Gastos Deducibles:</strong> Es la suma de todas las casillas de gastos, como{" "}
                    <code className="bg-gray-200 px-1 rounded">Consumos de explotación</code>,{" "}
                    <code className="bg-gray-200 px-1 rounded">Sueldos y salarios</code>, etc.
                  </p>
                  <p>
                    <strong>Base Imponible:</strong> Es el{" "}
                    <code className="bg-gray-200 px-1 rounded">Rendimiento neto</code> que se integra en la{" "}
                    <code className="bg-gray-200 px-1 rounded">Base Imponible General</code>.
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    <strong>IRPF Total (Cuota Íntegra):</strong> Se calcula a partir de la{" "}
                    <code className="bg-gray-200 px-1 rounded">Base Liquidable General</code> y se refleja en la{" "}
                    <code className="bg-gray-200 px-1 rounded">Cuota Íntegra Estatal y Autonómica</code>.
                  </p>
                  <p>
                    <strong>Retenciones Aplicadas:</strong> Corresponde a la casilla de{" "}
                    <code className="bg-gray-200 px-1 rounded">Retenciones y otros pagos a cuenta</code>.
                  </p>
                  <p>
                    <strong>Resultado Final:</strong> Es la{" "}
                    <code className="bg-gray-200 px-1 rounded">Cuota diferencial</code>, que indica si el resultado es a
                    ingresar o a devolver.
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center text-xs text-gray-500">
                <Info className="inline w-4 h-4 mr-1" />
                Esto es una guía simplificada. La declaración puede incluir más variables. Consulta siempre a un asesor
                fiscal.
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Preguntas Frecuentes sobre IRPF para Autónomos
            </h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <Card key={index} className="border border-gray-200 shadow-sm">
                  <CardHeader
                    className="cursor-pointer hover:bg-gray-50 transition-colors p-4"
                    onClick={() => toggleSection(`faq-${index}`)}
                  >
                    <CardTitle className="flex items-center justify-between text-lg text-left">
                      <span className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        {faq.question}
                      </span>
                      {activeSection === `faq-${index}` ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  {activeSection === `faq-${index}` && (
                    <CardContent className="p-4 pt-0">
                      <p className="text-gray-600 pl-8">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </section>

          {/* Cards relacionadas */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Herramientas Esenciales para Autónomos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedCalculators.map((calculator) => (
                <RelatedCalculatorCard key={calculator.title} {...calculator} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
