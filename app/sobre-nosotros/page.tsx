import type { Metadata } from "next"
import Image from "next/image"
import { Target, Eye, Zap, HeartHandshake } from "lucide-react"

export const metadata: Metadata = {
  title: "Sobre Nosotros | Calculord",
  description:
    "Descubre la misión, visión y valores de Calculord. Somos un equipo dedicado a ofrecer herramientas financieras y laborales precisas y accesibles para todos en España.",
}

const values = [
  {
    name: "Precisión y Fiabilidad",
    description:
      "Nuestras calculadoras se basan en la normativa vigente para ofrecerte resultados exactos y confiables.",
    icon: Target,
  },
  {
    name: "Transparencia Total",
    description: "Creemos en la claridad. Te mostramos cómo se realizan los cálculos para que entiendas cada detalle.",
    icon: Eye,
  },
  {
    name: "Innovación Constante",
    description:
      "Actualizamos y mejoramos nuestras herramientas continuamente para adaptarnos a los cambios y a tus necesidades.",
    icon: Zap,
  },
  {
    name: "Accesibilidad Universal",
    description:
      "Diseñamos herramientas gratuitas y fáciles de usar para que cualquiera pueda gestionar sus finanzas y derechos laborales.",
    icon: HeartHandshake,
  },
]

export default function SobreNosotrosPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <main className="isolate">
        <div className="relative isolate -z-10">
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Empoderando tus decisiones financieras y laborales.
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    En Calculord, nacimos de una necesidad simple: desmitificar la complejidad de las finanzas y la
                    legislación laboral en España. Somos un equipo de profesionales apasionados por la tecnología y las
                    finanzas, dedicados a crear herramientas precisas, gratuitas y fáciles de usar para todos.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        src="/images/about/focused-developer.png"
                        alt="Desarrollador trabajando"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        width={320}
                        height={480}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        src="/images/about/financial-planning.png"
                        alt="Planificación financiera en una tablet"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        width={320}
                        height={480}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src="/images/about/modern-architecture.png"
                        alt="Arquitectura de oficina moderna"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        width={320}
                        height={480}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        src="/images/about/main-hero-image.png"
                        alt="Equipo profesional trabajando en una oficina moderna"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        width={320}
                        height={480}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src="/images/about/team-collaboration.png"
                        alt="Colaboración en equipo"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        width={320}
                        height={480}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Our Values Section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestros Valores</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Estos son los principios que guían cada decisión que tomamos, cada línea de código que escribimos y cada
            calculadora que publicamos.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900 flex items-center gap-x-3">
                <value.icon className="h-7 w-7 text-blue-600" aria-hidden="true" />
                {value.name}
              </dt>
              <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gray-900 mt-32 sm:mt-40">
        <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <Image
            className="h-full w-full object-cover"
            src="/images/about/abstract-background.png"
            alt="Patrón digital abstracto"
            width={960}
            height={1080}
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Únete a nuestra comunidad</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Tu opinión nos hace mejores</p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              ¿Tienes alguna sugerencia para una nueva calculadora? ¿Has encontrado algo que podríamos mejorar? Nuestro
              objetivo es construir la mejor plataforma posible, y eso solo podemos hacerlo contigo.
            </p>
            <div className="mt-8">
              <a
                href="/contacto"
                className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contacta con nosotros
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
