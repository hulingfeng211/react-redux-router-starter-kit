import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {ListItem} from 'amazeui-react';

export default class Todo extends Component {
  render() {
    return (
      <ListItem
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        {this.props.text}
      </ListItem>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};