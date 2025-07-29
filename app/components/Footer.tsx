import Link from "next/link"
import { Calculator, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna de Marca */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Calculord</span>
            </Link>
            <p className="text-sm">
              Herramientas laborales y financieras gratuitas, actualizadas a la normativa 2025 para profesionales y
              particulares en España.
            </p>
          </div>

          {/* Columna de Calculadoras */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Calculadoras</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/calculadora-nomina" className="text-sm hover:text-white transition-colors">
                  Nómina
                </Link>
              </li>
              <li>
                <Link href="/conversor-salario-bruto-neto" className="text-sm hover:text-white transition-colors">
                  Bruto-Neto
                </Link>
              </li>
              <li>
                <Link href="/calculadora-irpf" className="text-sm hover:text-white transition-colors">
                  IRPF
                </Link>
              </li>
              <li>
                <Link href="/calculadora-coste-total-empresa" className="text-sm hover:text-white transition-colors">
                  Coste Empresa
                </Link>
              </li>
              <li>
                <Link href="/calculadora-hipoteca" className="text-sm hover:text-white transition-colors">
                  Hipoteca
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna de Recursos */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Recursos</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/blog" className="text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-sm hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Legal y Social */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/politica-de-privacidad" className="text-sm hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos-de-servicio" className="text-sm hover:text-white transition-colors">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="text-sm hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Calculord. Todos los derechos reservados.
          </p>
          <p className="text-xs mt-4 sm:mt-0">
            Las calculadoras ofrecen estimaciones y no deben sustituir el asesoramiento profesional.
          </p>
        </div>
      </div>
    </footer>
  )
}
