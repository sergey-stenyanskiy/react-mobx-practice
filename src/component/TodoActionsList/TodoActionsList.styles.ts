import React from 'react'

import styled from 'styled-components'

export const TodoActionsList = styled.div`
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

export const TodoActionListAction = React.memo(styled.div`
display: flex;
flex-direction: row;
justify-content: start;
align-items: center;
cursor: pointer;
`);

export const TodoListActionRemove = React.memo(styled(TodoActionListAction)`
color: #FC5B5B;
`);
