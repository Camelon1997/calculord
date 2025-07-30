import type { Metadata } from "next"
import { Scale, Building, Mail, Globe } from "lucide-react"
import { Breadcrumbs } from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Aviso Legal | Calculord",
  description:
    "Aviso legal de Calculord. Información sobre la titularidad del sitio web, datos de contacto y cumplimiento de la LSSI española.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs currentPage="Aviso Legal" />

        <div className="bg-white rounded-lg shadow-sm p-8 mt-6">
          <div className="text-center mb-8">
            <Scale className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Aviso Legal</h1>
            <p className="text-gray-600">Última actualización: 1 de enero de 2025</p>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Building className="w-6 h-6 text-blue-600 mr-3" />
                1. Datos Identificativos
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Titular del Sitio Web</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>
                        <strong>Denominación:</strong> Calculord
                      </li>
                      <li>
                        <strong>Dominio:</strong> https://calculord.com
                      </li>
                      <li>
                        <strong>Actividad:</strong> Plataforma de calculadoras laborales y financieras
                      </li>
                      <li>
                        <strong>País:</strong> España
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Datos de Contacto</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>
                        <strong>Email:</strong> info@calculord.com
                      </li>
                      <li>
                        <strong>Email legal:</strong> legal@calculord.com
                      </li>
                      <li>
                        <strong>Sitio web:</strong> https://calculord.com
                      </li>
                      <li>
                        <strong>Formulario:</strong>{" "}
                        <a href="/contacto" className="text-blue-600 hover:underline">
                          Página de contacto
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Globe className="w-6 h-6 text-blue-600 mr-3" />
                2. Objeto y Ámbito de Aplicación
              </h2>
              <p className="text-gray-700 mb-4">
                El presente aviso legal regula el uso del sitio web <strong>https://calculord.com</strong> (en adelante,
                "el sitio web"), que pone a disposición de los usuarios de Internet información y servicios relacionados
                con calculadoras laborales y financieras.
              </p>
              <p className="text-gray-700 mb-4">
                El acceso y uso del sitio web atribuye la condición de usuario del mismo e implica la aceptación plena y
                sin reservas de todas y cada una de las disposiciones incluidas en este aviso legal.
              </p>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Servicios Ofrecidos</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Calculadoras de salarios y nóminas</li>
                  <li>• Calculadoras de cotizaciones a la Seguridad Social</li>
                  <li>• Calculadoras de IRPF para trabajadores y autónomos</li>
                  <li>• Calculadoras financieras (hipotecas, ahorros)</li>
                  <li>• Herramientas de recursos humanos</li>
                  <li>• Información y recursos sobre legislación laboral</li>
                  <li>• Blog con contenido especializado</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Condiciones de Uso</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Uso Autorizado</h3>
              <p className="text-gray-700 mb-4">
                El usuario se compromete a utilizar el sitio web de conformidad con la ley, el presente aviso legal, las
                buenas costumbres y el orden público. Queda prohibido el uso del sitio web con fines ilícitos o lesivos,
                o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal
                utilización del sitio web.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Responsabilidad del Usuario</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Prohibiciones</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Realizar actividades publicitarias o comerciales no autorizadas</li>
                    <li>• Introducir virus, programas maliciosos o dañinos</li>
                    <li>• Intentar acceder a áreas restringidas</li>
                    <li>• Reproducir, copiar o distribuir contenidos sin autorización</li>
                    <li>• Utilizar el sitio para actividades ilegales</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Obligaciones</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Proporcionar información veraz y actualizada</li>
                    <li>• Respetar los derechos de propiedad intelectual</li>
                    <li>• No interferir con el funcionamiento del sitio</li>
                    <li>• Cumplir con la legislación aplicable</li>
                    <li>• Usar las calculadoras de forma responsable</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Propiedad Intelectual e Industrial</h2>
              <p className="text-gray-700 mb-4">
                Todos los contenidos del sitio web, incluyendo a título enunciativo pero no limitativo, textos,
                fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos
                fuente, constituyen una obra cuya propiedad pertenece a Calculord, sin que puedan entenderse cedidos al
                usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario
                para el correcto uso del sitio web.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Derechos Reservados</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Quedan expresamente prohibidas la reproducción, distribución y comunicación pública, incluida su
                  modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con
                  fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de
                  Calculord.
                </p>
                <p className="text-gray-700 text-sm">
                  El usuario se compromete a respetar los derechos de Propiedad Intelectual e Industrial titularidad de
                  Calculord.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Exclusión de Garantías y Responsabilidad</h2>

              <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">⚠️ Importante: Limitaciones de Responsabilidad</h3>
                <p className="text-gray-700 mb-3">
                  Calculord no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza
                  que pudieran ocasionar:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Errores u omisiones en los contenidos</li>
                  <li>• Falta de disponibilidad del portal o transmisión de virus o programas maliciosos</li>
                  <li>• Uso indebido o inadecuado del sitio web</li>
                  <li>• Decisiones tomadas basándose en la información proporcionada</li>
                  <li>• Resultados de las calculadoras utilizados para fines no previstos</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Sobre las Calculadoras</h3>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Descargo específico:</strong> Las calculadoras proporcionan estimaciones basadas en la
                  normativa vigente en el momento de su desarrollo. Los resultados son orientativos y no constituyen
                  asesoramiento profesional. Se recomienda consultar con profesionales cualificados para decisiones
                  importantes.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Enlaces</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Enlaces desde nuestro sitio web</h3>
              <p className="text-gray-700 mb-4">
                En el caso de que en el sitio web se dispusiesen enlaces o hipervínculos hacia otros sitios de Internet,
                Calculord no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso Calculord
                asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Enlaces hacia nuestro sitio web</h3>
              <p className="text-gray-700 mb-4">
                El establecimiento de un hipervínculo no implica en ningún caso la existencia de relaciones entre
                Calculord y el propietario del sitio web en la que se establezca, ni la aceptación y aprobación por
                parte de Calculord de sus contenidos o servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Protección de Datos Personales</h2>
              <p className="text-gray-700 mb-4">
                Para utilizar algunos de los servicios, el usuario deberá facilitar previamente ciertos datos de
                carácter personal. Calculord tratará automatizadamente estos datos y aplicará las correspondientes
                medidas de seguridad, todo ello en cumplimiento del RGPD, la LOPD-GDD y demás normativa aplicable.
              </p>
              <p className="text-gray-700 mb-4">
                Para más información, consulta nuestra{" "}
                <a href="/politica-de-privacidad" className="text-blue-600 hover:underline">
                  Política de Privacidad
                </a>{" "}
                y nuestra{" "}
                <a href="/politica-de-cookies" className="text-blue-600 hover:underline">
                  Política de Cookies
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies</h2>
              <p className="text-gray-700 mb-4">
                El sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación del usuario
                y ofrecer contenidos de interés. Para más información sobre nuestra política de cookies, consulta
                nuestra{" "}
                <a href="/politica-de-cookies" className="text-blue-600 hover:underline">
                  Política de Cookies
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Legislación Aplicable y Jurisdicción</h2>
              <p className="text-gray-700 mb-4">
                La relación entre Calculord y el usuario se regirá por la normativa española vigente y cualquier
                controversia se someterá a los Juzgados y Tribunales de la ciudad de España que corresponda según la
                legislación vigente.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Normativa aplicable:</strong> Este aviso legal se rige por la Ley 34/2002, de 11 de julio, de
                  Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), el Reglamento General de
                  Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
                  Personales y garantía de los derechos digitales (LOPD-GDD).
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modificaciones</h2>
              <p className="text-gray-700 mb-4">
                Calculord se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas
                en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a
                través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Vigencia:</strong> La vigencia de las presentes condiciones generales coincidirá con el tiempo
                  de su exposición y hasta que no sean modificadas por otras debidamente publicadas.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-3" />
                11. Contacto
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Para cualquier consulta relacionada con este aviso legal, puedes contactarnos:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700">
                      <strong>Email general:</strong> info@calculord.com
                    </p>
                    <p className="text-gray-700">
                      <strong>Email legal:</strong> legal@calculord.com
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <strong>Formulario:</strong>{" "}
                      <a href="/contacto" className="text-blue-600 hover:underline">
                        Página de contacto
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <strong>Tiempo de respuesta:</strong> 5-7 días laborables
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
