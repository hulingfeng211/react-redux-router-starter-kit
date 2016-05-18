import React, { Component } from 'react';
import { Link } from 'react-router'

import { Icon } from 'antd';

class AppNav extends Component {
    render() {
        return (
            <ul style={{
                paddingTop: '20px'
            }}>
              <li><Link to={"/demo"} ><Icon type="mail" style={{
                color: '#fff',
                marginBottom: '40px',
                fontSize: '24px',
                textAlgin: 'center',
                display: 'block'
            }} /></Link></li>
              <li><Link to={"/demo/customer"} ><Icon type="user" style={{
                color: '#fff',
                marginBottom: '40px',
                fontSize: '24px',
                textAlgin: 'center',
                display: 'block'
            }} /></Link></li>
              <li><Link to={"/demo/inquery"} ><Icon type="inbox" style={{
                color: '#fff',
                marginBottom: '40px',
                fontSize: '24px',
                textAlgin: 'center',
                display: 'block'
            }} /></Link></li>
              <li><Link to={"/demo/marketing"} ><Icon type="book" style={{
                color: '#fff',
                marginBottom: '40px',
                fontSize: '24px',
                textAlgin: 'center',
                display: 'block'
            }} /></Link></li>
              <li><Link to={"/demo/setting"} ><Icon type="setting" style={{
                color: '#fff',
                marginBottom: '40px',
                fontSize: '24px',
                textAlgin: 'center',
                display: 'block'
            }} /></Link></li>
            </ul>
        )
    }
}

export default AppNav;