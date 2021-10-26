import React from 'react'

import classnames from 'classnames'

import styled from 'styled-components'

const buttonPrimary: ButtonPrimaryColors = {
  red: "#EB5757",
  green: "#27AE60",
  blue: "#3C4FF4",
  white: "white",
  transparent: "transparent"
}

const buttonText: ButtonTextColors = {
  white: "white",
  black: "black"
}

const StyledButton = styled.button`
cursor: pointer;
font-family: "Poppins";
border: none;
outline: none;
display: flex;
flex-direction: row;
padding: 12px 20px;
border-radius: 20px;
`;


const StyledButtonVariant = styled(StyledButton)`
background: ${({primaryColor}: RoundedButtonProps) => buttonPrimary[primaryColor!]};
color: ${({textColor}: RoundedButtonProps) => buttonText[textColor!]};
`;

type RoundedButtonProps = {
  onClick?: (e: React.MouseEvent) => any
  label?: string
  primaryColor?: keyof ButtonPrimaryColors
  textColor?: keyof ButtonTextColors
  id?: string
  name?: string
  className?: string
}

export default ({
  onClick,
  id,
  name,
  label,
  className,
  primaryColor = "blue" as const,
  textColor = "white" as const
}: RoundedButtonProps) => {
  return (
    <StyledButtonVariant 
      type="button" 
      onClick={onClick} 
      id={id} 
      name={name}
      primaryColor={primaryColor}
      textColor={textColor}
      >
        {label}
    </StyledButtonVariant>
  )
}