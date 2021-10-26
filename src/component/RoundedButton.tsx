import React from 'react'

import classnames from 'classnames'

type RoundedButtonProps = {
  onClick: (e: React.MouseEvent) => any
  label?: string
  primaryColor?: ButtonPrimaryColors
  textColor?: ButtonTextColors
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
  const buttonClass = classnames("todo-rounded-button", className, `rounded-button-primary-${primaryColor}`, `rounded-button-text-${textColor}`) 
  
  return (
    <button 
      type="button" 
      onClick={onClick} 
      id={id} 
      name={name} 
      className={buttonClass}>
        {label}
    </button>
  )
}