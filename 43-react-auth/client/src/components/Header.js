import React from 'react'

import logo from '../logo.svg'
import { Button } from '@material-ui/core'

const Header = ({ username, signOut }) => (
  <header className='App-header'>
    <img src={logo} className='App-logo' alt='logo' />
    <h1 className='App-title'>
      {username ? `Welcome back, ${username}!` : 'Welcome to React.'}
      <br />
      {username && (
        <Button onClick={signOut} variant='contained' color='primary'>
          SIGN OUT
        </Button>
      )}
    </h1>
  </header>
)

export default Header
