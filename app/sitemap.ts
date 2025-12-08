import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://calculord.com"
  const currentDate = new Date()

  // Páginas principales con alta prioridad
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sobre-nosotros`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  const calculators = [
    // Calculadoras Laborales
    "/calculadora-nomina",
    "/calculadora-paro",
    "/calculadora-irpf",
    "/calculadora-vacaciones",
    "/calculadora-despidos",
    "/calculadora-cotizaciones-seguridad-social",
    "/calculadora-erte",
    "/calculadora-bajas",
    "/calculadora-salario-por-horas",
    "/calculadora-horas-extra",
    "/calculadora-maternidad-paternidad",
    "/calculadora-coste-total-empresa",

    // Calculadoras Financieras
    "/calculadora-ahorro",
    "/calculadora-hipoteca",
    "/calculadora-roi",

    // Calculadoras de Servicios
    "/calculadora-honorarios-abogado",
    "/calculadora-honorarios-arquitecto",

    // Calculadoras para Autónomos
    "/calculadora-irpf-autonomos",
    "/calculadora-calendario-fiscal-autonomos",
    "/calculadora-cuota-autonomos",
    "/calculadora-gastos-deducibles-autonomos",
    "/calculadora-amortizacion-inversiones", // Añadida calculadora de amortización
    "/calculadora-iva-repercutido-soportado",
    "/calculadora-igic-repercutido-soportado",
    "/generador-facturas",

    // Calculadoras de Jubilación
    "/calculadora-jubilacion",

    // Conversores
    "/conversor-salario-bruto-neto",
    "/conversor-iva",
    "/conversor-igic",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  // Páginas legales
  const legalPages = ["/aviso-legal", "/politica-privacidad", "/politica-cookies"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }))

  return [...mainPages, ...calculators, ...legalPages]
}
