/** @type {import('next').NextConfig} */
const nextConfig = {
// Optimizaciones de rendimiento
compress: true,
poweredByHeader: false,

// Optimizaciones de imágenes
images: {
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 31536000, // 1 año
  dangerouslyAllowSVG: true,
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'blob.v0.dev',
    },
  ],
},

// Headers de seguridad y rendimiento
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin'
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()'
        }
      ]
    },
    {
      source: '/:path*.(jpg|jpeg|gif|png|svg|webp|ico|avif)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ]
    },
    {
      source: '/_next/static/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ]
    }
  ]
},

// Experimental features para mejor rendimiento
experimental: {
  scrollRestoration: true,
},

// Webpack optimizations
webpack: (config, { dev, isServer }) => {
  // Optimizaciones de producción
  if (!dev && !isServer) {
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
        framework: {
          name: 'framework',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
          priority: 40,
          enforce: true,
        },
        lib: {
          test(module) {
            return (
              module.size() > 160000 &&
              /node_modules[/\\]/.test(module.nameForCondition() || '')
            )
          },
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `lib-${packageName.replace('@', '')}`
          },
          priority: 30,
          minChunks: 1,
          reuseExistingChunk: true,
        },
        commons: {
          name: 'commons',
          minChunks: 2,
          priority: 20,
        },
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /node_modules/,
          priority: 20
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    }
  }
  
  return config
},

// Redirects para SEO
async redirects() {
  return [
    {
      source: '/calculadora-salario',
      destination: '/conversor-salario-bruto-neto',
      permanent: true,
    },
    {
      source: '/calculadora-ss',
      destination: '/calculadora-cotizaciones-seguridad-social',
      permanent: true,
    }
  ]
},

// ESLint and TypeScript configurations
eslint: {
  ignoreDuringBuilds: true,
},
typescript: {
  ignoreBuildErrors: true,
},
}

export default nextConfig
