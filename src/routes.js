import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

import App from 'containers/App';
import Home from 'components/Home';
import Footer from 'components/Footer';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="footer" component={Footer}/>
  </Route>
)

export default routes
