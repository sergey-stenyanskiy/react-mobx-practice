import React from 'react'

import styled from 'styled-components'

export const TextInputLabel = React.memo(styled.label`
position: absolute;
  
left: 0;

font-size: 10px;
bottom: 24px;
transition: 0.15s ease-in;

color: #bababa;
`);

export const TextInputInput = React.memo(styled.input`
font-size: inherit;

border: none;
outline: none;
width: 120px;
overflow: hidden;

padding: 0;

transition: border-color 0.15s ease-in;
border-bottom: 2px solid #bababa;

width: 100%;
display: block;

&::placeholder {
  color: transparent;
}

&:placeholder-shown ~ ${TextInputLabel.type} {
  font-size: 16px;
  bottom: 0px;

  cursor: text;
}

&:focus {
  outline: none;
  border-color: blue;
}

&:focus ~ ${TextInputLabel.type} {
  font-size: 10px;
  bottom: 24px;

  color: blue;
}
`);

export const TextInput = React.memo(styled.div`
position: relative;

font-size: 16px;
padding-top: 12px;
transition: 0.15s ease-in;

background: white;
`);
