"use client"

import { useState } from "react"
import {
  Calculator,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Calendar,
  Banknote,
  PiggyBank,
  ArrowLeftRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("laborales")

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Calculord</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#calculadoras" className="text-gray-600 hover:text-blue-600 font-medium">
                Calculadoras
              </a>
              <a href="#caracteristicas" className="text-gray-600 hover:text-blue-600 font-medium">
                Características
              </a>
              <a href="#testimonios" className="text-gray-600 hover:text-blue-600 font-medium">
                Testimonios
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
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

          {/* Stats */}
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

      {/* Calculadoras Section */}
      <section id="calculadoras" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Calculadoras</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Herramientas especializadas para diferentes necesidades laborales, profesionales y financieras
            </p>
          </div>

          {/* Tabs */}
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
            </div>
          </div>

          {/* Calculadoras Laborales */}
          {activeTab === "laborales" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Cotizaciones Seguridad Social */}
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full">
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

              {/* Conversor Salario Bruto Neto */}
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full">
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
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full">
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
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full">
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
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full">
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
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full">
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
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculadora de Vacaciones</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Calcula tus días de vacaciones según tu antigüedad, convenio y tiempo trabajado. Planifica tu
                  descanso.
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

              {/* Próximamente */}
              <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-200 flex flex-col h-full">
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
                    Calculadora de ERTE
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    Calculadora de Bajas
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    Más calculadoras...
                  </div>
                </div>
                <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed mt-auto">
                  Próximamente
                </Button>
              </div>
            </div>
          )}

          {/* Servicios Profesionales */}
          {activeTab === "servicios" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Honorarios Abogado */}
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full">
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
                  Calcula los honorarios de abogados laboralistas según el Colegio de Abogados y la complejidad del
                  caso.
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

              {/* Próximamente - Más servicios */}
              <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-200 flex flex-col h-full">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Próximamente</h3>
                <p className="text-gray-500 mb-4 flex-grow">
                  Más calculadoras de servicios profesionales en desarrollo.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    Honorarios Arquitecto
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    Honorarios Médico
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

          {/* Calculadoras Financieras */}
          {activeTab === "financieras" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Calculadora de Hipoteca */}
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full">
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
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full">
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
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full">
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
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full">
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
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full">
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
                  Planifica tu jubilación y calcula cuánto necesitas ahorrar para mantener tu nivel de vida.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Pensión estimada
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Ahorro complementario
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Planificación a largo plazo
                  </div>
                </div>
                <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed mt-auto">
                  Próximamente
                </Button>
              </div>

              {/* Próximamente - Más financieras */}
              <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-200 flex flex-col h-full">
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
        </div>
      </section>

      {/* Características */}
      <section id="caracteristicas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir nuestras calculadoras?
            </h2>
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
                <CardDescription>Algoritmos actualizados con la normativa laboral más reciente de 2025</CardDescription>
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
                <CardDescription>
                  Obtén cálculos completos en segundos con nuestra tecnología optimizada
                </CardDescription>
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

      {/* Testimonios */}
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

      {/* CTA Final */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Calculord</span>
              </div>
              <p className="text-gray-400">Calculadoras laborales profesionales actualizadas con la normativa 2025.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Calculadoras Laborales</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/calculadora-cotizaciones-seguridad-social" className="hover:text-white">
                    Cotizaciones SS
                  </Link>
                </li>
                <li>
                  <Link href="/conversor-salario-bruto-neto" className="hover:text-white">
                    Conversor Bruto-Neto
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-salario-por-horas" className="hover:text-white">
                    Salario por Horas
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-despidos" className="hover:text-white">
                    Despidos
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-paro" className="hover:text-white">
                    Prestación Desempleo
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-nomina" className="hover:text-white">
                    Nómina Completa
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-vacaciones" className="hover:text-white">
                    Vacaciones
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/calculadora-honorarios-abogado" className="hover:text-white">
                    Honorarios Abogado
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500">Más calculadoras próximamente</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Términos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Calculord. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
