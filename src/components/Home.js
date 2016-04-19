import React, { Component } from 'react';
import { Group } from 'amazeui-touch'

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';

class Home extends Component {
    render() {

      return (
        <div>
        <Group>
          <TodoList />
        </Group>
        <Group>
          <AddTodo />
        </Group>
        <Filter />
        </div>
      )
    }
}

export default Home;