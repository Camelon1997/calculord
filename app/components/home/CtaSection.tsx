import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para simplificar tus cálculos laborales?</h2>
        <p className="text-xl mb-8 opacity-90">Únete a miles de profesionales que ya usan nuestras herramientas</p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
          Empezar Ahora - Es Gratis
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
