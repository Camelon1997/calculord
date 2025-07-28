import type { Metadata } from "next"
import ConversorSalarioBrutoNeto from "./ConversorSalarioBrutoNeto"

export const metadata: Metadata = {
  title: "🔄 Conversor Salario Bruto a Neto 2025 | Calculadora IRPF Gratuita",
  description:
    "✅ Convierte tu salario bruto a neto y viceversa con IRPF 2025. Calculadora gratuita con deducciones actualizadas, cotizaciones SS y desglose completo.",
  keywords:
    "conversor salario bruto neto, calcular salario neto, IRPF 2025, calculadora salario, bruto a neto, neto a bruto, deducciones IRPF, cotizaciones seguridad social, calculadora salarial España",
  openGraph: {
    title: "🔄 Conversor Salario Bruto a Neto 2025 | IRPF Actualizado",
    description:
      "✅ Convierte salario bruto a neto y viceversa. Calculadora gratuita con IRPF 2025, cotizaciones SS y deducciones completas. ¡Pruébala gratis!",
    type: "website",
    url: "https://calculord.com/conversor-salario-bruto-neto",
    images: [
      {
        url: "/images/conversor-salario-hero.png",
        width: 1200,
        height: 630,
        alt: "Conversor Salario Bruto a Neto 2025 - Calculadora IRPF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🔄 Conversor Salario Bruto a Neto 2025",
    description: "✅ Convierte tu salario con IRPF 2025 actualizado. Calculadora gratuita y precisa.",
    images: ["/images/conversor-salario-hero.png"],
  },
  alternates: {
    canonical: "https://calculord.com/conversor-salario-bruto-neto",
  },
}

export default function ConversorSalarioBrutoNetoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Conversor Salario Bruto a Neto 2025",
    description:
      "Calculadora gratuita para convertir salario bruto a neto y viceversa con IRPF 2025 y cotizaciones actualizadas",
    url: "https://calculord.com/conversor-salario-bruto-neto",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    provider: {
      "@type": "Organization",
      name: "Calculord",
      url: "https://calculord.com",
    },
    featureList: [
      "Conversión bidireccional bruto-neto",
      "IRPF por tramos 2025",
      "Cotizaciones Seguridad Social",
      "Deducciones personales y familiares",
      "Cálculo por comunidades autónomas",
      "Desglose detallado de conceptos",
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ConversorSalarioBrutoNeto />
    </>
  )
}
