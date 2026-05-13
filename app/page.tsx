"use client"
import AnimatedButton from "./components/ButtonsComponents/animatedButton";
import CardSkeleton from "./components/Cards/card";
import { DottedGlowBackground } from "./components/dotted-glow-background";
import Integration from "./components/intergation";
import LaunchPage from "./components/landingPage/launchPage";
import { ModeToggle } from "./components/mode-toggle";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen relative">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      {/* <div className="w-full max-w-xl perspective-distant"> */}
      <div className="w-full perspective-distant">
        <CardSkeleton />
        {/* <Integration /> */}
        {/* <LaunchPage/> */}
        {/* <AnimatedButton /> */}
      </div>
    </main>
  )
}

