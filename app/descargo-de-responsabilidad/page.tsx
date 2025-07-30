import type { Metadata } from "next"
import { AlertTriangle, Calculator, TrendingUp, FileText, Users, Shield } from "lucide-react"
import { Breadcrumbs } from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Descargo de Responsabilidad | Calculord",
  description:
    "Descargo de responsabilidad de Calculord. Información importante sobre el uso de nuestras calculadoras laborales y financieras.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function DescargoResponsabilidadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs currentPage="Descargo de Responsabilidad" />

        <div className="bg-white rounded-lg shadow-sm p-8 mt-6">
          <div className="text-center mb-8">
            <AlertTriangle className="w-16 h-16 text-orange-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Descargo de Responsabilidad</h1>
            <p className="text-gray-600">Última actualización: 1 de enero de 2025</p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-8">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-lg font-semibold text-red-800 mb-2">⚠️ AVISO IMPORTANTE</h2>
                <p className="text-red-700">
                  Las calculadoras y herramientas proporcionadas en Calculord son únicamente para fines informativos y
                  educativos. Los resultados son estimaciones orientativas y no constituyen asesoramiento profesional
                  legal, fiscal, financiero o laboral.
                </p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Calculator className="w-6 h-6 text-blue-600 mr-3" />
                1. Naturaleza de las Calculadoras
              </h2>
              <p className="text-gray-700 mb-4">
                Las calculadoras laborales y financieras disponibles en Calculord están diseñadas para proporcionar
                estimaciones aproximadas basadas en:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>La normativa española vigente en el momento de su desarrollo</li>
                <li>Parámetros y variables estándar del mercado</li>
                <li>Fórmulas matemáticas generalmente aceptadas</li>
                <li>Datos públicos disponibles de organismos oficiales</li>
              </ul>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">✅ Para qué SÍ sirven</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Estimaciones orientativas</li>
                    <li>• Planificación inicial</li>
                    <li>• Comparación de escenarios</li>
                    <li>• Fines educativos</li>
                    <li>• Análisis preliminares</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">❌ Para qué NO sirven</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Decisiones financieras definitivas</li>
                    <li>• Cálculos oficiales o legales</li>
                    <li>• Sustituto de asesoramiento profesional</li>
                    <li>• Garantía de resultados exactos</li>
                    <li>• Compromisos contractuales</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                2. Limitaciones Específicas por Tipo de Calculadora
              </h2>

              <div className="space-y-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Calculadoras Laborales</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Incluye:</strong> Salarios, nóminas, cotizaciones SS, IRPF, vacaciones, despidos, paro
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Los convenios colectivos pueden modificar los cálculos</li>
                    <li>• Las circunstancias individuales afectan los resultados</li>
                    <li>• La normativa cambia frecuentemente</li>
                    <li>• Pueden existir bonificaciones o deducciones específicas</li>
                    <li>• Los cálculos no consideran todas las variables posibles</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Calculadoras Financieras</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Incluye:</strong> Hipotecas, ahorros, inversiones, préstamos
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Los tipos de interés fluctúan constantemente</li>
                    <li>• Las condiciones bancarias varían entre entidades</li>
                    <li>• No se incluyen todos los gastos asociados</li>
                    <li>• Los mercados financieros son impredecibles</li>
                    <li>• Las comisiones pueden diferir significativamente</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Calculadoras de RRHH</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Incluye:</strong> Coste empresa, productividad, ratios laborales
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Cada empresa tiene particularidades específicas</li>
                    <li>• Los sectores tienen normativas diferentes</li>
                    <li>• Las políticas internas afectan los cálculos</li>
                    <li>• Los beneficios sociales varían ampliamente</li>
                    <li>• Las subvenciones pueden modificar los costes</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                3. Factores que Pueden Afectar la Precisión
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Factores Normativos</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Cambios en la legislación laboral</li>
                    <li>Modificaciones en tipos impositivos</li>
                    <li>Actualizaciones del SMI</li>
                    <li>Nuevas bases de cotización</li>
                    <li>Reformas fiscales</li>
                    <li>Directivas europeas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Factores del Mercado</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Fluctuaciones de tipos de interés</li>
                    <li>Variaciones en índices económicos</li>
                    <li>Cambios en políticas bancarias</li>
                    <li>Condiciones específicas por sector</li>
                    <li>Situación económica general</li>
                    <li>Políticas monetarias</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700 text-sm">
                  <strong>Importante:</strong> Calculord se esfuerza por mantener actualizadas las calculadoras, pero no
                  puede garantizar que reflejen todos los cambios normativos o del mercado en tiempo real.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                4. Exclusión de Responsabilidades
              </h2>

              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800 mb-4">Calculord NO se hace responsable de:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Decisiones Basadas en Resultados</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Decisiones de contratación</li>
                      <li>• Inversiones financieras</li>
                      <li>• Solicitudes de préstamos</li>
                      <li>• Planificación fiscal</li>
                      <li>• Estrategias empresariales</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Consecuencias Derivadas</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Pérdidas económicas</li>
                      <li>• Sanciones administrativas</li>
                      <li>• Problemas legales</li>
                      <li>• Errores en declaraciones</li>
                      <li>• Incumplimientos normativos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                5. Recomendaciones de Uso Responsable
              </h2>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">✅ Buenas Prácticas</h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>
                      • <strong>Consulta profesional:</strong> Siempre consulta con asesores cualificados para
                      decisiones importantes
                    </li>
                    <li>
                      • <strong>Verificación:</strong> Contrasta los resultados con fuentes oficiales
                    </li>
                    <li>
                      • <strong>Actualización:</strong> Verifica que estés usando la normativa más reciente
                    </li>
                    <li>
                      • <strong>Contexto:</strong> Considera las circunstancias específicas de cada caso
                    </li>
                    <li>
                      • <strong>Múltiples fuentes:</strong> Utiliza varias herramientas para comparar resultados
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">🎯 Cuándo Buscar Asesoramiento Profesional</h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• Antes de tomar decisiones financieras importantes</li>
                    <li>• Para cálculos oficiales o legales</li>
                    <li>• En casos con circunstancias especiales</li>
                    <li>• Para optimización fiscal</li>
                    <li>• En situaciones de cambio normativo</li>
                    <li>• Para validar estrategias empresariales</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Profesionales Recomendados</h2>
              <p className="text-gray-700 mb-4">
                Para obtener asesoramiento profesional específico, recomendamos consultar con:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Temas Laborales</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Asesores laborales colegiados</li>
                    <li>• Graduados sociales</li>
                    <li>• Abogados laboralistas</li>
                    <li>• Consultores de RRHH</li>
                    <li>• Gestorías especializadas</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Temas Financieros</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Asesores fiscales</li>
                    <li>• Planificadores financieros</li>
                    <li>• Economistas colegiados</li>
                    <li>• Consultores bancarios</li>
                    <li>• Agentes de seguros</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Actualizaciones y Mantenimiento</h2>
              <p className="text-gray-700 mb-4">
                Calculord se compromete a mantener actualizadas sus calculadoras dentro de lo razonablemente posible,
                pero no puede garantizar:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Actualización inmediata tras cambios normativos</li>
                <li>Inclusión de todas las variables posibles</li>
                <li>Adaptación a casos específicos o excepcionales</li>
                <li>Disponibilidad ininterrumpida del servicio</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Colaboración:</strong> Si detectas errores o tienes sugerencias de mejora, puedes contactarnos
                  a través de nuestra{" "}
                  <a href="/contacto" className="text-blue-600 hover:underline">
                    página de contacto
                  </a>
                  .
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Fuentes de Información</h2>
              <p className="text-gray-700 mb-4">
                Las calculadoras de Calculord se basan en información obtenida de fuentes oficiales y reconocidas:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Organismos Oficiales</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Ministerio de Trabajo y Economía Social</li>
                    <li>• Agencia Tributaria (AEAT)</li>
                    <li>• Tesorería General de la Seguridad Social</li>
                    <li>• Banco de España</li>
                    <li>• Instituto Nacional de Estadística (INE)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Normativa de Referencia</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Estatuto de los Trabajadores</li>
                    <li>• Ley General de la Seguridad Social</li>
                    <li>• Ley del IRPF</li>
                    <li>• Convenios colectivos</li>
                    <li>• Reglamentos específicos</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contacto y Consultas</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Si tienes dudas sobre este descargo de responsabilidad o sobre el uso de nuestras calculadoras:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700">
                      <strong>Email:</strong> info@calculord.com
                    </p>
                    <p className="text-gray-700">
                      <strong>Soporte:</strong> soporte@calculord.com
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
                      <strong>Tiempo de respuesta:</strong> 24-48 horas
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
