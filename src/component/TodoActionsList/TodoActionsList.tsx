import React from 'react'

import classnames from 'classnames'

import {TodoListActions} from '../../types/types'

import editIcon from '../../asset/edit.svg'
import removeIcon from '../../asset/recycle-bin-filled.svg'

import SVGIcon from '../SVGIcon/SVGIcon'

import {TodoActionsList, TodoActionListAction, TodoListActionRemove} from './TodoActionsList.styles'

type TodoActionsListProps = {
  actions: TodoListActions
  hidden: boolean
  actionsListRef: React.RefObject<HTMLDivElement>
}

export default React.memo(({actions, hidden, actionsListRef} : TodoActionsListProps) => {
  const actionsClass = classnames({"todo-actions-list-hidden": hidden});

  function handleRemove(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    
    actions.remove();
  }

  function handleEdit(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();

    actions.edit();
  }

  return (
    <TodoActionsList className={actionsClass} ref={actionsListRef}>
      <ul>
        <li onClick={handleEdit}>
          <TodoActionListAction>
            <SVGIcon src={editIcon}/>
            <div style={{marginRight: "8px"}}/>
            Edit
          </TodoActionListAction>
        </li>
        <li onClick={handleRemove}>
          <TodoListActionRemove>
            <SVGIcon src={removeIcon}/>
            <div style={{marginRight: "8px"}}/>
            Remove
          </TodoListActionRemove>
        </li>
      </ul>
    </TodoActionsList>
  );
})