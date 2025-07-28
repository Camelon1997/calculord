import type { Metadata } from "next"
import CalculadoraHonorariosAbogado from "./CalculadoraHonorariosAbogado"

export const metadata: Metadata = {
  title: "🔥 Calculadora Honorarios Abogado 2025 | Baremos Colegiales Oficiales | Calculord",
  description:
    "✅ Calcula HONORARIOS legales según baremos colegiales oficiales 2025. 📊 Por especialidad: civil, penal, mercantil, laboral. 💰 Complejidad caso y tiempo invertido. 🆓 Herramienta profesional actualizada.",
  keywords: [
    "honorarios abogado 2025",
    "baremos colegiales abogados",
    "tarifas legales España",
    "calculadora honorarios legales",
    "abogados baremos oficiales",
    "honorarios derecho civil",
    "honorarios derecho penal",
    "honorarios derecho mercantil",
    "honorarios derecho laboral",
    "honorarios por horas abogado",
    "honorarios por cuantía",
    "colegio abogados baremos",
    "tarifas profesionales legales",
    "costes servicios jurídicos",
    "presupuesto abogado",
    "honorarios procuradores",
    "gastos judiciales",
    "minutas abogados",
    "servicios jurídicos precios",
    "asesoría legal costes",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com/calculadora-honorarios-abogado",
  },
  openGraph: {
    title: "🔥 Calculadora Honorarios Abogado 2025 | Baremos Colegiales | Calculord",
    description:
      "✅ Calcula honorarios legales según baremos colegiales. 📊 Por especialidad jurídica. 💰 Complejidad y tiempo. 🆓",
    url: "https://calculord.com/calculadora-honorarios-abogado",
    siteName: "Calculord",
    images: [
      {
        url: "/og-honorarios-abogado.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Honorarios de Abogado 2025 - Baremos Colegiales",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🔥 Calculadora Honorarios Abogado 2025 | Baremos Colegiales",
    description: "✅ Calcula honorarios legales según baremos colegiales y especialidad. Actualizada 2025. 🆓",
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de Honorarios de Abogado 2025",
  description:
    "Calculadora gratuita para calcular honorarios legales según baremos colegiales, complejidad del caso y especialidad jurídica.",
  url: "https://calculord.com/calculadora-honorarios-abogado",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Baremos colegiales oficiales",
    "Derecho civil, penal, mercantil, laboral",
    "Honorarios por horas",
    "Honorarios por cuantía",
    "Complejidad del caso",
    "Tiempo invertido",
    "Gastos incluidos",
  ],
  creator: {
    "@type": "Organization",
    name: "Calculord",
  },
  dateModified: "2025-01-28",
  inLanguage: "es-ES",
  isAccessibleForFree: true,
}

export default function HonorariosAbogadoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <CalculadoraHonorariosAbogado />
    </>
  )
}
