import React, { useMemo } from 'react'

import { observer } from 'mobx-react-lite'

import store from '../../store'

import TodoList from '../../component/TodoList/TodoList'
import AddTodoForm from '../../component/AddTodoForm/AddTodoForm'
import Divider from '../../component/Divider/Divider'
import RoundedButton from '../../component/RoundedButton/RoundedButton'

import { Home, Actions } from './Home.styles'

export default observer(() => {
  const todoActions = useMemo(() => ({
    toggle: store.toggleTodo,
    remove: store.removeTodo,
    edit: store.editTodo
  }), []);

  return (
    <Home>
      <TodoList todos={store.todos} actions={todoActions} />
      <Divider />
      <AddTodoForm handleAddTodo={store.addTodo} />
      <Actions>
        <RoundedButton onClick={store.completeAllTodos} label="All completed" />
        <div style={{ marginRight: '24px' }} />
        <RoundedButton onClick={store.removeCompleted} label="Remove Completed" buttonStyle="danger" />
      </Actions>
    </Home>
  );
})