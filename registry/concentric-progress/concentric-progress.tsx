"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import {motion} from 'motion/react'

// --- TYPES ---

export interface RadialRing {
    value: number        // e.g. 87 (representing 87%)
    strokeClass: string  // e.g. 'stroke-violet-600'
}

export interface ConcentricProgressProps {
    rings: RadialRing[]
    sizeClass?: string   
    strokeWidth?: number // Thickness of the rings
    className?: string   // Custom styles for the SVG wrapper
}

// ---  1: Concentric Rings Component ---
// This renders *only* the SVG rings. It can take any number of rings (1, 2, 3, etc.)
// and dynamically calculates their radii so they nest perfectly.
export function ConcentricProgress({
    rings,
    sizeClass = 'w-36 h-36',
    strokeWidth = 7,
    className,
}: ConcentricProgressProps) {
    const baseRadius = 36 // Radius of the outermost circle
    const spacing = 10    // Space between concentric circles

    return (
        <svg 
            className={cn("-rotate-90", sizeClass, className)} 
            viewBox="0 0 100 100"
            role="img" 
            aria-label="Concentric progress chart"
        >
            {rings.map((ring, index) => {
                // Calculate radius for each nested circle (outer to inner)
                const radius = baseRadius - index * spacing
                const circumference = 2 * Math.PI * radius
                const clampedValue = Math.min(Math.max(ring.value, 0), 100)
                const strokeDashoffset = circumference * (1 - clampedValue / 100)

                return (
                    <React.Fragment key={index}>
                        {/* Background Track Circle */}
                        <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            className="stroke-neutral-100 dark:stroke-neutral-800"
                            strokeWidth={strokeWidth}
                            fill="transparent"
                        />
                        {/* Active Progress Circle */}
                        <motion.circle
                            cx="50"
                            cy="50"
                            r={radius}
                            className={cn(ring.strokeClass)}
                            strokeWidth={strokeWidth}
                            fill="transparent"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            // Start empty and animate to final fill state
                            initial={{ strokeDashoffset: circumference }}
                            animate={{ strokeDashoffset: strokeDashoffset }}
                            // Custom transition (bezier curve for that premium springy ease-out)
                            transition={{ 
                                duration: 1.5, 
                                ease: [0.16, 1, 0.3, 1], // easeOutExpo
                                delay: index * 0.15 // Staggers inner rings slightly after outer rings
                            }}
                        />
                    </React.Fragment>
                )
            })}
        </svg>
    )
}

// --- STANDALONE EXPORT 2: Full Card Wrapper Component ---
// This is the complete dashboard card that imports and uses the ConcentricProgress component.
interface ConcentricProgressCardProps {
    valueLeft: number
    titleLeft?: string
    valueRight: number
    titleRight?: string
    tooltipTitle?: string
    tooltipSub?: string
}

export default function ConcentricProgressCard({
    valueLeft,
    titleLeft = "Stock sold",
    valueRight,
    titleRight = "Monthly revenue",
    tooltipTitle = "Stock sold",
    tooltipSub = "1,400 / 1,600",
}: ConcentricProgressCardProps) {
    // Define the concentric rings configuration
    const rings: RadialRing[] = [
        { value: valueLeft, strokeClass: 'stroke-violet-600 dark:stroke-violet-500' }, // Outer ring
        { value: valueRight, strokeClass: 'stroke-green-500 dark:stroke-green-400' },   // Inner ring
    ]

    return (
        <div className={cn("w-full h-[20rem] px-8 py-8 border border-neutral-100 dark:border-none bg-white dark:bg-neutral-900 rounded-[2rem] flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)]")}>
            {/* Stats Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-50 tracking-tight">{valueLeft}%</h2>
                    <p className="text-sm font-medium text-neutral-400 tracking-wide mt-0.5">{titleLeft}</p>
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-50 tracking-tight">{valueRight}%</h2>
                    <p className="text-sm font-medium text-neutral-400 tracking-wide mt-0.5">{titleRight}</p>
                </div>
            </div>

            {/* Circular Chart Area */}
            <div className="relative flex items-center justify-center h-40 w-full mt-auto">
                {/* We use the exported ConcentricProgress component here */}
                <ConcentricProgress rings={rings} />

                {/* Glassmorphism Tooltip Badge */}
                <motion.div 
                initial={{ opacity: 0, bottom:"0%" }}
                animate={{ opacity: 1, bottom:"6%" }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute right-2 bg-white/70 dark:bg-neutral-900/75 backdrop-blur-md border border-white/20 dark:border-neutral-800/80 rounded-2xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col gap-0.5">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-violet-600 dark:bg-violet-500" />
                        <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">{tooltipTitle}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500 ml-4">{tooltipSub}</span>
                </motion.div>
            </div>
        </div>
    )
}
