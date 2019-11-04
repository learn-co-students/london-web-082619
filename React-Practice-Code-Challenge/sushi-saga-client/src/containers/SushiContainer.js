import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, nextFour, eatSushi}) => {
  return (
    <Fragment>
      <div className="belt">
        {
          sushis.map(sushi => <Sushi eatSushi={eatSushi} key={sushi.id} {...sushi}/> )
        }
        <MoreButton nextFour={nextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer