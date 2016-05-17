import React, { Component } from 'react';

import { Icon } from 'antd';

class AppNav extends Component {
	render(){
		return (
			<ul style={{paddingTop: '20px'}}>
              <li><Icon type="mail" style={{color: '#fff',marginBottom: '40px',fontSize: '24px', textAlgin: 'center', display: 'block'}} /></li>
              <li><Icon type="team" style={{color: '#fff',marginBottom: '40px',fontSize: '24px', textAlgin: 'center', display: 'block'}} /></li>
              <li><Icon type="inbox" style={{color: '#fff',marginBottom: '40px',fontSize: '24px', textAlgin: 'center', display: 'block'}} /></li>
              <li><Icon type="book" style={{color: '#fff',marginBottom: '40px',fontSize: '24px', textAlgin: 'center', display: 'block'}} /></li>
              <li><Icon type="setting" style={{color: '#fff',marginBottom: '40px',fontSize: '24px', textAlgin: 'center', display: 'block'}} /></li>
            </ul>
		)
	}
}

export default AppNav;