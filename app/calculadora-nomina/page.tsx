import type { Metadata } from "next"
import { BarChart, ArrowLeftRight, Building2, BookOpen, ArrowDown, TrendingUp, FileSignature } from "lucide-react"
import CalculadoraNomina from "./CalculadoraNomina"
import { RelatedCalculatorCard } from "../components/RelatedCalculatorCard"
import { Breadcrumbs } from "../components/Breadcrumbs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Calculadora de Nómina 2025 - Calcula tu Salario Neto",
  description:
    "Calcula tu salario neto en segundos. Desglose completo de cotizaciones, IRPF y conceptos de nómina. Actualizada 2025. Gratis y sin registro.",
  keywords: [
    "calculadora nomina 2025",
    "calcular nomina",
    "salario neto",
    "calculadora salario neto",
    "bruto a neto",
    "cotizaciones seguridad social",
    "retencion IRPF",
    "nomina españa",
    "desglose nomina",
    "conceptos nomina",
    "entender nomina",
    "leer nomina",
    "optimizar nomina",
    "retribucion flexible",
  ],
  openGraph: {
    title: "Calculadora de Nómina 2025 - Calcula tu Salario Neto | Calculord",
    description:
      "Calcula tu salario neto en segundos con desglose completo de cotizaciones e IRPF. Herramienta actualizada 2025. Gratis.",
    type: "website",
    locale: "es_ES",
    url: "https://calculord.com/calculadora-nomina",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Nómina 2025 - Calcula tu Salario Neto",
    description:
      "Descubre cuánto cobras realmente. Calcula tu nómina con desglose completo de cotizaciones e IRPF 2025.",
  },
  alternates: {
    canonical: "https://calculord.com/calculadora-nomina",
  },
}

