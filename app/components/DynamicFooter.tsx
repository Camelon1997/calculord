"use client"

import type React from "react"

import { memo } from "react"
import Link from "next/link"
import { Calculator, Twitter, Linkedin } from "lucide-react"

const FooterLink = memo(
  ({
    href,
    children,
    className = "",
  }: {
    href: string
    children: React.ReactNode
    className?: string
  }) => (
    <Link href={href} className={`text-sm hover:text-white transition-colors duration-200 ${className}`}>
      {children}
    </Link>
  ),
)

FooterLink.displayName = "FooterLink"

const DynamicFooter = memo(() => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna de Marca */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3" aria-label="Calculord - Inicio">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-2xl font-bold text-white">Calculord</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Herramientas laborales y financieras gratuitas, actualizadas a la normativa 2025 para profesionales y
              particulares en España.
            </p>
          </div>

          {/* Columna de Calculadoras */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Calculadoras</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/calculadora-nomina">Nómina</FooterLink>
              </li>
              <li>
                <FooterLink href="/conversor-salario-bruto-neto">Bruto-Neto</FooterLink>
              </li>
              <li>
                <FooterLink href="/calculadora-irpf">IRPF</FooterLink>
              </li>
              <li>
                <FooterLink href="/calculadora-coste-total-empresa">Coste Empresa</FooterLink>
              </li>
              <li>
                <FooterLink href="/calculadora-hipoteca">Hipoteca</FooterLink>
              </li>
            </ul>
          </div>

          {/* Columna de Recursos */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/blog">Blog</FooterLink>
              </li>
              <li>
                <FooterLink href="/sobre-nosotros">Sobre Nosotros</FooterLink>
              </li>
              <li>
                <FooterLink href="/contacto">Contacto</FooterLink>
              </li>
            </ul>
          </div>

          {/* Columna Legal y Social */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <FooterLink href="/politica-de-privacidad">Política de Privacidad</FooterLink>
              </li>
              <li>
                <FooterLink href="/terminos-de-servicio">Términos de Servicio</FooterLink>
              </li>
              <li>
                <FooterLink href="/politica-de-cookies">Política de Cookies</FooterLink>
              </li>
            </ul>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors duration-200" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-center sm:text-left">
            &copy; {currentYear} Calculord. Todos los derechos reservados.
          </p>
          <p className="text-xs mt-4 sm:mt-0 text-center sm:text-right">
            Las calculadoras ofrecen estimaciones y no deben sustituir el asesoramiento profesional.
          </p>
        </div>
      </div>
    </footer>
  )
})

DynamicFooter.displayName = "DynamicFooter"

export default DynamicFooter
