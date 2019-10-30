import React from 'react'

class NewTaskForm extends React.Component {
  state = {
    text: '',
    category: 'Code'
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    // call the function passed from App
    this.props.addTask({
      ...this.state // spread the key:value pairs into a new object
    })

    // reset the form values
    this.setState({
      text: '',
      category: 'Code'
    })
  }

  render() {
    return (
      <form
        className="new-task-form"
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      >
        <input
          name="text"
          type="text"
          placeholder="Task details..."
          value={this.state.text}
        />
        <select name="category" value={this.state.category}>
          {this.props.categories.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </form>
    )
  }
}

export default NewTaskForm
