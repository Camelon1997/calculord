import type { Metadata } from "next"
import GeneradorFacturas from "./GeneradorFacturas"

export const metadata: Metadata = {
  title: "Generador de Facturas Gratis Online - Crea Facturas Profesionales en PDF",
  description:
    "Genera facturas profesionales gratis con cálculo automático de IVA, IGIC e IRPF. Exporta a PDF con diseño moderno. Cumple normativa española 2025.",
  keywords:
    "generador facturas, crear facturas online, facturas gratis pdf, generador facturas autonomos, hacer facturas online, plantillas facturas profesionales",
  openGraph: {
    title: "Generador de Facturas Gratis Online - PDF Profesional",
    description: "Crea facturas profesionales gratis con cálculo automático de IVA e IRPF. Exporta a PDF al instante.",
    type: "website",
    url: "https://calculord.com/generador-facturas",
  },
  alternates: {
    canonical: "https://calculord.com/generador-facturas",
  },
}

export default function GeneradorFacturasPage() {
  return <GeneradorFacturas />
}
