"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface Entry {
  slug: string
  name: string
}

export default function SidebarNav({ entries }: { entries: Entry[] }) {
  const pathname = usePathname()

  return (
    <ul className="space-y-0.5 mt-1">
      {entries.map((entry) => {
        const href = `/components/${entry.slug}`
        const active = pathname === href
        return (
          <li key={entry.slug}>
            <Link
              href={href}
              className={cn(
                "block px-3 py-1.5 rounded-lg text-sm transition-colors",
                active
                  ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
              )}
            >
              {entry.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
