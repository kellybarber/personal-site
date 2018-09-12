import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Navigation'
import Home from '../pages/Home'
import Resume from '../pages/Resume'
import Blog from '../pages/Blog'

export default () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/blog' component={Blog}/>
      </Switch>
    </div>
  </BrowserRouter>
)
