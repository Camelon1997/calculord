"use client"

import dynamic from "next/dynamic"
import type React from "react"

const Footer = dynamic(() => import("./Footer"), { ssr: false })

const DynamicFooter: React.FC = () => {
  return <Footer />
}

export default DynamicFooter
