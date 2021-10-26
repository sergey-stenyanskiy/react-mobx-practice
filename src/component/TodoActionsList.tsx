import React from 'react'

import classnames from 'classnames'

import SVG from 'react-inlinesvg'

import editIcon from '../asset/edit.svg'
import removeIcon from '../asset/recycle-bin-filled.svg'

type TodoActionsListProps = {
  actions: TodoListActions
  hidden: boolean
  actionsListRef: React.RefObject<HTMLDivElement>
}

export default ({actions, hidden, actionsListRef} : TodoActionsListProps) => {
  const acitonsClass = classnames("todo-actions-list", {"todo-actions-list-hidden": hidden});

  function handleRemove(e: React.MouseEvent<HTMLElement>) {
    actions.remove();

    e.stopPropagation();
  }

  function handleEdit(e: React.MouseEvent<HTMLElement>) {
    actions.edit();

    e.stopPropagation();
  }

  return (
    <div className={acitonsClass} ref={actionsListRef}>
      <ul>
        <li onClick={handleEdit}>
          <div className="todo-action-list-action" >
            <SVG src={editIcon} className="todo-svg-icon"/>
            <div style={{marginRight: "8px"}}/>
            Edit
          </div>
        </li>
        <li onClick={handleRemove}>
          <div className="todo-action-list-action todo-list-action-remove">
            <SVG src={removeIcon} className="todo-svg-icon"/>
            <div style={{marginRight: "8px"}}/>
            Remove
          </div>
        </li>
      </ul>
    </div>
  );
}