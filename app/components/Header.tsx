"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import {
  Calculator,
  TrendingUp,
  Scale,
  Building2,
  RefreshCw,
  FileText,
  BookOpen,
  ChevronDown,
  Calendar,
  Clock,
  UserX,
  Briefcase,
  Home,
  PiggyBank,
  Gavel,
  Receipt,
  ArrowUpDown,
  Building,
} from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(dropdown)
    setIsMenuOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
      setIsMenuOpen(false)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const menuCategories = {
    laborales: {
      title: "Laborales",
      icon: <Briefcase className="w-5 h-5" />,
      items: [
        {
          name: "Cotizaciones Seguridad Social",
          href: "/calculadora-cotizaciones-seguridad-social",
          icon: <Calculator className="w-4 h-4" />,
        },
        { name: "Salario por Horas", href: "/calculadora-salario-por-horas", icon: <Clock className="w-4 h-4" /> },
        { name: "Despidos", href: "/calculadora-despidos", icon: <UserX className="w-4 h-4" /> },
        { name: "Prestación por Desempleo", href: "/calculadora-paro", icon: <Receipt className="w-4 h-4" /> },
        { name: "Nómina Completa", href: "/calculadora-nomina", icon: <FileText className="w-4 h-4" /> },
        { name: "Vacaciones", href: "/calculadora-vacaciones", icon: <Calendar className="w-4 h-4" /> },
      ],
    },
    financieras: {
      title: "Financieras",
      icon: <TrendingUp className="w-5 h-5" />,
      items: [
        { name: "Hipoteca", href: "/calculadora-hipoteca", icon: <Home className="w-4 h-4" /> },
        { name: "Ahorro", href: "/calculadora-ahorro", icon: <PiggyBank className="w-4 h-4" /> },
      ],
    },
    servicios: {
      title: "Servicios",
      icon: <Scale className="w-5 h-5" />,
      items: [
        { name: "Honorarios Abogado", href: "/calculadora-honorarios-abogado", icon: <Gavel className="w-4 h-4" /> },
      ],
    },
    autonomos: {
      title: "Autónomos",
      icon: <Building2 className="w-5 h-5" />,
      items: [
        {
          name: "Calendario Fiscal",
          href: "/calculadora-calendario-fiscal-autonomos",
          icon: <Calendar className="w-4 h-4" />,
        },
        {
          name: "IRPF Autónomos",
          href: "/calculadora-irpf-autonomos",
          icon: <FileText className="w-4 h-4" />,
        },
      ],
    },
    conversores: {
      title: "Conversores",
      icon: <RefreshCw className="w-5 h-5" />,
      items: [
        {
          name: "Salario Bruto-Neto",
          href: "/conversor-salario-bruto-neto",
          icon: <ArrowUpDown className="w-4 h-4" />,
        },
        {
          name: "Coste Total Empresa",
          href: "/calculadora-coste-total-empresa",
          icon: <Building className="w-4 h-4" />,
        },
      ],
    },
    irpf: {
      title: "IRPF",
      icon: <FileText className="w-5 h-5" />,
      items: [{ name: "Calculadora IRPF", href: "/calculadora-irpf", icon: <Calculator className="w-4 h-4" /> }],
    },
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-200">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              Calculord
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {Object.entries(menuCategories).map(([key, category]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200 group">
                  {category.icon}
                  <span className="font-medium">{category.title}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === key ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            ))}

            <Link
              href="/blog"
              className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
            >
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Blog</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      {isMenuOpen && activeDropdown && (
        <div
          className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg"
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current)
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuCategories[activeDropdown as keyof typeof menuCategories]?.items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-blue-50/50 transition-all duration-200 border border-transparent hover:border-blue-100"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setActiveDropdown(null)
                  }}
                >
                  <div className="flex-shrink-0 p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Calculadora profesional actualizada 2025</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && !activeDropdown && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {Object.entries(menuCategories).map(([key, category]) => (
              <div key={key} className="space-y-2">
                <div className="flex items-center space-x-2 px-3 py-2 text-gray-900 font-semibold">
                  {category.icon}
                  <span>{category.title}</span>
                </div>
                <div className="pl-6 space-y-1">
                  {category.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link
              href="/blog"
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="w-5 h-5" />
              <span>Blog</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
