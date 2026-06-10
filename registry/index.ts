export interface RegistryEntry {
  slug: string
  name: string
  exportName: string // actual exported identifier in the file
  file: string       // path relative to project root, used for fs.readFileSync
  previewScale: number
}

export const registry: RegistryEntry[] = [
  {
    slug: "animated-button",
    name: "Animated Button",
    exportName: "AnimatedButton",
    file: "registry/animated-button/animated-button.tsx",
    previewScale: 1,
  },
  {
    slug: "card-stack",
    name: "Card Stack",
    exportName: "CardSkeleton",
    file: "registry/card-stack/card-stack.tsx",
    previewScale: 0.88,
  },
  {
    slug: "launch-page",
    name: "Launch Page",
    exportName: "LaunchPage",
    file: "registry/launch-page/launch-page.tsx",
    previewScale: 0.53,
  },
  {
    slug: "integration",
    name: "Integration",
    exportName: "Integration",
    file: "registry/integration/integration.tsx",
    previewScale: 0.47,
  },
  {
    slug: "pricing",
    name: "Pricing",
    exportName: "Pricing",
    file: "registry/pricing/pricing-01.tsx",
    previewScale: 0.31,
  },
  {
    slug: "dotted-background",
    name: "Dotted Background",
    exportName: "DottedGlowBackground",
    file: "registry/dotted-background/dotted-background.tsx",
    previewScale: 1,
  },
  {
    slug: "sliding-number",
    name: "Sliding Number",
    exportName: "SlidingNumber",
    file: "registry/sliding-number/sliding-number.tsx",
    previewScale: 1,
  },
  {
    slug: "content-card",
    name: "Content Card",
    exportName: "ContentCard",
    file: "registry/content-card/content-card.tsx",
    previewScale: 0.55,
  },
]

export function getEntry(slug: string): RegistryEntry | undefined {
  return registry.find((e) => e.slug === slug)
}
