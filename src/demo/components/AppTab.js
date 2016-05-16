import React, {Component} from 'react';

import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class AppTab extends Component{


    constructor(props, context) {
        super(props, context);

        this.newTabIndex = 0;
        const panes = [
            <TabPane tab="收件箱" key="1">收件箱</TabPane>,
            <TabPane tab="未读邮件" key="2">未读邮件</TabPane>,
        ];

        this.state = {
            activeKey: panes[0].key,
            panes,
        };

        this._onChange = this.onChange.bind(this);
        this._onEdit = this.onEdit.bind(this);
    };

    onChange(activeKey) {
        this.setState({
            activeKey
        });
    }

    onEdit(targetKey, action) {
        this[action](targetKey);
    }

    add() {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push(<TabPane tab="新建页签" key={activeKey}>新页面</TabPane>);
        this.setState({
            panes,
            activeKey
        });
    }

    remove(targetKey) {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({
            panes,
            activeKey
        });
    }

    render() {
        return (
            <Tabs onChange={this._onChange} activeKey={this.state.activeKey}
            type="editable-card" onEdit={this._onEdit}>
                {this.state.panes}
            </Tabs>
        );
    }

}

export default AppTab;