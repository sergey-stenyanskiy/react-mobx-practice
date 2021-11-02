import React from 'react'

import classnames from 'classnames'

import { TextInput, TextInputInput, TextInputLabel } from './TextInput.styles'

type TextInputProps = {
  value?: string
  defaultValue?: string
  inputRef?: React.RefObject<HTMLInputElement>
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  label: string
  name?: string
  id?: string
  className?: string
  required?: boolean
}

export default React.memo(({
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
  const inputClass = classnames(className, 'text-input');

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
        placeholder="label"
      />
      <TextInputLabel className="text-input-label" htmlFor={id}>{label}</TextInputLabel>
    </TextInput>
  );
})