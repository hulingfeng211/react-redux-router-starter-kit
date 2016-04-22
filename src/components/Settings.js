import React, { Component } from 'react';
import { Group, Container } from 'amazeui-touch'

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';

class Settings extends Component {
    render() {
      return (
        <Container>
        	<Filter />
        	<Group>
				<TodoList />
			</Group>
			<Group>
				<AddTodo />
			</Group>
		</Container>
      )
    }
}

export default Settings;