import React, { PureComponent } from 'react'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'
import { Offers, NotFound } from '../index'

export class App extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/offers" />
          <Route exact path="/offers" component={Offers} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
