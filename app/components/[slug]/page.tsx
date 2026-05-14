import { notFound } from "next/navigation"
import { getEntry } from "@/registry"
import { codeToHtml } from "shiki"
import fs from "fs"
import path from "path"
import ComponentPage from "./component-page"

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = getEntry(slug)
  if (!entry) notFound()

  const rawCode = fs.readFileSync(
    path.join(process.cwd(), entry.file),
    "utf-8"
  )

  const [highlightedCode, highlightedUsage] = await Promise.all([
    codeToHtml(rawCode, { lang: "tsx", theme: "github-dark" }),
    codeToHtml(
      `import ${entry.exportName} from "@/registry/${entry.slug}/${entry.slug}"\n\nexport default function Page() {\n  return <${entry.exportName} />\n}`,
      { lang: "tsx", theme: "github-dark" }
    ),
  ])

  return (
    <ComponentPage
      slug={entry.slug}
      name={entry.name}
      rawCode={rawCode}
      highlightedCode={highlightedCode}
      highlightedUsage={highlightedUsage}
    />
  )
}

export async function generateStaticParams() {
  const { registry } = await import("@/registry")
  return registry.map((e) => ({ slug: e.slug }))
}
