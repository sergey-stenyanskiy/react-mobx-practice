import React from 'react'

import { Todo, TodoActions } from '../../types/types'

import TodoListItem from '../TodoListItem/TodoListItem'

import { TodoList } from './TodoList.styles'

type TodoListProps = {
  todos: Todo[],
  actions: TodoActions
}

export default React.memo(({ todos, actions } : TodoListProps) => {
  const content = todos.length > 0 ? todos.map((todo) => <TodoListItem key={todo.id} todo={todo} actions={actions} />) : 'No tasks';

  return (
    <TodoList className="todo-list">
      {content}
    </TodoList>
  );
})