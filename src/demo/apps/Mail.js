import React, { Component } from 'react';
import { Col } from 'antd';

import Nav from '../components/mail/Nav';

class Mail extends Component {

	render(){
		let {
          children,
          ...props
        } = this.props;

		return (
			<div>
				<Col span={4}>
				  <Nav />
				</Col>
				<Col span={18}>
				  {children}
				</Col>
			</div>
		)
	}
}

export default Mail;