import type { BlogPost, BlogCategory, PopularCalculator } from "@/types/blog"

export const blogCategories: BlogCategory[] = [
  { name: "Normativa", count: 2 },
  { name: "IRPF", count: 16 }, // Incrementado de 8 a 16 con los nuevos artículos
  { name: "Cotizaciones", count: 1 },
  { name: "Guías Prácticas", count: 5 },
  { name: "Derecho Laboral", count: 2 },
  { name: "Jubilados", count: 2 },
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
    categories: ["Normativa"],
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
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
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
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="m9 10 2 2 4-4"></path></svg>
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
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"></path></svg>
    ¿Quieres Calcular tu Caso Específico?
  </h3>
  <p class="text-orange-800 mt-2">Utiliza nuestra <a href="/calculadora-irpf" class="text-blue-600 hover:underline font-semibold">Calculadora de IRPF 2025</a> para obtener un cálculo personalizado con tu salario y situación familiar.</p>
</div>

<h2 id="novedades-irpf-2025">🆕 Novedades Clave para 2025</h2>

<p>El ejercicio 2025 trae varias novedades importantes que afectan directamente a tu bolsillo:</p>

<div class="space-y-6 my-6">
  <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
    <h3 class="font-bold text-blue-900 mb-4 flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-trending-up"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"></polyline><polyline points="16,7 22,7 22,13"></polyline></svg>
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
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"></circle><path d="M15 9l-6 6"></path><path d="M9 9l6 6"></path></svg>
      Error #1: Malentender los Tramos
    </h4>
    <p class="text-red-800 text-sm mb-2"><strong>Error:</strong> "Gano 30.000€, así que pago el 30% de todo = 9.000€"</p>
    <p class="text-red-800 text-sm"><strong>Realidad:</strong> Pagas 19% sobre los primeros 12.450€, 24% sobre los siguientes 7.750€, y 30% solo sobre el resto.</p>
  </div>

  <div class="bg-red-50 p-4 rounded-lg border border-red-200">
    <h4 class="font-bold text-red-900 flex items-center gap-2 mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"></circle><path d="M15 9l-6 6"></path><path d="M9 9l6 6"></path></svg>
      Error #2: No Considerar Reducciones
    </h4>
    <p class="text-red-800 text-sm mb-2"><strong>Error:</strong> Calcular el IRPF sobre el salario bruto</p>
    <p class="text-red-800 text-sm"><strong>Realidad:</strong> Primero se restan las cotizaciones sociales y otras reducciones</p>
  </div>
</div>

<h2 id="conclusion-recomendaciones">🎯 Conclusión y Recomendaciones</h2>

<p>Entender los tramos del IRPF es fundamental para planificar tus finanzas personales y optimizar tu carga fiscal.</p>

<div class="bg-blue-50 p-6 rounded-lg my-8">
  <h3 class="font-bold text-blue-900">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="m9 10 2 2 4-4"></path></svg>
    ¿Necesitas Calcular tu IRPF?
  </h3>
  <p class="text-blue-800 mb-4">Utiliza nuestra <a href='/calculadora-irpf' class='text-blue-600 hover:underline font-semibold'>Calculadora de IRPF 2025</a> actualizada con todos los tramos y deducciones. Es gratuita y te dará una estimación precisa de tu situación fiscal.</p>
</div>
`,
    image: "/placeholder.svg?height=400&width=800&text=Tramos+IRPF+2025",
    categories: ["IRPF"],
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
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-piggy-bank"><path d="M19 5c-1.5 0-2.8 1.1-3 2.5l-.1.5c-.1.6-.4 1.2-.9 1.6L12 12l3 1 .5-2.5c.2-1.4 1.5-2.5 3-2.5 1.7 0 3 1.3 3 3s-1.3 3-3 3c-.4 0-.8-.1-1.1-.3L15 16.5c-.6.9-1.5 1.5-2.5 1.5s-1.9-.6-2.5-1.5L8 14l-3-1 2-2.5c.5-.4.8-1 .9-1.6l.1-.5c.2-1.4 1.5-2.5 3-2.5z"></path><path d="M2 12h2"></path><path d="M22 12h-2"></path><path d="M12 2v2"></path><path d="M12 20v2"></path></svg>
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
    <p class="text-red-800 text-sm mb-2"><strong>Error:</strong> Superar los límites máximos sin saberlo.</p>
    <p class="text-red-800 text-sm"><strong>Solución:</strong> Controla los importes durante el año para optimizar el beneficio.</p>
  </div>

  <div class="bg-red-50 p-4 rounded-lg border border-red-200">
    <h4 class="font-bold text-red-900 mb-3">🚫 Error #4: Declaración Conjunta vs Individual</h4>
    <p class="text-red-800 text-sm mb-2"><strong>Error:</strong> No evaluar qué modalidad es más beneficiosa.</p>
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

<h2 id="conclusion-recomendaciones">🎯 Conclusión y Recomendaciones</h2>

<p>La declaración de la renta 2025 presenta oportunidades importantes de ahorro fiscal si sabes aprovecharlas. La clave está en la planificación, la documentación adecuada y conocer todas las deducciones disponibles.</p>

<div class="bg-blue-50 p-6 rounded-lg my-8">
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
    image: "/placeholder.svg?height=400&width=800&text=Deducciones+IRPF+2025",
    categories: ["IRPF"],
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
- <strong>Total cuota íntegra: 7.945,50€</strong>

<strong>Paso 4: Deducciones</strong>
- Deducción por hijo: 1.200€
- <strong>Cuota líquida: 6.745,50€</strong>

<strong>Paso 5: Resultado</strong>
6.745,50€ - 4.200€ (retenciones) = <strong>2.545,50€ a pagar</strong>

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
1. <strong>No considerar todas las rentas</strong>
2. <strong>Olvidar deducciones aplicables</strong>
3. <strong>Confundir base imponible con base liquidable</strong>
4. <strong>No actualizar los tramos de IRPF</strong>
5. <strong>Ignorar la normativa autonómica</strong>

La correcta comprensión del cálculo del IRPF te permitirá optimizar tu carga fiscal y evitar sorpresas en la declaración de la renta.`,
    date: "2025-01-10",
    readTime: "8 min",
    categories: ["IRPF"],
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
<p>Los <strong>mínimos personales y familiares</strong> son una de las herramientas más importantes para reducir tu carga fiscal, pero también una de las más desconocidas. Estos mínimos garantizan que una parte de tus ingresos quede libre de tributación, reconociendo los gastos básicos de subsistencia personal y familiar.</p>

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
    <p class="text-2xl font-bold text-green-600">8.100€</p>
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

<h2 id="ejemplos-practicos-calculo">Ejemplos Prácticos de Cálculo</h2>

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

<div class="bg-blue-50 p-6 rounded-lg my-8">
  <h3 class="font-bold text-blue-900">🔗 Recursos Relacionados</h3>
  <p class="text-blue-800">Para calcular el impacto real en tu caso específico, utiliza nuestra <a href="/calculadora-irpf" class="text-blue-600 hover:underline">Calculadora de IRPF 2025</a>. También puedes consultar nuestras guías sobre <a href="/blog/tramos-irpf-2025" class="text-blue-600 hover:underline">tramos del IRPF</a> y <a href="/blog/deducciones-irpf-2025" class="text-blue-600 hover:underline">deducciones disponibles</a>.</p>
</div>
`,
    image: "/placeholder.svg?height=400&width=800&text=Mínimos+Personales+Familiares+IRPF+2025",
    categories: ["IRPF"],
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

<h2 id="novedades-declaracion-renta-2025">🆕 Principales Novedades 2024</h2>

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

<h2 id="como-hacer-declaracion-paso-a-paso">📝 Cómo Hacer la Declaración Paso a Paso</h2>

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
    <p class="text-red-800 text-sm">En familias con varios perceptores de rentas, no comparar si es mejor tributar conjunta o individualmente.</p>
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

<p>La devolución llegará en un plazo máximo de 6 meses, aunque normally es mucho antes:</p>

<ul>
  <li>Declaraciones presentadas en abril-mayo: devolución en junio-julio</li>
  <li>Declaraciones presentadas en junio: devolución en agosto-septiembre</li>
  <li>Puedes consultar el estado en la web de la AEAT</li>
</ul>

<h2 id="preguntas-frecuentes">Preguntas Frecuentes</h2>

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

<div class="bg-blue-50 p-6 rounded-lg my-8">
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
    categories: ["IRPF"],
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
      { id: "como-hacer-declaracion-paso-a-paso", text: "Cómo Hacer la Declaración", icon: "steps" },
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
  "minimos-personales-familiares-irpf-2025": {
    slug: "minimos-personales-familiares-irpf-2025",
    title: "Mínimos Personales y Familiares IRPF 2025: Guía Completa para Reducir tu Impuesto",
    excerpt:
      "Descubre cómo los mínimos personales y familiares del IRPF 2025 pueden reducir significativamente tu carga fiscal. Guía completa con importes actualizados, ejemplos prácticos y estrategias de optimización.",
    content: `
<p>Los <strong>mínimos personales y familiares</strong> son una de las herramientas más importantes para reducir tu carga fiscal, pero también una de las más desconocidas. Estos mínimos garantizan que una parte de tus ingresos quede libre de tributación, reconociendo los gastos básicos de subsistencia personal y familiar.</p>

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
    <p class="text-2xl font-bold text-green-600">8.100€</p>
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

<h2 id="ejemplos-practicos-calculo">Ejemplos Prácticos de Cálculo</h2>

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

<div class="bg-blue-50 p-6 rounded-lg my-8">
  <h3 class="font-bold text-blue-900">🔗 Recursos Relacionados</h3>
  <p class="text-blue-800">Para calcular el impacto real en tu caso específico, utiliza nuestra <a href="/calculadora-irpf" class="text-blue-600 hover:underline">Calculadora de IRPF 2025</a>. También puedes consultar nuestras guías sobre <a href="/blog/tramos-irpf-2025" class="text-blue-600 hover:underline">tramos del IRPF</a> y <a href="/blog/deducciones-irpf-2025" class="text-blue-600 hover:underline">deducciones disponibles</a>.</p>
</div>
`,
    image: "/placeholder.svg?height=400&width=800&text=Mínimos+Personales+Familiares+IRPF+2025",
    categories: ["IRPF"],
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

<h2 id="novedades-declaracion-renta-2025">🆕 Principales Novedades 2024</h2>

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

<h2 id="como-hacer-declaracion-paso-a-paso">📝 Cómo Hacer la Declaración Paso a Paso</h2>

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
    <p class="text-red-800 text-sm">En familias con varios perceptores de rentas, no comparar si es mejor tributar conjunta o individualmente.</p>
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

<p>La devolución llegará en un plazo máximo de 6 meses, aunque normally es mucho antes:</p>

<ul>
  <li>Declaraciones presentadas en abril-mayo: devolución en junio-julio</li>
  <li>Declaraciones presentadas en junio: devolución en agosto-septiembre</li>
  <li>Puedes consultar el estado en la web de la AEAT</li>
</ul>

<h2 id="preguntas-frecuentes">Preguntas Frecuentes</h2>

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

<div class="bg-blue-50 p-6 rounded-lg my-8">
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
    categories: ["IRPF"],
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
      { id: "como-hacer-declaracion-paso-a-paso", text: "Cómo Hacer la Declaración", icon: "steps" },
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
  "minimos-personales-familiares-irpf-2025": {
    slug: "minimos-personales-familiares-irpf-2025",
    title: "Mínimos Personales y Familiares IRPF 2025: Guía Completa para Reducir tu Impuesto",
    excerpt:
      "Descubre cómo los mínimos personales y familiares del IRPF 2025 pueden reducir significativamente tu carga fiscal. Guía completa con importes actualizados, ejemplos prácticos y estrategias de optimización.",
    content: `
<p>Los <strong>mínimos personales y familiares</strong> son una de las herramientas más importantes para reducir tu carga fiscal, pero también una de las más desconocidas. Estos mínimos garantizan que una parte de tus ingresos quede libre de tributación, reconociendo los gastos básicos de subsistencia personal y familiar.</p>

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
    <p class="text-2xl font-bold text-green-600">8.100€</p>
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

<h2 id="ejemplos-practicos-calculo">Ejemplos Prácticos de Cálculo</h2>

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

<div class="bg-blue-50 p-6 rounded-lg my-8">
  <h3 class="font-bold text-blue-900">🔗 Recursos Relacionados</h3>
  <p class="text-blue-800">Para calcular el impacto real en tu caso específico, utiliza nuestra <a href="/calculadora-irpf" class="text-blue-600 hover:underline">Calculadora de IRPF 2025</a>. También puedes consultar nuestras guías sobre <a href="/blog/tramos-irpf-2025" class="text-blue-600 hover:underline">tramos del IRPF</a> y <a href="/blog/deducciones-irpf-2025" class="text-blue-600 hover:underline">deducciones disponibles</a>.</p>
</div>
`,
    image: "/placeholder.svg?height=400&width=800&text=Mínimos+Personales+Familiares+IRPF+2025",
    categories: ["IRPF"],
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

<h2 id="novedades-declaracion-renta-2025">🆕 Principales Novedades 2024</h2>

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

<h2 id="como-hacer-declaracion-paso-a-paso">📝 Cómo Hacer la Declaración Paso a Paso</h2>

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
    <p class="text-red-800 text-sm">En familias con varios perceptores de rentas, no comparar si es mejor tributar conjunta o individualmente.</p>
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

<p>La devolución llegará en un plazo máximo de 6 meses, aunque normally es mucho antes:</p>

<ul>
  <li>Declaraciones presentadas en abril-mayo: devolución en junio-julio</li>
  <li>Declaraciones presentadas en junio: devolución en agosto-septiembre</li>
  <li>Puedes consultar el estado en la web de la AEAT</li>
</ul>

<h2 id="preguntas-frecuentes">Preguntas Frecuentes</h2>

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

<div class="bg-blue-50 p-6 rounded-lg my-8">
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
    categories: ["IRPF"],
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
      { id: "como-hacer-declaracion-paso-a-paso", text: "Cómo Hacer la Declaración", icon: "steps" },
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
  "cotizaciones-seguridad-social-2025": {
    slug: "cotizaciones-seguridad-social-2025",
    title: "Cotizaciones a la Seguridad Social 2025: Guía Completa con Nuevos Tipos y Bases",
    excerpt:
      "Todo sobre las cotizaciones a la Seguridad Social en 2025. Nuevas bases de cotización, tipos actualizados, ejemplos prácticos y cómo afectan a tu nómina y a las empresas.",
    content: `
<p>Las <strong>cotizaciones a la Seguridad Social</strong> son uno de los elementos más importantes de tu nómina y del coste laboral para las empresas. En 2025 se han producido cambios significativos en las bases de cotización y algunos tipos que debes conocer para entender correctamente tu nómina y planificar los costes laborales.</p>

<p>En esta guía completa te explicamos todo sobre las cotizaciones 2025: qué son, cómo se calculan, las novedades del año, ejemplos prácticos y cómo afectan tanto a trabajadores como a empresas.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
  <h3 class="font-bold text-blue-900">📊 Datos Clave Cotizaciones 2025</h3>
  <p class="text-blue-800"><strong>Base mínima:</strong> 1.323€/mes • <strong>Base máxima:</strong> 4.720,50€/mes • <strong>Cotización total trabajador:</strong> 6,35% • <strong>Cotización total empresa:</strong> 29,90% • <strong>Incremento bases:</strong> +4,6% respecto 2024</p>
</div>

<h2 id="que-son-cotizaciones-seguridad-social">📋 ¿Qué son las Cotizaciones a la Seguridad Social?</h2>

<p>Las cotizaciones a la Seguridad Social son las aportaciones obligatorias que realizan trabajadores y empresas para financiar el sistema de protección social español. Estas cotizaciones dan derecho a prestaciones como:</p>

<ul>
  <li><strong>Pensión de jubilación:</strong> Cuando llegues a la edad de retiro</li>
  <li><strong>Prestación por desempleo:</strong> Si pierdes tu trabajo</li>
  <li><strong>Incapacidad temporal:</strong> Durante bajas médicas</li>
  <li><strong>Asistencia sanitaria:</strong> Cobertura médica universal</li>
  <li><strong>Prestaciones familiares:</strong> Ayudas por hijo a cargo</li>
</ul>

<h2 id="bases-cotizacion-2025">💰 Bases de Cotización 2025</h2>

<p>Las bases de cotización son los importes sobre los que se calculan las cotizaciones. Para 2025 se han actualizado significativamente:</p>

<div class="bg-green-50 p-6 rounded-lg my-6">
  <h3 class="font-bold text-green-900 mb-4">Bases de Cotización Actualizadas</h3>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-green-700 mb-3">Base Mínima</h4>
      <p class="text-3xl font-bold text-green-600 mb-2">1.323€</p>
      <p class="text-sm text-green-800">+4,6% vs 2024 (1.260€)</p>
      <p class="text-xs text-gray-600 mt-2">Aplicable a salarios desde el SMI</p>
    </div>
    
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-green-700 mb-3">Base Máxima</h4>
      <p class="text-3xl font-bold text-green-600 mb-2">4.720,50€</p>
      <p class="text-sm text-green-800">+4,6% vs 2024 (4.495,50€)</p>
      <p class="text-xs text-gray-600 mt-2">Tope máximo de cotización mensual</p>
    </div>
  </div>
  
  <div class="mt-4 bg-white p-4 rounded border">
    <h4 class="font-bold text-green-700">📈 Evolución Histórica</h4>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
      <div>
        <p class="font-bold text-gray-700">2022</p>
        <p class="text-gray-600">1.166,70€ - 4.139,40€</p>
      </div>
      <div>
        <p class="font-bold text-gray-700">2023</p>
        <p class="text-gray-600">1.260€ - 4.495,50€</p>
      </div>
      <div>
        <p class="font-bold text-gray-700">2024</p>
        <p class="text-gray-600">1.260€ - 4.495,50€</p>
      </div>
      <div>
        <p class="font-bold text-blue-700">2025</p>
        <p class="text-blue-600">1.323€ - 4.720,50€</p>
      </div>
    </div>
  </div>
</div>

<h2 id="tipos-cotizacion-2025">📊 Tipos de Cotización 2025</h2>

<p>Los tipos de cotización se dividen entre lo que paga el trabajador y lo que paga la empresa:</p>

<h3>Cotizaciones del Trabajador (6,35% total)</h3>

<div class="bg-blue-50 p-6 rounded-lg my-6">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-blue-700 text-sm">Contingencias Comunes</h4>
      <p class="text-2xl font-bold text-blue-600">4,70%</p>
      <p class="text-xs text-gray-600">Jubilación, incapacidad, muerte</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-blue-700 text-sm">Desempleo</h4>
      <p class="text-2xl font-bold text-blue-600">1,55%</p>
      <p class="text-xs text-gray-600">Prestación por desempleo</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-blue-700 text-sm">Formación Profesional</h4>
      <p class="text-2xl font-bold text-blue-600">0,10%</p>
      <p class="text-xs text-gray-600">Cursos y reciclaje</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-blue-700 text-sm">Total Trabajador</h4>
      <p class="text-2xl font-bold text-blue-600">6,35%</p>
      <p class="text-xs text-gray-600">Se descuenta de tu nómina</p>
    </div>
  </div>
</div>

<h3>Cotizaciones de la Empresa (29,90% total)</h3>

<div class="bg-red-50 p-6 rounded-lg my-6">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-red-700 text-sm">Contingencias Comunes</h4>
      <p class="text-xl font-bold text-red-600">23,60%</p>
      <p class="text-xs text-gray-600">Jubilación, incapacidad, muerte</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-red-700 text-sm">Accidentes y Enf. Prof.</h4>
      <p class="text-xl font-bold text-red-600">Variable</p>
      <p class="text-xs text-gray-600">Según actividad (0,5% - 6%)</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-red-700 text-sm">Desempleo</h4>
      <p class="text-xl font-bold text-red-600">5,50%</p>
      <p class="text-xs text-gray-600">Prestación por desempleo</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-red-700 text-sm">Formación Profesional</h4>
      <p class="text-xl font-bold text-red-600">0,60%</p>
      <p class="text-xs text-gray-600">Cursos y reciclaje</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-red-700 text-sm">FOGASA</h4>
      <p class="text-xl font-bold text-red-600">0,20%</p>
      <p class="text-xs text-gray-600">Garantía salarial</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-red-700 text-sm">Total Empresa</h4>
      <p class="text-xl font-bold text-red-600">≈29,90%</p>
      <p class="text-xs text-gray-600">Coste adicional al salario</p>
    </div>
  </div>
</div>

<h2 id="ejemplos-practicos-calculo">🧮 Ejemplos Prácticos de Cálculo</h2>

<h3>Ejemplo 1: Salario de 2.000€ Brutos</h3>

<div class="bg-yellow-50 p-6 rounded-lg my-6 border border-yellow-200">
  <h4 class="font-bold text-yellow-900 mb-4">💼 Situación</h4>
  <p class="text-yellow-800 mb-4">Trabajador con contrato indefinido, salario bruto de 2.000€ mensuales, grupo de cotización 1 (ingenieros y licenciados).</p>
  
  <h4 class="font-bold text-yellow-900 mb-4">📊 Cálculo de Cotizaciones</h4>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-white p-4 rounded border">
      <h5 class="font-bold text-yellow-700 mb-3">👤 Cotizaciones del Trabajador</h5>
      <ul class="text-yellow-800 text-sm space-y-2">
        <li>• Base de cotización: 2.000€</li>
        <li>• Contingencias comunes: 2.000€ × 4,70% = <strong>94€</strong></li>
        <li>• Desempleo: 2.000€ × 1,55% = <strong>31€</strong></li>
        <li>• Formación: 2.000€ × 0,10% = <strong>2€</strong></li>
        <li class="border-t pt-2 font-bold">• Total trabajador: <strong>127€</strong></li>
      </ul>
    </div>
    
    <div class="bg-white p-4 rounded border">
      <h5 class="font-bold text-yellow-700 mb-3">🏢 Cotizaciones de la Empresa</h5>
      <ul class="text-yellow-800 text-sm space-y-2">
        <li>• Base de cotización: 2.000€</li>
        <li>• Contingencias comunes: 2.000€ × 23,60% = <strong>472€</strong></li>
        <li>• AT y EP: 2.000€ × 1,00% = <strong>20€</strong></li>
        <li>• Desempleo: 2.000€ × 5,50% = <strong>110€</strong></li>
        <li>• Formación: 2.000€ × 0,60% = <strong>12€</strong></li>
        <li>• FOGASA: 2.000€ × 0,20% = <strong>4€</strong></li>
        <li class="border-t pt-2 font-bold">• Total empresa: <strong>618€</strong></li>
      </ul>
    </div>
  </div>
  
  <div class="mt-6 bg-green-100 p-4 rounded border-2 border-green-300">
    <h4 class="font-bold text-green-900 text-center mb-2">💰 Resumen Final</h4>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
      <div>
        <p class="text-green-800 font-bold">Salario Neto</p>
        <p class="text-2xl font-bold text-green-700">1.873€</p>
        <p class="text-xs text-gray-600">2.000€ - 127€ cotizaciones</p>
      </div>
      <div>
        <p class="text-green-800 font-bold">Coste Total Empresa</p>
        <p class="text-2xl font-bold text-green-700">2.618€</p>
        <p class="text-xs text-gray-600">2.000€ + 618€ cotizaciones</p>
      </div>
      <div>
        <p class="text-green-800 font-bold">Total Cotizaciones</p>
        <p class="text-2xl font-bold text-green-700">745€</p>
        <p class="text-xs text-gray-600">127€ + 618€</p>
      </div>
    </div>
  </div>
</div>

<h3>Ejemplo 2: Salario en Base Máxima</h3>

<div class="bg-purple-50 p-6 rounded-lg my-6 border border-purple-200">
  <h4 class="font-bold text-purple-900 mb-4">💼 Situación</h4>
  <p class="text-purple-800 mb-4">Directivo con salario bruto de 6.000€ mensuales. Al superar la base máxima, solo cotiza por 4.720,50€.</p>
  
  <h4 class="font-bold text-purple-900 mb-4">📊 Cálculo de Cotizaciones</h4>
  
  <div class="bg-white p-4 rounded border">
    <h5 class="font-bold text-purple-700 mb-3">🔢 Aplicación del Tope Máximo</h5>
    <ul class="text-purple-800 text-sm space-y-2">
      <li>• Salario bruto: 6.000€</li>
      <li>• Base de cotización aplicable: <strong>4.720,50€</strong> (tope máximo)</li>
      <li>• Cotización trabajador: 4.720,50€ × 6,35% = <strong>299,75€</strong></li>
      <li>• Cotización empresa: 4.720,50€ × 29,90% = <strong>1.411,43€</strong></li>
    </ul>
  </div>
  
  <div class="mt-4 bg-white p-4 rounded border">
    <h5 class="font-bold text-purple-700 mb-3">💡 Implicaciones</h5>
    <ul class="text-purple-800 text-sm space-y-2">
      <li>• El trabajador "ahorra" en cotizaciones por la parte que supera el tope</li>
      <li>• La empresa también reduce costes en la parte que excede la base máxima</li>
      <li>• Las prestaciones futuras se calcularán sobre la base máxima, no sobre el salario real</li>
    </ul>
  </div>
</div>

<h2 id="novedades-cotizaciones-2025">🆕 Novedades 2025</h2>

<h3>1. Incremento de las Bases de Cotización</h3>

<p>El aumento del 4,6% en las bases de cotización es el más significativo de los últimos años:</p>

<div class="bg-blue-50 p-4 rounded-lg my-6">
  <h4 class="font-bold text-blue-900 mb-3">📈 Impacto del Incremento</h4>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-blue-700 text-sm">Para Trabajadores</p>
      <p class="text-blue-800 text-sm">Mayor descuento en nómina, pero también mayores derechos futuros</p>
    </div>
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-blue-700 text-sm">Para Empresas</p>
      <p class="text-blue-800 text-sm">Incremento del coste laboral del 4,6% en cotizaciones</p>
    </div>
  </div>
</div>

<h3>2. Nuevos Grupos de Cotización</h3>

<p>Se mantiene la estructura de grupos de cotización, pero con algunas actualizaciones en las bases mínimas por grupo:</p>

<div class="bg-gray-50 p-4 rounded-lg my-6">
  <div class="overflow-x-auto">
    <table class="w-full border-collapse border border-gray-300 text-sm">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 p-2 text-left">Grupo</th>
          <th class="border border-gray-300 p-2 text-left">Categoría</th>
          <th class="border border-gray-300 p-2 text-center">Base Mínima 2025</th>
          <th class="border border-gray-300 p-2 text-center">Incremento</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-2 font-bold">1</td>
          <td class="border border-gray-300 p-2">Ingenieros y Licenciados</td>
          <td class="border border-gray-300 p-2 text-center">1.323,00€</td>
          <td class="border border-gray-300 p-2 text-center text-green-600">+4,6%</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-2 font-bold">2</td>
          <td class="border border-gray-300 p-2">Ingenieros Técnicos</td>
          <td class="border border-gray-300 p-2 text-center">1.323,00€</td>
          <td class="border border-gray-300 p-2 text-center text-green-600">+4,6%</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2 font-bold">3</td>
          <td class="border border-gray-300 p-2">Jefes Administrativos</td>
          <td class="border border-gray-300 p-2 text-center">1.323,00€</td>
          <td class="border border-gray-300 p-2 text-center text-green-600">+4,6%</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-2 font-bold">4</td>
          <td class="border border-gray-300 p-2">Ayudantes no Titulados</td>
          <td class="border border-gray-300 p-2 text-center">1.323,00€</td>
          <td class="border border-gray-300 p-2 text-center text-green-600">+4,6%</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2 font-bold">5</td>
          <td class="border border-gray-300 p-2">Oficiales Administrativos</td>
          <td class="border border-gray-300 p-2 text-center">1.323,00€</td>
          <td class="border border-gray-300 p-2 text-center text-green-600">+4,6%</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-2 font-bold">6</td>
          <td class="border border-gray-300 p-2">Subalternos</td>
          <td class="border border-gray-300 p-2 text-center">1.323,00€</td>
          <td class="border border-gray-300 p-2 text-center text-green-600">+4,6%</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2 font-bold">7</td>
          <td class="border border-gray-300 p-2">Auxiliares Administrativos</td>
          <td class="border border-gray-300 p-2 text-center">1.323,00€</td>
          <td class="border border-gray-300 p-2 text-center text-green-600">+4,6%</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<h2 id="como-afectan-cotizaciones-nomina">💼 Cómo Afectan las Cotizaciones a tu Nómina</h2>

<h3>Descuentos en tu Nómina</h3>

<p>Las cotizaciones del trabajador se descuentan directamente de tu salario bruto:</p>

<div class="bg-yellow-50 p-4 rounded-lg my-6">
  <h4 class="font-bold text-yellow-900 mb-3">📋 Estructura de una Nómina</h4>
  <div class="bg-white p-4 rounded border">
    <ul class="text-yellow-800 space-y-2 text-sm">
      <li>• <strong>Salario Bruto:</strong> Lo que figura en tu contrato</li>
      <li>• <strong>- Cotizaciones SS (6,35%):</strong> Tu aportación obligatoria</li>
      <li>• <strong>- Retención IRPF:</strong> Anticipo del impuesto sobre la renta</li>
      <li>• <strong>= Salario Neto:</strong> Lo que recibes en tu cuenta</li>
    </ul>
  </div>
</div>

<h3>Derechos que Generas</h3>

<p>Tus cotizaciones te dan derecho a:</p>

<ul>
  <li><strong>Pensión de jubilación:</strong> Calculada sobre tus bases de cotización</li>
  <li><strong>Prestación por desempleo:</strong> Entre el 50% y 70% de tu base reguladora</li>
  <li><strong>Incapacidad temporal:</strong> 60% desde el 4º día, 75% desde el 21º día</li>
  <li><strong>Asistencia sanitaria:</strong> Cobertura médica completa</li>
</ul>

<h2 id="cotizaciones-empresas-coste-laboral">🏢 Cotizaciones para Empresas: El Coste Laboral Real</h2>

<p>Para las empresas, las cotizaciones representan un coste adicional significativo sobre el salario bruto:</p>

<div class="bg-red-50 p-6 rounded-lg my-6">
  <h3 class="font-bold text-red-900 mb-4">💰 Coste Total de un Empleado</h3>
  
  <div class="bg-white p-4 rounded border">
    <h4 class="font-bold text-red-700 mb-3">Ejemplo: Salario de 3.000€</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h5 class="font-bold text-gray-700 text-sm mb-2">Costes Directos</h5>
        <ul class="text-red-800 text-sm space-y-1">
          <li>• Salario bruto: 3.000€</li>
          <li>• Cotizaciones empresa: 897€</li>
          <li>• <strong>Subtotal: 3.897€</strong></li>
        </ul>
      </div>
      <div>
        <h5 class="font-bold text-gray-700 text-sm mb-2">Costes Indirectos</h5>
        <ul class="text-red-800 text-sm space-y-1">
          <li>• Pagas extras: 500€</li>
          <li>• Vacaciones: 250€</li>
          <li>• Otros conceptos: 150€</li>
          <li>• <strong>Total real: ≈4.800€</strong></li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="mt-4 bg-white p-4 rounded border">
    <p class="text-red-800 text-sm"><strong>Conclusión:</strong> Un salario de 3.000€ puede costar realmente a la empresa cerca de 4.800€ mensuales considerando todos los conceptos.</p>
  </div>
</div>

<h2 id="bonificaciones-reducciones-2025">🎯 Bonificaciones y Reducciones 2025</h2>

<p>Existen diversas bonificaciones que pueden reducir las cotizaciones empresariales:</p>

<h3>Principales Bonificaciones</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="bg-green-50 p-4 rounded-lg border border-green-200">
    <h4 class="font-bold text-green-900 mb-3">👥 Contratación de Jóvenes</h4>
    <ul class="text-green-800 text-sm space-y-2">
      <li>• <strong>Menores de 30 años:</strong> Reducción del 75% primer año</li>
      <li>• <strong>Contratos indefinidos:</strong> Bonificación adicional</li>
      <li>• <strong>Duración:</strong> Hasta 3 años</li>
    </ul>
  </div>

  <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
    <h4 class="font-bold text-blue-900 mb-3">♿ Personas con Discapacidad</h4>
    <ul class="text-blue-800 text-sm space-y-2">
      <li>• <strong>Discapacidad ≥33%:</strong> 4.500€/año</li>
      <li>• <strong>Discapacidad ≥65%:</strong> 5.700€/año</li>
      <li>• <strong>Mujeres:</strong> Bonificación adicional</li>
    </ul>
  </div>

  <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
    <h4 class="font-bold text-purple-900 mb-3">👩 Fomento del Empleo Femenino</h4>
    <ul class="text-purple-800 text-sm space-y-2">
      <li>• <strong>Sectores masculinizados:</strong> Bonificación especial</li>
      <li>• <strong>Reincorporación:</strong> Tras excedencia por cuidado</li>
      <li>• <strong>Víctimas violencia género:</strong> Bonificación total</li>
    </ul>
  </div>

  <div class="bg-orange-50 p-4 rounded-lg border border-orange-200">
    <h4 class="font-bold text-orange-900 mb-3">🏘️ Zonas Rurales</h4>
    <ul class="text-orange-800 text-sm space-y-2">
      <li>• <strong>Municipios <5.000 hab:</strong> Bonificación especial</li>
      <li>• <strong>Actividades agrarias:</strong> Reducciones adicionales</li>
      <li>• <strong>Emprendimiento rural:</strong> Hasta 100% primer año</li>
    </ul>
  </div>
</div>

<h2 id="errores-comunes-cotizaciones">❌ Errores Comunes con las Cotizaciones</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div class="bg-red-50 p-4 rounded-lg border border-red-200">
    <h4 class="font-bold text-red-900 mb-3">🚫 Error #1: No Entender las Bases</h4>
    <p class="text-red-800 text-sm mb-2"><strong>Error:</strong> Pensar que se cotiza sobre el salario neto</p>
    <p class="text-red-800 text-sm"><strong>Realidad:</strong> Se cotiza sobre el salario bruto, con mínimos y máximos</p>
  </div>

  <div class="bg-red-50 p-4 rounded-lg border border-red-200">
    <h4 class="font-bold text-red-900 mb-3">🚫 Error #2: Ignorar el Tope Máximo</h4>
    <p class="text-red-800 text-sm mb-2"><strong>Error:</strong> No saber que existe un límite máximo de cotización</p>
    <p class="text-red-800 text-sm"><strong>Realidad:</strong> Por encima de 4.720,50€ no se cotiza más</p>
  </div>

  <div class="bg-red-50 p-4 rounded-lg border border-red-200">
    <h4 class="font-bold text-red-900 mb-3">🚫 Error #3: No Aplicar Bonificaciones</h4>
    <p class="text-red-800 text-sm mb-2"><strong>Error:</strong> Las empresas no solicitan bonificaciones disponibles</p>
    <p class="text-red-800 text-sm"><strong>Solución:</strong> Revisar anualmente las bonificaciones aplicables</p>
  </div>

  <div class="bg-red-50 p-4 rounded-lg border border-red-200">
    <h4 class="font-bold text-red-900 mb-3">🚫 Error #4: Confundir Cotización con IRPF</h4>
    <p class="text-red-800 text-sm mb-2"><strong>Error:</strong> Mezclar conceptos de Seguridad Social e IRPF</p>
    <p class="text-red-800 text-sm"><strong>Realidad:</strong> Son sistemas independientes con finalidades diferentes</p>
  </div>
</div>

<h2 id="preguntas-frecuentes-cotizaciones">❓ Preguntas Frecuentes sobre Cotizaciones</h2>

<div class="space-y-4 my-6">
  <div class="bg-gray-50 p-4 rounded-lg border">
    <h4 class="font-bold text-gray-900 mb-2">¿Puedo recuperar las cotizaciones si no uso las prestaciones?</h4>
    <p class="text-gray-800 text-sm">No, las cotizaciones son obligatorias y no se devuelven. Financian un sistema solidario de protección social.</p>
  </div>

  <div class="bg-gray-50 p-4 rounded-lg border">
    <h4 class="font-bold text-gray-900 mb-2">¿Qué pasa si mi empresa no paga las cotizaciones?</h4>
    <p class="text-gray-800 text-sm">La Seguridad Social puede reclamar directamente al trabajador, aunque después podrá reclamar a la empresa. Es importante verificar que se pagan correctamente.</p>
  </div>

  <div class="bg-gray-50 p-4 rounded-lg border">
    <h4 class="font-bold text-gray-900 mb-2">¿Cómo afectan las cotizaciones a mi pensión futura?</h4>
    <p class="text-gray-800 text-sm">Tu pensión se calcula sobre las bases de cotización de los últimos 25 años. Mayores cotizaciones generalmente significan mayor pensión.</p>
  </div>

  <div class="bg-gray-50 p-4 rounded-lg border">
    <h4 class="font-bold text-gray-900 mb-2">¿Puedo cotizar por encima de mi salario real?</h4>
    <p class="text-gray-800 text-sm">Sí, los trabajadores autónomos pueden elegir su base de cotización. Los trabajadores por cuenta ajena cotizan según su salario real (dentro de los límites).</p>
  </div>
</div>

<h2 id="conclusion-recomendaciones">🎯 Conclusión y Recomendaciones</h2>

<p>Las cotizaciones a la Seguridad Social son una inversión en tu futuro y en tu protección social presente. Aunque representan un coste significativo tanto para trabajadores como para empresas, proporcionan una red de seguridad fundamental.</p>

<div class="bg-blue-50 p-6 rounded-lg my-8">
  <h3 class="font-bold text-blue-900">🔗 Herramientas Útiles</h3>
  <p class="text-blue-800 mb-4">Para calcular las cotizaciones en tu caso específico, utiliza nuestras calculadoras:</p>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-blue-700 text-sm">📊 Calculadora Cotizaciones</p>
      <p class="text-blue-800 text-xs"><a href="/calculadora-cotizaciones-seguridad-social" class="hover:underline">Calcula tus cotizaciones</a></p>
    </div>
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-blue-700 text-sm">💰 Coste Total Empresa</p>
      <p class="text-blue-800 text-xs"><a href="/calculadora-coste-total-empresa" class="hover:underline">Coste real de empleados</a></p>
    </div>
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-blue-700 text-sm">📚 Más información</p>
      <p class="text-blue-800 text-xs"><a href="/blog/tramos-irpf-2025" class="hover:underline">Tramos IRPF 2025</a></p>
    </div>
  </div>
</div>
`,
    image: "/placeholder.svg?height=400&width=800&text=Cotizaciones+Seguridad+Social+2025",
    categories: ["Cotizaciones"],
    tags: ["Cotizaciones", "Seguridad Social", "2025", "Nómina"],
    date: "2025-01-23",
    readTime: "16 min",
    author: {
      name: "Equipo Calculord",
      avatar: "/placeholder.svg?height=40&width=40&text=EC",
    },
    toc: [
      { id: "que-son-cotizaciones-seguridad-social", text: "¿Qué son las Cotizaciones?", icon: "info" },
      { id: "bases-cotizacion-2025", text: "Bases de Cotización 2025", icon: "chart" },
      { id: "tipos-cotizacion-2025", text: "Tipos de Cotización", icon: "percentage" },
      { id: "ejemplos-practicos-calculo", text: "Ejemplos Prácticos", icon: "calculator" },
      { id: "novedades-cotizaciones-2025", text: "Novedades 2025", icon: "new" },
      { id: "bonificaciones-reducciones-2025", text: "Bonificaciones", icon: "discount" },
    ],
    keyData: {
      "Base Mínima": "1.323€",
      "Base Máxima": "4.720,50€",
      "Cotización Trabajador": "6,35%",
      "Cotización Empresa": "29,90%",
      "Incremento 2025": "+4,6%",
    },
  },
  "como-leer-nomina-2025": {
    slug: "como-leer-nomina-2025",
    title: "Cómo Leer tu Nómina 2025: Guía Completa para Entender Todos los Conceptos",
    excerpt:
      "Aprende a interpretar cada línea de tu nómina paso a paso. Guía completa con ejemplos reales, conceptos actualizados 2025 y consejos para detectar errores.",
    content: `
<p>Tu <strong>nómina</strong> es mucho más que un simple recibo de sueldo: es un documento legal que refleja tu relación laboral, tus derechos y obligaciones fiscales. Sin embargo, muchos trabajadores no saben interpretar correctamente todos los conceptos que aparecen en ella, perdiendo la oportunidad de detectar errores o entender mejor su situación laboral.</p>

<p>En esta guía completa te enseñamos a leer tu nómina línea por línea, con ejemplos reales actualizados para 2025, explicaciones detalladas de cada concepto y consejos prácticos para que nunca más tengas dudas sobre tu recibo de salario.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
  <h3 class="font-bold text-blue-900">📋 Estructura Básica de una Nómina</h3>
  <p class="text-blue-800"><strong>Datos de la empresa y trabajador</strong> • <strong>Devengos:</strong> Lo que cobras • <strong>Deducciones:</strong> Lo que te descuentan • <strong>Líquido a percibir:</strong> Lo que recibes • <strong>Bases de cotización</strong> • <strong>Aportación empresarial</strong></p>
</div>

<h2 id="estructura-nomina-2025">📊 Estructura de una Nómina 2025</h2>

<p>Toda nómina española sigue una estructura estándar establecida por la normativa laboral. Conocer esta estructura es fundamental para entender tu recibo de salario:</p>

<div class="bg-gray-50 p-6 rounded-lg my-6">
  <h3 class="font-bold text-gray-900 mb-4">🏗️ Partes de una Nómina</h3>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-blue-700 mb-3">1️⃣ Encabezado</h4>
      <ul class="text-gray-800 text-sm space-y-1">
        <li>• Datos de la empresa</li>
        <li>• Datos del trabajador</li>
        <li>• Período de liquidación</li>
        <li>• Grupo de cotización</li>
        <li>• Categoría profesional</li>
      </ul>
    </div>
    
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-green-700 mb-3">2️⃣ Devengos</h4>
      <ul class="text-gray-800 text-sm space-y-1">
        <li>• Salario base</li>
        <li>• Complementos salariales</li>
        <li>• Pagas extraordinarias</li>
        <li>• Horas extras</li>
        <li>• Otros conceptos</li>
      </ul>
    </div>
    
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-red-700 mb-3">3️⃣ Deducciones</h4>
      <ul class="text-gray-800 text-sm space-y-1">
        <li>• Cotizaciones a la SS</li>
        <li>• Retención IRPF</li>
        <li>• Anticipos</li>
        <li>• Otros descuentos</li>
      </ul>
    </div>
    
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-purple-700 mb-3">4️⃣ Bases y Tipos</h4>
      <ul class="text-gray-800 text-sm space-y-1">
        <li>• Base de cotización</li>
        <li>• Tipos aplicados</li>
        <li>• Aportación empresa</li>
        <li>• Total a la SS</li>
      </ul>
    </div>
  </div>
</div>

<h2 id="ejemplo-nomina-completa">📄 Ejemplo de Nómina Completa</h2>

<p>Vamos a analizar una nómina real paso a paso para que veas cómo se aplican todos los conceptos:</p>

<div class="bg-yellow-50 p-6 rounded-lg my-6 border border-yellow-200">
  <h3 class="font-bold text-yellow-900 mb-4">👤 Datos del Trabajador</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-yellow-700 mb-2">Información Personal</h4>
      <ul class="text-yellow-800 text-sm space-y-1">
        <li>• <strong>Nombre:</strong> María García López</li>
        <li>• <strong>DNI:</strong> 12345678A</li>
        <li>• <strong>NSS:</strong> 12 1234567890</li>
        <li>• <strong>Categoría:</strong> Oficial Administrativo</li>
        <li>• <strong>Grupo Cotización:</strong> 5</li>
      </ul>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-yellow-700 mb-2">Datos del Contrato</h4>
      <ul class="text-yellow-800 text-sm space-y-1">
        <li>• <strong>Tipo contrato:</strong> Indefinido</li>
        <li>• <strong>Jornada:</strong> Completa</li>
        <li>• <strong>Antigüedad:</strong> 5 años</li>
        <li>• <strong>Convenio:</strong> Oficinas y Despachos</li>
      </ul>
    </div>
  </div>
</div>

<h2 id="conclusion-consejos">🎯 Conclusión y Consejos Finales</h2>

<p>Saber leer tu nómina correctamente es fundamental para:</p>

<ul>
  <li>Detectar errores y reclamar cuando sea necesario</li>
  <li>Entender tu situación fiscal y laboral</li>
  <li>Planificar mejor tus finanzas personales</li>
  <li>Conocer tus derechos como trabajador</li>
</ul>

<div class="bg-blue-50 p-6 rounded-lg my-8">
  <h3 class="font-bold text-blue-900">🔗 Herramientas Útiles</h3>
  <p class="text-blue-800 mb-4">Para calcular tu nómina o verificar los datos, utiliza nuestras calculadoras:</p>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-blue-700 text-sm">📊 Calculadora Nómina</p>
      <p class="text-blue-800 text-xs"><a href="/calculadora-nomina" class="hover:underline">Calcula tu nómina</a></p>
    </div>
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-blue-700 text-sm">💰 Bruto-Neto</p>
      <p class="text-blue-800 text-xs"><a href="/conversor-salario-bruto-neto" class="hover:underline">Conversor salario</a></p>
    </div>
    <div class="bg-white p-3 rounded border">
      <p class="font-bold text-blue-700 text-sm">🏢 Coste Empresa</p>
      <p class="text-blue-800 text-xs"><a href="/calculadora-coste-total-empresa" class="hover:underline">Coste total empresa</a></p>
    </div>
  </div>
</div>
`,
    image: "/placeholder.svg?height=400&width=800&text=Cómo+Leer+Nómina+2025",
    categories: ["Guías Prácticas"],
    tags: ["Nómina", "Salario", "2025", "Guía"],
    date: "2025-01-22",
    readTime: "18 min",
    author: {
      name: "Equipo Calculord",
      avatar: "/placeholder.svg?height=40&width=40&text=EC",
    },
    toc: [
      { id: "estructura-nomina-2025", text: "Estructura de una Nómina", icon: "info" },
      { id: "ejemplo-nomina-completa", text: "Ejemplo Completo", icon: "practico" },
      { id: "conclusion-consejos", text: "Conclusión y Consejos", icon: "info" },
    ],
    keyData: {
      "Cotización SS Trabajador": "6,35%",
      "Cotización SS Empresa": "29,90%",
      "Retención IRPF Media": "15%",
      "SMI 2025": "1.184€",
    },
  },
  "irpf-jubilado-discapacidad-2025": {
    slug: "irpf-jubilado-discapacidad-2025",
    title: "Qué IRPF Paga un Jubilado con Discapacidad en 2025: Guía Completa con Ejemplos",
    excerpt:
      "Descubre todos los beneficios fiscales en el IRPF para jubilados con discapacidad en 2025. Reducciones, mínimos personales y ejemplos prácticos de ahorro fiscal.",
    content: `
<p>Si eres jubilado con discapacidad o tienes un familiar en esta situación, es fundamental entender cómo funciona el IRPF y qué beneficios fiscales existen en 2025. La buena noticia es que <strong>el sistema tributario español incluye importantes reducciones y exenciones</strong> para personas con discapacidad que pueden disminuir significativamente la carga fiscal sobre tu pensión.</p>

<p>En esta guía completa, te explicamos exactamente qué IRPF pagarás según tu grado de discapacidad, qué deducciones puedes aplicar, y cómo optimizar tu declaración de la renta para aprovechar todos los beneficios fiscales disponibles.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
  <h3 class="font-bold text-blue-900 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
    Resumen Rápido
  </h3>
  <p class="text-blue-800 mt-2">Un jubilado con discapacidad del 33% puede tener hasta <strong>8.550€ anuales libres de IRPF</strong> (5.550€ mínimo personal + 3.000€ por discapacidad). Si tu grado es del 65% o superior, este mínimo sube a <strong>14.550€ anuales</strong>, y con necesidad de ayuda de terceros, hasta <strong>17.550€ anuales</strong>.</p>
</div>

<h2 id="pension-jubilacion-tributa-irpf">¿Las Pensiones de Jubilación Tributan en el IRPF?</h2>

<p>Sí, las pensiones de jubilación contributivas <strong>están sujetas a IRPF</strong> porque la ley las considera rendimientos del trabajo, al igual que los salarios de trabajadores activos. Sin embargo, hay importantes diferencias y beneficios para jubilados con discapacidad.</p>

<div class="bg-yellow-50 p-6 rounded-lg my-6 my-6 my-6 my-6 my-6 my-6 my-6 my-6 my-6 my-6 my-6 my-6 border border-yellow-200">
  <h3 class="font-bold text-yellow-900 mb-4">Pensiones Exentas de IRPF</h3>
  <p class="text-yellow-800 mb-3">Estas pensiones NO pagan IRPF:</p>
  <ul class="text-yellow-800 space-y-2">
    <li>✓ Pensión por <strong>gran invalidez</strong></li>
    <li>✓ Pensión por <strong>incapacidad permanente absoluta</strong></li>
    <li>✓ Pensión por <strong>incapacidad permanente total</strong> cualificada (mayores de 55 años)</li>
    <li>✓ Prestaciones de la <strong>Seguridad Social por hijo a cargo con discapacidad</strong></li>
  </ul>
</div>

<h2 id="tramos-irpf-2025-jubilados">Tramos del IRPF 2025 para Jubilados</h2>

<p>Los tramos del IRPF son progresivos. Esto significa que no pagas el mismo porcentaje sobre toda tu pensión, sino que se aplican diferentes tipos según el nivel de ingresos:</p>

<div class="bg-gray-50 p-6 rounded-lg my-6">
  <h3 class="font-bold text-gray-900 mb-4">Tabla de Tramos IRPF 2025</h3>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-blue-100">
          <th class="border border-gray-300 p-3 text-left">Ingresos Anuales</th>
          <th class="border border-gray-300 p-3 text-center">Tipo Aplicable</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-3">Hasta 12.450€</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-green-600">19%</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3">12.450€ - 20.200€</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-blue-600">24%</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3">20.200€ - 35.200€</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-yellow-600">30%</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3">35.200€ - 60.000€</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-orange-600">37%</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3">60.000€ - 300.000€</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-red-600">45%</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3">Más de 300.000€</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-purple-600">47%</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<h2 id="minimos-personales-discapacidad">Mínimos Personales y por Discapacidad 2025</h2>

<p>Los <strong>mínimos personales y familiares</strong> son la parte de tus ingresos que queda libre de tributación. Para jubilados con discapacidad, estos mínimos son significativamente más altos:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="bg-green-50 p-6 rounded-lg border border-green-200">
    <h3 class="font-bold text-green-900 mb-4">Mínimo Personal General</h3>
    <div class="space-y-3">
      <div class="bg-white p-3 rounded border">
        <p class="text-green-800 font-semibold">General</p>
        <p class="text-3xl font-bold text-green-600">5.550€</p>
      </div>
      <div class="bg-white p-3 rounded border">
        <p class="text-green-800 font-semibold">Mayor de 65 años</p>
        <p class="text-3xl font-bold text-green-600">6.700€</p>
        <p class="text-xs text-green-700">+1.150€ adicionales</p>
      </div>
      <div class="bg-white p-3 rounded border">
        <p class="text-green-800 font-semibold">Mayor de 75 años</p>
        <p class="text-2xl font-bold text-green-600">8.100€</p>
        <p class="text-xs text-green-700">+1.400€ adicionales más</p>
      </div>
    </div>
  </div>

  <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
    <h3 class="font-bold text-blue-900 mb-4">Mínimo por Discapacidad</h3>
    <div class="space-y-3">
      <div class="bg-white p-3 rounded border">
        <p class="text-blue-800 font-semibold">Discapacidad 33% - 64%</p>
        <p class="text-2xl font-bold text-blue-600">3.000€</p>
      </div>
      <div class="bg-white p-3 rounded border">
        <p class="text-blue-800 font-semibold">Discapacidad ≥65%</p>
        <p class="text-2xl font-bold text-blue-600">9.000€</p>
      </div>
      <div class="bg-white p-3 rounded border">
        <p class="text-blue-800 font-semibold">Ayuda de terceros o movilidad reducida</p>
        <p class="text-2xl font-bold text-blue-600">+3.000€</p>
        <p class="text-xs text-blue-700">Adicional</p>
      </div>
    </div>
  </div>
</div>

<h2 id="ejemplos-practicos-calculo">Ejemplos Prácticos de Cálculo</h2>

<h3>Ejemplo 1: Jubilado de 68 años con discapacidad del 40%</h3>

<div class="bg-green-50 p-6 rounded-lg my-6 border border-green-200">
  <h4 class="font-bold text-green-900">Datos del Ejemplo</h4>
  <div class="bg-white p-4 rounded border mb-4">
    <ul class="text-green-800 space-y-2">
      <li><strong>Pensión anual:</strong> 18.000€</li>
      <li><strong>Edad:</strong> 68 años</li>
      <li><strong>Grado de discapacidad:</strong> 40%</li>
    </ul>
  </div>

  <h4 class="font-bold text-green-900">Mínimos Aplicables</h4>
  <div class="bg-white p-4 rounded border mb-4">
    <ul class="text-green-800 space-y-2">
      <li>Mínimo personal: <strong>5.550€</strong></li>
      <li>Mayor de 65 años: <strong>+1.150€</strong></li>
      <li>Discapacidad 33%-64%: <strong>+3.000€</strong></li>
      <li class="border-t pt-2 font-bold text-lg">Total mínimo exento: <strong>9.700€</strong></li>
    </ul>
  </div>

  <h4 class="font-bold text-green-900">Base Liquidable</h4>
  <div class="bg-white p-4 rounded border mb-4">
    <p class="text-green-800">18.000€ (pensión) - 9.700€ (mínimo) = <strong class="text-2xl text-green-600">8.300€</strong></p>
  </div>

  <h4 class="font-bold text-green-900">IRPF a Pagar</h4>
  <div class="bg-white p-4 rounded border">
    <p class="text-green-800">Los primeros 8.300€ tributan al 19%</p>
    <p class="text-3xl font-bold text-green-600">1.577€ anuales</p>
    <p class="text-sm text-green-700 mt-2">Equivalente a <strong>131,42€ mensuales</strong></p>
  </div>
</div>

<h3>Ejemplo 2: Jubilado de 72 años con discapacidad del 70%</h3>

<div class="bg-blue-50 p-6 rounded-lg my-6 border border-blue-200">
  <h4 class="font-bold text-blue-900">Datos del Ejemplo</h4>
  <div class="bg-white p-4 rounded border mb-4">
    <ul class="text-blue-800 space-y-2">
      <li><strong>Pensión anual:</strong> 22.000€</li>
      <li><strong>Edad:</strong> 72 años</li>
      <li><strong>Grado de discapacidad:</strong> 70%</li>
      <li><strong>Necesita ayuda de terceros:</strong> Sí</li>
    </ul>
  </div>

  <h4 class="font-bold text-blue-900">Mínimos Aplicables</h4>
  <div class="bg-white p-4 rounded border mb-4">
    <ul class="text-blue-800 space-y-2">
      <li>Mínimo personal: <strong>5.550€</strong></li>
      <li>Mayor de 65 años: <strong>+1.150€</strong></li>
      <li>Discapacidad ≥65%: <strong>+9.000€</strong></li>
      <li>Ayuda de terceros: <strong>+3.000€</strong></li>
      <li class="border-t pt-2 font-bold text-lg">Total mínimo exento: <strong>18.700€</strong></li>
    </ul>
  </div>

  <h4 class="font-bold text-blue-900">Base Liquidable</h4>
  <div class="bg-white p-4 rounded border mb-4">
    <p class="text-blue-800">22.000€ (pensión) - 18.700€ (mínimo) = <strong class="text-2xl text-blue-600">3.300€</strong></p>
  </div>

  <h4 class="font-bold text-blue-900">IRPF a Pagar</h4>
  <div class="bg-white p-4 rounded border">
    <p class="text-blue-800">Los primeros 3.300€ tributan al 19%</p>
    <p class="text-3xl font-bold text-blue-600">627€ anuales</p>
    <p class="text-sm text-blue-700 mt-2">Equivalente a <strong>52,25€ mensuales</strong></p>
    <p class="text-green-700 mt-3 font-semibold">💰 Ahorro fiscal por discapacidad: ~2.400€/año respecto a persona sin discapacidad</p>
  </div>
</div>

<h2 id="otros-beneficios-fiscales">Otros Beneficios Fiscales para Jubilados con Discapacidad</h2>

<div class="space-y-4 my-6">
  <div class="bg-purple-50 p-6 rounded-lg border border-purple-200">
    <h3 class="font-bold text-purple-900 mb-3">1. Deducción por Ayuda Doméstica</h3>
    <p class="text-purple-800">Si necesitas contratar ayuda doméstica por tu discapacidad, puedes deducir hasta <strong>12.000€ anuales</strong> de las cotizaciones sociales pagadas.</p>
  </div>

  <div class="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
    <h3 class="font-bold text-indigo-900 mb-3">2. Reducciones Autonómicas</h3>
    <p class="text-indigo-800">Algunas comunidades autónomas ofrecen deducciones adicionales. Por ejemplo, Madrid ofrece hasta <strong>1.500€ de deducción</strong> para familiares con discapacidad a cargo.</p>
  </div>

  <div class="bg-pink-50 p-6 rounded-lg border border-pink-200">
    <h3 class="font-bold text-pink-900 mb-3">3. Exención de Impuestos Locales</h3>
    <p class="text-pink-800">Muchos ayuntamientos ofrecen <strong>bonificaciones en el IBI</strong> (Impuesto de Bienes Inmuebles) para personas con discapacidad, que pueden llegar hasta el 50% de descuento.</p>
  </div>
</div>

<h2 id="como-acreditar-discapacidad">Cómo Acreditar tu Grado de Discapacidad</h2>

<p>Para aplicar estas reducciones, necesitas tener reconocido oficialmente tu grado de discapacidad. Aquí te explicamos cómo:</p>

<div class="bg-gray-50 p-6 rounded-lg my-6">
  <h3 class="font-bold text-gray-900 mb-4">Organismos que Emiten el Certificado</h3>
  <ul class="text-gray-800 space-y-2">
    <li>✓ <strong>IMSERSO</strong> o centros base de las comunidades autónomas</li>
    <li>✓ <strong>Instituto Nacional de la Seguridad Social (INSS)</strong> en caso de incapacidad permanente</li>
    <li>✓ <strong>Pensión de clases pasivas</strong> (funcionarios)</li>
  </ul>
</div>

<h2 id="cuando-no-obligado-declarar">¿Cuándo NO Estás Obligado a Declarar?</h2>

<p>Aunque tu pensión tribute en IRPF, hay situaciones en las que no estás obligado a presentar la declaración de la renta.</p>

<div class="bg-orange-50 p-6 rounded-lg my-6 border border-orange-200">
  <h3 class="font-bold text-orange-900 mb-4">Límites para No Declarar en 2025</h3>
  <ul class="text-orange-800 space-y-3">
    <li>• <strong>Un solo pagador:</strong> Ingresos inferiores a <strong>22.000€</strong></li>
    <li>• <strong>Dos o más pagadores:</strong> Ingresos inferiores a <strong>15.000€</strong> si el segundo paga más de 1.500€</li>
    <li>• <strong>Rendimientos de capital mobiliario:</strong> Inferiores a <strong>1.600€</strong></li>
  </ul>
  
  <p class="text-orange-900 mt-4 font-semibold">Importante: Aunque no estés obligado, puede interesarte presentarla si te van a devolver dinero.</p>
</div>

<h2 id="consejos-optimizar-declaracion">Consejos para Optimizar tu Declaración de la Renta</h2>

<ol class="space-y-4 my-6">
  <li class="bg-blue-50 p-4 rounded-lg">
    <h4 class="font-bold text-blue-900 mb-2">1. Revisa tu Certificado de Discapacidad</h4>
    <p class="text-blue-800">Asegúrate de que Hacienda tiene registrado correctamente tu grado de discapacidad. Puedes consultarlo en tu borrador.</p>
  </li>
  
  <li class="bg-green-50 p-4 rounded-lg">
    <h4 class="font-bold text-green-900 mb-2">2. Incluye Todos los Gastos Deducibles</h4>
    <p class="text-green-800">Gastos médicos, ayuda doméstica, adaptaciones del hogar por discapacidad... todo suma.</p>
  </li>
  
  <li class="bg-purple-50 p-4 rounded-lg">
    <h4 class="font-bold text-purple-900 mb-2">3. Consulta las Deducciones Autonómicas</h4>
    <p class="text-purple-800">Cada comunidad autónoma tiene sus propias deducciones. No te pierdas ninguna.</p>
  </li>
  
  <li class="bg-yellow-50 p-4 rounded-lg">
    <h4 class="font-bold text-yellow-900 mb-2">4. Presenta la Declaración Aunque No Estés Obligado</h4>
    <p class="text-yellow-800">Si te han retenido IRPF de más, solo recuperarás el dinero si presentas la declaración.</p>
  </li>
</ol>

<h2 id="preguntas-frecuentes">Preguntas Frecuentes</h2>

<div class="space-y-4 my-6">
  <div class="bg-white p-4 rounded-lg border border-gray-200">
    <h4 class="font-bold text-gray-900 mb-2">¿Tengo que pagar IRPF si cobro una pensión por gran invalidez?</h4>
    <p class="text-gray-700">No, las pensiones por gran invalidez están <strong>exentas de IRPF</strong>. No pagas impuestos por ellas.</p>
  </div>

  <div class="bg-white p-4 rounded-lg border border-gray-200">
    <h4 class="font-bold text-gray-900 mb-2">¿Cómo sabe Hacienda mi grado de discapacidad?</h4>
    <p class="text-gray-700">Hacienda recibe esta información del IMSERSO o del INSS automáticamente. Puedes verificarlo en tu borrador de la renta o en Renta Web.</p>
  </div>

  <div class="bg-white p-4 rounded-lg border border-gray-200">
    <h4 class="font-bold text-gray-900 mb-2">¿Se puede cambiar el grado de discapacidad después de jubilarse?</h4>
    <p class="text-gray-700">Sí, puedes solicitar una <strong>revisión del grado de discapacidad</strong> si tu estado ha empeorado. Esto aumentará los beneficios fiscales.</p>
  </div>

  <div class="bg-white p-4 rounded-lg border border-gray-200">
    <h4 class="font-bold text-gray-900 mb-2">¿La discapacidad del cónyuge también reduce mi IRPF?</h4>
    <p class="text-gray-700">Sí, si tu cónyuge tiene discapacidad y no supera ciertos límites de ingresos, puedes aplicar el <strong>mínimo por discapacidad de descendientes y ascendientes</strong> (3.000€ o 9.000€ según el grado).</p>
  </div>
</div>

<h2 id="conclusion">Conclusión</h2>

<p>Los mínimos personales y familiares son una herramienta fundamental para reducir tu carga fiscal. Una familia tipo puede ahorrar varios miles de euros al año simplemente por aplicar correctamente estos mínimos.</p>

<div class="bg-blue-50 p-6 rounded-lg my-8">
  <h3 class="font-bold text-blue-900">🔗 Recursos Relacionados</h3>
  <p class="text-blue-800">Para calcular el impacto real en tu caso específico, utiliza nuestra <a href="/calculadora-irpf" class="text-blue-600 hover:underline">Calculadora de IRPF 2025</a>. También puedes consultar nuestras guías sobre <a href="/blog/tramos-irpf-2025" class="text-blue-600 hover:underline">tramos del IRPF</a> y <a href="/blog/deducciones-irpf-2025" class="text-blue-600 hover:underline">deducciones disponibles</a>.</p>
</div>
`,
    image: "/placeholder.svg?height=400&width=800&text=IRPF+Jubilado+Discapacidad",
    categories: ["Jubilados", "IRPF"],
    tags: ["IRPF", "Jubilados", "Discapacidad", "2025", "Beneficios Fiscales"],
    date: "2025-01-25",
    readTime: "10 min",
    author: {
      name: "Equipo Calculord",
      avatar: "/placeholder.svg?height=40&width=40&text=EC",
    },
    toc: [
      { id: "pension-jubilacion-tributa-irpf", text: "¿Tributan las pensiones?", icon: "info" },
      { id: "tramos-irpf-2025-jubilados", text: "Tramos IRPF 2025", icon: "tabla" },
      { id: "minimos-personales-discapacidad", text: "Mínimos Personales", icon: "dinero" },
      { id: "ejemplos-practicos-calculo", text: "Ejemplos Prácticos", icon: "practico" },
      { id: "otros-beneficios-fiscales", text: "Otros Beneficios", icon: "beneficios" },
      { id: "como-acreditar-discapacidad", text: "Cómo Acreditar", icon: "certificado" },
      { id: "cuando-no-obligado-declarar", text: "¿Cuándo No Declarar?", icon: "obligacion" },
      { id: "consejos-optimizar-declaracion", text: "Consejos Optimización", icon: "consejos" },
    ],
    keyData: {
      "Mínimo 33%-64%": "+3.000€",
      "Mínimo ≥65%": "+9.000€",
      "Con ayuda terceros": "+3.000€",
      "Pensión exenta": "Gran Invalidez",
    },
  },
  "cuanto-irpf-pagan-jubilados-2025": {
    slug: "cuanto-irpf-pagan-jubilados-2025",
    title: "Cuánto IRPF Quitan a un Jubilado en 2025: Tabla de Retenciones y Ejemplos Reales",
    excerpt:
      "Descubre cuánto IRPF te retienen de tu pensión de jubilación en 2025. Tablas completas de retenciones, ejemplos por tramos de pensión y cómo reducir legalmente la retención aplicada.",
    content: `
<p>Si eres jubilado o estás próximo a jubilarte, una de las preguntas más frecuentes es: <strong>¿Cuánto IRPF te van a quitar de mi pensión cada mes?</strong> La respuesta no es sencilla, porque depende de varios factores: el importe de tu pensión, tu edad, tu situación familiar y la comunidad autónoma en la que resides.</p>

<p>En esta guía completa de 2025, te explicamos exactamente cuánto IRPF te retendrán según tu pensión, con ejemplos reales y tablas actualizadas. Además, te damos consejos prácticos para optimizar tu retención y evitar sorpresas en la declaración de la renta.</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
  <h3 class="font-bold text-blue-900 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
    Dato Clave 2025
  </h3>
  <p class="text-blue-800 mt-2">En 2025, <strong>solo el 54% de los jubilados pagan IRPF</strong>. Si tu pensión no supera los 15.000€ anuales y no tienes otros ingresos, es probable que no te retengan nada o que te devuelvan todo lo retenido en la declaración de la renta.</p>
</div>

<h2 id="como-funciona-irpf-pensiones">¿Cómo Funciona el IRPF en las Pensiones de Jubilación?</h2>

<p>Las pensiones de jubilación se consideran <strong>rendimientos del trabajo</strong>, igual que los salarios. Por eso, la Seguridad Social aplica una <strong>retención mensual a cuenta del IRPF</strong>.</p>

<div class="bg-yellow-50 p-6 rounded-lg my-6 my-6 my-6 my-6 my-6 my-6 my-6 my-6 my-6 my-6 my-6 my-6 border border-yellow-200">
  <h3 class="font-bold text-yellow-900 mb-4">Diferencia entre Retención y Cuota Final</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-yellow-700 mb-2">Retención (Mensual)</h4>
      <p class="text-yellow-800 text-sm">Es el dinero que te descuentan cada mes de tu pensión. Es un <strong>anticipo</strong> del IRPF que pagarás.</p>
    </div>
    <div class="bg-white p-4 rounded border">
      <h4 class="font-bold text-green-700 mb-2">Cuota Final (Anual)</h4>
      <p class="text-green-800 text-sm">Es el IRPF real que debes pagar según tu declaración. Si pagaste de más, <strong>te devuelven</strong>; si de menos, <strong>pagas la diferencia</strong>.</p>
    </div>
  </div>
</div>

<h2 id="tabla-retenciones-2025">Tabla de Retenciones IRPF 2025 para Jubilados</h2>

<p>Aquí tienes la tabla de retenciones que aplica la Seguridad Social en 2025 según el importe de tu pensión anual:</p>

<div class="bg-gray-50 p-6 rounded-lg my-6">
  <h3 class="font-bold text-gray-900 mb-4">Retenciones Estándar por Tramo de Pensión</h3>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-blue-100">
          <th class="border border-gray-300 p-3 text-left">Pensión Anual</th>
          <th class="border border-gray-300 p-3 text-center">Pensión Mensual (14 pagas)</th>
          <th class="border border-gray-300 p-3 text-center">Retención Aprox.</th>
          <th class="border border-gray-300 p-3 text-right">Retención Mensual</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-3">Hasta 12.000€</td>
          <td class="border border-gray-300 p-3 text-center">857€</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-green-600">0% - 1%</td>
          <td class="border border-gray-300 p-3 text-right">0€ - 8,57€</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3">12.000€ - 15.000€</td>
          <td class="border border-gray-300 p-3 text-center">1.071€</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-green-600">1% - 3%</td>
          <td class="border border-gray-300 p-3 text-right">10,71€ - 32,14€</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3">15.000€ - 18.000€</td>
          <td class="border border-gray-300 p-3 text-center">1.286€</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-blue-600">3% - 6%</td>
          <td class="border border-gray-300 p-3 text-right">38,57€ - 77,14€</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3">18.000€ - 22.000€</td>
          <td class="border border-gray-300 p-3 text-center">1.571€</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-yellow-600">6% - 9%</td>
          <td class="border border-gray-300 p-3 text-right">94,29€ - 141,43€</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3">22.000€ - 30.000€</td>
          <td class="border border-gray-300 p-3 text-center">1.929€</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-orange-600">9% - 15%</td>
          <td class="border border-gray-300 p-3 text-right">173,61€ - 289,36€</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3">Más de 30.000€</td>
          <td class="border border-gray-300 p-3 text-center">-</td>
          <td class="border border-gray-300 p-3 text-center font-bold text-red-600">15% +</td>
          <td class="border border-gray-300 p-3 text-right">Aprox. 375€ +</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<h2 id="ejemplos-practicos">Ejemplos Prácticos</h2>

<div class="bg-green-50 p-6 rounded-lg my-6">
  <h3 class="font-bold text-green-900 mb-4">Ejemplo: Pensión de 18.000€ anuales</h3>
  <ul class="text-green-800 space-y-2">
    <li>• Pensión mensual: 1.286€ (14 pagas)</li>
    <li>• Retención aproximada: 5%</li>
    <li>• Retención mensual: ~64€</li>
    <li>• Pensión neta mensual: ~1.222€</li>
  </ul>
</div>

<h2 id="como-reducir-retencion">Cómo Reducir la Retención</h2>

<ul class="space-y-2 my-6">
  <li>✓ Comunicar situación familiar actualizada</li>
  <li>✓ Incluir gastos deducibles si procede</li>
  <li>✓ Revisar el borrador anualmente</li>
  <li>✓ Consultar con asesor fiscal si tienes dudas</li>
</ul>

<div class="bg-blue-50 p-6 rounded-lg my-8">
  <h3 class="font-bold text-blue-900">Calcula tu IRPF</h3>
  <p class="text-blue-800">Utiliza nuestra <a href="/calculadora-irpf" class="text-blue-600 hover:underline">Calculadora de IRPF</a> para saber exactamente cuánto pagarás.</p>
</div>
`,
    image: "/placeholder.svg?height=400&width=800&text=IRPF+Jubilados+2025",
    categories: ["Jubilados", "IRPF"],
    tags: ["IRPF", "Jubilados", "Retenciones", "2025"],
    date: "2025-01-24",
    readTime: "8 min",
    author: {
      name: "Equipo Calculord",
      avatar: "/placeholder.svg?height=40&width=40&text=EC",
    },
    toc: [
      { id: "como-funciona-irpf-pensiones", text: "¿Cómo Funciona?", icon: "info" },
      { id: "tabla-retenciones-2025", text: "Tabla de Retenciones", icon: "tabla" },
      { id: "ejemplos-practicos", text: "Ejemplos Prácticos", icon: "practico" },
      { id: "como-reducir-retencion", text: "Reducir Retención", icon: "consejos" },
    ],
    keyData: {
      "Pensión media": "1.286€",
      "Retención media": "5%",
      "Límite sin retención": "12.000€",
      "Jubilados que pagan": "54%",
    },
  },
  "me-pueden-subir-irpf-sin-avisar": {
    slug: "me-pueden-subir-irpf-sin-avisar",
    title: "¿Me Pueden Subir el IRPF Sin Avisar? Causas y Cómo Solucionarlo en 2025",
    excerpt:
      "Descubre por qué pueden subirte el IRPF sin previo aviso, qué derechos tienes como trabajador y cómo solicitar un ajuste en la retención. Guía completa con ejemplos reales y modelo P145.",
    content: `
<p>Si has notado que de repente <strong>tu nómina baja porque te han subido la retención de IRPF sin avisar</strong>, no estás solo. Esta situación es más común de lo que parece y puede generar confusión e inquietud. Pero, ¿es legal? ¿Pueden hacerlo sin tu consentimiento? En esta guía completa te explicamos todo sobre las subidas de IRPF sin previo aviso.</p>

<h2 id="pueden-subir-irpf-sin-consentimiento">¿Pueden Subir el IRPF Sin Mi Consentimiento?</h2>
<p><strong>Sí, tu empresa puede modificar el porcentaje de retención de IRPF sin tu autorización previa.</strong> Esto es legal porque:</p>
<ul>
  <li><strong>Obligación legal:</strong> Las empresas deben aplicar el porcentaje correcto según las tablas de Hacienda.</li>
  <li><strong>Comunicado obligatorio:</strong> Aunque no necesitan tu permiso, <strong>SÍ deben comunicarte el cambio y la razón.</strong></li>
  <li><strong>Hacienda obliga:</strong> Si la Agencia Tributaria detecta que la retención es insuficiente, puede requerir a la empresa que la ajuste.</li>
</ul>

<div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-6">
  <h3 class="font-bold text-yellow-900">⚠️ Importante</h3>
  <p class="text-yellow-800">Si bien la empresa puede cambiar la retención sin tu permiso, <strong>debe informarte por escrito</strong> sobre el cambio y sus motivos. Si no lo hace, puedes solicitar una explicación formal.</p>
</div>

<h2 id="causas-subida-irpf">Causas Principales de la Subida del IRPF Sin Avisar</h2>
<h3>1. Cambios en Tu Situación Personal o Familiar</h3>
<p>La retención de IRPF se calcula según tus circunstancias personales. Si alguna de estas cambia durante el año, tu empresa debe ajustar la retención:</p>
<ul>
  <li><strong>Cambio de estado civil:</strong> Pasar de casado a divorciado o viudo puede aumentar la retención.</li>
  <li><strong>Hijos que cumplen 18 años:</strong> Dejan de computar como descendientes a cargo.</li>
  <li><strong>Pérdida de otros beneficios:</strong> Por ejemplo, si dejaste de tener una discapacidad reconocida.</li>
  <li><strong>Segunda fuente de ingresos:</strong> Si empiezas a recibir ingresos de otra empresa o actividad.</li>
</ul>

<h3>2. Ajustes por Diferencias del Año Anterior</h3>
<p>Si en la última declaración de la renta <strong>saliste a pagar una cantidad importante a Hacienda</strong>, es probable que tu empresa haya ajustado al alza la retención para evitar que vuelva a ocurrir.</p>

<h3>3. Comunicación de Hacienda a la Empresa</h3>
<p>Hacienda puede requerir a tu empresa que aumente tu retención si detecta que es insuficiente basándose en tus ingresos previos o declaraciones anteriores.</p>

<h3>4. Actualización Automática de las Tablas de Retención</h3>
<p>Cada año, Hacienda actualiza las tablas de retención. En enero puede haber cambios automáticos por la actualización de tramos.</p>

<h2 id="que-hacer-si-suben-irpf">Qué Hacer Si Te Suben el IRPF Sin Avisar</h2>
<h3>Paso 1: Solicita Explicación a Tu Empresa</h3>
<p>Pregunta por escrito (email o burofax) a tu departamento de Recursos Humanos o nóminas:</p>
<ul>
  <li>¿Cuál es el motivo del cambio en la retención?</li>
  <li>¿Cuándo se aplicó el cambio?</li>
  <li>¿Se basa en alguna comunicación de Hacienda o en cambios en tus datos personales?</li>
</ul>

<h3>Paso 2: Verifica Tus Datos Personales</h3>
<p>Asegúrate de que la empresa tiene actualizados tus datos:</p>
<ul>
  <li>Estado civil</li>
  <li>Número de hijos a cargo</li>
  <li>Situación de discapacidad (tuya o de familiares)</li>
  <li>Otros ingresos que puedas estar percibiendo</li>
</ul>

<h3>Paso 3: Solicita Regularización con el Modelo P145</h3>
<p>Si consideras que la retención es demasiado alta, puedes presentar el <strong>modelo P145</strong> a tu empresa para comunicar tus circunstancias personales y solicitar un ajuste.</p>

<div class="bg-blue-50 p-6 rounded-lg my-8">
  <h3 class="font-bold text-blue-900">📄 Modelo P145: Qué Es y Cómo Usarlo</h3>
  <p class="text-blue-800">El <strong>modelo P145</strong> es el formulario que debes entregar a tu empresa para comunicar cambios en tu situación personal y familiar que afectan a la retención de IRPF. Puedes descargarlo desde la web de la Agencia Tributaria y presentarlo en tu departamento de RRHH.</p>
  <p class="text-blue-800 mt-2"><strong>Cambios que puedes comunicar:</strong></p>
  <ul class="text-blue-800">
    <li>• Cambio de estado civil</li>
    <li>• Nacimiento de hijos</li>
    <li>• Situación de discapacidad</li>
    <li>• Otros ingresos o pensiones</li>
  </ul>
</div>

<h2 id="ejemplo-practico-subida-irpf">Ejemplo Práctico: Subida de IRPF por Cambio Familiar</h2>
<div class="bg-gray-50 p-6 rounded-lg my-8">
  <h3 class="font-bold">Caso Real: Juan, 42 años</h3>
  <p><strong>Situación inicial (2024):</strong></p>
  <ul>
    <li>• Salario bruto anual: 30.000€</li>
    <li>• Estado civil: Casado, 2 hijos menores</li>
    <li>• Retención IRPF: 12%</li>
    <li>• Retención mensual: 300€</li>
  </ul>
  <p class="mt-4"><strong>Cambio (2025):</strong></p>
  <p>Juan se divorcia en enero de 2025. Al comunicarlo a la empresa mediante el P145, su retención cambia:</p>
  <ul>
    <li>• Nueva retención IRPF: 16%</li>
    <li>• Nueva retención mensual: 400€</li>
    <li>• <strong>Diferencia: -100€/mes en el neto</strong></li>
  </ul>
  <p class="mt-4 text-gray-700">La empresa ajusta automáticamente la retención porque Juan ya no puede aplicar la reducción por cónyuge. Aunque la subida parezca brusca, es correcta según la normativa.</p>
</div>

<h2 id="cuando-solicitar-reduccion-irpf">¿Cuándo Puedo Solicitar una Reducción del IRPF?</h2>
<p>Puedes solicitar una reducción de la retención si:</p>
<ul>
  <li><strong>Tienes gastos deducibles importantes:</strong> Hipoteca (si compraste antes de 2013), aportaciones a planes de pensiones, donativos.</li>
  <li><strong>Cambios favorables en tu situación:</strong> Matrimonio, nacimiento de hijos, adquisición de discapacidad reconocida.</li>
  <li><strong>La retención es excesiva:</strong> Si año tras año Hacienda te devuelve grandes cantidades en la declaración.</li>
</ul>

<h2 id="preguntas-frecuentes">Preguntas Frecuentes</h2>
<h3>¿Es ilegal que me suban el IRPF sin avisarme?</h3>
<p>No, la empresa puede ajustar la retención sin tu autorización si es necesario. Sin embargo, <strong>debe informarte por escrito del cambio y sus motivos.</strong></p>

<h3>¿Puedo negarme a que me suban la retención?</h3>
<p>No, si el ajuste es correcto según tus circunstancias personales. Sin embargo, si crees que es un error, puedes solicitar revisión mediante el modelo P145.</p>

<h3>¿Qué pasa si la retención es insuficiente?</h3>
<p>Si tu retención es más baja de lo que corresponde, en la declaración de la renta <strong>tendrás que pagar la diferencia a Hacienda</strong>, posiblemente con intereses de demora.</p>

<h3>¿Me suben el IRPF si tengo otra nómina?</h3>
<p>Sí, tener dos pagadores aumenta significativamente la retención porque tus ingresos totales suben de tramo fiscal.</p>

<h3>¿Puedo reclamar si me suben el IRPF sin justificación?</h3>
<p>Sí, puedes solicitar por escrito una explicación detallada a tu empresa. Si no responden o la justificación no es válida, puedes acudir a un asesor laboral o contactar con la Inspección de Trabajo.</p>

<div class="bg-blue-50 p-6 rounded-lg my-8">
  <h3 class="font-bold text-blue-900">🧮 Calcula Tu IRPF Real</h3>
  <p class="text-blue-800">Para saber si tu retención es correcta o excesiva, utiliza nuestra <a href="/calculadora-irpf" class="text-blue-600 hover:underline font-semibold">Calculadora de IRPF 2025</a>. Introduce tu salario, situación familiar y otros ingresos para obtener una estimación precisa de tu retención óptima.</p>
</div>
`,
    image: "/placeholder.svg?height=400&width=800&text=Subida+IRPF+Sin+Avisar",
    categories: ["IRPF"],
    tags: ["IRPF", "Retención", "Nómina", "Derechos Laborales", "P145"],
    date: "2025-01-26",
    readTime: "9 min",
    author: {
      name: "Equipo Calculord",
      avatar: "/placeholder.svg?height=40&width=40&text=EC",
    },
    toc: [
      { id: "pueden-subir-irpf-sin-consentimiento", text: "¿Es Legal?", icon: "info" },
      { id: "causas-subida-irpf", text: "Causas de Subida", icon: "causas" },
      { id: "que-hacer-si-suben-irpf", text: "Qué Hacer", icon: "solucion" },
      { id: "ejemplo-practico-subida-irpf", text: "Ejemplo Práctico", icon: "practico" },
      { id: "cuando-solicitar-reduccion-irpf", text: "Reducir Retención", icon: "reduccion" },
    ],
    keyData: {
      "¿Es legal?": "Sí, con comunicación",
      "Modelo P145": "Solicitar ajuste",
      "Plazo respuesta": "10 días laborables",
      Reclamar: "RRHH o Inspección",
    },
  },
}
