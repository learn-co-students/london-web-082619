import React from 'react'

class Search extends React.Component {
  render() {
    return (
      <input
        onChange={e => this.props.onChange(e.target.value)}
        style={{ display: 'block', margin: 'auto' }}
        type="text"
        placeholder="Search..."
      />
    )
  }
}

export default Search
