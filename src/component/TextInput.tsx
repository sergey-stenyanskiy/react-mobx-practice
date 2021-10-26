import classnames from 'classnames'
import React from 'react'

import styled from 'styled-components'


const TextInputLabel = styled.label`
position: absolute;
  
left: 0;

font-size: 10px;
bottom: 24px;
transition: 0.15s ease-in;

color: #bababa;
`;

const TextInputInput = styled.input`
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

&:placeholder-shown ~ ${TextInputLabel} {
  font-size: 16px;
  bottom: 0px;

  cursor: text;
}

&:focus {
  outline: none;
  border-color: blue;
}

&:focus ~ ${TextInputLabel} {
  font-size: 10px;
  bottom: 24px;

  color: blue;
}
`;

const TextInput = styled.div`
position: relative;

font-size: 16px;
padding-top: 12px;
transition: 0.15s ease-in;

background: white;
`;

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
    <TextInput className={inputClass}>
      <TextInputInput 
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
      <TextInputLabel className="text-input-label" htmlFor={id}>{label}</TextInputLabel>
    </TextInput>
  )
}