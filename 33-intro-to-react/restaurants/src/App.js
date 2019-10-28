import React from 'react'
import logo from './logo.svg'
import './App.css'
import restaurantData, { cuisines, restaurants } from './restaurants'
import RestaurantListItem from './RestaurantListItem'

console.log(restaurantData, cuisines, restaurants)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {restaurants.map(restaurantObject => (
          <RestaurantListItem />
        ))}
      </header>
    </div>
  )
}

export default App
