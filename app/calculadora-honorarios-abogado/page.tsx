import type { Metadata } from "next"
import CalculadoraHonorariosAbogado from "./CalculadoraHonorariosAbogado"
import { Breadcrumbs } from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Calculadora Honorarios Abogado 2025: La Guía Definitiva | Calculord",
  description:
    "Calcula los honorarios de tu abogado con nuestra herramienta actualizada a 2025. Aprende cómo se calculan, qué es la hoja de encargo, la provisión de fondos y las costas. La guía más completa para entender los costes legales en España.",
  keywords: [
    "calculadora honorarios abogado",
    "honorarios abogado 2025",
    "baremos colegio abogados",
    "cuanto cobra un abogado",
    "minuta abogado",
    "presupuesto abogado",
    "costas procesales",
    "hoja de encargo",
    "provisión de fondos",
    "cuota litis",
    "tarifa abogado por hora",
    "honorarios divorcio",
    "honorarios despido",
    "honorarios herencia",
    "abogado civil precios",
    "abogado penal precios",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com/calculadora-honorarios-abogado",
  },
  openGraph: {
    title: "Calculadora de Honorarios de Abogado 2025 y Guía Completa",
    description:
      "Estima los costes de tu abogado y entiende todos los conceptos clave: baremos, IVA, IRPF, costas y más. La herramienta más completa para planificar tus gastos legales.",
    url: "https://calculord.com/calculadora-honorarios-abogado",
    siteName: "Calculord",
    images: [
      {
        url: "/og-honorarios-abogado.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Honorarios de Abogado 2025 - Calculord",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora Honorarios Abogado 2025 | La Guía Definitiva",
    description: "Calcula y entiende los honorarios de tu abogado. Herramienta + Guía completa sobre costes legales.",
    images: ["/og-honorarios-abogado.jpg"],
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
  name: "Calculadora de Honorarios de Abogado 2025",
  description:
    "Calculadora gratuita para estimar los honorarios de un abogado en España, basada en baremos oficiales, complejidad, especialidad y experiencia.",
  url: "https://calculord.com/calculadora-honorarios-abogado",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Cálculo por especialidad (Civil, Penal, Laboral, etc.)",
    "Ajuste por complejidad del caso",
    "Factor de experiencia del abogado",
    "Cálculo por horas y por cuantía del asunto",
    "Desglose de IVA y retención de IRPF",
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
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo se calculan los honorarios de un abogado en España?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se basan en baremos orientativos de los colegios de abogados, pero los factores clave son la especialidad, la complejidad del caso, el tiempo estimado, la experiencia del abogado y la cuantía económica del asunto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la 'provisión de fondos'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un pago por adelantado que se solicita al cliente para cubrir los gastos iniciales del caso. Esta cantidad se descuenta del total de los honorarios al final.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los honorarios de abogado incluyen IVA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, el presupuesto de honorarios es la base a la que hay que añadir el 21% de IVA. Además, se aplica una retención del 15% de IRPF en la factura.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué son las 'costas procesales'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Son los gastos del juicio. La regla general es que la parte que pierde es condenada a pagar las costas de la parte ganadora, lo que incluye los honorarios de su abogado y procurador.",
      },
    },
  ],
}

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://calculord.com/calculadora-honorarios-abogado",
  },
  headline: "La Guía Definitiva para Entender los Honorarios de un Abogado",
  description:
    "Aprende todo sobre cómo cobran los abogados, qué es la hoja de encargo, la provisión de fondos y las costas procesales.",
  author: {
    "@type": "Organization",
    name: "Calculord",
  },
  publisher: {
    "@type": "Organization",
    name: "Calculord",
    logo: {
      "@type": "ImageObject",
      url: "https://calculord.com/logo.png",
    },
  },
  datePublished: "2025-07-29",
  dateModified: "2025-07-29",
}

export default function HonorariosAbogadoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webAppStructuredData, faqStructuredData, articleStructuredData]),
        }}
      />
      <Breadcrumbs currentPage="Honorarios de Abogado" />
      <CalculadoraHonorariosAbogado />
    </>
  )
}
