import React from "react"
import { InputWrapper, InputField } from "./styled"

type InputProps = {
  className?: string | undefined
  type: string
  name: string
  placeholder: string
  value: string | number | string[]
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  autoComplete?: string
}

const Input: React.FunctionComponent<InputProps> = ({
  className,
  type,
  name,
  placeholder,
  value,
  handleChange,
  handleKeyDown,
  autoComplete,
}: InputProps) => {
  return (
    <InputWrapper>
      <InputField
        className={className}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoComplete={autoComplete}
        required
      />
    </InputWrapper>
  )
}

export default Input
