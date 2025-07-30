import type { Metadata } from "next"
import { Cookie, Settings, BarChart3, Target } from "lucide-react"
import { Breadcrumbs } from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Política de Cookies | Calculord",
  description:
    "Información sobre el uso de cookies en Calculord. Tipos de cookies, finalidades y cómo gestionarlas según la normativa europea.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs currentPage="Política de Cookies" />

        <div className="bg-white rounded-lg shadow-sm p-8 mt-6">
          <div className="text-center mb-8">
            <Cookie className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Política de Cookies</h1>
            <p className="text-gray-600">Última actualización: 1 de enero de 2025</p>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. ¿Qué son las Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio
                web. Permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo,
                mejorando su experiencia de navegación.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>En Calculord utilizamos cookies para:</strong> mejorar la funcionalidad del sitio, analizar el
                  tráfico web, personalizar contenido y mostrar publicidad relevante.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Tipos de Cookies que Utilizamos</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-green-600" />
                    Cookies Técnicas
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Finalidad:</strong> Funcionamiento básico del sitio
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Duración:</strong> Sesión
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Necesarias:</strong> Sí
                  </p>
                  <ul className="text-gray-600 text-sm mt-2 space-y-1">
                    <li>• Recordar preferencias de configuración</li>
                    <li>• Mantener la sesión activa</li>
                    <li>• Seguridad básica</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                    Cookies Analíticas
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Finalidad:</strong> Análisis estadístico
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Duración:</strong> 26 meses
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Proveedor:</strong> Google Analytics
                  </p>
                  <ul className="text-gray-600 text-sm mt-2 space-y-1">
                    <li>• Páginas más visitadas</li>
                    <li>• Tiempo de permanencia</li>
                    <li>• Comportamiento de navegación</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-purple-600" />
                    Cookies Publicitarias
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Finalidad:</strong> Publicidad personalizada
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Duración:</strong> Hasta 2 años
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Proveedor:</strong> Google AdSense
                  </p>
                  <ul className="text-gray-600 text-sm mt-2 space-y-1">
                    <li>• Anuncios relevantes</li>
                    <li>• Frecuencia de anuncios</li>
                    <li>• Medición de efectividad</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Cookies de Terceros</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Finalidad:</strong> Servicios externos
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Duración:</strong> Variable
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Proveedores:</strong> Varios
                  </p>
                  <ul className="text-gray-600 text-sm mt-2 space-y-1">
                    <li>• Redes sociales</li>
                    <li>• Mapas integrados</li>
                    <li>• Widgets externos</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookies Específicas que Utilizamos</h2>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Cookie</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Proveedor</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Finalidad</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Duración</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">_ga</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Google Analytics</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Distinguir usuarios únicos</td>
                      <td className="px-4 py-3 text-sm text-gray-700">2 años</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">_ga_*</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Google Analytics</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Estado de la sesión</td>
                      <td className="px-4 py-3 text-sm text-gray-700">2 años</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">_gid</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Google Analytics</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Distinguir usuarios</td>
                      <td className="px-4 py-3 text-sm text-gray-700">24 horas</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">_gat</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Google Analytics</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Limitar velocidad de solicitudes</td>
                      <td className="px-4 py-3 text-sm text-gray-700">1 minuto</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">__Secure-*</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Google AdSense</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Publicidad personalizada</td>
                      <td className="px-4 py-3 text-sm text-gray-700">2 años</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Base Legal</h2>
              <p className="text-gray-700 mb-4">El uso de cookies se basa en:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Cookies técnicas:</strong> Interés legítimo para el funcionamiento del sitio web
                </li>
                <li>
                  <strong>Cookies analíticas:</strong> Interés legítimo para mejorar nuestros servicios
                </li>
                <li>
                  <strong>Cookies publicitarias:</strong> Consentimiento del usuario
                </li>
                <li>
                  <strong>Cookies de terceros:</strong> Consentimiento y políticas de terceros
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cómo Gestionar las Cookies</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Configuración del Navegador</h3>
              <p className="text-gray-700 mb-4">Puede configurar su navegador para aceptar o rechazar cookies:</p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Chrome</h4>
                  <p className="text-gray-700 text-sm">Configuración → Privacidad y seguridad → Cookies</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Firefox</h4>
                  <p className="text-gray-700 text-sm">Opciones → Privacidad y seguridad → Cookies</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Safari</h4>
                  <p className="text-gray-700 text-sm">Preferencias → Privacidad → Cookies</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Edge</h4>
                  <p className="text-gray-700 text-sm">Configuración → Privacidad → Cookies</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Herramientas de Terceros</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Google Analytics:</strong>{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Complemento de exclusión
                  </a>
                </li>
                <li>
                  <strong>Google Ads:</strong>{" "}
                  <a
                    href="https://www.google.com/settings/ads"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Configuración de anuncios
                  </a>
                </li>
                <li>
                  <strong>Your Online Choices:</strong>{" "}
                  <a
                    href="http://www.youronlinechoices.com/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gestión de cookies publicitarias
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Consecuencias de Desactivar Cookies</h2>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Advertencia:</strong> Desactivar ciertas cookies puede afectar la funcionalidad del sitio web:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Las calculadoras pueden no funcionar correctamente</li>
                  <li>No se recordarán sus preferencias</li>
                  <li>La experiencia de usuario puede verse degradada</li>
                  <li>Algunos contenidos pueden no cargarse</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Actualizaciones de la Política</h2>
              <p className="text-gray-700 mb-4">
                Esta política de cookies puede actualizarse periódicamente para reflejar cambios en nuestras prácticas o
                en la normativa aplicable. Le recomendamos que revise esta página regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contacto</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  Si tiene preguntas sobre nuestra política de cookies, puede contactarnos:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>
                    <strong>Email:</strong> cookies@calculord.com
                  </li>
                  <li>
                    <strong>Sitio web:</strong> https://calculord.com/contacto
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
