import React, { useMemo } from 'react'

import { State } from '../../types/types'

import TodoList from '../../component/TodoList/TodoList'
import AddTodoForm from '../../component/AddTodoForm/AddTodoForm'
import Divider from '../../component/Divider/Divider'
import RoundedButton from '../../component/RoundedButton/RoundedButton'

import { Home, Actions } from './Home.styles'
import { useViewModel } from '../../useViewModel'

const initialState: State = [];

export default () => {
  const { todos, actions } = useViewModel(initialState);

  const todoActions = useMemo(() => ({
    toggle: actions.toggle,
    remove: actions.remove,
    edit: actions.edit
  }), [actions.toggle, actions.remove, actions.edit]);

  return (
    <Home>
      <TodoList todos={todos} actions={todoActions} />
      <Divider />
      <AddTodoForm handleAddTodo={actions.add} />
      <Actions>
        <RoundedButton onClick={actions.completeAll} label="All completed" />
        <div style={{ marginRight: '24px' }} />
        <RoundedButton onClick={actions.removeCompleted} label="Remove Completed" buttonStyle="danger" />
      </Actions>
    </Home>
  );
}