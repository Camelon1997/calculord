import Link from "next/link"

interface BreadcrumbsProps {
  currentPage: string
}

export function Breadcrumbs({ currentPage }: BreadcrumbsProps) {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex text-sm text-gray-600" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-medium text-gray-800" aria-current="page">
            {currentPage}
          </span>
        </nav>
      </div>
    </div>
  )
}
