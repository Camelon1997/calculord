"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import HeroSection from "./HeroSection"

const CalculatorsSection = dynamic(() => import("./CalculatorsSection"), {
  suspense: true,
})
const FeaturesSection = dynamic(() => import("./FeaturesSection"), {
  suspense: true,
})
const TestimonialsSection = dynamic(() => import("./TestimonialsSection"), {
  suspense: true,
})
const CtaSection = dynamic(() => import("./CtaSection"), {
  suspense: true,
})

const SkeletonLoader = () => (
  <div className="w-full h-96 bg-gray-200 animate-pulse rounded-lg my-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />
)

export default function HomePageClient() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <Suspense fallback={<SkeletonLoader />}>
        <CalculatorsSection />
      </Suspense>

      <Suspense fallback={<SkeletonLoader />}>
        <FeaturesSection />
      </Suspense>

      <Suspense fallback={<SkeletonLoader />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<SkeletonLoader />}>
        <CtaSection />
      </Suspense>
    </div>
  )
}
