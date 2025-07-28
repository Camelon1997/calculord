import type { Metadata } from "next"
import CalculadoraNomina from "./CalculadoraNomina"

export const metadata: Metadata = {
  title: "🔥 Calculadora Nómina 2025 | Salario Neto + IRPF + Cotizaciones SS | Calculord",
  description:
    "✅ Calcula tu SALARIO NETO exacto con IRPF, cotizaciones SS y deducciones 2025. 📊 Tramos fiscales actualizados. 💰 Nómina completa desglosada. 🆓 Herramienta gratuita oficial España.",
  keywords: [
    "calculadora nomina 2025",
    "salario neto calculadora",
    "IRPF 2025 tramos",
    "cotizaciones seguridad social",
    "deducciones nomina 2025",
    "tramos IRPF actualizados",
    "calculadora sueldo neto",
    "nómina completa España",
    "salario bruto neto",
    "retenciones IRPF 2025",
    "cotización trabajador 6.35",
    "desglose nómina completo",
    "calculadora fiscal España",
    "impuestos salario 2025",
    "pagas extra IRPF",
    "deducciones personales",
    "mínimo personal familiar",
    "calculadora laboral nómina",
    "herramientas RRHH nómina",
    "simulador nómina gratuito",
  ].join(", "),
  openGraph: {
    title: "🔥 Calculadora Nómina 2025 | Salario Neto + IRPF + Cotizaciones",
    description: "✅ Calcula salario neto exacto con IRPF, cotizaciones SS y deducciones actualizadas 2025. 🆓",
    type: "website",
    url: "https://calculord.com/calculadora-nomina",
    locale: "es_ES",
    images: [
      {
        url: "/og-calculadora-nomina.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Nómina 2025 - Salario Neto con IRPF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🔥 Calculadora Nómina 2025 | Salario Neto + IRPF",
    description: "✅ Calcula salario neto exacto con IRPF, cotizaciones SS y deducciones actualizadas 2025. 🆓",
    images: ["/og-calculadora-nomina.jpg"],
    creator: "@calculord",
  },
  alternates: {
    canonical: "https://calculord.com/calculadora-nomina",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de Nómina 2025",
  description:
    "Calculadora gratuita para calcular nóminas completas con IRPF, cotizaciones a la Seguridad Social y todas las deducciones.",
  url: "https://calculord.com/calculadora-nomina",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Cálculo de IRPF por tramos 2025",
    "Cotizaciones a la Seguridad Social",
    "Desglose completo de la nómina",
    "Salario neto exacto",
    "Deducciones personalizables",
    "Exportación de resultados",
  ],
  creator: {
    "@type": "Organization",
    name: "Calculord",
  },
  dateModified: "2025-01-28",
  inLanguage: "es-ES",
  isAccessibleForFree: true,
}

export default function CalculadoraNominaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Calculadora de Nómina 2025</h1>
                  <p className="text-sm text-gray-600">Calcula tu salario neto con IRPF y cotizaciones</p>
                </div>
              </div>
              <a
                href="/"
                className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1"
              >
                <span>← Volver al inicio</span>
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculadora de Nómina Completa 2025</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Calcula tu salario neto exacto con IRPF, cotizaciones a la Seguridad Social y todas las deducciones.
              Genera nóminas completas y precisas según la normativa 2025.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">IRPF 2025</h3>
                <p className="text-sm text-gray-600">Cálculo por tramos actualizado</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Cotizaciones SS</h3>
                <p className="text-sm text-gray-600">Trabajador y empresa</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Desglose Completo</h3>
                <p className="text-sm text-gray-600">Todos los conceptos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <CalculadoraNomina />

        {/* Info Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo funciona la Calculadora de Nómina?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nuestra calculadora utiliza la normativa fiscal y laboral más actualizada para ofrecerte cálculos
                precisos y completos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Introduce tus datos salariales</h3>
                    <p className="text-gray-600 text-sm">
                      Salario bruto mensual, pagas extra, tipo de contrato y situación personal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cálculo automático de IRPF</h3>
                    <p className="text-gray-600 text-sm">
                      Aplicamos los tramos de IRPF 2025 según tu salario anual y situación familiar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cotizaciones a la Seguridad Social</h3>
                    <p className="text-gray-600 text-sm">
                      Calculamos las cotizaciones del trabajador y la empresa según el régimen general.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Deducciones adicionales</h3>
                    <p className="text-gray-600 text-sm">
                      Incluye deducciones por hijos, discapacidad, gastos deducibles y otras circunstancias.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-semibold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Resultado detallado</h3>
                    <p className="text-gray-600 text-sm">
                      Obtén tu salario neto y un desglose completo de todos los conceptos de la nómina.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-semibold text-sm">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Exporta los resultados</h3>
                    <p className="text-gray-600 text-sm">
                      Guarda o imprime el desglose completo de tu nómina para tus registros.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* IRPF Tramos 2025 */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tramos de IRPF 2025</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-medium text-gray-900">Base Liquidable</th>
                      <th className="text-left py-2 font-medium text-gray-900">Tipo Aplicable</th>
                      <th className="text-left py-2 font-medium text-gray-900">Cuota Íntegra</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-2">Hasta 12.450€</td>
                      <td className="py-2">19%</td>
                      <td className="py-2">2.365,50€</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2">12.450€ - 20.200€</td>
                      <td className="py-2">24%</td>
                      <td className="py-2">4.225,50€</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2">20.200€ - 35.200€</td>
                      <td className="py-2">30%</td>
                      <td className="py-2">8.725,50€</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2">35.200€ - 60.000€</td>
                      <td className="py-2">37%</td>
                      <td className="py-2">17.901,50€</td>
                    </tr>
                    <tr>
                      <td className="py-2">Más de 60.000€</td>
                      <td className="py-2">47%</td>
                      <td className="py-2">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Preguntas Frecuentes</h3>
              <div className="space-y-4">
                <details className="bg-gray-50 rounded-lg p-4">
                  <summary className="font-medium text-gray-900 cursor-pointer">
                    ¿Cómo se calcula el IRPF en la nómina?
                  </summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    El IRPF se calcula aplicando los tramos progresivos sobre la base imponible anual, que incluye el
                    salario bruto anual más las pagas extra. Se aplican las deducciones correspondientes según la
                    situación personal y familiar.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-lg p-4">
                  <summary className="font-medium text-gray-900 cursor-pointer">
                    ¿Qué cotizaciones se descuentan de mi salario?
                  </summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    Del salario del trabajador se descuentan: Contingencias Comunes (4,7%), Desempleo (1,55%), Formación
                    Profesional (0,1%). El total de cotizaciones del trabajador es aproximadamente el 6,35% del salario
                    bruto.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-lg p-4">
                  <summary className="font-medium text-gray-900 cursor-pointer">
                    ¿Incluye las pagas extra en el cálculo?
                  </summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    Sí, la calculadora incluye las pagas extra (normalmente 2 al año) para calcular el salario anual
                    total y aplicar correctamente los tramos de IRPF. Puedes especificar si las pagas están prorrateadas
                    o se cobran por separado.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-lg p-4">
                  <summary className="font-medium text-gray-900 cursor-pointer">
                    ¿Qué deducciones puedo aplicar?
                  </summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    Puedes aplicar deducciones por: hijos menores de 25 años, ascendientes mayores de 65 años,
                    discapacidad, gastos deducibles como planes de pensiones, y otras circunstancias personales que
                    reduzcan la base imponible del IRPF.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Related Calculators */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Calculadoras Relacionadas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="/calculadora-cotizaciones-seguridad-social"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Cotizaciones Seguridad Social</h3>
                <p className="text-sm text-gray-600">Calcula las cotizaciones exactas de trabajadores y empresas</p>
              </a>

              <a
                href="/calculadora-salario-por-horas"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border"
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Salario por Horas</h3>
                <p className="text-sm text-gray-600">Calcula tu salario basado en las horas trabajadas</p>
              </a>

              <a
                href="/calculadora-paro"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border"
              >
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Prestación por Desempleo</h3>
                <p className="text-sm text-gray-600">Calcula tu prestación por desempleo y subsidio</p>
              </a>
            </div>

            {/* CTA Abogado */}
            <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-100 rounded-lg p-8 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-9m3 9l3-9"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Problemas con tu Nómina?</h3>
              <p className="text-gray-600 mb-4">
                Si detectas errores en tu nómina o tienes dudas sobre tus derechos laborales, consulta con un abogado
                especializado.
              </p>
              <a
                href="/calculadora-honorarios-abogado"
                className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-9m3 9l3-9"
                  />
                </svg>
                Calcular Honorarios de Abogado
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Calculord. Calculadora de nómina gratuita y actualizada con la normativa fiscal 2025.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
