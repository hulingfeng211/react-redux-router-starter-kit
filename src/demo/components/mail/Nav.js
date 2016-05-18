import React, {Component} from 'react';
import { Link } from 'react-router'

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
        <SubMenu key="sub1">
          <MenuItemGroup title="我的邮箱">
            <Menu.Item key="inBox"><Link to={"/demo/mail/inbox"}>收件箱</Link></Menu.Item>
            <Menu.Item key="draft"><Link to={"/demo/mail/draft"}>草稿箱</Link></Menu.Item>
            <Menu.Item key="outbox"><Link to={"/demo/mail/outbox"}>已发送</Link></Menu.Item>
            <Menu.Item key="deleted"><Link to={"/demo/mail/deleted"}>已删除</Link></Menu.Item>
            <Menu.Item key="trash"><Link to={"/demo/mail/trash"}>回收站</Link></Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="管理邮箱">
            <Menu.Item key="files">文件夹</Menu.Item>
            <Menu.Item key="imap">IMAP设定</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    )
  }
}

export default Nav;