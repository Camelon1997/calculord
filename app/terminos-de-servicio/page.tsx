import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumbs from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Términos de Servicio - Calculord",
  description:
    "Términos y condiciones de uso de Calculord. Conoce las reglas y condiciones para utilizar nuestras calculadoras laborales y financieras.",
  robots: {
    index: true,
    follow: true,
  },
}

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Términos de Servicio", href: "/terminos-de-servicio" },
]

export default function TerminosServicioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Términos de Servicio</h1>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-8">
                <strong>Última actualización:</strong> 30 de enero de 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
                <p className="text-gray-600 mb-4">
                  Al acceder y utilizar Calculord (el "Servicio"), aceptas estar sujeto a estos Términos de Servicio
                  ("Términos"). Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro
                  servicio.
                </p>
                <p className="text-gray-600">
                  Estos Términos se aplican a todos los visitantes, usuarios y otras personas que accedan o utilicen el
                  Servicio.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descripción del Servicio</h2>
                <p className="text-gray-600 mb-4">
                  Calculord es una plataforma web que proporciona calculadoras laborales y financieras gratuitas,
                  incluyendo pero no limitándose a:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>Calculadoras de salarios y nóminas</li>
                  <li>Calculadoras de cotizaciones a la Seguridad Social</li>
                  <li>Calculadoras de IRPF y fiscalidad</li>
                  <li>Calculadoras hipotecarias y de ahorro</li>
                  <li>Calculadoras de prestaciones laborales</li>
                  <li>Contenido educativo y recursos relacionados</li>
                </ul>
                <p className="text-gray-600">
                  El Servicio se proporciona "tal como está" y puede ser modificado, suspendido o discontinuado en
                  cualquier momento.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Uso Aceptable</h2>

                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-900 mb-2">✅ Usos Permitidos</h3>
                    <ul className="list-disc list-inside text-green-800 text-sm space-y-1">
                      <li>Uso personal y profesional de las calculadoras</li>
                      <li>Consulta de información y recursos educativos</li>
                      <li>Compartir enlaces a nuestras calculadoras</li>
                      <li>Uso con fines educativos y de investigación</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-medium text-red-900 mb-2">❌ Usos Prohibidos</h3>
                    <ul className="list-disc list-inside text-red-800 text-sm space-y-1">
                      <li>Uso para actividades ilegales o fraudulentas</li>
                      <li>Intentos de hackear, dañar o sobrecargar el sistema</li>
                      <li>Distribución de malware o contenido malicioso</li>
                      <li>Copia o reproducción no autorizada del contenido</li>
                      <li>Uso automatizado excesivo (scraping masivo)</li>
                      <li>Suplantación de identidad o información falsa</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Propiedad Intelectual</h2>
                <p className="text-gray-600 mb-4">
                  El Servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad
                  exclusiva de Calculord y sus licenciantes. El Servicio está protegido por derechos de autor, marcas
                  comerciales y otras leyes.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Licencia de Uso</h3>
                  <p className="text-blue-800 text-sm">
                    Te otorgamos una licencia limitada, no exclusiva, no transferible y revocable para acceder y
                    utilizar el Servicio para uso personal y comercial, sujeto a estos Términos.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Exactitud de la Información</h2>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-medium text-yellow-900 mb-3">⚠️ Importante: Limitaciones de Exactitud</h3>
                  <ul className="text-yellow-800 text-sm space-y-2">
                    <li>
                      • Las calculadoras proporcionan <strong>estimaciones aproximadas</strong> basadas en los datos
                      introducidos
                    </li>
                    <li>
                      • Los resultados{" "}
                      <strong>no constituyen asesoramiento legal, fiscal o financiero profesional</strong>
                    </li>
                    <li>• La normativa laboral y fiscal puede cambiar y afectar a los cálculos</li>
                    <li>
                      • Recomendamos <strong>verificar los resultados con profesionales cualificados</strong>
                    </li>
                    <li>• No nos responsabilizamos de decisiones tomadas basándose únicamente en nuestros cálculos</li>
                  </ul>
                </div>

                <p className="text-gray-600 mt-4">
                  Aunque nos esforzamos por mantener la información actualizada y precisa, no garantizamos la exactitud,
                  completitud o actualidad de la información proporcionada.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitación de Responsabilidad</h2>

                <div className="bg-red-50 p-6 rounded-lg mb-4">
                  <h3 className="font-medium text-red-900 mb-3">Exención de Responsabilidad</h3>
                  <p className="text-red-800 text-sm mb-3">
                    En la máxima medida permitida por la ley aplicable, Calculord no será responsable de:
                  </p>
                  <ul className="list-disc list-inside text-red-800 text-sm space-y-1">
                    <li>Daños directos, indirectos, incidentales o consecuentes</li>
                    <li>Pérdida de beneficios, datos o uso</li>
                    <li>Errores en los cálculos o información proporcionada</li>
                    <li>Decisiones tomadas basándose en nuestros servicios</li>
                    <li>Interrupciones del servicio o problemas técnicos</li>
                  </ul>
                </div>

                <p className="text-gray-600">
                  Nuestra responsabilidad total hacia ti por cualquier reclamación no excederá el importe que hayas
                  pagado por el uso del Servicio en los 12 meses anteriores (que actualmente es cero, ya que el servicio
                  es gratuito).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Indemnización</h2>
                <p className="text-gray-600">
                  Aceptas indemnizar y eximir de responsabilidad a Calculord, sus directores, empleados y agentes de
                  cualquier reclamación, daño, obligación, pérdida, responsabilidad, costo o deuda, y gastos (incluidos
                  los honorarios de abogados) que surjan de:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                  <li>Tu uso del Servicio</li>
                  <li>Tu violación de estos Términos</li>
                  <li>Tu violación de cualquier derecho de terceros</li>
                  <li>Cualquier contenido que proporciones</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Privacidad y Cookies</h2>
                <p className="text-gray-600 mb-4">
                  Tu privacidad es importante para nosotros. El uso del Servicio también está sujeto a nuestra Política
                  de Privacidad y Política de Cookies.
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
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Modificaciones del Servicio</h2>
                <p className="text-gray-600 mb-4">Nos reservamos el derecho de:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Modificar o discontinuar el Servicio (o cualquier parte del mismo) temporal o permanentemente</li>
                  <li>Actualizar las calculadoras y su funcionalidad</li>
                  <li>Cambiar los términos de acceso al Servicio</li>
                  <li>Implementar nuevas características o eliminar existentes</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  No seremos responsables ante ti o terceros por cualquier modificación, suspensión o discontinuación
                  del Servicio.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Terminación</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Por tu parte</h3>
                    <p className="text-gray-600 text-sm">
                      Puedes dejar de usar el Servicio en cualquier momento. Si tienes una cuenta, puedes solicitar su
                      eliminación contactándonos.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Por nuestra parte</h3>
                    <p className="text-gray-600 text-sm">
                      Podemos terminar o suspender tu acceso inmediatamente si violas estos Términos o por cualquier
                      otra razón a nuestra discreción.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Ley Aplicable y Jurisdicción</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-blue-800 mb-4">
                    Estos Términos se regirán e interpretarán de acuerdo con las leyes de España, sin tener en cuenta
                    sus disposiciones sobre conflictos de leyes.
                  </p>
                  <p className="text-blue-800 text-sm">
                    Cualquier disputa que surja de o en relación con estos Términos estará sujeta a la jurisdicción
                    exclusiva de los tribunales españoles competentes.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Resolución de Disputas</h2>
                <p className="text-gray-600 mb-4">
                  En caso de disputa, te animamos a contactarnos primero para intentar resolver el problema de manera
                  amistosa:
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>
                      <strong>Email:</strong> info@calculord.com
                    </li>
                    <li>
                      <strong>Asunto:</strong> "Resolución de Disputa"
                    </li>
                    <li>
                      <strong>Tiempo de respuesta:</strong> 5-10 días laborables
                    </li>
                  </ul>
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  Si eres consumidor, también puedes acceder a la plataforma de resolución de disputas en línea de la
                  UE:
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    className="text-blue-600 hover:underline ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Modificaciones de los Términos</h2>
                <p className="text-gray-600 mb-4">
                  Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios significativos
                  serán notificados mediante:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>Aviso destacado en nuestro sitio web</li>
                  <li>Actualización de la fecha de "última actualización"</li>
                  <li>Email a usuarios registrados (si aplicable)</li>
                </ul>
                <p className="text-gray-600">
                  El uso continuado del Servicio después de dichos cambios constituye tu aceptación de los nuevos
                  Términos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Disposiciones Generales</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Divisibilidad</h3>
                    <p className="text-gray-600 text-sm">
                      Si alguna disposición de estos Términos se considera inválida, el resto permanecerá en pleno
                      vigor.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Renuncia</h3>
                    <p className="text-gray-600 text-sm">
                      Ninguna renuncia por nuestra parte a cualquier término o condición se considerará una renuncia
                      adicional o continua.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Acuerdo Completo</h3>
                    <p className="text-gray-600 text-sm">
                      Estos Términos constituyen el acuerdo completo entre tú y nosotros con respecto al Servicio.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contacto</h2>
                <p className="text-gray-600 mb-4">
                  Si tienes preguntas sobre estos Términos de Servicio, puedes contactarnos:
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
                      <h3 className="font-medium text-blue-900 mb-2">Asuntos Legales</h3>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>
                          <strong>Email:</strong> legal@calculord.com
                        </li>
                        <li>
                          <strong>Asunto:</strong> "Consulta Términos de Servicio"
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500">
                  Estos Términos de Servicio están relacionados con nuestra{" "}
                  <Link href="/politica-de-privacidad" className="text-blue-600 hover:underline">
                    Política de Privacidad
                  </Link>{" "}
                  y nuestra{" "}
                  <Link href="/politica-de-cookies" className="text-blue-600 hover:underline">
                    Política de Cookies
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
