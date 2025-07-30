import type { Metadata } from "next"
import CookieSettings from "../components/CookieSettings"
import Breadcrumbs from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Configuración de Cookies - Personaliza tus Preferencias",
  description:
    "Configura tus preferencias de cookies para Calculord. Controla qué datos se recopilan y cómo se utilizan para mejorar tu experiencia.",
  robots: {
    index: true,
    follow: true,
  },
}

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Configuración de Cookies", href: "/configuracion-cookies" },
]

export default function ConfiguracionCookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Configuración de Cookies</h1>

            <div className="prose max-w-none mb-8">
              <p className="text-lg text-gray-600 mb-6">
                Controla qué cookies y tecnologías de seguimiento pueden utilizarse en Calculord. Tus preferencias se
                guardarán y aplicarán en todas tus visitas futuras.
              </p>
            </div>

            <CookieSettings />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Información Adicional</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">¿Qué son las cookies?</h3>
                  <p className="text-sm text-gray-600">
                    Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un
                    sitio web. Nos ayudan a recordar tus preferencias y mejorar tu experiencia de navegación.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Gestión de cookies</h3>
                  <p className="text-sm text-gray-600">
                    Puedes cambiar estas configuraciones en cualquier momento. También puedes gestionar las cookies
                    directamente desde la configuración de tu navegador.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium text-gray-900 mb-2">Enlaces relacionados</h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <a href="/politica-de-cookies" className="text-blue-600 hover:underline">
                    Política de Cookies
                  </a>
                  <a href="/politica-de-privacidad" className="text-blue-600 hover:underline">
                    Política de Privacidad
                  </a>
                  <a href="/contacto" className="text-blue-600 hover:underline">
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
