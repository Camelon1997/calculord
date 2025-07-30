import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumbs from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Política de Privacidad - Calculord",
  description:
    "Política de privacidad de Calculord. Información sobre cómo recopilamos, utilizamos y protegemos tus datos personales conforme al RGPD.",
  robots: {
    index: true,
    follow: true,
  },
}

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Política de Privacidad", href: "/politica-de-privacidad" },
]

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Política de Privacidad</h1>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-8">
                <strong>Última actualización:</strong> 30 de enero de 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Información del Responsable</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      <strong>Denominación:</strong> Calculord
                    </li>
                    <li>
                      <strong>Sitio web:</strong> calculord.com
                    </li>
                    <li>
                      <strong>Email de contacto:</strong> info@calculord.com
                    </li>
                    <li>
                      <strong>Actividad:</strong> Plataforma de calculadoras laborales y financieras
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Datos que Recopilamos</h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Datos de Navegación</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Dirección IP</li>
                      <li>Tipo de navegador y versión</li>
                      <li>Sistema operativo</li>
                      <li>Páginas visitadas y tiempo de permanencia</li>
                      <li>Fecha y hora de acceso</li>
                      <li>Sitio web de referencia</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-2">
                      <strong>Finalidad:</strong> Análisis estadístico, mejora del servicio, seguridad
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Datos de Contacto (Voluntarios)</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Nombre y apellidos</li>
                      <li>Dirección de correo electrónico</li>
                      <li>Mensaje o consulta</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-2">
                      <strong>Finalidad:</strong> Responder consultas, soporte técnico, newsletter (si se suscribe)
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Datos de Cookies y Tecnologías Similares</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Cookies de sesión y preferencias</li>
                      <li>Cookies analíticas (Google Analytics)</li>
                      <li>Cookies publicitarias (Google AdSense)</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-2">
                      <strong>Finalidad:</strong> Funcionalidad del sitio, análisis de uso, personalización de anuncios
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Base Legal del Tratamiento</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">Interés Legítimo</h3>
                    <p className="text-blue-800 text-sm">
                      Para el análisis estadístico del sitio web, mejora de servicios y seguridad.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-900 mb-2">Consentimiento</h3>
                    <p className="text-green-800 text-sm">
                      Para cookies no esenciales, newsletter y comunicaciones comerciales.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-medium text-purple-900 mb-2">Ejecución de Contrato</h3>
                    <p className="text-purple-800 text-sm">
                      Para proporcionar los servicios solicitados y responder consultas.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-medium text-orange-900 mb-2">Obligación Legal</h3>
                    <p className="text-orange-800 text-sm">
                      Para cumplir con obligaciones fiscales y legales aplicables.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Compartir Datos con Terceros</h2>
                <p className="text-gray-600 mb-4">
                  No vendemos, alquilamos ni compartimos tus datos personales con terceros, excepto en los siguientes
                  casos:
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Proveedores de Servicios</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>
                        <strong>Google Analytics:</strong> Análisis de tráfico web (datos anonimizados)
                      </li>
                      <li>
                        <strong>Google AdSense:</strong> Publicidad contextual
                      </li>
                      <li>
                        <strong>Vercel:</strong> Hosting y servicios de infraestructura
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-medium text-red-900 mb-2">Obligaciones Legales</h3>
                    <p className="text-red-800 text-sm">
                      Cuando sea requerido por ley, orden judicial o autoridades competentes.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Transferencias Internacionales</h2>
                <p className="text-gray-600 mb-4">
                  Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico Europeo
                  (EEE):
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-medium text-yellow-900 mb-2">Google (Estados Unidos)</h3>
                  <p className="text-yellow-800 text-sm mb-2">
                    Google Analytics y AdSense están cubiertos por las Cláusulas Contractuales Tipo de la UE y el Marco
                    de Privacidad de Datos UE-EE.UU.
                  </p>
                  <p className="text-xs text-yellow-700">
                    Más información:{" "}
                    <a
                      href="https://policies.google.com/privacy/frameworks"
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Marco de Privacidad de Google
                    </a>
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Conservación de Datos</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Tipo de Dato</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Período de Conservación</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Datos de navegación</td>
                        <td className="border border-gray-300 px-4 py-2">26 meses (Google Analytics)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Cookies técnicas</td>
                        <td className="border border-gray-300 px-4 py-2">Duración de la sesión</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Datos de contacto</td>
                        <td className="border border-gray-300 px-4 py-2">3 años desde el último contacto</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Newsletter</td>
                        <td className="border border-gray-300 px-4 py-2">Hasta la baja voluntaria</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Tus Derechos</h2>
                <p className="text-gray-600 mb-4">
                  Conforme al RGPD, tienes los siguientes derechos sobre tus datos personales:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">🔍 Derecho de Acceso</h3>
                    <p className="text-blue-800 text-sm">Conocer qué datos tenemos sobre ti y cómo los utilizamos.</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-900 mb-2">✏️ Derecho de Rectificación</h3>
                    <p className="text-green-800 text-sm">Corregir datos inexactos o incompletos.</p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-medium text-red-900 mb-2">🗑️ Derecho de Supresión</h3>
                    <p className="text-red-800 text-sm">Solicitar la eliminación de tus datos personales.</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-medium text-purple-900 mb-2">⏸️ Derecho de Limitación</h3>
                    <p className="text-purple-800 text-sm">Restringir el tratamiento de tus datos.</p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-medium text-orange-900 mb-2">📤 Derecho de Portabilidad</h3>
                    <p className="text-orange-800 text-sm">Recibir tus datos en formato estructurado.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">❌ Derecho de Oposición</h3>
                    <p className="text-gray-800 text-sm">Oponerte al tratamiento de tus datos.</p>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-medium text-yellow-900 mb-2">📧 Cómo ejercer tus derechos</h3>
                  <p className="text-yellow-800 text-sm mb-2">
                    Para ejercer cualquiera de estos derechos, contacta con nosotros en:
                  </p>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>
                      <strong>Email:</strong> info@calculord.com
                    </li>
                    <li>
                      <strong>Asunto:</strong> "Ejercicio de Derechos RGPD"
                    </li>
                    <li>
                      <strong>Información requerida:</strong> Nombre completo, email y derecho que deseas ejercer
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Medidas de Seguridad</h2>
                <p className="text-gray-600 mb-4">
                  Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">🔒</div>
                    <h3 className="font-medium text-green-900 mb-2">Cifrado SSL/TLS</h3>
                    <p className="text-green-800 text-sm">Todas las comunicaciones están cifradas</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">🛡️</div>
                    <h3 className="font-medium text-blue-900 mb-2">Acceso Restringido</h3>
                    <p className="text-blue-800 text-sm">Solo personal autorizado accede a los datos</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">💾</div>
                    <h3 className="font-medium text-purple-900 mb-2">Copias de Seguridad</h3>
                    <p className="text-purple-800 text-sm">Respaldos regulares y seguros</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Menores de Edad</h2>
                <div className="bg-red-50 p-6 rounded-lg">
                  <p className="text-red-800 mb-4">
                    Nuestros servicios están dirigidos a personas mayores de 16 años. No recopilamos intencionalmente
                    datos personales de menores de 16 años.
                  </p>
                  <p className="text-red-800 text-sm">
                    Si tienes conocimiento de que un menor ha proporcionado datos personales, contacta con nosotros
                    inmediatamente para proceder a su eliminación.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Cambios en esta Política</h2>
                <p className="text-gray-600 mb-4">
                  Podemos actualizar esta Política de Privacidad ocasionalmente. Los cambios significativos serán
                  notificados mediante:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Aviso destacado en nuestro sitio web</li>
                  <li>Email a los usuarios registrados (si aplicable)</li>
                  <li>Actualización de la fecha de "última modificación"</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Autoridad de Control</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    Si consideras que el tratamiento de tus datos personales infringe el RGPD, tienes derecho a
                    presentar una reclamación ante la autoridad de control competente:
                  </p>
                  <div className="text-gray-600">
                    <p>
                      <strong>Agencia Española de Protección de Datos (AEPD)</strong>
                    </p>
                    <p>
                      Sitio web:{" "}
                      <a
                        href="https://www.aepd.es"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.aepd.es
                      </a>
                    </p>
                    <p>Teléfono: 901 100 099</p>
                    <p>Dirección: C/ Jorge Juan, 6, 28001 Madrid</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contacto</h2>
                <p className="text-gray-600 mb-4">
                  Para cualquier consulta sobre esta Política de Privacidad o sobre el tratamiento de tus datos
                  personales, puedes contactarnos:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium text-blue-900 mb-2">Información General</h3>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>
                          <strong>Email:</strong> info@calculord.com
                        </li>
                        <li>
                          <strong>Web:</strong>{" "}
                          <Link href="/contacto" className="underline">
                            calculord.com/contacto
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-900 mb-2">Protección de Datos</h3>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>
                          <strong>Email:</strong> privacidad@calculord.com
                        </li>
                        <li>
                          <strong>Asunto:</strong> "Consulta RGPD"
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500">
                  Esta Política de Privacidad está relacionada con nuestra{" "}
                  <Link href="/politica-de-cookies" className="text-blue-600 hover:underline">
                    Política de Cookies
                  </Link>{" "}
                  y nuestros{" "}
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
