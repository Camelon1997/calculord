import type { Metadata } from "next"
import CalculadoraSalarioHoras from "./CalculadoraSalarioHoras"

export const metadata: Metadata = {
  title: "Calculadora de Salario por Horas 2025 | SMI y Horas Extra | Calculord",
  description:
    "Calcula tu salario real según las horas trabajadas. Incluye SMI 2025 (1.184€/mes - 9,26€/h), horas extra con incremento del 75% y salario neto final. Herramienta gratuita y actualizada.",
  keywords: [
    "salario por horas",
    "SMI 2025",
    "horas extra",
    "calculadora salario",
    "salario neto",
    "horas trabajadas",
    "salario mínimo interprofesional",
    "9.26 euros hora",
    "incremento horas extra",
    "cotizaciones salario",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com/calculadora-salario-por-horas",
  },
  openGraph: {
    title: "Calculadora de Salario por Horas 2025 | SMI y Horas Extra | Calculord",
    description:
      "Calcula tu salario real según horas trabajadas. SMI 2025 (9,26€/h), horas extra +75% y salario neto final.",
    url: "https://calculord.com/calculadora-salario-por-horas",
    siteName: "Calculord",
    images: [
      {
        url: "/og-salario-horas.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Salario por Horas 2025 - SMI",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Salario por Horas 2025 | SMI",
    description: "Calcula tu salario real por horas. SMI 2025 (9,26€/h), horas extra +75%. Gratis.",
    images: ["/og-salario-horas.jpg"],
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

export default function SalarioHorasPage() {
  return <CalculadoraSalarioHoras />
}
