"use client"
import { ArrowLeftRight, Shield, HelpCircle, BarChart2, Building2, Euro, Users, FileText } from "lucide-react"
import CalculadoraCosteTotalEmpresa from "./CalculadoraCosteTotalEmpresa"
import { RelatedCalculatorCard } from "../components/RelatedCalculatorCard"
import { Breadcrumbs } from "../components/Breadcrumbs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de Coste Total de Empleado 2025",
  description:
    "Calcula el coste total de un empleado para la empresa incluyendo salario bruto y cotizaciones a la Seguridad Social",
  url: "https://calculord.com/calculadora-coste-total-empresa",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta de media un trabajador a la empresa sobre su sueldo bruto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Como regla general, el coste de las cotizaciones a la Seguridad Social a cargo de la empresa suele ser de aproximadamente un 30-32% sobre el salario bruto para contratos indefinidos. Para un sueldo bruto de 30.000€, la empresa pagará unos 9.000€ adicionales en cotizaciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué un contrato temporal es más caro para la empresa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un contrato temporal es más caro principalmente por la cotización por desempleo. Para un contrato temporal, la empresa paga un 6.7% del salario bruto, mientras que para un contrato indefinido paga un 5.5%. Esta diferencia incentiva la contratación estable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la base de cotización y por qué hay un máximo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La base de cotización es el salario bruto mensual sobre el que se aplican los porcentajes de la Seguridad Social. En 2025 la base máxima es de 53.946€ anuales (4.495,50€ mensuales). Esto limita tanto las aportaciones como las futuras prestaciones.",
      },
    },
  ],
}

