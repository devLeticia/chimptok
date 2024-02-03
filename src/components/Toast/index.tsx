import React, { useState, useEffect } from 'react'
import { ToastContainer } from './styles'

interface ToastProps {
  message: string
  type: 'success' | 'warning' | 'danger' | 'neutral'
  duration?: number
}

export function Toast({ message, type, duration = 5000 }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timeout)
  }, [duration])

  return isVisible ? (
    <ToastContainer type={type}>{message}</ToastContainer>
  ) : null
}
