import React from 'react'

import {useState, useRef} from 'react'

import TextInput from './TextInput'

type AddTodoFormProps = {
  handleAddTodo: (taskData: AddTodoData) => void
}

type AddTodoFormState = {
  todoName: string,
  todoText: string,
}

const initialState: AddTodoFormState = {
  todoName: 'New Task',
  todoText: 'add description',
}

export default ({ handleAddTodo } : AddTodoFormProps) => {
  const form = useRef<HTMLFormElement>(null);

  const [todoName, setTodoName] = useState(initialState.todoName);  
  const [todoText, setTodoText] = useState(initialState.todoText);

  function addTodo() {
    handleAddTodo({
      name: todoName,
      text: todoText
    });
  }

  function handleTodoNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoName(e.target.value);
  }

  function handleTodoTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    addTodo();
    resetEditState();
  }

  function resetEditState() {
    setTodoName(initialState.todoName);
    setTodoText(initialState.todoText);
  }

  return (
    <form name="add-todo-from" className="add-todo-form" ref={form} onSubmit={handleSubmit}>
      <TextInput label="Task Name" id="add-todo-todo-name" value={todoName} onChange={handleTodoNameChange} required />
      <TextInput label="Task Description" id="add-todo-todo-text" value={todoText} onChange={handleTodoTextChange} />
{/*       
      <label htmlFor="add-todo-name">
        Task name:
      </label>
      <input type="text" id="add-todo-todo-name" value={todoName} onChange={handleTodoNameChange} required/>
      <label htmlFor="add-todo-text">
        Task description:
      </label>
      <input type="text" id="add-todo-todo-text" value={todoText} onChange={handleTodoTextChange} /> */}
      <button type="submit" >Add new Task</button>
    </form>
  ); 
}