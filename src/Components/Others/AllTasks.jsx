import React from 'react'

const AllTasks = () => {
  return (
    <div className='w-full h-[40vh] bg-gray-600 p-4 flex flex-col gap-3 rounded-md overflow-auto'>
        <div className='flex justify-between px-3 py-2 text-white bg-red-400 rounded-sm'>
            <h2>Aniket</h2>
            <h3>Make Ui design</h3>
            <h5>Status</h5>
        </div>
         <div className='flex justify-between px-3 py-2 text-white bg-orange-400 rounded-sm'>
            <h2>Aniket</h2>
            <h3>Make Ui design</h3>
            <h5>Status</h5>
        </div>
         <div className='flex justify-between px-3 py-2 text-white bg-green-400 rounded-sm'>
            <h2>Aniket</h2>
            <h3>Make Ui design</h3>
            <h5>Status</h5>
        </div>
         <div className='flex justify-between px-3 py-2 text-white bg-yellow-400 rounded-sm'>
            <h2>Aniket</h2>
            <h3>Make Ui design</h3>
            <h5>Status</h5>
        </div>
    </div>
  )
}

export default AllTasks