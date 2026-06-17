"use client"
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)) }
import React from 'react'
import { ChatGpt, GoogleSheet2, InstagramIcon, LogoIcon, MetaIcon } from '@/app/icons'
import { motion } from 'motion/react'


export default function Integration() {
  return (
    <div
      style={{
        transform: "rotateY(20deg) rotateX(20deg)"
      }}
      className='relative flex justify-center items-center w-full h-full'>

      <Circle delay={0.6} className=" shadow-sm border-neutral-200/50 dark:border-neutral-700 size-120 z-6 bg-neutral-100/20 dark:bg-neutral-800/20" />
      <Circle delay={0.45} className=" shadow-sm border-neutral-200/50 dark:border-neutral-700 size-100 z-7 bg-neutral-100/30 dark:bg-neutral-800/40" />
      <Circle delay={0.3} className='shadow-sm border-neutral-200/50 dark:border-neutral-700 size-80 z-8 bg-neutral-100/50 dark:bg-neutral-800/60' />
      <Circle delay={0.15} className='shadow-sm border-neutral-200/70 dark:border-neutral-700 size-60 z-8 bg-neutral-100/80 dark:bg-neutral-800/80' />
      <Circle delay={0} className='flex items-center justify-center border-neutral-200 dark:bg-neutral-800 shadow-sm' >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          className='size-9 dark:text-white flex items-center justify-center'
        >
          <LogoIcon className='size-full' />
        </motion.div>

        <OrbitCircle delay={0.9} className='[--translate-position:120px]'>
          <ChatGpt className='size-9 dark:text-white' />
        </OrbitCircle>
        <OrbitCircle delay={1.1} className='[--translate-position:160px] [--orbit-duration:8s]'>
          <MetaIcon className='size-9 text-blue-600 ' />
        </OrbitCircle>
        <OrbitCircle delay={1.3} className='[--translate-position:200px] [--orbit-duration:10s]'>
          <InstagramIcon className='size-9 text-pink-600 ' />
        </OrbitCircle>
        <OrbitCircle delay={1.5} className='[--translate-position:240px] [--orbit-duration:12s]'>
          <GoogleSheet2 className='size-9 ' />
        </OrbitCircle>
      </Circle>
    </div>
  )
}



export const Circle = ({ className, children, delay = 0 }: { className?: string, children?: React.ReactNode, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut", type: "spring", stiffness: 100, damping: 15 }}
      style={{
        ["--orbit-start-delay" as any]: `${delay + 1}s`
      }}
      className={cn("size-40 absolute z-10 rounded-full bg-white/40 border border-transparent dark:border-neutral-700", className)}>
      {children}
    </motion.div>
  )
}

// 🔹 Refactored OrbitCircle to handle animation separately
export const OrbitCircle = ({ className, children, delay = 0 }: { className?: string, children?: React.ReactNode, delay?: number }) => {
  return (
    <div className={cn(
      "absolute flex justify-center items-center rounded-full [--translate-position:120px] [--orbit-duration:6s]",
      "animate-orbit [animation-delay:var(--orbit-start-delay)]",
      className
    )}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay, duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-center size-full bg-white border ring-1 ring-black/10 rounded-sm dark:bg-neutral-900"
      >
        {children}
      </motion.div>
    </div>
  )
}