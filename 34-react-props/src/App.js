import React, { Component } from 'react'
import './App.css'
import artworks from './artworks'
import ArtworkList from './components/ArtworkList'

console.log(artworks)

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArtworkList artworks={artworks.filter(a => a.votes < 20)} />
      </div>
    )
  }
}

// Artwork({
//   artwork: artwork
// })

export default App
