import React from 'react'
import HogCard from './HogCard'

class HogsList extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.hogs.map(hog => (
          <HogCard key={hog.id} {...hog} />
        ))}
      </div>
    )
  }
}

export default HogsList
