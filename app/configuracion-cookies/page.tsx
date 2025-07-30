import type { Metadata } from "next"
import { Settings } from "lucide-react"
import { Breadcrumbs } from "../components/Breadcrumbs"
import CookieSettings from "../components/CookieSettings"

export const metadata: Metadata = {
  title: "Configuración de Cookies | Calculord",
  description:
    "Gestiona tus preferencias de cookies en Calculord. Configura qué tipos de cookies deseas aceptar para personalizar tu experiencia.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function ConfiguracionCookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs currentPage="Configuración de Cookies" />

        <div className="mt-6">
          <div className="text-center mb-8">
            <Settings className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Configuración de Cookies</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Personaliza tu experiencia en Calculord configurando qué tipos de cookies deseas aceptar. Puedes cambiar
              estas preferencias en cualquier momento.
            </p>
          </div>

          <CookieSettings />

          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Información Adicional</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Para obtener información más detallada sobre cómo utilizamos las cookies, qué datos recopilamos y cómo
                los procesamos, consulta nuestra{" "}
                <a href="/politica-de-cookies" className="text-blue-600 hover:underline">
                  Política de Cookies completa
                </a>
                .
              </p>
              <p className="mb-4">
                Si tienes preguntas sobre nuestro uso de cookies o deseas ejercer tus derechos de protección de datos,
                puedes contactarnos a través de nuestra{" "}
                <a href="/contacto" className="text-blue-600 hover:underline">
                  página de contacto
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
