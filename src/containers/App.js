import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router'
import { Container, Group, TabBar, NavBar, View} from 'amazeui-touch'

import { fetchTodos, addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

import DevTools from './DevTools';

export default class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchTodos());

  }
  render() {
    // 通过调用 connect() 注入:
    const { dispatch, visibleTodos, visibilityFilter } = this.props;

    return (
      <View id="app-index">
      
        <NavBar
          amStyle="primary"
          title="Amaze UI Touch"
        />
       
        <Container direction="column" id="container" scrollable>
          <Group>
            <TodoList
              todos={visibleTodos}
              onTodoClick={index =>
                dispatch(completeTodo(index))
              } />
            </Group>
        </Container>
        <Group>
        <AddTodo
            onAddClick={text =>
              dispatch(addTodo(text))
            } />
          <Footer
            filter={visibilityFilter}
            onFilterChange={nextFilter =>
              dispatch(setVisibilityFilter(nextFilter))
            } />
          </Group>
        <TabBar amStyle="primary" >
          <TabBar.Item
            icon="list"
            title="组件"
            to="/"
          />
          <TabBar.Item
            icon="info"
            title="关于"
            badge='99'
          />
        </TabBar>
      </View>
    );
  }
}

App.propTypes = {
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

function selectTodos(todos, filter) {
  switch (filter) {
  case VisibilityFilters.SHOW_ALL:
    return todos;
  case VisibilityFilters.SHOW_COMPLETED:
    return todos.filter(todo => todo.completed);
  case VisibilityFilters.SHOW_ACTIVE:
    return todos.filter(todo => !todo.completed);
  }
}

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/faassen/reselect 效果更佳。
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App);