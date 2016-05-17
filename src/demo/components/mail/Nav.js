import React, {Component} from 'react';

import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      current: '1'
    };

    this._handleClick = this.handleClick.bind(this);
    this._handleSelect = this.handleSelect.bind(this);
  };

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  handleSelect( info){
    console.log(info.key);
  }

  render() {
    return (
      <Menu onClick={this._handleClick}
        defaultOpenKeys={['sub1']}
        selectedKeys={[this.state.current]}
        mode="inline"
        onSelect={this._handleSelect}>
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
          <MenuItemGroup title="分组1">
            <Menu.Item key="inBox">收件箱</Menu.Item>
            <Menu.Item key="sendBox">已发送</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="分组2">
            <Menu.Item key="3">草稿箱</Menu.Item>
            <Menu.Item key="4">回收站</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    )
  }
}

export default Nav;