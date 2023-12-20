import React from 'react'
import { ButtonWrapper } from './styles'

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  disabled?: boolean
  color?: 'yellow' | 'blue' | 'dark'
  buttonType?: 'filled' | 'border' | 'flat'
}

export function Button({
  onClick,
  children,
  disabled = false,
  color = 'yellow',
  buttonType = 'filled',
}: ButtonProps) {
  return (
    <ButtonWrapper
      onClick={onClick}
      disabled={disabled}
      color={color}
      buttonType={buttonType}
    >
      {children}
    </ButtonWrapper>
  )
}
