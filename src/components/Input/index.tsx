import { InputWrapper, StyledInput, IconWrapper, ErrorMessage } from './styles'
import { InputHTMLAttributes, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  icon?: ReactNode
  errorMessage?: string
}

export function Input({
  placeholder,
  icon,
  errorMessage,
  ...props
}: InputProps) {
  return (
    <InputWrapper>
      <StyledInput placeholder={placeholder} {...props} />
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputWrapper>
  )
}
