import React from 'react'

import { observer } from 'mobx-react-lite'

import { Todo, TodoActions } from '../../types/types'

import TodoListItem from '../TodoListItem/TodoListItem'

import { TodoList } from './TodoList.styles'

type TodoListProps = {
  todos: Todo[],
  actions: TodoActions
}

export default React.memo(observer(({
  todos,
  actions
} : TodoListProps) => {
  const content = todos.length > 0
    ? todos.map((todo) => (
      <TodoListItem
        key={todo.id}
        id={todo.id}
        text={todo.text}
        name={todo.name}
        status={todo.status}
        actions={actions}
      />
    ))
    : 'No tasks';

  return (
    <TodoList className="todo-list">
      {content}
    </TodoList>
  );
}))