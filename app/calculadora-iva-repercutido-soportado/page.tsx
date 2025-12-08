import type { Metadata } from "next"
import CalculadoraIVARepercutidoSoportado from "./CalculadoraIVARepercutidoSoportado"

export const metadata: Metadata = {
  title: "Calculadora IVA Repercutido y Soportado 2025 | Gratis",
  description:
    "Calcula el IVA repercutido, soportado y la diferencia a pagar o devolver. Herramienta gratuita para autónomos y empresas. Trimestral y anual.",
  keywords: [
    "calculadora IVA repercutido",
    "IVA soportado",
    "diferencia IVA",
    "IVA a pagar",
    "IVA autónomos",
    "IVA empresas",
    "declaración IVA",
    "modelo 303",
  ],
  openGraph: {
    title: "Calculadora IVA Repercutido y Soportado 2025",
    description: "Calcula el IVA repercutido, soportado y la diferencia a pagar o devolver de forma rápida y precisa.",
    type: "website",
    url: "https://calculord.com/calculadora-iva-repercutido-soportado",
  },
  alternates: {
    canonical: "https://calculord.com/calculadora-iva-repercutido-soportado",
  },
}

export default function CalculadoraIVARepercutidoSoportadoPage() {
  return <CalculadoraIVARepercutidoSoportado />
}
