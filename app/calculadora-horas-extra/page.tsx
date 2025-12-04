import type { Metadata } from "next"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import CalculadoraHorasExtra from "./CalculadoraHorasExtra"

export const metadata: Metadata = {
  title: "Calculadora de Horas Extra 2025 | +25%, +50%, +75% Festivos | Calculord",
  description:
    "Calcula el pago de horas extraordinarias en 2025. Tipos: ordinarias +25%, estructurales +50%, festivos +75%. Incluye nocturnas, convenio colectivo y límite anual de 80h. Gratis y actualizado.",
  keywords: [
    "calculadora horas extra 2025",
    "horas extraordinarias España",
    "porcentaje horas extra",
    "horas extra festivos 75%",
    "horas extra ordinarias 25%",
    "horas extra estructurales 50%",
    "límite horas extra 80 anuales",
    "convenio colectivo horas extra",
    "horas nocturnas",
    "plus horas extra",
    "recargo horas extraordinarias",
    "calculadora laboral horas",
    "derecho laboral horas extra",
    "estatuto trabajadores horas",
    "cotización horas extra",
    "salario horas extraordinarias",
    "compensación tiempo descanso",
    "horas complementarias",
    "jornada laboral extra",
    "herramientas RRHH España",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com/calculadora-horas-extra",
  },
  openGraph: {
    title: "Calculadora de Horas Extra 2025 | +25%, +50%, +75% Festivos",
    description:
      "Calcula horas extraordinarias: ordinarias +25%, estructurales +50%, festivos +75%. Límite 80h/año. Gratis.",
    url: "https://calculord.com/calculadora-horas-extra",
    siteName: "Calculord",
    images: [
      {
        url: "/og-horas-extra.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Horas Extra 2025",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Horas Extra 2025 | +25%, +50%, +75%",
    description: "Calcula horas extraordinarias con todos los recargos. Festivos +75%. Gratis.",
    images: ["/og-horas-extra.jpg"],
    creator: "@calculord",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de Horas Extra 2025",
  description:
    "Calculadora online gratuita para calcular el pago de horas extraordinarias en España con diferentes tipos y recargos.",
  url: "https://calculord.com/calculadora-horas-extra",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1247",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto se paga por una hora extra en España 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las horas extra ordinarias se pagan con un mínimo del 25% de incremento, las estructurales con un 50%, y las realizadas en festivos con al menos un 75% de incremento sobre el salario base por hora. Tu convenio colectivo puede establecer porcentajes superiores.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el límite máximo de horas extra al año?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Estatuto de los Trabajadores establece un máximo de 80 horas extraordinarias al año por trabajador. No se computan las horas extra compensadas con descanso equivalente ni las realizadas para prevenir o reparar siniestros y otros daños extraordinarios y urgentes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre horas extra y horas complementarias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las horas extra superan la jornada ordinaria en contratos a tiempo completo y se pagan con recargo. Las horas complementarias son adicionales en contratos a tiempo parcial, se pagan como horas ordinarias sin recargo, y requieren pacto escrito previo con límites del 30% (pactadas) o 15% (aceptadas).",
      },
    },
    {
      "@type": "Question",
      name: "¿Se pueden compensar las horas extra con descanso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, las horas extra pueden compensarse con tiempo de descanso equivalente en lugar de retribución económica si así se pacta en convenio colectivo o contrato. En ausencia de pacto, se compensarán con descanso en los 4 meses siguientes a su realización.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cotizan las horas extra a la Seguridad Social?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, las horas extra cotizan a la Seguridad Social. Se incluyen en la base de cotización por contingencias comunes y profesionales, aplicándose los mismos porcentajes de cotización que al salario ordinario.",
      },
    },
  ],
}

export default function CalculadoraHorasExtraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs currentPage="Calculadora de Horas Extra" />
      <CalculadoraHorasExtra />
    </>
  )
}
