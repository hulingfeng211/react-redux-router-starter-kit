import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {List, Grid, Col} from 'amazeui-react';

import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <Grid className="doc-g">
          <Col sm={12}>
            <List static striped border>
              {this.props.todos.map((todo, index) =>
                <Todo {...todo}
                      key={index}
                      onClick={() => this.props.onTodoClick(index)} />
              )}
            </List>
          </Col>
        </Grid>
      
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}