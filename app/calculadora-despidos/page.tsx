import type { Metadata } from "next"
import CalculadoraDespidos from "./CalculadoraDespidos"

export const metadata: Metadata = {
  title: "🔥 Calculadora Despidos 2025 | Indemnización + Finiquito + Paro | Calculord",
  description:
    "✅ Calcula INDEMNIZACIÓN por despido, finiquito y prestación desempleo 2025. 📊 Despido procedente, improcedente, nulo y objetivo. 💰 Salarios tramitación incluidos. 🆓 Herramienta gratuita actualizada normativa laboral.",
  keywords: [
    "calculadora despido 2025",
    "indemnización despido improcedente",
    "calculadora finiquito",
    "despido procedente indemnización",
    "despido nulo 45 días",
    "despido objetivo 20 días",
    "salarios tramitación despido",
    "prestación por desempleo",
    "calculadora indemnización laboral",
    "finiquito vacaciones pendientes",
    "despido disciplinario",
    "extinción contrato trabajo",
    "derechos laborales despido",
    "calculadora laboral despidos",
    "indemnización por años",
    "base reguladora paro",
    "duración prestación desempleo",
    "derecho laboral España",
    "estatuto trabajadores",
    "herramientas RRHH despidos",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com/calculadora-despidos",
  },
  openGraph: {
    title: "🔥 Calculadora Despidos 2025 | Indemnización + Finiquito + Paro | Calculord",
    description:
      "✅ Calcula INDEMNIZACIÓN despido, finiquito y prestación desempleo. 📊 Todos los tipos de despido. 💰 Actualizada 2025.",
    url: "https://calculord.com/calculadora-despidos",
    siteName: "Calculord",
    images: [
      {
        url: "/og-despidos.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Despidos 2025 - Indemnización y Finiquito",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🔥 Calculadora Despidos 2025 | Indemnización + Finiquito",
    description: "✅ Calcula indemnización despido, finiquito y prestación desempleo. Todos los tipos. 🆓",
    images: ["/og-despidos.jpg"],
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
  name: "Calculadora de Despidos 2025",
  description:
    "Calculadora gratuita para calcular la indemnización por despido, finiquito y prestación por desempleo según el tipo de despido.",
  url: "https://calculord.com/calculadora-despidos",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Despido procedente",
    "Despido improcedente",
    "Despido nulo",
    "Despido objetivo",
    "Cálculo finiquito",
    "Prestación por desempleo",
    "Salarios de tramitación",
  ],
  creator: {
    "@type": "Organization",
    name: "Calculord",
  },
  dateModified: "2025-01-28",
  inLanguage: "es-ES",
  isAccessibleForFree: true,
}

export default function DespidosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <CalculadoraDespidos />
    </>
  )
}
