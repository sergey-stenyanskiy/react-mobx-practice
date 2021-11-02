import React from 'react'

import { ViewModel } from '../../types/types'

import TodoList from '../../component/TodoList/TodoList'
import AddTaskForm from '../../component/AddTodoForm/AddTodoForm'
import Divider from '../../component/Divider/Divider'
import RoundedButton from '../../component/RoundedButton/RoundedButton'

import { Home, Actions } from './Home.styles'

type HomeProps = {
  vm: ViewModel
}

export default ({
  vm
}: HomeProps) => {
  const { todos, actions } = vm;

  const todoActions = {
    toggle: actions.toggle,
    remove: actions.remove,
    edit: actions.edit
  }

  return (
    <Home>
      <TodoList todos={todos} actions={todoActions} />
      <Divider />
      <AddTaskForm handleAddTodo={actions.add} />
      <Actions>
        <RoundedButton onClick={actions.completeAll} label="All completed" />
        <div style={{ marginRight: '24px' }} />
        <RoundedButton onClick={actions.removeCompleted} label="Remove Completed" buttonStyle="danger" />
      </Actions>
    </Home>
  );
}