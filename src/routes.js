import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

import App from './containers/App';
import Home from './components/Home';
import Products from './components/Products';
import Persons from './components/Persons';
import Settings from './components/Settings';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="products" component={Products}/>
    <Route path="Persons" component={Persons}/>
    <Route path="Settings" component={Settings}/>
  </Route>
)

export default routes
