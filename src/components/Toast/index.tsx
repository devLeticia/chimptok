import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from './styles'

export const toast = {
  show: (
    message: string,
    type: 'success' | 'warning' | 'danger' | 'neutral',
    duration = 3000,
  ) => {
    const toastElement = document.createElement('div')
    document.body.appendChild(toastElement)
    ReactDOM.render(
      <Toast message={message} type={type} duration={duration} />,
      toastElement,
    )

    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(toastElement)
      toastElement.remove()
    }, duration)
  },
}

interface ToastProps {
  message: string
  type: 'success' | 'warning' | 'danger' | 'neutral'
  duration: number
}

function Toast({ message, type, duration }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => {
      clearTimeout(timeout)
    }
  }, [duration])

  return isVisible ? (
    <ToastContainer type={type}>{message}</ToastContainer>
  ) : null
}
