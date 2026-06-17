"use client"

import { useState } from "react"
import { Check, Copy, Expand } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { clientComponents } from "@/registry/client-registry"
import { ModeToggle } from "@/app/components/mode-toggle"

type Tab = "preview" | "code" | "usage"
type InstallTab = "cli" | "manual"

interface Props {
  slug: string
  name: string
  rawCode: string
  rawUsage: string
  rawUtils: string
  highlightedCode: string
  highlightedUsage: string
  highlightedUtils: string
  npmDependencies: string[]
  previewHeight?: number
  previewPadding?: number
  installCmd: string
}

function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
      className={cn("shrink-0 transition-colors", className)}
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
    </button>
  )
}

const DEFAULT_PREVIEW_HEIGHT = 600

export default function ComponentPage({
  slug, name, rawCode, rawUsage, rawUtils,
  highlightedCode, highlightedUsage, highlightedUtils,
  npmDependencies, previewHeight, previewPadding, installCmd,
}: Props) {
  const PREVIEW_HEIGHT = previewHeight ?? DEFAULT_PREVIEW_HEIGHT
  const [tab, setTab] = useState<Tab>("preview")
  const [installTab, setInstallTab] = useState<InstallTab>("cli")
  const [copied, setCopied] = useState(false)

  const Component = clientComponents[slug]

  const handleCopy = async () => {
    await navigator.clipboard.writeText(tab === "usage" ? rawUsage : rawCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const installDeps = ["clsx", "tailwind-merge", ...npmDependencies].join(" ")

  return (
    <div className="p-8 max-w-5xl mx-auto pb-24">
      {/* Header */}
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
      <div className="border rounded-b-lg border-neutral-200 dark:border-neutral-800 overflow-hidden mb-12">
        {tab === "preview" && (
          <div className="bg-background relative overflow-auto" style={{ height: PREVIEW_HEIGHT }}>
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
            <div className="w-full h-full flex items-center justify-center" style={previewPadding ? { padding: previewPadding } : undefined}>
              {Component && <Component />}
            </div>
          </div>
        )}
        {(tab === "code" || tab === "usage") && (
          <div className="relative bg-[#0d1117]" style={{ minHeight: PREVIEW_HEIGHT }}>
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
              dangerouslySetInnerHTML={{ __html: tab === "code" ? highlightedCode : highlightedUsage }}
            />
          </div>
        )}
      </div>

      {/* Installation */}
      <h2 className="text-lg font-semibold mb-4">Installation</h2>

      {/* CLI / Manual toggle */}
      <div className="flex gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg w-fit mb-6">
        {(["cli", "manual"] as InstallTab[]).map((t) => (
          <button
            key={t}
            onClick={() => setInstallTab(t)}
            className={cn(
              "px-4 py-1.5 text-sm rounded-md capitalize transition-colors font-medium",
              installTab === t
                ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-sm"
                : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
            )}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {/* CLI tab */}
      {installTab === "cli" && (
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">Run the following command:</p>
          <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800 font-mono text-sm">
            <span className="text-neutral-300 truncate">{installCmd}</span>
            <CopyButton text={installCmd} className="text-neutral-400 hover:text-neutral-100" />
          </div>
        </div>
      )}

      {/* Manual tab */}
      {installTab === "manual" && (
        <div className="flex flex-col">

          {/* Step 1 */}
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-600 dark:text-neutral-400 shrink-0">1</div>
              <div className="w-px flex-1 bg-neutral-200 dark:bg-neutral-800 mt-2" />
            </div>
            <div className="flex-1 pb-10">
              <p className="text-sm font-medium mb-3 mt-1">Install dependencies</p>
              <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800 font-mono text-sm">
                <span className="text-neutral-300">npm install {installDeps}</span>
                <CopyButton text={`npm install ${installDeps}`} className="text-neutral-400 hover:text-neutral-100" />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-600 dark:text-neutral-400 shrink-0">2</div>
              <div className="w-px flex-1 bg-neutral-200 dark:bg-neutral-800 mt-2" />
            </div>
            <div className="flex-1 pb-10">
              <p className="text-sm font-medium mb-3 mt-1">Add <code className="text-xs bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">lib/utils.ts</code></p>
              <div className="relative rounded-lg overflow-hidden border border-neutral-800 bg-[#0d1117]">
                <CopyButton text={rawUtils} className="absolute top-3 right-3 z-10 text-neutral-400 hover:text-neutral-100" />
                <div
                  className="p-4 text-sm overflow-auto [&>pre]:bg-transparent! [&>pre]:p-0!"
                  dangerouslySetInnerHTML={{ __html: highlightedUtils }}
                />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-600 dark:text-neutral-400 shrink-0">3</div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium mb-3 mt-1">Copy the source code</p>
              <div className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-2">components/{slug}.tsx</div>
              <div className="relative rounded-lg overflow-hidden border border-neutral-800 bg-[#0d1117]">
                <button
                  onClick={async () => {
                    await navigator.clipboard.writeText(rawCode)
                  }}
                  className="absolute top-3 right-3 z-10 text-neutral-400 hover:text-neutral-100 transition-colors"
                >
                  <Copy size={13} />
                </button>
                <div
                  className="p-4 text-sm overflow-auto max-h-96 [&>pre]:bg-transparent! [&>pre]:p-0! [&>pre]:whitespace-pre-wrap! [&_code]:wrap-anywhere"
                  dangerouslySetInnerHTML={{ __html: highlightedCode }}
                />
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}
