"use client"

import type React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Calendar,
  Clock,
  ArrowRight,
  Calculator,
  Share2,
  BookOpen,
  ChevronRight,
  User,
  TrendingUp,
  Euro,
  Building,
  Users,
  CheckCircle,
  AlertCircle,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

// Newsletter Component
function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState<"idle" | "success" | "error" | "exists">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)
    setErrorMessage("")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubscriptionStatus("success")
        setEmail("")
      } else if (response.status === 409) {
        setSubscriptionStatus("exists")
        setErrorMessage("Este email ya está suscrito")
      } else {
        setSubscriptionStatus("error")
        setErrorMessage(data.error || "Error al suscribirse")
      }
    } catch (error) {
      setSubscriptionStatus("error")
      setErrorMessage("Error de conexión. Inténtalo de nuevo.")
    } finally {
      setIsSubscribing(false)
    }
  }

  if (subscriptionStatus === "success") {
    return (
      <div className="bg-green-100 border border-green-300 rounded-lg p-6">
        <div className="flex items-center mb-2">
          <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
          <h3 className="text-lg font-semibold text-green-800">¡Bienvenido a Calculord!</h3>
        </div>
        <p className="text-green-700 text-sm">
          Te hemos enviado un email de confirmación. Revisa tu bandeja de entrada y confirma tu suscripción.
        </p>
        <p className="text-green-600 text-xs mt-2">
          📧 Recibirás actualizaciones sobre cambios normativos y nuevas calculadoras
        </p>
      </div>
    )
  }

  if (subscriptionStatus === "exists") {
    return (
      <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
        <div className="flex items-center mb-2">
          <Mail className="h-6 w-6 text-blue-600 mr-3" />
          <h3 className="text-lg font-semibold text-blue-800">Ya estás suscrito</h3>
        </div>
        <p className="text-blue-700 text-sm">
          Este email ya forma parte de nuestra newsletter. ¡Gracias por seguirnos!
        </p>
        <button
          onClick={() => setSubscriptionStatus("idle")}
          className="text-blue-600 text-xs mt-2 underline hover:text-blue-800"
        >
          ¿Quieres suscribir otro email?
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center mb-3">
        <Mail className="h-5 w-5 text-green-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Newsletter Calculord</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        Recibe actualizaciones sobre cambios normativos, nuevas calculadoras y consejos laborales directamente en tu
        email.
      </p>

      <form onSubmit={handleNewsletterSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white transition-colors"
          required
          disabled={isSubscribing}
        />

        <Button
          type="submit"
          disabled={isSubscribing || !email}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3"
        >
          {isSubscribing ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Suscribiendo...
            </>
          ) : (
            <>
              <Mail className="h-4 w-4 mr-2" />
              Suscribirse Gratis
            </>
          )}
        </Button>

        {subscriptionStatus === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-red-600 text-sm">{errorMessage}</p>
          </div>
        )}
      </form>

      <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
        <span className="flex items-center">
          <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
          Sin spam
        </span>
        <span className="flex items-center">
          <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
          Cancela cuando quieras
        </span>
      </div>
    </div>
  )
}

