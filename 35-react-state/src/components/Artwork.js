import React from 'react'

class Artwork extends React.Component {
  upvote = message => {
    console.log(message || 'uipvote please')
  }

  renderButton = () => {
    if (this.props.downvote) {
      return <button></button>
    } else {
      return <button></button>
    }
  }

  render() {
    const { title, image, date, votes, id } = this.props.artwork

    const myobj = {
      name: 'sam',
      age: 28
    }

    const obj = {
      ...myobj,
      age: 29
    }

    return (
      <div className="artwork">
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <p>date: {date}</p>
        <p>votes: {votes} votes</p>
        {this.props.downvote ? (
          <button
            onClick={this.downvote}
            onClick={() => this.downvote('upvateo hybrid')}
            onClick={() => this.props.downvote(id)}
            onClick={this.props.downvote}
          >
            down
          </button>
        ) : (
          <button
            onClick={this.upvote}
            onClick={() => this.upvote('upvateo hybrid')}
            onClick={() => this.props.upvote(id)}
            onClick={this.props.upvote}
          >
            upvote
          </button>
        )}
      </div>
    )
  }
}

export default Artwork
