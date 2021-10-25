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

  const focusedInput = useRef<HTMLInputElement | null>(null);

  const actionsButton = useRef(null);
  const editButton = useRef(null);
  
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
  
  function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    setEditing(true);

    focusedInput.current = e.target;
  }

  function handleBlur(e: React.FocusEvent) {
    console.log(document.activeElement)

    if (document.activeElement !== editButton.current) {
      setEditing(false);
    }
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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  function handleClickOutside(e: MouseEvent) {
    if ( !hidden.current && e.target !== actionsList.current && e.target !== actionsButton.current) {
      toggleActionsList();
    }
  }

  const statusClass = classnames("todo-status", `todo-status-${todo.status.split(" ").join("-")}`);

  const indicatorIcon = todo.status === TodoStatus.ACTIVE ? activeIcon : completedIcon;

  const showEdit = editing && document.activeElement !== null && (document.activeElement === editName.current || document.activeElement === editText.current);

  return (
    <div className="todo-item">
      <div className="todo-item-content">
        <div className="todo-item-leading">
          <TextInput label="Task" id={`todo-name-${todo.id}`} className="todo-name" defaultValue={todo.name} inputRef={editName} onFocus={handleFocus} onBlur={handleBlur} required/>
          <div style={{marginRight: "24px"}}/>
          <TextInput label="Description" id={`todo-text-${todo.id}`} className="todo-text" defaultValue={todo.text} inputRef={editText} onFocus={handleFocus} onBlur={handleBlur}/>
          <div style={{marginRight: "24px"}}/>
          <button type="button" className={classnames("todo-button", {hidden: !showEdit})} onClick={handleEdit} ref={editButton}>
          {/* <button type="button" className={classnames("todo-button", {hidden: false})} onClick={handleEdit} ref={actionsButton}> */}
            <SVG src={editIcon} className="todo-svg-icon"/>
            <div style={{marginRight: "8px"}}/>
            Save
          </button>
        </div>
        <div className="todo-item-trailing">
          <button type="button" className="todo-button todo-button-status" onClick={handleToggle}>
            <SVG src={indicatorIcon} className="todo-svg-icon"/>
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