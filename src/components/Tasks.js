import React from 'react'
import Task from './Task'

const Tasks = ({tasks, deleteTask, toggleDone}) => {
  return (
    <div>
        {
            tasks.map((task) => (
                <Task task = {task} deleteTask={deleteTask} toggleDone = {toggleDone}/>
            ))
        }
    </div>
  )
}

export default Tasks