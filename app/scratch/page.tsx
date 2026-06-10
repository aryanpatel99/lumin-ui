import ContentCard from '@/registry/content-card/content-card'
import React from 'react'
import { ModeToggle } from '../components/mode-toggle'

const page = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50 dark:bg-neutral-950'>
        <ContentCard/>
    </div>
  )
}

export default page