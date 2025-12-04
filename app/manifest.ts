import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Calculord - Calculadoras Laborales y Financieras 2025",
    short_name: "Calculord",
    description:
      "Suite completa de calculadoras laborales y financieras gratuitas actualizadas con normativa española 2025",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    orientation: "portrait-primary",
    scope: "/",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    categories: ["finance", "business", "productivity", "utilities"],
    lang: "es",
    dir: "ltr",
  }
}
