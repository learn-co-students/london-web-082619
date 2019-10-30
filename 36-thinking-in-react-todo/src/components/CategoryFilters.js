import React from 'react'

class CategoryFilters extends React.Component {
  render() {
    return (
      <div className="categories">
        <h5>Category Filters</h5>
        {this.props.categories.map(category => (
          <button
            key={category}
            onClick={() => this.props.setSelectedCategory(category)}
            className={
              this.props.selectedCategory === category ? 'selected' : undefined
            }
          >
            {category}
          </button>
        ))}
      </div>
    )
  }
}

export default CategoryFilters
