import React from 'react'

class Totaliser extends React.Component {
  state = {
    increase: false,
    decrease: false,
    timeoutId: undefined
  }

  componentDidUpdate(prevProps) {
    console.log('totaliser updated')
    if (prevProps.total < this.props.total - 50) {
      this.setState({
        increase: true,
        timeoutId: setTimeout(() => this.setState({ increase: false }), 1000)
      })
    } else if (prevProps.total > this.props.total) {
      this.setState({
        decrease: true,
        timeoutId: setTimeout(() => this.setState({ decrease: false }), 1000)
      })
    }
  }

  componentWillUnmount() {
    console.log('totaliser unmounted')
    clearTimeout(this.state.timeoutId)
  }

  render() {
    return (
      <div
        className={`totaliser ${
          this.state.increase
            ? 'pulse-green'
            : this.state.decrease
            ? 'pulse-red'
            : ''
        }`}
      >
        {this.props.total}kgs
      </div>
    )
  }
}

export default Totaliser
