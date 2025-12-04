"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Calculator,
  CheckCircle,
  Shield,
  Calendar,
  Banknote,
  PiggyBank,
  ArrowLeftRight,
  Building2,
  FileText,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CalculatorsSection() {
  const [activeTab, setActiveTab] = useState("laborales")

  return (
    <section id="calculadoras" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Calculadoras</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Herramientas especializadas para diferentes necesidades laborales, profesionales y financieras
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("laborales")}
              className={`px-4 py-2 rounded-md font-medium transition-colors text-sm ${
                activeTab === "laborales" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Calculadoras Laborales
            </button>
            <button
              onClick={() => setActiveTab("servicios")}
              className={`px-4 py-2 rounded-md font-medium transition-colors text-sm ${
                activeTab === "servicios" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Servicios Profesionales
            </button>
            <button
              onClick={() => setActiveTab("financieras")}
              className={`px-4 py-2 rounded-md font-medium transition-colors text-sm ${
                activeTab === "financieras" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Calculadoras Financieras
            </button>
            <button
              onClick={() => setActiveTab("autonomos")}
              className={`px-4 py-2 rounded-md font-medium transition-colors text-sm ${
                activeTab === "autonomos" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Autónomos
            </button>
          </div>
        </div>

        {activeTab === "laborales" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cotizaciones Seguridad Social */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cotizaciones Seguridad Social</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula las cotizaciones exactas de trabajadores y empresas según el régimen general 2025.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Régimen General y Autónomos
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Bases y tipos actualizados 2025
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Desglose trabajador/empresa
                </div>
              </div>
              <Link href="/calculadora-cotizaciones-seguridad-social" className="mt-auto">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Calcular Cotizaciones</Button>
              </Link>
            </div>

            {/* Coste Total Empresa */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coste Total Empresa</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula el coste real total de un trabajador para la empresa desde bruto o neto deseado.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cálculo desde bruto o neto
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cotizaciones empresariales 2025
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Planificación presupuestaria
                </div>
              </div>
              <Link href="/calculadora-coste-total-empresa" className="mt-auto">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Calcular Coste</Button>
              </Link>
            </div>

            {/* Conversor Salario Bruto Neto */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <ArrowLeftRight className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Conversor Bruto a Neto</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Convierte tu salario bruto a neto y viceversa con IRPF 2025 y deducciones actualizadas.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Conversión bidireccional
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  IRPF 2025 actualizado
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Deducciones familiares
                </div>
              </div>
              <Link href="/conversor-salario-bruto-neto" className="mt-auto">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Convertir Salario</Button>
              </Link>
            </div>

            {/* Salario por Horas */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Salario por Horas</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula tu salario basado en horas trabajadas, incluyendo horas extra y SMI 2025.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  SMI 2025: 1.134€/mes
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Horas extra y nocturnas
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Diferentes tipos de contrato
                </div>
              </div>
              <Link href="/calculadora-salario-por-horas" className="mt-auto">
                <Button className="w-full bg-green-600 hover:bg-green-700">Calcular Salario</Button>
              </Link>
            </div>

            {/* Despidos */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Despidos e Indemnizaciones</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula indemnizaciones por despido, finiquito y liquidación según la normativa laboral.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Despido procedente/improcedente
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Finiquito completo
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Vacaciones pendientes
                </div>
              </div>
              <Link href="/calculadora-despidos" className="mt-auto">
                <Button className="w-full bg-red-600 hover:bg-red-700">Calcular Despido</Button>
              </Link>
            </div>

            {/* Prestación por Desempleo */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prestación por Desempleo</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula tu prestación por desempleo, subsidio y duración según tu historial laboral.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Base reguladora actualizada
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Duración según cotización
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Subsidio por desempleo
                </div>
              </div>
              <Link href="/calculadora-paro" className="mt-auto">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Calcular Prestación</Button>
              </Link>
            </div>

            {/* Nómina Completa */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculadora de Nómina</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula tu salario neto completo con IRPF, cotizaciones y todas las deducciones 2025.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  IRPF por tramos 2025
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Deducciones personales
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Coste total empresa
                </div>
              </div>
              <Link href="/calculadora-nomina" className="mt-auto">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Calcular Nómina</Button>
              </Link>
            </div>

            {/* Calculadora de Vacaciones */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculadora de Vacaciones</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula tus días de vacaciones según tu antigüedad, convenio y tiempo trabajado. Planifica tu descanso.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cálculo por convenio
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Vacaciones proporcionales
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Valor económico
                </div>
              </div>
              <Link href="/calculadora-vacaciones" className="mt-auto">
                <Button className="w-full bg-green-600 hover:bg-green-700">Calcular Vacaciones</Button>
              </Link>
            </div>

            {/* Calculadora de IRPF */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculadora de IRPF</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula tu IRPF 2025 con tramos actualizados por Comunidad Autónoma y deducciones personales.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Tramos IRPF 2025 actualizados
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Todas las Comunidades Autónomas
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Deducciones personales y familiares
                </div>
              </div>
              <Link href="/calculadora-irpf" className="mt-auto">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Calcular IRPF</Button>
              </Link>
            </div>

            {/* Calculadora de ERTE */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculadora de ERTE</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula tu prestación durante un ERTE, tanto por suspensión como por reducción de jornada.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  ERTE total o parcial
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Fuerza mayor y ETOP
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Base reguladora actualizada
                </div>
              </div>
              <Link href="/calculadora-erte" className="mt-auto">
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Calcular ERTE</Button>
              </Link>
            </div>

            {/* Calculadora de Bajas Laborales */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculadora de Bajas</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula tu prestación por incapacidad temporal según contingencias comunes o profesionales 2025.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  IT común y profesional
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Base reguladora actualizada
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Desglose empresa/INSS
                </div>
              </div>
              <Link href="/calculadora-bajas" className="mt-auto">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Calcular Baja</Button>
              </Link>
            </div>

            {/* Calculadora de Horas Extra */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculadora de Horas Extra</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula el valor de tus horas extra diferenciando entre ordinarias, festivos, nocturnas y estructurales
                2025.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Ordinarias, festivos y nocturnas
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Recargos de convenio
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Control límite 80h anuales
                </div>
              </div>
              <Link href="/calculadora-horas-extra" className="mt-auto">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Calcular Horas Extra</Button>
              </Link>
            </div>

            {/* Calculadora de Maternidad/Paternidad */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maternidad y Paternidad</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula tu prestación por nacimiento, adopción o acogida con duración según tipo de parto 2025.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  19 semanas al 100%
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Parto múltiple
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Familias monoparentales
                </div>
              </div>
              <Link href="/calculadora-maternidad-paternidad" className="mt-auto">
                <Button className="w-full bg-pink-600 hover:bg-pink-700">Calcular Prestación</Button>
              </Link>
            </div>

            {/* Próximamente */}
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-200 flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Próximamente</h3>
              <p className="text-gray-500 mb-4 flex-grow">
                Nuevas calculadoras en desarrollo para completar tu suite laboral.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  Más calculadoras laborales...
                </div>
              </div>
              <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed mt-auto">
                Próximamente
              </Button>
            </div>
          </div>
        )}

        {activeTab === "servicios" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Honorarios Abogado */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-9m3 9l3-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Honorarios de Abogado</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula los honorarios de abogados laboralistas según el Colegio de Abogados y la complejidad del caso.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Baremos oficiales 2025
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Diferentes especialidades
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Estimación de costes
                </div>
              </div>
              <Link href="/calculadora-honorarios-abogado" className="mt-auto">
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Calcular Honorarios</Button>
              </Link>
            </div>

            {/* Honorarios Arquitecto */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Honorarios de Arquitecto</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Estima los costes de tu proyecto arquitectónico según el PEM, tipo de obra y complejidad.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cálculo según PEM 2025
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Desglose por fases
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Incluye visado y costes
                </div>
              </div>
              <Link href="/calculadora-honorarios-arquitecto" className="mt-auto">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Calcular Honorarios</Button>
              </Link>
            </div>

            {/* Próximamente - Más servicios */}
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-200 flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Próximamente</h3>
              <p className="text-gray-500 mb-4 flex-grow">Más calculadoras de servicios profesionales en desarrollo.</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  Honorarios Médico
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  Tasaciones
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  Más profesionales...
                </div>
              </div>
              <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed mt-auto">
                Próximamente
              </Button>
            </div>
          </div>
        )}

        {activeTab === "financieras" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Calculadora de Hipoteca */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculadora de Hipoteca</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula tu cuota mensual, intereses totales y tabla de amortización para tu hipoteca.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cuota mensual exacta
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Tabla de amortización
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Intereses totales
                </div>
              </div>
              <Link href="/calculadora-hipoteca" className="mt-auto">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Calcular Hipoteca</Button>
              </Link>
            </div>

            {/* Calculadora de Ahorro */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <PiggyBank className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculadora de Ahorro</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Planifica tus ahorros y calcula cuánto necesitas ahorrar para alcanzar tus objetivos.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Objetivos de ahorro
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Interés compuesto
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Proyección temporal
                </div>
              </div>
              <Link href="/calculadora-ahorro" className="mt-auto">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Calcular Ahorro</Button>
              </Link>
            </div>

            {/* Calculadora de Inversión */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculadora de Inversión</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula el rendimiento de tus inversiones y compara diferentes opciones de inversión.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  ROI y rentabilidad
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Comparativa de opciones
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Proyección a largo plazo
                </div>
              </div>
              <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed mt-auto">
                Próximamente
              </Button>
            </div>

            {/* Calculadora de Préstamo Personal */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <Banknote className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculadora de Préstamo</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula las cuotas de tu préstamo personal y compara diferentes ofertas bancarias.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cuota mensual
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  TAE y TIN
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Comparativa de ofertas
                </div>
              </div>
              <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed mt-auto">
                Próximamente
              </Button>
            </div>

            {/* Calculadora de Jubilación */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculadora de Jubilación</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula tu pensión de jubilación estimada según años cotizados y base reguladora 2025.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Base reguladora 2025
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Años de cotización
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Pensión anticipada y ordinaria
                </div>
              </div>
              <Link href="/calculadora-jubilacion" className="mt-auto">
                <Button className="w-full bg-amber-600 hover:bg-amber-700">Calcular Jubilación</Button>
              </Link>
            </div>

            {/* Próximamente - Más financieras */}
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-200 flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Próximamente</h3>
              <p className="text-gray-500 mb-4 flex-grow">Más calculadoras financieras en desarrollo.</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  Calculadora de Impuestos
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  Calculadora de Seguros
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  Más herramientas...
                </div>
              </div>
              <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed mt-auto">
                Próximamente
              </Button>
            </div>
          </div>
        )}

        {activeTab === "autonomos" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Calendario Fiscal */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calendario Fiscal Autónomos</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Fechas clave para declaraciones trimestrales de IRPF e IVA, declaración anual y obligaciones fiscales.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Trimestral IRPF e IVA
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Declaración anual 2025
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Fechas límite y recordatorios
                </div>
              </div>
              <Link href="/calculadora-calendario-fiscal-autonomos" className="mt-auto">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Ver Calendario Fiscal</Button>
              </Link>
            </div>

            {/* IRPF para Autónomos */}
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">IRPF para Autónomos</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Calcula tu IRPF como autónomo con todas las deducciones fiscales, retenciones y optimización fiscal
                2025.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Deducciones fiscales completas
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Estimación directa vs módulos
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Retenciones y optimización
                </div>
              </div>
              <Link href="/calculadora-irpf-autonomos" className="mt-auto">
                <Button className="w-full bg-green-600 hover:bg-green-700">Calcular IRPF</Button>
              </Link>
            </div>

            {/* Próximamente - Más calculadoras autónomos */}
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-200 flex flex-col h-full calculator-card">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Próximamente</h3>
              <p className="text-gray-500 mb-4 flex-grow">Más calculadoras específicas para autónomos en desarrollo.</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  Calculadora RETA
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  Gastos Deducibles
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  Más herramientas...
                </div>
              </div>
              <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed mt-auto">
                Próximamente
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
