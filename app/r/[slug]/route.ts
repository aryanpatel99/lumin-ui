import { NextResponse } from "next/server"
import { getEntry } from "@/registry"
import fs from "fs"
import path from "path"

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = getEntry(slug)

  if (!entry) {
    return NextResponse.json({ error: "Component not found" }, { status: 404 })
  }

  const content = fs.readFileSync(
    path.join(process.cwd(), entry.file),
    "utf-8"
  )

  return NextResponse.json({
    name: entry.slug,
    type: "registry:component",
    dependencies: ["clsx", "tailwind-merge", "motion"],
    files: [
      {
        path: `components/${entry.slug}.tsx`,
        content,
        type: "registry:component",
      },
    ],
  })
}
