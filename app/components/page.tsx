import { redirect } from "next/navigation"
import { registry } from "@/registry"

export default function ComponentsIndex() {
  redirect(`/components/${registry[0].slug}`)
}
