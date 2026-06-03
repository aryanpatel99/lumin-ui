import { ArrowRight } from "lucide-react"
import Link from "next/link"
import AnimatedButton from "@/registry/animated-button/animated-button"
import CardSkeleton from "@/registry/card-stack/card-stack"
import { DottedGlowBackground } from "@/registry/dotted-background/dotted-background"
import Integration from "@/registry/integration/integration"
import LaunchPage from "@/registry/launch-page/launch-page"
import { ModeToggle } from "./components/mode-toggle"
import Pricing from "@/registry/pricing/pricing-01"

function PreviewScale({ scale, children }: { scale: number; children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: `${100 / scale}%`,
        height: `${100 / scale}%`,
      }}>
        {children}
      </div>
    </div>
  )
}

function ComponentCard({ slug, name, children }: { slug: string; name: string; children: React.ReactNode }) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden flex flex-col">
      <div className="bg-neutral-50 dark:bg-neutral-900 h-[280px] overflow-hidden relative">
        {children}
      </div>
      <div className="flex items-center justify-between px-4 py-3 bg-background border-t border-neutral-200 dark:border-neutral-800">
        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{name}</span>
        <Link
          href={`/components/${slug}`}
          className="size-7 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          <ArrowRight size={12} className="text-neutral-500" />
        </Link>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <span className="text-md font-medium tracking-tight text-neutral-400">Lumin UI</span>
        <ModeToggle />
      </nav>

      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-semibold tracking-tight mb-4">
          Craft. Ship. Repeat.
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed">
          A growing collection of animated, accessible UI components
          <br className="hidden sm:block" />
          for modern React applications.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          <ComponentCard slug="animated-button" name="Animated Button">
            <AnimatedButton />
          </ComponentCard>

          <ComponentCard slug="card-stack" name="Card Stack">
            <PreviewScale scale={0.88}>
              <CardSkeleton />
            </PreviewScale>
          </ComponentCard>

          <ComponentCard slug="launch-page" name="Launch Page">
            <PreviewScale scale={0.53}>
              <div className="flex items-center justify-center w-full h-full">
                <LaunchPage />
              </div>
            </PreviewScale>
          </ComponentCard>

          <ComponentCard slug="integration" name="Integration">
            <PreviewScale scale={0.47}>
              <Integration />
            </PreviewScale>
          </ComponentCard>

          <ComponentCard slug="pricing" name="Pricing">
            <PreviewScale scale={0.31}>
              <Pricing />
            </PreviewScale>
          </ComponentCard>

          <ComponentCard slug="dotted-background" name="Dotted Background">
            <DottedGlowBackground />
          </ComponentCard>

        </div>
      </section>
    </div>
  )
}
