import React, { Component, PropTypes } from 'react';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Container, Group, TabBar, NavBar, View} from 'amazeui-touch'

import Footer from '../components/Footer';

import DevTools from './DevTools';

class App extends Component {
    constructor(props) {
      super(props)
    }
    render() {

      return (
        <View id="app-index">
          <NavBar amStyle="primary" title="Onepage 3.0 Touch" />
          <Container direction="column" id="container" >
            <Container scrollable>
              {this.props.children}
            </Container>
            <Footer />
          </Container>
        </View>
      );
    }
}

export default App;