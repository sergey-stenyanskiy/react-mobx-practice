import React from 'react'

import { useRef } from 'react'

import classnames from 'classnames'

type TodoProps = {
  todo: Todo,
  actions: TodoActions
}

export default ({
  todo,
  actions
}: TodoProps) => {
  const editName = useRef<HTMLInputElement>(null);
  const editText = useRef<HTMLInputElement>(null);

  function handleToggle(e: React.MouseEvent<HTMLButtonElement>) {
    actions.toggle(todo.id);
  }

  function handleRemove(e: React.MouseEvent<HTMLButtonElement>) {
    actions.remove(todo.id);
  }

  function handleEdit(e: React.MouseEvent<HTMLButtonElement>) {
    actions.edit(todo.id, {
      name: editName.current!.value,
      text: editText.current!.value,
    });
  }

  const statusClass = classnames("todo-status", `todo-status-${todo.status.split(" ").join("-")}`);

  return (
    <div className="todo-item">
      Task:
      <div style={{marginBottom: "4px"}} />
      <div className="todo-item-content">
        <div className="todo-id">id: {todo.id}</div>
        <input type="text" className="todo-name" id={`todo-name-${todo.id}`} defaultValue={todo.name} ref={editName}/>
        <input type="text" className="todo-text" id={`todo-text-${todo.id}`} defaultValue={todo.text} ref={editText}/>
        <div className={statusClass}>{todo.status.toUpperCase()}</div>
        <button type="button" onClick={handleEdit}>/ edit</button>
        <button type="button" onClick={handleToggle}>+ toggle</button>
        <button type="button" onClick={handleRemove}>x remove</button>
      </div>
    </div>
  );
}