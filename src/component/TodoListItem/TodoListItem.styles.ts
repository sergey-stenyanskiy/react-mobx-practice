import React from 'react'

import TodoButton from "../TodoButton/TodoButton";
import TextInput from "../TextInput/TextInput";

import styled from 'styled-components'

export const TodoButtonStatus = styled(TodoButton)`
width: 120px;
`;

export const TodoButtonActions = styled(TodoButton)`
position: relative;

width: 24px;
height: 24px;

display: flex;
flex-direction: row;
justify-content: center;

border-radius: 4px;
transition: background-color, 0.1s ease-in;
cursor: pointer;

&:hover {
  background: #F6F6F6;
}
`;

export const TodoItemContent = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const TodoItemLeading = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export const TodoItemTrailing = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export const TodoItem = styled.div`
margin-bottom: 12px;
border-radius: 6px;

padding: 8px 16px;
background: white;

box-shadow: 0px 0px 4px 8px rgba(0,0,0,0.008);

&:last-child {
  margin-bottom: 0;
}
`;

export const TodoInputName = React.memo(styled(TextInput)`
width: 100px;
`);

export const TodoInputText = React.memo(styled(TextInput)`
width: 200px;
`);