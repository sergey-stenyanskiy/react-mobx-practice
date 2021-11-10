import React from 'react'

import { ButtonStyleVariants } from '../../types/styles.types'

import { StyledButtonVariant } from './RoundedButton.styles'

type RoundedButtonProps = {
  onClick?: (e: React.MouseEvent) => any
  label?: string
  id?: string
  name?: string
  className?: string
  buttonStyle?: ButtonStyleVariants
}

export default React.memo(({
  onClick,
  id,
  name,
  label,
  buttonStyle = 'primary' as const
}: RoundedButtonProps) => (
  <StyledButtonVariant
    type="button"
    onClick={onClick}
    id={id}
    name={name}
    buttonStyle={buttonStyle}
  >
    {label}
  </StyledButtonVariant>
))