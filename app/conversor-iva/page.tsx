import type { Metadata } from "next"
import ConversorIVA from "./ConversorIVA"

export const metadata: Metadata = {
  title: "Conversor IVA 2025 - Añadir o Quitar IVA al Instante",
  description:
    "Calcula el precio con IVA o sin IVA en segundos. Tipos 21%, 10% y 4% actualizados 2025. Herramienta gratuita para autónomos y empresas.",
  keywords:
    "conversor iva, calculadora iva, calcular iva, precio con iva, precio sin iva, iva 21, iva 10, iva 4, quitar iva, añadir iva",
  alternates: {
    canonical: "https://calculord.com/conversor-iva",
  },
  openGraph: {
    title: "Conversor IVA 2025 - Añadir o Quitar IVA al Instante",
    description:
      "Calcula el precio con IVA o sin IVA en segundos con todos los tipos actualizados 2025. Gratis para autónomos.",
    type: "website",
    url: "https://calculord.com/conversor-iva",
  },
}

export default function ConversorIVAPage() {
  return <ConversorIVA />
}
