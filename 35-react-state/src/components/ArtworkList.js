import React from 'react'
import Artwork from './Artwork'

const ArtworkList = props => {
  return (
    <div className="artworks">
      {props.artworks.map((artwork, i) => (
        <Artwork
          key={artwork.id}
          artwork={artwork}
          upvote={() => console.log('upvote in app', artwork.id)}
          downvote={i % 3 === 0}
        />
      ))}
    </div>
  )
}

export default ArtworkList
