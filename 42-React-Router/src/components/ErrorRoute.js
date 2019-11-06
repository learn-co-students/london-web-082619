import React from 'react'
import { Link, Route } from 'react-router-dom'
import Paths from "../helpers/Paths"

const ErrorRoute = () => {
  return (
    <Route path="*"
        component={() => (
          <div>
          <h3>No Route Found</h3>
          <Link to={Paths.root}>Go Back To Paintings List</Link>
          </div>
        )} />
    
  )
}

export default ErrorRoute