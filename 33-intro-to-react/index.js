let state = {
  restaurants: [
    {
      name: 'wasabi'
    },
    {
      name: 'itsu'
    },
    {
      name: 'sushi surprise'
    }
  ]
}

const appEl = document.getElementById('root')

const newRestoButton = document.querySelector('button')

newRestoButton.addEventListener('click', () => {
  setState({
    restaurants: [...state.restaurants, { name: 'jfc' }]
  })
})

const setState = (newState = {}) => {
  state = newState
  render()
}

const render = () => {
  const RestaurantListItem = restaurant => {
    return Sam.createElement('li', {
      innerText: restaurant.name,
      onClick: () => console.log(restaurant.name)
    })
  }

  const restaurantListElement = Sam.createElement('ul', {
    className: 'restaurant-list',
    children: state.restaurants.map(RestaurantListItem)
  })

  appEl.innerHTML = ''
  appEl.append(restaurantListElement)
}

render()
