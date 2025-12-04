import type { Metadata } from "next"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import CalculadoraMaternidadPaternidad from "./CalculadoraMaternidadPaternidad"

export const metadata: Metadata = {
  title: "Calculadora de Maternidad y Paternidad 2025 | Prestación por Nacimiento",
  description:
    "Calcula tu prestación de maternidad y paternidad en España 2025. Descubre las 19 semanas retribuidas, duración según parto múltiple, prematuro, adopción y cómo calcular el 100% de tu base reguladora.",
  keywords: [
    "calculadora maternidad",
    "calculadora paternidad",
    "prestación nacimiento",
    "permiso parental",
    "19 semanas",
    "parto múltiple",
    "adopción",
    "base reguladora maternidad",
    "prestación maternidad 2025",
    "baja maternal",
    "baja paternal",
    "permisos nacimiento",
    "prestación por hijo",
    "calculadora prestación maternidad",
  ],
  openGraph: {
    title: "Calculadora de Maternidad y Paternidad 2025 | Prestación por Nacimiento",
    description: "Calcula tu prestación de maternidad y paternidad. 19 semanas al 100%, parto múltiple, adopción.",
    type: "website",
    url: "https://calculord.com/calculadora-maternidad-paternidad",
  },
  alternates: {
    canonical: "https://calculord.com/calculadora-maternidad-paternidad",
  },
  other: {
    abstract:
      "Herramienta online para calcular la prestación económica por maternidad y paternidad en España 2025. Incluye cálculo de base reguladora, duración según tipo de parto, parto múltiple, prematuro, adopción y acogimiento.",
  },
}

export default function CalculadoraMaternidadPaternidadPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Maternidad y Paternidad 2025",
    description:
      "Calcula tu prestación de maternidad y paternidad en España 2025. 19 semanas retribuidas al 100% de tu base reguladora.",
    url: "https://calculord.com/calculadora-maternidad-paternidad",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Cálculo de prestación maternidad/paternidad",
      "Duración según tipo de parto",
      "Parto múltiple y prematuro",
      "Adopción y acogimiento",
      "Base reguladora 100%",
      "Guía completa 2025",
    ],
  }

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuántas semanas son de maternidad y paternidad en 2025?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En 2025, cada progenitor tiene derecho a 19 semanas de permiso retribuido al 100% de su base reguladora. Para familias monoparentales, la duración se extiende a 32 semanas totales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto se cobra en la baja de maternidad o paternidad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se cobra el 100% de la base reguladora. Para trabajadores asalariados, se calcula tomando la base de cotización por contingencias comunes del mes anterior dividida entre 30 días. Para autónomos, se usa la media de los últimos 6 meses dividida entre 180 días.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede ampliar el permiso en caso de parto múltiple?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En caso de parto múltiple, se añade 1 semana adicional por cada hijo a partir del segundo. Por ejemplo, si tienes gemelos, tendrás 20 semanas; si trillizos, 21 semanas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si el bebé es prematuro o necesita hospitalización?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si el neonato debe permanecer hospitalizado más de 7 días tras el parto, el permiso se amplía en tantos días como dure la hospitalización, con un máximo de 13 semanas adicionales.",
        },
      },
      {
        "@type": "Question",
        name: "¿El permiso es igual para adopción y acogimiento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El permiso de 19 semanas se aplica de igual forma en casos de adopción, guarda con fines de adopción y acogimiento, con independencia de la edad del menor adoptado o acogido.",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Breadcrumbs currentPage="Calculadora de Maternidad y Paternidad" />
      <CalculadoraMaternidadPaternidad />
    </>
  )
}
