import React, { Component } from 'react';
import { Col } from 'antd';

import Nav from '../components/mail/Nav';
import Inbox from '../components/mail/Inbox';

class Mail extends Component {

	render(){
		return (
			<div>
				<Col span={4}>
				  <Nav />
				</Col>
				<Col span={18}>
				  <Inbox />
				</Col>
			</div>
		)
	}
}

export default Mail;