import type { Metadata } from "next"
import CalculadoraIGICRepercutidoSoportado from "./CalculadoraIGICRepercutidoSoportado"

export const metadata: Metadata = {
  title: "Calculadora IGIC Repercutido y Soportado Canarias 2025 | Gratis",
  description:
    "Calcula el IGIC repercutido, soportado y la diferencia a pagar o devolver en Canarias. Herramienta para autónomos y empresas canarias.",
  keywords: [
    "calculadora IGIC repercutido",
    "IGIC soportado",
    "IGIC Canarias",
    "diferencia IGIC",
    "IGIC autónomos",
    "IGIC empresas",
    "declaración IGIC",
    "modelo 420",
  ],
  openGraph: {
    title: "Calculadora IGIC Repercutido y Soportado Canarias 2025",
    description:
      "Calcula el IGIC repercutido, soportado y la diferencia a pagar o devolver en Canarias de forma rápida.",
    type: "website",
    url: "https://calculord.com/calculadora-igic-repercutido-soportado",
  },
  alternates: {
    canonical: "https://calculord.com/calculadora-igic-repercutido-soportado",
  },
}

export default function CalculadoraIGICRepercutidoSoportadoPage() {
  return <CalculadoraIGICRepercutidoSoportado />
}
