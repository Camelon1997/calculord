"use client"

import { useState } from "react"
import {
  Scale,
  Calculator,
  ArrowLeft,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  Briefcase,
  Banknote,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CalculadoraHonorariosAbogado() {
  const [formData, setFormData] = useState({
    tipoCaso: "",
    // Divorcio
    tieneHijos: "",
    tipoAcuerdo: "",
    patrimonioComun: "",
    // Accidente
    tipoAccidente: "",
    lesiones: "",
    culpabilidad: "",
    // Despido
    tipoDespido: "",
    antiguedad: "",
    salarioAnual: "",
    // Herencia
    numeroHerederos: "",
    testamento: "",
    valorHerencia: "",
    // Penal
    tipoDelito: "",
    gravedad: "",
    antecedentes: "",
    // Civil
    tipoDemanda: "",
    // Mercantil
    tipoAsunto: "",
    // Inmobiliario
    tipoOperacion: "",
    valorInmueble: "",

    cuantiaAsunto: "",
    complejidad: "media",
    experienciaAbogado: "intermedio",
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [resultados, setResultados] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)

  // Baremos base por especialidad (€/hora)
  const baremasEspecialidad = {
    familia: { base: 100, factor: 0.85 },
    civil: { base: 120, factor: 1.0 },
    penal: { base: 150, factor: 1.2 },
    mercantil: { base: 140, factor: 1.1 },
    laboral: { base: 110, factor: 0.9 },
    administrativo: { base: 130, factor: 1.05 },
    fiscal: { base: 160, factor: 1.3 },
    inmobiliario: { base: 125, factor: 1.0 },
  }

  // Factores de complejidad
  const factoresComplejidad = {
    baja: 0.8,
    media: 1.0,
    alta: 1.3,
    muy_alta: 1.6,
  }

  // Factores de experiencia
  const factoresExperiencia = {
    junior: 0.7,
    intermedio: 1.0,
    senior: 1.4,
    socio: 1.8,
  }

  const calcularComplejidadYHoras = () => {
    let complejidad = "media"
    let horas = 20

    switch (formData.tipoCaso) {
      case "divorcio":
        if (formData.tipoAcuerdo === "mutuo") {
          complejidad = "baja"
          horas = formData.tieneHijos === "si" ? 12 : 8
        } else if (formData.tipoAcuerdo === "contencioso") {
          if (formData.tieneHijos === "si") {
            complejidad = "alta"
            horas = 45
          } else {
            complejidad = "media"
            horas = 25
          }
        } else if (formData.tipoAcuerdo === "complejo") {
          complejidad = "muy_alta"
          horas = formData.tieneHijos === "si" ? 80 : 60
        }
        break

      case "accidente":
        if (formData.lesiones === "ninguna") {
          complejidad = "baja"
          horas = 8
        } else if (formData.lesiones === "leves") {
          complejidad = "media"
          horas = 20
        } else if (formData.lesiones === "graves") {
          complejidad = "alta"
          horas = 35
        } else if (formData.lesiones === "muy_graves") {
          complejidad = "muy_alta"
          horas = 60
        }
        break

      case "despido":
        const antiguedadNum = Number.parseInt(formData.antiguedad) || 0
        if (formData.tipoDespido === "procedente") {
          complejidad = "baja"
          horas = 8
        } else if (formData.tipoDespido === "improcedente") {
          complejidad = "media"
          horas = antiguedadNum > 5 ? 25 : 18
        } else if (formData.tipoDespido === "nulo") {
          complejidad = "alta"
          horas = 40
        } else if (formData.tipoDespido === "disciplinario") {
          complejidad = "muy_alta"
          horas = 50
        }
        break

      case "herencia":
        const herederos = Number.parseInt(formData.numeroHerederos) || 1
        if (formData.testamento === "si" && herederos <= 2) {
          complejidad = "baja"
          horas = 12
        } else if (formData.testamento === "si" && herederos > 2) {
          complejidad = "media"
          horas = 25
        } else if (formData.testamento === "no") {
          complejidad = herederos > 3 ? "muy_alta" : "alta"
          horas = herederos > 3 ? 70 : 45
        }
        break

      case "penal":
        if (formData.tipoDelito === "leve") {
          complejidad = formData.antecedentes === "si" ? "media" : "baja"
          horas = formData.antecedentes === "si" ? 25 : 15
        } else if (formData.tipoDelito === "menos_grave") {
          complejidad = "alta"
          horas = 50
        } else if (formData.tipoDelito === "grave") {
          complejidad = "muy_alta"
          horas = 100
        }
        break

      default:
        complejidad = "media"
        horas = 20
    }

    return { complejidad, horas }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsCalculating(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const resultadosCalculo = calcularHonorarios()
    setResultados(resultadosCalculo)
    setIsCalculating(false)
  }

  const calcularHonorarios = () => {
    // Mapear tipos de caso a especialidades
    const especialidadMap = {
      divorcio: "familia",
      accidente: "civil",
      despido: "laboral",
      herencia: "civil",
      penal: "penal",
      civil: "civil",
      mercantil: "mercantil",
      inmobiliario: "inmobiliario",
    }

    const especialidadKey = especialidadMap[formData.tipoCaso] || "civil"
    const especialidad = baremasEspecialidad[especialidadKey]

    const { complejidad, horas } = calcularComplejidadYHoras()
    const factorComplejidad = factoresComplejidad[complejidad]
    const factorExperiencia = factoresExperiencia[formData.experienciaAbogado]

    // Calcular cuantía según el tipo de caso
    let cuantiaCalculada = Number.parseFloat(formData.cuantiaAsunto) || 0

    if (formData.tipoCaso === "divorcio" && formData.patrimonioComun) {
      cuantiaCalculada = Number.parseFloat(formData.patrimonioComun) || 0
    } else if (formData.tipoCaso === "despido" && formData.salarioAnual) {
      cuantiaCalculada = Number.parseFloat(formData.salarioAnual) || 0
    } else if (formData.tipoCaso === "herencia" && formData.valorHerencia) {
      cuantiaCalculada = Number.parseFloat(formData.valorHerencia) || 0
    } else if (formData.tipoCaso === "inmobiliario" && formData.valorInmueble) {
      cuantiaCalculada = Number.parseFloat(formData.valorInmueble) || 0
    }

    const tarifaBaseHora = especialidad.base
    const tarifaAjustada = tarifaBaseHora * especialidad.factor * factorComplejidad * factorExperiencia

    const honorariosPorHoras = horas * tarifaAjustada

    // Calcular honorarios por cuantía (si aplica)
    let honorariosPorCuantia = 0
    if (cuantiaCalculada > 0) {
      if (cuantiaCalculada <= 3000) {
        honorariosPorCuantia = cuantiaCalculada * 0.1
      } else if (cuantiaCalculada <= 30000) {
        honorariosPorCuantia = 300 + (cuantiaCalculada - 3000) * 0.08
      } else if (cuantiaCalculada <= 150000) {
        honorariosPorCuantia = 2460 + (cuantiaCalculada - 30000) * 0.06
      } else {
        honorariosPorCuantia = 9660 + (cuantiaCalculada - 150000) * 0.04
      }
    }

    const honorariosBase = Math.max(honorariosPorHoras, honorariosPorCuantia)
    const iva = honorariosBase * 0.21
    const totalConIva = honorariosBase + iva
    const retencionIRPF = honorariosBase * 0.15
    const totalARecibir = totalConIva - retencionIRPF

    return {
      tipoCaso: formData.tipoCaso,
      complejidadCalculada: complejidad,
      tarifaHora: tarifaAjustada,
      horasEstimadas: horas,
      honorariosPorHoras: honorariosPorHoras,
      honorariosPorCuantia: honorariosPorCuantia,
      honorariosBase: honorariosBase,
      iva: iva,
      totalConIva: totalConIva,
      retencionIRPF: retencionIRPF,
      totalARecibir: totalARecibir,
      metodoCalculo: honorariosPorHoras > honorariosPorCuantia ? "Por horas" : "Por cuantía",
      factores: {
        especialidad: especialidad.factor,
        complejidad: factorComplejidad,
        experiencia: factorExperiencia,
      },
    }
  }

  const formatearMoneda = (cantidad) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(cantidad)
  }

  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">¿Qué tipo de caso necesitas?</label>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { id: "divorcio", label: "👫 Divorcio", desc: "Separación matrimonial" },
              { id: "accidente", label: "🚗 Accidente de tráfico", desc: "Reclamación por daños" },
              { id: "despido", label: "💼 Despido laboral", desc: "Reclamación laboral" },
              { id: "herencia", label: "🏠 Herencia", desc: "Sucesiones y testamentos" },
              { id: "penal", label: "⚖️ Caso penal", desc: "Defensa criminal" },
              { id: "civil", label: "📋 Demanda civil", desc: "Reclamación civil" },
              { id: "mercantil", label: "🏢 Asunto mercantil", desc: "Derecho empresarial" },
              { id: "inmobiliario", label: "🏡 Inmobiliario", desc: "Compraventa, alquiler" },
            ].map((caso) => (
              <label
                key={caso.id}
                className={`cursor-pointer p-4 border-2 rounded-lg transition-all ${
                  formData.tipoCaso === caso.id
                    ? "border-amber-500 bg-amber-50"
                    : "border-gray-200 hover:border-amber-300"
                }`}
              >
                <input
                  type="radio"
                  name="tipoCaso"
                  value={caso.id}
                  checked={formData.tipoCaso === caso.id}
                  onChange={(e) => setFormData({ ...formData, tipoCaso: e.target.value })}
                  className="sr-only"
                />
                <div className="text-lg font-medium">{caso.label}</div>
                <div className="text-sm text-gray-500">{caso.desc}</div>
              </label>
            ))}
          </div>
        </div>
      )
    }

    if (currentStep === 2) {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Detalles específicos del caso</h3>

          {formData.tipoCaso === "divorcio" && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Tienen hijos menores de edad?</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "si", label: "Sí, tenemos hijos" },
                    { id: "no", label: "No tenemos hijos" },
                  ].map((option) => (
                    <label
                      key={option.id}
                      className={`cursor-pointer p-3 border-2 rounded-lg transition-all ${
                        formData.tieneHijos === option.id
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-200 hover:border-amber-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="tieneHijos"
                        value={option.id}
                        checked={formData.tieneHijos === option.id}
                        onChange={(e) => setFormData({ ...formData, tieneHijos: e.target.value })}
                        className="sr-only"
                      />
                      <div className="text-sm font-medium">{option.label}</div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Qué tipo de divorcio es?</label>
                <div className="space-y-2">
                  {[
                    { id: "mutuo", label: "De mutuo acuerdo", desc: "Ambos están de acuerdo en todo" },
                    { id: "contencioso", label: "Contencioso simple", desc: "Hay algunos desacuerdos" },
                    { id: "complejo", label: "Muy contencioso", desc: "Muchos desacuerdos, patrimonio complejo" },
                  ].map((option) => (
                    <label
                      key={option.id}
                      className={`cursor-pointer p-3 border-2 rounded-lg transition-all block ${
                        formData.tipoAcuerdo === option.id
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-200 hover:border-amber-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="tipoAcuerdo"
                        value={option.id}
                        checked={formData.tipoAcuerdo === option.id}
                        onChange={(e) => setFormData({ ...formData, tipoAcuerdo: e.target.value })}
                        className="sr-only"
                      />
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-gray-500">{option.desc}</div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Valor aproximado del patrimonio común (€)
                </label>
                <input
                  type="number"
                  value={formData.patrimonioComun}
                  onChange={(e) => setFormData({ ...formData, patrimonioComun: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Ej: 200000"
                  min="0"
                />
              </div>
            </>
          )}

          {formData.tipoCaso === "accidente" && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Qué tipo de accidente fue?</label>
                <div className="space-y-2">
                  {[
                    { id: "trafico", label: "Accidente de tráfico", desc: "Colisión entre vehículos" },
                    { id: "laboral", label: "Accidente laboral", desc: "En el lugar de trabajo" },
                    { id: "publico", label: "En vía pública", desc: "Caída, tropiezo, etc." },
                    { id: "medico", label: "Negligencia médica", desc: "Error médico o sanitario" },
                  ].map((option) => (
                    <label
                      key={option.id}
                      className={`cursor-pointer p-3 border-2 rounded-lg transition-all block ${
                        formData.tipoAccidente === option.id
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-200 hover:border-amber-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="tipoAccidente"
                        value={option.id}
                        checked={formData.tipoAccidente === option.id}
                        onChange={(e) => setFormData({ ...formData, tipoAccidente: e.target.value })}
                        className="sr-only"
                      />
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-gray-500">{option.desc}</div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Qué tipo de lesiones hubo?</label>
                <div className="space-y-2">
                  {[
                    { id: "ninguna", label: "Solo daños materiales", desc: "Sin lesiones personales" },
                    { id: "leves", label: "Lesiones leves", desc: "Curación en menos de 30 días" },
                    { id: "graves", label: "Lesiones graves", desc: "Curación en más de 30 días" },
                    { id: "muy_graves", label: "Lesiones muy graves", desc: "Secuelas permanentes" },
                  ].map((option) => (
                    <label
                      key={option.id}
                      className={`cursor-pointer p-3 border-2 rounded-lg transition-all block ${
                        formData.lesiones === option.id
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-200 hover:border-amber-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="lesiones"
                        value={option.id}
                        checked={formData.lesiones === option.id}
                        onChange={(e) => setFormData({ ...formData, lesiones: e.target.value })}
                        className="sr-only"
                      />
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-gray-500">{option.desc}</div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Indemnización reclamada (€)</label>
                <input
                  type="number"
                  value={formData.cuantiaAsunto}
                  onChange={(e) => setFormData({ ...formData, cuantiaAsunto: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Ej: 15000"
                  min="0"
                />
              </div>
            </>
          )}

          {formData.tipoCaso === "despido" && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Qué tipo de despido fue?</label>
                <div className="space-y-2">
                  {[
                    { id: "procedente", label: "Despido procedente", desc: "Con causa justificada" },
                    { id: "improcedente", label: "Despido improcedente", desc: "Sin causa o forma incorrecta" },
                    { id: "nulo", label: "Despido nulo", desc: "Por discriminación o vulneración de derechos" },
                    { id: "disciplinario", label: "Despido disciplinario", desc: "Por falta muy grave" },
                  ].map((option) => (
                    <label
                      key={option.id}
                      className={`cursor-pointer p-3 border-2 rounded-lg transition-all block ${
                        formData.tipoDespido === option.id
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-200 hover:border-amber-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="tipoDespido"
                        value={option.id}
                        checked={formData.tipoDespido === option.id}
                        onChange={(e) => setFormData({ ...formData, tipoDespido: e.target.value })}
                        className="sr-only"
                      />
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-gray-500">{option.desc}</div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Años de antigüedad en la empresa
                </label>
                <input
                  type="number"
                  value={formData.antiguedad}
                  onChange={(e) => setFormData({ ...formData, antiguedad: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Ej: 5"
                  min="0"
                  max="50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Salario bruto anual (€)</label>
                <input
                  type="number"
                  value={formData.salarioAnual}
                  onChange={(e) => setFormData({ ...formData, salarioAnual: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Ej: 30000"
                  min="0"
                />
              </div>
            </>
          )}

          {formData.tipoCaso === "herencia" && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Hay testamento?</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "si", label: "Sí, hay testamento" },
                    { id: "no", label: "No hay testamento" },
                  ].map((option) => (
                    <label
                      key={option.id}
                      className={`cursor-pointer p-3 border-2 rounded-lg transition-all ${
                        formData.testamento === option.id
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-200 hover:border-amber-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="testamento"
                        value={option.id}
                        checked={formData.testamento === option.id}
                        onChange={(e) => setFormData({ ...formData, testamento: e.target.value })}
                        className="sr-only"
                      />
                      <div className="text-sm font-medium">{option.label}</div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Número de herederos</label>
                <input
                  type="number"
                  value={formData.numeroHerederos}
                  onChange={(e) => setFormData({ ...formData, numeroHerederos: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Ej: 3"
                  min="1"
                  max="20"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Valor aproximado de la herencia (€)
                </label>
                <input
                  type="number"
                  value={formData.valorHerencia}
                  onChange={(e) => setFormData({ ...formData, valorHerencia: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Ej: 150000"
                  min="0"
                />
              </div>
            </>
          )}

          {formData.tipoCaso === "penal" && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Qué tipo de delito es?</label>
                <div className="space-y-2">
                  {[
                    { id: "leve", label: "Delito leve", desc: "Multa o pena menor" },
                    { id: "menos_grave", label: "Delito menos grave", desc: "Pena de prisión hasta 5 años" },
                    { id: "grave", label: "Delito grave", desc: "Pena de prisión superior a 5 años" },
                  ].map((option) => (
                    <label
                      key={option.id}
                      className={`cursor-pointer p-3 border-2 rounded-lg transition-all block ${
                        formData.tipoDelito === option.id
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-200 hover:border-amber-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="tipoDelito"
                        value={option.id}
                        checked={formData.tipoDelito === option.id}
                        onChange={(e) => setFormData({ ...formData, tipoDelito: e.target.value })}
                        className="sr-only"
                      />
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-gray-500">{option.desc}</div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Hay antecedentes penales?</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "si", label: "Sí, hay antecedentes" },
                    { id: "no", label: "No hay antecedentes" },
                  ].map((option) => (
                    <label
                      key={option.id}
                      className={`cursor-pointer p-3 border-2 rounded-lg transition-all ${
                        formData.antecedentes === option.id
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-200 hover:border-amber-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="antecedentes"
                        value={option.id}
                        checked={formData.antecedentes === option.id}
                        onChange={(e) => setFormData({ ...formData, antecedentes: e.target.value })}
                        className="sr-only"
                      />
                      <div className="text-sm font-medium">{option.label}</div>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {formData.tipoCaso === "inmobiliario" && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Qué tipo de operación es?</label>
                <div className="space-y-2">
                  {[
                    { id: "compraventa", label: "Compraventa", desc: "Compra o venta de inmueble" },
                    { id: "alquiler", label: "Alquiler", desc: "Contrato de arrendamiento" },
                    { id: "desahucio", label: "Desahucio", desc: "Proceso de desalojo" },
                    { id: "comunidad", label: "Comunidad de propietarios", desc: "Conflictos vecinales" },
                  ].map((option) => (
                    <label
                      key={option.id}
                      className={`cursor-pointer p-3 border-2 rounded-lg transition-all block ${
                        formData.tipoOperacion === option.id
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-200 hover:border-amber-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="tipoOperacion"
                        value={option.id}
                        checked={formData.tipoOperacion === option.id}
                        onChange={(e) => setFormData({ ...formData, tipoOperacion: e.target.value })}
                        className="sr-only"
                      />
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-gray-500">{option.desc}</div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Valor del inmueble (€)</label>
                <input
                  type="number"
                  value={formData.valorInmueble}
                  onChange={(e) => setFormData({ ...formData, valorInmueble: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Ej: 250000"
                  min="0"
                />
              </div>
            </>
          )}
        </div>
      )
    }

    if (currentStep === 3) {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Experiencia del abogado</h3>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nivel de experiencia</label>
            <div className="space-y-2">
              {[
                { id: "junior", label: "Abogado junior (1-3 años)", desc: "Recién colegiado, tarifas más económicas" },
                {
                  id: "intermedio",
                  label: "Abogado con experiencia (4-10 años)",
                  desc: "Experiencia sólida, tarifa estándar",
                },
                { id: "senior", label: "Abogado senior (10+ años)", desc: "Gran experiencia, especialización" },
                { id: "socio", label: "Socio del despacho", desc: "Máxima experiencia y prestigio" },
              ].map((option) => (
                <label
                  key={option.id}
                  className={`cursor-pointer p-3 border-2 rounded-lg transition-all block ${
                    formData.experienciaAbogado === option.id
                      ? "border-amber-500 bg-amber-50"
                      : "border-gray-200 hover:border-amber-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="experienciaAbogado"
                    value={option.id}
                    checked={formData.experienciaAbogado === option.id}
                    onChange={(e) => setFormData({ ...formData, experienciaAbogado: e.target.value })}
                    className="sr-only"
                  />
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm text-gray-500">{option.desc}</div>
                </label>
              ))}
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale className="h-10 w-10 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculadora de Honorarios
            <span className="block text-amber-600">de Abogado 2025</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Nuestra <strong>calculadora de honorarios de abogados</strong> te permite estimar los costes legales según
            baremos colegiales oficiales. Especializada en divorcios, accidentes, despidos, herencias y más.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
              onClick={() => document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Scale className="mr-2 h-5 w-5" />
              Calcular Ahora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg bg-transparent"
              onClick={() => document.getElementById("precios")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Precios Orientativos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 mb-2">8</div>
              <div className="text-gray-600">Especialidades</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">2025</div>
              <div className="text-gray-600">Baremos actualizados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Gratuito</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Calculator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="calculadora">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculadora de Honorarios de Abogado</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Utiliza nuestra <strong>calculadora de honorarios de abogados</strong> para obtener un presupuesto
            personalizado según tu caso específico.
          </p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-t-lg">
            <CardTitle className="text-2xl text-center">
              Paso {currentStep} de 3:{" "}
              {currentStep === 1
                ? "Tipo de Caso"
                : currentStep === 2
                  ? "Detalles Específicos"
                  : "Experiencia del Abogado"}
            </CardTitle>
            <div className="w-full bg-amber-800 rounded-full h-2 mt-4">
              <div
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {renderStepContent()}

              <div className="flex justify-between pt-6">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="border-amber-600 text-amber-600 hover:bg-amber-50"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Anterior
                  </Button>
                )}

                {currentStep < 3 ? (
                  <Button
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    disabled={
                      !formData.tipoCaso ||
                      (currentStep === 2 &&
                        formData.tipoCaso === "divorcio" &&
                        (!formData.tieneHijos || !formData.tipoAcuerdo))
                    }
                    className="bg-amber-600 hover:bg-amber-700 text-white ml-auto"
                  >
                    Siguiente
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-amber-600 hover:bg-amber-700 text-white py-4 px-8 text-lg font-semibold ml-auto"
                    disabled={isCalculating}
                  >
                    {isCalculating ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Calculando...
                      </>
                    ) : (
                      <>
                        <Calculator className="mr-2 h-5 w-5" />
                        Calcular Honorarios
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>

            {resultados && (
              <div className="mt-8 space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Presupuesto de Honorarios</h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Honorarios Base</h4>
                      <p className="text-2xl font-bold text-amber-600">{formatearMoneda(resultados.honorariosBase)}</p>
                      <p className="text-sm text-gray-500">{resultados.metodoCalculo}</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">IVA (21%)</h4>
                      <p className="text-2xl font-bold text-green-600">{formatearMoneda(resultados.iva)}</p>
                      <p className="text-sm text-gray-500">Impuesto añadido</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Retención IRPF</h4>
                      <p className="text-2xl font-bold text-red-600">{formatearMoneda(resultados.retencionIRPF)}</p>
                      <p className="text-sm text-gray-500">15% retención</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Total a Pagar</h4>
                      <p className="text-2xl font-bold text-blue-600">{formatearMoneda(resultados.totalARecibir)}</p>
                      <p className="text-sm text-gray-500">Importe final</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Detalles del Cálculo</h4>
                      <div className="space-y-1 text-sm">
                        <p>
                          <span className="font-medium">Tipo de caso:</span> {formData.tipoCaso}
                        </p>
                        <p>
                          <span className="font-medium">Complejidad:</span> {resultados.complejidadCalculada}
                        </p>
                        <p>
                          <span className="font-medium">Tarifa por hora:</span> {formatearMoneda(resultados.tarifaHora)}
                        </p>
                        <p>
                          <span className="font-medium">Horas estimadas:</span> {resultados.horasEstimadas}h
                        </p>
                        <p>
                          <span className="font-medium">Método aplicado:</span> {resultados.metodoCalculo}
                        </p>
                      </div>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-amber-800 mb-2">Factores Aplicados</h4>
                      <div className="space-y-1 text-sm">
                        <p>
                          <span className="font-medium">Especialidad:</span> x{resultados.factores.especialidad}
                        </p>
                        <p>
                          <span className="font-medium">Complejidad:</span> x{resultados.factores.complejidad}
                        </p>
                        <p>
                          <span className="font-medium">Experiencia:</span> x{resultados.factores.experiencia}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Desglose Económico Detallado</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Honorarios por horas ({resultados.horasEstimadas}h)</span>
                      <span className="font-semibold text-gray-900">
                        {formatearMoneda(resultados.honorariosPorHoras)}
                      </span>
                    </div>
                    {resultados.honorariosPorCuantia > 0 && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Honorarios por cuantía</span>
                        <span className="font-semibold text-gray-900">
                          {formatearMoneda(resultados.honorariosPorCuantia)}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Honorarios base (mayor de los anteriores)</span>
                      <span className="font-semibold text-gray-900">{formatearMoneda(resultados.honorariosBase)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">IVA (21%)</span>
                      <span className="font-semibold text-gray-900">{formatearMoneda(resultados.iva)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Total con IVA</span>
                      <span className="font-semibold text-gray-900">{formatearMoneda(resultados.totalConIva)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Retención IRPF (15%)</span>
                      <span className="font-semibold text-red-600">-{formatearMoneda(resultados.retencionIRPF)}</span>
                    </div>
                    <div className="border-t-2 border-gray-300 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">TOTAL A PAGAR</span>
                        <span className="text-xl font-bold text-blue-600">
                          {formatearMoneda(resultados.totalARecibir)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-bold text-green-800 mb-3">💡 Consejos para tu caso</h4>
                  <div className="space-y-2 text-sm text-green-700">
                    {formData.tipoCaso === "divorcio" && (
                      <>
                        <p>• Considera la mediación familiar para reducir costes y conflictos</p>
                        <p>• Recopila toda la documentación patrimonial antes de la primera consulta</p>
                        <p>• Si hay hijos, prioriza su bienestar en las negociaciones</p>
                      </>
                    )}
                    {formData.tipoCaso === "accidente" && (
                      <>
                        <p>• Conserva todos los informes médicos y facturas de gastos</p>
                        <p>• No firmes ningún documento de la aseguradora sin consultar</p>
                        <p>• Documenta todas las secuelas y limitaciones que sufras</p>
                      </>
                    )}
                    {formData.tipoCaso === "despido" && (
                      <>
                        <p>• Tienes 20 días hábiles para presentar demanda desde el despido</p>
                        <p>• Guarda todas las comunicaciones con la empresa</p>
                        <p>• Solicita el certificado de empresa en el SEPE cuanto antes</p>
                      </>
                    )}
                    {formData.tipoCaso === "herencia" && (
                      <>
                        <p>• Tienes 6 meses para aceptar o renunciar a la herencia</p>
                        <p>• Considera la aceptación a beneficio de inventario si hay deudas</p>
                        <p>• Recopila todos los bienes y deudas del fallecido</p>
                      </>
                    )}
                    <p>• Solicita siempre un presupuesto detallado por escrito</p>
                    <p>• Pregunta sobre posibles costes adicionales (procuradores, tasas, etc.)</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Precios Orientativos Section */}
      <section id="precios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Precios Orientativos por Especialidad</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tarifas aproximadas según baremos colegiales y complejidad del caso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                especialidad: "Divorcio",
                icon: "👫",
                casos: [
                  { tipo: "Mutuo acuerdo", precio: "800 - 1.500€" },
                  { tipo: "Contencioso", precio: "2.000 - 4.000€" },
                  { tipo: "Con hijos", precio: "3.000 - 8.000€" },
                ],
              },
              {
                especialidad: "Accidente Tráfico",
                icon: "🚗",
                casos: [
                  { tipo: "Solo daños", precio: "600 - 1.200€" },
                  { tipo: "Lesiones leves", precio: "1.500 - 3.000€" },
                  { tipo: "Lesiones graves", precio: "3.000 - 8.000€" },
                ],
              },
              {
                especialidad: "Despido Laboral",
                icon: "💼",
                casos: [
                  { tipo: "Procedente", precio: "500 - 1.000€" },
                  { tipo: "Improcedente", precio: "1.200 - 2.500€" },
                  { tipo: "Despido nulo", precio: "2.500 - 5.000€" },
                ],
              },
              {
                especialidad: "Herencias",
                icon: "🏠",
                casos: [
                  { tipo: "Con testamento", precio: "800 - 2.000€" },
                  { tipo: "Sin testamento", precio: "2.000 - 5.000€" },
                  { tipo: "Conflicto herederos", precio: "3.000 - 10.000€" },
                ],
              },
              {
                especialidad: "Derecho Penal",
                icon: "⚖️",
                casos: [
                  { tipo: "Delito leve", precio: "1.000 - 2.500€" },
                  { tipo: "Delito menos grave", precio: "3.000 - 8.000€" },
                  { tipo: "Delito grave", precio: "8.000 - 20.000€" },
                ],
              },
              {
                especialidad: "Inmobiliario",
                icon: "🏡",
                casos: [
                  { tipo: "Compraventa", precio: "400 - 1.000€" },
                  { tipo: "Desahucio", precio: "800 - 2.000€" },
                  { tipo: "Conflicto vecinal", precio: "600 - 1.500€" },
                ],
              },
              {
                especialidad: "Derecho Civil",
                icon: "📋",
                casos: [
                  { tipo: "Reclamación deuda", precio: "600 - 1.500€" },
                  { tipo: "Responsabilidad civil", precio: "1.200 - 3.000€" },
                  { tipo: "Contratos", precio: "400 - 1.200€" },
                ],
              },
              {
                especialidad: "Derecho Mercantil",
                icon: "🏢",
                casos: [
                  { tipo: "Constitución sociedad", precio: "800 - 1.500€" },
                  { tipo: "Conflicto comercial", precio: "2.000 - 5.000€" },
                  { tipo: "Concurso acreedores", precio: "5.000 - 15.000€" },
                ],
              },
            ].map((especialidad, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="text-3xl mb-2">{especialidad.icon}</div>
                  <CardTitle className="text-lg text-gray-900">{especialidad.especialidad}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {especialidad.casos.map((caso, casoIndex) => (
                      <div key={casoIndex} className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{caso.tipo}</span>
                        <span className="text-sm font-semibold text-amber-600">{caso.precio}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              * Precios orientativos sin IVA. El coste final depende de la complejidad y duración del caso.
            </p>
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white"
              onClick={() => document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" })}
            >
              Calcular Precio Exacto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué usar nuestra calculadora de honorarios?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La herramienta más precisa para calcular honorarios profesionales de abogados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Baremos Oficiales 2025</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Basado en los baremos orientativos actualizados de los colegios de abogados españoles
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Casos Específicos</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Preguntas detalladas según el tipo de caso: divorcio, accidente, despido, herencia, etc.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Cálculo Inteligente</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Algoritmo que considera complejidad, experiencia del abogado y características específicas del caso
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes sobre Honorarios de Abogado
            </h2>
            <p className="text-xl text-gray-600">Resolvemos las dudas más comunes sobre costes legales</p>
          </div>

          <div className="space-y-8">
            {[
              {
                pregunta: "¿Cómo se calculan los honorarios de un abogado en España?",
                respuesta:
                  "Los honorarios se calculan según baremos orientativos de los colegios profesionales, considerando la especialidad, complejidad del caso, tiempo invertido y experiencia del profesional. También se puede aplicar un porcentaje sobre la cuantía del asunto. Nuestra <strong>calculadora de honorarios de abogados</strong> tiene en cuenta todos estos factores para darte la estimación más fiable.",
              },
              {
                pregunta: "¿Cuánto cobra un abogado por un divorcio en 2025?",
                respuesta:
                  "Un divorcio de mutuo acuerdo puede costar entre 800-1.500€, mientras que un divorcio contencioso puede oscilar entre 2.000-8.000€, dependiendo de la complejidad, custodia de hijos y patrimonio común.",
              },
              {
                pregunta: "¿Los honorarios de abogado incluyen IVA?",
                respuesta:
                  "No, los honorarios de abogado no incluyen IVA. Se debe añadir un 21% de IVA sobre los honorarios base, y se aplica una retención del 15% de IRPF.",
              },
              {
                pregunta: "¿Cuánto cobra un abogado por hora en España?",
                respuesta:
                  "Las tarifas por hora varían según la especialidad: Derecho de Familia (100-120€/h), Derecho Civil (120-140€/h), Derecho Penal (150-180€/h), Derecho Mercantil (140-160€/h). Los abogados senior pueden cobrar hasta 200€/h o más.",
              },
              {
                pregunta: "¿Puedo negociar los honorarios con mi abogado?",
                respuesta:
                  "Sí, los honorarios son negociables. Es recomendable acordar por escrito el sistema de facturación (por horas, cuantía fija, éxito, etc.) antes de iniciar el caso.",
              },
              {
                pregunta: "¿Qué pasa si pierdo el caso, tengo que pagar igual?",
                respuesta:
                  "Sí, normalmente los honorarios se pagan independientemente del resultado, salvo pacto de cuota litis (pago solo en caso de éxito), que está regulado y limitado por ley.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.pregunta}</h3>
                  <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.respuesta }}></p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen los profesionales</h2>
            <p className="text-xl text-gray-600">Abogados y clientes que confían en nuestra calculadora</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                role: "Abogada especialista en Familia",
                content:
                  "Uso esta calculadora para dar presupuestos iniciales a mis clientes. Es muy precisa y me ahorra tiempo en las consultas.",
                rating: 5,
              },
              {
                name: "Carlos Ruiz",
                role: "Abogado Laboralista",
                content:
                  "Perfecta para explicar a los clientes cómo se calculan los honorarios. Muy transparente y profesional.",
                rating: 5,
              },
              {
                name: "Ana Martín",
                role: "Cliente - Caso de Divorcio",
                content:
                  "Me ayudó a entender cuánto me costaría mi divorcio antes de contratar abogado. Muy útil para planificar el presupuesto.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculadoras Relacionadas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculadoras Relacionadas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Utiliza estas herramientas para obtener una visión completa de los costes e importes de tu caso.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Calculadora de Despidos</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Calcula la indemnización por despido para conocer la cuantía exacta del caso antes de presupuestar
                  honorarios.
                </p>
                <Link href="/calculadora-despidos">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Calcular despido
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Banknote className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Prestación por Desempleo</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Calcula la prestación de paro para reclamaciones al SEPE. Conoce el importe exacto a reclamar.
                </p>
                <Link href="/calculadora-paro">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Calcular paro
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Salario por Horas</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Para reclamaciones salariales por horas extra o SMI. Calcula el importe exacto de la reclamación.
                </p>
                <Link href="/calculadora-salario-por-horas">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Calcular salario
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Necesitas otras calculadoras profesionales?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Descubre todas nuestras herramientas especializadas para profesionales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Ver Todas las Calculadoras
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/calculadora-cotizaciones-seguridad-social">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                Calculadora de Cotizaciones
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-6 w-6 text-amber-400" />
                <span className="text-xl font-bold">Calculadoras Laborales</span>
              </div>
              <p className="text-gray-400">
                La herramienta más precisa para calcular honorarios de abogados según baremos oficiales.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Especialidades</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Derecho de Familia
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Derecho Civil
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Derecho Penal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Derecho Laboral
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Calculadoras</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/calculadora-cotizaciones-seguridad-social" className="hover:text-white">
                    Cotizaciones SS
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-salario-por-horas" className="hover:text-white">
                    Salario por Horas
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-honorarios-abogado" className="hover:text-white">
                    Honorarios Abogado
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Baremos Oficiales
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Calculadoras Laborales. Todos los derechos reservados.</p>
            <p className="text-sm mt-2">
              * Los precios mostrados son orientativos basados en baremos colegiales. Consulta siempre con un
              profesional.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
