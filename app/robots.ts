import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://calculord.com"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: [
          "GPTBot", // OpenAI ChatGPT
          "ChatGPT-User", // ChatGPT User Agent
          "CCBot", // Common Crawl (usado por muchos LLMs)
          "anthropic-ai", // Claude AI
          "Claude-Web", // Claude Web Crawler
          "Google-Extended", // Google Bard/Gemini
          "PerplexityBot", // Perplexity AI
          "Omgilibot", // Omgili (agregador de contenido)
          "FacebookBot", // Meta AI
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
