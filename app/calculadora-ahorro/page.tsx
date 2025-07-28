import type { Metadata } from "next"
import Link from "next/link"
import {
  Calculator,
  ArrowLeft,
  CheckCircle,
  Star,
  PiggyBank,
  TrendingUp,
  Target,
  Percent,
  Calendar,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CalculadoraAhorro from "./CalculadoraAhorro"

export const metadata: Metadata = {
  title: "🔥 Calculadora Ahorro 2025 | Interés Compuesto + Objetivos Financieros | Calculord",
  description:
    "✅ Planifica tus AHORROS y calcula cuánto necesitas para alcanzar objetivos financieros 2025. 📊 Interés compuesto + proyección temporal detallada. 💰 Metas de ahorro realistas. 🆓 Herramienta gratuita.",
  keywords: [
    "calculadora ahorro 2025",
    "planificación financiera",
    "interés compuesto calculadora",
    "objetivos ahorro financieros",
    "ahorro mensual planificar",
    "calculadora financiera ahorro",
    "metas financieras ahorro",
    "proyección ahorro temporal",
    "ahorro jubilación cálculo",
    "fondo emergencia ahorro",
    "ahorro vivienda casa",
    "educación hijos ahorro",
    "vacaciones ahorro planificar",
    "inversiones futuras ahorro",
    "calculadora interés compuesto",
    "ahorro sistemático mensual",
    "planificar futuro financiero",
    "herramientas ahorro gratuitas",
    "simulador ahorro España",
    "finanzas personales ahorro",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com/calculadora-ahorro",
  },
  openGraph: {
    title: "🔥 Calculadora Ahorro 2025 | Interés Compuesto + Objetivos Financieros | Calculord",
    description:
      "✅ Planifica AHORROS y calcula objetivos financieros. 📊 Interés compuesto + proyección temporal. 💰 Metas realistas. 🆓",
    url: "https://calculord.com/calculadora-ahorro",
    siteName: "Calculord",
    images: [
      {
        url: "/og-calculadora-ahorro.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Ahorro 2025 - Planificación Financiera",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🔥 Calculadora Ahorro 2025 | Interés Compuesto + Objetivos",
    description: "✅ Planifica AHORROS y objetivos financieros. Interés compuesto + proyección temporal. 🆓",
    images: ["/og-calculadora-ahorro.jpg"],
    creator: "@calculord",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de Ahorro 2025",
  description:
    "Calculadora gratuita para planificar ahorros y calcular objetivos financieros con interés compuesto y proyección temporal.",
  url: "https://calculord.com/calculadora-ahorro",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Objetivos de ahorro",
    "Interés compuesto",
    "Proyección temporal",
    "Aportaciones mensuales",
    "Diferentes frecuencias",
    "Tabla año a año",
    "Planificación financiera",
  ],
  creator: {
    "@type": "Organization",
    name: "Calculord",
  },
  dateModified: "2025-01-28",
  inLanguage: "es-ES",
  isAccessibleForFree: true,
}

export default function CalculadoraAhorroPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Calculord</span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <ArrowLeft className="h-4 w-4" />
                <span>Volver al inicio</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <PiggyBank className="h-10 w-10 text-teal-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculadora de Ahorro
            <span className="block text-teal-600">2025</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Planifica tus ahorros y calcula cuánto necesitas ahorrar para alcanzar tus objetivos financieros. Incluye
            interés compuesto y proyección temporal detallada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
              <Calculator className="mr-2 h-5 w-5" />
              Calcular Ahora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 bg-transparent border-teal-600 text-teal-600 hover:bg-teal-50"
            >
              Ver Ejemplo
            </Button>
          </div>
        </div>
      </section>

      {/* ¿Por qué usar nuestra calculadora? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué usar nuestra calculadora de ahorro?</h2>
            <p className="text-xl text-gray-600">Herramienta precisa para planificar tus finanzas personales</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Objetivos de Ahorro</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Define y alcanza tus metas financieras con cálculos precisos y proyecciones realistas
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Percent className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Interés Compuesto</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Visualiza cómo crece tu dinero con el poder del interés compuesto y diferentes frecuencias
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Proyección Temporal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Proyección detallada año a año con desglose de aportaciones e intereses generados
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculadora */}
      <CalculadoraAhorro />

      {/* Perfecto para */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfecto para planificar tu futuro financiero</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Ahorro para la jubilación</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Fondo de emergencia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Compra de vivienda</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Educación de los hijos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Vacaciones y viajes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Inversiones futuras</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-16 w-16 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Planificación 2025</h3>
              <p className="text-gray-600 mb-6">
                Actualizada con las mejores tasas de interés y productos de ahorro disponibles en 2025
              </p>
              <div className="text-sm text-gray-500">Datos y tasas de referencia actualizados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo que dicen nuestros usuarios</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Me ayudó a planificar mi jubilación de forma realista. Los cálculos son muy precisos y la proyección
                  año a año es excelente."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">María González</p>
                  <p className="text-sm text-gray-500">Asesora financiera</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Perfecta para calcular cuánto necesito ahorrar cada mes. La uso para hacer presupuestos familiares."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Carlos Ruiz</p>
                  <p className="text-sm text-gray-500">Padre de familia</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Me ayuda a entender exactamente cuánto tengo que ahorrar cada mes. Muy útil y fácil de usar."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Ana Martín</p>
                  <p className="text-sm text-gray-500">Trabajadora autónoma</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculadoras Relacionadas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculadoras Financieras Relacionadas</h2>
            <p className="text-xl text-gray-600">Otras herramientas financieras que te pueden interesar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg">Calculadora de Hipoteca</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Calcula tu cuota mensual, intereses totales y tabla de amortización para tu hipoteca.
                </CardDescription>
                <Link href="/calculadora-hipoteca">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Calcular Hipoteca</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">Calculadora de Inversión</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Calcula el rendimiento de tus inversiones y compara diferentes opciones de inversión.
                </CardDescription>
                <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed">
                  Próximamente
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg">Calculadora de Jubilación</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Planifica tu jubilación y calcula cuánto necesitas ahorrar para mantener tu nivel de vida.
                </CardDescription>
                <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed">
                  Próximamente
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesitas asesoramiento financiero personalizado?</h2>
          <p className="text-xl mb-8 opacity-90">
            Calcula también los servicios de asesores financieros especializados
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
            Asesoramiento Financiero →
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Calculord</span>
              </div>
              <p className="text-gray-400">
                Calculadoras financieras profesionales actualizadas con la normativa 2025.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Calculadoras Financieras</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/calculadora-ahorro" className="hover:text-white">
                    Calculadora de Ahorro
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-hipoteca" className="hover:text-white">
                    Calculadora de Hipoteca
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500">Calculadora de Inversión</span>
                </li>
                <li>
                  <span className="text-gray-500">Calculadora de Jubilación</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Calculadoras Laborales</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/calculadora-cotizaciones-seguridad-social" className="hover:text-white">
                    Cotizaciones SS
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-salario-por-horas" className="hover:text-white">
                    Salario por Horas
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-despidos" className="hover:text-white">
                    Despidos
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-nomina" className="hover:text-white">
                    Nómina Completa
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Términos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Calculord. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
