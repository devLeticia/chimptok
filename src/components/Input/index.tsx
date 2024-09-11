import {
  StyledInput,
  Label,
  IconWrapper,
  ErrorMessage,
  StyledValidatorIcon,
  InputWrapper,
  InputContainer,
  InputVisibility
} from './styles'
import { InputHTMLAttributes, ReactNode, forwardRef, useState } from 'react'
import { Eye, EyeSlash } from '@phosphor-icons/react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  icon?: ReactNode
  errorMessage?: string | null | undefined
  isValid?: boolean
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, icon, errorMessage, isValid, label, type, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible)
    }

    const inputType = type === 'password' && isPasswordVisible ? 'text' : type

    return (
      <InputContainer>
        {label && <Label>{label}</Label>}
        <InputWrapper>
          <StyledInput
            placeholder={placeholder}
            ref={ref}
            type={inputType}
            {...props}
          />
          {icon && <IconWrapper>{icon}</IconWrapper>}
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          {isValid && <StyledValidatorIcon size={22} weight="fill" />}
          {type === 'password' && (
            <InputVisibility onClick={togglePasswordVisibility}>
              {isPasswordVisible ? <Eye size={20} weight='duotone' color='gray'/> : <EyeSlash size={20} weight='duotone' color='gray' /> }
            </InputVisibility>
          )}
        </InputWrapper>
      </InputContainer>
    )
  },
)

Input.displayName = 'Input'