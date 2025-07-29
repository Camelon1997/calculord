import type { Metadata } from "next"
import { ArrowLeftRight, Shield, HelpCircle, BarChart2 } from "lucide-react"
import CalculadoraCosteTotalEmpresa from "./CalculadoraCosteTotalEmpresa"
import { RelatedCalculatorCard } from "../components/RelatedCalculatorCard"
import { Breadcrumbs } from "../components/Breadcrumbs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Calculadora Coste Total de un Empleado para la Empresa 2025",
  description:
    "Calcula el coste total que un trabajador supone para la empresa en 2025. Incluye salario bruto, cotizaciones a la Seguridad Social a cargo de la empresa y otras bonificaciones.",
  keywords: [
    "coste total empleado",
    "calculadora coste empresa",
    "cuanto cuesta un trabajador",
    "seguridad social empresa",
    "coste laboral",
    "presupuesto rrhh",
    "contratar trabajador",
    "salario bruto a coste total",
  ],
  openGraph: {
    title: "Calculadora Coste Total de un Empleado para la Empresa 2025 | Calculord",
    description:
      "Herramienta esencial para RRHH y empresarios. Calcula el coste real de un empleado partiendo del salario bruto o del neto deseado. Planifica tus contrataciones para 2025.",
    type: "website",
    locale: "es_ES",
    url: "https://calculord.com/calculadora-coste-total-empresa",
  },
  alternates: {
    canonical: "https://calculord.com/calculadora-coste-total-empresa",
  },
}

export default function CosteEmpresaPage() {
  return (
    <>
      <Breadcrumbs currentPage="Calculadora Coste Empresa" />

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Calculadora de Coste de Empleado 2025
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre el coste total real de un trabajador para tu empresa. Planifica tus presupuestos y contrataciones
              con datos precisos y actualizados.
            </p>
          </div>
        </div>
      </section>

      <section id="calculadora-section" className="py-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CalculadoraCosteTotalEmpresa />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Entendiendo el Coste de un Trabajador</h2>
            <p className="mt-3 text-lg text-gray-600">
              El salario bruto es solo el principio. El coste real para la empresa incluye importantes cotizaciones a la
              Seguridad Social.
            </p>
          </div>
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p>
              Contratar a un empleado es una de las decisiones más importantes para cualquier negocio. Sin embargo,
              muchos empresarios se centran únicamente en el salario bruto pactado, sin tener en cuenta el panorama
              completo. El <strong>coste total de un empleado</strong>, a menudo llamado "coste empresa", es una cifra
              significativamente mayor que incluye las aportaciones que la empresa está obligada a realizar a la
              Seguridad Social en nombre del trabajador.
            </p>
            <p>
              Estas cotizaciones son esenciales, ya que financian prestaciones clave como la sanidad pública, las
              pensiones, el seguro de desempleo y la formación profesional. Para la empresa, representan un coste
              adicional que, por lo general, <strong>supone entre un 30% y un 37% sobre el salario bruto</strong> del
              empleado.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 pt-4">Desglose de las Cotizaciones Empresariales</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Contingencias Comunes (23.6%):</strong> Es la partida más grande. Cubre la atención sanitaria
                por enfermedad común o accidente no laboral, y las futuras pensiones de jubilación.
              </li>
              <li>
                <strong>Desempleo:</strong> El porcentaje varía según el tipo de contrato. Para un{" "}
                <strong>contrato indefinido es del 5.5%</strong>, mientras que para un{" "}
                <strong>contrato temporal asciende al 6.7%</strong>. Este fondo paga las prestaciones por desempleo (el
                paro).
              </li>
              <li>
                <strong>Formación Profesional (0.6%):</strong> Financia cursos y programas de formación para mejorar las
                competencias de los trabajadores.
              </li>
              <li>
                <strong>FOGASA (0.2%):</strong> El Fondo de Garantía Salarial asegura que los trabajadores cobren sus
                salarios e indemnizaciones en caso de insolvencia o quiebra de la empresa.
              </li>
            </ul>
            <p>
              Nuestra calculadora tiene en cuenta todos estos porcentajes para darte una cifra exacta y fiable del coste
              total, permitiéndote tomar decisiones financieras informadas y evitar sorpresas en tu planificación de
              recursos humanos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8 text-blue-600" />
              Preguntas Frecuentes (FAQ)
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
                temporal, la empresa paga un 6.7% del salario bruto, mientras que para un contrato indefinido, paga un
                5.5%. Esta diferencia está diseñada para incentivar la contratación estable y penalizar la temporalidad.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                ¿Esta calculadora incluye pagas extras, dietas o bonus?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                No. La calculadora se centra en el coste fijo derivado del salario bruto anual y las cotizaciones
                obligatorias. Conceptos como pagas por objetivos, dietas, gastos de transporte o salario en especie
                (coche de empresa, seguro médico) son costes adicionales que no están incluidos y deben ser considerados
                aparte en tu presupuesto. Las pagas extras sí están incluidas si el salario que introduces es el "bruto
                anual", ya que este concepto ya las engloba.
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
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-white border-t">
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
