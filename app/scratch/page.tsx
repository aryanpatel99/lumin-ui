import React from 'react'
import ProgressRow from '@/components/progress-row'
import Integration from '@/registry/integration/integration'

const page = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50 dark:bg-neutral-950'>
      <Integration/>
    </div>
  )
}

export default page
