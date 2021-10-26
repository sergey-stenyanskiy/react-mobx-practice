import React from 'react'

import TodoListItem from './TodoListItem'

import styled from 'styled-components'

const TodoList = styled.div`
display: flex;
flex-direction: column;

margin-bottom: 24px;
`;

type TodoListProps = {
  todos: Todo[],
  actions: TodoActions
}

export default ({todos, actions} : TodoListProps) => {
  const content = todos.length > 0 ? todos.map((todo, i) => <TodoListItem key={i} todo={todo} actions={actions} />) : "No tasks" 
  
  return (
    <TodoList className="todo-list">
      {content}
    </TodoList>
  );
}