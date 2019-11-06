import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Paths from "../helpers/Paths"
import PaintingForm from "./PaintingForm"
import PaintingDetail from "./PaintingDetail"
import ErrorRoute from "./ErrorRoute"

const FormSelector = (props) => {
  return (
    <Switch>
      <Route path={Paths.editPainting(props.match.params.id)}
        component={routerProps => <PaintingForm {...routerProps}/>} />
      <Route path={Paths.showPainting(props.match.params.id)}
        component={routerProps => <PaintingDetail {...routerProps} />} />
      <ErrorRoute />
    </Switch>
  )
}

export default FormSelector