import React, { useState, useEffect, MutableRefObject } from 'react'

import { useRef } from 'react'

import classnames from 'classnames'

import SVG from 'react-inlinesvg'

import activeIcon from '../asset/play.svg'
import editIcon from '../asset/edit.svg'
import completedIcon from '../asset/tick.svg'
import dotsIcon from '../asset/dots-three-vertical.svg'

import TodoStatus from '../TodoStatus'

import TodoActionsList from './TodoActionsList'
import TextInput from './TextInput'

import { capitalizeFirstLetter } from '../util/capitalize'

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

    toggleActionsList();
  }

  function listActionEdit() {
    editName.current!.focus();

    toggleActionsList();
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
    <div className="todo-item">
      <div className="todo-item-content">
        <div className="todo-item-leading">
          <TextInput label="Task" id={`todo-name-${todo.id}`} className="todo-name" defaultValue={todo.name} inputRef={editName} />
          <div style={{marginRight: "24px"}}/>
          <TextInput label="Description" id={`todo-text-${todo.id}`} className="todo-text" defaultValue={todo.text} inputRef={editText} />
          <div style={{marginRight: "24px"}}/>
          <button type="button" className={classnames("todo-button", {hidden: !editing})} onClick={handleEdit} ref={saveButton}>
            <SVG src={editIcon} className="todo-svg-icon"/>
            <div style={{marginRight: "8px"}}/>
            Save
          </button>
        </div>
        <div className="todo-item-trailing">
          <button type="button" className="todo-button todo-button-status" onClick={handleToggle}>
            <SVG src={todo.status === TodoStatus.ACTIVE ? activeIcon : completedIcon} className="todo-svg-icon"/>
            <div style={{marginRight: "8px"}}/>
            {capitalizeFirstLetter(todo.status)}
          </button>
          <button type="button" className="todo-button todo-button-actions" onClick={toggleActionsList} ref={actionsButton}>
            <SVG src={dotsIcon} className="todo-svg-icon"/>
            <TodoActionsList actions={listActions} hidden={actionsHidden} actionsListRef={actionsList}/>
          </button>
        </div>
      </div>
    </div>
  );
}