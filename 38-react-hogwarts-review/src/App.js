import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav'

import API from './adapters/API'
import HogsList from './components/HogsList'
import SortAndFilters from './components/SortAndFilters'
import { SORT_TYPES, FILTER_TYPES } from './config'

class App extends Component {
  state = {
    hogs: [],
    sortType: 'Default',
    filterType: 'All'
  }

  componentDidMount() {
    API.getHogs().then(hogs => this.setState({ hogs }))
  }

  setSortType = sortType =>
    this.setState({
      sortType
    })

  setFilterType = filterType => this.setState({ filterType })

  sortHogs = (hogs, sortType) => {
    if (sortType === SORT_TYPES.DEFAULT) return hogs
    return [...hogs].sort((a, b) => {
      if (sortType === SORT_TYPES.NAME) return a.name.localeCompare(b.name)
      if (sortType === SORT_TYPES.WEIGHT) return b.weight - a.weight
    })
  }

  filterHogs = (hogs, filterType) => {
    if (filterType === FILTER_TYPES.ALL) return hogs
    if (filterType === FILTER_TYPES.GREASED_ONLY)
      return hogs.filter(h => h.greased)
  }

  render() {
    const sortedHogs = this.sortHogs(this.state.hogs, this.state.sortType)
    const hogsToRender = this.filterHogs(sortedHogs, this.state.filterType)

    return (
      <div className="App">
        <Nav />
        <SortAndFilters
          sortTypes={Object.values(SORT_TYPES)}
          setSortType={this.setSortType}
          sortType={this.state.sortType}
          filterTypes={Object.values(FILTER_TYPES)}
          filterType={this.state.filterType}
          setFilterType={this.setFilterType}
        />
        <HogsList hogs={hogsToRender} />
      </div>
    )
  }
}

export default App
