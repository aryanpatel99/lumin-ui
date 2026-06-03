"use client"

import { notFound } from "next/navigation"
import { use } from "react"
import { clientComponents } from "@/registry/client-registry"
import { ModeToggle } from "@/app/components/mode-toggle"

export default function PreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const Component = clientComponents[slug]

  if (!Component) notFound()

  return (
    <div className="relative w-full h-screen overflow-auto">
      <div className="fixed top-4 right-4 z-50 rounded-full border border-neutral-200 dark:border-neutral-800 bg-background/80 backdrop-blur">
        <ModeToggle />
      </div>
      <Component />
    </div>
  )
}
