import type { Metadata } from "next"
import { Shield, Eye, Lock, Users, FileText, Mail } from "lucide-react"
import { Breadcrumbs } from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Política de Privacidad | Calculord",
  description:
    "Política de privacidad de Calculord. Información sobre cómo recopilamos, utilizamos y protegemos tus datos personales según el RGPD.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs currentPage="Política de Privacidad" />

        <div className="bg-white rounded-lg shadow-sm p-8 mt-6">
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Política de Privacidad</h1>
            <p className="text-gray-600">Última actualización: 1 de enero de 2025</p>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                1. Información General
              </h2>
              <p className="text-gray-700 mb-4">
                En <strong>Calculord</strong> (en adelante, "nosotros", "nuestro" o "la empresa"), nos comprometemos a
                proteger y respetar tu privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos,
                divulgamos y protegemos tu información cuando visitas nuestro sitio web{" "}
                <strong>https://calculord.com</strong> (el "Sitio").
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Responsable del tratamiento:</strong> Calculord
                  <br />
                  <strong>Sitio web:</strong> https://calculord.com
                  <br />
                  <strong>Email de contacto:</strong> privacidad@calculord.com
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                2. Información que Recopilamos
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Información que nos proporcionas</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Formulario de contacto:</strong> Nombre, email y mensaje cuando nos contactas
                </li>
                <li>
                  <strong>Newsletter:</strong> Dirección de email cuando te suscribes a nuestro boletín
                </li>
                <li>
                  <strong>Comentarios:</strong> Información que compartes en comentarios o feedback
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Información recopilada automáticamente</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas, tiempo de
                  permanencia
                </li>
                <li>
                  <strong>Cookies y tecnologías similares:</strong> Para mejorar la funcionalidad y analizar el uso del
                  sitio
                </li>
                <li>
                  <strong>Datos de Google Analytics:</strong> Estadísticas de uso anónimas y comportamiento de
                  navegación
                </li>
                <li>
                  <strong>Datos de Google AdSense:</strong> Para mostrar publicidad relevante
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Información de terceros</h3>
              <p className="text-gray-700 mb-4">
                Podemos recibir información sobre ti de servicios de terceros como Google Analytics, Google AdSense y
                otros proveedores de servicios que utilizamos para operar nuestro sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                3. Cómo Utilizamos tu Información
              </h2>
              <p className="text-gray-700 mb-4">Utilizamos la información recopilada para los siguientes propósitos:</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Operación del Sitio</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Proporcionar y mantener nuestros servicios</li>
                    <li>• Procesar y responder a tus consultas</li>
                    <li>• Mejorar la funcionalidad del sitio</li>
                    <li>• Garantizar la seguridad del sitio</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Comunicación</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Enviar newsletters (con tu consentimiento)</li>
                    <li>• Responder a tus preguntas y comentarios</li>
                    <li>• Notificaciones importantes del servicio</li>
                    <li>• Actualizaciones de políticas</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Análisis y Mejora</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Analizar el uso del sitio web</li>
                    <li>• Identificar tendencias y patrones</li>
                    <li>• Mejorar nuestros servicios</li>
                    <li>• Desarrollar nuevas funcionalidades</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Publicidad</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Mostrar anuncios relevantes</li>
                    <li>• Personalizar contenido publicitario</li>
                    <li>• Medir efectividad de anuncios</li>
                    <li>• Financiar contenido gratuito</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Base Legal para el Tratamiento</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Finalidad</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Base Legal</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Datos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Funcionamiento del sitio</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Interés legítimo</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Datos de navegación, cookies técnicas</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Newsletter</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Consentimiento</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Email</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Análisis web</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Interés legítimo</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Google Analytics</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Publicidad</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Consentimiento</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Cookies publicitarias</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Compartir Información con Terceros</h2>
              <p className="text-gray-700 mb-4">
                No vendemos, intercambiamos ni transferimos tu información personal a terceros, excepto en los
                siguientes casos:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Proveedores de Servicios</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>
                      • <strong>Google Analytics:</strong> Para análisis de tráfico web
                    </li>
                    <li>
                      • <strong>Google AdSense:</strong> Para mostrar publicidad
                    </li>
                    <li>
                      • <strong>Mailchimp:</strong> Para gestión de newsletter
                    </li>
                    <li>
                      • <strong>Vercel:</strong> Para hosting y CDN
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Requerimientos Legales</h4>
                  <p className="text-gray-700 text-sm">
                    Podemos divulgar tu información si es requerido por ley, orden judicial, o para proteger nuestros
                    derechos, propiedad o seguridad.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Lock className="w-6 h-6 text-blue-600 mr-3" />
                6. Seguridad de los Datos
              </h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información
                personal contra acceso no autorizado, alteración, divulgación o destrucción:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Cifrado SSL/TLS para todas las comunicaciones</li>
                <li>Acceso restringido a datos personales</li>
                <li>Monitoreo regular de seguridad</li>
                <li>Copias de seguridad regulares</li>
                <li>Actualizaciones de seguridad constantes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Retención de Datos</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Tipo de Dato</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Período de Retención</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Motivo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Datos de contacto</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Hasta que solicites eliminación</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Comunicación continua</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Newsletter</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Hasta cancelar suscripción</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Envío de boletines</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Google Analytics</td>
                      <td className="px-4 py-3 text-sm text-gray-700">26 meses</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Análisis estadístico</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Logs del servidor</td>
                      <td className="px-4 py-3 text-sm text-gray-700">12 meses</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Seguridad y mantenimiento</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Tus Derechos (RGPD)</h2>
              <p className="text-gray-700 mb-4">
                Bajo el Reglamento General de Protección de Datos (RGPD), tienes los siguientes derechos:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Derecho de Acceso</h4>
                  <p className="text-gray-700 text-sm">
                    Solicitar información sobre qué datos personales tenemos sobre ti.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Derecho de Rectificación</h4>
                  <p className="text-gray-700 text-sm">Corregir datos personales inexactos o incompletos.</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Derecho de Supresión</h4>
                  <p className="text-gray-700 text-sm">Solicitar la eliminación de tus datos personales.</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Derecho de Portabilidad</h4>
                  <p className="text-gray-700 text-sm">Recibir tus datos en un formato estructurado.</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Derecho de Oposición</h4>
                  <p className="text-gray-700 text-sm">Oponerte al tratamiento de tus datos personales.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Derecho de Limitación</h4>
                  <p className="text-gray-700 text-sm">Solicitar la limitación del tratamiento de tus datos.</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700 text-sm">
                  <strong>Para ejercer estos derechos:</strong> Envía un email a{" "}
                  <strong>privacidad@calculord.com</strong> con tu solicitud. Responderemos en un plazo máximo de 30
                  días.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Para
                información detallada sobre nuestro uso de cookies, consulta nuestra{" "}
                <a href="/politica-de-cookies" className="text-blue-600 hover:underline">
                  Política de Cookies
                </a>
                .
              </p>
              <p className="text-gray-700 mb-4">
                Puedes gestionar tus preferencias de cookies en cualquier momento visitando nuestra{" "}
                <a href="/configuracion-cookies" className="text-blue-600 hover:underline">
                  página de configuración de cookies
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Transferencias Internacionales</h2>
              <p className="text-gray-700 mb-4">
                Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico Europeo
                (EEE). En estos casos, nos aseguramos de que existan garantías adecuadas para proteger tus datos:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Google (Analytics, AdSense):</strong> Certificado bajo el Marco de Privacidad de Datos
                  UE-EE.UU.
                </li>
                <li>
                  <strong>Vercel:</strong> Cumple con estándares internacionales de protección de datos
                </li>
                <li>
                  <strong>Mailchimp:</strong> Certificado bajo marcos de transferencia internacional
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Menores de Edad</h2>
              <p className="text-gray-700 mb-4">
                Nuestro sitio web no está dirigido a menores de 16 años. No recopilamos conscientemente información
                personal de menores de 16 años. Si descubrimos que hemos recopilado información personal de un menor de
                16 años, la eliminaremos inmediatamente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Cambios en esta Política</h2>
              <p className="text-gray-700 mb-4">
                Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios
                significativos publicando la nueva política en esta página y actualizando la fecha de "última
                actualización".
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Recomendación:</strong> Revisa esta política periódicamente para mantenerte informado sobre
                  cómo protegemos tu información.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-3" />
                13. Contacto
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer tus derechos, puedes
                  contactarnos:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700">
                      <strong>Email:</strong> privacidad@calculord.com
                    </p>
                    <p className="text-gray-700">
                      <strong>Sitio web:</strong> https://calculord.com/contacto
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <strong>Tiempo de respuesta:</strong> Máximo 30 días
                    </p>
                    <p className="text-gray-700">
                      <strong>Idioma:</strong> Español
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
