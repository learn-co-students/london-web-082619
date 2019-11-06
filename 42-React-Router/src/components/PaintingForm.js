import React, { Component } from "react"
import API from "../helpers/API"
import Paths from "../helpers/Paths"
import { Link } from "react-router-dom"

class PaintingForm extends Component {
  
  state = { 
    id: "",
    image: "",
    title: "",
    name: "",
    birthday: "",
    deathday: ""
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    const patchObject = {
      title: this.state.title,
      artist: {
        name: this.state.name, 
        birthday: this.state.birthday, 
        deathday: this.state.deathday
      }
    }
    API.patch(API.paintingURL(this.props.match.params.id), patchObject)
    .then(() => this.props.history.push(Paths.showPainting(this.props.match.params.id)))
  }

  getPaintingToEdit = () => {
    API.get(API.paintingURL(this.props.match.params.id))
    .then(painting => this.setState({
        id: painting.id,
        image: painting.image,
        title: painting.title,
        name: painting.artist.name,
        birthday: painting.artist.birthday,
        deathday: painting.artist.deathday
     })
    )
  }

  componentDidMount() {
    this.getPaintingToEdit()
  }

  render() {
    const { image, title, name, birthday, deathday } = this.state
    const { handleChange, handleSubmit } = this
    return (
      <div className="ui centered card">
        <div>
          <img alt={title} src={image}/>
        </div>
        <form className="ui form" onSubmit={handleSubmit}>
          <input className="ui field" name="title" value={title} onChange={handleChange}/>
          <input className="ui field" name="name" value={name} onChange={handleChange}/>
          <input className="ui field" name="birthday" value={birthday} onChange={handleChange}/>
          <input className="ui field" name="deathday" value={deathday} onChange={handleChange}/>
          <Link to={Paths.editPainting(this.props.match.params.id)}><button className="ui button" type="button" >Cancel</button></Link>
          <button className="ui button" type="submit">Save</button>
        </form>
      </div>
    )
    }
}

export default PaintingForm;