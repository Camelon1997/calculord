"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { X, Settings, Shield, BarChart3, Target } from "lucide-react"

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

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    advertising: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    } else {
      const savedPreferences = JSON.parse(consent)
      setPreferences(savedPreferences)
      updateGoogleConsent(savedPreferences)
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

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      advertising: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted))
    updateGoogleConsent(allAccepted)
    setShowBanner(false)
    setShowSettings(false)
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

    // Eliminar cookies existentes si se rechazan
    if (!onlyNecessary.analytics) {
      document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "_ga_8QKFLE7EEH=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }

    setShowBanner(false)
    setShowSettings(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    updateGoogleConsent(preferences)

    // Eliminar cookies si se desactivan
    if (!preferences.analytics) {
      document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "_ga_8QKFLE7EEH=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }

    setShowBanner(false)
    setShowSettings(false)
  }

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      [type]: value,
    }))
  }

  if (!showBanner) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardContent className="p-6">
          {!showSettings ? (
            // Vista simple
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-lg">Configuración de Cookies</h3>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setShowBanner(false)} className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <p className="text-sm text-gray-600">
                Utilizamos cookies para mejorar tu experiencia, analizar el tráfico del sitio y personalizar el
                contenido. Puedes elegir qué tipos de cookies aceptar.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleAcceptAll} className="flex-1">
                  Aceptar todas
                </Button>
                <Button variant="outline" onClick={handleRejectAll} className="flex-1 bg-transparent">
                  Solo necesarias
                </Button>
                <Button variant="outline" onClick={() => setShowSettings(true)} className="flex-1">
                  <Settings className="h-4 w-4 mr-2" />
                  Personalizar
                </Button>
              </div>
            </div>
          ) : (
            // Vista detallada
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-lg">Configuración Detallada de Cookies</h3>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setShowSettings(false)} className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                {/* Cookies Necesarias */}
                <div className="flex items-start justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <h4 className="font-medium">Cookies Necesarias</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Esenciales para el funcionamiento básico del sitio web. No se pueden desactivar.
                    </p>
                  </div>
                  <Switch checked={true} disabled />
                </div>

                {/* Cookies Analíticas */}
                <div className="flex items-start justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-4 w-4 text-blue-600" />
                      <h4 className="font-medium">Cookies Analíticas</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Nos ayudan a entender cómo interactúas con el sitio web mediante Google Analytics.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => handlePreferenceChange("analytics", checked)}
                  />
                </div>

                {/* Cookies Publicitarias */}
                <div className="flex items-start justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-purple-600" />
                      <h4 className="font-medium">Cookies Publicitarias</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Utilizadas por Google AdSense para mostrar anuncios relevantes y medir su efectividad.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.advertising}
                    onCheckedChange={(checked) => handlePreferenceChange("advertising", checked)}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleSavePreferences} className="flex-1">
                  Guardar preferencias
                </Button>
                <Button variant="outline" onClick={handleAcceptAll} className="flex-1 bg-transparent">
                  Aceptar todas
                </Button>
                <Button variant="outline" onClick={handleRejectAll} className="flex-1 bg-transparent">
                  Rechazar todas
                </Button>
              </div>

              <p className="text-xs text-gray-500">
                Puedes cambiar estas preferencias en cualquier momento visitando nuestra{" "}
                <a href="/configuracion-cookies" className="text-blue-600 hover:underline">
                  página de configuración de cookies
                </a>
                .
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
