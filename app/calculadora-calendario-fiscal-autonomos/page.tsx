import type { Metadata } from "next"
import { Breadcrumbs } from "@/app/components/Breadcrumbs"
import CalendarioFiscalAutonomos from "./CalendarioFiscalAutonomos"

export const metadata: Metadata = {
  title: "Calendario Fiscal Autónomos 2025 | Fechas Clave IRPF e IVA",
  description:
    "Calendario fiscal completo para autónomos 2025. Consulta todas las fechas límite para presentar tus impuestos (IRPF, IVA) y evita sanciones de Hacienda.",
  keywords: [
    "calendario fiscal autonomos",
    "fechas impuestos autonomos",
    "modelo 130",
    "modelo 303",
    "declaracion trimestral",
    "irpf",
    "iva",
    "hacienda",
  ],
}

const CalendarioFiscalAutonomosPage = () => {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Calculadoras", path: "/#calculadoras" },
          {
            label: "Calendario Fiscal Autónomos",
            path: "/calculadora-calendario-fiscal-autonomos",
          },
        ]}
      />
      <CalendarioFiscalAutonomos />
    </>
  )
}

export default CalendarioFiscalAutonomosPage
