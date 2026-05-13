import { Button } from '@/components/ui/button'
import React, { useEffect, useRef, useState } from 'react'
import PhoneVolume from '@/components/ui/phone-volume'
import { motion } from 'motion/react'
import { AnimatedIconHandle } from '@/components/ui/types'
import ArrowNarrowRightIcon from '@/components/ui/arrow-narrow-right-icon'
const LaunchPage = () => {
  const titles = ["beautiful", "amazing", "wonderful", "fantastic", "marvelous"]
  const [titleNumber, setTitleNumber] = useState(0)
  const phoneRef = useRef<AnimatedIconHandle>(null)
  const arrowRef1 = useRef<AnimatedIconHandle>(null)
  const arrowRef2 = useRef<AnimatedIconHandle>(null)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber == titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='flex flex-col items-center justify-center space-y-10 '>
      <div
        onMouseEnter={() => arrowRef1.current?.startAnimation()}
        onMouseLeave={() => arrowRef1.current?.stopAnimation()}
        className='bg-neutral-200/50 px-3 py-1 rounded-sm text-neutral-900 flex items-center gap-2 dark:bg-neutral-700/50 dark:text-neutral-100'>Read our launch article <ArrowNarrowRightIcon ref={arrowRef1} /></div>
      <div className='flex flex-col gap-2 items-center justify-center'>
        <div className='text-7xl tracking-tight'>This is something</div>
        <div className='text-6xl font-bold relative flex items-center justify-center overflow-hidden w-full'>
          &nbsp;
          {titles.map((title, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: "-100%" }}
              animate={
                titleNumber == index
                  ? { opacity: 1, y: 0 }
                  : {
                    y: titleNumber > index ? -150 : 150,
                    opacity: 0
                  }
              }
              transition={{ type: "spring", stiffness: 50 }}
              className='absolute text-center'
            >{title}</motion.span>
          ))}
        </div>
      </div>
      <div className='text-neutral-600 text-lg text-center dark:text-neutral-300/70 leading-relaxed tracking-tight max-w-2xl'>Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.</div>
      <div className='flex gap-2'>
        <Button variant="secondary" className='border group'
          onMouseEnter={() => phoneRef.current?.startAnimation()}
          onMouseLeave={() => phoneRef.current?.stopAnimation()}

        >Jump on a call <PhoneVolume ref={phoneRef} />
        </Button>
        <Button
          onMouseEnter={() => arrowRef2.current?.startAnimation()}
          onMouseLeave={() => arrowRef2.current?.stopAnimation()}
        >Read up here <ArrowNarrowRightIcon ref={arrowRef2} /></Button>
      </div>
    </motion.div>
  )
}

export default LaunchPage

