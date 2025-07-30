"use client"

import { useEffect, useRef } from "react"

interface SidebarAdProps {
  adSlot: string
  className?: string
}

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export default function SidebarAd({ adSlot, className = "" }: SidebarAdProps) {
  const adRef = useRef<HTMLModElement>(null)
  const isLoaded = useRef(false)

  useEffect(() => {
    if (isLoaded.current) return

    try {
      if (typeof window !== "undefined" && window.adsbygoogle && adRef.current) {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        isLoaded.current = true
      }
    } catch (error) {
      console.error("AdSense error:", error)
    }
  }, [])

  return (
    <div className={`w-full ${className}`}>
      <div className="bg-gray-50 p-2 text-center text-xs text-gray-500 mb-2">Publicidad</div>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4078993164507618"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
