import type { BlogPost, BlogCategory, PopularCalculator } from "@/types/blog"

export const blogCategories: BlogCategory[] = [
  { name: "Normativa", count: 2 },
  { name: "IRPF", count: 4 },
  { name: "Cotizaciones", count: 1 },
  { name: "Guías Prácticas", count: 4 },
  { name: "Derecho Laboral", count: 2 },
]

export const popularCalculators: PopularCalculator[] = [
  {
    name: "Calculadora Bruto-Neto",
    description: "Convierte tu salario fácilmente.",
    href: "/conversor-salario-bruto-neto",
  },
  {
    name: "Calculadora IRPF",
    description: "Calcula tu retención anual.",
    href: "/calculadora-irpf",
  },
  {
    name: "Coste Total Empresa",
    description: "El coste real de un empleado.",
    href: "/calculadora-coste-total-empresa",
  },
]

export const blogPosts: Record<string, BlogPost> = {
  "smi-2025-subida": {
    slug: "smi-2025-subida",
    title: "SMI 2025: Nueva Subida a 1.184€ - Cómo Te Afecta",
    excerpt:
      "Análisis completo de la subida del Salario Mínimo Interprofesional 2025. Impacto en nóminas, cotizaciones y calculadoras actualizadas.",
    content: `
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-8">
        <h3 class="font-bold text-blue-900">Datos Clave del SMI 2025</h3>
        <p class="text-blue-800">El nuevo SMI establece las siguientes cifras oficiales: SMI mensual: <strong>1.184€</strong> (14 pagas anuales) • SMI diario: <strong>39,47€</strong> • SMI por hora: <strong>8,87€</strong> • Incremento respecto 2024: <strong>+4,4%</strong> (+50€ mensuales) • SMI anual bruto: <strong>16.576€</strong>.</p>
      </div>
      <p>El Salario Mínimo Interprofesional (SMI) para 2025 ha experimentado una nueva subida, estableciéndose en 1.184€ mensuales. Esta actualización representa un incremento significativo que afecta a millones de trabajadores en España.</p>
      
      <h2 id="a-quien-afecta-esta-subida">¿A Quién Afecta Esta Subida?</h2>
      <h3>Trabajadores Directamente Beneficiados</h3>
      <p>La subida del SMI 2025 beneficia directamente a:</p>
      <ul>
        <li>Empleados con salario base igual al SMI: Aproximadamente 1,5 millones de trabajadores.</li>
        <li>Trabajadores a tiempo parcial: El SMI se aplica proporcionalmente según las horas trabajadas.</li>
        <li>Becarios y personal en prácticas: Cuando perciben retribución económica.</li>
        <li>Empleados del hogar: Tanto internos como externos.</li>
        <li>Trabajadores del campo: Especialmente en temporadas de alta demanda.</li>
      </ul>

      <h2 id="impacto-en-las-empresas">Impacto en las Empresas</h2>
      <p>Las empresas deben realizar los siguientes ajustes:</p>
      <ul>
        <li>Actualización de nóminas de todos los empleados afectados.</li>
        <li>Recálculo de cotizaciones a la Seguridad Social.</li>
        <li>Revisión de presupuestos de costes de personal.</li>
        <li>Actualización de convenios colectivos que referencien el SMI.</li>
        <li>Comunicación formal a los trabajadores sobre los cambios.</li>
      </ul>

      <h2 id="calculo-practico-con-ejemplos-reales">Cálculo Práctico con Ejemplos Reales</h2>
      <h3>Ejemplo 1: Trabajador a Jornada Completa</h3>
      <p><strong>Situación:</strong> Empleado con contrato indefinido a jornada completa.</p>
      <p><strong>Cálculo mensual:</strong></p>
      <ul>
        <li>Salario base: 1.184€</li>
        <li>Prorrata pagas extras (2 pagas): 197,33€</li>
        <li>Total bruto mensual: 1.381,33€</li>
      </ul>

      <h2 id="comparativa-historica">Comparativa Histórica del SMI</h2>
      <p>La evolución del SMI en los últimos años muestra una tendencia alcista constante:</p>
      <table>
        <thead>
          <tr><th>Año</th><th>SMI Mensual</th><th>Incremento Anual</th></tr>
        </thead>
        <tbody>
          <tr><td>2021</td><td>965€</td><td>+1,6%</td></tr>
          <tr><td>2022</td><td>1.000€</td><td>+3,6%</td></tr>
          <tr><td>2023</td><td>1.080€</td><td>+8,0%</td></tr>
          <tr><td>2024</td><td>1.134€</td><td>+5,0%</td></tr>
          <tr><td><strong>2025</strong></td><td><strong>1.184€</strong></td><td><strong>+4,4%</strong></td></tr>
        </tbody>
      </table>

      <h2 id="aspectos-legales">Aspectos Legales</h2>
      <p>Los empresarios tienen la obligación de actualizar automáticamente todas las nóminas afectadas desde el 1 de enero de 2025. El incumplimiento puede conllevar sanciones de hasta 6.250€.</p>

      <h2 id="impacto-economico">Impacto Económico</h2>
      <p>La subida del SMI busca mejorar el poder adquisitivo y reducir la brecha salarial, aunque también supone un reto para las pequeñas y medianas empresas en términos de costes laborales.</p>
    `,
    image: "/placeholder.svg?height=400&width=800&text=SMI+2025",
    category: "Normativa",
    tags: ["SMI", "Salario Mínimo", "2025"],
    date: "2025-01-28",
    readTime: "8 min",
    author: {
      name: "Equipo Calculord",
      avatar: "/placeholder.svg?height=40&width=40&text=EC",
    },
    toc: [
      { id: "a-quien-afecta-esta-subida", text: "¿A Quién Afecta?", icon: "quien" },
      { id: "impacto-en-las-empresas", text: "Impacto en Empresas", icon: "empresa" },
      { id: "calculo-practico-con-ejemplos-reales", text: "Cálculo Práctico", icon: "practico" },
      { id: "comparativa-historica", text: "Comparativa Histórica", icon: "historia" },
      { id: "aspectos-legales", text: "Aspectos Legales", icon: "legal" },
      { id: "impacto-economico", text: "Impacto Económico", icon: "economia" },
    ],
    keyData: {
      "SMI 2025": "1.184€",
      Incremento: "+4,4%",
      "Por hora": "8,87€",
      Anual: "16.576€",
    },
  },
  "tramos-irpf-2025": {
    slug: "tramos-irpf-2025",
    title: "Tramos IRPF 2025: Guía Completa, Novedades y Cómo Afectan a tu Nómina",
    excerpt:
      "Descubre los tramos del IRPF para 2025 actualizados. Te explicamos cómo se calcula tu retención, las novedades fiscales y te damos ejemplos prácticos para que entiendas tu nómina y optimices tu declaración.",
    content: `
<p>Los <strong>tramos del IRPF</strong> son la clave para entender cuánto dinero te van a descontar de tu nómina cada mes y cuánto tendrás que pagar (o te devolverán) en la Declaración de la Renta. No es un porcentaje fijo que se aplica sobre todo tu sueldo, sino un sistema progresivo diseñado para que quienes más ganan, más aporten proporcionalmente al sostenimiento del Estado.</p>

<p>En esta guía completa, desglosamos los tramos de 2025, te explicamos las novedades fiscales más importantes y te damos ejemplos prácticos para que sepas exactamente cómo te afectan. Además, te contamos los errores más comunes que comete la gente al calcular su IRPF y cómo evitarlos.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
  <h3 class="font-bold text-blue-900 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
    Punto Clave a Recordar
  </h3>
  <p class="text-blue-800 mt-2">Nunca vas a pagar el porcentaje de un tramo sobre la totalidad de tu sueldo. Por ejemplo, si ganas 30.000€, no pagarás un 30% de todo. Pagarás un 19% por una parte, un 24% por otra, y un 30% por el resto. ¡Este es el error más común!</p>
</div>

<h2 id="tramos-irpf-2025-tabla-completa">📊 Tramos IRPF 2025: La Tabla Completa</h2>

<p>El IRPF se divide en dos partes: el tramo <strong>estatal</strong> (igual en toda España) y el <strong>autonómico</strong> (puede variar según tu comunidad). Aquí tienes la tabla completa que se aplica en la mayoría de comunidades:</p>

<div class="bg-gray-50 p-6 rounded-lg my-6">
  <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
    🏛️ Tabla Estatal (50% del IRPF)
  </h3>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-blue-100">
          <th class="border border-gray-300 p-3 text-left">Desde</th>
          <th class="border border-gray-300 p-3 text-left">Hasta</th>
          <th class="border border-gray-300 p-3 text-center">Tipo Estatal</th>
          <th class="border border-gray-300 p-3 text-left">Cuota</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-3">0€</td>
          <td class="border border-gray-300 p-3">12.450€</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-green-600">9,50%</td>
          <td class="border border-gray-300 p-3">0€ + 9,50% sobre exceso</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3">12.450€</td>
          <td class="border border-gray-300 p-3">20.200€</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-blue-600">12,00%</td>
          <td class="border border-gray-300 p-3">1.182,75€ + 12,00% sobre exceso</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3">20.200€</td>
          <td class="border border-gray-300 p-3">35.200€</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-yellow-600">15,00%</td>
          <td class="border border-gray-300 p-3">2.112,75€ + 15,00% sobre exceso</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3">35.200€</td>
          <td class="border border-gray-300 p-3">60.000€</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-orange-600">18,50%</td>
          <td class="border border-gray-300 p-3">4.362,75€ + 18,50% sobre exceso</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3">60.000€</td>
          <td class="border border-gray-300 p-3">300.000€</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-red-600">22,50%</td>
          <td class="border border-gray-300 p-3">8.950,75€ + 22,50% sobre exceso</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3">+300.000€</td>
          <td class="border border-gray-300 p-3">-</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-purple-600">23,50%</td>
          <td class="border border-gray-300 p-3">62.950,75€ + 23,50% sobre exceso</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-6">
  <h3 class="font-bold text-yellow-900 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="m9 10 2 2 4-4"/></svg>
    Tabla Resumen: Tipos Totales (Estatal + Autonómico)
  </h3>
  <p class="text-yellow-800 mt-2 mb-4">Para facilitar los cálculos, aquí tienes los tipos totales que se aplican sumando la parte estatal y autonómica:</p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-green-700">Hasta 12.450€</p>
      <p class="text-2xl font-bold text-green-600">19%</p>
    </div>
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-blue-700">12.450€ - 20.200€</p>
      <p class="text-2xl font-bold text-blue-600">24%</p>
    </div>
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-yellow-700">20.200€ - 35.200€</p>
      <p class="text-2xl font-bold text-yellow-600">30%</p>
    </div>
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-orange-700">35.200€ - 60.000€</p>
      <p class="text-2xl font-bold text-orange-600">37%</p>
    </div>
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-red-700">60.000€ - 300.000€</p>
      <p class="text-2xl font-bold text-red-600">45%</p>
    </div>
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-purple-700">Más de 300.000€</p>
      <p class="text-2xl font-bold text-purple-600">47%</p>
    </div>
  </div>
</div>

<h2 id="ejemplo-practico-calculo-paso-a-paso">🧮 Ejemplos Prácticos: Calculando el IRPF Paso a Paso</h2>

<p>Vamos a calcular el IRPF para diferentes niveles de ingresos para que veas cómo funciona realmente el sistema progresivo. Estos ejemplos te ayudarán a entender mejor cómo se aplican los mínimos personales y familiares.</p>

<h3>💼 Ejemplo 1: Salario de 25.000€ Brutos Anuales</h3>

<div class="bg-green-50 p-6 rounded-lg my-6 border border-green-200">
  <h4 class="font-bold text-green-900 mb-4">📋 Situación</h4>
  <p class="text-green-800">Trabajador soltero, sin hijos, con un salario bruto de 25.000€ anuales.</p>
  
  <h4 class="font-bold text-green-900 mt-6 mb-4">🔢 Paso 1: Calcular la Base Liquidable</h4>
  <div class="bg-white p-4 rounded border">
    <ul class="text-green-800 space-y-2">
      <li><strong>Salario bruto:</strong> 25.000€</li>
      <li><strong>Cotizaciones S.S. (6,35%):</strong> -1.587,50€</li>
      <li><strong>Reducción rendimientos trabajo:</strong> -2.000€</li>
      <li class="border-t pt-2 font-bold text-lg"><strong>Base liquidable:</strong> 21.412,50€</li>
    </ul>
  </div>
  
  <h4 class="font-bold text-green-900 mt-6 mb-4">💰 Paso 2: Aplicar los Tramos del IRPF</h4>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-white p-4 rounded border">
      <p class="font-bold text-green-700">Primeros 12.450€</p>
      <p class="text-sm text-gray-600">12.450 × 19%</p>
      <p class="text-xl font-bold text-green-600">2.365,50€</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <p class="font-bold text-blue-700">De 12.450€ a 20.200€</p>
      <p class="text-sm text-gray-600">7.750 × 24%</p>
      <p class="text-xl font-bold text-blue-600">1.860,00€</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <p class="font-bold text-yellow-700">De 20.200€ a 21.412,50€</p>
      <p class="text-sm text-gray-600">1.212,50 × 30%</p>
      <p class="text-xl font-bold text-yellow-600">363,75€</p>
    </div>
  </div>
  
  <h4 class="font-bold text-green-900 mt-6 mb-4">📊 Resultado Final</h4>
  <div class="bg-white p-4 rounded border">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <p class="text-green-800"><strong>Cuota Íntegra Total:</strong></p>
        <p class="text-2xl font-bold text-green-700">4.589,25€</p>
      </div>
      <div>
        <p class="text-green-800"><strong>Tipo Efectivo:</strong></p>
        <p class="text-2xl font-bold text-green-700">21,43%</p>
      </div>
      <div>
        <p class="text-green-800"><strong>Retención Mensual:</strong></p>
        <p class="text-2xl font-bold text-green-700">382,44€</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg my-6">
  <h3 class="font-bold text-orange-900 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
    ¿Quieres Calcular tu Caso Específico?
  </h3>
  <p class="text-orange-800 mt-2">Utiliza nuestra <a href="/calculadora-irpf" class="text-blue-600 hover:underline font-semibold">Calculadora de IRPF 2025</a> para obtener un cálculo personalizado con tu salario y situación familiar.</p>
</div>

<h2 id="novedades-irpf-2025">🆕 Novedades Clave para 2025</h2>

<p>El ejercicio 2025 trae varias novedades importantes que afectan directamente a tu bolsillo:</p>

<div class="space-y-6 my-6">
  <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
    <h3 class="font-bold text-blue-900 mb-4 flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>
      1. Actualización de Reducciones por Rendimientos del Trabajo
    </h3>
    <p class="text-blue-800 mb-4">Se han incrementado las reducciones para salarios bajos y medios:</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-white p-4 rounded border">
        <h4 class="font-bold text-blue-700 mb-2">Nuevos Tramos</h4>
        <ul class="text-blue-800 space-y-1 text-sm">
          <li>• <strong>Hasta 13.115€:</strong> 5.565€ (antes 5.550€)</li>
          <li>• <strong>13.115€ - 16.825€:</strong> Reducción decreciente hasta 4.080€</li>
          <li>• <strong>16.825€ - 21.035€:</strong> Reducción decreciente hasta 2.652€</li>
          <li>• <strong>Más de 21.035€:</strong> 2.000€</li>
        </ul>
      </div>
      <div class="bg-white p-4 rounded border">
        <h4 class="font-bold text-green-700 mb-2">Impacto</h4>
        <p class="text-green-800 text-sm">Los trabajadores con salarios bajos y medios verán reducida su carga fiscal gracias a estas mejoras en las reducciones.</p>
      </div>
    </div>
  </div>
</div>

<h2 id="errores-comunes-evitar">❌ Errores Comunes que Debes Evitar</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div class="bg-red-50 p-4 rounded-lg border border-red-200">
    <h4 class="font-bold text-red-900 flex items-center gap-2 mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6"/><path d="M9 9l6 6"/></svg>
      Error #1: Malentender los Tramos
    </h4>
    <p class="text-red-800 text-sm mb-2"><strong>Error:</strong> "Gano 30.000€, así que pago el 30% de todo = 9.000€"</p>
    <p class="text-red-800 text-sm"><strong>Realidad:</strong> Pagas 19% sobre los primeros 12.450€, 24% sobre los siguientes 7.750€, y 30% solo sobre el resto.</p>
  </div>

  <div class="bg-red-50 p-4 rounded-lg border border-red-200">
    <h4 class="font-bold text-red-900 flex items-center gap-2 mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6"/><path d="M9 9l6 6"/></svg>
      Error #2: No Considerar Reducciones
    </h4>
    <p class="text-red-800 text-sm mb-2"><strong>Error:</strong> Calcular el IRPF sobre el salario bruto</p>
    <p class="text-red-800 text-sm"><strong>Realidad:</strong> Primero se restan las cotizaciones sociales y otras reducciones</p>
  </div>
</div>

<h2 id="conclusion-recomendaciones">🎯 Conclusión y Recomendaciones</h2>

<p>Entender los tramos del IRPF es fundamental para planificar tus finanzas personales y optimizar tu carga fiscal.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
  <h3 class="font-bold text-blue-900 flex items-center gap-2 mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="m9 10 2 2 4-4"/></svg>
    ¿Necesitas Calcular tu IRPF?
  </h3>
  <p class="text-blue-800 mb-4">Utiliza nuestra <a href='/calculadora-irpf' class='text-blue-600 hover:underline font-semibold'>Calculadora de IRPF 2025</a> actualizada con todos los tramos y deducciones. Es gratuita y te dará una estimación precisa de tu situación fiscal.</p>
</div>
`,
    image: "/placeholder.svg?height=400&width=800&text=Tramos+IRPF+2025",
    category: "IRPF",
    tags: ["IRPF", "Tramos", "2025"],
    date: "2025-01-27",
    readTime: "12 min",
    author: {
      name: "Equipo Calculord",
      avatar: "/placeholder.svg?height=40&width=40&text=EC",
    },
    toc: [
      { id: "tramos-irpf-2025-tabla-completa", text: "Tabla Completa de Tramos", icon: "tabla" },
      { id: "ejemplo-practico-calculo-paso-a-paso", text: "Ejemplos Prácticos", icon: "ejemplo" },
      { id: "novedades-irpf-2025", text: "Novedades 2025", icon: "novedad" },
      { id: "errores-comunes-evitar", text: "Errores Comunes", icon: "error" },
      { id: "conclusion-recomendaciones", text: "Conclusiones", icon: "conclusion" },
    ],
    keyData: {
      "Primer tramo": "19%",
      "Segundo tramo": "24%",
      "Tercer tramo": "30%",
      "Cuarto tramo": "37%",
      "Quinto tramo": "45%",
    },
  },
  "deducciones-irpf-2025": {
    slug: "deducciones-irpf-2025",
    title: "Deducciones IRPF 2025: Guía Completa para Ahorrar en tu Declaración",
    excerpt:
      "Descubre todas las deducciones del IRPF 2025 que puedes aplicar. Guía completa con ejemplos prácticos, límites actualizados y estrategias para maximizar tu ahorro fiscal.",
    content: `
<p>Las <strong>deducciones del IRPF</strong> son tu mejor aliado para reducir la cantidad que pagas a Hacienda cada año. Muchos contribuyentes desconocen las deducciones a las que tienen derecho y pierden la oportunidad de ahorrar cientos o incluso miles de euros en su declaración de la renta.</p>

<p>En esta guía completa te explicamos todas las deducciones disponibles en 2025, tanto estatales como autonómicas, con ejemplos prácticos y estrategias para maximizar tu ahorro fiscal de forma completamente legal.</p>

<div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
  <h3 class="font-bold text-green-900 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-piggy-bank"><path d="M19 5c-1.5 0-2.8 1.1-3 2.5l-.1.5c-.1.6-.4 1.2-.9 1.6L12 12l3 1 .5-2.5c.2-1.4 1.5-2.5 3-2.5 1.7 0 3 1.3 3 3s-1.3 3-3 3c-.4 0-.8-.1-1.1-.3L15 16.5c-.6.9-1.5 1.5-2.5 1.5s-1.9-.6-2.5-1.5L8 14l-3-1 2-2.5c.5-.4.8-1 .9-1.6l.1-.5c.2-1.4 1.5-2.5 3-2.5z"/><path d="M2 12h2"/><path d="M22 12h-2"/><path d="M12 2v2"/><path d="M12 20v2"/></svg>
    Ejemplo Real de Ahorro
  </h3>
  <p class="text-green-800 mt-2">Una familia con dos hijos, hipoteca y donaciones puede ahorrar hasta <strong>3.537,50€ al año</strong> aplicando correctamente todas las deducciones disponibles. ¡Te enseñamos cómo!</p>
</div>

<h2 id="tipos-de-deducciones-irpf">📋 Tipos de Deducciones en el IRPF</h2>

<p>Las deducciones del IRPF se dividen en dos grandes categorías que debes conocer:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
    <h3 class="font-bold text-blue-900 mb-4 flex items-center gap-2">
      🏛️ Deducciones Estatales
    </h3>
    <p class="text-blue-800 mb-4">Aplicables en toda España, independientemente de tu comunidad autónoma de residencia.</p>
    
    <div class="space-y-3">
      <div class="bg-white p-3 rounded border">
        <p class="font-bold text-blue-700 text-sm">Por Inversión en Vivienda Habitual</p>
        <p class="text-blue-800 text-sm">15% de las cantidades pagadas (máximo 9.040€ de base)</p>
      </div>
      <div class="bg-white p-3 rounded border">
        <p class="font-bold text-blue-700 text-sm">Por Donativos</p>
        <p class="text-blue-800 text-sm">80% primeros 150€, 35% resto</p>
      </div>
      <div class="bg-white p-3 rounded border">
        <p class="font-bold text-blue-700 text-sm">Por Familia Numerosa</p>
        <p class="text-blue-800 text-sm">1.200€ (general) o 2.400€ (especial)</p>
      </div>
    </div>
  </div>

  <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
    <h3 class="font-bold text-purple-900 mb-4 flex items-center gap-2">
      🗺️ Deducciones Autonómicas
    </h3>
    <p class="text-purple-800 mb-4">Varían según tu comunidad autónoma de residencia. Pueden suponer un ahorro adicional significativo.</p>
    
    <div class="space-y-3">
      <div class="bg-white p-3 rounded border">
        <p class="font-bold text-purple-700 text-sm">Por Nacimiento/Adopción</p>
        <p class="text-purple-800 text-sm">Hasta 600€ en algunas comunidades</p>
      </div>
      <div class="bg-white p-3 rounded border">
        <p class="font-bold text-purple-700 text-sm">Por Gastos de Guardería</p>
        <p class="text-purple-800 text-sm">Hasta 1.000€ en ciertas CCAA</p>
      </div>
      <div class="bg-white p-3 rounded border">
        <p class="font-bold text-purple-700 text-sm">Por Alquiler de Vivienda</p>
        <p class="text-purple-800 text-sm">Hasta 840€ para jóvenes</p>
      </div>
    </div>
  </div>
</div>

<h2 id="principales-deducciones-estatales-2025">🏛️ Principales Deducciones Estatales 2025</h2>

<h3>🏠 Deducción por Inversión en Vivienda Habitual</h3>

<div class="bg-yellow-50 p-6 rounded-lg my-6 border border-yellow-200">
  <h4 class="font-bold text-yellow-900 mb-4">📊 Datos Clave</h4>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-white p-4 rounded border">
      <p class="font-bold text-yellow-700">Porcentaje</p>
      <p class="text-2xl font-bold text-yellow-600">15%</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <p class="font-bold text-yellow-700">Base Máxima</p>
      <p class="text-2xl font-bold text-yellow-600">9.040€</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <p class="font-bold text-yellow-700">Ahorro Máximo</p>
      <p class="text-2xl font-bold text-yellow-600">1.356€</p>
    </div>
  </div>
  
  <div class="mt-4 bg-white p-4 rounded border">
    <h5 class="font-bold text-yellow-900 mb-2">⚠️ Requisitos Importantes</h5>
    <ul class="text-yellow-800 text-sm space-y-1">
      <li>• Solo para viviendas adquiridas antes del 1 de enero de 2013</li>
      <li>• Debe ser tu vivienda habitual</li>
      <li>• Incluye capital e intereses del préstamo hipotecario</li>
      <li>• También gastos de reparación y mejora (máximo 50% de la base)</li>
    </ul>
  </div>
</div>

<h3>❤️ Deducción por Donativos</h3>

<div class="bg-red-50 p-6 rounded-lg my-6 border border-red-200">
  <h4 class="font-bold text-red-900 mb-4">💝 Estructura de la Deducción</h4>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white p-4 rounded border">
      <h5 class="font-bold text-red-700 mb-2">Primeros 150€</h5>
      <p class="text-3xl font-bold text-red-600">80%</p>
      <p class="text-sm text-red-800">Ahorro: hasta 120€</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h5 class="font-bold text-red-700 mb-2">Resto del donativo</h5>
      <p class="text-3xl font-bold text-red-600">35%</p>
      <p class="text-sm text-red-800">Sin límite máximo</p>
    </div>
  </div>
  
  <div class="mt-4 bg-white p-4 rounded border">
    <h5 class="font-bold text-red-900 mb-2">🎯 Ejemplo Práctico</h5>
    <p class="text-red-800 text-sm mb-2">Donativo de 500€ a una ONG:</p>
    <ul class="text-red-800 text-sm space-y-1">
      <li>• Primeros 150€ × 80% = <strong>120€</strong></li>
      <li>• Restantes 350€ × 35% = <strong>122,50€</strong></li>
      <li>• <strong>Total deducción: 242,50€</strong></li>
    </ul>
  </div>
</div>

<h3>👨‍👩‍👧‍👦 Deducción por Familia Numerosa</h3>

<div class="bg-green-50 p-6 rounded-lg my-6 border border-green-200">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-green-700 mb-3">👨‍👩‍👧 Familia Numerosa General</h4>
      <p class="text-3xl font-bold text-green-600 mb-2">1.200€</p>
      <p class="text-sm text-green-800">3 o 4 hijos</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-green-700 mb-3">👨‍👩‍👧‍👦 Familia Numerosa Especial</h4>
      <p class="text-3xl font-bold text-green-600 mb-2">2.400€</p>
      <p class="text-sm text-green-800">5 o más hijos</p>
    </div>
  </div>
  
  <div class="mt-4 bg-white p-4 rounded border">
    <h5 class="font-bold text-green-900 mb-2">📋 Requisitos</h5>
    <ul class="text-green-800 text-sm space-y-1">
      <li>• Título oficial de familia numerosa vigente</li>
      <li>• Se aplica por cada titular del título</li>
      <li>• Compatible con otras deducciones por descendientes</li>
    </ul>
  </div>
</div>

<h3>♿ Deducción por Personas con Discapacidad</h3>

<div class="bg-blue-50 p-6 rounded-lg my-6 border border-blue-200">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-blue-700 mb-2">Discapacidad ≥33%</h4>
      <p class="text-2xl font-bold text-blue-600">1.200€</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-blue-700 mb-2">Discapacidad ≥65%</h4>
      <p class="text-2xl font-bold text-blue-600">2.400€</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-blue-700 mb-2">Gastos Asistencia</h4>
      <p class="text-2xl font-bold text-blue-600">3.500€</p>
    </div>
  </div>
</div>

<h2 id="deducciones-autonómicas-destacadas">🗺️ Deducciones Autonómicas Destacadas</h2>

<p>Cada comunidad autónoma tiene sus propias deducciones. Aquí te mostramos las más interesantes:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="bg-red-50 p-4 rounded-lg border border-red-200">
    <h3 class="font-bold text-red-900 mb-3">🏛️ Madrid</h3>
    <ul class="text-red-800 text-sm space-y-2">
      <li>• <strong>Gastos de guardería:</strong> 15% (máximo 1.000€)</li>
      <li>• <strong>Gastos educativos:</strong> 15% (máximo 900€)</li>
      <li>• <strong>Alquiler jóvenes:</strong> 20% (máximo 1.000€)</li>
    </ul>
  </div>

  <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
    <h3 class="font-bold text-yellow-900 mb-3">🏛️ Cataluña</h3>
    <ul class="text-yellow-800 text-sm space-y-2">
      <li>• <strong>Gastos de guardería:</strong> 100% (máximo 300€)</li>
      <li>• <strong>Alquiler vivienda habitual:</strong> 10% (máximo 300€)</li>
      <li>• <strong>Rehabilitación vivienda:</strong> 5% (máximo 612€)</li>
    </ul>
  </div>

  <div class="bg-green-50 p-4 rounded-lg border border-green-200">
    <h3 class="font-bold text-green-900 mb-3">🏛️ Andalucía</h3>
    <ul class="text-green-800 text-sm space-y-2">
      <li>• <strong>Nacimiento/adopción:</strong> 100€ por hijo</li>
      <li>• <strong>Gastos por descendientes:</strong> 15% (máximo 100€)</li>
      <li>• <strong>Inversiones empresariales:</strong> 5% sin límite</li>
    </ul>
  </div>

  <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
    <h3 class="font-bold text-blue-900 mb-3">🏛️ Valencia</h3>
    <ul class="text-blue-800 text-sm space-y-2">
      <li>• <strong>Gastos de guardería:</strong> 15% (máximo 270€)</li>
      <li>• <strong>Adquisición libros de texto:</strong> 100€ por hijo</li>
      <li>• <strong>Cantidades donadas:</strong> 25% adicional</li>
    </ul>
  </div>
</div>

<h2 id="cómo-maximizar-las-deducciones">💡 Cómo Maximizar las Deducciones</h2>

<h3>📊 Caso Práctico: Familia que Ahorra 3.537,50€</h3>

<div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg my-6 border border-green-200">
  <h4 class="font-bold text-gray-900 mb-4">👨‍👩‍👧‍👦 Situación Familiar</h4>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-white p-4 rounded border">
      <h5 class="font-bold text-gray-700 mb-2">Datos Personales</h5>
      <ul class="text-gray-800 text-sm space-y-1">
        <li>• Matrimonio con 2 hijos menores</li>
        <li>• Ingresos conjuntos: 65.000€</li>
        <li>• Residentes en Madrid</li>
        <li>• Vivienda habitual con hipoteca</li>
      </ul>
    </div>
    <div class="bg-white p-4 rounded border">
      <h5 class="font-bold text-gray-700 mb-2">Gastos Anuales</h5>
      <ul class="text-gray-800 text-sm space-y-1">
        <li>• Hipoteca: 9.040€ (intereses + capital)</li>
        <li>• Guardería: 3.600€</li>
        <li>• Donativos: 400€</li>
        <li>• Gastos educativos: 1.200€</li>
      </ul>
    </div>
  </div>
  
  <h4 class="font-bold text-gray-900 mb-4">💰 Cálculo de Deducciones</h4>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-green-700 text-sm">Vivienda Habitual</p>
      <p class="text-lg font-bold text-green-600">1.356€</p>
      <p class="text-xs text-gray-600">9.040€ × 15%</p>
    </div>
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-blue-700 text-sm">Donativos</p>
      <p class="text-lg font-bold text-blue-600">207,50€</p>
      <p class="text-xs text-gray-600">150€×80% + 250€×35%</p>
    </div>
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-purple-700 text-sm">Guardería (Madrid)</p>
      <p class="text-lg font-bold text-purple-600">540€</p>
      <p class="text-xs text-gray-600">3.600€ × 15%</p>
    </div>
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-orange-700 text-sm">Gastos Educativos</p>
      <p class="text-lg font-bold text-orange-600">180€</p>
      <p class="text-xs text-gray-600">1.200€ × 15%</p>
    </div>
  </div>
  
  <div class="mt-6 bg-green-100 p-4 rounded border-2 border-green-300">
    <h4 class="font-bold text-green-900 text-center mb-2">🎉 Ahorro Total Anual</h4>
    <p class="text-4xl font-bold text-green-700 text-center">3.537,50€</p>
    <p class="text-sm text-green-800 text-center mt-2">¡Más de 294€ de ahorro mensual!</p>
  </div>
</div>

<h3>🎯 Estrategias para Maximizar el Ahorro</h3>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
  <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
    <h4 class="font-bold text-blue-900 mb-3">📅 Planificación Temporal</h4>
    <ul class="text-blue-800 text-sm space-y-2">
      <li>• Concentra gastos deducibles en un año</li>
      <li>• Adelanta o retrasa pagos según convenga</li>
      <li>• Aprovecha los límites anuales al máximo</li>
    </ul>
  </div>

  <div class="bg-green-50 p-4 rounded-lg border border-green-200">
    <h4 class="font-bold text-green-900 mb-3">📋 Documentación</h4>
    <ul class="text-green-800 text-sm space-y-2">
      <li>• Guarda todas las facturas y recibos</li>
      <li>• Solicita certificados de donativos</li>
      <li>• Mantén justificantes de transferencias</li>
    </ul>
  </div>

  <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
    <h4 class="font-bold text-purple-900 mb-3">🔍 Revisión Anual</h4>
    <ul class="text-purple-800 text-sm space-y-2">
      <li>• Revisa cambios normativos</li>
      <li>• Consulta nuevas deducciones autonómicas</li>
      <li>• Evalúa declaración conjunta vs individual</li>
    </ul>
  </div>
</div>

<h2 id="errores-comunes-con-las-deducciones">❌ Errores Comunes con las Deducciones</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div class="bg-red-50 p-4 rounded-lg border border-red-200">
    <h4 class="font-bold text-red-900 mb-3">🚫 Error #1: No Aplicar Deducciones Autonómicas</h4>
    <p class="text-red-800 text-sm mb-2"><strong>Problema:</strong> Muchos contribuyentes solo conocen las deducciones estatales.</p>
    <p class="text-red-800 text-sm"><strong>Solución:</strong> Revisa las deducciones específicas de tu comunidad autónoma.</p>
  </div>

  <div class="bg-red-50 p-4 rounded-lg border border-red-200">
    <h4 class="font-bold text-red-900 mb-3">🚫 Error #2: Perder Justificantes</h4>
    <p class="text-red-800 text-sm mb-2"><strong>Problema:</strong> Sin documentación no puedes aplicar la deducción.</p>
    <p class="text-red-800 text-sm"><strong>Solución:</strong> Organiza un archivo digital de todos los gastos deducibles.</p>
  </div>

  <div class="bg-red-50 p-4 rounded-lg border border-red-200">
    <h4 class="font-bold text-red-900 mb-3">🚫 Error #3: No Revisar Límites</h4>
    <p class="text-red-800 text-sm mb-2"><strong>Problema:</strong> Superar los límites máximos sin saberlo.</p>
    <p class="text-red-800 text-sm"><strong>Solución:</strong> Controla los importes durante el año para optimizar el beneficio.</p>
  </div>

  <div class="bg-red-50 p-4 rounded-lg border border-red-200">
    <h4 class="font-bold text-red-900 mb-3">🚫 Error #4: Declaración Conjunta vs Individual</h4>
    <p class="text-red-800 text-sm mb-2"><strong>Problema:</strong> No evaluar qué modalidad es más beneficiosa.</p>
    <p class="text-red-800 text-sm"><strong>Solución:</strong> Calcula ambas opciones antes de decidir.</p>
  </div>
</div>

<h2 id="preguntas-frecuentes-deducciones">❓ Preguntas Frecuentes sobre Deducciones</h2>

<div class="space-y-4 my-6">
  <div class="bg-gray-50 p-4 rounded-lg border">
    <h4 class="font-bold text-gray-900 mb-2">¿Puedo aplicar deducciones autonómicas si trabajo en otra comunidad?</h4>
    <p class="text-gray-800 text-sm">Sí, se aplican las deducciones de tu comunidad de residencia fiscal, no donde trabajas.</p>
  </div>

  <div class="bg-gray-50 p-4 rounded-lg border">
    <h4 class="font-bold text-gray-900 mb-2">¿Qué pasa si me mudo de comunidad autónoma durante el año?</h4>
    <p class="text-gray-800 text-sm">Se aplican las deducciones de la comunidad donde residas el 31 de diciembre, salvo excepciones específicas.</p>
  </div>

  <div class="bg-gray-50 p-4 rounded-lg border">
    <h4 class="font-bold text-gray-900 mb-2">¿Puedo deducir gastos de años anteriores?</h4>
    <p class="text-gray-800 text-sm">Generalmente no, salvo casos específicos como la deducción por vivienda habitual que tiene un régimen especial.</p>
  </div>

  <div class="bg-gray-50 p-4 rounded-lg border">
    <h4 class="font-bold text-gray-900 mb-2">¿Es mejor hacer la declaración conjunta o individual?</h4>
    <p class="text-gray-800 text-sm">Depende de cada caso. Utiliza nuestra <a href="/calculadora-irpf" class="text-blue-600 hover:underline">calculadora de IRPF</a> para comparar ambas opciones.</p>
  </div>
</div>

<div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
  <h3 class="font-bold text-blue-900 flex items-center gap-2 mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="m9 10 2 2 4-4"/></svg>
    ¿Quieres Calcular tus Deducciones?
  </h3>
  <p class="text-blue-800 mb-4">Utiliza nuestra <a href='/calculadora-irpf' class='text-blue-600 hover:underline font-semibold'>Calculadora de IRPF 2025</a> para simular el impacto de todas las deducciones en tu declaración. Incluye tanto deducciones estatales como autonómicas.</p>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-blue-700 text-sm">📊 También te puede interesar:</p>
      <p class="text-blue-800 text-xs"><a href="/blog/tramos-irpf-2025" class="hover:underline">Tramos IRPF 2025</a></p>
    </div>
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-blue-700 text-sm">💰 Calcula tu salario:</p>
      <p class="text-blue-800 text-xs"><a href="/conversor-salario-bruto-neto" class="hover:underline">Conversor Bruto-Neto</a></p>
    </div>
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-blue-700 text-sm">🏢 Para empresas:</p>
      <p class="text-blue-800 text-xs"><a href="/calculadora-coste-total-empresa" class="hover:underline">Coste Total Empresa</a></p>
    </div>
  </div>
</div>
`,
    image: "/placeholder.svg?height=400&width=800&text=Deducciones+IRPF+2025",
    category: "IRPF",
    tags: ["IRPF", "Deducciones", "2025"],
    date: "2025-01-26",
    readTime: "15 min",
    author: {
      name: "Ana Martín",
      avatar: "/placeholder.svg?height=40&width=40&text=AM",
    },
    toc: [
      { id: "tipos-de-deducciones-irpf", text: "Tipos de Deducciones", icon: "info" },
      { id: "principales-deducciones-estatales-2025", text: "Deducciones Estatales", icon: "chart" },
      { id: "deducciones-autonómicas-destacadas", text: "Deducciones Autonómicas", icon: "book" },
      { id: "cómo-maximizar-las-deducciones", text: "Maximizar Deducciones", icon: "trending" },
      { id: "errores-comunes-con-las-deducciones", text: "Errores Comunes", icon: "scale" },
    ],
    keyData: {
      "Deducción Vivienda": "1.356€",
      "Deducción Familia Numerosa General": "1.200€",
      "Deducción Familia Numerosa Especial": "2.400€",
      "Deducción Maternidad": "1.200€",
      "Deducción Discapacidad": "3.500€",
    },
  },
  "como-calcular-irpf-2025": {
    slug: "como-calcular-irpf-2025",
    title: "Cómo Calcular el IRPF 2025: Guía Completa con Ejemplos",
    excerpt:
      "Aprende a calcular tu IRPF paso a paso con la normativa actualizada de 2025. Incluye ejemplos prácticos y todas las novedades fiscales.",
    content: `El cálculo del IRPF puede parecer complejo, pero siguiendo los pasos correctos y conociendo las novedades de 2025, podrás determinar con precisión cuánto debes pagar o si te corresponde devolución.

## Novedades IRPF 2025
Este año trae importantes cambios que afectan al cálculo del impuesto:

- Actualización de las tarifas del impuesto
- Nuevas deducciones por eficiencia energética
- Modificaciones en el mínimo personal y familiar
- Cambios en las deducciones autonómicas

## Pasos para Calcular el IRPF
### 1. Determinar la Base Imponible
La base imponible es el punto de partida del cálculo. Se obtiene sumando todos los rendimientos e imputaciones de renta y restando las reducciones aplicables.

**Rendimientos del Trabajo:**
- Salarios y sueldos
- Pensiones
- Prestaciones por desempleo
- Otras remuneraciones

**Rendimientos del Capital:**
- Intereses de cuentas bancarias
- Dividendos de acciones
- Rendimientos de alquileres
- Ganancias patrimoniales

### 2. Aplicar Reducciones
**Reducciones Generales:**
- Cotizaciones a la Seguridad Social
- Cotizaciones a mutualidades
- Pensiones compensatorias
- Anualidades por alimentos

**Reducciones por Aportaciones:**
- Planes de pensiones (hasta 1.500€)
- Planes de previsión asegurados
- Seguros de dependencia

### 3. Calcular la Cuota Íntegra
Se aplica la tarifa del IRPF a la base liquidable:

| Tramo | Base Liquidable | Tipo Aplicable |
|-------|----------------|----------------|
| 1º | Hasta 12.450€ | 19% |
| 2º | 12.450€ - 20.200€ | 24% |
| 3º | 20.200€ - 35.200€ | 30% |
| 4º | 35.200€ - 60.000€ | 37% |
| 5º | 60.000€ - 300.000€ | 45% |
| 6º | Más de 300.000€ | 47% |

### 4. Aplicar Deducciones
**Deducciones Estatales:**
- Por inversión en vivienda habitual
- Por donativos
- Por familia numerosa
- Por personas con discapacidad

**Deducciones Autonómicas:**
Varían según la comunidad autónoma de residencia.

## Ejemplo Práctico Completo
Veamos un caso real paso a paso:

**Datos del Contribuyente:**
- Sueldo bruto anual: 35.000€
- Cotizaciones SS: 2.300€
- Retenciones IRPF: 4.200€
- Intereses hipoteca: 2.800€
- Un hijo menor de 25 años

**Paso 1: Base Imponible**
35.000€ (sueldo) - 2.300€ (cotizaciones) = 32.700€

**Paso 2: Base Liquidable**
32.700€ (no hay más reducciones aplicables)

**Paso 3: Cuota Íntegra**
- Primeros 12.450€ al 19% = 2.365,50€
- Siguientes 8.250€ al 24% = 1.980€
- Siguientes 12.000€ al 30% = 3.600€
- **Total cuota íntegra: 7.945,50€**

**Paso 4: Deducciones**
- Deducción por hijo: 1.200€
- **Cuota líquida: 6.745,50€**

**Paso 5: Resultado**
6.745,50€ - 4.200€ (retenciones) = **2.545,50€ a pagar**

## Calculadora Online vs. Cálculo Manual
### Ventajas de las Calculadoras Online
- Rapidez en el cálculo
- Actualizadas con la normativa vigente
- Incluyen deducciones autonómicas
- Permiten simular diferentes escenarios

### Cuándo Hacer Cálculo Manual
- Para entender el proceso
- En casos complejos
- Para verificar resultados
- Con fines educativos

## Errores Comunes en el Cálculo
1. **No considerar todas las rentas**
2. **Olvidar deducciones aplicables**
3. **Confundir base imponible con base liquidable**
4. **No actualizar los tramos de IRPF**
5. **Ignorar la normativa autonómica**

La correcta comprensión del cálculo del IRPF te permitirá optimizar tu carga fiscal y evitar sorpresas en la declaración de la renta.`,
    date: "2025-01-10",
    readTime: "8 min",
    category: "IRPF",
    image: "/placeholder.svg?height=400&width=800&text=Cálculo+IRPF+2025",
    author: {
      name: "Carlos Ruiz",
      avatar: "/placeholder.svg?height=40&width=40&text=CR",
    },
    tags: ["IRPF", "Cálculo", "2025"],
    toc: [
      { id: "novedades-irpf-2025", text: "Novedades IRPF 2025", icon: "info" },
      { id: "pasos-para-calcular-el-irpf", text: "Pasos para Calcular", icon: "chart" },
      { id: "ejemplo-practico-completo", text: "Ejemplo Práctico", icon: "book" },
      { id: "calculadora-online-vs-calculo-manual", text: "Calculadora vs. Manual", icon: "trending" },
      { id: "errores-comunes-en-el-calculo", text: "Errores Comunes", icon: "scale" },
    ],
    keyData: {
      "Tramo 1": "12.450€",
      "Tramo 2": "8.250€",
      "Tramo 3": "12.000€",
      "Tramo 4": "24.750€",
      "Tramo 5": "247.500€",
    },
  },
  "minimos-personales-familiares-irpf-2025": {
    slug: "minimos-personales-familiares-irpf-2025",
    title: "Mínimos Personales y Familiares IRPF 2025: Guía Completa para Reducir tu Impuesto",
    excerpt:
      "Descubre cómo los mínimos personales y familiares del IRPF 2025 pueden reducir significativamente tu carga fiscal. Guía completa con importes actualizados, ejemplos prácticos y estrategias de optimización.",
    content: `
<p>Los <strong>mínimos personales y familiares del IRPF</strong> son una de las herramientas más importantes para reducir tu carga fiscal, pero también una de las más desconocidas. Estos mínimos garantizan que una parte de tus ingresos quede libre de tributación, reconociendo los gastos básicos de subsistencia personal y familiar.</p>

<p>En esta guía te explicamos cómo funcionan los mínimos para 2025, cuánto puedes ahorrar y cómo optimizar tu situación familiar para maximizar el beneficio fiscal.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
  <h3 class="font-bold text-blue-900">💡 Concepto Clave</h3>
  <p class="text-blue-800">Los mínimos no son deducciones que se restan directamente del impuesto, sino importes sobre los que no pagas IRPF. Se aplican sobre la cuota íntegra, multiplicándose por tu tipo marginal de gravamen.</p>
</div>

<h2 id="que-son-minimos-personales-familiares">📋 ¿Qué son los Mínimos Personales y Familiares?</h2>

<p>Los mínimos del IRPF representan la cantidad mínima necesaria para la subsistencia del contribuyente y su familia. Hacienda reconoce que estos importes no deben tributar, aplicando una reducción en la cuota a pagar.</p>

<h3>Diferencia entre Mínimos y Deducciones</h3>

<p><strong>Mínimos:</strong> Se multiplican por tu tipo marginal de IRPF. Si tu tipo marginal es del 30% y tienes 2.400€ de mínimo por hijo, ahorras 720€.</p>

<p><strong>Deducciones:</strong> Se restan directamente de la cuota. Una deducción de 720€ te ahorra exactamente 720€.</p>

<h2 id="minimos-personales-2025">👤 Mínimos Personales 2025</h2>

<div class="bg-green-50 p-6 rounded-lg my-6">
  <h3 class="font-bold text-green-900 mb-4">Importes Actualizados</h3>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-green-700">Mínimo Personal General</h4>
      <p class="text-3xl font-bold text-green-600">5.550€</p>
      <p class="text-sm text-green-800">Para todos los contribuyentes</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-green-700">Mínimo por Edad (+65 años)</h4>
      <p class="text-3xl font-bold text-green-600">+1.400€</p>
      <p class="text-sm text-green-800">Adicional al mínimo general</p>
    </div>
  </div>
  
  <div class="mt-4 bg-white p-4 rounded border">
    <h4 class="font-bold text-green-700">Mínimo por Edad (+75 años)</h4>
    <p class="text-2xl font-bold text-green-600">+2.800€</p>
    <p class="text-sm text-green-800">Adicional al mínimo general (sustituye al de +65)</p>
  </div>
</div>

<h2 id="minimos-familiares-2025">👨‍👩‍👧‍👦 Mínimos Familiares 2025</h2>

<h3>Por Descendientes</h3>

<div class="bg-blue-50 p-6 rounded-lg my-6">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-blue-700">Primer Hijo</h4>
      <p class="text-2xl font-bold text-blue-600">2.400€</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-blue-700">Segundo Hijo</h4>
      <p class="text-2xl font-bold text-blue-600">2.700€</p>
      <p class="text-sm text-green-600">+300€ vs 2024</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-blue-700">Tercer Hijo</h4>
      <p class="text-2xl font-bold text-blue-600">4.000€</p>
      <p class="text-sm text-green-600">+400€ vs 2024</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-blue-700">Cuarto y Siguientes</h4>
      <p class="text-2xl font-bold text-blue-600">4.500€</p>
      <p class="text-sm text-green-600">+420€ vs 2024</p>
    </div>
  </div>
</div>

<h3>Incrementos por Edad y Discapacidad</h3>

<p><strong>Menores de 3 años:</strong> +2.800€ adicionales por cada hijo</p>
<p><strong>Descendientes con discapacidad:</strong> +3.500€ adicionales</p>

<h3>Por Ascendientes</h3>

<div class="bg-purple-50 p-4 rounded-lg my-6">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-purple-700">Mínimo por Ascendiente</h4>
      <p class="text-2xl font-bold text-purple-600">1.150€</p>
      <p class="text-sm text-purple-800">Por cada ascendiente mayor de 65 años</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-purple-700">Con Discapacidad</h4>
      <p class="text-2xl font-bold text-purple-600">+3.500€</p>
      <p class="text-sm text-purple-800">Adicional si tiene discapacidad</p>
    </div>
  </div>
</div>

<h2 id="ejemplos-practicos-calculo">🧮 Ejemplos Prácticos de Cálculo</h2>

<h3>Ejemplo 1: Familia con Dos Hijos</h3>

<div class="bg-yellow-50 p-6 rounded-lg my-6">
  <h4 class="font-bold text-yellow-900">Situación Familiar</h4>
  <p class="text-yellow-800 mb-4">Matrimonio con dos hijos (8 y 4 años), ingresos conjuntos de 50.000€, tipo marginal del 30%.</p>
  
  <h4 class="font-bold text-yellow-900">Cálculo de Mínimos</h4>
  <ul class="text-yellow-800 space-y-2">
    <li>• Mínimo personal (cada cónyuge): 5.550€ × 2 = 11.100€</li>
    <li>• Primer hijo: 2.400€</li>
    <li>• Segundo hijo: 2.700€</li>
    <li>• <strong>Total mínimos: 16.200€</strong></li>
  </ul>
  
  <div class="bg-white p-4 rounded border mt-4">
    <h4 class="font-bold text-yellow-900">Ahorro Fiscal</h4>
    <p class="text-2xl font-bold text-yellow-600">4.860€</p>
    <p class="text-sm text-yellow-800">16.200€ × 30% = 4.860€ menos de IRPF</p>
  </div>
</div>

<h3>Ejemplo 2: Contribuyente con Padre a Cargo</h3>

<div class="bg-green-50 p-6 rounded-lg my-6">
  <h4 class="font-bold text-green-900">Situación</h4>
  <p class="text-green-800 mb-4">Soltero, 45 años, padre de 70 años a su cargo, ingresos de 35.000€, tipo marginal del 30%.</p>
  
  <h4 class="font-bold text-green-900">Cálculo de Mínimos</h4>
  <ul class="text-green-800 space-y-2">
    <li>• Mínimo personal: 5.550€</li>
    <li>• Mínimo por ascendiente: 1.150€</li>
    <li>• <strong>Total mínimos: 6.700€</strong></li>
  </ul>
  
  <div class="bg-white p-4 rounded border mt-4">
    <h4 class="font-bold text-green-900">Ahorro Fiscal</h4>
    <p class="text-2xl font-bold text-green-600">2.010€</p>
    <p class="text-sm text-green-800">6.700€ × 30% = 2.010€ menos de IRPF</p>
  </div>
</div>

<h2 id="estrategias-optimizacion">💡 Estrategias de Optimización</h2>

<h3>1. Planificación de la Unidad Familiar</h3>

<p>En matrimonios, evalúa si es más beneficioso tributar conjunta o individualmente. Los mínimos se aplican de forma diferente en cada modalidad.</p>

<h3>2. Timing de Nacimientos</h3>

<p>Un hijo nacido el 31 de diciembre genera el mismo mínimo que uno nacido el 1 de enero. Planifica si es posible para maximizar el beneficio fiscal.</p>

<h3>3. Documentación de Dependencia</h3>

<p>Para aplicar mínimos por ascendientes, debes demostrar que conviven contigo o que no tienen rentas superiores a 8.000€ anuales.</p>

<h2 id="errores-comunes">❌ Errores Comunes</h2>

<div class="bg-red-50 p-4 rounded-lg my-6">
  <h3 class="font-bold text-red-900">Error #1: Confundir Mínimos con Deducciones</h3>
  <p class="text-red-800">Los mínimos no se restan directamente del impuesto, sino que se multiplican por tu tipo marginal.</p>
</div>

<div class="bg-red-50 p-4 rounded-lg my-6">
  <h3 class="font-bold text-red-900">Error #2: No Aplicar Mínimos por Ascendientes</h3>
  <p class="text-red-800">Muchos contribuyentes no saben que pueden aplicar mínimos por padres o abuelos a su cargo.</p>
</div>

<h2 id="novedades-2025">🆕 Novedades 2025</h2>

<p>Las principales novedades para 2025 incluyen:</p>

<ul>
  <li><strong>Incremento en mínimos por descendientes:</strong> Especialmente beneficioso para familias numerosas</li>
  <li><strong>Mejora en la progresividad:</strong> Mayor beneficio para familias con más hijos</li>
  <li><strong>Actualización por inflación:</strong> Los importes se han actualizado según el IPC</li>
</ul>

<h2 id="conclusion">🎯 Conclusión</h2>

<p>Los mínimos personales y familiares son una herramienta fundamental para reducir tu carga fiscal. Una familia tipo puede ahorrar varios miles de euros al año simplemente por aplicar correctamente estos mínimos.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
  <h3 class="font-bold text-blue-900">🔗 Recursos Relacionados</h3>
  <p class="text-blue-800">Para calcular el impacto real en tu caso específico, utiliza nuestra <a href="/calculadora-irpf" class="text-blue-600 hover:underline">Calculadora de IRPF 2025</a>. También puedes consultar nuestras guías sobre <a href="/blog/tramos-irpf-2025" class="text-blue-600 hover:underline">tramos del IRPF</a> y <a href="/blog/deducciones-irpf-2025" class="text-blue-600 hover:underline">deducciones disponibles</a>.</p>
</div>
`,
    image: "/placeholder.svg?height=400&width=800&text=Mínimos+Personales+Familiares+IRPF+2025",
    category: "IRPF",
    tags: ["IRPF", "Mínimos", "Familia", "2025"],
    date: "2025-01-25",
    readTime: "10 min",
    author: {
      name: "Equipo Calculord",
      avatar: "/placeholder.svg?height=40&width=40&text=EC",
    },
    toc: [
      { id: "que-son-minimos-personales-familiares", text: "¿Qué son los Mínimos?", icon: "info" },
      { id: "minimos-personales-2025", text: "Mínimos Personales", icon: "user" },
      { id: "minimos-familiares-2025", text: "Mínimos Familiares", icon: "family" },
      { id: "ejemplos-practicos-calculo", text: "Ejemplos Prácticos", icon: "calculator" },
      { id: "estrategias-optimizacion", text: "Estrategias", icon: "strategy" },
    ],
    keyData: {
      "Mínimo Personal": "5.550€",
      "Primer Hijo": "2.400€",
      "Segundo Hijo": "2.700€",
      "Tercer Hijo": "4.000€",
      "Por Ascendiente": "1.150€",
    },
  },
  "declaracion-renta-2025-guia-completa": {
    slug: "declaracion-renta-2025-guia-completa",
    title: "Declaración de la Renta 2025: Guía Completa Paso a Paso",
    excerpt:
      "Todo lo que necesitas saber para hacer tu declaración de la renta 2025. Guía completa con plazos, novedades, casos prácticos y consejos para maximizar tu devolución o minimizar el pago.",
    content: `
<p>La <strong>declaración de la renta 2025</strong> (correspondiente al ejercicio fiscal 2024) trae importantes novedades que pueden afectar significativamente a tu bolsillo. Desde cambios en los tramos del IRPF hasta nuevas deducciones, es fundamental conocer todos los detalles para optimizar tu declaración.</p>

<p>En esta guía completa te explicamos paso a paso cómo hacer tu declaración, las principales novedades, casos prácticos reales y estrategias para conseguir la máxima devolución o pagar lo mínimo posible.</p>

<div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
  <h3 class="font-bold text-green-900">📅 Fechas Clave 2024</h3>
  <p class="text-green-800"><strong>Inicio campaña:</strong> 3 de abril de 2024 • <strong>Fin campaña:</strong> 1 de julio de 2024 • <strong>Cita previa:</strong> Desde el 2 de mayo • <strong>Domiciliación bancaria:</strong> Hasta el 27 de junio</p>
</div>

<h2 id="novedades-declaracion-renta-2024">🆕 Principales Novedades 2024</h2>

<p>La declaración de la renta 2024 incorpora varios cambios importantes que debes conocer:</p>

<h3>1. Nuevas Deducciones por Eficiencia Energética</h3>

<p>Se mantienen las deducciones por obras de mejora de la eficiencia energética en viviendas:</p>

<ul>
  <li><strong>Mejora de eficiencia energética:</strong> 20% de las inversiones (máximo 5.000€)</li>
  <li><strong>Rehabilitación energética:</strong> 40% de las inversiones (máximo 7.500€)</li>
  <li><strong>Rehabilitación de edificios:</strong> 60% de las inversiones (máximo 15.000€)</li>
</ul>

<h3>2. Actualización de Mínimos Personales y Familiares</h3>

<p>Los mínimos se han actualizado para reflejar la inflación y mejorar la progresividad del sistema:</p>

<ul>
  <li>Mínimo personal: 5.550€ (sin cambios)</li>
  <li>Segundo hijo: 2.700€ (+300€)</li>
  <li>Tercer hijo: 4.000€ (+400€)</li>
  <li>Cuarto hijo y siguientes: 4.500€ (+420€)</li>
</ul>

<h3>3. Cambios en Planes de Pensiones</h3>

<p>Se mantiene la reducción del límite de aportaciones a planes de pensiones individuales en 1.500€ anuales, pero se amplían las posibilidades de aportación a planes de empresa.</p>

<h2 id="quien-debe-hacer-declaracion">👤 ¿Quién Debe Hacer la Declaración?</h2>

<h3>Obligados a Declarar</h3>

<p>Debes presentar declaración si te encuentras en alguna de estas situaciones:</p>

<div class="bg-blue-50 p-6 rounded-lg my-6">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-blue-700">Rendimientos del Trabajo</h4>
      <ul class="text-blue-800 text-sm space-y-1">
        <li>• Más de 22.000€ de un pagador</li>
        <li>• Más de 15.000€ de varios pagadores</li>
        <li>• Más de 1.800€ del segundo pagador</li>
      </ul>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-blue-700">Otros Rendimientos</h4>
      <ul class="text-blue-800 text-sm space-y-1">
        <li>• Más de 1.600€ de capital mobiliario</li>
        <li>• Más de 1.000€ de ganancias patrimoniales</li>
        <li>• Cualquier pérdida patrimonial</li>
      </ul>
    </div>
  </div>
</div>

<h3>Casos Especiales</h3>

<p>También debes declarar si:</p>

<ul>
  <li>Tienes derecho a deducción por inversión en vivienda habitual</li>
  <li>Realizaste aportaciones a planes de pensiones con derecho a reducción</li>
  <li>Aplicaste deducciones por donativos del ejercicio anterior</li>
  <li>Tienes rentas inmobiliarias imputadas</li>
</ul>

<h2 id="como-hacer-declaracion-paso-paso">📝 Cómo Hacer la Declaración Paso a Paso</h2>

<h3>Paso 1: Reunir la Documentación</h3>

<p>Antes de empezar, asegúrate de tener toda la documentación necesaria:</p>

<div class="bg-yellow-50 p-4 rounded-lg my-6">
  <h4 class="font-bold text-yellow-900">📋 Documentos Imprescindibles</h4>
  <ul class="text-yellow-800 text-sm space-y-1">
    <li>• Certificado de retenciones (formulario 190)</li>
    <li>• Certificados de rendimientos de capital mobiliario</li>
    <li>• Justificantes de gastos deducibles</li>
    <li>• Certificados de donativos</li>
    <li>• Documentación de planes de pensiones</li>
    <li>• Facturas de obras de eficiencia energética</li>
  </ul>
</div>

<h3>Paso 2: Acceder al Borrador</h3>

<p>Puedes obtener tu borrador de varias formas:</p>

<ul>
  <li><strong>Online:</strong> A través de la web de la AEAT con certificado digital, Cl@ve PIN o DNI electrónico</li>
  <li><strong>Por teléfono:</strong> Llamando al 901 200 345</li>
  <li><strong>Presencial:</strong> En las oficinas de Hacienda con cita previa</li>
</ul>

<h3>Paso 3: Revisar y Completar los Datos</h3>

<p>El borrador incluye la información que Hacienda ya conoce, pero debes:</p>

<ul>
  <li>Verificar que todos los datos son correctos</li>
  <li>Añadir rendimientos no incluidos</li>
  <li>Incorporar gastos deducibles</li>
  <li>Revisar la situación familiar</li>
</ul>

<h2 id="casos-practicos-declaracion">🧮 Casos Prácticos de Declaración</h2>

<h3>Caso 1: Trabajador por Cuenta Ajena con Hipoteca</h3>

<div class="bg-green-50 p-6 rounded-lg my-6">
  <h4 class="font-bold text-green-900">Situación</h4>
  <p class="text-green-800 mb-4">Juan, 35 años, soltero, salario de 45.000€, hipoteca de vivienda habitual adquirida en 2010.</p>
  
  <h4 class="font-bold text-green-900">Datos Fiscales</h4>
  <ul class="text-green-800 space-y-2">
    <li>• Salario bruto: 45.000€</li>
    <li>• Retenciones IRPF: 7.200€</li>
    <li>• Intereses hipoteca: 3.500€</li>
    <li>• Amortización capital: 2.800€</li>
  </ul>
  
  <div class="bg-white p-4 rounded border mt-4">
    <h4 class="font-bold text-green-900">Resultado</h4>
    <p class="text-green-800 mb-2">Deducción por vivienda: (3.500€ + 2.800€) × 15% = <strong>945€</strong></p>
    <p class="text-2xl font-bold text-green-600">Devolución estimada: 1.200€</p>
  </div>
</div>

<h3>Caso 2: Familia con Dos Hijos y Gastos de Guardería</h3>

<div class="bg-blue-50 p-6 rounded-lg my-6">
  <h4 class="font-bold text-blue-900">Situación</h4>
  <p class="text-blue-800 mb-4">Matrimonio, dos hijos (3 y 6 años), ingresos conjuntos 55.000€, gastos de guardería 2.400€, residentes en Madrid.</p>
  
  <h4 class="font-bold text-blue-900">Optimización Fiscal</h4>
  <ul class="text-blue-800 space-y-2">
    <li>• Mínimos por descendientes: 5.100€</li>
    <li>• Deducción guardería Madrid: 360€</li>
    <li>• Tributación conjunta vs individual</li>
  </ul>
  
  <div class="bg-white p-4 rounded border mt-4">
    <h4 class="font-bold text-blue-900">Ahorro Total</h4>
    <p class="text-2xl font-bold text-blue-600">2.890€ menos de IRPF</p>
  </div>
</div>

<h2 id="errores-comunes-evitar">❌ Errores Comunes que Debes Evitar</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div class="bg-red-50 p-4 rounded-lg border border-red-200">
    <h4 class="font-bold text-red-900">🚫 Error #1: No Revisar el Borrador</h4>
    <p class="text-red-800 text-sm">Muchos contribuyentes confirman el borrador sin revisarlo, perdiendo deducciones importantes.</p>
  </div>

  <div class="bg-red-50 p-4 rounded-lg border border-red-200">
    <h4 class="font-bold text-red-900">🚫 Error #2: Olvidar Gastos Deducibles</h4>
    <p class="text-red-800 text-sm">No incluir donativos, gastos de guardería o inversiones en eficiencia energética.</p>
  </div>

  <div class="bg-red-50 p-4 rounded-lg border border-red-200">
    <h4 class="font-bold text-red-900">🚫 Error #3: No Evaluar Tributación Conjunta</h4>
    <p class="text-red-800 text-sm">En matrimonios, no comparar si es mejor tributar conjunta o individualmente.</p>
  </div>

  <div class="bg-red-50 p-4 rounded-lg border border-red-200">
    <h4 class="font-bold text-red-900">🚫 Error #4: Perder Plazos</h4>
    <p class="text-red-800 text-sm">Presentar fuera de plazo conlleva recargos e intereses de demora.</p>
  </div>
</div>

<h2 id="estrategias-maximizar-devolucion">💡 Estrategias para Maximizar tu Devolución</h2>

<h3>1. Planificación Anual</h3>

<p>No esperes a abril para pensar en tu declaración. Durante el año:</p>

<ul>
  <li>Concentra gastos deducibles en un ejercicio</li>
  <li>Planifica aportaciones a planes de pensiones</li>
  <li>Documenta todos los gastos deducibles</li>
</ul>

<h3>2. Optimización Familiar</h3>

<p>En familias con varios perceptores de rentas:</p>

<ul>
  <li>Evalúa tributación conjunta vs individual</li>
  <li>Distribuye gastos deducibles entre cónyuges</li>
  <li>Aprovecha al máximo los mínimos familiares</li>
</ul>

<h3>3. Deducciones Autonómicas</h3>

<p>No olvides las deducciones específicas de tu comunidad autónoma:</p>

<ul>
  <li>Gastos de guardería y educación</li>
  <li>Alquiler de vivienda para jóvenes</li>
  <li>Inversiones empresariales</li>
  <li>Donaciones adicionales</li>
</ul>

<h2 id="que-hacer-despues-presentar">📤 Qué Hacer Después de Presentar</h2>

<h3>Si Te Sale a Pagar</h3>

<p>Tienes varias opciones de pago:</p>

<ul>
  <li><strong>Pago único:</strong> Hasta el 1 de julio</li>
  <li><strong>Fraccionado:</strong> 60% hasta el 1 de julio, 40% hasta el 5 de noviembre</li>
  <li><strong>Domiciliación:</strong> Automática en tu cuenta bancaria</li>
</ul>

<h3>Si Te Sale a Devolver</h3>

<p>La devolución llegará en un plazo máximo de 6 meses, aunque normalmente es mucho antes:</p>

<ul>
  <li>Declaraciones presentadas en abril-mayo: devolución en junio-julio</li>
  <li>Declaraciones presentadas en junio: devolución en agosto-septiembre</li>
  <li>Puedes consultar el estado en la web de la AEAT</li>
</ul>

<h2 id="preguntas-frecuentes">❓ Preguntas Frecuentes</h2>

<div class="space-y-4 my-6">
  <div class="bg-gray-50 p-4 rounded-lg border">
    <h4 class="font-bold text-gray-900 mb-2">¿Puedo modificar mi declaración después de presentarla?</h4>
    <p class="text-gray-800 text-sm">Sí, puedes presentar una declaración complementaria si descubres errores u omisiones que resulten en mayor cuota o menor devolución.</p>
  </div>

  <div class="bg-gray-50 p-4 rounded-lg border">
    <h4 class="font-bold text-gray-900 mb-2">¿Qué pasa si no presento la declaración siendo obligatorio?</h4>
    <p class="text-gray-800 text-sm">Hacienda puede imponerte una sanción del 50% al 150% de la cuota no ingresada, además de intereses de demora.</p>
  </div>

  <div class="bg-gray-50 p-4 rounded-lg border">
    <h4 class="font-bold text-gray-900 mb-2">¿Puedo deducir gastos de años anteriores?</h4>
    <p class="text-gray-800 text-sm">Generalmente no, salvo excepciones como la deducción por vivienda habitual o algunas deducciones autonómicas específicas.</p>
  </div>

  <div class="bg-gray-50 p-4 rounded-lg border">
    <h4 class="font-bold text-gray-900 mb-2">¿Es mejor hacer la declaración online o presencial?</h4>
    <p class="text-gray-800 text-sm">Online es más rápido y cómodo. Solo acude presencialmente si tienes dudas específicas o tu caso es muy complejo.</p>
  </div>
</div>

<h2 id="conclusion-recomendaciones">🎯 Conclusión y Recomendaciones</h2>

<p>La declaración de la renta 2025 presenta oportunidades importantes de ahorro fiscal si sabes aprovecharlas. La clave está en la planificación, la documentación adecuada y conocer todas las deducciones disponibles.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
  <h3 class="font-bold text-blue-900">🔗 Herramientas Útiles</h3>
  <p class="text-blue-800 mb-4">Para preparar tu declaración, utiliza nuestras calculadoras:</p>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-blue-700 text-sm">📊 Calculadora IRPF</p>
      <p class="text-blue-800 text-xs"><a href="/calculadora-irpf" class="hover:underline">Simula tu declaración</a></p>
    </div>
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-blue-700 text-sm">💰 Bruto-Neto</p>
      <p class="text-blue-800 text-xs"><a href="/conversor-salario-bruto-neto" class="hover:underline">Calcula retenciones</a></p>
    </div>
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-blue-700 text-sm">📚 Más información</p>
      <p class="text-blue-800 text-xs"><a href="/blog/tramos-irpf-2025" class="hover:underline">Tramos IRPF 2025</a></p>
    </div>
  </div>
</div>
`,
    image: "/placeholder.svg?height=400&width=800&text=Declaración+Renta+2025",
    category: "IRPF",
    tags: ["Declaración Renta", "IRPF", "2025", "Hacienda"],
    date: "2025-01-24",
    readTime: "14 min",
    author: {
      name: "Equipo Calculord",
      avatar: "/placeholder.svg?height=40&width=40&text=EC",
    },
    toc: [
      { id: "novedades-declaracion-renta-2025", text: "Novedades 2025", icon: "new" },
      { id: "quien-debe-hacer-declaracion", text: "¿Quién Debe Declarar?", icon: "user" },
      { id: "como-hacer-declaracion-paso-paso", text: "Cómo Hacer la Declaración", icon: "steps" },
      { id: "casos-practicos-declaracion", text: "Casos Prácticos", icon: "example" },
      { id: "errores-comunes-evitar", text: "Errores Comunes", icon: "error" },
      { id: "estrategias-maximizar-devolucion", text: "Maximizar Devolución", icon: "strategy" },
    ],
    keyData: {
      "Inicio Campaña": "3 abril",
      "Fin Campaña": "1 julio",
      "Límite Trabajo": "22.000€",
      "Límite Capital": "1.600€",
      "Deducción Vivienda": "15%",
    },
  },
}
