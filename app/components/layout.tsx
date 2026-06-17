import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { registry } from "@/registry"
import SidebarNav from "./sidebar-nav"

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  const entries = registry.filter((e) => !e.hidden).map((e) => ({ slug: e.slug, name: e.name }))

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <aside className="w-52 shrink-0 border-r border-neutral-200 dark:border-neutral-800 flex flex-col">
        <div className="px-4 pt-5 pb-4 border-b border-neutral-200 dark:border-neutral-800">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <ArrowLeft size={14} />
            Home
          </Link>
        </div>

        <div className="px-4 pt-5 pb-2">
          <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-400">
            Components
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 pb-6">
          <SidebarNav entries={entries} />
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
