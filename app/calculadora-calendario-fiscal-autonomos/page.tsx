import type { Metadata } from "next"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import CalendarioFiscalAutonomos from "./CalendarioFiscalAutonomos"

export const metadata: Metadata = {
  title: "Calendario Fiscal Autónomos 2025-2026 | Fechas IRPF, IVA y Declaraciones",
  description:
    "Calendario fiscal completo para autónomos 2025-2026. Todas las fechas de modelos 130, 303, 100, 390. Recordatorios automáticos, guía completa y consejos para evitar sanciones.",
  keywords: [
    "calendario fiscal autonomos 2025",
    "fechas impuestos autonomos",
    "modelo 130 fechas",
    "modelo 303 fechas",
    "modelo 100 declaracion renta",
    "modelo 390 iva anual",
    "declaracion trimestral autonomos",
    "irpf autonomos calendario",
    "iva trimestral fechas",
    "obligaciones fiscales autonomos",
    "hacienda autonomos plazos",
  ],
  openGraph: {
    title: "Calendario Fiscal Autónomos 2025-2026 | Fechas IRPF, IVA y Declaraciones",
    description:
      "Calendario fiscal completo para autónomos 2025-2026. Todas las fechas de modelos 130, 303, 100, 390. Recordatorios automáticos, guía completa y consejos para evitar sanciones.",
    type: "website",
    url: "https://calculord.com/calculadora-calendario-fiscal-autonomos",
  },
}

const CalendarioFiscalAutonomosPage = () => {
  return (
    <>
      <Breadcrumbs currentPage="Calendario Fiscal Autónomos" />
      <CalendarioFiscalAutonomos />
    </>
  )
}

export default CalendarioFiscalAutonomosPage
