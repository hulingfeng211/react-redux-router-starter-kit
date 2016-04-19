import React, { Component, PropTypes } from 'react';
import { TabBar} from 'amazeui-touch'

class Footer extends Component {
  render() {
    return (
    <TabBar amStyle="primary" >
      <TabBar.Item active icon="home" badge={5} title="首页" to="/home" />
      <TabBar.Item icon="list" title="商品" />
      <TabBar.Item icon="person" title="联系人" />
      <TabBar.Item icon="gear" title="设置" />
    </TabBar>
    );
  }
}

export default Footer;