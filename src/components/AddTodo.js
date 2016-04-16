import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Button, Grid, Col, Field} from 'amazeui-touch';


export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <Grid className="doc-g">
          <Col sm={8}>
            <Field type="text" ref='input' onKeyUp={e => this.handleEnter(e)}></Field>
          </Col>
          <Col sm={4}>
            <Button amStyle="primary"  onClick={e => this.handleClick(e)}>Add</Button>
          </Col>
        </Grid>
      </div>
    );
  }

  handleClick(e) {
    const text = this.refs.input.getValue().trim();
    this.props.onAddClick(text);
    node.value = '';
  }

  handleEnter(e) {
    if(e.keyCode === 13){
      const text = this.refs.input.getValue().trim();
      this.props.onAddClick(text);
      node.value = '';
    }
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}