import { Calculator, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Calculadoras Profesionales
          <span className="block text-blue-600">Completas 2025</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Herramientas precisas para calcular salarios, cotizaciones, despidos, prestaciones, hipotecas, honorarios
          profesionales y más. Actualizadas con la normativa 2025 y diseñadas para profesionales.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            <Calculator className="mr-2 h-5 w-5" />
            Ver Calculadoras
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
            Conocer Más
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">+50K</div>
            <div className="text-gray-600">Cálculos realizados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Gratuito</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">2025</div>
            <div className="text-gray-600">Actualizado</div>
          </div>
        </div>
      </div>
    </section>
  )
}
