import React, { Component } from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'

import Header from './components/Header'
import SignInForm from './components/SignInForm'
import Inventory from './components/Inventory'

import './App.css'

class App extends Component {
  state = {
    username: ''
  }

  signIn = username => {
    this.setState({ username })
  }

  signOut = () => {
    this.setState({ username: '' })
  }

  render () {
    return (
      <div className='App'>
        <Header username={this.state.username} signOut={this.signOut} />
        <Switch>
          <Route exact path='/' component={() => <h1>Home page!</h1>} />
          <Route
            path='/signin'
            component={routerProps => (
              <SignInForm {...routerProps} signIn={this.signIn} />
            )}
          />
          <Route
            path='/inventory'
            component={routerProps => (
              <Inventory {...routerProps} username={this.state.username} />
            )}
          />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
