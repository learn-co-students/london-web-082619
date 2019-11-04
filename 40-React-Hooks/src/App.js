import React, { useState, useEffect } from "react";
import Faker from 'faker'
import DogContainer from "./DogContainer";

const App = () => {

  // setState - used to bring state functionality to a functional component.
  // setState returns an array containing two variables.
  // The first is the state variable (dogs in this case) set to whatever we give setState as an argument.
  // The second is a function that changes that variable and triggers a reRender.
  // The setDogs function takes one argument and completely replaces the state variable with the new argument,
  // which then triggers the rerender
  
  const [ dogs, setDogs ] = useState([])

  const increaseDogs = () => setDogs([...dogs, Faker.name.firstName() ])
  const decreaseDogs = () => setDogs(dogs.slice(0, -1))

  return (
    <div>
      <h3>Dogs Counter</h3>
      <p>{dogs.length}</p>
      <button onClick={increaseDogs}>+</button>
      <button onClick={decreaseDogs}>-</button>
      <DogContainer dogs={dogs} />
    </div>
  )
}

export default App