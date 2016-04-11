import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Button, Input} from 'amazeui-react';

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <Input type="text" ref='input' onKeyUp={e => this.handleEnter(e)}></Input>
        <Button amStyle="primary"  onClick={e => this.handleClick(e)}>Add</Button>
      </div>
    );
  }

  handleClick(e) {
    const node = this.refs.input.getFieldDOMNode();
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }

  handleEnter(e) {
    if(e.keyCode === 13){
      const node = this.refs.input.getFieldDOMNode();
      const text = node.value.trim();
      this.props.onAddClick(text);
      node.value = '';
    }
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}