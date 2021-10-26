import React from 'react'

import classnames from 'classnames'

import editIcon from '../asset/edit.svg'
import removeIcon from '../asset/recycle-bin-filled.svg'

import SVGIcon from './SVGIcon'

import styled from 'styled-components' 

const TodoActionsList = styled.div`
background: white;
width: 120px;

position: absolute;

top: 48px;
right: -16px;

opacity: 1;

transition: visibility, opacity, 0.2s ease-in;
z-index: 100;

border-radius: 4px;
box-shadow:  0px 0px 4px 8px rgba(0,0,0,0.008);

&.todo-actions-list-hidden {
  visibility: hidden;
  opacity: 0;
}

& ul {
  background: white;
  list-style-type: none;
  margin: 4px 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

& li {
  padding: 8px 16px;
  display: block;

  transition: background-color, 0.1s ease-in;
}

& li:hover {
  background: #f6f6f6;
}
`;

const TodoActionListAction = styled.div`
display: flex;
flex-direction: row;
justify-content: start;
align-items: center;
cursor: pointer;
`;

const TodoListActionRemove = styled(TodoActionListAction)`
color: #FC5B5B;
`;

type TodoActionsListProps = {
  actions: TodoListActions
  hidden: boolean
  actionsListRef: React.RefObject<HTMLDivElement>
}

export default ({actions, hidden, actionsListRef} : TodoActionsListProps) => {
  const actionsClass = classnames({"todo-actions-list-hidden": hidden});

  function handleRemove(e: React.MouseEvent<HTMLElement>) {
    actions.remove();

    e.stopPropagation();
  }

  function handleEdit(e: React.MouseEvent<HTMLElement>) {
    actions.edit();

    e.stopPropagation();
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
}