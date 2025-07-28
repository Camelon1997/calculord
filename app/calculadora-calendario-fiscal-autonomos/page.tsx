import type { Metadata } from "next"
import CalendarioFiscalAutonomos from "./CalendarioFiscalAutonomos"

export const metadata: Metadata = {
  title: "Calendario Fiscal Autónomos 2025 | Fechas Clave IRPF e IVA | Calculord",
  description:
    "Calendario fiscal completo para autónomos 2025. Fechas límite de declaraciones trimestrales IRPF e IVA, declaración anual y todas las obligaciones fiscales. ¡No te pierdas ninguna fecha!",
  keywords:
    "calendario fiscal autónomos 2025, fechas declaraciones autónomos, IRPF trimestral, IVA trimestral, modelo 130, modelo 303, declaración anual autónomos",
  openGraph: {
    title: "Calendario Fiscal Autónomos 2025 - Fechas Clave IRPF e IVA",
    description:
      "Todas las fechas importantes para autónomos en 2025. Declaraciones trimestrales, anuales y obligaciones fiscales.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calendario Fiscal Autónomos 2025 | Calculord",
    description: "Fechas clave para declaraciones IRPF e IVA de autónomos 2025",
  },
  alternates: {
    canonical: "https://calculord.com/calculadora-calendario-fiscal-autonomos",
  },
}

export default function CalendarioFiscalAutonomosPage() {
  return <CalendarioFiscalAutonomos />
}
