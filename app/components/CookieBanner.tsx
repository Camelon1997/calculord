"use client"

import { useState, useEffect } from "react"
import { Cookie, Settings, X, Check } from "lucide-react"
import Link from "next/link"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  advertising: boolean
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Siempre true, no se puede desactivar
    analytics: false,
    advertising: false,
  })

  useEffect(() => {
    // Verificar si ya se ha dado consentimiento
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    } else {
      // Cargar preferencias guardadas
      try {
        const savedPreferences = JSON.parse(consent)
        setPreferences(savedPreferences)
        // Aplicar configuración de cookies
        applyCookieSettings(savedPreferences)
      } catch (error) {
        console.error("Error loading cookie preferences:", error)
        setShowBanner(true)
      }
    }
  }, [])

  const applyCookieSettings = (prefs: CookiePreferences) => {
    // Configurar Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: prefs.analytics ? "granted" : "denied",
        ad_storage: prefs.advertising ? "granted" : "denied",
        ad_user_data: prefs.advertising ? "granted" : "denied",
        ad_personalization: prefs.advertising ? "granted" : "denied",
      })
    }

    // Configurar otras cookies según las preferencias
    if (!prefs.analytics) {
      // Eliminar cookies de Google Analytics si están desactivadas
      document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "_ga_G-8QKFLE7EEH=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }
  }

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      advertising: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted))
    localStorage.setItem("cookie-consent-date", new Date().toISOString())
    applyCookieSettings(allAccepted)
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      advertising: false,
    }
    setPreferences(onlyNecessary)
    localStorage.setItem("cookie-consent", JSON.stringify(onlyNecessary))
    localStorage.setItem("cookie-consent-date", new Date().toISOString())
    applyCookieSettings(onlyNecessary)
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    localStorage.setItem("cookie-consent-date", new Date().toISOString())
    applyCookieSettings(preferences)
    setShowBanner(false)
  }

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === "necessary") return // No se puede desactivar
    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  if (!showBanner) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          {!showDetails ? (
            // Vista simple
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    🍪 Utilizamos cookies para mejorar tu experiencia
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Utilizamos cookies propias y de terceros para analizar el tráfico web, personalizar contenido y
                    mostrar publicidad relevante. Al hacer clic en "Aceptar todas", consientes el uso de todas las
                    cookies.{" "}
                    <Link href="/politica-de-cookies" className="text-blue-600 hover:underline">
                      Más información
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Configurar
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Rechazar todas
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Aceptar todas
                </button>
              </div>
            </div>
          ) : (
            // Vista detallada
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Cookie className="w-6 h-6 text-blue-600 mr-2" />
                  Configuración de Cookies
                </h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid gap-4 mb-6">
                {/* Cookies Necesarias */}
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-2" />
                      Cookies Necesarias
                    </h4>
                    <div className="bg-green-600 text-white text-xs px-2 py-1 rounded">Siempre activas</div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Estas cookies son esenciales para el funcionamiento básico del sitio web y no se pueden desactivar.
                    Incluyen funciones como navegación, acceso a áreas seguras y funcionalidades básicas.
                  </p>
                </div>

                {/* Cookies Analíticas */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Cookies Analíticas</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handlePreferenceChange("analytics")}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Nos ayudan a entender cómo interactúas con el sitio web mediante Google Analytics. Esta información
                    nos permite mejorar la experiencia del usuario.
                  </p>
                </div>

                {/* Cookies Publicitarias */}
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Cookies Publicitarias</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.advertising}
                        onChange={() => handlePreferenceChange("advertising")}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Utilizadas por Google AdSense para mostrar anuncios personalizados y relevantes. Ayudan a financiar
                    el contenido gratuito del sitio web.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <Link href="/politica-de-cookies" className="text-sm text-blue-600 hover:underline">
                  Ver política completa de cookies
                </Link>
                <div className="flex-1"></div>
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Rechazar todas
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Guardar preferencias
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// Declaración de tipos para gtag
declare global {
  interface Window {
    gtag: (
      command: "consent",
      action: "update",
      parameters: {
        analytics_storage?: "granted" | "denied"
        ad_storage?: "granted" | "denied"
        ad_user_data?: "granted" | "denied"
        ad_personalization?: "granted" | "denied"
      },
    ) => void
  }
}
