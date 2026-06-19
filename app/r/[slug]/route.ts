import { NextResponse } from "next/server"
import { registry, getEntry } from "@/registry"
import fs from "fs"
import path from "path"

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = getEntry(slug)

  if (!entry) {
    return NextResponse.json({ error: "Component not found" }, { status: 404 })
  }

  const content = fs.readFileSync(path.join(process.cwd(), entry.file), "utf-8")

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? new URL(req.url).origin

  const ourSlugs = new Set(registry.map((e) => e.slug))
  const registryDeps = [
    "utils",
    ...(entry.registryDependencies ?? []).map((dep) =>
      ourSlugs.has(dep) ? `${baseUrl}/r/${dep}` : dep
    ),
  ]

  return NextResponse.json({
    name: entry.slug,
    type: "registry:component",
    dependencies: ["clsx", "tailwind-merge", ...entry.npmDependencies],
    registryDependencies: registryDeps,
    files: [
      {
        path: entry.installPath ?? `components/${entry.slug}.tsx`,
        content,
        type: "registry:component",
      },
    ],
  })
}
