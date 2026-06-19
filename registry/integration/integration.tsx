"use client"
import { cn } from '@/lib/utils'
import React from 'react'

const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4.92285 14.8848H0V9.96191H4.92285V14.8848ZM19.6924 14.8848H9.84668V9.96191H4.92383V5.03809H9.84668V0.115234H19.6924V14.8848ZM9.84668 9.96191H14.7695V5.03906H9.84668V9.96191ZM4.92285 5.03809H0V0.115234H4.92285V5.03809Z" fill="currentColor" /></svg>
)

const ChatGpt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 12v-6a2 2 0 0 1 4 0v6m0 -2a2 2 0 1 1 2 2h-6" /><path d="M12 12h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1 -2 2v-6" /><path d="M12 12v6a2 2 0 0 1 -4 0v-6m0 2a2 2 0 1 1 -2 -2h6" /><path d="M12 12h-6a2 2 0 0 1 0 -4h6m-2 0a2 2 0 1 1 2 -2v6" /></svg>
)

const MetaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z" /><path d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z" /></svg>
)

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
)

const GoogleSheet2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><mask id="m0" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="9" height="10"><path d="M5.3832 0.148682H1.63009C1.26581 0.148682 0.967773 0.446723 0.967773 0.810995V9.2003C0.967773 9.56457 1.26581 9.86261 1.63009 9.86261H7.37014C7.73441 9.86261 8.03245 9.56457 8.03245 9.2003V2.79794L5.3832 0.148682Z" fill="white" /></mask><g mask="url(#m0)"><path d="M5.38222 0.147949H1.62911C1.26484 0.147949 0.966797 0.44599 0.966797 0.810263V9.19957C0.966797 9.56384 1.26484 9.86188 1.62911 9.86188H7.36916C7.73343 9.86188 8.03147 9.56384 8.03147 9.19957V2.7972L6.48608 1.69335L5.38222 0.147949Z" fill="#0F9D58" /><path d="M2.7334 4.89478V8.09596H6.26574V4.89478H2.7334ZM4.2788 7.65441H3.17494V7.10249H4.2788V7.65441ZM4.2788 6.77133H3.17494V6.2194H4.2788V6.77133ZM4.2788 5.88825H3.17494V5.33632H4.2788V5.88825ZM5.82419 7.65441H4.72034V7.10249H5.82419V7.65441ZM5.82419 6.77133H4.72034V6.2194H5.82419V6.77133ZM5.82419 5.88825H4.72034V5.33632H5.82419V5.88825Z" fill="#F1F1F1" /></g><mask id="m1" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="9" height="10"><path d="M5.3832 0.148682H1.63009C1.26581 0.148682 0.967773 0.446723 0.967773 0.810995V9.2003C0.967773 9.56457 1.26581 9.86261 1.63009 9.86261H7.37014C7.73441 9.86261 8.03245 9.56457 8.03245 9.2003V2.79794L5.3832 0.148682Z" fill="white" /></mask><g mask="url(#m1)"><path d="M5.57617 2.60352L8.0317 5.05849V2.79724L5.57617 2.60352Z" fill="url(#g0)" /><path d="M5.38281 0.14917V2.13611C5.38281 2.50204 5.6792 2.79842 6.04513 2.79842H8.03207L5.38281 0.14917Z" fill="#87CEAC" /></g><path d="M5.37929 0.14624H1.62618C1.26191 0.14624 0.963867 0.444281 0.963867 0.808554V9.19786C0.963867 9.56213 1.26191 9.86017 1.62618 9.86017H7.36623C7.7305 9.86017 8.02854 9.56213 8.02854 9.19786V2.79549L5.37929 0.14624Z" fill="url(#g1)" /><defs><linearGradient id="g0" x1="128.366" y1="23.6822" x2="128.366" y2="248.135" gradientUnits="userSpaceOnUse"><stop stopColor="#263238" stopOpacity="0.2" /><stop offset="1" stopColor="#263238" stopOpacity="0.02" /></linearGradient><radialGradient id="g1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(23.3451 19.3452) scale(1139.17 1139.17)"><stop stopColor="white" stopOpacity="0.1" /><stop offset="1" stopColor="white" stopOpacity="0" /></radialGradient></defs></svg>
)

import { motion } from 'motion/react'


export default function Integration() {
  return (
    <div
      style={{ transform: "rotateY(20deg) rotateX(20deg)" }}
      className='relative flex justify-center items-center w-full h-full'>
      <style>{`@keyframes orbit{from{transform:rotate(0deg) translate(var(--translate-position)) rotate(0deg)}to{transform:rotate(360deg) translate(var(--translate-position)) rotate(-360deg)}}`}</style>

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
    <div
      className={cn(
        "absolute flex justify-center items-center rounded-full [--translate-position:120px] [--orbit-duration:6s]",
        className
      )}
      style={{
        animation: "orbit var(--orbit-duration, 6s) linear infinite",
        animationDelay: "var(--orbit-start-delay, 0s)",
      }}
    >
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