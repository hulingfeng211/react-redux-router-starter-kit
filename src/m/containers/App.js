import React, { Component, PropTypes } from 'react';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Container, Group, TabBar, NavBar, View} from 'amazeui-touch'

import Footer from '../components/Footer';

import DevTools from './DevTools';

class App extends Component {

    render() {
      let {
        location,
        params,
        children,
        ...props
      } = this.props;

      let transition = children.props.transition || 'sfr';

      return (
        <View id="app-index">
          <Container direction="column" id="container">
            <Container transition={transition} >
              {React.cloneElement(children, {key: location.key})}
            </Container>
            <Footer {...this.props} />
          </Container>
        </View>
      );
    }
}

export default App;