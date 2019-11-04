import React from 'react'
import Dog from "./Dog"

const DogContainer = ({ dogs }) => (
  <div className="dog-container">
    {dogs.map(dog => <Dog key={dog} name={dog} />)}
  </div>
)

export default DogContainer