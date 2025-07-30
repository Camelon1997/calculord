"use client"

import { useState, useEffect } from "react"
import { Settings, Cookie, Save, RotateCcw } from "lucide-react"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  advertising: boolean
}

export default function CookieSettings() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    advertising: false,
  })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    // Cargar preferencias guardadas
    const consent = localStorage.getItem("cookie-consent")
    if (consent) {
      try {
        const savedPreferences = JSON.parse(consent)
        setPreferences(savedPreferences)
      } catch (error) {
        console.error("Error loading cookie preferences:", error)
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

    // Eliminar cookies si están desactivadas
    if (!prefs.analytics) {
      document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "_ga_G-8QKFLE7EEH=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }
  }

  const handleSave = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    localStorage.setItem("cookie-consent-date", new Date().toISOString())
    applyCookieSettings(preferences)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleReset = () => {
    const defaultPrefs = {
      necessary: true,
      analytics: false,
      advertising: false,
    }
    setPreferences(defaultPrefs)
    localStorage.removeItem("cookie-consent")
    localStorage.removeItem("cookie-consent-date")
    applyCookieSettings(defaultPrefs)
  }

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === "necessary") return // No se puede desactivar
    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-6">
        <Settings className="w-6 h-6 text-blue-600 mr-3" />
        <h2 className="text-2xl font-semibold text-gray-900">Configuración de Cookies</h2>
      </div>

      <div className="space-y-6">
        {/* Cookies Necesarias */}
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900 flex items-center">
              <Cookie className="w-5 h-5 text-green-600 mr-2" />
              Cookies Necesarias
            </h3>
            <div className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">Siempre activas</div>
          </div>
          <p className="text-gray-700 text-sm mb-3">
            Estas cookies son esenciales para el funcionamiento básico del sitio web y no se pueden desactivar.
          </p>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• Funcionalidades básicas de navegación</li>
            <li>• Seguridad y autenticación</li>
            <li>• Recordar preferencias de configuración</li>
          </ul>
        </div>

        {/* Cookies Analíticas */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Cookies Analíticas (Google Analytics)</h3>
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
          <p className="text-gray-700 text-sm mb-3">
            Nos ayudan a entender cómo interactúas con el sitio web para mejorar la experiencia del usuario.
          </p>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• Páginas más visitadas</li>
            <li>• Tiempo de permanencia en el sitio</li>
            <li>• Comportamiento de navegación</li>
            <li>• Estadísticas de uso anónimas</li>
          </ul>
        </div>

        {/* Cookies Publicitarias */}
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Cookies Publicitarias (Google AdSense)</h3>
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
          <p className="text-gray-700 text-sm mb-3">
            Utilizadas para mostrar anuncios personalizados y relevantes. Ayudan a financiar el contenido gratuito.
          </p>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• Anuncios relevantes a tus intereses</li>
            <li>• Control de frecuencia de anuncios</li>
            <li>• Medición de efectividad publicitaria</li>
            <li>• Personalización de contenido publicitario</li>
          </ul>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={handleReset}
          className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Restablecer
        </button>
        <div className="flex-1"></div>
        <button
          onClick={handleSave}
          className={`flex items-center justify-center px-6 py-2 text-sm font-medium text-white rounded-lg transition-colors ${
            saved ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          <Save className="w-4 h-4 mr-2" />
          {saved ? "Guardado ✓" : "Guardar Preferencias"}
        </button>
      </div>

      {/* Información adicional */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-gray-700 text-sm">
          <strong>Nota:</strong> Puedes cambiar estas preferencias en cualquier momento. Los cambios se aplicarán
          inmediatamente y se recordarán en futuras visitas.
        </p>
      </div>
    </div>
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
