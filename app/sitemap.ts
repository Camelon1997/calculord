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
  ]

  // Todas las calculadoras con prioridad alta
  const calculators = [
    "/calculadora-ahorro",
    "/calculadora-calendario-fiscal-autonomos",
    "/calculadora-cotizaciones-seguridad-social",
    "/calculadora-despidos",
    "/calculadora-hipoteca",
    "/calculadora-honorarios-abogado",
    "/calculadora-irpf-nomina",
    "/calculadora-paro",
    "/calculadora-vacaciones",
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
