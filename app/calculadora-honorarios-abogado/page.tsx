import type { Metadata } from "next"
import CalculadoraHonorariosAbogado from "./CalculadoraHonorariosAbogado"

export const metadata: Metadata = {
  title: "Calculadora de Honorarios de Abogado 2025 | Baremos Colegiales | Calculord",
  description:
    "Calcula honorarios legales según baremos colegiales, complejidad del caso y tiempo invertido. Por especialidad jurídica: civil, penal, mercantil, laboral. Herramienta profesional actualizada 2025.",
  keywords: [
    "honorarios abogado",
    "baremos colegiales",
    "tarifas legales",
    "calculadora honorarios",
    "abogados 2025",
    "derecho civil",
    "derecho penal",
    "derecho mercantil",
    "derecho laboral",
    "honorarios por horas",
    "honorarios por cuantía",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com/calculadora-honorarios-abogado",
  },
  openGraph: {
    title: "Calculadora de Honorarios de Abogado 2025 | Baremos Colegiales | Calculord",
    description:
      "Calcula honorarios legales según baremos colegiales, complejidad y tiempo. Por especialidad jurídica. Actualizada 2025.",
    url: "https://calculord.com/calculadora-honorarios-abogado",
    siteName: "Calculord",
    images: [
      {
        url: "/og-honorarios-abogado.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Honorarios de Abogado 2025",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Honorarios de Abogado 2025",
    description: "Calcula honorarios legales según baremos colegiales y especialidad. Actualizada 2025.",
    images: ["/og-honorarios-abogado.jpg"],
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

export default function HonorariosAbogadoPage() {
  return <CalculadoraHonorariosAbogado />
}
