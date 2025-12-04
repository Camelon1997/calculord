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
  Baby,
  Calendar,
  Euro,
  Users,
  Heart,
  ChevronRight,
  Clock,
  Info,
  Shield,
  FileText,
  Home,
  TrendingUp,
  Briefcase,
  Activity,
} from "lucide-react"
import { RelatedCalculatorCard } from "@/app/components/RelatedCalculatorCard"

export default function CalculadoraMaternidadPaternidad() {
  // Estados del formulario
  const [salarioBrutoMensual, setSalarioBrutoMensual] = useState<string>("")
  const [tipoTrabajador, setTipoTrabajador] = useState<string>("asalariado")
  const [tipoParto, setTipoParto] = useState<string>("simple")
  const [numeroHijos, setNumeroHijos] = useState<string>("1")
  const [partoPrematuro, setPartoPrematuro] = useState<string>("no")
  const [diasHospitalizacion, setDiasHospitalizacion] = useState<string>("")
  const [monoparental, setMonoparental] = useState<string>("no")

  const [resultado, setResultado] = useState<{
    baseReguladora: number
    prestacionDiaria: number
    semanasBase: number
    semanasAdicionales: number
    semanasTotal: number
    prestacionTotal: number
  } | null>(null)

  const calcular = () => {
    const salario = Number.parseFloat(salarioBrutoMensual)
    if (isNaN(salario) || salario <= 0) {
      alert("Por favor, introduce un salario válido")
      return
    }

    // Calcular base reguladora
    let baseReg = 0
    if (tipoTrabajador === "asalariado") {
      baseReg = salario / 30
    } else {
      // Autónomos: simulamos que es la media de 6 meses
      baseReg = salario / 30
    }

    const prestacionDia = baseReg // 100% de la base reguladora

    // Calcular semanas
    const semanas = monoparental === "si" ? 32 : 19

    // Semanas adicionales por parto múltiple
    let semanasExtra = 0
    const hijos = Number.parseInt(numeroHijos)
    if (hijos > 1) {
      semanasExtra += hijos - 1 // 1 semana por cada hijo adicional
    }

    // Semanas adicionales por hospitalización
    if (partoPrematuro === "si" && diasHospitalizacion) {
      const dias = Number.parseInt(diasHospitalizacion)
      if (dias > 7) {
        const semanasHospital = Math.min(Math.floor(dias / 7), 13) // Máximo 13 semanas
        semanasExtra += semanasHospital
      }
    }

    const semanasTotal = semanas + semanasExtra
    const diasTotal = semanasTotal * 7
    const prestacionTotal = prestacionDia * diasTotal

    setResultado({
      baseReguladora: baseReg,
      prestacionDiaria: prestacionDia,
      semanasBase: semanas,
      semanasAdicionales: semanasExtra,
      semanasTotal,
      prestacionTotal,
    })
  }

  const infoItems = [
    {
      icon: <Calendar className="h-8 w-8 text-pink-600" />,
      titulo: "19 Semanas Retribuidas",
      descripcion: "Cada progenitor tiene derecho a 19 semanas al 100% de su base reguladora",
    },
    {
      icon: <Euro className="h-8 w-8 text-emerald-600" />,
      titulo: "100% del Salario",
      descripcion: "La prestación se calcula al 100% de tu base reguladora, sin reducciones",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      titulo: "Derecho Individual",
      descripcion: "Cada progenitor tiene su propio permiso, intransferible e independiente",
    },
  ]

  const faqData = [
    {
      pregunta: "¿Cuántas semanas son de maternidad y paternidad en 2025?",
      respuesta:
        "En 2025, cada progenitor tiene derecho a 19 semanas de permiso retribuido al 100% de su base reguladora. De estas, 6 semanas son obligatorias e ininterrumpidas inmediatamente después del parto (o la madre puede anticipar hasta 4 semanas antes). Las 11 semanas restantes pueden disfrutarse de forma más flexible durante el primer año. Además, hay 2 semanas extra disponibles hasta que el hijo cumpla 8 años (aplicables desde enero 2026). Para familias monoparentales, la duración se extiende a 32 semanas totales.",
    },
    {
      pregunta: "¿Cuánto se cobra en la baja de maternidad o paternidad?",
      respuesta:
        "Se cobra el 100% de la base reguladora, sin reducciones. Para trabajadores asalariados, la base reguladora se calcula tomando la base de cotización por contingencias comunes del mes anterior al inicio del permiso y dividiéndola entre 30 días. Para autónomos, se utiliza la media de las bases de cotización de los 6 meses anteriores dividida entre 180 días. Esta prestación está financiada íntegramente por la Seguridad Social.",
    },
    {
      pregunta: "¿Se puede ampliar el permiso en caso de parto múltiple?",
      respuesta:
        "Sí. En caso de parto múltiple, se añade 1 semana adicional por cada hijo a partir del segundo. Por ejemplo, si tienes gemelos (2 hijos), tendrás 20 semanas en total (19 + 1 semana adicional); si son trillizos (3 hijos), serán 21 semanas (19 + 2 semanas). Estas semanas adicionales se suman a las 19 semanas base que tiene cada progenitor.",
    },
    {
      pregunta: "¿Qué pasa si el bebé es prematuro o necesita hospitalización?",
      respuesta:
        "Si el neonato debe permanecer hospitalizado por un período superior a 7 días tras el parto, el permiso se amplía en tantos días como dure la hospitalización, con un máximo de 13 semanas adicionales. Esta ampliación permite a los progenitores disponer de más tiempo para el cuidado del bebé una vez que reciba el alta hospitalaria. También se puede solicitar una reducción de jornada durante el período de hospitalización.",
    },
    {
      pregunta: "¿El permiso es igual para adopción y acogimiento?",
      respuesta:
        "Sí. El permiso de 19 semanas por progenitor se aplica de igual forma en casos de adopción, guarda con fines de adopción y acogimiento, tanto permanente como preadoptivo. No importa la edad del menor adoptado o acogido. Las 6 semanas obligatorias comienzan a contar desde la resolución judicial o administrativa que constituye la adopción o acogimiento. Las condiciones y la duración son exactamente las mismas que para el nacimiento biológico.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Baby className="h-4 w-4" />
              Actualizado 2025
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Calculadora de{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Maternidad y Paternidad
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Calcula tu prestación por nacimiento, adopción o acogimiento en 2025. Descubre las 19 semanas retribuidas,
              ampliaciones por parto múltiple o prematuro, y cuánto cobrarás al 100% de tu base reguladora.
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
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Baby className="h-6 w-6 text-pink-600" />
                Calcula tu Prestación
              </CardTitle>
              <CardDescription>
                Introduce tus datos para calcular la prestación de maternidad/paternidad
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Tipo de trabajador */}
              <div className="space-y-2">
                <Label htmlFor="tipoTrabajador">Tipo de Trabajador</Label>
                <Select value={tipoTrabajador} onValueChange={setTipoTrabajador}>
                  <SelectTrigger id="tipoTrabajador">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asalariado">Trabajador Asalariado</SelectItem>
                    <SelectItem value="autonomo">Trabajador Autónomo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Salario */}
              <div className="space-y-2">
                <Label htmlFor="salario">
                  {tipoTrabajador === "asalariado"
                    ? "Base de Cotización Mensual (€)"
                    : "Base de Cotización Mensual Media (€)"}
                </Label>
                <Input
                  id="salario"
                  type="number"
                  placeholder="Ej: 2000"
                  value={salarioBrutoMensual}
                  onChange={(e) => setSalarioBrutoMensual(e.target.value)}
                />
                <p className="text-xs text-gray-500">
                  {tipoTrabajador === "asalariado"
                    ? "Base de cotización del mes anterior al inicio del permiso"
                    : "Media de las bases de cotización de los últimos 6 meses"}
                </p>
              </div>

              {/* Tipo de parto */}
              <div className="space-y-2">
                <Label htmlFor="tipoParto">Tipo de Evento</Label>
                <Select value={tipoParto} onValueChange={setTipoParto}>
                  <SelectTrigger id="tipoParto">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="simple">Parto Simple</SelectItem>
                    <SelectItem value="multiple">Parto Múltiple</SelectItem>
                    <SelectItem value="adopcion">Adopción/Acogimiento</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Número de hijos si es múltiple */}
              {tipoParto === "multiple" && (
                <div className="space-y-2">
                  <Label htmlFor="numeroHijos">Número de Hijos</Label>
                  <Select value={numeroHijos} onValueChange={setNumeroHijos}>
                    <SelectTrigger id="numeroHijos">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">Gemelos (2)</SelectItem>
                      <SelectItem value="3">Trillizos (3)</SelectItem>
                      <SelectItem value="4">Cuatrillizos (4)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Parto prematuro */}
              <div className="space-y-2">
                <Label htmlFor="prematuro">¿Parto Prematuro o Hospitalización Prolongada?</Label>
                <Select value={partoPrematuro} onValueChange={setPartoPrematuro}>
                  <SelectTrigger id="prematuro">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="si">Sí (más de 7 días hospitalizado)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Días de hospitalización */}
              {partoPrematuro === "si" && (
                <div className="space-y-2">
                  <Label htmlFor="diasHospital">Días de Hospitalización del Neonato</Label>
                  <Input
                    id="diasHospital"
                    type="number"
                    placeholder="Ej: 30"
                    value={diasHospitalizacion}
                    onChange={(e) => setDiasHospitalizacion(e.target.value)}
                  />
                  <p className="text-xs text-gray-500">Máximo 13 semanas adicionales (91 días)</p>
                </div>
              )}

              {/* Familia monoparental */}
              <div className="space-y-2">
                <Label htmlFor="monoparental">¿Familia Monoparental?</Label>
                <Select value={monoparental} onValueChange={setMonoparental}>
                  <SelectTrigger id="monoparental">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="si">Sí</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">Las familias monoparentales tienen derecho a 32 semanas</p>
              </div>

              <Button onClick={calcular} className="w-full bg-pink-600 hover:bg-pink-700" size="lg">
                <Baby className="mr-2 h-5 w-5" />
                Calcular Prestación
              </Button>

              {/* Resultado */}
              {resultado && (
                <div className="mt-6 space-y-4">
                  <Alert className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
                    <Heart className="h-5 w-5 text-pink-600" />
                    <AlertDescription>
                      <div className="space-y-4 mt-2">
                        <div>
                          <p className="text-sm text-gray-600">Base Reguladora Diaria</p>
                          <p className="text-2xl font-bold text-gray-900">
                            {resultado.baseReguladora.toFixed(2)} €/día
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg p-4">
                            <p className="text-sm text-gray-600 mb-1">Prestación Diaria</p>
                            <p className="text-xl font-bold text-pink-600">{resultado.prestacionDiaria.toFixed(2)} €</p>
                            <p className="text-xs text-gray-500 mt-1">100% de la base reguladora</p>
                          </div>

                          <div className="bg-white rounded-lg p-4">
                            <p className="text-sm text-gray-600 mb-1">Duración Total</p>
                            <p className="text-xl font-bold text-purple-600">{resultado.semanasTotal} semanas</p>
                            <p className="text-xs text-gray-500 mt-1">
                              {resultado.semanasBase} base + {resultado.semanasAdicionales} adicionales
                            </p>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border-2 border-pink-200">
                          <p className="text-sm text-gray-600 mb-1">Prestación Total Estimada</p>
                          <p className="text-3xl font-bold text-gray-900">
                            {resultado.prestacionTotal.toLocaleString("es-ES", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}{" "}
                            €
                          </p>
                          <p className="text-xs text-gray-500 mt-1">Durante {resultado.semanasTotal} semanas</p>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <div className="flex gap-2">
                            <Info className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                            <div className="text-sm text-yellow-800">
                              <p className="font-semibold mb-1">Información Importante:</p>
                              <ul className="space-y-1 text-xs">
                                <li>• Las 6 primeras semanas son obligatorias e ininterrumpidas</li>
                                <li>• La madre puede anticipar hasta 4 semanas antes del parto</li>
                                <li>• El permiso es individual e intransferible para cada progenitor</li>
                                <li>• La Seguridad Social paga el 100% de la base reguladora</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educational Guide */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Guía Completa sobre Maternidad y Paternidad
            </h2>
            <p className="text-lg text-gray-600">Todo lo que necesitas saber sobre el permiso parental en España</p>
          </div>

          <div className="space-y-8">
            {/* Qué es el permiso parental */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Baby className="h-6 w-6 text-pink-600" />
                ¿Qué es el Permiso por Nacimiento y Cuidado del Menor?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                El <strong>permiso por nacimiento y cuidado del menor</strong>, que unifica lo que antes se conocía como
                baja por maternidad y paternidad, es un derecho laboral que permite a los progenitores ausentarse del
                trabajo para cuidar de su hijo recién nacido, adoptado o acogido, recibiendo una{" "}
                <span className="font-semibold">prestación económica del 100% de su base reguladora</span>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Este permiso es un <strong>derecho individual e intransferible</strong> de cada progenitor, lo que
                significa que cada uno tiene sus propias 19 semanas y no pueden cederse entre sí. El objetivo es
                fomentar la corresponsabilidad en el cuidado de los hijos y garantizar la conciliación familiar.
              </p>
            </div>

            {/* Duración del permiso */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-purple-600" />
                Duración del Permiso en 2025
              </h3>

              <div className="space-y-6">
                {/* Duración base */}
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Duración Base: 19 Semanas por Progenitor</h4>
                  <p className="text-gray-700 mb-4">
                    Cada progenitor tiene derecho a <strong>19 semanas retribuidas</strong> (133 días), distribuidas de
                    la siguiente manera:
                  </p>
                  <div className="space-y-3">
                    <div className="border-l-4 border-pink-500 pl-4 py-2">
                      <p className="font-semibold text-gray-900">6 semanas obligatorias</p>
                      <p className="text-sm text-gray-600">
                        Ininterrumpidas y a jornada completa. Deben disfrutarse inmediatamente después del parto (la
                        madre puede anticipar hasta 4 semanas antes de la fecha prevista).
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 py-2">
                      <p className="font-semibold text-gray-900">11 semanas adicionales</p>
                      <p className="text-sm text-gray-600">
                        Pueden disfrutarse de forma acumulada o por períodos dentro del primer año de vida del menor, a
                        tiempo completo o parcial según acuerdo con la empresa.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                      <p className="font-semibold text-gray-900">2 semanas extra (desde 2026)</p>
                      <p className="text-sm text-gray-600">
                        Retribuidas, pueden usarse hasta que el hijo cumpla 8 años. Tienen carácter retroactivo desde
                        agosto 2024, pero su disfrute puede solicitarse a partir del 1 de enero de 2026.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Familias monoparentales */}
                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    Familias Monoparentales: 32 Semanas
                  </h4>
                  <p className="text-gray-700">
                    Las familias monoparentales tienen derecho a <strong>32 semanas de permiso en total</strong>,
                    acumulando el tiempo que corresponde a ambos progenitores cuando solo hay uno.
                  </p>
                </div>

                {/* Ampliaciones */}
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Ampliaciones del Permiso</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">Parto Múltiple</p>
                      <p className="text-sm text-gray-700">
                        Se añade <strong>1 semana adicional por cada hijo</strong> a partir del segundo. Ejemplo:
                        gemelos = 20 semanas, trillizos = 21 semanas.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">Hospitalización Prolongada</p>
                      <p className="text-sm text-gray-700">
                        Si el neonato permanece hospitalizado más de 7 días, se amplía el permiso en esos días, con un{" "}
                        <strong>máximo de 13 semanas adicionales</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cálculo de la prestación */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Euro className="h-6 w-6 text-emerald-600" />
                ¿Cómo se Calcula la Prestación?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                La prestación económica de maternidad y paternidad es del <strong>100% de la base reguladora</strong>,
                sin reducciones. El cálculo de la base reguladora varía según el tipo de trabajador:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-900 mb-2">Trabajadores Asalariados</h4>
                  <p className="text-gray-700 mb-2">
                    Base reguladora ={" "}
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                      Base de cotización del mes anterior / 30 días
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Se toma la base de cotización por contingencias comunes del mes inmediatamente anterior al inicio
                    del permiso.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-900 mb-2">Trabajadores Autónomos</h4>
                  <p className="text-gray-700 mb-2">
                    Base reguladora ={" "}
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                      (Suma de bases de 6 meses anteriores) / 180 días
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Se calcula la media de las bases de cotización de los 6 meses inmediatamente anteriores al inicio
                    del permiso.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <div className="flex gap-2">
                  <TrendingUp className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-emerald-900 mb-1">Prestación al 100%</p>
                    <p className="text-sm text-emerald-800">
                      A diferencia de otras prestaciones de la Seguridad Social, la de maternidad/paternidad no tiene
                      reducciones. Cobras exactamente el 100% de tu base reguladora durante todo el período.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Requisitos */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-600" />
                Requisitos para Solicitar la Prestación
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Para tener derecho a la prestación económica de maternidad/paternidad, debes cumplir estos requisitos:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <ChevronRight className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Estar afiliado y en alta o situación asimilada</p>
                    <p className="text-sm text-gray-600">
                      Debes estar dado de alta en la Seguridad Social o en una situación asimilada al alta (como
                      desempleo con prestación).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <ChevronRight className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Período de cotización mínimo (solo menores de 26 años)
                    </p>
                    <p className="text-sm text-gray-600">
                      Si tienes menos de 21 años, no se exige cotización previa. Entre 21 y 26 años, se exigen 90 días
                      cotizados en los 7 años anteriores o 180 días en toda la vida laboral. Mayores de 26 años: no hay
                      período mínimo de cotización.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <ChevronRight className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Solicitar la prestación</p>
                    <p className="text-sm text-gray-600">
                      Debes presentar la solicitud ante el INSS o la mutua colaboradora antes del inicio del permiso o
                      dentro de los 15 días hábiles siguientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Adopción y acogimiento */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-pink-600" />
                Adopción, Guarda y Acogimiento
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                El permiso por nacimiento y cuidado del menor se aplica{" "}
                <strong>de igual forma en casos de adopción, guarda con fines de adopción y acogimiento</strong>, tanto
                permanente como preadoptivo, con independencia de la edad del menor.
              </p>
              <div className="bg-pink-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Consideraciones Especiales:</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-gray-700">
                    <ChevronRight className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>
                      El permiso comienza a contar desde la <strong>resolución judicial o administrativa</strong> que
                      constituye la adopción o acogimiento.
                    </span>
                  </li>
                  <li className="flex gap-2 text-gray-700">
                    <ChevronRight className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>
                      En adopción internacional, el permiso puede iniciarse hasta <strong>4 semanas antes</strong> de la
                      resolución si se requiere desplazamiento al país de origen del menor.
                    </span>
                  </li>
                  <li className="flex gap-2 text-gray-700">
                    <ChevronRight className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Las <strong>mismas ampliaciones</strong> por acogimiento múltiple (más de un menor acogido a la
                      vez) se aplican igual que en partos múltiples.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Flexibilidad */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6 text-orange-600" />
                Flexibilidad en el Disfrute del Permiso
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                El permiso parental ofrece cierta flexibilidad para adaptarse a las necesidades de cada familia:
              </p>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Disfrute Simultáneo o Sucesivo</h4>
                  <p className="text-sm text-gray-700">
                    Ambos progenitores pueden disfrutar las semanas a la vez (simultáneamente) o uno detrás del otro
                    (sucesivamente), salvo las 6 primeras semanas obligatorias que cada uno debe tomar.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Jornada Completa o Parcial</h4>
                  <p className="text-sm text-gray-700">
                    Las 11 semanas posteriores a las 6 obligatorias pueden disfrutarse a tiempo completo o a tiempo
                    parcial (mínimo 50%) previo acuerdo con la empresa.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Disfrute Fraccionado</h4>
                  <p className="text-sm text-gray-700">
                    Las semanas pueden disfrutarse de forma ininterrumpida o en períodos semanales, siempre dentro del
                    primer año de vida del menor (salvo las 2 semanas extra que pueden usarse hasta los 8 años).
                  </p>
                </div>
              </div>
            </div>

            {/* Derechos del trabajador */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText className="h-6 w-6 text-indigo-600" />
                Derechos Durante el Permiso
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    titulo: "Reserva del puesto de trabajo",
                    descripcion:
                      "Tu puesto de trabajo se reserva durante todo el permiso. La empresa debe reincorporarte al finalizar.",
                  },
                  {
                    titulo: "Prestación al 100%",
                    descripcion:
                      "Cobras el 100% de tu base reguladora sin reducciones, financiado íntegramente por la Seguridad Social.",
                  },
                  {
                    titulo: "Protección contra despido",
                    descripcion:
                      "No puedes ser despedido durante el permiso ni por ejercer este derecho. Sería nulo o improcedente.",
                  },
                  {
                    titulo: "Cotización a la Seguridad Social",
                    descripcion:
                      "Durante el permiso se sigue cotizando normalmente, contando para antigüedad, desempleo y jubilación.",
                  },
                  {
                    titulo: "No afecta a vacaciones",
                    descripcion:
                      "El tiempo de permiso no reduce tus vacaciones anuales. Sigues generando días de vacaciones.",
                  },
                  {
                    titulo: "Derecho individual e intransferible",
                    descripcion:
                      "Cada progenitor tiene su propio permiso. No se puede ceder al otro progenitor ni renunciar.",
                  },
                ].map((derecho, index) => (
                  <div key={index} className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{derecho.titulo}</h4>
                    <p className="text-sm text-gray-700">{derecho.descripcion}</p>
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
            <p className="text-lg text-gray-600">Resolvemos tus dudas sobre maternidad y paternidad</p>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculadoras Laborales Relacionadas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complementa tu análisis de prestaciones con estas herramientas esenciales.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <RelatedCalculatorCard
              icon={<Briefcase className="h-6 w-6 text-blue-500" />}
              title="Calculadora de Nómina"
              description="Calcula tu nómina completa para comparar con tu prestación."
              features={["Nómina completa", "IRPF 2025", "Cotizaciones SS"]}
              href="/calculadora-nomina"
              buttonText="Ver Nómina"
              buttonClassName="bg-blue-600 hover:bg-blue-700"
              iconBgClassName="bg-blue-100"
            />
            <RelatedCalculatorCard
              icon={<Activity className="h-6 w-6 text-emerald-500" />}
              title="Calculadora de Bajas"
              description="Calcula tu prestación por incapacidad temporal si te dan de baja durante el embarazo."
              features={["IT 2025", "Contingencias comunes", "60%-75% prestación"]}
              href="/calculadora-bajas"
              buttonText="Calcular Baja"
              buttonClassName="bg-emerald-600 hover:bg-emerald-700"
              iconBgClassName="bg-emerald-100"
            />
            <RelatedCalculatorCard
              icon={<Home className="h-6 w-6 text-purple-500" />}
              title="Conversor Bruto-Neto"
              description="Convierte tu salario bruto a neto para planificar tu presupuesto familiar."
              features={["Conversión exacta", "IRPF incluido", "2025 actualizado"]}
              href="/conversor-salario-bruto-neto"
              buttonText="Convertir Salario"
              buttonClassName="bg-purple-600 hover:bg-purple-700"
              iconBgClassName="bg-purple-100"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
