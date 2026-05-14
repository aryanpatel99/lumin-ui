import { motion } from "motion/react"
const AnimatedButton = () => {
  return (
    <div 
    className="perspective::[1000px] [transform_style:preserve-3d] h-full w-full flex items-center justify-center"
    style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px , rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
        boxShadow: "0 0 20px rgba(6,182,212,0.2)"
    }}
    >
        <motion.button
        initial={{ rotate:0 }}
        whileHover={{rotateX:20, rotateY:10}}
        transition={{duration:0.2, ease:"easeInOut"}}
        style={{
            translateZ:100
        }}
        className="relative group text-neutral-300 border border-neutral-700 rounded-lg bg-black px-6 py-2 shadow-[0_1px_1px_0px_rgba(255,255,255,0.1)_inset,0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] text-xl">
            <span className="group-hover:">Subscribe</span>
            <span className="absolute inset-x-0 bottom-0 bg-linear-to-r from-transparent via-cyan-400 to-transparent h-px w-3/4 mx-auto"></span>
            <span className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-transparent via-cyan-400 to-transparent h-1 blur-lg w-full mx-auto"></span>
        </motion.button>
    </div>
  )
}

export default AnimatedButton