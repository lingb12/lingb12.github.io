import React  from 'react'
import {
  BrowserRouter as Router, Route, Redirect, Switch
}             from 'react-router-dom'
import routes from './routes'

export default () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      {routes.map(([ url, Component ], i) => <Route key={i} path={url} component={Component} />)}
    </Switch>
  </Router>
)
