import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Button, Input} from 'amazeui-react';

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='input1'  />
        <Input type="text" ref='input2' onKeyUp={e => this.handleEnter(e)}></Input>
        <Button amStyle="primary"  onClick={e => this.handleClick(e)}>Add</Button>
      </div>
    );
  }

  handleClick(e) {
    console.log(this);
    const node = ReactDOM.findDOMNode(this.refs.input2);
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }

  handleEnter(e) {
    if(e.keyCode === 13){
      console.log(this.refs.input2);
      const node = ReactDOM.findDOMNode(this.refs.input2);
      const text = node.value.trim();
      this.props.onAddClick(text);
      node.value = '';
    }
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}