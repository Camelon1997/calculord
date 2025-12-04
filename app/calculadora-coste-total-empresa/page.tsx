import type { Metadata } from "next"
import CalculatorPageClient from "./CalculatorPageClient"

export const metadata: Metadata = {
  title: "Calculadora Coste Total de un Empleado para la Empresa 2025 | Calculord",
  description:
    "Calcula el coste total que un trabajador supone para la empresa en 2025. Incluye salario bruto, cotizaciones a la Seguridad Social a cargo de la empresa, desglose completo y guía detallada.",
  keywords: [
    "coste total empleado",
    "calculadora coste empresa",
    "cuanto cuesta un trabajador",
    "seguridad social empresa 2025",
    "coste laboral españa",
    "presupuesto rrhh",
    "contratar trabajador",
    "salario bruto a coste total",
    "cotizaciones patronales",
    "coste empresa empleado",
  ],
  openGraph: {
    title: "Calculadora Coste Total de un Empleado para la Empresa 2025 | Calculord",
    description:
      "Herramienta esencial para RRHH y empresarios. Calcula el coste real de un empleado partiendo del salario bruto o del neto deseado. Planifica tus contrataciones para 2025 con datos precisos.",
    type: "website",
    locale: "es_ES",
    url: "https://calculord.com/calculadora-coste-total-empresa",
  },
  alternates: {
    canonical: "https://calculord.com/calculadora-coste-total-empresa",
  },
}

export default function CosteEmpresaPage() {
  return <CalculatorPageClient />
}
