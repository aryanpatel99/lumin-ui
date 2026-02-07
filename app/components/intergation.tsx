import { cn } from '@/lib/utils'
import React from 'react'

export default function Integration() {
  return (
    <div className='relative flex justify-center items-center '>
        <Circle />
        <Circle className='size-45' />
        <Circle className='size-65' />
        <Circle className='size-85' />
    </div>
  )
}



export const Circle = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute  border border-neutral-400/50 rounded-full size-20", className)}>

    </div>
  )
}