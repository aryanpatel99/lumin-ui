"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import {motion} from 'motion/react'
const DisclosureCard = () => {
  return (
    <div className="relative w-80 h-104 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="absolute inset-0 [clip-path:inset(0_round_1rem)]">
      <motion.div
      whileHover="hover"
      initial="initial"
      className="relative w-full h-full"
      >
        <img
        src="https://images.unsplash.com/photo-1631631480669-535cc43f2327?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="scene-image" className='w-full h-full object-cover hover:scale-105 transition-all duration-500 ease-out' />
        <motion.div
        variants={{
          initial:{ y:120 },
          hover:{ y:0 }
        }}
        transition={{type:"spring",stiffness:100, damping:20}}
        className='absolute z-10 h-40 w-full bottom-0 rounded-t-2xl px-4 py-2 flex flex-col bg-black/40 backdrop-blur-2xl'>
          <h4 className='text-neutral-200 font-semibold text-lg'>Take a slow walk today</h4>
          <p className='text-neutral-300 text-sm mt-2'>Some paths don't need a destination — just the crunch of fallen leaves underfoot, soft autumn light through the trees, and the kind of quiet that clears your head.</p>
        </motion.div>
      </motion.div>
      </div>
    </div>
  )
}

export default DisclosureCard