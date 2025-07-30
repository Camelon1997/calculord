"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Shield, BarChart3, Target, CheckCircle } from "lucide-react"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  advertising: boolean
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export default function CookieSettings() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    advertising: false,
  })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (consent) {
      setPreferences(JSON.parse(consent))
    }
  }, [])

  const updateGoogleConsent = (prefs: CookiePreferences) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: prefs.analytics ? "granted" : "denied",
        ad_storage: prefs.advertising ? "granted" : "denied",
        ad_user_data: prefs.advertising ? "granted" : "denied",
        ad_personalization: prefs.advertising ? "granted" : "denied",
      })
    }
  }

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      [type]: value,
    }))
  }

  const handleSave = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    updateGoogleConsent(preferences)

    // Eliminar cookies si se desactivan
    if (!preferences.analytics) {
      document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "_ga_8QKFLE7EEH=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }

    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      advertising: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted))
    updateGoogleConsent(allAccepted)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      advertising: false,
    }
    setPreferences(onlyNecessary)
    localStorage.setItem("cookie-consent", JSON.stringify(onlyNecessary))
    updateGoogleConsent(onlyNecessary)

    // Eliminar cookies existentes
    document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.cookie = "_ga_8QKFLE7EEH=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"

    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-6">
      {saved && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-600" />
          <span className="text-green-800">Preferencias guardadas correctamente</span>
        </div>
      )}

      <div className="grid gap-6">
        {/* Cookies Necesarias */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              Cookies Necesarias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <p className="text-sm text-gray-600 mb-3">
                  Estas cookies son esenciales para el funcionamiento básico del sitio web. Incluyen cookies de sesión,
                  autenticación y preferencias básicas. No se pueden desactivar.
                </p>
                <div className="text-xs text-gray-500">
                  <strong>Ejemplos:</strong> Cookies de sesión, preferencias de idioma, configuración de accesibilidad
                </div>
              </div>
              <Switch checked={true} disabled />
            </div>
          </CardContent>
        </Card>

        {/* Cookies Analíticas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Cookies Analíticas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <p className="text-sm text-gray-600 mb-3">
                  Nos ayudan a entender cómo interactúas con el sitio web mediante Google Analytics. Recopilamos
                  información sobre páginas visitadas, tiempo de permanencia y patrones de navegación.
                </p>
                <div className="text-xs text-gray-500">
                  <strong>Servicios:</strong> Google Analytics
                  <br />
                  <strong>Finalidad:</strong> Análisis de tráfico, mejora de la experiencia de usuario
                </div>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) => handlePreferenceChange("analytics", checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Cookies Publicitarias */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-purple-600" />
              Cookies Publicitarias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <p className="text-sm text-gray-600 mb-3">
                  Utilizadas por Google AdSense para mostrar anuncios relevantes y medir su efectividad. Pueden crear un
                  perfil de tus intereses para personalizar los anuncios.
                </p>
                <div className="text-xs text-gray-500">
                  <strong>Servicios:</strong> Google AdSense, Google Ad Manager
                  <br />
                  <strong>Finalidad:</strong> Personalización de anuncios, medición de efectividad
                </div>
              </div>
              <Switch
                checked={preferences.advertising}
                onCheckedChange={(checked) => handlePreferenceChange("advertising", checked)}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Button onClick={handleSave} className="flex-1">
          Guardar Preferencias
        </Button>
        <Button variant="outline" onClick={handleAcceptAll} className="flex-1 bg-transparent">
          Aceptar Todas
        </Button>
        <Button variant="outline" onClick={handleRejectAll} className="flex-1 bg-transparent">
          Solo Necesarias
        </Button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
        <h3 className="font-medium text-blue-900 mb-2">Información importante</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Tus preferencias se aplicarán inmediatamente y se recordarán en futuras visitas</li>
          <li>• Puedes cambiar estas configuraciones en cualquier momento</li>
          <li>• Algunas funcionalidades pueden verse limitadas si desactivas ciertas cookies</li>
          <li>• También puedes gestionar las cookies desde la configuración de tu navegador</li>
        </ul>
      </div>
    </div>
  )
}
