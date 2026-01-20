import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex gap-5 '>
      <div className='h-[25vh] w-1/4 text-black bg-red-300 rounded-xl flex flex-col items-start gap-3 justify-start p-3'>
      <p className='text-5xl font-bold '>0</p> 
      <p className='text-3xl font-bold '>New Task</p>
      </div>

      <div className='h-[25vh] w-1/4 text-black bg-green-300 rounded-xl flex flex-col items-start gap-3 justify-start p-3'>
      <p className='text-5xl font-bold '>3</p> 
      <p className='text-3xl font-bold '>Completed</p>
      </div>

      <div className='h-[25vh] w-1/4 text-black bg-yellow-300 rounded-xl flex flex-col items-start gap-3 justify-start p-3'>
      <p className='text-5xl font-bold '>0</p> 
      <p className='text-3xl font-bold '>Accepted</p>
      </div>

      <div className='h-[25vh] w-1/4 text-black bg-orange-300 rounded-xl flex flex-col items-start gap-3 justify-start p-3'>
      <p className='text-5xl font-bold '>1</p> 
      <p className='text-3xl font-bold '>Failed</p>
      </div>
    </div>    
  )
}

export default TaskListNumber