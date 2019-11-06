import React, { Component } from "react";
import API from "../helpers/API"
import { Link } from 'react-router-dom'
import Paths from '../helpers/Paths'

class PaintingDetail extends Component {

  state = {
    painting: {}
  }

  getPaintingDetails = () => {
    API.get(API.paintingURL(this.props.match.params.id))
    .then(painting => this.setState({ 
      painting: {
        id: painting.id,
        title: painting.title,
        image: painting.image,
        votes: painting.votes,
        name: painting.artist.name,
        birthday: painting.artist.birthday,
        deathday: painting.artist.deathday
      }
     })
    )
  }

  handleVote = () => {
    API.patch(API.paintingURL(this.props.match.params.id), { votes: this.state.painting.votes + 1})
    .then(this.getPaintingDetails)
  }

  componentDidMount() {
    this.getPaintingDetails()
  } 

  render() {
    const { title, image, votes, name, birthday, deathday } = this.state.painting
    const { handleVote } = this
    return (
      <div>
        <img alt={title} src={image} />
        <h3>{title}</h3>
        <h4>{name} {birthday}-{deathday}</h4>
        <Link to={Paths.editPainting(this.props.match.params.id)}><button className="ui button" >Edit</button></Link>
        <button className="ui button" onClick={handleVote}>Vote! {votes}</button>
      </div>
    )
  }

}

export default PaintingDetail