export default function CalculatorPageClient() {
  return (
    <>
      <Breadcrumbs currentPage="Calculadora Coste Empresa" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Building2 className="h-10 w-10 text-emerald-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Calculadora de Coste Total de Empleado 2025
            <span className="block text-emerald-600">¿Cuánto cuesta realmente un trabajador?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descubre el coste real completo de contratar a un empleado. No es solo el salario: cotizaciones, IRPF y
            Seguridad Social. Planifica tu presupuesto de recursos humanos con precisión para 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" })}
            >
              <BarChart2 className="mr-2 h-5 w-5" />
              Calcular Coste Ahora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold bg-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => document.getElementById("guia")?.scrollIntoView({ behavior: "smooth" })}
            >
              <FileText className="mr-2 h-5 w-5" />
              Ver Guía Completa
            </Button>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculadora" className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calcula el Coste Total</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Introduce el salario bruto o neto deseado y obtén el desglose completo del coste real para la empresa.
            </p>
          </div>
          <CalculadoraCosteTotalEmpresa />
        </div>
      </section>

      {/* Guía de Entendimiento */}
      <section id="guia" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entendiendo el Coste de un Trabajador</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El salario bruto es solo el principio. El coste real incluye importantes cotizaciones a la Seguridad
              Social.
            </p>
          </div>

          <div className="space-y-12">
            {/* Sección 1: Más allá del salario */}
            <div className="p-8 border rounded-lg shadow-lg bg-gradient-to-br from-gray-50 to-blue-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Euro className="h-7 w-7 text-emerald-500" />
                1. Más Allá del Salario Bruto
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Cuando contratas a un empleado, el coste para la empresa va mucho más allá del salario acordado. El{" "}
                <strong>coste total o "coste empresa"</strong> incluye todas las aportaciones obligatorias que debes
                realizar a la Seguridad Social.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Estas cotizaciones son esenciales porque financian prestaciones clave como la sanidad pública, las
                pensiones, el seguro de desempleo y la formación profesional. Para la empresa, representan un coste
                adicional que, por lo general, <strong>supone entre un 30% y un 37% sobre el salario bruto</strong> del
                empleado.
              </p>
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg mt-4">
                <p className="font-semibold text-emerald-800">Ejemplo Práctico:</p>
                <p className="text-emerald-700 text-sm mt-2">
                  Si ofreces un salario bruto de 30.000€/año, el coste real para la empresa será de aproximadamente{" "}
                  <strong>39.000€/año</strong> (30.000€ + 9.000€ en cotizaciones).
                </p>
              </div>
            </div>

            {/* Sección 2: Desglose de cotizaciones */}
            <div className="p-8 border rounded-lg shadow-lg bg-gradient-to-br from-gray-50 to-purple-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Shield className="h-7 w-7 text-purple-500" />
                2. Desglose de las Cotizaciones Empresariales 2025
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                La Seguridad Social establece diferentes conceptos de cotización. Aquí está el desglose completo:
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Contingencias Comunes (23,6%)</h4>
                  <p className="text-gray-600 text-sm">
                    Es la partida más grande. Cubre la atención sanitaria por enfermedad común o accidente no laboral, y
                    las futuras pensiones de jubilación del trabajador.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Desempleo (5,5% - 6,7%)</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    El porcentaje varía según el tipo de contrato. Para un{" "}
                    <strong>contrato indefinido es del 5,5%</strong>, mientras que para un{" "}
                    <strong>contrato temporal asciende al 6,7%</strong>. Este fondo paga las prestaciones por desempleo.
                  </p>
                  <p className="text-orange-700 font-semibold text-sm">
                    ⚠ Los contratos temporales son más caros para incentivar la estabilidad laboral.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Formación Profesional (0,6%)</h4>
                  <p className="text-gray-600 text-sm">
                    Financia cursos y programas de formación para mejorar las competencias de los trabajadores y su
                    empleabilidad.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">FOGASA (0,2%)</h4>
                  <p className="text-gray-600 text-sm">
                    El Fondo de Garantía Salarial asegura que los trabajadores cobren sus salarios e indemnizaciones en
                    caso de insolvencia o quiebra de la empresa.
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg mt-6">
                <p className="font-semibold text-purple-800">Total para Contrato Indefinido:</p>
                <p className="text-purple-700 text-sm">
                  23,6% + 5,5% + 0,6% + 0,2% = <strong>29,9%</strong> sobre el salario bruto
                </p>
                <p className="font-semibold text-purple-800 mt-2">Total para Contrato Temporal:</p>
                <p className="text-purple-700 text-sm">
                  23,6% + 6,7% + 0,6% + 0,2% = <strong>31,1%</strong> sobre el salario bruto
                </p>
              </div>
            </div>

            {/* Sección 3: Base de cotización */}
            <div className="p-8 border rounded-lg shadow-lg bg-gradient-to-br from-gray-50 to-amber-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <BarChart2 className="h-7 w-7 text-amber-500" />
                3. Base de Cotización y Topes 2025
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                La <strong>base de cotización</strong> es el salario bruto mensual sobre el que se aplican los
                porcentajes de la Seguridad Social. Sin embargo, existe una <strong>base máxima de cotización</strong>.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-inner mb-4">
                <div className="grid md:grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-amber-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Base Máxima Anual 2025</p>
                    <p className="text-3xl font-bold text-amber-600">53.946€</p>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Base Máxima Mensual 2025</p>
                    <p className="text-3xl font-bold text-amber-600">4.495,50€</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Esto significa que, <strong>aunque un empleado gane más de esa cantidad</strong>, la empresa y el
                trabajador solo cotizarán sobre ese tope máximo. Esta limitación también afecta a las futuras
                prestaciones (pensión máxima, paro máximo).
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="font-semibold text-amber-800">Ejemplo:</p>
                <p className="text-amber-700 text-sm mt-2">
                  Si un empleado cobra 80.000€/año, las cotizaciones se calcularán sobre 53.946€, no sobre los 80.000€
                  completos. Esto reduce proporcionalmente el coste de cotización para salarios muy altos.
                </p>
              </div>
            </div>

            {/* Sección 4: Planificación RRHH */}
            <div className="p-8 border rounded-lg shadow-lg bg-gradient-to-br from-gray-50 to-indigo-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Users className="h-7 w-7 text-indigo-500" />
                4. Planificación de Recursos Humanos
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Conocer el coste real de un empleado es fundamental para una correcta planificación empresarial. Debes
                considerar:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-1">✓</span>
                  <span>
                    <strong>Presupuesto anual:</strong> Multiplica el coste total por el número de empleados para
                    obtener tu presupuesto de personal.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-1">✓</span>
                  <span>
                    <strong>Negociación salarial:</strong> Si un candidato pide 35.000€ netos, necesitas saber que el
                    coste real será significativamente mayor.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-1">✓</span>
                  <span>
                    <strong>Bonificaciones:</strong> Algunas empresas pueden acceder a bonificaciones en las
                    cotizaciones (jóvenes, mayores de 45, personas con discapacidad).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-1">✓</span>
                  <span>
                    <strong>Otros costes:</strong> No olvides incluir otros gastos como formación, equipamiento, seguros
                    adicionales, dietas, etc.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8 text-emerald-600" />
              Preguntas Frecuentes
            </h2>
            <p className="mt-3 text-lg text-gray-600">Resolvemos las dudas más comunes sobre el coste laboral.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                ¿Cuánto cuesta de media un trabajador a la empresa sobre su sueldo bruto?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                Como regla general, el coste de las cotizaciones a la Seguridad Social a cargo de la empresa suele ser
                de aproximadamente un <strong>30-32% sobre el salario bruto</strong> para contratos indefinidos. Por
                ejemplo, para un sueldo bruto de 30.000€, la empresa pagará unos 9.000€ adicionales en cotizaciones,
                elevando el coste total a unos 39.000€.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                ¿Por qué un contrato temporal es más caro para la empresa?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                Un contrato temporal es más caro principalmente por la cotización por desempleo. Para un contrato
                temporal, la empresa paga un 6,7% del salario bruto, mientras que para un contrato indefinido, paga un
                5,5%. Esta diferencia está diseñada para incentivar la contratación estable y penalizar la temporalidad.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                ¿Esta calculadora incluye pagas extras, dietas o bonus?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                La calculadora se centra en el coste fijo derivado del salario bruto anual y las cotizaciones
                obligatorias. Conceptos como pagas por objetivos, dietas, gastos de transporte o salario en especie
                (coche de empresa, seguro médico) son costes adicionales que no están incluidos. Las pagas extras sí
                están incluidas si el salario que introduces es el bruto anual.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                ¿Qué es la base de cotización y por qué hay un máximo?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                La base de cotización es el salario bruto mensual sobre el que se aplican los porcentajes de la
                Seguridad Social. Existe una base máxima de cotización (en 2025 es de 53.946€ anuales o 4.495,50€
                mensuales). Esto significa que, aunque un empleado gane más de esa cantidad, la empresa y el trabajador
                solo cotizarán sobre ese tope máximo. Esto limita tanto las aportaciones como las futuras prestaciones
                (pensión máxima, paro máximo).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                ¿Existen bonificaciones en las cotizaciones empresariales?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                Sí, existen diversas bonificaciones que pueden reducir el coste de contratación. Por ejemplo, para
                menores de 30 años, mayores de 45 años, personas con discapacidad, víctimas de violencia de género, o en
                zonas de baja densidad de población. Estas bonificaciones pueden ser muy significativas y reducir el
                coste de cotización durante meses o incluso años. Consulta con tu asesoría laboral para conocer las
                bonificaciones aplicables a tu caso.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">
                ¿Cómo afecta el IRPF al coste para la empresa?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                El IRPF es una retención que <strong>no supone un coste para la empresa</strong>. Es dinero que se
                descuenta del salario del trabajador y que la empresa ingresa directamente a Hacienda en su nombre. El
                verdadero coste adicional para la empresa son las cotizaciones a la Seguridad Social (entre 30-32% del
                salario bruto).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Calculadoras Relacionadas */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculadoras Relacionadas</h2>
            <p className="text-xl text-gray-600">
              Obtén una visión completa del ciclo salarial con nuestras otras herramientas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RelatedCalculatorCard
              icon={
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <ArrowLeftRight className="h-6 w-6 text-indigo-600" />
                </div>
              }
              title="Conversor Bruto a Neto"
              description="Calcula el salario neto que recibirá el empleado a partir del bruto que has presupuestado."
              features={["Conversión bidireccional", "IRPF 2025 actualizado", "Ideal para negociación"]}
              href="/conversor-salario-bruto-neto"
              buttonText="Ir al Conversor"
            />
            <RelatedCalculatorCard
              icon={
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
              }
              title="Cotizaciones Seguridad Social"
              description="Desglosa en detalle las cotizaciones a la Seguridad Social tanto del empleado como de la empresa."
              features={["Régimen General", "Bases y tipos 2025", "Desglose trabajador/empresa"]}
              href="/calculadora-cotizaciones-seguridad-social"
              buttonText="Calcular Cotizaciones"
            />
            <RelatedCalculatorCard
              icon={
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BarChart2 className="h-6 w-6 text-purple-600" />
                </div>
              }
              title="Calculadora de Nómina"
              description="Genera una simulación completa de la nómina mensual del trabajador."
              features={["Desglose de cotizaciones", "Retención de IRPF", "Salario neto mensual"]}
              href="/calculadora-nomina"
              buttonText="Simular Nómina"
            />
          </div>
        </div>
      </section>
    </>
  )
}
