import type { Metadata } from "next"
import CalculadoraIRPFAutonomos from "./CalculadoraIRPFAutonomos"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Calculadora IRPF Autónomos 2025 - Impuesto Anual",
  description:
    "Calcula tu IRPF como autónomo con ingresos, gastos deducibles y situación personal. Declaración de la renta y tipo medio actualizados 2025. Gratis.",
  keywords: [
    "calculadora irpf autonomos",
    "irpf 2025",
    "calcular irpf",
    "impuesto autonomos",
    "declaracion renta autonomos",
    "gastos deducibles",
  ],
  alternates: {
    canonical: "https://calculord.com/calculadora-irpf-autonomos",
  },
  openGraph: {
    title: "Calculadora IRPF Autónomos 2025 - Impuesto Anual | Calculord",
    description: "Calcula tu IRPF como autónomo con gastos deducibles y situación personal. Actualizado 2025.",
    type: "website",
    url: "https://calculord.com/calculadora-irpf-autonomos",
  },
}

export default function CalculadoraIRPFAutonomosPage() {
  return (
    <>
      <Breadcrumbs currentPage="Calculadora IRPF Autónomos" />
      <CalculadoraIRPFAutonomos />
    </>
  )
}
