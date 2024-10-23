import { Button } from '../Button'
import {
  DialogOverlay,
  DialogBox,
  ButtonContainer,
  DialogTitle,
  DialogText,
} from './styles'

interface ConfirmDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  children?: React.ReactNode
  confirmationText: string
  cancelText: string
  title?: string
  text?: string
}

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  children,
  confirmationText,
  cancelText,
  title,
  text,
}: ConfirmDialogProps) {
  return isOpen ? (
    <DialogOverlay>
      <DialogBox>
        <DialogTitle>{title}</DialogTitle>
        <DialogText>{text}</DialogText>
        {children}
        <ButtonContainer>
          <Button onClick={onClose}>{cancelText}</Button>
          <Button onClick={onConfirm}>{confirmationText}</Button>
        </ButtonContainer>
      </DialogBox>
    </DialogOverlay>
  ) : null
}
