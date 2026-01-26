import React from 'react'
import NewTasks from './NewTasks'
import CompletedTasks from './CompletedTasks'
import FailedTasks from './FailedTasks'
import AcceptedTasks from './AcceptedTasks'

const TaskList = ({data}) => {
  console.log(data)
  return (
    <div id="TaskList" className='w-full h-[55vh] flex flex-nowrap gap-5 overflow-x-auto'>
      {data.tasks.map((task)=>{
        if(task.active){
          return <AcceptedTasks/>
        }
        if(task.completed){
          return <CompletedTasks/>
        }
        if(task.failed){
          return <FailedTasks/>
        }
        if(task.newTask){
          return <NewTasks/>
        }
      })}
    </div>
  )
}

export default TaskList