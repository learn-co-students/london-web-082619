import React from 'react'

const HogDetails = ({ weight, medal, greased }) => {
  return (
    <div class="extra content">
      <a>
        <i class="user icon"></i>
        Weight: {weight}
      </a>
      <a>
        <i class="user icon"></i>
        Medal: {medal}
      </a>
      <a>
        <i class="paragraph icon"></i>
        Greased: {greased ? 'YES' : 'NO'}
      </a>
    </div>
  )
}

class HogCard extends React.Component {
  state = {
    showDetails: false
  }

  snakeCaseName = name => name.toLowerCase().replace(/ /g, '_')

  toggleDetails = () =>
    this.setState({
      showDetails: !this.state.showDetails
    })

  render() {
    const { name, specialty, weight, greased } = this.props
    const medal = this.props['highest medal achieved']
    return (
      <div className="card">
        <div class="image">
          <img src={require(`../hog-imgs/${this.snakeCaseName(name)}.jpg`)} />
        </div>
        <div class="content">
          <div class="header">{name}</div>
          <div class="meta">{specialty}</div>
        </div>
        {this.state.showDetails && (
          <HogDetails weight={weight} medal={medal} greased={greased} />
        )}
        <button className="ui olive button" onClick={this.toggleDetails}>
          {this.state.showDetails ? 'Hide details' : 'Show details'}
        </button>
      </div>
    )
  }
}

export default HogCard
