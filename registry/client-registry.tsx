"use client"

import { ComponentType } from "react"
import AnimatedButton from "./animated-button/animated-button"
import CardSkeleton from "./card-stack/card-stack"
import LaunchPage from "./launch-page/launch-page"
import Integration from "./integration/integration"
import Pricing from "./pricing/pricing-01"
import { DottedGlowBackground } from "./dotted-background/dotted-background"

export const clientComponents: Record<string, ComponentType> = {
  "animated-button": AnimatedButton,
  "card-stack": CardSkeleton,
  "launch-page": LaunchPage,
  "integration": Integration,
  "pricing": Pricing,
  "dotted-background": DottedGlowBackground,
}
