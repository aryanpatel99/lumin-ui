"use client"
import { cn } from '@/lib/utils'
import { IconSparkles } from '@tabler/icons-react'
import { motion } from 'motion/react'
import React from 'react'

export default function CardSkeleton() {

    const cards = [
        {
            title: "New",
            description: "Latest Updates and Features",
            date: "Today",
            index: 0,
        },
        {
            title: "Featured",
            description: "Trending This Week",
            date: "2 days ago",
            index: 1,
        },
        {
            title: "Popular",
            description: "Discover Amazing Content",
            date: "Just now",
            index: 2,
        },
    ]

    return (
        <div style={{
            transform: "rotateX(-10deg) rotateY(20deg) translateZ(30px)"
        }} className='relative h-75 mask-radial-from-50%  mask-r-from-50%'>
            <Card className='absolute bottom-23 left-8 w-full hover:-translate-y-10' icon={<IconSparkles />} title={cards[1].title} description={cards[1].description} date={cards[1].date} />
            <Card className='absolute bottom-12 left-20 w-full hover:-translate-y-10' icon={<IconSparkles />} title={cards[2].title} description={cards[2].description} date={cards[2].date} />
            <Card active className='absolute bottom-0 left-32 w-full hover:-translate-y-10' icon={<IconSparkles />} title={cards[0].title} description={cards[0].description} date={cards[0].date} />
        </div>
    )
}




export const Card = ({
    icon,
    title,
    description,
    date,
    className,
    active

}: {
    icon: React.ReactNode,
    title: string,
    description: string,
    date: string,
    className?: string
    active?: boolean
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className={cn(`absolute group h-fit max-w-[85%] my-auto mb-8 bg-muted/70 backdrop-blur-sm bg-linear-to-br from-neutral-900 to-neutral-800 border-2 border-neutral-800 px-5 py-5 rounded-2xl space-y-2 transition-all duration-800 delay-100 ease-out hover:-translate-y-5 hover:border-neutral-700`, className)}>
            <div className='flex items-center gap-3'>
                <div className={cn(`transition-all duration-700 ease-in-out rounded-full p-1 size-7 flex items-center justify-center`, active ? "bg-blue-500" : "group-hover:bg-blue-500 bg-neutral-700")}>{icon}</div>
                <p className={cn('text-lg font-semibold transition-all duration-700 ease-in-out', active ? "text-blue-500" : "text-neutral-500 group-hover:text-blue-500")}>{title}</p>
            </div>
            <p className='text-md text-neutral-200'>{description}</p>
            <p className='text-sm  text-neutral-500'>{date}</p>
        </motion.div>
    )
}


