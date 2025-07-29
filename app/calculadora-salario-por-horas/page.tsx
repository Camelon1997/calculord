import type { Metadata } from "next"
import SalarioHorasClientPage from "./SalarioHorasClientPage"

export const metadata: Metadata = {
  title: "✅ Calculadora Salario por Horas 2025 | SMI 9,26€/h + Neto | Calculord",
  description:
    "Calcula tu salario REAL por horas trabajadas en 2025. 📊 Basado en el SMI de 1.184€/mes (9,26€/h). Incluye horas extra (+75%), cotizaciones y salario neto final. Herramienta gratuita y actualizada.",
  keywords: [
    "calculadora salario por horas 2025",
    "SMI 2025 9.26 euros hora",
    "salario mínimo interprofesional hora",
    "horas extra incremento 75%",
    "calculadora horas trabajadas",
    "salario neto por horas",
    "SMI 1184 euros mes 2025",
    "calculadora salarial horas",
    "horas ordinarias extra",
    "salario bruto neto horas",
    "cotizaciones salario horas",
    "IRPF salario por horas",
    "calculadora laboral horas",
    "tiempo trabajado salario",
    "jornada laboral salario",
    "convenio colectivo horas",
    "plus horas extra España",
    "calculadora sueldo horas",
    "herramientas RRHH horas",
    "derecho laboral horas",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com/calculadora-salario-por-horas",
  },
  openGraph: {
    title: "✅ Calculadora Salario por Horas 2025 | SMI 9,26€/h + Neto | Calculord",
    description:
      "Calcula tu salario REAL por horas. 📊 SMI 9,26€/h, horas extra +75%. 💰 Salario neto con cotizaciones. 🆓 Gratis.",
    url: "https://calculord.com/calculadora-salario-por-horas",
    siteName: "Calculord",
    images: [
      {
        url: "/og-salario-horas.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Salario por Horas 2025 - SMI 9,26€/h",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "✅ Calculadora Salario por Horas 2025 | SMI 9,26€/h",
    description: "Calcula tu salario REAL por horas. SMI 9,26€/h, horas extra +75%. 💰 Salario neto. 🆓",
    images: ["/og-salario-horas.jpg"],
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

export default function SalarioHorasPage() {
  return <SalarioHorasClientPage />
}
