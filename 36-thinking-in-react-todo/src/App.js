import React from 'react'
import './App.css'
import { CATEGORIES } from './data'

import CategoryFilters from './components/CategoryFilters'
import TaskList from './components/TaskList'
import NewTaskForm from './components/NewTaskForm'

class App extends React.Component {
  state = {
    selectedCategory: 'All',
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ]
  }

  setSelectedCategory = selectedCategory =>
    this.setState({
      selectedCategory
    })

  deleteTask = task =>
    this.setState({
      tasks: this.state.tasks.filter(
        t => !(t.text === task.text && t.category === task.category)
      )
    })

  filterTasks = (tasks, category) =>
    category === 'All' ? tasks : tasks.filter(t => t.category === category)

  addTask = task =>
    this.setState({
      tasks: [...this.state.tasks, task] // create a new array containing the current tasks PLUS the newTask
    })

  render() {
    const filteredTasks = this.filterTasks(
      this.state.tasks,
      this.state.selectedCategory
    )

    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryFilters
          selectedCategory={this.state.selectedCategory}
          setSelectedCategory={this.setSelectedCategory}
          categories={CATEGORIES}
        />
        <TaskList
          tasks={filteredTasks}
          deleteTask={this.deleteTask}
          form={
            <NewTaskForm
              addTask={this.addTask}
              categories={CATEGORIES.filter(c => c !== 'All')}
            />
          }
        />
      </div>
    )
  }
}

export default App
