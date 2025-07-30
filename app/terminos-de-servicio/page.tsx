import type { Metadata } from "next"
import { FileText, AlertTriangle, Scale, Users } from "lucide-react"
import { Breadcrumbs } from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Términos de Servicio | Calculord",
  description:
    "Términos y condiciones de uso de Calculord. Conoce las reglas y condiciones para utilizar nuestras calculadoras laborales y financieras.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TerminosServicioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs currentPage="Términos de Servicio" />

        <div className="bg-white rounded-lg shadow-sm p-8 mt-6">
          <div className="text-center mb-8">
            <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Términos de Servicio</h1>
            <p className="text-gray-600">Última actualización: 1 de enero de 2025</p>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
              <p className="text-gray-700 mb-4">
                Al acceder y utilizar el sitio web <strong>Calculord</strong> (https://calculord.com), aceptas estar
                sujeto a estos Términos de Servicio y a todas las leyes y regulaciones aplicables. Si no estás de
                acuerdo con alguno de estos términos, no debes utilizar este sitio web.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Importante:</strong> El uso continuado del sitio web constituye la aceptación de estos
                  términos y cualquier modificación posterior.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                2. Descripción del Servicio
              </h2>
              <p className="text-gray-700 mb-4">
                Calculord es una plataforma web que proporciona calculadoras laborales y financieras gratuitas para
                ayudar a usuarios, profesionales y empresas en España con:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Cálculos salariales y de nóminas</li>
                <li>Cotizaciones a la Seguridad Social</li>
                <li>Cálculos de IRPF para trabajadores y autónomos</li>
                <li>Calculadoras de hipotecas y ahorro</li>
                <li>Herramientas de recursos humanos</li>
                <li>Calculadoras de prestaciones por desempleo</li>
                <li>Herramientas de planificación financiera</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Uso Permitido</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Usos Permitidos</h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• Uso personal y profesional de las calculadoras</li>
                    <li>• Consulta de información y recursos</li>
                    <li>• Compartir enlaces a nuestras herramientas</li>
                    <li>• Uso educativo y formativo</li>
                    <li>• Consultoría y asesoramiento profesional</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">❌ Usos Prohibidos</h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• Copiar o reproducir el contenido sin autorización</li>
                    <li>• Uso comercial no autorizado</li>
                    <li>• Actividades ilegales o fraudulentas</li>
                    <li>• Interferir con el funcionamiento del sitio</li>
                    <li>• Intentos de hacking o acceso no autorizado</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
                4. Limitaciones y Descargos de Responsabilidad
              </h2>
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Importante: Uso de las Calculadoras</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    • Las calculadoras proporcionan <strong>estimaciones orientativas</strong> basadas en la normativa
                    vigente
                  </li>
                  <li>
                    • Los resultados <strong>no constituyen asesoramiento legal, fiscal o financiero</strong>{" "}
                    profesional
                  </li>
                  <li>• Recomendamos consultar con profesionales cualificados para decisiones importantes</li>
                  <li>• La normativa puede cambiar y afectar los cálculos</li>
                  <li>• No garantizamos la exactitud absoluta de los resultados</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Propiedad Intelectual</h2>
              <p className="text-gray-700 mb-4">
                Todo el contenido del sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, iconos,
                imágenes, clips de audio, descargas digitales, compilaciones de datos y software, es propiedad de
                Calculord o de sus proveedores de contenido y está protegido por las leyes de derechos de autor
                españolas e internacionales.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Licencia de Uso</h4>
                <p className="text-gray-700 text-sm">
                  Se te otorga una licencia limitada, no exclusiva, no transferible y revocable para acceder y utilizar
                  el sitio web únicamente para fines personales y no comerciales, de acuerdo con estos términos.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacidad y Datos Personales</h2>
              <p className="text-gray-700 mb-4">
                Tu privacidad es importante para nosotros. El uso de nuestros servicios también está sujeto a nuestra{" "}
                <a href="/politica-de-privacidad" className="text-blue-600 hover:underline">
                  Política de Privacidad
                </a>
                , que describe cómo recopilamos, utilizamos y protegemos tu información.
              </p>
              <p className="text-gray-700 mb-4">
                Al utilizar nuestros servicios, también aceptas nuestro uso de cookies según se describe en nuestra{" "}
                <a href="/politica-de-cookies" className="text-blue-600 hover:underline">
                  Política de Cookies
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Disponibilidad del Servicio</h2>
              <p className="text-gray-700 mb-4">
                Nos esforzamos por mantener el sitio web disponible las 24 horas del día, los 7 días de la semana. Sin
                embargo, podemos experimentar interrupciones ocasionales debido a:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Mantenimiento programado del sistema</li>
                <li>Actualizaciones de software</li>
                <li>Problemas técnicos imprevistos</li>
                <li>Circunstancias fuera de nuestro control</li>
              </ul>
              <p className="text-gray-700 mb-4">
                No garantizamos la disponibilidad ininterrumpida del servicio y no seremos responsables por
                interrupciones temporales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modificaciones del Servicio</h2>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del sitio web en
                cualquier momento, con o sin previo aviso. Esto incluye:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Funcionalidades de las calculadoras</li>
                <li>Diseño y estructura del sitio</li>
                <li>Contenido y recursos disponibles</li>
                <li>Términos y condiciones de uso</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Scale className="w-6 h-6 text-blue-600 mr-3" />
                9. Limitación de Responsabilidad
              </h2>
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <p className="text-gray-700 mb-4">
                  <strong>IMPORTANTE:</strong> En la máxima medida permitida por la ley, Calculord no será responsable
                  por:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Daños directos, indirectos, incidentales o consecuentes</li>
                  <li>• Pérdidas financieras derivadas del uso de nuestras calculadoras</li>
                  <li>• Decisiones tomadas basándose en los resultados de las calculadoras</li>
                  <li>• Errores en los cálculos debido a cambios normativos</li>
                  <li>• Interrupciones del servicio o pérdida de datos</li>
                  <li>• Contenido de terceros o enlaces externos</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Indemnización</h2>
              <p className="text-gray-700 mb-4">
                Aceptas indemnizar y eximir de responsabilidad a Calculord, sus directores, empleados, agentes y
                afiliados de cualquier reclamación, daño, obligación, pérdida, responsabilidad, costo o deuda, y gastos
                (incluyendo honorarios legales) que surjan de:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Tu uso del sitio web</li>
                <li>Tu violación de estos términos</li>
                <li>Tu violación de derechos de terceros</li>
                <li>Cualquier contenido que publiques o transmitas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Ley Aplicable y Jurisdicción</h2>
              <p className="text-gray-700 mb-4">
                Estos términos se regirán e interpretarán de acuerdo con las leyes de España. Cualquier disputa que
                surja en relación con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales
                españoles.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Resolución de Disputas:</strong> Antes de iniciar cualquier procedimiento legal, las partes
                  intentarán resolver las disputas mediante negociación de buena fe.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Terminación</h2>
              <p className="text-gray-700 mb-4">
                Podemos terminar o suspender tu acceso al sitio web inmediatamente, sin previo aviso o responsabilidad,
                por cualquier motivo, incluyendo sin limitación si incumples estos términos.
              </p>
              <p className="text-gray-700 mb-4">
                Puedes dejar de usar el sitio web en cualquier momento. Tras la terminación, tu derecho a usar el sitio
                web cesará inmediatamente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Divisibilidad</h2>
              <p className="text-gray-700 mb-4">
                Si alguna disposición de estos términos se considera inaplicable o inválida, dicha disposición se
                modificará e interpretará para lograr los objetivos de dicha disposición en la mayor medida posible bajo
                la ley aplicable, y las disposiciones restantes continuarán en pleno vigor y efecto.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Modificaciones de los Términos</h2>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán
                en vigor inmediatamente después de su publicación en el sitio web.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Notificación:</strong> Te notificaremos sobre cambios significativos actualizando la fecha de
                  "última actualización" en la parte superior de esta página. Es tu responsabilidad revisar estos
                  términos periódicamente.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contacto</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Si tienes preguntas sobre estos Términos de Servicio, puedes contactarnos:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700">
                      <strong>Email:</strong> legal@calculord.com
                    </p>
                    <p className="text-gray-700">
                      <strong>Sitio web:</strong> https://calculord.com/contacto
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <strong>Tiempo de respuesta:</strong> 5-7 días laborables
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
