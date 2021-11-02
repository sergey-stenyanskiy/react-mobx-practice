import React, { useState, useEffect, useCallback, useRef } from 'react'

import classnames from 'classnames'

import { capitalizeFirstLetter } from '../../util/capitalize'

import { Todo, TodoActions } from '../../types/types'
import TodoStatus from '../../TodoStatus'

import activeIcon from '../../asset/play.svg'
import editIcon from '../../asset/edit.svg'
import completedIcon from '../../asset/tick.svg'
import dotsIcon from '../../asset/dots-three-vertical.svg'

import TodoButton from '../TodoButton/TodoButton'
import SVGIcon from '../SVGIcon/SVGIcon'
import TodoActionsList from '../TodoActionsList/TodoActionsList'

import { TodoItem, TodoButtonStatus, TodoButtonActions, TodoItemContent, TodoItemLeading, TodoItemTrailing, TodoInputName, TodoInputText } from './TodoListItem.styles'

type TodoProps = {
  todo: Todo,
  actions: TodoActions
}

export default React.memo(({
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

  const handleActionsClick = useCallback(() => toggleActionsList(), []);

  const handleToggle = () => {
    actions.toggle(todo.id);
  }

  const handleEdit = () => {
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

  function checkFocus() {
    if (document.activeElement === editName.current
      || document.activeElement === editText.current) {
      setEditing(true);
    } else if (document.activeElement !== saveButton.current) {
      setEditing(false);
    }
  }

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (!hidden.current && e.target !== actionsList.current && e.target !== actionsButton.current) {
      toggleActionsList();
    }
  }, [])

  useEffect(() => {
    document.addEventListener('focus', checkFocus, true);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('focus', checkFocus, true);
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [handleClickOutside]);

  return (
    <TodoItem className="todo-item">
      <TodoItemContent className="todo-item-content">
        <TodoItemLeading className="todo-item-leading">
          <TodoInputName label="Task" id={`todo-name-${todo.id}`} className="todo-name" defaultValue={todo.name} inputRef={editName} />
          <div style={{ marginRight: '24px' }} />
          <TodoInputText label="Description" id={`todo-text-${todo.id}`} className="todo-text" defaultValue={todo.text} inputRef={editText} />
          <div style={{ marginRight: '24px' }} />
          <TodoButton type="button" className={classnames('todo-button', { hidden: !editing })} onClick={handleEdit} buttonRef={saveButton}>
            <SVGIcon src={editIcon} />
            <div style={{ marginRight: '8px' }} />
            Save
          </TodoButton>
        </TodoItemLeading>
        <TodoItemTrailing className="todo-item-trailing">
          <TodoButtonStatus type="button" onClick={handleToggle}>
            <SVGIcon src={todo.status === TodoStatus.ACTIVE ? activeIcon : completedIcon} />
            <div style={{ marginRight: '8px' }} />
            {capitalizeFirstLetter(todo.status)}
          </TodoButtonStatus>
          <TodoButtonActions type="button" onClick={handleActionsClick} buttonRef={actionsButton}>
            <SVGIcon src={dotsIcon} />
            <TodoActionsList
              actions={listActions}
              hidden={actionsHidden}
              actionsListRef={actionsList}
            />
          </TodoButtonActions>
        </TodoItemTrailing>
      </TodoItemContent>
    </TodoItem>
  );
})