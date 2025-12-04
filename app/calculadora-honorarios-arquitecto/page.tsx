import type { Metadata } from "next"
import CalculadoraHonorariosArquitecto from "./CalculadoraHonorariosArquitecto"
import { Breadcrumbs } from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Calculadora Honorarios Arquitecto 2025: Guía Completa | Calculord",
  description:
    "Calcula los honorarios de tu arquitecto con nuestra herramienta actualizada a 2025. Entiende el PEM, porcentajes según tipo de proyecto, fases del trabajo y costes totales. La guía más completa para proyectos de arquitectura en España.",
  keywords: [
    "calculadora honorarios arquitecto",
    "honorarios arquitecto 2025",
    "cuanto cobra un arquitecto",
    "presupuesto arquitecto",
    "PEM arquitectura",
    "presupuesto ejecución material",
    "proyecto básico arquitecto",
    "proyecto de ejecución arquitecto",
    "dirección de obra arquitecto",
    "licencia obra arquitecto",
    "reforma vivienda arquitecto",
    "obra nueva arquitecto precios",
    "tarifa arquitecto por m2",
    "visado colegio arquitectos",
    "honorarios rehabilitación",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com/calculadora-honorarios-arquitecto",
  },
  openGraph: {
    title: "Calculadora de Honorarios de Arquitecto 2025 y Guía Completa",
    description:
      "Estima los costes de tu arquitecto según el PEM, tipo de proyecto y fases del trabajo. La herramienta más completa para planificar tu proyecto arquitectónico.",
    url: "https://calculord.com/calculadora-honorarios-arquitecto",
    siteName: "Calculord",
    images: [
      {
        url: "/og-honorarios-arquitecto.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Honorarios de Arquitecto 2025 - Calculord",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora Honorarios Arquitecto 2025 | Guía Completa",
    description:
      "Calcula y entiende los honorarios de tu arquitecto. Herramienta + Guía completa sobre costes de proyectos.",
    images: ["/og-honorarios-arquitecto.jpg"],
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
  name: "Calculadora de Honorarios de Arquitecto 2025",
  description:
    "Calculadora gratuita para estimar los honorarios de un arquitecto en España, basada en el PEM, tipo de proyecto, complejidad y fases del trabajo.",
  url: "https://calculord.com/calculadora-honorarios-arquitecto",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Cálculo según PEM del proyecto",
    "Diferentes tipos de proyecto (obra nueva, reforma, rehabilitación)",
    "Ajuste por complejidad del proyecto",
    "Desglose por fases (proyecto básico, ejecución, dirección de obra)",
    "Cálculo de visado y costes adicionales",
    "Desglose de IVA y retención de IRPF",
  ],
  creator: {
    "@type": "Organization",
    name: "Calculord",
  },
  dateModified: "2025-12-04",
  inLanguage: "es-ES",
  isAccessibleForFree: true,
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo se calculan los honorarios de un arquitecto en España?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Desde 2009 no hay baremos oficiales obligatorios. Los arquitectos establecen sus honorarios libremente, generalmente basándose en un porcentaje del PEM (Presupuesto de Ejecución Material) que varía según el tipo de proyecto, complejidad, ubicación y experiencia del profesional. Los porcentajes suelen oscilar entre el 6% y el 15% del PEM.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el PEM y cómo se calcula?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El PEM (Presupuesto de Ejecución Material) es el coste de materiales y mano de obra necesarios para ejecutar la obra, sin incluir gastos generales ni beneficio industrial del contratista. Se determina en el documento de 'Mediciones y presupuestos' del proyecto. Es la base sobre la que se calculan los honorarios del arquitecto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué fases incluyen los honorarios de un arquitecto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los honorarios pueden cubrir diferentes fases: Proyecto Básico (para solicitar licencia, ~30-40% de honorarios), Proyecto de Ejecución (planos detallados para construir, ~40-50%), y Dirección de Obra (supervisión durante la construcción, ~20-30%). Cada fase puede contratarse por separado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los honorarios incluyen el visado del colegio de arquitectos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, el visado del Colegio de Arquitectos es un coste adicional que se paga aparte. Las tarifas de visado se calculan según baremos establecidos por cada colegio profesional y dependen de las características del proyecto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cobra un arquitecto por una reforma integral?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para una reforma integral, los honorarios suelen ser entre el 8% y el 12% del PEM. Por ejemplo, para una reforma con un PEM de 50.000€, los honorarios estarían entre 4.000€ y 6.000€ más IVA, dependiendo de la complejidad y servicios incluidos.",
      },
    },
  ],
}

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://calculord.com/calculadora-honorarios-arquitecto",
  },
  headline: "Guía Completa para Entender los Honorarios de un Arquitecto en 2025",
  description:
    "Aprende todo sobre cómo cobran los arquitectos, qué es el PEM, las fases del proyecto, y cómo planificar tu presupuesto arquitectónico.",
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
  datePublished: "2025-12-04",
  dateModified: "2025-12-04",
}

export default function HonorariosArquitectoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webAppStructuredData, faqStructuredData, articleStructuredData]),
        }}
      />
      <Breadcrumbs currentPage="Honorarios de Arquitecto" />
      <CalculadoraHonorariosArquitecto />
    </>
  )
}
