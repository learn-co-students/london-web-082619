import React from 'react'
import Task from './Task'

const TaskList = props => {
  return (
    <div className="tasks">
      <h5>Tasks</h5>
      {props.form}
      {props.tasks.map(task => (
        <Task {...task} deleteTask={() => props.deleteTask(task)} />
      ))}
    </div>
  )
}

export default TaskList
