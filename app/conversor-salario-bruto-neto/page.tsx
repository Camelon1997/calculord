import type { Metadata } from "next"
import { BarChart, Building2, Calculator, ArrowLeftRight, Users, CheckCircle, HelpCircle } from "lucide-react"
import ConversorSalarioBrutoNeto from "./ConversorSalarioBrutoNeto"
import { RelatedCalculatorCard } from "../components/RelatedCalculatorCard"
import { Breadcrumbs } from "../components/Breadcrumbs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Conversor Salario Bruto a Neto 2025 (y viceversa) | Calculadora Online",
  description:
    "Convierte tu salario de bruto a neto (y de neto a bruto) con nuestra calculadora online. Actualizada con las retenciones de IRPF y cotizaciones de 2025. Ideal para negociar tu sueldo y entender tu nómina.",
  keywords: [
    "conversor bruto neto 2025",
    "calculadora bruto neto",
    "salario neto a bruto",
    "sueldo bruto a neto",
    "calcular salario neto",
    "negociacion salarial",
    "oferta de empleo",
    "retenciones IRPF 2025",
    "cotizaciones seguridad social",
  ],
  openGraph: {
    title: "Conversor Salario Bruto a Neto 2025 (y viceversa) | Calculord",
    description:
      "La herramienta más rápida para convertir salario bruto a neto y neto a bruto. Imprescindible para entrevistas de trabajo y revisiones salariales. Actualizada para 2025.",
    type: "website",
    locale: "es_ES",
    url: "https://calculord.com/conversor-salario-bruto-neto",
  },
  alternates: {
    canonical: "https://calculord.com/conversor-salario-bruto-neto",
  },
}

