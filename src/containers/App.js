import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Container, Group, TabBar, NavBar, View} from 'amazeui-touch'

import { fetchTodos, addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Filter from '../components/Filter';
import Footer from '../components/Footer';

import DevTools from './DevTools';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTodos());
  }
  render() {
    // 通过调用 connect() 注入:
    const { dispatch, visibleTodos, visibilityFilter } = this.props;

    return (
      <View id="app-index">
        <NavBar amStyle="primary" title="Onepage 3.0 Touch" />
        <Container direction="column" id="container" >
          <Container scrollable>
            <Group>
              <TodoList todos={visibleTodos} onTodoClick={index => dispatch(completeTodo(index)) } />
            </Group>
            <Group>
              <AddTodo onAddClick={text => dispatch(addTodo(text)) } />
              <Filter filter={visibilityFilter} onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter)) } />
            </Group>
          </Container>
          <Footer />
        </Container>
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

const AppWrap = React.createClass({
  render() {
    return (
      <Router history={hashHistory} >
        <Route path="/" component={App} />
      </Router>
    )
  }
});

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