import type { Metadata } from "next"
import CalculadoraIRPFAutonomos from "./CalculadoraIRPFAutonomos"

export const metadata: Metadata = {
  title: "Calculadora IRPF Autónomos 2025 | Calcula tu Impuesto Anual",
  description:
    "Calcula tu IRPF como autónomo para 2025. Introduce tus ingresos, gastos deducibles y situación personal para obtener el resultado de tu declaración de la renta y tu tipo medio.",
  keywords: [
    "calculadora irpf autonomos",
    "irpf 2025",
    "calcular irpf",
    "impuesto autonomos",
    "declaracion renta autonomos",
    "gastos deducibles",
  ],
}

export default function CalculadoraIRPFAutonomosPage() {
  return <CalculadoraIRPFAutonomos />
}