export default function CalculadoraNominaPage() {
  return (
    <>
      <Breadcrumbs currentPage="Calculadora de Nómina" />

      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
            Calculadora de Nómina 2025
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre tu <span className="font-semibold text-gray-800">salario neto</span> al céntimo. Nuestra
            herramienta desglosa tu nómina, incluyendo cotizaciones y retenciones, para que sepas a dónde va cada euro.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#calculadora">
              <Button size="lg" className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700">
                <ArrowDown className="mr-2 h-5 w-5" />
                Ir a la Calculadora
              </Button>
            </Link>
            <Link href="#conceptos-clave">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/50">
                <BookOpen className="mr-2 h-5 w-5" />
                Entender mi Nómina
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="calculadora" className="py-16 md:py-20">
        <CalculadoraNomina />
      </section>

      <section id="conceptos-clave" className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Entiende tu Nómina: Conceptos Clave</h2>
            <p className="mt-4 text-lg text-gray-600">
              Tu nómina es más que un número. Te explicamos los conceptos más importantes para que la entiendas a la
              perfección.
            </p>
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">1. Devengos: Todo lo que Suma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Son todas las cantidades que la empresa te paga, la suma de las cuales conforma tu{" "}
                  <strong>salario bruto</strong>. Se dividen en percepciones salariales (Salario Base, Complementos) y
                  no salariales (Dietas, Plus de transporte).
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">2. Deducciones: Todo lo que Resta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Son las cantidades que se descuentan de tu salario bruto para pagar impuestos y cotizaciones. Las
                  principales son:
                </p>
                <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
                  <li>
                    <strong>Aportaciones a la Seguridad Social:</strong> Tu contribución al sistema público. Incluye
                    contingencias comunes (4.70%), desempleo (1.55% o 1.60%) y formación profesional (0.10%).
                  </li>
                  <li>
                    <strong>Retención de IRPF:</strong> Un pago a cuenta del Impuesto sobre la Renta. Su porcentaje
                    varía según tu salario y situación personal.
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">3. Salario Bruto vs. Salario Neto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Es la diferencia fundamental. El <strong>Salario Bruto</strong> es el total de los devengos (antes de
                  deducciones). El <strong>Salario Neto</strong> es lo que realmente recibes en tu cuenta bancaria
                  después de restar las deducciones (Seguridad Social e IRPF).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Cómo Leer tu Nómina: Guía Paso a Paso</h2>
            <p className="mt-4 text-lg text-gray-600">
              Te guiamos a través de las secciones de una nómina estándar para que no se te escape nada.
            </p>
          </div>
          <ol className="space-y-6">
            <li className="flex items-start">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-white font-bold mr-4">
                1
              </span>
              <div>
                <h4 className="text-lg font-semibold">Encabezado</h4>
                <p className="text-gray-600">
                  Aquí encontrarás los datos de la empresa (nombre, CIF, código de cuenta de cotización) y los tuyos
                  (nombre, DNI, nº de afiliación a la SS, grupo profesional).
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-white font-bold mr-4">
                2
              </span>
              <div>
                <h4 className="text-lg font-semibold">Devengos</h4>
                <p className="text-gray-600">
                  El corazón de lo que ganas. Verás el salario base, complementos (antigüedad, nocturnidad), horas extra
                  y la parte proporcional de las pagas extra si están prorrateadas. La suma es tu salario bruto.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-white font-bold mr-4">
                3
              </span>
              <div>
                <h4 className="text-lg font-semibold">Deducciones</h4>
                <p className="text-gray-600">
                  Lo que se te descuenta. Aparecerá el detalle de tus aportaciones a la Seguridad Social y la retención
                  de IRPF.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-white font-bold mr-4">
                4
              </span>
              <div>
                <h4 className="text-lg font-semibold">Líquido Total a Percibir</h4>
                <p className="text-gray-600">
                  ¡La cifra clave! Es el resultado de restar las deducciones a los devengos. Este es tu salario neto, el
                  dinero que ingresará en tu banco.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Optimiza tu Nómina: Paga Menos IRPF Legalmente
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Existen estrategias para reducir tu factura fiscal y aumentar tu salario neto disponible.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-emerald-500" />
                  <span>Retribución Flexible</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pide a tu empresa que parte de tu salario te lo pague en productos o servicios exentos de IRPF, como
                  tickets restaurante, abono transporte, cheques guardería o seguro médico. No pagas impuestos por esa
                  parte, por lo que tu neto aumenta.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSignature className="h-6 w-6 text-blue-500" />
                  <span>Comunica tus Cambios</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Asegúrate de que tu empresa tiene tu situación personal actualizada (hijos, discapacidad, etc.) a
                  través del Modelo 145. Esto ajusta tu IRPF correctamente y evita que te retengan de más (o de menos,
                  evitando sustos en la declaración).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Preguntas Frecuentes sobre la Nómina</h2>
            <p className="mt-4 text-lg text-gray-600">
              Resolvemos las dudas más comunes sobre el cálculo y los componentes de tu salario.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                ¿Cómo afectan las pagas extra a mi nómina?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600">
                Si tienes las pagas extra prorrateadas (12 pagas), tu salario bruto mensual es mayor, pero recibes el
                mismo importe cada mes. Si las tienes separadas (14 pagas), tu nómina mensual es menor, pero recibes dos
                pagas adicionales (normalmente en verano y Navidad). A nivel anual, el salario bruto es el mismo, pero
                la retención de IRPF se ajusta para que el resultado neto anual sea idéntico en ambos casos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                ¿Por qué cambia mi retención de IRPF?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600">
                Tu porcentaje de retención de IRPF puede cambiar por varias razones: un aumento o disminución de sueldo,
                cambios en tu situación familiar (matrimonio, nacimiento de un hijo), un nuevo contrato, o
                regularizaciones que la empresa realiza a mitad de año para ajustar la retención a tu previsión de
                ingresos anuales.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                ¿Qué son las contingencias comunes y profesionales?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600">
                Las <strong>contingencias comunes</strong> cubren situaciones no laborales como una enfermedad común o
                un accidente no laboral. Las <strong>contingencias profesionales</strong> cubren accidentes de trabajo y
                enfermedades profesionales. Ambas son aportaciones a la Seguridad Social, pero la empresa paga una parte
                mucho mayor, especialmente en las profesionales.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                ¿El coste para la empresa es mi salario bruto?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600">
                No, el coste para la empresa es significativamente mayor que tu salario bruto. La empresa debe sumar a
                tu salario bruto sus propias aportaciones a la Seguridad Social, conocidas como "cuota patronal". Esta
                cuota ronda el 30-32% de tu salario bruto e incluye conceptos como contingencias comunes, desempleo,
                FOGASA y formación profesional.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Planificación Salarial Completa</h2>
            <p className="text-xl text-gray-600">
              Usa estas herramientas para entender tu salario desde todas las perspectivas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RelatedCalculatorCard
              icon={
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-orange-600" />
                </div>
              }
              title="Calculadora de IRPF"
              description="Calcula tu IRPF 2025 con tramos actualizados por CCAA y deducciones personales."
              features={["Tramos IRPF 2025 actualizados", "Todas las Comunidades Autónomas", "Deducciones personales"]}
              href="/calculadora-irpf"
              buttonText="Calcular IRPF"
              buttonClassName="bg-orange-600 hover:bg-orange-700"
            />
            <RelatedCalculatorCard
              icon={
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <ArrowLeftRight className="h-6 w-6 text-indigo-600" />
                </div>
              }
              title="Conversor Bruto a Neto"
              description="Convierte tu salario bruto a neto y viceversa con IRPF 2025 y deducciones actualizadas."
              features={["Conversión bidireccional", "IRPF 2025 actualizado", "Ideal para negociación"]}
              href="/conversor-salario-bruto-neto"
              buttonText="Convertir Salario"
              buttonClassName="bg-indigo-600 hover:bg-indigo-700"
            />
            <RelatedCalculatorCard
              icon={
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-emerald-600" />
                </div>
              }
              title="Coste Total Empresa"
              description="Calcula el coste real total de un trabajador para la empresa desde bruto o neto deseado."
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
