import React, {Component} from 'react'
import { Route, IndexRoute, Link } from 'react-router'

import AppBox from '../containers/AppBox';
import Mail from '../apps/Mail';
import Customer from '../apps/Customer';
import Setting from '../apps/Setting';

const routes = (
  <Route path="/demo" component={AppBox}>
    <IndexRoute component={Mail}/>
    <Route path="/customer" component={Customer} />
    <Route path="/setting" component={Setting} />
  </Route>
)

export default routes;