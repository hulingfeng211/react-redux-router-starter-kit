import React, {Component} from 'react'
import { Route, IndexRoute, Link } from 'react-router'
import { Group, Container, NavBar, View } from 'amazeui-touch';

import App from './containers/App';
import Home from './components/Home';
import Detail from './components/Detail';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path=":component" component={Detail}/>
  </Route>
)

export default routes;
