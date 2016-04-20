import React, { Component } from 'react';
import { Group } from 'amazeui-touch'

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';

class Settings extends Component {
    render() {
      return (
        <div>
        	<Filter />
        	<Group>
				<TodoList />
			</Group>
			<Group>
				<AddTodo />
			</Group>
		</div>
      )
    }
}

export default Settings;