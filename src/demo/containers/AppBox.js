import React, { Component } from 'react';
import { Row, Col } from 'antd';

import AppHeader from '../components/AppHeader';
import AppNav from '../components/AppNav';
import AppTab from '../components/AppTab';

import Mail from '../apps/Mail';

class AppBox extends Component {

    render() {
        let {
          children,
          ...props
        } = this.props;

        return (
            <div style={{height:'100%'}}>
                <Row>
                  <AppHeader />
                </Row>

                <Row style={{height: '100%'}}>
                  <Col span={2} style={{width: '80px', height: '100%', backgroundColor: '#455670'}}>
                    <AppNav />
                  </Col>

                  <Col span={22} style={{margin: '20px 0 0 20px'}}>
                    <Row>
                      <AppTab />
                    </Row>
                    <Row>
                      {children}
                    </Row>
                  </Col>
                </Row>
            </div>
        )
    }
}

export default AppBox;