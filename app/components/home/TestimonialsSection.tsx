import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Profesionales que confían en nosotros</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Uso estas calculadoras a diario en mi gestoría. Son precisas, rápidas y me ahorran mucho tiempo."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Ana García</p>
                <p className="text-sm text-gray-500">Gestora Laboral</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Perfectas para calcular costes laborales y hacer presupuestos. Las recomiendo totalmente."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Carlos Martínez</p>
                <p className="text-sm text-gray-500">Director RRHH</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Me ayudan a entender mis cotizaciones y planificar mis finanzas. Muy útiles y fáciles de usar."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Laura Sánchez</p>
                <p className="text-sm text-gray-500">Trabajadora Autónoma</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
