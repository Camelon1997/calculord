import type { Metadata } from "next"
import Link from "next/link"
import { Calculator, TrendingUp, Users, Home, ArrowRight, CheckCircle, BookOpen, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CalculadoraIRPF from "./CalculadoraIRPF"

export const metadata: Metadata = {
  title: "Calculadora IRPF 2025 | Impuesto sobre la Renta con Tramos Actualizados",
  description:
    "Calcula tu IRPF 2025 con tramos actualizados por Comunidad Autónoma. Incluye deducciones, mínimos personales y simulación completa de la declaración de la renta.",
  keywords: [
    "calculadora IRPF",
    "tramos IRPF 2025",
    "impuesto sobre la renta",
    "declaración renta",
    "IRPF por comunidades autónomas",
    "calculadora impuesto renta",
    "tramos impositivos",
    "deducciones IRPF",
    "tipo marginal IRPF",
    "simulador declaración renta",
  ],
  openGraph: {
    title: "Calculadora IRPF 2025 | Impuesto sobre la Renta",
    description: "Calcula tu IRPF 2025 con tramos actualizados por CCAA. Simulación completa y gratuita.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora IRPF 2025 | Calculord",
    description: "Calcula tu Impuesto sobre la Renta con los tramos 2025 actualizados",
  },
  alternates: {
    canonical: "https://calculord.com/calculadora-irpf",
  },
}

const tramosIRPFData = [
  { desde: "0€", hasta: "12.450€", estatal: "19%", ejemplo: "Madrid 19,5%" },
  { desde: "12.450€", hasta: "20.200€", estatal: "24%", ejemplo: "Madrid 25,5%" },
  { desde: "20.200€", hasta: "35.200€", estatal: "30%", ejemplo: "Madrid 31,9%" },
  { desde: "35.200€", hasta: "60.000€", estatal: "37%", ejemplo: "Madrid 39,1%" },
  { desde: "60.000€", hasta: "300.000€", estatal: "47%", ejemplo: "Madrid 49,3%" },
  { desde: "300.000€", hasta: "∞", estatal: "47%", ejemplo: "Madrid 49,3%" },
]

const deduccionesData = [
  {
    icon: Home,
    title: "Vivienda Habitual",
    description: "Deducción por compra de vivienda habitual para contratos anteriores a 2013",
    amount: "Hasta 9.040€/año",
  },
  {
    icon: Users,
    title: "Familia Numerosa",
    description: "Deducciones por familia numerosa general o especial",
    amount: "1.200€ - 2.400€",
  },
  {
    icon: BookOpen,
    title: "Educación",
    description: "Gastos de educación, libros y material escolar (según CCAA)",
    amount: "Variable por CCAA",
  },
  {
    icon: TrendingUp,
    title: "Planes de Pensiones",
    description: "Aportaciones a planes de pensiones individuales",
    amount: "Hasta 1.500€/año",
  },
]

const faqData = [
  {
    question: "¿Cómo se calculan los tramos del IRPF?",
    answer:
      "Los tramos del IRPF se aplican de forma progresiva. Esto significa que cada tramo de ingresos tiene un tipo impositivo diferente, y solo se aplica ese tipo a la parte de ingresos que corresponde a ese tramo. Por ejemplo, si ganas 25.000€, los primeros 12.450€ tributan al 19%, los siguientes 7.750€ al 24%, y los últimos 4.800€ al 30%.",
  },
  {
    question: "¿Qué diferencia hay entre retención y cuota del IRPF?",
    answer:
      "La retención es el dinero que te descuentan mensualmente de tu nómina como pago a cuenta del IRPF. La cuota es el impuesto real que debes pagar según tu declaración anual. Si las retenciones son mayores que la cuota, te devuelven dinero. Si son menores, debes pagar la diferencia.",
  },
  {
    question: "¿Por qué cada Comunidad Autónoma tiene tramos diferentes?",
    answer:
      "El IRPF se compone de una parte estatal (igual para todos) y una parte autonómica que cada Comunidad Autónoma puede modificar. Por eso, aunque los tramos estatales son iguales, el tipo total puede variar según tu comunidad de residencia.",
  },
  {
    question: "¿Qué deducciones puedo aplicar en mi declaración?",
    answer:
      "Las deducciones más comunes incluyen: gastos de vivienda habitual (contratos pre-2013), familia numerosa, gastos de educación, aportaciones a planes de pensiones, donativos a ONGs, y deducciones específicas de cada Comunidad Autónoma. Cada una tiene sus límites y requisitos.",
  },
  {
    question: "¿Cuándo debo hacer la declaración de la renta?",
    answer:
      "La campaña de la renta suele ser de abril a junio. Estás obligado a declarar si tus ingresos superan 22.000€ anuales (14.000€ si tienes más de un pagador), aunque en muchos casos puede ser beneficioso hacerla aunque no sea obligatorio.",
  },
]

const comunidadesData = [
  {
    name: "Madrid",
    description: "Tipos autonómicos más bajos de España",
    ejemplo: "Salario 40.000€: IRPF total ~22,8%",
  },
  {
    name: "Cataluña",
    description: "Tipos autonómicos elevados con tramos adicionales",
    ejemplo: "Salario 40.000€: IRPF total ~26,2%",
  },
  {
    name: "Andalucía",
    description: "Tipos intermedios con deducciones específicas",
    ejemplo: "Salario 40.000€: IRPF total ~25,1%",
  },
]

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora IRPF 2025",
  description: "Calculadora gratuita del Impuesto sobre la Renta de las Personas Físicas con tramos actualizados 2025",
  url: "https://calculord.com/calculadora-irpf",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Cálculo IRPF por tramos 2025",
    "Todas las Comunidades Autónomas",
    "Deducciones personales y familiares",
    "Tipo medio y marginal",
    "Simulación completa gratuita",
  ],
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

const howToStructuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cómo calcular el IRPF 2025",
  description: "Guía paso a paso para calcular tu Impuesto sobre la Renta",
  step: [
    {
      "@type": "HowToStep",
      name: "Introduce tus ingresos anuales",
      text: "Ingresa el total de tus ingresos brutos anuales",
    },
    {
      "@type": "HowToStep",
      name: "Selecciona tu Comunidad Autónoma",
      text: "Elige tu comunidad de residencia para aplicar los tramos autonómicos correctos",
    },
    {
      "@type": "HowToStep",
      name: "Indica tu situación familiar",
      text: "Especifica si tienes hijos, tu edad y situación de discapacidad para aplicar los mínimos correspondientes",
    },
    {
      "@type": "HowToStep",
      name: "Obtén tu cálculo detallado",
      text: "Revisa el desglose completo con cuota estatal, autonómica y tipos aplicados",
    },
  ],
}

export default function CalculadoraIRPFPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToStructuredData) }} />

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Calculord</span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <Home className="h-4 w-4" />
                <span>Todas las Calculadoras</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Calculadora IRPF</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="bg-blue-600 p-4 rounded-full">
                <Calculator className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Calculadora IRPF 2025</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calcula tu Impuesto sobre la Renta con los tramos actualizados de 2025. Incluye todas las Comunidades
              Autónomas, deducciones personales y simulación completa.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Tramos IRPF 2025 actualizados</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Todas las Comunidades Autónomas</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Deducciones personales y familiares</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Cálculo detallado por tramos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora Principal */}
      <section className="py-16">
        <CalculadoraIRPF />
      </section>

      {/* Sección Educativa - ¿Qué es el IRPF? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué es el IRPF y cómo se calcula?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El Impuesto sobre la Renta de las Personas Físicas es un tributo progresivo que grava los ingresos de los
              contribuyentes españoles.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span>Definición del IRPF</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    El IRPF es un impuesto <strong>progresivo</strong> que se aplica sobre los ingresos de las personas
                    físicas residentes en España. Esto significa que a mayor renta, mayor porcentaje de impuestos se
                    paga.
                  </p>
                  <p className="text-gray-600">Se compone de dos partes:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      <strong>Tramo Estatal:</strong> Igual para toda España
                    </li>
                    <li>
                      <strong>Tramo Autonómico:</strong> Varía según la Comunidad Autónoma
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span>Sistema Progresivo</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    El sistema progresivo significa que no pagas el mismo porcentaje sobre todos tus ingresos. Los
                    primeros euros tributan menos que los últimos.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Ejemplo:</strong> Si ganas 30.000€, los primeros 12.450€ tributan al 19%, los siguientes
                      7.750€ al 24%, y los últimos 9.800€ al 30%.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Tramos IRPF Estatal 2025</CardTitle>
                  <CardDescription>Tipos impositivos de la parte estatal (aplicables en toda España)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Desde</th>
                          <th className="text-left py-2">Hasta</th>
                          <th className="text-right py-2">Tipo Estatal</th>
                          <th className="text-right py-2">Ejemplo Madrid</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tramosIRPFData.map((tramo, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-2 font-medium">{tramo.desde}</td>
                            <td className="py-2">{tramo.hasta}</td>
                            <td className="py-2 text-right font-semibold text-blue-600">{tramo.estatal}</td>
                            <td className="py-2 text-right text-gray-600">{tramo.ejemplo}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    * El ejemplo de Madrid incluye los tramos autonómicos de la Comunidad de Madrid
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Comunidades Autónomas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IRPF por Comunidad Autónoma 2025</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada Comunidad Autónoma puede establecer sus propios tramos autonómicos, lo que hace que el IRPF total
              varíe según tu lugar de residencia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {comunidadesData.map((comunidad, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{comunidad.name}</CardTitle>
                  <CardDescription>{comunidad.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-blue-800">{comunidad.ejemplo}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Nuestra calculadora incluye los tramos específicos de cada Comunidad Autónoma para ofrecerte el cálculo
              más preciso posible.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Calculator className="mr-2 h-4 w-4" />
              Calcular mi IRPF
            </Button>
          </div>
        </div>
      </section>

      {/* Sección Deducciones */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Principales Deducciones del IRPF 2025</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Las deducciones pueden reducir significativamente tu cuota del IRPF. Conoce las más importantes y cómo
              aplicarlas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deduccionesData.map((deduccion, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <deduccion.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{deduccion.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">{deduccion.description}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="font-semibold text-green-800">{deduccion.amount}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <HelpCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Importante sobre las Deducciones</h3>
                <p className="text-yellow-700 text-sm">
                  Esta calculadora ofrece un cálculo simplificado y no incluye todas las deducciones posibles. Para un
                  cálculo exacto que incluya todas tus deducciones específicas, te recomendamos consultar con un asesor
                  fiscal o utilizar el programa PADRE de la AEAT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes sobre el IRPF</h2>
            <p className="text-xl text-gray-600">Resolvemos las dudas más comunes sobre el Impuesto sobre la Renta</p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <HelpCircle className="h-5 w-5 text-blue-600" />
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculadoras Relacionadas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Otras Calculadoras Laborales</h2>
            <p className="text-xl text-gray-600">Completa tu planificación fiscal con nuestras otras herramientas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Calculator className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <CardTitle className="text-xl">Calculadora Nómina</CardTitle>
                <CardDescription>
                  Calcula tu salario neto mensual con IRPF, cotizaciones sociales y deducciones aplicables
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Cálculo IRPF y cotizaciones</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Desglose detallado mensual</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Todas las CCAA incluidas</span>
                  </li>
                </ul>
                <Link href="/calculadora-nomina">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Calcular Nómina
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <CardTitle className="text-xl">Conversor Salario</CardTitle>
                <CardDescription>
                  Convierte fácilmente entre salario bruto y neto con cálculos precisos y actualizados
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Conversión bidireccional</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Cálculo instantáneo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Tramos IRPF 2025</span>
                  </li>
                </ul>
                <Link href="/conversor-salario-bruto-neto">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Convertir Salario
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <CardTitle className="text-xl">Cotizaciones SS</CardTitle>
                <CardDescription>
                  Calcula las cotizaciones a la Seguridad Social para empleados y autónomos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Empleados y autónomos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Bases y tipos 2025</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Desglose por conceptos</span>
                  </li>
                </ul>
                <Link href="/calculadora-cotizaciones-seguridad-social">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Calcular Cotizaciones
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Calculord</span>
              </div>
              <p className="text-gray-400 text-sm">
                Calculadoras laborales y financieras gratuitas para profesionales y particulares.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Calculadoras</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/calculadora-nomina" className="hover:text-white">
                    Nómina
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-paro" className="hover:text-white">
                    Paro
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-despidos" className="hover:text-white">
                    Despidos
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-vacaciones" className="hover:text-white">
                    Vacaciones
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Guías
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Calculord. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
