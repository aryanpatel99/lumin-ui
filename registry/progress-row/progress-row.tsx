"use client"
import * as React from 'react'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import {
    useSpring,
    useTransform,
    motion,
    type MotionValue,
    type SpringOptions,
} from 'motion/react'

// --- SlidingNumber (inlined) ---

function SlidingNumberDisplay({ motionValue, number }: { motionValue: MotionValue<number>; number: number }) {
    const y = useTransform(motionValue, (latest) => {
        const current = latest % 10
        const offset = (10 + number - current) % 10
        let translate = offset
        if (offset > 5) translate -= 10
        return `${translate}em`
    })
    return (
        <motion.span
            style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', y }}
        >
            {number}
        </motion.span>
    )
}

function SlidingNumberRoller({ prevValue, value, place, transition }: {
    prevValue: number; value: number; place: number; transition: SpringOptions
}) {
    const startNumber = Math.floor(prevValue / place) % 10
    const targetNumber = Math.floor(value / place) % 10
    const animatedValue = useSpring(startNumber, transition)

    React.useEffect(() => {
        animatedValue.set(targetNumber)
    }, [targetNumber, animatedValue])

    return (
        <span style={{ position: 'relative', display: 'inline-block', width: '1ch', height: '1em', overflow: 'hidden', lineHeight: 1, verticalAlign: 'baseline', fontVariantNumeric: 'tabular-nums' }}>
            <span style={{ visibility: 'hidden' }}>0</span>
            {Array.from({ length: 10 }, (_, i) => (
                <SlidingNumberDisplay key={i} motionValue={animatedValue} number={i} />
            ))}
        </span>
    )
}

function SlidingNumber({ number, transition = { stiffness: 200, damping: 20, mass: 0.4 } }: {
    number: number; transition?: SpringOptions
}) {
    const prevRef = React.useRef<number>(number)
    const prevValue = prevRef.current

    React.useEffect(() => {
        prevRef.current = number
    }, [number])

    const absNumber = Math.abs(number)
    const intStr = Math.floor(absNumber).toString()
    const intPlaces = Array.from({ length: intStr.length }, (_, i) =>
        Math.pow(10, intStr.length - i - 1)
    )
    const absPrev = Math.abs(prevValue)
    const prevIntStr = Math.floor(absPrev).toString()

    return (
        <span className="inline-flex items-center">
            {number < 0 && <span className="mr-[0.1em]">-</span>}
            {intPlaces.map((place) => (
                <SlidingNumberRoller
                    key={place}
                    prevValue={parseInt(prevIntStr, 10)}
                    value={parseInt(intStr, 10)}
                    place={place}
                    transition={transition}
                />
            ))}
        </span>
    )
}

// --- ProgressRow ---

export interface ProgressRowProps {
    name: string
    value: number
    color?: string
    textColor?: string
    className?: string
}

const ProgressRow = ({
    name,
    value,
    color = 'bg-violet-600 dark:bg-violet-500',
    textColor = 'text-violet-700 dark:text-violet-400',
    className,
}: ProgressRowProps) => {
    const [animated, setAnimated] = useState(0)

    useEffect(() => {
        setAnimated(value)
    }, [value])

    return (
        <div className={cn('flex flex-col gap-2 min-w-56', className)}>
            <div className="flex items-center justify-between">
                <span className='text-xs font-medium text-neutral-700 dark:text-neutral-300'>{name}</span>
                <span className={cn('text-xs font-medium', textColor)}>
                    <SlidingNumber number={animated} />%
                </span>
            </div>
            <div className="w-full h-2.5 bg-neutral-100 dark:bg-neutral-800 rounded-full">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${animated}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={cn('h-2.5 rounded-full', color)}
                />
            </div>
        </div>
    )
}

export default ProgressRow
