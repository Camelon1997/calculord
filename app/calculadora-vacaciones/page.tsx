import type { Metadata } from "next"
import CalculadoraVacaciones from "./CalculadoraVacaciones"

export const metadata: Metadata = {
  title: "🔥 Calculadora Vacaciones Laborales 2025 | Días + Valor Económico | Calculord",
  description:
    "✅ Calcula tus DÍAS de vacaciones según antigüedad, convenio y tiempo trabajado 2025. 📊 Vacaciones proporcionales + valor económico. 💰 Planifica tu descanso. 🆓 Herramienta gratuita actualizada.",
  keywords: [
    "calculadora vacaciones 2025",
    "días vacaciones laborales",
    "vacaciones según antigüedad",
    "convenio colectivo vacaciones",
    "vacaciones proporcionales",
    "valor económico vacaciones",
    "planificar vacaciones trabajo",
    "derechos laborales vacaciones",
    "estatuto trabajadores vacaciones",
    "vacaciones 30 días naturales",
    "vacaciones por años trabajados",
    "incremento vacaciones antigüedad",
    "vacaciones pendientes cálculo",
    "disfrute vacaciones España",
    "periodo vacacional laboral",
    "calculadora laboral vacaciones",
    "herramientas RRHH vacaciones",
    "gestión vacaciones empresa",
    "calendario laboral vacaciones",
    "derecho descanso anual",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com/calculadora-vacaciones",
  },
  openGraph: {
    title: "🔥 Calculadora Vacaciones Laborales 2025 | Días + Valor Económico | Calculord",
    description:
      "✅ Calcula días vacaciones según antigüedad, convenio y tiempo trabajado. 📊 Vacaciones proporcionales + valor económico. 🆓",
    url: "https://calculord.com/calculadora-vacaciones",
    siteName: "Calculord",
    images: [
      {
        url: "/og-vacaciones-laborales.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Vacaciones Laborales 2025 - Días y Valor Económico",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🔥 Calculadora Vacaciones Laborales 2025 | Días + Valor",
    description: "✅ Calcula días vacaciones según antigüedad, convenio y tiempo trabajado. Valor económico. 🆓",
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
    "Calculadora gratuita para calcular los días de vacaciones según antigüedad, convenio colectivo y tiempo trabajado, incluyendo su valor económico.",
  url: "https://calculord.com/calculadora-vacaciones",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Cálculo por convenio colectivo",
    "Vacaciones proporcionales",
    "Incremento por antigüedad",
    "Valor económico",
    "Planificación de fechas",
    "Diferentes tipos de contrato",
    "Desglose detallado",
  ],
  creator: {
    "@type": "Organization",
    name: "Calculord",
  },
  dateModified: "2025-01-28",
  inLanguage: "es-ES",
  isAccessibleForFree: true,
}

export default function CalculadoraVacacionesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <CalculadoraVacaciones />
    </>
  )
}
