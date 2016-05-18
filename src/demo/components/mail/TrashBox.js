import React, { Component } from 'react';

import { Table, Tabs } from 'antd';

class Trashbox extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            render(text) {
                return <a href="#">{text}</a>;
            },
        }, {
            title: '年龄',
            dataIndex: 'age',
        }, {
            title: '住址',
            dataIndex: 'address',
        }];

        const data = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '回收站123456789',
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '回收站123456789',
        }, {
            key: '3',
            name: '李大嘴',
            age: 32,
            address: '回收站123456789',
        }, {
            key: '4',
            name: '胡彦斌',
            age: 32,
            address: '回收站123456789',
        }, {
            key: '5',
            name: '胡彦祖',
            age: 42,
            address: '回收站123456789',
        }, {
            key: '6',
            name: '李大嘴',
            age: 32,
            address: '回收站123456789',
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
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        )
    }
}

export default Trashbox;