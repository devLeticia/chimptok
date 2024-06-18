import React, { useState } from 'react'
import { ModalOverlay, ModalContent, CloseButton } from './styles'
import { XCircle } from 'phosphor-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void // Adjust the type of onClose to be a function that returns void
  children: React.ReactNode
}
export function Modal({ isOpen, onClose, children }: ModalProps) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <>
      {isOpen && <ModalOverlay onClick={onClose} />}
      <ModalContent isOpen={isOpen}>
        <CloseButton onClick={onClose}>
          <XCircle
            size={36}
            weight={isHovered ? 'duotone' : 'light'}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </CloseButton>
        {children}
      </ModalContent>
    </>
  )
}

export default Modal
