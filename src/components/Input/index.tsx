import {
  InputWrapper,
  StyledInput,
  IconWrapper,
  ErrorMessage,
  StyledValidatorIcon,
} from './styles'
import { InputHTMLAttributes, ReactNode } from 'react'
import { CheckCircle, XCircle } from 'phosphor-react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  icon?: ReactNode
  errorMessage?: string
  validator: true
}

const getValidatorIcon = (validator: boolean) => {
  return validator ? (
    <CheckCircle size={20} weight="fill" />
  ) : (
    <XCircle size={20} weight="fill" />
  )
}

export function Input({
  placeholder,
  icon,
  errorMessage,
  validator,
  ...props
}: InputProps) {
  return (
    <InputWrapper>
      <StyledInput placeholder={placeholder} {...props} />
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {
        <StyledValidatorIcon validator={validator}>
          {getValidatorIcon(validator)}
        </StyledValidatorIcon>
      }
    </InputWrapper>
  )
}
