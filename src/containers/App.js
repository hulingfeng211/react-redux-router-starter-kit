import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Container, Group, TabBar, NavBar, View} from 'amazeui-touch'

import { fetchTodos, addTodo } from '../actions';

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
    const { dispatch } = this.props;

    return (
      <View id="app-index">
        <NavBar amStyle="primary" title="Onepage 3.0 Touch" />
        <Container direction="column" id="container" >
          <Container scrollable>
            <Group>
              <TodoList />
            </Group>
            <Group>
              <AddTodo onAddClick={text => dispatch(addTodo(text)) } />
            </Group>
            <Filter />
          </Container>
          <Footer />
        </Container>
      </View>
    );
  }
}


// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect()(App);