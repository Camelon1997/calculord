import type { Metadata } from "next"
import CalculadoraParo from "./CalculadoraParo"
import { Breadcrumbs } from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "🔥 Calculadora Paro 2025 | Prestación Desempleo SEPE + Subsidio | Calculord",
  description:
    "✅ Calcula tu PRESTACIÓN por desempleo y subsidio SEPE 2025. 📊 Base reguladora, duración exacta, topes máximos/mínimos. 💰 Requisitos acceso y cuantías actualizadas. 🆓 Herramienta gratuita oficial.",
  keywords: [
    "calculadora paro 2025",
    "prestación por desempleo SEPE",
    "subsidio desempleo 2025",
    "base reguladora paro",
    "duración prestación desempleo",
    "topes paro 2025",
    "requisitos paro España",
    "cuantía prestación desempleo",
    "RAI renta activa inserción",
    "calculadora SEPE oficial",
    "desempleo contributivo",
    "subsidio mayores 52 años",
    "prestación desempleo máxima",
    "prestación desempleo mínima",
    "cotización desempleo 1.55",
    "periodo carencia paro",
    "renovación demanda empleo",
    "calculadora laboral paro",
    "derechos desempleados",
    "herramientas SEPE gratuitas",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com/calculadora-paro",
  },
  openGraph: {
    title: "🔥 Calculadora Paro 2025 | Prestación Desempleo SEPE + Subsidio | Calculord",
    description:
      "✅ Calcula prestación desempleo y subsidio SEPE. 📊 Base reguladora, duración, topes 2025. 💰 Requisitos actualizados. 🆓",
    url: "https://calculord.com/calculadora-paro",
    siteName: "Calculord",
    images: [
      {
        url: "/og-paro.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Paro 2025 - Prestación por Desempleo SEPE",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🔥 Calculadora Paro 2025 | Prestación Desempleo SEPE",
    description: "✅ Calcula prestación desempleo y subsidio. Base reguladora, duración, topes 2025. 🆓",
    images: ["/og-paro.jpg"],
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
  name: "Calculadora de Paro 2025",
  description:
    "Calculadora gratuita para calcular la prestación por desempleo, subsidio y duración según los criterios del SEPE.",
  url: "https://calculord.com/calculadora-paro",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Base reguladora",
    "Duración prestación",
    "Topes máximos y mínimos 2025",
    "Requisitos de acceso",
    "Subsidio por desempleo",
    "RAI",
    "Cálculo SEPE oficial",
  ],
  creator: {
    "@type": "Organization",
    name: "Calculord",
  },
  dateModified: "2025-07-29",
  inLanguage: "es-ES",
  isAccessibleForFree: true,
}

const faqData = [
  {
    q: "¿Cuánto tiempo tengo derecho a paro?",
    a: "La duración depende de los meses cotizados: de 12 a 17 meses cotizados = 4 meses de paro; de 18 a 23 meses = 6 meses; y así sucesivamente hasta un máximo de 24 meses de prestación con 72 meses cotizados.",
  },
  {
    q: "¿Cuánto dinero se cobra de paro en 2025?",
    a: "Se cobra el 70% de la base reguladora los primeros 6 meses y el 60% a partir del séptimo mes. La cuantía mínima es de 560€ y la máxima de 1.575€ mensuales (con hijos a cargo puede ser mayor).",
  },
  {
    q: "¿Qué requisitos necesito para cobrar el paro?",
    a: "Necesitas: estar en situación legal de desempleo, haber cotizado al menos 360 días en los últimos 6 años, estar inscrito como demandante de empleo, no haber rechazado ofertas de trabajo adecuadas, y no tener ingresos superiores al 75% del SMI.",
  },
  {
    q: "¿Puedo cobrar subsidio después del paro?",
    a: "Sí, si has agotado la prestación contributiva y sigues en paro y sin ingresos suficientes, puedes tener derecho a un subsidio por desempleo si tienes responsabilidades familiares.",
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

export default function ParoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([webAppStructuredData, faqStructuredData]) }}
      />
      <Breadcrumbs currentPage="Calculadora de Paro" />
      <CalculadoraParo />
    </>
  )
}
