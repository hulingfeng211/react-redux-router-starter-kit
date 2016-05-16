import React, { Component } from 'react';

import { Row, Col } from 'antd';

import AppNav from '../components/AppNav';
import AppTab from '../components/AppTab';
import AppInbox from '../components/AppInbox';

class App extends Component {
    render() {
        return (
            <div>
                <Row style={{ "marginBottom": "20px" }}>
                    <div style={{ "marginLeft": "20px", "fontSize": "24px",borderBottom: '1px solid #666' }}>WEB APP LOGO</div>
                </Row>
                <Row>
                  <Col span={5}>
                    <AppNav />
                  </Col>
                  <Col span={19}>
                    <Row>
                      <AppTab />
                    </Row>
                    <Row>
                      <AppInbox />
                    </Row>
                  </Col>
                </Row>
            </div>
        )
    }
}

export default App;