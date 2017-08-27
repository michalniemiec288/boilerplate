import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import ResetPassword from './ResetPassword'

import requireAuth from '../utils/authenticated'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/login" component={Login} />
    <Route
      path="/logout"
      component={() =>
        <div>Zostałeś wylogowany</div>
      }
    />
    <Route path="/register" component={Register} />
    <Route path="/reset" component={ResetPassword} />
    <Route path="/profile" component={Profile} onEnter={requireAuth} />
    <Route
      path='*'
      component={() =>
        <div>Nie znaleziono strony</div>
      } 
    />
  </Route>
)
