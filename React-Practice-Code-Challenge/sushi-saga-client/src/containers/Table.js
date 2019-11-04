import React, { Fragment } from 'react'

const Table = ({eatenSushis, budget, noBudget}) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      {
      noBudget ?
      <h1 className="remaining">
        You're running low on cash! You have: ${ budget } remaining!
      </h1>
        :
      <h1 className="remaining">
        You have: ${ budget } remaining!
      </h1>
      }
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(eatenSushis)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table