"use client"

import { Calculator, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 sm:py-16 lg:py-20 hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Calculadoras Profesionales
          <span className="block text-blue-600 mt-2">Completas 2026</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2 leading-relaxed">
          Herramientas precisas para calcular salarios, cotizaciones, despidos, prestaciones, hipotecas, honorarios
          profesionales y más. Actualizadas con la normativa 2026 y diseñadas para profesionales.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 h-12 sm:h-auto text-sm sm:text-base"
            onClick={() => {
              const element = document.getElementById("calculadoras")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Ver Calculadoras
          </Button>
          <Link href="/sobre-nosotros" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="px-6 sm:px-8 py-3 bg-transparent w-full h-12 sm:h-auto text-sm sm:text-base"
            >
              Conocer Más
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">+50K</div>
            <div className="text-xs sm:text-sm text-gray-600">Cálculos realizados</div>
          </div>

          <div className="text-center border-x border-gray-200">
            <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-1">100%</div>
            <div className="text-xs sm:text-sm text-gray-600">Gratuito</div>
          </div>

          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1">2026</div>
            <div className="text-xs sm:text-sm text-gray-600">Actualizado</div>
          </div>
        </div>
      </div>
    </section>
  )
}
