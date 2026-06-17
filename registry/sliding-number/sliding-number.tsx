"use client"

import * as React from "react"
import {
  useSpring,
  useTransform,
  motion,
  type MotionValue,
  type SpringOptions,
  type HTMLMotionProps,
} from "motion/react"
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)) }

// --- Roller: animates a single digit column ---

type RollerProps = {
  prevValue: number
  value: number
  place: number
  transition: SpringOptions
}

function SlidingNumberRoller({ prevValue, value, place, transition }: RollerProps) {
  const startNumber = Math.floor(prevValue / place) % 10
  const targetNumber = Math.floor(value / place) % 10
  const animatedValue = useSpring(startNumber, transition)

  React.useEffect(() => {
    animatedValue.set(targetNumber)
  }, [targetNumber, animatedValue])

  return (
    <span className="relative inline-block w-[1ch] h-[1em] overflow-hidden leading-none align-baseline tabular-nums">
      {/* invisible spacer keeps the baseline correct */}
      <span className="invisible">0</span>
      {Array.from({ length: 10 }, (_, i) => (
        <SlidingNumberDisplay
          key={i}
          motionValue={animatedValue}
          number={i}
        />
      ))}
    </span>
  )
}

// --- Display: positions a single digit at its Y offset (in em, scale-proof) ---

type DisplayProps = {
  motionValue: MotionValue<number>
  number: number
}

function SlidingNumberDisplay({ motionValue, number }: DisplayProps) {
  // Returns an em-based translate string so it never depends on measured pixels
  const y = useTransform(motionValue, (latest) => {
    const current = latest % 10
    const offset = (10 + number - current) % 10
    let translate = offset
    if (offset > 5) translate -= 10
    return `${translate}em`
  })

  return (
    <motion.span
      className="absolute inset-0 flex items-center justify-center"
      style={{ y }}
    >
      {number}
    </motion.span>
  )
}

// --- Public API ---

export type SlidingNumberProps = Omit<HTMLMotionProps<"span">, "children"> & {
  number: number
  decimalSeparator?: string
  decimalPlaces?: number
  thousandSeparator?: string
  transition?: SpringOptions
}

export function SlidingNumber({
  className,
  number,
  decimalSeparator = ".",
  decimalPlaces = 0,
  thousandSeparator,
  transition = { stiffness: 200, damping: 20, mass: 0.4 },
  ...props
}: SlidingNumberProps) {
  const prevRef = React.useRef<number>(number)
  const prevValue = prevRef.current

  React.useEffect(() => {
    prevRef.current = number
  }, [number])

  const absNumber = Math.abs(number)
  const numberStr = decimalPlaces != null ? absNumber.toFixed(decimalPlaces) : absNumber.toString()
  const [intStrRaw, decStrRaw = ""] = numberStr.split(".")

  const intLength = intStrRaw.length
  const intPlaces = Array.from({ length: intLength }, (_, i) =>
    Math.pow(10, intLength - i - 1)
  )

  const absPrev = Math.abs(prevValue)
  const prevStr = decimalPlaces != null ? absPrev.toFixed(decimalPlaces) : absPrev.toString()
  const [prevIntRaw = ""] = prevStr.split(".")

  return (
    <motion.span
      className={cn("inline-flex items-center", className)}
      {...props}
    >
      {number < 0 && <span className="mr-[0.1em]">-</span>}

      {intPlaces.map((place, idx) => {
        const digitsToRight = intLength - idx - 1
        const showSeparator =
          thousandSeparator !== undefined &&
          digitsToRight > 0 &&
          digitsToRight % 3 === 0

        return (
          <React.Fragment key={`int-${place}`}>
            <SlidingNumberRoller
              prevValue={parseInt(prevIntRaw || "0", 10)}
              value={parseInt(intStrRaw, 10)}
              place={place}
              transition={transition}
            />
            {showSeparator && <span>{thousandSeparator}</span>}
          </React.Fragment>
        )
      })}

      {decStrRaw && (
        <>
          <span>{decimalSeparator}</span>
          {Array.from({ length: decStrRaw.length }, (_, i) =>
            Math.pow(10, decStrRaw.length - i - 1)
          ).map((place) => (
            <SlidingNumberRoller
              key={`dec-${place}`}
              prevValue={parseInt(prevStr.split(".")[1] || "0", 10)}
              value={parseInt(decStrRaw, 10)}
              place={place}
              transition={transition}
            />
          ))}
        </>
      )}
    </motion.span>
  )
}
