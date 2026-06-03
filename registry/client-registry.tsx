"use client"

import { ComponentType } from "react"
import AnimatedButton from "./animated-button/animated-button"
import CardSkeleton from "./card-stack/card-stack"
import LaunchPage from "./launch-page/launch-page"
import Integration from "./integration/integration"
import Pricing from "./pricing/pricing-01"
import { DottedGlowBackground } from "./dotted-background/dotted-background"
import { SlidingNumber } from "./sliding-number/sliding-number"
import { useEffect, useState } from "react"

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
}
