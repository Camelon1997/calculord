import type { Metadata } from "next"
import CalculadoraBajas from "./CalculadoraBajas"
import { Breadcrumbs } from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "🔥 Calculadora de Bajas Laborales 2025 | Prestación IT + Guía | Calculord",
  description:
    "✅ Calcula tu PRESTACIÓN por baja laboral (IT) 2025. 📊 Base reguladora, porcentajes por día, quién paga. 💰 Enfermedad común vs accidente laboral. 🆓 Herramienta gratuita oficial.",
  keywords: [
    "calculadora bajas laborales 2025",
    "prestación incapacidad temporal",
    "cuánto se cobra de baja",
    "baja por enfermedad cálculo",
    "incapacidad temporal IT",
    "base reguladora baja laboral",
    "prestación IT 2025",
    "baja laboral enfermedad común",
    "baja por accidente laboral",
    "contingencias comunes baja",
    "contingencias profesionales",
    "quién paga la baja laboral",
    "empresa vs seguridad social baja",
    "calculadora IT España",
    "mutua baja laboral",
    "INSS incapacidad temporal",
    "días de baja retribución",
    "porcentaje baja laboral",
    "baja médica prestación",
    "herramientas baja laboral gratuitas",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com/calculadora-bajas",
  },
  openGraph: {
    title: "🔥 Calculadora de Bajas Laborales 2025 | Prestación IT + Guía | Calculord",
    description:
      "✅ Calcula prestación por baja laboral. 📊 Base reguladora, porcentajes, quién paga. 💰 Actualizada 2025. 🆓",
    url: "https://calculord.com/calculadora-bajas",
    siteName: "Calculord",
    images: [
      {
        url: "/og-bajas.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Bajas Laborales 2025 - Prestación por IT",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🔥 Calculadora de Bajas Laborales 2025 | Prestación IT",
    description: "✅ Calcula prestación por baja laboral. Base reguladora, porcentajes, quién paga. 🆓",
    images: ["/og-bajas.jpg"],
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

const webAppStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de Bajas Laborales 2025",
  description:
    "Calculadora gratuita para calcular la prestación por incapacidad temporal (IT) en bajas laborales según los criterios del INSS y mutuas colaboradoras.",
  url: "https://calculord.com/calculadora-bajas",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Base reguladora IT",
    "Porcentajes por tipo de baja",
    "Enfermedad común vs accidente laboral",
    "Quién paga cada día",
    "Topes máximos 2025",
    "Cálculo oficial INSS",
  ],
  creator: {
    "@type": "Organization",
    name: "Calculord",
  },
  dateModified: "2025-12-04",
  inLanguage: "es-ES",
  isAccessibleForFree: true,
}

const faqData = [
  {
    q: "¿Cuánto se cobra de baja laboral en 2025?",
    a: "Depende del tipo de baja. Por enfermedad común: días 1-3 no se cobra (salvo convenio), días 4-15 se cobra 60% pagado por la empresa, desde el día 16 se cobra 75% pagado por el INSS o mutua. Por accidente laboral: desde el día siguiente se cobra 75% pagado por INSS o mutua.",
  },
  {
    q: "¿Qué es la base reguladora en una baja laboral?",
    a: "Es la cantidad sobre la que se calcula la prestación. Se obtiene dividiendo la base de cotización del mes anterior a la baja entre 30 días. Para contingencias profesionales también se incluyen las horas extras del año anterior divididas entre 365.",
  },
  {
    q: "¿Quién paga mi baja laboral, la empresa o la Seguridad Social?",
    a: "Depende del tipo de baja y los días. Enfermedad común: días 1-3 nada (salvo convenio), días 4-15 empresa (60%), día 16 en adelante INSS/mutua (75%). Accidente laboral: desde el primer día INSS/mutua (75%).",
  },
  {
    q: "¿Puedo ser despedido estando de baja?",
    a: "Sí, pero con limitaciones. Un despido por el simple hecho de estar de baja puede ser declarado nulo si se considera discriminatorio. Si el despido es por causas objetivas ajenas a la baja, debe seguir el procedimiento legal y abonar la indemnización correspondiente.",
  },
  {
    q: "¿Cuál es la duración máxima de una baja laboral?",
    a: "La incapacidad temporal puede durar hasta 365 días, prorrogables por otros 180 días más si se prevé curación en ese plazo. Después, si no hay alta médica, se inicia el proceso de evaluación de incapacidad permanente.",
  },
]

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
}

export default function BajasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([webAppStructuredData, faqStructuredData]) }}
      />
      <Breadcrumbs currentPage="Calculadora de Bajas" />
      <CalculadoraBajas />
    </>
  )
}