// This would typically come from a CMS or database
export const blogPosts = {
  "smi-2025-subida-salario-minimo-interprofesional": {
    title: "SMI 2025: Nueva Subida a 1.184€ - Cómo Te Afecta",
    description:
      "Análisis completo de la subida del Salario Mínimo Interprofesional 2025. Impacto en nóminas, cotizaciones y calculadoras actualizadas.",
    content: `
El Salario Mínimo Interprofesional (SMI) para 2025 ha experimentado una nueva subida, estableciéndose en 1.184€ mensuales. Esta actualización representa un incremento significativo que afecta a millones de trabajadores en España.

## Datos Clave del SMI 2025

El nuevo SMI establece las siguientes cifras oficiales:

• SMI mensual: 1.184€ (14 pagas anuales)
• SMI diario: 39,47€ 
• SMI por hora: 5,26€
• Incremento respecto 2024: +4,2% (+48€ mensuales)
• SMI anual bruto: 16.576€

Esta subida supone un incremento de 48€ mensuales respecto al SMI de 2024, que se situaba en 1.134€.

## ¿A Quién Afecta Esta Subida?

### Trabajadores Directamente Beneficiados

La subida del SMI 2025 beneficia directamente a:

• Empleados con salario base igual al SMI: Aproximadamente 1,2 millones de trabajadores
• Trabajadores a tiempo parcial: El SMI se aplica proporcionalmente según las horas trabajadas
• Becarios y personal en prácticas: Cuando perciben retribución económica
• Empleados del hogar: Tanto internos como externos
• Trabajadores del campo: Especialmente en temporadas de alta demanda

### Impacto en las Empresas

Las empresas deben realizar los siguientes ajustes:

• Actualización de nóminas de todos los empleados afectados
• Recálculo de cotizaciones a la Seguridad Social
• Revisión de presupuestos de costes de personal
• Actualización de convenios colectivos que referencien el SMI
• Comunicación formal a los trabajadores sobre los cambios

## Cálculo Práctico con Ejemplos Reales

### Ejemplo 1: Trabajador a Jornada Completa

Situación: Empleado con contrato indefinido a jornada completa

Cálculo mensual:
• Salario base: 1.184€
• Prorrata pagas extras (2 pagas): 169,14€
• Total bruto mensual: 1.353,14€

Cálculo anual:
• 12 mensualidades: 14.208€
• 2 pagas extras: 2.368€
• Total bruto anual: 16.576€

### Ejemplo 2: Trabajador a Media Jornada (20h/semana)

Situación: Empleado con contrato de 20 horas semanales

Cálculo mensual:
• SMI proporcional (50%): 592€
• Prorrata pagas extras: 84,57€
• Total bruto mensual: 676,57€

### Ejemplo 3: Empleado del Hogar Interno

Situación: Empleada de hogar con alojamiento y manutención

Cálculo mensual:
• SMI completo: 1.184€
• Descuento alojamiento y manutención (máx. 30%): -355,20€
• Salario mínimo efectivo: 828,80€

## Comparativa Histórica del SMI

La evolución del SMI en los últimos años muestra una tendencia alcista constante:

2020: 950€ (+35€, +3,8%)
2021: 965€ (+15€, +1,6%)
2022: 1.000€ (+35€, +3,6%)
2023: 1.080€ (+80€, +8,0%)
2024: 1.134€ (+54€, +5,0%)
2025: 1.184€ (+50€, +4,4%)

Incremento acumulado 2020-2025: +234€ (+24,6%)

## Aspectos Legales Importantes

### Obligaciones del Empresario

Los empresarios tienen las siguientes obligaciones legales:

1. Actualización automática de todas las nóminas afectadas desde el 1 de enero de 2025
2. Comunicación escrita a los trabajadores sobre los cambios salariales
3. Regularización inmediata de las diferencias salariales pendientes
4. Actualización de contratos cuando sea necesario
5. Registro correcto en los sistemas de cotización a la Seguridad Social

⚠️ Importante: El incumplimiento puede conllevar sanciones de hasta 6.250€ por infracción grave.

### Derechos del Trabajador

Los trabajadores tienen derecho a:

• Cobro retroactivo desde el 1 de enero de 2025
• Reclamación judicial si no se aplica correctamente
• Información detallada sobre el cambio en la nómina
• Asesoramiento gratuito en las oficinas de trabajo
• Denuncia ante Inspección de Trabajo en caso de incumplimiento

## Impacto Económico y Social

### Para los Trabajadores

Beneficios:
• Incremento del poder adquisitivo de 576€ anuales
• Mejora en las cotizaciones a la Seguridad Social
• Mayor base de cálculo para prestaciones por desempleo
• Incremento en la pensión futura

### Para las Empresas

Costes adicionales:
• Incremento salarial directo: +4,4%
• Incremento en cotizaciones empresariales: +4,4%
• Coste total adicional por empleado: Aproximadamente 650€ anuales

## Checklist para Empresas

Acciones inmediatas a realizar:

✓ Revisar todas las nóminas de empleados con SMI
✓ Actualizar sistemas de gestión de nóminas
✓ Comunicar cambios a todos los trabajadores afectados
✓ Verificar convenios colectivos que referencien el SMI
✓ Calcular el impacto total en costes laborales
✓ Regularizar diferencias salariales pendientes
✓ Actualizar presupuestos de personal para 2025
✓ Revisar contratos de trabajo si es necesario

## Preguntas Frecuentes

¿Cuándo entra en vigor el nuevo SMI?
El SMI de 1.184€ es efectivo desde el 1 de enero de 2025.

¿Se aplica a todos los sectores?
Sí, salvo que el convenio colectivo establezca salarios superiores.

¿Qué pasa con los contratos firmados antes de 2025?
Se actualizan automáticamente al nuevo SMI sin necesidad de modificar el contrato.

¿Afecta a los autónomos?
No directamente, pero puede influir en las tarifas de servicios.

## Conclusiones

La subida del SMI 2025 a 1.184€ representa:

• Mejora significativa del poder adquisitivo de los trabajadores con salarios más bajos
• Incremento moderado de costes laborales para las empresas (+4,4%)
• Necesidad urgente de actualizar todos los procesos de nómina
• Oportunidad para revisar y optimizar las estructuras salariales

Recomendación: Utiliza nuestras calculadoras gratuitas para evaluar el impacto exacto en tu situación específica y asegúrate de cumplir con todas las obligaciones legales.
    `,
    category: "Normativa",
    readTime: "8 min",
    publishDate: "2025-01-28",
    author: "Equipo Calculord",
    tags: ["SMI", "Salario Mínimo", "2025", "Normativa"],
    relatedCalculators: [
      {
        name: "Calculadora de Nómina",
        url: "/calculadora-nomina",
        description: "Calcula tu nómina completa con el nuevo SMI 2025",
        icon: Calculator,
      },
      {
        name: "Coste Total Empresa",
        url: "/calculadora-coste-total-empresa",
        description: "Descubre el coste real de un empleado para la empresa",
        icon: Building,
      },
      {
        name: "Conversor Bruto-Neto",
        url: "/conversor-salario-bruto-neto",
        description: "Convierte entre salario bruto y neto actualizado 2025",
        icon: Euro,
      },
    ],
  },
  "cotizaciones-seguridad-social-2025-cambios": {
    title: "Cotizaciones Seguridad Social 2025: Todos los Cambios",
    description:
      "Nuevas bases de cotización, tipos y límites para 2025. Cómo calcular correctamente las cotizaciones de empresa y trabajador con ejemplos prácticos.",
    content: `
Las cotizaciones a la Seguridad Social para 2025 han experimentado importantes cambios que afectan tanto a empresas como trabajadores. Te explicamos todos los detalles actualizados para que puedas calcular correctamente tus cotizaciones.

## Bases de Cotización 2025

### Régimen General

Las nuevas bases de cotización para el Régimen General quedan establecidas de la siguiente manera:

• Base mínima: 1.184,00€ (igual al SMI)
• Base máxima: 4.720,50€ 
• Incremento base máxima: +4,1% respecto a 2024
• Tope máximo anual: 66.087€

### Régimen Especial Autónomos (RETA)

Para los trabajadores autónomos, las bases han cambiado significativamente:

• Base mínima: 960,60€
• Base máxima: 4.720,50€
• Nuevas bases intermedias: 15 tramos diferentes
• Sistema de cotización por ingresos reales (obligatorio desde 2025)

## Tipos de Cotización 2025

### Contingencias Comunes

Los tipos de cotización para contingencias comunes se mantienen estables:

Trabajador:
• Tipo general: 4,70%
• Desempleo: 1,55%
• Formación profesional: 0,10%
• Total trabajador: 6,35%

Empresa:
• Tipo general: 23,60%
• Desempleo: 5,50%
• Formación profesional: 0,60%
• FOGASA: 0,20%
• Total empresa: 29,90%

### Contingencias Profesionales

Las cotizaciones por accidentes de trabajo y enfermedades profesionales varían según el sector:

• Riesgo mínimo: 0,50%
• Riesgo medio: 1,25%
• Riesgo máximo: 2,50%
• Recargo por incapacidad temporal: 0,10%

## Cambios Importantes 2025

### Nuevas Bonificaciones

Se han introducido nuevas bonificaciones para fomentar el empleo:

Contratación jóvenes menores de 30 años:
• Bonificación: 75% durante 12 meses
• Requisito: Contrato indefinido
• Aplicable: Cuota empresarial

Contratación mayores de 52 años:
• Bonificación: 50% durante 24 meses
• Requisito: Situación de desempleo superior a 6 meses
• Aplicable: Todas las cotizaciones empresariales

### Digitalización Obligatoria

A partir de 2025 es obligatorio:

• Presentación telemática de todos los documentos
• Sistema RED actualizado para nuevas bases
• Comunicación automática de altas y bajas
• Integración con sistemas de nómina

## Ejemplos Prácticos de Cotización

### Ejemplo 1: Trabajador con Salario Medio

Situación: Empleado con salario bruto de 2.500€ mensuales

Cotización del trabajador:
• Base de cotización: 2.500€
• Contingencias comunes (4,70%): 117,50€
• Desempleo (1,55%): 38,75€
• Formación profesional (0,10%): 2,50€
• Total trabajador: 158,75€

Cotización de la empresa:
• Base de cotización: 2.500€
• Contingencias comunes (23,60%): 590,00€
• Desempleo (5,50%): 137,50€
• Formación profesional (0,60%): 15,00€
• FOGASA (0,20%): 5,00€
• Accidentes trabajo (1,25%): 31,25€
• Total empresa: 778,75€

### Ejemplo 2: Trabajador con Base Máxima

Situación: Directivo con salario bruto de 6.000€ mensuales

Cotización del trabajador:
• Base de cotización: 4.720,50€ (tope máximo)
• Contingencias comunes (4,70%): 221,86€
• Desempleo (1,55%): 73,17€
• Formación profesional (0,10%): 4,72€
• Total trabajador: 299,75€

Cotización de la empresa:
• Base de cotización: 4.720,50€
• Contingencias comunes (23,60%): 1.114,04€
• Desempleo (5,50%): 259,63€
• Formación profesional (0,60%): 28,32€
• FOGASA (0,20%): 9,44€
• Accidentes trabajo (1,25%): 59,01€
• Total empresa: 1.470,44€

### Ejemplo 3: Autónomo Base Media

Situación: Autónomo que elige base de cotización de 2.000€

Cotización mensual:
• Base de cotización: 2.000€
• Contingencias comunes (28,30%): 566,00€
• Accidentes trabajo (1,10%): 22,00€
• Cese de actividad (0,90%): 18,00€
• Formación profesional (0,10%): 2,00€
• Total autónomo: 608,00€

## Comparativa 2024 vs 2025

### Bases de Cotización

2024:
• Base mínima: 1.134,00€
• Base máxima: 4.495,50€
• Diferencia máxima: 3.361,50€

2025:
• Base mínima: 1.184,00€ (+4,4%)
• Base máxima: 4.720,50€ (+5,0%)
• Diferencia máxima: 3.536,50€

### Impacto Económico

Para un salario de 2.000€:

Trabajador 2024: 127,00€
Trabajador 2025: 127,00€ (sin cambios en tipos)

Empresa 2024: 598,00€
Empresa 2025: 598,00€ (sin cambios en tipos)

El impacto principal viene por el aumento de las bases mínimas y máximas, no por cambios en los tipos de cotización.

## Sectores con Cambios Específicos

### Sector Agrario

Nuevas medidas para 2025:

• Reducción del 50% en cotizaciones para explotaciones familiares
• Bonificación del 80% para jóvenes agricultores menores de 35 años
• Simplificación administrativa para pequeñas explotaciones

### Sector Marítimo

Actualizaciones importantes:

• Nuevas bases específicas para diferentes categorías
• Bonificaciones para renovación de flota
• Integración con sistema general de cotización

### Empleados del Hogar

Cambios significativos:

• Equiparación progresiva con Régimen General
• Nuevas bonificaciones para familias numerosas
• Simplificación del sistema de altas y bajas

## Obligaciones de las Empresas

### Nuevas Responsabilidades

A partir de enero 2025, las empresas deben:

✓ Actualizar sistemas de nómina con nuevas bases
✓ Comunicar cambios a trabajadores afectados
✓ Revisar convenios colectivos que referencien bases
✓ Implementar nuevos sistemas de comunicación telemática
✓ Formar al personal de RRHH en nuevas normativas
✓ Verificar bonificaciones aplicables
✓ Actualizar contratos de trabajo si es necesario
✓ Revisar pólizas de accidentes de trabajo

### Sanciones por Incumplimiento

El incumplimiento de las nuevas obligaciones puede conllevar:

• Infracciones leves: 60€ a 625€
• Infracciones graves: 626€ a 6.250€
• Infracciones muy graves: 6.251€ a 187.515€
• Recargos por cotizaciones impagadas: 20% adicional

## Herramientas de Cálculo

Para aplicar correctamente todos estos cambios, utiliza nuestras calculadoras actualizadas:

• Calculadora de Cotizaciones SS: Calcula las cotizaciones exactas con las nuevas bases 2025
• Calculadora de Nómina: Obtén el desglose completo de tu nómina
• Calculadora Coste Empresa: Descubre el coste total de un empleado

## Preguntas Frecuentes

¿Cuándo entran en vigor las nuevas bases?
Las nuevas bases de cotización son efectivas desde el 1 de enero de 2025.

¿Afectan a todos los trabajadores?
Sí, todos los trabajadores del Régimen General y autónomos se ven afectados por los cambios.

¿Cómo afecta a mi nómina?
Si tu salario está entre la base mínima y máxima anterior, no habrá cambios. Si superas la nueva base máxima, cotizarás más.

¿Qué pasa con los contratos firmados en 2024?
Los contratos se actualizan automáticamente con las nuevas bases sin necesidad de modificación.

## Conclusiones

Los cambios en las cotizaciones de Seguridad Social 2025 representan:

• Incremento moderado de las bases de cotización (+4,4% mínima, +5,0% máxima)
• Mantenimiento de los tipos de cotización actuales
• Nuevas bonificaciones para fomentar el empleo joven y senior
• Mayor digitalización y control administrativo
• Oportunidades de ahorro para empresas que cumplan requisitos

Es fundamental actualizar todos los sistemas de gestión y aprovechar las nuevas bonificaciones disponibles para optimizar los costes laborales.
    `,
    category: "Cotizaciones",
    readTime: "10 min",
    publishDate: "2025-01-27",
    author: "Equipo Calculord",
    tags: ["Cotizaciones", "Seguridad Social", "2025", "Bases", "Tipos"],
    relatedCalculators: [
      {
        name: "Calculadora Cotizaciones SS",
        url: "/calculadora-cotizaciones-seguridad-social",
        description: "Calcula las cotizaciones exactas con las nuevas bases 2025",
        icon: Calculator,
      },
      {
        name: "Calculadora de Nómina",
        url: "/calculadora-nomina",
        description: "Obtén el desglose completo de tu nómina actualizada",
        icon: Users,
      },
      {
        name: "Coste Total Empresa",
        url: "/calculadora-coste-total-empresa",
        description: "Descubre el coste total de un empleado con nuevas cotizaciones",
        icon: Building,
      },
    ],
  },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Component to render formatted content
function FormattedContent({ content }: { content: string }) {
  const sections = content.split("\n\n").filter((section) => section.trim())

  return (
    <div className="space-y-8">
      {sections.map((section, index) => {
        const trimmedSection = section.trim()

        // Main headings (##)
        if (trimmedSection.startsWith("## ")) {
          const title = trimmedSection.replace("## ", "")
          return (
            <h2 key={index} className="text-3xl font-bold mt-16 mb-8 text-gray-900 flex items-center">
              <span className="w-2 h-8 bg-blue-600 rounded mr-4"></span>
              {title}
            </h2>
          )
        }

        // Sub headings (###)
        if (trimmedSection.startsWith("### ")) {
          const title = trimmedSection.replace("### ", "")
          return (
            <h3 key={index} className="text-2xl font-semibold mt-12 mb-6 text-gray-900">
              {title}
            </h3>
          )
        }

        // Warning boxes
        if (trimmedSection.includes("⚠️ Importante:")) {
          const text = trimmedSection.replace("⚠️ Importante: ", "")
          return (
            <div key={index} className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6 rounded-r-lg">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-yellow-800">
                  <strong>Importante:</strong> {text}
                </p>
              </div>
            </div>
          )
        }

        // Calculation examples
        if (trimmedSection.includes("Situación:") && trimmedSection.includes("Cálculo")) {
          const lines = trimmedSection.split("\n")
          const situationLine = lines.find((line) => line.includes("Situación:"))
          const situation = situationLine?.replace("Situación: ", "") || ""

          const calculationLines = lines.filter((line) => line.startsWith("• ") && line.includes(":"))

          return (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg mb-4">
                <p className="font-semibold text-gray-900 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Situación: <span className="font-normal ml-2">{situation}</span>
                </p>
              </div>

              <div className="space-y-2">
                {calculationLines.map((line, lineIndex) => {
                  const [label, value] = line.replace("• ", "").split(": ")
                  const isTotal = label.toLowerCase().includes("total")

                  if (isTotal) {
                    return (
                      <div key={lineIndex} className="bg-blue-100 p-3 rounded-lg mt-4">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-blue-900">{label}:</span>
                          <span className="font-bold text-xl text-blue-900">{value}</span>
                        </div>
                      </div>
                    )
                  }

                  return (
                    <div
                      key={lineIndex}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-gray-700">{label}:</span>
                      <span className="font-bold text-gray-900">{value}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }

        // Historical comparison
        if (trimmedSection.includes("2020:") && trimmedSection.includes("2025:")) {
          const years = trimmedSection.split("\n").filter((line) => line.includes(":"))
          return (
            <div key={index} className="bg-gray-50 rounded-lg p-6 my-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {years.map((year, yearIndex) => {
                  const [yearData, increment] = year.split(" (")
                  const [yearNum, amount] = yearData.split(": ")
                  const incrementClean = increment?.replace(")", "") || ""

                  return (
                    <div key={yearIndex} className="flex justify-between items-center p-3 bg-white rounded border">
                      <span className="font-semibold text-gray-900">{yearNum}</span>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{amount}</div>
                        <div className="text-sm text-green-600">{incrementClean}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }

        // Checklist items
        if (trimmedSection.includes("✓ ")) {
          const items = trimmedSection.split("\n").filter((line) => line.startsWith("✓ "))
          return (
            <div key={index} className="bg-green-50 rounded-lg p-6 my-6">
              <div className="space-y-3">
                {items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item.replace("✓ ", "")}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        }

        // Bullet lists
        if (trimmedSection.includes("• ")) {
          const items = trimmedSection.split("\n").filter((line) => line.startsWith("• "))
          const title = trimmedSection.split("\n")[0]

          if (!title.startsWith("• ")) {
            return (
              <div key={index} className="my-6">
                {title && <p className="font-semibold text-gray-900 mb-4">{title}</p>}
                <ul className="space-y-2">
                  {items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{item.replace("• ", "")}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          }
        }

        // FAQ items
        if (trimmedSection.includes("¿") && trimmedSection.includes("\n")) {
          const lines = trimmedSection.split("\n")
          const question = lines[0]
          const answer = lines.slice(1).join(" ")

          return (
            <div key={index} className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6 rounded-r-lg">
              <h4 className="font-bold text-blue-900 mb-3">{question}</h4>
              <p className="text-blue-800">{answer}</p>
            </div>
          )
        }

        // Benefits/Costs sections
        if (trimmedSection.includes("Beneficios:") || trimmedSection.includes("Costes adicionales:")) {
          const lines = trimmedSection.split("\n")
          const title = lines[0]
          const items = lines.slice(1).filter((line) => line.startsWith("• "))
          const isBenefits = title.includes("Beneficios")

          return (
            <div key={index} className={`${isBenefits ? "bg-green-50" : "bg-red-50"} rounded-lg p-6 my-6`}>
              <h4 className={`font-bold mb-4 flex items-center ${isBenefits ? "text-green-900" : "text-red-900"}`}>
                <TrendingUp className={`w-5 h-5 mr-2 ${isBenefits ? "text-green-600" : "text-red-600"}`} />
                {title}
              </h4>
              <ul className="space-y-2">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <span
                      className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 ${isBenefits ? "bg-green-600" : "bg-red-600"}`}
                    ></span>
                    <span className={isBenefits ? "text-green-800" : "text-red-800"}>{item.replace("• ", "")}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        }

        // Regular paragraphs
        return (
          <p key={index} className="text-gray-700 leading-relaxed text-lg mb-6">
            {trimmedSection}
          </p>
        )
      })}
    </div>
  )
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Calculord</span>
            </Link>

            <div className="flex items-center space-x-6">
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Blog
              </Link>
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Calculadoras
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">SMI 2025</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold mb-6">{post.category}</Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.publishDate).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime} de lectura
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-center space-x-4">
              <Button variant="outline" className="flex items-center bg-white">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
              <Button variant="outline" className="flex items-center bg-white">
                <BookOpen className="w-4 h-4 mr-2" />
                Guardar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Article Content */}
          <article className="lg:col-span-2">
            <div className="prose prose-lg prose-blue max-w-none">
              <FormattedContent content={post.content} />
            </div>

            {/* Key Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <Euro className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900">1.184€</h3>
                <p className="text-blue-700">SMI Mensual 2025</p>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900">+4,4%</h3>
                <p className="text-green-700">Incremento 2025</p>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-900">1,2M</h3>
                <p className="text-purple-700">Trabajadores Afectados</p>
              </Card>
            </div>

            {/* Related Calculators */}
            <div className="mt-20 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">🧮 Calculadoras Relacionadas</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Aplica los conceptos de este artículo con nuestras herramientas gratuitas y actualizadas
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {post.relatedCalculators.map((calc, index) => {
                  const IconComponent = calc.icon
                  return (
                    <Link key={calc.url} href={calc.url} className="group">
                      <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group-hover:scale-105">
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                          <h4 className="font-bold text-gray-900 mb-3 text-lg">{calc.name}</h4>
                          <p className="text-sm text-gray-600 mb-4 leading-relaxed">{calc.description}</p>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            Calcular Ahora
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Equipo Calculord</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Expertos en legislación laboral y fiscal española. Mantenemos nuestras calculadoras actualizadas con
                    la normativa vigente para ofrecerte resultados precisos y confiables.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              <Card className="shadow-lg border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    Índice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-3">
                    <a
                      href="#datos-clave"
                      className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-3 rounded-lg transition-all font-medium"
                    >
                      📊 Datos Clave del SMI 2025
                    </a>
                    <a
                      href="#quien-afecta"
                      className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-3 rounded-lg transition-all font-medium"
                    >
                      👥 ¿A Quién Afecta?
                    </a>
                    <a
                      href="#calculo-practico"
                      className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-3 rounded-lg transition-all font-medium"
                    >
                      🧮 Cálculo Práctico
                    </a>
                    <a
                      href="#comparativa"
                      className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-3 rounded-lg transition-all font-medium"
                    >
                      📈 Comparativa Histórica
                    </a>
                    <a
                      href="#aspectos-legales"
                      className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-3 rounded-lg transition-all font-medium"
                    >
                      ⚖️ Aspectos Legales
                    </a>
                    <a
                      href="#impacto-economico"
                      className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-3 rounded-lg transition-all font-medium"
                    >
                      💰 Impacto Económico
                    </a>
                  </nav>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                    Datos Clave
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">SMI 2025:</span>
                    <span className="font-bold text-blue-900">1.184€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Incremento:</span>
                    <span className="font-bold text-green-600">+4,4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Por hora:</span>
                    <span className="font-bold text-gray-900">5,26€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Anual:</span>
                    <span className="font-bold text-gray-900">16.576€</span>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-green-600" />
                    Newsletter
                  </CardTitle>
                  <CardDescription className="text-sm">Recibe actualizaciones sobre cambios normativos</CardDescription>
                </CardHeader>
                <CardContent>
                  <NewsletterForm />
                </CardContent>
              </Card>

              {/* Popular Articles */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-orange-600" />
                    Más Leídos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <Link href="/blog/cotizaciones-seguridad-social-2025-cambios" className="block group">
                      <h4 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 mb-2 transition-colors">
                        Cotizaciones SS 2025: Todos los Cambios
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Bases y tipos actualizados para el nuevo año
                      </p>
                    </Link>
                    <Separator />
                    <Link href="/blog/como-calcular-finiquito" className="block group">
                      <h4 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 mb-2 transition-colors">
                        Cómo Calcular tu Finiquito
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">Guía paso a paso con ejemplos prácticos</p>
                    </Link>
                    <Separator />
                    <Link href="/blog/irpf-2025-tramos" className="block group">
                      <h4 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 mb-2 transition-colors">
                        IRPF 2025: Nuevos Tramos
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">Cambios fiscales que debes conocer</p>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
