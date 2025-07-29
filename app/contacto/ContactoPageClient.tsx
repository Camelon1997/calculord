"use client"

import { useState, type FormEvent } from "react"
import { Mail, MessageSquare, User, PenSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"

export default function ContactoPageClient() {
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("enviando")

    // Simulación de envío
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Aquí iría la lógica de envío a un endpoint o server action
    // const formData = new FormData(e.currentTarget);
    // const response = await fetch('/api/contact', { method: 'POST', body: formData });

    setStatus("enviado")
    setTimeout(() => setStatus(""), 5000) // Reset status after 5 seconds
  }

  return (
    <div className="bg-gray-50">
      <div className="relative bg-gray-900">
        <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <Image
            className="h-full w-full object-cover"
            src="/images/contact/support-team.png"
            alt="Equipo de soporte de Calculord"
            width={960}
            height={1080}
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold leading-6 text-gray-300">Tu opinión es importante</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Contacta con Nosotros</p>
            <p className="mt-3 text-lg text-gray-300">
              ¿Tienes alguna pregunta, sugerencia o quieres colaborar? Rellena el formulario y nuestro equipo se pondrá
              en contacto contigo lo antes posible.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Sugerencias y Mejoras</h3>
              <p className="mt-2 text-sm text-gray-600">
                ¿Echas en falta alguna calculadora? ¿Crees que podemos mejorar algo? Somos todo oídos.
              </p>
              <a
                href="mailto:sugerencias@calculord.com"
                className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                <Mail className="mr-2 h-4 w-4" />
                sugerencias@calculord.com
              </a>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Soporte Técnico</h3>
              <p className="mt-2 text-sm text-gray-600">
                Si has encontrado un error o tienes problemas con alguna herramienta, contacta con nuestro equipo
                técnico.
              </p>
              <a
                href="mailto:soporte@calculord.com"
                className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                soporte@calculord.com
              </a>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Prensa y Colaboraciones</h3>
              <p className="mt-2 text-sm text-gray-600">
                Para entrevistas, colaboraciones o cualquier asunto relacionado con medios de comunicación.
              </p>
              <a
                href="mailto:prensa@calculord.com"
                className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                <PenSquare className="mr-2 h-4 w-4" />
                prensa@calculord.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
                <CardDescription>
                  Rellena el siguiente formulario y te responderemos en un plazo de 24-48 horas laborables.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input id="name" name="name" placeholder="Tu nombre completo" required className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Asunto
                    </label>
                    <div className="relative">
                      <PenSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Motivo de tu consulta"
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <Textarea id="message" name="message" placeholder="Escribe aquí tu mensaje..." required rows={5} />
                  </div>
                  <div>
                    <Button type="submit" className="w-full" disabled={status === "enviando" || status === "enviado"}>
                      {status === "enviando"
                        ? "Enviando..."
                        : status === "enviado"
                          ? "¡Mensaje Enviado!"
                          : "Enviar Mensaje"}
                    </Button>
                  </div>
                  {status === "enviado" && (
                    <p className="text-sm text-center text-green-600">
                      ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
