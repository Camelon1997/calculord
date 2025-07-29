"use client"

import type React from "react"
import { useState } from "react"
import { Calendar, Clock, AlertTriangle, CheckCircle, FileText, Euro, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
}

// Función para generar fechas fiscales dinámicamente
const generarFechasFiscales = (): FechaFiscal[] => {
  const añoActual = new Date().getFullYear()
  const añoSiguiente = añoActual + 1

  return [
    {
      fecha: `20 Enero ${añoSiguiente}`,
      titulo: `4º Trimestre ${añoActual} - IRPF e IVA`,
      descripcion: `Declaración trimestral del IRPF (Modelo 130) e IVA (Modelo 303) del último trimestre de ${añoActual}`,
      modelo: "130 y 303",
      tipo: "trimestral",
      color: "bg-red-100 text-red-800",
      urgencia: "alta",
    },
    {
      fecha: `31 Enero ${añoSiguiente}`,
      titulo: `Resumen Anual IVA ${añoActual}`,
      descripcion: `Presentación del resumen anual del IVA (Modelo 390) correspondiente al ejercicio ${añoActual}`,
      modelo: "390",
      tipo: "anual",
      color: "bg-orange-100 text-orange-800",
      urgencia: "alta",
    },
    {
      fecha: `20 Abril ${añoSiguiente}`,
      titulo: `1er Trimestre ${añoSiguiente} - IRPF e IVA`,
      descripcion: `Declaración trimestral del IRPF (Modelo 130) e IVA (Modelo 303) del primer trimestre de ${añoSiguiente}`,
      modelo: "130 y 303",
      tipo: "trimestral",
      color: "bg-blue-100 text-blue-800",
      urgencia: "media",
    },
    {
      fecha: `30 Junio ${añoSiguiente}`,
      titulo: `Declaración Anual IRPF ${añoActual}`,
      descripcion: `Fecha límite para presentar la declaración anual del IRPF correspondiente al ejercicio ${añoActual}`,
      modelo: "100",
      tipo: "anual",
      color: "bg-purple-100 text-purple-800",
      urgencia: "alta",
    },
    {
      fecha: `20 Julio ${añoSiguiente}`,
      titulo: `2º Trimestre ${añoSiguiente} - IRPF e IVA`,
      descripcion: `Declaración trimestral del IRPF (Modelo 130) e IVA (Modelo 303) del segundo trimestre de ${añoSiguiente}`,
      modelo: "130 y 303",
      tipo: "trimestral",
      color: "bg-green-100 text-green-800",
      urgencia: "media",
    },
    {
      fecha: `20 Octubre ${añoSiguiente}`,
      titulo: `3er Trimestre ${añoSiguiente} - IRPF e IVA`,
      descripcion: `Declaración trimestral del IRPF (Modelo 130) e IVA (Modelo 303) del tercer trimestre de ${añoSiguiente}`,
      modelo: "130 y 303",
      tipo: "trimestral",
      color: "bg-yellow-100 text-yellow-800",
      urgencia: "media",
    },
  ]
}

export default function CalendarioFiscalAutonomos() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter logic here
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  const fechasFiscales = generarFechasFiscales()
  const añoSiguiente = new Date().getFullYear() + 1

  const faqs = [
    {
      question: "¿Qué pasa si no presento una declaración a tiempo?",
      answer:
        "Se aplicarán recargos que van del 5% al 20% del importe a ingresar si lo presentas antes del requerimiento de Hacienda. Si Hacienda te lo reclama, la sanción puede ser mucho mayor, con un mínimo de 300€.",
    },
    {
      question: "¿Puedo presentar las declaraciones después de la fecha límite?",
      answer:
        "Sí, pero con recargos. Es mejor presentar tarde que no presentar, ya que los recargos por presentación fuera de plazo son menores que las sanciones por no presentar.",
    },
    {
      question: "¿Qué documentos necesito para las declaraciones trimestrales?",
      answer:
        "Necesitarás un registro de todas tus facturas emitidas (ingresos) y recibidas (gastos deducibles), así como los justificantes de las retenciones practicadas y la declaración del trimestre anterior.",
    },
    {
      question: "¿Puedo modificar una declaración ya presentada?",
      answer:
        "Sí. Si el error te perjudica (pagaste de más), puedes solicitar una rectificación. Si el error perjudica a Hacienda (pagaste de menos), debes presentar una declaración complementaria.",
    },
  ]

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Calendar className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calendario Fiscal Autónomos
            <span className="block text-blue-600">{añoSiguiente}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Todas las fechas clave para tus declaraciones trimestrales de IRPF e IVA, declaración anual y obligaciones
            fiscales. No te pierdas ninguna fecha importante y evita sanciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#calendario-completo">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Calendar className="mr-2 h-5 w-5" />
                Ver Fechas Clave
              </Button>
            </a>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              Descargar PDF
            </Button>
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

        {/* Guía de Obligaciones */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Guía de Obligaciones Fiscales</h2>
            <p className="text-lg text-gray-600">Entiende qué debes presentar y cuándo</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Modelo 130 - IRPF Trimestral</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Declaración trimestral del IRPF para autónomos en estimación directa. Incluye ingresos, gastos y
                  retenciones del trimestre.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fechas: 20 enero, 20 abril, 20 julio, 20 octubre
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Pago fraccionado del 20% sobre beneficios
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Euro className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Modelo 303 - IVA Trimestral</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Declaración trimestral del IVA. Incluye IVA repercutido (ventas) menos IVA soportado (compras) del
                  trimestre.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mismas fechas que el modelo 130
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Diferencia entre IVA repercutido y soportado
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Modelo 100 - IRPF Anual</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Declaración anual del IRPF. Regularización de todos los ingresos y gastos del año, con deducciones
                  aplicables.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fecha límite: 30 de junio
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Incluye todas las rentas del ejercicio
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Consejos y Recordatorios */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Consejos para No Olvidar Fechas</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                    Sanciones por Retraso
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>
                      <strong>Recargo del 5%</strong>: si pagas en los 3 meses siguientes.
                    </li>
                    <li>
                      <strong>Recargo del 10%</strong>: entre 3 y 6 meses.
                    </li>
                    <li>
                      <strong>Recargo del 15%</strong>: entre 6 y 12 meses.
                    </li>
                    <li>
                      <strong>Recargo del 20%</strong>: más de 12 meses (más intereses).
                    </li>
                    <li>
                      <strong>Sanción mínima de 300€</strong> si Hacienda te lo reclama.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Recomendaciones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>Configura recordatorios en tu calendario digital.</li>
                    <li>Prepara la documentación con antelación.</li>
                    <li>Utiliza software de gestión fiscal para automatizar.</li>
                    <li>Consulta con tu asesor fiscal ante cualquier duda.</li>
                    <li>Mantén al día tu contabilidad de ingresos y gastos.</li>
                  </ul>
                </CardContent>
              </Card>
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

        {/* CTA */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Necesitas Más Herramientas?</h2>
            <p className="text-xl text-gray-600 mb-8">Descubre nuestras calculadoras especializadas para autónomos</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculadora-cotizaciones-seguridad-social">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Calculadora Cuota Autónomos
                </Button>
              </Link>
              <Link href="/calculadora-irpf-autonomos">
                <Button variant="outline" size="lg">
                  Calculadora IRPF Autónomos
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
