import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-5 bg-gray-700 h-screen w-screen flex flex-col gap-5'>
        <Header data={data}/>
        <TaskListNumber  data={data}/>
        <TaskList  data={data}/>
    </div>
  )
}

export default EmployeeDashboard