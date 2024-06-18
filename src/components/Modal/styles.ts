import styled from 'styled-components'
interface ModalContentProps {
  isOpen: boolean
}
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
`

export const ModalContent = styled.div<ModalContentProps>`
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 9px;
  padding: 2rem 3rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 100;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`

export const CloseButton = styled.div`
  color: ${(props) => props.theme['gray-500']};
  border: none;
  cursor: pointer;
  position: absolute;
  top: 1rem; /* Adjust the top position as needed */
  right: 1rem; /* Adjust the right position as needed */
`
