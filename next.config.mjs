/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Habilita Next.js para servir imágenes en formatos optimizados como AVIF y WebP
    formats: ["image/avif", "image/webp"],
    // Aquí podrías añadir dominios externos si usaras imágenes de un CMS o CDN
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'assets.example.com',
    //     port: '',
    //     pathname: '/account123/**',
    //   },
    // ],
  },
}

export default nextConfig
