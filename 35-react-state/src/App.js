import React, { Component } from 'react'
import './App.css'
import artworks from './artworks'
import ArtworkList from './components/ArtworkList'
import Search from './components/Search'

console.log(artworks)

class App extends Component {
  state = {
    artworks: artworks,
    voteFilter: false,
    searchTerm: ''
  }

  changeSearchTerm = searchTerm =>
    this.setState({
      searchTerm
    })

  toggleVoteFilter = () =>
    this.setState({
      voteFilter: !this.state.voteFilter
    })

  filterArtworks = () => {
    // const artworks = this.state.artworks.filter(a =>
    //   this.state.voteFilter ? a.votes < 20 : true
    // )
    const voteFilteredArtworks = this.state.voteFilter
      ? this.state.artworks.filter(a => a.votes < 20)
      : this.state.artworks

    const filteredArtworks = voteFilteredArtworks.filter(a =>
      a.title
        .toLocaleLowerCase()
        .includes(this.state.searchTerm.toLocaleLowerCase())
    )
    return filteredArtworks
  }

  upvoteArtwork = id => {
    console.log('artwork should be upvoted here', id)

    // const artwork = this.state.artworks.find(a => a.id === id)

    // artwork.votes = artwork.votes + 1

    // this.setState({
    //   artworks: [...this.state.artworks]
    // })

    this.setState({
      artworks: this.state.artworks.map(a => {
        if (a.id !== id) return a

        // a.votes = a.votes + 1

        // return a
        return {
          ...a,
          votes: a.votes + 1
        }
      })
    })
  }

  render() {
    const artworks = this.filterArtworks()

    return (
      <div className="App">
        <button onClick={this.toggleVoteFilter}>
          {this.state.voteFilter
            ? 'Show all paintings'
            : 'Show paintings with fewer than 20 votes'}
        </button>
        <Search onChange={this.changeSearchTerm} />
        <ArtworkList artworks={artworks} upvote={this.upvoteArtwork} />
      </div>
    )
  }
}

export default App
