import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumbs from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Política de Cookies - Calculord",
  description:
    "Información detallada sobre el uso de cookies en Calculord. Conoce qué cookies utilizamos, para qué las usamos y cómo puedes gestionarlas.",
  robots: {
    index: true,
    follow: true,
  },
}

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Política de Cookies", href: "/politica-de-cookies" },
]

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Política de Cookies</h1>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-8">
                <strong>Última actualización:</strong> 30 de enero de 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">¿Qué son las cookies?</h2>
                <p className="text-gray-600 mb-4">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o
                  móvil) cuando visitas un sitio web. Estas cookies permiten que el sitio web reconozca tu dispositivo y
                  recuerde cierta información sobre tu visita, como tus preferencias de idioma y otras configuraciones.
                </p>
                <p className="text-gray-600">
                  En Calculord utilizamos cookies para mejorar tu experiencia de navegación, analizar el uso del sitio y
                  mostrar contenido publicitario relevante.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tipos de cookies que utilizamos</h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">1. Cookies Necesarias</h3>
                    <p className="text-gray-600 mb-2">
                      Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Cookies de sesión para mantener tu navegación</li>
                      <li>Cookies de preferencias de configuración</li>
                      <li>Cookies de seguridad y autenticación</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">2. Cookies Analíticas</h3>
                    <p className="text-gray-600 mb-2">
                      Utilizamos Google Analytics para entender cómo los usuarios interactúan con nuestro sitio web.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>
                        <strong>_ga:</strong> Distingue a los usuarios únicos (caduca en 2 años)
                      </li>
                      <li>
                        <strong>_ga_[ID]:</strong> Mantiene el estado de la sesión (caduca en 2 años)
                      </li>
                      <li>
                        <strong>_gid:</strong> Distingue a los usuarios únicos (caduca en 24 horas)
                      </li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-2">
                      <strong>Finalidad:</strong> Análisis de tráfico, mejora de la experiencia de usuario, estadísticas
                      de uso del sitio web.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">3. Cookies Publicitarias</h3>
                    <p className="text-gray-600 mb-2">
                      Utilizamos Google AdSense para mostrar anuncios relevantes y medir su efectividad.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Cookies de personalización de anuncios</li>
                      <li>Cookies de medición de efectividad publicitaria</li>
                      <li>Cookies de frecuencia de anuncios</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-2">
                      <strong>Finalidad:</strong> Mostrar anuncios relevantes, evitar la repetición excesiva, medir la
                      efectividad de las campañas publicitarias.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Servicios de terceros</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Google Analytics</h3>
                  <p className="text-gray-600 mb-2">
                    Utilizamos Google Analytics para analizar el uso de nuestro sitio web. Google Analytics utiliza
                    cookies para recopilar información de forma anónima sobre cómo los visitantes utilizan nuestro
                    sitio.
                  </p>
                  <p className="text-sm text-gray-500">
                    Más información:{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Política de Privacidad de Google
                    </a>
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Google AdSense</h3>
                  <p className="text-gray-600 mb-2">
                    Utilizamos Google AdSense para mostrar anuncios en nuestro sitio web. Google AdSense utiliza cookies
                    para mostrar anuncios relevantes para los usuarios y medir la efectividad de los anuncios.
                  </p>
                  <p className="text-sm text-gray-500">
                    Más información:{" "}
                    <a
                      href="https://policies.google.com/technologies/ads"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Política de Anuncios de Google
                    </a>
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cómo gestionar las cookies</h2>
                <p className="text-gray-600 mb-4">Puedes controlar y gestionar las cookies de varias maneras:</p>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">En nuestro sitio web</h3>
                    <p className="text-blue-800 text-sm mb-2">
                      Puedes configurar tus preferencias de cookies utilizando nuestro panel de configuración.
                    </p>
                    <Link
                      href="/configuracion-cookies"
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
                    >
                      Configurar Cookies
                    </Link>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">En tu navegador</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      También puedes gestionar las cookies directamente desde la configuración de tu navegador:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>
                        <a
                          href="https://support.google.com/chrome/answer/95647"
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Chrome
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Mozilla Firefox
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Safari
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Microsoft Edge
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Consentimiento y base legal</h2>
                <p className="text-gray-600 mb-4">
                  El uso de cookies en nuestro sitio web se basa en tu consentimiento, excepto para las cookies
                  estrictamente necesarias que son esenciales para el funcionamiento del sitio.
                </p>
                <p className="text-gray-600">
                  Puedes retirar tu consentimiento en cualquier momento modificando tus preferencias de cookies o
                  eliminando las cookies desde la configuración de tu navegador.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Actualizaciones de esta política</h2>
                <p className="text-gray-600">
                  Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en nuestras prácticas
                  o por otros motivos operativos, legales o reglamentarios. Te recomendamos que revises esta página
                  periódicamente para estar informado sobre nuestro uso de cookies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contacto</h2>
                <p className="text-gray-600 mb-4">
                  Si tienes preguntas sobre esta Política de Cookies o sobre nuestro uso de cookies, puedes
                  contactarnos:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      <strong>Email:</strong> info@calculord.com
                    </li>
                    <li>
                      <strong>Página de contacto:</strong>{" "}
                      <Link href="/contacto" className="text-blue-600 hover:underline">
                        calculord.com/contacto
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500">
                  Esta Política de Cookies forma parte de nuestra{" "}
                  <Link href="/politica-de-privacidad" className="text-blue-600 hover:underline">
                    Política de Privacidad
                  </Link>{" "}
                  y está sujeta a nuestros{" "}
                  <Link href="/terminos-de-servicio" className="text-blue-600 hover:underline">
                    Términos de Servicio
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
