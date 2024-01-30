import React, { ButtonHTMLAttributes } from 'react'
import { ButtonWrapper } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  color?: 'yellow' | 'blue' | 'dark'
  buttonType?: 'filled' | 'border' | 'flat'
  fullWidth?: boolean
}

export function Button({
  children,
  disabled = false,
  color = 'yellow',
  buttonType = 'filled',
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <ButtonWrapper
      fullWidth={fullWidth}
      disabled={disabled}
      color={color}
      buttonType={buttonType}
      {...props}
    >
      {children}
    </ButtonWrapper>
  )
}
