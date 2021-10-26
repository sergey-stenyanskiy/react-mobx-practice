import React from 'react'

import classnames from 'classnames'

import SVG from 'react-inlinesvg'

import editIcon from '../asset/edit.svg'
import removeIcon from '../asset/recycle-bin-filled.svg'

type TodoListActions = {
  edit: () => void
  remove: () => void
}

type TodoActionsListProps = {
  actions: TodoListActions
  hidden: boolean
  actionsListRef: React.RefObject<HTMLDivElement>
}

export default ({actions, hidden, actionsListRef} : TodoActionsListProps) => {
  const acitonsClass = classnames("todo-actions-list", {"todo-actions-list-hidden": hidden});

  function handleRemove(e: React.MouseEvent<HTMLDivElement>) {
    actions.remove();
  }

  function handleEdit(e: React.MouseEvent<HTMLElement>) {
    actions.edit();
  }


  return (
    <div className={acitonsClass} ref={actionsListRef}>
      <ul>
        <li>
          <div className="todo-action-list-action" onClick={handleEdit}>
            <SVG src={editIcon} className="todo-svg-icon"/>
            <div style={{marginRight: "8px"}}/>
            Edit
          </div>
        </li>
        <li>
          <div className="todo-action-list-action todo-list-action-remove" onClick={handleRemove}>
            <SVG src={removeIcon} className="todo-svg-icon"/>
            <div style={{marginRight: "8px"}}/>
            Remove
          </div>
        </li>
      </ul>
    </div>
  );
}