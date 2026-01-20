import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, TrendingUp, Shield } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section id="caracteristicas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Por qué elegir nuestras calculadoras?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Herramientas profesionales diseñadas para obtener resultados precisos y actualizados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle>Precisión Garantizada</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Algoritmos actualizados con la normativa laboral más reciente de 2026</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle>Resultados Instantáneos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Obtén cálculos completos en segundos con nuestra tecnología optimizada</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle>100% Privado</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Todos los cálculos se realizan en tu navegador. No almacenamos datos personales
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
