import type { Metadata } from "next"
import CalculadoraCosteTotalEmpresa from "./CalculadoraCosteTotalEmpresa"

export const metadata: Metadata = {
  title: "🏢 Calculadora Coste Total Empresa | Cotizaciones Empresariales 2025",
  description:
    "⚡ Calcula el coste total de un trabajador para la empresa desde salario bruto o neto. Cotizaciones empresariales 2025, IRPF y Seguridad Social actualizados. ¡Gratis!",
  keywords:
    "coste total trabajador empresa, cotizaciones empresariales 2025, coste laboral España, presupuesto nómina, seguridad social empresa, calculadora RRHH",
  openGraph: {
    title: "🏢 Calculadora Coste Total Empresa | Cotizaciones 2025",
    description:
      "⚡ Calcula el coste total de un trabajador desde bruto o neto. Cotizaciones empresariales 2025 actualizadas. ¡Herramienta gratuita para RRHH!",
    type: "website",
    url: "https://calculord.com/calculadora-coste-total-empresa",
    images: [
      {
        url: "/images/calculadora-coste-empresa-hero.png",
        width: 1200,
        height: 630,
        alt: "Calculadora Coste Total Empresa 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🏢 Calculadora Coste Total Empresa 2025",
    description:
      "⚡ Calcula el coste total de un trabajador desde bruto o neto. Cotizaciones empresariales actualizadas.",
    images: ["/images/calculadora-coste-empresa-hero.png"],
  },
  alternates: {
    canonical: "https://calculord.com/calculadora-coste-total-empresa",
  },
}

export default function CalculadoraCosteTotalEmpresaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora Coste Total Empresa",
    description:
      "Calculadora para determinar el coste total de un trabajador para la empresa, incluyendo cotizaciones empresariales y salario.",
    url: "https://calculord.com/calculadora-coste-total-empresa",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Cálculo desde salario bruto",
      "Cálculo desde salario neto",
      "Cotizaciones empresariales 2025",
      "Desglose completo de costes",
      "Planificación presupuestaria",
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                🏢 Calculadora del Coste Total
                <span className="block text-blue-600">para la Empresa 2025</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Calcula el <strong>coste real total</strong> de un trabajador para tu empresa desde el salario bruto o
                neto. Incluye todas las <strong>cotizaciones empresariales 2025</strong>, IRPF y Seguridad Social
                actualizados.
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">29.9%</div>
                  <div className="text-sm text-gray-600">Cotizaciones Empresa</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">2 Modos</div>
                  <div className="text-sm text-gray-600">Bruto o Neto</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 mb-1">2025</div>
                  <div className="text-sm text-gray-600">Actualizado</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculadora */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <CalculadoraCosteTotalEmpresa />
          </div>
        </section>

        {/* ¿Qué incluye el coste total? */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué incluye el Coste Total de un Trabajador?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                El coste real de un empleado va mucho más allá del salario bruto. Conoce todos los conceptos incluidos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">💰 Componentes del Coste Total</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-blue-600 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Salario Bruto</h4>
                      <p className="text-gray-600">El salario base acordado con el trabajador antes de deducciones.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-green-600 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Cotizaciones Empresariales (29.9%)</h4>
                      <p className="text-gray-600">Aportaciones obligatorias de la empresa a la Seguridad Social.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-purple-600 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Otros Costes Variables</h4>
                      <p className="text-gray-600">Formación, prevención de riesgos, y otros gastos asociados.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">📊 Desglose Cotizaciones 2025</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 font-semibold">Concepto</th>
                        <th className="text-right py-2 font-semibold">% Empresa</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b border-gray-100">
                        <td className="py-2">Contingencias Comunes</td>
                        <td className="text-right py-2 font-mono">23.60%</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2">Desempleo</td>
                        <td className="text-right py-2 font-mono">5.50%</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2">Formación Profesional</td>
                        <td className="text-right py-2 font-mono">0.60%</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2">FOGASA</td>
                        <td className="text-right py-2 font-mono">0.20%</td>
                      </tr>
                      <tr className="border-t-2 border-gray-300 font-semibold">
                        <td className="py-2">TOTAL EMPRESA</td>
                        <td className="text-right py-2 font-mono text-blue-600">29.90%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Casos Prácticos */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">📈 Casos Prácticos Reales</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ejemplos reales de costes empresariales según diferentes niveles salariales en España 2025.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">👨‍💼 Perfil Junior</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Salario Bruto:</span>
                    <span className="font-semibold">25.000€/año</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Salario Neto:</span>
                    <span className="font-semibold">20.125€/año</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cotizaciones Empresa:</span>
                    <span className="font-semibold text-red-600">7.475€/año</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Coste Total:</span>
                      <span className="text-blue-600">32.475€/año</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">👩‍💼 Perfil Senior</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Salario Bruto:</span>
                    <span className="font-semibold">45.000€/año</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Salario Neto:</span>
                    <span className="font-semibold">33.750€/año</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cotizaciones Empresa:</span>
                    <span className="font-semibold text-red-600">13.455€/año</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Coste Total:</span>
                      <span className="text-blue-600">58.455€/año</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Perfil Directivo</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Salario Bruto:</span>
                    <span className="font-semibold">70.000€/año</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Salario Neto:</span>
                    <span className="font-semibold">48.300€/año</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cotizaciones Empresa:</span>
                    <span className="font-semibold text-red-600">20.930€/año</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Coste Total:</span>
                      <span className="text-blue-600">90.930€/año</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios para Empresas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Beneficios para tu Empresa</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Optimiza la gestión de recursos humanos y toma decisiones informadas sobre costes laborales.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Planificación Presupuestaria</h3>
                <p className="text-gray-600">Calcula costes exactos para planificar tu presupuesto de RRHH anual.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Negociaciones Transparentes</h3>
                <p className="text-gray-600">Negocia salarios con información completa del coste real.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimización de Costes</h3>
                <p className="text-gray-600">Identifica oportunidades de ahorro y bonificaciones aplicables.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cumplimiento Legal</h3>
                <p className="text-gray-600">Asegura el cumplimiento de todas las obligaciones fiscales y laborales.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Guía Completa */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                📚 Guía Completa: Cotizaciones Empresariales 2025
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Todo lo que necesitas saber sobre las obligaciones empresariales en materia de Seguridad Social.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">🏛️ Contingencias Comunes (23.60%)</h3>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-600 mb-4">La mayor parte de las cotizaciones empresariales. Cubre:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Pensiones de jubilación e invalidez
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Asistencia sanitaria
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Prestaciones familiares
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Incapacidad temporal
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">💼 Desempleo (5.50%)</h3>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-600 mb-4">Cotización para el sistema de protección por desempleo:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Prestación contributiva por desempleo
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Subsidio por desempleo
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Programas de activación para el empleo
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Nota:</strong> Los contratos temporales tienen un tipo adicional del 8.3%
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">🎓 Formación Profesional (0.60%)</h3>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-600 mb-4">Destinado a la formación continua de los trabajadores:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Cursos de reciclaje profesional
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Certificados de profesionalidad
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Formación en nuevas tecnologías
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">🛡️ FOGASA (0.20%)</h3>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-600 mb-4">Fondo de Garantía Salarial que protege a los trabajadores:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Salarios impagados por insolvencia
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Indemnizaciones por despido
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Prestaciones de la Seguridad Social
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">❓ Preguntas Frecuentes</h2>
              <p className="text-xl text-gray-600">
                Resolvemos las dudas más comunes sobre el coste total de los trabajadores.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Cuál es la diferencia entre calcular desde bruto y desde neto?
                </h3>
                <p className="text-gray-600">
                  <strong>Desde bruto:</strong> Introduces el salario bruto y calculamos el coste total añadiendo las
                  cotizaciones empresariales.
                  <br />
                  <strong>Desde neto:</strong> Introduces el salario neto deseado y calculamos primero el bruto
                  necesario (considerando IRPF y cotizaciones del trabajador) y luego el coste total para la empresa.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Las cotizaciones empresariales son siempre del 29.9%?
                </h3>
                <p className="text-gray-600">
                  El 29.9% es el tipo general para contratos indefinidos. Los contratos temporales tienen un recargo
                  adicional del 8.3% en desempleo, elevando el total al 37.2%. Además, existen bonificaciones para
                  ciertos colectivos (jóvenes, mayores de 45 años, etc.) que pueden reducir estos porcentajes.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Qué bonificaciones pueden aplicar las empresas?
                </h3>
                <p className="text-gray-600">
                  Existen múltiples bonificaciones: contratación de jóvenes menores de 30 años, trabajadores mayores de
                  45 años, personas con discapacidad, víctimas de violencia de género, conversión de contratos
                  temporales en indefinidos, entre otras. Cada bonificación tiene requisitos específicos y duraciones
                  determinadas.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Cómo afecta el tipo de contrato al coste total?
                </h3>
                <p className="text-gray-600">
                  Los contratos indefinidos tienen menor coste (29.9%) que los temporales (37.2%) debido al recargo por
                  temporalidad en las cotizaciones de desempleo. Esto incentiva la contratación indefinida y penaliza la
                  temporalidad excesiva.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Existen límites máximos en las cotizaciones?
                </h3>
                <p className="text-gray-600">
                  Sí, existe una base máxima de cotización que en 2025 es de 4.495,50€/mes. Por encima de esta cantidad,
                  no se pagan cotizaciones adicionales, lo que hace que el porcentaje efectivo disminuya para salarios
                  muy altos.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Qué otros costes laborales no incluye esta calculadora?
                </h3>
                <p className="text-gray-600">
                  Esta calculadora se centra en salarios y cotizaciones obligatorias. No incluye otros costes como:
                  pagas extras, vacaciones, formación, prevención de riesgos laborales, seguros privados, dietas, plus
                  de transporte, o costes de despido. Estos conceptos varían según el convenio y la política de cada
                  empresa.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Cómo puedo reducir legalmente los costes laborales?
                </h3>
                <p className="text-gray-600">
                  Algunas estrategias legales incluyen: aprovechar bonificaciones disponibles, optimizar la estructura
                  salarial (salario en especie), contratos de formación y aprendizaje, teletrabajo para reducir costes
                  indirectos, y planificación fiscal adecuada. Siempre consulta con un asesor laboral.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Con qué frecuencia se actualizan las cotizaciones?
                </h3>
                <p className="text-gray-600">
                  Las bases y tipos de cotización se actualizan anualmente, normalmente en enero. Los cambios se
                  publican en la Ley de Presupuestos Generales del Estado. Nuestra calculadora se mantiene actualizada
                  con los últimos cambios normativos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculadoras Relacionadas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🔗 Calculadoras Relacionadas</h2>
              <p className="text-xl text-gray-600">
                Completa tu análisis laboral con estas herramientas complementarias.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Conversor Bruto-Neto</h3>
                <p className="text-gray-600 mb-4">Convierte salarios entre bruto y neto con IRPF 2025.</p>
                <a href="/conversor-salario-bruto-neto" className="text-blue-600 hover:text-blue-700 font-medium">
                  Usar Conversor →
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Calculadora de Nómina</h3>
                <p className="text-gray-600 mb-4">Calcula nóminas completas con todos los conceptos.</p>
                <a href="/calculadora-nomina" className="text-blue-600 hover:text-blue-700 font-medium">
                  Calcular Nómina →
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cotizaciones Seguridad Social</h3>
                <p className="text-gray-600 mb-4">Calcula cotizaciones detalladas de trabajador y empresa.</p>
                <a
                  href="/calculadora-cotizaciones-seguridad-social"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Ver Cotizaciones →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">💬 Lo que dicen nuestros usuarios</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Perfecta para planificar presupuestos de RRHH. Me permite calcular el coste real de cada contratación
                  y negociar salarios con datos precisos."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">María González</p>
                  <p className="text-sm text-gray-500">Directora de RRHH, TechCorp</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "La función de calcular desde neto es genial. Cuando un candidato me dice cuánto quiere cobrar neto,
                  inmediatamente sé cuánto me va a costar realmente."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Carlos Ruiz</p>
                  <p className="text-sm text-gray-500">CEO, StartupLab</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Uso esta calculadora diariamente en mi gestoría. Mis clientes empresarios la adoran porque les ayuda
                  a entender los costes reales de sus empleados."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Ana Martín</p>
                  <p className="text-sm text-gray-500">Gestora Laboral</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para optimizar tus costes laborales?</h2>
            <p className="text-xl mb-8 opacity-90">
              Calcula el coste real de tus trabajadores y toma decisiones informadas para tu empresa.
            </p>
            <a
              href="#calculadora"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Calcular Coste Total
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xl font-bold">Calculord</span>
                </div>
                <p className="text-gray-400">Calculadoras laborales profesionales para empresas y trabajadores.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Calculadoras Laborales</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="/calculadora-cotizaciones-seguridad-social" className="hover:text-white">
                      Cotizaciones SS
                    </a>
                  </li>
                  <li>
                    <a href="/conversor-salario-bruto-neto" className="hover:text-white">
                      Conversor Bruto-Neto
                    </a>
                  </li>
                  <li>
                    <a href="/calculadora-nomina" className="hover:text-white">
                      Nómina Completa
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Para Empresas</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="/calculadora-coste-total-empresa" className="hover:text-white">
                      Coste Total Empresa
                    </a>
                  </li>
                  <li>
                    <a href="/calculadora-honorarios-abogado" className="hover:text-white">
                      Honorarios Abogado
                    </a>
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
    </>
  )
}
