import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Navigation'
import Home from '../pages/Home'

export default () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  </BrowserRouter>
)
