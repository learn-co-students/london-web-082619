import React from 'react'

const Task = ({ text, category, deleteTask }) => {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteTask}>
        X
      </button>
    </div>
  )
}

export default Task
