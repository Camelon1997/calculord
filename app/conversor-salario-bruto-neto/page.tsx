import type { Metadata } from "next"
import {
  BarChart,
  Building2,
  Calculator,
  ArrowLeftRight,
  Users,
  CheckCircle,
  HelpCircle,
  FileText,
  TrendingUp,
} from "lucide-react"
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
    "conversor salarial España",
    "de bruto a neto",
    "cuanto cobra un trabajador",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Conversor Salario Bruto a Neto 2025",
    applicationCategory: "FinanceApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    description:
      "Conversor bidireccional de salario bruto a neto y neto a bruto. Incluye cálculo de IRPF y cotizaciones a la Seguridad Social actualizadas para 2025.",
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo convertir salario bruto a neto en España?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Para convertir salario bruto a neto, debes restar las cotizaciones a la Seguridad Social (6.35%) y las retenciones de IRPF (varía según tu salario y situación personal). El resultado es tu salario neto mensual o anual.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué diferencia hay entre salario bruto y neto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El salario bruto es la cantidad total antes de impuestos. El salario neto es lo que realmente recibes en tu cuenta después de restar cotizaciones a la Seguridad Social y retenciones de IRPF.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué mi retención de IRPF cambia cada año?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La retención de IRPF puede cambiar por aumentos salariales que te hagan cambiar de tramo, cambios en tu situación familiar (matrimonio, hijos), o modificaciones en la legislación fiscal.",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs currentPage="Conversor Salario Bruto-Neto" />

      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ArrowLeftRight className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Conversor Salario Bruto a Neto
            <span className="block text-blue-200 text-3xl md:text-4xl mt-2">Bidireccional · Actualizado 2025</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            La herramienta definitiva para convertir tu salario bruto a neto y viceversa. Perfecta para negociaciones
            salariales, ofertas de empleo y planificación financiera personal.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
              Conversión Instantánea
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
              IRPF 2025 Actualizado
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
              100% Gratuito
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

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Guía Completa: De Bruto a Neto</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas saber para entender tu salario real</p>
          </div>

          <div className="prose lg:prose-xl max-w-none">
            <Card className="mb-8 border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  ¿Qué es el Salario Bruto y el Salario Neto?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Salario Bruto</h4>
                  <p className="text-gray-700">
                    Es la cantidad total acordada en tu contrato antes de aplicar cualquier deducción. Incluye el
                    salario base más complementos (antigüedad, nocturnidad, peligrosidad, etc.) y las pagas extra. Esta
                    es la cifra que normalmente se menciona en ofertas de trabajo y negociaciones.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Salario Neto</h4>
                  <p className="text-gray-700">
                    Es el dinero real que recibes en tu cuenta bancaria cada mes después de restar las cotizaciones a la
                    Seguridad Social y las retenciones del IRPF. Es tu poder adquisitivo real y lo que debes considerar
                    para tu presupuesto mensual.
                  </p>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Las Dos Grandes Deducciones</h3>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>1. Cotizaciones a la Seguridad Social (6.35%)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Es tu aportación obligatoria al sistema de protección social español. Este dinero financia:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Pensiones:</strong> Tu futura jubilación, invalidez o pensiones para familiares
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Sanidad pública:</strong> Asistencia médica gratuita o subvencionada
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Desempleo:</strong> Prestación por desempleo si pierdes tu trabajo
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Formación profesional:</strong> Programas de reciclaje y capacitación
                    </span>
                  </li>
                </ul>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                  <p className="text-sm text-blue-900">
                    <strong>Importante:</strong> Además de tu aportación (6.35%), la empresa cotiza por ti un 29.90%
                    adicional que no ves en tu nómina pero forma parte del coste real de tu empleo.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>2. Retenciones del IRPF (Variable)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Es un adelanto del Impuesto sobre la Renta que tu empresa ingresa mensualmente a Hacienda en tu
                  nombre. El porcentaje NO es fijo y depende de:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Factores que Aumentan la Retención:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Salario más alto</li>
                      <li>• Soltero sin hijos</li>
                      <li>• Sin discapacidad</li>
                      <li>• Sin otras deducciones</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Factores que Reducen la Retención:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Tener hijos a cargo</li>
                      <li>• Estar casado</li>
                      <li>• Discapacidad reconocida</li>
                      <li>• Aportaciones a pensiones</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
                  <p className="text-sm text-amber-900">
                    <strong>Recuerda:</strong> En la declaración de la renta ajustarás estas retenciones. Si retenieron
                    de más, te devuelven dinero. Si retenieron de menos, deberás pagar la diferencia.
                  </p>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tramos de IRPF 2025</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900">Base Imponible</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900">Tipo Estatal</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900">Ejemplo Práctico</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3">Hasta 12.450€</td>
                        <td className="px-4 py-3 font-medium">19%</td>
                        <td className="px-4 py-3 text-gray-600">Salarios bajos</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3">12.450€ - 20.200€</td>
                        <td className="px-4 py-3 font-medium">24%</td>
                        <td className="px-4 py-3 text-gray-600">SMI y salarios medios-bajos</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">20.200€ - 35.200€</td>
                        <td className="px-4 py-3 font-medium">30%</td>
                        <td className="px-4 py-3 text-gray-600">Salarios medios</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3">35.200€ - 60.000€</td>
                        <td className="px-4 py-3 font-medium">37%</td>
                        <td className="px-4 py-3 text-gray-600">Salarios medios-altos</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">60.000€ - 300.000€</td>
                        <td className="px-4 py-3 font-medium">45%</td>
                        <td className="px-4 py-3 text-gray-600">Salarios altos</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3">Más de 300.000€</td>
                        <td className="px-4 py-3 font-medium">47%</td>
                        <td className="px-4 py-3 text-gray-600">Salarios muy altos</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Nota: Estos son los tipos estatales. Cada comunidad autónoma puede añadir su tramo autonómico,
                  generando pequeñas diferencias regionales.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cuándo Usar Cada Conversión</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-green-600">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Bruto → Neto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">Úsalo cuando:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Recibes una oferta de trabajo</li>
                    <li>• Te suben el sueldo</li>
                    <li>• Quieres saber cuánto cobrarás realmente</li>
                    <li>• Planificas tu presupuesto mensual</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ArrowLeftRight className="h-5 w-5 text-blue-600" />
                    Neto → Bruto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">Úsalo cuando:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Negocias tu salario</li>
                    <li>• Tienes un objetivo de salario neto</li>
                    <li>• Preparas una entrevista de trabajo</li>
                    <li>• Calculas cuánto pedir para cubrir gastos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por Qué Usar Nuestro Conversor</h2>
            <p className="text-xl text-gray-600">La herramienta más completa y precisa del mercado</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all border-t-4 border-t-blue-600">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ArrowLeftRight className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Conversión Bidireccional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Calcula tanto de bruto a neto como de neto a bruto con la misma precisión. Perfecto para negociaciones
                  y planificación.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all border-t-4 border-t-green-600">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Precisión Garantizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Utilizamos los tramos de IRPF y cotizaciones oficiales de 2025. Incluye todas las deducciones
                  personales y familiares.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all border-t-4 border-t-purple-600">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Personalización Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ajusta según tu situación familiar, número de hijos, discapacidad y comunidad autónoma para resultados
                  exactos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">Resuelve todas tus dudas sobre salarios brutos y netos</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <span className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ¿Cómo convertir salario bruto a neto en España?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 pt-2">
                Para convertir salario bruto a neto, debes restar dos conceptos principales: las cotizaciones a la
                Seguridad Social (6.35% fijo) y las retenciones de IRPF (varía según tu salario y situación personal).
                Por ejemplo, un salario bruto de 30.000€ anuales resultará en aproximadamente 23.000-24.000€ netos,
                dependiendo de tu situación familiar.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <span className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ¿Por qué mi retención de IRPF cambia cada año?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 pt-2">
                Tu retención puede cambiar por varias razones: un aumento de sueldo que te haga saltar de tramo fiscal,
                cambios en tu situación familiar (matrimonio, nacimiento de hijos, divorcio), modificaciones en la
                legislación fiscal que apruebe el gobierno, o cambios en tus deducciones (por ejemplo, si empiezas o
                dejas de aportar a un plan de pensiones).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <span className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ¿Qué significa "calcular de neto a bruto"?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 pt-2">
                Es el proceso inverso. Si quieres ganar una cantidad neta específica (por ejemplo, 2.000€ al mes en tu
                cuenta), la calculadora te dirá qué salario bruto anual necesitas negociar con tu empresa para alcanzar
                esa cifra después de impuestos y cotizaciones. Es especialmente útil cuando negocies tu sueldo o
                prepares entrevistas de trabajo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <span className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ¿El salario neto se calcula igual en todas las Comunidades Autónomas?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 pt-2">
                No exactamente. El IRPF tiene un tramo estatal (común para todos) y un tramo autonómico que cada
                comunidad puede modificar. Esto puede generar diferencias de hasta un 2-3% en el salario neto final
                entre comunidades. Por ejemplo, Madrid suele tener retenciones ligeramente más bajas que Cataluña o
                Andalucía.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <span className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ¿Esta calculadora sirve para autónomos?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 pt-2">
                No, esta calculadora está diseñada específicamente para trabajadores por cuenta ajena (asalariados). Los
                autónomos tienen un sistema de cotización diferente (cuota de autónomos variable según ingresos reales)
                y el IRPF se calcula de forma distinta (pagos fraccionados trimestrales). Disponemos de calculadoras
                específicas para autónomos en nuestra web.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <span className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ¿Incluye las pagas extra?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 pt-2">
                Sí, el cálculo anual incluye las pagas extra. Cuando introduces tu salario bruto anual, debe incluir el
                total de todas las pagas (incluidas las extra). Si tu salario se prorratea (pagas extra divididas en 12
                mensualidades), el resultado mensual ya incluye esa proporción.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <span className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ¿Por qué hay tanta diferencia entre bruto y neto?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 pt-2">
                La diferencia suele estar entre el 20% y el 35% dependiendo de tu nivel salarial. Esto se debe a que
                España tiene un sistema fiscal progresivo (a más ganas, más porcentaje pagas) y las cotizaciones
                sociales son obligatorias para mantener el sistema de protección social. Aunque parezca mucho, este
                dinero financia tu sanidad, pensión futura, desempleo y otros beneficios sociales.
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
            <p className="text-xl text-gray-600">Herramientas complementarias para entender mejor tu salario</p>
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
