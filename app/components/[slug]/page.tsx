import { notFound } from "next/navigation"
import { getEntry } from "@/registry"
import { codeToHtml } from "shiki"
import fs from "fs"
import path from "path"
import ComponentPage from "./component-page"

const UTILS_CODE = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = getEntry(slug)
  if (!entry) notFound()

  const rawCode = fs.readFileSync(path.join(process.cwd(), entry.file), "utf-8")

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
  const installCmd = `npx shadcn@latest add ${baseUrl}/r/${entry.slug}`

  const defaultUsage = `import ${entry.exportName} from "@/components/${entry.slug}"\n\nexport default function Page() {\n  return <${entry.exportName} />\n}`
  const usageCode = entry.usage ?? defaultUsage

  const [highlightedCode, highlightedUsage, highlightedUtils] = await Promise.all([
    codeToHtml(rawCode, { lang: "tsx", theme: "github-dark" }),
    codeToHtml(usageCode, { lang: "tsx", theme: "github-dark" }),
    codeToHtml(UTILS_CODE, { lang: "ts", theme: "github-dark" }),
  ])

  return (
    <ComponentPage
      slug={entry.slug}
      name={entry.name}
      rawCode={rawCode}
      rawUsage={usageCode}
      highlightedCode={highlightedCode}
      highlightedUsage={highlightedUsage}
      highlightedUtils={highlightedUtils}
      rawUtils={UTILS_CODE}
      npmDependencies={entry.npmDependencies}
      previewHeight={entry.previewHeight}
      previewPadding={entry.previewPadding}
      installCmd={installCmd}
    />
  )
}

export async function generateStaticParams() {
  const { registry } = await import("@/registry")
  return registry.map((e) => ({ slug: e.slug }))
}
