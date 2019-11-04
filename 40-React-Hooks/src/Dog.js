import React, { useState, useEffect } from 'react'
import API from "./helpers/API"

const Dog = ({ name }) => {

  const [ age, setAge ] = useState(0)
  const [ likes, setLikes ] = useState(0)
  const [ imageURL, setImageURL] = useState(null)

  const increaseLikes = () => setLikes(likes+1)

  // UseEffect - takes two arguments, a function definition and an array of state variables.
  // If any of the state variables change the useEffect function will run after the rerender

  // This useEffect produces componentDidMount functionality, it will only run one
  // when the component loads, as we haven't passed any state
  // variable into the second argument array
  useEffect(() => {
    API.get(API.randomDogURL)
    .then(dog => setImageURL(dog.message))
  }, [])

  // This useEffect produces componentDidUpdate functionality, as we have passed in the
  // age variable to second argument array. This means this function will run everytime the age
  // changes and triggers a rerender, effectively making it a case-specific componentDidUpdate that
  // doesn't need if conditions to see whether it should do something
  // The funtion that our first argument function returns performs the same action as a componentWillUnmount
  // function. It will only be run when the component is removed from the page, and is commonly used to remove
  //  event listeners/setIntervals/setTimeouts etc
  useEffect(() => {
    const timer = setTimeout(() => setAge(age+1), 1000)
    return () => clearTimeout(timer)
  }, [ age ])

  return(
    <div>
      <p>{name}</p>
      <img style={{ height: "10rem", width: "auto"}}alt={name} src={imageURL} />
      <p>Age in seconds: {age}</p>
      <p>Likes: {likes}</p>
      <button onClick={increaseLikes}>Like</button>
    </div>
  )
}

export default Dog