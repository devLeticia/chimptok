import {
  StyledInput,
  Label,
  IconWrapper,
  ErrorMessage,
  StyledValidatorIcon,
  InputWrapper,
  InputContainer,
} from './styles'
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  icon?: ReactNode
  errorMessage?: string | null | undefined
  isValid?: boolean
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, icon, errorMessage, isValid, label, ...props }, ref) => {
    return (
      <InputContainer>
        {label && <Label>{label}</Label>}
        <InputWrapper>
          <StyledInput placeholder={placeholder} ref={ref} {...props} />
          {icon && <IconWrapper>{icon}</IconWrapper>}
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          {isValid && <StyledValidatorIcon size={22} weight="fill" />}
        </InputWrapper>
      </InputContainer>
    )
  },
)
Input.displayName = 'Input'
