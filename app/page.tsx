import type { Metadata } from "next"
import HomePage from "./HomePage"

export const metadata: Metadata = {
  title: "Calculadoras Laborales 2025 | Salarios, Cotizaciones y SMI - Calculord",
  description:
    "Suite completa de calculadoras laborales gratuitas. Calcula salarios, cotizaciones de seguridad social, SMI 2025, honorarios profesionales y más. Herramientas actualizadas con la normativa española.",
  keywords: [
    "calculadoras laborales",
    "salario",
    "cotizaciones seguridad social",
    "SMI 2025",
    "nómina",
    "horas trabajadas",
    "honorarios abogado",
    "calculadora salarial",
    "régimen general",
    "autónomos",
    "derecho laboral",
    "recursos humanos",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com",
  },
  openGraph: {
    title: "Calculadoras Laborales 2025 - Herramientas Gratuitas | Calculord",
    description:
      "Suite completa de calculadoras laborales. Salarios, cotizaciones, SMI 2025, honorarios profesionales y más. Gratis y actualizadas con la normativa española.",
    url: "https://calculord.com",
    siteName: "Calculord",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadoras Laborales 2025 - Calculord",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadoras Laborales 2025 | Calculord",
    description:
      "Suite completa de calculadoras laborales gratuitas. Salarios, cotizaciones, SMI 2025 y más. Actualizadas 2025.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code", // Añadir cuando tengas Google Search Console
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Finance",
}

export default function Page() {
  return <HomePage />
}
