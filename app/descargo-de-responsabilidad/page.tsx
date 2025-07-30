import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumbs from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Descargo de Responsabilidad - Calculord",
  description:
    "Descargo de responsabilidad de Calculord. Limitaciones sobre la exactitud de cálculos y recomendaciones para el uso de nuestras calculadoras.",
  robots: {
    index: true,
    follow: true,
  },
}

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Descargo de Responsabilidad", href: "/descargo-de-responsabilidad" },
]

export default function DescargoResponsabilidadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Descargo de Responsabilidad</h1>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-8">
                <strong>Última actualización:</strong> 30 de enero de 2025
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h2 className="text-xl font-semibold text-red-900 mb-3">⚠️ Aviso Importante</h2>
                <p className="text-red-800 text-sm">
                  Las calculadoras y herramientas proporcionadas en Calculord son únicamente para fines informativos y
                  educativos. Los resultados obtenidos son estimaciones aproximadas y no constituyen asesoramiento
                  profesional legal, fiscal, financiero o laboral.
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Naturaleza de la Información</h2>
                <p className="text-gray-600 mb-4">
                  Toda la información, calculadoras, herramientas y contenido proporcionado en Calculord (el
                  "Contenido") se ofrece únicamente con fines informativos y educativos generales.
                </p>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-medium text-yellow-900 mb-3">El Contenido NO constituye:</h3>
                  <ul className="list-disc list-inside text-yellow-800 text-sm space-y-2">
                    <li>Asesoramiento legal, fiscal o financiero profesional</li>
                    <li>Consultoría laboral o de recursos humanos</li>
                    <li>Recomendaciones de inversión o planificación financiera</li>
                    <li>Interpretación oficial de normativas o regulaciones</li>
                    <li>Sustituto de la consulta con profesionales cualificados</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Limitaciones de las Calculadoras</h2>

                <div className="space-y-6">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-medium text-orange-900 mb-2">📊 Exactitud de los Cálculos</h3>
                    <ul className="list-disc list-inside text-orange-800 text-sm space-y-1">
                      <li>
                        Los resultados son <strong>estimaciones aproximadas</strong> basadas en los datos introducidos
                      </li>
                      <li>Pueden existir diferencias con cálculos oficiales o profesionales</li>
                      <li>No consideran todas las variables o circunstancias específicas</li>
                      <li>Están sujetos a cambios en la normativa vigente</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">📅 Actualización de Datos</h3>
                    <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                      <li>Los tipos, porcentajes y bases de cálculo pueden cambiar</li>
                      <li>La normativa laboral y fiscal se actualiza periódicamente</li>
                      <li>Pueden existir desfases entre cambios normativos y actualizaciones del sitio</li>
                      <li>Recomendamos verificar siempre con fuentes oficiales</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-medium text-purple-900 mb-2">🎯 Casos Específicos</h3>
                    <ul className="list-disc list-inside text-purple-800 text-sm space-y-1">
                      <li>Cada situación personal o empresarial es única</li>
                      <li>Pueden aplicarse excepciones o reglas especiales</li>
                      <li>Las calculadoras no contemplan todos los escenarios posibles</li>
                      <li>Situaciones complejas requieren análisis profesional</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Exclusión de Responsabilidad</h2>

                <div className="bg-red-50 p-6 rounded-lg mb-4">
                  <h3 className="font-medium text-red-900 mb-3">Calculord NO se hace responsable de:</h3>
                  <ul className="list-disc list-inside text-red-800 text-sm space-y-2">
                    <li>
                      <strong>Decisiones tomadas</strong> basándose únicamente en nuestros cálculos
                    </li>
                    <li>
                      <strong>Pérdidas económicas</strong> derivadas del uso de nuestras herramientas
                    </li>
                    <li>
                      <strong>Errores u omisiones</strong> en los resultados proporcionados
                    </li>
                    <li>
                      <strong>Diferencias</strong> con cálculos oficiales o profesionales
                    </li>
                    <li>
                      <strong>Consecuencias legales</strong> de decisiones basadas en nuestro contenido
                    </li>
                    <li>
                      <strong>Problemas fiscales</strong> o laborales derivados del uso del sitio
                    </li>
                  </ul>
                </div>

                <p className="text-gray-600">
                  El usuario asume toda la responsabilidad por el uso que haga de la información y herramientas
                  proporcionadas en este sitio web.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Recomendaciones de Uso</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-900 mb-2">✅ Uso Recomendado</h3>
                    <ul className="list-disc list-inside text-green-800 text-sm space-y-1">
                      <li>Como herramienta de orientación inicial</li>
                      <li>Para obtener estimaciones aproximadas</li>
                      <li>Como complemento a asesoramiento profesional</li>
                      <li>Para comparar diferentes escenarios</li>
                      <li>Con fines educativos y de aprendizaje</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-medium text-red-900 mb-2">❌ Uso NO Recomendado</h3>
                    <ul className="list-disc list-inside text-red-800 text-sm space-y-1">
                      <li>Como única fuente para decisiones importantes</li>
                      <li>Para cálculos oficiales o legales</li>
                      <li>Sin verificación con profesionales</li>
                      <li>En situaciones complejas o atípicas</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-6">
                  <h3 className="font-medium text-blue-900 mb-3">💡 Consejo Importante</h3>
                  <p className="text-blue-800 text-sm">
                    <strong>Siempre consulta con profesionales cualificados</strong> (asesores fiscales, laboralistas,
                    gestores, abogados) antes de tomar decisiones importantes basadas en los cálculos obtenidos en
                    nuestro sitio web.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Fuentes de Información</h2>
                <p className="text-gray-600 mb-4">
                  Nuestras calculadoras se basan en información pública disponible de fuentes oficiales, pero no
                  garantizamos que esté siempre actualizada o sea completamente exacta.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-3">Fuentes Principales</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>
                      • <strong>Ministerio de Trabajo y Economía Social:</strong> SMI, cotizaciones sociales
                    </li>
                    <li>
                      • <strong>Agencia Tributaria (AEAT):</strong> Tipos de IRPF, deducciones fiscales
                    </li>
                    <li>
                      • <strong>Seguridad Social:</strong> Bases y tipos de cotización
                    </li>
                    <li>
                      • <strong>BOE (Boletín Oficial del Estado):</strong> Normativa vigente
                    </li>
                    <li>
                      • <strong>Banco de España:</strong> Tipos de interés de referencia
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-4">
                    <strong>Nota:</strong> Recomendamos consultar siempre las fuentes oficiales para obtener la
                    información más actualizada y precisa.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cambios en la Normativa</h2>
                <p className="text-gray-600 mb-4">
                  La normativa laboral, fiscal y financiera cambia frecuentemente. Aunque nos esforzamos por mantener
                  nuestras calculadoras actualizadas, pueden existir desfases.
                </p>

                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-medium text-yellow-900 mb-2">📅 Actualizaciones Frecuentes</h3>
                    <ul className="list-disc list-inside text-yellow-800 text-sm space-y-1">
                      <li>SMI (Salario Mínimo Interprofesional) - Anual</li>
                      <li>Tipos de cotización a la Seguridad Social - Anual</li>
                      <li>Tramos y deducciones del IRPF - Anual</li>
                      <li>Prestaciones por desempleo - Según normativa</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-medium text-orange-900 mb-2">⚡ Cambios Urgentes</h3>
                    <p className="text-orange-800 text-sm">
                      En situaciones excepcionales (crisis económicas, cambios legislativos urgentes), la normativa
                      puede cambiar con poca antelación. Siempre verifica con fuentes oficiales.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitaciones Técnicas</h2>
                <p className="text-gray-600 mb-4">
                  Nuestras calculadoras tienen limitaciones técnicas que pueden afectar a la precisión de los
                  resultados:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">🔢 Redondeos</h3>
                    <p className="text-blue-800 text-sm">
                      Los cálculos pueden incluir redondeos que generen pequeñas diferencias con cálculos manuales o
                      profesionales.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-medium text-purple-900 mb-2">📊 Simplificaciones</h3>
                    <p className="text-purple-800 text-sm">
                      Para facilitar el uso, algunas calculadoras simplifican procesos complejos, lo que puede afectar a
                      la precisión en casos específicos.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-900 mb-2">🎯 Casos Generales</h3>
                    <p className="text-green-800 text-sm">
                      Las calculadoras están diseñadas para casos generales y pueden no contemplar situaciones
                      específicas o excepcionales.
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-medium text-red-900 mb-2">⏱️ Tiempo Real</h3>
                    <p className="text-red-800 text-sm">
                      Los cálculos se realizan con la información disponible en el momento, que puede no reflejar
                      cambios muy recientes.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Uso Profesional</h2>

                <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                  <h3 className="font-medium text-yellow-900 mb-3">⚠️ Para Profesionales</h3>
                  <p className="text-yellow-800 text-sm mb-3">
                    Si eres asesor, gestor, abogado o profesional que utiliza nuestras herramientas:
                  </p>
                  <ul className="list-disc list-inside text-yellow-800 text-sm space-y-1">
                    <li>Verifica siempre los resultados con tus propios cálculos</li>
                    <li>No bases decisiones profesionales únicamente en nuestros resultados</li>
                    <li>Informa a tus clientes sobre las limitaciones de las estimaciones</li>
                    <li>Mantente actualizado con los cambios normativos oficiales</li>
                  </ul>
                </div>

                <p className="text-gray-600">
                  Los profesionales que utilicen nuestras herramientas lo hacen bajo su propia responsabilidad y deben
                  aplicar su criterio profesional en todos los casos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contacto y Mejoras</h2>
                <p className="text-gray-600 mb-4">
                  Aunque no podemos garantizar la exactitud absoluta, nos esforzamos por mejorar continuamente nuestras
                  calculadoras. Si detectas errores o tienes sugerencias:
                </p>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-medium text-green-900 mb-3">📧 Cómo Contactarnos</h3>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>
                      <strong>Email general:</strong> info@calculord.com
                    </li>
                    <li>
                      <strong>Errores técnicos:</strong> soporte@calculord.com
                    </li>
                    <li>
                      <strong>Formulario:</strong>{" "}
                      <Link href="/contacto" className="underline">
                        calculord.com/contacto
                      </Link>
                    </li>
                    <li>
                      <strong>Asunto sugerido:</strong> "Error en calculadora [nombre]" o "Sugerencia de mejora"
                    </li>
                  </ul>
                  <p className="text-xs text-green-700 mt-3">
                    Agradecemos tu colaboración para mejorar nuestros servicios, aunque no podemos garantizar respuesta
                    individual a todas las consultas.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Aceptación de Limitaciones</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-blue-800 mb-4">
                    <strong>Al utilizar Calculord, aceptas expresamente:</strong>
                  </p>
                  <ul className="list-disc list-inside text-blue-800 text-sm space-y-2">
                    <li>Que los resultados son estimaciones aproximadas</li>
                    <li>Que no constituyen asesoramiento profesional</li>
                    <li>Que debes verificar los resultados con profesionales cualificados</li>
                    <li>Que asumes toda la responsabilidad por las decisiones tomadas</li>
                    <li>Que Calculord no se hace responsable de las consecuencias del uso</li>
                  </ul>
                </div>
              </section>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500 mb-4">
                  Este Descargo de Responsabilidad forma parte integral de nuestros documentos legales y debe leerse
                  junto con nuestros Términos de Servicio, Política de Privacidad y Aviso Legal.
                </p>

                <div className="flex flex-wrap gap-2 text-sm">
                  <Link href="/terminos-de-servicio" className="text-blue-600 hover:underline">
                    Términos de Servicio
                  </Link>
                  <span className="text-gray-400">•</span>
                  <Link href="/politica-de-privacidad" className="text-blue-600 hover:underline">
                    Política de Privacidad
                  </Link>
                  <span className="text-gray-400">•</span>
                  <Link href="/aviso-legal" className="text-blue-600 hover:underline">
                    Aviso Legal
                  </Link>
                  <span className="text-gray-400">•</span>
                  <Link href="/contacto" className="text-blue-600 hover:underline">
                    Contacto
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
