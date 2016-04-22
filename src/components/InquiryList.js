import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { List, Group, Container, NavBar, View } from 'amazeui-touch';

import { fetchInquiries } from '../actions';

class InquiryList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchInquiries());
  }

  render() {

    // 通过调用 connect() 注入:
    const { dispatch, inquiries } = this.props;
    return (
        <Container {...this.props}>
          <Group
              header="xxxx列表1"
              noPadded
            >
            <List>
              {inquiries.map((inquiry, index) =>
                <List.Item title={inquiry.text} key={index} />
              )}
            </List>
            </Group>
        </Container>
    )
  }
}

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/faassen/reselect 效果更佳。
function select(state) {
  return {
    inquiries: state.inquiries
  };
}

export default connect(select)(InquiryList);