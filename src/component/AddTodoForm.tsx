import React from 'react'

import {useState, useRef} from 'react'

import { AddTodoData } from '../types/types'

import SVGIcon from './SVGIcon'
import TextInput from './TextInput'
import TodoButton from './TodoButton'

import addIcon from '../asset/add3.svg'

import styled from 'styled-components'

const FormGroup = styled.div`
display: flex;
flex-direction: row;
align-items: center;

margin-bottom: 16px;

padding: 8px 16px;
background: white;
border-radius: 6px;
`;

const AddTodoForm = styled.form`
& h4 {
  font-weight: normal;
  margin: 16px 0;
}

& #add-todo-todo-name {
  width: 100px;
}

& #add-todo-todo-text {
  width: 200px;
}
`;

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
    <AddTodoForm name="add-todo-from" className="add-todo-form" ref={form} onSubmit={handleSubmit}>
      <h4>New task</h4>
      <FormGroup>
        <TextInput label="Task Name" id="add-todo-todo-name" value={todoName} onChange={handleTodoNameChange} required />
        <div style={{marginRight: "24px"}}/>
        <TextInput label="Task Description" id="add-todo-todo-text" value={todoText} onChange={handleTodoTextChange} />
        <div style={{marginRight: "24px"}}/>
        <TodoButton type="submit" className="todo-button">
          <SVGIcon src={addIcon} />
          <div style={{marginRight: "8px"}} />
          Add Task
        </TodoButton>
      </FormGroup>
    </AddTodoForm>
  ); 
}