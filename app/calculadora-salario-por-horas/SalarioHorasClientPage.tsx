"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Calculator, TrendingUp, Shield, Umbrella, FileText, CheckCircle2, Users } from "lucide-react"
import CalculadoraSalarioHoras from "./CalculadoraSalarioHoras"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import { RelatedCalculatorCard } from "@/app/components/RelatedCalculatorCard"

const relatedCalculators = [
  {
    icon: <Shield className="h-6 w-6 text-blue-500" />,
    title: "Cotizaciones Seguridad Social",
    description: "Calcula las cotizaciones exactas según tu salario por horas. Verifica cuánto cotizas realmente.",
    features: ["Cotización por contingencias comunes", "Desempleo y FOGASA", "Formación Profesional"],
    href: "/calculadora-cotizaciones-seguridad-social",
    buttonText: "Ver Cotizaciones",
    buttonClassName: "bg-blue-600 hover:bg-blue-700",
  },
  {
    icon: <Umbrella className="h-6 w-6 text-orange-500" />,
    title: "Prestación por Desempleo",
    description: "Calcula la prestación por paro que te corresponde. Conoce tus derechos laborales.",
    features: ["Base reguladora", "Duración de la prestación", "Importe mensual"],
    href: "/calculadora-paro",
    buttonText: "Calcular Paro",
    buttonClassName: "bg-orange-500 hover:bg-orange-600",
  },
  {
    icon: <FileText className="h-6 w-6 text-red-500" />,
    title: "Despidos y Finiquito",
    description: "Calcula tu indemnización por despido basada en tu salario por horas. Protege tus derechos.",
    features: ["Indemnización por despido", "Cálculo de finiquito", "Salarios de tramitación"],
    href: "/calculadora-despidos",
    buttonText: "Calcular Despido",
    buttonClassName: "bg-red-500 hover:bg-red-600",
  },
]

