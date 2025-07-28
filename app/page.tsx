import type { Metadata } from "next"
import HomePage from "./HomePage"

export const metadata: Metadata = {
  title: "Calculadoras Laborales y Financieras Gratuitas 2025 | Calculord",
  description:
    "🔥 Suite completa de calculadoras laborales y financieras GRATUITAS 2025. ✅ Salarios, cotizaciones SS, nóminas, hipotecas, ahorros y más. ⚡ Herramientas profesionales actualizadas con normativa española.",
  keywords: [
    "calculadoras laborales 2025",
    "calculadoras financieras gratuitas",
    "calculadora salario España",
    "cotizaciones seguridad social 2025",
    "SMI 2025 1184 euros",
    "calculadora nómina IRPF",
    "calculadora hipoteca España",
    "calculadora ahorro interés compuesto",
    "calculadora vacaciones laborales",
    "calculadora despidos indemnización",
    "calculadora paro SEPE",
    "honorarios abogado baremos",
    "herramientas RRHH gratuitas",
    "derecho laboral calculadoras",
    "finanzas personales España",
    "calculadora salarial online",
    "régimen general autónomos",
    "prestación por desempleo",
    "planificación financiera",
    "recursos humanos herramientas",
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
    title: "Calculadoras Laborales y Financieras Gratuitas 2025 | Calculord",
    description:
      "🔥 Suite completa de calculadoras GRATUITAS: salarios, cotizaciones SS, nóminas, hipotecas, ahorros. ✅ Actualizadas 2025 con normativa española.",
    url: "https://calculord.com",
    siteName: "Calculord",
    images: [
      {
        url: "/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadoras Laborales y Financieras Gratuitas 2025 - Calculord",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadoras Laborales y Financieras Gratuitas 2025 | Calculord",
    description:
      "🔥 Suite completa de calculadoras GRATUITAS: salarios, cotizaciones, nóminas, hipotecas, ahorros. ✅ Actualizadas 2025.",
    images: ["/og-image-home.jpg"],
    creator: "@calculord",
    site: "@calculord",
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
    google: "your-google-verification-code",
  },
  category: "Finance",
  other: {
    "apple-mobile-web-app-title": "Calculord",
    "application-name": "Calculord",
  },
}

export default function Page() {
  return <HomePage />
}
