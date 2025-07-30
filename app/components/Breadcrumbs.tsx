import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbsProps {
  currentPage: string
}

export function Breadcrumbs({ currentPage }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-blue-600 transition-colors"
            aria-label="Ir a la página principal"
          >
            <Home className="w-4 h-4 mr-1" />
            Inicio
          </Link>
        </li>
        <li>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </li>
        <li>
          <span className="text-gray-900 font-medium" aria-current="page">
            {currentPage}
          </span>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs
