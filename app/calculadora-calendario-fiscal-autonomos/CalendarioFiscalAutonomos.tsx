"use client"

import type React from "react"
import { useState } from "react"
import {
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  FileText,
  Euro,
  Mail,
  Download,
  Bell,
  ChevronRight,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FechaFiscal {
  fecha: string
  titulo: string
  descripcion: string
  modelo: string
  tipo: "trimestral" | "anual" | "mensual"
  color: string
  urgencia: "alta" | "media" | "baja"
  mes: string
}

const generarFechasFiscales = (): FechaFiscal[] => {
  const añoActual = new Date().getFullYear()
  const añoSiguiente = añoActual + 1

  return [
    {
      fecha: `20 Enero ${añoSiguiente}`,
      mes: "Enero",
      titulo: `4º Trimestre ${añoActual} - IRPF e IVA`,
      descripcion: `Declaración trimestral del IRPF (Modelo 130) e IVA (Modelo 303) del último trimestre de ${añoActual}`,
      modelo: "130 y 303",
      tipo: "trimestral",
      color: "bg-red-100 text-red-800 border-red-200",
      urgencia: "alta",
    },
    {
      fecha: `31 Enero ${añoSiguiente}`,
      mes: "Enero",
      titulo: `Resumen Anual IVA ${añoActual}`,
      descripcion: `Presentación del resumen anual del IVA (Modelo 390) correspondiente al ejercicio ${añoActual}`,
      modelo: "390",
      tipo: "anual",
      color: "bg-orange-100 text-orange-800 border-orange-200",
      urgencia: "alta",
    },
    {
      fecha: `20 Abril ${añoSiguiente}`,
      mes: "Abril",
      titulo: `1er Trimestre ${añoSiguiente} - IRPF e IVA`,
      descripcion: `Declaración trimestral del IRPF (Modelo 130) e IVA (Modelo 303) del primer trimestre de ${añoSiguiente}`,
      modelo: "130 y 303",
      tipo: "trimestral",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      urgencia: "media",
    },
    {
      fecha: `30 Junio ${añoSiguiente}`,
      mes: "Junio",
      titulo: `Declaración Anual IRPF ${añoActual}`,
      descripcion: `Fecha límite para presentar la declaración anual del IRPF (Modelo 100) correspondiente al ejercicio ${añoActual}. Incluye regularización de pagos fraccionados.`,
      modelo: "100",
      tipo: "anual",
      color: "bg-purple-100 text-purple-800 border-purple-200",
      urgencia: "alta",
    },
    {
      fecha: `20 Julio ${añoSiguiente}`,
      mes: "Julio",
      titulo: `2º Trimestre ${añoSiguiente} - IRPF e IVA`,
      descripcion: `Declaración trimestral del IRPF (Modelo 130) e IVA (Modelo 303) del segundo trimestre de ${añoSiguiente}`,
      modelo: "130 y 303",
      tipo: "trimestral",
      color: "bg-green-100 text-green-800 border-green-200",
      urgencia: "media",
    },
    {
      fecha: `20 Octubre ${añoSiguiente}`,
      mes: "Octubre",
      titulo: `3er Trimestre ${añoSiguiente} - IRPF e IVA`,
      descripcion: `Declaración trimestral del IRPF (Modelo 130) e IVA (Modelo 303) del tercer trimestre de ${añoSiguiente}`,
      modelo: "130 y 303",
      tipo: "trimestral",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      urgencia: "media",
    },
  ]
}

export default function CalendarioFiscalAutonomos() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  const fechasFiscales = generarFechasFiscales()
  const añoSiguiente = new Date().getFullYear() + 1

  const faqs = [
    {
      question: "¿Qué pasa si no presento una declaración a tiempo?",
      answer:
        "Se aplicarán recargos que van del 5% al 20% del importe a ingresar si lo presentas antes del requerimiento de Hacienda. Si Hacienda te lo reclama, la sanción puede ser mucho mayor, con un mínimo de 300€ y hasta el 150% de la cantidad no declarada en casos graves.",
    },
    {
      question: "¿Puedo presentar las declaraciones después de la fecha límite?",
      answer:
        "Sí, pero con recargos. Es mejor presentar tarde que no presentar, ya que los recargos por presentación fuera de plazo son menores que las sanciones por no presentar. El recargo es del 5% si presentas en los 3 meses siguientes, 10% entre 3-6 meses, 15% entre 6-12 meses y 20% más de 12 meses.",
    },
    {
      question: "¿Qué documentos necesito para las declaraciones trimestrales?",
      answer:
        "Necesitarás un registro de todas tus facturas emitidas (ingresos) y recibidas (gastos deducibles), libro de registro de facturas, justificantes de las retenciones practicadas, extractos bancarios, la declaración del trimestre anterior, y el certificado digital o Cl@ve PIN para presentar telemáticamente.",
    },
    {
      question: "¿Puedo modificar una declaración ya presentada?",
      answer:
        "Sí. Si el error te perjudica (pagaste de más), puedes solicitar una rectificación de autoliquidación presentando el modelo correspondiente. Si el error perjudica a Hacienda (pagaste de menos), debes presentar una declaración complementaria lo antes posible para evitar sanciones mayores.",
    },
    {
      question: "¿Estoy obligado a presentar el modelo 130 si tengo retenciones?",
      answer:
        "Si el 70% o más de tus ingresos tienen retención de IRPF practicada, no estás obligado a presentar el modelo 130 trimestral de pagos fraccionados. Sin embargo, sí deberás presentar la declaración anual del IRPF (modelo 100).",
    },
    {
      question: "¿Qué diferencia hay entre el modelo 303 y el 390?",
      answer:
        "El modelo 303 es la declaración trimestral del IVA donde liquidamos el IVA repercutido menos el soportado de cada trimestre. El modelo 390 es el resumen anual informativo del IVA, que se presenta en enero del año siguiente y recoge toda la información del año anterior. Ambos son obligatorios.",
    },
  ]

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Calendar className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Calendario Fiscal Autónomos
              <span className="block text-blue-200 mt-2">{añoSiguiente}</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Todas las fechas clave de IRPF, IVA y obligaciones fiscales. Mantente al día y evita sanciones de
              Hacienda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#calendario-completo">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 shadow-xl">
                  <Calendar className="mr-2 h-5 w-5" />
                  Ver Fechas Clave
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Descargar PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-16 md:space-y-24 my-16 md:my-24">
        {/* Fechas Próximas */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Próximas Fechas Importantes</h2>
            <p className="text-lg text-gray-600">Mantente al día con tus obligaciones fiscales</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fechasFiscales.slice(0, 3).map((fecha, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={fecha.color}>{fecha.modelo}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {fecha.urgencia === "alta" ? "Urgente" : "Próximo"}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{fecha.titulo}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">{fecha.fecha}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{fecha.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Calendario Completo */}
        <section id="calendario-completo" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Calendario Fiscal Completo {añoSiguiente}</h2>
              <p className="text-lg text-gray-600">Todas las fechas que necesitas conocer como autónomo</p>
            </div>

            <div className="space-y-6">
              {fechasFiscales.map((fecha, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <Badge className={fecha.color}>{fecha.modelo}</Badge>
                          <Badge variant="outline" className="capitalize">
                            {fecha.tipo}
                          </Badge>
                          {fecha.urgencia === "alta" && (
                            <div className="flex items-center text-red-600">
                              <AlertTriangle className="h-4 w-4 mr-1" />
                              <span className="text-sm font-medium">Urgente</span>
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{fecha.titulo}</h3>
                        <p className="text-gray-600 mb-2">{fecha.descripcion}</p>
                      </div>
                      <div className="md:text-right mt-4 md:mt-0">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{fecha.fecha}</div>
                        <div className="flex items-center text-sm text-gray-500 justify-end">
                          <Calendar className="h-4 w-4 mr-1" />
                          Fecha límite
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Modelos Fiscales Detallados */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Guía Completa de Modelos Fiscales</h2>
            <p className="text-lg text-gray-600">Todo lo que necesitas saber sobre cada modelo</p>
          </div>

          <Tabs defaultValue="modelo-130" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="modelo-130">Modelo 130</TabsTrigger>
              <TabsTrigger value="modelo-303">Modelo 303</TabsTrigger>
              <TabsTrigger value="modelo-100">Modelo 100</TabsTrigger>
              <TabsTrigger value="modelo-390">Modelo 390</TabsTrigger>
            </TabsList>

            <TabsContent value="modelo-130">
              <Card className="border-2">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Modelo 130 - Pago Fraccionado IRPF</CardTitle>
                      <CardDescription className="text-base">Declaración trimestral del IRPF</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ¿Qué es?
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        El modelo 130 es la declaración trimestral de pago fraccionado del IRPF para autónomos en
                        estimación directa. Sirve para adelantar el pago del impuesto sobre los beneficios trimestrales,
                        evitando un pago único muy elevado en la declaración anual.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ¿Quién debe presentarlo?
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          Autónomos en estimación directa (normal o simplificada)
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          Que NO tengan el 70% o más de sus ingresos con retención de IRPF
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          Profesionales y empresarios que realizan actividades económicas
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ¿Cómo se calcula?
                      </h4>
                      <p className="text-gray-600 mb-3">
                        Se aplica el 20% sobre el beneficio neto trimestral (ingresos - gastos deducibles - retenciones
                        soportadas). Se resta lo pagado en trimestres anteriores del mismo año.
                      </p>
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <p className="text-sm text-gray-700">
                          <strong>Ejemplo:</strong> Si tus ingresos del trimestre son 10.000€ y tus gastos 4.000€, el
                          beneficio es 6.000€. El 20% de 6.000€ = 1.200€ a pagar en el modelo 130.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <Clock className="h-5 w-5 text-orange-500 mr-2" />
                        Fechas de presentación
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="font-semibold text-sm text-gray-700">1er Trimestre</div>
                          <div className="text-blue-600 font-bold">1-20 Abril</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="font-semibold text-sm text-gray-700">2º Trimestre</div>
                          <div className="text-blue-600 font-bold">1-20 Julio</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="font-semibold text-sm text-gray-700">3er Trimestre</div>
                          <div className="text-blue-600 font-bold">1-20 Octubre</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="font-semibold text-sm text-gray-700">4º Trimestre</div>
                          <div className="text-blue-600 font-bold">1-20 Enero</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="modelo-303">
              <Card className="border-2">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                      <Euro className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Modelo 303 - IVA Trimestral</CardTitle>
                      <CardDescription className="text-base">Autoliquidación del IVA</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ¿Qué es?
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        El modelo 303 es la autoliquidación trimestral del IVA. En él se declara el IVA repercutido
                        (cobrado a clientes) menos el IVA soportado (pagado en compras), resultando en la cantidad a
                        pagar o a compensar.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ¿Quién debe presentarlo?
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          Todos los autónomos y empresas que realizan actividades sujetas a IVA
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          Tanto si están dados de alta en el régimen general como en el régimen simplificado
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          Incluso si el resultado es a devolver o sin actividad (declaración negativa)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ¿Cómo se calcula?
                      </h4>
                      <p className="text-gray-600 mb-3">
                        Se suma todo el IVA repercutido en facturas emitidas y se resta el IVA soportado de facturas
                        recibidas. Si el resultado es positivo, se paga a Hacienda. Si es negativo, se compensa en el
                        siguiente trimestre o se solicita devolución.
                      </p>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <p className="text-sm text-gray-700">
                          <strong>Ejemplo:</strong> Has facturado 10.000€ + 2.100€ IVA (21%). Has pagado facturas por
                          5.000€ + 1.050€ IVA. Resultado: 2.100€ - 1.050€ = 1.050€ a pagar.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <Clock className="h-5 w-5 text-orange-500 mr-2" />
                        Fechas de presentación
                      </h4>
                      <p className="text-gray-600 mb-3">Mismos plazos que el modelo 130:</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="font-semibold text-sm text-gray-700">1er Trimestre</div>
                          <div className="text-green-600 font-bold">1-20 Abril</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="font-semibold text-sm text-gray-700">2º Trimestre</div>
                          <div className="text-green-600 font-bold">1-20 Julio</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="font-semibold text-sm text-gray-700">3er Trimestre</div>
                          <div className="text-green-600 font-bold">1-20 Octubre</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="font-semibold text-sm text-gray-700">4º Trimestre</div>
                          <div className="text-green-600 font-bold">1-30 Enero</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="modelo-100">
              <Card className="border-2">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Modelo 100 - Declaración de la Renta</CardTitle>
                      <CardDescription className="text-base">IRPF Anual</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ¿Qué es?
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        El modelo 100 es la declaración anual del IRPF, conocida como "la Renta". En ella se regularizan
                        todos los ingresos y gastos del año, aplicando las deducciones correspondientes y ajustando los
                        pagos fraccionados ya realizados.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ¿Quién debe presentarlo?
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          Todos los autónomos con actividades económicas
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          Trabajadores por cuenta ajena con ingresos superiores a 22.000€ (un pagador) o 15.000€ (dos o
                          más pagadores)
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          Personas con otras rentas (alquileres, inversiones, etc.) superiores a 1.600€
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ¿Qué incluye?
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-sm mb-2">Rendimientos del trabajo</h5>
                          <p className="text-sm text-gray-600">Salarios, pensiones, prestaciones</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-sm mb-2">Actividades económicas</h5>
                          <p className="text-sm text-gray-600">Ingresos como autónomo</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-sm mb-2">Rendimientos del capital</h5>
                          <p className="text-sm text-gray-600">Intereses, dividendos, alquileres</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-sm mb-2">Ganancias patrimoniales</h5>
                          <p className="text-sm text-gray-600">Ventas de activos, inversiones</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <Clock className="h-5 w-5 text-orange-500 mr-2" />
                        Fechas de presentación
                      </h4>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-2 border-purple-200">
                        <div className="text-sm text-gray-600 mb-2">Campaña de la Renta</div>
                        <div className="text-2xl font-bold text-purple-600">Abril - Junio</div>
                        <div className="text-sm text-gray-600 mt-2">
                          Fecha límite: <strong>30 de junio</strong> (o 25 de junio si el resultado es a ingresar con
                          domiciliación bancaria)
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="modelo-390">
              <Card className="border-2">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Modelo 390 - Resumen Anual IVA</CardTitle>
                      <CardDescription className="text-base">Declaración informativa</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ¿Qué es?
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        El modelo 390 es el resumen anual del IVA. Es una declaración informativa que recoge todos los
                        datos de los modelos 303 presentados durante el año. No genera pago, pero es obligatoria su
                        presentación.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Diferencias con el modelo 303
                      </h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="p-3 text-left font-semibold">Concepto</th>
                              <th className="p-3 text-left font-semibold">Modelo 303</th>
                              <th className="p-3 text-left font-semibold">Modelo 390</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr>
                              <td className="p-3 font-medium">Periodicidad</td>
                              <td className="p-3">Trimestral</td>
                              <td className="p-3">Anual</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="p-3 font-medium">Tipo</td>
                              <td className="p-3">Autoliquidación (genera pago)</td>
                              <td className="p-3">Informativa (no genera pago)</td>
                            </tr>
                            <tr>
                              <td className="p-3 font-medium">Fecha</td>
                              <td className="p-3">Enero, abril, julio, octubre</td>
                              <td className="p-3">Enero (hasta el 30)</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="p-3 font-medium">Contenido</td>
                              <td className="p-3">Datos del trimestre</td>
                              <td className="p-3">Resumen de los 4 trimestres</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                        Importante
                      </h4>
                      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded space-y-2">
                        <p className="text-sm text-gray-700">
                          <strong>No olvides presentarlo:</strong> Aunque no genere pago, el modelo 390 es obligatorio.
                          No presentarlo puede acarrear sanciones de hasta 300€.
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Coherencia de datos:</strong> Los datos del 390 deben coincidir exactamente con la
                          suma de los cuatro modelos 303 del año. Cualquier discrepancia puede generar requerimientos de
                          Hacienda.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <Clock className="h-5 w-5 text-orange-500 mr-2" />
                        Fecha de presentación
                      </h4>
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border-2 border-orange-200">
                        <div className="text-sm text-gray-600 mb-2">Plazo de presentación</div>
                        <div className="text-2xl font-bold text-orange-600">1 - 30 Enero</div>
                        <div className="text-sm text-gray-600 mt-2">Resumen del IVA del año anterior</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Consejos Ampliados */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Consejos para No Olvidar Fechas</h2>
              <p className="text-lg text-gray-600">Estrategias efectivas para cumplir con tus obligaciones fiscales</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle>Sanciones por Retraso</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="inline-block w-20 font-semibold text-red-600 flex-shrink-0">5%</span>
                      <span>Si pagas en los 3 meses siguientes (sin requerimiento)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-20 font-semibold text-red-600 flex-shrink-0">10%</span>
                      <span>Entre 3 y 6 meses de retraso</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-20 font-semibold text-red-600 flex-shrink-0">15%</span>
                      <span>Entre 6 y 12 meses de retraso</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-20 font-semibold text-red-600 flex-shrink-0">20%</span>
                      <span>Más de 12 meses (más intereses de demora)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-20 font-semibold text-red-600 flex-shrink-0">300€+</span>
                      <span>Sanción mínima si Hacienda te lo requiere</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Mejores Prácticas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Configura recordatorios en Google Calendar o app similar
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Prepara la documentación 1 semana antes de cada fecha
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Utiliza software de gestión fiscal (Contasimple, Holded, etc.)
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Mantén al día tu contabilidad semana a semana
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Consulta con tu asesor fiscal ante cualquier duda
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Bell className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Herramientas Útiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Sede Electrónica de la AEAT para presentaciones online
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Certificado digital o Cl@ve PIN para identificación
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      App móvil de la AEAT para consultas rápidas
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Domiciliación bancaria para evitar olvidos de pago
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      Suscripción a newsletters fiscales especializadas
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Recuerda</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Aunque olvides una fecha límite, siempre es mejor presentar la declaración tarde que no presentarla.
                    Los recargos por presentación extemporánea son significativamente menores que las sanciones por no
                    declarar. Hacienda valora la voluntad de cumplir, aunque sea con retraso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Newsletter */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Recibe Recordatorios Fiscales</h2>
            <p className="text-xl mb-8 opacity-90">
              Te enviamos recordatorios antes de cada fecha límite para que nunca olvides una declaración
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 outline-none"
                required
              />
              <Button type="submit" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3">
                <Mail className="mr-2 h-4 w-4" />
                Suscribirse
              </Button>
            </form>
          </div>
        </section>

        {/* Calculadoras Relacionadas */}
        <section className="bg-gradient-to-br from-gray-50 to-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Herramientas Relacionadas para Autónomos
              </h2>
              <p className="text-lg text-gray-600">Calcula tus obligaciones fiscales y gestiona mejor tu actividad</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/calculadora-cuota-autonomos">
                <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <Euro className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Calculadora Cuota Autónomos</CardTitle>
                    <CardDescription>Calcula tu cuota mensual de la Seguridad Social</CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/calculadora-irpf-autonomos">
                <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                      <FileText className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Calculadora IRPF Autónomos</CardTitle>
                    <CardDescription>Estima el IRPF de tu actividad económica</CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/calculadora-gastos-deducibles-autonomos">
                <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Gastos Deducibles</CardTitle>
                    <CardDescription>Calcula qué gastos puedes deducir en tu actividad</CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/calculadora-iva-repercutido-soportado">
                <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                      <Euro className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle>IVA Repercutido y Soportado</CardTitle>
                    <CardDescription>Calcula tu declaración trimestral de IVA</CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/generador-facturas">
                <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-3">
                      <FileText className="h-6 w-6 text-pink-600" />
                    </div>
                    <CardTitle>Generador de Facturas</CardTitle>
                    <CardDescription>Crea facturas profesionales en PDF gratis</CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/calculadora-amortizacion-inversiones">
                <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                      <TrendingUp className="h-6 w-6 text-indigo-600" />
                    </div>
                    <CardTitle>Amortización de Inversiones</CardTitle>
                    <CardDescription>Calcula la amortización de tus activos</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
