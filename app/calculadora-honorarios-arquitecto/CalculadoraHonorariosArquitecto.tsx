"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  AlertCircle,
  Calculator,
  Home,
  Building2,
  Wrench,
  Ruler,
  FileText,
  CheckCircle2,
  TrendingUp,
  Scale,
  PiggyBank,
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RelatedCalculatorCard } from "@/app/components/RelatedCalculatorCard"

export default function CalculadoraHonorariosArquitecto() {
  const [pem, setPem] = useState<string>("")
  const [tipoProyecto, setTipoProyecto] = useState<string>("reforma")
  const [complejidad, setComplejidad] = useState<string>("media")
  const [faseProyectoBasico, setFaseProyectoBasico] = useState<boolean>(true)
  const [faseProyectoEjecucion, setFaseProyectoEjecucion] = useState<boolean>(true)
  const [faseDireccionObra, setFaseDireccionObra] = useState<boolean>(true)
  const [incluirVisado, setIncluirVisado] = useState<boolean>(true)

  const calcularHonorarios = () => {
    const pemNum = Number.parseFloat(pem) || 0
    if (pemNum === 0) return null

    // Porcentajes base según tipo de proyecto
    const porcentajesBase: { [key: string]: number } = {
      "obra-nueva": 0.1, // 10%
      reforma: 0.1, // 10%
      rehabilitacion: 0.12, // 12%
      licencia: 0.05, // 5%
    }

    // Ajuste por complejidad
    const ajusteComplejidad: { [key: string]: number } = {
      baja: 0.8,
      media: 1.0,
      alta: 1.3,
    }

    const porcentajeTotal = porcentajesBase[tipoProyecto] * ajusteComplejidad[complejidad]

    // Distribución por fases (si no se contratan todas, ajustar)
    const distribucionFases = {
      proyectoBasico: 0.35,
      proyectoEjecucion: 0.4,
      direccionObra: 0.25,
    }

    let factorFases = 0
    if (faseProyectoBasico) factorFases += distribucionFases.proyectoBasico
    if (faseProyectoEjecucion) factorFases += distribucionFases.proyectoEjecucion
    if (faseDireccionObra) factorFases += distribucionFases.direccionObra

    const honorariosBase = pemNum * porcentajeTotal * factorFases

    // Visado (aproximadamente 0.5% del PEM)
    const costeVisado = incluirVisado ? pemNum * 0.005 : 0

    const totalSinIVA = honorariosBase + costeVisado
    const iva = totalSinIVA * 0.21
    const retencionIRPF = honorariosBase * 0.15
    const totalConIVA = totalSinIVA + iva
    const totalCobrar = totalConIVA - retencionIRPF

    return {
      honorariosBase: honorariosBase.toFixed(2),
      costeVisado: costeVisado.toFixed(2),
      totalSinIVA: totalSinIVA.toFixed(2),
      iva: iva.toFixed(2),
      retencionIRPF: retencionIRPF.toFixed(2),
      totalConIVA: totalConIVA.toFixed(2),
      totalCobrar: totalCobrar.toFixed(2),
      porcentajePEM: (porcentajeTotal * factorFases * 100).toFixed(1),
    }
  }

  const resultado = calcularHonorarios()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <Building2 className="h-4 w-4" />
              Actualizado 2025
            </div>
            <h1 className="mb-6 text-balance bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
              Calculadora de Honorarios de Arquitecto 2025
            </h1>
            <p className="mb-8 text-pretty text-lg text-gray-700 md:text-xl">
              Estima los costes de tu proyecto arquitectónico según el PEM, tipo de obra y complejidad. Incluye desglose
              por fases y costes adicionales.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="#calculadora">
                  <Calculator className="h-5 w-5" />
                  Calcular Honorarios
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                <a href="#guia">
                  <FileText className="h-5 w-5" />
                  Ver Guía Completa
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora */}
      <section id="calculadora" className="bg-white py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Calculator className="h-6 w-6 text-blue-600" />
                Calcula los Honorarios de tu Arquitecto
              </CardTitle>
              <CardDescription className="text-base">
                Introduce los datos de tu proyecto para obtener una estimación detallada
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-sm text-yellow-800">
                  Desde 2009 no existen baremos oficiales obligatorios. Los arquitectos establecen sus honorarios
                  libremente. Esta calculadora proporciona una estimación orientativa basada en prácticas habituales del
                  sector.
                </AlertDescription>
              </Alert>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="pem" className="text-base font-semibold">
                    PEM (Presupuesto de Ejecución Material) €
                  </Label>
                  <Input
                    id="pem"
                    type="number"
                    placeholder="Ej: 100000"
                    value={pem}
                    onChange={(e) => setPem(e.target.value)}
                    className="text-lg"
                  />
                  <p className="text-sm text-gray-600">
                    Coste de materiales y mano de obra sin IVA ni beneficio industrial
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipo" className="text-base font-semibold">
                    Tipo de Proyecto
                  </Label>
                  <Select value={tipoProyecto} onValueChange={setTipoProyecto}>
                    <SelectTrigger id="tipo" className="text-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="obra-nueva">
                        <div className="flex items-center gap-2">
                          <Home className="h-4 w-4" />
                          Obra Nueva
                        </div>
                      </SelectItem>
                      <SelectItem value="reforma">
                        <div className="flex items-center gap-2">
                          <Wrench className="h-4 w-4" />
                          Reforma Integral
                        </div>
                      </SelectItem>
                      <SelectItem value="rehabilitacion">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          Rehabilitación
                        </div>
                      </SelectItem>
                      <SelectItem value="licencia">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          Solo Proyecto Básico (Licencia)
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="complejidad" className="text-base font-semibold">
                    Complejidad del Proyecto
                  </Label>
                  <Select value={complejidad} onValueChange={setComplejidad}>
                    <SelectTrigger id="complejidad" className="text-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="baja">Baja (proyecto estándar)</SelectItem>
                      <SelectItem value="media">Media (complejidad moderada)</SelectItem>
                      <SelectItem value="alta">Alta (diseño complejo/innovador)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-semibold">Fases del Proyecto</Label>
                  <div className="space-y-2">
                    <label className="flex cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        checked={faseProyectoBasico}
                        onChange={(e) => setFaseProyectoBasico(e.target.checked)}
                        className="h-4 w-4 rounded"
                      />
                      <span className="text-sm">Proyecto Básico (~35%)</span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        checked={faseProyectoEjecucion}
                        onChange={(e) => setFaseProyectoEjecucion(e.target.checked)}
                        className="h-4 w-4 rounded"
                      />
                      <span className="text-sm">Proyecto de Ejecución (~40%)</span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        checked={faseDireccionObra}
                        onChange={(e) => setFaseDireccionObra(e.target.checked)}
                        className="h-4 w-4 rounded"
                      />
                      <span className="text-sm">Dirección de Obra (~25%)</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={incluirVisado}
                      onChange={(e) => setIncluirVisado(e.target.checked)}
                      className="h-4 w-4 rounded"
                    />
                    <span className="text-sm font-medium">Incluir coste de visado del Colegio de Arquitectos</span>
                  </label>
                </div>
              </div>

              {resultado && (
                <div className="mt-8 space-y-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                  <h3 className="text-xl font-bold text-gray-900">Resultado del Cálculo</h3>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <p className="text-sm text-gray-600">Honorarios Base ({resultado.porcentajePEM}% del PEM)</p>
                      <p className="text-2xl font-bold text-blue-600">{resultado.honorariosBase}€</p>
                    </div>

                    {incluirVisado && Number.parseFloat(resultado.costeVisado) > 0 && (
                      <div className="rounded-lg bg-white p-4 shadow-sm">
                        <p className="text-sm text-gray-600">Coste de Visado</p>
                        <p className="text-2xl font-bold text-indigo-600">{resultado.costeVisado}€</p>
                      </div>
                    )}

                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <p className="text-sm text-gray-600">IVA (21%)</p>
                      <p className="text-2xl font-bold text-gray-700">+{resultado.iva}€</p>
                    </div>

                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <p className="text-sm text-gray-600">Retención IRPF (15%)</p>
                      <p className="text-2xl font-bold text-red-600">-{resultado.retencionIRPF}€</p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-lg">
                    <p className="mb-2 text-lg font-semibold">Total a Pagar al Arquitecto</p>
                    <p className="text-4xl font-bold">{resultado.totalCobrar}€</p>
                    <p className="mt-2 text-sm text-blue-100">
                      (Total con IVA: {resultado.totalConIVA}€ - Retención IRPF: {resultado.retencionIRPF}€)
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guía Educativa */}
      <section id="guia" className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Guía Completa sobre Honorarios de Arquitecto
            </h2>
            <p className="text-pretty text-lg text-gray-700">
              Todo lo que necesitas saber para entender y planificar los costes de tu proyecto arquitectónico
            </p>
          </div>

          <div className="space-y-8">
            {/* ¿Qué es el PEM? */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Ruler className="h-5 w-5 text-blue-600" />
                  ¿Qué es el PEM (Presupuesto de Ejecución Material)?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  El <strong>PEM</strong> es el coste de materiales y mano de obra necesarios para ejecutar la obra, sin
                  incluir:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Gastos generales de la empresa constructora (normalmente 13%)</li>
                  <li>Beneficio industrial del contratista (normalmente 6%)</li>
                  <li>IVA (21%)</li>
                  <li>Honorarios profesionales (arquitecto, aparejador, etc.)</li>
                </ul>
                <Alert className="border-blue-200 bg-blue-50">
                  <AlertCircle className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-sm text-blue-800">
                    <strong>Ejemplo:</strong> Si el PEM es 100.000€, el presupuesto total de ejecución por contrata
                    (PEC) sería aproximadamente 119.000€ (100.000 + 13% + 6%). A esto se añade el IVA y los honorarios
                    profesionales.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Cómo se calculan los honorarios */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Calculator className="h-5 w-5 text-indigo-600" />
                  ¿Cómo se Calculan los Honorarios?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Desde 2009, con la <strong>Ley 25/2009</strong>, no existen baremos oficiales obligatorios. Los
                  arquitectos establecen sus honorarios libremente, pero generalmente se basan en:
                </p>

                <div className="space-y-3">
                  <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <h4 className="mb-2 font-semibold text-gray-900">1. Porcentaje del PEM</h4>
                    <p className="text-sm text-gray-700">
                      El método más común. Los porcentajes varían según el tipo de proyecto:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-700">
                      <li>
                        • <strong>Obra nueva residencial:</strong> 8-12% del PEM
                      </li>
                      <li>
                        • <strong>Reforma integral:</strong> 10-15% del PEM
                      </li>
                      <li>
                        • <strong>Rehabilitación compleja:</strong> 12-18% del PEM
                      </li>
                      <li>
                        • <strong>Solo proyecto básico:</strong> 3-6% del PEM
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <h4 className="mb-2 font-semibold text-gray-900">2. Factores que Influyen</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>
                        • <strong>Complejidad técnica:</strong> Estructuras innovadoras, rehabilitación de edificios
                        históricos
                      </li>
                      <li>
                        • <strong>Ubicación geográfica:</strong> Costes y normativas locales
                      </li>
                      <li>
                        • <strong>Tamaño del proyecto:</strong> m² construidos, número de plantas
                      </li>
                      <li>
                        • <strong>Experiencia del arquitecto:</strong> Reconocimiento profesional, especialización
                      </li>
                      <li>
                        • <strong>Personalización del diseño:</strong> Nivel de detalle y customización requerido
                      </li>
                      <li>
                        • <strong>Plazos de entrega:</strong> Proyectos urgentes pueden incrementar el coste
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fases del Proyecto */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <FileText className="h-5 w-5 text-purple-600" />
                  Fases del Proyecto Arquitectónico
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  El trabajo del arquitecto se divide en varias fases, cada una con un porcentaje de los honorarios
                  totales:
                </p>

                <div className="space-y-3">
                  <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900">1. Proyecto Básico</h4>
                      <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
                        ~35% honorarios
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Define la idea general del edificio y permite solicitar la <strong>licencia de obras</strong>.
                      Incluye:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-700">
                      <li>• Memoria descriptiva del proyecto</li>
                      <li>• Planos de plantas, alzados y secciones</li>
                      <li>• Cumplimiento del CTE (Código Técnico de la Edificación)</li>
                      <li>• Presupuesto estimado (PEM)</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border-l-4 border-indigo-500 bg-indigo-50 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900">2. Proyecto de Ejecución</h4>
                      <span className="rounded-full bg-indigo-600 px-3 py-1 text-sm font-medium text-white">
                        ~40% honorarios
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">Detalla técnicamente cómo se debe construir. Incluye:</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-700">
                      <li>• Planos de detalle constructivo</li>
                      <li>• Especificaciones de materiales y calidades</li>
                      <li>• Pliego de condiciones técnicas</li>
                      <li>• Mediciones y presupuesto detallado</li>
                      <li>• Cálculos de estructura e instalaciones</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900">3. Dirección de Obra</h4>
                      <span className="rounded-full bg-purple-600 px-3 py-1 text-sm font-medium text-white">
                        ~25% honorarios
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">Supervisión y control durante la construcción. Incluye:</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-700">
                      <li>• Visitas periódicas a la obra</li>
                      <li>• Control de calidad de materiales y ejecución</li>
                      <li>• Resolución de imprevistos y modificaciones</li>
                      <li>• Coordinación con constructora y subcontratas</li>
                      <li>• Certificación final de obra</li>
                    </ul>
                  </div>
                </div>

                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-sm text-green-800">
                    <strong>¿Se pueden contratar por separado?</strong> Sí, puedes contratar solo el Proyecto Básico
                    (para licencia) o Básico + Ejecución (sin dirección de obra), aunque lo habitual es contratar el
                    servicio completo.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Costes Adicionales */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                  Costes Adicionales a Considerar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <h4 className="mb-2 font-semibold text-gray-900">Visado del Colegio de Arquitectos</h4>
                    <p className="text-sm text-gray-700">
                      Es obligatorio visar el proyecto en el Colegio Oficial de Arquitectos. El coste del visado es un{" "}
                      <strong>porcentaje adicional</strong> (generalmente 0.3-0.6% del PEM) que se paga aparte de los
                      honorarios del arquitecto.
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <h4 className="mb-2 font-semibold text-gray-900">Otros Técnicos</h4>
                    <p className="text-sm text-gray-700">Dependiendo del proyecto, puede ser necesario contratar:</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-700">
                      <li>
                        • <strong>Aparejador/Arquitecto Técnico:</strong> Dirección de ejecución de obra
                      </li>
                      <li>
                        • <strong>Ingeniero de estructuras:</strong> Cálculo estructural (si no lo hace el arquitecto)
                      </li>
                      <li>
                        • <strong>Ingeniero de instalaciones:</strong> Proyectos de climatización, electricidad, etc.
                      </li>
                      <li>
                        • <strong>Topógrafo:</strong> Levantamiento del terreno
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <h4 className="mb-2 font-semibold text-gray-900">Tasas Municipales</h4>
                    <p className="text-sm text-gray-700">
                      Al solicitar la licencia de obras, el ayuntamiento cobra tasas (ICIO: Impuesto sobre
                      Construcciones, Instalaciones y Obras) que suelen ser el 2-5% del PEM.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Consejos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Consejos para Contratar un Arquitecto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Solicita Presupuesto Detallado</h4>
                    <p className="text-sm text-gray-700">
                      Pide un desglose claro de honorarios por fases, servicios incluidos/excluidos, y plazos de
                      entrega.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Compara Varios Presupuestos</h4>
                    <p className="text-sm text-gray-700">
                      Consulta al menos 3 arquitectos. No elijas solo por precio, valora experiencia y portfolio.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Firma un Contrato</h4>
                    <p className="text-sm text-gray-700">
                      Define por escrito: alcance del trabajo, honorarios, plazos, forma de pago y condiciones de
                      modificación.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Verifica la Colegiación</h4>
                    <p className="text-sm text-gray-700">
                      Asegúrate de que el arquitecto está colegiado y tiene el seguro de responsabilidad civil
                      obligatorio.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cómo se calculan los honorarios de un arquitecto en España?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Desde 2009 no hay baremos oficiales obligatorios. Los arquitectos establecen sus honorarios
                  libremente, generalmente basándose en un porcentaje del PEM (Presupuesto de Ejecución Material) que
                  varía según el tipo de proyecto, complejidad, ubicación y experiencia del profesional. Los porcentajes
                  suelen oscilar entre el 6% y el 15% del PEM.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Qué es el PEM y cómo se calcula?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  El PEM (Presupuesto de Ejecución Material) es el coste de materiales y mano de obra necesarios para
                  ejecutar la obra, sin incluir gastos generales ni beneficio industrial del contratista. Se determina
                  en el documento de "Mediciones y presupuestos" del proyecto. Es la base sobre la que se calculan los
                  honorarios del arquitecto.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Qué fases incluyen los honorarios de un arquitecto?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Los honorarios pueden cubrir diferentes fases: <strong>Proyecto Básico</strong> (para solicitar
                  licencia, ~30-40% de honorarios), <strong>Proyecto de Ejecución</strong> (planos detallados para
                  construir, ~40-50%), y <strong>Dirección de Obra</strong> (supervisión durante la construcción,
                  ~20-30%). Cada fase puede contratarse por separado.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  ¿Los honorarios incluyen el visado del colegio de arquitectos?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  No, el visado del Colegio de Arquitectos es un coste adicional que se paga aparte. Las tarifas de
                  visado se calculan según baremos establecidos por cada colegio profesional y dependen de las
                  características del proyecto.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cuánto cobra un arquitecto por una reforma integral?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Para una reforma integral, los honorarios suelen ser entre el 8% y el 12% del PEM. Por ejemplo, para
                  una reforma con un PEM de 50.000€, los honorarios estarían entre 4.000€ y 6.000€ más IVA, dependiendo
                  de la complejidad y servicios incluidos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculadoras Relacionadas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculadoras Relacionadas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complementa tu cálculo de honorarios con estas herramientas profesionales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <RelatedCalculatorCard
              icon={<Scale className="h-6 w-6 text-blue-500" />}
              title="Honorarios de Abogado"
              description="Calcula honorarios legales según baremos oficiales y tipos de servicio jurídico."
              features={["Baremos oficiales", "Múltiples servicios", "Minutas detalladas"]}
              href="/calculadora-honorarios-abogado"
              buttonText="Calcular Honorarios"
              buttonClassName="bg-blue-600 hover:bg-blue-700"
              iconBgClassName="bg-blue-100"
            />
            <RelatedCalculatorCard
              icon={<Home className="h-6 w-6 text-green-500" />}
              title="Calculadora de Hipoteca"
              description="Calcula tu hipoteca mensual. Perfecto para proyectos de construcción o compra."
              features={["Cuota mensual", "TAE real", "Calendario completo"]}
              href="/calculadora-hipoteca"
              buttonText="Calcular Hipoteca"
              buttonClassName="bg-green-600 hover:bg-green-700"
              iconBgClassName="bg-green-100"
            />
            <RelatedCalculatorCard
              icon={<PiggyBank className="h-6 w-6 text-purple-500" />}
              title="Calculadora de Ahorro"
              description="Planifica el ahorro necesario para tu proyecto inmobiliario con interés compuesto."
              features={["Ahorro a largo plazo", "Interés compuesto", "Planificación financiera"]}
              href="/calculadora-ahorro"
              buttonText="Calcular Ahorro"
              buttonClassName="bg-purple-600 hover:bg-purple-700"
              iconBgClassName="bg-purple-100"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
