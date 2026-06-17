import { NextResponse } from "next/server"
import { registry } from "@/registry"

export async function GET(req: Request) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? new URL(req.url).origin

  const registryDependencies = registry.map((entry) => `${baseUrl}/r/${entry.slug}`)

  return NextResponse.json({
    name: "all",
    type: "registry:component",
    dependencies: [],
    registryDependencies,
    files: [],
  })
}
