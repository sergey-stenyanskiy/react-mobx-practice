import classnames from 'classnames'
import React from 'react'

type TextInputProps = {
  value?: string
  defaultValue?: string
  inputRef?: React.RefObject<HTMLInputElement>
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => any
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => any
  label: string
  name?: string
  id?: string
  className?: string
  required?: boolean
}

export default ({
  value,
  inputRef,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  label,
  name,
  id,
  className
}: TextInputProps) => {
  const inputClass = classnames(className, "text-input");
  
  return (
    <div className={inputClass}>
      <input 
        type="text" 
        name={name} 
        className="text-input-input" 
        id={id} 
        defaultValue={defaultValue} 
        value={value} 
        ref={inputRef} 
        onChange={onChange} 
        onFocus={onFocus} 
        onBlur={onBlur} 
        placeholder={"label"}/>
      <label className="text-input-label" htmlFor={id}>{label}</label>
    </div>
  )
}