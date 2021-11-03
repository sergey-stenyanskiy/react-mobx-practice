import React, { useCallback, useMemo } from 'react'

import classnames from 'classnames'

import { TodoListActions } from '../../types/types'

import editIcon from '../../asset/edit.svg'
import removeIcon from '../../asset/recycle-bin-filled.svg'

import SVGIcon from '../SVGIcon/SVGIcon'

import { TodoActionsList, TodoActionListAction, TodoListActionRemove } from './TodoActionsList.styles'

type TodoActionsListProps = {
  actions: TodoListActions
  hidden: boolean
  actionsListRef: React.RefObject<HTMLDivElement>
}

export default React.memo(({ actions, hidden, actionsListRef } : TodoActionsListProps) => {
  const actionsClass = classnames({ 'todo-actions-list-hidden': hidden });

  const handleRemove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    actions.remove();
  }, [actions]);

  const handleEdit = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    actions.edit();
  }, [actions]);

  const editBtn = useMemo(() => (
    <li onClick={handleEdit}>
      <TodoActionListAction>
        <SVGIcon src={editIcon} />
        <div style={{ marginRight: '8px' }} />
        Edit
      </TodoActionListAction>
    </li>
  ), [handleEdit]);

  const removeBtn = useMemo(() => (
    <li onClick={handleRemove}>
      <TodoListActionRemove>
        <SVGIcon src={removeIcon} />
        <div style={{ marginRight: '8px' }} />
        Remove
      </TodoListActionRemove>
    </li>
  ), [handleRemove]);

  return (
    <TodoActionsList className={actionsClass} ref={actionsListRef}>
      <ul>
        {editBtn}
        {removeBtn}
      </ul>
    </TodoActionsList>
  );
})