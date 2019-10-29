import React from 'react'

class Artwork extends React.Component {
  render() {
    const { title, image, date, votes } = this.props.artwork

    return (
      <div className="artwork">
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <p>date: {date}</p>
        <p>votes: {votes} votes</p>
        <button onClick={this.props.upvote}>upvote</button>
      </div>
    )
  }
}

export default Artwork
