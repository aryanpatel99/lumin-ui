export type RegistryCategory = "components" | "marketing" | "dashboard" | "backgrounds"

export interface RegistryEntry {
  slug: string
  name: string
  exportName: string
  file: string
  category: RegistryCategory
  previewScale: number
  previewHeight?: number
  previewPadding?: number
  usage?: string
}

export const registry: RegistryEntry[] = [
  {
    slug: "animated-button",
    name: "Animated Button",
    exportName: "AnimatedButton",
    file: "registry/animated-button/animated-button.tsx",
    category: "components",
    previewScale: 1,
  },
  {
    slug: "card-stack",
    name: "Card Stack",
    exportName: "CardSkeleton",
    file: "registry/card-stack/card-stack.tsx",
    category: "components",
    previewScale: 0.88,
  },
  {
    slug: "content-card",
    name: "Content Card",
    exportName: "ContentCard",
    file: "registry/content-card/content-card.tsx",
    category: "components",
    previewScale: 0.55,
  },
  {
    slug: "disclosure-card",
    name: "Disclosure Card",
    exportName: "DisclosureCard",
    file: "registry/disclosure-card/disclosure-card.tsx",
    category: "components",
    previewScale: 0.65,
  },
  {
    slug: "sliding-number",
    name: "Sliding Number",
    exportName: "SlidingNumber",
    file: "registry/sliding-number/sliding-number.tsx",
    category: "components",
    previewScale: 1,
    usage: `import { SlidingNumber } from "@/registry/sliding-number/sliding-number"

export default function Page() {
  return (
    <SlidingNumber
      number={1234}
      thousandSeparator=","
      className="text-4xl font-bold tabular-nums"
    />
  )
}`,
  },
  {
    slug: "concentric-progress",
    name: "Concentric Progress",
    exportName: "ConcentricProgress",
    file: "registry/concentric-progress/concentric-progress.tsx",
    category: "components",
    previewScale: 1,
    usage: `import { ConcentricProgress } from "@/registry/concentric-progress/concentric-progress"

export default function Page() {
  return (
    <ConcentricProgress
      rings={[
        { value: 68, strokeClass: "stroke-violet-600 dark:stroke-violet-500" },
        { value: 32, strokeClass: "stroke-green-500 dark:stroke-green-400" },
      ]}
      sizeClass="w-40 h-40"
    />
  )
}`,
  },
  {
    slug: "dotted-background",
    name: "Dotted Background",
    exportName: "DottedGlowBackground",
    file: "registry/dotted-background/dotted-background.tsx",
    category: "backgrounds",
    previewScale: 1,
  },
  {
    slug: "launch-page",
    name: "Launch Page",
    exportName: "LaunchPage",
    file: "registry/launch-page/launch-page.tsx",
    category: "marketing",
    previewScale: 0.53,
  },
  {
    slug: "integration",
    name: "Integration",
    exportName: "Integration",
    file: "registry/integration/integration.tsx",
    category: "marketing",
    previewScale: 0.47,
  },
  {
    slug: "pricing",
    name: "Pricing",
    exportName: "Pricing",
    file: "registry/pricing/pricing-01.tsx",
    category: "marketing",
    previewScale: 0.31,
  },
  {
    slug: "dashboard-cards",
    name: "Dashboard Cards",
    exportName: "DashboardCards",
    file: "registry/dashboard-cards/dashboard-cards.tsx",
    category: "dashboard",
    previewScale: 0.55,
    previewHeight: 824,
    previewPadding: 32,
  },
  {
    slug: "progress-row",
    name: "Progress Row",
    exportName: "ProgressRow",
    file: "registry/progress-row/progress-row.tsx",
    category: "dashboard",
    previewScale: 1,
    usage: `import ProgressRow from "@/registry/progress-row/progress-row"

export default function Page() {
  return (
    <div className="flex flex-col gap-6 w-72">
      <ProgressRow
        name="Madrid"
        value={45}
        color="bg-violet-600 dark:bg-violet-500"
        textColor="text-violet-700 dark:text-violet-400"
      />
      <ProgressRow
        name="Lisbon"
        value={80}
        color="bg-green-500 dark:bg-green-400"
        textColor="text-green-500 dark:text-green-400"
      />
    </div>
  )
}`,
  },
]

export function getEntry(slug: string): RegistryEntry | undefined {
  return registry.find((e) => e.slug === slug)
}
