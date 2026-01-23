import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTasks from '../Others/AllTasks'
const AdminDashboard = () => {
  return (
    <div className='bg-gray-700 h-screen w-screen flex flex-col gap-5 px-5 py-2'>
      <Header/>
      <CreateTask/>
      <AllTasks/>
     
    </div>
  )
}

export default AdminDashboard