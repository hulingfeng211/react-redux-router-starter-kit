import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { TabBar} from 'amazeui-touch'
import { push } from 'react-router-redux'

class Footer extends Component {
  

  render() {

    const { dispatch } = this.props;
    return (
      <TabBar amStyle="primary" onSelect={this.handleClick(dispatch)} >
        <TabBar.Item icon="home" eventKey="home"  badge={5} title="首页" />
        <TabBar.Item icon="list" eventKey="products" title="商品" />
        <TabBar.Item icon="person" eventKey="persons" title="联系人" />
        <TabBar.Item icon="gear" eventKey="settings" active title="设置" />
      </TabBar>
    );
  }

  handleClick(dispatch){
    return function(key, e){
      switch(key){
        case 'home':
          dispatch(push('/'));
            break;
        case 'products':
          dispatch(push('/products'));
            break;
        case 'persons':
          dispatch(push('/persons'));
            break;
        case 'settings':
          dispatch(push('/settings'));
            break;
        default:
          dispatch(push('/'));
      }

    }
    
  }
}

export default connect()(Footer);