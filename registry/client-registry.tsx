"use client"

import { ComponentType } from "react"
import AnimatedButton from "./animated-button/animated-button"
import CardSkeleton from "./card-stack/card-stack"
import LaunchPage from "./launch-page/launch-page"
import Integration from "./integration/integration"
import Pricing from "./pricing/pricing-01"
import { DottedGlowBackground } from "./dotted-background/dotted-background"
import { SlidingNumber } from "./sliding-number/sliding-number"
import ContentCard from "./content-card/content-card"
import DisclosureCard from "./disclosure-card/disclosure-card"
import { ConcentricProgress } from "./concentric-progress/concentric-progress"
import DashboardCards from "./dashboard-cards/dashboard-cards"
import ProgressRow from "./progress-row/progress-row"
import { useEffect, useState } from "react"

function ConcentricProgressPreview() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ConcentricProgress
        rings={[
          { value: 68, strokeClass: "stroke-violet-600 dark:stroke-violet-500" },
          { value: 32, strokeClass: "stroke-green-500 dark:stroke-green-400" },
        ]}
        sizeClass="w-48 h-48"
      />
    </div>
  )
}

const DEMO_VALUES = [0, 1234, 56789, 999, 42000, 7500]

function SlidingNumberPreview() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % DEMO_VALUES.length)
    }, 1800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center bg-background">
      <SlidingNumber number={DEMO_VALUES[index]} thousandSeparator="," className="text-6xl font-bold tabular-nums" />
    </div>
  )
}

export const clientComponents: Record<string, ComponentType> = {
  "animated-button": AnimatedButton,
  "card-stack": CardSkeleton,
  "launch-page": LaunchPage,
  "integration": Integration,
  "pricing": Pricing,
  "dotted-background": DottedGlowBackground,
  "sliding-number": SlidingNumberPreview,
  "content-card": ContentCard,
  "disclosure-card": DisclosureCard,
  "concentric-progress": ConcentricProgressPreview,
  "dashboard-cards": DashboardCards,
  "progress-row": function ProgressRowPreview() {
    return (
      <div className="w-full h-full flex flex-col justify-center gap-6 px-8">
        <ProgressRow name="Madrid" value={45} color="bg-violet-600 dark:bg-violet-500" textColor="text-violet-700 dark:text-violet-400" />
        <ProgressRow name="Lisbon" value={80} color="bg-green-500 dark:bg-green-400" textColor="text-green-500 dark:text-green-400" />
      </div>
    )
  },
}
