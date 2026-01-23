import React from 'react'

const CreateTask = () => {
  return (
     <div className=' bg-gray-600 py-3 px-5 rounded-2xl h-[55vh]'>
        <form className='flex justify-between ' >
         <div className='w-[40%] flex flex-col gap-2'>
           <div className='w-full'>
            <h2 className='pb-1 text-gray-100 '>Task Title</h2>
            <input className='w-full outline-0 border border-gray-100 py-2 rounded-sm placeholder:text-gray-400 px-2' type="text" placeholder="Make a UI Design" />
          </div>
          <div>
            <h2 className='pb-1 text-gray-100 '>Date</h2>
            <input className='w-full outline-0 border border-gray-100 py-2 rounded-sm text-gray-400 px-2' type="date"  />
          </div>
          <div>
            <h2 className='pb-1 text-gray-100 '>Assign to</h2>
            <input className='w-full outline-0 border border-gray-100 py-2 rounded-sm placeholder:text-gray-400 px-2' type="text" placeholder='employee name'/>
          </div>
          <div>
            <h2 className='pb-1 text-gray-100 '>Category</h2>
            <input className='w-full outline-0 border border-gray-100 py-2 rounded-sm placeholder:text-gray-400 px-2' type="text" placeholder='design, dev, etc' />
          </div>
         </div>
         <div className='w-[40%] flex flex-col h-[45vh]   items-start'>
          <h2 className='pb-2 text-gray-100'>Description</h2>
          <textarea className='w-full min-h-[70%] outline-0 border border-gray-100'></textarea>
          <button className='w-full bg-green-400 py-2 my-3 rounded-sm text-gray-100 '>Create Task</button>
         </div>
        </form>
      </div>
  )
}

export default CreateTask