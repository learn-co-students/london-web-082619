import React from 'react'
import Workout from './Workout'

class WorkoutList extends React.Component {
  constructor() {
    super()
    console.log('workout list constructor')
  }
  componentDidMount() {
    console.log('workout list mounted')
  }
  componentDidUpdate() {
    console.log('workout list updated')
  }
  render() {
    console.log('workout list render')

    const { workouts, deleteWorkout } = this.props

    return (
      <div className="sidebar list">
        {workouts.map(workout => (
          <Workout
            {...workout}
            deleteWorkout={() => deleteWorkout(workout.id)}
          />
        ))}
      </div>
    )
  }
}

export default WorkoutList
