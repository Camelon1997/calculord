import type { Metadata } from "next"
import CalculadoraIRPFAutonomos from "./CalculadoraIRPFAutonomos"

export const metadata: Metadata = {
  title: "Calculadora IRPF Autónomos 2025 | Deducciones y Retenciones Fiscales",
  description:
    "Calculadora IRPF para autónomos 2025 ✅ Calcula tu impuesto sobre la renta con todas las deducciones fiscales, retenciones y tramos por CCAA. Estimación directa vs módulos. Gratis y actualizada.",
  keywords:
    "IRPF autónomos 2025, deducciones fiscales autónomos, retenciones IRPF, calculadora fiscal autónomos, estimación directa, régimen módulos, tramos IRPF, gastos deducibles autónomos",
  openGraph: {
    title: "Calculadora IRPF Autónomos 2025 | Deducciones y Retenciones",
    description:
      "Calcula tu IRPF como autónomo con todas las deducciones fiscales 2025. Estimación directa vs módulos. Todas las CCAA.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora IRPF Autónomos 2025",
    description: "Calcula tu IRPF como autónomo con deducciones fiscales actualizadas 2025",
  },
  alternates: {
    canonical: "https://calculord.com/calculadora-irpf-autonomos",
  },
}

export default function CalculadoraIRPFAutonomosPage() {
  return <CalculadoraIRPFAutonomos />
}
