import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import PaintingsList from "./PaintingsList";
import ErrorRoute from "./ErrorRoute"
import FormSelector from "./FormSelector"
import Paths from "../helpers/Paths"
import API from "../helpers/API"

class PaintingsContainer extends Component {
  
  state = {
    paintings: []
  }

  componentDidMount() {
    API.get(API.baseURL)
    .then(paintings => this.setState({ paintings }))
  }
  
  render () {
    const { paintings } = this.state
    return (
        <Switch>
          <Route path={Paths.root} exact 
          component={routerProps => <PaintingsList {...routerProps} paintings={paintings} />} />
          <Route path={Paths.paintings}
            component={routerProps => <FormSelector {...routerProps}/>} />
          <ErrorRoute />
        </Switch>
    )
  }
}

export default PaintingsContainer;