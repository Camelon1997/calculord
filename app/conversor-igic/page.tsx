import type { Metadata } from "next"
import ConversorIGIC from "./ConversorIGIC"

export const metadata: Metadata = {
  title: "Conversor IGIC Canarias 2025 - Añadir o Quitar IGIC",
  description:
    "Calcula precio con IGIC o sin IGIC para Canarias. Tipos 0%, 3%, 7%, 9.5%, 13.5% y 20% actualizados 2025. Herramienta gratuita para empresas.",
  keywords:
    "conversor igic, calculadora igic, calcular igic canarias, precio con igic, precio sin igic, igic 7, igic 3, igic canarias, impuesto canarias",
  alternates: {
    canonical: "https://calculord.com/conversor-igic",
  },
  openGraph: {
    title: "Conversor IGIC Canarias 2025 - Añadir o Quitar IGIC | Calculord",
    description: "Calcula precio con IGIC o sin IGIC para Canarias con todos los tipos actualizados 2025. Gratis.",
    type: "website",
    url: "https://calculord.com/conversor-igic",
  },
}

export default function ConversorIGICPage() {
  return <ConversorIGIC />
}
