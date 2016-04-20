import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { TabBar} from 'amazeui-touch'
import { push } from 'react-router-redux'

import { setCurrentTab } from '../actions';

class Footer extends Component {
  render() {
    const { dispatch, currentTab } = this.props;
    return (
      <TabBar amStyle="primary" onSelect={this.handleClick(dispatch)} >
        <TabBar.Item icon="home" eventKey="home"  badge={5} active = { currentTab === 'home' } title="首页" />
        <TabBar.Item icon="list" eventKey="products" active = { currentTab === 'products' } title="商品" />
        <TabBar.Item icon="person" eventKey="persons" active = { currentTab === 'persons' } title="联系人" />
        <TabBar.Item icon="gear" eventKey="settings" active = { currentTab === 'settings' } title="设置" />
      </TabBar>
    );
  }

  handleClick(dispatch){
    return function(key, e){
      switch(key){
        case 'home':
          dispatch(push('/'));
          dispatch(setCurrentTab('home'));
            break;
        case 'products':
          dispatch(push('/products'));
          dispatch(setCurrentTab('products'));
            break;
        case 'persons':
          dispatch(push('/persons'));
          dispatch(setCurrentTab('persons'));
            break;
        case 'settings':
          dispatch(push('/settings'));
          dispatch(setCurrentTab('settings'));
            break;
        default:
          dispatch(push('/'));
          dispatch(setCurrentTab('home'));
      }

    }
    
  }
}

function select(state) {
  return {
    currentTab: state.currentTab
  };
}

export default connect(select)(Footer);