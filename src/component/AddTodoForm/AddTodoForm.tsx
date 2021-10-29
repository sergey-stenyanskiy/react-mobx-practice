import React, {useRef} from 'react'

import {AddTodoData} from '../../types/types'

import addIcon from '../../asset/add3.svg'

import SVGIcon from '../SVGIcon/SVGIcon'
import TextInput from '../TextInput/TextInput'
import TodoButton from '../TodoButton/TodoButton'

import {AddTodoForm, FormGroup} from './AddTodoForm.styles'

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

export default React.memo(({ handleAddTodo } : AddTodoFormProps) => {
  const form = useRef<HTMLFormElement>(null);

  const todoName = useRef<HTMLInputElement>(null);
  const todoText = useRef<HTMLInputElement>(null);

  function addTodo() {
    handleAddTodo({
      name: todoName.current!.value,
      text: todoText.current!.value
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    addTodo();
    resetEditState();
  }

  function resetEditState() {
    todoName.current!.value = initialState.todoName;
    todoText.current!.value = initialState.todoText;
  }

  return (
    <AddTodoForm name="add-todo-from" className="add-todo-form" ref={form} onSubmit={handleSubmit}>
      <h4>New task</h4>
      <FormGroup>
        <TextInput label="Task Name" id="add-todo-todo-name" defaultValue={initialState.todoName} required inputRef={todoName}/>
        <div style={{marginRight: "24px"}}/>
        <TextInput label="Task Description" id="add-todo-todo-text" defaultValue={initialState.todoText} inputRef={todoText}/>
        <div style={{marginRight: "24px"}}/>
        <TodoButton type="submit" className="todo-button">
          <SVGIcon src={addIcon} />
          <div style={{marginRight: "8px"}} />
          Add Task
        </TodoButton>
      </FormGroup>
    </AddTodoForm>
  ); 
})