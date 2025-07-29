import type { Metadata } from "next"
import {
  Briefcase,
  CheckCircle,
  AlertTriangle,
  FileText,
  Shield,
  Calendar,
  Banknote,
  UserX,
  Gavel,
  Scale,
  FileWarning,
} from "lucide-react"
import CalculadoraDespidos from "./CalculadoraDespidos"
import { RelatedCalculatorCard } from "../components/RelatedCalculatorCard"
import { Breadcrumbs } from "../components/Breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Calculadora Despido 2025: Indemnización y Finiquito | Guía Completa",
  description:
    "Calcula tu indemnización por despido y finiquito para 2025. Guía completa sobre despido improcedente, objetivo y disciplinario. Conoce tus derechos, plazos y cómo actuar.",
  keywords: [
    "calculadora despido",
    "calculadora indemnizacion por despido",
    "calcular finiquito",
    "despido improcedente",
    "despido objetivo",
    "indemnizacion laboral 2025",
    "derechos del trabajador",
    "despido nulo",
    "firmar no conforme",
    "plazo reclamar despido",
    "FOGASA",
    "despido baja medica",
    "carta de despido",
  ],
}

const tiposDespidoData = [
  {
    nombre: "Despido Improcedente",
    descripcion: "Despido sin causa justificada o con defectos de forma.",
    resultado: "33 días",
    subtexto: "por año trabajado",
    maximo: "Máximo 24 mensualidades",
    icon: <AlertTriangle className="h-8 w-8 text-red-600" />,
    color: "red",
  },
  {
    nombre: "Despido Objetivo",
    descripcion: "Por causas económicas, técnicas, organizativas o de producción.",
    resultado: "20 días",
    subtexto: "por año trabajado",
    maximo: "Máximo 12 mensualidades",
    icon: <FileText className="h-8 w-8 text-blue-600" />,
    color: "blue",
  },
  {
    nombre: "Despido Disciplinario",
    descripcion: "Por una falta muy grave del trabajador. Si se declara improcedente, aplican 33 días/año.",
    resultado: "Sin indemnización",
    subtexto: "Solo finiquito (si es procedente)",
    icon: <Gavel className="h-8 w-8 text-orange-600" />,
    color: "orange",
  },
  {
    nombre: "Despido Nulo",
    descripcion: "Vulnera derechos fundamentales o es discriminatorio.",
    resultado: "Readmisión",
    subtexto: "+ Salarios de tramitación",
    icon: <Briefcase className="h-8 w-8 text-purple-600" />,
    color: "purple",
  },
  {
    nombre: "Despido Procedente",
    descripcion: "La empresa acredita la causa del despido disciplinario u objetivo.",
    resultado: "Según la causa",
    subtexto: "0 (disciplinario) o 20 días (objetivo)",
    icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    color: "green",
  },
]

const faqData = [
  {
    q: "¿Qué diferencia hay entre finiquito e indemnización?",
    a: "El finiquito es el dinero que la empresa te debe siempre (salario del mes, vacaciones no disfrutadas, pagas extra prorrateadas). La indemnización es una compensación adicional que solo se paga en ciertos tipos de despido, como el improcedente o el objetivo.",
  },
  {
    q: "¿Cuánto tiempo tengo para reclamar si no estoy de acuerdo con mi despido?",
    a: "El plazo para impugnar un despido es de 20 días hábiles (no cuentan sábados, domingos ni festivos) desde la fecha de efecto del despido. Es un plazo de caducidad, por lo que es crucial actuar rápido.",
  },
  {
    q: "¿Tengo derecho a paro si me despiden?",
    a: "Sí, siempre que el despido no sea por baja voluntaria y cumplas los requisitos de cotización (haber trabajado y cotizado al menos 360 días en los últimos 6 años), tendrás derecho a la prestación por desempleo.",
  },
  {
    q: "Mi despido es disciplinario, ¿significa que no cobraré nada?",
    a: "Si el despido disciplinario es declarado procedente, no tienes derecho a indemnización, pero sí a tu finiquito. Sin embargo, si un juez lo declara improcedente, tendrás derecho a la indemnización de 33 días por año.",
  },
  {
    q: "¿La indemnización por despido paga impuestos (IRPF)?",
    a: "La indemnización por despido está exenta de tributar en el IRPF hasta un límite de 180.000 euros, siempre que sea la cantidad establecida como obligatoria por ley. Cualquier cantidad que exceda este límite o que se pacte por encima de lo legal sí tributará.",
  },
  {
    q: "¿Qué pasa si me despiden estando de baja médica?",
    a: "Despedir a un trabajador por el simple hecho de estar de baja médica puede ser declarado nulo si se considera discriminatorio por razón de enfermedad. En otros casos, podría ser improcedente. Es una situación compleja que requiere asesoramiento legal inmediato.",
  },
  {
    q: "¿Qué es el FOGASA y cuándo interviene?",
    a: "El Fondo de Garantía Salarial (FOGASA) es un organismo público que garantiza el pago de salarios e indemnizaciones a los trabajadores en caso de insolvencia o concurso de acreedores de la empresa. Cubre hasta ciertos límites legales.",
  },
]

const webAppStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de Despido e Indemnización 2025",
  description:
    "Calcula tu indemnización por despido y finiquito para 2025. Herramienta para despido improcedente, objetivo y disciplinario.",
  url: "https://calculord.com/calculadora-despidos",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Cálculo indemnización despido improcedente",
    "Cálculo indemnización despido objetivo",
    "Cálculo de finiquito",
    "Guía de tipos de despido",
    "Protocolo de actuación",
  ],
  creator: {
    "@type": "Organization",
    name: "Calculord",
  },
  dateModified: "2025-07-29",
  inLanguage: "es-ES",
  isAccessibleForFree: true,
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
}

export default function CalculadoraDespidosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([webAppStructuredData, faqStructuredData]) }}
      />
      <Breadcrumbs currentPage="Calculadora de Despidos" />

      <section className="bg-gradient-to-br from-red-50 via-orange-50 to-red-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/70 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
            <UserX className="h-12 w-12 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Calculadora de Despido e Indemnización 2025
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Calcula de forma precisa tu indemnización y finiquito. Conoce tus derechos laborales ante un despido
            objetivo, disciplinario o improcedente y aprende cómo actuar.
          </p>
        </div>
      </section>

      <section id="calculadora" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Calcula tu Liquidación</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Introduce tus datos laborales para obtener una estimación detallada de lo que te corresponde.
            </p>
          </div>
          <CalculadoraDespidos />
          <Alert variant="default" className="max-w-4xl mx-auto mt-8 bg-blue-50 border-blue-200">
            <AlertTriangle className="h-5 w-5 text-blue-600" />
            <AlertTitle className="font-bold text-blue-800">Aviso Legal</AlertTitle>
            <AlertDescription className="text-blue-700">
              Esta herramienta ofrece una estimación y no sustituye el asesoramiento de un profesional. Las condiciones
              pueden variar según tu convenio colectivo y situación particular.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
            <Scale className="w-8 h-8 mr-3 text-blue-600" />
            Finiquito vs. Indemnización: ¿Cuál es la diferencia?
          </h2>
          <p>
            Es una de las dudas más comunes al finalizar una relación laboral. Aunque a menudo se usan como sinónimos,
            son conceptos totalmente diferentes con implicaciones legales y económicas distintas.
          </p>
          <p>
            El <strong>finiquito</strong> es la liquidación de las cantidades que la empresa te debe en el momento de
            finalizar el contrato, independientemente de la causa. Siempre tienes derecho a recibirlo. La{" "}
            <strong>indemnización</strong>, en cambio, es una compensación económica que la empresa paga al trabajador
            por el perjuicio causado por la pérdida del empleo, y solo corresponde en ciertos tipos de despido.
          </p>
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-xl text-green-800 mb-3">Finiquito (Siempre)</h3>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Salario de los días trabajados en el mes en curso.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Parte proporcional de las pagas extraordinarias.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Vacaciones no disfrutadas.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Horas extras o pluses pendientes de pago.</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-xl text-red-800 mb-3">Indemnización (Solo a veces)</h3>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Compensación por la extinción del contrato.</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Depende del tipo de despido (objetivo, improcedente).</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Se calcula según salario y antigüedad.</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <span>No corresponde en bajas voluntarias o despidos disciplinarios procedentes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="tipos-despido" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tipos de Despido en España</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El tipo de despido determina si tienes derecho a indemnización y la cuantía de la misma. Aquí te
              explicamos las claves de cada uno para que entiendas tu situación.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiposDespidoData.map((tipo) => (
              <Card
                key={tipo.nombre}
                className="border-gray-200/80 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-center flex flex-col"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-${tipo.color}-100`}
                  >
                    {tipo.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{tipo.nombre}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-gray-600 mb-6">{tipo.descripcion}</p>
                  <div className="bg-gray-100 p-4 rounded-lg mt-auto">
                    <div className={`text-2xl font-bold text-${tipo.color}-600 mb-1`}>{tipo.resultado}</div>
                    <div className="text-sm text-gray-500">{tipo.subtexto}</div>
                    {tipo.maximo && <div className="text-xs text-gray-400 mt-1">{tipo.maximo}</div>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <FileWarning className="w-8 h-8 mr-3 text-orange-500" />
              Protocolo de Actuación: ¿Qué Hacer si te Despiden?
            </h2>
            <p className="text-xl text-gray-600">
              Actuar correctamente en los primeros momentos es crucial para defender tus derechos. Sigue estos pasos.
            </p>
          </div>
          <ol className="space-y-6">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 font-bold rounded-full flex items-center justify-center mr-4">
                1
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800">Revisa la Carta de Despido</h4>
                <p className="text-gray-600">
                  Lee detenidamente la carta. Debe indicar la fecha de efecto y las causas del despido. Si no te la
                  entregan, exige una copia. Es un documento fundamental.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 font-bold rounded-full flex items-center justify-center mr-4">
                2
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800">Firma como "No Conforme"</h4>
                <p className="text-gray-600">
                  Al recibir la carta y el finiquito, escribe siempre "No Conforme" junto a tu firma y la fecha. Esto no
                  significa que rechaces el dinero, sino que te reservas el derecho a reclamar si no estás de acuerdo
                  con las causas o las cantidades.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 font-bold rounded-full flex items-center justify-center mr-4">
                3
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800">Contacta con un Profesional</h4>
                <p className="text-gray-600">
                  El plazo para demandar es de 20 días hábiles. Es muy corto. Busca asesoramiento legal de un abogado
                  laboralista lo antes posible para que revise tu caso y te indique las opciones.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 font-bold rounded-full flex items-center justify-center mr-4">
                4
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800">Solicita la Prestación por Desempleo</h4>
                <p className="text-gray-600">
                  Inscríbete como demandante de empleo en el servicio de empleo de tu comunidad y solicita la prestación
                  por desempleo (el paro) en el SEPE. Tienes 15 días hábiles desde el cese para hacerlo.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">Resolvemos las dudas más comunes sobre despidos laborales.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed pt-2">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Herramientas Relacionadas</h2>
            <p className="text-xl text-gray-600">Completa tu análisis con estas otras calculadoras laborales.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RelatedCalculatorCard
              icon={<Shield className="h-6 w-6 text-orange-600" />}
              title="Prestación por Desempleo"
              description="Calcula la cuantía y duración de tu paro según tu historial de cotización."
              features={["Base reguladora actualizada", "Duración según cotización", "Subsidio por desempleo"]}
              href="/calculadora-paro"
              buttonText="Calcular Prestación"
            />
            <RelatedCalculatorCard
              icon={<Banknote className="h-6 w-6 text-purple-600" />}
              title="Calculadora de Nómina"
              description="Entiende tu última nómina y los conceptos que la componen antes del finiquito."
              features={["Desglose de cotizaciones", "Retención de IRPF", "Salario neto mensual"]}
              href="/calculadora-nomina"
              buttonText="Calcular Nómina"
            />
            <RelatedCalculatorCard
              icon={<Calendar className="h-6 w-6 text-green-600" />}
              title="Calculadora de Vacaciones"
              description="Calcula los días de vacaciones que te corresponden y su valor en el finiquito."
              features={["Cálculo por convenio", "Vacaciones proporcionales", "Valor económico"]}
              href="/calculadora-vacaciones"
              buttonText="Calcular Vacaciones"
            />
          </div>
        </div>
      </section>
    </>
  )
}
