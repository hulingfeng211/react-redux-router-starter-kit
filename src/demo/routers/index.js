import React, {Component} from 'react'
import { Route, IndexRoute, Link } from 'react-router'

import AppBox from '../containers/AppBox';

//邮箱
import Mail from '../apps/Mail';
import Inbox from '../components/mail/Inbox';
import DraftBox from '../components/mail/DraftBox';
import TrashBox from '../components/mail/TrashBox';

//其他APP
import Customer from '../apps/Customer';
import Inquery from '../apps/Inquery';
import Marketing from '../apps/Marketing';
import Setting from '../apps/Setting';

const routes = (
  <Route path="/demo" component={AppBox}>
  	<Route component={Mail}>
        <IndexRoute component={Inbox} />
        <Route path="mail/inbox" component={Inbox} />
        <Route path="mail/draft" component={DraftBox} />
        <Route path="mail/trash" component={TrashBox} />
    </Route>
    <Route path="customer" component={Customer} />
    <Route path="inquery" component={Inquery} />
    <Route path="marketing" component={Marketing} />
    <Route path="setting" component={Setting} />
  </Route>
)

export default routes;