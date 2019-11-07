import React, { Component } from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'

import Header from './components/Header'
import SignInForm from './components/SignInForm'
import Inventory from './components/Inventory'

import './App.css'
import API from './API'

class App extends Component {
  state = {
    username: ''
  }

  signIn = user => {
    this.setState({ username: user.username })
    localStorage.setItem('token', user.token)
  }

  signOut = () => {
    this.setState({ username: '' })
    localStorage.removeItem('token')
  }

  componentDidMount () {
    const token = localStorage.getItem('token')
    if (token) {
      API.validate()
        .then(data => {
          if (data.error) throw Error(data.error)

          this.signIn(data)
          this.props.history.push('/inventory')
        })
        .catch(error => alert(error))
    }
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
