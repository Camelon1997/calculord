import type { Metadata } from "next"
import ConversorIVA from "./ConversorIVA"

export const metadata: Metadata = {
  title: "Conversor IVA: Calcular Precio con y sin IVA 2025 | Calculord",
  description:
    "Calculadora IVA online gratuita. Calcula el precio con IVA o sin IVA al instante. Tipos general (21%), reducido (10%) y superreducido (4%). Actualizado 2025.",
  keywords:
    "conversor iva, calculadora iva, calcular iva, precio con iva, precio sin iva, iva 21, iva 10, iva 4, quitar iva, añadir iva",
  openGraph: {
    title: "Conversor IVA: Calcular Precio con y sin IVA 2025",
    description:
      "Calcula el precio con IVA o sin IVA al instante con nuestra calculadora gratuita. Todos los tipos de IVA 2025.",
    type: "website",
  },
}

export default function ConversorIVAPage() {
  return <ConversorIVA />
}