export default function ConversorSalarioPage() {
  return (
    <>
      <Breadcrumbs currentPage="Conversor Salario Bruto-Neto" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ArrowLeftRight className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conversor Salario Bruto a Neto
            <span className="block text-blue-600 text-3xl md:text-4xl mt-2">Actualizado 2025</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Convierte tu salario bruto a neto y viceversa con los tipos de IRPF 2025 actualizados. Incluye cotizaciones,
            deducciones personales y familiares.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              IRPF 2025 Actualizado
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Conversión Bidireccional
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Desglose Completo
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculadora" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ConversorSalarioBrutoNeto />
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Entendiendo tu Salario: Bruto vs. Neto</h2>
          <p>
            Cuando negocias un salario o recibes una oferta de trabajo, la cifra que se menciona es casi siempre el{" "}
            <strong>salario bruto anual</strong>. Sin embargo, el dinero que realmente llega a tu cuenta bancaria cada
            mes es el <strong>salario neto</strong>. ¿Cuál es la diferencia y por qué es tan grande?
          </p>
          <p>
            La diferencia radica en dos conceptos clave: las <strong>cotizaciones a la Seguridad Social</strong> y las{" "}
            <strong>retenciones del IRPF</strong> (Impuesto sobre la Renta de las Personas Físicas).
          </p>

          <h3>1. Cotizaciones a la Seguridad Social</h3>
          <p>
            Es una aportación obligatoria que realizas como trabajador para financiar el sistema público (pensiones,
            prestaciones por desempleo, sanidad, etc.). Se calcula como un porcentaje de tu salario bruto. Para 2025,
            los tipos generales son:
          </p>
          <ul>
            <li>
              <strong>Contingencias Comunes:</strong> 4.70%
            </li>
            <li>
              <strong>Desempleo (contrato indefinido):</strong> 1.55%
            </li>
            <li>
              <strong>Formación Profesional:</strong> 0.10%
            </li>
          </ul>
          <p>
            En total, un <strong>6.35%</strong> de tu salario bruto se destina a estas cotizaciones.
          </p>

          <h3>2. Retenciones del IRPF</h3>
          <p>
            Es un adelanto que tu empresa ingresa a Hacienda en tu nombre para pagar el impuesto sobre la renta. No es
            un tipo fijo, sino que depende de varios factores:
          </p>
          <ul>
            <li>
              <strong>El importe de tu salario:</strong> A mayor salario, mayor porcentaje de retención.
            </li>
            <li>
              <strong>Tu situación personal y familiar:</strong> Estado civil, número de hijos, si tienes personas a tu
              cargo o una discapacidad. Estos factores dan derecho a deducciones que reducen la base sobre la que se
              calcula el impuesto.
            </li>
          </ul>
          <p>
            Nuestra calculadora tiene en cuenta todos estos factores para darte una estimación precisa de la retención
            que te corresponde.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Características del Conversor</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas para calcular tu salario real</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ArrowLeftRight className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Conversión Bidireccional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Convierte de bruto a neto para saber cuánto ganarás, o de neto a bruto para saber cuánto pedir.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>IRPF 2025 Actualizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Utilizamos los tramos de IRPF y deducciones vigentes para 2025 para máxima precisión.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Situación Familiar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ajusta el cálculo según tu estado civil, número de hijos y si tienes alguna discapacidad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">Resolvemos tus dudas más habituales sobre el salario.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600 inline-block" />
                ¿Por qué mi retención de IRPF cambia cada año?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                Tu retención puede cambiar por varias razones: un aumento de sueldo que te haga saltar de tramo, cambios
                en tu situación familiar (casarte, tener un hijo), o modificaciones en la legislación fiscal que apruebe
                el gobierno.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600 inline-block" />
                ¿El salario neto se calcula igual en todas las Comunidades Autónomas?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                No exactamente. El IRPF tiene un tramo estatal (común para todos) y un tramo autonómico que cada
                comunidad puede modificar. Esto puede generar pequeñas diferencias en el salario neto final. Nuestra
                calculadora usa los tramos estatales como referencia general.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600 inline-block" />
                ¿Qué significa "calcular de neto a bruto"?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                Es el proceso inverso. Si quieres ganar una cantidad neta específica (por ejemplo, 2.000€ al mes), la
                calculadora te dirá qué salario bruto anual necesitas negociar con tu empresa para alcanzar esa cifra
                después de impuestos y cotizaciones.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600 inline-block" />
                ¿Esta calculadora sirve para autónomos?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                No, esta calculadora está diseñada para trabajadores por cuenta ajena (asalariados). Los autónomos
                tienen un sistema de cotización e IRPF diferente. Disponemos de calculadoras específicas para autónomos
                en nuestra web.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Related Calculators Section */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Profundiza en tu Retribución</h2>
            <p className="text-xl text-gray-600">
              Una vez conoces tu neto, explora los detalles con estas herramientas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RelatedCalculatorCard
              icon={
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-purple-600" />
                </div>
              }
              title="Calculadora de Nómina"
              description="Obtén el desglose mensual completo de tu salario, cotizaciones y retenciones."
              features={["Desglose de cotizaciones", "Retención de IRPF", "Salario neto mensual"]}
              href="/calculadora-nomina"
              buttonText="Calcular Nómina"
              buttonClassName="bg-purple-600 hover:bg-purple-700"
            />
            <RelatedCalculatorCard
              icon={
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-orange-600" />
                </div>
              }
              title="Calculadora de IRPF"
              description="Calcula tu IRPF anual total y entiende cómo afectan los tramos y deducciones."
              features={["Tramos IRPF 2025 actualizados", "Todas las Comunidades Autónomas", "Deducciones personales"]}
              href="/calculadora-irpf"
              buttonText="Calcular IRPF"
              buttonClassName="bg-orange-600 hover:bg-orange-700"
            />
            <RelatedCalculatorCard
              icon={
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-emerald-600" />
                </div>
              }
              title="Coste Total Empresa"
              description="Descubre cuánto le cuesta realmente a la empresa tu salario bruto."
              features={[
                "Cálculo desde bruto o neto",
                "Cotizaciones empresariales 2025",
                "Planificación presupuestaria",
              ]}
              href="/calculadora-coste-total-empresa"
              buttonText="Calcular Coste"
              buttonClassName="bg-emerald-600 hover:bg-emerald-700"
            />
          </div>
        </div>
      </section>
    </>
  )
}
