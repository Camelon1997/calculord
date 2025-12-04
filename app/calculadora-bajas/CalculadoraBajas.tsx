"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Calculator,
  Clock,
  AlertCircle,
  Building2,
  Shield,
  FileText,
  TrendingUp,
  Users,
  CheckCircle2,
  Euro,
  Calendar,
  Download,
  Share2,
  ChevronRight,
  Briefcase,
  Activity,
} from "lucide-react"

interface ResultadoBaja {
  baseReguladoriaDiaria: number
  prestacionDiaria: number
  diasSinRetribucion: number
  diasPagadosEmpresa: number
  importeEmpresa: number
  diasPagadosINSS: number
  importeINSS: number
  totalPrestacion: number
  porcentajeAplicado: number
}

const infoItems = [
  {
    icon: <Activity className="h-6 w-6 text-blue-500" />,
    titulo: "Cálculo Preciso IT",
    descripcion: "Base reguladora según INSS y mutuas colaboradoras.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-emerald-500" />,
    titulo: "Desglose por Días",
    descripcion: "Quién paga cada día: empresa, INSS o mutua.",
  },
  {
    icon: <Shield className="h-6 w-6 text-orange-500" />,
    titulo: "Tipos de Contingencia",
    descripcion: "Común (enfermedad) vs profesional (accidente laboral).",
  },
]

const faqData = [
  {
    pregunta: "¿Cuánto se cobra de baja laboral en 2025?",
    respuesta:
      "Depende del tipo de baja. Por enfermedad común: días 1-3 no se cobra (salvo convenio), días 4-15 se cobra 60% pagado por la empresa, desde el día 16 se cobra 75% pagado por el INSS o mutua. Por accidente laboral: desde el día siguiente se cobra 75% pagado por INSS o mutua.",
  },
  {
    pregunta: "¿Qué es la base reguladora en una baja laboral?",
    respuesta:
      "Es la cantidad sobre la que se calcula la prestación. Se obtiene dividiendo la base de cotización del mes anterior a la baja entre 30 días. Para contingencias profesionales también se incluyen las horas extras del año anterior divididas entre 365.",
  },
  {
    pregunta: "¿Quién paga mi baja laboral, la empresa o la Seguridad Social?",
    respuesta:
      "Depende del tipo de baja y los días. Enfermedad común: días 1-3 nada (salvo convenio), días 4-15 empresa (60%), día 16 en adelante INSS/mutua (75%). Accidente laboral: desde el primer día INSS/mutua (75%).",
  },
  {
    pregunta: "¿Puedo ser despedido estando de baja?",
    respuesta:
      "Sí, pero con limitaciones. Un despido por el simple hecho de estar de baja puede ser declarado nulo si se considera discriminatorio. Si el despido es por causas objetivas ajenas a la baja, debe seguir el procedimiento legal y abonar la indemnización correspondiente.",
  },
  {
    pregunta: "¿Cuál es la duración máxima de una baja laboral?",
    respuesta:
      "La incapacidad temporal puede durar hasta 365 días, prorrogables por otros 180 días más si se prevé curación en ese plazo. Después, si no hay alta médica, se inicia el proceso de evaluación de incapacidad permanente.",
  },
]

