import type { Metadata } from "next"
import ConversorIGIC from "./ConversorIGIC"

export const metadata: Metadata = {
  title: "Conversor IGIC Canarias: Calcular Precio con y sin IGIC 2025 | Calculord",
  description:
    "Calculadora IGIC Canarias gratuita. Calcula el precio con IGIC o sin IGIC al instante. Tipos 0%, 3%, 7%, 9.5%, 13.5%, 20%. Actualizado 2025.",
  keywords:
    "conversor igic, calculadora igic, calcular igic canarias, precio con igic, precio sin igic, igic 7, igic 3, igic canarias, impuesto canarias",
  openGraph: {
    title: "Conversor IGIC Canarias: Calcular Precio con y sin IGIC 2025",
    description: "Calcula el precio con IGIC o sin IGIC para Canarias al instante. Todos los tipos de IGIC 2025.",
    type: "website",
  },
}

export default function ConversorIGICPage() {
  return <ConversorIGIC />
}
