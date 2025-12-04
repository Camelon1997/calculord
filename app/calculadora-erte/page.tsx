import type { Metadata } from "next"
import CalculadoraERTE from "./CalculadoraERTE"
import { Breadcrumbs } from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "🔥 Calculadora ERTE 2025 | Prestación por ERTE + Guía Completa | Calculord",
  description:
    "✅ Calcula tu PRESTACIÓN por ERTE 2025. 📊 Base reguladora, cuantía exacta, topes máximos/mínimos. 💰 Requisitos y diferencias con el paro. 🆓 Herramienta gratuita oficial.",
  keywords: [
    "calculadora ERTE 2025",
    "prestación por ERTE",
    "cuánto se cobra ERTE",
    "ERTE expediente regulación temporal empleo",
    "base reguladora ERTE",
    "topes ERTE 2025",
    "ERTE vs paro diferencias",
    "requisitos ERTE España",
    "cuantía ERTE",
    "calculadora desempleo ERTE",
    "ERTE fuerza mayor",
    "ERTE causas económicas",
    "prestación desempleo ERTE",
    "SEPE ERTE",
    "derechos trabajadores ERTE",
    "ERTE suspensión contrato",
    "ERTE reducción jornada",
    "calculadora laboral ERTE",
    "cotización durante ERTE",
    "herramientas ERTE gratuitas",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com/calculadora-erte",
  },
  openGraph: {
    title: "🔥 Calculadora ERTE 2025 | Prestación por ERTE + Guía Completa | Calculord",
    description:
      "✅ Calcula prestación por ERTE. 📊 Base reguladora, cuantía exacta, topes 2025. 💰 Requisitos actualizados. 🆓",
    url: "https://calculord.com/calculadora-erte",
    siteName: "Calculord",
    images: [
      {
        url: "/og-erte.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de ERTE 2025 - Prestación por ERTE",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🔥 Calculadora ERTE 2025 | Prestación por ERTE",
    description: "✅ Calcula prestación por ERTE. Base reguladora, cuantía exacta, topes 2025. 🆓",
    images: ["/og-erte.jpg"],
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

const webAppStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de ERTE 2025",
  description:
    "Calculadora gratuita para calcular la prestación por ERTE (Expediente de Regulación Temporal de Empleo) según los criterios del SEPE.",
  url: "https://calculord.com/calculadora-erte",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Base reguladora ERTE",
    "Cuantía prestación ERTE",
    "Topes máximos y mínimos 2025",
    "Diferencias ERTE vs paro",
    "Requisitos ERTE",
    "Cálculo SEPE oficial",
  ],
  creator: {
    "@type": "Organization",
    name: "Calculord",
  },
  dateModified: "2025-12-04",
  inLanguage: "es-ES",
  isAccessibleForFree: true,
}

const faqData = [
  {
    q: "¿Cuánto se cobra estando en ERTE?",
    a: "Se cobra el 70% de la base reguladora los primeros 6 meses (180 días) y el 60% a partir del séptimo mes. La base reguladora es el promedio de las cotizaciones de los últimos 180 días trabajados. Existen topes máximos y mínimos según si tienes hijos a cargo.",
  },
  {
    q: "¿Qué diferencia hay entre ERTE y paro?",
    a: "El ERTE es una suspensión temporal del contrato (sigues siendo empleado de la empresa), mientras que el paro se solicita tras el fin de la relación laboral. En ERTE, la empresa cotiza por ti y mantienes tu antigüedad, lo que no ocurre en el paro normal.",
  },
  {
    q: "¿Cuánto tiempo puedo estar en ERTE?",
    a: "La duración del ERTE la decide la empresa según las necesidades. La prestación por desempleo durante el ERTE no consume tu derecho a paro futuro si es por fuerza mayor, pero sí lo consume parcialmente si es por causas económicas, técnicas, organizativas o de producción (ETOP).",
  },
  {
    q: "¿Tengo que hacer algo para cobrar la prestación por ERTE?",
    a: "La empresa es la responsable de tramitar el ERTE y comunicarte. Tú debes inscribirte como demandante de empleo y solicitar la prestación al SEPE. Es importante hacerlo en plazo para no perder días de prestación.",
  },
]

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

export default function ERTEPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([webAppStructuredData, faqStructuredData]) }}
      />
      <Breadcrumbs currentPage="Calculadora de ERTE" />
      <CalculadoraERTE />
    </>
  )
}
