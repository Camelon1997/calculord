import type { Metadata } from "next"
import ContactoPageClient from "./ContactoPageClient"

export const metadata: Metadata = {
  title: "Contacto | Calculord",
  description:
    "Contacta con el equipo de Calculord. Estamos aquí para ayudarte con tus dudas, sugerencias o propuestas de colaboración.",
}

export default function ContactoPage() {
  return <ContactoPageClient />
}
