import React, {Component} from 'react'
import { Link } from 'react-router'
import * as test from 'react-router-redux'
import {LOCATION_CHANGE, routerActions} from 'react-router-redux'
import { NavBar, View } from 'amazeui-touch';

import * as Components from '../components';

class SubBox extends Component {

  render() {

    let component = this.props.params.component;

    if (component) {
      component = component.charAt(0).toUpperCase() + component.slice(1);
    }

    let Currentcomponent = Components[component] || NotFound;
    let backNav = {
      component: Link,
      icon: 'left-nav',
      title: '返回',
      props: {
        to: '/m'
      }
    };

    return (
      <View>
        <NavBar
          title={component}
          amStyle="primary"
        />
        <Currentcomponent scrollable className="sk-demos" />
      </View>
      )
  }
};

export default SubBox;