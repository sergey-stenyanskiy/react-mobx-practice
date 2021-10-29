import React from 'react'

import styled from 'styled-components'

export const TodoButton = React.memo(styled.button`
display: flex;
flex-direction: row;
align-items: center;
border: none;
outline: none;
padding: 0;
background: transparent;
cursor: pointer;
`);