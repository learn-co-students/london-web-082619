import React from 'react'
import Artwork from './Artwork'

const ArtworkList = props => {
  return (
    <div className="artworks">
      {props.artworks.map((artwork, i) => (
        <Artwork
          key={artwork.id}
          artwork={artwork}
          upvote={() => props.upvote(artwork.id)}
        />
      ))}
    </div>
  )
}

export default ArtworkList
