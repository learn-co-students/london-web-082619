import React from 'react'

class SortAndFilters extends React.Component {
  render() {
    const {
      sortTypes,
      sortType,
      setSortType,
      filterTypes,
      filterType,
      setFilterType
    } = this.props
    return (
      <div>
        <h1 className="ui header">Sort and filter options</h1>
        <div class="ui buttons">
          {sortTypes.map((st, i) => {
            return (
              <>
                <button
                  onClick={() => setSortType(st)}
                  className={
                    st === sortType ? 'ui button positive' : 'ui button'
                  }
                >
                  {st}
                </button>
                {i < sortTypes.length - 1 && <div class="or"></div>}
              </>
            )
          })}
        </div>
        <select
          class="ui dropdown"
          value={filterType}
          onChange={e => setFilterType(e.target.value)}
        >
          {filterTypes.map(ft => (
            <option value={ft}>{ft}</option>
          ))}
        </select>
      </div>
    )
  }
}

export default SortAndFilters
