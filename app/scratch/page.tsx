import React from 'react'
import ProgressRow from '@/components/progress-row'

const page = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50 dark:bg-neutral-950'>
      <div className='flex flex-col gap-6 w-72'>
        <ProgressRow name="Madrid" value={45} color="bg-violet-600 dark:bg-violet-500" textColor="text-violet-700 dark:text-violet-400" />
        <ProgressRow name="Lisbon" value={80} color="bg-green-500 dark:bg-green-400" textColor="text-green-500 dark:text-green-400" />
      </div>
    </div>
  )
}

export default page
