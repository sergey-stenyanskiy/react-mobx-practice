import React from 'react'

import TodoListItem from './TodoListItem'

import {v4 as uuid} from 'uuid'

type TodoListProps = {
  todos: Todo[],
  actions: TodoActions
}

export default ({todos, actions} : TodoListProps) => {
  const content = todos.length > 0 ? todos.map(todo => <TodoListItem key={uuid()} todo={todo} actions={actions} />) : "No tasks" 
  
  return (
    <div className="todo-list">
      {content}
    </div>
  );
}