export default function CalculadoraBajas() {
  const [salarioBruto, setSalarioBruto] = useState("")
  const [tipoBaja, setTipoBaja] = useState("comun")
  const [diasBaja, setDiasBaja] = useState("")
  const [resultados, setResultados] = useState<ResultadoBaja | null>(null)

  const calcularBaja = () => {
    const salario = Number.parseFloat(salarioBruto) || 0
    const dias = Number.parseInt(diasBaja) || 0

    if (salario <= 0 || dias <= 0) {
      return
    }

    // Base reguladora diaria (base de cotización / 30)
    const baseReguladoraDiaria = salario / 30

    let diasSinRetribucion = 0
    let diasPagadosEmpresa = 0
    let diasPagadosINSS = 0
    const porcentajeEmpresa = 0.6 // 60%
    const porcentajeINSS = 0.75 // 75%

    if (tipoBaja === "comun") {
      // Enfermedad común o accidente no laboral
      if (dias <= 3) {
        diasSinRetribucion = dias
      } else if (dias <= 15) {
        diasSinRetribucion = 3
        diasPagadosEmpresa = dias - 3
      } else {
        diasSinRetribucion = 3
        diasPagadosEmpresa = 12 // días 4 al 15
        diasPagadosINSS = dias - 15
      }
    } else {
      // Accidente laboral o enfermedad profesional
      // Se cobra desde el día siguiente al 75%
      diasPagadosINSS = dias
    }

    const importeEmpresa = diasPagadosEmpresa * baseReguladoraDiaria * porcentajeEmpresa
    const importeINSS = diasPagadosINSS * baseReguladoraDiaria * porcentajeINSS
    const totalPrestacion = importeEmpresa + importeINSS
    const prestacionDiaria = dias > 0 ? totalPrestacion / dias : 0

    setResultados({
      baseReguladoriaDiaria: baseReguladoraDiaria,
      prestacionDiaria: prestacionDiaria,
      diasSinRetribucion: diasSinRetribucion,
      diasPagadosEmpresa: diasPagadosEmpresa,
      importeEmpresa: importeEmpresa,
      diasPagadosINSS: diasPagadosINSS,
      importeINSS: importeINSS,
      totalPrestacion: totalPrestacion,
      porcentajeAplicado: diasPagadosEmpresa > 0 ? porcentajeEmpresa * 100 : porcentajeINSS * 100,
    })
  }

  const descargarResultados = () => {
    if (!resultados) return

    const contenido = `CALCULADORA DE BAJAS LABORALES 2025 - RESULTADOS
====================================

DATOS INTRODUCIDOS:
- Salario Bruto Mensual: ${salarioBruto}€
- Tipo de Baja: ${tipoBaja === "comun" ? "Enfermedad Común" : "Accidente Laboral"}
- Días de Baja: ${diasBaja}

RESULTADOS:
- Base Reguladora Diaria: ${resultados.baseReguladoriaDiaria.toFixed(2)}€
- Prestación Media Diaria: ${resultados.prestacionDiaria.toFixed(2)}€

DESGLOSE POR DÍAS:
- Días sin retribución: ${resultados.diasSinRetribucion} días
- Días pagados por empresa (60%): ${resultados.diasPagadosEmpresa} días = ${resultados.importeEmpresa.toFixed(2)}€
- Días pagados por INSS/Mutua (75%): ${resultados.diasPagadosINSS} días = ${resultados.importeINSS.toFixed(2)}€

TOTAL PRESTACIÓN: ${resultados.totalPrestacion.toFixed(2)}€

Calculado en: ${new Date().toLocaleDateString("es-ES")}
Fuente: Calculord.com`

    const blob = new Blob([contenido], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "calculo_baja_laboral.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Activity className="h-4 w-4" />
              Actualizado 2025
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Calculadora de{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Bajas Laborales
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Calcula tu prestación por incapacidad temporal (IT) en 2025. Conoce cuánto cobrarás, quién paga cada día y
              los porcentajes según el tipo de baja.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {infoItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.titulo}</h3>
                <p className="text-sm text-gray-600">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Datos de la Baja
                </CardTitle>
                <CardDescription>Introduce los datos para calcular tu prestación por IT</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="salarioBruto">Salario Bruto Mensual (€)</Label>
                  <Input
                    id="salarioBruto"
                    type="number"
                    placeholder="2000"
                    value={salarioBruto}
                    onChange={(e) => setSalarioBruto(e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-sm text-gray-500 mt-1">Base de cotización del mes anterior a la baja</p>
                </div>

                <div>
                  <Label htmlFor="tipoBaja">Tipo de Baja</Label>
                  <Select value={tipoBaja} onValueChange={setTipoBaja}>
                    <SelectTrigger id="tipoBaja" className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="comun">Enfermedad Común / Accidente No Laboral</SelectItem>
                      <SelectItem value="profesional">Accidente Laboral / Enfermedad Profesional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="diasBaja">Días de Baja</Label>
                  <Input
                    id="diasBaja"
                    type="number"
                    placeholder="15"
                    value={diasBaja}
                    onChange={(e) => setDiasBaja(e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-sm text-gray-500 mt-1">Duración estimada o real de la baja médica</p>
                </div>

                <Button onClick={calcularBaja} className="w-full" size="lg">
                  <Calculator className="h-4 w-4 mr-2" />
                  Calcular Prestación
                </Button>

                {tipoBaja === "comun" && (
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Enfermedad común:</strong> Días 1-3 sin retribución (salvo convenio), días 4-15 cobra
                      empresa (60%), día 16+ cobra INSS/mutua (75%).
                    </AlertDescription>
                  </Alert>
                )}

                {tipoBaja === "profesional" && (
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Accidente laboral:</strong> Desde el día siguiente cobras el 75% de la base reguladora,
                      pagado por el INSS o mutua colaboradora.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            {/* Results */}
            {resultados && (
              <Card className="bg-gradient-to-br from-blue-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Resultados
                  </CardTitle>
                  <CardDescription>Tu prestación por incapacidad temporal</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Total Prestación</p>
                    <p className="text-4xl font-bold text-blue-600">{resultados.totalPrestacion.toFixed(2)}€</p>
                    <p className="text-sm text-gray-500 mt-1">Durante {diasBaja} días de baja</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-sm text-gray-600">Base Reguladora Diaria:</span>
                      <span className="font-semibold">{resultados.baseReguladoriaDiaria.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="text-sm text-gray-600">Prestación Media Diaria:</span>
                      <span className="font-semibold">{resultados.prestacionDiaria.toFixed(2)}€</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">Desglose por Días</h4>

                    {resultados.diasSinRetribucion > 0 && (
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-900">Sin retribución</p>
                          <p className="text-xs text-gray-500">{resultados.diasSinRetribucion} días (0%)</p>
                        </div>
                        <p className="text-gray-400 font-medium">0,00€</p>
                      </div>
                    )}

                    {resultados.diasPagadosEmpresa > 0 && (
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-900">Pagado por Empresa</p>
                          <p className="text-xs text-gray-500">{resultados.diasPagadosEmpresa} días (60%)</p>
                        </div>
                        <p className="text-emerald-600 font-semibold">+{resultados.importeEmpresa.toFixed(2)}€</p>
                      </div>
                    )}

                    {resultados.diasPagadosINSS > 0 && (
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-900">Pagado por INSS/Mutua</p>
                          <p className="text-xs text-gray-500">{resultados.diasPagadosINSS} días (75%)</p>
                        </div>
                        <p className="text-emerald-600 font-semibold">+{resultados.importeINSS.toFixed(2)}€</p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={descargarResultados} variant="outline" className="flex-1 bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Descargar
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartir
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Educational Guide */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Guía Completa sobre Bajas Laborales</h2>
            <p className="text-lg text-gray-600">Todo lo que necesitas saber sobre la prestación por IT en España</p>
          </div>

          <div className="space-y-8">
            {/* Qué es IT */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-600" />
                ¿Qué es la Incapacidad Temporal (IT)?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                La <strong>Incapacidad Temporal (IT)</strong>, comúnmente conocida como &quot;baja laboral&quot; o
                &quot;baja médica&quot;, es una prestación económica de la Seguridad Social que protege al trabajador
                cuando está temporalmente impedido para trabajar debido a{" "}
                <span className="font-semibold">
                  enfermedad común, accidente no laboral, accidente de trabajo o enfermedad profesional
                </span>
                , y necesita asistencia sanitaria.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Durante el periodo de IT, el trabajador recibe una prestación económica que sustituye parcialmente su
                salario mientras se recupera. El objetivo es garantizar unos ingresos mínimos durante la recuperación y
                permitir que el trabajador vuelva a su puesto de trabajo en las mejores condiciones posibles.
              </p>
            </div>

            {/* Tipos de contingencias */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-emerald-600" />
                Tipos de Contingencias
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Contingencias Comunes</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                      <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Enfermedad común:</strong> gripe, apendicitis, depresión, etc.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Accidente no laboral:</strong> caída en casa, accidente de tráfico fuera del trabajo.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900">Días 1-3: Sin retribución</p>
                    <p className="text-sm font-semibold text-blue-900">Días 4-15: 60% empresa</p>
                    <p className="text-sm font-semibold text-blue-900">Día 16+: 75% INSS/mutua</p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Contingencias Profesionales</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                      <ChevronRight className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Accidente de trabajo:</strong> in itinere, en el centro de trabajo.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <ChevronRight className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Enfermedad profesional:</strong> causada por el trabajo habitual.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                    <p className="text-sm font-semibold text-emerald-900">Desde día 1: 75% INSS/mutua</p>
                    <p className="text-xs text-emerald-700 mt-1">Protección completa desde el primer día</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Base reguladora */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Euro className="h-6 w-6 text-orange-600" />
                ¿Cómo se Calcula la Base Reguladora?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                La <strong>base reguladora</strong> es la cantidad sobre la que se aplican los porcentajes para calcular
                tu prestación. Se calcula de forma diferente según el tipo de contingencia:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-900 mb-2">Contingencias Comunes</h4>
                  <p className="text-gray-700">
                    Base reguladora ={" "}
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                      Base de cotización del mes anterior / 30 días
                    </span>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Se toma la base por contingencias comunes del mes inmediatamente anterior al inicio de la IT.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-900 mb-2">Contingencias Profesionales</h4>
                  <p className="text-gray-700">
                    Base reguladora ={" "}
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                      (Base mes anterior + horas extra año anterior / 365) / 30
                    </span>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Incluye la base de contingencias profesionales más la media de horas extras del año anterior.
                  </p>
                </div>
              </div>
            </div>

            {/* Quién paga */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-purple-600" />
                ¿Quién Paga mi Baja Laboral?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                El pago de la prestación por IT se reparte entre la empresa y la Seguridad Social (INSS o mutua
                colaboradora) según el tipo de baja y los días transcurridos:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Días</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Enfermedad Común</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Accidente Laboral</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">1 a 3</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className="text-red-600 font-semibold">0% (sin retribución)*</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3" rowSpan={3}>
                        <span className="text-emerald-600 font-semibold">75% INSS/Mutua</span>
                        <p className="text-xs text-gray-600 mt-1">Desde el día siguiente al accidente</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">4 a 15</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className="text-blue-600 font-semibold">60% Empresa</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">16 en adelante</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className="text-emerald-600 font-semibold">75% INSS/Mutua</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                * Salvo que el convenio colectivo establezca complementos por parte de la empresa para los primeros
                días.
              </p>
            </div>

            {/* Duración */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6 text-indigo-600" />
                Duración de la Baja Laboral
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 rounded-full p-3">
                    <Calendar className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Duración inicial: 365 días</h4>
                    <p className="text-gray-700">
                      La IT puede durar hasta <strong>365 días</strong>, prorrogables por otros{" "}
                      <strong>180 días más</strong> si se prevé que el trabajador podrá curarse durante ese tiempo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 rounded-full p-3">
                    <AlertCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">¿Qué pasa después de 545 días?</h4>
                    <p className="text-gray-700">
                      Si después de 365 + 180 días (total 545 días) no hay curación, se inicia el proceso de evaluación
                      de <strong>incapacidad permanente</strong>. El INSS convocará al trabajador para evaluar si la
                      incapacidad es definitiva.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 rounded-full p-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Alta médica</h4>
                    <p className="text-gray-700">
                      La baja puede finalizar antes si el médico del INSS o la mutua te da el{" "}
                      <strong>alta médica</strong> por considerar que estás recuperado. También puedes recibir el alta
                      por incomparecencia a las revisiones médicas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Derechos */}
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                Tus Derechos Durante la Baja
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    titulo: "Protección contra despido",
                    descripcion:
                      "No puedes ser despedido solo por estar de baja. Si ocurre, puede ser declarado nulo o improcedente.",
                  },
                  {
                    titulo: "Asistencia sanitaria completa",
                    descripcion:
                      "Tienes derecho a tratamiento médico, medicamentos y rehabilitación necesaria para tu recuperación.",
                  },
                  {
                    titulo: "Conservación del empleo",
                    descripcion:
                      "Tu puesto de trabajo se reserva durante la IT. La empresa debe reincorporarte al finalizar la baja.",
                  },
                  {
                    titulo: "No descuenta vacaciones",
                    descripcion:
                      "El tiempo de baja no afecta a tus vacaciones anuales. Sigues generando días de vacaciones.",
                  },
                  {
                    titulo: "Cotización a la SS",
                    descripcion:
                      "Durante la IT se sigue cotizando, por lo que cuentan para antigüedad, paro y jubilación.",
                  },
                  {
                    titulo: "Revisiones médicas",
                    descripcion:
                      "Debes acudir a las revisiones médicas del INSS o mutua. La incomparecencia puede causar el alta forzosa.",
                  },
                ].map((derecho, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">{derecho.titulo}</h4>
                    <p className="text-sm text-gray-600">{derecho.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-lg text-gray-600">Resolvemos tus dudas sobre bajas laborales</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{faq.pregunta}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">{faq.respuesta}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Calculators */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Calculadoras Relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/calculadora-paro"
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Calculadora de Paro
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Calcula tu prestación por desempleo según tus cotizaciones y situación laboral.
              </p>
              <span className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">
                Calcular ahora
                <ChevronRight className="h-4 w-4" />
              </span>
            </a>

            <a
              href="/calculadora-nomina"
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="bg-emerald-100 rounded-lg p-3 w-fit mb-4">
                <FileText className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                Calculadora de Nómina
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Simula tu nómina completa con todos los conceptos, deducciones y retenciones 2025.
              </p>
              <span className="text-emerald-600 text-sm font-medium inline-flex items-center gap-1">
                Calcular ahora
                <ChevronRight className="h-4 w-4" />
              </span>
            </a>

            <a
              href="/calculadora-erte"
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="bg-orange-100 rounded-lg p-3 w-fit mb-4">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                Calculadora de ERTE
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Descubre cuánto cobrarás si tu empresa te incluye en un ERTE de suspensión o reducción.
              </p>
              <span className="text-orange-600 text-sm font-medium inline-flex items-center gap-1">
                Calcular ahora
                <ChevronRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
