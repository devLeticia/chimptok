import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from './styles'

export const toast = {
  show(message: string, type: ToastType, duration = 3000) {
    const toastElement = document.createElement('div')
    document.body.appendChild(toastElement)

    ReactDOM.render(
      <Toast message={message} type={type} duration={duration} onClose={() => {
        ReactDOM.unmountComponentAtNode(toastElement)
        toastElement.remove()
      }} />,
      toastElement
    )
  },
}

type ToastType = 'success' | 'warning' | 'danger' | 'neutral'

interface ToastProps {
  message: string
  type: ToastType
  duration: number
  onClose: () => void
}

function Toast({ message, type, duration, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false)
      onClose()  // Trigger the removal of the Toast from DOM after it's not visible
    }, duration)

    return () => {
      clearTimeout(timeout)
    }
  }, [duration, onClose])

  return isVisible ? (
    <ToastContainer type={type}>{message}</ToastContainer>
  ) : null
}
