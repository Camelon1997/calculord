import type React from "react"
import type { Metadata } from "next"
import { CheckCircle, TrendingUp, Users, Home, BookOpen, Briefcase, Info, ChevronRight, Calculator } from "lucide-react"
import CalculadoraIRPF from "./CalculadoraIRPF"
import { Breadcrumbs } from "../components/Breadcrumbs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Calculadora IRPF 2025 - Todas las Comunidades Autónomas",
  description:
    "Calcula tu IRPF 2025 con tramos actualizados por comunidad autónoma. Deducciones personales, simulación completa y resultado al instante. Gratis.",
  keywords: [
    "calculadora irpf 2025",
    "tramos irpf 2025",
    "impuesto sobre la renta",
    "irpf por comunidades",
    "deducciones irpf",
    "calcular irpf",
    "retención irpf",
    "tipos irpf 2025",
  ],
  alternates: {
    canonical: "https://calculord.com/calculadora-irpf",
  },
}

const FeatureTag = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
    {children}
  </div>
)

const DeductionCard = ({
  icon: Icon,
  title,
  description,
  value,
  bgColor,
  textColor,
}: {
  icon: React.ElementType
  title: string
  description: string
  value: string
  bgColor: string
  textColor: string
}) => (
  <Card className="text-center shadow-sm hover:shadow-md transition-shadow">
    <CardContent className="p-6">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${bgColor}`}>
        <Icon className={`h-8 w-8 ${textColor}`} />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="inline-block bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-full text-sm">
        {value}
      </div>
    </CardContent>
  </Card>
)

const RelatedCalculatorCardNew = ({
  icon: Icon,
  title,
  description,
  features,
  href,
  buttonText,
  buttonColor,
}: {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  href: string
  buttonText: string
  buttonColor: string
}) => (
  <Card className="flex flex-col">
    <CardHeader>
      <div className="flex items-center gap-4 mb-2">
        <div className="bg-gray-100 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-gray-700" />
        </div>
        <CardTitle>{title}</CardTitle>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </CardHeader>
    <CardContent className="flex-grow">
      <ul className="space-y-2 text-sm">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="h-4 w-4 text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
    </CardContent>
    <div className="p-6 pt-0">
      <Button asChild className={`w-full ${buttonColor}`}>
        <a href={href}>
          {buttonText} <ChevronRight className="h-4 w-4 ml-2" />
        </a>
      </Button>
    </div>
  </Card>
)

export default function CalculadoraIRPFPage() {
  return (
    <div className="bg-white">
      <Breadcrumbs currentPage="Calculadora IRPF" />
      {/* Hero Section */}
      <section className="bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center pt-8 pb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Calculadora IRPF 2025</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Calcula tu Impuesto sobre la Renta con los tramos actualizados de 2025. Incluye todas las Comunidades
              Autónomas, deducciones personales y simulación completa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <FeatureTag>Tramos IRPF 2025 actualizados</FeatureTag>
              <FeatureTag>Todas las Comunidades Autónomas</FeatureTag>
              <FeatureTag>Deducciones personales y familiares</FeatureTag>
              <FeatureTag>Cálculo detallado por tramos</FeatureTag>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Calculator Section */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Calculadora IRPF 2025</h2>
            <p className="text-lg text-gray-600 mt-2">
              Calcula tu Impuesto sobre la Renta con los tramos actualizados de 2025. Incluye todas las Comunidades
              Autónomas y deducciones aplicables.
            </p>
          </div>
          <CalculadoraIRPF />
        </section>

        {/* IRPF Explanation Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">¿Qué es el IRPF y cómo se calcula?</h2>
            <p className="text-lg text-gray-600 mt-2 max-w-4xl mx-auto">
              El Impuesto sobre la Renta de las Personas Físicas es un tributo progresivo que grava los ingresos de los
              contribuyentes españoles.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Definición del IRPF</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    El IRPF es un impuesto progresivo que se aplica sobre los ingresos de las personas físicas
                    residentes en España. Esto significa que a mayor renta, mayor porcentaje de impuestos se paga.
                  </p>
                  <p className="text-gray-600 font-semibold">Se compone de dos partes:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 mt-2">
                    <li>
                      <strong>Tramo Estatal:</strong> Igual para toda España
                    </li>
                    <li>
                      <strong>Tramo Autonómico:</strong> Varía según la Comunidad Autónoma
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Sistema Progresivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    El sistema progresivo significa que no pagas el mismo porcentaje sobre todos tus ingresos. Los
                    primeros euros tributan menos que los últimos.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg text-sm">
                    <p className="text-blue-800">
                      <strong>Ejemplo:</strong> Si ganas 30.000€, los primeros 12.450€ tributan al 19%, los siguientes
                      7.750€ al 24%, y los últimos 9.800€ al 30%.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="lg:col-span-2 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Tramos IRPF Estatal 2025</CardTitle>
                <p className="text-sm text-gray-500">Tipos impositivos de la parte estatal</p>
              </CardHeader>
              <CardContent>
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 font-semibold">Desde</th>
                      <th className="py-2 font-semibold">Hasta</th>
                      <th className="py-2 font-semibold text-blue-600">Tipo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-1">0€</td>
                      <td className="py-1">12.450€</td>
                      <td className="py-1 font-bold text-blue-600">19%</td>
                    </tr>
                    <tr>
                      <td className="py-1">12.450€</td>
                      <td className="py-1">20.200€</td>
                      <td className="py-1 font-bold text-blue-600">24%</td>
                    </tr>
                    <tr>
                      <td className="py-1">20.200€</td>
                      <td className="py-1">35.200€</td>
                      <td className="py-1 font-bold text-blue-600">30%</td>
                    </tr>
                    <tr>
                      <td className="py-1">35.200€</td>
                      <td className="py-1">60.000€</td>
                      <td className="py-1 font-bold text-blue-600">37%</td>
                    </tr>
                    <tr>
                      <td className="py-1">60.000€</td>
                      <td className="py-1">300.000€</td>
                      <td className="py-1 font-bold text-blue-600">45%</td>
                    </tr>
                    <tr>
                      <td className="py-1">300.000€</td>
                      <td className="py-1">∞</td>
                      <td className="py-1 font-bold text-blue-600">47%</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* IRPF by Region Section */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">IRPF por Comunidad Autónoma 2025</h2>
            <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
              Cada Comunidad Autónoma puede establecer sus propios tramos autonómicos, lo que hace que el IRPF total
              varíe según tu lugar de residencia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold">Madrid</h3>
                <p className="text-sm text-gray-500 mb-3">Tipos autonómicos más bajos de España</p>
                <div className="bg-blue-100 text-blue-800 p-2 rounded text-center text-sm font-semibold">
                  Salario 40.000€: IRPF total ~22,8%
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold">Cataluña</h3>
                <p className="text-sm text-gray-500 mb-3">Tipos autonómicos elevados con tramos adicionales</p>
                <div className="bg-blue-100 text-blue-800 p-2 rounded text-center text-sm font-semibold">
                  Salario 40.000€: IRPF total ~26,2%
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold">Andalucía</h3>
                <p className="text-sm text-gray-500 mb-3">Tipos intermedios con deducciones específicas</p>
                <div className="bg-blue-100 text-blue-800 p-2 rounded text-center text-sm font-semibold">
                  Salario 40.000€: IRPF total ~25,1%
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-gray-600 mb-6">
            Nuestra calculadora incluye los tramos específicos de cada Comunidad Autónoma para ofrecerte el cálculo más
            preciso posible.
          </p>
          <div className="text-center">
            <Button size="lg">Calcular mi IRPF</Button>
          </div>
        </section>

        {/* Deductions Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Principales Deducciones del IRPF 2025</h2>
            <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
              Las deducciones pueden reducir significativamente tu cuota del IRPF. Conoce las más importantes y cómo
              aplicarlas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <DeductionCard
              icon={Home}
              title="Vivienda Habitual"
              description="Deducción por compra de vivienda habitual para contratos anteriores a 2013"
              value="Hasta 9.040€/año"
              bgColor="bg-blue-100"
              textColor="text-blue-600"
            />
            <DeductionCard
              icon={Users}
              title="Familia Numerosa"
              description="Deducciones por familia numerosa general o especial"
              value="1.200€ - 2.400€"
              bgColor="bg-purple-100"
              textColor="text-purple-600"
            />
            <DeductionCard
              icon={BookOpen}
              title="Educación"
              description="Gastos de educación, libros y material escolar (según CCAA)"
              value="Variable por CCAA"
              bgColor="bg-orange-100"
              textColor="text-orange-600"
            />
            <DeductionCard
              icon={Briefcase}
              title="Planes de Pensiones"
              description="Aportaciones a planes de pensiones individuales"
              value="Hasta 1.500€/año"
              bgColor="bg-teal-100"
              textColor="text-teal-600"
            />
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-yellow-800">
            <div className="flex">
              <div className="py-1">
                <Info className="h-5 w-5 mr-3" />
              </div>
              <div>
                <p className="font-bold">Importante sobre las Deducciones</p>
                <p className="text-sm">
                  Nuestra calculadora ofrece un cálculo simplificado y no incluye todas las deducciones posibles. Para
                  un cálculo exacto que incluya todas tus deducciones específicas, te recomendamos consultar con un
                  asesor fiscal o utilizar el programa PADRE de la Agencia Tributaria.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Preguntas Frecuentes sobre el IRPF</h2>
            <p className="text-lg text-gray-600 mt-2">
              Resolvemos las dudas más comunes sobre el Impuesto sobre la Renta
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Cómo se calculan los tramos del IRPF?</AccordionTrigger>
              <AccordionContent>
                Los tramos del IRPF se aplican de forma progresiva. Esto significa que cada tramo de ingresos tiene un
                tipo impositivo diferente, y solo se aplica ese tipo a la parte de ingresos que corresponde a ese tramo.
                Por ejemplo, si ganas 25.000€, los primeros 12.450€ tributan al 19%, los siguientes 7.750€ al 24%, y los
                últimos 4.800€ al 30%.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Qué diferencia hay entre retención y cuota del IRPF?</AccordionTrigger>
              <AccordionContent>
                La retención es el dinero que te descuentan mensualmente de tu nómina como pago a cuenta del IRPF. La
                cuota es el impuesto real que debes pagar según tu declaración anual. Si las retenciones son mayores que
                la cuota, te devuelven dinero. Si son menores, te toca pagar la diferencia.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿Por qué cada Comunidad Autónoma tiene tramos diferentes?</AccordionTrigger>
              <AccordionContent>
                El IRPF se compone de una parte estatal (igual para todos) y una parte autonómica que cada Comunidad
                Autónoma puede modificar. Por eso, aunque los tramos estatales son iguales, el tipo total puede variar
                según tu comunidad de residencia.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>¿Qué deducciones puedo aplicar en mi declaración?</AccordionTrigger>
              <AccordionContent>
                Las deducciones más comunes incluyen: gastos de vivienda habitual (contratos pre-2013), familia
                numerosa, gastos de educación, aportaciones a planes de pensiones, donativos a ONGs, y deducciones
                específicas de cada Comunidad Autónoma. Cada una tiene sus límites y requisitos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>¿Cuándo debo hacer la declaración de la renta?</AccordionTrigger>
              <AccordionContent>
                La campaña de la renta suele ser de abril a junio. Estás obligado a declarar si tus ingresos superan
                22.000€ anuales (14.000€ si tienes más de un pagador), aunque en muchos casos puede ser beneficioso
                hacerla aunque no sea obligatorio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Related Calculators Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Otras Calculadoras Laborales</h2>
            <p className="text-lg text-gray-600 mt-2">
              Completa tu planificación fiscal con nuestras otras herramientas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RelatedCalculatorCardNew
              icon={Calculator}
              title="Calculadora Nómina"
              description="Calcula tu salario neto mensual con IRPF, cotizaciones sociales y deducciones aplicables"
              features={["Cálculo IRPF y cotizaciones", "Desglose detallado mensual", "Todas las CCAA incluidas"]}
              href="/calculadora-nomina"
              buttonText="Calcular Nómina"
              buttonColor="bg-purple-600 hover:bg-purple-700"
            />
            <RelatedCalculatorCardNew
              icon={TrendingUp}
              title="Conversor Salario"
              description="Convierte fácilmente entre salario bruto y neto con cálculos precisos y actualizados"
              features={["Conversión bidireccional", "Cálculo instantáneo", "Tramos IRPF 2025"]}
              href="/conversor-salario-bruto-neto"
              buttonText="Convertir Salario"
              buttonColor="bg-blue-600 hover:bg-blue-700"
            />
            <RelatedCalculatorCardNew
              icon={Users}
              title="Cotizaciones SS"
              description="Calcula las cotizaciones a la Seguridad Social para empleados y autónomos"
              features={["Empleados y autónomos", "Bases y tipos 2025", "Desglose por conceptos"]}
              href="/calculadora-cotizaciones-seguridad-social"
              buttonText="Calcular Cotizaciones"
              buttonColor="bg-blue-600 hover:bg-blue-700"
            />
          </div>
        </section>
      </main>
    </div>
  )
}
