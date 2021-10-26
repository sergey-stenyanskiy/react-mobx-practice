import React from 'react'

import {useState, useRef} from 'react'

import TextInput from './TextInput'

import SVG from 'react-inlinesvg'

import addIcon from '../asset/add3.svg'

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
      <h4>New task</h4>
      <div className="add-todo-form-group">
        <TextInput label="Task Name" id="add-todo-todo-name" value={todoName} onChange={handleTodoNameChange} required />
        <div style={{marginRight: "24px"}}/>
        <TextInput label="Task Description" id="add-todo-todo-text" value={todoText} onChange={handleTodoTextChange} />
        <div style={{marginRight: "24px"}}/>
        <button type="submit" className="todo-button">
          <SVG src={addIcon} className="todo-svg-icon"/>
          <div style={{marginRight: "8px"}} />
          Add Task
        </button>
      </div>
    </form>
  ); 
}