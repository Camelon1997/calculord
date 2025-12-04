"use client"

import dynamic from "next/dynamic"
import HeroSection from "./HeroSection"

const CalculatorsSection = dynamic(() => import("./CalculatorsSection"), {
  ssr: false,
  loading: () => <SkeletonLoader />,
})
const FeaturesSection = dynamic(() => import("./FeaturesSection"), {
  ssr: false,
  loading: () => <SkeletonLoader />,
})
const TestimonialsSection = dynamic(() => import("./TestimonialsSection"), {
  ssr: false,
  loading: () => <SkeletonLoader />,
})
const CtaSection = dynamic(() => import("./CtaSection"), {
  ssr: false,
  loading: () => <SkeletonLoader />,
})

const SkeletonLoader = () => (
  <div className="w-full h-96 bg-gray-200 animate-pulse rounded-lg my-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />
)

export default function HomePageClient() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CalculatorsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}
