import React, { Component, PropTypes } from 'react';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Container, Group, TabBar, NavBar, View} from 'amazeui-touch'

import { fetchTodos, addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Filter from '../components/Filter';
import Footer from '../components/Footer';

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTodos());
  }
  render() {
    // 通过调用 connect() 注入:
    const { dispatch, visibleTodos, visibilityFilter } = this.props;

    return (
      <Group>
        <TodoList todos={visibleTodos} onTodoClick={index => dispatch(completeTodo(index)) } />
      </Group>
      <Group>
        <AddTodo onAddClick={text => dispatch(addTodo(text)) } />
        <Filter filter={visibilityFilter} onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter)) } />
      </Group>
    );
  }
}

Home.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}

export default Home;