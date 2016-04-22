import React, { Component } from 'react';
import { Group, Container, NavBar, View } from 'amazeui-touch';
import { Link } from 'react-router';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';

class Settings extends Component {
    render() {
		
      return (
        <Container {...this.props}>
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