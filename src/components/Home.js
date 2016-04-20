import React, { Component } from 'react';
import { Group } from 'amazeui-touch';

import InquiryList from './InquiryList';

class Home extends Component {

  render() {
    return (
      <div>
        <InquiryList />
      </div>
    )
  }
}

export default Home;