"use client"

import { useState, useCallback, memo } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
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
  Menu,
  X,
} from "lucide-react"

const menuCategories = {
  laborales: {
    title: "Laborales",
    icon: <Briefcase className="w-5 h-5" />,
    items: [
      {
        name: "Cotizaciones Seguridad Social",
        href: "/calculadora-cotizaciones-seguridad-social",
        icon: <Calculator className="w-4 h-4" />,
        description: "Calcula las cotizaciones de trabajadores y autónomos.",
      },
      {
        name: "Salario por Horas",
        href: "/calculadora-salario-por-horas",
        icon: <Clock className="w-4 h-4" />,
        description: "Estima tu salario real según las horas trabajadas.",
      },
      {
        name: "Despidos",
        href: "/calculadora-despidos",
        icon: <UserX className="w-4 h-4" />,
        description: "Calcula tu indemnización y finiquito.",
      },
      {
        name: "Prestación por Desempleo",
        href: "/calculadora-paro",
        icon: <Receipt className="w-4 h-4" />,
        description: "Conoce la cuantía y duración de tu paro.",
      },
      {
        name: "Nómina Completa",
        href: "/calculadora-nomina",
        icon: <FileText className="w-4 h-4" />,
        description: "Desglosa tu nómina de bruto a neto.",
      },
      {
        name: "Vacaciones",
        href: "/calculadora-vacaciones",
        icon: <Calendar className="w-4 h-4" />,
        description: "Calcula los días que te corresponden.",
      },
      {
        name: "Calculadora IRPF",
        href: "/calculadora-irpf",
        icon: <Calculator className="w-4 h-4" />,
        description: "Calcula tu IRPF como trabajador asalariado.",
      },
      {
        name: "Coste Total Empresa",
        href: "/calculadora-coste-total-empresa",
        icon: <Building className="w-4 h-4" />,
        description: "Calcula el coste real de un empleado.",
      },
    ],
  },
  financieras: {
    title: "Financieras",
    icon: <TrendingUp className="w-5 h-5" />,
    items: [
      {
        name: "Hipoteca",
        href: "/calculadora-hipoteca",
        icon: <Home className="w-4 h-4" />,
        description: "Simula la cuota y amortización de tu hipoteca.",
      },
      {
        name: "Ahorro",
        href: "/calculadora-ahorro",
        icon: <PiggyBank className="w-4 h-4" />,
        description: "Planifica tus metas y calcula el interés compuesto.",
      },
    ],
  },
  servicios: {
    title: "Servicios",
    icon: <Scale className="w-5 h-5" />,
    items: [
      {
        name: "Honorarios Abogado",
        href: "/calculadora-honorarios-abogado",
        icon: <Gavel className="w-4 h-4" />,
        description: "Estima los costes legales según baremos oficiales.",
      },
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
        description: "Consulta las fechas clave de tus obligaciones.",
      },
      {
        name: "IRPF Autónomos",
        href: "/calculadora-irpf-autonomos",
        icon: <FileText className="w-4 h-4" />,
        description: "Calcula tus pagos trimestrales y la renta anual.",
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
        description: "Convierte de bruto a neto y viceversa.",
      },
    ],
  },
}

const DropdownItem = memo(({ item, onClick }: { item: any; onClick: () => void }) => (
  <Link
    href={item.href}
    className="group flex items-start space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-all duration-200"
    onClick={onClick}
  >
    <div className="flex-shrink-0 p-2.5 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-200 group-hover:scale-105 transition-all duration-200">
      {item.icon}
    </div>
    <div>
      <h3 className="font-semibold text-sm text-gray-800 group-hover:text-blue-700 transition-colors duration-200">
        {item.name}
      </h3>
      <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
    </div>
  </Link>
))

DropdownItem.displayName = "DropdownItem"

const Header = memo(() => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMouseEnter = useCallback((dropdown: string) => {
    setActiveDropdown(dropdown)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setActiveDropdown(null)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2.5 group"
            onClick={closeMobileMenu}
            aria-label="Calculord - Inicio"
          >
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
              <Calculator className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
              Calculord
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" role="navigation">
            {Object.entries(menuCategories).map(([key, category]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center space-x-1.5 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 group"
                  aria-expanded={activeDropdown === key}
                  aria-haspopup="true"
                >
                  {category.icon}
                  <span className="font-medium text-sm">{category.title}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === key ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-md pt-2"
                    >
                      <div className="bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200/60 overflow-hidden p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {category.items.map((item, index) => (
                            <DropdownItem key={index} item={item} onClick={() => setActiveDropdown(null)} />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link
              href="/blog"
              className="flex items-center space-x-1.5 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200"
            >
              <BookOpen className="w-5 h-5" aria-hidden="true" />
              <span className="font-medium text-sm">Blog</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/60 overflow-y-auto max-h-[80vh]"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              {Object.values(menuCategories).map((category) => (
                <div key={category.title}>
                  <div className="flex items-center space-x-2 px-2 py-2 text-gray-800 font-semibold">
                    {category.icon}
                    <span>{category.title}</span>
                  </div>
                  <div className="pl-4 space-y-1 border-l-2 border-blue-100 ml-2">
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 px-3 py-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200"
                        onClick={closeMobileMenu}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="border-t border-gray-200/80 pt-4 mt-4">
                <Link
                  href="/blog"
                  className="flex items-center space-x-3 px-2 py-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 font-semibold"
                  onClick={closeMobileMenu}
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Blog</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
})

Header.displayName = "Header"

export default Header
