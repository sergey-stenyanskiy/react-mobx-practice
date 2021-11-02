import React, { ReactNode } from 'react'

import { HTMLButtonType } from '../../types/styles.types';

import { TodoButton } from './TodoButton.styles'

type TodoButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  id?: string
  name?: string
  className?: string
  type?: HTMLButtonType
  children?: ReactNode[] | ReactNode
  buttonRef?: React.RefObject<HTMLButtonElement>
}

export default React.memo(({
  onClick,
  type,
  id,
  name,
  className,
  children,
  buttonRef
}: TodoButtonProps) => (
  <TodoButton
    onClick={onClick}
    type={type}
    id={id}
    name={name}
    className={className}
    ref={buttonRef}
  >
    {children}
  </TodoButton>
))