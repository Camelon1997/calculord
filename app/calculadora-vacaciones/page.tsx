import type { Metadata } from "next"
import CalculadoraVacaciones from "./CalculadoraVacaciones"
import { Breadcrumbs } from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Calculadora de Vacaciones 2025 - Días Naturales y Laborables",
  description:
    "Calcula tus días de vacaciones según convenio y antigüedad. Vacaciones proporcionales, valor económico y guía completa de derechos. Gratis 2025.",
  keywords: [
    "calculadora vacaciones",
    "calculadora vacaciones laborales",
    "dias de vacaciones por año trabajado",
    "calcular vacaciones proporcionales",
    "dias naturales o laborables",
    "estatuto de los trabajadores vacaciones",
    "convenio colectivo vacaciones",
    "valor economico vacaciones",
    "pago de vacaciones en finiquito",
    "baja medica durante vacaciones",
    "derecho a vacaciones",
    "planificar vacaciones",
    "calculadora laboral",
    "vacaciones españa 2025",
    "cuantos dias de vacaciones me corresponden",
    "devengo de vacaciones",
    "retribucion vacaciones",
    "solicitar vacaciones",
    "vacaciones tiempo parcial",
    "planificacion vacaciones empresa",
    "vacaciones contrato temporal",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com/calculadora-vacaciones",
  },
  openGraph: {
    title: "Calculadora de Vacaciones 2025 - Días Naturales y Laborables | Calculord",
    description:
      "Calcula tus días de vacaciones según convenio y antigüedad. Proporcionales, valor económico y guía completa.",
    url: "https://calculord.com/calculadora-vacaciones",
    siteName: "Calculord",
    images: [
      {
        url: "/og-vacaciones-laborales.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Vacaciones Laborales 2025",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Vacaciones 2025 - Días Naturales y Laborables",
    description: "Calcula tus días de vacaciones según convenio y antigüedad. Proporcionales y valor económico.",
    images: ["/og-vacaciones-laborales.jpg"],
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de Vacaciones Laborales 2025",
  description:
    "Calculadora gratuita para calcular los días de vacaciones (naturales o laborables) según antigüedad, convenio colectivo y tiempo trabajado, incluyendo su valor económico.",
  url: "https://calculord.com/calculadora-vacaciones",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Cálculo en días naturales y laborables",
    "Cálculo por convenio colectivo y personalizado",
    "Cálculo de vacaciones proporcionales",
    "Bonus por antigüedad",
    "Cálculo del valor económico de las vacaciones",
    "Planificación de fechas sugeridas",
    "Guía completa sobre derechos vacacionales",
    "Sección de Preguntas Frecuentes (FAQ)",
    "Información sobre solicitud de vacaciones",
    "Aclaraciones sobre contratos a tiempo parcial y temporales",
  ],
  creator: {
    "@type": "Organization",
    name: "Calculord",
    url: "https://calculord.com",
  },
  dateModified: "2025-07-29",
  inLanguage: "es-ES",
  isAccessibleForFree: true,
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se pueden pagar las vacaciones en lugar de disfrutarlas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, la regla general es que las vacaciones deben disfrutarse. La única excepción es al finalizar la relación laboral, donde los días pendientes se abonan en el finiquito.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si me pongo enfermo (baja por IT) durante mis vacaciones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las vacaciones se interrumpen. Tienes derecho a recuperar los días de vacaciones que coincidieron con tu baja una vez recibas el alta médica.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede la empresa obligarme a coger vacaciones en una fecha concreta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No de forma unilateral. El periodo de vacaciones se fija de común acuerdo entre empresa y trabajador, según lo que marque el convenio colectivo. Debes conocer las fechas con al menos dos meses de antelación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Pierdo mis vacaciones si no las disfruto dentro del año natural?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente sí, deben disfrutarse dentro del año natural en que se generan. Existen excepciones para bajas por maternidad, paternidad o incapacidad temporal, que permiten su disfrute posterior.",
        },
      },
      {
        "@type": "Question",
        name: "¿Tengo los mismos días de vacaciones con un contrato a tiempo parcial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, un trabajador a tiempo parcial tiene derecho al mismo número de días de vacaciones que un trabajador a tiempo completo (mínimo 30 días naturales). La retribución durante las vacaciones será proporcional a su jornada.",
        },
      },
    ],
  },
}

export default function CalculadoraVacacionesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Breadcrumbs currentPage="Vacaciones Laborales" />
      <CalculadoraVacaciones />
    </>
  )
}
