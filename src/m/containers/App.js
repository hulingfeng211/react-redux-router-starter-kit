import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Container, Group, TabBar, NavBar, View} from 'amazeui-touch'

import Footer from '../components/Footer';

import DevTools from './DevTools';

class App extends Component {

  componentWillMount(){
    //控制转场动画方向
    this.transitionHandler = 'sfr';
  }

  componentWillReceiveProps(nextProps) {
    let location = this.props.location.pathname;

    if(location.indexOf('article') !== -1){
      this.transitionHandler = 'rfr';
    } else {
      this.transitionHandler = 'sfr';
    }
  }

  render() {
    let {
      location,
      params,
      children,
      ...props
    } = this.props;

    let transition = this.transitionHandler;

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

export default connect()(App);