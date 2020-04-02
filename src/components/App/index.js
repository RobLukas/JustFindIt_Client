import React from 'react'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Offers, NotFound } from '../index'
import CheckOfferExists from '../Page/Offers/CheckOfferExists'

const App = () => (
  <Router history={createBrowserHistory}>
    <Switch>
      <Redirect exact from="/" to="/offers" />
      <Route exact path="/offers" component={Offers} />
      <Route
        exact
        path="/offers/:offerId"
        render={CheckOfferExists(props => (
          <Offers {...props} />
        ))}
      />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default App
