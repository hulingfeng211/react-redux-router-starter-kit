import React, { Component } from 'react';
import { Container, NavBar, View} from 'amazeui-touch';

import InquiryList from './InquiryList';


class Home extends Component {
  static defaultProps = {
    transition: 'rfr'
  };

  render() {
    let component = this.props.params.component;

    return (
      <View id="app-index">
        <NavBar amStyle="primary" title="My App9" />
        <Container scrollable >
          <InquiryList />
        </Container>
      </View>
    )
  }
}

export default Home;