export default function SalarioHorasClientPage() {
  return (
    <>
      <Breadcrumbs currentPage="Calculadora Salario por Horas" />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-100 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-green-200/50">
              <Clock className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Calculadora de Salario
              <span className="block text-green-600">por Horas 2025</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Calcula tu salario real basado en las horas trabajadas. Incluye SMI 2025 (9,26€/h), horas extra con
              incremento del 75% y salario neto final.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
                onClick={() => document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calcular Ahora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg bg-white"
                onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Ejemplo y FAQ
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Por qué usar nuestra calculadora de salario por horas?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Una herramienta precisa y transparente para entender cada céntimo de tu sueldo cuando trabajas por
                horas.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Cálculo por Horas</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Calcula tu salario exacto basado en las horas reales que trabajas, incluyendo horas extra.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">SMI 2025 Actualizado</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Basado en el Salario Mínimo Interprofesional actualizado: 1.184€/mes (9,26€/hora).
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Salario Neto Real</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Descuenta automáticamente las cotizaciones sociales para mostrarte tu salario neto final.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="calculadora" className="py-16 bg-gray-50">
          <CalculadoraSalarioHoras />
        </section>

        {/* SEO Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Guía Completa: Cómo Calcular tu Salario por Horas en 2025
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-xl font-semibold text-blue-900 mt-0 mb-3">¿Qué es el Salario por Horas?</h3>
              <p className="text-gray-700 mb-0">
                El salario por horas es un sistema de retribución laboral donde el trabajador recibe un pago
                proporcional al número de horas efectivamente trabajadas. Este modelo es común en sectores como
                hostelería, comercio, trabajo temporal y servicios, ofreciendo flexibilidad tanto para empresas como
                para empleados.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
              1. El Salario Mínimo Interprofesional (SMI) por Hora en 2025
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Para 2025, el SMI se ha establecido en <strong>1.184 euros brutos mensuales en 14 pagas</strong>. Esto
              equivale a un mínimo de <strong>9,26 euros por hora</strong> de trabajo efectivo. Este cálculo ya incluye:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>La parte proporcional de las dos pagas extraordinarias</li>
              <li>El período de vacaciones retribuidas</li>
              <li>Los días festivos del año</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Ningún trabajador en España puede cobrar menos de esta cantidad por hora trabajada, salvo que su convenio
              colectivo establezca una cuantía superior, en cuyo caso prevalecerá la más favorable para el trabajador.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
              2. Cálculo de Horas Extra: Tipos y Porcentajes
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Las horas extraordinarias son aquellas que exceden la jornada ordinaria de trabajo. Según el{" "}
              <strong>Estatuto de los Trabajadores</strong>, su realización es voluntaria salvo pacto en contrario. El
              pago de horas extra debe cumplir con estas reglas:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="border-2 border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-amber-600" />
                    Horas Extra Ordinarias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    <strong>Incremento mínimo:</strong> +25%
                    <br />
                    <strong>Común en convenios:</strong> +75%
                    <br />
                    <strong>Cuándo:</strong> Días laborables normales
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    Horas Extra Especiales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    <strong>Festivos:</strong> Mínimo +75%
                    <br />
                    <strong>Nocturnas:</strong> +25% adicional
                    <br />
                    <strong>Máximo anual:</strong> 80 horas
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                <Umbrella className="h-5 w-5" />
                Importante: Límite de Horas Extra
              </h4>
              <p className="text-gray-700 mb-0">
                El número de horas extraordinarias no puede superar las <strong>80 horas al año</strong>. No se computan
                a estos efectos las horas compensadas con descanso dentro de los cuatro meses siguientes a su
                realización.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
              3. De Salario Bruto a Neto: Las Deducciones
            </h3>
            <p className="text-gray-700 leading-relaxed">
              El salario bruto por hora no es lo que finalmente recibes en tu cuenta bancaria. Se aplican dos tipos
              principales de deducciones:
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Cotizaciones a la Seguridad Social</h4>
            <div className="space-y-4">
              <Card className="bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-500">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Contingencias Comunes (4.7%)</h5>
                      <p className="text-sm text-gray-600">
                        Cubre las prestaciones por incapacidad temporal (bajas por enfermedad común o accidente no
                        laboral), maternidad, paternidad y pensión de jubilación.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-50 to-white border-l-4 border-green-500">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Umbrella className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Desempleo (1.55% o 1.6%)</h5>
                      <p className="text-sm text-gray-600">
                        Financia la prestación por desempleo. El porcentaje es 1.55% para contratos indefinidos y 1.6%
                        para contratos temporales.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-50 to-white border-l-4 border-purple-500">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Formación Profesional (0.1%)</h5>
                      <p className="text-sm text-gray-600">
                        Destinado a financiar cursos de formación y reciclaje profesional para trabajadores.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Retención de IRPF</h4>
            <p className="text-gray-700 leading-relaxed">
              El Impuesto sobre la Renta de las Personas Físicas (IRPF) se calcula mediante retenciones mensuales que la
              empresa practica sobre tu salario bruto. El porcentaje depende de tu salario anual total y tus
              circunstancias personales (hijos, discapacidad, etc.). Nuestra calculadora aplica los tramos de IRPF 2025
              de forma orientativa.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">4. Diferencias entre Contratos</h3>
            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Concepto</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Contrato Indefinido</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Contrato Temporal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Cotización Desempleo</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">1.55%</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">1.6%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">Prestación Desempleo</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Hasta 24 meses</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Según días cotizados</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Indemnización por Despido</td>
                    <td className="px-6 py-4 text-sm text-gray-900">20 días/año (límite 12 meses)</td>
                    <td className="px-6 py-4 text-sm text-gray-900">12 días/año</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">5. Derechos del Trabajador por Horas</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <CheckCircle2 className="h-8 w-8 text-green-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Mismos derechos laborales</h4>
                  <p className="text-sm text-gray-600">
                    Los trabajadores por horas tienen los mismos derechos que los trabajadores con jornada completa:
                    vacaciones, permisos, protección por despido y acceso a prestaciones sociales.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <CheckCircle2 className="h-8 w-8 text-green-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Registro horario obligatorio</h4>
                  <p className="text-sm text-gray-600">
                    La empresa está obligada a llevar un registro diario de la jornada, indicando hora de inicio y fin
                    de cada trabajador. Debe conservarse durante 4 años.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <CheckCircle2 className="h-8 w-8 text-green-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Convenio colectivo aplicable</h4>
                  <p className="text-sm text-gray-600">
                    Si tu sector tiene convenio colectivo, este puede mejorar las condiciones mínimas establecidas por
                    ley (salario por hora, incremento de horas extra, pluses, etc.).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <CheckCircle2 className="h-8 w-8 text-green-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Nómina detallada</h4>
                  <p className="text-sm text-gray-600">
                    Tienes derecho a recibir una nómina que detalle las horas trabajadas, el precio por hora, horas
                    extra, deducciones y salario neto final.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
              <p className="text-xl text-gray-600">Resolvemos tus dudas más habituales sobre el salario por horas.</p>
            </div>
            <Accordion type="single" collapsible className="w-full bg-white p-2 md:p-6 rounded-lg shadow-md border">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline p-4">
                  ¿El SMI por hora de 9,26€ ya incluye las pagas extra y vacaciones?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pt-2 px-4 pb-4">
                  Sí. El importe de 9,26€/hora ya incluye la parte proporcional de las pagas extraordinarias (las dos
                  pagas extra de verano y Navidad) y las vacaciones retribuidas. Por tanto, estos conceptos no se abonan
                  adicionalmente. Este cálculo ya contempla los 14 meses de paga que corresponden al trabajador.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline p-4">
                  ¿Qué pasa si mi convenio colectivo establece un precio por hora superior al SMI?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pt-2 px-4 pb-4">
                  Siempre prevalece la condición más beneficiosa para el trabajador. Si tu convenio colectivo sectorial
                  o de empresa fija un salario por hora superior a 9,26€, la empresa debe pagarte esa cantidad superior.
                  Puedes usar la opción "Salario personalizado" en nuestra calculadora para introducir el valor
                  específico de tu convenio y ver cuánto te corresponde realmente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline p-4">
                  ¿Cuántas horas extra puedo hacer como máximo?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pt-2 px-4 pb-4">
                  Por ley, el máximo de horas extraordinarias es de <strong>80 horas al año</strong>. No se computan a
                  estos efectos las que se hayan compensado mediante descanso equivalente dentro de los cuatro meses
                  siguientes a su realización. Además, muchos convenios colectivos establecen límites inferiores o
                  incluso prohíben las horas extra en determinados sectores.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline p-4">
                  ¿Los trabajadores a tiempo parcial pueden hacer horas extra?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pt-2 px-4 pb-4">
                  Sí, los trabajadores a tiempo parcial pueden realizar horas extraordinarias en los mismos términos que
                  los trabajadores a tiempo completo. Sin embargo, el número máximo de horas extra que pueden realizar
                  será proporcional a su jornada. Además, los contratos a tiempo parcial también contemplan las llamadas
                  "horas complementarias", que son horas adicionales pactadas que se pagan como ordinarias.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline p-4">
                  ¿Cómo afecta el tipo de contrato a mis cotizaciones?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pt-2 px-4 pb-4">
                  El tipo de contrato afecta principalmente a la cotización por desempleo. Los contratos indefinidos
                  cotizan un 1.55% mientras que los temporales cotizan un 1.6%. Esta pequeña diferencia se debe a que
                  los contratos temporales tienen mayor probabilidad de generar desempleo. El resto de cotizaciones
                  (contingencias comunes y formación profesional) son iguales independientemente del tipo de contrato.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline p-4">
                  ¿Por qué el IRPF es solo una estimación en la calculadora?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pt-2 px-4 pb-4">
                  El IRPF depende de muchos factores personales: si tienes hijos, si estás casado o eres soltero, si
                  tienes discapacidad, si pagas hipoteca, si tienes otros ingresos, etc. La calculadora aplica los
                  tramos generales de IRPF 2025, pero tu porcentaje real de retención puede ser diferente. La empresa
                  determina tu retención exacta al inicio del contrato según tus circunstancias personales comunicadas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Related Calculators Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculadoras Laborales Relacionadas</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Una vez conoces tu salario por hora, completa tu análisis financiero con estas herramientas esenciales.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedCalculators.map((calculator) => (
                <RelatedCalculatorCard key={calculator.title} {...calculator} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
