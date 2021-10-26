import React, { ReactNode } from 'react'

import styled from 'styled-components'

const Button = styled.button`
display: flex;
flex-direction: row;
align-items: center;
border: none;
outline: none;
padding: 0;
background: transparent;
cursor: pointer;
`;

type TodoButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  id?: string
  name?: string
  className?: string
  type?: HTMLButtonType
  children?: ReactNode[] | ReactNode
  buttonRef?: React.RefObject<HTMLButtonElement>
}


export default ({
  onClick,
  type,
  id,
  name,
  className,
  children,
  buttonRef
}: TodoButtonProps) => {
  return (
    <Button
      onClick={onClick} 
      type={type}
      id={id}
      name={name}
      className={className}
      ref={buttonRef}
    >
      {children}
    </Button>
  );
}