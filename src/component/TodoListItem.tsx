import React, { useState, useEffect } from 'react'

import { useRef } from 'react'

import classnames from 'classnames'

import styled from 'styled-components'

import activeIcon from '../asset/play.svg'
import editIcon from '../asset/edit.svg'
import completedIcon from '../asset/tick.svg'
import dotsIcon from '../asset/dots-three-vertical.svg'

import TodoStatus from '../TodoStatus'

import TodoButton from './TodoButton'
import SVGIcon from './SVGIcon'
import TodoActionsList from './TodoActionsList'
import TextInput from './TextInput'

import { capitalizeFirstLetter } from '../util/capitalize'

import {Todo, TodoActions} from '../types/types'

const TodoButtonStatus = styled(TodoButton)`
width: 120px;
`;

const TodoButtonActions = styled(TodoButton)`
position: relative;

width: 24px;
height: 24px;

display: flex;
flex-direction: row;
justify-content: center;

border-radius: 4px;
transition: background-color, 0.1s ease-in;
cursor: pointer;

&:hover {
  background: #F6F6F6;
}
`;

const TodoItemContent = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const TodoItemLeading = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

const TodoItemTrailing = styled(TodoItemLeading)``;

const TodoItem = styled.div`
margin-bottom: 12px;
border-radius: 6px;

padding: 8px 16px;
background: white;

box-shadow: 0px 0px 4px 8px rgba(0,0,0,0.008);

&:last-child {
  margin-bottom: 0;
}
`;

const TodoInputName = styled(TextInput)`
width: 100px;
`;

const TodoInputText = styled(TextInput)`
width: 200px;
`;


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

  const [actionsHidden, setActionsHidden] = useState(true);
  const [editing, setEditing] = useState(false);

  const actionsButton = useRef<HTMLButtonElement>(null);
  const saveButton = useRef<HTMLButtonElement>(null);
  
  const actionsList = useRef(null);
  const hidden = useRef(true);
  
  function toggleActionsList() {
    setActionsHidden(!hidden.current);
    hidden.current = !hidden.current;
  }

  function handleActionsClick(e: React.MouseEvent<HTMLButtonElement>) {
    toggleActionsList();
  }

  function handleToggle(e: React.MouseEvent<HTMLButtonElement>) {
    actions.toggle(todo.id);
  }

  function handleEdit(e: React.MouseEvent<HTMLButtonElement>) {
    actions.edit(todo.id, {
      name: editName.current!.value,
      text: editText.current!.value,
    });

    setEditing(false);
  }

  function listActionRemove() {
    actions.remove(todo.id);
  }

  function listActionEdit() {
    editName.current!.focus();
  }

  const listActions = {
    remove: listActionRemove,
    edit: listActionEdit,
  }

  function checkFocus(e: FocusEvent) {
    if (document.activeElement === editName.current 
      || document.activeElement === editText.current) {
        setEditing(true);
      } else {
        if (document.activeElement !== saveButton.current) {
          setEditing(false);
        }
      }
  }

  useEffect(() => {
    document.addEventListener("focus", checkFocus, true);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("focus", checkFocus, true);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  function handleClickOutside(e: MouseEvent) {
    if (!hidden.current && e.target !== actionsList.current && e.target !== actionsButton.current) {
      toggleActionsList();
    }
  }

  return (
    <TodoItem className="todo-item">
      <TodoItemContent className="todo-item-content">
        <TodoItemLeading className="todo-item-leading">
          <TodoInputName label="Task" id={`todo-name-${todo.id}`} className="todo-name" defaultValue={todo.name} inputRef={editName} />
          <div style={{marginRight: "24px"}}/>
          <TodoInputText label="Description" id={`todo-text-${todo.id}`} className="todo-text" defaultValue={todo.text} inputRef={editText} />
          <div style={{marginRight: "24px"}}/>
          <TodoButton type="button" className={classnames("todo-button", {hidden: !editing})} onClick={handleEdit} buttonRef={saveButton}>
              <SVGIcon src={editIcon} />
              <div style={{marginRight: "8px"}}/>
              Save
            </TodoButton>
        </TodoItemLeading>
        <TodoItemTrailing className="todo-item-trailing">
          <TodoButtonStatus type="button" onClick={handleToggle}>
            <SVGIcon src={todo.status === TodoStatus.ACTIVE ? activeIcon : completedIcon} />
            <div style={{marginRight: "8px"}}/>
            {capitalizeFirstLetter(todo.status)}
          </TodoButtonStatus>
          <TodoButtonActions type="button" onClick={handleActionsClick} buttonRef={actionsButton}>
            <SVGIcon src={dotsIcon} />
            <TodoActionsList actions={listActions} hidden={actionsHidden} actionsListRef={actionsList}/>
          </TodoButtonActions>
        </TodoItemTrailing>
      </TodoItemContent>
    </TodoItem>
  );
}