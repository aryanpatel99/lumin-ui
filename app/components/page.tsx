"use client"

import { useState } from "react"
import Link from "next/link"
import { registry, type RegistryCategory } from "@/registry"

const CATEGORY_LABELS: Record<RegistryCategory, string> = {
  components:  "Components",
  marketing:   "Marketing",
  dashboard:   "Dashboard",
  backgrounds: "Backgrounds",
}

const CATEGORY_ORDER: RegistryCategory[] = ["components", "marketing", "dashboard", "backgrounds"]

type Filter = "all" | RegistryCategory

export default function ComponentsIndex() {
  const [active, setActive] = useState<Filter>("all")

  const visible = registry.filter((e) => !e.hidden)
  const total = visible.length

  const counts = CATEGORY_ORDER.reduce<Record<RegistryCategory, number>>((acc, cat) => {
    acc[cat] = visible.filter((e) => e.category === cat).length
    return acc
  }, {} as Record<RegistryCategory, number>)

  const visibleCategories = active === "all"
    ? CATEGORY_ORDER.filter((cat) => counts[cat] > 0)
    : [active as RegistryCategory]

  const filters: { label: string; value: Filter; count: number }[] = [
    { label: "All", value: "all", count: total },
    ...CATEGORY_ORDER.filter((c) => counts[c] > 0).map((c) => ({
      label: CATEGORY_LABELS[c],
      value: c as Filter,
      count: counts[c],
    })),
  ]

  return (
    <div className="p-10 max-w-5xl">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-2">
          Browse all {total} Lumin UI components
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-sm">
          Animated, accessible components for modern React apps.
          Copy, paste, and ship.
        </p>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
              active === f.value
                ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            }`}
          >
            {f.label}
            <span className={`text-xs ${active === f.value ? "text-neutral-400 dark:text-neutral-600" : "text-neutral-400 dark:text-neutral-500"}`}>
              {f.count}
            </span>
          </button>
        ))}
      </div>

      {/* Category groups */}
      <div className="space-y-10">
        {visibleCategories.map((cat) => {
          const entries = visible.filter((e) => e.category === cat)
          return (
            <div key={cat}>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                  {CATEGORY_LABELS[cat]}
                </h2>
                <span className="text-xs text-neutral-400 dark:text-neutral-600 font-medium">
                  {entries.length}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-1">
                {entries.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/components/${entry.slug}`}
                    className="py-0.5 w-fit text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 hover:underline underline-offset-2 transition-colors"
                  >
                    {entry.name}
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
