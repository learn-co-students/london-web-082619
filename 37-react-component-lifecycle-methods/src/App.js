import React from 'react'
import './App.css'
import WorkoutList from './components/WorkoutList'
import WorkoutsForm from './components/WorkoutsForm'

const WORKOUTS_URL = 'http://localhost:3001/workouts'

class App extends React.Component {
  constructor() {
    super()
    console.log('app constructor')
  }
  state = {
    something: false,
    workouts: []
  }

  componentDidMount() {
    console.log('app mounted')
    fetch(WORKOUTS_URL)
      .then(res => res.json())
      .then(workouts => this.setState({ workouts }))
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('app updated', prevProps, prevState.something)
  }

  deleteWorkout = id => {
    fetch(`${WORKOUTS_URL}/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(() => {
        this.setState({
          workouts: this.state.workouts.filter(workout => workout.id !== id)
        })
      })
  }

  addWorkouts = newWorkouts =>
    this.setState({
      workouts: [...this.state.workouts, ...newWorkouts]
    })

  render() {
    console.log('app render')
    return (
      <div className="App">
        <WorkoutList
          workouts={this.state.workouts}
          deleteWorkout={this.deleteWorkout}
        />
        <WorkoutsForm submitWorkouts={this.addWorkouts} />
      </div>
    )
  }
}

export default App
