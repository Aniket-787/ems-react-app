import React from 'react'

const Header = ({data}) => {
  return (
    <div className='w-full p-2 flex justify-between items-center'>
        <div className='text-xl text-white '> Hello,<br /><span className='text-3xl font-bold'>{data.firstName}👋</span></div>
        <button className='py-1 px-5 bg-red-500 text-md rounded-sm text-white'>Log Out</button>
    </div>
  )
}

export default Header