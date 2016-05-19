import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Tabs } from 'antd';

import { fetchAllMails } from '../../actions';

class Inbox extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchAllMails());
    }

    render() {

        const columns = [{
            title: '发件人',
            dataIndex: 'name',
            width: '150px',
            render(text) {
                return <a href="#">{text}</a>;
            }
        }, {
            title: '标题',
            dataIndex: 'mailTitle',
            render(text) {
                return <a href="#">{text}</a>;
            }
        }];

        // 通过 rowSelection 对象表明需要行选择
        const rowSelection = {
            onChange(selectedRowKeys, selectedRows) {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect(record, selected, selectedRows) {
                console.log(record, selected, selectedRows);
            },
            onSelectAll(selected, selectedRows, changeRows) {
                console.log(selected, selectedRows, changeRows);
            },
        };

        return (
            <Table rowSelection={rowSelection} columns={columns} dataSource={this.props.allMails} />
        )
    }
}

function select(state) {
  return {
    allMails: state.mail
  };
}

export default connect(select)(Inbox);