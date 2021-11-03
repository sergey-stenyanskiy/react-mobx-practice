import React from 'react'
import styled from 'styled-components'

export const FormGroup = styled.div`
display: flex;
flex-direction: row;
align-items: center;

margin-bottom: 16px;

padding: 8px 16px;
background: white;
border-radius: 6px;
`;

export const AddTodoForm = styled.form`
& h4 {
  font-weight: normal;
  margin: 16px 0;
}

& #add-todo-todo-name {
  width: 100px;
}

& #add-todo-todo-text {
  width: 200px;
}
`;