import React, { Component } from 'react';
import { Container, NavBar, View} from 'amazeui-touch';

import InquiryList from './InquiryList';

class Home extends Component {

  render() {
    let component = this.props.params.component;

    return (
      <View id="app-index">
        <NavBar amStyle="primary" title="Onepage 3.0 Touch" />
        <Container scrollable >
          <InquiryList />
        </Container>
      </View>
    )
  }
}

Home.defaultProps = {
  transition: 'rfr'
};

export default Home;