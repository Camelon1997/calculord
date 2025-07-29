import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface RelatedCalculatorCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features?: string[]
  href: string
  buttonText: string
  buttonClassName?: string
}

export function RelatedCalculatorCard({
  icon,
  title,
  description,
  features,
  href,
  buttonText,
  buttonClassName,
}: RelatedCalculatorCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-opacity-100">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      {features && features.length > 0 && (
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      )}
      <Link href={href} className="mt-auto">
        <Button className={cn("w-full", buttonClassName)}>{buttonText}</Button>
      </Link>
    </div>
  )
}
