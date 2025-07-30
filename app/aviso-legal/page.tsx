import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumbs from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Aviso Legal - Calculord",
  description:
    "Aviso legal de Calculord. Información sobre la titularidad, datos identificativos y aspectos legales de nuestra plataforma de calculadoras.",
  robots: {
    index: true,
    follow: true,
  },
}

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Aviso Legal", href: "/aviso-legal" },
]

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Aviso Legal</h1>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-8">
                <strong>Última actualización:</strong> 30 de enero de 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Datos Identificativos</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-blue-900 mb-3">Titular del Sitio Web</h3>
                      <ul className="text-blue-800 text-sm space-y-2">
                        <li>
                          <strong>Denominación:</strong> Calculord
                        </li>
                        <li>
                          <strong>Dominio:</strong> calculord.com
                        </li>
                        <li>
                          <strong>Actividad:</strong> Plataforma de calculadoras laborales y financieras
                        </li>
                        <li>
                          <strong>Ámbito:</strong> España
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-900 mb-3">Datos de Contacto</h3>
                      <ul className="text-blue-800 text-sm space-y-2">
                        <li>
                          <strong>Email:</strong> info@calculord.com
                        </li>
                        <li>
                          <strong>Email legal:</strong> legal@calculord.com
                        </li>
                        <li>
                          <strong>Formulario:</strong>{" "}
                          <Link href="/contacto" className="underline">
                            calculord.com/contacto
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Objeto y Finalidad</h2>
                <p className="text-gray-600 mb-4">
                  El presente aviso legal regula el uso del sitio web calculord.com (en adelante, "el Sitio Web"), que
                  pone a disposición de los usuarios de Internet información y servicios relacionados con:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>Calculadoras laborales (salarios, nóminas, cotizaciones, prestaciones)</li>
                  <li>Calculadoras financieras (hipotecas, ahorros, inversiones)</li>
                  <li>Calculadoras fiscales (IRPF, impuestos, deducciones)</li>
                  <li>Información y recursos educativos relacionados</li>
                  <li>Herramientas de planificación financiera y laboral</li>
                </ul>
                <p className="text-gray-600">
                  El acceso al Sitio Web es gratuito y no requiere registro previo, salvo para servicios específicos que
                  así lo requieran.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Condiciones de Acceso y Uso</h2>

                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-900 mb-2">✅ Uso Permitido</h3>
                    <ul className="list-disc list-inside text-green-800 text-sm space-y-1">
                      <li>Acceso libre y gratuito a todas las calculadoras</li>
                      <li>Uso personal y profesional de las herramientas</li>
                      <li>Consulta de información y recursos educativos</li>
                      <li>Compartir enlaces a calculadoras específicas</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-medium text-red-900 mb-2">❌ Uso Prohibido</h3>
                    <ul className="list-disc list-inside text-red-800 text-sm space-y-1">
                      <li>Uso para actividades ilegales o fraudulentas</li>
                      <li>Intentos de dañar o interferir con el funcionamiento del sitio</li>
                      <li>Extracción masiva de datos (web scraping) sin autorización</li>
                      <li>Reproducción total o parcial sin autorización expresa</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-600 mt-4">
                  El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Calculord ofrece a
                  través del Sitio Web y a no emplearlos para actividades contrarias a la ley, la moral o el orden
                  público.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Propiedad Intelectual e Industrial</h2>

                <div className="bg-purple-50 p-6 rounded-lg mb-4">
                  <h3 className="font-medium text-purple-900 mb-3">Derechos de Autor</h3>
                  <p className="text-purple-800 text-sm mb-3">
                    Todos los contenidos del Sitio Web, incluyendo pero no limitándose a textos, fotografías, gráficos,
                    imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una
                    obra cuya propiedad pertenece a Calculord.
                  </p>
                  <p className="text-purple-800 text-sm">
                    Quedan expresamente prohibidas la reproducción, distribución y comunicación pública, incluida su
                    modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, sin
                    la autorización expresa de Calculord.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">Marcas y Nombres Comerciales</h3>
                    <p className="text-blue-800 text-sm">
                      "Calculord" y otros signos distintivos son marcas de Calculord. Su uso no autorizado está
                      prohibido.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-medium text-orange-900 mb-2">Contenido de Terceros</h3>
                    <p className="text-orange-800 text-sm">
                      Respetamos los derechos de propiedad intelectual de terceros y esperamos que nuestros usuarios
                      hagan lo mismo.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Exclusión de Garantías y Responsabilidad
                </h2>

                <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                  <h3 className="font-medium text-yellow-900 mb-3">⚠️ Importante: Limitaciones</h3>
                  <p className="text-yellow-800 text-sm mb-3">
                    Calculord no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza
                    que pudieran ocasionar:
                  </p>
                  <ul className="list-disc list-inside text-yellow-800 text-sm space-y-1">
                    <li>Errores u omisiones en los contenidos</li>
                    <li>Falta de disponibilidad del portal o transmisión de virus</li>
                    <li>Decisiones tomadas basándose en la información proporcionada</li>
                    <li>Uso inadecuado de las calculadoras o interpretación errónea de resultados</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-medium text-red-900 mb-2">Exactitud de los Cálculos</h3>
                    <p className="text-red-800 text-sm">
                      Las calculadoras proporcionan estimaciones basadas en los datos introducidos. Los resultados no
                      constituyen asesoramiento profesional y deben ser verificados con expertos cualificados.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Disponibilidad del Servicio</h3>
                    <p className="text-gray-600 text-sm">
                      No garantizamos la disponibilidad y continuidad del funcionamiento del Sitio Web. Cuando sea
                      razonablemente posible, se advertirá previamente de las interrupciones en el funcionamiento del
                      Sitio Web.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Enlaces Externos</h2>
                <p className="text-gray-600 mb-4">
                  El Sitio Web puede contener enlaces a otros sitios web de terceros que consideramos de interés para
                  nuestros usuarios. Sin embargo, no nos hacemos responsables del contenido de dichos sitios web.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Política de Enlaces</h3>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Los enlaces se proporcionan únicamente para conveniencia del usuario</li>
                    <li>• No implican aprobación del contenido de los sitios enlazados</li>
                    <li>• El usuario accede bajo su propia responsabilidad</li>
                    <li>• Pueden ser modificados o eliminados sin previo aviso</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Protección de Datos Personales</h2>
                <p className="text-gray-600 mb-4">
                  El tratamiento de datos personales se rige por nuestra Política de Privacidad, que cumple con el
                  Reglamento General de Protección de Datos (RGPD) y la normativa española aplicable.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/politica-de-privacidad"
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
                  >
                    Ver Política de Privacidad
                  </Link>
                  <Link
                    href="/politica-de-cookies"
                    className="bg-gray-600 text-white px-4 py-2 rounded text-sm hover:bg-gray-700"
                  >
                    Ver Política de Cookies
                  </Link>
                  <Link
                    href="/configuracion-cookies"
                    className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700"
                  >
                    Configurar Cookies
                  </Link>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modificaciones</h2>
                <p className="text-gray-600 mb-4">
                  Calculord se reserva el derecho de efectuar sin previo aviso las modificaciones que considere
                  oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se
                  presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Notificación de Cambios</h3>
                  <p className="text-gray-600 text-sm">
                    Los cambios significativos en este Aviso Legal serán comunicados mediante aviso en el sitio web y
                    actualización de la fecha de "última actualización".
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Legislación Aplicable y Jurisdicción</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-blue-800 mb-4">
                    La relación entre Calculord y el usuario se regirá por la normativa española vigente, y cualquier
                    controversia se someterá a los Juzgados y Tribunales de la ciudad correspondiente según la
                    legislación aplicable.
                  </p>
                  <p className="text-blue-800 text-sm">
                    En caso de que el usuario tenga su domicilio fuera de España, Calculord y el usuario, con renuncia
                    expresa a cualquier otro fuero, se someten a los juzgados y tribunales españoles para resolver
                    cualquier controversia que pueda surgir.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contacto y Comunicaciones</h2>
                <p className="text-gray-600 mb-4">
                  Para cualquier consulta relacionada con este Aviso Legal o con el uso del Sitio Web, puedes
                  contactarnos a través de los siguientes medios:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-900 mb-2">Consultas Generales</h3>
                    <ul className="text-green-800 text-sm space-y-1">
                      <li>
                        <strong>Email:</strong> info@calculord.com
                      </li>
                      <li>
                        <strong>Formulario:</strong>{" "}
                        <Link href="/contacto" className="underline">
                          calculord.com/contacto
                        </Link>
                      </li>
                      <li>
                        <strong>Tiempo de respuesta:</strong> 5-10 días laborables
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-medium text-purple-900 mb-2">Asuntos Legales</h3>
                    <ul className="text-purple-800 text-sm space-y-1">
                      <li>
                        <strong>Email:</strong> legal@calculord.com
                      </li>
                      <li>
                        <strong>Asunto:</strong> "Consulta Legal - Aviso Legal"
                      </li>
                      <li>
                        <strong>Incluir:</strong> Descripción detallada de la consulta
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Validez y Eficacia</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Divisibilidad</h3>
                    <p className="text-gray-600 text-sm">
                      Si cualquier disposición de este Aviso Legal fuera declarada nula o ineficaz, las restantes
                      disposiciones seguirán siendo válidas y eficaces.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Prevalencia</h3>
                    <p className="text-gray-600 text-sm">
                      En caso de conflicto entre este Aviso Legal y otros documentos del sitio web, prevalecerán las
                      disposiciones más específicas aplicables a cada caso.
                    </p>
                  </div>
                </div>
              </section>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500 mb-4">
                  Este Aviso Legal forma parte del conjunto de documentos legales de Calculord, junto con nuestra
                  Política de Privacidad, Política de Cookies y Términos de Servicio.
                </p>

                <div className="flex flex-wrap gap-2 text-sm">
                  <Link href="/politica-de-privacidad" className="text-blue-600 hover:underline">
                    Política de Privacidad
                  </Link>
                  <span className="text-gray-400">•</span>
                  <Link href="/politica-de-cookies" className="text-blue-600 hover:underline">
                    Política de Cookies
                  </Link>
                  <span className="text-gray-400">•</span>
                  <Link href="/terminos-de-servicio" className="text-blue-600 hover:underline">
                    Términos de Servicio
                  </Link>
                  <span className="text-gray-400">•</span>
                  <Link href="/descargo-de-responsabilidad" className="text-blue-600 hover:underline">
                    Descargo de Responsabilidad
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
