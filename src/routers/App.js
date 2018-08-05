import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'

export default () => (
  <BrowserRouter>
    <Route exact path='/' component={Home}/>
  </BrowserRouter>
)
