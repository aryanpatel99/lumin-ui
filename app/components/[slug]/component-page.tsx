"use client"

import { useState } from "react"
import { Check, Copy, Expand } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { clientComponents } from "@/registry/client-registry"
import { ModeToggle } from "@/app/components/mode-toggle"

type Tab = "preview" | "code" | "usage"

interface Props {
  slug: string
  name: string
  rawCode: string
  highlightedCode: string
  highlightedUsage: string
}

const PREVIEW_HEIGHT = 600

export default function ComponentPage({ slug, name, rawCode, highlightedCode, highlightedUsage }: Props) {
  const [tab, setTab] = useState<Tab>("preview")
  const [copied, setCopied] = useState(false)
  const [isDark] = useState(false)

  const Component = clientComponents[slug]

  const handleCopy = async () => {
    const text = tab === "usage"
      ? `import ${name.replace(/\s/g, "")} from "@/registry/${slug}/${slug}"\n\nexport default function Page() {\n  return <${name.replace(/\s/g, "")} />\n}`
      : rawCode
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">{name}</h1>
        <ModeToggle />
      </div>

      {/* Tab bar */}
      <div className="flex items-center gap-1 border-b border-neutral-200 dark:border-neutral-800">
        {(["preview", "code", "usage"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "px-4 py-2 text-sm capitalize transition-colors border-b-2 -mb-px",
              tab === t
                ? "border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 font-medium"
                : "border-transparent text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div className="border border-t-lg rounded-t-lg border-neutral-200 dark:border-neutral-800 rounded-b-lg overflow-hidden mt-2">

        {/* Preview — fixed height so h-full works inside components */}
        {tab === "preview" && (
          <div className={isDark ? "dark" : ""}>
            <div
              className="bg-neutral-50 dark:bg-neutral-900 relative overflow-auto"
              style={{ height: PREVIEW_HEIGHT }}
            >
              <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
                <Link
                  href={`/preview/${slug}`}
                  target="_blank"
                  className="p-1.5 rounded-full bg-background border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  aria-label="Open fullscreen"
                >
                  <Expand size={13} className="text-neutral-500" />
                </Link>
              </div>
              {/* Wrapper fills the container — components using h-full get PREVIEW_HEIGHT */}
              <div className="w-full h-full">
                {Component && <Component />}
              </div>
            </div>
          </div>
        )}

        {/* Code / Usage */}
        {(tab === "code" || tab === "usage") && (
          <div className="relative bg-[#111]" style={{ minHeight: PREVIEW_HEIGHT }}>
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs bg-neutral-700/60 hover:bg-neutral-700 text-neutral-300 transition-colors"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? "Copied" : "Copy"}
            </button>
            <div
              className="overflow-auto p-4 text-sm [&>pre]:bg-transparent! [&>pre]:p-0! [&>pre]:whitespace-pre-wrap! [&_code]:wrap-anywhere"
              style={{ maxHeight: PREVIEW_HEIGHT + 200 }}
              dangerouslySetInnerHTML={{
                __html: tab === "code" ? highlightedCode : highlightedUsage,
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
