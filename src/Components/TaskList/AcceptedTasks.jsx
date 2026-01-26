import React from 'react'

const AcceptedTasks = () => {
  return (
    <div className='bg-yellow-200 w-75 h-[45vh] rounded-2xl flex flex-col p-5 gap-5 shrink-0'>
        <div className=' flex justify-between items-center font-bold text-lg'>
          <p className='bg-red-300 py-1 px-2 rounded-lg'>High</p>
          <p>20 jan 2026</p>
        </div>
        <div className='flex flex-col items-start gap-3'>
          <h1 className='text-2xl font-bold'>UI design of EMS</h1>
          <p className='text-start text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit temporibus aspernatur aliquam saepe. Eveniet, voluptatem.</p>
        </div>
        <div className='flex justify-between align-bottom'>
            <button className='px-3 py-1 bg-green-400 rounded-sm text-white'>Complete</button>
            <button className='px-3 py-1 bg-red-400 rounded-sm text-white'>Failed</button>
        </div>
      </div>
  )
}

export default AcceptedTasks