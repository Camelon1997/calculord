"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Calculator, TrendingUp, Shield, Umbrella, FileText } from "lucide-react"
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
          <div className="max-w-4xl mx-auto px-4 prose lg:prose-xl">
            <h2 className="text-center">Entendiendo tu Salario por Horas en 2025</h2>
            <p>
              Calcular el salario cuando se trabaja por horas puede parecer complejo, pero es fundamental para asegurar
              una retribución justa y conforme a la ley. Nuestra herramienta desglosa todos los componentes para darte
              una visión clara de tu sueldo, desde el importe bruto hasta el dinero que realmente llega a tu cuenta
              bancaria.
            </p>
            <h3>Clave 1: El Salario Mínimo Interprofesional (SMI) por Hora</h3>
            <p>
              Para 2025, el SMI se ha fijado en <strong>1.184 euros brutos mensuales en 14 pagas</strong>. Para los
              trabajadores por horas, esto se traduce en un mínimo de <strong>9,26 euros por hora</strong> de trabajo
              efectivo. Este valor ya incluye la parte proporcional de las pagas extraordinarias y las vacaciones.
              Nuestra calculadora utiliza este valor oficial como base para asegurar que tu salario cumple con el mínimo
              legal.
            </p>
            <h3>Clave 2: ¿Cómo se calculan las Horas Extra?</h3>
            <p>
              La ley establece que el valor de la hora extra no puede ser inferior al de la hora ordinaria. Además,
              muchos convenios colectivos establecen un recargo, siendo el más común un{" "}
              <strong>incremento del 75%</strong> sobre el valor de la hora normal. Nuestra calculadora aplica este
              porcentaje por defecto para darte una estimación realista del valor de tu trabajo adicional.
            </p>
            <h3>Clave 3: De Bruto a Neto - Las Deducciones</h3>
            <p>
              El salario bruto por hora no es lo que recibes. Se deben aplicar deducciones por cotizaciones a la
              Seguridad Social. Estas cubren conceptos como:
            </p>
            <ul>
              <li>
                <strong>Contingencias Comunes:</strong> Para bajas por enfermedad o accidente no laboral (4.8%).
              </li>
              <li>
                <strong>Desempleo:</strong> Para tener derecho a la prestación por desempleo (1.55% en contratos
                indefinidos).
              </li>
              <li>
                <strong>Formación Profesional:</strong> Para financiar cursos de formación (0.1%).
              </li>
            </ul>
            <p>
              La suma de estos porcentajes se resta de tu salario bruto para obtener el salario neto, que es la cantidad
              final que percibes.
            </p>
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
                  Sí. El importe de 9,26€/hora para empleados del hogar o trabajadores eventuales y temporeros ya
                  incluye la parte proporcional de las pagas extraordinarias y las vacaciones. Por tanto, no se abonan
                  aparte.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline p-4">
                  ¿Qué pasa si mi convenio colectivo establece un precio por hora superior al SMI?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pt-2 px-4 pb-4">
                  Siempre prevalece la condición más beneficiosa para el trabajador. Si tu convenio fija un salario por
                  hora superior a 9,26€, la empresa debe pagarte esa cantidad. Puedes usar la opción "Salario
                  personalizado" en nuestra calculadora para introducir el valor de tu convenio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline p-4">
                  ¿Cuántas horas extra puedo hacer como máximo?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pt-2 px-4 pb-4">
                  Por ley, el máximo de horas extraordinarias es de 80 horas al año. No se computan a estos efectos las
                  que se hayan compensado mediante descanso dentro de los cuatro meses siguientes a su realización.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline p-4">
                  ¿Los trabajadores a tiempo parcial pueden hacer horas extra?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pt-2 px-4 pb-4">
                  Sí. Los trabajadores a tiempo parcial pueden realizar horas extraordinarias en los mismos términos que
                  los trabajadores a tiempo completo. El número máximo de horas extra que pueden realizar será
                  proporcional a su jornada.
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
