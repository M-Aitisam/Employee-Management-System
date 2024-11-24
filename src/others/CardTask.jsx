import React from 'react'

const CardTask = () => {
  return (
    <div className='flex  mt-10 justify-between gap-5 screen'>
        <div className=' rounded-xl py-6  px-9 w-[45%] bg-red-500'>
            <h2 className='text-3xl font-semibold'> 0</h2>
            <h2 className='text-xl font-medium'> New Task</h2>
        </div>
        <div className=' rounded-xl py-6  px-9 w-[45%] bg-blue-500'>
            <h2 className='text-3xl font-semibold'> 0</h2>
            <h2 className='text-xl font-medium'> New Task</h2>
        </div>
        <div className=' rounded-xl py-6  px-9 w-[45%] bg-green-500'>
            <h2 className='text-3xl font-semibold'> 0</h2>
            <h2 className='text-xl font-medium'> New Task</h2>
        </div>
        <div className=' rounded-xl py-6  px-9 w-[45%] bg-yellow-500'>
            <h2 className='text-3xl font-semibold'> 0</h2>
            <h2 className='text-xl font-medium'> New Task</h2>
        </div>
    </div>
  )
}

export default CardTask
