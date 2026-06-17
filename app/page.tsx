import { ArrowRight } from "lucide-react"
import Link from "next/link"
import AnimatedButton from "@/registry/animated-button/animated-button"
import CardSkeleton from "@/registry/card-stack/card-stack"
import { DottedGlowBackground } from "@/registry/dotted-background/dotted-background"
import Integration from "@/registry/integration/integration"
import LaunchPage from "@/registry/launch-page/launch-page"
import { ModeToggle } from "./components/mode-toggle"
import { GitHubIcon } from "./icons"
import Pricing from "@/registry/pricing/pricing-01"
import ContentCard from "@/registry/content-card/content-card"
import DisclosureCard from "@/registry/disclosure-card/disclosure-card"
import { ConcentricProgress } from "@/registry/concentric-progress/concentric-progress"
import DashboardCards from "@/registry/dashboard-cards/dashboard-cards"
import ProgressRow from "@/registry/progress-row/progress-row"

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

function ComponentCard({ slug, name, children, wide }: { slug: string; name: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <div className={`border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden flex flex-col${wide ? ' col-span-full' : ''}`}>
      <div className={`bg-background overflow-hidden relative ${wide ? 'h-[420px]' : 'h-[280px]'}`}>
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
        <span className="text-md font-medium tracking-tight text-neutral-800 dark:text-neutral-400">Lumin UI</span>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/aryanpatel99/lumin-ui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Lumin UI on GitHub"
            className="size-9 rounded-md flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <GitHubIcon className="size-5" />
          </a>
          <ModeToggle />
        </div>
      </nav>

      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-semibold tracking-tight mb-4">
          Built to Be Seen. Designed to Be Used.
          
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed">
          A growing collection of animated, accessible UI components
          <br className="hidden sm:block" />
          for modern applications.
        </p>

        <Link href='/components'><div className="bg-neutral-800 w-[14rem] hover:scale-102 transition-all duration-200 text-center mx-auto text-white py-3 px-8 mt-10 rounded-[2rem] cursor-pointer">Browse Components</div></Link>
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

          <ComponentCard slug="content-card" name="Content Card">
            <PreviewScale scale={0.55}>
              <div className="flex items-center justify-center w-full h-full">
                <ContentCard />
              </div>
            </PreviewScale>
          </ComponentCard>

          <ComponentCard slug="disclosure-card" name="Disclosure Card">
            <PreviewScale scale={0.65}>
              <div className="flex items-center justify-center w-full h-full">
                <DisclosureCard />
              </div>
            </PreviewScale>
          </ComponentCard>

          <ComponentCard slug="concentric-progress" name="Concentric Progress">
            <div className="w-full h-full flex items-center justify-center">
              <ConcentricProgress
                rings={[
                  { value: 68, strokeClass: "stroke-violet-600 dark:stroke-violet-500" },
                  { value: 32, strokeClass: "stroke-green-500 dark:stroke-green-400" },
                ]}
                sizeClass="w-36 h-36"
              />
            </div>
          </ComponentCard>

          <ComponentCard slug="progress-row" name="Progress Row">
            <div className="w-full h-full flex flex-col justify-center gap-6 px-8">
              <ProgressRow name="Madrid" value={45} color="bg-violet-600 dark:bg-violet-500" textColor="text-violet-700 dark:text-violet-400" />
              <ProgressRow name="Lisbon" value={80} color="bg-green-500 dark:bg-green-400" textColor="text-green-500 dark:text-green-400" />
            </div>
          </ComponentCard>

          <ComponentCard slug="dashboard-cards" name="Dashboard Cards" wide>
            <PreviewScale scale={0.55}>
              <div className="flex items-center justify-center w-full h-full">
                <DashboardCards />
              </div>
            </PreviewScale>
          </ComponentCard>

        </div>
      </section>
    </div>
  )
}
